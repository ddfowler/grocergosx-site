#!/usr/bin/env python3
"""GrocerGoSx site code v2.2 (9 Nov 2026): the four checkout fixes Dwayne chose after the "Checkout not sent" review.
Applies the hooks the existing modules need, in src/ (each replacement must match exactly once):
  * Shop 3 Checkout v1.18: GGSX_CHECKOUT.estimate(lines, side, date, window) = the checkout's own fee maths (for the basket's estimate line,
    Shop 45); .optional() = fields a send may leave empty; .prefill(fields, keys, inputs) runs before ggsx-checkout-submit, so every module
    that reads the order on submit sees the same date and window; .planned() and window.GGSX_PLAN_FORCE choose the booked-ahead rate.
  * Shop 8 Live Core v1.4: an order with no date shows just its window ("Dates to confirm by message").
  * Shop 12 Checkout Polish v1.2: "As soon as possible" (GGSX_ASAP, Shop 45) is answered first in why(); why/open/settings exported;
    the thank-you recap leaves out an empty date.
  * Shop 22 Minimum Order v1.5: GGSX_MIN.state() for the basket line.
  * Shop 23 Dynamic Checkout v1.1: "Dates not set yet?" for arriving guests and hosts (Settings dates_later, default on).
  * Shop 27 Restaurant Hours v1.1: inBasket / closedIn / state / fmt / ready on GGSX_HOURS.
  * Shop 33 Fee Split & Checkout Totals v1.6: planned() follows GGSX_PLAN_FORCE and GGSX_CHECKOUT.planned(); kind() on GGSX_FEE_SPLIT.
  * Shop 44 Shopping Hours v1.1: GGSX_SHOPHOURS.load().
usage: python3 patches/v2.2-checkout-helpers.py   (from ggsx-bundle/)"""
import json, glob, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'src')
names = {}
for j in glob.glob(os.path.join(SRC, '*.json')):
    try:
        names[json.load(open(j, encoding='utf-8')).get('name')] = j[:-5] + '.html'
    except Exception:
        pass


def patch(name, pairs):
    p = names[name]
    s = open(p, encoding='utf-8').read()
    for old, new in pairs:
        c = s.count(old)
        if c != 1:
            sys.exit('%s: expected 1 match, found %d: %r' % (name, c, old[:90]))
        s = s.replace(old, new)
    open(p, 'w', encoding='utf-8').write(s)
    print('ok', name, len(pairs))


# ---------------------------------------------------------------- Shop 3 Checkout v1.18
patch('GrocerGoSx Shop 3 Checkout', [
    ('<!-- v1.8 (4 Nov 2026): items sold by weight',
     '<!-- v1.18 (9 Nov 2026, bundle v2.2): GGSX_CHECKOUT.estimate(lines, side, date, window) returns the checkout\'s own estimate (Shop 45\'s basket line);'
     ' .optional() names fields a send may leave empty (Shop 23 "Dates not set yet?": address, date, window); .prefill(fields, keys, inputs) runs'
     ' just before ggsx-checkout-submit, so every module reading the order sees the same date and window; .planned() and window.GGSX_PLAN_FORCE'
     ' (true / false / null) choose the booked-ahead rate. -->\n<!-- v1.8 (4 Nov 2026): items sold by weight'),
    ('o={};function l(t,n,a){',
     'o={};n.estimate=function(L,A,Dt,Wn){var s=p(L),x=h(s.s,A,L,Dt,Wn);return x.s=s.s,x.n=s.n,x};function l(t,n,a){'),
    ('P=function(){try{if(t.GGSX_REF.get().name)return!0}catch(e){}var n=',
     'P=function(){try{if(t.GGSX_REF.get().name)return!0}catch(e){}if(null!=t.GGSX_PLAN_FORCE)return!!t.GGSX_PLAN_FORCE;try{var Q=t.GGSX_CHECKOUT;if(Q&&Q.planned&&Q.planned())return!0}catch(e){}var n='),
    ('["first","email","phone","address","side","date","win"].forEach(function(e){f[e].value.trim()||x||(x=e)})',
     '["first","email","phone","address","side","date","win"].forEach(function(e){n.optional&&n.optional().indexOf(e)>=0||f[e].value.trim()||x||(x=e)})'),
    ('}(g,f.side.value),e.dispatchEvent(new CustomEvent("ggsx-checkout-submit"',
     '}(g,f.side.value),n.prefill&&n.prefill(C,k,f),e.dispatchEvent(new CustomEvent("ggsx-checkout-submit"'),
])

# ---------------------------------------------------------------- Shop 8 Live Core v1.4
patch('GrocerGoSx Shop 8 Live Core', [
    ("    return ds + (c.w ? ' · ' + c.w : '');",
     "    return ds ? ds + (c.w ? ' · ' + c.w : '') : (c.w || '');   /* v1.4 (9 Nov 2026): no date yet, e.g. \"Dates to confirm by message\" */"),
])

# ---------------------------------------------------------------- Shop 12 Checkout Polish v1.2
patch('GrocerGoSx Shop 12 Checkout Polish', [
    ('<!-- GrocerGoSx Shop 12 Checkout Polish v1.0.2',
     '<!-- v1.2 (9 Nov 2026, bundle v2.2): "As soon as possible" (GGSX_ASAP, Shop 45) is answered first in why(): open while every restaurant in a'
     ' restaurant-only basket takes orders, today only. why / open / settings are on GGSX_POLISH for the basket\'s estimate line. The thank-you recap'
     ' leaves out an empty date (an order sent with "Dates to confirm by message"). -->\n<!-- GrocerGoSx Shop 12 Checkout Polish v1.0.2'),
    ('  function why(ymd, label, all) {\n',
     '  function why(ymd, label, all) {\n'
     '    var A = W.GGSX_ASAP;   /* v1.2: "As soon as possible" (Shop 45): open while the restaurants take orders, today only */\n'
     "    if (A && A.is && A.is(label)) { try { return A.ok(ymd || now().ymd) ? '' : 'late'; } catch (e) { return 'late'; } }\n"),
    ('  P.refresh = refresh; P.now = now; P.endOf = endOf;',
     '  P.refresh = refresh; P.now = now; P.endOf = endOf; P.why = why; P.open = open; P.settings = settings;   /* v1.2: why/open/settings for Shop 45 */'),
    ("pretty(f[k.date] || '') + (f[k.win] ? ' · ' + f[k.win] : '')",
     "(f[k.date] ? pretty(f[k.date]) + (f[k.win] ? ' · ' + f[k.win] : '') : (f[k.win] || ''))"),
])

# ---------------------------------------------------------------- Shop 22 Minimum Order v1.5
patch('GrocerGoSx Shop 22 Minimum Order', [
    ('e.GGSX_MIN={below:function(){return!r().ok}}',
     'e.GGSX_MIN={below:function(){return!r().ok},state:r}'),
])
p22 = names['GrocerGoSx Shop 22 Minimum Order']
s22 = open(p22, encoding='utf-8').read()
open(p22, 'w', encoding='utf-8').write('<!-- v1.5 (9 Nov 2026, bundle v2.2): GGSX_MIN.state() gives {ok, s (basket), m (minimum), lau, ren} for the basket\'s estimate line (Shop 45). -->\n' + s22)

# ---------------------------------------------------------------- Shop 27 Restaurant Hours v1.1
patch('GrocerGoSx Shop 27 Restaurant Hours', [
    ('  setInterval(paintAll, 30000);\n  load();\n})();',
     '  setInterval(paintAll, 30000);\n'
     '  /* v1.1 (9 Nov 2026, bundle v2.2): for Shop 45 (the basket\'s estimate line and "As soon as possible") */\n'
     '  TXT.inBasket = inBasket; TXT.closedIn = closedIn; TXT.state = state; TXT.fmt = fmt;\n'
     '  TXT.ready = function () { return Object.keys(BYID).length > 0; };\n'
     '  load();\n})();'),
])

# ---------------------------------------------------------------- Shop 33 Fee Split & Checkout Totals v1.6
patch('GrocerGoSx Shop 33 Fee Split & Checkout Totals', [
    ('    try { if (W.GGSX_REF && W.GGSX_REF.get().name) return true; } catch (e) {}\n'
     "    var f = D.querySelector('.gc-wrap'),",
     '    try { if (W.GGSX_REF && W.GGSX_REF.get().name) return true; } catch (e) {}\n'
     '    if (W.GGSX_PLAN_FORCE != null) return !!W.GGSX_PLAN_FORCE;   /* v1.6: the basket\'s estimate line (Shop 45) asks for one rate */\n'
     '    try { var CK = W.GGSX_CHECKOUT; if (CK && CK.planned && CK.planned()) return true; } catch (e) {}   /* v1.6: dates to confirm (Shop 23) */\n'
     "    var f = D.querySelector('.gc-wrap'),"),
])
p33 = names['GrocerGoSx Shop 33 Fee Split & Checkout Totals']
s33 = open(p33, encoding='utf-8').read()
anchor = "  var TXT = W.GGSX_FEE_SPLIT = {"
if s33.count(anchor) != 1:
    sys.exit('Shop 33 anchor')
# kind() is a function declaration in the same scope (hoisted), so it can be attached right after TXT is made
i = s33.index(anchor)
j = s33.index('};', i) + 2
s33 = s33[:j] + '\n  TXT.kind = kind;   /* v1.6 (9 Nov 2026): restaurant-only check for Shop 45 */' + s33[j:]
s33 = '<!-- v1.6 (9 Nov 2026, bundle v2.2): planned() follows window.GGSX_PLAN_FORCE (Shop 45\'s basket line) and GGSX_CHECKOUT.planned() (Shop 23 "Dates not set yet?" = booked ahead); GGSX_FEE_SPLIT.kind(lines). -->\n' + s33
open(p33, 'w', encoding='utf-8').write(s33)
print('ok GrocerGoSx Shop 33 Fee Split & Checkout Totals (kind export, header)')

# ---------------------------------------------------------------- Shop 44 Shopping Hours v1.1
patch('GrocerGoSx Shop 44 Shopping Hours', [
    ('  P.check = check; P.kind = kind; P.hoursFor = hoursFor; P.text = text;',
     '  P.check = check; P.kind = kind; P.hoursFor = hoursFor; P.text = text; P.load = load;   /* v1.1 (9 Nov 2026): Shop 45 loads the Settings */'),
])
p8 = names['GrocerGoSx Shop 8 Live Core']
s8 = open(p8, encoding='utf-8').read()
open(p8, 'w', encoding='utf-8').write('<!-- v1.4 (9 Nov 2026, bundle v2.2): C.when() leaves out an empty date, so an order sent with "Dates to confirm by message" reads cleanly on the run sheet and the client\'s page. -->\n' + s8)
p44 = names['GrocerGoSx Shop 44 Shopping Hours']
s44 = open(p44, encoding='utf-8').read()
open(p44, 'w', encoding='utf-8').write('<!-- v1.1 (9 Nov 2026, bundle v2.2): GGSX_SHOPHOURS.load() so Shop 45 can read the shopping hours before the checkout is opened. -->\n' + s44)
p27 = names['GrocerGoSx Shop 27 Restaurant Hours']
s27 = open(p27, encoding='utf-8').read()
open(p27, 'w', encoding='utf-8').write('<!-- v1.1 (9 Nov 2026, bundle v2.2): GGSX_HOURS.inBasket / closedIn / state / fmt / ready for Shop 45 (estimate line, "As soon as possible"). -->\n' + s27)
print('headers ok')
