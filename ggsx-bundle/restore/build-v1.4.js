// Builds ggsx-body.js from the exported Wix Custom Code snippets (src/<id>.html) in order.json order.
// Each snippet's <style> blocks become __ggsxCss(...) calls (deduped by content), each <script> block is
// concatenated in place. Scripts with no top-level lexical declarations are wrapped in try/catch so one
// failure cannot stop the rest of the bundle; the others stay bare (same global semantics as inline).
const fs = require('fs');
const path = require('path');
const acorn = require('acorn');

const root = __dirname;
const order = JSON.parse(fs.readFileSync(path.join(root, 'order.json'), 'utf8'));
const version = process.argv[2] || '1.0';

function blocks(html) {
  // ordered list of {type:'script'|'style', attrs, body}
  const out = [];
  const re = /<(script|style)\b([^>]*)>([\s\S]*?)<\/\1\s*>/gi;
  let m, last = 0;
  const stripped = html.replace(/<!--[\s\S]*?-->/g, c => ' '.repeat(c.length)); // keep offsets, drop comments
  while ((m = re.exec(stripped))) {
    const between = stripped.slice(last, m.index).trim();
    if (between) out.push({ type: 'html', body: html.slice(last, m.index) });
    out.push({ type: m[1].toLowerCase(), attrs: m[2].trim(), body: html.slice(m.index + m[0].indexOf('>') + 1, m.index + m[0].length - (`</${m[1]}>`.length)) });
    last = m.index + m[0].length;
  }
  const tail = stripped.slice(last).trim();
  if (tail) out.push({ type: 'html', body: html.slice(last) });
  return out;
}

function topLevelInfo(code) {
  const ast = acorn.parse(code, { ecmaVersion: 'latest', sourceType: 'script', allowHashBang: true });
  const lexical = [], vars = [], funcs = [], classes = [];
  for (const node of ast.body) {
    if (node.type === 'VariableDeclaration') {
      const names = node.declarations.map(d => d.id.type === 'Identifier' ? d.id.name : '[pattern]');
      (node.kind === 'var' ? vars : lexical).push(...names);
    } else if (node.type === 'FunctionDeclaration') funcs.push(node.id.name);
    else if (node.type === 'ClassDeclaration') classes.push(node.id.name);
  }
  const strict = ast.body.length && ast.body[0].type === 'ExpressionStatement' && ast.body[0].directive === 'use strict';
  return { lexical, vars, funcs, classes, strict, statements: ast.body.length };
}

const parts = [];
parts.push(`/*! GrocerGoSx site code bundle v${version} — built ${new Date().toISOString()} from ${order.length} modules in ggsx-bundle/src (the 60 former Body-end Custom Code snippets, kept disabled in Wix as restore copies, plus bundle-only modules). The bundle runs again on every page change; since v1.2 each module's window/document listeners and observers are tracked, and when a module registers the same one again on the next page, the copy from its previous run is removed, so nothing piles up. */`);
parts.push(`(function(){var W=window;W.__GGSX_BUNDLE=W.__GGSX_BUNDLE||{};W.__GGSX_BUNDLE.v=${JSON.stringify(version)};W.__GGSX_BUNDLE.runs=(W.__GGSX_BUNDLE.runs||0)+1;})();`);
// v1.2: per-module registration tracking. __ggsxB(key) / __ggsxE(key) bracket each module's synchronous run; listeners added to
// window, document, <html> or <body> and MutationObservers created during that run are recorded with a
// signature (target, event type, capture flag, hash of the handler's source). When the module's next run (next page) registers
// the same signature again, the previous run's copy is removed / disconnected. Registrations a module makes only once
// (guarded by its own window flag) are left alone, because the next run does not register them again.
parts.push(`(function () {
  var W = window, D = document, OP = Object.prototype.hasOwnProperty;
  var REG = W.__ggsxReg || (W.__ggsxReg = {});
  var cur = null, MO0 = null;
  function hash(s) { var x = 5381, i; for (i = 0; i < s.length; i++) x = ((x << 5) + x + s.charCodeAt(i)) | 0; return (x >>> 0).toString(36) + '.' + s.length; }
  function sig(fn) { try { return typeof fn === 'function' ? hash(Function.prototype.toString.call(fn)) : 'o'; } catch (e) { return 'x'; } }
  function restore() {
    var c = cur; if (!c) return;
    c.defs.forEach(function (x) { try { if (x.had) Object.defineProperty(x.t, 'addEventListener', x.d); else delete x.t.addEventListener; } catch (e) {} });
    if (MO0) W.MutationObserver = MO0;
  }
  /* Wix makes EventTarget.prototype.addEventListener read-only, so the wrapper is put on the four objects themselves (own property, removed again at the end of the module). */
  function wrap(c, t, k) {
    if (!t) return;
    var had = OP.call(t, 'addEventListener'), d = had ? Object.getOwnPropertyDescriptor(t, 'addEventListener') : null, base = t.addEventListener;
    if (typeof base !== 'function') return;
    try {
      Object.defineProperty(t, 'addEventListener', { configurable: true, writable: true, enumerable: false, value: function (type, fn, opt) {
        if (c === cur && fn && (this === t || this == null || this === W && t === W)) c.ev.push({ t: t, ty: type, fn: fn, o: opt, s: k + '|' + type + '|' + ((opt === true || (opt && opt.capture)) ? 1 : 0) + '|' + sig(fn) });
        return base.apply(this == null ? t : this, arguments);
      } });
      c.defs.push({ t: t, had: had, d: d });
    } catch (e) {}
  }
  W.__ggsxB = function (key) {
    if (cur) { restore(); cur = null; }
    var c = cur = { key: key, ev: [], mo: [], defs: [] };
    wrap(c, W, 'w'); wrap(c, D, 'd'); wrap(c, D.documentElement, 'h'); wrap(c, D.body, 'b');
    MO0 = W.MutationObserver;
    if (MO0) {
      var M = function (cb) { var o = new MO0(cb); if (c === cur) c.mo.push({ o: o, s: sig(cb) }); return o; };
      M.prototype = MO0.prototype;
      try { W.MutationObserver = M; } catch (e) {}
    }
  };
  W.__ggsxE = function (key) {
    var c = cur;
    if (!c || c.key !== key) return;
    restore(); cur = null;
    var prev = REG[key], seen = {}, keep = { ev: [], mo: [] };
    c.ev.forEach(function (x) { seen['e' + x.s] = 1; });
    c.mo.forEach(function (x) { seen['m' + x.s] = 1; });
    if (prev) {
      prev.ev.forEach(function (x) { if (seen['e' + x.s]) { try { EventTarget.prototype.removeEventListener.call(x.t, x.ty, x.fn, x.o); } catch (e) {} } else keep.ev.push(x); });
      prev.mo.forEach(function (x) { if (seen['m' + x.s]) { try { x.o.disconnect(); } catch (e) {} } else keep.mo.push(x); });
    }
    REG[key] = { ev: keep.ev.concat(c.ev), mo: keep.mo.concat(c.mo) };
  };
})();`);
parts.push(`function __ggsxCss(attrs, css) {
  try {
    var D = document, key = 'c' + css.length + '_' + (function (s) { var h = 5381, i; for (i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); })(css);
    if (D.querySelector('style[data-ggsx-css="' + key + '"]')) return;
    var st = D.createElement('style');
    if (attrs) attrs.replace(/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s"'>]+)))?/g, function (_, n, v1, v2, v3) { var v = v1 != null ? v1 : v2 != null ? v2 : v3 != null ? v3 : ''; try { st.setAttribute(n, v); } catch (e) {} return ''; });
    st.setAttribute('data-ggsx-css', key);
    st.textContent = css;
    (D.body || D.head).appendChild(st);
  } catch (e) { try { console.warn('[GGSX bundle] css', e); } catch (e2) {} }
}`);

const report = [];
const allLexical = {};
for (const [id, name] of order) {
  const html = fs.readFileSync(path.join(root, 'src', id + '.html'), 'utf8');
  const meta = JSON.parse(fs.readFileSync(path.join(root, 'src', id + '.json'), 'utf8'));
  parts.push(`\n/* ===== ${meta.name} (${id}, rev ${meta.revision}) ===== */`);
  let scriptNo = 0;
  for (const b of blocks(html)) {
    if (b.type === 'html') {
      if (b.body.trim()) { report.push(`WARN ${name}: stray HTML outside script/style (${b.body.trim().length} chars) — emitted as insertAdjacentHTML`); parts.push(`try{document.body.insertAdjacentHTML('beforeend',${JSON.stringify(b.body)});}catch(e){}`); }
      continue;
    }
    if (b.type === 'style') {
      parts.push(`__ggsxCss(${JSON.stringify(b.attrs)}, ${JSON.stringify(b.body)});`);
      continue;
    }
    // script
    const attrs = b.attrs || '';
    if (/\bsrc\s*=/.test(attrs)) { report.push(`WARN ${name}: external script tag ${attrs}`); parts.push(`(function(){var s=document.createElement('script');${attrs.replace(/([a-zA-Z-]+)\s*=\s*"([^"]*)"/g, (m, k, v) => `s.setAttribute(${JSON.stringify(k)},${JSON.stringify(v)});`)}s.async=false;document.body.appendChild(s);})();`); continue; }
    if (/\btype\s*=\s*["']?(?!text\/javascript|module|application\/javascript)/i.test(attrs)) {
      // a non-JS <script> is a data/template block (e.g. the privacy text): recreate it as an element with the same attributes
      const attrPairs = [];
      attrs.replace(/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g, (m, k, v1, v2, v3) => { attrPairs.push([k, v1 != null ? v1 : v2 != null ? v2 : v3 != null ? v3 : '']); return ''; });
      const idAttr = attrPairs.find(p => p[0].toLowerCase() === 'id');
      report.push(`TEMPLATE ${name}: non-JS script block ${attrs} recreated as an element`);
      parts.push(`(function(){var D=document;${idAttr ? `if(D.getElementById(${JSON.stringify(idAttr[1])}))return;` : ''}var s=D.createElement('script');${attrPairs.map(p => `s.setAttribute(${JSON.stringify(p[0])},${JSON.stringify(p[1])});`).join('')}s.text=${JSON.stringify(b.body)};(D.body||D.head).appendChild(s);})();`);
      continue;
    }
    const code = b.body;
    let info;
    try { info = topLevelInfo(code); } catch (e) { report.push(`ERROR ${name}: does not parse: ${e.message}`); parts.push(`/* UNPARSEABLE: ${name} */`); continue; }
    for (const n of info.lexical.concat(info.classes)) { (allLexical[n] = allLexical[n] || []).push(name); }
    const needsBare = info.lexical.length || info.funcs.length || info.classes.length;
    report.push(`${needsBare ? 'BARE' : 'WRAP'} ${name}: stmts=${info.statements} var=[${info.vars.join(',')}] lexical=[${info.lexical.join(',')}] funcs=[${info.funcs.join(',')}] strict=${info.strict}`);
    if (needsBare) parts.push(code.trim());   // bare scripts keep global semantics and are not tracked
    else {
      const key = JSON.stringify(id + '#' + (scriptNo++));
      parts.push(`__ggsxB(${key});\ntry {\n${code.trim()}\n} catch (e) { try { console.warn('[GGSX bundle] ${name.replace(/'/g, "\\'")}', e); } catch (e2) {} }\n__ggsxE(${key});`);
    }
  }
}
const bundle = parts.join('\n') + '\n';
// validate whole bundle
try { acorn.parse(bundle, { ecmaVersion: 'latest', sourceType: 'script' }); report.push('BUNDLE PARSES OK'); } catch (e) { report.push('BUNDLE PARSE ERROR: ' + e.message); }
for (const n in allLexical) if (allLexical[n].length > 1) report.push(`DUPLICATE top-level lexical ${n}: ${allLexical[n].join(' | ')}`);
fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
fs.writeFileSync(path.join(root, 'dist', 'ggsx-body.js'), bundle);
const gz = require('zlib').gzipSync(Buffer.from(bundle, 'utf8'), { level: 9 });
fs.writeFileSync(path.join(root, 'dist', 'ggsx-body.js.gz'), gz);
fs.writeFileSync(path.join(root, 'dist', 'build-report.txt'), report.join('\n') + '\n');
console.log(report.join('\n'));
console.log('bundle chars:', bundle.length, 'bytes:', Buffer.byteLength(bundle), 'gzip bytes:', gz.length);
console.log('Upload dist/ggsx-body.js as ggsx-body-v' + version + '.txt and dist/ggsx-body.js.gz as ggsx-body-v' + version + '.gz.txt (Media Manager → Site code bundle), then update GZ/PLAIN in loader.html.');
