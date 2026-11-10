// Opens the grocery checkout after several simulated page changes (real Shop Now data from the Google Sheet, nothing is sent)
// and counts checkout windows and "If unavailable" fields; v1.1 showed one window per page view, v1.2 shows one.
// usage: node tests/checkout-after-page-changes.js dist/ggsx-body.js dist/ggsx-body.js.gz loader.html   (needs Playwright)
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
    return route.abort();   // no Wix API calls, nothing is sent
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
  await page.goto('http://ggsx.test/');
  const runLoader = () => page.evaluate(code => { const s = document.createElement('script'); s.text = code; document.body.appendChild(s); }, loaderJs);
  const nav = async p => {
    await page.evaluate(p => { history.pushState({}, '', p); const sp = document.getElementById('SITE_PAGES'); const old = [...sp.children].find(c => /^pg_/.test(c.id)); old && old.remove(); sp.appendChild(window.__mkPage(p.replace(/\W/g, ''))); }, p);
    await page.waitForTimeout(150); await runLoader(); await page.waitForTimeout(1200);
  };
  const count = label => page.evaluate(label => {
    const vis = e => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && getComputedStyle(e).display !== 'none' && getComputedStyle(e).visibility !== 'hidden'; };
    const wraps = [...document.querySelectorAll('.gc-wrap')];
    return label + ': runs=' + window.__GGSX_BUNDLE.runs + ' gc-wrap=' + wraps.length + ' open=' + wraps.filter(w => w.classList.contains('open')).length +
      ' subs-per-form=' + JSON.stringify(wraps.map(w => w.querySelectorAll('select[name="subs"]').length)) +
      ' per-item=' + document.querySelectorAll('.gc-pi').length + ' first-inputs=' + document.querySelectorAll('input[name="first"]').length +
      ' place-order=' + [...document.querySelectorAll('button')].filter(b => /place order|send/i.test(b.textContent)).length;
  }, label);
  await runLoader(); await page.waitForTimeout(2500);
  await nav('/pricing'); await nav('/restaurants'); await nav('/shop-now');
  let ok = false;
  for (let i = 0; i < 40 && !ok; i++) { await page.waitForTimeout(500); ok = await page.evaluate(() => [...document.querySelectorAll('#ggsx-shop button')].some(b => /^add$/i.test(b.textContent.trim()))); }
  console.log('shop rendered with products:', ok);
  if (ok) {
    await page.evaluate(() => [...document.querySelectorAll('#ggsx-shop button')].find(b => /^add$/i.test(b.textContent.trim())).click());
    await page.waitForTimeout(800);
    const clickCheckout = () => page.evaluate(() => { const b = [...document.querySelectorAll('#ggsx-shop button')].find(b => /^checkout$/i.test(b.textContent.trim())); if (b) b.click(); return !!b; });
    console.log('checkout button found:', await clickCheckout());
    await page.waitForTimeout(1500);
    console.log(await count('after 3 page changes, first checkout'));
    await page.evaluate(() => { document.querySelectorAll('.gc-wrap.open .gc-x').forEach(x => x.click()); });
    await page.waitForTimeout(500);
    await nav('/pricing'); await nav('/shop-now');
    for (let i = 0; i < 30; i++) { await page.waitForTimeout(500); if (await page.evaluate(() => [...document.querySelectorAll('#ggsx-shop button')].some(b => /^checkout$/i.test(b.textContent.trim())))) break; }
    console.log('checkout button found again:', await clickCheckout());
    await page.waitForTimeout(1500);
    console.log(await count('after 2 more page changes, second checkout'));
    await page.screenshot({ path: process.env.SHOT || '/tmp/checkout.png' });
  }
  console.log('errors:', errors.filter(e => !/Failed to load resource/.test(e)).slice(0, 10).join('\n') || 'none');
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
