#!/usr/bin/env python3
"""v1.8 (4 Nov 2026): items sold by weight (Shop 42 Sold by Weight). Applies the small hooks in the other modules, each an exact
string replacement that must match once (or the given count). Run from the package folder: python3 patches/v1.8-sold-by-weight.py"""
import os, sys
SRC = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'src')
NOTE = '<!-- v1.8 (4 Nov 2026): items sold by weight (size "per lb" on the Products tab), see Shop 42 Sold by Weight: %s -->\n'
WG = 'window.GGSX_WEIGHT'

P = {
 # ---------- Shop 2 Engine (minified) ----------
 '7978f5ff-27ec-4553-81c6-9b4e3b65a96c': ('½ lb steps, prices per lb, "about 1.5 lb" basket lines, weighed lines count once', [
  ('stock:""===t.in_stock||g(t.in_stock)};',
   'stock:""===t.in_stock||g(t.in_stock)};' + WG + '&&GGSX_WEIGHT.is(u)&&(u.size="per lb",u.wt=1);'),
  ('function w(t,e){e=Math.max(0,Math.min(99,0|e));',
   'function w(t,e){e=' + WG + '&&GGSX_WEIGHT.is(t)?GGSX_WEIGHT.clamp(e):Math.max(0,Math.min(99,0|e));'),
  ('e?o?o.n=e:C.basket.items[t.id]=',
   'e?o?(o.n=e,' + WG + '&&GGSX_WEIGHT.is(t)&&(o.size=t.size)):C.basket.items[t.id]='),
  ('t+=n.n,e+=n.n*n.price',
   't+=' + WG + '?GGSX_WEIGHT.count(n):n.n,e+=n.n*n.price'),
  ('function E(t){var e=k(t.id);return e?u("div",{class:"gs-step"},[u("button",{type:"button","aria-label":"Remove one "+t.name,text:"−",onclick:function(){w(t,k(t.id)-1)}}),u("span",{class:"gs-n",text:String(e)}),u("button",{type:"button","aria-label":"Add one "+t.name,text:"+",onclick:function(){w(t,k(t.id)+1)}})]):u("button",{type:"button",class:"gs-add","aria-label":"Add "+t.name,text:"Add",onclick:function(){w(t,1)}})}',
   'function E(t){var e=k(t.id),wq=!!(' + WG + '&&GGSX_WEIGHT.is(t)),ws=wq?GGSX_WEIGHT.step:1;return e?u("div",{class:"gs-step"+(wq?" gs-wt":"")},[u("button",{type:"button","aria-label":(wq?"Remove ½ lb of ":"Remove one ")+t.name,text:"−",onclick:function(){w(t,k(t.id)-ws)}}),u("span",{class:"gs-n",text:wq?GGSX_WEIGHT.lb(e):String(e)}),u("button",{type:"button","aria-label":(wq?"Add ½ lb of ":"Add one ")+t.name,text:"+",onclick:function(){w(t,k(t.id)+ws)}})]):u("button",{type:"button",class:"gs-add","aria-label":"Add "+t.name,text:"Add",onclick:function(){w(t,wq?GGSX_WEIGHT.start:1)}})}'),
  ('u("div",{class:"gs-meta",text:[t.size,t.brand].filter(Boolean).join(" · ")}),u("div",{class:"gs-row"},[u("b",{class:"gs-price",text:d(t.price)})',
   'u("div",{class:"gs-meta",text:[t.wt?GGSX_WEIGHT.copy.sold:t.size,t.brand].filter(Boolean).join(" · ")}),u("div",{class:"gs-row"},[u("b",{class:"gs-price"},[d(t.price),t.wt?u("small",{text:GGSX_WEIGHT.copy.per}):null])'),
  ('u("div",{class:"gs-lm",text:[t.size,d(t.price)+" each"].filter(Boolean).join(" · ")})]),u("div",{class:"gs-lr"},[E(e),u("b",{text:d(t.n*t.price)})])',
   'u("div",{class:"gs-lm",text:' + WG + '&&GGSX_WEIGHT.is(t)?GGSX_WEIGHT.copy.about+GGSX_WEIGHT.lb(t.n)+" · "+d(t.price)+GGSX_WEIGHT.copy.per:[t.size,d(t.price)+" each"].filter(Boolean).join(" · ")})]),u("div",{class:"gs-lr"},[E(e),u("b",{text:(' + WG + '&&GGSX_WEIGHT.is(t)?GGSX_WEIGHT.copy.est:"")+d(t.n*t.price)})])'),
  ('C.els.clear.style.display=n.n?"":"none"}',
   'C.els.clear.style.display=n.n?"":"none",' + WG + '&&GGSX_WEIGHT.paint&&GGSX_WEIGHT.paint(C.root,s)}'),
 ]),
 # ---------- Shop 31 Basket Fix (adds from other pages) ----------
 '6b174a00-fa8e-4f74-bb54-dbcd05380819': ('½ lb steps when adding from other pages', [
  ('n=Math.max(0,Math.min(99,0|n));var a,s=',
   'n=' + WG + '&&GGSX_WEIGHT.is(i)?GGSX_WEIGHT.clamp(n):Math.max(0,Math.min(99,0|n));var a,s='),
  ("n?r?r.n=n:s.items[i.id]=",
   "n?r?(r.n=n," + WG + "&&GGSX_WEIGHT.is(i)&&(r.size=i.size)):s.items[i.id]="),
 ]),
 # ---------- Shop 3 Checkout: the item count (the order text keeps "1.5 × <item> per lb — $29.24") ----------
 'ac039120-83d6-4dc6-bd8e-cf9f03556d29': ('a weighed line counts as one item', [
  ('t+=e.n,n+=e.n*(+e.price||0)', 't+=' + WG + '?GGSX_WEIGHT.count(e):e.n,n+=e.n*(+e.price||0)'),
 ]),
 # ---------- Shop 4 Run Sheet: the label weight box, the weighed total and summary ----------
 'd723d7fb-fe4b-4005-9965-840934612316': ('label weight on the run sheet (GGSX_WEIGHT.row), weighed prices in the total and the shopped summary', [
  ('l.forEach(function(e,o){w.appendChild(function(e,o){var a=e[4]?',
   'l.forEach(function(e,o){var gw=function(e,o){var a=e[4]?'),
  ('text:n.search+" ↗"})]);return f}(e,o))}),C();',
   'text:n.search+" ↗"})]);return f}(e,o);w.appendChild(gw),' + WG + '&&GGSX_WEIGHT.row&&GGSX_WEIGHT.row({row:gw,line:e,i:o,S:s,lines:l,save:function(){g(t,s)},prog:C})}),C();'),
  ('var I=0;l.forEach(function(e){I+=e[2]*e[3]})',
   'var I=0;l.forEach(function(e,x){I+=' + WG + '?GGSX_WEIGHT.val(e,s,x):e[2]*e[3]})'),
  ('l.forEach(function(o,a){var r=k(a),i=o[2]+" × "+o[0]+(o[1]?" "+o[1]:"");',
   'l.forEach(function(o,a){var r=k(a),i=' + WG + '?GGSX_WEIGHT.sline(o,a,s):o[2]+" × "+o[0]+(o[1]?" "+o[1]:"");'),
  ('g(t,s={s:{},n:{},p:{}})', 'g(t,s={s:{},n:{},p:{},w:{}})'),
 ]),
 # ---------- Shop 9 Live Run Sheet: the weights go to the client's page with the ticks ----------
 '20d13775-3117-43dd-80a1-8c7a8b77bd68': ('the label weights (state w) are saved and synced with the ticks', [
  ("function plain(S, N) { return JSON.stringify({ s: S.s || {}, n: S.n || {}, p: S.p || {}, em: N.em || {}, ms: N.ms || {} }); }",
   "function plain(S, N) { return JSON.stringify({ s: S.s || {}, n: S.n || {}, p: S.p || {}, w: S.w || {}, em: N.em || {}, ms: N.ms || {} }); }"),
  ("state = JSON.stringify({ v: 1, s: S.s || {}, n: S.n || {}, p: S.p || {}, em: N.em, ms: N.ms, u: at });",
   "state = JSON.stringify({ v: 1, s: S.s || {}, n: S.n || {}, p: S.p || {}, w: S.w || {}, em: N.em, ms: N.ms, u: at });"),
  ("localStorage.setItem(ctx.skey, JSON.stringify({ s: R.s || {}, n: R.n || {}, p: R.p || {} }));",
   "localStorage.setItem(ctx.skey, JSON.stringify({ s: R.s || {}, n: R.n || {}, p: R.p || {}, w: R.w || {} }));"),
  ("if (ctx && t.closest('.gr-sub')) later(ctx, 1200);",
   "if (ctx && (t.closest('.gr-sub') || t.closest('.gr-wt'))) later(ctx, 1200);"),
  ("if (t.closest('.gr-b') || t.closest('.gr-reset')) later(ctx, 600);",
   "if (t.closest('.gr-b') || t.closest('.gr-reset') || t.closest('.gr-wt-u')) later(ctx, 600);"),
 ]),
 # ---------- Shop 10 Client Live Page ----------
 'df0be446-4ef9-43fa-b201-2033668accdc': ('"about 1.5 lb", then the weighed weight and price', [
  ("      list.appendChild(it);\n      return { it: it, chip: chip };",
   "      if (W.GGSX_WEIGHT) W.GGSX_WEIGHT.liveRow(it, ln);\n      list.appendChild(it);\n      return { it: it, chip: chip };"),
  ("      x.it.className = 'gr-item' + (st ? ' ' + st : '');\n      x.chip.textContent = text;\n",
   "      x.it.className = 'gr-item' + (st ? ' ' + st : '');\n      x.chip.textContent = text;\n      if (W.GGSX_WEIGHT) W.GGSX_WEIGHT.liveState(x, ln, st, (R.w || {})[i]);\n"),
 ]),
 # ---------- Shop 13 Order Changes Core: the editor's item count ----------
 '00d0a079-a490-421a-8520-20c86d65e9d0': ('a weighed line counts as one item', [
  ("sub += l[2] * l[3]; n += l[2];", "sub += l[2] * l[3]; n += W.GGSX_WEIGHT ? W.GGSX_WEIGHT.count(l) : l[2];"),
 ]),
 # ---------- Shop 14 Order Changes: the weights follow the items when the list changes ----------
 'cf46fc33-68bc-4311-abc6-d88cd9fbd489': ('the label weights follow the items', [
  ("JSON.stringify({ s: remap(S.s, m), n: remap(S.n, m), p: remap(S.p, m) })",
   "JSON.stringify({ s: remap(S.s, m), n: remap(S.n, m), p: remap(S.p, m), w: remap(S.w, m) })"),
  ("ns = { v: 1, s: remap(S.s, m), n: remap(S.n, m), p: remap(S.p, m), em: remap(S.em, m), ms: remap(S.ms, m), u: t }",
   "ns = { v: 1, s: remap(S.s, m), n: remap(S.n, m), p: remap(S.p, m), w: remap(S.w, m), em: remap(S.em, m), ms: remap(S.ms, m), u: t }"),
 ]),
 # ---------- Shop 15 Order Editor: ½ lb steps ----------
 '25781f0d-6465-4131-8dfa-4b73960ce44f': ('½ lb steps and prices per lb in the editor', [
  ("isNew = l[5].charAt(0) === 'a', qty = el('span', { text: String(l[2]) }),",
   "isNew = l[5].charAt(0) === 'a', wq = !!(W.GGSX_WEIGHT && W.GGSX_WEIGHT.is(l)), qty = el('span', { text: wq ? W.GGSX_WEIGHT.lb(l[2]) : String(l[2]) }),"),
  ("onclick: function () { if (l[2] <= 1) { if (isNew) L = L.filter(function (x) { return x !== l; }); else removed[l[5]] = 1; } else l[2]--; paintList(); } }),",
   "onclick: function () { if (l[2] <= (wq ? W.GGSX_WEIGHT.step : 1)) { if (isNew) L = L.filter(function (x) { return x !== l; }); else removed[l[5]] = 1; } else l[2] = wq ? W.GGSX_WEIGHT.clamp(l[2] - W.GGSX_WEIGHT.step) : l[2] - 1; paintList(); } }),"),
  ("onclick: function () { if (l[2] < 99) l[2]++; paintList(); } })]);",
   "onclick: function () { if (wq) l[2] = W.GGSX_WEIGHT.clamp(l[2] + W.GGSX_WEIGHT.step); else if (l[2] < 99) l[2]++; paintList(); } })]);"),
  ("el('small', { text: l[3] ? money(l[3]) + T.each : T.priced })",
   "el('small', { text: l[3] ? money(l[3]) + (wq ? W.GGSX_WEIGHT.copy.per : T.each) : T.priced })"),
 ]),
 # ---------- Home 2 Engine: Popular cards and search suggestions ----------
 '33f1b3a3-eacb-417e-8058-133a7ada3557': ('½ lb steps and prices per lb on the home page', [
  ("n = Math.max(0, Math.min(99, n | 0));",
   "n = W.GGSX_WEIGHT && W.GGSX_WEIGHT.is(p) ? W.GGSX_WEIGHT.clamp(n) : Math.max(0, Math.min(99, n | 0));"),
  ("if (n) { if (it) it.n = n; else b.items[p.id] = ",
   "if (n) { if (it) { it.n = n; if (W.GGSX_WEIGHT && W.GGSX_WEIGHT.is(p)) it.size = p.size; } else b.items[p.id] = "),
  ("""    var n = count(p.id);
    function now() { return C.byId[p.id] || p; }                            /* the latest price, even after a refresh */
    return n ? h('div', { class: 'gh-step' }, [
      h('button', { type: 'button', 'aria-label': 'Remove one ' + p.name, text: '−', onclick: function () { put(now(), count(p.id) - 1); } }),
      h('span', { text: String(n) }),
      h('button', { type: 'button', 'aria-label': 'Add one ' + p.name, text: '+', onclick: function () { put(now(), count(p.id) + 1); } })
    ]) : h('button', { type: 'button', class: 'gh-add', 'aria-label': (T.add || 'Add') + ' ' + p.name, text: T.add || 'Add', onclick: function () { put(now(), 1); } });""",
   """    var n = count(p.id), G = W.GGSX_WEIGHT, wt = !!(G && G.is(p)), d = wt ? G.step : 1;
    function now() { return C.byId[p.id] || p; }                            /* the latest price, even after a refresh */
    return n ? h('div', { class: 'gh-step' + (wt ? ' gh-wt' : '') }, [
      h('button', { type: 'button', 'aria-label': (wt ? 'Remove ½ lb of ' : 'Remove one ') + p.name, text: '−', onclick: function () { put(now(), count(p.id) - d); } }),
      h('span', { text: wt ? G.lb(n) : String(n) }),
      h('button', { type: 'button', 'aria-label': (wt ? 'Add ½ lb of ' : 'Add one ') + p.name, text: '+', onclick: function () { put(now(), count(p.id) + d); } })
    ]) : h('button', { type: 'button', class: 'gh-add', 'aria-label': (T.add || 'Add') + ' ' + p.name, text: T.add || 'Add', onclick: function () { put(now(), wt ? G.start : 1); } });"""),
  ("list.forEach(function (it) { n += it.n; sum += it.n * it.price; });",
   "list.forEach(function (it) { n += W.GGSX_WEIGHT ? W.GGSX_WEIGHT.count(it) : it.n; sum += it.n * it.price; });"),
  ("          h('b', { text: money(p.price) }),\n          h('span', { class: 'gh-st', 'data-id': p.id }, [stepper(p)])",
   "          h('b', { text: money(p.price) + (W.GGSX_WEIGHT && W.GGSX_WEIGHT.is(p) ? W.GGSX_WEIGHT.copy.per : '') }),\n          h('span', { class: 'gh-st', 'data-id': p.id }, [stepper(p)])"),
  ("          h('div', { class: 'gh-pm', text: p.size }),\n          h('div', { class: 'gh-pr' }, [h('b', { text: money(p.price) }),",
   "          h('div', { class: 'gh-pm', text: W.GGSX_WEIGHT && W.GGSX_WEIGHT.is(p) ? W.GGSX_WEIGHT.copy.sold : p.size }),\n          h('div', { class: 'gh-pr' }, [h('b', { text: money(p.price) + (W.GGSX_WEIGHT && W.GGSX_WEIGHT.is(p) ? W.GGSX_WEIGHT.copy.per : '') }),"),
  ("if (b) b.textContent = money(p.price);",
   "if (b) b.textContent = money(p.price) + (W.GGSX_WEIGHT && W.GGSX_WEIGHT.is(p) ? W.GGSX_WEIGHT.copy.per : '');"),
 ]),
 # ---------- basket counts: header badge, phone app shell badge, Laundry / Errands / Rentals strips ----------
 '722bb772-4f8e-4b09-bc4d-224140f2f2e4': ('a weighed line counts as one item', [
  ('for(e in a.items)n+=a.items[e].n||0;return n', 'for(e in a.items)n+=' + WG + '?GGSX_WEIGHT.count(a.items[e]):a.items[e].n||0;return n'),
 ]),
 '089c0fed-855a-4e35-8f6e-fcbb9b91bfa7': ('a weighed line counts as one item', [
  ('for(k in b.items)n+=b.items[k].n||0;return n', 'for(k in b.items)n+=' + WG + '?GGSX_WEIGHT.count(b.items[k]):b.items[k].n||0;return n'),
 ]),
 'b50e9a01-c25c-4e19-9104-e5566d30d3ee': ('a weighed line counts as one item', [
  ('t.n>0&&(o+=t.n,s+=t.n*(+t.price||0))', 't.n>0&&(o+=' + WG + '?GGSX_WEIGHT.count(t):t.n,s+=t.n*(+t.price||0))'),
 ]),
 'f370f065-40d0-48b2-988a-956ca823a00e': ('a weighed line counts as one item', [
  ('e+=n.n,t+=n.n*(+n.price||0)', 'e+=' + WG + '?GGSX_WEIGHT.count(n):n.n,t+=n.n*(+n.price||0)'),
 ]),
 'shop41-rentals-page': ('a weighed line counts as one item', [
  ('bn += l.n;', 'bn += W.GGSX_WEIGHT ? W.GGSX_WEIGHT.count(l) : l.n;'),
 ]),
}

def main():
    total = 0
    for mid, (why, reps) in P.items():
        f = os.path.join(SRC, mid + '.html')
        s = open(f, encoding='utf-8').read()
        if 'GGSX_WEIGHT' in s:
            sys.exit('already patched: ' + mid)
        for old, new in reps:
            c = s.count(old)
            if c != 1:
                sys.exit('%s: expected 1 match, found %d: %s' % (mid, c, old[:90]))
            s = s.replace(old, new)
            total += 1
        s = NOTE % why + s
        open(f, 'w', encoding='utf-8').write(s)
        print('patched', mid, len(reps))
    print('replacements:', total)

if __name__ == '__main__':
    main()
