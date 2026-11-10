// Speed check of the home page, old build against new build, on a Wix-like page that Wix-style script draws after a delay (like the live
// site, whose page content is drawn by Wix's own code), with the real head snippets (First Paint), the Splash, the loader and the bundle.
// Phone: 412x823, CPU 4x slower, 1.6 Mbps / 150 ms network (like PageSpeed's mobile test). Prints CLS (largest 5-s window), every layout
// shift with what moved, LCP (time, element), FCP and blocking time of long tasks, and saves screenshots to tests/shots-speed/.
// usage: node tests/speed-check.js [mobile|desktop] [old|new|both]      env: SECS=14 (how long to watch), PATH_=/ (page)
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const L = require('./lib');
const R = L.ROOT;
const ORIGIN = 'http://ggsx.test';
const form = process.argv[2] || 'mobile', which = process.argv[3] || 'both', SECS = +(process.env.SECS || 14), PG = process.env.PATH_ || '/';
const SHOTS = path.join(__dirname, 'shots-speed');
fs.mkdirSync(SHOTS, { recursive: true });
const OLD_DIST = process.env.OLD_DIST || '/tmp/claude-0/-home-claude/bd4ad223-7855-5191-8648-964305124c8d/scratchpad/dist-v1.4';
const builds = {
  old: { dist: OLD_DIST, fp: path.join(R, 'restore/RESTORE-first-paint-rev1-6a5a38e9.html'), loader: path.join(R, 'restore/RESTORE-bundle-loader-rev7-d06df95b.html'), clarityLate: false },
  new: { dist: path.join(R, 'dist'), fp: process.env.FP ? path.resolve(process.env.FP) : path.join(R, 'src/6a5a38e9-c19a-497e-aa91-a9e32867c9aa.html'), loader: path.join(R, 'loader.html'), clarityLate: true }
};
const MOBILE = form === 'mobile';
const HDR = MOBILE ? 92 : 79;
const wixBody = `<div id="main_MF"><div id="site-root"><div id="masterPage">
<header id="SITE_HEADER" class="wixui-header"><div class="max-width-container" style="height:${HDR}px;display:flex;align-items:center;gap:24px;padding:0 24px;background:#fff;border-bottom:1px solid #eee;font:16px Arial"><b>GrocerGoSx</b><nav><a href="/shop-now">Shop Now</a> · <a href="/pricing">Pricing</a> · <a href="/restaurants">Restaurants</a></nav></div></header>
<div id="PAGES_CONTAINER"><div id="SITE_PAGES"><div id="sn9cq">
<main id="PAGE_SECTIONSsn9cq" style="display:contents">
<section id="comp-mvboq3ku" class="section wixui-section comp-mvboq3ku" style="display:flex;flex-direction:column;position:relative">
<div id="comp-mvboq3kw1" class="container" style="display:grid;padding:40px 0"><div class="max-width-container" style="display:grid;gap:12px;max-width:980px;margin:0 auto;padding:0 20px;font:16px Arial">
<img src="https://static.wixstatic.com/media/85c3c2_6612e101d1b047ffbc3abfbaa2b3b707~mv2.jpg/v1/fill/w_980,h_520,q_80,enc_auto/hero.jpg" style="width:100%;height:auto;aspect-ratio:980/520" alt="Grocery delivery and concierge service in St. Maarten">
<h2>Groceries and villa stocking in St. Maarten</h2><p>GrocerGoSx shops the island's supermarkets for you and brings everything to your door.</p></div></div>
</section>
<section id="comp-mvfhzlit" class="section wixui-section" style="position:relative;padding:30px 20px;font:16px Arial"><div><h1>Grocery delivery and concierge service in St. Maarten</h1>
<p>GrocerGoSx shops the island's supermarkets for you and delivers to your villa, hotel, condo or boat on both the Dutch and the French side, with villa stocking before you land, restaurant pickup, pharmacy runs, laundry and errands.</p></div></section>
</main></div></div></div>
<footer id="SITE_FOOTER"><div style="background:#222;color:#eee;padding:40px 20px;font:14px Arial">Footer · Contact · <a href="#privacy-policy">Privacy</a></div></footer>
</div></div></div>`;

function pageHtml(b, files) {
  const fp = L.firstPaint(fs.readFileSync(b.fp, 'utf8'), files);
  let loader = fs.readFileSync(b.loader, 'utf8');
  if (/var GZ = '/.test(loader)) loader = loader.replace(/var GZ = '[^']+'/, `var GZ = '${files.body[0]}'`).replace(/var PLAIN = '[^']+'/, `var PLAIN = '${files.body[1]}'`);
  const splash = fs.readFileSync(path.join(R, 'src/d298f6a7-369a-47de-9ab1-c017af2d8de1.html'), 'utf8');
  const clarity = `<script>window.clarity=window.clarity||function(){(window.clarity.q=window.clarity.q||[]).push(arguments)};(function(){function go(){window.__clarityAt=performance.now();var t=Date.now();while(Date.now()-t<130){}}${b.clarityLate ? 'function later(){setTimeout(go,3000)}if(document.readyState==="complete")later();else addEventListener("load",later);' : 'setTimeout(go,200);'}})();</script>`;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Grocery Delivery &amp; Concierge, St. Maarten (SXM) | GrocerGoSx</title>
<style>body{margin:0;background:#fff}a{color:inherit}#main_MF :where(.comp-mvboq3ku){min-height:0px;height:auto}</style>${fp}${clarity}
<script async src="${ORIGIN}/__wix.js"></script></head><body>${splash}
<div id="SITE_CONTAINER"></div>
${loader}</body></html>`;
}
// "Wix": a big script that downloads alongside (like Wix's own JS), works for a while, then draws the page
const wixJs = `(function(){function draw(){var c=document.getElementById('SITE_CONTAINER');if(!c)return setTimeout(draw,20);var t=Date.now();while(Date.now()-t<${MOBILE ? 260 : 120}){}c.innerHTML=${JSON.stringify(wixBody)};var u=Date.now();while(Date.now()-u<${MOBILE ? 120 : 60}){}}draw();})();\n/*` + 'x'.repeat(MOBILE ? 600000 : 600000) + '*/';

async function run(name) {
  const b = builds[name];
  const { files, bodies } = L.distFiles(b.dist, ORIGIN);
  const html = pageHtml(b, files);
  const browser = await chromium.launch();
  const ctx = await browser.newContext(MOBILE
    ? { viewport: { width: 412, height: 823 }, deviceScaleFactor: 1.75, isMobile: true, hasTouch: true, userAgent: 'Mozilla/5.0 (Linux; Android 11; moto g power (2022)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36' }
    : { viewport: { width: 1350, height: 940 }, deviceScaleFactor: 1, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36' });
  const page = await ctx.newPage();
  const errors = [], reqs = [];
  page.on('pageerror', e => errors.push('pageerror: ' + e.message.slice(0, 200)));
  page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') errors.push(m.type() + ': ' + m.text().slice(0, 200)); });
  page.on('request', r => reqs.push(r.url()));
  await page.route('**/*', route => {
    const u = route.request().url();
    if (/grocergosx\.com/i.test(u)) return route.abort();
    if (u.startsWith(ORIGIN + '/')) {
      const p = new URL(u).pathname;
      if (bodies[p]) return route.fulfill({ status: 200, contentType: 'text/plain', body: bodies[p], headers: { 'access-control-allow-origin': '*', 'cache-control': 'max-age=3600' } });
      if (p === '/__wix.js') return route.fulfill({ status: 200, contentType: 'application/javascript', body: wixJs });
      if (route.request().resourceType() === 'document') return route.fulfill({ status: 200, contentType: 'text/html', body: html });
      return route.fulfill({ status: 404, body: '' });
    }
    if (/^https:\/\/(docs\.google\.com|[a-z0-9-]+\.googleusercontent\.com|static\.wixstatic\.com)\//.test(u)) return route.continue();
    return route.abort();
  });
  await page.addInitScript(() => {
    const desc = n => { const el = n && (n.nodeType === 1 ? n : n.parentElement); if (!el) return '(gone)'; return el.tagName.toLowerCase() + (el.id ? '#' + el.id : '') + (typeof el.className === 'string' && el.className ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.') : '') + ' "' + (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 30) + '"'; };
    const rect = r => r ? [r.x, r.y, r.width, r.height].map(Math.round).join(',') : '';
    const M = window.__m = { ls: [], lcp: [], fcp: 0, lt: [] };
    try { new PerformanceObserver(l => l.getEntries().forEach(e => M.ls.push({ t: e.startTime, v: e.value, input: e.hadRecentInput, src: (e.sources || []).map(s => desc(s.node) + ' [' + rect(s.previousRect) + ' > ' + rect(s.currentRect) + ']') }))).observe({ type: 'layout-shift', buffered: true }); } catch (e) {}
    try { new PerformanceObserver(l => l.getEntries().forEach(e => M.lcp.push({ t: e.startTime, size: e.size, el: desc(e.element), url: (e.url || '').split('/').slice(-1)[0].slice(0, 40) }))).observe({ type: 'largest-contentful-paint', buffered: true }); } catch (e) {}
    try { new PerformanceObserver(l => l.getEntries().forEach(e => { if (e.name === 'first-contentful-paint') M.fcp = e.startTime; })).observe({ type: 'paint', buffered: true }); } catch (e) {}
    try { new PerformanceObserver(l => l.getEntries().forEach(e => M.lt.push({ t: e.startTime, d: e.duration }))).observe({ type: 'longtask', buffered: true }); } catch (e) {}
    Object.defineProperty(EventTarget.prototype, 'addEventListener', { writable: false, configurable: false });
    Object.defineProperty(EventTarget.prototype, 'removeEventListener', { writable: false, configurable: false });
    Object.defineProperty(window, 'setInterval', { writable: false, configurable: false });
  });
  const cdp = await ctx.newCDPSession(page);
  await cdp.send('Network.enable');
  if (MOBILE) {
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
    await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 150, downloadThroughput: 1.6 * 1024 * 1024 / 8, uploadThroughput: 750 * 1024 / 8 });
  } else await cdp.send('Network.emulateNetworkConditions', { offline: false, latency: 40, downloadThroughput: 10 * 1024 * 1024 / 8, uploadThroughput: 5 * 1024 * 1024 / 8 });
  const t0 = Date.now();
  await page.goto(ORIGIN + PG, { waitUntil: 'commit' });
  for (const s of [2, 4, 6, 9]) { await page.waitForTimeout(Math.max(0, s * 1000 - (Date.now() - t0))); await page.screenshot({ path: path.join(SHOTS, `${form}-${name}-${s}s.png`) }); }
  await page.waitForTimeout(Math.max(0, SECS * 1000 - (Date.now() - t0)));
  const m = await page.evaluate(() => ({ M: window.__m, home: window.__ggsxHome || null, cls: document.documentElement.className, runs: (window.__GGSX_BUNDLE || {}).runs, clarityAt: window.__clarityAt || null, nav: performance.getEntriesByType('navigation')[0].loadEventEnd }));
  await page.screenshot({ path: path.join(SHOTS, `${form}-${name}-end.png`) });
  let nav = null;
  if (process.env.NAV) {   /* an in-site page change, like Wix does it: new address, new page content, Body-end code runs again */
    const loaderCode = /<script>([\s\S]*?)<\/script>/.exec(/var GZ = '/.test(fs.readFileSync(b.loader, 'utf8')) ? fs.readFileSync(b.loader, 'utf8').replace(/var GZ = '[^']+'/, `var GZ = '${files.body[0]}'`).replace(/var PLAIN = '[^']+'/, `var PLAIN = '${files.body[1]}'`) : fs.readFileSync(b.loader, 'utf8'))[1];
    const hop = async (to, mainHtml) => {
      await page.evaluate(([to, mainHtml]) => { history.pushState({}, '', to); const m = document.querySelector('main'); const d = document.createElement('div'); d.innerHTML = mainHtml; m.replaceWith(d.firstElementChild); }, [to, mainHtml]);
      await page.waitForTimeout(100);
      await page.evaluate(code => { const s = document.createElement('script'); s.text = code; document.body.appendChild(s); }, loaderCode);
      await page.waitForTimeout(3500);
      return page.evaluate(() => { const m = document.querySelector('main'); const sec = m && m.querySelector('section'); const r = sec ? sec.getBoundingClientRect() : null; return { path: location.pathname, html: document.documentElement.className, sectionShown: !!(r && r.height > 0 && getComputedStyle(sec).display !== 'none'), engine: !!document.querySelector('#ggsx-page,#ggsx-home'), ran: Object.keys((window.__GGSX_BUNDLE || {}).ran || {}).join('+'), runs: (window.__GGSX_BUNDLE || {}).runs }; });
    };
    nav = [];
    nav.push(await hop('/pricing', '<main id="PAGE_SECTIONSpr1c3" style="display:contents"><section id="comp-pr1" class="section" style="padding:30px"><h1>Pricing</h1><p>Our prices, in the Wix Editor text.</p></section></main>'));
    await page.screenshot({ path: path.join(SHOTS, `${form}-${name}-nav-pricing.png`) });
    nav.push(await hop('/', '<main id="PAGE_SECTIONSsn9cq" style="display:contents"><section id="comp-mvboq3ku" class="section" style="display:flex;flex-direction:column"><div class="container"><h2>Wix home</h2></div></section><section id="comp-mvfhzlit" class="section"><h1>Grocery delivery and concierge service in St. Maarten</h1><p>GrocerGoSx shops the island\'s supermarkets for you and delivers to your villa, hotel, condo or boat on both sides of the island.</p></section></main>'));
    await page.screenshot({ path: path.join(SHOTS, `${form}-${name}-nav-home.png`) });
    nav.push(await hop('/shop-now', '<main id="PAGE_SECTIONSsh0p" style="display:contents"><section id="comp-sh1" class="section"><h1>Shop Now</h1><p>Shop text</p></section></main>'));
  }
  await browser.close();
  // CLS: largest session window (gap < 1 s, length <= 5 s)
  let cls = 0, win = 0, start = 0, prev = -1e9;
  const shifts = m.M.ls.filter(e => !e.input);
  for (const e of shifts) { if (e.t - prev > 1000 || e.t - start > 5000) { win = 0; start = e.t; } win += e.v; prev = e.t; cls = Math.max(cls, win); }
  const lcp = m.M.lcp[m.M.lcp.length - 1] || {};
  const tbt = m.M.lt.filter(t => t.t > m.M.fcp).reduce((s, t) => s + Math.max(0, t.d - 50), 0);
  const ours = reqs.filter(u => u.startsWith(ORIGIN + '/__f/') || /docs\.google\.com/.test(u)).map(u => u.replace(ORIGIN, '').replace(/https:\/\/docs\.google\.com\/spreadsheets\/d\/[^/]+\/gviz\/tq\?tqx=out:json&headers=1&sheet=/, 'sheet:').slice(0, 40));
  console.log(`\n=== ${form} · ${name} build ===`);
  console.log(`FCP ${m.M.fcp.toFixed(0)} ms · LCP ${(lcp.t || 0).toFixed(0)} ms (${lcp.el || '-'} ${lcp.url || ''}, ${lcp.size || 0} px²) · CLS ${cls.toFixed(3)} · blocking ${tbt.toFixed(0)} ms · load ${m.nav.toFixed(0)} ms · Clarity ${m.clarityAt ? m.clarityAt.toFixed(0) + ' ms' : '-'}`);
  console.log('long tasks:', m.M.lt.map(t => `${t.d.toFixed(0)}@${t.t.toFixed(0)}`).join(' '));
  console.log('LCP candidates:', m.M.lcp.map(e => `${e.t.toFixed(0)}:${e.size}:${e.el.slice(0, 40)}`).join(' | '));
  console.log('shifts:'); shifts.forEach(e => console.log(`  ${e.t.toFixed(0)} ms  ${e.v.toFixed(4)}  ${e.src.slice(0, 3).join(' ; ')}`));
  console.log('home:', JSON.stringify(m.home), '· html:', m.cls, '· runs', m.runs);
  if (nav) nav.forEach(x => console.log('page change →', JSON.stringify(x)));
  console.log('requests:', ours.join(' '));
  console.log('errors:', errors.filter(e => !/Failed to load resource|ERR_FAILED|net::/.test(e)).slice(0, 6).join('\n  ') || 'none');
}
(async () => { for (const n of which === 'both' ? ['old', 'new'] : [which]) await run(n); })().catch(e => { console.error(e); process.exit(1); });
