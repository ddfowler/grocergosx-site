// CPU cost of each bundle module on a phone-sized Wix-like page with the CPU slowed 4x (like PageSpeed's mobile test).
// Profiles the first 6 s after the loader runs and adds up the time spent in each module's code (sync run + its later callbacks).
const fs = require('fs');
const { chromium } = require('playwright');
const L = require('./lib');
// usage: node tests/perf-modules.js <dist folder | bundle.js bundle.js.gz> <loader.html> [paths]
let args = process.argv.slice(2), files, bodies = {};
if (fs.statSync(args[0]).isDirectory()) { const d = L.distFiles(args[0], 'http://ggsx.test'); files = d.files; bodies = d.bodies; args = [null, null].concat(args.slice(1)); }
else { files = { body: ['http://ggsx.test/__bundle.gz', 'http://ggsx.test/__bundle.js'] }; bodies = { '/__bundle.gz': fs.readFileSync(args[1]), '/__bundle.js': fs.readFileSync(args[0]) }; }
const [, , loaderPath, pathsArg] = args;
const loaderJs = L.loaderJs(loaderPath, files);
const sections = [];
for (const k in bodies) if (/\.js$/.test(k)) bodies[k].toString('utf8').split('\n').forEach((l, i) => { const m = /^\/\* ===== (.+?) \(([^,]+), rev/.exec(l); if (m) sections.push({ file: k.replace(/^\/__f\//, '').replace(/^\/__bundle/, 'body').replace(/\.js$/, ''), line: i, name: m[1] }); });
function sectionOf(file, line) { let s = '(prelude)'; for (const x of sections) { if (x.file !== file) continue; if (x.line <= line) s = x.name; else break; } return s; }
const HTML = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>harness</title></head><body>
<div id="SITE_CONTAINER"><div id="main_MF"><div id="site-root"><div id="masterPage"><div id="SITE_PAGES"></div></div></div></div></div>
<script>
window.__mkPage = function (name) {
  var d = document.createElement('div'); d.id = 'pg_' + name;
  d.innerHTML = '<header><div class="max-width-container"><nav><ul><li><a href="/shop-now">Shop Now</a></li><li><a href="/pricing">Pricing</a></li><li><a href="/restaurants">Restaurants</a></li></ul></nav><div class="search-button">s</div></div></header>' +
    '<main id="PAGE_SECTIONSx"><section><h1>' + name + '</h1><p>content</p></section><section><p>second</p></section></main><footer><div style="background:#222;color:#eee;width:100%"><p>Footer text</p></div></footer>';
  return d;
};
document.getElementById('SITE_PAGES').appendChild(window.__mkPage(location.pathname.replace(/\\W/g, '') || 'home'));
</script></body></html>`;

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 412, height: 823 }, deviceScaleFactor: 1.75, isMobile: true, hasTouch: true,
    userAgent: 'Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36' });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message.slice(0, 160)));
  await page.route('**/*', route => {
    const u = route.request().url();
    if (/grocergosx\.com/i.test(u)) return route.abort();
    if (u.startsWith('http://ggsx.test/__') && bodies[new URL(u).pathname]) return route.fulfill({ status: 200, contentType: 'text/plain', body: bodies[new URL(u).pathname], headers: { 'access-control-allow-origin': '*' } });
    if (u.startsWith('http://ggsx.test/')) {
      if (route.request().resourceType() === 'document') return route.fulfill({ status: 200, contentType: 'text/html', body: HTML });
      return route.fulfill({ status: 404, body: '' });
    }
    if (/^https:\/\/(docs\.google\.com|[a-z0-9-]+\.googleusercontent\.com|static\.wixstatic\.com)\//.test(u)) return route.continue();
    return route.abort();
  });
  await page.addInitScript(() => {
    Object.defineProperty(EventTarget.prototype, 'addEventListener', { writable: false, configurable: false });
    Object.defineProperty(EventTarget.prototype, 'removeEventListener', { writable: false, configurable: false });
    Object.defineProperty(window, 'setInterval', { writable: false, configurable: false });
  });
  const cdp = await ctx.newCDPSession(page);
  const paths = (pathsArg || '/,/shop-now,/pricing,/restaurants').split(',');
  const totals = {};
  for (const p of paths) {
    await page.goto('http://ggsx.test' + p);
    // warm the HTTP cache of the Google Sheet reads once, so the profile measures CPU, not the network
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
    await cdp.send('Profiler.enable');
    await cdp.send('Profiler.setSamplingInterval', { interval: 200 });
    await cdp.send('Profiler.start');
    const t = await page.evaluate(code => { const t0 = performance.now(); const s = document.createElement('script'); s.text = code; document.body.appendChild(s); return performance.now() - t0; }, loaderJs);
    await page.waitForTimeout(+(process.env.WAIT || 6000));
    const { profile } = await cdp.send('Profiler.stop');
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: 1 });
    const runSync = await page.evaluate(() => (window.__GGSX_BUNDLE || {}).t || null);
    // self time per node
    const dt = {}; const ids = profile.samples; const deltas = profile.timeDeltas;
    for (let i = 0; i < ids.length; i++) dt[ids[i]] = (dt[ids[i]] || 0) + (deltas[i] || 0) / 1000;
    const byMod = {}; let ours = 0, other = {};
    for (const n of profile.nodes) {
      const ms = dt[n.id] || 0; if (!ms) continue;
      const cf = n.callFrame;
      const fm = /ggsx-([a-z]+)\.js/.exec(cf.url);
      if (fm) { const s = sectionOf(fm[1], cf.lineNumber); byMod[s] = (byMod[s] || 0) + ms; ours += ms; }
      else { const k = cf.url ? 'url:' + cf.url.slice(0, 40) : cf.functionName || '(anon)'; other[k] = (other[k] || 0) + ms; }
    }
    const top = Object.entries(byMod).sort((a, b) => b[1] - a[1]);
    console.log(`\n${p}: bundle code ${ours.toFixed(0)} ms (4x CPU)  · loader call ${t.toFixed(0)} ms · elements in page ${await page.evaluate(() => document.getElementsByTagName('*').length)}`);
    console.log('  other:', Object.entries(other).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([k, v]) => k + ' ' + v.toFixed(0)).join(' · '));
    top.slice(0, 18).forEach(([k, v]) => console.log('   ', v.toFixed(0).padStart(5), 'ms ', k));
    for (const [k, v] of top) totals[k] = (totals[k] || 0) + v;
  }
  console.log('\nerrors:', [...new Set(errors)].slice(0, 8).join('\n') || 'none');
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
