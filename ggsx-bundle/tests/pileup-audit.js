// Harness: runs a bundle through the real loader on a Wix-like page, then simulates in-site page changes
// (Wix swaps the page DIV inside #SITE_PAGES and re-runs Body-end custom code) and reports what piles up.
// usage: node tests/pileup-audit.js <bundle.js> <bundle.js.gz> <loader.html> [navs]
const fs = require('fs');
const { chromium } = require('playwright');
const [bundlePath, gzPath, loaderPath, navsArg] = process.argv.slice(2);
const NAVS = +(navsArg || 4);
const plain = fs.readFileSync(bundlePath);
const gz = fs.readFileSync(gzPath);
let loaderHtml = fs.readFileSync(loaderPath, 'utf8');
let loaderJs = /<script>([\s\S]*?)<\/script>/.exec(loaderHtml)[1];
loaderJs = loaderJs.replace(/var GZ = '[^']+'/, "var GZ = 'http://ggsx.test/__bundle.gz'").replace(/var PLAIN = '[^']+'/, "var PLAIN = 'http://ggsx.test/__bundle.js'");
// section line map
const lines = plain.toString('utf8').split('\n');
const sections = [];
lines.forEach((l, i) => { const m = /^\/\* ===== (.+?) \(([^,]+), rev/.exec(l); if (m) sections.push({ line: i + 1, name: m[1] }); });
function sectionOf(line) { let s = '(prelude)'; for (const x of sections) { if (x.line <= line) s = x.name; else break; } return s; }

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
    if (u === 'http://ggsx.test/__bundle.gz') return route.fulfill({ status: 200, contentType: 'text/plain', body: gz, headers: { 'access-control-allow-origin': '*' } });
    if (u === 'http://ggsx.test/__bundle.js') return route.fulfill({ status: 200, contentType: 'text/plain', body: plain });
    if (u.startsWith('http://ggsx.test/')) {
      if (route.request().resourceType() === 'document') return route.fulfill({ status: 200, contentType: 'text/html', body: HTML });
      return route.fulfill({ status: 404, body: '' });
    }
    return route.abort();   // keep the harness offline: no sheet / Wix calls
  });
  await page.addInitScript(() => {
    const R = window.__reg = { mo: [], ev: [], iv: [] };
    const st = () => (new Error().stack || '').split('\n').filter(l => /ggsx-body\.js:\d+/.test(l)).map(l => +/ggsx-body\.js:(\d+)/.exec(l)[1])[0] || 0;
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
  await page.goto('http://ggsx.test/');
  const runLoader = () => page.evaluate(code => { const s = document.createElement('script'); s.text = code; document.body.appendChild(s); }, loaderJs);
  await runLoader();
  await page.waitForTimeout(2500);
  const snap = async label => {
    const d = await page.evaluate(() => {
      const kids = {}; [...document.body.children].forEach(c => { const k = (c.id || (typeof c.className === 'string' && c.className.split(' ')[0]) || c.tagName); kids[k] = (kids[k] || 0) + 1; });
      const sp = document.getElementById('SITE_PAGES');
      return {
        runs: (window.__GGSX_BUNDLE || {}).runs, from: (window.__GGSX_BUNDLE || {}).from,
        reg: { mo: window.__reg.mo.filter(o => o.__on && o.__line).map(o => String(o.__line)), ev: window.__reg.ev.filter(x => x.line).map(x => x.line + '|' + x.type), iv: window.__reg.iv.filter(x => x.line).map(x => x.line + '|' + x.ms) },
        kids, scripts: document.scripts.length, scriptKB: Math.round([...document.scripts].reduce((a, s) => a + s.text.length, 0) / 1024),
        styles: document.querySelectorAll('style').length,
        spKids: [...sp.children].map(c => c.tagName + '#' + c.id),
        dup: ['.gg-top', '.gg-tabs', '.gg-search', '.gg-more', '.ggsx-hs', '.ggsx-hb', '#gg-sitemap'].map(s => s + ':' + document.querySelectorAll(s).length).join(' ')
      };
    });
    return Object.assign({ label }, d);
  };
  const snaps = [await snap('first page')];
  const paths = ['/pricing', '/shop-now', '/restaurants', '/villa-stocking', '/blog', '/pharmacy'];
  for (let i = 0; i < NAVS; i++) {
    const p = paths[i % paths.length];
    await page.evaluate(p => { history.pushState({}, '', p); const sp = document.getElementById('SITE_PAGES'); const old = [...sp.children].find(c => /^pg_/.test(c.id)); old && old.remove(); sp.appendChild(window.__mkPage(p.replace(/\W/g, ''))); }, p);
    await page.waitForTimeout(150);
    await runLoader();
    await page.waitForTimeout(1500);
    snaps.push(await snap('after page change ' + (i + 1) + ' (' + p + ')'));
  }
  const tally = arr => { const t = {}; arr.forEach(x => { const line = +String(x).split('|')[0]; const k = sectionOf(line).replace('GrocerGoSx ', '') + (String(x).includes('|') ? ' [' + String(x).split('|')[1] + ']' : ''); t[k] = (t[k] || 0) + 1; }); return t; };
  console.log('sections:', sections.length);
  for (const s of snaps) console.log(`${s.label}: runs=${s.runs} from=${s.from} scripts=${s.scripts} (${s.scriptKB} KB) styles=${s.styles} | ${s.dup} | SITE_PAGES=${s.spKids.join(',')} | ACTIVE observers=${s.reg.mo.length} listeners=${s.reg.ev.length} intervals=${s.reg.iv.length}`);
  const a = tally(snaps[0].reg.mo), b = tally(snaps[snaps.length - 1].reg.mo);
  const grow = (x, y) => Object.keys(y).filter(k => (y[k] || 0) > (x[k] || 0)).map(k => k + ': ' + (x[k] || 0) + ' -> ' + y[k]);
  console.log('--- active observers that grew:', JSON.stringify(grow(a, b)));
  console.log('--- active listeners that grew:', JSON.stringify(grow(tally(snaps[0].reg.ev), tally(snaps[snaps.length - 1].reg.ev))));
  console.log('--- active intervals that grew:', JSON.stringify(grow(tally(snaps[0].reg.iv), tally(snaps[snaps.length - 1].reg.iv))));
  console.log('--- body children at end:', JSON.stringify(snaps[snaps.length - 1].kids));
  console.log('--- errors:', errors.length ? '\n' + [...new Set(errors)].slice(0, 15).join('\n') : 'none');
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
