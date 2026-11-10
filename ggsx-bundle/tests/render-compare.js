// Renders 15 page types in a Wix-like page, once on a fresh load and once after an in-site page change, and prints a hash of
// the page text for each, so two builds can be compared (a fresh render should not change between builds).
// usage: node tests/render-compare.js dist/ggsx-body.js dist/ggsx-body.js.gz loader.html   (needs Playwright; PLAIN=1 tests the plain-file path)
const fs = require('fs');
const { chromium } = require('playwright');
// v1.5: the first argument can also be a dist folder with several files (ggsx-body + groups): node <test> dist loader.html [navs]
const L = require('./lib');
let args = process.argv.slice(2), files, bodies = {};
if (fs.statSync(args[0]).isDirectory()) { const d = L.distFiles(args[0], 'http://ggsx.test'); files = d.files; bodies = d.bodies; args = [null, null].concat(args.slice(1)); }
else { files = { body: ['http://ggsx.test/__bundle.gz', 'http://ggsx.test/__bundle.js'] }; bodies = { '/__bundle.gz': fs.readFileSync(args[1]), '/__bundle.js': fs.readFileSync(args[0]) }; }
const [, , loaderPath, navsArg] = args;
const NAVS = +(navsArg || 4);
const loaderJs = L.loaderJs(loaderPath, files);
// section line map, per file: "body:123" -> module name
const sections = [];
for (const k in bodies) if (/\.js$/.test(k)) bodies[k].toString('utf8').split('\n').forEach((l, i) => { const m = /^\/\* ===== (.+?) \(([^,]+), rev/.exec(l); if (m) sections.push({ file: k.replace(/^\/__f\//, '').replace(/^\/__bundle/, 'body').replace(/\.js$/, ''), line: i + 1, name: m[1] }); });
function sectionOf(key) { const p = String(key).split(':'), f = p.length > 1 ? p[0] : 'body', line = +(p.length > 1 ? p[1] : p[0]); let s = '(prelude)'; for (const x of sections) { if (x.file !== f) continue; if (x.line <= line) s = x.name; else break; } return s; }

const HTML = `<!doctype html><html><head><meta charset="utf-8"><title>harness</title></head><body>
<div id="SITE_CONTAINER"><div id="main_MF"><div id="site-root"><div id="masterPage"><div id="SITE_PAGES"></div></div></div></div></div>
<script>
window.__mkPage = function (name) {
  var d = document.createElement('div'); d.id = 'pg_' + name;
  d.innerHTML = '<header><div class="max-width-container"><nav><ul><li><a href="/shop-now">Shop Now</a></li><li><a href="/pricing">Pricing</a></li><li><a href="/restaurants">Restaurants</a></li></ul></nav><div class="search-button">s</div></div></header>' +
    '<main><section><h1>' + name + '</h1><p>content</p></section><section><p>second</p></section></main><footer><div style="background:#222;color:#eee;width:100%"><p>Footer text</p></div></footer>';
  return d;
};
document.getElementById('SITE_PAGES').appendChild(window.__mkPage('home'));
</script></body></html>`;

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message.slice(0, 160)));
  page.on('console', m => { if (m.type() === 'error' || /GGSX/.test(m.text())) errors.push(m.type() + ': ' + m.text().slice(0, 160)); });
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
    const R = window.__reg = { mo: [], ev: [], iv: [] };
    const st = () => (new Error().stack || '').split('\n').filter(l => /ggsx-[a-z]+\.js:\d+/.test(l)).map(l => { const m = /ggsx-([a-z]+)\.js:(\d+)/.exec(l); return m[1] + ':' + m[2]; })[0] || 0;
    const tracked = t => t === window || t === document || t === document.documentElement || (document.body && t === document.body);
    const OM = window.MutationObserver, obs = OM.prototype.observe, dis = OM.prototype.disconnect;
    window.MutationObserver = function (cb) { const o = new OM(cb); o.__line = st(); o.__on = false; R.mo.push(o); return o; };
    window.MutationObserver.prototype = OM.prototype;
    OM.prototype.observe = function () { this.__on = true; return obs.apply(this, arguments); };
    OM.prototype.disconnect = function () { this.__on = false; return dis.apply(this, arguments); };
    const add = EventTarget.prototype.addEventListener, rem = EventTarget.prototype.removeEventListener;
    const cap = o => (o === true || (o && o.capture)) ? 1 : 0;
    EventTarget.prototype.addEventListener = function (t, f, o) {
      if (f && tracked(this) && !R.ev.some(x => x.t === this && x.type === t && x.f === f && x.c === cap(o))) R.ev.push({ t: this, type: t, f, c: cap(o), line: st() });
      return add.call(this, t, f, o);
    };
    EventTarget.prototype.removeEventListener = function (t, f, o) {
      const i = R.ev.findIndex(x => x.t === this && x.type === t && x.f === f && x.c === cap(o));
      if (i >= 0) R.ev.splice(i, 1);
      return rem.call(this, t, f, o);
    };
    const si = window.setInterval, ci = window.clearInterval;
    window.setInterval = function (f, ms) { const h = si.apply(this, arguments); R.iv.push({ h, line: st(), ms }); return h; };
    window.clearInterval = function (h) { const i = R.iv.findIndex(x => x.h === h); if (i >= 0) R.iv.splice(i, 1); return ci.apply(this, arguments); };
    // like the live Wix site: these are read-only there
    Object.defineProperty(EventTarget.prototype, 'addEventListener', { writable: false, configurable: false });
    Object.defineProperty(EventTarget.prototype, 'removeEventListener', { writable: false, configurable: false });
    Object.defineProperty(window, 'setInterval', { writable: false, configurable: false });
  });
  const runLoader = () => page.evaluate(code => { const s = document.createElement('script'); s.text = code; document.body.appendChild(s); }, loaderJs);
  if (process.env.PLAIN === '1') await page.addInitScript(() => { try { delete window.DecompressionStream; window.DecompressionStream = undefined; } catch (e) {} });
  const sig = () => page.evaluate(() => {
    const sp = document.getElementById('SITE_PAGES');
    const txt = (sp.innerText || '').replace(/\s+/g, ' ').replace(/\d{1,2}:\d{2}\s*(AM|PM)?/gi, 'T').trim();
    let h = 5381; for (let i = 0; i < txt.length; i++) h = ((h << 5) + h + txt.charCodeAt(i)) | 0;
    return { runs: window.__GGSX_BUNDLE.runs, from: window.__GGSX_BUNDLE.from, len: txt.length, hash: (h >>> 0).toString(36), ggsx: sp.querySelectorAll('[id^="ggsx"],[class*="ggsx"],[class*="gg-"]').length, h1: [...sp.querySelectorAll('h1')].map(x => x.textContent.trim().slice(0, 30)).join(' / ') };
  });
  const paths = (process.env.PATHS || '/,/pricing,/villa-stocking,/stocking-packages,/yacht-provisioning,/partners,/service-area,/services-hub,/concierge-services,/restaurants,/pharmacy,/laundry,/errands,/how-it-works,/shop-now').split(',');
  for (const p of paths) {
    await page.goto('http://ggsx.test' + p);
    await page.evaluate(() => { const sp = document.getElementById('SITE_PAGES'); sp.innerHTML = ''; sp.appendChild(window.__mkPage(location.pathname.replace(/\W/g, '') || 'home')); });
    await runLoader(); await page.waitForTimeout(+(process.env.WAIT || 4000));
    const fresh = await sig();
    // same page reached by an in-site page change from the home page
    await page.goto('http://ggsx.test/');
    await runLoader(); await page.waitForTimeout(2500);
    await page.evaluate(p => { history.pushState({}, '', p); const sp = document.getElementById('SITE_PAGES'); const old = [...sp.children].find(c => /^pg_/.test(c.id)); old && old.remove(); sp.appendChild(window.__mkPage(p.replace(/\W/g, '') || 'home')); }, p);
    await page.waitForTimeout(150); await runLoader(); await page.waitForTimeout(+(process.env.WAIT || 4000));
    const viaNav = await sig();
    console.log(p.padEnd(20), 'fresh:', JSON.stringify(fresh), '| via page change:', JSON.stringify(viaNav), fresh.hash === viaNav.hash ? 'SAME' : 'DIFF');
  }
  console.log('errors:', [...new Set(errors.filter(e => !/Failed to load resource/.test(e)))].slice(0, 10).join('\n') || 'none');
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
