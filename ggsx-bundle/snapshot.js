// Builds src/home-snapshot.html: the data the home page needs for its first screen (Home tab, Departments, the active restaurants
// of the Vendors tab, and for each of the 10 daily product samples the products the home actually shows), taken from the
// "GrocerGoSx Run Builder – Vendors & Menus" Google Sheet at build time. Home 2 draws the page from it at once and then refreshes
// it from the sheet in the background, so visitors no longer wait for the sheet before the home page appears.
// usage: node snapshot.js        (run before node build.js; needs curl and internet access to docs.google.com)
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const SID = process.env.SHEET_ID || '1-h6W54Wbscz_5zMAVU0myRr0PCYoVW_sJZo4XWe2MXE';
const TABS = { home: 'Home', products: 'Products', depts: 'Departments', vendors: 'Vendors' };

function gviz(sheet, tq) {
  const url = `https://docs.google.com/spreadsheets/d/${SID}/gviz/tq?tqx=out:json&headers=1&sheet=${encodeURIComponent(sheet)}` + (tq ? '&tq=' + encodeURIComponent(tq) : '');
  const txt = execFileSync('curl', ['-sS', '--fail', '--max-time', '90', url], { maxBuffer: 64e6 }).toString('utf8');
  const tb = JSON.parse(txt.slice(txt.indexOf('{'), txt.lastIndexOf('}') + 1)).table;
  const cols = tb.cols.map(c => String(c.label || '').trim().toLowerCase());
  return tb.rows.map(r => { const o = {}; cols.forEach((c, i) => { const v = r.c[i]; o[c] = v && v.v != null ? String(v.v).trim() : ''; }); return o; });
}
// the same helpers as Home 1 (GGSX_HOME.u)
const truthy = t => /^(true|yes|y|1|x|✓|✔)$/i.test(String(t == null ? '' : t).trim());
const on = t => t === '' || truthy(t);
const num = t => { const e = parseFloat(String(t == null ? '' : t).replace(/[^0-9.\-]/g, '')); return isNaN(e) ? 0 : e; };
const slug = t => String(t || '').toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const trim = t => String(t || '').trim();
const dayQuery = d => `select A,B,D,E,F,G,J,K,L where G is not null and (J = true or A ends with '${d}')`;

// the same choices as Home 2: hero tiles (A() per department), Popular rail (featured, then up to 4 rounds over the categories)
function simulate(prods, rows) {
  const cur = {}, returned = [];
  const N = t => { const e = slug(t); return prods.filter(p => slug(p.cat) === e); };
  const A = t => { const e = N(t); if (!e.length) return null; const n = cur[t] = cur[t] || 0; cur[t] = n + 1; const p = e[n % e.length]; returned.push(p.id); return p; };
  const hero = [];
  rows.filter(r => r.kind.toLowerCase() === 'hero').forEach(t => {
    const n = trim(t.dept);
    if (/^restaurants?$/i.test(n)) return;
    if (n) n.split(',').map(trim).filter(Boolean).slice(0, 4).forEach(d => { const e = A(d); if (e) hero.push(e.id); });
  });
  const rail = prods.filter(p => p.feat), seen = {}, cats = [];
  rail.forEach(p => { seen[p.id] = 1; });
  prods.forEach(p => { if (cats.indexOf(p.cat) < 0) cats.push(p.cat); });
  for (let i = 0; rail.length < 12 && i < 4; i++) cats.forEach(c => { const p = A(c); if (p && !seen[p.id] && rail.length < 12) { seen[p.id] = 1; rail.push(p); } });
  return { hero, rail: rail.map(p => p.id), returned };
}

const rows = gviz(TABS.home).filter(t => t.kind && on(t.active)).sort((a, b) => num(a.order) - num(b.order))
  .map(t => { const o = {}; ['kind', 'title', 'subtitle', 'text', 'cta', 'link', 'color', 'dept', 'images'].forEach(k => { if (t[k]) o[k] = t[k]; }); o.kind = t.kind; return o; });
const depts = gviz(TABS.depts).filter(t => t.category && on(t.active)).sort((a, b) => num(a.sort) - num(b.sort))
  .map(t => (t.image ? { category: t.category, image: t.image } : { category: t.category }));
const vendors = gviz(TABS.vendors).filter(e => e.vendor_id && e.name && truthy(e.active) && (!e.type || /restaurant/i.test(e.type)))
  .map(e => ({ vendor_id: e.vendor_id, name: e.name, logo: e.logo || '' }));

const all = [], index = {}, days = {};
const report = [];
for (let d = 0; d < 10; d++) {
  const prods = gviz(TABS.products, dayQuery(d)).filter(t => t.product && t.image && on(t.active) && on(t.in_stock)).map(t => ({
    id: t.id || slug(t.category + '-' + t.product + '-' + t.size), cat: t.category, name: t.product, size: t.size, price: num(t.price), img: t.image, feat: truthy(t.featured)
  }));
  const full = simulate(prods, rows);
  const want = JSON.stringify([full.hero, full.rail]);
  const pickSet = ids => {
    const keep = {};
    ids.forEach(id => { keep[id] = 1; });
    depts.forEach(dp => { if (!dp.image) { const e = slug(dp.category), p = prods.find(x => slug(x.cat) === e); if (p) keep[p.id] = 1; } });
    return prods.filter(p => keep[p.id]);
  };
  // smallest set first (what is on screen); if that would change the choices, every product the choices looked at
  let small = pickSet(full.hero.concat(full.rail));
  let check = simulate(small, rows);
  if (JSON.stringify([check.hero, check.rail]) !== want) {
    small = pickSet(full.hero.concat(full.rail, full.returned, prods.filter(p => p.feat).map(p => p.id)));
    check = simulate(small, rows);
  }
  if (JSON.stringify([check.hero, check.rail]) !== want) throw new Error('day ' + d + ': the snapshot would show other products than the sheet');
  days[d] = small.map(p => {
    const key = JSON.stringify([p.id, p.cat, p.name, p.size, p.price, p.img, p.feat ? 1 : 0]);
    if (!(key in index)) { index[key] = all.length; all.push(JSON.parse(key)); }
    return index[key];
  });
  report.push(`day ${d}: ${prods.length} products in the sample, ${small.length} kept (hero ${full.hero.length}, Popular ${full.rail.length})`);
}
const snap = { v: 2, t: Date.now(), rows, depts, vendors, prods: all, days };
const json = JSON.stringify(snap).replace(/</g, '\\u003c');
const stamp = new Date().toISOString().slice(0, 16).replace('T', ' ') + ' UTC';
const html = `<!-- GrocerGoSx Home Snapshot (bundle-only module, generated by snapshot.js on ${stamp}; do not edit by hand): the home page's
     first screen from the Vendors & Menus sheet (Home tab rows, Departments, the ${vendors.length} active restaurants, and for each of the 10 daily product
     samples the ${all.length} products the home shows). Home 2 draws the page from it straight away and then refreshes it from the sheet.
     Rebuild it with "node snapshot.js" before each bundle build. -->
<script>
window.GGSX_HOME_SNAP = ${json};
</script>
`;
fs.writeFileSync(path.join(__dirname, 'src', 'home-snapshot.html'), html);
fs.writeFileSync(path.join(__dirname, 'src', 'home-snapshot.json'), JSON.stringify({ id: 'home-snapshot', name: 'GrocerGoSx Home Snapshot', revision: stamp, enabled: true, loadOnce: false, position: 'BODY_END', category: 'ESSENTIAL', bundleOnly: true }));
console.log(report.join('\n'));
console.log(`rows ${rows.length}, departments ${depts.length}, restaurants ${vendors.length}, products ${all.length}; ${json.length} chars → src/home-snapshot.html`);
