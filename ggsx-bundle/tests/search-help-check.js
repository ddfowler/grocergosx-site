// v1.9: search help on Shop Now (v2.0: the no-match word is "Zylofrex"; "Karuline" is in the catalogue since 6 Nov 2026, Karuline Water) (Shop 43 Search Help + the Shop 2 hooks), on the Wix-like harness page with the real Vendors & Menus sheet
// (nothing is written to the sheet, nothing is sent: Wix API calls are blocked). Walks: a typo ("chese") → close matches, the note, the hidden
// "Nothing matched that" line for the Live Baskets log and the "Not what you were looking for?" card → an exact search, unchanged → no match
// ("Zylofrex") → the "Can’t find …?" card → Add it to my basket as a request (basket line, message, basket panel) → empty box → Fleet / Enima
// (card, no junk matches) → more typos → "Request it from the pharmacy" (opens /pharmacy, words in its request box) → phone width.
// usage: node tests/search-help-check.js dist loader.html     (needs Playwright; SHOTS=<dir> for the screenshots)
const { chromium } = require('playwright');
const L = require('./lib');
const [distDir = 'dist', loaderPath = 'loader.html'] = process.argv.slice(2);
const SHOTS = process.env.SHOTS || '/tmp';
const d = L.distFiles(distDir, 'http://ggsx.test');
const loaderJs = L.loaderJs(loaderPath, d.files);

const HTML = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>harness</title></head><body>
<div id="SITE_CONTAINER"><div id="main_MF"><div id="site-root"><div id="masterPage"><div id="SITE_PAGES"></div></div></div></div></div>
<script>
window.__mkPage = function (name) {
  var d = document.createElement('div'); d.id = 'pg_' + name;
  d.innerHTML = '<header><div class="max-width-container"><nav><ul><li><a href="/shop-now">Shop Now</a></li></ul></nav><div class="search-button">s</div></div></header>' +
    '<main><section><div class="blank"></div></section></main><footer><div style="background:#222;color:#eee;width:100%"><p>Footer text</p></div></footer>';
  return d;
};
document.getElementById('SITE_PAGES').appendChild(window.__mkPage('home'));
</script></body></html>`;

const fold = s => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

(async () => {
  const browser = await chromium.launch();
  let fails = 0;
  const log = (...a) => console.log(a.join(' '));
  const check = (ok, what, got) => { if (!ok) fails++; log((ok ? 'ok   ' : 'FAIL ') + what + (got !== undefined ? ' · ' + (typeof got === 'string' ? got : JSON.stringify(got)) : '')); };
  async function session(opts) {
    const ctx = await browser.newContext(opts);
    const page = await ctx.newPage();
    const errors = [], sent = [];
    page.on('pageerror', e => errors.push('pageerror: ' + e.message.slice(0, 200)));
    page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push(m.type() + ': ' + m.text().slice(0, 200)); });
    await page.route('**/*', async route => {
      const u = route.request().url();
      if (/wixapis\.com\/oauth2\/token/.test(u)) return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ access_token: 'harness', expires_in: 3600 }), headers: { 'access-control-allow-origin': '*' } });
      if (/wixapis\.com\/form-submission/.test(u)) { sent.push(u); return route.fulfill({ status: 200, contentType: 'application/json', body: '{}', headers: { 'access-control-allow-origin': '*' } }); }
      if (u.startsWith('http://ggsx.test/__') && d.bodies[new URL(u).pathname]) return route.fulfill({ status: 200, contentType: 'text/plain', body: d.bodies[new URL(u).pathname], headers: { 'access-control-allow-origin': '*' } });
      if (u.startsWith('http://ggsx.test/') || u.startsWith('http://localhost/')) {
        if (route.request().resourceType() === 'document') return route.fulfill({ status: 200, contentType: 'text/html', body: HTML });
        return route.fulfill({ status: 404, body: '' });
      }
      if (/^https:\/\/(docs\.google\.com|[a-z0-9-]+\.googleusercontent\.com|static\.wixstatic\.com)\//.test(u)) return route.continue();
      return route.abort();
    });
    const runLoader = () => page.evaluate(code => { const s = document.createElement('script'); s.text = code; document.body.appendChild(s); }, loaderJs);
    const load = async (p, wait) => { await page.goto('http://localhost' + p); await page.waitForTimeout(100); await runLoader(); await page.waitForTimeout(wait || 2500); };
    return { ctx, page, errors, sent, load, runLoader };
  }
  const view = p => p.evaluate(() => {
    const m = document.querySelector('#ggsx-shop .gs-main');
    if (!m) return null;
    const vis = e => !e.hidden && e.offsetParent !== null;
    const req = m.querySelector('.gs-req');
    return {
      h2: (m.querySelector('.gs-h2') || {}).textContent || '',
      cards: [...m.querySelectorAll('.gs-grid .gs-card .gs-name')].map(e => e.textContent),
      muted: [...m.querySelectorAll('.gs-muted')].map(e => ({ text: e.textContent, shown: vis(e), close: e.classList.contains('gs-close') })),
      req: req ? { after: req.classList.contains('gs-req-after'), h3: req.querySelector('h3').textContent, input: req.querySelector('input').value,
                   buttons: [...req.querySelectorAll('button')].map(b => b.textContent), msg: req.querySelector('.gs-req-msg').textContent } : null,
      noResults: (window.GGSX_SHOP && GGSX_SHOP.copy && GGSX_SHOP.copy.noResults) || ''
    };
  });
  const go = async (p, q) => { await p.evaluate(h => { location.hash = h; }, '#q/' + encodeURIComponent(q)); await p.waitForTimeout(700); return view(p); };

  /* ---------- desktop ---------- */
  const S1 = await session({ viewport: { width: 1280, height: 900 } });
  const p = S1.page;
  await S1.load('/shop-now#q/chese', 3500);
  for (let i = 0; i < 30; i++) { if (await p.evaluate(() => !!document.querySelector('#ggsx-shop .gs-main .gs-h2'))) break; await p.waitForTimeout(500); }
  check(await p.evaluate(() => !!(window.GGSX_SEARCH && GGSX_SEARCH.fuzzy && window.GGSX_SHOP_API)), 'Shop 43 loaded (GGSX_SEARCH) next to the Shop Now engine');
  let v = await view(p);
  check(/^\d+ close match(es)? for “chese”$/.test(v.h2), 'typo "chese": heading says close matches', v.h2);
  check(v.cards.length > 0 && fold(v.cards[0]).indexOf('chees') >= 0, 'typo "chese": first card is a cheese', v.cards.slice(0, 3));
  check(v.muted.some(x => x.close && x.shown && x.text === 'Nothing matched “chese” exactly, so these are the closest.'), 'note under the heading', v.muted);
  check(v.muted.some(x => !x.shown && x.text === v.noResults) && !!v.noResults, 'hidden "Nothing matched that" line kept for the Live Baskets log', v.noResults);
  check(v.req && v.req.after && v.req.h3 === 'Not what you were looking for?', 'request card after the close matches', v.req);
  await p.screenshot({ path: SHOTS + '/search-close.png', fullPage: false });

  v = await go(p, 'cheese');
  check(/^\d+ results? for “cheese”$/.test(v.h2) && v.cards.length > 0 && !v.req && !v.muted.length, 'exact search "cheese": results as before, no card, no note', { h2: v.h2, n: v.cards.length, req: !!v.req });

  v = await go(p, 'Zylofrex');
  check(v.h2 === 'No results' && !v.cards.length, '"Zylofrex": No results', v.h2);
  check(v.muted.length === 1 && v.muted[0].shown && v.muted[0].text === v.noResults, '"Nothing matched that…" shown as before', v.muted);
  check(v.req && !v.req.after && v.req.h3 === 'Can’t find “Zylofrex”?' && v.req.input === 'Zylofrex', 'card "Can’t find “Zylofrex”?" with the words in the box', v.req);
  check(v.req && v.req.buttons.join(' | ') === 'Add it to my basket as a request | Request it from the pharmacy', 'two buttons', v.req && v.req.buttons);
  await p.screenshot({ path: SHOTS + '/search-none.png', fullPage: false });
  await p.click('#ggsx-shop .gs-req .gs-btn:not(.gs-sec)'); await p.waitForTimeout(400);
  let b = await p.evaluate(() => JSON.parse(localStorage.getItem('ggsx_basket') || '{"items":{}}').items);
  const line = b['req:zylofrex'];
  check(line && line.n === 1 && line.name === 'Request: Zylofrex' && line.price === 0 && line.size === 'priced from the store receipt', 'basket line "Request: Zylofrex", $0, priced from the store receipt', line);
  v = await view(p);
  check(v.req && v.req.msg === 'Added to your basket: Request: Zylofrex', 'confirmation under the buttons', v.req && v.req.msg);
  const panel = await p.evaluate(() => [...document.querySelectorAll('#ggsx-shop .gs-line')].map(l => l.querySelector('.gs-ln').textContent + ' | ' + l.querySelector('.gs-lm').textContent + ' | ' + l.querySelector('.gs-lr b').textContent));
  check(panel.some(x => /^Request: Zylofrex \| priced from the store receipt · \$0\.00 each \| \$0\.00$/.test(x)), 'basket panel shows the request line', panel);
  await p.click('#ggsx-shop .gs-req .gs-btn:not(.gs-sec)'); await p.waitForTimeout(300);
  b = await p.evaluate(() => JSON.parse(localStorage.getItem('ggsx_basket')).items);
  check(b['req:zylofrex'] && b['req:zylofrex'].n === 2, 'adding it again counts 2', b['req:zylofrex']);
  await p.fill('#gs-req-q', ''); await p.click('#ggsx-shop .gs-req .gs-btn:not(.gs-sec)'); await p.waitForTimeout(200);
  v = await view(p);
  check(v.req && v.req.msg === 'Tell us what you need first.', 'empty box: asks for the item, adds nothing', v.req && v.req.msg);

  for (const q of ['Fleet', 'Enima', 'Fleet enema']) {
    v = await go(p, q);
    check(v.h2 === 'No results' && !v.cards.length && v.req && !v.req.after, '"' + q + '": no junk matches, request card', { h2: v.h2, cards: v.cards.slice(0, 3) });
  }
  const typos = { bred: 'bread', wiskey: 'whisk', mayonaise: 'mayonnaise', heinekin: 'heineken' };
  for (const q in typos) {
    v = await go(p, q);
    check(v.cards.length > 0 && fold(v.cards[0]).indexOf(typos[q]) >= 0, '"' + q + '" finds ' + typos[q], v.cards.slice(0, 2));
  }
  v = await go(p, 'icecream');
  check(v.cards.length > 0 && v.cards.some(n => /ice cream/i.test(n)), '"icecream" finds ice cream', { h2: v.h2, first: v.cards.slice(0, 2) });

  /* pharmacy hand-off */
  v = await go(p, 'Fleet enema');
  await Promise.all([p.waitForURL('**/pharmacy', { timeout: 10000 }), p.click('#ggsx-shop .gs-req .gs-btn.gs-sec')]);
  check(new URL(p.url()).pathname === '/pharmacy', '"Request it from the pharmacy" opens /pharmacy', p.url());
  await p.waitForTimeout(100); await S1.runLoader();
  let ta = null;
  for (let i = 0; i < 30; i++) { ta = await p.evaluate(() => { const t = document.querySelector('#ggsx-more-page .gm-card textarea'); return t ? { v: t.value, filled: t.classList.contains('gs-filled') } : null; }); if (ta && ta.v) break; await p.waitForTimeout(400); }
  check(ta && ta.v === 'Fleet enema', 'the pharmacy request box holds "Fleet enema"', ta);
  check(await p.evaluate(() => sessionStorage.getItem('ggsx_pharm_ask') === null), 'the hand-off is used once (cleared)');
  await p.screenshot({ path: SHOTS + '/search-pharmacy.png', fullPage: false });
  const ownErr = S1.errors.filter(e => /GGSX_SEARCH|gs-req|fuzzy|pharmFill/i.test(e));
  check(!ownErr.length, 'no page errors from the search help', ownErr);
  if (S1.errors.length) log('     other page messages:', JSON.stringify(S1.errors.slice(0, 4)));
  check(!S1.sent.length, 'nothing sent');
  await S1.ctx.close();

  /* ---------- phone ---------- */
  const S2 = await session({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 3 });
  const q2 = S2.page;
  await S2.load('/shop-now#q/Zylofrex', 3500);
  for (let i = 0; i < 30; i++) { if (await q2.evaluate(() => !!document.querySelector('#ggsx-shop .gs-req'))) break; await q2.waitForTimeout(500); }
  const ph = await q2.evaluate(() => { const r = document.querySelector('#ggsx-shop .gs-req'); if (!r) return null; const bs = [...r.querySelectorAll('.gs-btn')].map(b => Math.round(b.getBoundingClientRect().width)); return { sw: document.documentElement.scrollWidth, w: Math.round(r.getBoundingClientRect().width), bs, fs: getComputedStyle(r.querySelector('input')).fontSize }; });
  check(ph && ph.sw <= 390, 'phone 390 px: no sideways scroll', ph);
  check(ph && ph.bs.length === 2 && ph.bs[0] === ph.bs[1] && ph.bs[0] > 250, 'phone: buttons stacked full width', ph && ph.bs);
  check(ph && ph.fs === '16px', 'phone: 16 px box (no zoom on tap)', ph && ph.fs);
  await q2.screenshot({ path: SHOTS + '/search-phone.png', fullPage: false });
  await S2.ctx.close();

  await browser.close();
  log(fails ? '\n' + fails + ' check(s) FAILED' : '\nALL CHECKS PASS');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error('ERR', e); process.exit(2); });
