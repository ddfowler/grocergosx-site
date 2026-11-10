// v1.8: items sold by weight (Shop 42), on the Wix-like harness page with the real Vendors & Menus sheet, where the test marks three
// products "per lb" in the Products tab as it is read (nothing is written to the sheet, nothing is sent: Wix API calls are blocked).
// Walks: Shop Now card ($/lb, Sold by weight) → Add = 1 lb → ½ lb steps → basket lines and count → checkout (count, note, order text
// in the Orders API format) → the run sheet from that order (label weight in lb and in kg, price, Got it, total, shopped summary)
// → the client's live page with those weights (signed state, as Shop 9 saves it) → the order editor's ½ lb steps → phone width.
// usage: node tests/weight-check.js dist loader.html [shop34.js]     (needs Playwright; SHOTS=<dir> for the screenshots)
const fs = require('fs');
const { chromium } = require('playwright');
const L = require('./lib');
const [distDir = 'dist', loaderPath = 'loader.html', shop34Path = ''] = process.argv.slice(2);
const SHOTS = process.env.SHOTS || '/tmp';
const d = L.distFiles(distDir, 'http://ggsx.test');
const loaderJs = L.loaderJs(loaderPath, d.files);
const SHOP34 = shop34Path && fs.existsSync(shop34Path) ? fs.readFileSync(shop34Path, 'utf8') : '';
const BYWEIGHT = { g0337: 'Beef Boneless Sirloin Steak', g0333: 'Salmon Fillets', g0017: 'Gala Apples' };

const HTML = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>harness</title>
${SHOP34 ? '<script>' + SHOP34 + '</script>' : ''}</head><body>
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

/* CSV in/out (the gviz export quotes every cell) */
function parseCsv(t) {
  const rows = []; let row = [], cell = '', q = false;
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (q) { if (c === '"') { if (t[i + 1] === '"') { cell += '"'; i++; } else q = false; } else cell += c; }
    else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\n' || c === '\r') { if (c === '\r' && t[i + 1] === '\n') i++; row.push(cell); rows.push(row); row = []; cell = ''; }
    else cell += c;
  }
  if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
  return rows;
}
const toCsv = rows => rows.map(r => r.map(c => '"' + String(c).replace(/"/g, '""') + '"').join(',')).join('\n');
function markPerLb(text, set) {
  const rows = parseCsv(text), h = rows[0].map(x => x.trim().toLowerCase()), id = h.indexOf('id'), size = h.indexOf('size');
  let n = 0;
  rows.slice(1).forEach(r => { if ((set || BYWEIGHT)[r[id]]) { r[size] = 'per lb'; n++; } });
  return { csv: toCsv(rows), n };
}
// the gviz JSON answer (the home page asks for a query; the answer is google.visualization.Query.setResponse({...}) behind a comment)
function markPerLbJson(text, set) {
  const a = text.indexOf('setResponse('), b = text.lastIndexOf(')');
  const j = JSON.parse(text.slice(a + 12, b)), cols = j.table.cols.map(c => String(c.label || '').trim().toLowerCase());
  const id = cols.indexOf('id'), size = cols.indexOf('size');
  let n = 0;
  j.table.rows.forEach(r => { const v = r.c[id] && r.c[id].v; if ((set || BYWEIGHT)[v]) { r.c[size] = { v: 'per lb' }; n++; } });
  return { body: text.slice(0, a + 12) + JSON.stringify(j) + text.slice(b), n };
}
function islandDate(add) {
  const p = {}; new Intl.DateTimeFormat('en-GB', { timeZone: 'America/Lower_Princes', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date()).forEach(x => { p[x.type] = x.value; });
  const t = new Date(p.year + '-' + p.month + '-' + p.day + 'T12:00:00Z'); t.setUTCDate(t.getUTCDate() + add); return t.toISOString().slice(0, 10);
}

(async () => {
  /* the run sheet's live sync and the client's page sign with WebCrypto, which needs a secure origin */
  const browser = await chromium.launch();   /* pages open on http://localhost (a secure origin: the live sync and the client's page sign with WebCrypto) */
  const out = []; let fails = 0;
  const log = (...a) => { const s = a.join(' '); out.push(s); console.log(s); };
  const check = (ok, what, got) => { if (!ok) fails++; log((ok ? 'ok   ' : 'FAIL ') + what + (got !== undefined ? ' · ' + (typeof got === 'string' ? got : JSON.stringify(got)) : '')); };
  async function session(opts, set) {
    const ctx = await browser.newContext(opts);
    const page = await ctx.newPage();
    const errors = [], sent = [];
    let marked = 0; const gv = [];
    page.on('pageerror', e => errors.push('pageerror: ' + e.message.slice(0, 200)));
    page.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errors.push(m.type() + ': ' + m.text().slice(0, 200)); });
    await page.route('**/*', async route => {
      const u = route.request().url();
      if (/wixapis\.com\/oauth2\/token/.test(u)) return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ access_token: 'harness', expires_in: 3600 }), headers: { 'access-control-allow-origin': '*' } });
      if (/wixapis\.com\/form-submission/.test(u)) { sent.push({ url: u, body: route.request().postData() }); return route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ submission: { id: 'harness-' + sent.length, status: 'CONFIRMED' } }), headers: { 'access-control-allow-origin': '*' } }); }
      if (u.startsWith('http://ggsx.test/__') && d.bodies[new URL(u).pathname]) return route.fulfill({ status: 200, contentType: 'text/plain', body: d.bodies[new URL(u).pathname], headers: { 'access-control-allow-origin': '*' } });
      if (u.startsWith('http://ggsx.test/') || u.startsWith('http://localhost/')) {
        if (route.request().resourceType() === 'document') return route.fulfill({ status: 200, contentType: 'text/html', body: HTML });
        return route.fulfill({ status: 404, body: '' });
      }
      if (/docs\.google\.com/.test(u)) gv.push(decodeURIComponent(u).replace(/^.*sheet=/, '').slice(0, 60));
      if (/docs\.google\.com\/spreadsheets\/.*gviz.*[?&]sheet=Products\b/.test(u)) {
        const r = await route.fetch(), raw = await r.text();
        if (/setResponse\(/.test(raw.slice(0, 200))) { const m = markPerLbJson(raw, set); marked += m.n; return route.fulfill({ status: 200, contentType: 'application/javascript; charset=utf-8', body: m.body, headers: { 'access-control-allow-origin': '*' } }); }
        const m = markPerLb(raw, set); marked += m.n;
        return route.fulfill({ status: 200, contentType: 'text/csv; charset=utf-8', body: m.csv, headers: { 'access-control-allow-origin': '*' } });
      }
      if (/^https:\/\/(docs\.google\.com|[a-z0-9-]+\.googleusercontent\.com|static\.wixstatic\.com)\//.test(u)) return route.continue();
      return route.abort();
    });
    const runLoader = () => page.evaluate(code => { const s = document.createElement('script'); s.text = code; document.body.appendChild(s); }, loaderJs);
    const load = async (p, wait) => { await page.goto('http://localhost' + p); await page.waitForTimeout(100); await runLoader(); await page.waitForTimeout(wait || 2500); };
    return { ctx, page, errors, sent, load, marked: () => marked, gv: () => gv };
  }

  /* ---------- desktop: Shop Now ---------- */
  const S1 = await session({ viewport: { width: 1280, height: 900 } });
  const p = S1.page;
  await S1.load('/shop-now#d/meat-fish-and-deli/fresh-meat', 3500);
  for (let i = 0; i < 30; i++) { if (await p.evaluate(() => !!document.querySelector('#ggsx-shop .gs-card'))) break; await p.waitForTimeout(500); }
  check(S1.marked() === 3, 'test sheet: 3 products marked per lb', String(S1.marked()));
  const card = id => p.evaluate(id => { const c = document.querySelector('#ggsx-shop .gs-card[data-id="' + id + '"]'); if (!c) return null; return { name: c.querySelector('.gs-name').textContent, meta: c.querySelector('.gs-meta').textContent, price: c.querySelector('.gs-price').textContent, step: (c.querySelector('.gs-step .gs-n') || {}).textContent || '', add: !!c.querySelector('.gs-add') }; }, id);
  let c = await card('g0337');
  check(c && c.price === '$19.49/lb' && c.meta === 'Sold by weight' && c.add, 'sirloin card: price per lb, "Sold by weight", Add', c);
  const other = await p.evaluate(() => { const c = [...document.querySelectorAll('#ggsx-shop .gs-card')].find(c => c.getAttribute('data-id') === 'g0359'); return c ? c.querySelector('.gs-price').textContent + ' · ' + c.querySelector('.gs-meta').textContent : 'not shown'; });
  check(/^\$\d+\.\d\d$/.test(other.split(' · ')[0]), 'a per-pack meat item keeps its plain price and size', other);
  const click = (id, sel) => p.evaluate(([id, sel]) => { const b = document.querySelector('#ggsx-shop .gs-card[data-id="' + id + '"] ' + sel); if (b) b.click(); return !!b; }, [id, sel]);
  await click('g0337', '.gs-add'); await p.waitForTimeout(300);
  c = await card('g0337'); check(c.step === '1 lb', 'Add puts 1 lb in the basket', c.step);
  await click('g0337', '.gs-step button:last-child'); await p.waitForTimeout(200);
  await click('g0337', '.gs-step button:last-child'); await p.waitForTimeout(200);
  await click('g0337', '.gs-step button:last-child'); await p.waitForTimeout(200);
  await click('g0337', '.gs-step button:last-child'); await p.waitForTimeout(200);
  c = await card('g0337'); check(c.step === '3 lb', '+ four times: 3 lb (½ lb steps)', c.step);
  await click('g0337', '.gs-step button:first-child'); await p.waitForTimeout(200);
  c = await card('g0337'); check(c.step === '2.5 lb', '− once: 2.5 lb', c.step);
  await click('g0337', '.gs-step button:last-child'); await p.waitForTimeout(200);
  /* salmon: 2 lb; a normal grocery item: 2 × */
  await p.evaluate(() => { location.hash = '#d/meat-fish-and-deli/fresh-fish-seafood'; }); await p.waitForTimeout(800);
  await click('g0333', '.gs-add'); await p.waitForTimeout(200); await click('g0333', '.gs-step button:last-child'); await p.waitForTimeout(200); await click('g0333', '.gs-step button:last-child'); await p.waitForTimeout(200);
  c = await card('g0333'); check(c && c.step === '2 lb' && c.price === '$13.99/lb', 'salmon: 2 lb at $13.99/lb', c);
  await click('g0335', '.gs-add'); await p.waitForTimeout(200); await click('g0335', '.gs-step button:last-child'); await p.waitForTimeout(300);
  c = await card('g0335'); check(c && c.step === '2', 'shrimp 2 lb bag (per pack): whole numbers as before', c);
  const basket = await p.evaluate(() => JSON.parse(localStorage.getItem('ggsx_basket')).items);
  check(basket.g0337 && basket.g0337.n === 3 && basket.g0337.size === 'per lb' && basket.g0337.price === 19.49, 'basket line: n = 3 (lb), size "per lb", price per lb', basket.g0337);
  const cart = await p.evaluate(() => ({ head: document.querySelector('#ggsx-shop .gs-cart-h h2').textContent, lines: [...document.querySelectorAll('#ggsx-shop .gs-line')].map(l => l.querySelector('.gs-ln').textContent + ' | ' + l.querySelector('.gs-lm').textContent + ' | ' + l.querySelector('.gs-lr b').textContent + ' | ' + (l.querySelector('.gs-n') || {}).textContent), sum: document.querySelector('#ggsx-shop .gs-sum b').textContent, note: (() => { const n = document.querySelector('#ggsx-shop .gs-wnote'); return n && !n.hidden ? n.textContent : ''; })() }));
  log('     basket:', JSON.stringify(cart));
  check(/\(4\)/.test(cart.head), 'basket count: 1 + 1 + 2 = 4 items', cart.head);
  check(cart.lines.some(l => /^Beef Boneless Sirloin Steak \| about 3 lb · \$19\.49\/lb \| est\. \$58\.47 \| 3 lb$/.test(l)), 'basket line: "about 3 lb · $19.49/lb", "est. $58.47"');
  check(cart.sum === '$134.43', 'basket total $58.47 + $27.98 + 2 × $23.99', cart.sum);
  check(/estimate/.test(cart.note), 'weight note under the basket total', cart.note);
  const hdr = await p.evaluate(() => { const t = document.querySelector('.ggsx-hb text, .ggsx-hb [class*=num], #gg-top [class*=badge], .gg-top [class*=count]'); return t ? t.textContent : ''; });
  if (hdr) check(hdr === '4', 'header basket badge counts 4', hdr);

  /* ---------- checkout ---------- */
  for (let i = 0; i < 40; i++) { if (await p.evaluate(() => [...document.querySelectorAll('#ggsx-shop button')].some(b => /^checkout$/i.test(b.textContent.trim()) && !b.disabled))) break; await p.waitForTimeout(500); }
  await p.evaluate(() => { const b = [...document.querySelectorAll('#ggsx-shop button')].find(b => /^checkout$/i.test(b.textContent.trim())); b && b.click(); });
  await p.waitForTimeout(2000);
  await p.evaluate(() => { const c = document.querySelector('.gc-wrap.open .gc-chip[data-id="here"]'); c && c.click(); });
  await p.waitForTimeout(800);
  const ck = await p.evaluate(() => { const w = document.querySelector('.gc-wrap.open'); if (!w) return null; const n = w.querySelector('.gc-wnote'); return { est: [...w.querySelectorAll('.gc-est > div')].filter(r => getComputedStyle(r).display !== 'none').map(r => r.textContent.replace(/\s+/g, ' ').trim()).join(' | '), note: n && !n.hidden ? n.textContent : '' }; });
  log('     checkout:', JSON.stringify(ck));
  check(ck && /Basket \(4 items\)\$134\.43/.test(ck.est), 'checkout: "Basket (4 items) $134.43"');
  check(ck && /invoice follows the weight/.test(ck.note), 'checkout: note about weights');
  /* fill and send (the submission is blocked; the test reads what would be sent) */
  const date = islandDate(5);
  await p.evaluate(date => {
    const f = document.querySelector('.gc-wrap.open .gc-form');
    const set = (n, v) => { const e = f.querySelector('[name="' + n + '"]'); if (!e) return; if (e.tagName === 'SELECT') { const o = [...e.options].find(o => o.value && !o.disabled); e.value = v || (o && o.value) || ''; } else e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); };
    set('first', 'Test'); set('last', 'Weight'); set('email', 'test@example.com'); set('phone', '+1 721 555 0100'); set('address', 'Test Villa, Pelican Key'); set('side', ''); set('date', date); set('win', ''); set('notes', 'harness');
  }, date);
  await p.waitForTimeout(600);
  await p.evaluate(() => { const f = document.querySelector('.gc-wrap.open .gc-form'); f.querySelectorAll('select').forEach(s => { if (s.closest('.gc-pi')) return; if (!s.value) { const o = [...s.options].find(o => o.value && !o.disabled); if (o) { s.value = o.value; s.dispatchEvent(new Event('change', { bubbles: true })); } } }); });
  /* the long run sheet token, as Shop 8 hands it to Shop 19 for the short #r/ link */
  await p.evaluate(() => { const S = window.GGSX_SHORT; if (S && S.forRun && !S.__wrapped) { const o = S.forRun; S.forRun = function (t) { window.__runTok = t; return o.apply(this, arguments); }; S.__wrapped = 1; } });
  await p.waitForTimeout(400);
  await p.evaluate(() => { const b = document.querySelector('.gc-wrap.open .gc-form button[type=submit]'); b && b.click(); });
  for (let i = 0; i < 20 && !S1.sent.length; i++) await p.waitForTimeout(400);
  if (!S1.sent.length) log('     not sent:', await p.evaluate(() => { const f = document.querySelector('.gc-wrap.open .gc-form'); if (!f) return 'no form'; return JSON.stringify({ invalid: [...f.querySelectorAll(':invalid')].map(e => e.name || e.className), err: [...document.querySelectorAll('.gc-wrap.open .gc-err, .gc-wrap.open .gc-min')].map(e => e.textContent).filter(Boolean) }); }));
  let fields = {};
  try { fields = JSON.parse(S1.sent[0].body).submission.submissions; } catch (e) {}
  const orderText = Object.values(fields).find(v => typeof v === 'string' && /Basket total/.test(v)) || '';
  const runLink = Object.values(fields).find(v => typeof v === 'string' && /#run\//.test(v)) || ('#run/' + (await p.evaluate(() => window.__runTok || '')));
  check(!!S1.sent.length, 'checkout submitted (blocked) with ' + Object.keys(fields).length + ' fields');
  log('     order text:\n       ' + orderText.split('\n').join('\n       '));
  /* the Orders API's line reader (lines_ in ggsx-orders-api Code.gs v1.1.0) */
  const items = orderText.split('\n').map(l => /^(\d+(?:\.\d+)?)\s*[×x]\s*(.+?)\s+[—–-]\s+\$([\d,]+(?:\.\d+)?)$/.exec(l.trim())).filter(Boolean).map(m => ({ qty: +m[1], name: m[2], price: Math.round(+m[3] / +m[1] * 100) / 100 }));
  check(items.some(x => x.qty === 3 && x.name === 'Beef Boneless Sirloin Steak per lb' && x.price === 19.49), 'Orders API reads "3 × Beef Boneless Sirloin Steak per lb" at $19.49', items);

  /* ---------- run sheet ---------- */
  const P = (/#run\/([A-Za-z0-9_-]+)/.exec(runLink) || [])[1] || '';
  check(!!P, 'run sheet link in the order');
  const R = await session({ viewport: { width: 430, height: 900 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
  const r = R.page;
  await R.load('/shop-now#run/' + P, 3000);
  const rows = () => r.evaluate(() => [...document.querySelectorAll('.gr-wrap.open .gr-item')].map(it => ({ i: it.getAttribute('data-i'), cls: it.className, name: it.querySelector('.gr-it-n').textContent, price: it.querySelector('.gr-it-p').textContent, wt: (it.querySelector('.gr-wt-r') || {}).textContent || null })));
  let rs = await rows();
  log('     run sheet rows:', JSON.stringify(rs));
  const beefRow = rs.find(x => /Sirloin/.test(x.name)), salRow = rs.find(x => /Salmon/.test(x.name)), shrimpRow = rs.find(x => /Shrimp/.test(x.name));
  check(beefRow && /^about 3 lb · Beef Boneless Sirloin Steak\$19\.49\/lb$/.test(beefRow.name) && beefRow.price === 'est. $58.47' && beefRow.wt !== null, 'run sheet: "about 3 lb", $/lb, estimate and a label weight box', beefRow);
  check(shrimpRow && shrimpRow.wt === null && /^2 × /.test(shrimpRow.name), 'run sheet: per-pack items unchanged', shrimpRow);
  const typeIn = async (re, v, unit) => {
    await r.evaluate(([re, unit]) => { const it = [...document.querySelectorAll('.gr-wrap.open .gr-item')].find(it => new RegExp(re).test(it.querySelector('.gr-it-n').textContent)); const b = [...it.querySelectorAll('.gr-wt-u button')].find(b => b.textContent === unit); b.click(); }, [re, unit]);
    await r.evaluate(([re, v]) => { const it = [...document.querySelectorAll('.gr-wrap.open .gr-item')].find(it => new RegExp(re).test(it.querySelector('.gr-it-n').textContent)); const i = it.querySelector('.gr-wt input'); i.focus(); i.value = v; i.dispatchEvent(new Event('input', { bubbles: true })); i.blur(); }, [re, v]);
    await r.waitForTimeout(300);
  };
  await typeIn('Sirloin', '1.62 + 1.5', 'lb');
  await typeIn('Salmon', '0.9', 'kg');
  rs = await rows();
  const b2 = rs.find(x => /Sirloin/.test(x.name)), s2 = rs.find(x => /Salmon/.test(x.name));
  log('     after weighing:', JSON.stringify([b2, s2]));
  check(b2 && /got/.test(b2.cls) && b2.price === '$60.81' + '3.12 lb', 'sirloin: label 1.62 + 1.5 lb = 3.12 lb → $60.81, ticked Got it', b2 && b2.price);
  check(s2 && /got/.test(s2.cls) && s2.price === '$27.76' + '1.984 lb'.replace('1.984', '1.98'), 'salmon: 0.9 kg = 1.98 lb → $27.76', s2 && s2.price);
  const unitNow = await r.evaluate(() => localStorage.getItem('ggsx_wt_unit'));
  check(unitNow === 'kg', 'the lb / kg choice is kept on this phone', unitNow);
  const st = await r.evaluate(() => { const k = Object.keys(localStorage).find(k => /^ggsx_run_/.test(k)); return JSON.parse(localStorage.getItem(k)); });
  check(st.w && Math.abs(st.w[Object.keys(st.w)[0]] - 3.12) < 0.001 && Object.keys(st.w).length === 2, 'run sheet state keeps the weights (w)', st.w);
  const tot = await r.evaluate(() => document.querySelector('.gr-wrap.open .gr-pw small').textContent);
  check(/· \$136\.55 /.test(tot), 'run sheet total uses the weighed prices ($60.81 + $27.76 + $47.98)', tot);
  await r.evaluate(() => { const b = [...document.querySelectorAll('.gr-wrap.open .gr-foot .gr-btn')].find(b => /summary/i.test(b.textContent)); b && b.click(); });
  await r.waitForTimeout(300);
  const summary = await r.evaluate(() => (document.querySelector('.gr-wrap.open .gr-panel.open textarea') || {}).value || '');
  log('     shopped summary:\n       ' + summary.split('\n').join('\n       '));
  check(/3\.12 × Beef Boneless Sirloin Steak per lb — \$60\.81 \(weighed\)/.test(summary), 'shopped summary has the weighed line');
  await r.evaluate(() => { const x = document.querySelector('.gr-wrap.open .gr-panel.open .gr-x'); x && x.click(); });
  await r.screenshot({ path: SHOTS + '/weight-runsheet-phone.png', fullPage: false });
  const ow = await r.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  check(ow <= 0, 'run sheet at phone width: no sideways scroll', String(ow));
  /* typing a weight again and clearing it */
  await typeIn('Sirloin', '', 'kg');
  rs = await rows();
  check(rs.find(x => /Sirloin/.test(x.name)).price === 'est. $58.47', 'clearing the weight goes back to the estimate');
  await typeIn('Sirloin', '1.4152', 'kg');
  rs = await rows();
  check(rs.find(x => /Sirloin/.test(x.name)).price === '$60.81' + '3.12 lb', '1.4152 kg = 3.12 lb → $60.81 again');
  const st2 = await r.evaluate(() => { const k = Object.keys(localStorage).find(k => /^ggsx_run_/.test(k)); return JSON.parse(localStorage.getItem(k)); });

  /* ---------- the client's live page, with the run sheet's ticks and weights as Shop 9 saves them ---------- */
  const Cl = await session({ viewport: { width: 430, height: 900 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
  const cp = Cl.page;
  await Cl.load('/shop-now', 2500);
  await cp.evaluate(async ([P, S]) => {
    const C = window.GGSX_TRACK, K = await C.keys(P);
    const state = JSON.stringify({ v: 1, s: S.s, n: S.n || {}, p: S.p || {}, w: S.w || {}, em: {}, ms: {}, u: Date.now() });
    const rec = { state, sig: await C.sign(K, state), at: Date.now() };
    C.load = function () { return Promise.resolve(rec); };
    location.hash = '#track/' + P;
  }, [P, st2]);
  await cp.waitForTimeout(2500);
  const live = await cp.evaluate(() => [...document.querySelectorAll('.gl-view .gr-item')].map(it => it.querySelector('.gr-it-n').textContent + ' | ' + it.querySelector('.gr-it-p').textContent + ' | ' + it.querySelector('.gl-chip').textContent));
  log('     client page:', JSON.stringify(live));
  check(live.some(x => x === '3.12 lb · Beef Boneless Sirloin Steak$19.49/lb | $60.81 | Got it ✓ · 3.12 lb weighed'), 'client page: weighed weight, price and chip');
  check(live.some(x => /^2 × Shrimp/.test(x)), 'client page: per-pack items unchanged');
  await cp.screenshot({ path: SHOTS + '/weight-clientpage-phone.png' });

  /* ---------- the order editor on the run sheet: ½ lb steps ---------- */
  const ed = await r.evaluate(async () => {
    const b = [...document.querySelectorAll('.gr-wrap.open button, .gr-wrap.open a')].find(b => /edit order/i.test(b.textContent));
    if (!b) return 'no Edit order button';
    b.click(); await new Promise(res => setTimeout(res, 1200));
    const it = [...document.querySelectorAll('.ge-it')].find(x => /Sirloin/.test(x.textContent));
    if (!it) return 'editor has no sirloin line';
    const q = () => it.querySelector('.ge-step span').textContent + ' · ' + it.querySelector('small').textContent;
    const before = q(); it.querySelector('.ge-step button:last-child').click();
    const it2 = [...document.querySelectorAll('.ge-it')].find(x => /Sirloin/.test(x.textContent));
    const after = it2.querySelector('.ge-step span').textContent;
    return before + ' → + → ' + after;
  });
  check(/^3 lb · \$19\.49\/lb → \+ → 3\.5 lb$/.test(ed), 'order editor: "3 lb · $19.49/lb", + gives 3.5 lb', ed);

  /* ---------- phone: Shop Now cards ---------- */
  const M = await session({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
  await M.load('/shop-now#d/meat-fish-and-deli/fresh-meat', 3500);
  await M.page.evaluate(() => { const b = document.querySelector('#ggsx-shop .gs-card[data-id="g0337"] .gs-add'); b && b.click(); });
  await M.page.waitForTimeout(400);
  await M.page.evaluate(() => { const b = document.querySelector('#ggsx-shop .gs-card[data-id="g0337"] .gs-step button:last-child'); b && b.click(); });
  await M.page.waitForTimeout(400);
  await M.page.evaluate(() => { const c = document.querySelector('#ggsx-shop .gs-card[data-id="g0337"]'); c && c.scrollIntoView({ block: 'center' }); });
  await M.page.waitForTimeout(300);
  await M.page.screenshot({ path: SHOTS + '/weight-shop-phone.png' });
  const mw = await M.page.evaluate(() => ({ ow: document.documentElement.scrollWidth - innerWidth, row: (() => { const r = document.querySelector('#ggsx-shop .gs-card[data-id="g0337"] .gs-row'); const c = r.closest('.gs-card').getBoundingClientRect(), s = r.querySelector('.gs-step').getBoundingClientRect(); return s.right <= c.right + 0.5; })() }));
  check(mw.ow <= 0 && mw.row, 'phone: card stepper "1.5 lb" fits, no sideways scroll', mw);

  /* ---------- home page: search suggestions ---------- */
  /* the home page reads a sample of the Products tab (featured items and a daily share), so every fresh meat item is marked here */
  const MEAT = {}; for (let k = 337; k <= 403; k++) if (![359, 366, 392].includes(k)) MEAT['g0' + k] = 1;
  const Hm = await session({ viewport: { width: 1280, height: 900 } }, MEAT);
  await Hm.load('/', 3000);
  for (let k = 0; k < 30 && !Hm.marked(); k++) await Hm.page.waitForTimeout(500);   /* the home reads the sheet in the background */
  await Hm.page.waitForTimeout(1500);
  const sug = await Hm.page.evaluate(async () => {
    const i = document.querySelector('.gh-search input[type=search]');
    if (!i) return 'no home search box · ' + JSON.stringify({ gh: document.querySelectorAll('[class^=gh-]').length, forms: [...document.querySelectorAll('form')].map(f => f.className), path: location.pathname, runs: (window.__GGSX_BUNDLE || {}).runs, ran: (window.__GGSX_BUNDLE || {}).ran });
    let row = null;
    const probe = []; for (const q of ['water', 'milk', 'beef']) { i.focus(); i.value = q; i.dispatchEvent(new Event('input', { bubbles: true })); await new Promise(r => setTimeout(r, 700)); probe.push(q + ':' + document.querySelectorAll('.gh-sg').length + '/' + (document.querySelector('.gh-sugg') || {}).className); }
    window.__probe = probe.join(' ');
    for (const q of ['beef', 'chicken', 'pork', 'steak']) {
      i.focus(); i.value = q; i.dispatchEvent(new Event('input', { bubbles: true }));
      await new Promise(r => setTimeout(r, 900));
      row = [...document.querySelectorAll('.gh-sg')].find(x => /\/lb$/.test(x.querySelector('b').textContent));
      if (row) break;
    }
    if (!row) return 'no suggestion: ' + window.__probe + ' | ' + [...document.querySelectorAll('.gh-sg')].map(x => x.textContent.slice(0, 60)).join(' | ');
    const before = row.querySelector('b').textContent;
    const add = row.querySelector('.gh-add'); add && add.click();
    await new Promise(r => setTimeout(r, 400));
    const name = row.querySelector('.gh-sn').textContent, row2 = [...document.querySelectorAll('.gh-sg')].find(x => x.querySelector('.gh-sn').textContent === name);
    return name + ' · ' + before + ' · ' + ((row2 && row2.querySelector('.gh-step span')) || {}).textContent;
  });
  check(/ · per lb · \$\d+\.\d\d\/lb · 1 lb$/.test(sug), 'home search: a meat item at its price per lb, Add = 1 lb', sug + ' · marked ' + Hm.marked() + ' · gviz ' + Hm.gv().join(' | '));
  const errs = [].concat(S1.errors, R.errors, Cl.errors, M.errors, Hm.errors);
  check(!errs.length, 'no page errors', errs.slice(0, 5).join(' || '));
  log(fails ? fails + ' check(s) FAILED' : 'all checks passed');
  await browser.close();
  process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
