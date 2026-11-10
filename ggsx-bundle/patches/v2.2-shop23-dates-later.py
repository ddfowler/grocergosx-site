#!/usr/bin/env python3
"""GrocerGoSx Shop 23 Dynamic Checkout v1.1 (9 Nov 2026, bundle v2.2): "Dates not set yet?" for guests who are arriving and hosts ordering
for a guest. Dwayne chose (9 Nov 2026) to let planners send their list without a delivery date: lists like Darlene's ($301, 39 items) were left
in checkout when the form asked for dates, windows and access. With the toggle on, the date, window, flight and landing time step aside, the
address becomes optional and "How would you like it handled?" is optional; the order goes in with the window "Dates to confirm by message",
no date, the address "To confirm by message" when blank, the booked-ahead rate in the estimate, and the note line "Dates to confirm by message."
after the arrival line (so the Orders app's Confirmed message still reads it as an arriving guest). Settings dates_later 0 = off.
usage: python3 patches/v2.2-shop23-dates-later.py   (from ggsx-bundle/)"""
import os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
P = os.path.join(ROOT, 'src', 'd9c0b4ad-bcdf-4f8b-9ec8-2401675ab6af.html')
s = open(P, encoding='utf-8').read()


def rep(old, new):
    global s
    c = s.count(old)
    if c != 1:
        sys.exit('expected 1 match, found %d: %r' % (c, old[:90]))
    s = s.replace(old, new)


rep('<!-- GrocerGoSx Shop 23 Dynamic Checkout v1.0 (23 Oct 2026)',
    '<!-- v1.1 (9 Nov 2026, bundle v2.2): "Dates not set yet?" for arriving guests and hosts (Settings dates_later, 0 = off). On: the date,'
    ' window, flight and landing time step aside, the address and the handling question are optional, and the order goes in with the window'
    ' "Dates to confirm by message", no date, the address "To confirm by message" when blank and the booked-ahead rate (GGSX_CHECKOUT.optional /'
    ' planned / prefill, Shop 3 v1.18). The note block reads "[For guest X. ]Arriving." then any handling / access lines, then "Dates to confirm'
    ' by message." -->\n<!-- GrocerGoSx Shop 23 Dynamic Checkout v1.0 (23 Oct 2026)')

rep('    access: "Access: "\n  }\n};',
    '    access: "Access: "\n  },\n'
    '  later: {\n'
    '    t: "Dates not set yet?",\n'
    '    d: "Send your list now. We\'ll confirm the day with you by message",\n'
    '    win: "Dates to confirm by message",\n'
    '    address: "To confirm by message",\n'
    '    note: "Dates to confirm by message.",\n'
    '    addrLabel: "Delivery address (if you know it)",\n'
    '    addrHint: "Villa, hotel or boat, or tell us later"\n'
    '  }\n};')

rep('.gc-dyn-err:empty{display:none}',
    '.gc-dyn-err:empty{display:none}\n'
    '.gc-later .gc-chip{border-style:dashed}\n'
    '.gc-later .gc-chip[aria-checked="true"]{border-style:solid}\n'
    '.gc-form .gc-later-off{display:none!important}')

rep('  function apply() {\n'
    '    if (!S.form) return;\n'
    '    var a = st.anchor, arr = a === "arrive" || a === "guest", stock = arr && st.handle === "stock";\n'
    '    S.form.classList.toggle("gc-dyn-wait", !a);\n'
    '    show(G.guest, a === "guest");\n'
    '    show(G.handle, arr);\n'
    '    show(G.access, stock);\n'
    '    show(G.det, stock && st.access && st.access !== "tbd");\n'
    '    show(G.flight, arr);\n',
    '  /* v1.1: "Dates not set yet?" (Settings dates_later, default on) */\n'
    '  function laterOn() {\n'
    '    try { var M = window.GGSX_MORE; return !(M && M.setting) || M.setting("dates_later", 1) !== 0; } catch (e) { return true; }\n'
    '  }\n'
    '  function isLater() {\n'
    '    return !!(S.form && (st.anchor === "arrive" || st.anchor === "guest") && st.later && laterOn());\n'
    '  }\n'
    '  function fire(i) {\n'
    '    if (!i) return;\n'
    '    ["input", "change"].forEach(function (t) { try { i.dispatchEvent(new Event(t, { bubbles: true })); } catch (e) {} });\n'
    '  }\n'
    '  function toggleLater() {\n'
    '    st.later = !st.later;\n'
    '    if (st.later && S.in) {\n'
    '      if (S.in.date) S.in.date.value = "";\n'
    '      if (S.in.win) S.in.win.value = "";\n'
    '    }\n'
    '    clearErr();\n'
    '    apply();\n'
    '    fire(S.in && S.in.date);   /* the estimate (booked-ahead rate) and the window list repaint */\n'
    '  }\n\n'
    '  function apply() {\n'
    '    if (!S.form) return;\n'
    '    var a = st.anchor, arr = a === "arrive" || a === "guest", stock = arr && st.handle === "stock", later = isLater();\n'
    '    S.form.classList.toggle("gc-dyn-wait", !a);\n'
    '    show(G.later, arr && laterOn());\n'
    '    if (G.laterBtn) G.laterBtn.setAttribute("aria-checked", later ? "true" : "false");\n'
    '    show(G.guest, a === "guest");\n'
    '    show(G.handle, arr);\n'
    '    show(G.access, stock);\n'
    '    show(G.det, stock && st.access && st.access !== "tbd");\n'
    '    show(G.flight, arr && !later);\n'
    '    [S.in && S.in.date, S.in && S.in.win].forEach(function (i) { var f = i && i.closest(".gc-f"); if (f) f.classList.toggle("gc-later-off", later); });\n'
    '    if (S.addrLbl) S.addrLbl.textContent = later ? cfg.later.addrLabel : S.addrBase;\n'
    '    if (S.in && S.in.address) S.in.address.placeholder = later ? cfg.later.addrHint : S.addrPh;\n')

rep('    if (a === "guest" && !(st.guest || "").trim()) return [E.guest, G.guest];\n',
    '    if (a === "guest" && !(st.guest || "").trim()) return [E.guest, G.guest];\n'
    '    if (isLater()) return null;   /* v1.1: handling and access are confirmed by message with the dates */\n')

rep('    line = (a === "guest" ? "For guest " + (st.guest || "").trim() + ". " : "") + "Arriving";\n'
    '    ds = fmtDate(S.in.date.value);\n'
    '    if (ds) line += " " + ds;\n'
    '    if ((st.flight || "").trim()) line += ", flight " + st.flight.trim();\n'
    '    t = fmtTime(st.land);\n',
    '    var later = isLater();\n'
    '    line = (a === "guest" ? "For guest " + (st.guest || "").trim() + ". " : "") + "Arriving";\n'
    '    ds = later ? "" : fmtDate(S.in.date.value);\n'
    '    if (ds) line += " " + ds;\n'
    '    if (!later && (st.flight || "").trim()) line += ", flight " + st.flight.trim();\n'
    '    t = later ? "" : fmtTime(st.land);\n')

rep('      L.push(N.access + (o ? o.t.toLowerCase() : st.access) + ((st.accessDet || "").trim() ? " (" + st.accessDet.trim() + ")" : "") + ".");\n'
    '    }\n'
    '    return L.join("\\n");',
    '      L.push(N.access + (o ? o.t.toLowerCase() : st.access) + ((st.accessDet || "").trim() ? " (" + st.accessDet.trim() + ")" : "") + ".");\n'
    '    }\n'
    '    if (later) L.push(cfg.later.note);\n'
    '    return L.join("\\n");')

rep('      G.anchor = chips(cfg.anchor, cfg.anchorOpts, "anchor");\n',
    '      G.anchor = chips(cfg.anchor, cfg.anchorOpts, "anchor");\n'
    '      G.laterBtn = el("button", { type: "button", class: "gc-chip", role: "checkbox", "aria-checked": "false", onclick: toggleLater },\n'
    '        [el("b", { text: cfg.later.t }), el("small", { text: cfg.later.d })]);\n'
    '      G.later = el("div", { class: "gc-grp gc-sub gc-later" }, [el("div", { class: "gc-chips" }, [G.laterBtn])]);\n')

rep('      dyn = el("div", { class: "gc-dyn" }, [G.anchor, G.guest, G.handle, G.access, G.det, G.flight, S.dynErr]);\n',
    '      dyn = el("div", { class: "gc-dyn" }, [G.anchor, G.later, G.guest, G.handle, G.access, G.det, G.flight, S.dynErr]);\n'
    '      var af = I.address.closest(".gc-f");\n'
    '      S.addrLbl = af ? af.querySelector("span") : null;\n'
    '      S.addrBase = S.addrLbl ? S.addrLbl.textContent : "";\n'
    '      S.addrPh = I.address.getAttribute("placeholder") || "";\n')

rep('  D.addEventListener("ggsx-checkout-build", function (ev) { var d = ev.detail || {}; build(d.form, d.inputs); });\n',
    '  /* v1.1: the checkout asks these when it checks and sends the order (Shop 3 v1.18) */\n'
    '  (function hooks() {\n'
    '    var CK = window.GGSX_CHECKOUT;\n'
    '    if (!CK || CK.__dynLater) return;\n'
    '    CK.__dynLater = 1;\n'
    '    var opt0 = CK.optional, plan0 = CK.planned, pre0 = CK.prefill;\n'
    '    CK.optional = function () { var a = (opt0 && opt0()) || []; return isLater() ? a.concat(["address", "date", "win"]) : a; };\n'
    '    CK.planned = function () { return isLater() || !!(plan0 && plan0()); };\n'
    '    CK.prefill = function (C, k, f) {\n'
    '      if (pre0) { try { pre0(C, k, f); } catch (e) {} }\n'
    '      if (!isLater() || !C || !k) return;\n'
    '      delete C[k.date];   /* no date at all: the form\'s date field is optional since 9 Nov 2026 */\n'
    '      C[k.win] = cfg.later.win;\n'
    '      if (!String(C[k.address] || "").trim()) C[k.address] = cfg.later.address;\n'
    '    };\n'
    '  })();\n\n'
    '  D.addEventListener("ggsx-checkout-build", function (ev) { var d = ev.detail || {}; build(d.form, d.inputs); });\n')

open(P, 'w', encoding='utf-8').write(s)
print('ok Shop 23 v1.1', len(s))
