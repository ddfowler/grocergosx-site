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
parts.push(`/*! GrocerGoSx site code bundle v${version} — built ${new Date().toISOString()} from ${order.length} Wix Custom Code snippets (Body end). Source snippets are kept, disabled, in Wix Settings → Custom Code; the restore copies live in the ggsx-bundle/src folder of the repo. */`);
parts.push(`(function(){var W=window;W.__GGSX_BUNDLE=W.__GGSX_BUNDLE||{};W.__GGSX_BUNDLE.v=${JSON.stringify(version)};W.__GGSX_BUNDLE.runs=(W.__GGSX_BUNDLE.runs||0)+1;})();`);
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
    if (needsBare) parts.push(code.trim());
    else parts.push(`try {\n${code.trim()}\n} catch (e) { try { console.warn('[GGSX bundle] ${name.replace(/'/g, "\\'")}', e); } catch (e2) {} }`);
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
