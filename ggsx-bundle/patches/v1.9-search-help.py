#!/usr/bin/env python3
"""v1.9 (5 Nov 2026): search help on Shop Now. Applies the Shop 2 Engine hooks for the new bundle-only module Shop 43 Search Help
(src/shop43-search-help.html) and puts that module into order.json right before Shop 2. Run once from ggsx-bundle/ (it refuses to run twice)."""
import json, os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'src')
SHOP2 = os.path.join(SRC, '7978f5ff-27ec-4553-81c6-9b4e3b65a96c.html')

s = open(SHOP2, encoding='utf-8').read()
if 'GGSX_SEARCH' in s:
    sys.exit('Shop 2 already has the v1.9 hooks')

# 1. the search view: when no product matches every word as typed, ask GGSX_SEARCH for close matches; with none, the request card
A_OLD = ('if("q"===i.k){if(n=i.q,e=(t=(s=n.toLowerCase().split(/\\s+/).filter(Boolean)).length?C.products.filter(function(t){return s.every('
         'function(e){return t.q.indexOf(e)>=0})}).sort(function(t,e){return(0===e.name.toLowerCase().indexOf(s[0]))-(0===t.name.toLowerCase()'
         '.indexOf(s[0]))||e.stock-t.stock}):[]).length?t.length+" result"+(1===t.length?"":"s")+" for “"+i.q+"”":"",a.appendChild(u("div",'
         '{class:"gs-crumb"},[u("button",{type:"button",text:"‹ All departments",onclick:function(){A("")}})])),a.appendChild(u("h2",{class:'
         '"gs-h2",text:e||"No results"})),!t.length)return void a.appendChild(u("p",{class:"gs-muted",text:r.noResults||"Nothing matched that."}))}')
A_NEW = ('if("q"===i.k){var gX=window.GGSX_SEARCH,gF=null;if(n=i.q,(t=(s=n.toLowerCase().split(/\\s+/).filter(Boolean)).length?C.products.filter('
         'function(t){return s.every(function(e){return t.q.indexOf(e)>=0})}).sort(function(t,e){return(0===e.name.toLowerCase().indexOf(s[0]))-'
         '(0===t.name.toLowerCase().indexOf(s[0]))||e.stock-t.stock}):[]).length||!gX||!s.length||(gF=gX.fuzzy(C.products,n)).list.length&&'
         '(t=gF.list),e=t.length?gF&&gF.close?gX.head(t.length,i.q):t.length+" result"+(1===t.length?"":"s")+" for “"+i.q+"”":"",'
         'a.appendChild(u("div",{class:"gs-crumb"},[u("button",{type:"button",text:"‹ All departments",onclick:function(){A("")}})])),'
         'a.appendChild(u("h2",{class:"gs-h2",text:e||"No results"})),!t.length)return a.appendChild(u("p",{class:"gs-muted",text:'
         'r.noResults||"Nothing matched that."})),void(gX&&gX.card(a,i.q,!1));gF&&gF.close&&(a.appendChild(u("p",{class:"gs-muted gs-close",'
         'text:gX.note(i.q)})),gX.marker(a,r.noResults||"Nothing matched that."))}')
# 2. after close matches, the same card ("Not what you were looking for?")
B_OLD = 'a.appendChild(C.els.grid=u("div",{class:"gs-grid"})),I(t,0)}function N(){'
B_NEW = 'a.appendChild(C.els.grid=u("div",{class:"gs-grid"})),I(t,0),"q"===i.k&&gF&&gF.close&&gX.card(a,i.q,!0)}function N(){'
for old, new in ((A_OLD, A_NEW), (B_OLD, B_NEW)):
    if s.count(old) != 1:
        sys.exit('Shop 2: expected exactly one match for ' + old[:60] + '… (found %d)' % s.count(old))
    s = s.replace(old, new)
s = ('<!-- v1.9 (5 Nov 2026): a search that matches nothing as typed asks GGSX_SEARCH (Shop 43 Search Help) for close matches (typos, '
     'accents, words run together) and, with none, shows its "Can’t find …?" request card under "Nothing matched that"; after close matches '
     'the card follows them and the "Nothing matched that" line stays, hidden, for the Live Baskets log -->\n') + s
open(SHOP2, 'w', encoding='utf-8').write(s)

# 3. the new module goes right before Shop 2 (its first search can render before later modules have run)
op = os.path.join(ROOT, 'order.json')
order = json.load(open(op, encoding='utf-8'))
if any(o[0] == 'shop43-search-help' for o in order):
    sys.exit('order.json already lists Shop 43')
i = [o[0] for o in order].index('7978f5ff-27ec-4553-81c6-9b4e3b65a96c')
size = len(open(os.path.join(SRC, 'shop43-search-help.html'), encoding='utf-8').read())
order.insert(i, ['shop43-search-help', 'Shop 43 Search Help', size])
open(op, 'w', encoding='utf-8').write('[\n' + ',\n'.join(json.dumps(x, ensure_ascii=False) for x in order) + '\n]\n')   # same layout as before
json.dump({'id': 'shop43-search-help', 'name': 'GrocerGoSx Shop 43 Search Help', 'revision': 'bundle-only', 'enabled': True, 'loadOnce': False,
           'position': 'BODY_END', 'category': 'ESSENTIAL', 'bundleOnly': True},
          open(os.path.join(SRC, 'shop43-search-help.json'), 'w', encoding='utf-8'))
print('Shop 2 patched (2 hooks), Shop 43 added to order.json at position', i)
