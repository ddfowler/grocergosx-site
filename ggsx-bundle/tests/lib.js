// Shared helpers for the bundle tests: the loader with a test build picked (like First Paint does on the site), and First Paint
// with its BUILDS pointing at local test files.
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const GROUPS = JSON.parse(fs.readFileSync(path.join(ROOT, 'groups.json'), 'utf8'));
const groupPaths = () => { const g = {}; for (const k in GROUPS) g[k] = GROUPS[k].paths; return g; };

/* files: { body: [gzUrl, plainUrl], home: [...], pages: [...] }  (one file = no groups, e.g. a v1.4 build) */
function pickJs(files, frame) {
  const G = groupPaths();
  return `(function(){var B=window.__GGSX_BUNDLE=window.__GGSX_BUNDLE||{};if(B.pick)return;var G=${JSON.stringify(G)},F=${JSON.stringify(files)};` +
    `B.pick={id:'test',v:'test',files:F,frame:${frame ? 1 : 0},group:function(p){for(var g in G)if(F[g]&&G[g].indexOf(p)>=0)return g;return ''}};})();`;
}
/* the loader's script, for tests that run it with page.evaluate; older loaders (GZ/PLAIN constants) are patched the old way */
function loaderJs(loaderPath, files) {
  let js = /<script>([\s\S]*?)<\/script>/.exec(fs.readFileSync(loaderPath, 'utf8'))[1];
  if (/var GZ = '/.test(js)) return js.replace(/var GZ = '[^']+'/, `var GZ = '${files.body[0]}'`).replace(/var PLAIN = '[^']+'/, `var PLAIN = '${files.body[1]}'`);
  return pickJs(files, false) + '\n' + js;
}
/* First Paint (head snippet) with its builds replaced by one local test build, made LIVE */
function firstPaint(html, files, frame) {
  if (!/var BUILDS=/.test(html)) return html;                       // v1.0 has no builds
  const b = `var BUILDS={"t":{v:"test",${frame === false ? '' : 'frame:1,'}files:${JSON.stringify(files)}}};\n  var LIVE="t";`;
  return html.replace(/var BUILDS=\{[\s\S]*?\n  \};\n  var LIVE="[^"]*";/, b);
}
/* files of a dist folder served at origin + '/__f/<name>.gz|.js' */
function distFiles(dir, origin) {
  const files = {}, bodies = {};
  for (const f of fs.readdirSync(dir)) {
    const m = /^ggsx-([a-z]+)\.js(\.gz)?$/.exec(f);
    if (!m) continue;
    files[m[1]] = files[m[1]] || [origin + '/__f/' + m[1] + '.gz', origin + '/__f/' + m[1] + '.js'];
    bodies['/__f/' + m[1] + (m[2] ? '.gz' : '.js')] = fs.readFileSync(path.join(dir, f));
  }
  return { files, bodies };
}
module.exports = { ROOT, GROUPS, groupPaths, pickJs, loaderJs, firstPaint, distFiles };
