#!/usr/bin/env python3
"""GrocerGoSx Orders app v1.1.2 (7 Nov 2026), patched on the built file ggsx-ops-v1.1.1.txt (its source, ggsx-ops/app/src, is not in this
package; make the same change there before the next app build): the "Confirmed" message template (chip "Confirmed" in "Message from a
template", and the WhatsApp text offered after the Confirmed step) is written from what the client chose at checkout: arriving or already on
the island, a guest's name, the flight and landing time, stocking before arrival or waiting until check-in, and how we get in. Dwayne's
wording (7 Nov 2026): "Hi Darlene! / Your GrocerGoSx order is confirmed for Sunday, November 8. / We've noted your flight details and will
coordinate with The Cliff reception to have your groceries stocked before your arrival. / Once we've sourced your requested items, we'll
send you a secure payment link. / Thank you for choosing GrocerGoSx!" The helper functions are in ops-v1.1.2-confirm-message.js (tested by
tests/ops-confirm-message-check.js).
usage: python3 patches/ops-v1.1.2-confirm-message.py ops/ggsx-ops-v1.1.1.txt ops/ggsx-ops-v1.1.2.txt"""
import os, sys
src, dst = sys.argv[1], sys.argv[2]
s = open(src, encoding='utf-8').read()
js = open(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'ops-v1.1.2-confirm-message.js'), encoding='utf-8').read()
helpers = js[js.index('function ggsxPlace('):].strip()
R = [
 ('GrocerGoSx Orders v1.1.1 (built 2026-11-02; 4 Nov 2026: "Use the run sheet" applies the label weights of items sold by weight, patched on the built file: ggsx-bundle/patches/ops-v1.1.1-weights.py)',
  'GrocerGoSx Orders v1.1.2 (built 2026-11-02; 4 Nov 2026: "Use the run sheet" applies the label weights of items sold by weight, patched on the built file: ggsx-bundle/patches/ops-v1.1.1-weights.py; 7 Nov 2026: the "Confirmed" message is written from what the client chose at checkout, patched on the built file: ggsx-bundle/patches/ops-v1.1.2-confirm-message.py)'),
 ('var o="1.1.1"', 'var o="1.1.2"'),
 ('function Jt(t,e,n){', helpers + 'function Jt(t,e,n){'),
 (r'case"confirm":return"Hi "+o+", thank you for your GrocerGoSx order! It\u2019s confirmed"+(l?" for "+l:"")+". We\u2019ll shop everything fresh and let you know when we\u2019re on our way."+r;',
  'case"confirm":return ggsxConfirmText(e);'),
]
for old, new in R:
    c = s.count(old)
    if c != 1: sys.exit('expected 1 match, found %d: %s' % (c, old[:80]))
    s = s.replace(old, new)
open(dst, 'w', encoding='utf-8').write(s)
print('ok', len(R), 'replacements ->', dst)
