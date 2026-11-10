// v2.0: shopping hours at checkout (Shop 44 Shopping Hours, Shop 12 Checkout Polish v1.1, the Shop 2 hook GGSX_SHOP_API.product), on the
// Wix-like harness page with the real Vendors & Menus sheet. The island clock is set with Playwright's clock (AST = UTC−4). Nothing is sent:
// Wix API calls are answered here, and the one order placed is only read. Walks: groceries at different times of the week, a basket of only
// snacks, drinks and ice on a Friday night (and its order notes), the same basket on a Monday night, a pharmacy-only basket (old rule),
// a holiday and a weekday with other hours added to the Settings tab as the site reads it, a restaurant window that has to stay off after
// a date change (Shop 27), phone width.
// usage: node tests/shopping-hours-check.js dist loader.html     (needs Playwright; SHOTS=<dir> for the screenshots)
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

/* basket lines (real Products tab ids) */
const MILK = { id: 'g0623', n: 1, name: 'Almond Breeze Chocolate Almondmilk', size: '32 fl oz', price: 4.99, img: '', o: 1 };
const POPCORN = { id: 'g1232', n: 2, name: 'Act II Popcorn', size: '', price: 4.99, img: '', o: 2 };
const BEER = { id: 'g2487', n: 1, name: 'Amstel Bright', size: '24 bottles', price: 36.49, img: '', o: 3 };
const ICE = { id: 'g1875', n: 2, name: 'Bag of Ice', size: '10 lb', price: 4.49, img: '', o: 4 };
const PHARM = { id: 'pharm:req-test', n: 1, name: 'Pharmacy: test request', size: 'priced from the pharmacy receipt', price: 0, img: '', o: 1 };
const REST = { id: 'rest:rolling-boil:test', n: 1, name: 'Rolling Boil: test bowl', size: '', price: 18, img: '', o: 1 };
const basketOf = (...lines) => { const items = {}; lines.forEach(l => { items[l.id] = l; }); return { v: 1, t: Date.now(), items }; };

const W = ['Morning · 8:30–12:00', 'Afternoon · 12:00–17:00', 'Evening · 17:00–23:00', 'Any time'];
const HOURS = 'Mon–Sat 8 AM–7 PM, Sun 9 AM–1 PM';
const HINT = h => `We shop on your delivery day, while the supermarkets are open (${h || HOURS}), and need at least 3 hours’ notice.`;
const NONE = 'Today’s shopping hours are over — please pick tomorrow or later.';
const MAYBE = ' Only snacks, drinks and ice? The Late Night Snack Run still delivers tonight until 11 PM (order by 9:30 PM).';
const SNACK = 'Your basket is all snacks, drinks and ice, so tonight’s Late Night Snack Run can bring it, until 11 PM (order by 9:30 PM).';
const LATE = ' — too late for this day', OUT = ' — outside shopping hours';

(async () => {
  const browser = await chromium.launch();
  let fails = 0;
  const log = (...a) => console.log(a.join(' '));
  const check = (ok, what, got) => { if (!ok) fails++; log((ok ? 'ok   ' : 'FAIL ') + what + (got !== undefined && !ok ? ' · ' + (typeof got === 'string' ? got : JSON.stringify(got)) : '')); };

  /* one visitor: island time (an ISO time in UTC), a basket, optional extra Settings rows as the site would read them */
  async function session(iso, basket, opts = {}) {
    const ctx = await browser.newContext(opts.ctx || { viewport: { width: 1280, height: 900 } });
    const page = await ctx.newPage();
    const errors = [], sent = [];
    page.on('pageerror', e => errors.push('pageerror: ' + e.message.slice(0, 200)));
    page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push(m.type() + ': ' + m.text().slice(0, 200)); });
    await page.clock.setFixedTime(new Date(iso));
    await page.addInitScript(b => { try { if (!sessionStorage.getItem('__seeded')) { localStorage.setItem('ggsx_basket', JSON.stringify(b)); sessionStorage.setItem('__seeded', '1'); } } catch (e) {} }, basket);
    await page.route('**/*', async route => {
      const u = route.request().url();
      if (/wixapis\.com\/oauth2\/token/.test(u)) return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ access_token: 'harness', expires_in: 3600 }), headers: { 'access-control-allow-origin': '*' } });
      if (/wixapis\.com\/form-submission/.test(u)) { sent.push(route.request().postData() || ''); return route.fulfill({ status: 200, contentType: 'application/json', body: '{}', headers: { 'access-control-allow-origin': '*' } }); }
      if (u.startsWith('http://ggsx.test/__') && d.bodies[new URL(u).pathname]) return route.fulfill({ status: 200, contentType: 'text/plain', body: d.bodies[new URL(u).pathname], headers: { 'access-control-allow-origin': '*' } });
      if (u.startsWith('http://ggsx.test/') || u.startsWith('http://localhost/')) {
        if (route.request().resourceType() === 'document') return route.fulfill({ status: 200, contentType: 'text/html', body: HTML });
        return route.fulfill({ status: 404, body: '' });
      }
      if (opts.settings && /gviz\/tq/.test(u) && /sheet=Settings/.test(u)) {           /* extra Settings rows, as gviz would give them */
        const r = await route.fetch(), txt = await r.text(), i = txt.indexOf('{'), j = txt.lastIndexOf('}');
        const o = JSON.parse(txt.slice(i, j + 1));
        opts.settings.forEach(([k, v]) => o.table.rows.push({ c: [{ v: k }, { v: v, f: String(v) }, { v: 'test row' }] }));
        return route.fulfill({ response: r, body: txt.slice(0, i) + JSON.stringify(o) + txt.slice(j + 1) });
      }
      if (/^https:\/\/(docs\.google\.com|[a-z0-9-]+\.googleusercontent\.com|static\.wixstatic\.com)\//.test(u)) return route.continue();
      return route.abort();
    });
    const runLoader = () => page.evaluate(code => { const s = document.createElement('script'); s.text = code; document.body.appendChild(s); }, loaderJs);
    await page.goto('http://localhost/shop-now'); await page.waitForTimeout(100); await runLoader();
    let ready = false;
    for (let i = 0; i < 60 && !ready; i++) { await page.waitForTimeout(500); ready = await page.evaluate(() => [...document.querySelectorAll('#ggsx-shop button')].some(b => /^checkout$/i.test(b.textContent.trim()))); }
    if (!ready) throw new Error('no Checkout button on Shop Now');
    await page.evaluate(() => [...document.querySelectorAll('#ggsx-shop button')].find(b => /^checkout$/i.test(b.textContent.trim())).click());
    for (let i = 0; i < 30; i++) { await page.waitForTimeout(300); if (await page.evaluate(() => !!document.querySelector('.gc-wrap.open select[name=win] option[data-base]'))) break; }
    await page.waitForTimeout(900);                     /* Settings loaded, Shop 27's 60/400 ms passes done */
    await page.evaluate(() => { const c = document.querySelector('.gc-wrap.open .gc-chip[data-id=here]'); if (c) c.click(); });   /* "Yes, I'm here": the rest of the form shows */
    await page.waitForTimeout(200);
    return { ctx, page, errors, sent };
  }
  const state = p => p.evaluate(() => {
    const f = document.querySelector('.gc-wrap.open .gc-form'), hint = f && f.querySelector('.gc-hint');
    return {
      date: f.querySelector('input[name=date]').value, min: f.querySelector('input[name=date]').min,
      opts: [...f.querySelectorAll('select[name=win] option')].filter(o => o.value).map(o => ({ v: o.value, t: o.textContent, off: o.disabled })),
      hint: hint ? hint.textContent : null, bad: hint ? hint.classList.contains('bad') : null,
      kind: window.GGSX_SHOPHOURS ? GGSX_SHOPHOURS.kind() : 'no module'
    };
  });
  const setDate = async (p, ymd) => {
    await p.evaluate(v => { const i = document.querySelector('.gc-wrap.open input[name=date]'); i.value = v; ['input', 'change'].forEach(t => i.dispatchEvent(new Event(t, { bubbles: true }))); }, ymd);
    await p.waitForTimeout(400);
    return state(p);
  };
  /* expected: one entry per window, '' = can be picked, 'late' / 'out' / 'rest' = switched off with that wording */
  const expect = (s, want, what) => {
    const suf = { '': '', late: LATE, out: OUT };
    const ok = s.opts.length === 4 && s.opts.every((o, i) => o.v === W[i] && (want[i] === 'rest' ? o.off && o.t === W[i] + ' — restaurant closed' : o.off === !!want[i] && o.t === W[i] + suf[want[i]]));
    check(ok, what + ': ' + want.map((w, i) => W[i].split(' ')[0] + (w ? ' ' + w : ' ok')).join(', '), s.opts.map(o => o.t + (o.off ? ' [off]' : '')));
  };
  const close = async S => { const own = S.errors.filter(e => /SHOPHOURS|Shopping Hours|GGSX_POLISH|Shop 12|Shop 44|gc-hint/i.test(e)); check(!own.length, 'no page errors from the checkout modules', own); await S.ctx.close(); };

  /* 1. groceries, Friday 6 Nov 2026 2:00 PM */
  let S = await session('2026-11-06T18:00:00Z', basketOf(MILK));
  let s = await state(S.page);
  check(s.kind === 'shop', 'a basket with milk counts as groceries', s.kind);
  check(s.opts.length === 4, 'checkout open with the four windows', s.opts);
  const prod = await S.page.evaluate(() => { const p = window.GGSX_SHOP_API && GGSX_SHOP_API.product && GGSX_SHOP_API.product('g0623'); return p ? { cat: p.cat, sub: p.sub, name: p.name } : null; });
  check(prod && prod.cat === 'Dairy & Eggs' && prod.sub === 'Milk & Dairy', 'GGSX_SHOP_API.product gives a basket line’s department and aisle', prod);
  s = await setDate(S.page, '2026-11-06');
  expect(s, ['late', 'late', '', ''], 'Fri 2 PM, today');
  check(s.hint === HINT() && !s.bad, 'hint gives the shopping hours', s.hint);
  s = await setDate(S.page, '2026-11-08');
  expect(s, ['out', '', '', ''], 'Fri 2 PM, for Sunday');
  s = await setDate(S.page, '2026-11-07');
  expect(s, ['', '', '', ''], 'Fri 2 PM, for Saturday');
  await S.page.evaluate(() => document.querySelector('.gc-wrap.open select[name=win]').scrollIntoView({ block: 'center' }));
  await S.page.screenshot({ path: SHOTS + '/hours-fri-2pm.png' });
  await close(S);

  /* 2. groceries, Friday 6:30 PM: after the last call */
  S = await session('2026-11-06T22:30:00Z', basketOf(MILK, BEER));
  s = await setDate(S.page, '2026-11-06');
  expect(s, ['late', 'late', 'out', 'out'], 'Fri 6:30 PM, today');
  check(s.hint === NONE + MAYBE && s.bad, 'hint: shopping is over today, the snack run for snacks only', s.hint);
  s = await setDate(S.page, '2026-11-07');
  expect(s, ['', '', '', ''], 'Fri 6:30 PM, for Saturday');
  check(s.hint === HINT() && !s.bad, 'Saturday: the usual hint', s.hint);
  await close(S);

  /* 3. snacks, drinks and ice only, Friday 8:00 PM: the Late Night Snack Run, and its order notes */
  S = await session('2026-11-07T00:00:00Z', basketOf(POPCORN, BEER, ICE));
  s = await setDate(S.page, '2026-11-06');
  check(s.kind === 'snack', 'popcorn + beer + bagged ice count as snacks, drinks and ice', s.kind);
  expect(s, ['late', 'late', '', ''], 'Fri 8 PM, snack basket, today');
  check(s.hint === SNACK && !s.bad, 'hint: tonight’s Late Night Snack Run', s.hint);
  await S.page.evaluate(() => document.querySelector('.gc-wrap.open select[name=win]').scrollIntoView({ block: 'center' }));
  await S.page.screenshot({ path: SHOTS + '/hours-snack-fri-8pm.png' });
  const p = S.page;
  await p.evaluate(() => {
    const f = document.querySelector('.gc-wrap.open .gc-form'), set = (n, v) => { const i = f.querySelector('[name=' + n + ']'); i.value = v; ['input', 'change'].forEach(t => i.dispatchEvent(new Event(t, { bubbles: true }))); };
    const here = [...document.querySelectorAll('.gc-wrap.open .gc-chip')].find(c => c.getAttribute('data-id') === 'here'); if (here) here.click();
    set('first', 'Harness'); set('last', 'Test'); set('email', 'harness@example.com'); set('phone', '+1 721 555 0123');
    set('address', 'Test villa'); set('side', 'Dutch side (Sint Maarten)'); set('win', 'Evening · 17:00–23:00'); set('notes', 'Gate code 1234');
  });
  await p.waitForTimeout(300);
  await p.evaluate(() => document.querySelector('.gc-wrap.open .gc-form button[type=submit]').click());
  for (let i = 0; i < 20 && !S.sent.length; i++) await p.waitForTimeout(300);
  let body = null; try { body = JSON.parse(S.sent[0] || 'null'); } catch (e) {}
  const notes = body && body.submission && body.submission.submissions && body.submission.submissions.notes_4b1f;
  check(typeof notes === 'string' && notes.split('\n').indexOf('Late Night Snack Run (after supermarket hours).') >= 0 && /\nGate code 1234$/.test(notes),
        'the order is placed for the evening; its notes have the line "Late Night Snack Run (after supermarket hours)." above the client’s notes', notes);
  check(body && body.submission.submissions.delivery_window_6a8d === 'Evening · 17:00–23:00' && body.submission.submissions.delivery_date_2c7e === '2026-11-06', 'date and window sent as picked', body && body.submission.submissions);
  await close(S);

  /* 4. the same basket at 9:45 PM: past the snack run's order time */
  S = await session('2026-11-07T01:45:00Z', basketOf(POPCORN, BEER, ICE));
  s = await setDate(S.page, '2026-11-06');
  expect(s, ['late', 'late', 'late', 'late'], 'Fri 9:45 PM, snack basket, today');
  check(s.hint === NONE && s.bad, 'hint: shopping is over today', s.hint);
  await close(S);

  /* 5. the same basket on a Monday night: no snack run */
  S = await session('2026-11-09T23:30:00Z', basketOf(POPCORN, BEER, ICE));
  s = await setDate(S.page, '2026-11-09');
  expect(s, ['late', 'late', 'out', 'out'], 'Mon 7:30 PM, snack basket, today');
  check(s.hint === NONE && s.bad, 'hint: shopping is over today', s.hint);
  await close(S);

  /* 6. groceries, Sunday 8:00 AM and 12:30 PM */
  S = await session('2026-11-08T12:00:00Z', basketOf(MILK));
  s = await setDate(S.page, '2026-11-08');
  expect(s, ['out', '', '', ''], 'Sun 8 AM, today (shops open at 9)');
  await close(S);
  S = await session('2026-11-08T16:30:00Z', basketOf(MILK));
  s = await setDate(S.page, '2026-11-08');
  expect(s, ['late', 'out', 'out', 'out'], 'Sun 12:30 PM, today (last call at noon)');
  check(s.hint === NONE && s.bad, 'hint: shopping is over today (no snack run on Sunday)', s.hint);
  s = await setDate(S.page, '2026-11-09');
  expect(s, ['', '', '', ''], 'Sun 12:30 PM, for Monday');
  await close(S);

  /* 7. groceries, Saturday 6:00 AM: the morning window still works */
  S = await session('2026-11-07T10:00:00Z', basketOf(MILK));
  s = await setDate(S.page, '2026-11-07');
  expect(s, ['', '', '', ''], 'Sat 6 AM, today');
  await close(S);

  /* 8. pharmacy only, Friday 7:30 PM: the old rule (lead time only) */
  S = await session('2026-11-06T23:30:00Z', basketOf(PHARM));
  s = await setDate(S.page, '2026-11-06');
  check(s.kind === 'none', 'a pharmacy-only basket is not shopped at a supermarket', s.kind);
  expect(s, ['late', 'late', '', ''], 'Fri 7:30 PM, pharmacy only, today');
  check(s.hint === 'Orders need at least 3 hours\' notice.', 'pharmacy only: Shop 12’s own hint', s.hint);
  await close(S);

  /* 9. a holiday and a Saturday with other hours, typed into the Settings tab */
  S = await session('2026-11-06T18:00:00Z', basketOf(MILK), { settings: [['shop_closed_2026-11-10', 1], ['shop_opens_sat', 10]] });
  s = await setDate(S.page, '2026-11-10');
  expect(s, ['out', 'out', 'out', 'out'], 'holiday Tue 10 Nov');
  check(s.hint === 'The supermarkets are closed on Tue 10 Nov — please pick another date.' && s.bad, 'hint: closed that day', s.hint);
  s = await setDate(S.page, '2026-11-07');
  expect(s, ['out', '', '', ''], 'Saturday opening at 10');
  check(s.hint === HINT('Mon–Fri 8 AM–7 PM, Sat 10 AM–7 PM, Sun 9 AM–1 PM'), 'hint lists Saturday on its own', s.hint);
  s = await setDate(S.page, '2026-11-11');
  expect(s, ['', '', '', ''], 'Wed 11 Nov, a normal day');
  await close(S);

  /* 10. a restaurant window stays off after a date change (Shop 27 + Shop 12 v1.1) */
  S = await session('2026-11-06T19:00:00Z', basketOf(REST));
  s = await state(S.page);
  check(s.kind === 'none', 'restaurant only: not shopped at a supermarket', s.kind);
  s = await setDate(S.page, '2026-11-07');
  await S.page.waitForTimeout(400); s = await state(S.page);
  expect(s, ['rest', '', '', ''], 'restaurant (14:00–19:00), for Saturday');
  s = await setDate(S.page, '2026-11-09');
  await S.page.waitForTimeout(400); s = await state(S.page);
  expect(s, ['rest', '', '', ''], 'restaurant, for Monday after a second date change');
  await close(S);

  /* 11. phone width */
  S = await session('2026-11-06T22:30:00Z', basketOf(MILK), { ctx: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 } });
  s = await setDate(S.page, '2026-11-06');
  await S.page.evaluate(() => { const h = document.querySelector('.gc-wrap.open select[name=win]'); if (h) h.scrollIntoView({ block: 'center' }); });
  await S.page.waitForTimeout(300);
  const wide = await S.page.evaluate(() => ({ sw: document.querySelector('.gc-wrap.open').scrollWidth, cw: document.querySelector('.gc-wrap.open').clientWidth, hint: (document.querySelector('.gc-wrap.open .gc-hint') || {}).offsetWidth }));
  check(wide.sw <= wide.cw + 1, 'phone 390 px: the checkout has no sideways scroll', wide);
  await S.page.screenshot({ path: SHOTS + '/hours-phone.png' });
  await close(S);

  log(fails ? fails + ' check(s) FAILED' : 'all checks passed');
  await browser.close();
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
