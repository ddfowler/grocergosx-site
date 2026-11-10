#!/usr/bin/env python3
"""GrocerGoSx Orders app v1.1.1 (4 Nov 2026), patched on the built file ggsx-ops-v1.1.0.txt (its source, ggsx-ops/app/src, is not in
this package; make the same change there before the next app build): "Use the run sheet" also applies the label weights of items sold
by weight (run sheet state w, size "per lb"): the invoice line's quantity becomes the weight on the label, in lb.
usage: python3 patches/ops-v1.1.1-weights.py ggsx-ops-v1.1.0.txt ggsx-ops-v1.1.1.txt"""
import sys
src, dst = sys.argv[1], sys.argv[2]
s = open(src, encoding='utf-8').read()
R = [
 ('GrocerGoSx Orders v1.1.0 (built 2026-11-02)',
  'GrocerGoSx Orders v1.1.1 (built 2026-11-02; 4 Nov 2026: "Use the run sheet" applies the label weights of items sold by weight, patched on the built file: ggsx-bundle/patches/ops-v1.1.1-weights.py)'),
 ('var o="1.1.0"', 'var o="1.1.1"'),
 ('n={s:n.s||{},n:n.n||{},p:n.p||{}};', 'n={s:n.s||{},n:n.n||{},p:n.p||{},w:n.w||{}};'),
 ('if("out"===a||"sub"===a){var s=(String(i[0]||"")+(i[1]?" "+i[1]:"")).trim()',
  'var wq="got"===a&&/^\\s*per\\s*lb\\s*$/i.test(String(i[1]||""))&&+(t.st.w||{})[r]>0;if("out"===a||"sub"===a||wq){var s=(String(i[0]||"")+(i[1]?" "+i[1]:"")).trim()'),
 (r'if("out"===a)n.push({t:"out",L:c,text:j(c.qty)+" \xd7 "+c.name});else{',
  r'if(wq){var wv=Math.round(1e3*+t.st.w[r])/1e3;n.push({t:"wt",L:c,qty:wv,text:c.name+": "+j(c.qty)+" → "+j(wv)+" lb, label weight ("+_(wv*(+c.price||0))+")"})}else if("out"===a)n.push({t:"out",L:c,text:j(c.qty)+" \xd7 "+c.name});else{'),
 ('r.length&&o.push(Q("div",{class:"go-card",style:"padding:10px 12px"},[Q("h3",{class:"go-h3",text:"Substituted"}),r.map((function(t){return Q("div",{class:"go-chg",text:t.text})}))])),',
  'r.length&&o.push(Q("div",{class:"go-card",style:"padding:10px 12px"},[Q("h3",{class:"go-h3",text:"Substituted"}),r.map((function(t){return Q("div",{class:"go-chg",text:t.text})}))])),(function(){var w=n.ch.filter((function(t){return"wt"===t.t}));w.length&&o.push(Q("div",{class:"go-card",style:"padding:10px 12px"},[Q("h3",{class:"go-h3",text:"Weighed at the store"}),w.map((function(t){return Q("div",{class:"go-chg",text:t.text})}))]))})(),'),
 ('n.ch.forEach((function(t){if("out"===t.t){var e=F.lines.indexOf(t.L);e>=0&&F.lines.splice(e,1)}else{',
  'n.ch.forEach((function(t){if("wt"===t.t){t.L.qty=t.qty}else if("out"===t.t){var e=F.lines.indexOf(t.L);e>=0&&F.lines.splice(e,1)}else{'),
]
for old, new in R:
    c = s.count(old)
    if c != 1: sys.exit('expected 1 match, found %d: %s' % (c, old[:80]))
    s = s.replace(old, new)
open(dst, 'w', encoding='utf-8').write(s)
print('ok', len(R), 'replacements ->', dst)
