#!/usr/bin/env python3
"""v2.0 (6 Nov 2026): shopping hours. Grocery orders are shopped on their delivery day while the supermarkets are open (Settings tab,
section SHOPPING HOURS), so checkout only offers windows we can shop in time; the Late Night Snack Run ends at 11 PM.
Applies: the Shop 2 Engine hook (GGSX_SHOP_API.product), Shop 12 Checkout Polish v1.1 (asks GGSX_SHOPHOURS for every window and for the
hint), the wording in Pages 5, Pages 8, Pages 9 and SEO Content, and puts the new bundle-only module Shop 44 Shopping Hours
(src/shop44-shopping-hours.html) into order.json right after Shop 12. Run once from ggsx-bundle/ (it refuses to run twice).
The Home Snapshot is rebuilt from the sheet's Home tab with snapshot.js, not here."""
import json, os, sys
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'src')

def edit(fid, pairs, note, marker):
    p = os.path.join(SRC, fid + '.html')
    s = open(p, encoding='utf-8').read()
    if marker in s:
        sys.exit(fid + ' already has the v2.0 changes')
    for old, new in pairs:
        if s.count(old) != 1:
            sys.exit('%s: expected exactly one match for %s… (found %d)' % (fid, old[:70], s.count(old)))
        s = s.replace(old, new)
    if note:
        s = note + '\n' + s
    open(p, 'w', encoding='utf-8').write(s)
    print('patched', fid, '(%d changes)' % len(pairs))

# 1. Shop 2 Engine: the product a basket line stands for (department and aisle), from the product list Shop Now last drew
edit('7978f5ff-27ec-4553-81c6-9b4e3b65a96c', [
    ('C.byId={},n.forEach(function(t){C.byId[t.id]=t})}function E(t){',
     'C.byId={},n.forEach(function(t){C.byId[t.id]=t}),window.__ggsxShopIdx=C.byId}function E(t){'),
    ('n.GGSX_SHOP_API={add:w,paint:N};',
     'n.GGSX_SHOP_API={add:w,paint:N,product:function(t){return(window.__ggsxShopIdx||C.byId)[t]||null}};'),
], '<!-- v2.0 (6 Nov 2026): GGSX_SHOP_API.product(id) returns the Shop Now product with that id ({id, cat, sub, name, size, price, …}) from the '
   'product list Shop Now drew last (window.__ggsxShopIdx), or null; Shop 44 Shopping Hours uses it to tell snacks and drinks from other groceries -->',
   '__ggsxShopIdx')

# 2. Shop 12 Checkout Polish v1.1
SHOP12 = 'c0a6990d-cf2b-44a6-ac21-f8ad29ef4478'
edit(SHOP12, [
    ("      tooLate: ' — too late for this day',\n",
     "      tooLate: ' — too late for this day',\n"
     "      outside: ' — outside shopping hours',     /* v1.1: a window outside the supermarkets' hours (Shop 44 Shopping Hours) */\n"),
    ("  function open(ymd, label, all) {\n"
     "    var t = now(), d = dayNo(ymd || t.ymd), td = dayNo(t.ymd);\n"
     "    if (d == null) return true;\n"
     "    if (d < td) return false;\n"
     "    return (d - td) * 1440 + endOf(label, all) > t.mins + P.leadHours * 60;\n"
     "  }\n",
     "  /* why a window can't be picked for that date: '' = it can, 'late' = inside the lead time, 'hours' = outside the shopping hours.\n"
     "     v1.1: a basket with shop items follows the supermarkets' hours (Shop 44 Shopping Hours answers through GGSX_SHOPHOURS.why) */\n"
     "  function why(ymd, label, all) {\n"
     "    var t = now(), d = dayNo(ymd || t.ymd), td = dayNo(t.ymd), end = endOf(label, all), H = W.GGSX_SHOPHOURS, r;\n"
     "    if (d == null) return '';\n"
     "    if (d < td) return 'late';\n"
     "    if (H && H.why) { try { r = H.why(ymd || t.ymd, end, t, P.leadHours); } catch (e) { r = undefined; } if (r != null) return r; }\n"
     "    return (d - td) * 1440 + end > t.mins + P.leadHours * 60 ? '' : 'late';\n"
     "  }\n"
     "  function open(ymd, label, all) { return !why(ymd, label, all); }\n"),
    ("      var ok = open(ymd, o.value, all);\n"
     "      o.disabled = !ok;\n"
     "      o.textContent = o.getAttribute('data-base') + (ok ? '' : P.copy.tooLate);\n",
     "      /* v1.1: a window Shop 27 switched off for a restaurant's hours (data-gh-off) stays off, with its wording */\n"
     "      var w = why(ymd, o.value, all), gh = !!o.getAttribute('data-gh-off'), ok = !w && !gh;\n"
     "      o.disabled = !ok;\n"
     "      o.textContent = o.getAttribute('data-base') + (w === 'hours' ? P.copy.outside : w ? P.copy.tooLate :\n"
     "                      gh ? ((W.GGSX_HOURS && W.GGSX_HOURS.win) || '') : '');\n"),
    ("    var hours = P.leadHours % 1 ? P.leadHours : Math.round(P.leadHours);\n"
     "    HINT.textContent = any ? (hours > 0 ? P.copy.hint.replace('{h}', hours) : '') : P.copy.noneToday;\n",
     "    var hours = P.leadHours % 1 ? P.leadHours : Math.round(P.leadHours), H = W.GGSX_SHOPHOURS, hx;\n"
     "    try { hx = H && H.hint ? H.hint(ymd, any, P.leadHours, t) : undefined; } catch (e) { hx = undefined; }   /* v1.1: the shopping hours */\n"
     "    HINT.textContent = hx != null ? hx : any ? (hours > 0 ? P.copy.hint.replace('{h}', hours) : '') : P.copy.noneToday;\n"),
    ("  /* ---------- wording ---------- */\n",
     "  P.refresh = refresh; P.now = now; P.endOf = endOf;          /* v1.1: for Shop 44 Shopping Hours */\n"
     "  /* ---------- wording ---------- */\n"),
], '<!-- v1.1 (6 Nov 2026, bundle v2.0): asks Shop 44 Shopping Hours (GGSX_SHOPHOURS) about every delivery window and for the hint, so a basket '
   'with shop items only gets windows we can shop on the delivery day while the supermarkets are open ("— outside shopping hours"); a window '
   'Shop 27 Restaurant Hours switched off stays off when the date changes (it used to come back); GGSX_POLISH.refresh / .now / .endOf -->',
   "outside: ' — outside shopping hours'")

# 3. wording: the Late Night Snack Run ends at 11 PM; when we shop
edit('1da7615f-93f9-4952-af04-df827390463a', [            # Pages 5 Texts: Pricing & Service Area
    ('Thursday to Saturday, 9:00–11:30 PM; order by 9:30 PM.', 'Thursday to Saturday, 9:00–11:00 PM; order by 9:30 PM.'),
    ('Thursday to Saturday, 9:00–11:30 PM, Dutch side to start.', 'Thursday to Saturday, 9:00–11:00 PM, Dutch side to start.'),
    ('Delivery windows",x:"Daily from 8:30 AM to 11 PM. Pick a window when you order; same-day windows are often available."',
     'Delivery windows",x:"Daily from 8:30 AM to 11 PM. We shop on your delivery day, in supermarket hours: order by 6 PM for delivery today (by noon on Sundays)."'),
], '<!-- v2.0 (6 Nov 2026): Late Night Snack Run 9:00–11:00 PM (was 11:30); the Delivery windows card says we shop in supermarket hours -->',
   'We shop on your delivery day, in supermarket hours')
edit('f4c1b654-4cb2-42e5-a756-c76f77913d66', [            # Pages 8 All Services
    ('Thursday to Saturday, 9 to 11:30 PM.', 'Thursday to Saturday, 9 to 11 PM.'),
    ('"Same-day windows are often available. Book {{planned_hours}} hours ahead',
     '"Same-day windows are often available: we shop in supermarket hours, so order by 6 PM (Sunday by noon) for delivery the same day. Book {{planned_hours}} hours ahead'),
], '<!-- v2.0 (6 Nov 2026): Late-night snack run 9 to 11 PM (was 11:30); "How far ahead should I book?" says when to order for the same day -->',
   'we shop in supermarket hours, so order by 6 PM')
edit('d6ec509a-e96e-4380-ac3a-1977105bfdb0', [            # Pages 9 Concierge Services
    ('Snacks, drinks and ice at your door, Thursday to Saturday, 9:00 to 11:30 PM.', 'Snacks, drinks and ice at your door, Thursday to Saturday, 9:00 to 11:00 PM.'),
    ('"Thursday to Saturday, 9:00–11:30 PM; order by 9:30 PM.', '"Thursday to Saturday, 9:00–11:00 PM; order by 9:30 PM.'),
    ('"Thursday to Saturday, 9:00 to 11:30 PM; order by 9:30 PM.', '"Thursday to Saturday, 9:00 to 11:00 PM; order by 9:30 PM.'),
], '<!-- v2.0 (6 Nov 2026): Late Night Snack Run 9:00 to 11:00 PM (was 11:30) -->',
   'Thursday to Saturday, 9:00 to 11:00 PM.')
edit('e289f192-d106-44a8-b1ad-815c9bfc9d86', [            # SEO Content
    ('the Late Night Snack Run (Thursday to Saturday until 11:30 PM) covers snacks and drinks.',
     'the Late Night Snack Run (Thursday to Saturday until 11 PM) covers snacks and drinks.'),
    ("'When are you open?', 'Daily from 8:30 AM to 11 PM, until 11:30 PM Thursday to Saturday for the Late Night Snack Run.'",
     "'When are you open?', 'We deliver daily from 8:30 AM to 11 PM. We shop while the supermarkets are open, Monday to Saturday 8 AM to 7 PM and "
     "Sunday 9 AM to 1 PM, and the Late Night Snack Run brings snacks, drinks and ice Thursday to Saturday until 11 PM.'"),
    ("'What are the delivery windows?', 'Delivery windows run daily from 8:30 AM to 11 PM. Same-day windows are often available; booking 48 hours "
     "ahead gets you our planned-run rates and the window you want in high season.'",
     "'What are the delivery windows?', 'Delivery windows run daily from 8:30 AM to 11 PM. We shop on your delivery day while the supermarkets are "
     "open (Monday to Saturday 8 AM to 7 PM, Sunday 9 AM to 1 PM), so order by 6 PM, or by noon on Sunday, for delivery the same day. Booking 48 "
     "hours ahead gets you our planned-run rates and the window you want in high season.'"),
], '<!-- v2.0 (6 Nov 2026): FAQ answers say when we shop (supermarket hours) and that the Late Night Snack Run ends at 11 PM -->',
   'We shop while the supermarkets are open')

# 4. the new module goes right after Shop 12 (it answers Shop 12's questions; nothing calls it before a checkout opens)
op = os.path.join(ROOT, 'order.json')
order = json.load(open(op, encoding='utf-8'))
if any(o[0] == 'shop44-shopping-hours' for o in order):
    sys.exit('order.json already lists Shop 44')
i = [o[0] for o in order].index(SHOP12) + 1
size = len(open(os.path.join(SRC, 'shop44-shopping-hours.html'), encoding='utf-8').read())
order.insert(i, ['shop44-shopping-hours', 'Shop 44 Shopping Hours', size])
open(op, 'w', encoding='utf-8').write('[\n' + ',\n'.join(json.dumps(x, ensure_ascii=False) for x in order) + '\n]\n')   # same layout as before
json.dump({'id': 'shop44-shopping-hours', 'name': 'GrocerGoSx Shop 44 Shopping Hours', 'revision': 'bundle-only', 'enabled': True, 'loadOnce': False,
           'position': 'BODY_END', 'category': 'ESSENTIAL', 'bundleOnly': True},
          open(os.path.join(SRC, 'shop44-shopping-hours.json'), 'w', encoding='utf-8'))
print('Shop 44 added to order.json at position', i)
