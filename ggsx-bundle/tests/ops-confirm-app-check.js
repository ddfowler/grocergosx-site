// Orders app v1.1.2 in headless Chromium on a phone-sized screen, with a stand-in Orders API (nothing reaches the real one): signs in with a
// stored test session, opens a confirmed order like Darlene's (made-up contact details), taps "Message from a template" and reads the Confirmed
// text, the WhatsApp/Text/Email links and the other chips; then the list's Message button.
// usage: NODE_PATH=$(npm root -g) node tests/ops-confirm-app-check.js [ops/ggsx-ops-v1.1.2.txt]
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const appFile = process.argv[2] || path.join(__dirname, '../ops/ggsx-ops-v1.1.2.txt');
const app = fs.readFileSync(appFile, 'utf8');
const API = 'https://script.google.com/macros/s/TEST/exec';
const now = new Date().toISOString();
const sum = { id: '0f6c1a2b-3c4d-4e5f-8a9b-0c1d2e3f4a5b', stage: 'confirmed', name: 'Darlene Test', first: 'Darlene', card: 'Darlene test order', phone: '+17215550100', email: 'test@example.com',
  date: '2026-11-08', window: 'Afternoon \u00b7 12:00\u201317:00', side: 'Dutch', address: 'The Cliff 7 Rhine Road Cupevoy', items: 2, run: '', live: '',
  created: now, moved: now, stale: false, source: 'checkout', estimate: 120, basket: 90, invoice: null };
const full = Object.assign({}, sum, { notes: 'Arriving Sun Nov 08, flight Jet Blue 569, lands 2:30 PM.\nStock the unit before arrival.\nAccess: front desk or reception (Test Name).\nCheck in with registration',
  subsPref: 'Substitute the closest match', description: '', mail: { confirmed: now }, lines: [{ qty: 1, name: 'Milk', price: 4.99 }, { qty: 2, name: 'Bread', price: 3.49 }], fees: [], inv: null });
const WANT = 'Hi Darlene!\n\nYour GrocerGoSx order is confirmed for Sunday, November 8.\n\nWe\u2019ve noted your flight details and will coordinate with The Cliff reception to have your groceries stocked before your arrival.\n\nOnce we\u2019ve sourced your requested items, we\u2019ll send you a secure payment link.\n\nThank you for choosing GrocerGoSx!';
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  const errs = [], calls = [];
  page.on('pageerror', e => errs.push('PAGEERROR ' + e));
  page.on('console', m => { if (m.type() === 'error') errs.push('console ' + m.text()); });
  await page.route('https://www.grocergosx.test/**', r => {
    const u = r.request().url();
    if (u.endsWith('/app.js')) return r.fulfill({ status: 200, contentType: 'text/plain; charset=utf-8', body: app });
    return r.fulfill({ status: 200, contentType: 'text/html; charset=utf-8', body: '<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>' +
      '<script>localStorage.setItem("ggsx_ops_s",JSON.stringify({t:"tok",role:"owner",exp:Date.now()+864e5}));window.GGSX_OPS_CFG={api:"' + API + '",page:"/shop-now"};</script>' +
      '<script src="/app.js"></script></body></html>' });
  });
  await page.route(API + '*', r => {
    let b = {}; try { b = JSON.parse(r.request().postData() || '{}'); } catch (e) {}
    calls.push(b.a);
    const out = b.a === 'list' ? { ok: true, role: 'owner', orders: [sum] } : b.a === 'order' ? { ok: true, order: full } : b.a === 'ping' ? { ok: true, v: '1.1.0', helper: false } : { ok: true };
    return r.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(out) });
  });
  let fails = 0; const ok = (label, cond, extra) => { if (!cond) fails++; console.log((cond ? 'ok   ' : 'FAIL ') + label + (cond || !extra ? '' : '\n' + extra)); };
  await page.goto('https://www.grocergosx.test/shop-now#ops');
  await page.waitForFunction(() => window.GGSX_OPS && window.GGSX_OPS.v);
  ok('app loads as v1.1.2', await page.evaluate(() => window.GGSX_OPS.v) === '1.1.2');
  // the app opens on the Orders list; tap the order like Dwayne does
  await page.locator('#ggo', { hasText: 'Darlene Test' }).waitFor({ timeout: 15000 });
  await page.getByText('Darlene Test', { exact: true }).first().click();
  const btn = page.locator('button', { hasText: 'Message from a template' });
  await btn.waitFor({ timeout: 15000 });
  await page.screenshot({ path: '/tmp/ops-order.png' });
  // 1) the bottom bar's Message button (the sheet in Dwayne's screenshot)
  const bar = page.locator('button', { hasText: /^\s*Message\s*$/ });
  ok('bottom-bar Message button is there', await bar.count() > 0);
  await bar.last().click();
  const ta = page.locator('textarea.go-in');
  await ta.waitFor();
  ok('bottom-bar Message: Confirmed text is Dwayne\u2019s wording', (await ta.inputValue()) === WANT, '--- got:\n' + (await ta.inputValue()));
  await page.keyboard.press('Escape');
  await page.waitForTimeout(400);
  // 2) "Message from a template" in the Client card
  if (await ta.count()) { const x = page.locator('button[aria-label="Close"]'); if (await x.count()) await x.last().click(); await page.waitForTimeout(400); }
  await btn.click();
  await ta.waitFor();
  const text = await ta.inputValue();
  ok('Confirmed text is Dwayne\u2019s wording', text === WANT, '--- got:\n' + text);
  ok('Confirmed chip is selected', (await page.locator('.go-chips button.on').innerText()).trim() === 'Confirmed');
  const wa = await page.locator('a.go-btn', { hasText: 'WhatsApp' }).getAttribute('href');
  ok('WhatsApp link carries the text', wa === 'https://wa.me/17215550100?text=' + encodeURIComponent(WANT), wa);
  const sms = await page.locator('a.go-btn', { hasText: 'Text' }).getAttribute('href');
  ok('Text link carries the text', sms && sms.indexOf(encodeURIComponent('The Cliff reception')) > 0);
  const mail = await page.locator('a.go-btn', { hasText: 'Email' }).getAttribute('href');
  ok('Email link: subject and body', mail && mail.indexOf('subject=' + encodeURIComponent('Your GrocerGoSx order is confirmed')) > 0 && mail.indexOf(encodeURIComponent('secure payment link')) > 0);
  await page.screenshot({ path: '/tmp/ops-message.png' });
  await page.locator('.go-chips button', { hasText: 'Shopping now' }).click();
  ok('Shopping now chip unchanged', (await ta.inputValue()) === 'Hi Darlene, we\u2019re shopping your order now.\n\nGrocerGoSx');
  await page.locator('.go-chips button', { hasText: 'On the way' }).click();
  ok('On the way chip unchanged', (await ta.inputValue()).indexOf('Hi Darlene, your order is on its way to The Cliff 7 Rhine Road Cupevoy. See you soon!') === 0);
  await page.locator('.go-chips button', { hasText: 'Confirmed' }).click();
  ok('back to Confirmed', (await ta.inputValue()) === WANT);
  ok('no page errors', errs.length === 0, errs.join('\n'));
  ok('only the stand-in API was called (' + [...new Set(calls)].join(', ') + ')', calls.includes('order'));
  await browser.close();
  console.log(fails ? fails + ' FAILED' : 'all app checks pass');
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
