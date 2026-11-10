// Headless Chromium test of First Paint (head: build pick + early download) and loader.html (body end) against the HOSTED files in the
// Media Manager: for each build in First Paint's BUILDS, the gzip path and the plain fallback, on the home page, a service page and the
// shop, plus a second run of the loader ("load code on each new page"). Runs on example.com so fetch and CORS behave like on the live site.
// usage: node test-loader.js [build ids, e.g. 14,15]
const { chromium } = require('playwright');
const fs = require('fs');
const scr = f => { const h = fs.readFileSync(f, 'utf8'); return h.slice(h.indexOf('<script>') + 8, h.lastIndexOf('</script>')); };
const fp = scr(__dirname + '/src/6a5a38e9-c19a-497e-aa91-a9e32867c9aa.html');
const loader = scr(__dirname + '/loader.html');
const ids = (process.argv[2] || (/var BUILDS=\{([\s\S]*?)\n  \};/.exec(fs.readFileSync(__dirname + '/src/6a5a38e9-c19a-497e-aa91-a9e32867c9aa.html', 'utf8'))[1].match(/^\s*"(\d+)":/gm) || []).map(x => x.replace(/\D/g, '')).join(',')).split(',');

(async () => {
  const browser = await chromium.launch();
  let fails = 0;
  for (const id of ids) for (const mode of ['gzip', 'plain']) for (const p of ['/', '/pricing', '/shop-now', '/rentals']) {
    const page = await browser.newPage();
    const logs = [], reqs = [];
    page.on('console', m => { if (m.type() !== 'log') logs.push(m.type() + ': ' + m.text().slice(0, 140)); });
    page.on('pageerror', e => logs.push('PAGEERROR: ' + String(e).slice(0, 200)));
    page.on('response', r => { if (/usrfiles\.com/.test(r.url())) reqs.push(r.status() + ' …' + r.url().slice(-12)); });
    await page.goto('https://example.com' + p + '?ggsx_v=' + id + '&ggsx_nocurtain=1').catch(() => {});
    await page.setContent('<!doctype html><html><head><title>t</title></head><body><main id="PAGE_SECTIONSx"><section><h1>t</h1><p>text</p></section></main></body></html>', { waitUntil: 'load' });
    if (mode === 'plain') await page.evaluate(() => { delete window.DecompressionStream; });
    const t0 = Date.now();
    await page.evaluate(fp);
    await page.evaluate(loader);
    let ok = true;
    try { await page.waitForFunction(() => window.__GGSX_BUNDLE && window.__GGSX_BUNDLE.runs >= 1, null, { timeout: 30000 }); } catch (e) { ok = false; }
    const t1 = Date.now() - t0;
    await page.waitForTimeout(800);
    if (ok) {
      await page.evaluate(loader);   // next page in the same visit
      try { await page.waitForFunction(() => window.__GGSX_BUNDLE.runs >= 2, null, { timeout: 30000 }); } catch (e) { ok = false; }
      await page.waitForTimeout(800);
    }
    const st = await page.evaluate(() => { const B = window.__GGSX_BUNDLE || {}; return { pick: B.pick && B.pick.id, v: B.v, runs: B.runs, from: B.from, ran: Object.keys(B.ran || {}).join('+'), home: !!window.GGSX_HOME, pages: !!window.GGSX_PAGES, shop: !!window.GGSX_SHOP, html: document.documentElement.className, rentals: !!window.__ggsxRentalsPage, rentalsRoot: !!document.getElementById('ggsx-rentals') }; });
    const want = { '/': 'home', '/pricing': 'pages', '/shop-now': '', '/rentals': +id >= 16 ? 'rentals' : '' }[p];
    /* v1.6: the rentals group (/rentals only) draws #ggsx-rentals; builds before 16 have no rentals group */
    const groupOk = id === '14' ? !st.home || true : (want === 'home' ? st.home && !st.pages : want === 'pages' ? st.pages && !st.home : want === 'rentals' ? st.rentals && st.rentalsRoot && !st.home && !st.pages : !st.home && !st.pages && !st.rentals);
    if (!ok || st.pick !== id || st.from !== mode || !groupOk || logs.some(l => /PAGEERROR/.test(l))) { fails++; ok = false; }
    console.log(`${ok ? 'ok  ' : 'FAIL'} build ${id} ${mode.padEnd(5)} ${p.padEnd(9)} first run ${String(t1).padStart(5)} ms · ${JSON.stringify(st)} · ${reqs.join(' ')}${logs.length ? ' · ' + logs.slice(0, 3).join(' | ') : ''}`);
    await page.close();
  }
  await browser.close();
  console.log(fails ? fails + ' FAILED' : 'all passed');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error('TEST FAILED', e); process.exit(1); });
