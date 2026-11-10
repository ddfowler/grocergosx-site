// v2.2: the four checkout fixes from the "Checkout not sent" review (Shop 45 Basket Estimate & ASAP, Shop 46 Saved Basket Links, Shop 23
// "Dates not set yet?", Shop 17 Checkout Follow-up v1.2), on the Wix-like harness page with the real Vendors & Menus sheet and the live
// Shop 34 fee snippet. Island time is set with Playwright's clock (AST = UTC−4). Nothing is sent: Wix API calls are answered here (form
// submissions are only read, Wix Data rows live in memory).
// usage: node tests/checkout-helpers-check.js dist loader.html <Shop 34 html> <Shop 17 html>     (needs Playwright; SHOTS=<dir> for screenshots)
const { chromium } = require('playwright');
const fs = require('fs');
const L = require('./lib');
const [distDir = 'dist', loaderPath = 'loader.html', s34 = '', s17 = ''] = process.argv.slice(2);
const SHOTS = process.env.SHOTS || '/tmp';
const d = L.distFiles(distDir, 'http://ggsx.test');
const loaderJs = L.loaderJs(loaderPath, d.files);
const script = p => p ? /<script>([\s\S]*?)<\/script>/.exec(fs.readFileSync(p, 'utf8'))[1] : '';
const SHOP34 = script(s34), SHOP17 = script(s17);
const CHECKOUT_FORM = '1e2a4859-2328-45ba-9c2a-280f4c1bac28', NOTSENT_FORM = '5d9dd960-515f-41d7-b615-1e3d0ab4ba3f';

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

const MILK = { id: 'g0623', n: 1, name: 'Almond Breeze Chocolate Almondmilk', size: '32 fl oz', price: 4.99, img: '', o: 1 };
const HANAMI = { id: 'rest:hanami:test-platter', n: 1, name: 'Sashimi Platter (Hanami Sushi)', size: '', price: 33, img: '', o: 1 };
const BIG = Array.from({ length: 30 }, (_, i) => ({ id: 'gtest' + (i + 1), n: 1 + (i % 2), name: 'Test product number ' + (i + 1) + ' with a long descriptive name', size: '16 oz', price: 9.99, img: '', o: i + 1 }));
const basketOf = (...lines) => { const items = {}; lines.forEach(l => { items[l.id] = l; }); return { v: 1, t: Date.now(), items }; };
const STORE = {};   // Wix Data rows (Shop 46), shared by the sessions

(async () => {
  const browser = await chromium.launch();
  let fails = 0;
  const log = (...a) => console.log(a.join(' '));
  const check = (ok, what, got) => { if (!ok) fails++; log((ok ? 'ok   ' : 'FAIL ') + what + (got !== undefined && !ok ? ' · ' + (typeof got === 'string' ? got : JSON.stringify(got)) : '')); };

  async function session(iso, basket, opts = {}) {
    const ctx = await browser.newContext(opts.ctx || { viewport: { width: 1280, height: 900 } });
    const page = await ctx.newPage();
    const errors = [], sent = [], data = [];
    page.on('pageerror', e => errors.push('pageerror: ' + e.message.slice(0, 200)));
    page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push(m.type() + ': ' + m.text().slice(0, 200)); });
    await page.clock.setFixedTime(new Date(iso));
    if (SHOP34) await page.addInitScript(SHOP34);
    if (basket) await page.addInitScript(b => { try { if (!sessionStorage.getItem('__seeded')) { localStorage.setItem('ggsx_basket', JSON.stringify(b)); sessionStorage.setItem('__seeded', '1'); } } catch (e) {} }, basket);
    await page.route('**/*', async route => {
      const req = route.request(), u = req.url(), cors = { 'access-control-allow-origin': '*' };
      if (/wixapis\.com\/oauth2\/token/.test(u)) return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ access_token: 'harness', expires_in: 3600 }), headers: cors });
      if (/wixapis\.com\/form-submission/.test(u)) { sent.push(req.postData() || ''); return route.fulfill({ status: 200, contentType: 'application/json', body: '{}', headers: cors }); }
      if (/wixapis\.com\/wix-data\/v2\/items/.test(u)) {
        if (req.method() === 'OPTIONS') return route.fulfill({ status: 204, headers: Object.assign({ 'access-control-allow-headers': '*', 'access-control-allow-methods': '*' }, cors) });
        if (req.method() === 'POST') {
          const b = JSON.parse(req.postData() || '{}'); data.push(b);
          if (b.dataCollectionId === 'GrocerGoSxShortLinks' && b.dataItem) STORE[b.dataItem.id] = b.dataItem;
          return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ dataItem: b.dataItem || {} }), headers: cors });
        }
        const m = /items\/([^?]+)\?/.exec(u);
        if (m && STORE[m[1]]) return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ dataItem: STORE[m[1]] }), headers: cors });
        return route.fulfill({ status: 404, contentType: 'application/json', body: '{"message":"not found"}', headers: cors });
      }
      if (u.startsWith('http://ggsx.test/__') && d.bodies[new URL(u).pathname]) return route.fulfill({ status: 200, contentType: 'text/plain', body: d.bodies[new URL(u).pathname], headers: cors });
      if (u.startsWith('http://ggsx.test/') || u.startsWith('http://localhost/')) {
        if (req.resourceType() === 'document') return route.fulfill({ status: 200, contentType: 'text/html', body: HTML });
        return route.fulfill({ status: 404, body: '' });
      }
      if (opts.settings && /gviz\/tq/.test(u) && /sheet=Settings/.test(u) && !/out:csv/.test(u)) {
        const r = await route.fetch(), txt = await r.text(), i = txt.indexOf('{'), j = txt.lastIndexOf('}');
        const o = JSON.parse(txt.slice(i, j + 1));
        opts.settings.forEach(([k, v]) => o.table.rows.push({ c: [{ v: k }, { v: v, f: String(v) }, { v: 'test row' }] }));
        return route.fulfill({ response: r, body: txt.slice(0, i) + JSON.stringify(o) + txt.slice(j + 1) });
      }
      if (/^https:\/\/(docs\.google\.com|[a-z0-9-]+\.googleusercontent\.com|static\.wixstatic\.com)\//.test(u)) return route.continue();
      return route.abort();
    });
    const S = { ctx, page, errors, sent, data };
    S.boot = async () => {
      await page.evaluate(code => { const s = document.createElement('script'); s.text = code; document.body.appendChild(s); }, loaderJs);
      if (SHOP17) await page.evaluate(code => { const s = document.createElement('script'); s.text = code; document.body.appendChild(s); }, SHOP17);
      let ready = false;
      for (let i = 0; i < 60 && !ready; i++) { await page.waitForTimeout(500); ready = await page.evaluate(() => [...document.querySelectorAll('#ggsx-shop button')].some(b => /^checkout$/i.test(b.textContent.trim()))); }
      if (!ready) throw new Error('no Checkout button on Shop Now');
      await page.waitForTimeout(1500);   // the sheet and Settings
    };
    await page.goto('http://localhost/shop-now' + (opts.hash || '')); await page.waitForTimeout(100);
    if (!opts.noBoot) await S.boot();
    return S;
  }
  const drawer = async S => {
    await S.page.evaluate(() => { location.hash = 'basket'; });
    await S.page.waitForTimeout(700);
    return S.page.evaluate(() => {
      const box = document.querySelector('#ggsx-shop .gs-cart .ge-box'), note = document.querySelector('#ggsx-shop .gs-cart .gs-note');
      return { box: box ? box.innerText.replace(/\s+/g, ' ').trim() : null, shown: !!(box && box.style.display !== 'none'), noteHidden: !!(note && note.style.display === 'none'),
               open: !!document.querySelector('#ggsx-shop.gs-open'), lines: document.querySelectorAll('#ggsx-shop .gs-cart .gs-line').length };
    });
  };
  const openCheckout = async (S, anchor) => {
    await S.page.evaluate(() => [...document.querySelectorAll('#ggsx-shop button')].find(b => /^checkout$/i.test(b.textContent.trim())).click());
    for (let i = 0; i < 30; i++) { await S.page.waitForTimeout(300); if (await S.page.evaluate(() => !!document.querySelector('.gc-wrap.open select[name=win] option[data-base]'))) break; }
    await S.page.waitForTimeout(900);
    if (anchor) { await S.page.evaluate(a => { const c = document.querySelector('.gc-wrap.open .gc-chip[data-id=' + a + ']'); if (c) c.click(); }, anchor); await S.page.waitForTimeout(250); }
  };
  const fill = (S, vals) => S.page.evaluate(v => {
    for (const k in v) { const i = document.querySelector('.gc-wrap.open [name=' + k + ']'); if (!i) continue; i.value = v[k]; ['input', 'change'].forEach(t => i.dispatchEvent(new Event(t, { bubbles: true }))); }
  }, vals);
  const form = S => S.page.evaluate(() => {
    const f = document.querySelector('.gc-wrap.open .gc-form'), hidden = el => !el || !el.offsetParent;
    const tot = f.querySelector('.gc-est .gc-tot b');
    return {
      date: f.querySelector('input[name=date]').value, win: f.querySelector('select[name=win]').value,
      opts: [...f.querySelectorAll('select[name=win] option')].filter(o => o.value).map(o => o.textContent + (o.disabled ? ' [off]' : '')),
      dateHidden: hidden(f.querySelector('input[name=date]')), winHidden: hidden(f.querySelector('select[name=win]')),
      flightHidden: hidden(f.querySelector('input[name=ggsx_flight]')), later: !!f.querySelector('.gc-later.on'),
      laterOn: (f.querySelector('.gc-later .gc-chip') || {}).getAttribute ? f.querySelector('.gc-later .gc-chip').getAttribute('aria-checked') : null,
      asapHint: (f.querySelector('.ge-asap') || {}).textContent || '', total: tot ? tot.textContent : null,
      est: f.querySelector('.gc-est') ? f.querySelector('.gc-est').innerText.replace(/\s+/g, ' ') : '',
      addrLabel: (f.querySelector('textarea[name=address]').closest('.gc-f').querySelector('span') || {}).textContent,
      err: (f.querySelector('.gc-err') || {}).textContent || '', bad: [...f.querySelectorAll('.bad')].map(x => x.name || x.className)
    };
  });
  const submit = async S => { await S.page.evaluate(() => document.querySelector('.gc-wrap.open .gc-btn[type=submit]').click()); await S.page.waitForTimeout(1500); };
  const subs = (S, form) => S.sent.map(x => { try { return JSON.parse(x).submission; } catch (e) { return null; } }).filter(x => x && x.formId === form).map(x => x.submissions);
  const close = async S => { const own = S.errors.filter(e => /ggsx|GGSX|Shop|gc-|ge-|gsv/i.test(e)); check(!own.length, 'no page errors from the site code', own.length ? own : S.errors.slice(0, 3)); await S.ctx.close(); };

  /* 1. groceries, Friday 6 Nov 2026 2:00 PM: the basket line, and the same total at checkout */
  let S = await session('2026-11-06T18:00:00Z', basketOf(MILK));
  let b = await drawer(S);
  check(b.shown && b.noteHidden, 'basket: the estimate box replaces the old note', b);
  check(/Estimated total incl\. service & delivery from \$36\.24/.test(b.box), 'basket: estimated total from $36.24 (4.99 + 25% + $30 delivery, side not known yet)', b.box);
  check(/Booked 2\+ days ahead: from \$25\.74/.test(b.box), 'basket: booked 2+ days ahead from $25.74 (15% + $20)', b.box);
  check(/Earliest delivery: today, evening \(5–11 PM\)/.test(b.box), 'basket: earliest delivery today, evening (5–11 PM)', b.box);
  check(/Taxes included · your final total follows the receipts\./.test(b.box), 'basket: taxes and receipts line', b.box);
  await S.page.screenshot({ path: SHOTS + '/est-basket-fri.png' });
  await openCheckout(S, 'here');
  await fill(S, { side: 'Dutch side (Sint Maarten)', date: '2026-11-06' });
  await fill(S, { win: 'Evening · 17:00–23:00' });
  await S.page.waitForTimeout(400);
  let f = await form(S);
  check(f.total === '$36.24', 'checkout: the same $36.24 for today, evening, Dutch side', f);
  check(!f.opts.some(o => /As soon as possible/.test(o)), 'checkout: no "As soon as possible" for groceries', f.opts);
  await fill(S, { date: '2026-11-09', win: 'Morning · 8:30–12:00' });
  await S.page.waitForTimeout(400);
  f = await form(S);
  check(f.total === '$25.74', 'checkout: the same $25.74 when booked for Monday morning', f.total);
  await close(S);

  /* 2. groceries, Sunday 25 Oct 2026 9:38 PM: shopping is over today */
  S = await session('2026-10-26T01:38:00Z', basketOf(MILK));
  b = await drawer(S);
  check(/Earliest delivery: tomorrow, morning \(8:30 AM–12 PM\)/.test(b.box), 'Sunday 9:38 PM: earliest delivery tomorrow morning', b.box);
  await close(S);

  /* 3. Hanami only, Monday 2 Nov 2026 7:39 PM: "As soon as possible" */
  S = await session('2026-11-02T23:39:00Z', basketOf(HANAMI));
  b = await drawer(S);
  check(/Earliest delivery: as soon as possible/.test(b.box), 'restaurant 7:39 PM: earliest delivery as soon as possible', b.box);
  check(/from \$68\.00/.test(b.box), 'restaurant: from $68.00 (33 + $10 minimum fee + $25 delivery)', b.box);
  check(!/Booked 2\+ days ahead/.test(b.box), 'restaurant: no booked-ahead line', b.box);
  await openCheckout(S, 'here');
  f = await form(S);
  check(f.date === '2026-11-02' && f.win === 'As soon as possible', 'checkout: today and "As soon as possible" picked for the client', f);
  check(f.opts[0] === 'As soon as possible', 'checkout: "As soon as possible" first in the window list', f.opts);
  check(/right away/.test(f.asapHint), 'checkout: the hint under the window', f.asapHint);
  await S.page.screenshot({ path: SHOTS + '/est-asap-checkout.png' });
  await fill(S, { first: 'Robert', last: 'Test', email: 'robert@example.com', phone: '8452066883', address: 'Simpson Bay Resort 210', side: 'Dutch side (Sint Maarten)' });
  await submit(S);
  let o = subs(S, CHECKOUT_FORM);
  check(o.length === 1 && o[0].delivery_window_6a8d === 'As soon as possible' && o[0].delivery_date_2c7e === '2026-11-02', 'order sent with "As soon as possible", today', o[0] && { w: o[0].delivery_window_6a8d, d: o[0].delivery_date_2c7e });
  check(o.length === 1 && o[0].phone_8e4a === '+18452066883', 'order phone in +1 format (Shop 18)', o[0] && o[0].phone_8e4a);
  await close(S);

  /* 4. Hanami only, Monday 10:30 PM: not taking orders */
  S = await session('2026-11-03T02:30:00Z', basketOf(HANAMI));
  b = await drawer(S);
  check(/Hanami Sushi takes orders 11:30 AM–10 PM \(island time\)/.test(b.box), 'restaurant 10:30 PM: its hours instead of a delivery time', b.box);
  await openCheckout(S, 'here');
  f = await form(S);
  check(!f.opts.some(o => /As soon as possible/.test(o)) && f.win === '', 'checkout 10:30 PM: no "As soon as possible"', f);
  await close(S);

  /* 5. "Dates not set yet?" for an arriving guest, Friday 2 PM */
  S = await session('2026-11-06T18:00:00Z', basketOf(...BIG));
  await openCheckout(S, 'arrive');
  f = await form(S);
  check(f.later && f.laterOn === 'false' && !f.dateHidden && !f.winHidden, 'arriving: the "Dates not set yet?" choice shows, off', f);
  const before = f.total;
  await S.page.evaluate(() => document.querySelector('.gc-wrap.open .gc-later .gc-chip').click());
  await S.page.waitForTimeout(500);
  f = await form(S);
  check(f.laterOn === 'true' && f.dateHidden && f.winHidden && f.flightHidden, 'on: date, window and flight step aside', f);
  check(f.addrLabel === 'Delivery address (if you know it)', 'on: the address is optional', f.addrLabel);
  await S.page.screenshot({ path: SHOTS + '/est-dates-later.png' });
  await fill(S, { first: 'Darlene', email: 'darlene@example.com', phone: '7818831362', side: 'Dutch side (Sint Maarten)' });
  await S.page.waitForTimeout(400);
  f = await form(S);
  check(/\$20\.00/.test(f.est), 'on: the estimate uses the booked-ahead delivery ($20)', f.est);
  await submit(S);
  o = subs(S, CHECKOUT_FORM);
  const x = o[0] || {};
  check(o.length === 1, 'dates later: the order is sent', S.sent.length);
  check(!('delivery_date_2c7e' in x) && x.delivery_window_6a8d === 'Dates to confirm by message' && x.delivery_address_c61d === 'To confirm by message', 'dates later: no date, "Dates to confirm by message", address to confirm', { d: x.delivery_date_2c7e, w: x.delivery_window_6a8d, a: x.delivery_address_c61d });
  check(/^Arriving\.\nDates to confirm by message\./.test(x.notes_4b1f || ''), 'dates later: notes start "Arriving." then "Dates to confirm by message."', x.notes_4b1f);
  check(/delivery \$20\.00/.test(x.order_lines_e0a2 || '') && /15%|\$4[0-9]\.\d\d/.test(x.order_lines_e0a2 || '') !== null, 'dates later: the order estimate at the booked-ahead rate', (x.order_lines_e0a2 || '').split('\n').slice(-2).join(' | '));
  await close(S);

  /* 6. without the choice a date is still needed */
  S = await session('2026-11-06T18:00:00Z', basketOf(MILK));
  await openCheckout(S, 'here');
  await fill(S, { first: 'Test', email: 't@example.com', phone: '7215550123', address: 'Villa 1', side: 'Dutch side (Sint Maarten)' });
  await submit(S);
  f = await form(S);
  check(!subs(S, CHECKOUT_FORM).length && f.bad.indexOf('date') >= 0, 'on the island: no date → nothing sent, the date is highlighted', f.bad);
  await close(S);

  /* 7. the not-sent record (Shop 17 v1.2) and its finish link (Shop 46) */
  S = await session('2026-11-07T13:30:00Z', basketOf(...BIG));
  await openCheckout(S, 'here');
  await fill(S, { first: 'Darlene', last: 'Stella', phone: '7818831362', email: 'starchaser@example.com' });
  await S.page.waitForTimeout(2500);
  await S.page.evaluate(() => window.dispatchEvent(new Event('pagehide')));
  await S.page.waitForTimeout(1200);
  const ns = subs(S, NOTSENT_FORM);
  const r = ns[0] || {};
  check(ns.length === 1, 'not sent: one record', ns.length);
  check(r.phone_c7n2 === '+17818831362', 'not sent: phone +17818831362', r.phone_c7n2);
  check((r.basket_c7n2 || '').length > 900 && /Test product number 30 with a long descriptive name/.test(r.basket_c7n2 || ''), 'not sent: the whole basket (' + (r.basket_c7n2 || '').length + ' characters, last item there)');
  check(/^https:\/\/www\.grocergosx\.com\/shop-now#b\/[A-Za-z0-9]{12}$/.test(r.finish_c7n2 || ''), 'not sent: a finish link', r.finish_c7n2);
  const row = S.data.find(q => q.dataCollectionId === 'GrocerGoSxShortLinks');
  check(row && row.dataItem && /^b[0-9a-f]{23}$/.test(row.dataItem.id) && row.dataItem.data.kind === 'basket' && !/Test product/.test(JSON.stringify(row)), 'saved basket: stored encrypted in Short tracker links', row && row.dataItem && row.dataItem.id);
  const link = r.finish_c7n2 || '';
  await close(S);

  /* 8. the finish link on a phone with an empty basket */
  if (link) {
    S = await session('2026-11-08T14:00:00Z', null, { hash: '#b/' + link.split('#b/')[1], noBoot: true, ctx: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true } });
    await S.page.evaluate(code => { const s = document.createElement('script'); s.text = code; document.body.appendChild(s); }, loaderJs);
    let reloaded = false;
    for (let i = 0; i < 40 && !reloaded; i++) { await S.page.waitForTimeout(300); reloaded = await S.page.evaluate(() => location.hash === '#basket' && !document.querySelector('#ggsx-shop')).catch(() => true); }
    await S.page.waitForTimeout(800);
    await S.page.evaluate(code => { const s = document.createElement('script'); s.text = code; document.body.appendChild(s); }, loaderJs);
    let toastText = '';
    for (let i = 0; i < 25 && !toastText; i++) { await S.page.waitForTimeout(200); toastText = await S.page.evaluate(() => (document.querySelector('.gsv-toast') || {}).textContent || ''); }
    for (let i = 0; i < 60; i++) { await S.page.waitForTimeout(300); if (await S.page.evaluate(() => document.querySelectorAll('#ggsx-shop .gs-cart .gs-line').length > 0)) break; }
    await S.page.waitForTimeout(1200);
    const back = await S.page.evaluate(() => ({ n: Object.keys((JSON.parse(localStorage.getItem('ggsx_basket') || '{}').items) || {}).length, hash: location.hash,
      open: !!document.querySelector('#ggsx-shop.gs-open'), lines: document.querySelectorAll('#ggsx-shop .gs-cart .gs-line').length }));
    back.toast = toastText;
    check(back.n === 30 && back.lines === 30 && back.open, 'finish link: the 30 lines are back and the basket is open', back);
    check(/^Welcome back! Your basket is ready \(45 items\)/.test(back.toast), 'finish link: the welcome note', back.toast);
    await S.page.screenshot({ path: SHOTS + '/est-finish-link-phone.png' });
    await close(S);
  }

  /* 9. a link that can't be read leaves the basket alone */
  S = await session('2026-11-08T14:00:00Z', basketOf(MILK), { hash: '#b/AAAAbbbbCCCC', noBoot: true });
  await S.page.evaluate(code => { const s = document.createElement('script'); s.text = code; document.body.appendChild(s); }, loaderJs);
  await S.page.waitForTimeout(4000);
  const bad = await S.page.evaluate(() => ({ items: Object.keys((JSON.parse(localStorage.getItem('ggsx_basket') || '{}').items) || {}), toast: (document.querySelector('.gsv-toast') || {}).textContent || '', hash: location.hash }));
  check(bad.items.length === 1 && bad.items[0] === 'g0623' && /couldn’t open that saved basket/.test(bad.toast) && bad.hash === '', 'unknown link: basket unchanged, a note says so', bad);
  await close(S);

  /* 10. a minimum basket on the Settings tab: the basket says how much more */
  S = await session('2026-11-06T18:00:00Z', basketOf(MILK), { settings: [['min_order', 100]] });
  b = await drawer(S);
  check(/Add \$95\.01 more to check out \(minimum \$100\.00\)\./.test(b.box) && !/Estimated total/.test(b.box), 'min_order 100: "Add $95.01 more…", no totals', b.box);
  await close(S);

  /* 11. the switches: basket_estimate 0, restaurant_asap 0, dates_later 0 */
  S = await session('2026-11-02T23:39:00Z', basketOf(HANAMI), { settings: [['basket_estimate', 0], ['restaurant_asap', 0], ['dates_later', 0]] });
  b = await drawer(S);
  check(!b.shown && !b.noteHidden, 'basket_estimate 0: the old note', b);
  await openCheckout(S, 'arrive');
  f = await form(S);
  check(!f.opts.some(o => /As soon as possible/.test(o)) && !f.later, 'restaurant_asap 0 and dates_later 0: neither shows', f);
  await close(S);

  await browser.close();
  log(fails ? fails + ' FAILED' : 'all passed');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
