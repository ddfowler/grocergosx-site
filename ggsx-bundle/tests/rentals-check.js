// v1.6: the Rentals page and rentals at checkout, on the Wix-like harness page with the real Vendors & Menus sheet (nothing is sent:
// every Wix API call is blocked). Walks: /rentals → pick dates → add 2 × cooler-70 and 3 × table-6ft → /shop-now checkout (rentals only:
// date locked to the start, no "If unavailable", Rental collection fee; French side) → add a grocery item (mixed basket) → dates too
// soon (Place order blocked) → phone-width screenshots.
// usage: node tests/rentals-check.js dist loader.html [shop34.js]     (needs Playwright; SHOTS=<dir> for the screenshots)
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const L = require('./lib');
const [distDir = 'dist', loaderPath = 'loader.html', shop34Path = ''] = process.argv.slice(2);
const SHOTS = process.env.SHOTS || '/tmp';
const d = L.distFiles(distDir, 'http://ggsx.test');
const loaderJs = L.loaderJs(loaderPath, d.files);
const SHOP34 = shop34Path && fs.existsSync(shop34Path) ? fs.readFileSync(shop34Path, 'utf8') : '';

const HTML = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>harness</title>
${SHOP34 ? '<script>' + SHOP34 + '</script>' : ''}</head><body>
<div id="SITE_CONTAINER"><div id="main_MF"><div id="site-root"><div id="masterPage"><div id="SITE_PAGES"></div></div></div></div></div>
<script>
window.__mkPage = function (name) {
  var d = document.createElement('div'); d.id = 'pg_' + name;
  d.innerHTML = '<header><div class="max-width-container"><nav><ul><li><a href="/shop-now">Shop Now</a></li><li><a href="/rentals">Rentals</a></li></ul></nav><div class="search-button">s</div></div></header>' +
    '<main><section><div class="blank"></div></section></main><footer><div style="background:#222;color:#eee;width:100%"><p>Footer text</p></div></footer>';
  return d;
};
document.getElementById('SITE_PAGES').appendChild(window.__mkPage('home'));
</script></body></html>`;

function islandDate(add) {
  const p = {}; new Intl.DateTimeFormat('en-GB', { timeZone: 'America/Lower_Princes', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date()).forEach(x => { p[x.type] = x.value; });
  const t = new Date(p.year + '-' + p.month + '-' + p.day + 'T12:00:00Z'); t.setUTCDate(t.getUTCDate() + add); return t.toISOString().slice(0, 10);
}

(async () => {
  const browser = await chromium.launch();
  const out = [];
  const log = (...a) => { const s = a.join(' '); out.push(s); console.log(s); };
  async function session(viewport, mobile) {
    const ctx = await browser.newContext(mobile ? { viewport, isMobile: true, hasTouch: true, deviceScaleFactor: 2 } : { viewport });
    const page = await ctx.newPage();
    const errors = [], sent = [];
    page.on('pageerror', e => errors.push('pageerror: ' + e.message.slice(0, 200)));
    page.on('console', m => { if (m.type() === 'error' || /GGSX/.test(m.text())) errors.push(m.type() + ': ' + m.text().slice(0, 200)); });
    await page.route('**/*', route => {
      const u = route.request().url();
      if (/wixapis\.com\/form-submission/.test(u)) { sent.push(u); return route.abort(); }
      if (u.startsWith('http://ggsx.test/__') && d.bodies[new URL(u).pathname]) return route.fulfill({ status: 200, contentType: 'text/plain', body: d.bodies[new URL(u).pathname], headers: { 'access-control-allow-origin': '*' } });
      if (u.startsWith('http://ggsx.test/')) {
        if (route.request().resourceType() === 'document') return route.fulfill({ status: 200, contentType: 'text/html', body: HTML });
        return route.fulfill({ status: 404, body: '' });
      }
      if (/^https:\/\/(docs\.google\.com|[a-z0-9-]+\.googleusercontent\.com|static\.wixstatic\.com)\//.test(u)) return route.continue();
      return route.abort();
    });
    await page.goto('http://ggsx.test/');
    const runLoader = () => page.evaluate(code => { const s = document.createElement('script'); s.text = code; document.body.appendChild(s); }, loaderJs);
    const nav = async p => {
      await page.evaluate(p => { history.pushState({}, '', p); const sp = document.getElementById('SITE_PAGES'); const old = [...sp.children].find(c => /^pg_/.test(c.id)); old && old.remove(); sp.appendChild(window.__mkPage(p.replace(/\W/g, '') || 'home')); }, p);
      await page.waitForTimeout(150); await runLoader(); await page.waitForTimeout(1200);
    };
    /* a full page load, as on grocergosx.com (every page change there reloads the page) */
    const load = async p => { await page.goto('http://ggsx.test' + p); await page.waitForTimeout(100); await runLoader(); await page.waitForTimeout(1500); };
    await runLoader(); await page.waitForTimeout(2000);
    return { ctx, page, errors, sent, nav, load, runLoader };
  }
  const est = page => page.evaluate(() => [...document.querySelectorAll('.gc-wrap.open .gc-est > div')].filter(r => getComputedStyle(r).display !== 'none').map(r => r.textContent.replace(/\s+/g, ' ').trim()).join(' | '));
  const ckState = page => page.evaluate(() => {
    const f = document.querySelector('.gc-wrap.open .gc-form'); if (!f) return 'no open checkout';
    const date = f.querySelector('input[name=date]'), lab = date.closest('label'), subs = f.querySelector('select[name=subs]'), pi = f.querySelector('.gc-pi'), w = f.querySelector('.gr-ck-warn'), h = f.querySelector('.gr-ck-hint');
    const vis = e => !!e && getComputedStyle(e).display !== 'none' && !e.hidden;
    return JSON.stringify({ date: date.value, readOnly: date.readOnly, label: lab.querySelector('span').textContent, hint: h && !h.hidden ? h.textContent : '', subsShown: vis(subs && subs.closest('label')), perItemShown: vis(pi),
      perItemRows: [...f.querySelectorAll('.gc-pi-r')].map(r => (getComputedStyle(r).display === 'none' ? '[hidden] ' : '') + r.querySelector('span').textContent),
      warn: vis(w) ? w.textContent : '', lead: (document.querySelector('.gc-wrap.open .gc-lead') || {}).textContent });
  });
  const openCheckout = async page => {
    for (let i = 0; i < 40; i++) { if (await page.evaluate(() => [...document.querySelectorAll('#ggsx-shop button')].some(b => /^checkout$/i.test(b.textContent.trim())))) break; await page.waitForTimeout(500); }
    const ok = await page.evaluate(() => { const b = [...document.querySelectorAll('#ggsx-shop button')].find(b => /^checkout$/i.test(b.textContent.trim())); if (b) b.click(); return !!b; });
    await page.waitForTimeout(1800);
    return ok;
  };
  const closeCheckout = page => page.evaluate(() => { document.querySelectorAll('.gc-wrap.open .gc-x').forEach(x => x.click()); });

  /* ---------- desktop ---------- */
  const A = await session({ width: 1280, height: 900 });
  let page = A.page;
  await A.load('/rentals');
  for (let i = 0; i < 30; i++) { if (await page.evaluate(() => document.querySelectorAll('#ggsx-rentals .gr-item').length)) break; await page.waitForTimeout(500); }
  log('rentals page: root', await page.evaluate(() => !!document.getElementById('ggsx-rentals')), 'items', await page.evaluate(() => document.querySelectorAll('#ggsx-rentals .gr-item').length),
    'cats', await page.evaluate(() => [...document.querySelectorAll('#ggsx-rentals .gr-cat')].map(b => b.textContent).join('/')),
    'group ran', await page.evaluate(() => JSON.stringify(window.__GGSX_BUNDLE.ran)));
  log('first card:', await page.evaluate(() => (document.querySelector('#ggsx-rentals .gr-item') || {}).textContent));
  log('dates summary before:', await page.evaluate(() => document.querySelector('#ggsx-rentals .gr-dsum').textContent));
  // Add without dates
  await page.click('#ggsx-rentals .gr-item[data-id="cooler-70"] .gr-add');
  log('add without dates →', await page.evaluate(() => document.querySelector('#ggsx-rentals .gr-msg').textContent));
  const s1 = islandDate(10), e1 = islandDate(12);
  await page.fill('#ggsx-rentals input[aria-label="Start date"]', s1);
  await page.waitForTimeout(300);
  log('start', s1, '→ end auto', await page.inputValue('#ggsx-rentals input[aria-label="End date"]'), '·', await page.evaluate(() => document.querySelector('#ggsx-rentals .gr-dsum').textContent));
  await page.click('#ggsx-rentals .gr-item[data-id="cooler-70"] .gr-add');
  await page.waitForTimeout(200);
  await page.click('#ggsx-rentals .gr-item[data-id="cooler-70"] .gr-step button[data-a="p"]');
  await page.waitForTimeout(200);
  await page.click('#ggsx-rentals .gr-item[data-id="table-6ft"] .gr-add');
  for (let i = 0; i < 2; i++) { await page.waitForTimeout(200); await page.click('#ggsx-rentals .gr-item[data-id="table-6ft"] .gr-step button[data-a="p"]'); }
  await page.waitForTimeout(400);
  log('basket:', await page.evaluate(() => JSON.stringify(Object.values(JSON.parse(localStorage.getItem('ggsx_basket')).items).map(l => [l.id, l.n, l.name, l.size, l.price]))));
  log('estimate (Dutch):', await page.evaluate(() => [...document.querySelectorAll('#ggsx-rentals .gr-rows > div')].map(r => r.textContent).join(' | ')));
  log('small print:', await page.evaluate(() => document.querySelector('#ggsx-rentals .gr-small').textContent));
  await page.screenshot({ path: path.join(SHOTS, 'rentals-desktop.png'), fullPage: true });
  // a 10-day rental price check (1 week + 3 days) without adding
  await page.fill('#ggsx-rentals input[aria-label="End date"]', islandDate(19));
  await page.waitForTimeout(300);
  log('10 days:', await page.evaluate(() => document.querySelector('#ggsx-rentals .gr-dsum').textContent), '· cooler-70 card:', await page.evaluate(() => document.querySelector('#ggsx-rentals .gr-item[data-id="cooler-70"] .gr-yr').textContent),
    '· conflict box:', await page.evaluate(() => { const w = document.querySelector('#ggsx-rentals .gr-warn'); return w.hidden ? 'hidden' : w.textContent; }));
  await page.click('#ggsx-rentals .gr-warn button:not([hidden]).gr-s');   // Use those dates
  await page.waitForTimeout(300);
  log('after "Use those dates": end =', await page.inputValue('#ggsx-rentals input[aria-label="End date"]'), '· conflict', await page.evaluate(() => document.querySelector('#ggsx-rentals .gr-warn').hidden ? 'hidden' : 'shown'));

  // checkout, rentals only
  await A.load('/shop-now');
  for (let i = 0; i < 30; i++) { if (await page.evaluate(() => !!document.querySelector('#ggsx-shop .gs-cart'))) break; await page.waitForTimeout(500); }
  log('shop cart:', await page.evaluate(() => { const c = document.querySelector('#ggsx-shop .gs-cart'); return c ? c.textContent.replace(/\s+/g, ' ').slice(0, 400) : 'none'; }), '· runs', await page.evaluate(() => window.__GGSX_BUNDLE.runs), '· basket n', await page.evaluate(() => Object.keys(JSON.parse(localStorage.getItem('ggsx_basket')).items).length));
  log('checkout opened:', await openCheckout(page), '· buttons:', await page.evaluate(() => [...document.querySelectorAll('#ggsx-shop button')].filter(b => /checkout/i.test(b.textContent)).map(b => b.className + ' in-cart=' + !!b.closest('.gs-cart') + ' disabled=' + b.disabled).join(', ')), '· errors so far:', A.errors.slice(0, 5).join(' || '));
  log('checkout state:', await ckState(page));
  log('estimate:', await est(page));
  await page.evaluate(() => { const c = document.querySelector('.gc-wrap.open .gc-chip[data-id="here"]'); c && c.click(); });
  await page.waitForTimeout(300);
  log('label after "Yes, I\'m here":', await page.evaluate(() => document.querySelector('.gc-wrap.open input[name=date]').closest('label').querySelector('span').textContent));
  await page.selectOption('.gc-wrap.open select[name=side]', { index: 2 });
  await page.waitForTimeout(500);
  log('estimate (French side):', await est(page));
  await page.screenshot({ path: path.join(SHOTS, 'rentals-checkout.png'), fullPage: false });
  await closeCheckout(page); await page.waitForTimeout(400);

  // mixed basket: add a grocery item
  await page.evaluate(() => { const b = [...document.querySelectorAll('#ggsx-shop button')].find(b => /^add$/i.test(b.textContent.trim())); b && b.click(); });
  await page.waitForTimeout(600);
  await openCheckout(page);
  await page.evaluate(() => { const t = document.querySelector('.gc-wrap.open .gc-pi-t'); t && t.click(); });
  await page.evaluate(() => { const c = document.querySelector('.gc-wrap.open .gc-chip[data-id="here"]'); c && c.getAttribute('aria-checked') !== 'true' && c.click(); });
  await page.waitForTimeout(300);
  await page.selectOption('.gc-wrap.open select[name=side]', { index: 1 });
  await page.fill('.gc-wrap.open input[name=date]', islandDate(9));
  await page.waitForTimeout(500);
  log('mixed checkout state:', await ckState(page));
  log('mixed estimate:', await est(page));
  await closeCheckout(page); await page.waitForTimeout(300);

  // dates too soon: Place order is blocked
  await page.evaluate(t => { const b = JSON.parse(localStorage.getItem('ggsx_basket')); const items = {}; Object.values(b.items).forEach(l => { if (/^rent:/.test(l.id)) { const m = /^rent:([^:]+):/.exec(l.id); l.id = 'rent:' + m[1] + ':' + t + ':' + t; l.rent = { item: m[1], start: t, end: t, days: 1 }; } items[l.id] = l; }); b.items = items; localStorage.setItem('ggsx_basket', JSON.stringify(b)); window.dispatchEvent(new CustomEvent('ggsx-basket')); }, islandDate(0));
  await A.load('/shop-now');
  await openCheckout(page);
  await page.evaluate(() => { const c = document.querySelector('.gc-wrap.open .gc-chip[data-id="here"]'); c && c.getAttribute('aria-checked') !== 'true' && c.click(); });
  await page.waitForTimeout(300);
  await page.fill('.gc-wrap.open input[name=first]', 'Test');
  await page.fill('.gc-wrap.open input[name=email]', 'test@example.com');
  await page.fill('.gc-wrap.open input[name=phone]', '+1 721 555 0123');
  await page.fill('.gc-wrap.open textarea[name=address]', 'Test villa');
  await page.selectOption('.gc-wrap.open select[name=side]', { index: 1 });
  await page.selectOption('.gc-wrap.open select[name=win]', { index: 4 });
  await page.evaluate(() => { const b = document.querySelector('.gc-wrap.open button[type=submit]'); b && b.click(); });
  await page.waitForTimeout(1200);
  log('too-soon checkout:', await ckState(page), '· submissions attempted:', A.sent.length, '· thanks shown:', await page.evaluate(() => !!document.querySelector('.gc-wrap.open .gc-thanks')));
  log('desktop errors:', A.errors.filter(e => !/Failed to load resource/.test(e)).slice(0, 10).join(' || ') || 'none');
  await A.ctx.close();

  /* ---------- phone ---------- */
  const B = await session({ width: 390, height: 844 }, true);
  page = B.page;
  await B.load('/rentals');
  for (let i = 0; i < 30; i++) { if (await page.evaluate(() => document.querySelectorAll('#ggsx-rentals .gr-item').length)) break; await page.waitForTimeout(500); }
  await page.fill('#ggsx-rentals input[aria-label="Start date"]', islandDate(3));
  await page.waitForTimeout(300);
  await page.click('#ggsx-rentals .gr-item[data-id="cooler-24"] .gr-add');
  await page.waitForTimeout(400);
  log('phone: page width', await page.evaluate(() => document.documentElement.scrollWidth), 'viewport 390 · bar', await page.evaluate(() => { const m = document.querySelector('#ggsx-rentals .gr-mbar'); return getComputedStyle(m).display + ' ' + m.textContent; }));
  log('phone estimate:', await page.evaluate(() => [...document.querySelectorAll('#ggsx-rentals .gr-rows > div')].map(r => r.textContent).join(' | ')));
  await page.screenshot({ path: path.join(SHOTS, 'rentals-phone-top.png') });
  await page.evaluate(() => document.querySelector('#ggsx-rentals .gr-item[data-id="cooler-24"]').scrollIntoView({ block: 'center' }));
  await page.waitForTimeout(300);
  await page.screenshot({ path: path.join(SHOTS, 'rentals-phone-items.png') });
  log('phone errors:', B.errors.filter(e => !/Failed to load resource/.test(e)).slice(0, 10).join(' || ') || 'none');
  await B.ctx.close();
  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });
