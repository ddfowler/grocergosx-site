// Headless Chromium test of loader.html against the hosted bundle files: gzip path, plain fallback and per-page re-run.
const { chromium } = require('playwright');
const fs = require('fs');
const loader = fs.readFileSync(__dirname + '/loader.html', 'utf8');
const script = loader.slice(loader.indexOf('<script>') + 8, loader.lastIndexOf('</script>'));

(async () => {
  const browser = await chromium.launch();
  const results = {};
  for (const mode of ['gzip', 'plain']) {
    const page = await browser.newPage();
    const logs = [];
    page.on('console', m => logs.push(m.type() + ': ' + m.text().slice(0, 160)));
    page.on('pageerror', e => logs.push('PAGEERROR: ' + String(e).slice(0, 200)));
    const reqs = [];
    page.on('response', r => { if (/usrfiles\.com/.test(r.url())) reqs.push(r.status() + ' ' + r.url().slice(-40) + ' ' + (r.headers()['content-length'] || '')); });
    await page.goto('https://example.com/');  // a real origin so fetch/CORS behave like on the live site
    await page.setContent('<!doctype html><html><head><title>t</title></head><body><main id="PAGE_SECTIONS"><section></section></main></body></html>', { waitUntil: 'load' });
    if (mode === 'plain') await page.evaluate(() => { delete window.DecompressionStream; });
    const t0 = Date.now();
    await page.evaluate(script);
    await page.waitForFunction(() => window.__GGSX_BUNDLE && window.__GGSX_BUNDLE.runs >= 1, null, { timeout: 30000 });
    const t1 = Date.now() - t0;
    // simulate "load on each new page": run the loader again
    await page.evaluate(script);
    await page.waitForFunction(() => window.__GGSX_BUNDLE && window.__GGSX_BUNDLE.runs >= 2, null, { timeout: 30000 });
    const state = await page.evaluate(() => ({
      v: window.__GGSX_BUNDLE.v, runs: window.__GGSX_BUNDLE.runs, from: window.__GGSX_BUNDLE.from, kept: !!window.__GGSX_BUNDLE.code,
      globals: ['GGSX_PAGES', '__ggsxNote', '__ggsxSeo', 'GGSX_SHOP', 'GGSX_CHECKOUT', 'GGSX_ERRANDS', 'GGSX_HOME', '__ggsxLaundry', 'GGSX_REST_ONLY'].filter(k => k in window),
      styles: document.querySelectorAll('style[data-ggsx-css]').length,
      scripts: document.querySelectorAll('script').length
    }));
    results[mode] = { ms: t1, state, reqs, logs: logs.slice(0, 12), logCount: logs.length };
    await page.close();
  }
  await browser.close();
  console.log(JSON.stringify(results, null, 1));
})().catch(e => { console.error('TEST FAILED', e); process.exit(1); });
