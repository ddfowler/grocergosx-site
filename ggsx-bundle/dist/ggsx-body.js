/*! GrocerGoSx site code bundle v1.2 — built 2026-11-01T23:14:03.200Z from 61 modules in ggsx-bundle/src (the 60 former Body-end Custom Code snippets, kept disabled in Wix as restore copies, plus bundle-only modules). The bundle runs again on every page change; since v1.2 each module's window/document listeners and observers are tracked, and when a module registers the same one again on the next page, the copy from its previous run is removed, so nothing piles up. */
(function(){var W=window;W.__GGSX_BUNDLE=W.__GGSX_BUNDLE||{};W.__GGSX_BUNDLE.v="1.2";W.__GGSX_BUNDLE.runs=(W.__GGSX_BUNDLE.runs||0)+1;})();
(function () {
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
})();
function __ggsxCss(attrs, css) {
  try {
    var D = document, key = 'c' + css.length + '_' + (function (s) { var h = 5381, i; for (i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); })(css);
    if (D.querySelector('style[data-ggsx-css="' + key + '"]')) return;
    var st = D.createElement('style');
    if (attrs) attrs.replace(/([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+)))?/g, function (_, n, v1, v2, v3) { var v = v1 != null ? v1 : v2 != null ? v2 : v3 != null ? v3 : ''; try { st.setAttribute(n, v); } catch (e) {} return ''; });
    st.setAttribute('data-ggsx-css', key);
    st.textContent = css;
    (D.body || D.head).appendChild(st);
  } catch (e) { try { console.warn('[GGSX bundle] css', e); } catch (e2) {} }
}

/* ===== GrocerGoSx Run Builder 1 Config & Style (1bb50c3f-3c30-4c97-815b-902e9db8e5d1, rev 9) ===== */
__ggsxB("1bb50c3f-3c30-4c97-815b-902e9db8e5d1#0");
try {
window.GGSX_RUN = {
  fees: { shopFee: 80, plannedFee: 70, plannedHours: 48, passRate: 0, stop: 20, pickup: 20, errandStop: 20, errandOnly: 55, laundryEachWay: 20, deliveryDutch: 32, deliveryFrench: 37, rate: 0, min: 0 }
};
} catch (e) { try { console.warn('[GGSX bundle] Run Builder 1 Config & Style', e); } catch (e2) {} }
__ggsxE("1bb50c3f-3c30-4c97-815b-902e9db8e5d1#0");

/* ===== GrocerGoSx App Shell (089c0fed-855a-4e35-8f6e-fcbb9b91bfa7, rev 11) ===== */
__ggsxCss("", "\n.gg-top,.gg-tabs,.gg-more,.gg-search{display:none}\n@media (max-width:860px){\nhtml.gg-m{--gg-font:\"Avenir Light\",avenir-lt-w01_35-light1475496,Avenir,\"Helvetica Neue\",Arial,sans-serif}\n.gg-top,.gg-tabs,.gg-search,.gg-sheet{font-family:var(--gg-font)}\nhtml.gg-m:not(.ggsx-app):not(.gg-hdr) header{display:none!important}\nhtml.gg-m .minimizedButtonV2{display:none!important}\nhtml.gg-m.gg-chat .gg-top,html.gg-m.gg-chat .gg-tabs,html.gg-m.gg-chat .gg-search,html.gg-m.gg-chat .ggsx-app-top,html.gg-m.gg-chat .ggsx-app-bar,html.gg-m.gg-chat .ggsx-app-toast{display:none!important}\nhtml.gg-m:not(.ggsx-app) #SITE_CONTAINER{padding-top:calc(56px + env(safe-area-inset-top,0))}\nhtml.gg-m #SITE_CONTAINER{padding-bottom:calc(72px + env(safe-area-inset-bottom,0))}\nhtml.gg-m:not(.ggsx-app) .gg-top{display:flex;position:fixed;top:0;left:0;right:0;z-index:9000;height:calc(56px + env(safe-area-inset-top,0));padding:env(safe-area-inset-top,0) 6px 0 16px;align-items:center;gap:2px;background:linear-gradient(90deg,#F4581F,#F58453);box-shadow:0 1px 0 rgba(0,0,0,.06)}\n.gg-top .gg-logo{flex:1;min-width:0;display:flex;align-items:center;height:100%;text-decoration:none}\n.gg-top .gg-logo img{height:30px;width:auto;display:block}\n.gg-ib{width:44px;height:44px;flex:none;border:0;background:none;color:#fff;display:flex;align-items:center;justify-content:center;position:relative;text-decoration:none;cursor:pointer;padding:0;font:inherit;-webkit-tap-highlight-color:transparent}\n.gg-ib svg,.gg-tab svg{width:24px;height:24px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\n.gg-badge{position:absolute;top:4px;right:3px;min-width:18px;height:18px;border-radius:999px;background:#fff;color:#F4551B;font-size:11px;font-weight:700;line-height:18px;text-align:center;padding:0 4px}\n.gg-badge:empty,.gg-badge[data-n=\"0\"]{display:none}\nhtml.gg-m:not(.ggsx-app) .gg-search{display:none;position:fixed;top:calc(56px + env(safe-area-inset-top,0));left:0;right:0;z-index:9000;background:#fff;padding:10px 16px;border-bottom:1px solid #e9e4dd;gap:8px;margin:0}\nhtml.gg-m:not(.ggsx-app) .gg-search.open{display:flex}\n.gg-search input{flex:1;min-width:0;height:44px;border:1.5px solid #cfc9c1;border-radius:12px;padding:0 12px;font:inherit;font-size:16px;background:#fff;color:#1b1b1b}\n.gg-search button{height:44px;padding:0 16px;border-radius:999px;border:0;background:#F4551B;color:#fff;font:inherit;font-weight:700;cursor:pointer}\nhtml.gg-m .gg-tabs{display:flex;position:fixed;left:0;right:0;bottom:0;z-index:9000;box-sizing:border-box;height:calc(64px + env(safe-area-inset-bottom,0));background:#fff;border-top:1px solid #e9e4dd;padding:5px 4px env(safe-area-inset-bottom,0);margin:0}\n.gg-tab{flex:1;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;min-height:50px;padding:2px;box-sizing:border-box;border:0;background:none;color:#6b6b6b;font:inherit;font-size:11px;line-height:1.1;text-decoration:none;cursor:pointer;-webkit-tap-highlight-color:transparent}\n.gg-tab.on{color:#F4551B;font-weight:700}\nhtml.gg-m .gg-more{display:block;position:fixed;inset:0;z-index:9100;background:rgba(27,27,27,.55);opacity:0;pointer-events:none;transition:opacity .2s}\nhtml.gg-m .gg-more.open{opacity:1;pointer-events:auto}\n.gg-sheet{position:absolute;left:0;right:0;bottom:0;max-height:84vh;overflow:auto;background:#fff;border-radius:20px 20px 0 0;padding:8px 12px calc(16px + env(safe-area-inset-bottom,0));transform:translateY(24px);transition:transform .25s;color:#1b1b1b}\n.gg-more.open .gg-sheet{transform:none}\n.gg-sheet-h{display:flex;align-items:center;justify-content:space-between;padding:8px 4px 6px 12px}\n.gg-sheet-h b{font-family:Benzin,sans-serif;font-size:18px}\n.gg-sheet-h .gg-ib{color:#1b1b1b}\n.gg-sheet a{display:flex;align-items:center;justify-content:space-between;padding:14px 12px;border-radius:12px;color:#1b1b1b;text-decoration:none;font-size:16px;line-height:1.2}\n.gg-sheet a.on{background:#fff1ea;color:#F4551B;font-weight:700}\n.gg-sheet a::after{content:\"\\203A\";color:#cfc9c1;font-size:24px;line-height:1}\n.gg-sheet hr{border:0;border-top:1px solid #e9e4dd;margin:6px 8px}\nhtml.gg-m wow-image.gg-round,html.gg-m wow-image.gg-round img{border-radius:16px!important;overflow:hidden}\n}\n");
__ggsxB("089c0fed-855a-4e35-8f6e-fcbb9b91bfa7#0");
try {
!function(){
  if(window.__ggsxAppShellOn)return;window.__ggsxAppShellOn=1;
  var TABS=[{k:"home",t:"Home",h:"/",i:"home"},{k:"run",t:"Villa",h:"/villa-stocking",i:"run"},{k:"shop",t:"Shop",h:"/shop-now",i:"shop",m:/^\/(shop-now|category|product-page|cart-page)(\/|$)/},{k:"chat",t:"Chat",i:"chat"},{k:"more",t:"More",i:"more"}];
  var EXTRA=[{t:"Shop groceries",h:"/shop-now"},{t:"Restaurants",h:"/restaurants"},{t:"Pharmacy",h:"/pharmacy"},{t:"Villa stocking",h:"/villa-stocking"},{t:"Stocking packages",h:"/stocking-packages"},{t:"Yacht provisioning",h:"/yacht-provisioning"},{t:"For hosts & managers",h:"/partners"},{t:"Pricing & fees",h:"/pricing"},{t:"Service area",h:"/service-area"},{t:"Blog",h:"/blog"}];
  var WA="590690779119", LOGO="https://static.wixstatic.com/media/85c3c2_862c7c7deba142b5a50ca891db1246aa~mv2.png", BASKET="ggsx_basket", SHOP="/shop-now";
  var ICON={home:'<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    run:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1"/><path d="M9 13l2 2 4-4"/>',
    shop:'<path d="M6 8h12l1 12H5z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    chat:'<path d="M4 5h16v11H9l-5 4z"/>',
    more:'<rect x="4" y="4" width="6" height="6" rx="1.5"/><rect x="14" y="4" width="6" height="6" rx="1.5"/><rect x="4" y="14" width="6" height="6" rx="1.5"/><rect x="14" y="14" width="6" height="6" rx="1.5"/>',
    search:'<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>',
    user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    x:'<path d="M6 6l12 12M18 6L6 18"/>'};
  var t=document,SH=null;
  function h(tag,attrs,kids){var el=t.createElement(tag),k;if(attrs)for(k in attrs){if(attrs[k]==null)continue;"class"===k?el.className=attrs[k]:"text"===k?el.textContent=attrs[k]:"on"===k.slice(0,2)?el.addEventListener(k.slice(2),attrs[k]):el.setAttribute(k,attrs[k])}(kids||[]).forEach(function(c){c&&el.appendChild("string"==typeof c?t.createTextNode(c):c)});return el}
  function svg(k){var s=t.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("viewBox","0 0 24 24");s.setAttribute("aria-hidden","true");s.innerHTML=ICON[k];return s}
  function path(){return location.pathname.replace(/\/+$/,"")||"/"}
  function same(a,b){return(a||"").replace(/\/+$/,"")===(b||"").replace(/\/+$/,"")||(a==="/"&&b==="")}
  function isOn(tab){var p=path();if(tab.m)return tab.m.test(p);return!!tab.h&&(tab.h==="/"?p==="/":same(p,tab.h))}
  function hdr(){return t.querySelector("header")}
  function basketCount(){try{var b=JSON.parse(localStorage.getItem(BASKET)||"null"),n=0,k;if(b&&b.items)for(k in b.items)n+=b.items[k].n||0;return n}catch(e){return 0}}
  function openChat(){var b=t.querySelector(".minimizedButtonV2");if(b){b.click();return}window.open("https://wa.me/"+WA,"_blank","noopener")}
  function account(){var b=hdr()&&hdr().querySelector(".login-social-bar__container");if(!b)return;if(/--login(\s|$)/.test(b.className)){b.click();return}t.documentElement.classList.toggle("gg-hdr");try{t.documentElement.classList.contains("gg-hdr")&&hdr().scrollIntoView()}catch(e){}}
  function menuLinks(){
    var nav=[],extra=[],seen={};
    function add(list,txt,href){if(!txt||!href)return;var a=t.createElement("a");a.href=href;var p=a.pathname.replace(/\/+$/,"")||"/";if(a.origin!==location.origin||seen[p])return;seen[p]=1;list.push({t:txt,h:p})}
    var H=hdr();H&&[].forEach.call(H.querySelectorAll("nav a, ul a"),function(a){var s=a.textContent.replace(/\s+/g," ").trim();s&&!/cart/i.test(a.getAttribute("aria-label")||"")&&add(nav,s,a.getAttribute("href"))});
    EXTRA.forEach(function(x){add(extra,x.t,x.h)});
    return{nav:nav,extra:extra}
  }
  function build(){
    if(SH)return;
    var badge=h("span",{class:"gg-badge","data-n":"0"}),cart;
    var sIn=h("input",{type:"search",placeholder:"Search groceries",autocomplete:"off","aria-label":"Search"});
    var search=h("form",{class:"gg-search",onsubmit:function(e){e.preventDefault();var q=sIn.value.trim();if(q)location.href=SHOP+"#q/"+encodeURIComponent(q)}},[sIn,h("button",{type:"submit",text:"Search"})]);
    window.addEventListener("click",function(e){var a=e.target&&e.target.closest?e.target.closest("a.gg-ib[href$=\"#basket\"]"):null;if(!a)return;e.preventDefault();e.stopPropagation();location.pathname.replace(/\/+$/,"")===SHOP?(location.hash==="#basket"?window.dispatchEvent(new HashChangeEvent("hashchange")):location.hash="basket"):location.href=SHOP+"#basket"},!0);
    var top=h("div",{class:"gg-top"},[
      h("a",{class:"gg-logo",href:"/","aria-label":"GrocerGoSx home"},[h("img",{src:LOGO,alt:"GrocerGoSx"})]),
      h("button",{type:"button",class:"gg-ib","aria-label":"Search",onclick:function(){var o=search.classList.toggle("open");o&&setTimeout(function(){try{sIn.focus()}catch(e){}},50)}},[svg("search")]),
      cart=h("a",{class:"gg-ib",href:SHOP+"#basket","aria-label":"Basket"},[svg("shop"),badge]),
      h("button",{type:"button",class:"gg-ib","aria-label":"Account",onclick:account},[svg("user")])
    ]);
    var list=h("div"),more,sheet=h("div",{class:"gg-sheet",role:"dialog","aria-label":"Site menu"},[h("div",{class:"gg-sheet-h"},[h("b",{text:"Menu"}),h("button",{type:"button",class:"gg-ib","aria-label":"Close",onclick:function(){closeMore()}},[svg("x")])]),list]);
    more=h("div",{class:"gg-more",onclick:function(e){e.target===more&&closeMore()}},[sheet]);
    var tabs=h("nav",{class:"gg-tabs","aria-label":"App navigation"},TABS.map(function(tab){
      var kids=[svg(tab.i),h("span",{text:tab.t})];
      if(tab.k==="chat")return h("button",{type:"button",class:"gg-tab",onclick:openChat},kids);
      if(tab.k==="more")return h("button",{type:"button",class:"gg-tab","aria-haspopup":"dialog",onclick:function(){more.classList.contains("open")?closeMore():openMore()}},kids);
      return h("a",{class:"gg-tab","data-k":tab.k,href:tab.h},kids)
    }));
    function openMore(){
      list.innerHTML="";var p=path(),L=menuLinks();
      function row(l){return h("a",{href:l.h,class:same(p,l.h)?"on":null,text:l.t})}
      L.nav.forEach(function(l){list.appendChild(row(l))});L.nav.length&&L.extra.length&&list.appendChild(h("hr"));L.extra.forEach(function(l){list.appendChild(row(l))});
      more.classList.add("open");tabs.querySelector('[aria-haspopup]').classList.add("on");t.addEventListener("keydown",esc)
    }
    function closeMore(){more.classList.remove("open");tabs.querySelector('[aria-haspopup]').classList.remove("on");t.removeEventListener("keydown",esc)}
    function esc(e){"Escape"===e.key&&closeMore()}
    t.body.appendChild(top);t.body.appendChild(search);t.body.appendChild(tabs);t.body.appendChild(more);
    SH={top:top,tabs:tabs,badge:badge,cart:cart,search:search,close:closeMore};
    window.addEventListener("ggsx-basket",paint);window.addEventListener("storage",function(e){e.key===BASKET&&paint()})
  }
  function paint(){
    if(!SH)return;
    [].forEach.call(SH.tabs.querySelectorAll("a.gg-tab"),function(a){var tab=TABS.filter(function(x){return x.k===a.getAttribute("data-k")})[0],on=tab&&isOn(tab);a.classList.toggle("on",!!on);on?a.getAttribute("aria-current")!=="page"&&a.setAttribute("aria-current","page"):a.hasAttribute("aria-current")&&a.removeAttribute("aria-current")});
    var n=String(basketCount());if(SH.badge.getAttribute("data-n")!==n){SH.badge.textContent=n;SH.badge.setAttribute("data-n",n)}
    [].forEach.call(t.querySelectorAll("wow-image:not(.gg-round)"),function(w){if(w.closest("header,footer"))return;var r=w.getBoundingClientRect();r.width>=140&&r.height>=100&&w.classList.add("gg-round")})
  }
  var lastPath=null,pend=false;
  t.documentElement.classList.add("gg-m");
  function attach(){
    if(pend)return;pend=true;
    (window.requestAnimationFrame||setTimeout)(function(){pend=false;tick()})
  }
  function tick(){
    if(!t.body)return;
    build();
    if(lastPath!==location.pathname){lastPath=location.pathname;SH&&SH.close();SH&&SH.search.classList.remove("open");t.documentElement.classList.remove("gg-hdr")}
    t.documentElement.classList.toggle("gg-chat",!!t.querySelector(".expandedChat"));
    paint()
  }
  new MutationObserver(attach).observe(t.documentElement,{childList:true,subtree:true});attach()
}();
} catch (e) { try { console.warn('[GGSX bundle] App Shell', e); } catch (e2) {} }
__ggsxE("089c0fed-855a-4e35-8f6e-fcbb9b91bfa7#0");

/* ===== GrocerGoSx Shop 1 Config & Style (55cc720e-8590-4746-bc86-2c8e5e82b162, rev 6) ===== */
__ggsxB("55cc720e-8590-4746-bc86-2c8e5e82b162#0");
try {
window.GGSX_SHOP={
  path:"/shop-now",            /* the Shop Now page's URL */
  runPath:"/run",              /* Build a run page (Run Builder handoff; Checkout itself opens the Shop 3 order form) */
  sheetId:"1-h6W54Wbscz_5zMAVU0myRr0PCYoVW_sJZo4XWe2MXE",
  tabs:{products:"Products",depts:"Departments"},
  whatsapp:"590690779119",
  pageSize:48,                 /* products shown before "Show more" */
  copy:{
    title:"Shop groceries",
    lead:"",
    search:"Search products",
    popular:"Popular",
    depts:"Shop by department",
    basket:"Your basket",
    empty:"Your basket is empty. Add a few things and check out when you're ready.",
    note:"Prices include taxes. Your items follow the receipts; no fee is added after your quote.",
    checkout:"Checkout",
    wa:"Order on WhatsApp",
    waIntro:"Hi GrocerGoSx, I'd like to order these groceries:",
    more:"Show more",
    noResults:"Nothing matched that. Try another word, or browse a department."
  }
};
} catch (e) { try { console.warn('[GGSX bundle] Shop 1 Config & Style', e); } catch (e2) {} }
__ggsxE("55cc720e-8590-4746-bc86-2c8e5e82b162#0");
__ggsxCss("", "\n#ggsx-shop{--o:#F4551B;--bg:#f6f3ee;--ink:#1b1b1b;--mute:#6b6b6b;--line:#e9e4dd;--card:#fff;box-sizing:border-box;width:100%;max-width:1240px;margin:0 auto;padding:28px 24px 64px;color:var(--ink);font-family:\"Avenir Light\",avenir-lt-w01_35-light1475496,Avenir,\"Helvetica Neue\",Arial,sans-serif;font-size:15px;line-height:1.45;text-align:left}\n#ggsx-shop *,#ggsx-shop *::before,#ggsx-shop *::after{box-sizing:border-box}\n#ggsx-shop h1,#ggsx-shop h2,#ggsx-shop h3{font-family:Benzin,sans-serif;font-weight:700;margin:0;color:var(--ink)}\n#ggsx-shop button{font:inherit;color:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent}\n#ggsx-shop img{display:block;max-width:100%}\n#ggsx-shop .gs-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:22px}\n#ggsx-shop .gs-h1{font-size:34px;line-height:1.1;margin-bottom:6px}\n#ggsx-shop .gs-lead{margin:0;color:var(--mute);max-width:560px}\n#ggsx-shop .gs-search{display:flex;gap:8px;flex:none;width:400px;max-width:100%;margin:0}\n#ggsx-shop .gs-search input{flex:1;min-width:0;height:46px;border:1.5px solid #cfc9c1;border-radius:12px;padding:0 14px;font:inherit;font-size:16px;background:#fff;color:var(--ink)}\n#ggsx-shop .gs-search input:focus{outline:2px solid var(--o);outline-offset:1px;border-color:var(--o)}\n#ggsx-shop .gs-search button{height:46px;padding:0 18px;border-radius:999px;border:0;background:var(--o);color:#fff;font-weight:700}\n#ggsx-shop .gs-body{display:grid;grid-template-columns:220px minmax(0,1fr) 320px;gap:24px;align-items:start}\n#ggsx-shop .gs-nav{position:sticky;top:96px;display:flex;flex-direction:column;gap:2px}\n#ggsx-shop .gs-nav button{display:flex;justify-content:space-between;align-items:center;gap:8px;width:100%;text-align:left;border:0;background:none;padding:10px 12px;border-radius:12px;line-height:1.25}\n#ggsx-shop .gs-nav button small{color:var(--mute);font-size:12px}\n#ggsx-shop .gs-nav button:hover{background:#fff}\n#ggsx-shop .gs-nav button.on{background:var(--o);color:#fff;font-weight:700}\n#ggsx-shop .gs-nav button.on small{color:#fff}\n#ggsx-shop .gs-main{min-width:0}\n#ggsx-shop .gs-h2{font-size:22px;margin:0 0 12px}\n#ggsx-shop .gs-crumb{display:flex;align-items:center;gap:6px;flex-wrap:wrap;color:var(--mute);font-size:14px;margin-bottom:8px}\n#ggsx-shop .gs-crumb button{border:0;background:none;padding:0;color:var(--o);font-weight:700}\n#ggsx-shop .gs-subs{display:flex;gap:8px;flex-wrap:wrap;margin:0 0 16px}\n#ggsx-shop .gs-chip{border:1.5px solid #cfc9c1;background:#fff;border-radius:999px;padding:8px 14px;font-size:14px;line-height:1.2;white-space:nowrap}\n#ggsx-shop .gs-chip.on{background:var(--o);border-color:var(--o);color:#fff;font-weight:700}\n#ggsx-shop .gs-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(176px,1fr));gap:14px}\n#ggsx-shop .gs-card{display:flex;flex-direction:column;background:var(--card);border-radius:16px;padding:12px;box-shadow:0 1px 3px rgba(27,27,27,.06)}\n#ggsx-shop .gs-img{position:relative;aspect-ratio:1;background:#fff;border-radius:10px;overflow:hidden;margin-bottom:10px;display:flex;align-items:center;justify-content:center}\n#ggsx-shop .gs-img img{width:100%;height:100%;object-fit:contain}\n#ggsx-shop .gs-noimg{font-family:Benzin,sans-serif;font-size:34px;color:#d9d2c8}\n#ggsx-shop .gs-name{font-size:14px;line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:2.6em}\n#ggsx-shop .gs-meta{font-size:12px;color:var(--mute);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n#ggsx-shop .gs-row{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:auto;padding-top:10px}\n#ggsx-shop .gs-price{font-size:16px;font-weight:700}\n#ggsx-shop .gs-add{height:38px;padding:0 16px;border-radius:999px;border:1.5px solid var(--o);background:#fff;color:var(--o);font-weight:700}\n#ggsx-shop .gs-add:hover{background:var(--o);color:#fff}\n#ggsx-shop .gs-step{display:inline-flex;align-items:center;border:1.5px solid var(--o);border-radius:999px;background:#fff;height:38px}\n#ggsx-shop .gs-step button{width:36px;height:100%;border:0;background:none;color:var(--o);font-size:20px;line-height:1;padding:0}\n#ggsx-shop .gs-step .gs-n{min-width:24px;text-align:center;font-weight:700}\n#ggsx-shop .gs-out .gs-img,#ggsx-shop .gs-out .gs-name{opacity:.45}\n#ggsx-shop .gs-oos{font-size:12px;color:var(--mute);border:1px solid var(--line);border-radius:999px;padding:4px 10px}\n#ggsx-shop .gs-depts{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:14px;margin-bottom:28px}\n#ggsx-shop .gs-dept{position:relative;display:block;width:100%;aspect-ratio:3/2;border:0;border-radius:18px;overflow:hidden;background:#e9e4dd;text-align:left;padding:0;color:#fff}\n#ggsx-shop .gs-dept img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .3s}\n#ggsx-shop .gs-dept:hover img{transform:scale(1.04)}\n#ggsx-shop .gs-dept span{position:absolute;left:0;right:0;bottom:0;padding:40px 14px 12px;background:linear-gradient(transparent,rgba(0,0,0,.68));font-family:Benzin,sans-serif;font-weight:700;font-size:16px;line-height:1.2}\n#ggsx-shop .gs-dept span small{display:none;font-family:inherit;font-weight:400;font-size:12px;opacity:.9;margin-top:2px}\n#ggsx-shop .gs-strip{display:grid;grid-auto-flow:column;grid-auto-columns:176px;gap:14px;overflow-x:auto;padding:2px 2px 10px;margin:0 -2px 24px;scroll-snap-type:x proximity}\n#ggsx-shop .gs-strip .gs-card{scroll-snap-align:start}\n#ggsx-shop .gs-more{display:block;margin:20px auto 0;height:46px;padding:0 26px;border-radius:999px;border:1.5px solid #cfc9c1;background:#fff;font-weight:700}\n#ggsx-shop .gs-muted{color:var(--mute);margin:0 0 12px}\n#ggsx-shop .gs-cart-wrap{position:sticky;top:96px}\n#ggsx-shop .gs-cart{background:var(--card);border-radius:20px;padding:18px;box-shadow:0 1px 3px rgba(27,27,27,.06);display:flex;flex-direction:column;max-height:calc(100vh - 120px)}\n#ggsx-shop .gs-cart-h{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:10px}\n#ggsx-shop .gs-cart-h h2{font-size:18px}\n#ggsx-shop .gs-link{border:0;background:none;padding:0;color:var(--o);font-weight:700;font-size:14px;text-decoration:none}\n#ggsx-shop .gs-x{display:none}\n#ggsx-shop .gs-lines{overflow:auto;flex:1;min-height:0;margin:0 -6px;padding:0 6px}\n#ggsx-shop .gs-line{display:grid;grid-template-columns:48px minmax(0,1fr) auto;gap:10px;align-items:center;padding:10px 0;border-top:1px solid var(--line)}\n#ggsx-shop .gs-line:first-child{border-top:0}\n#ggsx-shop .gs-line img{width:48px;height:48px;object-fit:contain;border-radius:8px;background:#fff}\n#ggsx-shop .gs-line .gs-ln{font-size:14px;line-height:1.3;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n#ggsx-shop .gs-line .gs-lm{font-size:12px;color:var(--mute)}\n#ggsx-shop .gs-line .gs-lr{display:flex;flex-direction:column;align-items:flex-end;gap:4px}\n#ggsx-shop .gs-line .gs-step{height:32px}\n#ggsx-shop .gs-line .gs-step button{width:30px;font-size:18px}\n#ggsx-shop .gs-sum{display:flex;justify-content:space-between;align-items:baseline;border-top:2px solid var(--ink);margin-top:10px;padding-top:12px;font-weight:700;font-size:17px}\n#ggsx-shop .gs-sum b{font-family:Benzin,sans-serif;font-size:22px;color:var(--o)}\n#ggsx-shop .gs-note{font-size:12px;color:var(--mute);margin:8px 0 12px}\n#ggsx-shop .gs-btn{display:flex;align-items:center;justify-content:center;width:100%;min-height:48px;padding:12px 18px;border-radius:999px;border:0;background:var(--o);color:#fff;font-weight:700;font-size:16px;text-decoration:none;margin-top:8px}\n#ggsx-shop .gs-btn.gs-sec{background:#fff;color:var(--ink);border:1.5px solid #cfc9c1}\n#ggsx-shop .gs-btn[disabled]{opacity:.5;cursor:default}\n#ggsx-shop .gs-empty{color:var(--mute);font-size:14px;margin:0}\n#ggsx-shop .gs-off{opacity:.5;pointer-events:none}\n#ggsx-shop .gs-bar,#ggsx-shop .gs-toast,#ggsx-shop .gs-keep{display:none}\n#ggsx-shop .gs-loading{padding:40px 0;color:var(--mute);text-align:center}\n#ggsx-shop .gs-err{background:#fff3ee;border:1px solid #f7c6b3;border-radius:12px;padding:14px;color:#9b2c0c}\n@media (max-width:860px){\n#ggsx-shop{padding:0 0 calc(150px + env(safe-area-inset-bottom,0));background:var(--bg);min-height:100vh}\n#ggsx-shop .gs-head{display:block;position:sticky;top:calc(56px + env(safe-area-inset-top,0));z-index:50;background:var(--bg);padding:12px 16px 10px;margin:0}\nhtml.gg-m.gg-chat #ggsx-shop .gs-head{top:0}\n#ggsx-shop .gs-h1{font-size:22px;margin-bottom:2px}\n#ggsx-shop .gs-lead{font-size:13px;margin-bottom:10px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n#ggsx-shop .gs-search{width:100%}\n#ggsx-shop .gs-search input{height:44px;border-radius:14px}\n#ggsx-shop .gs-search button{height:44px;padding:0 14px}\n#ggsx-shop .gs-body{display:block}\n#ggsx-shop .gs-nav{position:static;flex-direction:row;gap:8px;overflow-x:auto;padding:4px 16px 10px;margin:0;-webkit-overflow-scrolling:touch;scrollbar-width:none}\n#ggsx-shop .gs-nav::-webkit-scrollbar{display:none}\n#ggsx-shop .gs-nav button{flex:none;width:auto;border:1.5px solid #cfc9c1;background:#fff;border-radius:999px;padding:8px 14px;font-size:14px;white-space:nowrap}\n#ggsx-shop .gs-nav button.on{border-color:var(--o)}\n#ggsx-shop .gs-nav button small{display:none}\n#ggsx-shop .gs-main{padding:4px 16px 0}\n#ggsx-shop .gs-h2{font-size:19px}\n#ggsx-shop .gs-subs{flex-wrap:nowrap;overflow-x:auto;margin:0 -16px 14px;padding:2px 16px 6px;scrollbar-width:none}\n#ggsx-shop .gs-subs::-webkit-scrollbar{display:none}\n#ggsx-shop .gs-grid{grid-template-columns:1fr 1fr;gap:10px}\n#ggsx-shop .gs-card{padding:10px;border-radius:14px}\n#ggsx-shop .gs-name{font-size:13px}\n#ggsx-shop .gs-row{flex-wrap:wrap}\n#ggsx-shop .gs-add,#ggsx-shop .gs-step{height:36px}\n#ggsx-shop .gs-depts{grid-template-columns:1fr 1fr;gap:10px;margin-bottom:20px}\n#ggsx-shop .gs-dept{aspect-ratio:4/3;border-radius:14px}\n#ggsx-shop .gs-dept span{font-size:14px;padding:30px 10px 10px}\n#ggsx-shop .gs-strip{grid-auto-columns:150px;gap:10px;margin:0 -16px 18px;padding:2px 16px 8px;scrollbar-width:none}\n#ggsx-shop .gs-strip::-webkit-scrollbar{display:none}\n#ggsx-shop .gs-cart-wrap{display:none;position:fixed;inset:0;z-index:9050;background:rgba(27,27,27,.55)}\n#ggsx-shop.gs-open .gs-cart-wrap{display:block}\n#ggsx-shop .gs-cart{position:absolute;left:0;right:0;bottom:0;max-height:88vh;border-radius:20px 20px 0 0;padding:14px 16px calc(16px + env(safe-area-inset-bottom,0));box-shadow:0 -8px 40px rgba(0,0,0,.25)}\n#ggsx-shop .gs-x{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:999px;border:1.5px solid #cfc9c1;background:#fff;font-size:22px;line-height:1;padding:0}\n#ggsx-shop .gs-keep{display:flex}\n#ggsx-shop .gs-bar{display:flex;align-items:center;gap:12px;position:fixed;left:0;right:0;bottom:calc(64px + env(safe-area-inset-bottom,0));z-index:9000;background:#fff;border-top:1px solid var(--line);padding:10px 16px;transform:translateY(130%);transition:transform .25s}\nhtml.gg-m.gg-chat #ggsx-shop .gs-bar{display:none}\n#ggsx-shop.gs-has .gs-bar{transform:none}\n#ggsx-shop .gs-bar .gs-bt{flex:1;min-width:0;border:0;background:none;padding:0;text-align:left}\n#ggsx-shop .gs-bar .gs-bt small{display:block;font-size:12px;color:var(--mute)}\n#ggsx-shop .gs-bar .gs-bt b{display:block;font-family:Benzin,sans-serif;font-size:20px;color:var(--o);line-height:1.2}\n#ggsx-shop .gs-bar .gs-btn{width:auto;margin:0;min-width:140px}\n#ggsx-shop .gs-toast{display:block;position:fixed;left:16px;right:16px;bottom:calc(150px + env(safe-area-inset-bottom,0));z-index:9001;background:#1b1b1b;color:#fff;padding:11px 14px;border-radius:12px;font-size:14px;opacity:0;transform:translateY(6px);transition:opacity .2s,transform .2s;pointer-events:none}\n#ggsx-shop .gs-toast.show{opacity:1;transform:none}\n}\nmain[id^=\"PAGE_SECTIONS\"] > section:has(> #ggsx-shop){min-height:0!important}\nmain[id^=\"PAGE_SECTIONS\"] > section:has(> #ggsx-shop) > div:not(#ggsx-shop){min-height:0!important;height:0!important;overflow:hidden}\n#ggsx-shop .gs-lead:empty{display:none}\n");

/* ===== GrocerGoSx Shop 2 Engine (7978f5ff-27ec-4553-81c6-9b4e3b65a96c, rev 10) ===== */
__ggsxB("7978f5ff-27ec-4553-81c6-9b4e3b65a96c#0");
try {
!function(){var t=window.GGSX_SHOP||{},e=document,n=window,s=(t.path||"/shop-now").replace(/\/+$/,""),o=t.runPath||"/run",a="ggsx_basket",i="ggsx_shop_cache",r=t.copy||{},c=t.pageSize||48,l=n.matchMedia?n.matchMedia("(max-width:860px)"):null;function u(t,n,s){var o,a=e.createElement(t);if(n)for(o in n)null!=n[o]&&("class"===o?a.className=n[o]:"text"===o?a.textContent=n[o]:"on"===o.slice(0,2)?a.addEventListener(o.slice(2),n[o]):a.setAttribute(o,n[o]));return(s||[]).forEach(function(t){t&&a.appendChild("string"==typeof t?e.createTextNode(t):t)}),a}function d(t){return"$"+(Math.round(100*t)/100).toFixed(2)}function p(t){var e=parseFloat(String(null==t?"":t).replace(/[^0-9.\-]/g,""));return isNaN(e)?0:e}function g(t){return/^(true|yes|y|1|x|✓|✔)$/i.test(String(null==t?"":t).trim())}function h(t){return String(t||"").toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function f(t){var e,n,s=[],o=[],a="",i=!1;for(e=0;e<t.length;e++)n=t[e],i?'"'===n?'"'===t[e+1]?(a+='"',e++):i=!1:a+=n:'"'===n?i=!0:","===n?(o.push(a),a=""):"\n"===n||"\r"===n?("\r"===n&&"\n"===t[e+1]&&e++,o.push(a),s.push(o),o=[],a=""):a+=n;(""!==a||o.length)&&(o.push(a),s.push(o));var r=(s.shift()||[]).map(function(t){return t.trim().toLowerCase()});return s.map(function(t){var e={};return r.forEach(function(n,s){e[n]=(t[s]||"").trim()}),e})}function m(e){var n="https://docs.google.com/spreadsheets/d/"+t.sheetId+"/gviz/tq?tqx=out:csv&sheet="+encodeURIComponent(e)+"&t="+Math.floor(Date.now()/6e4);return fetch(n,{cache:"no-store"}).then(function(t){if(!t.ok)throw new Error(e+" "+t.status);return t.text()}).then(f)}function v(t,e){if(!t)return"";var n=/static\.wixstatic\.com\/media\/([^\/?#]+)/.exec(t);if(n)return"https://static.wixstatic.com/media/"+n[1]+"/v1/fit/w_"+e+",h_"+e+",q_80,enc_auto/"+n[1];var s=/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:.*&)?id=)([\w-]+)/.exec(t);return s?"https://lh3.googleusercontent.com/d/"+s[1]+"=w"+e:t}function b(){C.basket.t=Date.now();try{localStorage.setItem(a,JSON.stringify(C.basket))}catch(t){}try{n.dispatchEvent(new CustomEvent("ggsx-basket"))}catch(t){}}function k(t){var e=C.basket.items[t];return e?e.n:0}function x(){return Object.keys(C.basket.items).map(function(t){return C.basket.items[t]}).sort(function(t,e){return t.o-e.o})}function y(){var t=0,e=0;return x().forEach(function(n){t+=n.n,e+=n.n*n.price}),{n:t,s:e}}function w(t,e){e=Math.max(0,Math.min(99,0|e));var n,s,o=C.basket.items[t.id];e?o?o.n=e:C.basket.items[t.id]={id:t.id,n:e,name:t.name,size:t.size,price:t.price,img:t.img,o:++C.ord}:delete C.basket.items[t.id],b(),function(t){var e=C.byId[t];e&&[].forEach.call(C.root.querySelectorAll('.gs-card[data-id="'+t+'"] .gs-row'),function(t){var n=t.lastChild;t.replaceChild(e.stock?E(e):u("span",{class:"gs-oos",text:"Out of stock"}),n)})}(t.id),N(),e&&!o&&_()&&(n=t.name+" added · "+d(y().s),(s=C.els.toast)&&(s.textContent=n,s.classList.add("show"),clearTimeout(C.tt),C.tt=setTimeout(function(){s.classList.remove("show")},2200)))}var C={products:[],byId:{},depts:[],view:{k:"home"},basket:function(){try{var t=JSON.parse(localStorage.getItem(a)||"null");if(t&&t.items)return t}catch(t){}return{v:1,items:{}}}(),ord:0,shown:0,root:null,els:{}};function S(t,e){var n=[],s={},o={},a={},i=[];t.forEach(function(t){var e=t.product||t.name||"";if(e&&(""===t.active||g(t.active))){var r=t.category||"Other",c=t.subcategory||"",l=t.id||h(r+"-"+e+"-"+t.size);if(!s[l]){s[l]=1;var u={id:l,cat:r,sub:c,name:e,size:t.size||"",price:p(t.price),img:t.image||"",brand:t.brand||"",feat:g(t.featured),stock:""===t.in_stock||g(t.in_stock)};u.q=(e+" "+u.size+" "+u.brand+" "+(t.tags||"")+" "+c+" "+r).toLowerCase(),n.push(u),o[r]||(o[r]=0,a[r]=[],i.push(r)),o[r]++,c&&a[r].indexOf(c)<0&&a[r].push(c)}}});var r=[],c={},l={};(e||[]).filter(function(t){return t.category}).sort(function(t,e){return p(t.sort)-p(e.sort)}).forEach(function(t){""===t.active||g(t.active)?o[t.category]&&(c[t.category]=1,r.push({name:t.category,img:t.image||"",blurb:t.blurb||""})):l[t.category]=1}),i.forEach(function(t){c[t]||l[t]||r.push({name:t,img:"",blurb:""})}),r.forEach(function(t){if(t.n=o[t.name],t.subs=a[t.name],t.slug=h(t.name),!t.img){var e=n.filter(function(e){return e.cat===t.name&&e.img})[0];t.img=e?e.img:"",t.fallback=!0}}),n=n.filter(function(t){return!l[t.cat]}),C.products=n,C.depts=r,C.byId={},n.forEach(function(t){C.byId[t.id]=t})}function E(t){var e=k(t.id);return e?u("div",{class:"gs-step"},[u("button",{type:"button","aria-label":"Remove one "+t.name,text:"−",onclick:function(){w(t,k(t.id)-1)}}),u("span",{class:"gs-n",text:String(e)}),u("button",{type:"button","aria-label":"Add one "+t.name,text:"+",onclick:function(){w(t,k(t.id)+1)}})]):u("button",{type:"button",class:"gs-add","aria-label":"Add "+t.name,text:"Add",onclick:function(){w(t,1)}})}function q(t){return u("div",{class:"gs-card"+(t.stock?"":" gs-out"),"data-id":t.id},[u("div",{class:"gs-img"},[t.img?u("img",{src:v(t.img,320),alt:"",loading:"lazy"}):u("span",{class:"gs-noimg",text:t.name[0]})]),u("div",{class:"gs-name",text:t.name}),u("div",{class:"gs-meta",text:[t.size,t.brand].filter(Boolean).join(" · ")}),u("div",{class:"gs-row"},[u("b",{class:"gs-price",text:d(t.price)}),t.stock?E(t):u("span",{class:"gs-oos",text:"Out of stock"})])])}function I(t,e){var n,s=C.els.grid,o=Math.min(t.length,e+c);for(n=e;n<o;n++)s.appendChild(q(t[n]));C.shown=o;var a=C.els.more;a&&a.parentNode.removeChild(a),o<t.length?(C.els.more=a=u("button",{type:"button",class:"gs-more",text:(r.more||"Show more")+" ("+(t.length-o)+")",onclick:function(){I(t,C.shown)}}),s.parentNode.appendChild(a)):C.els.more=null}function L(){var t,e,n,s,o,a=C.els.main,i=C.view;if(a.innerHTML="",C.els.more=null,C.rendered=!0,(o=C.els.nav).innerHTML="",o.appendChild(u("button",{type:"button",class:"gs-navb"+("home"===C.view.k?" on":""),text:"All departments",onclick:function(){A("")}})),C.depts.forEach(function(t){o.appendChild(function(t){return u("button",{type:"button",class:"gs-navb"+("dept"===C.view.k&&C.view.d===t.name?" on":""),onclick:function(){A("d/"+t.slug)}},[t.name,u("small",{text:String(t.n)})])}(t))}),"home"===i.k){var c=C.products.filter(function(t){return t.feat&&t.stock});return c.length&&(a.appendChild(u("h2",{class:"gs-h2",text:r.popular||"Popular"})),a.appendChild(u("div",{class:"gs-strip"},c.slice(0,16).map(q)))),a.appendChild(u("h2",{class:"gs-h2",text:r.depts||"Shop by department"})),void a.appendChild(u("div",{class:"gs-depts"},C.depts.map(function(t){return u("button",{type:"button",class:"gs-dept",onclick:function(){A("d/"+t.slug)}},[t.img?u("img",{src:v(t.img,480),alt:"",loading:"lazy"}):null,u("span",{},[t.name,u("small",{text:t.n+" products"+(t.blurb?" · "+t.blurb:"")})])])})))}if("q"===i.k){if(n=i.q,e=(t=(s=n.toLowerCase().split(/\s+/).filter(Boolean)).length?C.products.filter(function(t){return s.every(function(e){return t.q.indexOf(e)>=0})}).sort(function(t,e){return(0===e.name.toLowerCase().indexOf(s[0]))-(0===t.name.toLowerCase().indexOf(s[0]))||e.stock-t.stock}):[]).length?t.length+" result"+(1===t.length?"":"s")+" for “"+i.q+"”":"",a.appendChild(u("div",{class:"gs-crumb"},[u("button",{type:"button",text:"‹ All departments",onclick:function(){A("")}})])),a.appendChild(u("h2",{class:"gs-h2",text:e||"No results"})),!t.length)return void a.appendChild(u("p",{class:"gs-muted",text:r.noResults||"Nothing matched that."}))}else{var l=C.depts.filter(function(t){return t.name===i.d})[0];if(!l)return void A("");t=C.products.filter(function(t){return t.cat===l.name&&(!i.s||t.sub===i.s)}),i.s||t.sort(function(t,e){return!t.sub-!e.sub}),a.appendChild(u("div",{class:"gs-crumb"},[u("button",{type:"button",text:"All departments",onclick:function(){A("")}})," › ",i.s?u("button",{type:"button",text:l.name,onclick:function(){A("d/"+l.slug)}}):l.name,i.s?" › "+i.s:null])),a.appendChild(u("h2",{class:"gs-h2",text:(i.s||l.name)+" · "+t.length})),l.subs.length&&a.appendChild(u("div",{class:"gs-subs"},[u("button",{type:"button",class:"gs-chip"+(i.s?"":" on"),text:"All",onclick:function(){A("d/"+l.slug)}})].concat(l.subs.map(function(t){return u("button",{type:"button",class:"gs-chip"+(i.s===t?" on":""),text:t,onclick:function(){A("d/"+l.slug+"/"+h(t))}})}))))}a.appendChild(C.els.grid=u("div",{class:"gs-grid"})),I(t,0)}function N(){var e,n=y(),s=x(),o=C.els.lines,a=C.root;o.innerHTML="",a.classList.toggle("gs-has",n.n>0),s.length||o.appendChild(u("p",{class:"gs-empty",text:r.empty||"Your basket is empty."})),s.forEach(function(t){var e=C.byId[t.id]||{id:t.id,name:t.name,size:t.size,price:t.price,img:t.img,stock:!0};o.appendChild(u("div",{class:"gs-line"},[t.img?u("img",{src:v(t.img,96),alt:"",loading:"lazy"}):u("span"),u("div",{},[u("div",{class:"gs-ln",text:t.name}),u("div",{class:"gs-lm",text:[t.size,d(t.price)+" each"].filter(Boolean).join(" · ")})]),u("div",{class:"gs-lr"},[E(e),u("b",{text:d(t.n*t.price)})])]))}),C.els.count.textContent=n.n?" ("+n.n+")":"",C.els.sum.textContent=d(n.s),C.els.barN.textContent=n.n+(1===n.n?" item":" items"),C.els.barS.textContent=d(n.s),C.els.co.disabled=!n.n,C.els.wa.classList.toggle("gs-off",!n.n),C.els.wa.href=n.n?(e=(r.waIntro||"Hi GrocerGoSx, I'd like to order:")+"\n"+z()+"\n\nDeliver to: \nDutch or French side: \nWhen: ","https://wa.me/"+(t.whatsapp||"")+"?text="+encodeURIComponent(e)):"#",C.els.clear.style.display=n.n?"":"none"}function z(){var t=x(),e=y();return t.map(function(t){return t.n+" × "+t.name+(t.size?" "+t.size:"")+" — "+d(t.n*t.price)}).join("\n")+"\nShop Now basket total: "+d(e.s)+" ("+e.n+" items, GrocerGoSx prices)"}function O(){var t=y();if(t.n){var e=x().map(function(t){return{id:t.id,n:t.n,name:t.name,size:t.size,price:t.price}});try{localStorage.setItem("ggsx_handoff",JSON.stringify({t:Date.now(),count:t.n,total:Math.round(100*t.s)/100,lines:e,text:z()}))}catch(t){}location.assign(o)}}function _(){return!(!l||!l.matches)}function M(t){if(C.root.classList.toggle("gs-open",t),!_()&&t)try{C.els.cart.scrollIntoView({behavior:"smooth",block:"start"})}catch(t){}}function A(t){location.hash.replace(/^#/,"")===t?G():location.hash=t}function G(){if(C.root){var t=location.hash.replace(/^#/,"").split("/"),e=t[0];if("basket"===e)return C.rendered||(C.view={k:"home"},L()),void M(!0);if("q"===e&&t[1])C.view={k:"q",q:decodeURIComponent(t.slice(1).join("/"))};else if("d"===e&&t[1]){var s=C.depts.filter(function(e){return e.slug===t[1]})[0],o=s&&t[2]?s.subs.filter(function(e){return h(e)===t[2]})[0]:"";C.view=s?{k:"dept",d:s.name,s:o||""}:{k:"home"}}else C.view={k:"home"};C.els.q&&"q"!==C.view.k&&(C.els.q.value=""),L();var a=C.root.getBoundingClientRect().top+n.pageYOffset-(_()?60:100);C.navved&&n.scrollTo(0,Math.max(0,a)),C.navved=!0}}function T(){return e.querySelector('main[id^="PAGE_SECTIONS"] > section')||e.querySelector("main > section")||e.querySelector("#SITE_PAGES > div")||e.querySelector("main")}function D(){return location.pathname.replace(/\/+$/,"")===s}Object.keys(C.basket.items).forEach(function(t){C.ord=Math.max(C.ord,C.basket.items[t].o||0)});var P=0,R=!1;function B(t,e){t.appendChild(e),[].forEach.call(t.children,function(t){t!==e&&(t.style.minHeight="0",t.style.height="0",t.style.overflow="hidden")})}function H(){if(!D())return C.root=null,R=!1,void(P=0);if(!e.getElementById("ggsx-shop")){var s=T();if(s&&e.body.contains(s)){if(C.root)B(s,C.root);else if(!R){R=!0;var o=u("section",{id:"ggsx-shop"},[u("div",{class:"gs-loading",text:"Loading…"})]);s.appendChild(o),function(){try{var e=JSON.parse(sessionStorage.getItem(i)||"null");if(e&&e.t&&Date.now()-e.t<6e5&&e.p)return S(e.p,e.d),Promise.resolve()}catch(t){}return Promise.all([m(t.tabs.products),m(t.tabs.depts).catch(function(){return[]})]).then(function(t){var e=t[0].filter(function(t){return t.product});S(e,t[1]);try{sessionStorage.setItem(i,JSON.stringify({t:Date.now(),p:e,d:t[1]}))}catch(t){}})}().then(function(){o.parentNode&&o.parentNode.removeChild(o),!e.getElementById("ggsx-shop")&&D()&&function(t){var s,o=u("input",{type:"search",placeholder:(r.search||"Search")+" · "+C.products.length+" products",autocomplete:"off"}),a=u("form",{class:"gs-search",onsubmit:function(t){t.preventDefault();var e=o.value.trim();A(e?"q/"+encodeURIComponent(e):"")}},[o,u("button",{type:"submit",text:"Search"})]);o.addEventListener("input",function(){clearTimeout(s);var t=o.value.trim();s=setTimeout(function(){t.length>=2?(C.view={k:"q",q:t},L()):t||"q"!==C.view.k||A("")},250)});var i,c=u("div",{class:"gs-head"},[u("div",{},[u("h1",{class:"gs-h1",text:r.title||"Shop"}),u("p",{class:"gs-lead",text:r.lead||""})]),a]),l=u("nav",{class:"gs-nav","aria-label":"Departments"}),p=u("div",{class:"gs-main"}),g=u("span"),h=u("div",{class:"gs-lines"}),f=u("b"),m=u("button",{type:"button",class:"gs-link",text:"Clear",onclick:function(){C.basket.items={},b(),N(),L()}}),v=u("button",{type:"button",class:"gs-btn",text:r.checkout||"Checkout",onclick:O}),k=u("a",{class:"gs-btn gs-sec",href:"#",target:"_blank",rel:"noopener",text:r.wa||"Order on WhatsApp",onclick:function(t){y().n||t.preventDefault()}}),x=u("div",{class:"gs-cart",role:"dialog","aria-label":r.basket||"Basket"},[u("div",{class:"gs-cart-h"},[u("h2",{},[r.basket||"Your basket",g]),m,u("button",{type:"button",class:"gs-x","aria-label":"Close",text:"×",onclick:function(){M(!1)}})]),h,u("div",{class:"gs-sum"},["Basket total",f]),u("p",{class:"gs-note",text:(i=n.GGSX_RUN&&n.GGSX_RUN.fees||null,(r.note||""))}),v,u("button",{type:"button",class:"gs-btn gs-sec gs-keep",text:"Keep shopping",onclick:function(){M(!1)}})]),w=u("div",{class:"gs-cart-wrap",onclick:function(t){t.target===w&&M(!1)}},[x]),S=u("small"),E=u("b"),q=u("div",{class:"gs-bar"},[u("button",{type:"button",class:"gs-bt",onclick:function(){M(!0)}},[S,E]),u("button",{type:"button",class:"gs-btn",text:"View basket",onclick:function(){M(!0)}})]),I=u("div",{class:"gs-toast",role:"status"}),z=u("section",{id:"ggsx-shop"},[c,u("div",{class:"gs-body"},[l,p,w]),q,I]);C.root=z,C.rendered=!1,C.navved=!1,C.els={q:o,nav:l,main:p,lines:h,count:g,sum:f,clear:m,co:v,wa:k,cart:x,barN:S,barS:E,toast:I},B(t,z),N(),G(),C.wired||(C.wired=!0,n.addEventListener("hashchange",G),e.addEventListener("keydown",function(t){"Escape"===t.key&&C.root&&M(!1)}))}(T())}).catch(function(){o.innerHTML="",o.appendChild(u("div",{class:"gs-err",text:"Couldn't load the shop. Please refresh."}))})}}else++P<80&&setTimeout(H,250)}}n.GGSX_SHOP_API={add:w,paint:N};var j=!1;new MutationObserver(function(){j||(j=!0,(n.requestAnimationFrame||setTimeout)(function(){j=!1,H()}))}).observe(e.documentElement,{childList:!0,subtree:!0}),H()}();
} catch (e) { try { console.warn('[GGSX bundle] Shop 2 Engine', e); } catch (e2) {} }
__ggsxE("7978f5ff-27ec-4553-81c6-9b4e3b65a96c#0");

/* ===== GrocerGoSx Header Basket & Store Links (722bb772-4f8e-4b09-bc4d-224140f2f2e4, rev 4) ===== */
__ggsxCss("", "\nheader [id$=\"comp-mtntkd6d\"]{display:none!important}\n.ggsx-hb{display:none}\n@media (min-width:1024px){.ggsx-hb{display:block;position:absolute;left:76.2%;top:50%;width:2.76%;transform:translateY(-50%);z-index:5;pointer-events:auto;cursor:pointer;text-decoration:none}}\n.ggsx-hb svg{display:block;width:100%;height:auto;overflow:visible;fill:none;stroke:#fff;stroke-width:2;stroke-linejoin:round;stroke-linecap:round}\n.ggsx-hb text{fill:#fff;stroke:none;font:400 15px/1 neue-haas-grotesk,\"Helvetica Neue\",Arial,sans-serif}\n.ggsx-hb:hover{opacity:.8}\n.ggsx-hs{display:none;position:fixed;z-index:9200;width:328px;box-sizing:border-box;margin:0;padding:8px;gap:6px;background:#fff;border-radius:14px;box-shadow:0 8px 30px rgba(0,0,0,.18)}\n.ggsx-hs.open{display:flex}\n.ggsx-hs input{flex:1;min-width:0;height:42px;border:1.5px solid #cfc9c1;border-radius:10px;padding:0 12px;font:16px \"Helvetica Neue\",Arial,sans-serif;color:#1b1b1b;background:#fff;outline:none;-webkit-appearance:none}\n.ggsx-hs input:focus{border-color:#F4551B}\n.ggsx-hs button{height:42px;padding:0 16px;border:0;border-radius:999px;background:#F4551B;color:#fff;font:700 15px \"Helvetica Neue\",Arial,sans-serif;cursor:pointer}\n");
__ggsxB("722bb772-4f8e-4b09-bc4d-224140f2f2e4#0");
try {
!function(){if(window.__ggsxHeaderOn)return;window.__ggsxHeaderOn=1;var e=document,a=window,n=a.GGSX_SHOP&&a.GGSX_SHOP.path||"/shop-now",t="ggsx_basket",s=["baby-and-household","bakery","beer-and-seltzers","beverages","dairy-and-eggs","meat-fish-and-deli","frozen-foods","fruit-and-vegetables","pantry","spirits-liquor","villa-kits-and-bundles","wine"],r={"storage-bags-foil":"0/storage-bags-and-foil","port-fortified":"11/port-and-fortified","charcoal-wood-fuel":"0/charcoal-wood-and-fuel","frozen-fruit-vegetables":"6/frozen-fruit-and-vegetables",seafood:"5/fresh-fish-seafood","white-wine":"11/white-wine",beverages:"3","skin-care":"0/skin-care",gin:"9/gin","vegetables-salad":"7/vegetables-and-salad","cat-food":"0/cat-food","chips-and-savory-snacks":"8/chips-and-savory-snacks","red-wine":"11/red-wine","sugar-syrups-sweeteners":"8/sugar-syrups-and-sweeteners","jams-jellies-honey-nut-butters":"8/jams-jellies-honey-and-nut-butters","soft-drinks":"3/soft-drinks","frozen-foods":"6/frozen-meals","french-fries-sides":"6/french-fries-and-sides",fruits:"7/fruits","cleaning-supplies":"0/cleaning-and-household","snacks-and-quick-meals":"8/snacks-cookies-and-candy","pet-food":"0/pets",wine:"11",desserts:"8/desserts",eggs:"4/eggs","fresh-foods":"5","frozen-meat":"6/frozen-meat","pantry-and-cooking":"8","paper-plastic":"0/paper-and-plastic-products","meat-and-poultry":"5/fresh-meat","powdered-milk":"8/powdered-milk","canned-and-jarred-foods":"8/canned-and-dried-foods","coffee-and-tea":"3/coffee-and-tea","broths-bouillons":"8/broths-and-bouillons","dog-food":"0/dog-food",water:"3/water","cooking-oils":"8/oils-and-vinegar","cookies-cakes-baked-desserts":"1/cookies-cakes-baked-desserts","chilled-foods":"4","instant-noodles-and-soups":"8/snacks-nuts-chips-and-crisps",organic:"7/organic","breakfast-and-bakery":"1","vegetables-and-fresh-herbs":"7","spices-seasonings":"8/spices-and-seasonings","sauces-marinades":"8/sauces-and-marinades",rum:"9/rum",tequila:"9/tequila","baking-supplies":"8/baking-ingredients","medicines-vitamins-first-aid":"0/medicines-vitamins-and-first-aid","baby-baby-care":"0/baby-baby-care","bin-liners":"0/bin-liners","home-and-vacation-essentials":"0","ice-cream-treats":"6/ice-cream-and-treats",brandy:"9/brandy","liqueurs-fortified-wines":"9/liqueurs-and-fortified-wines","spirits-and-mixers":"9","cookies-and-crackers":"8/cookies-and-granola-bars","milk-and-dairy":"4/milk-and-dairy",batteries:"0/batteries","butter-margarine":"4/butter-and-margarine","wraps-tortillas-pitta-bread":"1/wraps-tortillas-and-pitta-bread","bread-and-pastries":"1/bread-rolls-and-brioche",whisky:"9/whisky","frozen-pizza":"6/frozen-pizza","frozen-foods-1":"6",cheese:"4/cheese",cognac:"9/cognac","deli-meats":"5/deli-meats","oral-care":"0/oral-care",treats:"0/pet-treats","pancakes-and-syrups":"1/pancakes-and-syrups","shower-soap-haircare":"0/shower-soap-and-haircare","sports-and-energy-drinks":"3/sports-and-energy-drinks",vodka:"9/vodka","laundry-supplies":"0/laundry-supplies","rose-wine":"11/rose-wine",crackers:"8/crackers","mixers-bar-essentials":"9/mixers-and-bar-essentials","frozen-bread-baked-goods":"6/frozen-bread-and-baked-goods","frozen-fish-seafood":"6/frozen-fish-and-seafood","juice-1":"3/juice","sauces-and-condiments-1":"8/condiments-and-dressings","cereal-and-oatmeal":"8/cereals-and-breakfast","rice-pasta-and-grains":"8/pasta-and-rice","candy-and-chocolate":"8/candy-and-chocolate","sparkling-wine-champagne":"11/sparkling-wine-and-champagne",beer:"2","villa-kits-bundles":"10"},o=null,i=!1;function c(a,n,t){var s,r=e.createElement(a);if(n)for(s in n)null!=n[s]&&("class"===s?r.className=n[s]:"text"===s?r.textContent=n[s]:"on"===s.slice(0,2)?r.addEventListener(s.slice(2),n[s]):r.setAttribute(s,n[s]));return(t||[]).forEach(function(a){a&&r.appendChild("string"==typeof a?e.createTextNode(a):a)}),r}function d(){return location.pathname.replace(/\/+$/,"")===n}function l(e){d()?location.hash==="#"+e?a.dispatchEvent(new HashChangeEvent("hashchange")):location.hash=e:location.href=n+"#"+e}function u(e){var a,t,o,i;if(!e)return null;try{a=new URL(e,location.href)}catch(e){return null}if(a.origin!==location.origin)return null;if("/cart-page"===(t=a.pathname.replace(/\/+$/,"")))return n+"#basket";if(o=t.match(/^\/category(?:\/([^\/]+))?$/)){var c=r[o[1]||""];if(!c)return n;if("q/"===c.slice(0,2))return n+"#q/"+encodeURIComponent(c.slice(2));var d=c.split("/");return n+"#d/"+s[+d[0]]+(d[1]?"/"+d[1]:"")}return(o=t.match(/^\/product-page\/([^\/]+)$/))?n+"#q/"+encodeURIComponent(o[1].split("-").filter(Boolean).slice(0,4).join(" ")):"/search-results"===t?(i=a.searchParams.get("q"))?n+"#q/"+encodeURIComponent(i):n:null}function f(e){var a=u(e.getAttribute("href"));return a&&/^\s*shop\s*(now|groceries)\s*$/i.test(e.textContent||"")&&(a=n),a}function h(){var a,t=(a=e.querySelector("header"))&&a.querySelector('[class*="max-width-container"]');if(t&&(!o||!t.contains(o.basket))){o&&o.panel.remove();var s,r=((s=e.createElementNS("http://www.w3.org/2000/svg","svg")).setAttribute("viewBox","0 0 40 47"),s.setAttribute("width","40"),s.setAttribute("height","47"),s.setAttribute("fill","none"),s.setAttribute("stroke","#fff"),s.setAttribute("stroke-width","2"),s.setAttribute("aria-hidden","true"),s.innerHTML='<path d="M11.5 15.5V11a8.5 8.5 0 0 1 17 0v4.5"/><path d="M5.5 15.5h29l3.5 30h-36z"/><text x="20" y="32.5" text-anchor="middle" dominant-baseline="central">0</text>',s),i=c("a",{class:"ggsx-hb",hidden:"",href:n+"#basket","aria-label":"Basket",onclick:function(e){e.preventDefault(),l("basket")}},[r]),d=c("input",{type:"search",placeholder:"Search groceries",autocomplete:"off","aria-label":"Search groceries"}),u=c("form",{class:"ggsx-hs",role:"search",onsubmit:function(e){e.preventDefault();var a=d.value.trim();a&&(b(),l("q/"+encodeURIComponent(a)))}},[d,c("button",{type:"submit",text:"Search"})]);t.appendChild(i),e.body.appendChild(u),o={basket:i,num:r.querySelector("text"),panel:u,input:d,anchor:null},p()}}function p(){if(o){var e=function(){try{var e,a=JSON.parse(localStorage.getItem(t)||"null"),n=0;if(a&&a.items)for(e in a.items)n+=a.items[e].n||0;return n}catch(e){return 0}}();var L=e?"Basket with "+e+(1===e?" item":" items"):"Basket";o.num.textContent!==String(e)&&(o.num.textContent=String(e)),o.basket.getAttribute("aria-label")!==L&&o.basket.setAttribute("aria-label",L)}}function g(){var e;o&&o.anchor&&(e=o.anchor.getBoundingClientRect(),o.panel.style.left=Math.max(8,Math.min(e.left,a.innerWidth-336))+"px",o.panel.style.top=e.bottom+8+"px")}function b(){o&&(o.panel.classList.remove("open"),e.removeEventListener("keydown",m),e.removeEventListener("mousedown",k),a.removeEventListener("scroll",b))}function m(e){"Escape"===e.key&&b()}function k(e){!o||o.panel.contains(e.target)||o.anchor&&o.anchor.contains(e.target)||b()}function v(){var e,t,s=location.hash.match(/^#(c|p)\/(.*)$/);if(s&&d()){try{e=u(("c"===s[1]?"/category/":"/product-page/")+decodeURIComponent(s[2]).replace(/\/+$/,""))}catch(a){e=null}t=(e=e||n).indexOf("#"),history.replaceState(null,"",location.pathname+location.search+(t>=0?e.slice(t):"")),a.dispatchEvent(new HashChangeEvent("hashchange"))}}function y(){v(),h(),p(),function(){var a,n,t,s=e.querySelectorAll('a[href*="/category"],a[href*="/product-page/"],a[href*="/cart-page"],a[href*="/search-results"]');for(a=0;a<s.length;a++)(n=s[a]).hasAttribute("data-ggsx-link")||n.closest("#ggsx-shop,#ggsx-run,.gg-top,.gg-more")||(t=f(n))&&(n.setAttribute("href",t),n.setAttribute("data-ggsx-link","1"))}()}e.addEventListener("click",function(e){var a,t,s=e.target&&e.target.closest?e.target.closest("a[href]"):null;s&&!s.closest("#ggsx-shop,#ggsx-run")&&(a=f(s)||(s.hasAttribute("data-ggsx-link")?s.getAttribute("href"):null))&&(e.preventDefault(),e.stopPropagation(),(t=0===a.indexOf(n+"#")?a.slice(n.length+1):"")?l(t):location.href=a)},!0),e.addEventListener("click",function(n){var t,s=n.target&&n.target.closest?n.target.closest("header .search-button"):null;s&&o&&(n.preventDefault(),n.stopPropagation(),o.panel.classList.contains("open")?b():(t=s,o&&(o.anchor=t,g(),o.panel.classList.add("open"),setTimeout(function(){try{o.input.focus()}catch(e){}},30),e.addEventListener("keydown",m),e.addEventListener("mousedown",k),a.addEventListener("scroll",b))))},!0),a.addEventListener("ggsx-basket",p),a.addEventListener("storage",function(e){e.key===t&&p()}),a.addEventListener("resize",function(){o&&o.panel.classList.contains("open")&&g()}),a.addEventListener("hashchange",v),new MutationObserver(function(){i||(i=!0,(a.requestAnimationFrame||setTimeout)(function(){i=!1,y()}))}).observe(e.documentElement,{childList:!0,subtree:!0}),y()}();
} catch (e) { try { console.warn('[GGSX bundle] Header Basket & Store Links', e); } catch (e2) {} }
__ggsxE("722bb772-4f8e-4b09-bc4d-224140f2f2e4#0");

/* ===== GrocerGoSx Shop 3 Checkout (ac039120-83d6-4dc6-bd8e-cf9f03556d29, rev 18) ===== */
__ggsxCss("", "\n.gc-wrap{display:none;position:fixed;inset:0;z-index:9400;background:rgba(27,27,27,.55);padding:24px 16px;overflow:auto;-webkit-overflow-scrolling:touch;font-family:\"Avenir Light\",avenir-lt-w01_35-light1475496,Avenir,\"Helvetica Neue\",Arial,sans-serif;color:#1b1b1b}\n.gc-wrap.open{display:block}\nhtml.gc-lock,html.gc-lock body{overflow:hidden!important}\n.gc-box{position:relative;max-width:600px;margin:0 auto;background:#fff;border-radius:20px;padding:26px 28px 28px;box-shadow:0 20px 60px rgba(0,0,0,.25);box-sizing:border-box}\n.gc-box h2,.gc-box h3{font-family:Benzin,\"Helvetica Neue\",Arial,sans-serif}\n.gc-box h2{font-size:24px;line-height:1.15;margin:0 36px 6px 0}\n.gc-box h3{font-size:22px;margin:10px 0 6px}\n.gc-lead{margin:0 0 4px;font-size:14px;line-height:1.45;color:#6b6b6b}\n.gc-sum{margin:0 0 16px;font-size:14px;font-weight:700;color:#F4551B}\n.gc-x{position:absolute;top:14px;right:14px;width:40px;height:40px;border:0;border-radius:50%;background:#f3efe9;color:#1b1b1b;font-size:26px;line-height:40px;cursor:pointer;padding:0}\n.gc-form{display:flex;flex-direction:column;gap:12px}\n.gc-row{display:flex;gap:12px}\n.gc-row .gc-f{flex:1;min-width:0}\n.gc-f{display:flex;flex-direction:column;gap:5px;font-size:13px;font-weight:700;color:#3a3a3a}\n.gc-f input,.gc-f select,.gc-f textarea{width:100%;box-sizing:border-box;font:inherit;font-weight:400;font-size:16px;color:#1b1b1b;background:#fff;border:1.5px solid #cfc9c1;border-radius:12px;padding:11px 12px;outline:none;-webkit-appearance:none;appearance:none;margin:0}\n.gc-f select{background:#fff url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='9'%3E%3Cpath d='M1 1l6 6 6-6' fill='none' stroke='%236b6b6b' stroke-width='2'/%3E%3C/svg%3E\") no-repeat right 12px center;padding-right:34px}\n.gc-f textarea{resize:vertical;min-height:52px}\n.gc-f input:focus,.gc-f select:focus,.gc-f textarea:focus{border-color:#F4551B}\n.gc-f .bad{border-color:#d93025;background:#fff6f5}\n.gc-est{background:#f6f3ee;border-radius:14px;padding:12px 14px;font-size:14px}\n.gc-est div{display:flex;justify-content:space-between;gap:12px;padding:3px 0}\n.gc-est .gc-tot{border-top:1px solid #e3ddd4;margin-top:6px;padding-top:8px;font-size:16px}\n.gc-est .gc-tot b{color:#F4551B}\n.gc-est small{display:block;margin-top:6px;color:#6b6b6b;font-size:12px;line-height:1.4}\n.gc-err{min-height:0;color:#d93025;font-size:14px;line-height:1.4}\n.gc-err:empty{display:none}\n.gc-err a{color:#F4551B;font-weight:700}\n.gc-btn{height:50px;border:0;border-radius:999px;background:#F4551B;color:#fff;font:inherit;font-size:16px;font-weight:700;cursor:pointer;padding:0 22px}\n.gc-btn:disabled{opacity:.6;cursor:default}\n.gc-thanks{text-align:center;padding:12px 0 4px}\n.gc-thanks p{margin:0 0 18px;font-size:15px;line-height:1.5;color:#3a3a3a}\n.gc-tick{width:64px;height:64px;margin:0 auto 6px;border-radius:50%;background:#fff1ea;color:#F4551B;font-size:34px;line-height:64px;font-weight:700}\n@media (max-width:860px){\n.gc-wrap{padding:0}\n.gc-box{max-width:none;min-height:100%;border-radius:0;padding:18px 16px calc(28px + env(safe-area-inset-bottom,0));box-shadow:none}\n.gc-box h2{font-size:22px;margin-top:4px}\n.gc-row{flex-direction:column;gap:12px}\n}\n");
__ggsxB("ac039120-83d6-4dc6-bd8e-cf9f03556d29#0");
try {
!function(){var e=document,t=window,n=t.GGSX_CHECKOUT={formId:"1e2a4859-2328-45ba-9c2a-280f4c1bac28",clientId:"b0274d30-48b0-4e8d-b352-2f70ff783547",api:"https://www.wixapis.com",whatsapp:"590690779119",t:{first:"first_name_7a1c",last:"last_name_3b9e",email:"email_5d2f",phone:"phone_8e4a",address:"delivery_address_c61d",side:"island_side_9f3b",date:"delivery_date_2c7e",win:"delivery_window_6a8d",notes:"notes_4b1f",order:"order_lines_e0a2"},sides:["Dutch side (Sint Maarten)","French side (Saint-Martin)"],windows:["Morning · 8:30–12:00","Afternoon · 12:00–17:00","Evening · 17:00–23:00","Any time"],copy:{title:"Checkout",lead:"Tell us where and when. No payment now: we confirm by message and invoice after shopping.",place:"Place order",sending:"Sending…",thanks:"Order received!",thanksLead:"We'll confirm by message and send your invoice once we've shopped. A copy of your order is on its way to ",cont:"Continue shopping",fail:"That didn't go through. Try again, or send your order on WhatsApp.",wa:"Send on WhatsApp instead"}},a="ggsx_live_token",i="ggsx_basket",s="ggsx_customer",r=null,o={};function l(t,n,a){var i,s=e.createElement(t);if(n)for(i in n)null!=n[i]&&("class"===i?s.className=n[i]:"text"===i?s.textContent=n[i]:"on"===i.slice(0,2)?s.addEventListener(i.slice(2),n[i]):s.setAttribute(i,n[i]));return(a||[]).forEach(function(t){t&&s.appendChild("string"==typeof t?e.createTextNode(t):t)}),s}function c(e){return"$"+(Math.round(100*e)/100).toFixed(2)}function d(e){try{return JSON.parse(localStorage.getItem(e)||"null")}catch(e){return null}}function u(){var e,t,n=d(i),a=[];if(n&&n.items)for(e in n.items)(t=n.items[e])&&t.n>0&&a.push(t);return a.sort(function(e,t){return(e.o||0)-(t.o||0)}),a}function p(e){var t=0,n=0;return e.forEach(function(e){t+=e.n,n+=e.n*(+e.price||0)}),{n:t,s:Math.round(100*n)/100}}function h(e,a,i,D,W){var s=t.GGSX_RUN&&t.GGSX_RUN.fees||{},S=function(e,n){try{var v=+t.GGSX_MORE.setting(e,NaN);return v>=0?v:n}catch(e){return n}},f=S("shopping_fee",80),p=S("planned_fee",70),R=S("service_fee_rate",.15),X=S("service_fee_max",120),H=S("planned_hours",s.plannedHours||48),P=function(){try{if(t.GGSX_REF.get().name)return!0}catch(e){}var n=/^(\d{4})-(\d{2})-(\d{2})/.exec(D||"");if(!n)return!1;var a=/(\d{1,2}):(\d{2})/.exec(W||"");return new Date(+n[1],n[2]-1,+n[3],a?+a[1]:8,a?+a[2]:30)-Date.now()>=36e5*H}(),r=Math.min(Math.max(Math.round(100*(e-(n.exempt?n.exempt(i):0))*R)/100,n.minFee?n.minFee(i,a,P?p:f):P?p:f),X),o=n.delFee?+n.delFee(i,a)||0:0,l=function(e,t){var a=[];try{a=(n.extraFees?n.extraFees(e,t):[])||[]}catch(e){}return a.filter(function(e){return e&&e.amount>0})}(i,a),c=0;return n.delIn&&n.delIn(i,a)&&(o=Math.min(o,r),r-=o),l.forEach(function(e){c+=e.amount}),{fee:r,lab:"Service Fee",del:o,extra:l,total:e+r+o+c}}function m(e,t){return(i=!!t,s=d(a),!i&&s&&s.a&&s.e>Date.now()+6e4?Promise.resolve(s.a):fetch(n.api+"/oauth2/token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({clientId:n.clientId,grantType:"anonymous"})}).then(function(e){if(!e.ok)throw new Error("oauth "+e.status);return e.json()}).then(function(e){try{localStorage.setItem(a,JSON.stringify({a:e.access_token,r:e.refresh_token,e:Date.now()+1e3*(e.expires_in||14400)}))}catch(e){}return e.access_token})).then(function(t){return fetch(n.api+"/form-submission-service/v4/submissions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:t},body:JSON.stringify({submission:{formId:n.formId,submissions:e}})})}).then(function(n){return 401!==n.status||t?n.ok?n.json():n.text().then(function(e){throw new Error("submit "+n.status+" "+e.slice(0,999))}):m(e,!0)});var i,s}function f(e,t,n){return l("label",{class:"gc-f"+(n?" "+n:"")},[l("span",{text:e}),t])}function v(){r&&(r.wrap.classList.remove("open"),e.documentElement.classList.remove("gc-lock"),e.removeEventListener("keydown",g))}function g(e){"Escape"===e.key&&v()}function x(a){a.preventDefault();var d,f=r.inputs,g=u(),x=null;for(d in f)f[d].classList.remove("bad");if(g.length){if(["first","email","phone","address","side","date","win"].forEach(function(e){f[e].value.trim()||x||(x=e)}),x||/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email.value.trim())||(x="email"),!x&&f.phone.value.replace(/\D/g,"").length<7&&(x="phone"),x)return f[x].classList.add("bad"),f[x].focus(),void(r.err.textContent="Please check the highlighted field.");var y,b,w,k=n.t,C={};C[k.first]=f.first.value.trim(),C[k.last]=f.last.value.trim(),C[k.email]=f.email.value.trim(),C[k.phone]=(y=f.phone.value,w="+"===(b=String(y||"").replace(/[^\d+]/g,"")).charAt(0),b=b.replace(/\+/g,""),w||(10===b.length&&0===b.indexOf("721")?b="1"+b:10===b.length&&/^0[56]90/.test(b)&&(b="590"+b.slice(1))),(w||b.length>=10?"+":"")+b),C[k.address]=f.address.value.trim(),C[k.side]=f.side.value,C[k.date]=f.date.value,C[k.win]=f.win.value,C[k.notes]=f.notes.value.trim(),C[k.order]=function(e,t){var a=p(e),i=h(a.s,t,e,f.date.value,f.win.value);return e.map(function(e){return e.n+" × "+e.name+(e.size?" "+e.size:"")+" — "+c(e.n*(+e.price||0))+(n.lineExtra?n.lineExtra(e):"")}).join("\n")+"\n\nBasket total: "+c(a.s)+" ("+a.n+(1===a.n?" item":" items")+", GrocerGoSx prices incl. taxes)\nEstimate incl. "+i.lab.toLowerCase()+" "+c(i.fee)+(i.del?", delivery "+c(i.del):", free delivery")+i.extra.map(function(e){return" + "+e.label+" "+c(e.amount)}).join("")+": "+c(i.total)+"\nFinal total comes from the receipts."}(g,f.side.value),e.dispatchEvent(new CustomEvent("ggsx-checkout-submit",{detail:{fields:C,keys:k,lines:g,inputs:f}})),r.btn.disabled=!0,r.btn.textContent=n.copy.sending,r.err.textContent="",m(C).then(function(){try{localStorage.setItem(s,JSON.stringify({first:f.first.value,last:f.last.value,email:f.email.value,phone:f.phone.value,address:f.address.value,side:f.side.value}))}catch(e){}var a;a=f.email.value.trim(),r.form.style.display="none",r.box.classList.add("gc-done"),r.box.appendChild(l("div",{class:"gc-thanks"},[l("div",{class:"gc-tick",text:"✓"}),l("h3",{text:n.copy.thanks}),l("p",{text:n.copy.thanksLead+a+"."}),l("button",{type:"button",class:"gc-btn",text:n.copy.cont,onclick:function(){v(),r.btn.disabled=!1,r.btn.textContent=n.copy.place}})])),o.notes="",function(){var n=e.querySelector("#ggsx-shop .gs-cart .gs-link");if(n&&/clear/i.test(n.textContent))n.click();else{try{localStorage.setItem(i,JSON.stringify({v:1,t:Date.now(),items:{}}))}catch(e){}t.dispatchEvent(new CustomEvent("ggsx-basket"))}}(),e.dispatchEvent(new CustomEvent("ggsx-checkout-sent",{detail:{fields:C}}))}).catch(function(a){if(r.btn.disabled=!1,r.btn.textContent=n.copy.place,r.err.innerHTML="",/phone_8e4a/.test(String(a&&a.message)))return f.phone.classList.add("bad"),f.phone.focus(),void(r.err.textContent="Enter your phone with the country code, e.g. +1 721 555 0123 or +590 690 12 34 56.");r.err.appendChild(e.createTextNode(n.copy.fail+" ")),r.err.appendChild(l("a",{href:"https://wa.me/"+n.whatsapp+"?text="+encodeURIComponent("Hi GrocerGoSx, I'd like to order these groceries:\n"+C[k.order]+"\n\nName: "+C[k.first]+" "+C[k.last]+"\nPhone: "+C[k.phone]+"\nAddress: "+C[k.address]+" ("+C[k.side]+")\nDelivery: "+C[k.date]+" "+C[k.win]+(C[k.notes]?"\nNotes: "+C[k.notes]:"")+(n.extras||[]).map(function(e){return C[e.key]?"\n"+e.label+": "+C[e.key]:""}).join("")),target:"_blank",rel:"noopener",text:n.copy.wa}));try{t.console&&console.warn("[GGSX checkout]",a)}catch(e){}})}else v()}e.addEventListener("click",function(t){t.target&&t.target.closest&&t.target.closest("#ggsx-shop .gs-cart .gs-btn:not(.gs-sec)")&&function(){var t=u();if(!t.length)return!1;!function(){if(r)return r;var t=d(s)||{},a=n.copy,i=function(e){return null!=o[e]?o[e]:t[e]||""},m=l("input",{type:"text",name:"first",autocomplete:"given-name",required:"",value:i("first")}),g=l("input",{type:"text",name:"last",autocomplete:"family-name",value:i("last")}),y=l("input",{type:"email",name:"email",autocomplete:"email",required:"",value:i("email"),placeholder:"you@example.com"}),b=l("input",{type:"tel",name:"phone",autocomplete:"tel",required:"",value:i("phone"),placeholder:"+1 721 … or +590 …"}),w=l("textarea",{name:"address",rows:"2",required:"",placeholder:"Villa or hotel name, room / unit, area"});w.value=i("address");var k=l("select",{name:"side",required:""},[l("option",{value:"",text:"Choose…"})].concat(n.sides.map(function(e){return l("option",{value:e,text:e})})));k.value=i("side");var C,E=l("input",{type:"date",name:"date",required:"",min:(C=new Date,C.getFullYear()+"-"+("0"+(C.getMonth()+1)).slice(-2)+"-"+("0"+C.getDate()).slice(-2)),value:i("date")}),_=l("select",{name:"win",required:""},[l("option",{value:"",text:"Choose…"})].concat(n.windows.map(function(e){return l("option",{value:e,text:e})})));_.value=i("win");var S=l("textarea",{name:"notes",rows:"2",placeholder:"Gate code, allergies, anything else…"});S.value=i("notes");var L=l("div",{class:"gc-est"}),D=l("div",{class:"gc-err",role:"alert"}),G=l("button",{type:"submit",class:"gc-btn",text:a.place}),N=l("form",{class:"gc-form",novalidate:""},[l("div",{class:"gc-row"},[f("First name *",m),f("Last name",g)]),l("div",{class:"gc-row"},[f("Email *",y),f("Phone / WhatsApp *",b)]),f("Delivery address *",w),l("div",{class:"gc-row"},[f("Island side *",k),f("Delivery date *",E)]),f("Delivery window *",_),f("Notes",S),L,D,G]),I={first:m,last:g,email:y,phone:b,address:w,side:k,date:E,win:_,notes:S},T=l("p",{class:"gc-sum"}),A=l("div",{class:"gc-box",role:"dialog","aria-modal":"true","aria-label":a.title},[l("button",{type:"button",class:"gc-x","aria-label":"Close",text:"×",onclick:v}),l("h2",{text:a.title}),l("p",{class:"gc-lead",text:a.lead}),T,N]),F=l("div",{class:"gc-wrap","data-ggsx-co":"1",onclick:function(e){e.target===F&&v()}},[A]);function M(){var e=u(),t=p(e),n=h(t.s,I.side.value,e,I.date.value,I.win.value),Q=window.GGSX_MIN&&window.GGSX_MIN.below();L.innerHTML="",L.appendChild(l("div",{},[l("span",{text:"Basket ("+t.n+(1===t.n?" item":" items")+")"}),l("b",{text:c(t.s)})])),L.appendChild(l("div",{},[l("span",{text:"Taxes / Service Fee"}),l("b",{text:Q?"—":c(n.fee)})])),L.appendChild(l("div",{},[l("span",{text:"Delivery Fee"}),l("b",{text:n.del?c(n.del):"Free"})])),n.extra.forEach(function(e){L.appendChild(l("div",{},[l("span",{text:e.label}),l("b",{text:c(e.amount)})]))}),Q||L.appendChild(l("div",{},[l("span",{text:"Total (service excl.)"}),l("b",{text:c(n.total-n.fee)})])),Q||L.appendChild(l("div",{class:"gc-tot"},[l("span",{text:"Total (service incl.)"}),l("b",{text:c(n.total)})])),T.textContent=t.n+(1===t.n?" item":" items")+" · "+c(t.s)+" at GrocerGoSx prices"}N.addEventListener("input",function(e){var t=e.target&&e.target.name;t&&(o[t]=e.target.value),/^(side|date|win)$/.test(t)&&M()}),N.addEventListener("change",function(e){var t=e.target&&e.target.name;t&&(o[t]=e.target.value),/^(side|date|win)$/.test(t)&&M()}),N.addEventListener("submit",x),[].forEach.call(e.querySelectorAll("body>.gc-wrap[data-ggsx-co]"),function(w){w.remove()}),e.body.appendChild(F),r={wrap:F,box:A,form:N,inputs:I,est:L,err:D,btn:G,sum:T},e.dispatchEvent(new CustomEvent("ggsx-checkout-build",{detail:{form:N,before:L,inputs:I}})),r.paintEst=M;try{t.GGSX_MORE.load().then(M,function(){})}catch(e){}}(),r.paintEst(),r.err.textContent="",e.dispatchEvent(new CustomEvent("ggsx-checkout-open",{detail:{lines:t,inputs:r.inputs}})),r.box.classList.remove("gc-done"),r.form.style.display="";var a=r.box.querySelector(".gc-thanks");return a&&a.remove(),r.wrap.classList.add("open"),e.documentElement.classList.add("gc-lock"),setTimeout(function(){try{(r.inputs.first.value?r.inputs.address:r.inputs.first).focus()}catch(e){}},60),e.addEventListener("keydown",g),!0}()&&(t.preventDefault(),t.stopPropagation())},!0)}();
} catch (e) { try { console.warn('[GGSX bundle] Shop 3 Checkout', e); } catch (e2) {} }
__ggsxE("ac039120-83d6-4dc6-bd8e-cf9f03556d29#0");

/* ===== GrocerGoSx Shop 4 Substitutions & Run Sheet (d723d7fb-fe4b-4005-9965-840934612316, rev 1) ===== */
__ggsxCss("", "\n.gc-pi{border:1.5px dashed #cfc9c1;border-radius:12px;padding:10px 12px}\n.gc-pi-t{border:0;background:none;padding:0;font:inherit;font-size:14px;font-weight:700;color:#F4551B;cursor:pointer}\n.gc-pi-h{margin:4px 0 0;font-size:12px;color:#6b6b6b;line-height:1.4}\n.gc-pi-l{display:none;margin-top:10px}\n.gc-pi.on .gc-pi-l{display:block}\n.gc-pi-r{display:flex;align-items:center;gap:10px;padding:6px 0;border-top:1px solid #efeae3;font-size:13px;font-weight:400;color:#1b1b1b}\n.gc-pi-r span{flex:1;min-width:0}\n.gc-pi-r select{width:150px;flex:none;font:inherit;font-size:13px;padding:7px 28px 7px 10px;border:1.5px solid #cfc9c1;border-radius:10px;background:#fff url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' fill='none' stroke='%236b6b6b' stroke-width='2'/%3E%3C/svg%3E\") no-repeat right 10px center;-webkit-appearance:none;appearance:none}\n.gr-wrap{display:none;position:fixed;inset:0;z-index:9500;background:#f6f3ee;overflow:auto;-webkit-overflow-scrolling:touch;font-family:\"Avenir Light\",avenir-lt-w01_35-light1475496,Avenir,\"Helvetica Neue\",Arial,sans-serif;color:#1b1b1b;font-size:15px;line-height:1.45}\n.gr-wrap.open{display:block}\nhtml.gr-lock,html.gr-lock body{overflow:hidden!important}\n.gr-top{position:sticky;top:0;z-index:2;display:flex;align-items:center;justify-content:space-between;background:#F4551B;color:#fff;padding:12px 16px;font-family:Benzin,\"Helvetica Neue\",Arial,sans-serif;font-size:18px}\n.gr-x{width:40px;height:40px;border:0;border-radius:50%;background:rgba(255,255,255,.2);color:#fff;font-size:26px;line-height:40px;cursor:pointer;padding:0}\n.gr-panel .gr-x{background:#f3efe9;color:#1b1b1b}\n.gr-body{max-width:640px;margin:0 auto;padding:14px 14px 120px}\n.gr-card{background:#fff;border-radius:16px;padding:14px 16px;margin-bottom:12px;box-shadow:0 2px 10px rgba(0,0,0,.05)}\n.gr-card h2{font-family:Benzin,\"Helvetica Neue\",Arial,sans-serif;font-size:20px;margin:0 0 6px}\n.gr-card a{color:#F4551B;font-weight:700}\n.gr-badge{display:inline-block;margin-top:6px;padding:3px 10px;border-radius:999px;font-size:12px;font-weight:700;background:#f3efe9;color:#3a3a3a}\n.gr-badge.ask{background:#fff1ea;color:#c2410c}\n.gr-badge.skip{background:#fde8e8;color:#b42318}\n.gr-badge.sub{background:#e8f5ec;color:#1e7a3a}\n.gr-pw small{display:block;color:#6b6b6b;font-size:12px;margin-top:6px}\n.gr-prog{font-weight:700}\n.gr-bar{height:8px;border-radius:999px;background:#efeae3;margin-top:8px;overflow:hidden}\n.gr-bar i{display:block;height:100%;width:0;background:#F4551B;transition:width .2s}\n.gr-item{background:#fff;border-radius:16px;padding:12px 14px;margin-bottom:10px;border:2px solid transparent}\n.gr-item.got{border-color:#2f9e55;background:#f3faf5}\n.gr-item.sub{border-color:#f0a24a;background:#fff8f0}\n.gr-item.out{border-color:#d93025;background:#fff5f5}\n.gr-it-h{display:flex;gap:10px;align-items:flex-start}\n.gr-it-n{flex:1;min-width:0}\n.gr-it-p{color:#6b6b6b;white-space:nowrap}\n.gr-st{display:flex;gap:8px;margin-top:10px}\n.gr-b{flex:1;min-height:44px;border:1.5px solid #cfc9c1;border-radius:12px;background:#fff;font:inherit;font-size:14px;font-weight:700;color:#3a3a3a;cursor:pointer;padding:0 6px}\n.gr-b.got.on{background:#2f9e55;border-color:#2f9e55;color:#fff}\n.gr-b.sub.on{background:#f0a24a;border-color:#f0a24a;color:#fff}\n.gr-b.out.on{background:#d93025;border-color:#d93025;color:#fff}\n.gr-sub{display:none;gap:8px;margin-top:10px}\n.gr-item.sub .gr-sub{display:flex}\n.gr-sub input{font:inherit;font-size:16px;border:1.5px solid #cfc9c1;border-radius:10px;padding:9px 10px;min-width:0;-webkit-appearance:none}\n.gr-sub input:first-child{flex:2}\n.gr-sub input:last-child{flex:1;max-width:110px}\n.gr-link{display:inline-block;margin-top:8px;border:0;background:none;padding:0;font:inherit;font-size:13px;font-weight:700;color:#F4551B;text-decoration:none;cursor:pointer}\n.gr-reset{display:block;margin:6px auto 0;color:#6b6b6b}\n.gr-foot{position:fixed;left:0;right:0;bottom:0;z-index:3;display:flex;justify-content:center;gap:10px;padding:10px 14px calc(10px + env(safe-area-inset-bottom,0));background:rgba(246,243,238,.96);box-shadow:0 -6px 20px rgba(0,0,0,.08)}\n.gr-foot .gr-btn{flex:1;max-width:320px}\n.gr-btn{min-height:48px;border:0;border-radius:999px;background:#F4551B;color:#fff;font:inherit;font-size:15px;font-weight:700;cursor:pointer;padding:0 16px}\n.gr-btn.sec{background:#fff;color:#1b1b1b;border:1.5px solid #cfc9c1}\n.gr-panel{display:none;position:fixed;inset:0;z-index:4;background:rgba(27,27,27,.55);padding:16px;overflow:auto}\n.gr-panel.open{display:block}\n.gr-panel-c{background:#fff;max-width:640px;margin:24px auto;border-radius:16px;padding:14px 16px 16px}\n.gr-panel-h{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;font-size:16px}\n.gr-panel textarea{width:100%;box-sizing:border-box;font:inherit;font-size:15px;line-height:1.45;border:1.5px solid #cfc9c1;border-radius:12px;padding:10px 12px;resize:vertical}\n.gr-panel-b{display:flex;gap:10px;margin-top:10px}\n.gr-panel-b .gr-btn{flex:1}\n");
__ggsxB("d723d7fb-fe4b-4005-9965-840934612316#0");
try {
!function(){var e,t,n,s,o=document,a=window,r=a.GGSX_SUBS={t:{subs:"substitutions_7c3a",sheet:"run_sheet_e5b1"},rules:[["sub","Substitute the closest match","substitute the closest match"],["ask","WhatsApp me first","WhatsApp me first"],["skip","Skip it","skip it"]],sheetUrl:"https://www.grocergosx.com/shop-now#run/",shopUrl:"https://www.grocergosx.com/shop-now#q/",copy:{label:"If something's unavailable *",perItem:"Choose per item",perItemOn:"Hide per-item choices",hint:"Only for items where you want something different from the choice above.",def:"Same as above",lineTag:" · if unavailable: ",sheet:"Run sheet",close:"Close",got:"Got it",sub:"Substituted",out:"Out of stock",subName:"What you got instead",subPrice:"Price $",search:"Search shop",wa:"WhatsApp customer",sum:"Shopped summary",openWa:"Open WhatsApp",copy:"Copy",copied:"Copied",reset:"Start over",rule:"If unavailable: ",prog:" of ",done:" done"}},i="ggsx_subs",c={},l="";function u(e,t,n){var s,a=o.createElement(e);if(t)for(s in t)null!=t[s]&&("class"===s?a.className=t[s]:"text"===s?a.textContent=t[s]:"on"===s.slice(0,2)?a.addEventListener(s.slice(2),t[s]):a.setAttribute(s,t[s]));return(n||[]).forEach(function(e){e&&a.appendChild("string"==typeof e?o.createTextNode(e):e)}),a}function p(e){return"$"+(Math.round(100*e)/100).toFixed(2)}function d(e,t){for(var n=0;n<r.rules.length;n++)if(r.rules[n][0]===e)return r.rules[n][t?2:1];return""}function h(e){try{return JSON.parse(localStorage.getItem(e)||"null")}catch(e){return null}}function g(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){}}o.addEventListener("ggsx-checkout-build",function(o){var p=o.detail,g=h(i)||{};l=g.rule||"sub",(e=u("select",{name:"subs",required:""},r.rules.map(function(e){return u("option",{value:e[0],text:e[1]})}))).value=l,e.addEventListener("change",function(){l=e.value}),t=u("div",{class:"gc-pi-l"}),n=u("button",{type:"button",class:"gc-pi-t",text:r.copy.perItem,onclick:function(){var e=s.classList.toggle("on");n.textContent=e?r.copy.perItemOn:r.copy.perItem}}),s=u("div",{class:"gc-pi"},[n,u("p",{class:"gc-pi-h",text:r.copy.hint}),t]),p.form.insertBefore(u("label",{class:"gc-f"},[u("span",{text:r.copy.label}),e]),p.before),p.form.insertBefore(s,p.before);var f=a.GGSX_CHECKOUT;f.lineExtra=function(e){return c[e.id]?r.copy.lineTag+d(c[e.id],1):""},f.extras=[{label:"If unavailable",key:r.t.subs}]}),o.addEventListener("ggsx-checkout-open",function(e){var n;n=e.detail.lines,t&&(t.innerHTML="",n.forEach(function(e){var n=u("select",{},[u("option",{value:"",text:r.copy.def})].concat(r.rules.map(function(e){return u("option",{value:e[0],text:e[1]})})));n.value=c[e.id]||"",n.addEventListener("change",function(){n.value?c[e.id]=n.value:delete c[e.id]}),t.appendChild(u("label",{class:"gc-pi-r"},[u("span",{text:e.n+" × "+e.name+(e.size?" "+e.size:"")}),n]))}))}),o.addEventListener("ggsx-checkout-submit",function(e){var t=e.detail,n=t.fields,s=t.keys;n[r.t.subs]=d(l);var o,a={v:1,t:Date.now(),r:l,c:{f:n[s.first],l:n[s.last],e:n[s.email],p:n[s.phone],a:n[s.address],s:n[s.side],d:n[s.date],w:n[s.win],n:n[s.notes]},i:t.lines.map(function(e){return[e.name,e.size||"",e.n,+e.price||0,c[e.id]||""]})};n[r.t.sheet]=r.sheetUrl+(o=a,btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,""))}),o.addEventListener("ggsx-checkout-sent",function(){g(i,{rule:l}),c={}});var f=null;function v(){var e=/^#run\/([A-Za-z0-9_-]+)/.exec(location.hash);if(e){var t,n;try{n=e[1],t=JSON.parse(decodeURIComponent(escape(atob(n.replace(/-/g,"+").replace(/_/g,"/")))))}catch(e){t=null}b(t,"ggsx_run_"+e[1].length+"_"+e[1].slice(-24))}else f&&(f.wrap.classList.remove("open"),o.documentElement.classList.remove("gr-lock"))}function b(e,t){f&&f.wrap.remove();var n=r.copy,s=h(t)||{s:{},n:{},p:{}},i=u("div",{class:"gr-wrap open"});if(f={wrap:i},o.documentElement.classList.add("gr-lock"),!e||!e.i)return i.appendChild(u("div",{class:"gr-card",text:"This run-sheet link is damaged or incomplete. Open the order in Forms & Submissions instead."})),void o.body.appendChild(i);var c=e.c||{},l=e.i,v=String(c.p||"").replace(/\D/g,""),m=((c.f||"")+" "+(c.l||"")).trim(),x=u("div",{class:"gr-prog"}),y=u("i"),w=u("div",{class:"gr-list"});function k(e){return s.s[e]||""}function C(){var e=0;l.forEach(function(t,n){k(n)&&e++}),x.textContent=e+n.prog+l.length+n.done,y.style.width=Math.round(100*e/l.length)+"%"}l.forEach(function(e,o){w.appendChild(function(e,o){var a=e[4]?u("span",{class:"gr-badge "+e[4],text:n.rule+d(e[4],1)}):null,i=u("div",{class:"gr-sub"}),c=u("input",{type:"text",placeholder:n.subName,value:s.n[o]||""}),l=u("input",{type:"number",step:"0.01",inputmode:"decimal",placeholder:n.subPrice,value:s.p[o]||""});c.addEventListener("input",function(){s.n[o]=c.value,g(t,s)}),l.addEventListener("input",function(){s.p[o]=l.value,g(t,s)}),i.appendChild(c),i.appendChild(l);var h=["got","sub","out"].map(function(e){return u("button",{type:"button",class:"gr-b "+e+(k(o)===e?" on":""),text:n[e],onclick:function(){s.s[o]=k(o)===e?"":e,g(t,s),f.className="gr-item"+(k(o)?" "+k(o):""),h.forEach(function(e,t){e.classList.toggle("on",k(o)===["got","sub","out"][t])}),C()}})}),f=u("div",{class:"gr-item"+(k(o)?" "+k(o):"")},[u("div",{class:"gr-it-h"},[u("div",{class:"gr-it-n"},[u("b",{text:e[2]+" × "}),e[0]+(e[1]?" "+e[1]:"")]),u("div",{class:"gr-it-p",text:p(e[2]*e[3])})]),a,u("div",{class:"gr-st"},h),i,u("a",{class:"gr-link",href:r.shopUrl+encodeURIComponent(e[0].split(" ").slice(0,3).join(" ")),target:"_blank",rel:"noopener",text:n.search+" ↗"})]);return f}(e,o))}),C();var E=u("textarea",{rows:"9"}),S=u("div",{class:"gr-panel",onclick:function(e){e.target===S&&S.classList.remove("open")}},[u("div",{class:"gr-panel-c"},[u("div",{class:"gr-panel-h"},[u("b"),u("button",{type:"button",class:"gr-x","aria-label":n.close,text:"×",onclick:function(){S.classList.remove("open")}})]),E,u("div",{class:"gr-panel-b"},[u("button",{type:"button",class:"gr-btn",text:n.openWa,onclick:function(){a.open("https://wa.me/"+v+"?text="+encodeURIComponent(E.value),"_blank")}}),u("button",{type:"button",class:"gr-btn sec",text:n.copy,onclick:function(e){var t=e.currentTarget;try{navigator.clipboard.writeText(E.value).then(function(){t.textContent=n.copied,setTimeout(function(){t.textContent=n.copy},1500)})}catch(e){E.select()}}})])])]);function L(e,t){S.querySelector("b").textContent=e,E.value=t,S.classList.add("open")}var _=[];v&&_.push(u("div",{},[u("a",{href:"tel:+"+v,text:"+"+v})," · ",u("a",{href:"https://wa.me/"+v,target:"_blank",rel:"noopener",text:"WhatsApp"})])),_.push(u("div",{text:(c.a||"")+(c.s?" · "+c.s:"")})),_.push(u("div",{text:(c.d||"")+(c.w?" · "+c.w:"")})),c.n&&_.push(u("div",{text:"Notes: "+c.n})),_.push(u("div",{class:"gr-badge "+(e.r||"sub"),text:n.rule+d(e.r||"sub",1)}));var I=0;l.forEach(function(e){I+=e[2]*e[3]}),i.appendChild(u("div",{class:"gr-top"},[u("b",{text:n.sheet}),u("button",{type:"button",class:"gr-x",text:"×","aria-label":n.close,onclick:function(){location.hash=""}})])),i.appendChild(u("div",{class:"gr-body"},[u("div",{class:"gr-card"},[u("h2",{text:m||"Customer"})].concat(_)),u("div",{class:"gr-card gr-pw"},[x,u("div",{class:"gr-bar"},[y]),u("small",{text:l.length+" items · "+p(I)+" at GrocerGoSx prices"})]),w,u("button",{type:"button",class:"gr-link gr-reset",text:n.reset,onclick:function(){confirm("Clear all ticks for this order?")&&(g(t,s={s:{},n:{},p:{}}),b(e,t))}})])),i.appendChild(u("div",{class:"gr-foot"},[u("button",{type:"button",class:"gr-btn",text:n.wa,onclick:function(){var t,o;L(n.wa,(t=["Hi "+(c.f||"")+", GrocerGoSx here. We're shopping your order now."],o=[],l.forEach(function(t,n){var a=k(n),r=t[0]+(t[1]?" "+t[1]:"");"sub"===a&&o.push("• "+r+" isn't available — we can get "+(s.n[n]||"the closest match")+(s.p[n]?" at "+p(+s.p[n]):"")+" instead."),"out"===a&&o.push("• "+r+" isn't available"+("skip"===t[4]?" — we'll skip it as you asked.":"skip"===e.r?" — we'll leave it out.":" and we couldn't find a good match."))}),o.length?(t.push(""),(t=t.concat(o)).push(""),t.push("Reply OK to confirm, or tell us what you'd prefer.")):t.push("Everything on your list is available — we'll be on our way for "+(c.d||"")+(c.w?" · "+c.w:"")+"."),t.join("\n")))}}),u("button",{type:"button",class:"gr-btn sec",text:n.sum,onclick:function(){L(n.sum,function(){var e=[],t=[],n=[];l.forEach(function(o,a){var r=k(a),i=o[2]+" × "+o[0]+(o[1]?" "+o[1]:"");"sub"===r?t.push("• "+i+" → "+(s.n[a]||"substitute")+(s.p[a]?" ("+p(+s.p[a])+")":"")):"out"===r?n.push("• "+i):"got"===r&&e.push("• "+i)});var o=["Shopped for "+m+" — "+(c.d||"")+(c.w?" · "+c.w:""),"Got ("+e.length+"): "].concat(e);return t.length&&(o=o.concat(["","Substituted ("+t.length+"):"],t)),n.length&&(o=o.concat(["","Out of stock / skipped ("+n.length+"):"],n)),o.join("\n")}())}})])),i.appendChild(S),o.body.appendChild(i),a.scrollTo(0,0)}a.addEventListener("hashchange",v),o.body?v():o.addEventListener("DOMContentLoaded",v)}();
} catch (e) { try { console.warn('[GGSX bundle] Shop 4 Substitutions & Run Sheet', e); } catch (e2) {} }
__ggsxE("d723d7fb-fe4b-4005-9965-840934612316#0");

/* ===== GrocerGoSx Shop 5 Restaurants & Pharmacy (a3dd8d4c-c7ca-4fbd-b996-3daf19a19c07, rev 14) ===== */
__ggsxCss("", "\n.gm-tabs{display:flex;gap:16px;flex-wrap:wrap;margin:0 0 12px}\n#ggsx-shop .gm-tab{border:0;border-bottom:3px solid transparent;background:none;padding:4px 0 6px;font-family:Benzin,sans-serif;font-size:22px;font-weight:700;color:#8f8a84;line-height:1.2}\n#ggsx-shop .gm-tab.on{color:var(--ink);border-color:var(--o)}\n.gm-panel{margin:0 0 24px}\n.gm-vendors{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px}\n#ggsx-shop .gm-vendor{display:flex;align-items:center;gap:14px;text-align:left;background:#fff;border:1.5px solid var(--line);border-radius:16px;padding:12px 16px 12px 12px}\n.gm-vt{display:flex;flex-direction:column;gap:3px;min-width:0}\n.gm-logo{flex:none;display:flex;align-items:center;justify-content:center;width:60px;height:60px;border-radius:14px;background:#fff1ea;color:#F4551B;overflow:hidden}\n.gm-logo b{font-family:Benzin,sans-serif;font-size:24px}\n.gm-logo img{width:100%;height:100%;object-fit:contain;background:#fff}\n#ggsx-shop .gm-vendor:hover{border-color:var(--o)}\n.gm-vn{font-family:Benzin,sans-serif;font-size:17px;font-weight:700}\n.gm-vendor small,.gm-loading{color:var(--mute);font-size:13px}\n.gm-card{background:#fff;border:1.5px solid var(--line);border-radius:16px;padding:16px;max-width:560px}\n.gm-card h3{font-size:18px;margin:0 0 6px}\n#ggsx-shop .gm-card textarea{width:100%;font:inherit;font-size:16px;border:1.5px solid #cfc9c1;border-radius:12px;padding:11px 12px;resize:vertical;margin:4px 0 10px;-webkit-appearance:none}\n.gm-check{display:flex;gap:10px;align-items:flex-start;font-size:14px;margin:0 0 12px;cursor:pointer}\n.gm-check input{width:20px;height:20px;margin:0;flex:none;accent-color:#F4551B}\n#ggsx-shop .gm-btn{width:auto;min-width:160px;margin:0}\n.gm-msg{display:block;color:#1e7a3a;font-size:13px;font-weight:700;margin:0 0 8px}\n.gm-msg:empty{display:none}\n.gm-fee{display:block;color:var(--mute);font-size:12px;margin-top:10px}\n@media (max-width:860px){\n#ggsx-shop .gm-tab{font-size:19px}\n.gm-vendors{grid-template-columns:1fr}\n}\n.gp-lead:empty,.gm-panel>p.gs-muted:empty{display:none}\n");
__ggsxB("a3dd8d4c-c7ca-4fbd-b996-3daf19a19c07#0");
try {
!function(){var e=document,t=window,n=t.GGSX_SHOP||{},r=t.GGSX_MORE={sheetId:n.sheetId||"1-h6W54Wbscz_5zMAVU0myRr0PCYoVW_sJZo4XWe2MXE",tabs:{vendors:"Vendors",items:"Items",options:"Options",settings:"Settings"},path:(n.path||"/shop-now").replace(/\/+$/,""),copy:{popular:"Popular",restaurants:"Restaurants",pharmacy:"Pharmacy",restLead:"",noRest:"No restaurants are taking orders right now.",pickup:" delivery/waiting time",pickupLine:" Delivery/Waiting time",handling:"Restaurant orders, {p}% handling",added:"Added",pharmTitle:"Pharmacy run",pharmLead:"Tell us what you need and we pick it up from the pharmacy with your run.",pharmPh:"e.g. Panadol Extra 24 tablets, Zyrtec 10 mg × 10, children's Nurofen…",rx:"I have a prescription (we collect it, or send a photo on WhatsApp)",pharmAdd:"Add to basket",pharmLine:"Pharmacy: ",pharmSize:"priced from the pharmacy receipt",rxTag:" · prescription",pharmNote:"Pharmacy and errand items are passed on at what we paid, plus the {{run_rate}} service fee.",stopFee:"Pharmacy stop",stopNote:" when it rides on a grocery or restaurant run; on its own, the {{run_rate}} service fee ({{fee_min_short}})",stopNote2:", {{delivery_short}}.",pharmEmpty:"Tell us what you need first.",fail:"Couldn't load the menus. Please refresh."}},a="ggsx_more_cache",o=null;function s(t,n,r){var a,o=e.createElement(t);if(n)for(a in n)null!=n[a]&&("class"===a?o.className=n[a]:"text"===a?o.textContent=n[a]:"on"===a.slice(0,2)?o.addEventListener(a.slice(2),n[a]):o.setAttribute(a,n[a]));return(r||[]).forEach(function(t){t&&o.appendChild("string"==typeof t?e.createTextNode(t):t)}),o}function i(e){return"$"+(Math.round(100*e)/100).toFixed(2)}function c(e){var t=parseFloat(String(null==e?"":e).replace(/[^0-9.\-]/g,""));return isNaN(t)?0:t}function u(e){return/^(true|yes|y|1|x|✓|✔)$/i.test(String(null==e?"":e).trim())}function l(e){var t="https://docs.google.com/spreadsheets/d/"+r.sheetId+"/gviz/tq?tqx=out:json&headers=1&sheet="+encodeURIComponent(e)+"&t="+Math.floor(Date.now()/6e4);return fetch(t,{cache:"no-store"}).then(function(t){if(!t.ok)throw new Error(e);return t.text()}).then(function(e){var t=JSON.parse(e.slice(e.indexOf("{"),e.lastIndexOf("}")+1)).table,n=t.cols.map(function(e){return String(e.label||"").trim().toLowerCase()});return t.rows.map(function(e){var t={};return n.forEach(function(n,r){var a=e.c[r];t[n]=a&&null!=a.v?String(a.v).trim():""}),t})})}function p(){if(o)return Promise.resolve(o);try{var e=JSON.parse(sessionStorage.getItem(a)||"null");if(e&&e.t&&Date.now()-e.t<6e5&&e.d)return o=e.d,Promise.resolve(o)}catch(e){}var t=r.tabs,n=function(){return[]};return Promise.all([l(t.vendors),l(t.items),l(t.options).catch(n),l(t.settings).catch(n)]).then(function(e){var t={};e[3].forEach(function(e){e.key&&(t[e.key]=e.value)}),o={vendors:e[0].filter(function(e){return e.vendor_id&&e.name&&u(e.active)&&(!e.type||/restaurant/i.test(e.type))}),items:e[1].filter(function(e){return e.vendor_id&&e.item&&u(e.active)}),options:e[2].filter(function(e){return e.vendor_id&&e.option&&u(e.active)}),set:t};try{sessionStorage.setItem(a,JSON.stringify({t:Date.now(),d:o}))}catch(e){}return o})}function d(e,t){var v=o&&o.set?o.set[e]:"";return null==v||""===String(v).trim()||isNaN(parseFloat(v))?t:c(v)/(/%/.test(v)?100:1)}function h(e){return c(e&&e.pickup_fee_override)||d("restaurant_pickup_fee",20)}function m(e,t){if(!e)return"";var n=/static\.wixstatic\.com\/media\/([^\/?#]+)/.exec(e);if(n)return"https://static.wixstatic.com/media/"+n[1]+"/v1/fit/w_"+t+",h_"+t+",q_80,enc_auto/"+n[1];var r=/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:.*&)?id=)([\w-]+)/.exec(e);return r?"https://lh3.googleusercontent.com/d/"+r[1]+"=w"+t:e}function f(e,t){var n=s("span",{class:"gm-logo","aria-hidden":"true"}),r=m(e.logo,t||160);function a(){n.innerHTML="",n.appendChild(s("b",{text:(e.name||"?").charAt(0).toUpperCase()}))}if(r){var o=s("img",{src:r,alt:"",loading:"lazy"});o.addEventListener("error",a),n.appendChild(o)}else a();return n}function g(){try{var e=JSON.parse(localStorage.getItem("ggsx_basket")||"null");return e&&e.items?Object.keys(e.items).map(function(t){return e.items[t]}):[]}catch(e){return[]}}function v(e,n){var r=t.GGSX_SHOP_API;if(!r)return!1;var a=0;return g().forEach(function(t){t.id===e.id&&(a=t.n)}),r.add(e,a+n),!0}function y(e){var t=[],n={},a=!1,s=!1,l=0,p=[];(e||[]).forEach(function(e){var t=/^rest:([^:]+):/.exec(e.id||"");t?(n[t[1]]||(n[t[1]]=1,p.push(t[1])),l+=(e.n||0)*(+e.price||0)):/^pharm:/.test(e.id||"")?a=!0:s=!0});p.forEach(function(e,n){var a=(o&&o.vendors||[]).filter(function(t){return t.vendor_id===e})[0];(s||n>0)&&t.push({label:(a?a.name:e)+(r.copy.pickupLine||r.copy.pickup),amount:h(a)})});var u=d("pass_through_rate",0);return l>0&&u>0&&t.push({label:r.copy.handling.replace("{p}",Math.round(100*u)),amount:Math.round(100*l*u)/100}),a&&(s||p.length)&&t.push({label:r.copy.stopFee,amount:d("errand_stop_fee",20)}),t}function x(){t.GGSX_CHECKOUT&&(t.GGSX_CHECKOUT.extraFees=y)}function b(){var e=/^#(restaurants|pharmacy)(?:\/([^\/]+))?/.exec(location.hash);return e?{k:e[1],v:e[2]?decodeURIComponent(e[2]):""}:{k:"popular",v:""}}function k(){var t=e.getElementById("ggsx-shop"),a=t&&t.querySelector(".gs-main");if(a&&!a.querySelector(".gs-crumb")&&!a.querySelector(".gm-tabs")&&a.querySelector(".gs-depts")){var o,c=a.querySelectorAll(".gs-h2"),u=null,l=null,m=r.copy,g=b();for(o=0;o<c.length;o++)c[o].textContent.trim()===(n.copy&&n.copy.popular||m.popular)&&(l=(u=c[o]).nextElementSibling);var y=s("div",{class:"gm-tabs"},[["popular",m.popular,""],["restaurants",m.restaurants,"#restaurants"],["pharmacy",m.pharmacy,"#pharmacy"]].map(function(e){return"popular"!==e[0]||u?s("button",{type:"button",class:"gm-tab"+(g.k===e[0]?" on":""),text:e[1],onclick:function(){g.k!==e[0]&&(location.hash=e[2])}}):null})),x=s("div",{class:"gm-panel"}),k=u||c[0];if(a.insertBefore(y,k),a.insertBefore(x,u?l:k),u&&u.remove(),"popular"!==g.k)if(l&&(l.style.display="none"),"pharmacy"!==g.k){x.appendChild(s("p",{class:"gs-muted",text:m.restLead}));var _=s("div",{class:"gm-vendors"},[s("div",{class:"gm-loading",text:"Loading…"})]);x.appendChild(_),p().then(function(e){_.innerHTML="",e.vendors.length||_.appendChild(s("p",{class:"gs-muted",text:m.noRest})),e.vendors.forEach(function(t){var n=e.items.filter(function(e){return e.vendor_id===t.vendor_id}).length;_.appendChild(s("button",{type:"button",class:"gm-vendor",onclick:function(){location.hash="#restaurants/"+encodeURIComponent(t.vendor_id)}},[f(t,160),s("span",{class:"gm-vt"},[s("span",{class:"gm-vn",text:t.name}),s("small",{text:[t.side?t.side+" side":"",t.area,n+" items"].filter(Boolean).join(" · ")})])]))})}).catch(function(){_.innerHTML="",_.appendChild(s("p",{class:"gs-muted",text:m.fail}))})}else!function(e){var t=r.copy,n=s("textarea",{rows:"3",placeholder:t.pharmPh}),a=s("input",{type:"checkbox"}),o=s("div",{class:"gm-msg"}),c=s("small",{class:"gm-fee",text:t.pharmNote});e.appendChild(s("div",{class:"gm-card"},[s("h3",{text:t.pharmTitle}),s("p",{class:"gs-muted",text:t.pharmLead}),n,s("label",{class:"gm-check"},[a,t.rx]),o,s("button",{type:"button",class:"gs-btn gm-btn",text:t.pharmAdd,onclick:function(){var e=n.value.trim();if(!e)return o.textContent=t.pharmEmpty,void n.focus();v({id:"pharm:"+Date.now().toString(36),name:t.pharmLine+e,size:t.pharmSize+(a.checked?t.rxTag:""),price:0,img:"",stock:!0},1)?(n.value="",a.checked=!1,o.textContent=t.added+" · "+e):o.textContent=t.fail}}),c])),p().then(function(e){c.textContent=(e.set.pharmacy_note||t.pharmNote)+" "+i(d("errand_stop_fee",20))+" "+t.stopFee.toLowerCase()+t.stopNote+t.stopNote2})}(x);else x.style.display="none"}}function _(){var e=b();"restaurants"===e.k&&e.v?r.openMenu&&r.openMenu(e.v):r.closeMenu&&r.closeMenu()}x(),e.addEventListener("ggsx-checkout-build",x),g().some(function(e){return/^(rest|pharm):/.test(e.id||"")})&&p().catch(function(){}),r.h=s,r.money=i,r.num=c,r.truthy=u,r.slug=function(e){return String(e||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")},r.load=p,r.add=v,r.setting=d,r.pickupFee=h,r.logo=f,r.img=m,r.onHash=_;var w=!1;new MutationObserver(function(){w||(w=!0,(t.requestAnimationFrame||setTimeout)(function(){w=!1,location.pathname.replace(/\/+$/,"")===r.path&&k()}))}).observe(e.documentElement,{childList:!0,subtree:!0}),t.addEventListener("hashchange",_),k(),_()}();
} catch (e) { try { console.warn('[GGSX bundle] Shop 5 Restaurants & Pharmacy', e); } catch (e2) {} }
__ggsxE("a3dd8d4c-c7ca-4fbd-b996-3daf19a19c07#0");

/* ===== GrocerGoSx Shop 6 Restaurant Menu (3e128c01-ce59-4979-a01f-2ca68d54a005, rev 4) ===== */
__ggsxCss("", "\nhtml.gm-lock,html.gm-lock body{overflow:hidden!important}\n.gm-sheet{position:fixed;inset:0;z-index:9300;background:rgba(27,27,27,.55);display:flex;align-items:center;justify-content:center;padding:24px 16px;font-family:\"Avenir Light\",avenir-lt-w01_35-light1475496,Avenir,\"Helvetica Neue\",Arial,sans-serif;color:#1b1b1b;font-size:15px;line-height:1.4}\n.gm-sheet *{box-sizing:border-box}\n.gm-box{display:flex;flex-direction:column;width:100%;max-width:640px;max-height:92vh;background:#fff;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,.25);overflow:hidden}\n.gm-head{display:flex;align-items:center;gap:12px;padding:16px 20px 12px;border-bottom:1px solid #efeae3}\n.gm-ht{flex:1;min-width:0}\n.gm-head .gm-logo{width:48px;height:48px;border-radius:12px}\n.gm-head .gm-logo b{font-size:20px}\n.gm-head h3,.gm-body h4{font-family:Benzin,sans-serif;font-weight:700;margin:0}\n.gm-head h3{font-size:22px}\n.gm-head small,.gm-it small{display:block;color:#6b6b6b;font-size:12px;line-height:1.35;margin-top:2px}\n.gm-x{flex:none;width:40px;height:40px;border:0;border-radius:50%;background:#f3efe9;color:#1b1b1b;font-size:26px;line-height:40px;cursor:pointer;padding:0}\n.gm-body{flex:1;overflow:auto;-webkit-overflow-scrolling:touch;padding:6px 20px 12px}\n.gm-body h4{font-size:15px;color:#F4551B;margin:16px 0 4px}\n.gm-item{border-bottom:1px solid #efeae3;padding:10px 0}\n.gm-it{display:flex;gap:12px;align-items:flex-start;justify-content:space-between}\n.gm-in{font-weight:700}\n.gm-ir{display:flex;align-items:center;gap:10px;flex:none}\n.gm-sheet button{font:inherit;cursor:pointer}\n.gm-sheet .gs-add{height:36px;padding:0 14px;border-radius:999px;border:1.5px solid #F4551B;background:#fff;color:#F4551B;font-weight:700;font-size:14px}\n.gm-sheet .gm-qty{display:inline-flex;align-items:center;border:1.5px solid #F4551B;border-radius:999px;background:#fff;height:36px}\n.gm-sheet .gm-qty button{width:34px;height:100%;border:0;background:none;color:#F4551B;font-size:20px;line-height:1;padding:0}\n.gm-sheet .gm-qty .gs-n{min-width:22px;text-align:center;font-weight:700}\n.gm-opts{background:#f6f3ee;border-radius:14px;padding:10px 12px 12px;margin-top:10px}\n.gm-group{margin:6px 0 8px}\n.gm-group b{display:block;font-size:13px;margin-bottom:6px}\n.gm-group input{width:100%;font:inherit;border:1.5px solid #cfc9c1;border-radius:10px;padding:9px 10px;background:#fff;-webkit-appearance:none}\n.gm-chips{display:flex;flex-wrap:wrap;gap:6px}\n.gm-chip{border:1.5px solid #cfc9c1;background:#fff;border-radius:999px;padding:7px 12px;font-size:13px;line-height:1.2;color:#1b1b1b}\n.gm-chip.on{background:#F4551B;border-color:#F4551B;color:#fff;font-weight:700}\n.gm-addrow{display:flex;align-items:center;gap:12px;margin-top:4px}\n.gm-addrow .gs-step{display:inline-flex;align-items:center;border:1.5px solid #F4551B;border-radius:999px;background:#fff;height:38px}\n.gm-addrow .gs-step button{width:36px;height:100%;border:0;background:none;color:#F4551B;font-size:20px;line-height:1;padding:0}\n.gm-addrow .gs-n{min-width:24px;text-align:center;font-weight:700}\n.gm-sheet .gm-btn{flex:1;min-height:44px;padding:0 18px;border-radius:999px;border:0;background:#F4551B;color:#fff;font-weight:700}\n.gm-sheet .gm-msg{font-size:12px;margin:3px 0 0}\n.gm-foot{display:flex;padding:12px 20px calc(12px + env(safe-area-inset-bottom,0));border-top:1px solid #efeae3}\n@media (max-width:860px){\n.gm-sheet{padding:0;align-items:flex-end}\n.gm-box{max-width:none;border-radius:20px 20px 0 0}\n}\n");
__ggsxB("3e128c01-ce59-4979-a01f-2ca68d54a005#0");
try {
!function(){var t=document,n=window.GGSX_MORE;if(n){var e=n.h,o=n.money,i=n.num,a=n.truthy,s=n.slug,c=null,l=n.copy.menu={menuEmpty:"Menu coming soon.",customize:"Customize",hide:"Hide",add:"Add",addFor:"Add · ",added:"Added",done:"Done · View basket",note:"Special requests",notePh:"No onions, extra napkins…",required:"Please choose: "};n.openMenu=function(d){c&&c.getAttribute("data-v")===d||function(d){n.load().then(function(u){var m=u.vendors.filter(function(t){return t.vendor_id===d})[0];if(m){r();var p=u.items.filter(function(t){return t.vendor_id===d}),f=[],h={},v=e("div",{class:"gm-body"});p.forEach(function(t){var n=t.section||"Menu";h[n]||(h[n]=[],f.push(n)),h[n].push(t)}),p.length||v.appendChild(e("p",{text:l.menuEmpty})),f.forEach(function(t){v.appendChild(e("h4",{text:t})),h[t].forEach(function(t){v.appendChild(function(t,c,r){var d,u,m=function(t,n,e){var o=[],s={};return t.options.forEach(function(t){if(t.vendor_id===n.vendor_id){var c=(t.applies_to||"").toLowerCase();if(!c||c===(e.section||"").toLowerCase()||c===e.item.toLowerCase()){var l=t.group||"Options";s[l]||(s[l]={name:l,many:/many|multi/i.test(t.select||""),req:a(t.required),opts:[]},o.push(s[l])),s[l].opts.push({name:t.option,price:i(t.price)})}}}),o}(t,c,r),p=i(r.price),f=1,h="",v={},g=null,x=e("span",{class:"gm-msg"});function b(){var t=p;return m.forEach(function(n){(v[n.name]||[]).forEach(function(e){var o=n.opts.filter(function(t){return t.name===e})[0];o&&(t+=o.price)})}),t}function y(){d&&(d.textContent=l.addFor+o(b()*f))}function C(){var t=m.filter(function(t){return t.req&&!(v[t.name]||[]).length})[0];if(t)x.textContent=l.required+t.name;else{var e=m.map(function(t){return(v[t.name]||[]).join(", ")}).filter(Boolean).concat(h?[h]:[]).join(" · "),i="rest:"+c.vendor_id+":"+s(r.item)+(e?":"+s(e).slice(0,60):"");n.add({id:i,name:r.item+" ("+c.name+")",size:e,price:b(),img:"",stock:!0},f)&&(x.textContent=l.added+" · "+f+" × "+o(b()),g&&k())}}function k(){if(g)return g.remove(),g=null,d=null,f=1,h="",void(E.textContent=l.customize);if(m.length){E.textContent=l.hide,g=e("div",{class:"gm-opts"}),m.forEach(function(t){var n=e("div",{class:"gm-chips"});t.opts.forEach(function(i){n.appendChild(e("button",{type:"button",class:"gm-chip"+((v[t.name]||[]).indexOf(i.name)>=0?" on":""),text:i.name+(i.price?" +"+o(i.price):""),onclick:function(){var e=v[t.name]||[],o=e.indexOf(i.name);t.many?(o>=0?e.splice(o,1):e.push(i.name),v[t.name]=e):v[t.name]=o>=0&&!t.req?[]:[i.name],[].forEach.call(n.children,function(n,e){n.classList.toggle("on",(v[t.name]||[]).indexOf(t.opts[e].name)>=0)}),y()}}))}),g.appendChild(e("div",{class:"gm-group"},[e("b",{text:t.name+(t.req?" *":"")}),n]))});var t=e("input",{type:"text",placeholder:l.notePh,oninput:function(){h=t.value.trim()}}),n=e("span",{class:"gs-n",text:"1"});d=e("span"),g.appendChild(e("div",{class:"gm-group"},[e("b",{text:l.note}),t])),g.appendChild(e("div",{class:"gm-addrow"},[e("div",{class:"gs-step"},[e("button",{type:"button",text:"−",onclick:function(){f=Math.max(1,f-1),n.textContent=f,y()}}),n,e("button",{type:"button",text:"+",onclick:function(){f=Math.min(20,f+1),n.textContent=f,y()}})]),e("button",{type:"button",class:"gm-btn",onclick:C},[d])])),y(),u.appendChild(g)}else C()}m.forEach(function(t){t.many||!t.opts.length||t.opts[0].price||(v[t.name]=[t.opts[0].name])});var E=e("button",{type:"button",class:"gs-add",text:m.length?l.customize:l.add,onclick:k});return u=e("div",{class:"gm-item"},[e("div",{class:"gm-it"},[e("div",{},[e("div",{class:"gm-in",text:r.item}),r.note?e("small",{text:r.note}):null,x]),e("div",{class:"gm-ir"},[e("b",{text:o(p)}),m.length?E:Qy({id:"rest:"+c.vendor_id+":"+s(r.item),name:r.item+" ("+c.name+")",size:"",price:p,img:"",stock:!0},l.add)])])])}(u,m,t))})}),c=e("div",{class:"gm-sheet","data-v":d,onclick:function(t){t.target===c&&(location.hash="#restaurants")}},[e("div",{class:"gm-box",role:"dialog","aria-modal":"true","aria-label":m.name},[e("div",{class:"gm-head"},[n.logo?n.logo(m,120):null,e("div",{class:"gm-ht"},[e("h3",{text:m.name}),e("small",{text:[m.side?m.side+" side":"",m.area].filter(Boolean).join(" · ")})]),e("button",{type:"button",class:"gm-x","aria-label":"Close",text:"×",onclick:function(){location.hash="#restaurants"}})]),v,e("div",{class:"gm-foot"},[e("button",{type:"button",class:"gm-btn",text:l.done,onclick:function(){location.hash="#basket"}})])])]),t.body.appendChild(c),t.documentElement.classList.add("gm-lock")}})}(d)},n.closeMenu=r,t.addEventListener("keydown",function(t){"Escape"===t.key&&c&&(location.hash="#restaurants")}),n.onHash()}function Qy(it,lab){var W=window,S=t.createElement("span"),A=t.createElement("button"),st=t.createElement("span"),N=t.createElement("span"),mi=t.createElement("button"),pl=t.createElement("button");S.className="gm-qw";A.type=mi.type=pl.type="button";A.className="gs-add";A.textContent=lab;st.className="gm-qty";N.className="gs-n";mi.textContent="\u2212";pl.textContent="+";mi.setAttribute("aria-label","Fewer");pl.setAttribute("aria-label","More");function cur(){try{var b=JSON.parse(localStorage.getItem("ggsx_basket")||"null"),x=b&&b.items&&b.items[it.id];return x&&+x.n>0?+x.n:0}catch(e){return 0}}function paint(){if(S.__on&&!S.isConnected){W.removeEventListener("ggsx-basket",paint);return}var q=cur();N.textContent=String(q);A.style.display=q?"none":"";st.style.display=q?"":"none"}function set(q){var G=W.GGSX_SHOP_API;G&&G.add&&G.add(it,Math.max(0,Math.min(20,q)));paint()}A.onclick=function(){set(cur()+1)};mi.onclick=function(){set(cur()-1)};pl.onclick=function(){set(cur()+1)};st.appendChild(mi);st.appendChild(N);st.appendChild(pl);S.appendChild(A);S.appendChild(st);paint();S.__on=1;W.addEventListener("ggsx-basket",paint);return S}function r(){c&&(c.remove(),c=null,t.documentElement.classList.remove("gm-lock"))}}();
} catch (e) { try { console.warn('[GGSX bundle] Shop 6 Restaurant Menu', e); } catch (e2) {} }
__ggsxE("3e128c01-ce59-4979-a01f-2ca68d54a005#0");

/* ===== GrocerGoSx Home 1 Config & Style (66348b98-2e16-404f-ba13-5a9f89505ed0, rev 4) ===== */
__ggsxCss("", "\n#ggsx-home{--o:#F4551B;--bg:#f6f3ee;--ink:#1b1b1b;--mute:#6b6b6b;--line:#e9e4dd;--c:#F4551B;box-sizing:border-box;width:100%;min-height:100vh;color:var(--ink);background:var(--bg);font-family:\"Avenir Light\",avenir-lt-w01_35-light1475496,Avenir,\"Helvetica Neue\",Arial,sans-serif;font-size:15px;line-height:1.45;text-align:left;padding:0 0 40px;overflow-x:hidden}\n#ggsx-home *,#ggsx-home :before,#ggsx-home :after{box-sizing:border-box}\n:where(#ggsx-home) a{color:inherit;text-decoration:none}\n:where(#ggsx-home) button{font:inherit;color:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent}\n#ggsx-home img{display:block;max-width:100%}\n:where(#ggsx-home) h2,:where(#ggsx-home) h3{font-family:Benzin,sans-serif;margin:0;line-height:1.15;color:inherit;font-weight:700;font-size:21px}\n:where(#ggsx-home) p{margin:0}\n.gh-wrap{max-width:1240px;margin:0 auto;padding:0 16px}\n.gh-loading,.gh-err{padding:40px 16px;text-align:center;color:var(--mute)}\n.gh-top{position:relative;background-color:var(--c);transition:background-color .6s;padding:14px 0 0}\n.gh-top:after{content:\"\";position:absolute;left:0;right:0;bottom:0;height:46%;background:linear-gradient(rgba(246,243,238,0),var(--bg))}\n.gh-top>*{position:relative;z-index:1}\n.gh-top>.gh-wrap{z-index:3}\n.gh-search{position:relative;display:flex;align-items:center;background:#fff;border-radius:14px;box-shadow:0 2px 10px rgba(0,0,0,.16);height:48px;padding:0 4px 0 14px}\n.gh-search input{flex:1;min-width:0;border:0;background:none;font:inherit;font-size:16px;height:44px;outline:0;color:var(--ink);-webkit-appearance:none}\n.gh-search input::-webkit-search-cancel-button{-webkit-appearance:none}\n.gh-search button{border:0;background:none;width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;color:#444;flex:none}\n.gh-search button:hover{background:#f1ede7}\n#ggsx-home svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\n.gh-mic.on{color:#d32f2f;animation:ghp 1s infinite}\n@keyframes ghp{50%{opacity:.35}}\n.gh-sugg{position:absolute;left:0;right:0;top:52px;background:#fff;border-radius:14px;box-shadow:0 12px 32px rgba(0,0,0,.2);z-index:6;overflow:hidden;display:none;text-align:left}\n.gh-sugg.show{display:block}\n.gh-sg{display:flex;align-items:center;gap:10px;padding:8px 12px;border-top:1px solid var(--line)}\n.gh-sg:first-child{border:0}\n.gh-sg img{width:40px;height:40px;object-fit:contain;flex:none}\n.gh-sn{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-size:14px}\n.gh-sg b{flex:none;font-size:14px}\n.gh-sall{padding:11px 12px;font-weight:700;color:var(--o);border-top:1px solid var(--line);cursor:pointer;font-size:14px}\n.gh-chips{display:flex;gap:8px;overflow-x:auto;padding:12px 0 2px;scrollbar-width:none;-webkit-overflow-scrolling:touch}\n.gh-chips::-webkit-scrollbar,.gh-heros::-webkit-scrollbar,.gh-rail::-webkit-scrollbar{display:none}\n.gh-chip{flex:none;padding:9px 14px;border-radius:12px;background:var(--c);color:#fff;font-weight:700;font-size:14px;line-height:1;white-space:nowrap;box-shadow:0 1px 3px rgba(0,0,0,.18);border:1.5px solid rgba(255,255,255,.6)}\n.gh-chip.lt{color:var(--ink);border-color:#e4ddd4}\n.gh-tag{display:block;color:#fff;opacity:.9;font-size:12px;padding:8px 2px 0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.gh-rw{position:relative}\n.gh-heros,.gh-rail{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;-webkit-overflow-scrolling:touch}\n.gh-heros{padding:10px 16px 8px}\n.gh-heros>*,.gh-rail>*{flex:none;scroll-snap-align:center}\n.gh-hero{width:calc(100% - 36px);max-width:420px;background:var(--c);color:#fff;border-radius:22px;padding:18px 16px 16px;box-shadow:0 12px 28px rgba(0,0,0,.2);display:flex;flex-direction:column;gap:12px;min-height:150px}\n.gh-hero h2{font-size:24px}\n.gh-hero p{font-size:14px;opacity:.92;line-height:1.35;margin-top:4px}\n.gh-cta{display:inline-block;align-self:flex-start;background:#fff;color:var(--ink);font-weight:700;font-size:14px;padding:10px 16px;border-radius:999px;margin-top:auto}\n.gh-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}\n.gh-tile{background:#fff;border-radius:12px;padding:6px;color:var(--ink);display:flex;flex-direction:column;gap:4px;min-width:0}\n.gh-tile img{width:100%;aspect-ratio:1;object-fit:contain;border-radius:8px}\n.gh-tile.ph img{object-fit:cover}\n.gh-tile span{font-size:12px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding:0 2px}\n.gh-grid.n1 .gh-tile,.gh-grid.n3 .gh-tile:last-child{grid-column:1/-1}\n.gh-grid.n1 .gh-tile img,.gh-grid.n3 .gh-tile:last-child img{aspect-ratio:2/1}\n.gh-grid.n1 .gh-tile.ph img{aspect-ratio:16/10}\n.gh-tile .gm-logo{width:100%;height:auto;aspect-ratio:1;border-radius:8px}\n.gh-grid.n1 .gh-tile .gm-logo{aspect-ratio:2/1}\n.gh-dots{display:flex;justify-content:center;gap:6px;padding:6px 0 4px}\n.gh-dots i{width:6px;height:6px;border-radius:3px;background:rgba(0,0,0,.18);transition:width .3s}\n.gh-dots i.on{background:var(--ink);width:18px}\n.gh-arr{display:none;position:absolute;top:50%;transform:translateY(-50%);width:40px;height:40px;border-radius:50%;background:#fff;border:1px solid var(--line);box-shadow:0 2px 8px rgba(0,0,0,.15);z-index:2;font-size:22px;line-height:1;padding:0 0 3px}\n.gh-arr.l{left:-6px}.gh-arr.r{right:-6px}\n.gh-sec{padding:18px 0 0}\n.gh-sh{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin:0 0 10px}\n.gh-sh a{color:var(--o);font-weight:700;font-size:14px;white-space:nowrap}\n.gh-rail{margin:0 -16px;padding:4px 16px 10px;scroll-snap-type:x proximity;gap:10px}\n.gh-rail>*{scroll-snap-align:start}\n.gh-p{width:150px;background:#fff;border:1.5px solid var(--line);border-radius:16px;padding:10px;display:flex;flex-direction:column;gap:4px}\n.gh-p img{width:100%;aspect-ratio:1;object-fit:contain}\n.gh-pn{font-size:13px;line-height:1.3;height:34px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}\n.gh-pm{font-size:12px;color:var(--mute);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-height:17px}\n.gh-pr{display:flex;align-items:center;justify-content:space-between;gap:6px;margin-top:4px}\n.gh-pr b{font-size:15px}\n#ggsx-home .gh-add{border:0;background:var(--o);color:#fff;font-weight:700;font-size:13px;padding:8px 13px;border-radius:999px;line-height:1}\n.gh-step{display:inline-flex;align-items:center;background:var(--o);color:#fff;border-radius:999px;padding:2px}\n.gh-step button{border:0;background:none;color:#fff;width:26px;height:24px;font-size:16px;line-height:1;border-radius:999px;padding:0}\n.gh-step span{min-width:18px;text-align:center;font-weight:700;font-size:13px}\n.gh-d{width:96px;text-align:center;font-size:12px;font-weight:700;line-height:1.2}\n.gh-d div{width:96px;height:96px;border-radius:22px;background:#fff;border:1.5px solid var(--line);overflow:hidden;margin:0 0 6px}\n.gh-d img{width:100%;height:100%;object-fit:cover}\n.gh-v{width:104px;text-align:center;font-size:12px;font-weight:700;line-height:1.2}\n.gh-v .gm-logo{width:80px;height:80px;margin:0 auto 6px;border-radius:20px}\n.gh-basket{display:none;align-items:center;gap:12px;background:#fff;border:1.5px solid var(--line);border-radius:18px;padding:12px;margin:14px 0 0;box-shadow:0 4px 14px rgba(0,0,0,.06)}\n.gh-basket.on{display:flex}\n.gh-bi{display:flex;flex:none}\n.gh-bi img,.gh-bi span{width:42px;height:42px;border-radius:12px;object-fit:contain;background:#fff;margin-left:-12px;border:2px solid var(--line)}\n.gh-bi :first-child{margin-left:0}\n.gh-bt{flex:1;min-width:0}\n.gh-bt b{display:block;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}\n.gh-bt small{color:var(--mute);font-size:13px}\n.gh-btn{flex:none;background:var(--o);color:#fff;font-weight:700;font-size:14px;padding:10px 16px;border-radius:999px;border:0}\n.gh-services{display:grid;grid-template-columns:1fr 1fr;gap:10px}\n.gh-s{background:#fff;border:1.5px solid var(--line);border-radius:16px;overflow:hidden;display:flex;flex-direction:column}\n.gh-s img{width:100%;aspect-ratio:16/10;object-fit:cover}\n.gh-s div{padding:10px 12px 12px}\n.gh-s b{display:block;font-size:14px;line-height:1.25}\n.gh-s small{display:block;color:var(--mute);font-size:12px;margin-top:3px;line-height:1.3}\n.gh-why>p{color:var(--mute);margin:-4px 0 12px;font-size:14px}\n.gh-why ul{list-style:none;margin:0;padding:0;display:grid;gap:10px}\n.gh-why li{display:flex;gap:12px;background:#fff;border:1.5px solid var(--line);border-radius:16px;padding:12px 14px}\n.gh-why i{flex:none;width:12px;height:12px;border-radius:50%;margin-top:6px;background:var(--c)}\n.gh-why b{display:block;font-size:15px}\n.gh-why li p{margin:2px 0 0;font-size:14px;color:#444}\n.gh-r{width:280px;background:#fff;border:1.5px solid var(--line);border-radius:16px;padding:14px;margin:0;display:flex;flex-direction:column;gap:8px;white-space:normal}\n.gh-r i{color:#f5a623;font-style:normal;letter-spacing:2px}\n.gh-r p{font-size:14px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:6;-webkit-box-orient:vertical;overflow:hidden}\n.gh-rf{font-size:13px;color:var(--mute);margin-top:auto}\n.gh-rf b{color:var(--ink)}\n.gh-cta2{background:var(--c);color:#fff;border-radius:22px;padding:22px 18px;margin:20px 0 0;display:flex;flex-direction:column;gap:10px}\n.gh-cta2 h2{font-size:22px}\n.gh-cta2 p{opacity:.92;font-size:15px}\n.gh-cta2 a{align-self:flex-start;background:#fff;color:var(--ink);font-weight:700;padding:11px 18px;border-radius:999px;flex:none}\n.gh-links{display:flex;flex-wrap:wrap;gap:8px;padding:10px 0 0}\n.gh-links a{padding:8px 14px;border-radius:999px;background:#fff;border:1.5px solid var(--line);font-size:13px;font-weight:700}\n@media (min-width:861px){.gh-top{padding:24px 0 0}.gh-search{height:54px;max-width:760px;margin:0 auto;border-radius:16px}.gh-chips{justify-content:center;flex-wrap:wrap;padding-top:16px}.gh-tag{text-align:center}.gh-hw{max-width:1240px;margin:0 auto;padding:0 16px}.gh-heros{padding:16px 0 10px}.gh-hero{width:390px;max-width:none;min-height:360px}.gh-arr{display:block}.gh-rail{margin:0;padding:4px 0 12px}.gh-services{grid-template-columns:repeat(4,1fr)}.gh-why ul{grid-template-columns:repeat(2,1fr)}.gh-p{width:172px}.gh-r{width:360px}.gh-cta2{flex-direction:row;align-items:center;justify-content:space-between;padding:28px 32px}.gh-cta2 div{max-width:720px}.gh-basket{margin-top:18px}.gh-sec{padding-top:26px}.gh-sh h2{font-size:24px}}\n");
__ggsxB("66348b98-2e16-404f-ba13-5a9f89505ed0#0");
try {
window.GGSX_HOME={path:"/",tab:"Home",copy:{add:"Add",search:"Search",seeAll:"See all",viewBasket:"View basket",searchAll:"Search the shop for",voice:"Search by voice",listening:"Listening…",loading:"Loading…",item:" item",items:" items",basketNote:"ready to check out"}};!function(){var t=window,e=document,n=t.GGSX_HOME=t.GGSX_HOME||{},r=t.GGSX_SHOP||{},o=n.sheetId||r.sheetId||"1-h6W54Wbscz_5zMAVU0myRr0PCYoVW_sJZo4XWe2MXE",i={search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>',mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>'};function c(t){return/^(true|yes|y|1|x|✓|✔)$/i.test(String(null==t?"":t).trim())}function a(t){return String(t||"").trim()}n.u={h:function(t,n,r){var o,i=e.createElement(t);if(n)for(o in n)null!=n[o]&&("class"===o?i.className=n[o]:"text"===o?i.textContent=n[o]:"on"===o.slice(0,2)?i.addEventListener(o.slice(2),n[o]):i.setAttribute(o,n[o]));return(r||[]).forEach(function(t){t&&i.appendChild("string"==typeof t?e.createTextNode(t):t)}),i},svg:function(t){var n=e.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("viewBox","0 0 24 24"),n.innerHTML=i[t]||"",n},money:function(t){return"$"+(Math.round(100*t)/100).toFixed(2)},num:function(t){var e=parseFloat(String(null==t?"":t).replace(/[^0-9.\-]/g,""));return isNaN(e)?0:e},truthy:c,on:function(t){return""===t||c(t)},slug:function(t){return String(t||"").toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")},trim:a,light:function(t){var e=/^#?([0-9a-f]{6})$/i.exec(a(t));if(!e)return!1;var n=parseInt(e[1],16);return.299*(n>>16)+.587*(n>>8&255)+.114*(255&n)>186},img:function(t,e){if(!t)return"";var n=/static\.wixstatic\.com\/media\/([^\/?#]+)/.exec(t);if(n)return"https://static.wixstatic.com/media/"+n[1]+"/v1/fit/w_"+e+",h_"+e+",q_80,enc_auto/"+n[1];var r=/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:.*&)?id=)([\w-]+)/.exec(t);return r?"https://lh3.googleusercontent.com/d/"+r[1]+"=w"+e:t},gviz:function(t,e){var n="https://docs.google.com/spreadsheets/d/"+o+"/gviz/tq?tqx=out:json&headers=1&sheet="+encodeURIComponent(t)+(e?"&tq="+encodeURIComponent(e):"")+"&t="+Math.floor(Date.now()/6e4);return fetch(n,{cache:"no-store"}).then(function(e){if(!e.ok)throw new Error(t+" "+e.status);return e.text()}).then(function(t){var e=JSON.parse(t.slice(t.indexOf("{"),t.lastIndexOf("}")+1)).table,n=e.cols.map(function(t){return a(t.label).toLowerCase()});return e.rows.map(function(t){var e={};return n.forEach(function(n,r){var o=t.c[r];e[n]=o&&null!=o.v?String(o.v).trim():""}),e})})},icons:i}}();
} catch (e) { try { console.warn('[GGSX bundle] Home 1 Config & Style', e); } catch (e2) {} }
__ggsxE("66348b98-2e16-404f-ba13-5a9f89505ed0#0");

/* ===== GrocerGoSx Home 2 Engine (33f1b3a3-eacb-417e-8058-133a7ada3557, rev 5) ===== */
__ggsxB("33f1b3a3-eacb-417e-8058-133a7ada3557#0");
try {
!function(){var t=window,e=document,n=t.GGSX_HOME||{},i=n.u,a=t.GGSX_SHOP||{},r=n.copy||{};if(i){var s=i.h,o=i.svg,l=i.money,c=i.num,h=i.truthy,d=i.on,u=i.slug,f=i.trim,p=i.light,g=i.img,v=i.gviz,m=(i.icons,n.tab||"Home"),b=a.tabs||{},y=(n.shopPath||a.path||"/shop-now").replace(/\/+$/,""),x=(n.path||"/").replace(/\/+$/,""),E="ggsx_basket",k="ggsx_home_cache",C={root:null,els:{},set:{},prods:[],byId:{},depts:[],vendors:null,cur:{},hi:-1},w=0,S=!1;t.addEventListener("ggsx-basket",B);var L=!1;new MutationObserver(function(){L||(L=!0,(t.requestAnimationFrame||setTimeout)(function(){L=!1,$()}))}).observe(e.documentElement,{childList:!0,subtree:!0}),$()}function _(t,e){return C.set[t]||e||""}function N(t){var e=u(t);return C.prods.filter(function(t){return u(t.cat)===e})}function A(t){var e=N(t);if(!e.length)return null;var n=C.cur[t]=C.cur[t]||0;return C.cur[t]=n+1,e[n%e.length]}function G(){try{var t=JSON.parse(localStorage.getItem(E)||"null");if(t&&t.items)return t}catch(t){}return{v:1,items:{}}}function O(t){var e=G().items[t];return e?e.n:0}function z(e,n){n=Math.max(0,Math.min(99,0|n));var i=t.GGSX_SHOP_API;if(i&&i.add)try{i.add(e,n)}catch(t){}else{var a=G(),r=a.items[e.id],s=0;Object.keys(a.items).forEach(function(t){s=Math.max(s,a.items[t].o||0)}),n?r?r.n=n:a.items[e.id]={id:e.id,n:n,name:e.name,size:e.size,price:e.price,img:e.img,o:s+1}:delete a.items[e.id],a.t=Date.now();try{localStorage.setItem(E,JSON.stringify(a))}catch(t){}try{t.dispatchEvent(new CustomEvent("ggsx-basket"))}catch(t){}}B()}function P(t){var e=O(t.id);return e?s("div",{class:"gh-step"},[s("button",{type:"button","aria-label":"Remove one "+t.name,text:"−",onclick:function(){z(t,O(t.id)-1)}}),s("span",{text:String(e)}),s("button",{type:"button","aria-label":"Add one "+t.name,text:"+",onclick:function(){z(t,O(t.id)+1)}})]):s("button",{type:"button",class:"gh-add","aria-label":(r.add||"Add")+" "+t.name,text:r.add||"Add",onclick:function(){z(t,1)}})}function B(){if(C.root){[].forEach.call(C.root.querySelectorAll(".gh-st"),function(t){var e=C.byId[t.getAttribute("data-id")];e&&(t.innerHTML="",t.appendChild(P(e)))});var t,e=(t=G(),Object.keys(t.items).map(function(e){return t.items[e]}).sort(function(t,e){return t.o-e.o})),n=0,i=0;e.forEach(function(t){n+=t.n,i+=t.n*t.price});var a=C.els.basket;if(a.innerHTML="",a.classList.toggle("on",n>0),n){var o=s("div",{class:"gh-bi"});e.slice(0,4).forEach(function(t){o.appendChild(t.img?s("img",{src:g(t.img,96),alt:""}):s("span"))}),a.appendChild(o),a.appendChild(s("div",{class:"gh-bt"},[s("b",{text:_("basket","Your basket")+" · "+n+(1===n?r.item||" item":r.items||" items")}),s("small",{text:l(i)+(r.basketNote?" · "+r.basketNote:"")})])),a.appendChild(s("a",{class:"gh-btn",href:y+"#basket",text:r.viewBasket||"View basket"}))}}}function I(t){(t=f(t))&&location.assign(y+"#q/"+encodeURIComponent(t))}function M(e){var n=t.SpeechRecognition||t.webkitSpeechRecognition;if(!n)return null;var i=s("button",{type:"button",class:"gh-mic","aria-label":r.voice||"Search by voice"},[o("mic")]);return i.addEventListener("click",function(){try{var t=new n;t.lang=r.lang||"en-US",t.interimResults=!1,i.classList.add("on"),e.placeholder=r.listening||"Listening…",t.onresult=function(t){var n=t.results[0][0].transcript;e.value=n,I(n)},t.onend=t.onerror=function(){i.classList.remove("on"),e.placeholder=_("search_ph",r.search||"Search")},t.start()}catch(t){i.classList.remove("on")}}),i}function q(e,n){var i=t.GGSX_MORE;return i&&i.logo?i.logo(e,n):s("div",{class:"gm-logo"},[s("b",{text:(e.name||"?")[0]})])}function F(t,e){return s("a",{class:"gh-tile"+(t.ph?" ph":""),href:t.href||"#"},[t.el||s("img",{src:g(t.img,400),alt:"",loading:e?"lazy":null}),t.cap?s("span",{text:t.cap}):null])}function H(t,e){var n,i=(n=t,[-1,1].map(function(t){return s("button",{type:"button",class:"gh-arr "+(t<0?"l":"r"),"aria-label":t<0?"Previous":"Next",text:t<0?"‹":"›",onclick:function(){n.scrollBy({left:t*n.clientWidth*.8,behavior:"smooth"})}})}));return s("div",{class:"gh-rw "+(e||"")},[i[0],t,i[1]])}function ggLk(t){return t?/^(https?:|\/|mailto:|tel:)/i.test(t)?t:"#"===t.charAt(0)?y+t:(t=t.split(/\s*[>›]\s*/),y+"#d/"+u(t[0])+(t[1]?"/"+u(t[1]):"")):""}function R(t){var e,n=s("div",{class:"gh-heros"}),i=s("div",{class:"gh-dots"}),a=[];t.forEach(function(t,e){var r=function(t,e){var n=f(t.dept),i=null,a=[],r=/^restaurants?$/i.test(n);r?i=s("div",{class:"gh-grid","data-rest":"4"}):n?n.split(",").map(f).filter(Boolean).slice(0,4).forEach(function(t){var e=A(t);e&&a.push({img:e.img,cap:t,href:y+"#d/"+u(t)})}):f(t.images).split(/\n+/).map(f).filter(Boolean).slice(0,4).forEach(function(e){var n=e.split("|");a.push({img:f(n[0]),cap:f(n[1]),href:ggLk(f(n[2]))||t.link,ph:!0})}),a.length&&(i=s("div",{class:"gh-grid n"+a.length}),a.forEach(function(t){i.appendChild(F(t,e>0))}));var o=s("article",{class:"gh-hero",style:"--c:"+(t.color||"#F4551B")},[s("div",{class:"gh-ht"},[s("h2",{text:t.title}),t.subtitle?s("p",{text:t.subtitle}):null]),i,t.cta?s("a",{class:"gh-cta",href:t.link||y,text:t.cta}):null]);return r&&o.setAttribute("data-rest","1"),o}(t,e);a.push(r),n.appendChild(r),i.appendChild(s("i",{class:e?"":"on"}))}),n.addEventListener("scroll",function(){e||(e=!0,requestAnimationFrame(function(){var r,s,o;e=!1,r=n.scrollLeft+(a[0]?a[0].offsetWidth/2:0),s=0,o=1e9,a.forEach(function(t,e){var i=Math.abs(t.offsetLeft-n.offsetLeft+t.offsetWidth/2-r);i<o&&(o=i,s=e)}),s!==C.hi&&(C.hi=s,C.root.style.setProperty("--c",t[s].color||"#F4551B"),[].forEach.call(i.children,function(t,e){t.classList.toggle("on",e===s)}))}))}),C.hi=-1,C.root.style.setProperty("--c",t[0]&&t[0].color||"#F4551B");var r=H(n,"gh-hw");return r.appendChild(i),r}function T(t,e,n,i,a){return s("section",{class:"gh-sec "+(a||"")},[s("div",{class:"gh-sh"},[s("h2",{text:_(t,e)}),i?s("a",{href:i,text:r.seeAll||"See all"}):null]),n])}function D(){return e.querySelector('main[id^="PAGE_SECTIONS"] > section')||e.querySelector("main > section")||e.querySelector("main")}function J(){return location.pathname.replace(/\/+$/,"")===x}function W(t,e,n){function i(i){i!==e&&i!==t&&(i.style.minHeight=n?"":"0",i.style.height=n?"":"0",i.style.overflow=n?"":"hidden",i.style.padding=n?"":"0",i.style.margin=n?"":"0")}[].forEach.call(t.children,i),t.parentNode&&[].forEach.call(t.parentNode.children,i)}function X(t,n){t.appendChild(n),W(t,n),e.documentElement.classList.add("gh-on")}function $(){if(!J())return C.root=null,S=!1,w=0,void e.documentElement.classList.remove("gh-on");if(!e.getElementById("ggsx-home")){var n=D();if(n&&e.body.contains(n)){if(C.root)X(n,C.root);else if(!S){S=!0;var i=s("section",{id:"ggsx-home"},[s("div",{class:"gh-loading",text:r.loading||"Loading…"})]);X(n,i),function(){var t=String(Math.floor(Date.now()/864e5)%10);try{var e=JSON.parse(sessionStorage.getItem(k)||"null");if(e&&e.t&&Date.now()-e.t<6e5&&e.d===t&&e.rows)return Promise.resolve(e)}catch(t){}return Promise.all([v(m),v(b.products||"Products","select A,B,D,E,F,G,J,K,L where G is not null and (J = true or A ends with '"+t+"')").catch(function(){return[]}),v(b.depts||"Departments").catch(function(){return[]})]).then(function(e){var n={t:Date.now(),d:t,rows:e[0].filter(function(t){return t.kind&&d(t.active)}).sort(function(t,e){return c(t.order)-c(e.order)}),prods:e[1].filter(function(t){return t.product&&t.image&&d(t.active)&&d(t.in_stock)}).map(function(t){return{id:t.id||u(t.category+"-"+t.product+"-"+t.size),cat:t.category,name:t.product,size:t.size,price:c(t.price),img:t.image,feat:h(t.featured),stock:!0}}),depts:e[2].filter(function(t){return t.category&&d(t.active)}).sort(function(t,e){return c(t.sort)-c(e.sort)})};try{sessionStorage.setItem(k,JSON.stringify(n))}catch(t){}return n})}().then(function(n){i.parentNode&&i.parentNode.removeChild(i),!e.getElementById("ggsx-home")&&J()&&function(n,i){var a={};i.rows.forEach(function(t){var e=t.kind.toLowerCase();(a[e]=a[e]||[]).push(t)}),C.set={},(a.setting||[]).forEach(function(t){C.set[f(t.title)]=t.text}),C.prods=i.prods,C.byId={},i.prods.forEach(function(t){C.byId[t.id]=t}),C.depts=i.depts,C.cur={};var c,h,d,v,m,b,x=C.root=s("section",{id:"ggsx-home"}),E=s("div",{class:"gh-wrap"});x.appendChild(s("div",{class:"gh-top"},[s("div",{class:"gh-wrap"},[(v=s("input",{type:"search",placeholder:_("search_ph",r.search||"Search"),autocomplete:"off","aria-label":r.search||"Search"}),m=s("div",{class:"gh-sugg"}),b=s("form",{class:"gh-search",onsubmit:function(t){t.preventDefault(),I(v.value)}},[v,M(v),s("button",{type:"submit","aria-label":r.search||"Search"},[o("search")]),m]),v.addEventListener("input",function(){clearTimeout(d),d=setTimeout(function(){!function(t,e){if(e.innerHTML="",t.length<2)e.classList.remove("show");else{var n=t.toLowerCase().split(/\s+/).filter(Boolean);C.prods.filter(function(t){var e=(t.name+" "+t.size+" "+t.cat).toLowerCase();return n.every(function(t){return e.indexOf(t)>=0})}).slice(0,5).forEach(function(t){e.appendChild(s("div",{class:"gh-sg"},[s("img",{src:g(t.img,96),alt:""}),s("span",{class:"gh-sn",text:t.name+(t.size?" · "+t.size:"")}),s("b",{text:l(t.price)}),s("span",{class:"gh-st","data-id":t.id},[P(t)])]))}),e.appendChild(s("div",{class:"gh-sall",text:(r.searchAll||"Search the shop for")+" “"+t+"”",onclick:function(){I(t)}})),e.classList.add("show")}}(f(v.value),m)},150)}),e.addEventListener("click",function(t){b.contains(t.target)||m.classList.remove("show")}),b),(c=a.chip||[],h=s("div",{class:"gh-chips"}),c.forEach(function(t){h.appendChild(s("a",{class:"gh-chip"+(p(t.color)?" lt":""),href:t.link||y,style:"--c:"+(t.color||"#fff"),text:(t.text?t.text+" ":"")+t.title}))}),h),_("sub_tagline")?s("span",{class:"gh-tag",text:_("sub_tagline")}):null]),R(a.hero||[])])),x.appendChild(E),C.els.basket=s("div",{class:"gh-basket"}),E.appendChild(C.els.basket);var k=function(){var t=C.prods.filter(function(t){return t.feat}),e={},n=[];t.forEach(function(t){e[t.id]=1}),C.prods.forEach(function(t){n.indexOf(t.cat)<0&&n.push(t.cat)});for(var i=0;t.length<12&&i<4;i++)n.forEach(function(n){var i=A(n);i&&!e[i.id]&&t.length<12&&(e[i.id]=1,t.push(i))});return t}();if(k.length){var w=s("div",{class:"gh-rail"});k.forEach(function(t){w.appendChild(function(t){return s("div",{class:"gh-p"},[s("img",{src:g(t.img,320),alt:"",loading:"lazy"}),s("div",{class:"gh-pn",text:t.name}),s("div",{class:"gh-pm",text:t.size}),s("div",{class:"gh-pr"},[s("b",{text:l(t.price)}),s("span",{class:"gh-st","data-id":t.id},[P(t)])])])}(t))}),E.appendChild(T("popular","Popular",H(w),y))}if(C.depts.length){var S=s("div",{class:"gh-rail"});C.depts.forEach(function(t){var e=t.image||(N(t.category)[0]||{}).img;S.appendChild(s("a",{class:"gh-d",href:y+"#d/"+u(t.category)},[s("div",{},[e?s("img",{src:g(e,200),alt:"",loading:"lazy"}):null]),t.category]))}),E.appendChild(T("depts","Shop by department",H(S),y))}var L=s("div");if(E.appendChild(L),(a.service||[]).length){var G=s("div",{class:"gh-services"});a.service.forEach(function(t){var e=f(t.images).split(/\n+/)[0];G.appendChild(s("a",{class:"gh-s",href:t.link||"#"},[e?s("img",{src:g(e,480),alt:"",loading:"lazy"}):null,s("div",{},[s("b",{text:t.title}),t.subtitle?s("small",{text:t.subtitle}):null])]))}),E.appendChild(T("services","Everything we do",G,"/pricing"))}if((a.why||[]).length){var O=s("ul");a.why.forEach(function(t){O.appendChild(s("li",{style:"--c:"+(t.color||"#F4551B")},[s("i"),s("div",{},[s("b",{text:t.title}),t.text?s("p",{text:t.text}):null])]))}),E.appendChild(T("why","Why guests choose GrocerGoSx",s("div",{},[_("why_intro")?s("p",{text:_("why_intro")}):null,O]),null,"gh-why"))}if((a.review||[]).length){var z=s("div",{class:"gh-rail"});a.review.forEach(function(t){z.appendChild(s("blockquote",{class:"gh-r"},[s("i",{text:"★★★★★"}),s("p",{text:t.text}),s("div",{class:"gh-rf"},[s("b",{text:t.title}),t.subtitle?", "+t.subtitle:null])]))}),E.appendChild(T("reviews","What our guests are saying",H(z)))}if((a.cta||[]).slice(0,1).forEach(function(t){E.appendChild(s("div",{class:"gh-cta2",style:"--c:"+(t.color||"#F4551B")},[s("div",{},[s("h2",{text:t.title}),t.text?s("p",{text:t.text}):null]),t.cta?s("a",{href:t.link||"#",target:/^https?:/.test(t.link||"")?"_blank":null,rel:"noopener",text:t.cta}):null]))}),(a.link||[]).length){var D=s("nav",{class:"gh-links","aria-label":_("links","More")});a.link.forEach(function(t){D.appendChild(s("a",{href:t.link||"/",text:t.title}))}),E.appendChild(D)}X(n,x),B(),function(){if(C.vendors)return Promise.resolve(C.vendors);var e=t.GGSX_MORE;return e&&e.load?e.load().then(function(t){return C.vendors=t.vendors||[]}).catch(function(){return C.vendors=[]}):Promise.resolve([])}().then(function(t){if(C.root&&([].forEach.call(C.root.querySelectorAll(".gh-hero[data-rest]"),function(e){var n,i=e.querySelector("[data-rest]");t.length?(n=i,(C.vendors||[]).slice(0,4).forEach(function(t){n.appendChild(F({el:q(t,200),cap:t.name,href:y+"#restaurants/"+t.vendor_id},!0))}),n.className="gh-grid n"+n.children.length):e.style.display="none"}),t.length)){var e=s("div",{class:"gh-rail"});t.forEach(function(t){e.appendChild(s("a",{class:"gh-v",href:y+"#restaurants/"+t.vendor_id},[q(t,160),t.name]))}),L.appendChild(T("restaurants","Restaurant pickup",H(e),y+"#restaurants"))}})}(D(),n)}).catch(function(){i.parentNode&&(W(i.parentNode,i,!0),i.parentNode.removeChild(i)),e.documentElement.classList.remove("gh-on")})}}else++w<80&&setTimeout($,250)}}}();
} catch (e) { try { console.warn('[GGSX bundle] Home 2 Engine', e); } catch (e2) {} }
__ggsxE("33f1b3a3-eacb-417e-8058-133a7ada3557#0");

/* ===== GrocerGoSx Pages 1 Style (6fe1bdb3-3b4c-4f4c-b2f4-ab19ad40698c, rev 3) ===== */
__ggsxCss("", "#ggsx-page{--o:#F4551B;--od:#d9420d;--bg:#f6f3ee;--ink:#1b1b1b;--mute:#6b6b6b;--line:#e9e4dd;--card:#fff;box-sizing:border-box;width:100%;color:var(--ink);background:var(--bg);font-family:\"Avenir Light\",avenir-lt-w01_35-light1475496,Avenir,\"Helvetica Neue\",Arial,sans-serif;font-size:16px;line-height:1.55;text-align:left;padding:0 0 72px;overflow-x:hidden;-webkit-font-smoothing:antialiased}\n#ggsx-page *,#ggsx-page :before,#ggsx-page :after{box-sizing:border-box}\n#ggsx-page h1,#ggsx-page h2,#ggsx-page h3{font-family:Benzin,sans-serif;font-weight:700;margin:0;line-height:1.14;color:inherit;letter-spacing:0}\n#ggsx-page p{margin:0}\n#ggsx-page img{display:block;max-width:100%}\n#ggsx-page a{color:inherit}\n#ggsx-page p a,#ggsx-page .gp-note a{color:var(--o);font-weight:700;text-decoration:none}\n#ggsx-page p a:hover{text-decoration:underline}\n#ggsx-page .gp-cta p a{color:#fff;text-decoration:underline}\n#ggsx-page button,#ggsx-page input,#ggsx-page select,#ggsx-page textarea{font:inherit;color:inherit}\n#ggsx-page b,#ggsx-page strong{font-weight:700}\n#ggsx-page :focus-visible{outline:3px solid var(--o);outline-offset:2px}\n.gp-w{max-width:1180px;margin:0 auto;padding:0 24px}\n.gp-hero{position:relative;display:flex;align-items:flex-end;min-height:600px;color:#fff;background:#262626;overflow:hidden}\n.gp-hero picture,.gp-hero picture img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}\n.gp-hero:after{content:\"\";position:absolute;inset:0;background:linear-gradient(90deg,rgba(15,15,15,.72),rgba(15,15,15,.38) 55%,rgba(15,15,15,.08)),linear-gradient(0deg,rgba(15,15,15,.55),rgba(15,15,15,0) 55%)}\n.gp-hero>.gp-w{position:relative;z-index:1;width:100%;padding-top:120px;padding-bottom:64px}\n.gp-hero.b{min-height:0;background:var(--o)}\n.gp-hero.b:after{display:none}\n.gp-hero.b>.gp-w{padding-top:64px;padding-bottom:56px}\n.gp-eb{display:inline-block;font-size:12px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;background:var(--o);color:#fff;padding:7px 13px;border-radius:999px;margin:0 0 18px}\n.gp-hero.b .gp-eb{background:#fff;color:var(--o)}\n.gp-hero h1{font-size:54px;max-width:780px}\n.gp-lead{font-size:19px;line-height:1.5;max-width:640px;margin-top:18px!important;opacity:.96}\n.gp-btns{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}\n#ggsx-page .gp-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:52px;padding:0 26px;border-radius:999px;background:var(--o);border:2px solid var(--o);color:#fff;font-weight:700;font-size:16px;line-height:1.1;text-align:center;text-decoration:none;cursor:pointer;transition:background .15s,border-color .15s,transform .15s}\n#ggsx-page .gp-btn:hover{background:var(--od);border-color:var(--od);transform:translateY(-1px)}\n#ggsx-page .gp-btn.s{background:#fff;border-color:#d8d1c8;color:var(--ink)}\n#ggsx-page .gp-btn.s:hover{border-color:var(--ink)}\n#ggsx-page .gp-hero .gp-btn.s{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.85);color:#fff}\n#ggsx-page .gp-hero.b .gp-btn{background:#fff;border-color:#fff;color:var(--ink)}\n#ggsx-page .gp-hero.b .gp-btn.s{background:transparent;border-color:#fff;color:#fff}\n.gp-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:26px;padding:0;list-style:none}\n.gp-chips li{font-size:13px;font-weight:700;padding:7px 13px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.4);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}\n.gp-sec{padding:76px 0 0;scroll-margin-top:110px}\n.gp-sh{max-width:760px;margin:0 0 30px}\n.gp-sh h2{font-size:34px}\n.gp-sh p{color:var(--mute);font-size:17px;margin-top:12px}\n.gp-kick{display:block;color:var(--o);font-weight:700;font-size:13px;letter-spacing:.12em;text-transform:uppercase;margin-bottom:10px}\n.gp-steps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px;list-style:none;margin:0;padding:0;counter-reset:gps}\n.gp-steps li{background:var(--card);border:1.5px solid var(--line);border-radius:22px;padding:24px 22px}\n.gp-steps li:before{counter-increment:gps;content:counter(gps);display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;background:var(--o);color:#fff;font-family:Benzin,sans-serif;font-weight:700;font-size:17px;margin-bottom:16px}\n.gp-steps b{display:block;font-size:17px;line-height:1.3;margin-bottom:6px}\n.gp-steps p{color:#4a4a4a;font-size:15px}\n.gp-cards{display:grid;grid-template-columns:repeat(var(--cols,3),minmax(0,1fr));gap:18px}\n.gp-card{display:flex;flex-direction:column;background:var(--card);border:1.5px solid var(--line);border-radius:22px;overflow:hidden;text-decoration:none;color:inherit}\na.gp-card{transition:transform .2s,box-shadow .2s}\na.gp-card:hover{transform:translateY(-3px);box-shadow:0 14px 30px rgba(27,27,27,.1)}\n.gp-card>img{width:100%;aspect-ratio:4/3;object-fit:cover;background:#eee8e0}\n.gp-cb{display:flex;flex-direction:column;gap:6px;padding:20px 22px 22px;flex:1}\n.gp-cb b{font-size:17px;line-height:1.3}\n.gp-cb p{color:#4a4a4a;font-size:15px}\n.gp-cb .gp-more{margin-top:auto;padding-top:8px;color:var(--o);font-weight:700;font-size:15px}\n.gp-ic{display:flex;align-items:center;justify-content:center;width:46px;height:46px;border-radius:14px;background:#fdebe3;color:var(--o);margin-bottom:6px}\n.gp-ic svg,.gp-tick svg{width:22px;height:22px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}\n.gp-split{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:48px;align-items:center}\n.gp-split.f>.gp-si{order:2}\n.gp-si img{width:100%;aspect-ratio:5/4;object-fit:cover;border-radius:26px}\n.gp-st h2{font-size:32px;margin-bottom:14px}\n.gp-st>p{color:#444;font-size:17px;margin-bottom:12px!important}\n.gp-list{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px 32px;list-style:none;margin:0;padding:0}\n.gp-split .gp-list{grid-template-columns:1fr}\n.gp-list li{display:flex;gap:12px;align-items:flex-start;font-size:16px;line-height:1.45}\n.gp-tick{flex:none;display:flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;background:var(--o);color:#fff;margin-top:1px}\n.gp-tick svg{width:15px;height:15px;stroke-width:3}\n.gp-prices{background:var(--card);border:1.5px solid var(--line);border-radius:24px;overflow:hidden}\n.gp-pr{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:8px 28px;padding:20px 26px;border-top:1px solid var(--line)}\n.gp-pr:first-child{border-top:0}\n.gp-pr dt{font-weight:700;font-size:17px}\n.gp-pr dd{margin:0}\n.gp-pv{display:block;font-weight:700;font-size:18px;color:var(--o);line-height:1.35}\n.gp-pn{display:block;color:var(--mute);font-size:14px;margin-top:4px}\n.gp-pf{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12px;margin-top:16px;color:var(--mute);font-size:15px}\n#ggsx-page .gp-pf a{color:var(--o);font-weight:700;text-decoration:none}\n.gp-faq{display:grid;gap:12px;max-width:860px}\n.gp-faq details{background:var(--card);border:1.5px solid var(--line);border-radius:18px;padding:0 22px}\n.gp-faq summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;gap:16px;padding:18px 0;font-weight:700;font-size:17px}\n.gp-faq summary::-webkit-details-marker{display:none}\n.gp-faq summary:after{content:\"+\";flex:none;font-size:24px;line-height:1;color:var(--o);transition:transform .2s}\n.gp-faq details[open] summary:after{transform:rotate(45deg)}\n.gp-faq details p{padding:0 0 20px;color:#444}\n.gp-quotes{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:18px}\n.gp-q{margin:0;background:var(--card);border:1.5px solid var(--line);border-radius:22px;padding:24px;display:flex;flex-direction:column;gap:12px}\n.gp-q i{font-style:normal;color:#f5a623;letter-spacing:3px}\n.gp-q p{font-size:16px;line-height:1.5}\n.gp-qf{margin-top:auto;color:var(--mute);font-size:14px}\n.gp-qf b{color:var(--ink)}\n.gp-cta{display:flex;align-items:center;justify-content:space-between;gap:28px;background:var(--o);color:#fff;border-radius:28px;padding:40px 44px;margin-top:76px}\n.gp-cta h2{font-size:30px}\n.gp-cta p{margin-top:10px!important;font-size:17px;opacity:.95;max-width:620px}\n.gp-cta .gp-btns{margin:0;flex:none}\n#ggsx-page .gp-cta .gp-btn{background:#fff;border-color:#fff;color:var(--ink)}\n#ggsx-page .gp-cta .gp-btn.s{background:transparent;color:#fff}\n.gp-note{color:var(--mute);font-size:14px;margin-top:14px!important}\n.gp-links{display:flex;flex-wrap:wrap;gap:8px;margin-top:40px}\n#ggsx-page .gp-links a{padding:9px 15px;border-radius:999px;background:var(--card);border:1.5px solid var(--line);font-size:14px;font-weight:700;text-decoration:none}\n#ggsx-page .gp-links a:hover{border-color:var(--o);color:var(--o)}\n.gp-mh{display:flex;justify-content:space-between;align-items:baseline;gap:12px;padding-bottom:12px;margin-bottom:6px;border-bottom:1px solid var(--line)}\n.gp-mh b{font-size:17px}\n.gp-mh span{color:var(--o);font-weight:700;white-space:nowrap}\n.gp-load{padding:24px;color:var(--mute);text-align:center}\n.gp-toast{position:fixed;left:50%;bottom:28px;z-index:9600;transform:translate(-50%,16px);opacity:0;pointer-events:none;background:var(--ink);color:#fff;font-family:\"Avenir Light\",avenir-lt-w01_35-light1475496,Avenir,Arial,sans-serif;font-size:15px;padding:12px 18px;border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.25);transition:opacity .2s,transform .2s;max-width:calc(100% - 32px)}\n.gp-toast.on{opacity:1;transform:translate(-50%,0);pointer-events:auto}\n.gp-toast a{color:#ffb592;font-weight:700;margin-left:10px;text-decoration:none}\nmain[id^=\"PAGE_SECTIONS\"]>section:has(>#ggsx-page){min-height:0!important;padding:0!important}\n@media (max-width:1000px){.gp-steps{grid-template-columns:repeat(2,minmax(0,1fr))}\n.gp-cards{--cols:2!important}\n}\n@media (max-width:860px){#ggsx-page{font-size:16px;padding-bottom:calc(120px + env(safe-area-inset-bottom,0px))}\n.gp-w{padding:0 16px}\n.gp-hero{min-height:560px}\n.gp-hero>.gp-w{padding-top:96px;padding-bottom:36px}\n.gp-hero.b>.gp-w{padding-top:40px;padding-bottom:36px}\n.gp-hero h1{font-size:33px}\n.gp-lead{font-size:17px}\n.gp-btns{flex-direction:column;align-items:stretch;gap:10px}\n#ggsx-page .gp-btn{width:100%;min-height:50px}\n.gp-chips{margin-top:20px}\n.gp-chips li{font-size:12px;padding:6px 11px}\n.gp-sec{padding-top:48px;scroll-margin-top:72px}\n.gp-sh{margin-bottom:20px}\n.gp-sh h2,.gp-st h2{font-size:25px}\n.gp-sh p{font-size:16px}\n.gp-steps{grid-template-columns:1fr;gap:10px}\n.gp-steps li{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:14px;padding:18px}\n.gp-steps li:before{grid-row:1/3;margin:0}\n.gp-cards{--cols:1!important;gap:14px}\n.gp-split{grid-template-columns:1fr;gap:22px}\n.gp-split.f>.gp-si{order:0}\n.gp-si img{aspect-ratio:4/3;border-radius:20px}\n.gp-list{grid-template-columns:1fr;gap:12px}\n.gp-pr{grid-template-columns:1fr;padding:16px 18px;gap:4px}\n.gp-pf{flex-direction:column;align-items:flex-start}\n.gp-faq details{padding:0 16px}\n.gp-faq summary{font-size:16px}\n.gp-cta{flex-direction:column;align-items:stretch;padding:28px 22px;border-radius:22px;margin-top:48px}\n.gp-cta h2{font-size:24px}\n.gp-toast{bottom:calc(84px + env(safe-area-inset-bottom,0px))}\n}");

/* ===== GrocerGoSx Partner Links (4106abf3-b013-4dc0-9f91-0a70a02d382f, rev 2) ===== */
__ggsxB("4106abf3-b013-4dc0-9f91-0a70a02d382f#0");
try {
!function(){var e=window,t=document,a=e.GGSX_REF_CFG=e.GGSX_REF_CFG||{days:30,partners:{panorama:"Panorama Residence"},welcome:"Welcome, guest of {name}! Groceries, villa stocking and errands, delivered across the island."};if(e.GGSX_REF&&e.GGSX_REF.ready)e.GGSX_REF.scan();else{var n="ggsx_ref";t.addEventListener("click",(function(e){var t=e.target&&e.target.closest&&e.target.closest('a[href*="wa.me/"],a[href*="whatsapp.com/send"]'),a=t&&i();if(a)try{
var n=new URL(t.href),r=n.searchParams.get("text")||"",l=o(a);r.indexOf(l)<0&&(n.searchParams.set("text",(r?r+"\n\n":"")+l+"."),t.href=n.toString())}catch(e){}}),!0);var r=!1;new MutationObserver((function(){r||(r=!0,setTimeout((function(){r=!1,c()}),120))})).observe(t.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["class"]}),e.GGSX_REF={ready:1,get:i,label:function(){var e=i();return e?o(e):""},scan:function(){l(),c()}},l(),c()}function i(){try{
var e=JSON.parse(localStorage.getItem(n)||"null");return e&&e.slug?Date.now()-(e.ts||0)>864e5*a.days?(localStorage.removeItem(n),null):(!e.name&&a.partners[e.slug]&&(e.name=a.partners[e.slug]),e):null}catch(e){return null}}function o(e){return e.name?"Referred by "+e.name:"Ref: "+e.slug}function l(){var e=/[?&]ref=([^&#]+)/i.exec(location.search);if(e){var r="";try{r=decodeURIComponent(e[1])}catch(t){r=e[1]}if(r=r.toLowerCase().replace(/[^a-z0-9_-]/g,"").slice(0,40)){var o=i(),l={slug:r,
name:a.partners[r]||"",ts:Date.now()};try{localStorage.setItem(n,JSON.stringify(l))}catch(e){}o&&o.slug===r||function(e){if(e.name&&a.welcome){var n=t.createElement("style")
;n.textContent=".gr-hi{position:fixed;left:16px;right:16px;bottom:24px;z-index:9700;max-width:460px;margin:0 auto;display:flex;gap:12px;align-items:flex-start;background:#fff;color:#1b1b1b;border-left:5px solid #F4551B;border-radius:14px;padding:14px 14px 14px 16px;box-shadow:0 12px 36px rgba(0,0,0,.22);font:15px/1.45 'Avenir Light',avenir-lt-w01_35-light1475496,Avenir,Arial,sans-serif;transition:opacity .3s,transform .3s}.gr-hi.out{opacity:0;transform:translateY(12px)}.gr-hi p{margin:0;flex:1}.gr-hi b{font-weight:700}.gr-hi button{flex:none;border:0;background:#f1ece6;border-radius:50%;width:30px;height:30px;font-size:18px;line-height:1;cursor:pointer;color:#1b1b1b}@media (max-width:860px){.gr-hi{bottom:calc(84px + env(safe-area-inset-bottom,0px))}}",
t.head.appendChild(n);var r=t.createElement("div"),i=t.createElement("p"),o=t.createElement("button");r.className="gr-hi",r.setAttribute("role","status");var l=a.welcome.split("{name}");i.appendChild(t.createTextNode(l[0]));var s=t.createElement("b");s.textContent=e.name,i.appendChild(s),i.appendChild(t.createTextNode(l.slice(1).join(e.name))),o.type="button",o.setAttribute("aria-label","Close"),o.textContent="×",o.onclick=c,r.appendChild(i),r.appendChild(o),setTimeout((function e(){
t.body?(t.body.appendChild(r),setTimeout(c,12e3)):setTimeout(e,200)}),1800)}function c(){r.classList.add("out"),setTimeout((function(){r.parentNode&&r.parentNode.removeChild(r)}),350)}}(l)}}}function s(e,t){var a="TEXTAREA"===e.tagName?HTMLTextAreaElement.prototype:HTMLInputElement.prototype,n=Object.getOwnPropertyDescriptor(a,"value");n&&n.set?n.set.call(e,t):e.value=t,e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0}))}function c(){var e=i()
;if(e){var a=o(e),n=t.querySelector('.gc-wrap.open textarea[name="notes"]');n&&!n.getAttribute("data-ggsx-ref")&&(n.setAttribute("data-ggsx-ref","1"),n.value.indexOf(a)<0&&s(n,(n.value?n.value.replace(/\s+$/,"")+"\n":"")+a));var r=t.getElementById("ggsx-run");r&&[].forEach.call(r.querySelectorAll("label"),(function(t){if(/referred by/i.test(t.textContent||"")){var a=t.querySelector("input")||(t.nextElementSibling&&"INPUT"===t.nextElementSibling.tagName?t.nextElementSibling:null)
;!a||a.value||a.getAttribute("data-ggsx-ref")||(a.setAttribute("data-ggsx-ref","1"),s(a,e.name||e.slug))}}))}}}();
} catch (e) { try { console.warn('[GGSX bundle] Partner Links', e); } catch (e2) {} }
__ggsxE("4106abf3-b013-4dc0-9f91-0a70a02d382f#0");

/* ===== GrocerGoSx Pages 2 Engine (86b8c204-87a2-48fd-a7b2-bf7ca042b038, rev 5) ===== */
__ggsxB("86b8c204-87a2-48fd-a7b2-bf7ca042b038#0");
try {
!function(){var t=window,e=document,n=t.GGSX_PAGES=t.GGSX_PAGES||{};n.pages=n.pages||{},n.blocks=n.blocks||{};var a=n.cfg=n.cfg||{},r={wa:"590690779119",phone:"+590 690 77 9119",email:"grocergosx@gmail.com",sheetId:"1-h6W54Wbscz_5zMAVU0myRr0PCYoVW_sJZo4XWe2MXE",shop:"/shop-now",
links:[["Villa stocking","/villa-stocking"],["Stocking packages","/stocking-packages"],["Yacht provisioning","/yacht-provisioning"],["For hosts & managers","/partners"],["Pricing & fees","/pricing"],["Service area","/service-area"],["Shop groceries","/shop-now"],["Home","/"],["Message us","https://wa.me/590690779119"]]};if(Object.keys(r).forEach((function(t){null==a[t]&&(a[t]=r[t])})),n.ready)n.run();else{var l,i,s={check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
cart:'<path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 8H6.2"/><circle cx="10" cy="20.5" r="1.2"/><circle cx="17" cy="20.5" r="1.2"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',chat:'<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',photo:'<rect x="3" y="6" width="18" height="14" rx="2"/><circle cx="12" cy="13" r="3.5"/><path d="M8.5 6l1.5-2.5h4L15.5 6"/>',
boat:'<path d="M3 16.5l2.2 3.5h13.6l2.2-3.5z"/><path d="M12 3v13.5"/><path d="M12 4.5l6.5 9.5H12"/>',pin:'<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',key:'<circle cx="7.5" cy="15.5" r="3.5"/><path d="M10 13L20 3M15.5 7.5l2.5 2.5M18 5l2 2"/>',star:'<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8l-5.2 2.8 1-5.8-4.3-4.1 5.9-.8z"/>',
gift:'<rect x="3.5" y="9" width="17" height="11.5" rx="1"/><path d="M3.5 13h17M12 9v11.5M12 9C11 6 9.5 4 7.8 4a2.5 2.5 0 0 0 0 5H12zm0 0c1-3 2.5-5 4.2-5a2.5 2.5 0 0 1 0 5H12z"/>',list:'<path d="M9 6h11M9 12h11M9 18h11M4.5 6h.01M4.5 12h.01M4.5 18h.01"/>',bag:'<path d="M5 8h14l-1.2 12.5H6.2z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',receipt:'<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
shield:'<path d="M12 3l8 3v6c0 4.6-3.4 8-8 9-4.6-1-8-4.4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',home:'<path d="M3.5 11L12 4l8.5 7"/><path d="M5.5 9.5V20h13V9.5"/>',users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18.5 14a6.5 6.5 0 0 1 3 6"/>',
wine:'<path d="M7 3h10l-.6 5.4a4.4 4.4 0 0 1-8.8 0z"/><path d="M12 13v8M8 21h8"/>',map:'<path d="M9 4L3 6.5v13.5L9 17.5l6 2.5 6-2.5V4l-6 2.5z"/><path d="M9 4v13.5M15 6.5V20"/>',calc:'<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8.5 7h7M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01M8.5 15h.01M12 15h.01M15.5 15v2.5"/>'},c={},o={hero:function(t){var e=[];return t.img&&e.push(m("picture",{},[m("source",{media:"(max-width:860px)",srcset:M(t.imgM||t.img,900,1240)}),m("img",{
src:M(t.img,1920,1100),alt:t.alt||"",fetchpriority:"high"})])),e.push(m("div",{class:"gp-w"},[t.eyebrow?m("span",{class:"gp-eb",text:t.eyebrow}):null,m("h1",{text:t.title}),t.lead?m("p",{class:"gp-lead"},w(t.lead)):null,t.ctas?k(t.ctas):null,t.chips?m("ul",{class:"gp-chips"},t.chips.map((function(t){return m("li",{text:t})}))):null])),m("section",{class:"gp-hero"+(t.img?"":" b"),id:t.id||null},e)},steps:function(t){return C(t,[m("ol",{class:"gp-steps"},t.items.map((function(t){
return m("li",{},[m("b",{text:t[0]}),m("p",{},w(t[1]))])}))),t.note?m("p",{class:"gp-note"},w(t.note)):null])},cards:function(t){var e=m("div",{class:"gp-cards",style:"--cols:"+(t.cols||Math.min(3,t.items.length))},t.items.map((function(t){var e=m("div",{class:"gp-cb"},[t.icon?m("span",{class:"gp-ic"},[v(t.icon)]):null,m("b",{text:t.t}),t.x?m("p",{},w(t.x)):null,t.href&&t.more?m("span",{class:"gp-more",text:t.more+" →"}):null]),n=[t.img?m("img",{src:M(t.img,720,540),alt:t.alt||"",loading:"lazy"
}):null,e];return t.href?m("a",{class:"gp-card",href:t.href},n):m("div",{class:"gp-card"},n)})));return C(t,[e,t.note?m("p",{class:"gp-note"},w(t.note)):null])},split:function(t){var e=m("div",{class:"gp-st"},[t.kicker?m("span",{class:"gp-kick",text:t.kicker}):null,t.title?m("h2",{text:t.title}):null].concat((t.text||[]).map((function(t){return m("p",{},w(t))})),[t.items?m("ul",{class:"gp-list"},t.items.map(L)):null,t.ctas?k(t.ctas):null]));return m("section",{class:"gp-sec",id:t.id||null
},[m("div",{class:"gp-w"},[m("div",{class:"gp-split"+(t.flip?" f":"")},[m("div",{class:"gp-si"},[m("img",{src:M(t.img,1e3,800),alt:t.alt||"",loading:"lazy"})]),e])])])},list:function(t){return C(t,[m("ul",{class:"gp-list"},t.items.map(L)),t.ctas?k(t.ctas):null])},prices:function(t){var e=m("dl",{class:"gp-prices"},t.rows.map((function(t){return m("div",{class:"gp-pr"},[m("dt",{text:t[0]}),m("dd",{},[m("span",{class:"gp-pv"},w(t[1])),t[2]?m("span",{class:"gp-pn"},w(t[2])):null])])})))
;return C(t,[e,t.foot||t.link?m("div",{class:"gp-pf"},[t.foot?m("p",{},w(t.foot)):null,t.link?b(t.link[1],t.link[0]+" →"):null]):null])},faq:function(t){return C(t,[m("div",{class:"gp-faq"},t.items.map((function(t){return m("details",{},[m("summary",{text:t[0]}),m("p",{},w(t[1]))])})))])},quotes:function(t){return C(t,[m("div",{class:"gp-quotes"},t.items.map((function(t){return m("blockquote",{class:"gp-q"},[m("i",{text:"★★★★★","aria-label":"5 stars"}),m("p",{text:"“"+t[0]+"”"}),m("div",{
class:"gp-qf"},[m("b",{text:t[1]}),t[2]?", "+t[2]:null])])})))])},cta:function(t){return m("section",{class:"gp-w",id:t.id||null},[m("div",{class:"gp-cta"},[m("div",{},[m("h2",{text:t.title}),t.text?m("p",{},w(t.text)):null]),k(t.ctas)])])}},u=n.u={h:m,icon:v,im:M,wa:x,money:function(t){return"$"+(Math.round(100*t)/100).toFixed(2)},num:function(t){var e=parseFloat(String(null==t?"":t).replace(/[^0-9.\-]/g,""));return isNaN(e)?0:e},truthy:y,on:function(t){
return""===String(null==t?"":t).trim()||y(t)},rich:w,link:b,btns:k,head:S,sec:C,gviz:function(t,e){var n=t+"|"+(e||""),r="ggsx_pg_"+n.replace(/[^a-z0-9]/gi,"").slice(0,60);if(c[n])return c[n];try{var l=JSON.parse(sessionStorage.getItem(r)||"null");if(l&&Date.now()-l.t<6e5)return c[n]=Promise.resolve(l.rows)}catch(t){}
var i="https://docs.google.com/spreadsheets/d/"+a.sheetId+"/gviz/tq?tqx=out:json&headers=1&sheet="+encodeURIComponent(t)+(e?"&tq="+encodeURIComponent(e):"")+"&t="+Math.floor(Date.now()/6e4);return c[n]=fetch(i,{cache:"no-store"}).then((function(e){if(!e.ok)throw new Error(t+" "+e.status);return e.text()})).then((function(t){var e=JSON.parse(t.slice(t.indexOf("{"),t.lastIndexOf("}")+1)).table,n=e.cols.map((function(t){return String(t.label||"").trim().toLowerCase()})),a=e.rows.map((function(t){
var e={};return n.forEach((function(n,a){var r=t.c[a];e[n]=r&&null!=r.v?String(r.v).trim():""})),e}));try{sessionStorage.setItem(r,JSON.stringify({t:Date.now(),rows:a}))}catch(t){}return a})).catch((function(t){throw delete c[n],t}))},toast:function(t,n,a){l||(l=m("div",{class:"gp-toast",role:"status","aria-live":"polite"}),e.body.appendChild(l)),l.innerHTML="",l.appendChild(e.createTextNode(t)),n&&l.appendChild(m("a",{href:a,text:n})),l.classList.add("on"),clearTimeout(i),
i=setTimeout((function(){l.classList.remove("on")}),3600)},cfg:a},p=[],h={},d=0,g=null;n.run=E,n.ready=1;var f=!1;new MutationObserver((function(){f||(f=!0,(t.requestAnimationFrame||setTimeout)((function(){f=!1,E()})))})).observe(e.documentElement,{childList:!0,subtree:!0}),E()}function m(t,n,a){var r,l=e.createElement(t)
;if(n)for(r in n)null!=n[r]&&!1!==n[r]&&("class"===r?l.className=n[r]:"text"===r?l.textContent=n[r]:"html"===r?l.innerHTML=n[r]:"on"===r.slice(0,2)?l.addEventListener(r.slice(2),n[r]):l.setAttribute(r,n[r]));return(a||[]).forEach((function(t){null!=t&&!1!==t&&l.appendChild("string"==typeof t||"number"==typeof t?e.createTextNode(String(t)):t)})),l}function v(t){var n=e.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("viewBox","0 0 24 24"),
n.setAttribute("aria-hidden","true"),n.innerHTML=s[t]||s.check,n}function M(t,e,n){if(!t)return"";var a=function(t){var e=/static\.wixstatic\.com\/media\/([^\/?#]+)/.exec(t||"");return e?e[1]:/^https?:/.test(t||"")?null:t}(t);if(a)return"https://static.wixstatic.com/media/"+a+"/v1/fill/w_"+e+",h_"+n+",al_c,q_80,enc_auto/"+a;var r=/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:.*&)?id=)([\w-]+)/.exec(t);return r?"https://lh3.googleusercontent.com/d/"+r[1]+"=w"+e:t}function x(t){
return"https://wa.me/"+a.wa+"?text="+encodeURIComponent(t||"Hi GrocerGoSx")}function y(t){return/^(true|yes|y|1|x|✓|✔)$/i.test(String(null==t?"":t).trim())}function w(t){var e,n=[],a=/\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g,r=0;for(t=String(null==t?"":t);e=a.exec(t);)e.index>r&&n.push(t.slice(r,e.index)),e[1]?n.push(m("b",{text:e[1]})):n.push(b(e[3],e[2])),r=a.lastIndex;return r<t.length&&n.push(t.slice(r)),n}function b(t,n,a){var r=/^(https?:|mailto:|tel:)/.test(t);return m("a",{href:t,
class:a||null,target:/^https?:/.test(t)?"_blank":null,rel:r?"noopener":null,onclick:"#"===t.charAt(0)?function(n){var a=e.getElementById(t.slice(1));a&&(n.preventDefault(),a.scrollIntoView({behavior:"smooth",block:"start"}))}:null},[n])}function k(t){return m("div",{class:"gp-btns"},(t||[]).map((function(t,e){var n=null==t.s?e>0:t.s;return b(function(t){return t.href?t.href:null!=t.wa?x(t.wa):null!=t.mail?"mailto:"+a.email+"?subject="+encodeURIComponent(t.mail):"#"}(t),t.t,"gp-btn"+(n?" s":""))
})))}function S(t){return t.title||t.sub?m("div",{class:"gp-sh"},[t.kicker?m("span",{class:"gp-kick",text:t.kicker}):null,t.title?m("h2",{text:t.title}):null,t.sub?m("p",{},w(t.sub)):null]):null}function C(t,e,n){return m("section",{class:"gp-sec"+(n?" "+n:""),id:t.id||null},[m("div",{class:"gp-w"},[S(t)].concat(e))])}function L(t){return m("li",{},[m("span",{class:"gp-tick"},[v("check")])].concat([m("span",{},w(t))]))}function E(){p.length&&(p=p.filter((function(e){
var a=n.blocks[e.b.type],r=null;if(!a)return!0;try{r=a(e.b,u)}catch(n){t.console&&console.warn("[GGSX pages]",e.b.type,n)}return e.el.parentNode&&(r?e.el.parentNode.replaceChild(r,e.el):e.el.parentNode.removeChild(e.el)),!1})));var r=function(){var t=/[?&]ggsx_page=([a-z0-9-]+)/i.exec(location.search);if(t&&n.pages["/"+t[1].toLowerCase()])return"/"+t[1].toLowerCase();var e=location.pathname.replace(/\/+$/,"").toLowerCase()||"/";return n.pages[e]?e:null}(),l=e.getElementById("ggsx-page")
;if(!r)return d=0,void e.documentElement.classList.remove("gp-on");if(!l||l.getAttribute("data-key")!==r){var i=e.querySelector('main[id^="PAGE_SECTIONS"] > section')||e.querySelector("main > section")||e.querySelector("main");if(!i||!e.body.contains(i))return clearTimeout(g),void(++d<80&&(g=setTimeout(E,250)));l&&l.parentNode&&l.parentNode.removeChild(l);var s=h[r]||(h[r]=function(e,r){var l=m("div",{id:"ggsx-page","data-key":r});return(e.blocks||[]).forEach((function(e){var a=function(e){
var a=o[e.type]||n.blocks[e.type],r=null;if(!a)return r=m("div",{class:"gp-pend",hidden:""}),p.push({el:r,b:e}),r;try{r=a(e,u)}catch(n){t.console&&console.warn("[GGSX pages]",e.type,n)}return r}(e);a&&l.appendChild(a)})),!1!==e.links&&l.appendChild(m("div",{class:"gp-w"},[m("nav",{class:"gp-links","aria-label":"More from GrocerGoSx"},a.links.filter((function(t){return t[1]!==r})).map((function(t){return m("a",{href:t[1],text:t[0]})})))])),l}(n.pages[r],r));if(i.appendChild(s),function(t,e){
function n(n){n!==e&&n!==t&&"SCRIPT"!==n.tagName&&"STYLE"!==n.tagName&&n.style.setProperty("display","none","important")}[].forEach.call(t.children,n),t.parentNode&&"MAIN"===t.parentNode.tagName&&[].forEach.call(t.parentNode.children,function(x){"SECTION"!==x.tagName&&n(x)})}(i,s),e.documentElement.classList.add("gp-on"),location.hash&&location.hash.length>1){var c=e.getElementById(location.hash.slice(1));c&&s.contains(c)&&setTimeout((function(){c.scrollIntoView({block:"start"})}),300)}}}}();
} catch (e) { try { console.warn('[GGSX bundle] Pages 2 Engine', e); } catch (e2) {} }
__ggsxE("86b8c204-87a2-48fd-a7b2-bf7ca042b038#0");

/* ===== GrocerGoSx Pages 3 Texts: Villa Stocking & Packages (4535b87e-8cb0-41c5-a02c-b4f6f7fe5dd6, rev 12) ===== */
__ggsxB("4535b87e-8cb0-41c5-a02c-b4f6f7fe5dd6#0");
try {
!function(){var e=window,t=(document,e.GGSX_PAGES=e.GGSX_PAGES||{});t.pages=t.pages||{},t.blocks=t.blocks||{};var o="/shop-now",a="https://wa.me/590690779119?text="+encodeURIComponent("Hi GrocerGoSx, I'd like my villa stocked before I arrive. Here's my list:");t.pages["/villa-stocking"]={blocks:[{type:"hero",img:"85c3c2_6612e101d1b047ffbc3abfbaa2b3b707~mv2.jpg",alt:"A stocked villa kitchen with fresh fruit and an ocean view",eyebrow:"Pre-arrival villa stocking",
title:"Arrive to a fully stocked villa.",lead:"Send your list before you fly. We shop the island's best markets, deliver to your villa and put everything away, so your first evening starts with a cold drink instead of a supermarket run.",ctas:[{t:"Stock my villa",href:o},{t:"See ready-made kits",href:"/stocking-packages"}],chips:["Nothing charged today","Fridge & freezer put away","Photo when it's done","Dutch & French side"]},{type:"split",img:"11062b_0326238ca4f3477ea16f44a2108280d7~mv2.jpg",
alt:"Grocery bags unpacked on a kitchen counter",kicker:"What's included",title:"Everything ready before you check in",text:["You land, collect the keys and the kitchen is already done. Every stocking includes:"],
items:["Shopping on delivery day at the island's best markets","Delivery before check-in to your villa, condo or rental","Fridge, freezer and pantry put away, with your host's OK","A photo of your stocked kitchen when we're done","The closest match if something's unavailable, or a message first, your choice","Beer, wine, spirits and ice on request (18+)"]},{type:"steps",title:"How it works",sub:"Four steps, and about two minutes of your time.",
items:[["Fill your basket","Shop 3,000+ items, add a [ready-made kit](/stocking-packages) or [message us your list]("+a+"). No list yet? We'll send you a starter list."],["Check out with your arrival details","Your villa, arrival date and a delivery window that ends before check-in, plus your host's contact. Nothing is charged at checkout."],["We confirm by message","We check the list with you and send your total with a secure payment link before we shop."],["We shop, stock and send a photo","On delivery day we shop, put everything away and send you a photo of your kitchen."]]
},{type:"prices",title:"Simple, all-in pricing",sub:"The same pricing as every GrocerGoSx order. All prices include applicable taxes.",rows:[["Groceries","GrocerGoSx concierge prices","About {{catalogue_markup}} over the shelf price ({{liquor_markup}} on beer, wine and spirits), which covers choosing, buying and the time in-store. On the part of a till receipt above $300, 15%."],["Service Fee","{{run_rate}} of your order","{{Fee_limits}}, put-away included. Pre-arrival stockings start from $150 of groceries."],["Delivery","{{delivery_value}}","{{Delivery_how}}. Anywhere on the island."],["Taxes","Included","Nothing extra is added at checkout, and nothing is added after your quote."]],
foot:"Nothing is charged at checkout. You get your confirmed total and a payment link before we shop.",link:["Full pricing & fees","/pricing"]},{type:"kits",title:"Or start from a ready-made kit",sub:"Add a kit or two to your basket and we'll stock them with the rest of your order.",ids:["g3064","g3061","g3063"],all:!0},{type:"quotes",title:"From villa owners and guests",
items:[["Excellent service. Dwayne confirmed items requested were correct by sending photos and delivered exactly as requested in a timely fashion. Definitely recommend for any villa stay!","Diana McKennon","Villa property owner"],["I had a great experience with GrocerGoSx! We needed groceries for our Airbnb last minute, and they responded right away. The ordering process was quick and efficient, and our groceries were delivered within just a couple of hours.","Carmen Estevez","Villa guest"]]},{
type:"faq",title:"Questions before you book",
items:[["How far ahead should I book?","As soon as your dates are set. In high season, booking early gets you the delivery window you want. Arriving sooner than that? Message us and we'll do our best."],["Who lets you into the villa?","Your host or property manager. Add who to contact (or how to get in) to your checkout notes, and we arrange access before you arrive. We only go in with their authorisation."],["Do you stock villas on the French side?","Yes, anywhere on the island: {{delivery_anywhere}}. [Check your area](/service-area)."],["What if something isn't available?","Island supply varies. We pick the closest match or message you first, whichever you prefer, or remove the item and refund the difference."],["When do I pay?","Not at checkout. We confirm your total by message and send a secure payment link before we shop."],["Can you add drinks and spirits?","Yes: beer, wine, spirits, mixers and ice. Alcohol is supplied only to guests aged 18 or over."]]
},{type:"cta",title:"Your villa, stocked before you land.",text:"Fill your basket and check out in about two minutes; nothing is charged today. Prefer to chat? WhatsApp, iMessage or text +590 690 77 9119.",ctas:[{t:"Stock my villa",href:o},{t:"Message us",wa:"Hi GrocerGoSx, I'd like my villa stocked before I arrive."}]}]},t.pages["/stocking-packages"]={blocks:[{type:"hero",img:"11062b_a0dfd705a83f46f2a1e461b6045be754~mv2.jpg",alt:"A basket of groceries on an orange background",
eyebrow:"Stocking packages",title:"Ready-made kits for arrival day.",lead:"Pick a kit, or a few, and we'll have them waiting in your villa. Every kit is shopped on delivery day, and you can top it up with anything from the shop.",ctas:[{t:"Browse the kits",href:"#kits"},{t:"Send your own list",href:"/villa-stocking"}],chips:["Shopped on delivery day","Put away before you arrive","Top up with 3,000+ items","Taxes included"]},{type:"kits",id:"kits",title:"Choose your kits",
sub:"Kit prices cover the goods. The service fee is added to the order, the same as any grocery order: {{run_rates}}, {{with_delivery}}."},{type:"steps",title:"How kits work",
items:[["Add kits to your basket","Mix and match kits, then add anything else you need from the [shop](/shop-now)."],["Check out with your arrival details","Your villa, arrival date and delivery window. Add your host's contact in the notes so we can arrange access."],["We confirm by message","We check the order with you and send your total with a secure payment link before we shop."],["Waiting when you arrive","Delivered before check-in and put away with your host's OK."]]},{type:"split",
flip:!0,img:"11062b_0508673a9f874b39a60b7c873455f00c~mv2.jpg",alt:"A villa pool at dusk",kicker:"Prefer it tailored?",title:"Your list, your brands",text:["Kits are a quick start. If you'd rather choose every item yourself, shop the full catalogue or send us your own list, with your favourite brands and any dietary needs."],ctas:[{t:"Villa stocking",href:"/villa-stocking"},{t:"Shop groceries",href:"/shop-now"}]},{type:"faq",title:"Good to know",
items:[["Can I change what's in a kit?","Yes. Add a note at checkout to swap, remove or add items, and we'll confirm the changes with you before we shop."],["Do kit prices include the service fee?","Kit prices cover the goods. The {{run_rate}} service fee ({{fee_min_short}}) is added to the order {{with_delivery}}, and all prices include applicable taxes. [See pricing](/pricing)."],["What if an item in a kit is unavailable?","We replace it with the closest match or message you first, your choice, and refund the difference if anything is left out."],["Can kits be delivered during my stay?","Of course. Pick any delivery date and window at checkout."]]
},{type:"cta",title:"Not sure what you'll need?",text:"Tell us how many guests and how long you're staying, and we'll suggest the right mix.",ctas:[{t:"Message us",wa:"Hi GrocerGoSx, can you suggest stocking kits for our stay? We are … guests for … nights."},{t:"View basket",href:"/shop-now#basket"}]}]},t.run&&t.run()}();
} catch (e) { try { console.warn('[GGSX bundle] Pages 3 Texts: Villa Stocking & Packages', e); } catch (e2) {} }
__ggsxE("4535b87e-8cb0-41c5-a02c-b4f6f7fe5dd6#0");

/* ===== GrocerGoSx Pages 5 Texts: Pricing & Service Area (1da7615f-93f9-4952-af04-df827390463a, rev 18) ===== */
__ggsxB("1da7615f-93f9-4952-af04-df827390463a#0");
try {
!function(){var e=window,r=(document,e.GGSX_PAGES=e.GGSX_PAGES||{});r.pages=r.pages||{},r.blocks=r.blocks||{},r.pages["/pricing"]={blocks:[{type:"hero",eyebrow:"Pricing & fees",title:"Clear pricing. No surprises.",lead:"Every price on GrocerGoSx already includes applicable taxes, and {{delivery_anywhere}}. Here's exactly how your total is worked out.",ctas:[{t:"Estimate your total",href:"#estimate"},{t:"Shop groceries",href:"/shop-now"}],
chips:["Taxes included","{{Delivery_chip}} island-wide","Every fee in your quote","Shopping bags on us"]},{type:"prices",title:"Groceries, stocking and pickups",sub:"How every grocery, villa stocking and restaurant pickup total is built: your items plus {{fee_and_delivery}}. Nothing is added after your quote.",
rows:[["Groceries & supermarket items","GrocerGoSx concierge prices","About {{catalogue_markup}} over the shelf price ({{liquor_markup}} on beer, wine and spirits). That covers choosing, buying and the time in-store, and the price you see in the shop is the price you pay."],["Large stockings","15% over the shelf above $300","On the part of a till receipt above $300, groceries are charged at 15% over the shelf instead of {{catalogue_markup}}. It shows as its own line on your invoice."],["Minimum basket","{{min_order}}","Shop orders need {{min_order}} of items in the basket, taxes included. Restaurant pickups and errands have no minimum."],["Service Fee","{{run_rate}} of your order","For shopping, selection and handling: {{fee_limits}}. Standing orders, regulars and guests of our partner properties count as booked ahead. {{Delivery_sentence}}."],["Delivery Fee","{{delivery_value}}","Anywhere on the island, Dutch or French side, once per run, however many stops. {{Delivery_how_full}}."],["Taxes","Included","All prices and fees already include applicable taxes, so no tax is added at checkout."],["Restaurant pickup","Menu price + {{service_fee_rate}} service fee","Your food at the restaurant's menu price, with the restaurant's receipt, plus the {{service_fee_rate}} service fee for ordering, paying and carrying. On a grocery run each restaurant adds {{restaurant_pickup_fee}} delivery/waiting time. On its own, a restaurant order has a {{restaurant_only_fee}} minimum fee ({{restaurant_only_fee_french}} when the French side is involved) and a {{restaurant_only_delivery}} delivery fee; each extra restaurant adds {{restaurant_pickup_fee}}."]]
},{type:"prices",title:"Errands and other services",
rows:[["Errands & bill payments","Cost + {{run_rate}} service fee","Whatever we pay for you, a bill, a named item or a pickup, is passed on at exact cost with the receipt, plus the {{run_rate}} service fee ({{fee_min_short}}, {{delivery_short}}). Or a {{errand_stop_fee}} extra stop on a grocery or pickup run."],["Pharmacy","Receipt + {{run_rate}} service fee","Charged as an errand: the {{run_rate}} service fee ({{fee_min_short}}, {{delivery_short}}) on its own, or a {{errand_stop_fee}} extra stop on a grocery or pickup run. Prescriptions welcome."],["Laundry, wash & fold","{{laundry_per_lb}} per lb + {{laundry_fee_each_way}} each way","Weighed at pickup, then collected and returned with your grocery or pickup orders (as an add-on to a run)."],["Late Night Snack Run","$65 late-night fee + your items","Thursday to Saturday, 9:00–11:30 PM; order by 9:30 PM. Items at GrocerGoSx prices, from $50 of items. The $65 covers the run and delivery, with no Service Fee on top."],["Beach & baby equipment","Partner price + {{run_rate}} service fee","Delivered and collected for {{errand_stop_fee}} each way with a run, or as its own trip with the {{run_rate}} service fee, {{delivery_short}}."],["Custom requests","Quoted from the same pieces","The {{run_rate}} service fee on what we buy for you ({{delivery_short}}) and any extra stops. Nothing is booked or purchased until you approve the total."]]
},{type:"calc",id:"estimate",title:"Estimate your total",sub:"A quick estimate for a grocery, stocking or pickup run. Groceries at GrocerGoSx prices, restaurant food at the menu price."},{type:"cards",title:"How you pay",cols:3,items:[{icon:"chat",t:"Confirmed before we shop",x:"Nothing is charged when you check out or send a list. We confirm your total by message first; on a first order over $300 we take a card hold or a 50% deposit."},{icon:"shield",t:"Secure payment link",x:"Pay by card through a secure link before we shop or dispatch, or by transfer or cash: the same price either way. All prices are in US dollars."},{icon:"receipt",t:"Receipts and invoices",
x:"Pass-through items come with the receipt, and every order gets an itemised invoice."}]},{type:"faq",title:"Substitutions, refunds and the fine print",
items:[["What if an item is unavailable?","Island supply varies. We offer the closest substitute or remove the item and refund the difference, and we message you before substituting anything unusual."],["Something arrived damaged or missing?","Message us within 24 hours of delivery with a photo, and we'll replace the item on the next run or refund it, your choice."],["Can I cancel?","Cancellations before we start shopping are refunded in full. Once shopping has started, the goods already purchased are charged."],["How is the service fee worked out?","It's {{run_rate}} of your order, {{fee_limits}}. The minimum covers the time and drive every run takes; the cap keeps big villa stockings from overpaying. {{Delivery_faq}}."],["Is there a minimum order?","Yes: a shop basket needs at least {{min_order}} of items, taxes included; restaurant pickups and errands have no minimum. Pre-arrival stockings start from $150 of groceries and the Late Night Snack Run from $50 of items."],["Do you charge for bags?","No. Shopping bags are on us."],["Can you deliver alcohol?","Yes. Wine, beer and spirits are supplied only to adults aged 18 or over, and valid ID may be requested on delivery."]]
},{type:"cta",title:"Ready when you are.",text:"Fill a basket, stock your villa before you land, or just send us your list.",ctas:[{t:"Shop groceries",href:"/shop-now"},{t:"Send your list",wa:"Hi GrocerGoSx, here's my list: "}]}]},r.pages["/service-area"]={blocks:[{type:"hero",img:"895d4dc89f5e473ba1e2c390095fdf89.jpg",alt:"A Caribbean beach with palm trees and green hills",eyebrow:"Service area",title:"One island, both sides, {{delivery_chip}}.",
lead:"We deliver to villas, condos, hotels and marinas across Dutch Sint Maarten and French Saint-Martin. {{Delivery_anywhere}}; find your area to see which side you're on.",ctas:[{t:"Find your area",href:"#find"},{t:"Shop groceries",href:"/shop-now"}],chips:["{{Delivery_chip}}, Dutch side","{{Delivery_chip_fr}}, French side","Daily, 8:30 AM – 11 PM"]},{type:"areas",id:"find",title:"Find your area",sub:"Type your area, resort, hotel or marina to see your side of the island."},{type:"cards",title:"Good to know",cols:4,items:[{
icon:"clock",t:"Delivery windows",x:"Daily from 8:30 AM to 11 PM. Pick a window when you order; same-day windows are often available."},{icon:"star",t:"Late-night runs",x:"Thursday to Saturday, 9:00–11:30 PM, Dutch side to start. French side on request.",href:"https://wa.me/590690779119?text="+encodeURIComponent("Hi GrocerGoSx, I'd like a Late Night Snack Run."),more:"Order a snack run"},{icon:"map",t:"High season",
x:"Island traffic can be heavy in high season, so we plan runs by side of the island. Booking ahead gets you the window you want."},{icon:"boat",t:"Marinas",x:"We deliver to the main marinas on both sides of the island.",href:"/yacht-provisioning",more:"Yacht provisioning"}]},{type:"cta",title:"Staying somewhere we haven't listed?",text:"Send us the address and we'll confirm your side of the island.",ctas:[{t:"Message us",wa:"Hi GrocerGoSx, can you deliver to: "},{
t:"Shop groceries",href:"/shop-now"}]}]},r.run&&r.run()}();
} catch (e) { try { console.warn('[GGSX bundle] Pages 5 Texts: Pricing & Service Area', e); } catch (e2) {} }
__ggsxE("1da7615f-93f9-4952-af04-df827390463a#0");

/* ===== GrocerGoSx Pages 4 Texts: Yacht & Partners (d63d0170-b5a8-437c-88dc-994a121cc99c, rev 11) ===== */
__ggsxB("d63d0170-b5a8-437c-88dc-994a121cc99c#0");
try {
!function(){var e=window,r=(document,e.GGSX_PAGES=e.GGSX_PAGES||{});r.pages=r.pages||{},r.blocks=r.blocks||{};var t="Hi GrocerGoSx, provisioning request.\nBoat: \nMarina / berth: \nDeparture date & time: \nGuests & crew: \nList: ";r.pages["/yacht-provisioning"]={blocks:[{type:"hero",img:"0cf27a8746ec4dd887e5a716f301b49b.jpg",alt:"Aerial view of a marina with yachts on turquoise water",eyebrow:"Yacht & charter provisioning",title:"Provisioned and on board before you sail.",
lead:"For captains, chefs and charter guests. Send your provisioning list and departure time, and we'll shop the island and deliver to your marina on the Dutch or French side.",ctas:[{t:"Send your provisioning list",wa:t},{t:"Shop the catalogue",href:"/shop-now"}],chips:["Dutch & French marinas","Timed to your departure","Itemised invoice"]},{type:"cards",title:"Built around the boat",sub:"Charter provisioning is its own job, and we treat it that way.",cols:4,items:[{icon:"list",
t:"Your list, any format",x:"A spreadsheet, a photo of the chef's notes or a quick message. We confirm quantities, brands and swaps before we shop."},{icon:"clock",t:"Timed to departure",x:"Tell us when you sail and we schedule the run so you're stocked before you cast off."},{icon:"wine",t:"Drinks, ice and spirits",x:"Water, soft drinks, beer, wine, spirits, mixers and ice. Alcohol is supplied to adults 18+ only."},{icon:"receipt",t:"Itemised invoice",
x:"Every item on your invoice, so the captain or broker can reconcile the provisioning budget."}]},{type:"split",img:"11062b_83042b7ca3e64eafa83066ac6aac2f0e~mv2.jpeg",alt:"Fresh fruit and drinks laid out on a yacht deck",kicker:"For charter guests",title:"Step aboard to your favourites",text:["Joining a charter? Send us your preferences before you arrive, from snacks and wine to a week of breakfasts, and we'll coordinate the delivery with your captain or broker."],
items:["Fresh produce, bakery, deli and pantry","Your favourite brands, wherever the island has them","Special diets and allergies noted on the order"],ctas:[{t:"Send your preferences",wa:"Hi GrocerGoSx, we're joining a charter and would like provisioning.\nBoat: \nMarina: \nDates: \nPreferences: "}]},{type:"marinas",id:"marinas",title:"Marinas we deliver to",sub:"{{Delivery_chip}} to every marina on the island, Dutch side and French side."},{type:"steps",title:"How it works",
items:[["Send your list","With the boat name, marina, berth if you have it, and your departure time."],["We confirm by message","Quantities, brands and swaps, plus your total and a secure payment link."],["We shop","Shopped on the day, with anything hard to find confirmed with you first."],["Delivered to your marina","Handed over to the crew, ready to stow."]]},{type:"prices",title:"Same simple pricing",sub:"All prices include applicable taxes.",
rows:[["Provisions","GrocerGoSx concierge prices","About {{catalogue_markup}} over the shelf price ({{liquor_markup}} on beer, wine and spirits); on the part of a till receipt above $300, 15%. Restaurant orders and anything you've pre-paid are passed through at exactly what we paid, plus the same service fee."],["Service Fee","{{run_rate}} of your order","{{Fee_min_short}} (standing orders count as booked ahead). Never more than {{service_fee_max}}."],["Delivery","{{delivery_value}}","{{Delivery_how}}. To any marina on the island."],["Taxes","Included","Nothing extra is added at checkout."]],link:["Full pricing & fees","/pricing"]},{type:"faq",title:"Captains often ask",
items:[["Can you deliver to a boat at anchor?","We deliver to the marina. If you're anchored out, tell us which dock your tender can reach and we'll meet the crew there."],["How much notice do you need?","As much as you can give, especially for big provisioning lists and in high season. Same-day runs are often possible, so message us to check."],["Can you find specific brands?","Usually. Island supply varies, so we confirm anything hard to find before we shop and suggest the closest match if it's unavailable."],["How do we pay?","We send your total and a secure card payment link before we shop, and you get an itemised invoice for the run."]]
},{type:"cta",title:"Sailing soon?",text:"Send your list and departure time: WhatsApp, iMessage or text +590 690 77 9119, or email grocergosx@gmail.com.",ctas:[{t:"Send your provisioning list",wa:t},{t:"Email us",mail:"Provisioning request"}]}]},r.pages["/partners"]={blocks:[{type:"hero",img:"c2a99153f2b44e7a86654564e2f74114.jpg",alt:"A modern villa with a pool and sun deck",eyebrow:"For hosts & property managers",title:"Five-star arrivals, without the extra errands.",
lead:"Partner with GrocerGoSx and your guests can have their villa stocked before they land, groceries delivered during their stay and errands taken care of, while you stay focused on your properties.",ctas:[{t:"Become a partner",href:"#join"},{t:"Message Dwayne",wa:"Hi Dwayne, I look after properties in St. Maarten and I'd like to hear about the GrocerGoSx partner programme."}],chips:["Both sides of the island","Your own guest link","Locally owned"]},{type:"cards",title:"What your guests get",
cols:4,items:[{icon:"home",t:"A stocked villa on arrival",x:"Groceries, drinks and essentials put away before check-in, with a photo when it's done."},{icon:"bag",t:"Groceries and restaurant pickup",x:"3,000+ supermarket items and island restaurants, delivered during their stay."},{icon:"sun",t:"Errands, laundry and gear",x:"Pharmacy runs, laundry, beach and baby equipment, and custom requests."},{icon:"chat",t:"Fast, personal replies",
x:"Real people on WhatsApp, iMessage or text, with photos to confirm orders."}]},{type:"cards",title:"What you get as a partner",sub:"We share the partner terms on request. [Ask us](#join) and we'll walk you through them.",cols:4,items:[{icon:"star",t:"Partner rate",x:"{{Partner_fee}} on every order for your properties and owners, and for the guests you refer."},{icon:"key",t:"Welcome cards with your QR code",x:"Branded cards for each property, with your own GrocerGoSx link so guests can order in seconds."
},{icon:"gift",t:"A thank-you for every referral",x:"Guests who order through your link are tagged to you, and every order they place earns you a referral thank-you."},{icon:"shield",t:"Less on your plate",x:"No more last-minute supply runs for guests. We handle shopping, delivery and access, coordinated with you."}]},{type:"steps",title:"How your partner link works",
items:[["We set you up","You get a personal link, like grocergosx.com/?ref=yourname, plus QR welcome cards for each property."],["Guests tap or scan","They land on GrocerGoSx with a welcome from you, and for 30 days their orders are marked as referred by you."],["We look after them","Stocking, groceries and errands for their whole stay, with access arranged through you."],["You're thanked for every order","Your partner rate and referral thank-you, as agreed with you."]]},{type:"split",flip:!0,
img:"11062b_28f51d7e7575438db0c28203e4494c00~mv2.jpeg",alt:"A key in the door of a guest room",kicker:"Who it's for",title:"Made for island hospitality",text:["If guests stay in your properties, we can make their stay easier:"],items:["Property managers and villa rental agencies","Airbnb and VRBO hosts","Villa owners who rent out their home","Concierge desks, charter brokers and boutique hotels"]},{type:"partnerForm",id:"join",title:"Become a partner",
sub:"Tell us a little about your properties and we'll get back to you with the partner terms."},{type:"quotes",title:"Trusted by owners and guests",
items:[["Excellent service. Dwayne confirmed items requested were correct by sending photos and delivered exactly as requested in a timely fashion. Definitely recommend for any villa stay!","Diana McKennon","Villa property owner"],["Grocery and concierge service was perfect! They stayed in touch and we got everything we ordered. Absolute luxury for the convenience - thank you!","Cori Bavis","Airbnb guest"]]},{type:"cta",title:"Questions first?",
text:"Message Dwayne directly: WhatsApp, iMessage or text +590 690 77 9119, or email grocergosx@gmail.com.",ctas:[{t:"Message Dwayne",wa:"Hi Dwayne, I have a question about the GrocerGoSx partner programme."},{t:"Email us",mail:"Partner programme"}]}]},r.run&&r.run()}();
} catch (e) { try { console.warn('[GGSX bundle] Pages 4 Texts: Yacht & Partners', e); } catch (e2) {} }
__ggsxE("d63d0170-b5a8-437c-88dc-994a121cc99c#0");

/* ===== GrocerGoSx Pages 6 Kits & Partner Form (a9a4947a-ae8e-4ea1-b898-ca85734873af, rev 3) ===== */
__ggsxCss("", ".gp-kits{display:grid;grid-template-columns:repeat(var(--kc,3),minmax(0,1fr));gap:18px}\n.gp-kit{display:flex;flex-direction:column;background:#fff;border:1.5px solid var(--line);border-radius:22px;overflow:hidden;scroll-margin-top:110px}\n.gp-kit>img{width:100%;aspect-ratio:3/2;object-fit:cover;background:#eee8e0}\n.gp-kb{display:flex;flex-direction:column;gap:8px;padding:18px 20px 20px;flex:1}\n.gp-kt{display:flex;justify-content:space-between;align-items:baseline;gap:12px}\n#ggsx-page .gp-kt h3{font-family:inherit;font-size:18px;line-height:1.25;font-weight:700}\n.gp-kp{flex:none;font-weight:700;font-size:18px;color:var(--o)}\n.gp-kb>p{color:#4a4a4a;font-size:15px}\n.gp-ki{list-style:none;margin:2px 0 0;padding:0;display:grid;gap:6px}\n.gp-ki li{position:relative;padding-left:17px;font-size:14.5px;color:#333}\n.gp-ki li:before{content:\"\";position:absolute;left:0;top:.62em;width:7px;height:7px;border-radius:50%;background:var(--o)}\n#ggsx-page .gp-ktbc{font-size:14px;color:var(--mute)}\n.gp-ka{display:flex;align-items:center;gap:12px;margin-top:auto;padding-top:12px}\n#ggsx-page .gp-ka a{color:var(--o);font-weight:700;font-size:15px;text-decoration:none;white-space:nowrap}\n#ggsx-page .gp-add{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:48px;border-radius:999px;border:2px solid var(--o);background:var(--o);color:#fff;font-weight:700;font-size:15px;cursor:pointer}\n#ggsx-page .gp-add:hover{background:var(--od);border-color:var(--od)}\n.gp-add svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\n.gp-stp{display:inline-flex;align-items:center;border:2px solid var(--o);border-radius:999px;height:48px;background:#fff}\n#ggsx-page .gp-stp button{width:44px;height:100%;border:0;background:none;color:var(--o);font-size:22px;line-height:1;cursor:pointer;padding:0}\n.gp-stp span{min-width:26px;text-align:center;font-weight:700}\n.gp-oos{font-size:14px;color:var(--mute);border:1px solid var(--line);border-radius:999px;padding:6px 12px}\n@media (max-width:1000px){.gp-kits{--kc:2!important}\n}\n@media (max-width:640px){.gp-kits{--kc:1!important;gap:14px}\n.gp-kit>img{aspect-ratio:16/9}\n}.gp-fbox{max-width:860px;background:#fff;border:1.5px solid var(--line);border-radius:26px;padding:30px}\n.gp-form{display:grid;gap:16px}\n.gp-fr{display:grid;grid-template-columns:1fr 1fr;gap:16px}\n.gp-f{display:flex;flex-direction:column;gap:6px;font-weight:700;font-size:14px}\n#ggsx-page .gp-f input,#ggsx-page .gp-f select,#ggsx-page .gp-f textarea{width:100%;min-height:48px;border:1.5px solid #cfc9c1;border-radius:12px;padding:10px 14px;font-size:16px;font-weight:400;background:#fff;color:var(--ink);-webkit-appearance:none;appearance:none}\n#ggsx-page .gp-f select{background-image:linear-gradient(45deg,transparent 50%,#6b6b6b 50%),linear-gradient(135deg,#6b6b6b 50%,transparent 50%);background-position:calc(100% - 20px) 21px,calc(100% - 15px) 21px;background-size:5px 5px;background-repeat:no-repeat;padding-right:36px}\n#ggsx-page .gp-f textarea{min-height:96px;resize:vertical}\n#ggsx-page .gp-f input:focus,#ggsx-page .gp-f select:focus,#ggsx-page .gp-f textarea:focus{outline:2px solid var(--o);outline-offset:1px;border-color:var(--o)}\n.gp-fa{display:flex;align-items:center;gap:16px;flex-wrap:wrap}\n.gp-fa small{color:var(--mute);font-size:13px;max-width:360px}\n#ggsx-page .gp-fa .gp-btn{min-width:180px}\n#ggsx-page .gp-fa .gp-btn[disabled]{opacity:.6;cursor:default;transform:none}\n.gp-ferr{color:#b3261e;font-size:14px;min-height:0}\n.gp-ferr:empty{display:none}\n#ggsx-page .gp-ferr a{color:#b3261e;font-weight:700}\n.gp-fdone{display:flex;flex-direction:column;align-items:flex-start;gap:10px}\n#ggsx-page .gp-fdone h3{font-family:inherit;font-size:22px}\n.gp-fdone p{color:#444}\n@media (max-width:860px){.gp-fbox{padding:20px 16px;border-radius:20px}\n.gp-fr{grid-template-columns:1fr;gap:16px}\n}");
__ggsxB("a9a4947a-ae8e-4ea1-b898-ca85734873af#0");
try {
!function(){var e=window,t=document,n=e.GGSX_PAGES=e.GGSX_PAGES||{};n.pages=n.pages||{},n.blocks=n.blocks||{};var a="Villa Kits & Bundles",i={g3064:{img:"11062b_ca486774cd9a48d3a133d9a72979503e~mv2.jpg",line:"The essentials for your first night and morning.",inc:["Water, milk, eggs, bread","Butter, coffee, juice, fruit","Paper goods, dish liquid, bags"]},g3061:{img:"412a860ec5fd4353b26e677835debfde.jpg",line:"A week of breakfasts for four.",
inc:["Eggs, bread, butter, milk","Two cereals, yogurts, juice","Coffee, jam, fresh fruit"]},g3063:{img:"b8dca0781b524e98b11f4b52f04d2ab7.jpg",line:"Cupboard staples so you can cook from day one.",inc:["Rice, pasta, marinara","Olive oil, salt, pepper, seasoning","Beans, tuna, ketchup, mayo, coffee"]},g3060:{img:"a852e7997e8d4af584385f3729d0be89.jpg",line:"Cold drinks, snacks and fruit for a day on the sand.",
inc:["Water, Gatorade, Coca-Cola","Chips, cookies, granola bars","Grapes, watermelon, ice, cups"]},g3059:{img:"0f4505ed21564a4bbb0fd246bb987d06.jpg",line:"Everything for a grill night for four.",tbc:1},g3058:{img:"9f3037c83ca048ddb0485e3badb0a6a3.jpg",line:"Stock the villa bar for sundowners.",tbc:1},g3057:{img:"df8e2eb2e4ba65562ee78d9a0896010b.jpg",line:"Baby basics waiting when you land.",inc:["Huggies diapers, wipes","Gerber jars, baby powder","Fresh bananas"]},g3062:{
img:"fe42c46e27b745ad8d007f01c5e495b1.jpg",line:"Household basics for a longer stay.",inc:["Dish liquid, sponges","Laundry detergent, trash bags","Paper towels, toilet paper, Pine-Sol"]}},o=["g3064","g3061","g3063","g3060","g3059","g3058","g3057","g3062"],s="ggsx_basket";function r(){try{var e=JSON.parse(localStorage.getItem(s)||"null");if(e&&e.items)return e}catch(e){}return{v:1,items:{}}}function c(e){var t=r().items[e];return t?t.n:0}function l(t,n){n=Math.max(0,Math.min(99,0|n))
;var a=e.GGSX_SHOP_API;if(a&&a.add)try{a.add(t,n)}catch(e){}else{var i=r(),o=i.items[t.id],c=0;Object.keys(i.items).forEach((function(e){c=Math.max(c,i.items[e].o||0)})),n?o?o.n=n:i.items[t.id]={id:t.id,n:n,name:t.name,size:t.size,price:t.price,img:t.img,o:c+1}:delete i.items[t.id],i.t=Date.now();try{localStorage.setItem(s,JSON.stringify(i))}catch(e){}try{e.dispatchEvent(new CustomEvent("ggsx-basket"))}catch(e){}}}var p=[];e.addEventListener("ggsx-basket",(function(){p.forEach((function(e){e()
}))})),e.addEventListener("storage",(function(e){e.key===s&&p.forEach((function(e){e()}))}));var d=null;n.blocks.kits=function(e,t){var n=t.h,s=n("div",{class:"gp-kits"},[n("p",{class:"gp-load",text:"Loading kits…"})]),r=e.all?n("p",{class:"gp-note"},[t.link("/stocking-packages","See all kits →")]):null,u=[];function g(){u.forEach((function(e){!function(e,a){if(a.innerHTML="",e.stock){var i=c(e.id);i?(a.appendChild(n("div",{class:"gp-stp"},[n("button",{type:"button",
"aria-label":"Remove one "+e.name,text:"−",onclick:function(){l(e,c(e.id)-1),g()}}),n("span",{text:String(i)}),n("button",{type:"button","aria-label":"Add one "+e.name,text:"+",onclick:function(){l(e,c(e.id)+1),g()}})])),a.appendChild(n("a",{href:(t.cfg.shop||"/shop-now")+"#basket",text:"View basket"}))):a.appendChild(n("button",{type:"button",class:"gp-add",onclick:function(){l(e,1),t.toast(e.name+" added to your basket.","View basket",(t.cfg.shop||"/shop-now")+"#basket"),g()}
},[t.icon("cart"),"Add to basket"]))}else a.appendChild(n("span",{class:"gp-oos",text:"Back soon"}))}(e.k,e.box)}))}return p.push(g),function(e){return d||(d=e.gviz("Products","select A,B,D,E,F,G,K,L where B = '"+a+"'").then((function(t){var n=t.filter((function(t){return t.product&&e.on(t.active)})).map((function(t){var n=i[t.id]||{};return{id:t.id,cat:a,name:t.product,size:t.size||"",price:e.num(t.price),img:t.image||(n.img?"https://static.wixstatic.com/media/"+n.img:""),photo:n.img||t.image,
line:n.line,inc:n.inc,tbc:n.tbc,stock:e.on(t.in_stock)}}));return n.sort((function(e,t){var n=o.indexOf(e.id),a=o.indexOf(t.id);return(n<0?99:n)-(a<0?99:a)})),n})).catch((function(e){throw d=null,e})))}(t).then((function(a){e.ids&&(a=a.filter((function(t){return e.ids.indexOf(t.id)>=0}))),s.innerHTML="",a.length?(e.ids&&s.style.setProperty("--kc",String(Math.min(3,a.length))),a.forEach((function(e){var a=n("div",{class:"gp-ka"});u.push({k:e,box:a}),s.appendChild(n("article",{class:"gp-kit",
id:"kit-"+e.id},[e.photo?n("img",{src:t.im(e.photo,720,480),alt:"",loading:"lazy"}):null,n("div",{class:"gp-kb"},[n("div",{class:"gp-kt"},[n("h3",{text:e.name}),n("span",{class:"gp-kp",text:t.money(e.price)})]),e.line?n("p",{text:e.line}):null,e.inc?n("ul",{class:"gp-ki"},e.inc.map((function(e){return n("li",{text:e})}))):null,e.tbc?n("p",{class:"gp-ktbc",text:"We confirm what's inside by message before we shop."}):null,a])]))})),g()):s.appendChild(n("p",{class:"gp-load"
},["Kits are being restocked. ",t.link("/villa-stocking","Send us your own list")," in the meantime."]))})).catch((function(){s.innerHTML="",s.appendChild(n("p",{class:"gp-load"},["We couldn't load the kits just now. ",t.link(t.cfg.shop||"/shop-now","Browse the shop")," or message us."]))})),t.sec(e,[s,r])};var u=e.GGSX_PARTNER_FORM=e.GGSX_PARTNER_FORM||{formId:"24ddb174-2c1c-4d7f-9bef-9f9b8ed1c03a",clientId:"b0274d30-48b0-4e8d-b352-2f70ff783547",api:"https://www.wixapis.com",t:{
first:"first_name_p1a2",last:"last_name_p3b4",company:"company_p5c6",role:"partner_type_p7d8",props:"properties_p9e0",areas:"areas_pa1f",email:"email_pb2a",phone:"phone_pc3b",channel:"contact_channel_pd4c",msg:"message_pe5d"},roles:["Property manager","Villa rental agency","Airbnb or VRBO host","Villa owner","Concierge, broker or hotel","Other"],props:["1","2–5","6–20","More than 20"],channels:["WhatsApp","iMessage or text","Email","Phone call"]},g="ggsx_pages_tok";function m(e,t){
return function(e){if(!e)try{var t=JSON.parse(localStorage.getItem(g)||"null");if(t&&t.a&&t.e>Date.now()+6e4)return Promise.resolve(t.a)}catch(e){}return fetch(u.api+"/oauth2/token",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({clientId:u.clientId,grantType:"anonymous"})}).then((function(e){if(!e.ok)throw new Error("oauth "+e.status);return e.json()})).then((function(e){try{localStorage.setItem(g,JSON.stringify({a:e.access_token,
e:Date.now()+1e3*(e.expires_in||14400)}))}catch(e){}return e.access_token}))}(t).then((function(t){return fetch(u.api+"/form-submission-service/v4/submissions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:t},body:JSON.stringify({submission:{formId:u.formId,submissions:e}})})})).then((function(n){return 401!==n.status||t?n.ok?n.json():n.text().then((function(e){throw new Error("submit "+n.status+" "+e.slice(0,160))})):m(e,!0)}))}n.blocks.partnerForm=function(n,a){
var i=a.h,o={};function s(e,t,n){return i("label",{class:"gp-f"+(n?" w":"")},[i("span",{text:e}),t])}function r(e,t,n){return i("select",{name:e},[i("option",{value:"",text:n||"Choose…"})].concat(t.map((function(e){return i("option",{value:e,text:e})}))))}o.first=i("input",{name:"first",autocomplete:"given-name",required:""}),o.last=i("input",{name:"last",autocomplete:"family-name"}),o.company=i("input",{name:"company",autocomplete:"organization",placeholder:"Company or property name"}),
o.role=r("role",u.roles),o.props=r("props",u.props),o.areas=i("input",{name:"areas",placeholder:"e.g. Cupecoy, Orient Bay"}),o.email=i("input",{name:"email",type:"email",autocomplete:"email",required:"",placeholder:"you@example.com"}),o.phone=i("input",{name:"phone",type:"tel",autocomplete:"tel",required:"",placeholder:"+1 721 … or +590 …"}),o.channel=r("channel",u.channels),o.msg=i("textarea",{name:"msg",rows:"3",placeholder:"Anything we should know?"});var c=i("p",{class:"gp-ferr",role:"alert"
}),l=i("button",{type:"submit",class:"gp-btn"},["Send"]),p=i("form",{class:"gp-form",novalidate:""},[i("div",{class:"gp-fr"},[s("First name *",o.first),s("Last name",o.last)]),i("div",{class:"gp-fr"},[s("Company or property",o.company),s("I am a…",o.role)]),i("div",{class:"gp-fr"},[s("Number of properties",o.props),s("Areas",o.areas)]),i("div",{class:"gp-fr"},[s("Email *",o.email),s("Phone / WhatsApp *",o.phone)]),s("Best way to reach you",o.channel,1),s("Message",o.msg,1),c,i("div",{
class:"gp-fa"},[l,i("small",{text:"We only use your details to reply about the partner programme."})])]),d=i("div",{class:"gp-fbox"},[p]);function g(e){return"Hi Dwayne, I'd like to become a GrocerGoSx partner.\nName: "+e.first+" "+e.last+"\nCompany: "+e.company+"\nI am a: "+e.role+"\nProperties: "+e.props+"\nAreas: "+e.areas+"\nEmail: "+e.email+"\nPhone: "+e.phone+(e.msg?"\n"+e.msg:"")}return p.addEventListener("submit",(function(n){n.preventDefault();var s={}
;if(Object.keys(o).forEach((function(e){s[e]=String(o[e].value||"").trim()})),!s.first||!/^\S+@\S+\.\S+$/.test(s.email)||s.phone.replace(/\D/g,"").length<7)c.textContent="Please add your first name, a valid email and a phone number.";else{c.textContent="",l.disabled=!0,l.textContent="Sending…";var r={};Object.keys(u.t).forEach((function(e){s[e]&&(r[u.t[e]]=s[e])})),m(r).then((function(){d.innerHTML="",d.appendChild(i("div",{class:"gp-fdone"},[i("span",{class:"gp-ic"},[a.icon("check")]),i("h3",{
text:"Thank you, "+s.first+"!"}),i("p",{text:"We've got your details and will be in touch shortly with the partner terms."}),a.btns([{t:"Message Dwayne now",wa:g(s)}])]))})).catch((function(n){l.disabled=!1,l.textContent="Send",c.innerHTML="",c.appendChild(t.createTextNode("Sorry, that didn't go through. ")),c.appendChild(a.link(a.wa(g(s)),"Send it on WhatsApp instead")),e.console&&console.warn("[GGSX partner form]",n)}))}})),a.sec(n,[d],"gp-join")},n.run&&n.run()}();
} catch (e) { try { console.warn('[GGSX bundle] Pages 6 Kits & Partner Form', e); } catch (e2) {} }
__ggsxE("a9a4947a-ae8e-4ea1-b898-ca85734873af#0");

/* ===== GrocerGoSx Pages 7 Marinas, Estimator & Area Finder (ef7d8ac8-952d-410d-a1a2-6adb4c853ed6, rev 21) ===== */
__ggsxCss("", ".gp-mar{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}\n.gp-mc{background:#fff;border:1.5px solid var(--line);border-radius:22px;padding:22px 24px}\n.gp-mc ul{list-style:none;margin:0;padding:0}\n.gp-mc li{display:flex;gap:12px;align-items:center;padding:10px 0;border-top:1px solid #f1ece6}\n.gp-mc li:first-child{border-top:0}\n.gp-mc li svg{flex:none;width:22px;height:22px;fill:none;stroke:var(--o);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\n.gp-mc li b{display:block;font-size:15.5px}\n.gp-mc li small{display:block;color:var(--mute);font-size:13px}\n.gp-calc{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:22px;align-items:start}\n.gp-cin,.gp-cres{background:#fff;border:1.5px solid var(--line);border-radius:24px;padding:26px}\n.gp-cin{display:grid;gap:20px}\n.gp-cf{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}\n.gp-cl{font-weight:700;font-size:15px}\n.gp-cur{display:flex;align-items:center;border:1.5px solid #cfc9c1;border-radius:12px;background:#fff;padding-left:14px;min-width:170px}\n.gp-cur:focus-within{outline:2px solid var(--o);outline-offset:1px;border-color:var(--o)}\n.gp-cur span{color:var(--mute);font-weight:700}\n#ggsx-page .gp-cur input{border:0;outline:0;background:none;width:130px;height:46px;padding:0 12px 0 6px;font-size:18px;font-weight:700}\n.gp-cf .gp-stp{display:inline-flex;align-items:center;border:2px solid var(--o);border-radius:999px;height:46px;background:#fff}\n#ggsx-page .gp-cf .gp-stp button{width:44px;height:100%;border:0;background:none;color:var(--o);font-size:22px;line-height:1;cursor:pointer;padding:0}\n.gp-cf .gp-stp span{min-width:26px;text-align:center;font-weight:700}\n.gp-seg{display:inline-flex;background:#f1ece6;border-radius:999px;padding:4px}\n#ggsx-page .gp-seg button{border:0;background:none;border-radius:999px;padding:10px 16px;font-weight:700;font-size:14px;cursor:pointer;color:var(--mute)}\n#ggsx-page .gp-seg button.on{background:#fff;color:var(--ink);box-shadow:0 1px 4px rgba(0,0,0,.12)}\n.gp-cout{margin:0}\n.gp-cout div{display:flex;justify-content:space-between;align-items:baseline;gap:16px;padding:12px 0;border-top:1px solid var(--line)}\n.gp-cout div:first-child{border-top:0}\n.gp-cout dt small{display:block;color:var(--mute);font-size:13px;font-weight:400}\n.gp-cout dd{margin:0;font-weight:700;font-size:17px;white-space:nowrap}\n.gp-cout div.t{border-top:2px solid var(--ink);margin-top:4px;padding-top:16px}\n.gp-cout div.t dt{font-weight:700;font-size:17px}\n.gp-cout div.t dd{font-family:Benzin,sans-serif;font-size:24px;color:var(--o)}\n.gp-find{max-width:760px;margin-bottom:22px}\n.gp-fin{display:flex;align-items:center;gap:10px;background:#fff;border:1.5px solid #cfc9c1;border-radius:16px;padding:0 16px;box-shadow:0 4px 16px rgba(27,27,27,.06)}\n.gp-fin:focus-within{border-color:var(--o);outline:2px solid var(--o);outline-offset:1px}\n.gp-fin svg{flex:none;width:22px;height:22px;fill:none;stroke:var(--o);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}\n#ggsx-page .gp-fin input{flex:1;min-width:0;border:0;outline:0;background:none;height:56px;font-size:17px}\n.gp-ares{display:grid;gap:8px;margin-top:10px}\n.gp-ahit{display:flex;align-items:center;gap:14px;background:#fff;border:1.5px solid var(--line);border-radius:14px;padding:12px 16px}\n.gp-ahit div{flex:1;min-width:0}\n.gp-ahit b{display:block}\n.gp-ahit small{display:block;color:var(--mute);font-size:13px}\n.gp-adot{flex:none;width:12px;height:12px;border-radius:50%;background:#1d4ed8}\n.gp-adot.french{background:#0f766e}\n.gp-afee{flex:none;font-weight:700;color:var(--o);white-space:nowrap}\n.gp-anone{background:#fff;border:1.5px dashed #d8d1c8;border-radius:14px;padding:14px 16px;color:#444}\n#ggsx-page .gp-anone a{color:var(--o);font-weight:700}\n.gp-map{position:relative;border-radius:24px;overflow:hidden;background:#e6efe9;border:1.5px solid var(--line);margin-bottom:22px}\n.gp-mapi{display:flex;align-items:center;gap:16px;padding:22px 24px;flex-wrap:wrap}\n.gp-mapi svg{flex:none;width:30px;height:30px;fill:none;stroke:#0f766e;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}\n.gp-mapi p{flex:1;min-width:220px;color:#2f3b35}\n.gp-map iframe{display:block;width:100%;height:440px;border:0}\n.gp-acols{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;align-items:start}\n.gp-acol{background:#fff;border:1.5px solid var(--line);border-radius:22px;padding:22px 24px}\n.gp-achips{display:flex;flex-wrap:wrap;gap:8px;list-style:none;margin:8px 0 0;padding:0}\n.gp-achips li{font-size:14px;padding:6px 12px;border-radius:999px;background:#f6f3ee;border:1px solid var(--line)}\n.gp-apt{display:block;margin:20px 0 6px;font-size:15px}\n.gp-aplaces ul{list-style:none;margin:0;padding:0}\n.gp-aplaces li{display:flex;justify-content:space-between;gap:12px;padding:9px 0;border-top:1px solid #f1ece6;font-size:15px}\n.gp-aplaces li small{color:var(--mute);font-size:13px;text-align:right}\n@media (max-width:860px){.gp-mar{grid-template-columns:1fr}\n.gp-mc{padding:18px}\n.gp-calc{grid-template-columns:1fr}\n.gp-cin,.gp-cres{padding:20px 18px}\n.gp-acols{grid-template-columns:1fr}\n.gp-acol{padding:18px}\n.gp-aplaces li{flex-direction:column;gap:1px}\n.gp-aplaces li small{text-align:left}\n.gp-map iframe{height:340px}\n.gp-mapi{padding:18px}\n}");
__ggsxB("ef7d8ac8-952d-410d-a1a2-6adb4c853ed6#0");
try {
!function(){var e=window,a=(document,e.GGSX_PAGES=e.GGSX_PAGES||{});a.pages=a.pages||{},a.blocks=a.blocks||{};var t={
Dutch:["Philipsburg|Great Bay|Front Street","Simpson Bay|Palapa","Maho|Maho Beach|Royal Islander","Cupecoy|Porto Cupecoy|Shore Pointe","Cole Bay","Pelican Key|Pelican|Billy Folly","Beacon Hill|Airport|SXM Airport","Pointe Blanche|Point Blanche","Dawn Beach|Westin","Oyster Pond (Dutch side)|Oyster Bay|Oyster Pond Dutch","Guana Bay","Cay Hill","Little Bay","Belair|Bel Air","Madame Estate","Mullet Bay","Indigo Bay","Dutch Lowlands","Almond Grove","Mary's Fancy","South Reward","St. Peters|Saint Peters","Sucker Garden","Middle Region","Dutch Quarter","Cay Bay","Dock Maarten|Bobby's"],
French:["Marigot|Bellevue","Grand Case|Esplanade","Orient Bay|Baie Orientale|La Playa|Alamanda|Palm Court|Mont Vernon","Terres Basses|French Lowlands|Baie Longue|Baie Rouge|Plum Bay|Baie aux Prunes","Cul-de-Sac|Cul de Sac","Anse Marcel|Marquis","Oyster Pond (French side)|Captain Oliver's|Oyster Pond French","Sandy Ground","Nettle Bay|Baie Nettl\xe9|Nettl\xe9 Bay|Hommage","Concordia","Colombier","Friar's Bay|Friars Bay","Happy Bay","Pic Paradis","Quartier d'Orl\xe9ans|French Quarter|Orleans","Hope Estate","Le Galion|Galion","Rambaud","St. James|Saint James","Agr\xe9ment|Agrement"]
},n=/resort|hotel|marina/i;a.blocks.calc=function(e,a){var t=a.h,n={goods:150,food:0,rest:0,stops:0,side:"Dutch",when:"Now"},i=t("dl",{class:"gp-cout"});function r(e,a,i){var r=t("span",{text:"0"});function s(a){n[e]=Math.max(0,Math.min(i,a)),r.textContent=String(n[e]),c()}return t("div",{class:"gp-cf"},[t("span",{class:"gp-cl",text:a}),t("div",{class:"gp-stp"},[t("button",{type:"button","aria-label":"Fewer",text:"−",onclick:function(){s(n[e]-1)}}),r,t("button",{type:"button","aria-label":"More",text:"+",
onclick:function(){s(n[e]+1)}})])])}function u(e,i,r){var s=t("input",{type:"number",min:"0",step:"1",inputmode:"decimal",value:String(n[e]),"aria-label":r,oninput:function(){n[e]=Math.max(0,a.num(s.value)),c()}});return t("label",{class:"gp-cf"},[t("span",{class:"gp-cl",text:i}),t("div",{class:"gp-cur"},[t("span",{text:"$"}),s])])}function g(e,i,r){var s=t("div",{class:"gp-seg",role:"group","aria-label":r});return i.forEach((function(a){s.appendChild(t("button",{type:"button","data-v":a[0],class:a[0]===n[e]?"on":null,text:a[1],onclick:function(){n[e]=a[0],[].forEach.call(s.children,(function(t){t.classList.toggle("on",t.getAttribute("data-v")===n[e])})),c()}}))})),s}var o=g("side",[["Dutch","Dutch side"],["French","French side"]],"Island side"),w=g("when",[["Now","Same or next day"],["Planned","48 h ahead"]],"Booked");function l(e,a,n,i){return t("div",{class:i?"t":null},[t("dt",{},[e,n?t("small",{text:n}):null]),t("dd",{text:a})])}function c(){
var F=window.GGSX_FEESET||{rate:.15,min:80,planned:70,max:120,minOrder:100,del:25,delFr:25,pickup:20,stop:20,rmin:10,rminFr:20,rdel:25,rdelFr:25},e=n.goods,f=n.food,p="Planned"===n.when,fr="French"===n.side,R=F.r?F.r(p,e>0||n.stops):F.rate,dl=F.d?F.d(p,fr):fr?F.delFr:F.del,mf=e>0||n.stops?p?F.planned:F.min:fr?F.rminFr:F.rmin,t=e+f>0?Math.min(Math.max(Math.round(R*100*(e+f))/100,mf),F.max):0,q=e>0&&e<F.minOrder,h=e>0||n.stops?F.onTop?dl:Math.min(dl,t):f?fr?F.rdelFr:F.rdel:0,t=t-(!F.onTop&&(e>0||n.stops)?h:0),s=0,r=e>0||f>0?n.rest:0,o=F.pickup*(e>0?r:Math.max(r-1,0)),c=F.stop*n.stops,d=e+f+t+h+o+c+s;i.innerHTML="",i.appendChild(l("Groceries",a.money(e),"GrocerGoSx prices")),f>0&&i.appendChild(l("Restaurant food",a.money(f),"menu price")),o>0&&i.appendChild(l("Restaurant delivery/waiting time",a.money(o),o/F.pickup+" \xd7 $"+F.pickup+(e>0?"":", first restaurant included"))),n.stops&&i.appendChild(l("Extra stops",a.money(c),n.stops+" \xd7 $"+F.stop)),
i.appendChild(l("Taxes / Service Fee",q?"—":a.money(t),q?null:Math.round(R*100)+"%"+(!F.onTop&&(e>0||n.stops)?" with delivery":"")+(mf?", min $"+mf:"")+", max $"+F.max)),i.appendChild(l("Delivery Fee",h?a.money(h):"Free",n.side+" side")),q?i.appendChild(a.h("p",{class:"gp-note",text:"The shop basket minimum is $"+F.minOrder+" (taxes included). Add "+a.money(F.minOrder-e)+" more groceries to see your total."})):(i.appendChild(l("Total (service excl.)",a.money(d-t))),i.appendChild(l("Total (service incl.)",a.money(d),null,1)))}var d=t("div",{class:"gp-cin"},[u("goods","Groceries ($, at GrocerGoSx prices)","Groceries total in US dollars"),u("food","Restaurant food ($, menu price)","Restaurant food total in US dollars"),r("rest","Restaurant pickups",4),r("stops","Extra errand stops",3),t("div",{class:"gp-cf"},[t("span",{class:"gp-cl",text:"Booked"}),w]),t("div",{class:"gp-cf"},[t("span",{class:"gp-cl",text:"Delivering to"}),o])]);return c(),a.sec(e,[t("div",{class:"gp-calc"},[d,t("div",{class:"gp-cres"},[i,t("p",{class:"gp-note",text:"Estimate only. All prices include applicable taxes, and no fee is added after your quote. Delivery has its own line and the shop basket minimum is {{min_order}}; pickups and errands have no minimum. Bills, restaurant food and named items are passed on at cost, plus the same {{run_rate}} service fee."})])])])},a.blocks.areas=function(e,a){var i=a.h,r=[];function s(e){
return String(e||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim()}function o(e){return"Free"}Object.keys(t).forEach((function(e){t[e].forEach((function(a){var t=a.split("|");r.push({name:t[0],kind:"Area",side:e,words:s(a.replace(/\|/g," "))})}))}));var l=i("input",{type:"search",placeholder:"e.g. Orient Bay, Simpson Bay Resort, Fort Louis",autocomplete:"off","aria-label":"Find your area"}),c=i("div",{
class:"gp-ares","aria-live":"polite"});function d(){var e=s(l.value),t=e.split(" ").filter(Boolean);if(c.innerHTML="",!(e.length<2)){var n=r.filter((function(e){return t.every((function(a){return e.words.indexOf(a)>=0}))})).slice(0,6);n.length?n.forEach((function(e){c.appendChild(i("div",{class:"gp-ahit"},[i("span",{class:"gp-adot "+e.side.toLowerCase()}),i("div",{},[i("b",{text:e.name}),i("small",{text:e.kind+(e.area?" \xb7 "+e.area:"")+" \xb7 "+e.side+" side"})]),i("span",{class:"gp-afee",
text:o(e.side)+" delivery"})]))})):c.appendChild(i("p",{class:"gp-anone"},["We couldn't find that one. ",a.link(a.wa("Hi GrocerGoSx, can you deliver to: "+l.value),"Message us the address")," and we'll confirm we deliver there."]))}}l.addEventListener("input",d);var p=i("div",{class:"gp-find"},[i("div",{class:"gp-fin"},[a.icon("pin"),l]),c]),u=i("div",{class:"gp-acols"});[["Dutch","Dutch side \xb7 Sint Maarten"],["French","French side \xb7 Saint-Martin"]].forEach((function(e){u.appendChild(i("div",{
class:"gp-acol"},[i("div",{class:"gp-mh"},[i("b",{text:e[1]}),i("span",{text:o(e[0])+" delivery"})]),i("ul",{class:"gp-achips"},t[e[0]].map((function(e){return i("li",{text:e.split("|")[0]})}))),i("div",{class:"gp-aplaces","data-side":e[0]})]))}));var h=i("div",{class:"gp-map"},[i("div",{class:"gp-mapi"},[a.icon("map"),i("p",{text:"Dutch Sint Maarten is the southern side of the island; French Saint-Martin is the northern side."}),i("button",{type:"button",class:"gp-btn s",text:"Show the map",
onclick:function(){h.innerHTML="",h.appendChild(i("iframe",{src:"https://maps.google.com/maps?q=Saint%20Martin%20island&z=12&output=embed",title:"Map of St. Maarten / St. Martin",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade",allowfullscreen:""}))}})])]);return a.gviz("Places").then((function(e){var t=e.filter((function(e){return e.name&&n.test(e.type)&&a.on(e.active)}));t.forEach((function(e){var a=/fr/i.test(e.side)?"French":"Dutch";r.push({name:e.name,kind:e.type,area:e.area,
side:a,words:s([e.name,e.type,e.area,e.keywords].join(" "))})})),[].forEach.call(u.querySelectorAll(".gp-aplaces"),(function(e){var a=t.filter((function(a){return(/fr/i.test(a.side)?"French":"Dutch")===e.getAttribute("data-side")}));a.length&&(e.appendChild(i("b",{class:"gp-apt",text:"Resorts, hotels & marinas"})),e.appendChild(i("ul",{},a.map((function(e){return i("li",{},[i("span",{text:e.name}),i("small",{text:e.type+(e.area?" \xb7 "+e.area:"")})])})))))})),l.value&&d()
})).catch((function(){})),a.sec(e,[p,h,u])};var i=[["Simpson Bay Marina","Dutch","Simpson Bay"],["Isle de Sol Marina","Dutch","Simpson Bay"],["Yacht Club Port de Plaisance","Dutch","Cole Bay"],["Lagoon Marina","Dutch","Cole Bay"],["Bobby's Marina","Dutch","Philipsburg"],["Marina Fort Louis","French","Marigot"],["Marina Port la Royale","French","Marigot"],["Anse Marcel Marina (Port Lonvilliers)","French","Anse Marcel"]];a.blocks.marinas=function(e,a){var t=a.h,n=t("div",{class:"gp-mar"})
;function r(e){n.innerHTML="",[["Dutch","Dutch side \xb7 Sint Maarten","Free"],["French","French side \xb7 Saint-Martin","Free"]].forEach((function(i){var r=e.filter((function(e){return e[1]===i[0]}));r.length&&n.appendChild(t("div",{class:"gp-mc"},[t("div",{class:"gp-mh"},[t("b",{text:i[1]}),t("span",{text:i[2]+" delivery"})]),t("ul",{},r.map((function(e){return t("li",{},[a.icon("boat"),t("span",{},[t("b",{text:e[0]}),e[2]?t("small",{text:e[2]}):null])])})))]))}))}return r(i),
a.gviz("Places").then((function(e){var t=e.filter((function(e){return/marina/i.test(e.type)&&e.name&&a.on(e.active)})).map((function(e){return[e.name,/fr/i.test(e.side)?"French":"Dutch",e.area]}));t.length&&r(t)})).catch((function(){})),a.sec(e,[n,t("p",{class:"gp-note"},["Another marina, dock or anchorage? ",a.link(a.wa("Hi GrocerGoSx, can you deliver provisions to: "),"Message us")," and we'll confirm."])])},a.run&&a.run()}();
} catch (e) { try { console.warn('[GGSX bundle] Pages 7 Marinas, Estimator & Area Finder', e); } catch (e2) {} }
__ggsxE("ef7d8ac8-952d-410d-a1a2-6adb4c853ed6#0");

/* ===== GrocerGoSx Shop 7 Run Sheet Photos (98a277b4-e1e0-446c-aa88-ca9fb8bf5670, rev 3) ===== */
__ggsxCss("", "\n.gr-it-h.grp-on{align-items:center}\n.gr-it-h .grp-ph{flex:none;box-sizing:border-box;width:76px;height:76px;border-radius:12px;border:1px solid #f3dccf;background:#fff1ea;color:#F4551B;display:flex;align-items:center;justify-content:center;overflow:hidden;font-family:Benzin,\"Helvetica Neue\",Arial,sans-serif;font-size:24px;line-height:1}\n.gr-it-h .grp-ph b{font-weight:700}\n.gr-it-h .grp-ph.img{background:#fff;border-color:#e9e4dd}\n.gr-it-h .grp-ph.zoom{cursor:zoom-in}\n.gr-it-h .grp-ph img{display:block;width:100%;height:100%;object-fit:contain}\n.gr-it-h .grp-ph:focus-visible{outline:3px solid #F4551B;outline-offset:2px}\n.grp-view{position:fixed;inset:0;z-index:20;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;box-sizing:border-box;padding:calc(68px + env(safe-area-inset-top,0px)) 16px calc(28px + env(safe-area-inset-bottom,0px));background:rgba(20,20,20,.94);cursor:zoom-out}\n.grp-view img{display:block;max-width:100%;max-height:68vh;object-fit:contain;border-radius:16px;background:#fff}\n.grp-view p{margin:0;max-width:560px;color:#fff;font-size:16px;font-weight:700;line-height:1.35;text-align:center}\n.grp-vx{position:absolute;top:calc(12px + env(safe-area-inset-top,0px));right:12px;width:44px;height:44px;border:0;border-radius:50%;background:rgba(255,255,255,.18);color:#fff;font:inherit;font-size:28px;line-height:44px;padding:0;cursor:pointer}\n");
__ggsxB("98a277b4-e1e0-446c-aa88-ca9fb8bf5670#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxRunPhotos) return;
  W.__ggsxRunPhotos = 1;
  var CFG = W.GGSX_SHOP || {},
      SHEET = CFG.sheetId || '1-h6W54Wbscz_5zMAVU0myRr0PCYoVW_sJZo4XWe2MXE',
      TAB_PRODUCTS = (CFG.tabs && CFG.tabs.products) || 'Products',
      TAB_VENDORS = 'Vendors',
      CACHE = 'ggsx_shop_cache',      /* Shop 2's copy of the Products tab for this browser tab */
      THUMB = 160, BIG = 1000,         /* picture widths requested for the list and the full-screen view */
      PROD = null, VEND = null;

  function el(tag, attrs, kids) {
    var e = D.createElement(tag), k;
    for (k in attrs || {}) {
      if (attrs[k] == null) continue;
      if (k === 'class') e.className = attrs[k];
      else if (k === 'text') e.textContent = attrs[k];
      else e.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) e.appendChild(typeof c === 'string' ? D.createTextNode(c) : c); });
    return e;
  }
  function norm(s) { return String(s == null ? '' : s).toLowerCase().replace(/\s+/g, ' ').trim(); }

  /* Same picture handling as the shop: Wix Media Manager links get a resized copy, Google Drive links a direct image link. */
  function pic(u, w) {
    u = String(u || '').trim();
    var m = /static\.wixstatic\.com\/media\/([^\/?#]+)/.exec(u);
    if (m) return 'https://static.wixstatic.com/media/' + m[1] + '/v1/fit/w_' + w + ',h_' + w + ',q_80,enc_auto/' + m[1];
    m = /drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:.*&)?id=)([\w-]+)/.exec(u);
    return m ? 'https://lh3.googleusercontent.com/d/' + m[1] + '=w' + w : u;
  }

  function parseCsv(text) {
    var rows = [], row = [], cell = '', q = false, i, ch;
    for (i = 0; i < text.length; i++) {
      ch = text[i];
      if (q) { if (ch === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; } else cell += ch; }
      else if (ch === '"') q = true;
      else if (ch === ',') { row.push(cell); cell = ''; }
      else if (ch === '\n' || ch === '\r') { if (ch === '\r' && text[i + 1] === '\n') i++; row.push(cell); rows.push(row); row = []; cell = ''; }
      else cell += ch;
    }
    if (cell || row.length) { row.push(cell); rows.push(row); }
    var head = (rows.shift() || []).map(function (c) { return c.trim().toLowerCase(); });
    return rows.map(function (r) { var o = {}; head.forEach(function (k, j) { o[k] = (r[j] || '').trim(); }); return o; });
  }
  function tab(name) {
    var url = 'https://docs.google.com/spreadsheets/d/' + SHEET + '/gviz/tq?tqx=out:csv&headers=1&sheet=' + encodeURIComponent(name) + '&t=' + Math.floor(Date.now() / 6e4);
    return fetch(url, { cache: 'no-store' }).then(function (r) { if (!r.ok) throw new Error(name + ' ' + r.status); return r.text(); }).then(parseCsv);
  }

  /* Products: use the shop's own copy (Shop 2 loads it on this page), waiting up to 12 s for it; otherwise read the sheet. */
  function cached(freshOnly) {
    try {
      var c = JSON.parse(sessionStorage.getItem(CACHE) || 'null');
      if (c && c.p && (!freshOnly || Date.now() - c.t < 6e5)) return c.p;
    } catch (e) {}
    return null;
  }
  function products() {
    if (PROD) return PROD;
    PROD = new Promise(function (done) {
      var n = 0;
      (function poll() {
        var rows = cached(true);
        if (rows) return done(rows);
        if (++n < 30) return setTimeout(poll, 400);
        var old = cached(false);
        tab(TAB_PRODUCTS).then(done, function () { done(old || []); });
      })();
    }).then(function (rows) {
      var map = {};
      rows.forEach(function (r) {
        var name = r.product || r.name, img = r.image;
        if (!name || !img) return;
        var exact = norm(name) + '|' + norm(r.size), loose = norm(name);
        if (!map[exact]) map[exact] = img;
        if (!map[loose]) map[loose] = img;
      });
      return map;
    });
    return PROD;
  }
  function vendors() {
    if (!VEND) VEND = tab(TAB_VENDORS).then(function (rows) {
      var map = {};
      rows.forEach(function (v) { if (v.name && v.logo) map[norm(v.name)] = v.logo; });
      return map;
    }, function () { return {}; });
    return VEND;
  }

  /* The run sheet's order lines, read from the link the same way Shop 4 reads them: [name, size, qty, price, rule]. */
  function orderLines() {
    var m = /^#(?:run|track)\/([A-Za-z0-9_-]+)/.exec(location.hash);
    if (!m) return null;
    try {
      var d = JSON.parse(decodeURIComponent(escape(atob(m[1].replace(/-/g, '+').replace(/_/g, '/')))));
      return d && d.i || null;
    } catch (e) { return null; }
  }
  function caption(ln) { return ln[2] + ' × ' + ln[0] + (ln[1] ? ' ' + ln[1] : ''); }
  function vendorOf(name) { var m = /\(([^()]+)\)\s*$/.exec(name); return m ? m[1].trim() : ''; }
  function initial(s) { var c = String(s || '').replace(/[^0-9A-Za-zÀ-ÿ]/g, '').charAt(0); return (c || '?').toUpperCase(); }

  function letterTile(t, fb) {
    t.className = 'grp-ph';
    t.innerHTML = '';
    t.appendChild(el('b', { text: fb }));
    t.setAttribute('aria-hidden', 'true');
    t.removeAttribute('role'); t.removeAttribute('tabindex'); t.removeAttribute('aria-label');
    t.onclick = t.onkeydown = null;
  }
  function photoTile(t, url, ln, zoom, fb) {
    var im = el('img', { src: pic(url, THUMB), alt: '', decoding: 'async', loading: 'lazy' });
    im.addEventListener('error', function () { letterTile(t, fb); });
    t.className = 'grp-ph img';
    t.innerHTML = '';
    t.appendChild(im);
    if (!zoom) return;
    t.classList.add('zoom');
    t.removeAttribute('aria-hidden');
    t.setAttribute('role', 'button');
    t.setAttribute('tabindex', '0');
    t.setAttribute('aria-label', 'Show photo: ' + caption(ln));
    t.onclick = function (e) { e.stopPropagation(); showBig(t, url, ln); };
    t.onkeydown = function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showBig(t, url, ln); } };
  }
  function showBig(t, url, ln) {
    var host = (t.closest && t.closest('.gr-wrap')) || D.body,
        cap = caption(ln), big = pic(url, BIG),
        img = el('img', { src: pic(url, THUMB), alt: cap }),
        x = el('button', { type: 'button', class: 'grp-vx', 'aria-label': 'Close', text: '×' }),
        v = el('div', { class: 'grp-view', role: 'dialog', 'aria-modal': 'true', 'aria-label': cap }, [x, img, el('p', { text: cap })]),
        hi = new Image();
    hi.onload = function () { img.src = big; };
    hi.src = big;
    v.addEventListener('click', function () { v.remove(); try { t.focus(); } catch (e) {} });
    host.appendChild(v);
    try { x.focus(); } catch (e) {}
  }

  function dress(wrap) {
    if (wrap.__grp) return;
    var L = orderLines(), items = wrap.querySelectorAll('.gr-item');
    if (!L || !items.length) return;
    wrap.__grp = 1;
    var todo = [];
    Array.prototype.forEach.call(items, function (it, i) {
      var ln = L[i], head = it.querySelector('.gr-it-h');
      if (!ln || !head || head.querySelector('.grp-ph')) return;
      var name = String(ln[0] || ''), vend = vendorOf(name), pharm = /^pharmacy\b/i.test(name),
          fb = pharm ? 'Rx' : initial(vend || name),
          t = el('span', { class: 'grp-ph', 'aria-hidden': 'true' }, [el('b', { text: fb })]);
      head.insertBefore(t, head.firstChild);
      head.classList.add('grp-on');
      if (!pharm) todo.push({ t: t, ln: ln, vend: vend, fb: fb });
    });
    if (!todo.length) return;
    products().then(function (P) {
      var needLogo = [];
      todo.forEach(function (x) {
        var n = norm(x.ln[0]), src = P[n + '|' + norm(x.ln[1])] || P[n];
        if (src) photoTile(x.t, src, x.ln, true, x.fb);
        else if (x.vend) needLogo.push(x);
      });
      if (needLogo.length) vendors().then(function (V) {
        needLogo.forEach(function (x) { var src = V[norm(x.vend)]; if (src) photoTile(x.t, src, x.ln, false, x.fb); });
      });
    });
  }

  function scan() { Array.prototype.forEach.call(D.querySelectorAll('.gr-wrap'), dress); }
  function start() {
    scan();
    new MutationObserver(scan).observe(D.body, { childList: true });
    D.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      var v = D.querySelector('.grp-view');
      if (v) v.click();
    });
  }
  if (D.body) start(); else D.addEventListener('DOMContentLoaded', start);
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 7 Run Sheet Photos', e); } catch (e2) {} }
__ggsxE("98a277b4-e1e0-446c-aa88-ca9fb8bf5670#0");

/* ===== GrocerGoSx Shop 8 Live Core (bcc83d1c-eccb-4b9c-807a-325d311f9cf0, rev 6) ===== */
__ggsxB("bcc83d1c-eccb-4b9c-807a-325d311f9cf0#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxLiveCore) return;
  W.__ggsxLiveCore = 1;
  var C = W.GGSX_TRACK = {
    collection: 'GrocerGoSxLiveRuns',            /* Wix CMS collection holding each order's ticks */
    formId: '42b57165-286e-4773-9c49-f12b23eb5252',                                  /* Wix Form "Live order update" (its automation emails the client) */
    linkField: 'live_link_4b8e',                 /* Shop Now checkout form field that carries the client's live link */
    linkFieldOn: true,                          /* true once that field exists on the checkout form */
    clientId: 'b0274d30-48b0-4e8d-b352-2f70ff783547',
    trackUrl: 'https://www.grocergosx.com/shop-now#track/',
    whatsapp: '590690779119',                    /* GrocerGoSx number on the client's page */
    emailAfter: 45                               /* seconds without edits before an update email goes out */
  };

  /* ---------- shared helpers (Shop 9 uses these too) ---------- */
  function el(tag, attrs, kids) {
    var e = D.createElement(tag), k, v;
    for (k in attrs || {}) {
      v = attrs[k];
      if (v == null) continue;
      if (k === 'class') e.className = v;
      else if (k === 'text') e.textContent = v;
      else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v);
    }
    (kids || []).forEach(function (c) { if (c) e.appendChild(typeof c === 'string' ? D.createTextNode(c) : c); });
    return e;
  }
  C.el = el;
  C.hhmm = function (t) { var d = new Date(t), h = d.getHours(); return (h % 12 || 12) + ':' + ('0' + d.getMinutes()).slice(-2) + (h < 12 ? ' am' : ' pm'); };
  C.when = function (c) {
    var d = c.d ? new Date(c.d + 'T12:00:00Z') : null,
        ds = d && !isNaN(d) ? d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' }) : (c.d || '');
    return ds + (c.w ? ' · ' + c.w : '');
  };
  C.money = function (v) { var n = parseFloat(String(v == null ? '' : v).replace(/[^0-9.]/g, '')); return isNaN(n) ? '' : '$' + n.toFixed(2); };
  C.itemName = function (ln) { return ln[0] + (ln[1] ? ' ' + ln[1] : ''); };
  C.wa = function (phone, text) { return 'https://wa.me/' + String(phone || '').replace(/\D/g, '') + '?text=' + encodeURIComponent(text); };
  C.sms = function (phone, text) { var p = String(phone || '').replace(/\D/g, ''); return 'sms:' + (p ? '+' + p : '') + '?&body=' + encodeURIComponent(text); };
  C.decode = function (P) {
    try { var o = JSON.parse(decodeURIComponent(escape(atob(P.replace(/-/g, '+').replace(/_/g, '/'))))); return o && o.i ? o : null; }
    catch (e) { return null; }
  };
  C.fromHash = function (kind) { var m = new RegExp('^#' + kind + '/([A-Za-z0-9_-]+)').exec(location.hash); return m ? m[1] : ''; };

  /* One status per item: '' waiting, 'got', 'out', or 'sub|name|price'. */
  C.sigOf = function (S, i) {
    var st = (S.s || {})[i] || '';
    if (st === 'sub') return 'sub|' + String((S.n || {})[i] || '').trim() + '|' + String((S.p || {})[i] || '').trim();
    return st === 'out' || st === 'got' ? st : '';
  };
  /* Items the client hasn't been told about yet: a new or changed substitution, an out-of-stock item, or one found after all. */
  C.news = function (S, lines, seen) {
    var out = [];
    lines.forEach(function (ln, i) {
      var now = C.sigOf(S, i), was = seen[i] || '';
      if (!now || now === was) return;
      if (now === 'got' && (was === '' || was === 'got')) return;
      if (now.indexOf('sub||') === 0) return;      /* substitute not named yet */
      out.push(i);
    });
    return out;
  };
  C.change = function (order, i, S) {
    var ln = order.i[i], it = C.itemName(ln), st = (S.s || {})[i], rule = ln[4] || order.r || 'sub';
    if (st === 'sub') {
      var nm = String((S.n || {})[i] || '').trim(), pr = C.money((S.p || {})[i]),
          instead = (nm || 'the closest match') + (pr ? ' (' + pr + ')' : '');
      if (W.GGSX_ASK && W.GGSX_ASK.asked(i)) return it + " isn't available. We can get " + instead + ' instead. Tap Yes or No on your order page.';   /* Shop 20 */
      return rule === 'ask'
        ? it + " isn't available. We can get " + instead + " instead. Let us know if that's OK."
        : it + " isn't available, so we're getting " + instead + ' instead.';
    }
    if (st === 'out') {
      return it + " isn't available" + (rule === 'skip' ? ", so we'll leave it out as you asked."
        : rule === 'ask' ? '. Would you like something else instead?' : " and there's no good match, so it's left out.");
    }
    return 'Good news: we found ' + it + ' after all.';
  };

  /* Wix visitor access (the site's Headless client) */
  var TOK = 'ggsx_live_tok';
  function token(fresh) {
    var t = null;
    if (!fresh) try { t = JSON.parse(sessionStorage.getItem(TOK) || 'null'); } catch (e) {}
    if (t && t.exp > Date.now() + 60000) return Promise.resolve(t.v);
    return fetch('https://www.wixapis.com/oauth2/token', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ clientId: C.clientId, grantType: 'anonymous' }) })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (!j.access_token) throw new Error('token');
        try { sessionStorage.setItem(TOK, JSON.stringify({ v: j.access_token, exp: Date.now() + (j.expires_in || 3600) * 1000 })); } catch (e) {}
        return j.access_token;
      });
  }
  function api(method, url, body, again) {
    return token(again).then(function (t) {
      return fetch(url, { method: method, headers: { 'Content-Type': 'application/json', Authorization: t }, body: body ? JSON.stringify(body) : undefined, cache: 'no-store' });
    }).then(function (r) {
      if (r.status === 401 && !again) return api(method, url, body, true);
      if (r.status === 404) return null;
      return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok) throw new Error('wix ' + r.status); return j; });
    });
  }
  C.api = api;
  var DATA = 'https://www.wixapis.com/wix-data/v2/items';
  C.load = function (id) {
    return api('GET', DATA + '/' + id + '?dataCollectionId=' + encodeURIComponent(C.collection)).then(function (j) { return j && j.dataItem ? j.dataItem.data : null; });
  };
  C.store = function (id, data) {
    var mods = Object.keys(data).map(function (k) { return { fieldPath: k, action: 'SET_FIELD', setFieldOptions: { value: data[k] } }; });
    return api('PATCH', DATA + '/' + id, { dataCollectionId: C.collection, patch: { dataItemId: id, fieldModifications: mods } }).then(function (j) {
      if (j === null) throw new Error('new');
      return j;
    }).catch(function () {
      return api('GET', DATA + '/' + id + '?dataCollectionId=' + encodeURIComponent(C.collection)).then(function (j) {
        var cur = (j && j.dataItem && j.dataItem.data) || {}, out = {}, k;
        for (k in cur) if (k.charAt(0) !== '_') out[k] = cur[k];
        for (k in data) out[k] = data[k];
        return api('POST', DATA + '/save', { dataCollectionId: C.collection, dataItem: { id: id, data: out } });
      });
    });
  };

  /* Signing: the order id and key come from the order link itself, which only the client and GrocerGoSx have. */
  function bytes(s) { return new TextEncoder().encode(s); }
  function hex(b) { return Array.prototype.map.call(new Uint8Array(b), function (x) { return (x < 16 ? '0' : '') + x.toString(16); }).join(''); }
  C.seed = function (P) {
    var o = C.decode(P), c = (o && o.c) || {};
    return o && o.t ? 'ggsx-order|' + o.t + '|' + String(c.e || '').trim().toLowerCase() + '|' + String(c.p || '').replace(/\D/g, '') : P;
  };
  C.encode = function (o) { return btoa(unescape(encodeURIComponent(JSON.stringify(o)))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); };
  C.keys = function (P) {
    var s = crypto.subtle, S = C.seed(P);
    return Promise.all([s.digest('SHA-256', bytes('ggsx-live-id|' + S)), s.digest('SHA-256', bytes('ggsx-live-key|' + S))]).then(function (r) {
      return s.importKey('raw', r[1], { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']).then(function (key) { return { id: hex(r[0]).slice(0, 32), key: key }; });
    });
  };
  C.sign = function (K, text) { return crypto.subtle.sign('HMAC', K.key, bytes(K.id + '|' + text)).then(hex); };

  /* ---------- checkout: put the client's live link on the order ---------- */
  D.addEventListener('ggsx-checkout-submit', function (e) {
    if (!C.linkFieldOn) return;
    var f = (e.detail || {}).fields, key = (W.GGSX_SUBS && W.GGSX_SUBS.t && W.GGSX_SUBS.t.sheet) || 'run_sheet_e5b1',
        m = f && /#run\/([A-Za-z0-9_-]+)/.exec(f[key] || '');
    if (m) {   /* v1.2: the short tracker link from Shop 19 (same link everywhere); the long one if Shop 19 isn't there */
      var S = W.GGSX_SHORT;
      f[C.linkField] = S && S.forToken ? S.forToken(m[1]) : C.trackUrl + m[1];
      if (S && S.forRun) f[key] = S.forRun(m[1]);   /* v1.3: the run sheet field gets the short #r/ link (Shop 19 v1.2) instead of the long #run/… one */
      if (S && S.make) S.make(C.trackUrl + m[1]).catch(function () {});
    }
  });
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 8 Live Core', e); } catch (e2) {} }
__ggsxE("bcc83d1c-eccb-4b9c-807a-325d311f9cf0#0");

/* ===== GrocerGoSx Shop 9 Live Run Sheet (20d13775-3117-43dd-80a1-8c7a8b77bd68, rev 5) ===== */
__ggsxCss("", "\n.gl-live{margin-top:12px;padding-top:12px;border-top:1px solid #efeae3}\n.gl-st{font-size:13px;color:#6b6b6b;margin-bottom:8px}\n.gl-st i{display:inline-block;width:8px;height:8px;border-radius:50%;background:#2f9e55;margin-right:6px;vertical-align:1px}\n.gl-st.wait i{background:#f0a24a}\n.gl-st.err i{background:#d93025}\n.gl-row{display:flex;flex-wrap:wrap;align-items:center;gap:8px}\n.gl-lbl{font-size:13px;font-weight:700;margin-right:2px}\n.gl-pill{min-height:36px;border:1.5px solid #cfc9c1;border-radius:999px;background:#fff;color:#1b1b1b;font:inherit;font-size:13px;font-weight:700;padding:0 14px;cursor:pointer}\n.gl-pill.main{background:#F4551B;border-color:#F4551B;color:#fff}\n.gl-bar{display:none;position:fixed;left:12px;right:12px;bottom:calc(80px + env(safe-area-inset-bottom,0px));z-index:3;max-width:616px;margin:0 auto;background:#1b1b1b;color:#fff;border-radius:16px;padding:12px 14px;box-shadow:0 8px 28px rgba(0,0,0,.25)}\n.gl-bar.on{display:block}\n.gl-bar p{margin:0 0 10px;font-size:14px;font-weight:700}\n.gl-bar .gl-pill{background:transparent;border-color:rgba(255,255,255,.4);color:#fff}\n.gl-bar .gl-pill.main{background:#F4551B;border-color:#F4551B}\n.gr-wrap.gl-with-bar .gr-body{padding-bottom:230px}\n.gl-toast{position:fixed;left:50%;top:calc(76px + env(safe-area-inset-top,0px));transform:translateX(-50%);z-index:21;max-width:90vw;background:#1b1b1b;color:#fff;border-radius:999px;padding:10px 16px;font-size:14px;box-shadow:0 8px 24px rgba(0,0,0,.2)}\n");
__ggsxB("20d13775-3117-43dd-80a1-8c7a8b77bd68#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxLiveRun) return;
  W.__ggsxLiveRun = 1;
  var tries = 0;
  (function boot() {
    var C = W.GGSX_TRACK;
    if (!C || !C.keys) { if (++tries < 40) setTimeout(boot, 250); return; }
    main(C);
  })();
  function main(C) {
    var el = C.el, api = C.api;
    /* ---------- run sheet ---------- */
    var CUR = null, TIMER = 0;
    function waTitle() { return (W.GGSX_SUBS && W.GGSX_SUBS.copy && W.GGSX_SUBS.copy.wa) || 'WhatsApp customer'; }
    function readState(ctx) { try { return JSON.parse(localStorage.getItem(ctx.skey) || 'null') || { s: {}, n: {}, p: {} }; } catch (e) { return { s: {}, n: {}, p: {} }; } }
    function sent(ctx) { try { return JSON.parse(localStorage.getItem('ggsx_live_' + ctx.K.id) || 'null') || { em: {}, ms: {} }; } catch (e) { return { em: {}, ms: {} }; } }
    function keep(ctx, N) { try { localStorage.setItem('ggsx_live_' + ctx.K.id, JSON.stringify(N)); } catch (e) {} }
    function plain(S, N) { return JSON.stringify({ s: S.s || {}, n: S.n || {}, p: S.p || {}, em: N.em || {}, ms: N.ms || {} }); }
    /* what the client was already told, as recorded by another phone or browser */
    function mergeSent(ctx, R, S) {
      var N = sent(ctx), changed = 0;
      ['em', 'ms'].forEach(function (k) {
        var src = R[k] || {}, i;
        for (i in src) if (N[k][i] !== src[i] && (!(i in N[k]) || src[i] === C.sigOf(S, i))) { N[k][i] = src[i]; changed = 1; }
      });
      if (changed) keep(ctx, N);
    }
    function link(ctx) { return ctx.short || (C.trackUrl + ctx.P); }
    function who(ctx) { return (ctx.order.c && ctx.order.c.f) || 'the client'; }
    function setStatus(ctx, kind, text) { var s = ctx.ui && ctx.ui.st; if (s) { s.className = 'gl-st ' + kind; s.lastChild.textContent = text + (ctx.note || ''); } }
    function toast(ctx, text) { var t = el('div', { class: 'gl-toast', role: 'status', text: text }); ctx.wrap.appendChild(t); setTimeout(function () { t.remove(); }, 3200); }

    function push(ctx) {
      if (!ctx.K) return;
      if (ctx.busy) { ctx.again = 1; return; }
      var S = readState(ctx), N = sent(ctx), body = plain(S, N);
      if (body === ctx.last) { paint(ctx); schedule(ctx); return; }
      ctx.busy = 1;
      setStatus(ctx, 'wait', "Saving to the client's page…");
      var at = Date.now(), state = JSON.stringify({ v: 1, s: S.s || {}, n: S.n || {}, p: S.p || {}, em: N.em, ms: N.ms, u: at });
      C.sign(ctx.K, state).then(function (sig) { return C.store(ctx.K.id, { state: state, sig: sig, at: at }); }).then(function () {
        ctx.last = body;
        setStatus(ctx, 'ok', "Client's live page updated " + C.hhmm(at));
      }, function () {
        setStatus(ctx, 'err', 'Offline, will retry');
        setTimeout(function () { push(ctx); }, 15000);
      }).then(function () {
        ctx.busy = 0;
        if (ctx.again) { ctx.again = 0; push(ctx); }
        paint(ctx); schedule(ctx);
      });
    }
    function later(ctx, ms) { clearTimeout(ctx.deb); ctx.deb = setTimeout(function () { push(ctx); }, ms); }

    function updateText(ctx, S, idx) { return idx.map(function (i) { return '• ' + C.change(ctx.order, i, S); }).join('\n'); }
    function schedule(ctx) {
      clearTimeout(TIMER);
      if (!ctx.K || !C.formId || !ctx.email) return;
      if (!C.news(readState(ctx), ctx.lines, sent(ctx).em).length) return;
      TIMER = setTimeout(function () { email(ctx); }, C.emailAfter * 1000);
    }
    function email(ctx) {
      var S = readState(ctx), idx = C.news(S, ctx.lines, sent(ctx).em), c = ctx.order.c || {};
      if (!idx.length) return;
      api('POST', 'https://www.wixapis.com/form-submission-service/v4/submissions', { submission: { formId: C.formId, submissions: {
        first_name: c.f || 'there', email: ctx.email, delivery: C.when(c), update: updateText(ctx, S, idx), live_link: link(ctx) } } })
        .then(function () {
          var N = sent(ctx);
          idx.forEach(function (i) { N.em[i] = C.sigOf(S, i); });
          keep(ctx, N);
          toast(ctx, 'Update emailed to ' + who(ctx));
          push(ctx);
        }, function () { TIMER = setTimeout(function () { email(ctx); }, 30000); });
    }

    function pendingMsg(ctx) { var S = readState(ctx); return { S: S, idx: C.news(S, ctx.lines, sent(ctx).ms) }; }
    function paint(ctx) {
      if (!ctx.K || !ctx.ui) return;
      var p = pendingMsg(ctx), key = p.idx.map(function (i) { return i + ':' + C.sigOf(p.S, i); }).join(','),
          on = !!p.idx.length && key !== ctx.hidden;
      ctx.ui.bar.classList.toggle('on', on);
      ctx.wrap.classList.toggle('gl-with-bar', on);
      if (on) ctx.ui.barText.textContent = 'Tell ' + who(ctx) + ' about ' + (p.idx.length === 1 ? '1 change' : p.idx.length + ' changes') + '?' + (ctx.email && C.formId ? ' (email goes automatically)' : '');
      ctx.key = key;
    }
    function message(ctx, via) {
      var p = pendingMsg(ctx), c = ctx.order.c || {};
      if (!p.idx.length) return;
      var text = 'Hi' + (c.f ? ' ' + c.f : '') + ', GrocerGoSx here with an update while we shop:\n' + updateText(ctx, p.S, p.idx) + '\n\nFollow it live: ' + link(ctx);
      markMessaged(ctx, p);
      if (via === 'sms') location.href = C.sms(ctx.phone, text); else W.open(C.wa(ctx.phone, text), '_blank');
    }
    function markMessaged(ctx, p) {
      p = p || pendingMsg(ctx);
      var N = sent(ctx);
      p.idx.forEach(function (i) { N.ms[i] = C.sigOf(p.S, i); });
      keep(ctx, N); paint(ctx); push(ctx);
    }
    function share(ctx, via) {
      var c = ctx.order.c || {}, text = 'Hi' + (c.f ? ' ' + c.f : '') + ", it's GrocerGoSx. You can follow your shop live here, with any substitutions as they happen: " + link(ctx);
      if (via === 'copy') {
        var ask = function () { W.prompt('Copy this tracker link for the client', link(ctx)); };
        try { navigator.clipboard.writeText(link(ctx)).then(function () { toast(ctx, 'Tracker link copied: paste it to the client'); }, ask); } catch (e) { ask(); }
      } else if (via === 'sms') location.href = C.sms(ctx.phone, text);
      else W.open(C.wa(ctx.phone, text), '_blank');
    }
    function addLinkToMessage(ctx) {
      var ta = ctx.wrap.querySelector('.gr-panel.open textarea'), t = ctx.wrap.querySelector('.gr-panel.open .gr-panel-h b');
      if (ta && t && t.textContent === waTitle() && ta.value.indexOf(link(ctx)) < 0) ta.value += '\n\nFollow it live: ' + link(ctx);
    }

    function initRun(wrap) {
      if (wrap.__gl) return;
      var P = C.fromHash('run'), order = P && C.decode(P);
      if (!order) return;
      wrap.__gl = 1;
      var c = order.c || {}, again = CUR && CUR.P === P,
          ctx = { wrap: wrap, P: P, order: order, lines: order.i, skey: 'ggsx_run_' + P.length + '_' + P.slice(-24),
                  phone: String(c.p || '').replace(/\D/g, ''),
                  email: /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(c.e || '').trim()) ? String(c.e).trim() : '' };
      if (again) { ctx.K = CUR.K; ctx.last = CUR.last; }
      wrap.__glctx = ctx; CUR = ctx;
      if (W.GGSX_SHORT) W.GGSX_SHORT.make(C.trackUrl + P).then(function (s) { ctx.short = s; }, function () {});
      function pill(text, fn, main) { return el('button', { type: 'button', class: 'gl-pill' + (main ? ' main' : ''), text: text, onclick: fn }); }
      var st = el('div', { class: 'gl-st wait' }, [el('i'), el('span', { text: "Client's live page: connecting…" })]),
          barText = el('p'),
          bar = el('div', { class: 'gl-bar', role: 'region', 'aria-label': 'Client update' }, [barText, el('div', { class: 'gl-row' }, [
            pill('WhatsApp', function () { message(ctx, 'wa'); }, 1), pill('Text', function () { message(ctx, 'sms'); }),
            pill('Later', function () { ctx.hidden = ctx.key; paint(ctx); })])]),
          card = wrap.querySelector('.gr-card');
      if (card) card.appendChild(el('div', { class: 'gl-live' }, [st, el('div', { class: 'gl-row' }, [
        pill('Copy tracker link', function () { share(ctx, 'copy'); }, 1), pill('Send by WhatsApp', function () { share(ctx, 'wa'); }), pill('Send by text', function () { share(ctx, 'sms'); })])]));
      wrap.appendChild(bar);
      ctx.ui = { st: st, bar: bar, barText: barText };
      ctx.note = !C.formId ? ' · email updates off' : !ctx.email ? ' · no email on this order' : '';
      if (again) { setStatus(ctx, 'ok', "Client's live page on"); paint(ctx); return; }
      if (!W.crypto || !crypto.subtle) { setStatus(ctx, 'err', 'Live page needs a secure (https) connection'); return; }
      C.keys(P).then(function (K) {
        ctx.K = K;
        return C.load(K.id).then(function (rec) {
          if (!rec) return null;
          return C.sign(K, String(rec.state || '')).then(function (sig) { try { return sig === rec.sig ? JSON.parse(rec.state) : null; } catch (e) { return null; } });
        }, function () { return false; });
      }).then(function (R) {
        var S = readState(ctx), local = Object.keys(S.s || {}).length || Object.keys(S.n || {}).length, flag = 'ggsx_live_adopt_' + ctx.K.id;
        if (R) mergeSent(ctx, R, local ? S : R);
        if (local) { push(ctx); return; }
        if (R && Object.keys(R.s || {}).length && !sessionStorage.getItem(flag)) {
          /* ticks made on another phone or browser: load them into this run sheet */
          try { localStorage.setItem(ctx.skey, JSON.stringify({ s: R.s || {}, n: R.n || {}, p: R.p || {} })); sessionStorage.setItem(flag, '1'); location.reload(); return 'reload'; } catch (e) {}
        }
        if (R) ctx.last = plain(R, sent(ctx));
        setStatus(ctx, R === false ? 'err' : 'ok', R === false ? 'Offline, will retry on your next tap' : R ? "Client's live page on" : "Client's live page ready: it fills in as you tick");
      }).then(function (r) { if (r !== 'reload') { paint(ctx); schedule(ctx); } });
    }

    D.addEventListener('click', function (e) {
      var t = e.target, w = t && t.closest && t.closest('.gr-wrap'), ctx = w && w.__glctx;
      if (!ctx) return;
      if (t.closest('.gr-b') || t.closest('.gr-reset')) later(ctx, 600);
      else if (t.closest('.gr-foot .gr-btn') && !t.closest('.sec')) addLinkToMessage(ctx);
      else if (t.closest('.gr-panel-b .gr-btn') && !t.closest('.sec')) {
        var h = w.querySelector('.gr-panel.open .gr-panel-h b');
        if (h && h.textContent === waTitle() && ctx.K) markMessaged(ctx);
      }
    });
    D.addEventListener('input', function (e) {
      var t = e.target, w = t && t.closest && t.closest('.gr-wrap'), ctx = w && w.__glctx;
      if (ctx && t.closest('.gr-sub')) later(ctx, 1200);
    });
    D.addEventListener('visibilitychange', function () { if (D.visibilityState === 'visible' && CUR && CUR.K && D.body.contains(CUR.wrap)) schedule(CUR); });

    function scan() { Array.prototype.forEach.call(D.querySelectorAll('.gr-wrap'), function (w) { if (!w.__gl) initRun(w); }); }
    function start() { scan(); new MutationObserver(scan).observe(D.body, { childList: true }); }
    if (D.body) start(); else D.addEventListener('DOMContentLoaded', start);
  }
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 9 Live Run Sheet', e); } catch (e2) {} }
__ggsxE("20d13775-3117-43dd-80a1-8c7a8b77bd68#0");

/* ===== GrocerGoSx Shop 10 Client Live Page (df0be446-4ef9-43fa-b201-2033668accdc, rev 5) ===== */
__ggsxCss("", "\n.gl-view .hide{display:none!important}\n.gl-view .gr-body{padding-bottom:40px}\n.gl-view .gl-when{margin:2px 0 10px;color:#3a3a3a}\n.gl-view .gl-state{font-weight:700}\n.gl-view .gl-upd{margin-top:8px;font-size:12px;color:#6b6b6b}\n.gl-view .gl-upd i{display:inline-block;width:8px;height:8px;border-radius:50%;background:#2f9e55;margin-right:6px;vertical-align:1px;animation:glp 2s infinite}\n.gl-view .gl-upd.off i{background:#cfc9c1;animation:none}\n@keyframes glp{50%{opacity:.3}}\n.gl-view .gl-chg h3{font-family:Benzin,\"Helvetica Neue\",Arial,sans-serif;font-size:16px;margin:0 0 8px}\n.gl-view .gl-chg ul{margin:0 0 10px;padding-left:18px}\n.gl-view .gl-chg li{margin-bottom:6px}\n.gl-view .gl-chg p{margin:0 0 8px;font-size:14px;color:#3a3a3a}\n.gl-view .gl-row{display:flex;flex-wrap:wrap;gap:8px}\n.gl-view .gl-pill{display:inline-flex;align-items:center;min-height:40px;border:1.5px solid #cfc9c1;border-radius:999px;background:#fff;color:#1b1b1b;font:inherit;font-size:14px;font-weight:700;padding:0 16px;text-decoration:none}\n.gl-view .gl-pill.main{background:#F4551B;border-color:#F4551B;color:#fff}\n.gl-view .gl-chip{display:inline-block;margin-top:8px;padding:4px 10px;border-radius:999px;font-size:13px;font-weight:700;background:#f3efe9;color:#6b6b6b}\n.gl-view .gr-item.got .gl-chip{background:#e8f5ec;color:#1e7a3a}\n.gl-view .gr-item.sub .gl-chip{background:#fff1e0;color:#b45309}\n.gl-view .gr-item.out .gl-chip{background:#fde8e8;color:#b42318}\n.gl-view .gr-item.flash{animation:glf 1.4s ease 2}\n@keyframes glf{50%{box-shadow:0 0 0 4px rgba(244,85,27,.35)}}\n.gl-view .gl-foot{text-align:center;font-size:12px;color:#6b6b6b;margin:16px 0}\n.gl-note{position:fixed;left:12px;right:12px;top:calc(72px + env(safe-area-inset-top,0px));z-index:21;max-width:600px;margin:0 auto;background:#1b1b1b;color:#fff;border-radius:16px;padding:12px 16px;font-size:15px;line-height:1.4;box-shadow:0 10px 30px rgba(0,0,0,.25);cursor:pointer}\n.gl-note b{display:block;color:#F4551B;margin-bottom:2px}\n");
__ggsxCss("", "/* 20 Oct 2026: the \"Changes to your order\" card (and its WhatsApp / Text buttons) is hidden at Dwayne's request; delete this line to bring it back */\n.gl-chg{display:none!important}");
__ggsxB("df0be446-4ef9-43fa-b201-2033668accdc#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxLiveView) return;
  W.__ggsxLiveView = 1;
  var T = {
    title: 'Your shop, live',
    hi: 'Hi ',
    yours: 'Your order',
    delivery: 'Delivery: ',
    wait: "We haven't started shopping yet. This page updates by itself once we do.",
    shopping: 'Shopping now: ',
    of: ' of ',
    done: ' items done',
    all: "All done! We're packing your order for delivery.",
    changes: 'Changes to your order',
    ask: 'Questions about a change? Message us:',
    updated: 'Live · updated ',
    waiting: 'Live · waiting for us to start',
    offline: 'Reconnecting…',
    bad: "Couldn't confirm the latest update, so this shows the last confirmed one.",
    broken: 'This link looks incomplete. Please open the link from your GrocerGoSx email or message.',
    foot: 'This page refreshes by itself while it is open.',
    news: 'Update on your order',
    more: ' more',
    chip: { '': 'Waiting', got: 'Got it ✓', sub: 'Substituted', out: 'Out of stock' },
    skipped: ' · skipped as you asked',
    close: 'Close'
  };
  var C, cur = null, base = D.title, tries = 0;

  function boot() {
    C = W.GGSX_TRACK;
    if (!C || !C.keys) { if (++tries < 40) setTimeout(boot, 250); return; }
    W.addEventListener('hashchange', route);
    D.addEventListener('visibilitychange', function () {
      if (!cur || D.visibilityState !== 'visible') return;
      cur.unseen = 0; D.title = base; poll();
    });
    route();
  }
  function route() {
    var P = C.fromHash('track');
    if (cur && cur.P === P) return;
    if (cur) close();
    if (P) open(P);
  }
  function close() {
    clearTimeout(cur.t);
    cur.wrap.remove();
    D.documentElement.classList.remove('gr-lock');
    D.title = base;
    cur = null;
  }

  function open(P) {
    var el = C.el, order = C.decode(P), wrap = el('div', { class: 'gr-wrap open gl-view' }), body = el('div', { class: 'gr-body' });
    cur = { P: P, order: order, wrap: wrap, prev: null };
    D.documentElement.classList.add('gr-lock');
    wrap.appendChild(el('div', { class: 'gr-top' }, [el('b', { text: T.title }),
      el('button', { type: 'button', class: 'gr-x', 'aria-label': T.close, text: '×', onclick: function () { location.hash = ''; } })]));
    wrap.appendChild(body);
    if (!order) { body.appendChild(el('div', { class: 'gr-card', text: T.broken })); D.body.appendChild(wrap); return; }
    var c = order.c || {}, lines = order.i,
        hello = 'Hi GrocerGoSx, about my order for ' + C.when(c) + ': ',
        state = el('div', { class: 'gl-state', text: T.wait }),
        fill = el('i'),
        upd = el('div', { class: 'gl-upd off' }, [el('i'), el('span', { text: T.offline })]),
        ul = el('ul'),
        chg = el('div', { class: 'gr-card gl-chg hide' }, [el('h3', { text: T.changes }), ul, el('p', { text: T.ask }), el('div', { class: 'gl-row' }, [
          el('a', { class: 'gl-pill main', href: C.wa(C.whatsapp, hello), target: '_blank', rel: 'noopener', text: 'WhatsApp' }),
          el('a', { class: 'gl-pill', href: C.sms(C.whatsapp, hello), text: 'Text' })])]),
        list = el('div', { class: 'gr-list' });
    body.appendChild(el('div', { class: 'gr-card' }, [el('h2', { text: c.f ? T.hi + c.f : T.yours }),
      el('div', { class: 'gl-when', text: T.delivery + C.when(c) }), state, el('div', { class: 'gr-bar' }, [fill]), upd]));
    body.appendChild(chg);
    var items = lines.map(function (ln) {
      var chip = el('span', { class: 'gl-chip', text: T.chip[''] }),
          it = el('div', { class: 'gr-item' }, [el('div', { class: 'gr-it-h' }, [
            el('div', { class: 'gr-it-n' }, [el('b', { text: ln[2] + ' × ' }), C.itemName(ln)]),
            el('div', { class: 'gr-it-p', text: C.money(ln[2] * ln[3]) })]), chip]);
      list.appendChild(it);
      return { it: it, chip: chip };
    });
    body.appendChild(list);
    body.appendChild(el('p', { class: 'gl-foot', text: T.foot }));
    cur.ui = { state: state, fill: fill, upd: upd, chg: chg, ul: ul, items: items };
    D.body.appendChild(wrap);
    W.scrollTo(0, 0);
    if (!W.crypto || !crypto.subtle) { upd.lastChild.textContent = T.offline; return; }
    var me = cur;
    C.keys(P).then(function (K) { me.K = K; poll(); });
  }

  function live(me, text) { me.ui.upd.className = 'gl-upd'; me.ui.upd.lastChild.textContent = text; }
  function poll() {
    var me = cur;
    if (!me || !me.K) return;
    clearTimeout(me.t);
    C.load(me.K.id).then(function (rec) {
      if (me !== cur) return;
      if (!rec || !rec.state) { live(me, T.waiting); render(me, null); return; }
      return C.sign(me.K, String(rec.state || '')).then(function (sig) {
        if (me !== cur) return;
        var S = null;
        try { S = sig === rec.sig ? JSON.parse(rec.state) : null; } catch (e) {}
        if (!S) { live(me, T.bad); return; }
        live(me, T.updated + C.hhmm(S.u || rec.at || Date.now()));
        render(me, S);
      });
    }).catch(function () {
      if (me !== cur) return;
      me.ui.upd.className = 'gl-upd off'; me.ui.upd.lastChild.textContent = T.offline;
    }).then(function () {
      if (me === cur) me.t = setTimeout(poll, D.visibilityState === 'hidden' ? 60000 : 8000);
    });
  }

  function render(me, S) {
    var lines = me.order.i, u = me.ui, done = 0, rule = me.order.r || 'sub';
    var R = S || { s: {}, n: {}, p: {} };
    lines.forEach(function (ln, i) {
      var st = (R.s || {})[i] || '', x = u.items[i], text = T.chip[st] || T.chip[''];
      if (st) done++;
      if (st === 'sub') {
        var nm = String((R.n || {})[i] || '').trim(), pr = C.money((R.p || {})[i]);
        text = T.chip.sub + (nm ? ': ' + nm : '') + (pr ? ' · ' + pr : '');
      }
      if (st === 'out' && (ln[4] || rule) === 'skip') text += T.skipped;
      x.it.className = 'gr-item' + (st ? ' ' + st : '');
      x.chip.textContent = text;
    });
    u.ul.innerHTML = '';
    lines.forEach(function (ln, i) {
      var st = (R.s || {})[i];
      if (st === 'sub' || st === 'out') u.ul.appendChild(C.el('li', { text: C.change(me.order, i, R) }));
    });
    u.chg.classList.toggle('hide', !u.ul.children.length);
    u.state.textContent = !S ? T.wait : done >= lines.length ? T.all : T.shopping + done + T.of + lines.length + T.done;
    u.fill.style.width = Math.round(100 * done / Math.max(1, lines.length)) + '%';
    var news = [];
    if (me.prev) {
      var seen = {};
      lines.forEach(function (ln, i) { seen[i] = C.sigOf(me.prev, i); });
      news = C.news(R, lines, seen);
    }
    me.prev = R;
    if (news.length) notify(me, news, R);
  }

  function notify(me, idx, S) {
    var u = me.ui, old = me.wrap.querySelector('.gl-note'),
        note = C.el('div', { class: 'gl-note', role: 'status' }, [C.el('b', { text: T.news }),
          C.change(me.order, idx[0], S) + (idx.length > 1 ? ' (+' + (idx.length - 1) + T.more + ')' : '')]);
    if (old) old.remove();
    note.addEventListener('click', function () {
      note.remove();
      try { u.chg.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) {}
    });
    me.wrap.appendChild(note);
    setTimeout(function () { note.remove(); }, 9000);
    idx.forEach(function (i) { var it = u.items[i].it; it.classList.remove('flash'); void it.offsetWidth; it.classList.add('flash'); });
    try { if (navigator.vibrate) navigator.vibrate([120, 60, 120]); } catch (e) {}
    if (D.visibilityState === 'hidden') { me.unseen = (me.unseen || 0) + idx.length; D.title = '(' + me.unseen + ') ' + base; }
  }

  if (D.body) boot(); else D.addEventListener('DOMContentLoaded', boot);
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 10 Client Live Page', e); } catch (e2) {} }
__ggsxE("df0be446-4ef9-43fa-b201-2033668accdc#0");

/* ===== GrocerGoSx Shop 11 Restaurant & Pharmacy Pages (a3917d9b-29ab-4488-8080-59caf1f6ceea, rev 7) ===== */
__ggsxCss("", "\n#ggsx-more-page{--o:#F4551B;--ink:#1b1b1b;--mute:#6b6b6b;--line:#e9e4dd;box-sizing:border-box;width:100%;max-width:1040px;margin:0 auto;padding:28px 24px 72px;color:var(--ink);font-family:\"Avenir Light\",avenir-lt-w01_35-light1475496,Avenir,\"Helvetica Neue\",Arial,sans-serif;font-size:15px;line-height:1.45;text-align:left}\n#ggsx-more-page *{box-sizing:border-box}\n#ggsx-more-page h1{font-family:Benzin,sans-serif;font-weight:700;font-size:40px;line-height:1.1;margin:0 0 8px;color:var(--ink)}\n#ggsx-more-page .gp-lead{font-size:17px;color:#444;margin:0 0 18px;max-width:640px}\n#ggsx-more-page .gp-bask{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;background:#fff1ea;border:1.5px solid #f6c9b3;border-radius:16px;padding:12px 16px;margin:0 0 18px}\n#ggsx-more-page .gp-bask[hidden]{display:none}\n#ggsx-more-page .gp-bask span{font-weight:700}\n#ggsx-more-page .gp-btn{display:inline-flex;align-items:center;justify-content:center;min-height:44px;padding:0 20px;border:0;border-radius:999px;background:var(--o);color:#fff;font:inherit;font-weight:700;cursor:pointer}\n#ggsx-more-page .gm-vendor{display:flex;align-items:center;gap:14px;width:100%;text-align:left;background:#fff;border:1.5px solid var(--line);border-radius:16px;padding:12px 16px 12px 12px;font:inherit;color:inherit;cursor:pointer}\n#ggsx-more-page .gm-vendor:hover{border-color:var(--o)}\n#ggsx-more-page .gm-card{max-width:620px}\n#ggsx-more-page .gm-card textarea{width:100%;font:inherit;font-size:16px;border:1.5px solid #cfc9c1;border-radius:12px;padding:11px 12px;resize:vertical;margin:0 0 10px;-webkit-appearance:none}\n#ggsx-more-page .gp-muted{color:var(--mute)}\n#ggsx-more-page .gp-cross{margin-top:28px;font-size:14px;color:var(--mute)}\n#ggsx-more-page .gp-cross button{border:0;background:none;padding:0 0 0 8px;font:inherit;font-weight:700;color:var(--o);cursor:pointer}\n@media (max-width:860px){#ggsx-more-page{padding:20px 16px 110px}#ggsx-more-page h1{font-size:30px}#ggsx-more-page .gp-btn{width:100%}}\n");
__ggsxB("a3917d9b-29ab-4488-8080-59caf1f6ceea#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxPages) return;
  W.__ggsxPages = 1;
  var P = W.GGSX_MORE_PAGES = {
    restaurants: '/restaurants', pharmacy: '/pharmacy', shop: '/shop-now',
    copy: { restTitle: 'Restaurants', pharmTitle: 'Pharmacy', item: ' item', items: ' items', inBasket: ' in your basket', go: 'View basket & checkout',
            oneRun: 'Everything goes in one basket and one delivery:', shop: 'Shop groceries', rest: 'Restaurants', pharm: 'Pharmacy', loading: 'Loading…' },
    go: function (url, replace) { if (replace) location.replace(url); else location.assign(url); }
  };
  var BASKET = 'ggsx_basket', M = null, ROOT = null, KIND = '', STRIP = null, LIVE = false, tries = 0;

  function clean(p) { return String(p || '').replace(/\/+$/, '') || '/'; }
  function here() { var p = clean(location.pathname); return p === P.restaurants ? 'rest' : p === P.pharmacy ? 'pharm' : p === clean(P.shop) ? 'shop' : ''; }

  /* ---------- the shared basket (same storage as Shop Now) ---------- */
  function readBasket() { try { var b = JSON.parse(localStorage.getItem(BASKET) || 'null'); if (b && b.items) return b; } catch (e) {} return { v: 1, items: {} }; }
  function add(item, qty) {
    var b = readBasket(), ord = 0, k, cur = b.items[item.id];
    for (k in b.items) ord = Math.max(ord, b.items[k].o || 0);
    if (cur) cur.n = Math.min(99, (cur.n || 0) + qty);
    else b.items[item.id] = { id: item.id, n: Math.min(99, qty), name: item.name, size: item.size || '', price: +item.price || 0, img: item.img || '', o: ord + 1 };
    b.t = Date.now();
    try { localStorage.setItem(BASKET, JSON.stringify(b)); } catch (e) { return false; }
    try { W.dispatchEvent(new CustomEvent('ggsx-basket')); } catch (e) {}
    paintBasket();
    return true;
  }
  function paintBasket() {
    if (!STRIP) return;
    var b = readBasket(), n = 0, s = 0, k;
    for (k in b.items) { n += b.items[k].n || 0; s += (b.items[k].n || 0) * (+b.items[k].price || 0); }
    STRIP.hidden = !n;
    STRIP.firstChild.textContent = n + (n === 1 ? P.copy.item : P.copy.items) + ' · ' + M.money(s) + P.copy.inBasket;
  }

  /* ---------- page content ---------- */
  function cross(k) {
    var h = M.h, links = [[P.copy.shop, P.shop]];
    links.push(k === 'rest' ? [P.copy.pharm, P.pharmacy] : [P.copy.rest, P.restaurants]);
    return h('p', { class: 'gp-cross' }, [P.copy.oneRun].concat(links.map(function (l) {
      return h('button', { type: 'button', text: l[0], onclick: function () { P.go(l[1]); } });
    })));
  }
  function vendors(h, c) {
    var grid = h('div', { class: 'gm-vendors' }, [h('div', { class: 'gm-loading', text: P.copy.loading })]);
    M.load().then(function (d) {
      grid.innerHTML = '';
      if (!d.vendors.length) grid.appendChild(h('p', { class: 'gp-muted', text: c.noRest }));
      d.vendors.forEach(function (v) {
        var n = d.items.filter(function (i) { return i.vendor_id === v.vendor_id; }).length;
        grid.appendChild(h('button', { type: 'button', class: 'gm-vendor', onclick: function () { location.hash = '#restaurants/' + encodeURIComponent(v.vendor_id); } }, [
          M.logo(v, 160),
          h('span', { class: 'gm-vt' }, [h('span', { class: 'gm-vn', text: v.name }),
            h('small', { text: [v.side ? v.side + ' side' : '', v.area, n + ' items'].filter(Boolean).join(' · ') })])]));
      });
    }).catch(function () { grid.innerHTML = ''; grid.appendChild(h('p', { class: 'gp-muted', text: c.fail })); });
    return grid;
  }
  function pharmacy(h, t) {
    var ta = h('textarea', { rows: '4', placeholder: t.pharmPh }), cb = h('input', { type: 'checkbox' }),
        msg = h('div', { class: 'gm-msg' }), fee = h('small', { class: 'gm-fee', text: t.pharmNote });
    M.load().then(function (d) {
      fee.textContent = (d.set.pharmacy_note || t.pharmNote) + ' ' + M.money(M.setting('errand_stop_fee', 20)) + ' ' + t.stopFee.toLowerCase() + t.stopNote + (t.stopNote2 || '');
    }).catch(function () {});
    return h('div', { class: 'gm-card' }, [ta, h('label', { class: 'gm-check' }, [cb, t.rx]), msg,
      h('button', { type: 'button', class: 'gp-btn', text: t.pharmAdd, onclick: function () {
        var v = ta.value.trim();
        if (!v) { msg.textContent = t.pharmEmpty; ta.focus(); return; }
        if (add({ id: 'pharm:' + Date.now().toString(36), name: t.pharmLine + v, size: t.pharmSize + (cb.checked ? t.rxTag : ''), price: 0, img: '' }, 1)) {
          ta.value = ''; cb.checked = false; msg.textContent = t.added + ' · ' + v;
        } else msg.textContent = t.fail;
      } }), fee]);
  }
  function build(k) {
    var h = M.h, c = M.copy, root = h('section', { id: 'ggsx-more-page' });
    STRIP = h('div', { class: 'gp-bask', hidden: 'hidden' }, [h('span'), h('button', { type: 'button', class: 'gp-btn', text: P.copy.go, onclick: function () { P.go(P.shop + '#basket'); } })]);
    root.appendChild(h('h1', { text: k === 'rest' ? P.copy.restTitle : P.copy.pharmTitle }));
    root.appendChild(h('p', { class: 'gp-lead', text: k === 'rest' ? c.restLead : c.pharmLead }));
    root.appendChild(STRIP);
    root.appendChild(k === 'rest' ? vendors(h, c) : pharmacy(h, c));
    root.appendChild(cross(k));
    paintBasket();
    return root;
  }
  function host() {
    return D.querySelector('main[id^="PAGE_SECTIONS"] > section') || D.querySelector('main > section') || D.querySelector('#SITE_PAGES > div') || D.querySelector('main');
  }
  function mount() {
    var k = here();
    if (k !== 'rest' && k !== 'pharm') {
      if (ROOT) { ROOT.remove(); ROOT = null; KIND = ''; STRIP = null; }
      if (M.__add) { M.add = M.__add; M.__add = null; }
      return;
    }
    if (!M.__add) { M.__add = M.add; M.add = add; }        /* Shop 6's menu sheet adds through this on these pages */
    if (ROOT && KIND === k && D.body.contains(ROOT)) return;
    var hst = host();
    if (!hst) return;
    if (!ROOT || KIND !== k) { ROOT = build(k); KIND = k; }
    hst.appendChild(ROOT);
    Array.prototype.forEach.call(hst.children, function (ch) { if (ch !== ROOT) { ch.style.minHeight = '0'; ch.style.height = '0'; ch.style.overflow = 'hidden'; } });
  }

  /* ---------- Shop Now: hide the old tabs and forward old links once both pages are live ---------- */
  function detect() {
    var routes = (((W.viewerModel || {}).siteFeaturesConfigs || {}).router || {}).routes;
    if (routes) return Promise.resolve(!!(routes['./restaurants'] && routes['./pharmacy']));
    try { if (sessionStorage.getItem('ggsx_pages_live') === '1') return Promise.resolve(true); } catch (e) {}
    return Promise.all([P.restaurants, P.pharmacy].map(function (p) {
      return fetch(p, { method: 'HEAD', cache: 'no-store', credentials: 'same-origin' }).then(function (r) { return r.ok; }, function () { return false; });
    })).then(function (r) {
      var ok = r[0] && r[1];
      if (ok) try { sessionStorage.setItem('ggsx_pages_live', '1'); } catch (e) {}
      return ok;
    });
  }
  function hideTabs() {
    if (!LIVE || here() !== 'shop') return;
    var c = M.copy;
    Array.prototype.forEach.call(D.querySelectorAll('#ggsx-shop .gm-tab'), function (b) {
      var t = b.textContent.trim();
      if ((t === c.restaurants || t === c.pharmacy) && b.style.display !== 'none') b.style.display = 'none';
    });
  }
  function onHash() {
    var k = here();
    if ((k === 'rest' || k === 'pharm') && /^#basket/.test(location.hash)) { P.go(P.shop + '#basket'); return; }
    if (k === 'shop' && LIVE) {
      var m = /^#(restaurants|pharmacy)(?:\/([^\/]+))?/.exec(location.hash);
      if (m) P.go(m[1] === 'pharmacy' ? P.pharmacy : P.restaurants + (m[2] ? '#restaurants/' + m[2] : ''), true);
    }
  }

  function boot() {
    M = W.GGSX_MORE;
    if (!M || !M.h || !M.load) { if (++tries < 60) setTimeout(boot, 200); return; }
    var busy = false;
    new MutationObserver(function () {
      if (busy) return;
      busy = true;
      (W.requestAnimationFrame || setTimeout)(function () { busy = false; mount(); hideTabs(); });
    }).observe(D.documentElement, { childList: true, subtree: true });
    W.addEventListener('hashchange', onHash);
    W.addEventListener('ggsx-basket', paintBasket);
    W.addEventListener('storage', function (e) { if (e.key === BASKET) paintBasket(); });
    mount();
    detect().then(function (ok) { LIVE = ok; hideTabs(); if (here() === 'shop') onHash(); }, function () {});
    onHash();
  }
  if (D.body) boot(); else D.addEventListener('DOMContentLoaded', boot);
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 11 Restaurant & Pharmacy Pages', e); } catch (e2) {} }
__ggsxE("a3917d9b-29ab-4488-8080-59caf1f6ceea#0");

/* ===== GrocerGoSx Shop 12 Checkout Polish (c0a6990d-cf2b-44a6-ac21-f8ad29ef4478, rev 5) ===== */
__ggsxCss("", "\n.gc-hint{font-size:12px;font-weight:400;color:#6b6b6b;margin-top:2px;line-height:1.4}\n.gc-hint.bad{color:#d93025;font-weight:700}\n.gc-recap{text-align:left;background:#f6f3ee;border-radius:14px;padding:14px 16px;margin:0 0 16px;font-size:14px;line-height:1.5;color:#1b1b1b}\n.gc-recap b{display:block;font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#6b6b6b;margin-bottom:2px}\n.gc-thanks .gc-recap p{margin:0 0 10px;font-size:14px;line-height:1.5;color:#1b1b1b}\n.gc-thanks .gc-recap p:last-child{margin-bottom:0}\n.gc-next{list-style:decimal;text-align:left;margin:0 0 18px;padding:0 0 0 20px;font-size:14px;line-height:1.5;color:#3a3a3a}\n.gc-next li{margin-bottom:4px}\n.gc-nt{text-align:left;font-size:13px;font-weight:700;color:#3a3a3a;margin:0 0 6px}\n.gc-track{display:flex;align-items:center;justify-content:center;min-height:48px;padding:0 20px;border-radius:999px;background:#F4551B;color:#fff;font-weight:700;font-size:16px;text-decoration:none;margin:0 0 12px}\n.gc-thanks .gc-btn.gc-sec{background:#fff;color:#1b1b1b;border:1.5px solid #cfc9c1;width:100%}\n");
__ggsxB("c0a6990d-cf2b-44a6-ac21-f8ad29ef4478#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxPolish) return;
  W.__ggsxPolish = 1;
  var P = W.GGSX_POLISH = {
    tz: 'America/Lower_Princes',
    leadHours: 3, windowDays: 180,              /* fallbacks: the sheet's Settings tab (lead_hours, window_days up to 366) wins */
    linkField: 'live_link_4b8e',
    copy: {
      lead: "Tell us where and when, and we'll shop it. No payment now — we confirm by message and send your invoice after shopping.",
      thanksLead: "We'll confirm by message shortly (WhatsApp, iMessage or text) and send your invoice / payment link once we've shopped. A copy of your order is on its way to ",
      hint: "Orders need at least {h} hours' notice.",
      tooLate: ' — too late for this day',
      noneToday: "Today's windows have passed — please pick tomorrow or later.",
      pickWindow: "That window is no longer open for the date you picked — please choose another.",
      delivery: 'Delivery', address: 'Address', basket: 'Your basket', estimate: 'estimate incl. fees',
      track: 'Track my order', nextTitle: 'What happens next',
      next: ['We confirm your order by message.',
             'We shop in your window and message you about anything unavailable.',
             "You get your invoice / payment link once we've shopped.",
             'Your order is delivered to your door.']
    }
  };
  var CK = W.GGSX_CHECKOUT, INP = null, HINT = null;

  function el(tag, attrs, kids) {
    var e = D.createElement(tag), k;
    for (k in attrs || {}) { if (attrs[k] == null) continue; if (k === 'class') e.className = attrs[k]; else if (k === 'text') e.textContent = attrs[k]; else e.setAttribute(k, attrs[k]); }
    (kids || []).forEach(function (c) { if (c) e.appendChild(typeof c === 'string' ? D.createTextNode(c) : c); });
    return e;
  }
  /* ---------- island time ---------- */
  function now() {
    try {
      var o = {}, f = new Intl.DateTimeFormat('en-GB', { timeZone: P.tz, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false });
      f.formatToParts(new Date()).forEach(function (p) { o[p.type] = p.value; });
      var h = parseInt(o.hour, 10); if (h === 24) h = 0;
      return { ymd: o.year + '-' + o.month + '-' + o.day, mins: h * 60 + parseInt(o.minute, 10) };
    } catch (e) {
      var d = new Date();
      return { ymd: d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2), mins: d.getHours() * 60 + d.getMinutes() };
    }
  }
  function dayNo(ymd) { var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(ymd || ''); return m ? Math.round(Date.UTC(+m[1], +m[2] - 1, +m[3]) / 864e5) : null; }
  function addDays(ymd, n) { var d = new Date(ymd + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); }
  function pretty(ymd) { var d = new Date(ymd + 'T12:00:00Z'); return isNaN(d) ? ymd : d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' }); }
  /* ---------- windows ---------- */
  function endOf(label, all) {
    var m = /(\d{1,2}):(\d{2})\s*[–—-]\s*(\d{1,2}):(\d{2})/.exec(label);
    if (m) return (+m[3]) * 60 + (+m[4]);
    var mx = 0; (all || []).forEach(function (w) { var k = /(\d{1,2}):(\d{2})\s*[–—-]\s*(\d{1,2}):(\d{2})/.exec(w); if (k) mx = Math.max(mx, (+k[3]) * 60 + (+k[4])); });
    return mx || 23 * 60;                      /* "Any time": open as long as the last window is */
  }
  function open(ymd, label, all) {
    var t = now(), d = dayNo(ymd || t.ymd), td = dayNo(t.ymd);
    if (d == null) return true;
    if (d < td) return false;
    return (d - td) * 1440 + endOf(label, all) > t.mins + P.leadHours * 60;
  }
  function refresh() {
    if (!INP || !INP.win) return;
    var win = INP.win, date = INP.date, t = now(), all = [], any = false, ymd = date.value || t.ymd;
    Array.prototype.forEach.call(win.options, function (o) { if (o.value) all.push(o.value); });
    date.min = t.ymd;
    date.max = addDays(t.ymd, P.windowDays);
    Array.prototype.forEach.call(win.options, function (o) {
      if (!o.value) return;
      if (!o.getAttribute('data-base')) o.setAttribute('data-base', o.textContent);
      var ok = open(ymd, o.value, all);
      o.disabled = !ok;
      o.textContent = o.getAttribute('data-base') + (ok ? '' : P.copy.tooLate);
      if (ok) any = true;
    });
    if (win.value && win.selectedOptions[0] && win.selectedOptions[0].disabled) win.value = '';
    if (!HINT) { HINT = el('div', { class: 'gc-hint' }); win.parentNode.appendChild(HINT); }
    var hours = P.leadHours % 1 ? P.leadHours : Math.round(P.leadHours);
    HINT.textContent = any ? (hours > 0 ? P.copy.hint.replace('{h}', hours) : '') : P.copy.noneToday;
    HINT.className = 'gc-hint' + (any ? '' : ' bad');
  }
  function guard(e) {
    if (!INP) return;
    var win = INP.win, all = [];
    Array.prototype.forEach.call(win.options, function (o) { if (o.value) all.push(o.value); });
    if (win.value && !open(INP.date.value, win.value, all)) {
      e.preventDefault(); e.stopImmediatePropagation();
      refresh();
      win.classList.add('bad');
      var err = D.querySelector('.gc-form .gc-err'); if (err) err.textContent = P.copy.pickWindow;
      try { win.focus(); } catch (x) {}
    }
  }
  /* open an in-page link (/shop-now#track/…) ourselves: the site's own click handling cancels same-page #links and pushes the URL
     without a hashchange. A capture listener on window runs before it, so the Track button never reaches it. */
  function openLink(url) {
    var u; try { u = new URL(url, location.href); } catch (e) { location.href = url; return; }
    var same = u.origin === location.origin && u.pathname.replace(/\/+$/, '') === location.pathname.replace(/\/+$/, '');
    if (!same || !u.hash) { location.href = url; return; }
    if (location.hash !== u.hash) location.hash = u.hash;
    else { try { W.dispatchEvent(new HashChangeEvent('hashchange')); } catch (e) { W.dispatchEvent(new Event('hashchange')); } }
  }
  W.addEventListener('click', function (e) {
    var a = e.target && e.target.closest ? e.target.closest('a.gc-track') : null;
    if (!a) return;
    e.preventDefault(); e.stopPropagation();
    openLink(a.getAttribute('href'));
  }, true);
  /* the sheet's own notice and horizon, when Shop 5's loader is there */
  function settings() {
    var M = W.GGSX_MORE;
    if (!M || !M.load) return;
    M.load().then(function (d) {
      var s = (d && d.set) || {}, lh = parseFloat(s.lead_hours), wd = parseInt(s.window_days, 10);
      if (lh >= 0 && lh < 72) P.leadHours = lh;
      if (wd > 0 && wd <= 366) P.windowDays = wd;
      refresh();
    }).catch(function () {});
  }
  /* ---------- wording ---------- */
  if (CK && CK.copy) { CK.copy.lead = P.copy.lead; CK.copy.thanksLead = P.copy.thanksLead; }
  D.addEventListener('ggsx-checkout-build', function (e) {
    var d = e.detail || {};
    INP = d.inputs || null;
    var lead = D.querySelector('.gc-box .gc-lead'); if (lead) lead.textContent = P.copy.lead;
    if (d.form) {
      d.form.parentNode.addEventListener('submit', guard, true);
      if (INP && INP.date) INP.date.addEventListener('change', refresh);
      if (INP && INP.win) INP.win.addEventListener('change', function () { INP.win.classList.remove('bad'); });
    }
    refresh(); settings();
  });
  D.addEventListener('ggsx-checkout-open', function () { refresh(); });
  /* ---------- thank-you screen ---------- */
  D.addEventListener('ggsx-checkout-sent', function (e) {
    var f = (e.detail || {}).fields || {}, k = (CK && CK.t) || {}, box = D.querySelector('.gc-box .gc-thanks');
    if (!box) return;
    var btn = box.querySelector('.gc-btn'), order = String(f[k.order] || ''),
        bt = /Basket total: (\$[\d.,]+) \(([^)]+)\)/.exec(order), est = /: (\$[\d.,]+)\s*\nFinal total/.exec(order),
        live = f[(W.GGSX_TRACK && W.GGSX_TRACK.linkField) || P.linkField] || '',
        recap = el('div', { class: 'gc-recap' }, [
          el('p', {}, [el('b', { text: P.copy.delivery }), pretty(f[k.date] || '') + (f[k.win] ? ' · ' + f[k.win] : '')]),
          el('p', {}, [el('b', { text: P.copy.address }), (f[k.address] || '') + (f[k.side] ? ' (' + f[k.side] + ')' : '')]),
          bt ? el('p', {}, [el('b', { text: P.copy.basket }), bt[2].replace(/,.*$/, '') + ' · ' + bt[1] + (est ? ' · ' + P.copy.estimate + ' ' + est[1] : '')]) : null
        ]),
        next = el('ol', { class: 'gc-next' }, P.copy.next.map(function (t) { return el('li', { text: t }); }));
    box.insertBefore(recap, btn);
    if (live) { box.insertBefore(el('a', { class: 'gc-track', href: live, text: P.copy.track }), btn); if (btn) btn.classList.add('gc-sec'); }
    box.insertBefore(el('div', { class: 'gc-nt', text: P.copy.nextTitle }), btn);
    box.insertBefore(next, btn);
  });
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 12 Checkout Polish', e); } catch (e2) {} }
__ggsxE("c0a6990d-cf2b-44a6-ac21-f8ad29ef4478#0");

/* ===== GrocerGoSx Shop 13 Order Changes Core (00d0a079-a490-421a-8520-20c86d65e9d0, rev 10) ===== */
__ggsxCss("", "\n.ge-row{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:12px;padding-top:12px;border-top:1px solid #efeae3}\n.ge-pill{display:inline-flex;align-items:center;min-height:40px;border:1.5px solid #cfc9c1;border-radius:999px;background:#fff;color:#1b1b1b;font:inherit;font-size:14px;font-weight:700;padding:0 16px;cursor:pointer;text-decoration:none}\n.ge-pill.main{background:#F4551B;border-color:#F4551B;color:#fff}\n.ge-note{flex-basis:100%;font-size:13px;color:#6b6b6b;line-height:1.4;border:0!important;padding:0!important;background:none!important;border-radius:0!important}\n.ge-row a.ge-pill{color:#1b1b1b}\n.ge-banner{background:#1b1b1b;color:#fff;border-radius:16px;padding:12px 16px;margin-bottom:12px;font-size:14px;line-height:1.45}\n.ge-banner b{display:block;color:#F4551B;margin-bottom:2px}\n.ge-banner pre{white-space:pre-wrap;font:inherit;margin:6px 0 10px}\n.ge-banner button{border:0;border-radius:999px;background:#F4551B;color:#fff;font:inherit;font-weight:700;padding:8px 14px;cursor:pointer}\n.ge-toast{position:fixed;left:50%;top:calc(76px + env(safe-area-inset-top,0px));transform:translateX(-50%);z-index:9700;max-width:90vw;background:#1b1b1b;color:#fff;border-radius:999px;padding:10px 16px;font-size:14px;box-shadow:0 8px 24px rgba(0,0,0,.2)}\n");
__ggsxB("00d0a079-a490-421a-8520-20c86d65e9d0#0");
try {
(function () {
  var W = window, D = document;
  if (W.GGSX_EDIT) return;
  var E = W.GGSX_EDIT = {
    changeFormId: '8f33c5f7-a996-4e8c-9ae1-13eda9b1b332',        /* Wix Form "Order change" (client edits land there: email + Inbox) */
    f: { first: 'first_name', last: 'last_name', email: 'email', phone: 'phone', delivery: 'delivery', changes: 'changes', lines: 'order_lines', sheet: 'run_sheet', live: 'live_link' },
    u: { first: 'first_name', email: 'email', delivery: 'delivery', update: 'update', live: 'live_link' },   /* "Live order update" form (Shop 8 formId) */
    runUrl: 'https://www.grocergosx.com/shop-now#run/',
    tz: 'America/Lower_Princes', leadHours: 3, pollMs: 10000,
    fees: { stop: 20, pickup: 20, shop: 80, pass: 0, vendors: {} },   /* fallbacks: the sheet's Settings tab wins (errand_stop_fee, restaurant_pickup_fee, shopping_fee, pass_through_rate) */
    copy: {
      edit: 'Edit order', editMine: 'Edit my order',
      closedStarted: "We've finished shopping, so the list is locked. Need something else? Message us:",
      closedLate: "We're inside {h} hours of your window, so the list is locked. Need something else? Message us:",
      wa: 'WhatsApp', sms: 'Text', gotIt: 'Got it', updated: 'List updated',
      bannerShop: 'GrocerGoSx updated your order', bannerClient: '{f} changed the order',
      hello: 'Hi GrocerGoSx, about my order for {w}: ',
      emailText: "We've updated your order:\n{t}\n\nYour live page always shows the current list.",
      clientMsg: "Hi {f}, GrocerGoSx here — we've updated your order:\n{t}\n\nFollow it live: {l}",
      added: '+ ', removed: '− ', arrow: ' → ', basket: 'Basket now ', items: ' items', item: ' item', est: ' · estimate incl. fees ', note: 'Note: ',
      linesTotal: 'Basket total: ', linesEst: 'Estimate incl. fees: '
    }
  };
  var H = E.h = {}, PROD = null;

  H.el = function (tag, attrs, kids) {
    var e = D.createElement(tag), k;
    for (k in attrs || {}) { if (attrs[k] == null) continue; if (k === 'class') e.className = attrs[k]; else if (k === 'text') e.textContent = attrs[k]; else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), attrs[k]); else e.setAttribute(k, attrs[k]); }
    (kids || []).forEach(function (c) { if (c) e.appendChild(typeof c === 'string' ? D.createTextNode(c) : c); });
    return e;
  };
  H.money = function (v) { return '$' + (Math.round(v * 100) / 100).toFixed(2); };
  H.nm = function (l) { return l[0] + (l[1] ? ' ' + l[1] : ''); };
  H.withIds = function (lines) { return (lines || []).map(function (ln, i) { return [String(ln[0] || ''), String(ln[1] || ''), +ln[2] || 0, +ln[3] || 0, ln[4] || '', ln[5] || ('o' + i)]; }); };
  H.same = function (a, b) { return JSON.stringify(H.withIds(a)) === JSON.stringify(H.withIds(b)); };
  H.toast = function (text) { var t = H.el('div', { class: 'ge-toast', role: 'status', text: text }); D.body.appendChild(t); setTimeout(function () { t.remove(); }, 3200); };

  /* island time and the client's cut-off */
  H.now = function () {
    try {
      var o = {}, f = new Intl.DateTimeFormat('en-GB', { timeZone: E.tz, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false });
      f.formatToParts(new Date()).forEach(function (p) { o[p.type] = p.value; });
      var h = parseInt(o.hour, 10); if (h === 24) h = 0;
      return { ymd: o.year + '-' + o.month + '-' + o.day, mins: h * 60 + parseInt(o.minute, 10) };
    } catch (e) { var d = new Date(); return { ymd: d.toISOString().slice(0, 10), mins: d.getHours() * 60 + d.getMinutes() }; }
  };
  H.dayNo = function (ymd) { var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(ymd || ''); return m ? Math.round(Date.UTC(+m[1], +m[2] - 1, +m[3]) / 864e5) : null; };
  H.clientOpen = function (order, state) {
    var s = (state && state.s) || {}, k, n = 0;   /* v1.1 (20 Oct 2026): clients can change the list until every item is ticked, also while you shop */
    for (k in s) if (s[k]) n++;
    return n && n >= ((order && order.i) || []).length ? { ok: false, why: 'started' } : { ok: true };
    var c = order.c || {}, dn = H.dayNo(c.d), t = H.now();
    if (dn == null) return { ok: true };
    var m = /(\d{1,2}):(\d{2})\s*[–—-]/.exec(c.w || ''), start = dn * 1440 + (m ? (+m[1]) * 60 + (+m[2]) : 510);
    if (H.dayNo(t.ymd) * 1440 + t.mins + E.leadHours * 60 >= start) return { ok: false, why: 'late' };
    return { ok: true };
  };

  /* fees from the sheet (Settings tab) and the estimate */
  H.settings = function (then) {
    var M = W.GGSX_MORE;
    if (!M || !M.load) return;
    M.load().then(function (d) {
      var s = (d && d.set) || {}, a = parseFloat(s.errand_stop_fee), b = parseFloat(s.restaurant_pickup_fee), f = parseFloat(s.shopping_fee), p = parseFloat(s.pass_through_rate), lh = parseFloat(s.lead_hours);
      if (a >= 0) E.fees.stop = a; var rt = parseFloat(s.service_fee_rate), mx = parseFloat(s.service_fee_max); if (rt >= 0) E.fees.rate = rt; if (mx >= 0) E.fees.max = mx;
      var lw = parseFloat(s.laundry_fee_each_way); if (lw >= 0) E.fees.laundry = lw;
      if (b >= 0) E.fees.pickup = b;
      if (f > 1) E.fees.shop = f;   /* dollars: the minimum fee, at service_fee_rate */
      else if (f >= 0) { var sm = parseFloat(s.service_fee_min); E.fees.rate = f; E.fees.shop = sm >= 0 ? sm : 0; }   /* 25 Oct 2026: a percentage (25%) is the run's rate; service_fee_min is the minimum */
      if (p >= 0 && p < 1) E.fees.pass = p;
      if (lh >= 0 && lh < 72) E.leadHours = lh;
      (d.vendors || []).forEach(function (v) { if (v.name) E.fees.vendors[String(v.name).toLowerCase()] = 1; });
      if (then) then();
    }).catch(function () {});
  };
  /* flat shopping fee (standard rate: the editor can't tell a planned order), $20 per restaurant on a grocery run (the first restaurant of a
     pickup-only run is the main stop), a pharmacy stop only beside other stops, 15% handling on restaurant food */
  H.estimate = function (lines, side) {
    var F = (W.GGSX_RUN && W.GGSX_RUN.fees) || {}, del = 0,
        sub = 0, n = 0, pharm = false, groc = false, food = 0, vend = {}, lau = 0, hasL = false;
    lines.forEach(function (l) {
      sub += l[2] * l[3]; n += l[2];
      var m = /\(([^()]+)\)\s*$/.exec(l[0]), v = m ? m[1].trim().toLowerCase() : '';
      if (/^laundry, wash/i.test(l[0])) { hasL = true; lau += l[2] * l[3]; }
      else if (/^pharmacy\b/i.test(l[0])) pharm = true;
      else if (v && E.fees.vendors[v]) { vend[v] = 1; food += l[2] * l[3]; }
      else groc = true;
    });
    var nv = Object.keys(vend).length, fee = Math.min(Math.max(Math.round((sub - lau) * (E.fees.rate >= 0 ? E.fees.rate : 0.15) * 100) / 100, E.fees.shop >= 0 ? E.fees.shop : 80), E.fees.max >= 0 ? E.fees.max : 120),
        extra = (groc ? nv : Math.max(nv - 1, 0)) * E.fees.pickup + (pharm && (groc || nv) ? E.fees.stop : 0) + Math.round(food * E.fees.pass * 100) / 100 + (hasL ? 2 * (E.fees.laundry >= 0 ? E.fees.laundry : 20) : 0);
    return { sub: sub, n: n, fee: fee, del: del, extra: extra, total: sub + fee + del + extra };
  };

  /* the catalogue: Shop 2's copy of the Products tab, else the sheet */
  function csv(text) {
    var rows = [], row = [], cell = '', q = false, i, ch;
    for (i = 0; i < text.length; i++) {
      ch = text[i];
      if (q) { if (ch === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; } else cell += ch; }
      else if (ch === '"') q = true; else if (ch === ',') { row.push(cell); cell = ''; }
      else if (ch === '\n' || ch === '\r') { if (ch === '\r' && text[i + 1] === '\n') i++; row.push(cell); rows.push(row); row = []; cell = ''; }
      else cell += ch;
    }
    if (cell || row.length) { row.push(cell); rows.push(row); }
    var head = (rows.shift() || []).map(function (c) { return c.trim().toLowerCase(); });
    return rows.map(function (r) { var o = {}; head.forEach(function (k, j) { o[k] = (r[j] || '').trim(); }); return o; });
  }
  H.products = function () {
    if (PROD) return PROD;
    var S = W.GGSX_SHOP || {}, id = S.sheetId || '1-h6W54Wbscz_5zMAVU0myRr0PCYoVW_sJZo4XWe2MXE', rows = null;
    try { var c = JSON.parse(sessionStorage.getItem('ggsx_shop_cache') || 'null'); if (c && c.p && c.p.length) rows = c.p; } catch (e) {}
    PROD = (rows ? Promise.resolve(rows) : fetch('https://docs.google.com/spreadsheets/d/' + id + '/gviz/tq?tqx=out:csv&headers=1&sheet=' + encodeURIComponent((S.tabs && S.tabs.products) || 'Products'), { cache: 'no-store' })
      .then(function (r) { return r.text(); }).then(csv)).then(function (rows) {
        return rows.filter(function (r) { return (r.product || r.name) && !/^(false|no|n|0)$/i.test(r.active || 'true') && !/^(false|no|n|0)$/i.test(r.in_stock || 'true'); })
          .map(function (r) { var name = r.product || r.name; return { name: name, size: r.size || '', price: parseFloat(String(r.price || '').replace(/[^0-9.]/g, '')) || 0, img: r.image || '', q: (name + ' ' + (r.brand || '') + ' ' + (r.tags || '') + ' ' + (r.subcategory || '') + ' ' + (r.category || '')).toLowerCase(), sub: String(r.subcategory || '').toLowerCase(), cat: ((r.category || '') + ' ' + (r.tags || '')).toLowerCase() }; });
      }).catch(function () { PROD = null; return []; });
    return PROD;
  };
  /* best matches first: whole words in the name beat "milk" inside "Milky Way"; the subcategory (Milk & Dairy, Coffee & Tea…), category
     and tags count; short names that are mostly the query win */
  H.rank = function (rows, q, max) {
    var ql = String(q || '').toLowerCase().trim(), t = ql.split(/\s+/).filter(Boolean);
    if (!t.length) return [];
    return rows.map(function (r) {
      if (!t.every(function (w) { return r.q.indexOf(w) >= 0; })) return null;
      var n = r.name.toLowerCase(), words = n.split(/[^a-z0-9]+/).filter(Boolean), s = 0, hit = 0;
      t.forEach(function (w) {
        var i = words.indexOf(w);
        if (i >= 0) { s += 3 + (i === 0 ? 1 : 0); hit++; }
        else if (words.some(function (x) { return x.indexOf(w) === 0; })) { s += 1.5; hit++; }
        else if (n.indexOf(w) >= 0) s += 0.5;
        if ((r.sub || '').indexOf(w) >= 0) s += 2; else if ((r.cat || '').indexOf(w) >= 0) s += 1;
      });
      if (n.indexOf(ql) >= 0) s += 1;
      if (hit) s += Math.min(2, 2 * hit / words.length);
      return { r: r, s: s };
    }).filter(Boolean).sort(function (a, b) { return b.s - a.s || a.r.name.length - b.r.name.length || a.r.name.localeCompare(b.r.name); }).slice(0, max || 10).map(function (x) { return x.r; });
  };

  /* change summaries */
  H.diff = function (old, nw, side) {
    var byId = {}, seen = {}, out = [], c = E.copy;
    old.forEach(function (l) { byId[l[5]] = l; });
    nw.forEach(function (l) {
      seen[l[5]] = 1; var o = byId[l[5]];
      if (!o) out.push(c.added + l[2] + ' × ' + H.nm(l) + (l[3] ? ' (' + H.money(l[3]) + ' each)' : ''));
      else if (o[2] !== l[2]) out.push(H.nm(l) + ': ' + o[2] + c.arrow + l[2]);
    });
    old.forEach(function (l) { if (!seen[l[5]]) out.push(c.removed + l[2] + ' × ' + H.nm(l)); });
    var est = H.estimate(nw, side);
    out.push(c.basket + H.money(est.sub) + ' (' + est.n + (est.n === 1 ? c.item : c.items) + ')' + c.est + H.money(est.total));
    return { text: out.join('\n'), est: est };
  };
  H.fullText = function (lines, side) {
    var est = H.estimate(lines, side), c = E.copy;
    return lines.map(function (l) { return l[2] + ' × ' + H.nm(l) + ' — ' + H.money(l[2] * l[3]) + (l[4] ? ' · if unavailable: ' + l[4] : ''); }).join('\n') +
      '\n\n' + c.linesTotal + H.money(est.sub) + ' (' + est.n + (est.n === 1 ? c.item : c.items) + ')\n' + c.linesEst + H.money(est.total);
  };
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 13 Order Changes Core', e); } catch (e2) {} }
__ggsxE("00d0a079-a490-421a-8520-20c86d65e9d0#0");

/* ===== GrocerGoSx Shop 14 Order Changes (cf46fc33-68bc-4311-abc6-d88cd9fbd489, rev 4) ===== */
__ggsxB("cf46fc33-68bc-4311-abc6-d88cd9fbd489#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxEdit) return;
  W.__ggsxEdit = 1;
  var E = null, H = null, C = null, CUR = null, tries = 0, POLL = 0, SEEN = 'ggsx_edit_seen_';

  function here() { var m = /^#(run|track)\/([A-Za-z0-9_-]+)/.exec(location.hash); return m ? { kind: m[1], P: m[2] } : null; }
  function skey(P) { return 'ggsx_run_' + P.length + '_' + P.slice(-24); }
  function mapping(oldL, newL) { var pos = {}, m = {}; newL.forEach(function (l, j) { pos[l[5]] = j; }); oldL.forEach(function (l, i) { if (pos[l[5]] != null) m[i] = pos[l[5]]; }); return m; }
  function remap(obj, m) { var out = {}, k; for (k in obj || {}) if (m[k] != null) out[m[k]] = obj[k]; return out; }
  function migrate(cur, P2, newL) {
    var m = mapping(cur.lines, newL), S = null, L = null, lk = 'ggsx_live_' + cur.K.id;
    try { S = JSON.parse(localStorage.getItem(skey(cur.P)) || 'null'); } catch (e) {}
    if (S) try { localStorage.setItem(skey(P2), JSON.stringify({ s: remap(S.s, m), n: remap(S.n, m), p: remap(S.p, m) })); } catch (e) {}
    try { L = JSON.parse(localStorage.getItem(lk) || 'null'); } catch (e) {}
    if (L) try { localStorage.setItem(lk, JSON.stringify({ em: remap(L.em, m), ms: remap(L.ms, m) })); } catch (e) {}
  }
  function apply(lines) {
    var cur = CUR, o = {}, k;
    for (k in cur.order) o[k] = cur.order[k];
    o.i = lines;
    var P2 = C.encode(o);
    migrate(cur, P2, lines);
    cur.P = P2; cur.order = o; cur.lines = lines; cur.row = null;
    location.replace('#' + cur.kind + '/' + P2);
  }
  function verify(cur, rec) {
    var out = { edits: null, state: null }, ps = [];
    if (rec.edits && rec.esig) ps.push(C.sign(cur.K, String(rec.edits)).then(function (s) { if (s === rec.esig) try { out.edits = JSON.parse(rec.edits); } catch (e) {} }));
    if (rec.state && rec.sig) ps.push(C.sign(cur.K, String(rec.state)).then(function (s) { if (s === rec.sig) try { out.state = JSON.parse(rec.state); } catch (e) {} }));
    return Promise.all(ps).then(function () { return out; });
  }
  function load(cur, first) {
    return C.load(cur.K.id).then(function (rec) {
      if (cur !== CUR) return;
      return verify(cur, rec || {}).then(function (v) {
        if (cur !== CUR) return;
        cur.remote = v.state;
        if (v.edits && v.edits.lines && v.edits.u > (cur.editsU || 0)) {
          cur.editsU = v.edits.u; cur.log = v.edits.log || []; cur.last = v.edits;
          if (!H.same(v.edits.lines, cur.lines)) {
            if (E.busy) cur.pending = v.edits.lines;
            else { apply(H.withIds(v.edits.lines)); if (!first) H.toast(E.copy.updated); }
          }
        }
        paint(cur);
      });
    }).catch(function () {});
  }
  function route() {
    var h = here();
    if (!h) { stop(); return; }
    if (CUR && CUR.P === h.P && CUR.kind === h.kind) return;
    stop();
    var o = C.decode(h.P);
    if (!o) return;
    var cur = CUR = { kind: h.kind, P: h.P, order: o, lines: H.withIds(o.i), K: null, remote: null, editsU: 0, log: [] };
    C.keys(h.P).then(function (K) {
      if (cur !== CUR) return;
      cur.K = K;
      return load(cur, true);
    }).then(function () {
      if (cur !== CUR) return;
      inject();
      POLL = setInterval(function () { if (D.visibilityState === 'visible' && CUR === cur) load(cur, false); }, E.pollMs);
    });
  }
  function stop() { clearInterval(POLL); POLL = 0; CUR = null; }

  /* ---------- buttons and the "other side changed it" banner ---------- */
  function inject() {
    var cur = CUR, h = here();
    if (!cur || !cur.K || !h || h.P !== cur.P || h.kind !== cur.kind) return;
    var wrap = D.querySelector('.gr-wrap.open');
    if (!wrap || wrap.__geP === cur.P || (cur.kind === 'track') !== wrap.classList.contains('gl-view')) return;
    var card = wrap.querySelector('.gr-card'), old = wrap.querySelector('.ge-row');
    if (!card) return;
    if (old) old.remove();
    wrap.__geP = cur.P;
    cur.row = H.el('div', { class: 'ge-row' });
    card.appendChild(cur.row);
    paint(cur);
  }
  function paint(cur) {
    var row = cur.row, c = cur.order.c || {}, el = H.el, T = E.copy,
        ok = cur.kind === 'track' ? H.clientOpen(cur.order, cur.remote) : { ok: true },
        key = JSON.stringify([ok, cur.last && cur.last.u, E.leadHours]);
    if (!row || !D.body.contains(row) || row.__key === key) return;
    row.__key = key;
    row.innerHTML = '';
    if (ok.ok) row.appendChild(el('button', { type: 'button', class: 'ge-pill main', text: cur.kind === 'run' ? T.edit : T.editMine, onclick: openEditor }));
    else {
      var hello = T.hello.replace('{w}', C.when(c));
      row.appendChild(el('span', { class: 'ge-note', text: ok.why === 'started' ? T.closedStarted : T.closedLate.replace('{h}', E.leadHours) }));
      row.appendChild(el('a', { class: 'ge-pill', href: C.wa(C.whatsapp, hello), target: '_blank', rel: 'noopener', text: T.wa }));
      row.appendChild(el('a', { class: 'ge-pill', href: C.sms(C.whatsapp, hello), text: T.sms }));
    }
    banner(cur);
  }
  function banner(cur) {
    var e = cur.last, body = cur.row && cur.row.closest('.gr-body'), old = body && body.querySelector('.ge-banner'), seen = 0, el = H.el, T = E.copy;
    if (old) old.remove();
    if (!e || !body) return;
    try { seen = +localStorage.getItem(SEEN + cur.K.id) || 0; } catch (x) {}
    if (e.by === (cur.kind === 'run' ? 'shop' : 'client') || e.u <= seen) return;
    var c = cur.order.c || {}, title = e.by === 'shop' ? T.bannerShop : T.bannerClient.replace('{f}', ((c.f || '') + ' ' + (c.l || '')).trim() || 'The client'),
        last = (e.log || []).slice(-1)[0] || {}, text = (last.text || '') + (last.note ? '\n' + T.note + last.note : '');
    body.insertBefore(el('div', { class: 'ge-banner', role: 'status' }, [el('b', { text: title + ' · ' + C.hhmm(e.u) }), el('pre', { text: text }),
      el('button', { type: 'button', text: T.gotIt, onclick: function (ev) { try { localStorage.setItem(SEEN + cur.K.id, String(e.u)); } catch (x) {} ev.currentTarget.parentNode.remove(); } })]), body.firstChild);
  }

  /* ---------- saving a change ---------- */
  function submitForm(formId, fields) {
    return C.api('POST', 'https://www.wixapis.com/form-submission-service/v4/submissions', { submission: { formId: formId, submissions: fields } });
  }
  function notify(cur, by, d, note, opts) {
    var c = cur.order.c || {}, live = C.trackUrl + cur.P, text = d.text + (note ? '\n' + E.copy.note + note : ''), s = {};
    if (by === 'client') {
      if (!E.changeFormId || E.changeFormId.charAt(0) === '_') return Promise.resolve();
      var f = E.f;
      s[f.first] = c.f || ''; s[f.last] = c.l || ''; s[f.email] = c.e || ''; s[f.phone] = c.p || ''; s[f.delivery] = C.when(c);
      s[f.changes] = text; s[f.lines] = H.fullText(cur.lines, c.s); s[f.sheet] = E.runUrl + cur.P; s[f.live] = live;
      return submitForm(E.changeFormId, s);
    }
    if (opts && opts.email && C.formId && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(c.e || ''))) {
      var u = E.u;
      s[u.first] = c.f || 'there'; s[u.email] = String(c.e).trim(); s[u.delivery] = C.when(c); s[u.update] = E.copy.emailText.replace('{t}', text.replace(/\n+/g, ' · ')); s[u.live] = live;
      return submitForm(C.formId, s);
    }
    return Promise.resolve();
  }
  function save(newLines, note, opts) {
    var cur = CUR, by = cur.kind === 'run' ? 'shop' : 'client', old = cur.lines, t = Date.now(), c = cur.order.c || {},
        d = H.diff(old, newLines, c.s),
        edits = { v: 1, lines: newLines, u: t, by: by, note: note || '', log: (cur.log || []).slice(-19).concat([{ t: t, by: by, text: d.text, note: note || '' }]) },
        txt = JSON.stringify(edits), data = { edits: txt, eat: t };
    return C.sign(cur.K, txt).then(function (sig) {
      data.esig = sig;
      var S = cur.remote;
      if (S && (Object.keys(S.s || {}).length || Object.keys(S.n || {}).length)) {
        var m = mapping(old, newLines), ns = { v: 1, s: remap(S.s, m), n: remap(S.n, m), p: remap(S.p, m), em: remap(S.em, m), ms: remap(S.ms, m), u: t }, st = JSON.stringify(ns);
        return C.sign(cur.K, st).then(function (s2) { data.state = st; data.sig = s2; data.at = t; cur.remote = ns; });
      }
    }).then(function () { return C.store(cur.K.id, data); }).then(function () {
      cur.editsU = t; cur.log = edits.log; cur.last = edits;
      try { localStorage.setItem(SEEN + cur.K.id, String(t)); } catch (e) {}
      apply(newLines);
      return notify(cur, by, d, note, opts).catch(function () {}).then(function () { return { text: d.text, note: note || '', live: C.trackUrl + cur.P }; });
    });
  }
  function openEditor() {
    var cur = CUR;
    if (!cur || !E.editor) return;
    var c = cur.order.c || {};
    E.busy = true;
    E.editor({
      kind: cur.kind, lines: H.withIds(cur.lines), side: c.s || '', name: c.f || '', email: c.e || '', phone: String(c.p || '').replace(/\D/g, ''),
      estimate: H.estimate, products: H.products, money: H.money, nm: H.nm, save: save,
      message: function (r) { return E.copy.clientMsg.replace('{f}', c.f || '').replace('{t}', r.text + (r.note ? '\n' + E.copy.note + r.note : '')).replace('{l}', r.live); },
      wa: function (t) { W.open(C.wa(c.p, t), '_blank'); }, sms: function (t) { location.href = C.sms(c.p, t); },
      close: function () { E.busy = false; if (CUR && CUR.pending) { var p = CUR.pending; CUR.pending = null; apply(H.withIds(p)); H.toast(E.copy.updated); } }
    });
  }

  function boot() {
    C = W.GGSX_TRACK; E = W.GGSX_EDIT; H = E && E.h;
    if (!C || !C.keys || !C.encode || !H) { if (++tries < 60) setTimeout(boot, 250); return; }
    H.settings(function () { if (CUR) paint(CUR); });
    W.addEventListener('hashchange', route);
    new MutationObserver(inject).observe(D.body, { childList: true });
    route();
  }
  if (D.body) boot(); else D.addEventListener('DOMContentLoaded', boot);
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 14 Order Changes', e); } catch (e2) {} }
__ggsxE("cf46fc33-68bc-4311-abc6-d88cd9fbd489#0");

/* ===== GrocerGoSx Shop 15 Order Editor (25781f0d-6465-4131-8dfa-4b73960ce44f, rev 4) ===== */
__ggsxCss("", "\n.ge-wrap{position:fixed;inset:0;z-index:9600;background:#f6f3ee;overflow:auto;-webkit-overflow-scrolling:touch;font-family:\"Avenir Light\",avenir-lt-w01_35-light1475496,Avenir,\"Helvetica Neue\",Arial,sans-serif;color:#1b1b1b;font-size:15px;line-height:1.45}\nhtml.ge-lock,html.ge-lock body{overflow:hidden!important}\n.ge-top{position:sticky;top:0;z-index:2;display:flex;align-items:center;justify-content:space-between;background:#F4551B;color:#fff;padding:12px 16px;font-family:Benzin,\"Helvetica Neue\",Arial,sans-serif;font-size:18px}\n.ge-top button{width:40px;height:40px;border:0;border-radius:50%;background:rgba(255,255,255,.2);color:#fff;font-size:26px;line-height:40px;cursor:pointer;padding:0}\n.ge-body{max-width:640px;margin:0 auto;padding:14px 14px 200px}\n.ge-card{background:#fff;border-radius:16px;padding:14px 16px;margin-bottom:12px;box-shadow:0 2px 10px rgba(0,0,0,.05)}\n.ge-card h3{font-family:Benzin,\"Helvetica Neue\",Arial,sans-serif;font-size:16px;margin:0 0 8px}\n.ge-it,.ge-r{display:flex;align-items:center;gap:10px;padding:10px 0;border-top:1px solid #efeae3}\n.ge-it:first-child,.ge-r:first-child{border-top:0}\n.ge-in{flex:1;min-width:0}\n.ge-in b{display:block;font-weight:700;line-height:1.3}\n.ge-in small{color:#6b6b6b;font-size:12px}\n.ge-new{display:inline-block;font-style:normal;font-size:11px;font-weight:700;color:#F4551B;background:#fff1ea;border-radius:999px;padding:2px 8px;margin-left:6px;vertical-align:middle}\n.ge-it.rm .ge-in b{text-decoration:line-through;color:#8f8a84}\n.ge-step{display:inline-flex;align-items:center;border:1.5px solid #cfc9c1;border-radius:999px;background:#fff;flex:none}\n.ge-step button{width:40px;height:40px;border:0;background:none;font:inherit;font-size:20px;color:#F4551B;cursor:pointer;padding:0}\n.ge-step span{min-width:24px;text-align:center;font-weight:700}\n.ge-x{width:36px;height:36px;border:0;border-radius:50%;background:#f3efe9;color:#6b6b6b;font-size:20px;line-height:36px;cursor:pointer;padding:0;flex:none}\n.ge-undo,.ge-add{min-height:36px;border:1.5px solid #cfc9c1;border-radius:999px;background:#fff;font:inherit;font-size:13px;font-weight:700;padding:0 14px;cursor:pointer;flex:none;color:#1b1b1b}\n.ge-add{background:#F4551B;border-color:#F4551B;color:#fff}\n.ge-q{width:100%;box-sizing:border-box;font:inherit;font-size:16px;border:1.5px solid #cfc9c1;border-radius:12px;padding:11px 12px;-webkit-appearance:none;outline:none;background:#fff}\n.ge-q:focus,.ge-cr input:focus,.ge-note:focus{border-color:#F4551B}\n.ge-muted{color:#6b6b6b;font-size:13px;padding:8px 0}\n.ge-custom{border-top:1px solid #efeae3;padding-top:10px;margin-top:4px}\n.ge-custom b{display:block;font-size:13px;margin-bottom:6px}\n.ge-cr{display:flex;gap:8px}\n.ge-cr input{font:inherit;font-size:15px;border:1.5px solid #cfc9c1;border-radius:10px;padding:8px 10px;min-width:0;-webkit-appearance:none;outline:none}\n.ge-cr input:first-child{flex:2}\n.ge-cr input:nth-child(2){flex:1;max-width:120px}\n.ge-note{width:100%;box-sizing:border-box;font:inherit;font-size:15px;border:1.5px solid #cfc9c1;border-radius:12px;padding:10px 12px;resize:vertical;min-height:60px;outline:none}\n.ge-foot{position:fixed;left:0;right:0;bottom:0;z-index:3;background:rgba(246,243,238,.97);box-shadow:0 -6px 20px rgba(0,0,0,.08);padding:10px 14px calc(10px + env(safe-area-inset-bottom,0))}\n.ge-fi{max-width:640px;margin:0 auto}\n.ge-tot div{display:flex;justify-content:space-between;font-size:13px;color:#6b6b6b;padding:1px 0}\n.ge-tot div.big{font-size:16px;color:#1b1b1b;font-weight:700}\n.ge-tot b{color:#F4551B}\n.ge-chk{display:flex;align-items:center;gap:8px;font-size:13px;margin:6px 0 0;cursor:pointer}\n.ge-chk input{width:18px;height:18px;margin:0}\n.ge-err{color:#d93025;font-size:13px;margin-top:4px}\n.ge-err:empty{display:none}\n.ge-btns{display:flex;gap:10px;margin-top:8px}\n.ge-btn{flex:1;min-height:48px;border:0;border-radius:999px;background:#F4551B;color:#fff;font:inherit;font-size:15px;font-weight:700;cursor:pointer;padding:0 16px}\n.ge-btn.sec{background:#fff;color:#1b1b1b;border:1.5px solid #cfc9c1}\n.ge-btn:disabled{opacity:.6;cursor:default}\n.ge-done{text-align:center;padding:20px 16px}\n.ge-done h3{font-size:20px}\n.ge-done pre{text-align:left;white-space:pre-wrap;font:inherit;font-size:14px;background:#f6f3ee;border-radius:12px;padding:12px;margin:10px 0 14px}\n.ge-tick{width:64px;height:64px;margin:0 auto 6px;border-radius:50%;background:#fff1ea;color:#F4551B;font-size:34px;line-height:64px;font-weight:700}\n");
__ggsxB("25781f0d-6465-4131-8dfa-4b73960ce44f#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxEditor) return;
  W.__ggsxEditor = 1;
  var E = W.GGSX_EDIT;
  if (!E) return;
  var T = E.editorCopy = {
    title: 'Edit order', titleMine: 'Edit my order', itemsTitle: 'Items', add: 'Add items', ph: 'Search 3,000+ products…', loading: 'Searching…',
    none: "Nothing matched that — add it as a custom item below.", custom: "Can't find it? Add it as a custom item", customPh: 'Item name', pricePh: 'Price $ (optional)',
    addBtn: 'Add', remove: 'Remove', undo: 'Undo', less: 'One less', more: 'One more', newTag: 'new', each: ' each', priced: 'priced from the receipt',
    note: 'Note', notePhShop: 'Note to the client (optional)', notePhClient: 'Note for your shopper (optional)', email: 'Email the client about this change',
    basket: 'Basket', item: ' item', items: ' items', total: 'Estimated total incl. fees', save: 'Save changes', send: 'Send changes', saving: 'Saving…',
    cancel: 'Cancel', done: 'Done', close: 'Close', empty: 'Keep at least one item on the order.', fail: "That didn't save. Check your connection and try again.",
    savedShop: 'Order updated', savedClient: "Changes sent — we'll confirm by message.", noteLbl: 'Note: ', msgWa: 'WhatsApp the client', msgSms: 'Text the client'
  };
  function el(tag, attrs, kids) {
    var e = D.createElement(tag), k;
    for (k in attrs || {}) { if (attrs[k] == null) continue; if (k === 'class') e.className = attrs[k]; else if (k === 'text') e.textContent = attrs[k]; else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), attrs[k]); else e.setAttribute(k, attrs[k]); }
    (kids || []).forEach(function (c) { if (c) e.appendChild(typeof c === 'string' ? D.createTextNode(c) : c); });
    return e;
  }
  function rank(rows, q) {                                  /* v1.0.1: the ranking lives in Shop 13 (H.rank) */
    if (E.h && E.h.rank) return E.h.rank(rows, q, 10);
    var ql = q.toLowerCase();
    return rows.filter(function (r) { return r.q.indexOf(ql) >= 0; }).slice(0, 10);
  }

  E.editor = function (ctx) {
    var money = ctx.money, nm = ctx.nm, shop = ctx.kind === 'run',
        L = ctx.lines.map(function (l) { return l.slice(); }), removed = {}, q = '', timer = 0, busy = false,
        wrap = el('div', { class: 'ge-wrap', role: 'dialog', 'aria-modal': 'true', 'aria-label': shop ? T.title : T.titleMine }),
        body = el('div', { class: 'ge-body' }), list = el('div'), res = el('div'), tot = el('div', { class: 'ge-tot' }), err = el('div', { class: 'ge-err', role: 'alert' }),
        inp = el('input', { type: 'search', class: 'ge-q', placeholder: T.ph, autocomplete: 'off', 'aria-label': T.add }),
        noteEl = el('textarea', { class: 'ge-note', rows: '2', placeholder: shop ? T.notePhShop : T.notePhClient }),
        chk = shop && ctx.email ? el('input', { type: 'checkbox', checked: 'checked' }) : null,
        btn = el('button', { type: 'button', class: 'ge-btn', text: shop ? T.save : T.send, onclick: submit }),
        foot = el('div', { class: 'ge-foot' }, [el('div', { class: 'ge-fi' }, [tot, chk ? el('label', { class: 'ge-chk' }, [chk, T.email]) : null, err,
          el('div', { class: 'ge-btns' }, [el('button', { type: 'button', class: 'ge-btn sec', text: T.cancel, onclick: close }), btn])])]);

    function active() { return L.filter(function (l) { return !removed[l[5]] && l[2] > 0; }); }
    function close() { if (busy) return; wrap.remove(); D.documentElement.classList.remove('ge-lock'); D.removeEventListener('keydown', esc); ctx.close(); }
    function esc(e) { if (e.key === 'Escape') close(); }
    function paintTotals() {
      var e = ctx.estimate(active(), ctx.side);
      tot.innerHTML = '';
      tot.appendChild(el('div', {}, [el('span', { text: T.basket + ' · ' + e.n + (e.n === 1 ? T.item : T.items) }), el('b', { text: money(e.sub) })]));
      tot.appendChild(el('div', { class: 'big' }, [el('span', { text: T.total }), el('b', { text: money(e.total) })]));
    }
    function paintList() {
      list.innerHTML = '';
      L.forEach(function (l) {
        var rm = !!removed[l[5]], isNew = l[5].charAt(0) === 'a', qty = el('span', { text: String(l[2]) }),
            step = el('div', { class: 'ge-step' }, [
              el('button', { type: 'button', 'aria-label': T.less, text: '−', onclick: function () { if (l[2] <= 1) { if (isNew) L = L.filter(function (x) { return x !== l; }); else removed[l[5]] = 1; } else l[2]--; paintList(); } }),
              qty,
              el('button', { type: 'button', 'aria-label': T.more, text: '+', onclick: function () { if (l[2] < 99) l[2]++; paintList(); } })]);
        list.appendChild(el('div', { class: 'ge-it' + (rm ? ' rm' : '') }, [
          el('div', { class: 'ge-in' }, [el('b', {}, [nm(l), isNew ? el('i', { class: 'ge-new', text: T.newTag }) : null]), el('small', { text: l[3] ? money(l[3]) + T.each : T.priced })]),
          rm ? el('button', { type: 'button', class: 'ge-undo', text: T.undo, onclick: function () { delete removed[l[5]]; paintList(); } }) : step,
          rm ? null : el('button', { type: 'button', class: 'ge-x', 'aria-label': T.remove, text: '×', onclick: function () { if (isNew) L = L.filter(function (x) { return x !== l; }); else removed[l[5]] = 1; paintList(); } })]));
      });
      paintTotals();
    }
    function add(name, size, price) {
      var ex = L.filter(function (x) { return !removed[x[5]] && x[0] === name && x[1] === size; })[0];
      if (ex) ex[2] = Math.min(99, ex[2] + 1);
      else L.push([name, size, 1, +price || 0, '', 'a' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5)]);
      paintList();
    }
    function search() {
      res.innerHTML = '';
      if (!q) return;
      res.appendChild(el('div', { class: 'ge-muted', text: T.loading }));
      ctx.products().then(function (rows) {
        if (inp.value.trim() !== q) return;
        res.innerHTML = '';
        var hits = rank(rows, q);
        hits.forEach(function (r) {
          res.appendChild(el('div', { class: 'ge-r' }, [el('div', { class: 'ge-in' }, [el('b', { text: r.name }), el('small', { text: (r.size ? r.size + ' · ' : '') + money(r.price) })]),
            el('button', { type: 'button', class: 'ge-add', text: T.addBtn, onclick: function () { add(r.name, r.size, r.price); } })]));
        });
        if (!hits.length) res.appendChild(el('div', { class: 'ge-muted', text: T.none }));
        var cn = el('input', { type: 'text', value: q, placeholder: T.customPh, 'aria-label': T.customPh }), cp = el('input', { type: 'number', step: '0.01', inputmode: 'decimal', placeholder: T.pricePh, 'aria-label': T.pricePh });
        res.appendChild(el('div', { class: 'ge-custom' }, [el('b', { text: T.custom }), el('div', { class: 'ge-cr' }, [cn, cp,
          el('button', { type: 'button', class: 'ge-add', text: T.addBtn, onclick: function () { var n = cn.value.trim(); if (!n) { cn.focus(); return; } add(n, '', parseFloat(cp.value) || 0); inp.value = ''; q = ''; res.innerHTML = ''; } })])]));
      });
    }
    function submit() {
      var A = active();
      if (!A.length) { err.textContent = T.empty; return; }
      err.textContent = ''; busy = true; btn.disabled = true; btn.textContent = T.saving;
      ctx.save(A, noteEl.value.trim(), { email: !!(chk && chk.checked) }).then(done, function () {
        busy = false; btn.disabled = false; btn.textContent = shop ? T.save : T.send; err.textContent = T.fail;
      });
    }
    function done(r) {
      busy = false;
      foot.remove();
      body.innerHTML = '';
      var msg = ctx.message(r), btns = shop ? [
        el('button', { type: 'button', class: 'ge-btn', text: T.msgWa, onclick: function () { ctx.wa(msg); } }),
        el('button', { type: 'button', class: 'ge-btn sec', text: T.msgSms, onclick: function () { ctx.sms(msg); } })] : [];
      btns.push(el('button', { type: 'button', class: 'ge-btn' + (shop ? ' sec' : ''), text: T.done, onclick: close }));
      body.appendChild(el('div', { class: 'ge-card ge-done' }, [el('div', { class: 'ge-tick', text: '✓' }), el('h3', { text: shop ? T.savedShop : T.savedClient }),
        el('pre', { text: r.text + (r.note ? '\n' + T.noteLbl + r.note : '') }), el('div', { class: 'ge-btns' }, btns)]));
      wrap.scrollTop = 0;
    }

    inp.addEventListener('input', function () { clearTimeout(timer); q = inp.value.trim(); timer = setTimeout(search, 160); });
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') e.preventDefault(); });
    body.appendChild(el('div', { class: 'ge-card' }, [el('h3', { text: T.itemsTitle }), list]));
    body.appendChild(el('div', { class: 'ge-card' }, [el('h3', { text: T.add }), inp, res]));
    body.appendChild(el('div', { class: 'ge-card' }, [el('h3', { text: T.note }), noteEl]));
    wrap.appendChild(el('div', { class: 'ge-top' }, [el('b', { text: shop ? T.title : T.titleMine }), el('button', { type: 'button', 'aria-label': T.close, text: '×', onclick: close })]));
    wrap.appendChild(body);
    wrap.appendChild(foot);
    paintList();
    D.body.appendChild(wrap);
    D.documentElement.classList.add('ge-lock');
    D.addEventListener('keydown', esc);
    ctx.products();
  };
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 15 Order Editor', e); } catch (e2) {} }
__ggsxE("25781f0d-6465-4131-8dfa-4b73960ce44f#0");

/* ===== GrocerGoSx Add to Home Screen (c63dbe7d-7c58-4ae7-ae7a-8f2a21535fb9, rev 2) ===== */
__ggsxCss("", "\n.ga-card{position:fixed;left:12px;right:12px;bottom:calc(72px + env(safe-area-inset-bottom,0px));z-index:9300;background:#fff;border-radius:18px;box-shadow:0 12px 40px rgba(0,0,0,.22);padding:14px 14px 12px;font-family:\"Helvetica Neue\",Arial,sans-serif;color:#1b1b1b;transform:translateY(140%);transition:transform .4s cubic-bezier(.2,.8,.2,1)}\n.ga-card.in{transform:none}\n.ga-row{display:flex;align-items:flex-start;gap:12px}\n.ga-ic{flex:0 0 52px;width:52px;height:52px;border-radius:13px;box-shadow:0 2px 8px rgba(0,0,0,.15)}\n.ga-t{flex:1;min-width:0;padding-right:22px}\n.ga-t b{display:block;font-size:15px;line-height:1.3;margin-bottom:3px}\n.ga-t span{display:block;font-size:13px;line-height:1.4;color:#4a4a4a}\n.ga-x{position:absolute;top:8px;right:8px;width:32px;height:32px;border:0;background:none;font-size:22px;line-height:32px;color:#8a8a8a;cursor:pointer}\n.ga-btns{display:flex;gap:8px;margin-top:12px}\n.ga-btn{flex:1;min-height:44px;border-radius:999px;border:1.5px solid #cfc9c1;background:#fff;color:#1b1b1b;font:700 15px \"Helvetica Neue\",Arial,sans-serif;cursor:pointer}\n.ga-btn.main{flex:1.6;background:#F4551B;border-color:#F4551B;color:#fff}\n.ga-dim{position:fixed;inset:0;z-index:9310;background:rgba(0,0,0,.45);opacity:0;transition:opacity .3s}\n.ga-dim.in{opacity:1}\n.ga-sheet{position:fixed;left:0;right:0;bottom:0;z-index:9320;background:#fff;border-radius:22px 22px 0 0;padding:18px 18px calc(18px + env(safe-area-inset-bottom,0px));font-family:\"Helvetica Neue\",Arial,sans-serif;color:#1b1b1b;transform:translateY(100%);transition:transform .35s cubic-bezier(.2,.8,.2,1)}\n.ga-sheet.in{transform:none}\n.ga-sheet h3{margin:0 0 14px;font-size:18px;line-height:1.3;padding-right:36px}\n.ga-step{display:flex;align-items:center;gap:12px;padding:10px 0;border-top:1px solid #efeae3;font-size:15px;line-height:1.4}\n.ga-step i{flex:0 0 28px;width:28px;height:28px;border-radius:50%;background:#F4551B;color:#fff;font-style:normal;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:center}\n.ga-step svg{width:22px;height:22px;vertical-align:-5px;margin:0 2px;fill:none;stroke:#1b1b1b;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}\n.ga-step b{font-weight:700}\n.ga-sheet .ga-btn{width:100%;margin-top:14px}\n.ga-toast{position:fixed;left:50%;bottom:calc(84px + env(safe-area-inset-bottom,0px));transform:translateX(-50%);z-index:9330;max-width:90vw;background:#1b1b1b;color:#fff;border-radius:999px;padding:11px 18px;font:14px \"Helvetica Neue\",Arial,sans-serif;box-shadow:0 8px 24px rgba(0,0,0,.2)}\n");
__ggsxB("c63dbe7d-7c58-4ae7-ae7a-8f2a21535fb9#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxA2hs) return;
  W.__ggsxA2hs = 1;
  var A = W.GGSX_A2HS = {
    delay: 20000,                 /* ms into the visit before the card appears (counted across pages) */
    snoozeClose: 7, snoozeLater: 30, /* days hidden after closing / after "Not now" */
    icon: 'https://static.wixstatic.com/media/85c3c2_89d6c2819fca4139a4596d017de1dc7a~mv2.png',   /* grocergosx-app-icon-192 */
    copy: {
      title: 'Get GrocerGoSx on your home screen',
      text: 'One tap to order groceries, restaurant pick-ups and pharmacy runs — no app store needed.',
      install: 'Add to home screen', how: 'Show me how', later: 'Not now', done: 'Got it',
      sheetTitle: 'Add GrocerGoSx to your home screen',
      ios: ['Tap the <b>Share</b> button {share} in Safari’s bar', 'Scroll down and tap <b>Add to Home Screen</b> {plus}', 'Tap <b>Add</b> — that’s it'],
      iosOther: ['Tap the <b>Share</b> button {share} (next to the address bar)', 'Tap <b>Add to Home Screen</b> {plus}', 'Tap <b>Add</b> — that’s it'],
      android: ['Tap the <b>menu</b> {dots} in the top corner', 'Tap <b>Add to Home screen</b> (or <b>Install app</b>)', 'Tap <b>Add</b> — that’s it'],
      installed: 'Added! Look for GrocerGoSx on your home screen.'
    }
  };
  var KEY = 'ggsx_a2hs', T0 = 'ggsx_a2hs_t0', ua = navigator.userAgent, BIP = null, card = null, test = '';
  try { test = sessionStorage.getItem('ggsx_a2hs_test') || ''; } catch (e) {}
  var iOS = test === 'ios' || (!test && (/iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1))),
      android = test === 'android' || (!test && /Android/.test(ua)),
      safari = iOS && (test || (/Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS|OPiOS|DuckDuckGo|GSA/.test(ua))),
      standalone = (W.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  var SVG = {
    share: '<svg viewBox="0 0 24 24"><path d="M12 3v12"/><path d="M8 7l4-4 4 4"/><path d="M5 11v9h14v-9"/></svg>',
    plus: '<svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M12 8v8M8 12h8"/></svg>',
    dots: '<svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="1.6" fill="#1b1b1b"/><circle cx="12" cy="12" r="1.6" fill="#1b1b1b"/><circle cx="12" cy="19" r="1.6" fill="#1b1b1b"/></svg>'
  };

  function el(tag, attrs, kids) {
    var e = D.createElement(tag), k;
    for (k in attrs || {}) { if (attrs[k] == null) continue; if (k === 'class') e.className = attrs[k]; else if (k === 'text') e.textContent = attrs[k]; else if (k === 'html') e.innerHTML = attrs[k]; else if (k.slice(0, 2) === 'on') e.addEventListener(k.slice(2), attrs[k]); else e.setAttribute(k, attrs[k]); }
    (kids || []).forEach(function (c) { if (c) e.appendChild(typeof c === 'string' ? D.createTextNode(c) : c); });
    return e;
  }
  function state() { try { return JSON.parse(localStorage.getItem(KEY) || 'null') || {}; } catch (e) { return {}; } }
  function remember(o) { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) {} }
  function snooze(days) { remember({ until: Date.now() + days * 864e5 }); }
  function eligible() {
    if (standalone || !(iOS || android)) return false;
    if (!test && !(W.matchMedia && matchMedia('(max-width: 860px)').matches)) return false;
    if (/\.wix\.com$|wixsite\.com$/.test(location.hostname) || navigator.webdriver || /bot|crawl|spider|lighthouse/i.test(ua)) return false;
    var s = state();
    return !s.installed && !(s.until && s.until > Date.now());
  }
  function busy() {
    var h = D.documentElement.classList;
    return h.contains('gc-lock') || h.contains('gr-lock') || h.contains('gm-lock') || !!D.querySelector('.ge-wrap, .ggsx-splash, #ggsx-splash') || D.visibilityState !== 'visible';
  }
  function toast(text) { var t = el('div', { class: 'ga-toast', role: 'status', text: text }); D.body.appendChild(t); setTimeout(function () { t.remove(); }, 4000); }

  /* ---------- the card ---------- */
  function show() {
    if (card || !eligible()) return;
    if (busy()) { setTimeout(show, 5000); return; }
    var c = A.copy, canInstall = !!BIP;
    card = el('div', { class: 'ga-card', role: 'dialog', 'aria-label': c.title }, [
      el('div', { class: 'ga-row' }, [
        el('img', { class: 'ga-ic', src: A.icon, alt: '' }),
        el('div', { class: 'ga-t' }, [el('b', { text: c.title }), el('span', { text: c.text })])]),
      el('button', { type: 'button', class: 'ga-x', 'aria-label': 'Close', text: '×', onclick: function () { hide(); snooze(A.snoozeClose); } }),
      el('div', { class: 'ga-btns' }, [
        el('button', { type: 'button', class: 'ga-btn', text: c.later, onclick: function () { hide(); snooze(A.snoozeLater); } }),
        el('button', { type: 'button', class: 'ga-btn main', text: canInstall ? c.install : c.how, onclick: function () { if (BIP) install(); else sheet(); } })])
    ]);
    D.body.appendChild(card);
    snooze(A.snoozeClose);               /* shown once; closing or ignoring it = 7 days of quiet */
    requestAnimationFrame(function () { requestAnimationFrame(function () { card.classList.add('in'); }); });
  }
  function hide() { if (!card) return; var k = card; card = null; k.classList.remove('in'); setTimeout(function () { k.remove(); }, 450); }

  /* Android / Chrome: the phone's own install dialog */
  function install() {
    var p = BIP; BIP = null;
    p.prompt();
    (p.userChoice || Promise.resolve({})).then(function (r) {
      if (r && r.outcome === 'accepted') { remember({ installed: 1 }); hide(); toast(A.copy.installed); }
      else { hide(); snooze(A.snoozeLater); }
    }).catch(function () { hide(); });
  }
  W.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault(); BIP = e;
    if (card) { var b = card.querySelector('.ga-btn.main'); if (b) b.textContent = A.copy.install; }
  });
  W.addEventListener('appinstalled', function () { remember({ installed: 1 }); hide(); toast(A.copy.installed); });

  /* iPhone, and Android browsers without the install dialog: the two taps, illustrated */
  function sheet() {
    var c = A.copy, steps = iOS ? (safari ? c.ios : c.iosOther) : c.android,
        dim = el('div', { class: 'ga-dim' }), sh;
    function close() { dim.classList.remove('in'); sh.classList.remove('in'); setTimeout(function () { dim.remove(); sh.remove(); }, 350); }
    sh = el('div', { class: 'ga-sheet', role: 'dialog', 'aria-label': c.sheetTitle }, [
      el('h3', { text: c.sheetTitle }),
      el('button', { type: 'button', class: 'ga-x', 'aria-label': 'Close', text: '×', onclick: close })
    ].concat(steps.map(function (s, i) {
      return el('div', { class: 'ga-step' }, [el('i', { text: String(i + 1) }), el('div', { html: s.replace('{share}', SVG.share).replace('{plus}', SVG.plus).replace('{dots}', SVG.dots) })]);
    })).concat([el('button', { type: 'button', class: 'ga-btn main', text: c.done, onclick: close })]));
    dim.addEventListener('click', close);
    hide(); snooze(A.snoozeLater);
    D.body.appendChild(dim); D.body.appendChild(sh);
    requestAnimationFrame(function () { requestAnimationFrame(function () { dim.classList.add('in'); sh.classList.add('in'); }); });
  }

  /* ---------- when ---------- */
  function boot() {
    if (!eligible()) return;
    var t0 = 0;
    try { t0 = +sessionStorage.getItem(T0) || 0; if (!t0) { t0 = Date.now(); sessionStorage.setItem(T0, String(t0)); } } catch (e) { t0 = Date.now(); }
    var wait = test ? 2000 : Math.max(1500, A.delay - (Date.now() - t0));
    setTimeout(show, wait);
  }
  if (D.body) boot(); else D.addEventListener('DOMContentLoaded', boot);
})();
} catch (e) { try { console.warn('[GGSX bundle] Add to Home Screen', e); } catch (e2) {} }
__ggsxE("c63dbe7d-7c58-4ae7-ae7a-8f2a21535fb9#0");

/* ===== GrocerGoSx Home 3 Auto-slide (e7aea37f-6ec7-48af-8458-4e41987207b7, rev 7) ===== */
__ggsxB("e7aea37f-6ec7-48af-8458-4e41987207b7#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxHomeSlide) return;
  W.__ggsxHomeSlide = 1;
  var S = W.GGSX_HOME_SLIDE = W.GGSX_HOME_SLIDE || {
    glide: false,  /* false = one card at a time; true = one smooth, continuous loop */
    card: 3,       /* glide: seconds to move along by one card */
    every: 2,      /* one card at a time: seconds between slides */
    dir: -1,       /* -1 = cards travel right, each new one coming in from the left; 1 = cards travel left */
    resume: 8      /* seconds of quiet after a visitor touches, swipes or clicks the cards */
  };
  if (W.matchMedia && W.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function attach(row) {
    if (row.__slide) return;
    row.__slide = 1;
    var wrap = row.parentNode || row, held = 0, seen = true, timer, pos = 0, last = 0, free = false;
    row.style.overflowAnchor = 'none';
    function step() {
      var c = row.children;
      return c.length > 1 ? (c[1].offsetLeft - c[0].offsetLeft) || row.clientWidth : row.clientWidth;
    }
    function move(left, to) {
      if (to ? row.scrollTo : row.scrollBy) (to ? row.scrollTo : row.scrollBy).call(row, { left: left, behavior: 'smooth' });
      else row.scrollLeft = to ? left : row.scrollLeft + left;
    }
    function jump(left) {
      try { row.scrollTo({ left: left, behavior: 'instant' }); } catch (e) { row.scrollLeft = left; }
    }
    /* move the end card round to the other end, out of sight; returns how far the scroll position must move to keep the view still */
    function wrapRound(toFront) {
      var s0 = row.scrollLeft, ref = toFront ? row.firstElementChild : row.lastElementChild, x0 = ref.getBoundingClientRect().left;
      if (toFront) row.insertBefore(row.lastElementChild, ref); else row.appendChild(row.firstElementChild);
      return (row.scrollLeft - s0) + (ref.getBoundingClientRect().left - x0);
    }
    function paused() { return held > Date.now() || !seen || D.hidden || row.children.length < 2; }

    /* one smooth, continuous loop */
    function glide(t) {
      if (!D.body.contains(row)) return;
      W.requestAnimationFrame(glide);
      var dt = last ? Math.min(t - last, 100) : 0, max;
      last = t;
      if (paused()) return;
      if (!free) { free = true; row.style.scrollSnapType = 'none'; pos = row.scrollLeft; }
      if (Math.abs(row.scrollLeft - pos) > 2) pos = row.scrollLeft;
      max = row.scrollWidth - row.clientWidth;
      if (max <= 0) return;
      pos += (S.dir < 0 ? -1 : 1) * step() / S.card * dt / 1000;
      if (S.dir < 0 && pos <= 0) pos += wrapRound(true);
      else if (S.dir > 0 && pos >= max) pos += wrapRound(false);
      row.scrollLeft = pos;
    }

    /* one card at a time */
    function next() {
      if (!D.body.contains(row)) { clearInterval(timer); return; }
      if (paused()) return;
      var max = row.scrollWidth - row.clientWidth, s, s0;
      if (S.dir < 0) {
        s = step();
        if (row.scrollLeft < s - 4) { s0 = row.scrollLeft; jump(s0 + wrapRound(true)); }
        move(-s, false);
      } else if (row.scrollLeft >= max - 4) move(0, true);
      else move(step(), false);
    }

    function hold() {
      held = Date.now() + S.resume * 1000;
      if (free) { free = false; row.style.scrollSnapType = ''; }
    }
    ['pointerdown', 'touchstart', 'wheel', 'keydown', 'click'].forEach(function (ev) { wrap.addEventListener(ev, hold, { passive: true }); });
    wrap.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') held = Infinity; });
    wrap.addEventListener('pointerleave', function (e) { if (e.pointerType === 'mouse') held = Date.now() + 1500; });
    wrap.addEventListener('focusin', function () { held = Infinity; });
    wrap.addEventListener('focusout', hold);
    if ('IntersectionObserver' in W) new IntersectionObserver(function (es) { seen = es[es.length - 1].isIntersecting; }, { threshold: 0.4 }).observe(row);
    if (S.glide && W.requestAnimationFrame) W.requestAnimationFrame(glide);
    else timer = setInterval(next, S.every * 1000);
  }
  function scan() {
    var rows = D.querySelectorAll('#ggsx-home .gh-heros');
    for (var i = 0; i < rows.length; i++) attach(rows[i]);
  }
  function start() {
    var busy = false;
    new MutationObserver(function () {
      if (busy) return;
      busy = true;
      (W.requestAnimationFrame || setTimeout)(function () { busy = false; scan(); });
    }).observe(D.documentElement, { childList: true, subtree: true });
    scan();
  }
  if (D.body) start(); else D.addEventListener('DOMContentLoaded', start);
})();
} catch (e) { try { console.warn('[GGSX bundle] Home 3 Auto-slide', e); } catch (e2) {} }
__ggsxE("e7aea37f-6ec7-48af-8458-4e41987207b7#0");

/* ===== GrocerGoSx Footer Site Map (c7fe3d49-7dbf-4b83-86dd-fdd24e311273, rev 5) ===== */
__ggsxCss("id=\"gg-sm-style\"", "\n#gg-sitemap{box-sizing:border-box;width:100%;max-width:100%;overflow:hidden;display:flex;flex-wrap:wrap;justify-content:center;align-items:baseline;padding:14px 16px 18px;font-family:\"avenir-lt-w01_35-light1475496\",\"Avenir Light\",\"Avenir\",Helvetica,Arial,sans-serif;font-size:12.5px;line-height:1.9;text-align:center}\n#gg-sitemap .gg-sm-label{flex:0 0 100%;display:block;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;opacity:.65;margin-bottom:4px}\n#gg-sitemap a{color:inherit;text-decoration:none;white-space:nowrap;opacity:.85}\n#gg-sitemap a:hover{color:#F4551B;opacity:1;text-decoration:underline}\n#gg-sitemap .gg-sm-sep{opacity:.4;margin:0 6px}\n@media (max-width:860px){#gg-sitemap{font-size:12px;padding:12px 14px 16px}}\n");
__ggsxB("c7fe3d49-7dbf-4b83-86dd-fdd24e311273#0");
try {
(function(){
  var LINKS=[["Home","/"],["Shop Now","/shop-now"],["Restaurants","/restaurants"],["Pharmacy","/pharmacy"],["Villa Stocking","/villa-stocking"],["Stocking Packages","/stocking-packages"],["Yacht Provisioning","/yacht-provisioning"],["Concierge Services","/concierge-services"],["All Services","/services-hub"],["How It Works","/how-it-works"],["Pricing & Fees","/pricing"],["Delivery Area","/service-area"],["Hosts & Partners","/partners"],["Blog","/blog"],["Contact","/contact"],["Privacy Policy","/#privacy-policy"],["XML Sitemap","/sitemap.xml"]];
  function alpha(c){var m=/rgba?\(([^)]+)\)/.exec(c||"");if(!m)return 0;var p=m[1].split(",");return p.length>3?parseFloat(p[3]):1}
  function bgOf(root){var q=[root],n=0,w=root.getBoundingClientRect().width||1;while(q.length&&n<80){var el=q.shift();n++;var cs=getComputedStyle(el);if(alpha(cs.backgroundColor)>0&&el.getBoundingClientRect().width>=w*0.6)return cs.backgroundColor;for(var i=0;i<el.children.length;i++)q.push(el.children[i])}return null}
  function fgOf(root){var t=root.querySelector("a,p,span,h2,h3,h4");return t?getComputedStyle(t).color:null}
  function place(nav){
    var f=document.getElementById("SITE_FOOTER")||document.querySelector("footer");
    var pages=document.getElementById("SITE_PAGES");
    if(pages&&(!f||pages.contains(f))){if(nav.parentNode!==pages||pages.lastElementChild!==nav)pages.appendChild(nav)}
    else if(f&&f.nextElementSibling!==nav)f.insertAdjacentElement("afterend",nav);
  }
  function watch(){
    var pages=document.getElementById("SITE_PAGES");
    if(!pages||!window.MutationObserver||window.__ggSitemapPages===pages)return;
    if(window.__ggSitemapObs)try{window.__ggSitemapObs.disconnect()}catch(e){}
    window.__ggSitemapPages=pages;
    window.__ggSitemapObs=new MutationObserver(function(){var n=document.getElementById("gg-sitemap");if(n&&n.parentNode===pages&&pages.lastElementChild!==n)pages.appendChild(n)});
    window.__ggSitemapObs.observe(pages,{childList:true});
  }
  function build(){
    var old=document.getElementById("gg-sitemap");
    if(old){place(old);watch();return true}
    var f=document.getElementById("SITE_FOOTER")||document.querySelector("footer");
    if(!f)return false;
    var nav=document.createElement("nav");nav.id="gg-sitemap";nav.setAttribute("aria-label","Site map");
    nav.style.background=bgOf(f)||"#ffffff";nav.style.color=fgOf(f)||"#222222";
    var h='<span class="gg-sm-label">Site map</span>';
    LINKS.forEach(function(l,i){h+=(i?'<span class="gg-sm-sep">\u00b7</span>':"")+'<a href="'+l[1]+'">'+l[0]+"</a>"});
    nav.innerHTML=h;
    place(nav);watch();
    return true;
  }
  function start(){var t0=Date.now();(function tick(){build();if(Date.now()-t0<20000)setTimeout(tick,500)})()}
  if(document.readyState==="complete")setTimeout(start,300);else window.addEventListener("load",function(){setTimeout(start,300)});
})();
} catch (e) { try { console.warn('[GGSX bundle] Footer Site Map', e); } catch (e2) {} }
__ggsxE("c7fe3d49-7dbf-4b83-86dd-fdd24e311273#0");

/* ===== GrocerGoSx SEO Footnotes (b979da6e-3c0b-447b-9166-f18cc96bd135, rev 1) ===== */
__ggsxCss("id=\"ggsx-note-css\"", "\nmain section.ggsx-note-sec{height:auto!important;min-height:0!important;max-height:none!important;overflow:visible!important;padding:26px 0 30px!important;margin:0!important;border-top:1px solid #e7e2da}\n.ggsx-note-sec .ggsx-note-box{max-width:760px!important;margin-left:auto!important;margin-right:auto!important;padding-left:20px!important;padding-right:20px!important;box-sizing:border-box!important;width:auto!important}\n.ggsx-note-sec *{font-size:14px!important;line-height:1.6!important;letter-spacing:normal!important;text-transform:none!important;text-align:left!important}\n.ggsx-note-sec .ggsx-note-box>*,.ggsx-note-sec [data-testid=\"richTextElement\"],.ggsx-note-sec .wixui-rich-text{max-width:100%!important;margin-left:0!important;margin-right:0!important}\n.ggsx-note-sec p,.ggsx-note-sec li,.ggsx-note-sec p *,.ggsx-note-sec li *{color:#6b6b6b!important;font-weight:400!important}\n.ggsx-note-sec h1,.ggsx-note-sec h2,.ggsx-note-sec h3,.ggsx-note-sec h1 *,.ggsx-note-sec h2 *,.ggsx-note-sec h3 *{font-size:16px!important;line-height:1.35!important;font-weight:700!important;color:#3d3d3d!important}\n.ggsx-note-sec h1,.ggsx-note-sec h2,.ggsx-note-sec h3{margin:0 0 6px!important}\n.ggsx-note-sec .ggsx-note-clamp{position:relative!important;overflow:hidden!important}\n.ggsx-note-sec .ggsx-note-clamp:after{content:\"\";position:absolute;left:0;right:0;bottom:0;height:2.4em;pointer-events:none;background:linear-gradient(rgba(255,255,255,0),var(--ggsx-note-bg,#fff))}\n.ggsx-note-sec .ggsx-note-box.ggsx-note-open{max-height:none!important}\n.ggsx-note-sec .ggsx-note-box.ggsx-note-open:after{display:none}\n.ggsx-note-more{max-width:760px;margin:6px auto 0;padding:0 20px;box-sizing:border-box}\n.ggsx-note-more[hidden]{display:none}\n.ggsx-note-more button{background:none!important;border:0!important;padding:4px 0!important;margin:0!important;color:#F4551B!important;font-weight:700!important;font-size:14px!important;line-height:1.4!important;cursor:pointer;font-family:inherit}\n.ggsx-note-more button:focus-visible{outline:2px solid #F4551B;outline-offset:2px;border-radius:4px}\n");
__ggsxB("b979da6e-3c0b-447b-9166-f18cc96bd135#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxNote) { W.__ggsxNote.run(); return; }
  var ROOTS = '#ggsx-page,#ggsx-home,#ggsx-shop,#ggsx-more-page';
  var MEDIA = 'img,video,iframe,form,input,select,textarea,button,picture,wow-image,[data-testid="imageX"],[data-testid="image"]';
  var LINES = 3, done = [];

  function mainEl() { return D.querySelector('main[id^="PAGE_SECTIONS"]') || D.querySelector('main'); }
  function textOf(el) { return (el.textContent || '').replace(/\s+/g, ' ').trim(); }
  function sections(main) {
    var out = [];
    for (var i = 0; i < main.children.length; i++) if (main.children[i].tagName === 'SECTION') out.push(main.children[i]);
    return out;
  }
  function blocks(sec) {
    return [].filter.call(sec.querySelectorAll('h1,h2,h3,h4,p,li'), function (b) {
      return textOf(b).length && !(b.parentNode && b.parentNode.closest && b.parentNode.closest('h1,h2,h3,h4,p,li'));
    });
  }
  function lca(list, stop) {
    if (!list.length) return null;
    var a = list[0];
    while (a && a !== stop) {
      var ok = true;
      for (var i = 1; i < list.length; i++) if (!a.contains(list[i])) { ok = false; break; }
      if (ok) return a;
      a = a.parentNode;
    }
    return stop;
  }
  function bgOf(sec) {
    var els = [sec.querySelector('[data-testid="colorUnderlay"]'), sec], el = sec;
    while (el && el !== D.documentElement) { els.push(el); el = el.parentNode; }
    for (var i = 0; i < els.length; i++) {
      if (!els[i]) continue;
      var c = W.getComputedStyle(els[i]).backgroundColor;
      if (c && c !== 'transparent' && !/rgba\(\s*0,\s*0,\s*0,\s*0\s*\)/.test(c)) return c;
    }
    return '#fff';
  }
  function measure(st) {
    if (st.open) return;
    var box = st.box, p = st.p;
    box.style.maxHeight = 'none';
    box.classList.remove('ggsx-note-clamp');
    var cs = W.getComputedStyle(p), fs = parseFloat(cs.fontSize) || 14, lh = parseFloat(cs.lineHeight);
    if (!lh || isNaN(lh)) lh = fs * 1.6; else if (lh < 4) lh = lh * fs;
    var off = p.getBoundingClientRect().top - box.getBoundingClientRect().top;
    var lim = Math.ceil(off + lh * LINES + 2);
    if (box.scrollHeight <= lim + lh * 1.5) { box.style.maxHeight = ''; st.more.hidden = true; return; }
    box.style.maxHeight = lim + 'px';
    box.classList.add('ggsx-note-clamp');
    st.more.hidden = false;
  }
  function make(sec) {
    var bl = blocks(sec);
    if (!bl.length) return;
    var box = lca(bl, sec);
    if (box === sec) {
      for (var i = 0; i < sec.children.length; i++) if (sec.children[i].contains(bl[0])) { box = sec.children[i]; break; }
    }
    var p = null;
    for (var j = 0; j < bl.length; j++) if (!/^H[1-4]$/.test(bl[j].tagName)) { p = bl[j]; break; }
    sec.classList.add('ggsx-note-sec');
    sec.setAttribute('data-ggsx-note', '1');
    box.classList.add('ggsx-note-box');
    box.style.setProperty('--ggsx-note-bg', bgOf(sec));
    if (!p) return;
    var btn = D.createElement('button');
    btn.type = 'button';
    btn.textContent = 'Read more';
    btn.setAttribute('aria-expanded', 'false');
    var more = D.createElement('div');
    more.className = 'ggsx-note-more';
    more.hidden = true;
    more.appendChild(btn);
    sec.appendChild(more);
    var st = { sec: sec, box: box, p: p, more: more, open: false };
    btn.addEventListener('click', function () {
      st.open = !st.open;
      box.classList.toggle('ggsx-note-open', st.open);
      btn.textContent = st.open ? 'Show less' : 'Read more';
      btn.setAttribute('aria-expanded', st.open ? 'true' : 'false');
      if (st.open) { box.style.maxHeight = ''; box.classList.remove('ggsx-note-clamp'); } else measure(st);
    });
    done.push(st);
    (W.requestAnimationFrame || setTimeout)(function () { measure(st); });
  }
  function run() {
    done = done.filter(function (st) { return D.body.contains(st.sec); });
    var root = D.querySelector(ROOTS), main = mainEl();
    if (!root || !main) return;
    var home = root.id === 'ggsx-home';
    sections(main).forEach(function (sec) {
      if (sec.getAttribute('data-ggsx-note') || sec.contains(root)) return;
      var head = sec.querySelector(home ? 'h1' : 'h1,h2,h3');
      if (!head || textOf(sec).length < 80 || sec.querySelector(MEDIA)) return;
      make(sec);
    });
  }
  var queued = false;
  function later() {
    if (queued) return;
    queued = true;
    (W.requestAnimationFrame || setTimeout)(function () { queued = false; run(); });
  }
  var rt;
  W.addEventListener('resize', function () {
    clearTimeout(rt);
    rt = setTimeout(function () { done.forEach(measure); }, 200);
  });
  W.addEventListener('load', function () { done.forEach(measure); });
  new MutationObserver(later).observe(D.documentElement, { childList: true, subtree: true });
  W.__ggsxNote = { run: run };
  run();
})();
} catch (e) { try { console.warn('[GGSX bundle] SEO Footnotes', e); } catch (e2) {} }
__ggsxE("b979da6e-3c0b-447b-9166-f18cc96bd135#0");

/* ===== GrocerGoSx Pages 8 All Services (f4c1b654-4cb2-42e5-a756-c76f77913d66, rev 12) ===== */
__ggsxCss("id=\"ggsx-hub-css\"", "main[id^=PAGE_SECTIONS]>section:has(>.gh-more){height:auto!important;min-height:0!important;background:#f6f3ee}#ggsx-page[data-key=\"/services-hub\"] .gp-hero picture img{object-position:50% 12%}#ggsx-page #services .gp-card>img{aspect-ratio:3/2}#ggsx-page #services .gp-cb b{font-size:19px}#ggsx-page #extras .gp-cb{padding:18px 20px 20px}#ggsx-page #extras .gp-cb b{font-size:16px}#ggsx-page #extras .gp-cb p{font-size:14px}section:has(>.gh-more)>[data-testid=internal-container-root]{height:auto!important;min-height:0!important;border-top:1px solid #e7e2da;background:#f6f3ee}section:has(>.gh-more)>[data-testid=internal-container-root]>[data-testid=internal-container-background-layer]{display:none!important}section:has(>.gh-more)>[data-testid=internal-container-root]>[data-testid=internal-container-content]{display:block!important;position:relative!important;width:auto!important;max-width:760px!important;height:auto!important;max-height:140px;overflow:hidden!important;margin:0 auto!important;padding:30px 20px 0!important;box-sizing:border-box!important}section:has(>.gh-more)>[data-testid=internal-container-root]>[data-testid=internal-container-content]:after{content:\"\";position:absolute;left:0;right:0;bottom:0;height:3em;pointer-events:none;background:linear-gradient(#f6f3ee00,#f6f3ee)}section:has(>.gh-more.on)>[data-testid=internal-container-root]>[data-testid=internal-container-content]{max-height:none}section:has(>.gh-more.on)>[data-testid=internal-container-root]>[data-testid=internal-container-content]:after{display:none}section:has(>.gh-more)>[data-testid=internal-container-root] [data-testid=richTextElement]{margin:0 0 6px!important;width:auto!important;max-width:100%!important;height:auto!important}section:has(>.gh-more)>[data-testid=internal-container-root] *{font-size:14px!important;line-height:1.6!important;letter-spacing:normal!important;text-transform:none!important;text-align:left!important}section:has(>.gh-more)>[data-testid=internal-container-root] p,section:has(>.gh-more)>[data-testid=internal-container-root] p *{color:#6b6b6b!important}section:has(>.gh-more)>[data-testid=internal-container-root] p{margin:0 0 8px!important}section:has(>.gh-more)>[data-testid=internal-container-root] h1,section:has(>.gh-more)>[data-testid=internal-container-root] h1 *{font-size:16px!important;line-height:1.35!important;font-weight:700!important;color:#3d3d3d!important}.gh-more{background:#f6f3ee;padding:4px 20px 36px}.gh-more[hidden]{display:none}.gh-more button{display:block;width:100%;max-width:720px;margin:0 auto;padding:4px 0;border:0;background:none;text-align:left;color:#f4551b;font:inherit;font-size:14px;font-weight:700;line-height:1.4;cursor:pointer}.gh-more button:focus-visible{outline:2px solid #F4551B;outline-offset:2px;border-radius:4px}@media(max-width:860px){section:has(>.gh-more)>#ggsx-page{padding-bottom:44px}#ggsx-page #services .gp-cards{gap:12px}#ggsx-page #services .gp-card{flex-direction:row;border-radius:18px}#ggsx-page #services .gp-card>img{width:116px;flex:none;height:auto;aspect-ratio:auto}#ggsx-page #services .gp-cb{padding:14px 16px 15px;gap:4px}#ggsx-page #services .gp-cb b{font-size:16px}#ggsx-page #services .gp-cb p{font-size:14px;line-height:1.45}#ggsx-page #services .gp-more{font-size:14px;padding-top:6px}#ggsx-page #extras .gp-cards{--cols: 2 !important;gap:12px}#ggsx-page #extras .gp-cb{padding:12px 14px 14px;gap:4px}#ggsx-page #extras .gp-cb b{font-size:15px}#ggsx-page #extras .gp-cb p{font-size:13px;line-height:1.45}#ggsx-page #extras .gp-more{font-size:13px;padding-top:6px}section:has(>.gh-more)>[data-testid=internal-container-root]>[data-testid=internal-container-content]{padding:26px 16px 0!important}.gh-more{padding:4px 16px calc(120px + env(safe-area-inset-bottom,0px))}}");
__ggsxB("f4c1b654-4cb2-42e5-a756-c76f77913d66#0");
try {
(function(){var r=window,h=document,y="/services-hub",i=r.GGSX_PAGES=r.GGSX_PAGES||{};i.pages=i.pages||{},i.blocks=i.blocks||{},(r.GGSX_FOOT=r.GGSX_FOOT||{})[y]=1;function l(e){return"https://wa.me/590690779119?text="+encodeURIComponent(e)}if(i.pages[y]={links:!1,blocks:[{type:"hero",img:"85c3c2_e454d8d4bffd4952b4337e9d9b7da83a~mv2.png",alt:"A GrocerGoSx concierge on the phone beside packed grocery bags and a map of St. Maarten",eyebrow:"All services",title:"Everything you need in St. Maarten, delivered.",lead:"Groceries, villa stocking, yacht provisioning, restaurant and pharmacy pickups, laundry and errands, on the Dutch and French side. Tell us what you need and we'll take care of the rest.",ctas:[{t:"Shop groceries",href:"/shop-now"},{t:"Message us",wa:"Hi GrocerGoSx, I'd like help with: "}],chips:["Daily, 8:30 AM – 11 PM","Dutch & French side","Nothing charged at checkout","Taxes included"]},{type:"cards",id:"services",title:"Choose a service",sub:"Each one has its own page with the details, prices and how to order.",cols:3,items:[{img:"85c3c2_fdbb4f40916540d7acc17cd3b65628d5~mv2.jpg",alt:"A basket of tropical fruit, jams and Caribbean rum",t:"Grocery delivery",x:"Shop 3,000+ supermarket items or send us your list. Same-day windows are often available.",href:"/shop-now",more:"Shop groceries"},{img:"85c3c2_6612e101d1b047ffbc3abfbaa2b3b707~mv2.jpg",alt:"A stocked villa kitchen with fresh fruit and an ocean view",t:"Villa stocking",x:"Arrive to a stocked fridge, pantry and bar. We deliver before check-in and put everything away.",href:"/villa-stocking",more:"Stock my villa"},{img:"11062b_ca486774cd9a48d3a133d9a72979503e~mv2.jpg",alt:"Tropical fruit on a blue background",t:"Stocking packages",x:"Ready-made welcome kits, so guests arrive to the essentials without writing a list.",href:"/stocking-packages",more:"See the kits"},{img:"0cf27a8746ec4dd887e5a716f301b49b.jpg",alt:"Aerial view of a marina with yachts on turquoise water",t:"Yacht provisioning",x:"For captains, chefs and charter guests. Delivered to your marina, timed to your departure.",href:"/yacht-provisioning",more:"Provision my boat"},{img:"11062b_83042b7ca3e64eafa83066ac6aac2f0e~mv2.jpeg",alt:"Dishes and cocktails on a table by the sea",t:"Restaurant pickup",x:"Dishes from island restaurants at the menu price plus the {{service_fee_rate}} service fee, delivered to you.",href:"/restaurants",more:"See restaurants"},{img:"85c3c2_216f356241d54d1788739ca11e3b8222~mv2.png",alt:"A GrocerGoSx concierge with a phone and a checklist",t:"Pharmacy runs",x:"Over-the-counter items and prescriptions collected and delivered, charged from the receipt plus {{run_rate}}.",href:"/pharmacy",more:"Start a pharmacy run"}]},{type:"cards",id:"extras",title:"Concierge & extras",sub:"Message us to add any of these to your stay. More on [Concierge services](/concierge-services); every price is on [Pricing & fees](/pricing).",cols:4,items:[{img:"85c3c2_f0a0967bf1bf4ccf8ce77c0d1d5cdd3a~mv2.jpg",alt:"Folded white towels in a laundry basket",t:"Laundry, wash & fold",x:"Picked up, washed, folded and returned to your door.",href:l("Hi GrocerGoSx, I'd like laundry pickup (wash & fold)."),more:"Arrange laundry"},{img:"85c3c2_fae03682e65841bfb04639c0d12148b0~mv2.png",alt:"A GrocerGoSx concierge showing a custom request on a tablet",t:"Errands & custom requests",x:"Bills paid, items collected and anything else arranged, on either side of the island.",href:l("Hi GrocerGoSx, I need help with an errand: "),more:"Ask us"},{img:"85c3c2_697fc9d553cf4f2bafe1f47e771ceea3~mv2.jpg",alt:"A villa pool terrace overlooking the sea",t:"Beach & baby gear",x:"Chairs, umbrellas, coolers, cribs and strollers, delivered to your stay.",href:l("Hi GrocerGoSx, I'd like to rent beach or baby equipment for my stay."),more:"Ask about gear"},{img:"9f3037c83ca048ddb0485e3badb0a6a3.jpg",alt:"A mojito with fresh lime and mint",t:"Late-night snack run",x:"Snacks, drinks and ice at your door, Thursday to Saturday, 9 to 11:30 PM.",href:l("Hi GrocerGoSx, I'd like a Late Night Snack Run."),more:"Order a snack run"}]},{type:"steps",title:"How it works",sub:"The same four steps for every service.",items:[["Choose what you need","Fill a basket on [Shop Now](/shop-now), add a [ready-made kit](/stocking-packages) or [send us your list]("+l("Hi GrocerGoSx, here's my list: ")+")."],["Check out in two minutes","Your address, date and delivery window. Nothing is charged at checkout."],["We confirm by message","We check everything with you, then send your total and a secure payment link before we shop."],["We shop and deliver","Follow your order live while we shop, then it is delivered to your door, villa or boat."]]},{type:"prices",title:"Simple pricing on every service",sub:"All prices include applicable taxes, and nothing is added after your quote.",rows:[["Groceries","GrocerGoSx concierge prices","About {{catalogue_markup}} over the shelf price ({{liquor_markup}} on beer, wine and spirits), and 15% on the part of a till receipt above $300."],["Service Fee","{{run_rate}} of your order","{{Fee_min_short}}; never more than {{service_fee_max}}."],["Restaurants, pharmacy & errands","Menu price or receipt + service fee","Passed on at what we pay, plus the service fee. A restaurant-only run is charged {{service_fee_rate}}, with a {{restaurant_only_fee}} minimum fee ({{restaurant_only_fee_french}} when the French side is involved) and a {{restaurant_only_delivery}} delivery fee. Each extra stop on a run is {{errand_stop_fee}}."],["Delivery","{{delivery_value}}","{{Delivery_how}}: anywhere on the island, once per run, however many stops."],["Minimum basket","{{min_order}}","Shop orders need {{min_order}} of items; pickups and errands have none."],["Taxes","Included","Nothing extra is added at checkout."]],foot:"Nothing is charged at checkout. You get your confirmed total and a payment link before we shop.",link:["Full pricing & fees","/pricing"]},{type:"split",flip:!0,img:"c2a99153f2b44e7a86654564e2f74114.jpg",alt:"A modern villa with a pool and sun deck",kicker:"For hosts & property managers",title:"Five-star arrivals for your guests",text:["Partner with GrocerGoSx and your guests can have their villa stocked before they land, with groceries and errands looked after during their stay."],items:["{{Partner_fee}} for your properties and the guests you refer","Your own guest link and QR welcome cards","A thank-you for every order your guests place"],ctas:[{t:"Become a partner",href:"/partners"}]},{type:"quotes",title:"What our clients say",items:[["Excellent service. Dwayne confirmed items requested were correct by sending photos and delivered exactly as requested in a timely fashion. Definitely recommend for any villa stay!","Diana McKennon","Villa property owner"],["I had a great experience with GrocerGoSx! We needed groceries for our Airbnb last minute, and they responded right away. The ordering process was quick and efficient, and our groceries were delivered within just a couple of hours.","Carmen Estevez","Villa guest"],["Grocery and concierge service was perfect! They stayed in touch and we got everything we ordered. Absolute luxury for the convenience - thank you!","Cori Bavis","Airbnb guest"]]},{type:"faq",title:"Good to know",items:[["Where do you deliver?","Anywhere on the island: villas, condos, hotels and marinas in Dutch Sint Maarten and French Saint-Martin, daily from 8:30 AM to 11 PM. {{Delivery_anywhere}}. [Find your area](/service-area)."],["Can I combine services in one run?","Yes. Add restaurant food, a pharmacy stop or an errand to a grocery run: each extra stop is {{errand_stop_fee}}, and one delivery covers the whole run."],["When do I pay?","Not at checkout. We confirm your total by message and send a secure payment link before we shop. Transfer or cash works too, at the same price."],["How far ahead should I book?","Same-day windows are often available. Book {{planned_hours}} hours ahead and you get {{partner_fee}}; in high season, booking early also gets you the delivery window you want."],["What if something isn't available?","Island supply varies. We pick the closest match or message you first, your choice, or remove the item and refund the difference."],["Can I follow my order?","Yes. Your confirmation has a link to your live order page, where you see each item as we shop it, with any substitutions. You can change your list there until shortly before we start."],["Do you deliver alcohol?","Yes: beer, wine, spirits, mixers and ice, to adults aged 18 or over. Valid ID may be requested on delivery."]]},{type:"cta",title:"Tell us what you need. We'll take care of the rest.",text:"Shop online in about two minutes, or send your list on WhatsApp, iMessage or text: +590 690 77 9119.",ctas:[{t:"Shop groceries",href:"/shop-now"},{t:"Message us",wa:"Hi GrocerGoSx, I'd like help with: "}]}]},!r.__ggsxHub){var t=null,n=!1,s=null,g,m=function(){return s&&s.querySelector('[data-testid="internal-container-content"]')},p=function(){var e=m();!t||n||!e||(t.hidden=e.scrollHeight<=e.clientHeight+4)},f=function(){var e=h.getElementById("ggsx-page");if(!(!e||!(r.GGSX_FOOT||{})[e.getAttribute("data-key")])){var o=e.parentNode;if(!(!o||o.tagName!=="SECTION")){o.firstChild!==e&&o.insertBefore(e,o.firstChild);var c=null,u,a;for(u=0;u<o.children.length;u++)a=o.children[u],!(a===e||a===t||/^(SCRIPT|STYLE)$/.test(a.tagName))&&(a.style.display==="none"&&a.style.getPropertyPriority("display")==="important"&&a.style.removeProperty("display"),!c&&a.querySelector("h1,h2,h3,p")&&(c=a));if(c){if(!t){t=h.createElement("div"),t.className="gh-more";var d=h.createElement("button");d.type="button",d.textContent="Read more",d.setAttribute("aria-expanded","false"),d.addEventListener("click",function(){n=!n,t.classList.toggle("on",n),d.textContent=n?"Show less":"Read more",d.setAttribute("aria-expanded",String(n)),!n&&s&&s.getBoundingClientRect().top<0&&s.scrollIntoView({block:"start"})}),t.appendChild(d)}c.nextSibling!==t&&o.insertBefore(t,c.nextSibling),c!==s&&(s=c,(r.requestAnimationFrame||setTimeout)(p))}}}};r.__ggsxHub={fix:f},new MutationObserver(f).observe(h.documentElement,{childList:!0,subtree:!0}),r.addEventListener("resize",function(){clearTimeout(g),g=setTimeout(p,200)}),r.addEventListener("load",p)}i.run&&i.run(),r.__ggsxHub.fix()})();
} catch (e) { try { console.warn('[GGSX bundle] Pages 8 All Services', e); } catch (e2) {} }
__ggsxE("f4c1b654-4cb2-42e5-a756-c76f77913d66#0");

/* ===== GrocerGoSx Pages 9 Concierge Services (d6ec509a-e96e-4380-ac3a-1977105bfdb0, rev 12) ===== */
__ggsxCss("id=\"ggsx-concierge-css\"", "#ggsx-page .gp-pn a{color:#f4551b}#ggsx-page[data-key=\"/concierge-services\"] .gp-hero picture img{object-position:50% 15%}#ggsx-page img[src*=fae03682e65841bfb04639c0d12148b0]{object-position:50% 0}");
__ggsxB("d6ec509a-e96e-4380-ac3a-1977105bfdb0#0");
try {
(function(){var r=window,a="/concierge-services",e=r.GGSX_PAGES=r.GGSX_PAGES||{};e.pages=e.pages||{},e.blocks=e.blocks||{},(r.GGSX_FOOT=r.GGSX_FOOT||{})[a]=1;function t(o){return"https://wa.me/590690779119?text="+encodeURIComponent(o)}e.pages[a]={blocks:[{type:"hero",img:"85c3c2_216f356241d54d1788739ca11e3b8222~mv2.png",alt:"A GrocerGoSx concierge with a phone and a checklist in a villa with a sea view",eyebrow:"Concierge services",title:"Your errands, handled.",lead:"Pharmacy runs, restaurant pickups, laundry, bill payments, beach and baby gear and late-night snack runs, anywhere in Sint Maarten and Saint-Martin. One message, one delivery to your villa, condo, hotel or boat.",ctas:[{t:"Start an errand",href:"/errands"},{t:"Message us",wa:"Hi GrocerGoSx, I need help with: "},{t:"See prices",href:"#prices"}],chips:["Daily, 8:30 AM – 11 PM","Dutch & French side","Receipts for everything we pay","Taxes included"]},{type:"cards",id:"services",title:"Pickups and errands",sub:"We collect it, pay for it and bring it to you, with the receipt.",cols:3,items:[{img:"85c3c2_e454d8d4bffd4952b4337e9d9b7da83a~mv2.png",alt:"A GrocerGoSx concierge on the phone beside packed delivery bags",t:"Pharmacy runs",x:"Over-the-counter medicine, sunscreen, baby essentials or a prescription ready for collection. Prescriptions welcome.",href:"/pharmacy",more:"Start a pharmacy run"},{img:"11062b_83042b7ca3e64eafa83066ac6aac2f0e~mv2.jpeg",alt:"Dishes and cocktails on a table by the sea",t:"Restaurant pickup",x:"Your food at the restaurant's menu price plus {{service_fee_rate}} for ordering, paying and carrying, with the restaurant's receipt.",href:"/restaurants",more:"See restaurants"},{img:"85c3c2_fae03682e65841bfb04639c0d12148b0~mv2.png",alt:"A GrocerGoSx concierge showing a custom request on a tablet",t:"Errands & bill payments",x:"Court stamps and fees, a bill, a document or a parcel to collect: passed on at exact cost with the receipt, and you see the price before you send.",href:"/errands",more:"Start an errand"}]},{type:"cards",id:"extras",title:"For your stay",sub:"Laundry and custom requests go straight into your basket; message us for gear and the snack run. Every price is in the table below.",cols:4,items:[{img:"85c3c2_f0a0967bf1bf4ccf8ce77c0d1d5cdd3a~mv2.jpg",alt:"Folded white towels in a laundry basket",t:"Laundry, wash & fold",x:"Weighed at pickup, washed, folded and returned with your next run.",href:"/laundry",more:"Arrange laundry"},{img:"85c3c2_697fc9d553cf4f2bafe1f47e771ceea3~mv2.jpg",alt:"A villa pool terrace overlooking the sea",t:"Beach & baby gear",x:"Chairs, umbrellas, coolers, cribs and strollers from our rental partners, delivered and collected.",href:t("Hi GrocerGoSx, I'd like to rent beach or baby equipment for my stay."),more:"Ask about gear"},{img:"9f3037c83ca048ddb0485e3badb0a6a3.jpg",alt:"A mojito with fresh lime and mint",t:"Late Night Snack Run",x:"Snacks, drinks and ice at your door, Thursday to Saturday, 9:00 to 11:30 PM.",href:t("Hi GrocerGoSx, I'd like a Late Night Snack Run."),more:"Order a snack run"},{img:"a852e7997e8d4af584385f3729d0be89.jpg",alt:"A guest holding a fresh drink on the beach",t:"Custom requests",x:"Tell us what you need and we'll quote it. Nothing is booked until you approve the total.",href:"/errands#other",more:"Tell us what you need"}]},{type:"steps",title:"How it works",items:[["Tell us the errand","Use the [Errands page](/errands) for court stamps and fees, bills, documents and parcels, and see the price before you send. Or WhatsApp, iMessage or text +590 690 77 9119 with what you need, where and when."],["We quote it","The {{run_rate}} service fee on what we pay for you ({{delivery_short}}) and any extra stops. Nothing is booked or bought until you approve."],["We run it","We collect, pay and carry, with a receipt for everything we pay for you."],["Delivered to you","To your villa, condo, hotel or boat, on either side of the island."]]},{type:"prices",id:"prices",title:"What it costs",sub:"Every price includes applicable taxes. What we pay for you is passed on at cost, with the receipt.",rows:[["Errands & bill payments","Cost + {{run_rate}} service fee","{{Fee_min_short}}, {{delivery_short}}. Or a {{errand_stop_fee}} extra stop on a grocery or pickup run. [Start an errand →](/errands)"],["Pharmacy","Receipt + {{run_rate}} service fee","A {{errand_stop_fee}} extra stop on a grocery or pickup run, or on its own with the service fee ({{fee_min_short}}, {{delivery_short}})."],["Restaurant pickup","Menu price + {{service_fee_rate}} service fee","{{restaurant_pickup_fee}} delivery/waiting time on a grocery run. On its own, a {{restaurant_only_fee}} minimum fee ({{restaurant_only_fee_french}} when the French side is involved) and a {{restaurant_only_delivery}} delivery fee; each extra restaurant adds {{restaurant_pickup_fee}}."],["Laundry, wash & fold","{{laundry_per_lb}} per lb + {{laundry_fee_each_way}} each way","Weighed at pickup, then collected and returned with your grocery or pickup orders."],["Beach & baby equipment","Partner price + {{run_rate}}","Delivered and collected for {{errand_stop_fee}} each way with a run, or as its own trip with the {{run_rate}} service fee, {{delivery_short}}."],["Late Night Snack Run","$65 incl. delivery + your items","Thursday to Saturday, 9:00–11:30 PM; order by 9:30 PM. Items at GrocerGoSx prices, from $50 of items."],["Delivery","{{delivery_value}}","{{Delivery_how}}: anywhere on the island, once per run, however many stops."]],foot:"Custom requests are quoted from the same pieces, and nothing is booked until you approve the total.",link:["Full pricing & fees","/pricing"]},{type:"split",img:"11062b_0326238ca4f3477ea16f44a2108280d7~mv2.jpg",alt:"Grocery bags unpacked on a kitchen counter",kicker:"One run, one delivery",title:"Add errands to your grocery run",text:["Each extra stop on a grocery or pickup run is {{errand_stop_fee}}, and one delivery covers the whole run."],items:["Pick up a prescription with your groceries","Add dinner from an island restaurant","Pay a bill or collect a parcel on the same run","Have your laundry collected and returned with your runs"],ctas:[{t:"Shop groceries",href:"/shop-now"},{t:"Start an errand",href:"/errands"},{t:"All services",href:"/services-hub"}]},{type:"quotes",title:"What our clients say",items:[["Grocery and concierge service was perfect! They stayed in touch and we got everything we ordered. Absolute luxury for the convenience - thank you!","Cori Bavis","Airbnb guest"],["Excellent service. Dwayne confirmed items requested were correct by sending photos and delivered exactly as requested in a timely fashion. Definitely recommend for any villa stay!","Diana McKennon","Villa property owner"]]},{type:"faq",title:"Good to know",items:[["How do I book a concierge service?","Message us on WhatsApp, iMessage or text at +590 690 77 9119, daily from 8:30 AM to 11 PM. Pharmacy and restaurant orders can also go straight into your basket on the [Pharmacy](/pharmacy) and [Restaurants](/restaurants) pages, and errands, bills and laundry on the [Errands](/errands) and [Laundry](/laundry) pages."],["Can I add an errand to a grocery order?","Yes. Add it on the [Errands page](/errands) and it rides along with your basket: each extra stop on a grocery or pickup run is {{errand_stop_fee}}, and one delivery covers the whole run."],["How do I pay for things you buy for me?","What we pay for you is passed on at exact cost with the receipt, plus the {{run_rate}} service fee. We confirm your total by message and send a secure payment link before we shop or dispatch; transfer or cash works too, at the same price."],["Do you collect prescriptions?","Yes, prescriptions are welcome. Tell us which pharmacy, or send a photo of the prescription on WhatsApp, and we collect it with your run."],["When is the Late Night Snack Run?","Thursday to Saturday, 9:00 to 11:30 PM; order by 9:30 PM. It's $65 including delivery plus your items at GrocerGoSx prices, from $50 of items. Dutch side to start, French side on request."],["Do you cover the French side?","Yes, the whole island: Dutch Sint Maarten and French Saint-Martin. {{Delivery_anywhere}}. [Find your area](/service-area)."]]},{type:"cta",title:"Need something done?",text:"Start an errand online and see the price before you send, or message us with what you need and we'll quote it: WhatsApp, iMessage or text +590 690 77 9119, daily from 8:30 AM to 11 PM.",ctas:[{t:"Start an errand",href:"/errands"},{t:"Message us",wa:"Hi GrocerGoSx, I need help with: "},{t:"Email us",mail:"Concierge request"}]}]},e.run&&e.run(),r.__ggsxHub&&r.__ggsxHub.fix()})();
} catch (e) { try { console.warn('[GGSX bundle] Pages 9 Concierge Services', e); } catch (e2) {} }
__ggsxE("d6ec509a-e96e-4380-ac3a-1977105bfdb0#0");

/* ===== GrocerGoSx Privacy Policy (5469c062-40b7-420d-9b3f-fe0ba0ca850e, rev 2) ===== */
__ggsxCss("", "\n#gg-privacy{position:fixed;inset:0;z-index:99990;display:none;background:rgba(27,27,27,.55);overflow:auto;-webkit-overflow-scrolling:touch;padding:24px 16px calc(24px + env(safe-area-inset-bottom,0px))}\n#gg-privacy.open{display:block}\nhtml.gg-pp-lock,html.gg-pp-lock body{overflow:hidden!important}\n#gg-privacy .pp-box{position:relative;box-sizing:border-box;max-width:760px;margin:0 auto;background:#fff;color:#1b1b1b;border-radius:20px;padding:30px 32px 34px;box-shadow:0 20px 60px rgba(0,0,0,.25);font-family:\"Avenir Light\",avenir-lt-w01_35-light1475496,Avenir,\"Helvetica Neue\",Arial,sans-serif;font-size:15px;line-height:1.6;text-align:left}\n#gg-privacy h2{font-family:Benzin,\"Helvetica Neue\",Arial,sans-serif;font-size:26px;line-height:1.15;margin:0 44px 4px 0;color:#1b1b1b}\n#gg-privacy h3{font-family:Benzin,\"Helvetica Neue\",Arial,sans-serif;font-size:16px;line-height:1.3;margin:22px 0 6px;color:#1b1b1b}\n#gg-privacy p,#gg-privacy li{margin:0 0 8px}\n#gg-privacy ul{margin:0 0 8px;padding-left:20px}\n#gg-privacy b{font-weight:700}\n#gg-privacy a{color:#F4551B}\n#gg-privacy .pp-date{color:#6b6b6b;font-size:13px;margin-bottom:14px}\n#gg-privacy .pp-x{position:absolute;top:14px;right:14px;width:40px;height:40px;border:0;border-radius:50%;background:#f3efe9;color:#1b1b1b;font-size:26px;line-height:40px;cursor:pointer;padding:0}\n@media (max-width:860px){#gg-privacy{padding:calc(12px + env(safe-area-inset-top,0px)) 10px calc(12px + env(safe-area-inset-bottom,0px))}#gg-privacy .pp-box{padding:24px 20px 28px;border-radius:16px}#gg-privacy h2{font-size:22px}}\n");
(function(){var D=document;if(D.getElementById("gg-privacy-text"))return;var s=D.createElement('script');s.setAttribute("type","text/html");s.setAttribute("id","gg-privacy-text");s.text="\n<h2>Privacy Policy</h2>\n<p class=\"pp-date\">Last updated: 26 October 2026</p>\n<p>GrocerGoSx is a grocery delivery and concierge service on Sint Maarten and Saint-Martin. This policy explains what we collect when you use grocergosx.com, why we collect it, and the choices you have. Questions? Email <a href=\"mailto:grocergosx@gmail.com\">grocergosx@gmail.com</a> or message +590 690 77 9119.</p>\n\n<h3>1. What we collect</h3>\n<ul>\n<li><b>Your orders and requests.</b> Your name, email, phone number, delivery address, island side, delivery date and time, notes, the items in your basket, and what we should do if something is unavailable. Pharmacy requests can include health information, such as a medicine or a prescription.</li>\n<li><b>Checkout details you haven’t sent.</b> If you start checkout, type a phone number or email, then leave without sending your order, we save your name, phone number, email, basket and the delivery time you picked, so we can offer to help you finish. We never save your address or notes this way. A note under the contact fields at checkout tells you this.</li>\n<li><b>Your messages.</b> What you write to us in the site chat, by email or message, and in our contact and partner forms, along with the contact details you give us.</li>\n<li><b>How the shop is used.</b> The pages and departments you open, what you search for, the items you add or remove, whether you reach checkout, your type of device, and the website that sent you to us. This is recorded without your name, under a random ID stored in your browser.</li>\n<li><b>Session recordings and heatmaps.</b> We use Microsoft Clarity to see how visitors use our site, including clicks, scrolling and mouse movement, so we can make it easier to use. Clarity hides what you type. It uses cookies, and Microsoft processes this data under the <a href=\"https://privacy.microsoft.com/privacystatement\" target=\"_blank\" rel=\"noopener\">Microsoft Privacy Statement</a>.</li>\n<li><b>Your location, if you share it.</b> On your live order page you can tap “Share my location” so we can drive straight to your door. We use it only for that delivery and delete it once you have your order, or within 24 hours. While your delivery is on the way, the same page shows our driver’s location on a map.</li>\n<li><b>Payments.</b> Invoices and payments are handled through Wix and our payment providers. We never see or store your full card number.</li>\n</ul>\n\n<h3>2. How we use it</h3>\n<p>To shop for and deliver your order; to confirm details and keep you updated by message or email; to send invoices and receipts; to follow up on a checkout you didn’t finish; to answer your messages; to keep the records our accounts and tax filings require; and to improve our site and what we stock. We do not sell your personal information.</p>\n\n<h3>3. Who we share it with</h3>\n<p>Only the services that run our business: Wix (our website, forms, chat, invoices and payments), Microsoft (Clarity) and Google (our email, the spreadsheets that hold our order lists and accounts, and the service that passes our driver’s location to your live order page). The delivery map is drawn with OpenStreetMap, whose servers see your device’s internet address when the map loads. Stores, restaurants and pharmacies get only what they need to fill your order, such as a prescription for a pharmacy pickup. We also share information when the law requires it. If you message us on WhatsApp, iMessage or text, those apps’ own privacy terms apply too. Our providers may store data outside Sint Maarten and the EU, including in the United States.</p>\n\n<h3>4. How long we keep it</h3>\n<p>Orders and invoices: as long as accounting and tax rules require. Checkout details you didn’t send: only as long as we need them to follow up on that order. Messages: as long as we need them to help you. A location you share: until your delivery is done, and never more than 24 hours. Shop activity and Clarity data: for a limited time, under each service’s retention rules.</p>\n\n<h3>5. Cookies and your browser</h3>\n<p>Our site uses cookies and browser storage to work (for example, to remember your basket) and for analytics: Microsoft Clarity and the random ID used for shop activity. You can clear or block cookies in your browser settings, and where our cookie banner appears, you can decline analytics.</p>\n\n<h3>6. Your choices and rights</h3>\n<p>You can ask us what information we hold about you, ask us to correct or delete it, or ask us to stop following up with you. Email <a href=\"mailto:grocergosx@gmail.com\">grocergosx@gmail.com</a> and we’ll reply within 30 days. If you are in the EU, including French Saint-Martin, you also have rights under the GDPR, including the right to complain to a data protection authority (in France, the CNIL).</p>\n\n<h3>7. Children</h3>\n<p>Our services are for adults. We don’t knowingly collect information from children.</p>\n\n<h3>8. Changes to this policy</h3>\n<p>If we change this policy, we’ll update this page and the date at the top.</p>\n\n<p><b>GrocerGoSx</b> · Sint Maarten · <a href=\"mailto:grocergosx@gmail.com\">grocergosx@gmail.com</a> · +590 690 77 9119</p>\n";(D.body||D.head).appendChild(s);})();
__ggsxB("5469c062-40b7-420d-9b3f-fe0ba0ca850e#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggPrivacy) return;
  W.__ggPrivacy = 1;
  var HASH = '#privacy-policy', wrap = null, back = null;
  function build() {
    if (wrap) return wrap;
    var t = D.getElementById('gg-privacy-text');
    wrap = D.createElement('div');
    wrap.id = 'gg-privacy';
    wrap.innerHTML = '<div class="pp-box" role="dialog" aria-modal="true" aria-label="Privacy policy">'
      + '<button type="button" class="pp-x" aria-label="Close">×</button>' + (t ? t.textContent : '') + '</div>';
    wrap.addEventListener('click', function (e) {
      if (e.target === wrap || (e.target.closest && e.target.closest('.pp-x'))) close();
    });
    D.body.appendChild(wrap);
    return wrap;
  }
  function open() {
    build();
    back = D.activeElement;
    wrap.classList.add('open');
    D.documentElement.classList.add('gg-pp-lock');
    wrap.scrollTop = 0;
    try { wrap.querySelector('.pp-x').focus(); } catch (e) {}
  }
  function close() {
    if (!wrap) return;
    wrap.classList.remove('open');
    D.documentElement.classList.remove('gg-pp-lock');
    if (location.hash === HASH) { try { history.replaceState(null, '', location.pathname + location.search); } catch (e) {} }
    try { if (back && back.focus) back.focus(); } catch (e) {}
  }
  function check() { if (location.hash === HASH && !(wrap && wrap.classList.contains('open'))) open(); }
  D.addEventListener('click', function (e) {
    var a = e.target && e.target.closest && e.target.closest('a[href$="' + HASH + '"]');
    if (!a) return;
    e.preventDefault();
    e.stopPropagation();
    open();
  }, true);
  D.addEventListener('keydown', function (e) { if (e.key === 'Escape' && wrap && wrap.classList.contains('open')) close(); });
  W.addEventListener('hashchange', check);
  (function wait(n) { if (D.body) check(); else if (n < 40) setTimeout(function () { wait(n + 1); }, 250); })(0);
  W.GGSX_PRIVACY = { open: open, close: close };
})();
} catch (e) { try { console.warn('[GGSX bundle] Privacy Policy', e); } catch (e2) {} }
__ggsxE("5469c062-40b7-420d-9b3f-fe0ba0ca850e#0");

/* ===== GrocerGoSx Shop 18 Phone Fix (3f6bf68b-3543-4d97-a2af-8e48082699b3, rev 1) ===== */
__ggsxB("3f6bf68b-3543-4d97-a2af-8e48082699b3#0");
try {
(function () {
  if (window.__ggsxPhoneFix) return;
  window.__ggsxPhoneFix = 1;
  function intl(raw) {
    var s = String(raw || '').trim(), d = s.replace(/\D/g, '');
    if (!d) return s;
    if (/^\+/.test(s)) return '+' + d;
    if (/^00/.test(d)) return '+' + d.slice(2);
    if (d.length === 10 && /^0[56]90/.test(d)) return '+590' + d.slice(1);
    if (d.length === 9 && /^[56]90/.test(d)) return '+590' + d;
    if (d.length === 12 && /^590[56]90/.test(d)) return '+' + d;
    if (d.length === 7) return '+1721' + d;
    if (d.length === 10) return '+1' + d;
    if (d.length === 11 && d.charAt(0) === '1') return '+' + d;
    return '+' + d;
  }
  document.addEventListener('ggsx-checkout-submit', function (e) {
    try {
      var x = e.detail || {}, f = x.fields, k = (x.keys && x.keys.phone) || 'phone_8e4a', i = x.inputs && x.inputs.phone;
      if (f && i) f[k] = intl(i.value);
    } catch (err) {}
  });
  window.GGSX_PHONE = intl;
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 18 Phone Fix', e); } catch (e2) {} }
__ggsxE("3f6bf68b-3543-4d97-a2af-8e48082699b3#0");

/* ===== GrocerGoSx Shop 20 Substitute Approval (4b635ae1-c965-4f53-9981-2dea2288af2d, rev 3) ===== */
__ggsxCss("", "\n.gr-item:not(.sub) .gsa-box{display:none}\n.gsa-box{margin:8px 0 0}\n.gsa-sug{display:none;margin:6px 0 0;border:1px solid #eadfd3;border-radius:12px;overflow:hidden;background:#fff}\n.gsa-sug.on{display:block}\n.gsa-sug button{display:flex;align-items:center;gap:10px;width:100%;padding:7px 12px;border:0;border-top:1px solid #f1e9e0;background:#fff;color:#1b1b1b;font:inherit;font-size:14px;text-align:left;cursor:pointer}\n.gsa-sug button:first-child{border-top:0}\n.gsa-sug button:hover{background:#fff4ec}\n.gsa-sug small{color:#6b6b6b;white-space:nowrap;margin-left:auto}\n.gsa-sug img,.gsa-th{width:40px;height:40px;object-fit:contain;border-radius:8px;background:#fff;border:1px solid #f1e9e0;flex:none}\n.gsa-qi{display:flex;gap:12px;align-items:center;margin:0 0 8px}\n.gsa-qi img{width:76px;height:76px;object-fit:contain;border-radius:12px;background:#fff;border:1px solid #f1e3d6;flex:none}\n.gsa-qi p{margin:0}\n.gsa-row{display:flex;flex-wrap:wrap;align-items:center;gap:8px 12px;margin:8px 0 0}\n.gsa-ask{border:1.5px solid #F4551B;color:#F4551B;background:#fff;border-radius:999px;padding:8px 14px;font:inherit;font-size:14px;font-weight:600;cursor:pointer}\n.gsa-st{font-size:13.5px;color:#6b6b6b}\n.gsa-st.yes{color:#2e7d32;font-weight:600}\n.gsa-st.no{color:#c62828;font-weight:600}\n.gsa-st.other{color:#b4540a;font-weight:600}\n.gsa-x{border:0;background:none;color:#6b6b6b;text-decoration:underline;font:inherit;font-size:13px;cursor:pointer;padding:0}\n#gsa-card.gsa-card{position:static!important;inset:auto!important}\n.gsa-card{margin:12px 0;padding:16px 18px;border-radius:16px;background:#fff4ec;border:1.5px solid #F4551B;color:#1b1b1b}\n.gsa-card h3{margin:0 0 6px;font-size:17px}\n.gsa-q{padding:10px 0;border-top:1px solid #f3d9c8}\n.gsa-card h3+.gsa-q{border-top:0}\n.gsa-q p{margin:0 0 8px;font-size:15px;line-height:1.45}\n.gsa-btns{display:flex;gap:8px;flex-wrap:wrap}\n.gsa-btns button{flex:1 1 120px;padding:11px 14px;border-radius:999px;font:inherit;font-size:15px;font-weight:600;cursor:pointer;border:1.5px solid #F4551B;background:#fff;color:#F4551B}\n.gsa-btns .gsa-yes{background:#F4551B;color:#fff}\n.gsa-in{width:100%;box-sizing:border-box;padding:11px 14px;border:1.5px solid #eadfd3;border-radius:12px;font:inherit;font-size:15px;margin:0 0 8px}\n.gsa-done b{color:#2e7d32}\n.gsa-done b.no{color:#c62828}\n.gsa-done b.other{color:#b4540a}\n");
__ggsxB("4b635ae1-c965-4f53-9981-2dea2288af2d#0");
try {
!function(){var t=window,n=document;if(!t.GGSX_ASK){var e={formId:"8d12f099-9b4f-4086-8bba-877c0888d36e",f:{answer:"answer_s5q1",item:"item_s5q1",sub:"substitute_s5q1",client:"client_s5q1",order:"order_s5q1"},every:8e3,t:{ask:"Ask the client",again:"Ask again",need:"Type or pick the substitute first.",asked:"Asked, waiting for the client: ",saving:"Saving…",fail:"Couldn’t save, try again.",yes:"✓ Client said YES: get it.",no:"✗ Client said NO: tap Out of stock.",other:"↺ Client wants instead: ",use:"Use it",withdraw:"Withdraw",title:"Your shopper has a question",q1:" isn’t available. Can we get ",q2:" instead?",yesBtn:"Yes, get it",noBtn:"No, thanks",elseBtn:"Something else",elsePh:"What would you like instead?",send:"Send",saidYes:"You said yes: we’ll get ",saidNo:"You said no: we’ll leave ",saidNo2:" out.",saidElse:"You asked for ",saidElse2:" instead.",change:"Change",failClient:"That didn’t save. Please try again."}},i=null,s=!1;t.GGSX_ASK={asked:function(t){return!(!i||"run"!==i.kind||!i.r.ask.q[u(c()[t])])}},n.body?E(0):n.addEventListener("DOMContentLoaded",(function(){E(0)}))}function a(){return t.GGSX_TRACK}function o(t,n,e){return a().el(t,n,e)}function r(t){return a().money(t)}function u(t){return t?a().itemName(t):""}function c(){return i&&i.order&&i.order.i||[]}function l(t){return t.n+(t.p?" ("+r(t.p)+")":"")}function d(t,n){return t=String(t||""),/^https:\/\/static\.wixstatic\.com\/media\/[^/]+$/.test(t)?t+"/v1/fit/w_"+n+",h_"+n+",q_80,enc_auto/p.png":t}function f(t,n,e){return t?o("img",{src:d(t,n),alt:"",loading:"lazy",class:e||null}):null}function g(t,n){var e=t.ask.q[n],i=t.ans.a[n];return e&&i&&i.w===e.at?i:null}function v(t){return a().load(t.id).then((function(n){var e={ask:{q:{}},ans:{a:{}}},i=[];return n=n||{},[["ask","asig","q"],["ans","nsig","a"]].forEach((function(s){n[s[0]]&&n[s[1]]&&i.push(a().sign(t,String(n[s[0]])).then((function(t){if(t===n[s[1]])try{var i=JSON.parse(n[s[0]]);i[s[2]]=i[s[2]]||{},e[s[0]]=i}catch(t){}})))})),Promise.all(i).then((function(){return e}))}))}function p(t,n,e,i){var s=JSON.stringify(i),o={};return a().sign(t,s).then((function(i){return o[n]=s,o[e]=i,a().store(t.id,o)}))}function h(t,n){t.__gsaSkip=1,t.value=n,t.dispatchEvent(new Event("input",{bubbles:!0}))}function m(n,e,i){var s=0;n.addEventListener("input",(function(){n.__gsaSkip?n.__gsaSkip=0:(clearTimeout(s),s=setTimeout((function(){!function(n,e,i){var s=t.GGSX_EDIT&&(t.GGSX_EDIT.h||t.GGSX_EDIT.H),a=n.value.trim();s&&s.products&&s.rank&&!(a.length<2)?s.products().then((function(t){var n=(s.rank(t||[],a,6)||[]).slice(0,6);e.innerHTML="",n.forEach((function(t){var n=String(t.name||"")+(t.size?" "+t.size:"");e.appendChild(o("button",{type:"button",onmousedown:function(s){s.preventDefault(),i(n,t.price,t.img||""),e.classList.remove("on")}},[f(t.img,96),o("span",{text:n}),o("small",{text:r(t.price)})]))})),e.classList.toggle("on",n.length>0)}),(function(){})):e.classList.remove("on")}(n,e,i)}),200))})),n.addEventListener("blur",(function(){setTimeout((function(){e.classList.remove("on")}),250)}))}function k(){return[].slice.call(n.querySelectorAll(".gr-item")).filter((function(t){return t.querySelector(".gr-sub")}))}function b(){i&&"run"===i.kind&&k().forEach((function(t,n){if(t.__gsa)return _(t,n);var s=t.querySelector(".gr-sub"),a=s.querySelectorAll("input"),r=a[0],l=a[1];if(r&&l){t.__gsa=1;var d=o("span",{class:"gsa-st"}),f=o("div",{class:"gsa-sug"}),g=o("button",{type:"button",class:"gsa-ask",text:e.t.ask,onclick:function(){!function(t,n,s,a){var o=n.value.trim(),r=s.value.trim(),l=i,d=u(c()[t]);if(!o)return a.className="gsa-st",a.textContent=e.t.need,void n.focus();a.className="gsa-st",a.textContent=e.t.saving,v(l.K).then((function(n){var e=k()[t]&&k()[t].__gsaPick;return n.ask.q[d]={n:o,p:r,at:Date.now(),img:e&&e.n===o?e.img:""},p(l.K,"ask","asig",{v:2,q:n.ask.q}).then((function(){l.r=n,y(),x()}))})).catch((function(){a.textContent=e.t.fail}))}(n,r,l,d)}}),b=o("button",{type:"button",class:"gsa-x",text:e.t.use}),q=o("img",{class:"gsa-th",alt:""}),S=o("button",{type:"button",class:"gsa-x",text:e.t.withdraw,onclick:function(){!function(t){var n=i,e=u(c()[t]);v(n.K).then((function(t){return delete t.ask.q[e],p(n.K,"ask","asig",{v:2,q:t.ask.q}).then((function(){n.r=t,y()}))})).catch((function(){}))}(n)}});s.parentNode.insertBefore(o("div",{class:"gsa-box"},[f,o("div",{class:"gsa-row"},[g,q,d,b,S])]),s.nextSibling),t.__gsaui={st:d,btn:g,wd:S,use:b,th:q,nameIn:r,priceIn:l},m(r,f,(function(n,e,i){t.__gsaPick={n:n,img:i},h(r,n),e&&h(l,String(e))})),_(t,n)}}))}function _(t,n){var s=t.__gsaui;if(s&&i){var a=u(c()[n]),o=i.r.ask.q[a],r=g(i.r,a);s.wd.style.display=o?"":"none",s.use.style.display=r&&"other"===r.v?"":"none",s.use.onclick=r?function(){t.__gsaPick={n:r.n,img:r.img||""},h(s.nameIn,r.n),h(s.priceIn,r.p?String(r.p):"")}:null,s.btn.textContent=o?e.t.again:e.t.ask;var f=r&&"other"===r.v?r.img:o&&o.img;s.th.style.display=f?"":"none",f&&s.th.__src!==f&&(s.th.__src=f,s.th.src=d(f,96)),s.st.className="gsa-st"+(r?" "+r.v:""),s.st.textContent=o?r?"yes"===r.v?e.t.yes:"no"===r.v?e.t.no:e.t.other+l(r):e.t.asked+l(o):""}}function y(){k().forEach((function(t,n){_(t,n)}))}function q(){var t=i,s=n.getElementById("gsa-card"),a=c().map(u).filter((function(n,e,i){return t.r.ask.q[n]&&i.indexOf(n)===e}));if(a.length){var r=JSON.stringify([a,t.r.ask.q,t.r.ans.a,t.open]);if(!s||s.__sig!==r){if(!s){var d=n.querySelector(".gl-state"),v=d&&d.closest(".gr-body"),p=d;if(!d||!v)return;for(;p.parentNode!==v;)p=p.parentNode;s=o("div",{id:"gsa-card",class:"gsa-card"}),v.insertBefore(s,p.nextSibling)}s.__sig=r,s.innerHTML="",s.appendChild(o("h3",{text:e.t.title})),a.forEach((function(n){var i=t.r.ask.q[n],a=g(t.r,n),r=o("div",{class:"gsa-q"}),u=e.t;if(a&&!t.open[n]){var c="other"===a.v?a.img:"yes"===a.v?i.img:"";c&&r.appendChild(o("div",{class:"gsa-qi"},[f(c,160)])),r.appendChild(o("p",{class:"gsa-done"},[o("b",{class:a.v,text:"yes"===a.v?u.saidYes+l(i)+".":"no"===a.v?u.saidNo+n+u.saidNo2:u.saidElse+l(a)+u.saidElse2})," ",o("button",{type:"button",class:"gsa-x",text:u.change,onclick:function(){t.open[n]=1,q()}})]))}else if(r.appendChild(o("div",{class:"gsa-qi"},[f(i.img,160),o("p",{text:n+u.q1+l(i)+u.q2})])),2===t.open[n]){var d=o("input",{type:"text",class:"gsa-in",placeholder:u.elsePh}),v=o("div",{class:"gsa-sug"});d.addEventListener("input",(function(){d.__gsaSkip||(d.__gsaP="",d.__gsaI="")})),m(d,v,(function(t,n,e){d.__gsaP=n||"",d.__gsaI=e||"",h(d,t)})),r.appendChild(d),r.appendChild(v),r.appendChild(o("div",{class:"gsa-btns"},[o("button",{type:"button",class:"gsa-yes",text:u.send,onclick:function(){var t=d.value.trim();t?S(n,"other",r,{n:t,p:d.__gsaP||"",img:d.__gsaI||""}):d.focus()}}),o("button",{type:"button",text:u.change,onclick:function(){t.open[n]=1,q()}})])),setTimeout((function(){d.focus()}),50)}else r.appendChild(o("div",{class:"gsa-btns"},[o("button",{type:"button",class:"gsa-yes",text:u.yesBtn,onclick:function(){S(n,"yes",r)}}),o("button",{type:"button",text:u.noBtn,onclick:function(){S(n,"no",r)}}),o("button",{type:"button",text:u.elseBtn,onclick:function(){t.open[n]=2,q()}})]));s.appendChild(r)}))}}else s&&s.parentNode.removeChild(s)}function S(t,n,r,u){var c=i;s||(s=!0,v(c.K).then((function(i){var s=i.ask.q[t];return s?(i.ans.a[t]={v:n,w:s.at,n:u?u.n:s.n,p:u?u.p:s.p,img:u?u.img:s.img||"",at:Date.now()},p(c.K,"ans","nsig",{v:2,a:i.ans.a}).then((function(){c.r=i,c.open[t]=0,q(),function(t,n,i,s){var o=t.order&&t.order.c||{},r=e.f,u={};u[r.answer]="yes"===s.v?"YES: get the substitute":"no"===s.v?"NO: leave it out":"SOMETHING ELSE: "+l(s),u[r.item]=n,u[r.sub]=l(i),u[r.client]=((o.f||"")+" "+(o.l||"")).trim()||"Client",u[r.order]=a().when(o),a().api("POST","https://www.wixapis.com/form-submission-service/v4/submissions",{submission:{formId:e.formId,submissions:u}}).catch((function(){}))}(c,t,s,i.ans.a[t])}))):(c.r=i,void q())})).catch((function(){r.appendChild(o("p",{text:e.t.failClient}))})).then((function(){s=!1})))}function w(){var t=i;t&&t.K&&v(t.K).then((function(n){t===i&&(t.r=n,"run"===t.kind?(b(),y()):q(),x())}),(function(){t===i&&x()}))}function x(){var t=i;t&&(clearTimeout(t.timer),t.timer=setTimeout((function(){if(t===i){var e=Object.keys(t.r.ask.q).some((function(n){return!g(t.r,n)}));"visible"!==n.visibilityState||"track"!==t.kind&&!e?x():w()}}),e.every))}function C(){var t=/^#(run|track)\/([A-Za-z0-9_-]+)/.exec(location.hash);if(!i||t&&i.P===t[2]&&i.kind===t[1]||(clearTimeout(i.timer),i=null),t&&!i){var n=i={kind:t[1],P:t[2],r:{ask:{q:{}},ans:{a:{}}},open:{},order:a().decode(t[2])};a().keys(t[2]).then((function(t){n===i&&(n.K=t,w())}),(function(){}))}}function E(e){if(a()&&a().keys&&a().store){t.addEventListener("hashchange",C),n.addEventListener("visibilitychange",(function(){"visible"===n.visibilityState&&i&&w()}));var s=!1;new MutationObserver((function(){!s&&i&&i.K&&(s=!0,setTimeout((function(){s=!1,i&&("run"===i.kind?b():!n.getElementById("gsa-card")&&Object.keys(i.r.ask.q).length&&q())}),300))})).observe(n.body,{childList:!0,subtree:!0}),C()}else e<60&&setTimeout((function(){E(e+1)}),250)}}();
} catch (e) { try { console.warn('[GGSX bundle] Shop 20 Substitute Approval', e); } catch (e2) {} }
__ggsxE("4b635ae1-c965-4f53-9981-2dea2288af2d#0");

/* ===== GrocerGoSx Shop 21 Order Chat (90ca9b2d-e34e-4c8e-85d6-dd24d656e8ed, rev 1) ===== */
__ggsxCss("", "\n#gch-btn{position:fixed;right:16px;bottom:calc(100px + env(safe-area-inset-bottom,0px));z-index:2147482000;width:58px;height:58px;border-radius:50%;border:0;background:#F4551B;color:#fff;box-shadow:0 6px 18px rgba(0,0,0,.25);cursor:pointer;display:none;align-items:center;justify-content:center;padding:0}\n#gch-btn.on{display:flex}\n#gch-btn svg{width:28px;height:28px}\n#gch-btn b{position:absolute;top:-4px;right:-4px;min-width:22px;height:22px;padding:0 6px;box-sizing:border-box;border-radius:11px;background:#1b1b1b;color:#fff;font:700 12px/22px Helvetica,Arial,sans-serif;text-align:center;display:none}\n#gch-btn b.on{display:block}\n#gch-pan{position:fixed;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:2147482001;width:min(380px,calc(100vw - 24px));height:min(560px,calc(100vh - 110px));background:#fff;border-radius:18px;box-shadow:0 12px 40px rgba(0,0,0,.3);display:none;flex-direction:column;overflow:hidden;color:#1b1b1b;font-family:inherit}\n#gch-pan.on{display:flex}\n.gch-h{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 16px;background:#F4551B;color:#fff;font-weight:700;font-size:16px}\n.gch-h button{border:0;background:rgba(255,255,255,.22);color:#fff;width:32px;height:32px;border-radius:50%;font-size:18px;line-height:32px;cursor:pointer;padding:0}\n.gch-l{flex:1;overflow-y:auto;padding:12px;background:#f7f3ef;display:flex;flex-direction:column;gap:8px}\n.gch-m{max-width:80%;padding:9px 12px;border-radius:14px;font-size:15px;line-height:1.4;white-space:pre-wrap;overflow-wrap:anywhere;background:#fff;border:1px solid #ece6df;align-self:flex-start}\n.gch-m.me{align-self:flex-end;background:#F4551B;color:#fff;border-color:#F4551B}\n.gch-m small{display:block;font-size:11px;opacity:.75;margin-top:3px}\n.gch-m.wait{opacity:.6}\n.gch-e{margin:auto;color:#7a7a7a;font-size:14px;text-align:center;padding:20px;line-height:1.45}\n.gch-x{color:#c62828;font-size:13px;padding:0 12px 8px;display:none}\n.gch-x.on{display:block}\n.gch-f{display:flex;gap:8px;padding:10px;border-top:1px solid #eee;background:#fff}\n.gch-f textarea{flex:1;resize:none;height:44px;max-height:110px;box-sizing:border-box;padding:11px 12px;border:1.5px solid #e5ddd5;border-radius:14px;font:inherit;font-size:16px;color:#1b1b1b;background:#fff}\n.gch-f button{border:0;background:#F4551B;color:#fff;border-radius:14px;padding:0 16px;font:inherit;font-size:15px;font-weight:700;cursor:pointer}\n@media (max-width:600px){#gch-pan{right:0;left:0;bottom:0;width:100%;height:80vh;border-radius:18px 18px 0 0}}\n");
__ggsxB("90ca9b2d-e34e-4c8e-85d6-dd24d656e8ed#0");
try {
(function () {
  var W = window, D = document;
  if (W.GGSX_CHAT) return;
  var CFG = {
    formId: 'b529601f-0518-4d5a-ba3d-be0c362b70be',          /* Wix Form "💬 Order chat" (push to your phone) */
    f: { message: 'message_c8t3', client: 'client_c8t3', order: 'order_c8t3', run: 'run_c8t3' },
    runUrl: 'https://www.grocergosx.com/shop-now#run/',
    fast: 4000, slow: 15000,                                   /* ms between checks: chat open / chat closed */
    keep: 80, max: 600, pushGap: 60000,                        /* messages kept per side, characters per message, ms between pushes */
    t: {
      client: 'Chat with your shopper', shop: 'Chat with ', ph: 'Write a message…', send: 'Send', close: 'Close chat',
      empty: 'Send a message here and it shows up on the other side within a few seconds.', fail: 'Not sent yet. Tap Send to try again.',
      shopper: 'GrocerGoSx', open: 'Chat'
    }
  };
  var cur = null, ui = null, lastPush = 0;
  var enc = new TextEncoder(), dec = new TextDecoder();
  function C() { return W.GGSX_TRACK; }
  function b64(u8) { var s = ''; for (var i = 0; i < u8.length; i++) s += String.fromCharCode(u8[i]); return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''); }
  function unb64(s) { s = String(s || '').replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '='; var b = atob(s), u = new Uint8Array(b.length); for (var i = 0; i < b.length; i++) u[i] = b.charCodeAt(i); return u; }
  function chatKey(P) {   /* AES key from the order itself; the record id alone can't produce it */
    return crypto.subtle.digest('SHA-256', enc.encode('ggsx-chat-key|' + C().seed(P)))
      .then(function (h) { return crypto.subtle.importKey('raw', h, 'AES-GCM', false, ['encrypt', 'decrypt']); });
  }
  function seal(key, obj) {
    var iv = crypto.getRandomValues(new Uint8Array(12));
    return crypto.subtle.encrypt({ name: 'AES-GCM', iv: iv }, key, enc.encode(JSON.stringify(obj)))
      .then(function (ct) { return b64(iv) + '.' + b64(new Uint8Array(ct)); });
  }
  function unseal(key, s) {
    if (!s) return Promise.resolve(null);
    var p = String(s).split('.');
    return crypto.subtle.decrypt({ name: 'AES-GCM', iv: unb64(p[0]) }, key, unb64(p[1]))
      .then(function (pt) { return JSON.parse(dec.decode(pt)); }, function () { return null; });
  }
  function mineField(me) { return me.side === 'shop' ? 'chs' : 'chc'; }
  function readAll(me) {
    return C().load(me.K.id).then(function (rec) {
      rec = rec || {};
      return Promise.all([unseal(me.key, rec.chs), unseal(me.key, rec.chc)]).then(function (r) {
        var out = [];
        ((r[0] && r[0].m) || []).forEach(function (m) { out.push({ s: 'shop', t: m.t, at: m.at }); });
        ((r[1] && r[1].m) || []).forEach(function (m) { out.push({ s: 'client', t: m.t, at: m.at }); });
        out.sort(function (a, b) { return a.at - b.at; });
        return { all: out, mine: me.side === 'shop' ? ((r[0] && r[0].m) || []) : ((r[1] && r[1].m) || []) };
      });
    });
  }

  /* ---------- screen ---------- */
  function el(tag, attrs, kids) { return C().el(tag, attrs, kids); }
  function build() {
    if (ui) return ui;
    var icon = D.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('viewBox', '0 0 24 24'); icon.setAttribute('fill', 'none'); icon.setAttribute('stroke', '#fff'); icon.setAttribute('stroke-width', '2');
    icon.innerHTML = '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" stroke-linejoin="round"/>';
    var badge = el('b'), btn = el('button', { id: 'gch-btn', type: 'button', 'aria-label': CFG.t.open, onclick: function () { show(true); } }, [icon, badge]),
        title = el('span'), list = el('div', { class: 'gch-l' }), err = el('div', { class: 'gch-x', text: CFG.t.fail }),
        ta = el('textarea', { rows: '1', placeholder: CFG.t.ph, maxlength: String(CFG.max) }),
        send = el('button', { type: 'button', text: CFG.t.send, onclick: function () { submit(); } }),
        pan = el('div', { id: 'gch-pan', role: 'dialog' }, [
          el('div', { class: 'gch-h' }, [title, el('button', { type: 'button', 'aria-label': CFG.t.close, text: '×', onclick: function () { show(false); } })]),
          list, err, el('div', { class: 'gch-f' }, [ta, send])
        ]);
    ta.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit(); } });
    D.body.appendChild(btn); D.body.appendChild(pan);
    ui = { btn: btn, badge: badge, pan: pan, title: title, list: list, err: err, ta: ta, send: send };
    return ui;
  }
  function seenKey(me) { return 'ggsx_chat_seen:' + me.K.id + ':' + me.side; }
  function seen(me, v) { try { if (v) localStorage.setItem(seenKey(me), String(v)); return +localStorage.getItem(seenKey(me)) || 0; } catch (e) { return 0; } }
  function paint() {
    var me = cur, u = ui;
    if (!me || !u) return;
    var msgs = me.msgs.concat(me.pending), other = me.side === 'shop' ? 'client' : 'shop', last = seen(me);
    if (u.pan.classList.contains('on') && D.visibilityState === 'visible') {
      var newest = 0;
      me.msgs.forEach(function (m) { if (m.s === other && m.at > newest) newest = m.at; });
      if (newest > last) last = seen(me, newest);
    }
    var unread = me.msgs.filter(function (m) { return m.s === other && m.at > last; }).length;
    u.badge.textContent = unread > 9 ? '9+' : String(unread);
    u.badge.classList.toggle('on', unread > 0);
    if (unread > me.unread && me.side === 'shop' && navigator.vibrate) try { navigator.vibrate(200); } catch (e) {}
    me.unread = unread;
    var sig = JSON.stringify(msgs.map(function (m) { return [m.s, m.at, m.wait ? 1 : 0]; }));
    if (u.list.__sig === sig) return;
    var atEnd = u.list.scrollHeight - u.list.scrollTop - u.list.clientHeight < 60;
    u.list.__sig = sig;
    u.list.innerHTML = '';
    if (!msgs.length) u.list.appendChild(el('div', { class: 'gch-e', text: CFG.t.empty }));
    msgs.forEach(function (m) {
      var mine = m.s === me.side, who = m.s === 'shop' ? CFG.t.shopper : ((me.order && me.order.c && me.order.c.f) || 'Client');
      u.list.appendChild(el('div', { class: 'gch-m' + (mine ? ' me' : '') + (m.wait ? ' wait' : '') }, [m.t, el('small', { text: (mine ? '' : who + ' · ') + C().hhmm(m.at) })]));
    });
    if (atEnd || !u.list.__painted) u.list.scrollTop = u.list.scrollHeight;
    u.list.__painted = 1;
  }
  function show(on) {
    var u = build();
    u.pan.classList.toggle('on', !!on);
    u.btn.classList.toggle('on', !on && !!cur);
    if (on) { u.list.__painted = 0; paint(); setTimeout(function () { u.ta.focus(); }, 60); refresh(); }
    else schedule();
  }

  /* ---------- sending and checking ---------- */
  function submit() {
    var me = cur, u = ui, text = u.ta.value.trim().slice(0, CFG.max);
    if (!me || !me.key || !text) return;
    var msg = { s: me.side, t: text, at: Date.now(), wait: true };
    me.pending.push(msg); u.ta.value = ''; u.err.classList.remove('on'); paint();
    var field = mineField(me);
    C().load(me.K.id).then(function (rec) { return unseal(me.key, (rec || {})[field]); }).then(function (o) {
      var mine = ((o && o.m) || []).concat([{ t: msg.t, at: msg.at }]).slice(-CFG.keep);
      return seal(me.key, { v: 1, m: mine }).then(function (s) { var d = {}; d[field] = s; return C().store(me.K.id, d); });
    }).then(function () {
      me.pending = me.pending.filter(function (m) { return m !== msg; });
      me.msgs.push({ s: msg.s, t: msg.t, at: msg.at });
      paint();
      if (me.side === 'client') push(me, text);
    }, function () {
      me.pending = me.pending.filter(function (m) { return m !== msg; });
      u.ta.value = text; u.err.classList.add('on'); paint();
    });
  }
  function push(me, text) {   /* a client's message reaches your phone (at most one push a minute) */
    if (Date.now() - lastPush < CFG.pushGap) return;
    lastPush = Date.now();
    var c = (me.order && me.order.c) || {}, f = CFG.f, d = {};
    d[f.message] = text;
    d[f.client] = ((c.f || '') + ' ' + (c.l || '')).trim() || 'Client';
    d[f.order] = C().when(c);
    d[f.run] = CFG.runUrl + me.P;
    C().api('POST', 'https://www.wixapis.com/form-submission-service/v4/submissions', { submission: { formId: CFG.formId, submissions: d } }).catch(function () {});
  }
  function refresh() {
    var me = cur;
    if (!me || !me.key) return;
    clearTimeout(me.timer);
    readAll(me).then(function (r) {
      if (me !== cur) return;
      me.msgs = r.all;
      paint();
      schedule();
    }, function () { if (me === cur) schedule(); });
  }
  function schedule() {
    var me = cur;
    if (!me) return;
    clearTimeout(me.timer);
    var open = ui && ui.pan.classList.contains('on');
    me.timer = setTimeout(function () { if (me === cur && D.visibilityState === 'visible') refresh(); else schedule(); }, open ? CFG.fast : CFG.slow);
  }
  function route() {
    var m = /^#(run|track)\/([A-Za-z0-9_-]+)/.exec(location.hash), side = m && (m[1] === 'run' ? 'shop' : 'client');
    if (cur && (!m || cur.side !== side || C().seed(cur.P) !== C().seed(m[2]))) { clearTimeout(cur.timer); cur = null; }
    if (cur && m) { cur.P = m[2]; cur.order = C().decode(m[2]) || cur.order; }   /* same order, list edited: keep the chat */
    if (!m) { if (ui) { ui.btn.classList.remove('on'); ui.pan.classList.remove('on'); } return; }
    if (cur) return;
    var me = cur = { side: side, P: m[2], order: C().decode(m[2]), msgs: [], pending: [], unread: 0 };
    Promise.all([C().keys(m[2]), chatKey(m[2])]).then(function (r) {
      if (me !== cur) return;
      me.K = r[0]; me.key = r[1];
      var u = build(), c = (me.order && me.order.c) || {};
      u.title.textContent = side === 'shop' ? CFG.t.shop + (c.f || 'the client') : CFG.t.client;
      u.list.__sig = ''; u.list.__painted = 0;
      if (!u.pan.classList.contains('on')) u.btn.classList.add('on');
      refresh();
    }, function () {});
  }
  function boot(n) {
    if (!C() || !C().keys || !C().seed || !C().store || !W.crypto || !crypto.subtle) { if (n < 60) setTimeout(function () { boot(n + 1); }, 250); return; }
    W.addEventListener('hashchange', route);
    D.addEventListener('visibilitychange', function () { if (D.visibilityState === 'visible' && cur) refresh(); });
    route();
  }
  W.GGSX_CHAT = { open: function () { show(true); } };
  if (D.body) boot(0); else D.addEventListener('DOMContentLoaded', function () { boot(0); });
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 21 Order Chat', e); } catch (e2) {} }
__ggsxE("90ca9b2d-e34e-4c8e-85d6-dd24d656e8ed#0");

/* ===== GrocerGoSx Shop 22 Minimum Order (9b434011-5562-42b7-8354-09b1daae6f56, rev 6) ===== */
__ggsxCss("", ".gc-min{display:none;background:#fdecea;color:#b3261e;border:1px solid #f3c4bf;border-radius:12px;padding:10px 12px;font-size:14px;line-height:1.45}");
__ggsxB("9b434011-5562-42b7-8354-09b1daae6f56#0");
try {
!function(){var t=document,e=window;function n(t){return'$'+(Math.round(100*t)/100).toFixed(2)}function r(){var t=function(){var t,e,n=null,r=0,o=!1,i=!1;try{n=JSON.parse(localStorage.getItem('ggsx_basket')||'null')}catch(t){}if(n&&n.items)for(t in n.items)if((e=n.items[t])&&e.n>0){if(/^laundry:/.test(e.id||'')){i=!0;continue}r+=e.n*(+e.price||0),/^(rest|pharm|errand):/.test(e.id||'')||(o=!0)}return{s:Math.round(100*r)/100,shop:o,lau:i}}(),n=function(){var t=NaN;try{t=+e.GGSX_MORE.setting('min_order',100)}catch(t){}return t>=0?t:100}();return{ok:!t.shop||t.s+.005>=n,s:t.s,m:n,lau:t.lau}}function o(e){if(!e)return!0;var o=r(),i=e.querySelector('.gc-min'),s=e.querySelector('button[type=submit]');if(!i){(i=t.createElement('div')).className='gc-min',i.setAttribute('role','status');var u=e.querySelector('.gc-est');u&&u.parentNode?u.parentNode.insertBefore(i,u.nextSibling):e.insertBefore(i,e.firstChild)}return i.textContent=o.ok?'':'The minimum basket is '+n(o.m)+' (taxes included'+(o.lau?', laundry not counted':'')+'). Yours is '+n(o.s)+': add '+n(o.m-o.s)+' more to place your order.',i.style.display=o.ok?'none':'block',s&&(s.disabled=!o.ok),o.ok}e.__ggsxMinOrder||(e.__ggsxMinOrder=1,e.GGSX_MIN={below:function(){return!r().ok}},t.addEventListener('ggsx-checkout-open',(function(){setTimeout((function(){o(t.querySelector('.gc-wrap .gc-form'))}),0)})),t.addEventListener('submit',(function(t){var e=t.target;e&&e.classList&&e.classList.contains('gc-form')&&!o(e)&&(t.preventDefault(),t.stopImmediatePropagation())}),!0))}();
} catch (e) { try { console.warn('[GGSX bundle] Shop 22 Minimum Order', e); } catch (e2) {} }
__ggsxE("9b434011-5562-42b7-8354-09b1daae6f56#0");

/* ===== GrocerGoSx Shop 23 Dynamic Checkout (d9c0b4ad-bcdf-4f8b-9ec8-2401675ab6af, rev 1) ===== */
__ggsxB("d9c0b4ad-bcdf-4f8b-9ec8-2401675ab6af#0");
try {
window.GGSX_DYN = {
  anchor: "Are you on the island yet?",
  anchorOpts: [
    { id: "arrive", t: "Not yet, I'm arriving", d: "Ready for when you land" },
    { id: "here", t: "Yes, I'm here", d: "Delivered to your door" },
    { id: "guest", t: "I'm ordering for a guest", d: "Hosts and property managers" }
  ],
  guest: "Guest name(s) *",
  guestHint: "Who we're stocking for",
  handle: "How would you like it handled?",
  handleOpts: [
    { id: "stock", t: "Stock the unit before arrival", d: "Fridge and cupboards full on walk-in" },
    { id: "wait", t: "Wait until check-in", d: "Message us once you're in and we head over" }
  ],
  access: "How do we get in?",
  accessOpts: [
    { id: "desk", t: "Front desk or reception", p: "Name the reservation is under" },
    { id: "host", t: "Host or property manager", p: "Their name and number" },
    { id: "code", t: "Lockbox or door code", p: "The code, and where the box is" },
    { id: "tbd", t: "Not sure yet", p: "" }
  ],
  accessDetails: "Access details",
  flight: "Flight number",
  flightHint: "e.g. JB 1234",
  landing: "Landing time",
  optional: "optional",
  dateArrive: "Arrival date *",
  dateHere: "Delivery date *",
  windowHelp: {
    stock: "Pick the window you'd like it done in. If the unit isn't ready yet, we deliver as soon as it is.",
    wait: "A rough window is fine. We deliver once you message us that you're in."
  },
  errors: {
    anchor: "Let us know whether you're on the island yet.",
    guest: "Add your guest's name.",
    handle: "Choose stocking before arrival or waiting until check-in.",
    access: "Tell us how we get in, or pick \u201cNot sure yet\u201d."
  },
  notes: {
    here: "Already on the island.",
    stock: "Stock the unit before arrival.",
    wait: "Wait until check-in, then deliver (they'll message when they're in).",
    access: "Access: "
  }
};
} catch (e) { try { console.warn('[GGSX bundle] Shop 23 Dynamic Checkout', e); } catch (e2) {} }
__ggsxE("d9c0b4ad-bcdf-4f8b-9ec8-2401675ab6af#0");
__ggsxCss("", "\n.gc-dyn{display:flex;flex-direction:column;gap:12px}\n.gc-grp{display:flex;flex-direction:column;gap:6px;font-size:13px;font-weight:700;color:#3a3a3a}\n.gc-chips{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:8px}\n.gc-chips.c2{grid-template-columns:1fr 1fr}\n.gc-chip{display:flex;flex-direction:column;align-items:flex-start;gap:2px;min-height:48px;margin:0;padding:11px 12px;text-align:left;font:inherit;font-size:15px;font-weight:400;color:#1b1b1b;background:#fff;border:1.5px solid #cfc9c1;border-radius:12px;cursor:pointer;-webkit-appearance:none;appearance:none}\n.gc-chip b{font-weight:700;font-size:15px;line-height:1.25}\n.gc-chip small{font-size:12px;line-height:1.35;color:#6b6b6b}\n.gc-chip[aria-checked=\"true\"]{background:#F4551B;border-color:#F4551B;color:#fff}\n.gc-chip[aria-checked=\"true\"] small{color:rgba(255,255,255,.88)}\n.gc-chip:focus-visible{outline:2px solid #F4551B;outline-offset:2px}\n.gc-grp.bad .gc-chip{border-color:#d93025}\n.gc-dyn .gc-f.bad input{border-color:#d93025;background:#fff6f5}\n.gc-dyn .gc-sub{display:none}\n.gc-dyn .gc-sub.on{display:flex;animation:gcDynIn .22s ease}\n@keyframes gcDynIn{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}\n@media (prefers-reduced-motion:reduce){.gc-dyn .gc-sub.on{animation:none}}\n.gc-form.gc-dyn-wait>.gc-dyn~*{display:none!important}\n.gc-opt{font-style:normal;font-weight:400;color:#8a8a8a;margin-left:5px}\n.gc-dyn-help{font-weight:400;font-size:12px;line-height:1.4;color:#6b6b6b}\n.gc-dyn-help:empty{display:none}\n.gc-dyn-err{color:#d93025;font-size:14px;font-weight:400;line-height:1.4}\n.gc-dyn-err:empty{display:none}\n@media (max-width:860px){.gc-chips,.gc-chips.c2{grid-template-columns:1fr}}\n");
__ggsxB("d9c0b4ad-bcdf-4f8b-9ec8-2401675ab6af#1");
try {
(function () {
  if (window.__GGSX_DYN) return;
  window.__GGSX_DYN = true;
  var D = document, cfg = window.GGSX_DYN, S = {}, G = {}, st = {};

  function el(tag, attrs, kids) {
    var n = D.createElement(tag), k;
    if (attrs) for (k in attrs) {
      if (attrs[k] == null) continue;
      if (k === "class") n.className = attrs[k];
      else if (k === "text") n.textContent = attrs[k];
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), attrs[k]);
      else n.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? D.createTextNode(c) : c); });
    return n;
  }
  function find(list, id) { for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; return null; }
  function show(node, on) { if (node) node.classList.toggle("on", !!on); }
  function clearErr() { if (S.dynErr) S.dynErr.textContent = ""; }
  function label(text, input, optional) {
    var span = el("span", { text: text });
    if (optional) span.appendChild(el("i", { class: "gc-opt", text: cfg.optional }));
    return el("label", { class: "gc-f" }, [span, input]);
  }
  function paint(grp, id) {
    if (!grp) return;
    var b = grp.querySelectorAll(".gc-chip");
    for (var i = 0; i < b.length; i++) b[i].setAttribute("aria-checked", b[i].getAttribute("data-id") === id ? "true" : "false");
  }
  function chips(title, opts, key, cls) {
    var grp = el("div", { class: "gc-grp" + (cls || ""), role: "radiogroup", "aria-label": title }, [el("span", { text: title })]);
    var grid = el("div", { class: "gc-chips" + (opts.length === 4 ? " c2" : "") });
    opts.forEach(function (o) {
      var kids = [el("b", { text: o.t })];
      if (o.d) kids.push(el("small", { text: o.d }));
      grid.appendChild(el("button", {
        type: "button", class: "gc-chip", role: "radio", "aria-checked": "false", "data-id": o.id,
        onclick: function () {
          st[key] = o.id;
          if (key === "anchor") { st.handle = ""; st.access = ""; paint(G.handle, ""); paint(G.access, ""); }
          if (key === "handle") { st.access = ""; paint(G.access, ""); }
          paint(grp, o.id);
          grp.classList.remove("bad");
          clearErr();
          apply();
        }
      }, kids));
    });
    grp.appendChild(grid);
    return grp;
  }
  function input(name, type, hint, key) {
    return el("input", {
      type: type, name: name, placeholder: hint || null, autocomplete: "off",
      oninput: function (e) { st[key] = e.target.value; e.target.closest(".gc-f").classList.remove("bad"); clearErr(); },
      onchange: function (e) { st[key] = e.target.value; }
    });
  }

  function apply() {
    if (!S.form) return;
    var a = st.anchor, arr = a === "arrive" || a === "guest", stock = arr && st.handle === "stock";
    S.form.classList.toggle("gc-dyn-wait", !a);
    show(G.guest, a === "guest");
    show(G.handle, arr);
    show(G.access, stock);
    show(G.det, stock && st.access && st.access !== "tbd");
    show(G.flight, arr);
    if (S.dateLbl) S.dateLbl.textContent = arr ? cfg.dateArrive : cfg.dateHere;
    if (S.help) S.help.textContent = (arr && cfg.windowHelp[st.handle]) || "";
    var o = find(cfg.accessOpts, st.access || "");
    if (S.detInp) S.detInp.placeholder = (o && o.p) || "";
  }

  function validate() {
    var E = cfg.errors, a = st.anchor;
    if (!a) return [E.anchor, G.anchor];
    if (a === "here") return null;
    if (a === "guest" && !(st.guest || "").trim()) return [E.guest, G.guest];
    if (!st.handle) return [E.handle, G.handle];
    if (st.handle === "stock" && !st.access) return [E.access, G.access];
    return null;
  }

  function fmtDate(v) {
    var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(v || "");
    return m ? new Date(+m[1], m[2] - 1, +m[3]).toDateString().replace(/ \d{4}$/, "") : "";
  }
  function fmtTime(v) {
    var m = /^(\d{1,2}):(\d{2})/.exec(v || "");
    if (!m) return "";
    var h = +m[1], ap = h >= 12 ? "PM" : "AM";
    return (h % 12 || 12) + ":" + m[2] + " " + ap;
  }
  function prefix() {
    var a = st.anchor, N = cfg.notes, L = [], line, ds, t, o;
    if (!a) return "";
    if (a === "here") return N.here || "";
    line = (a === "guest" ? "For guest " + (st.guest || "").trim() + ". " : "") + "Arriving";
    ds = fmtDate(S.in.date.value);
    if (ds) line += " " + ds;
    if ((st.flight || "").trim()) line += ", flight " + st.flight.trim();
    t = fmtTime(st.land);
    if (t) line += ", lands " + t;
    L.push(line + ".");
    if (N[st.handle]) L.push(N[st.handle]);
    if (st.handle === "stock" && st.access) {
      o = find(cfg.accessOpts, st.access);
      L.push(N.access + (o ? o.t.toLowerCase() : st.access) + ((st.accessDet || "").trim() ? " (" + st.accessDet.trim() + ")" : "") + ".");
    }
    return L.join("\n");
  }

  function build(form, I) {
    if (S.form || !form || !I || !I.address || !I.date || !I.win) return;
    S.form = form; S.in = I;
    var dyn;
    try {
      G.anchor = chips(cfg.anchor, cfg.anchorOpts, "anchor");
      G.guest = label(cfg.guest, S.guestInp = input("ggsx_guest", "text", cfg.guestHint, "guest"));
      G.guest.classList.add("gc-sub");
      G.handle = chips(cfg.handle, cfg.handleOpts, "handle", " gc-sub");
      G.access = chips(cfg.access, cfg.accessOpts, "access", " gc-sub");
      G.det = label(cfg.accessDetails, S.detInp = input("ggsx_access", "text", "", "accessDet"), true);
      G.det.classList.add("gc-sub");
      G.flight = el("div", { class: "gc-row gc-sub" }, [
        label(cfg.flight, S.flightInp = input("ggsx_flight", "text", cfg.flightHint, "flight"), true),
        label(cfg.landing, S.landInp = input("ggsx_land", "time", null, "land"), true)
      ]);
      S.dynErr = el("div", { class: "gc-dyn-err", role: "alert" });
      dyn = el("div", { class: "gc-dyn" }, [G.anchor, G.guest, G.handle, G.access, G.det, G.flight, S.dynErr]);
      form.insertBefore(dyn, I.address.closest(".gc-f"));
      S.help = el("small", { class: "gc-dyn-help" });
      I.win.closest(".gc-f").appendChild(S.help);
      S.dateLbl = I.date.closest(".gc-f").querySelector("span");
      apply();
    } catch (e) {
      form.classList.remove("gc-dyn-wait");
      if (dyn && dyn.parentNode) dyn.parentNode.removeChild(dyn);
      S.form = null;
      try { console.warn("[GGSX dyn]", e); } catch (x) {}
    }
  }
  function reset() {
    st = {};
    [G.anchor, G.handle, G.access].forEach(function (g) { paint(g, ""); });
    [S.guestInp, S.detInp, S.flightInp, S.landInp].forEach(function (i) { if (i) i.value = ""; });
    clearErr();
    apply();
  }

  D.addEventListener("ggsx-checkout-build", function (ev) { var d = ev.detail || {}; build(d.form, d.inputs); });
  D.addEventListener("ggsx-checkout-sent", reset);
  D.addEventListener("submit", function (ev) {
    if (!S.form || ev.target !== S.form) return;
    var bad = validate();
    if (!bad) return;
    ev.preventDefault();
    ev.stopImmediatePropagation();
    if (S.dynErr) S.dynErr.textContent = bad[0];
    var g = bad[1];
    if (g) {
      g.classList.add("bad");
      try { g.scrollIntoView({ block: "center", behavior: "smooth" }); } catch (e) { try { g.scrollIntoView(); } catch (x) {} }
      var i = g.querySelector("input"); if (i) i.focus();
    }
  }, true);
  D.addEventListener("ggsx-checkout-submit", function (ev) {
    var d = ev.detail;
    if (!d || !d.fields || !d.keys || !d.keys.notes) return;
    var p = prefix(), k = d.keys.notes, own = d.fields[k] || "";
    if (p) d.fields[k] = p + (own ? "\n" + own : "");
  });
  (function () {
    var f = D.querySelector(".gc-form");
    if (!f || S.form) return;
    var I = {};
    ["address", "date", "win"].forEach(function (n) { I[n] = f.querySelector('[name="' + n + '"]'); });
    build(f, I);
  })();
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 23 Dynamic Checkout', e); } catch (e2) {} }
__ggsxE("d9c0b4ad-bcdf-4f8b-9ec8-2401675ab6af#1");

/* ===== GrocerGoSx Shop 24 Laundry 1 Style (acb6dec9-258e-4096-9ccc-44301e11794e, rev 1) ===== */
__ggsxCss("", "#ggsx-laundry{--o:#F4551B;--od:#d9420d;--t:#0e7490;--bg:#f6f3ee;--ink:#1b1b1b;--mute:#6b6b6b;--line:#e9e4dd;box-sizing:border-box;width:100%;background:var(--bg);color:var(--ink);font-family:'Avenir Light',avenir-lt-w01_35-light1475496,Avenir,'Helvetica Neue',Arial,sans-serif;font-size:15px;line-height:1.45;text-align:left;padding:36px 0 84px;-webkit-font-smoothing:antialiased}#ggsx-laundry *{box-sizing:border-box}#ggsx-laundry .gw-w{max-width:1080px;margin:0 auto;padding:0 24px}#ggsx-laundry h1,#ggsx-laundry h2,#ggsx-laundry h3{font-family:Benzin,sans-serif;font-weight:700;color:var(--ink);margin:0;line-height:1.15;letter-spacing:0}#ggsx-laundry h1{font-size:40px;margin:0 0 10px}#ggsx-laundry p{margin:0}#ggsx-laundry button{font:inherit;color:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent}#ggsx-laundry :focus-visible{outline:3px solid var(--o);outline-offset:2px}#ggsx-laundry .gw-eb{display:inline-block;margin:0 0 14px;padding:6px 12px;border-radius:999px;background:#e3f2f5;color:var(--t);font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}#ggsx-laundry .gw-top{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:32px;align-items:center;margin:0 0 6px}#ggsx-laundry .gw-pic{display:block;width:100%;height:210px;object-fit:cover;border-radius:20px}#ggsx-laundry .gw-lead{font-size:17px;color:#444;max-width:700px;margin:0 0 16px}#ggsx-laundry .gw-note{max-width:700px;margin:0 0 22px;font-size:14px;color:#3a3a3a;background:#fff;border:1.5px solid var(--line);border-left:4px solid var(--t);border-radius:12px;padding:10px 14px}#ggsx-laundry .gw-note a{color:var(--o);font-weight:700;text-decoration:none;white-space:nowrap}#ggsx-laundry .gw-bask{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;background:#fff1ea;border:1.5px solid #f6c9b3;border-radius:16px;padding:10px 14px;margin:0 0 18px}#ggsx-laundry .gw-bask[hidden],#ggsx-laundry [hidden]{display:none!important}#ggsx-laundry .gw-bask span{font-weight:700}#ggsx-laundry .gw-grid{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:20px;align-items:start}#ggsx-laundry .gw-card{background:#fff;border:1.5px solid var(--line);border-radius:20px;padding:22px}#ggsx-laundry .gw-st+.gw-st{margin-top:22px;padding-top:20px;border-top:1px solid var(--line)}#ggsx-laundry h3{display:flex;align-items:center;gap:10px;font-size:17px;margin:0 0 12px}#ggsx-laundry h3 i{display:inline-flex;align-items:center;justify-content:center;flex:none;width:26px;height:26px;border-radius:50%;background:var(--o);color:#fff;font:700 13px/1 Arial,sans-serif}#ggsx-laundry .gw-bags{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}#ggsx-laundry .gw-bag{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:2px;text-align:left;background:#fff;border:1.5px solid #ddd6cc;border-radius:16px;padding:14px;margin:0;transition:border-color .15s,background .15s}#ggsx-laundry .gw-bag:hover,#ggsx-laundry .gw-opt:hover{border-color:#b9b0a4}#ggsx-laundry .gw-ic{display:flex;align-items:flex-end;height:40px;color:var(--t);margin:0 0 6px}#ggsx-laundry .gw-bag.on,#ggsx-laundry .gw-opt.on{border-color:var(--o);background:#fff7f2;box-shadow:inset 0 0 0 1px var(--o)}#ggsx-laundry .gw-bag.on:after{content:'✓';position:absolute;top:10px;right:10px;width:22px;height:22px;border-radius:50%;background:var(--o);color:#fff;font:700 13px/22px Arial,sans-serif;text-align:center}#ggsx-laundry .gw-bt{font-weight:700;font-size:15px}#ggsx-laundry .gw-bag small,#ggsx-laundry .gw-bx{color:var(--mute);font-size:13px}#ggsx-laundry .gw-bp{margin-top:auto;padding-top:8px;color:var(--od);font-size:15px}#ggsx-laundry .gw-row{display:flex;align-items:center;gap:14px;flex-wrap:wrap}#ggsx-laundry .gw-step{display:inline-flex;align-items:center;border:1.5px solid #ddd6cc;border-radius:999px;overflow:hidden;background:#fff}#ggsx-laundry .gw-step button{width:46px;height:46px;border:0;background:#fff;font-size:22px;font-weight:700;color:var(--o);padding:0}#ggsx-laundry .gw-step button:disabled{color:#cfc8be;cursor:default}#ggsx-laundry .gw-n{min-width:34px;text-align:center;font-weight:700;font-size:18px}#ggsx-laundry .gw-lb{color:var(--mute);font-size:14px}#ggsx-laundry .gw-when{display:grid;grid-template-columns:1fr 1fr;gap:10px}#ggsx-laundry .gw-opt{display:flex;flex-direction:column;gap:2px;text-align:left;background:#fff;border:1.5px solid #ddd6cc;border-radius:14px;padding:12px 14px;margin:0}#ggsx-laundry .gw-opt small{color:var(--mute);font-size:13px}#ggsx-laundry .gw-date{display:flex;flex-direction:column;gap:6px;margin-top:12px;font-size:13px;font-weight:700;color:#3a3a3a;max-width:260px}#ggsx-laundry input,#ggsx-laundry textarea{width:100%;font:inherit;font-weight:400;font-size:16px;color:var(--ink);background:#fff;border:1.5px solid #cfc9c1;border-radius:12px;padding:11px 12px;outline:0;-webkit-appearance:none;appearance:none;margin:0}#ggsx-laundry input{min-height:46px}#ggsx-laundry textarea{resize:vertical;min-height:84px;display:block}#ggsx-laundry input:focus,#ggsx-laundry textarea:focus{border-color:var(--o)}#ggsx-laundry .gw-est{position:sticky;top:96px}#ggsx-laundry .gw-est h2{font-size:20px;margin:0 0 12px}#ggsx-laundry .gw-rows div{display:flex;justify-content:space-between;gap:12px;padding:4px 0;font-size:14px}#ggsx-laundry .gw-rows b{white-space:nowrap}#ggsx-laundry .gw-rows .gw-tot{border-top:1px solid var(--line);margin-top:6px;padding-top:10px;font-size:17px}#ggsx-laundry .gw-tot b{color:var(--o)}#ggsx-laundry .gw-small{margin:10px 0 14px;color:var(--mute);font-size:12.5px;line-height:1.45}#ggsx-laundry .gw-btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;border:0;border-radius:999px;background:var(--o);color:#fff;font-weight:700;font-size:15px;text-align:center;margin:0;transition:background .15s}#ggsx-laundry .gw-btn:hover{background:var(--od)}#ggsx-laundry .gw-btn.gw-s{background:#fff;color:var(--ink);border:1.5px solid #d8d1c8}#ggsx-laundry .gw-btn.gw-s:hover{border-color:var(--ink)}#ggsx-laundry .gw-add{width:100%}#ggsx-laundry .gw-link{display:block;margin:10px auto 0;border:0;background:0 0;padding:4px;color:var(--mute);font-size:13px;text-decoration:underline}#ggsx-laundry .gw-msg{font-size:14px;font-weight:700;margin:0 0 10px}#ggsx-laundry .gw-msg:empty{display:none}#ggsx-laundry .gw-msg.ok{color:#1e7a3a}#ggsx-laundry .gw-msg.bad{color:#d93025}#ggsx-laundry .gw-done{margin-top:14px;padding-top:14px;border-top:1px solid var(--line)}#ggsx-laundry .gw-done p{font-size:14px;color:#3a3a3a;margin:0 0 10px}#ggsx-laundry .gw-btns{display:flex;flex-direction:column;gap:8px}#ggsx-laundry .gw-h2{font-size:24px;margin:40px 0 14px}#ggsx-laundry .gw-how{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}#ggsx-laundry .gw-how li{display:flex;flex-direction:column;gap:4px;background:#fff;border:1.5px solid var(--line);border-radius:16px;padding:16px;margin:0}#ggsx-laundry .gw-how i{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:#e3f2f5;color:var(--t);font:700 14px/1 Arial,sans-serif;margin:0 0 6px}#ggsx-laundry .gw-how span{color:var(--mute);font-size:14px}#ggsx-laundry .gw-cross{margin:28px 0 0;font-size:14px;color:var(--mute)}#ggsx-laundry .gw-cross button{border:0;background:0 0;padding:0 0 0 8px;font-weight:700;color:var(--o)}@media (max-width:860px){#ggsx-laundry{padding:18px 0 120px}#ggsx-laundry .gw-w{padding:0 16px}#ggsx-laundry h1{font-size:28px}#ggsx-laundry .gw-lead{font-size:15px}#ggsx-laundry .gw-top{grid-template-columns:minmax(0,1fr)}#ggsx-laundry .gw-pic{display:none}#ggsx-laundry .gw-grid{grid-template-columns:minmax(0,1fr);gap:14px}#ggsx-laundry .gw-card{padding:16px;border-radius:18px}#ggsx-laundry .gw-bags,#ggsx-laundry .gw-how,#ggsx-laundry .gw-when{grid-template-columns:minmax(0,1fr)}#ggsx-laundry .gw-bag{display:grid;grid-template-columns:44px minmax(0,1fr) auto;grid-template-areas:'i t p' 'i a p' 'i x p';column-gap:12px;align-items:center;padding:12px 14px 12px 12px}#ggsx-laundry .gw-ic{grid-area:i;margin:0;height:auto;justify-content:center}#ggsx-laundry .gw-bt{grid-area:t}#ggsx-laundry .gw-bag small{grid-area:a}#ggsx-laundry .gw-bx{grid-area:x}#ggsx-laundry .gw-bp{grid-area:p;margin:0;padding:0}#ggsx-laundry .gw-bag.on:after{display:none}#ggsx-laundry .gw-date{max-width:none}#ggsx-laundry .gw-est{position:static}#ggsx-laundry .gw-bask .gw-btn{width:100%}#ggsx-laundry .gw-h2{font-size:21px;margin:30px 0 12px}}");

/* ===== GrocerGoSx Shop 24 Laundry 2 Engine (b50e9a01-c25c-4e19-9104-e5566d30d3ee, rev 2) ===== */
__ggsxB("b50e9a01-c25c-4e19-9104-e5566d30d3ee#0");
try {
!function(){var e=window,t=document,n=e.GGSX_LAUNDRY={path:'/laundry',shop:'/shop-now',id:'laundry:wf',name:'Laundry, wash & fold',img:'https://static.wixstatic.com/media/85c3c2_f0a0967bf1bf4ccf8ce77c0d1d5cdd3a~mv2.jpg',rate:2.95,each:20,max:10,days:180,wa:'590690779119',bags:[{k:'s',t:'Small bag',lb:8,x:'A few days of clothes'},{k:'m',t:'Medium bag',lb:15,x:'About a week for one person'},{k:'l',t:'Large bag',lb:25,x:'A family week, towels or bedding'}],copy:{eyebrow:'Laundry service',title:'Laundry, wash & fold',lead:'We pick up your laundry, wash and fold it, and bring it back. {rate} per lb, weighed at pickup, plus {each} to collect and {each} to return.',rideT:'Order it on its own or with your shopping.',ride:' Laundry has no basket minimum and no Service Fee. With a grocery, stocking or restaurant order, we take the bag when we deliver. Questions? ',waLink:'Message us',waText:'Hi GrocerGoSx, I’d like laundry pickup (wash & fold).',s1:'Bag size',s2:'How many bags?',s3:'When do you need it back?',s4:'Care notes (optional)',about:'about ',inTotal:' in total',less:'One bag less',more:'One bag more',noRush:'No rush',noRushX:'We’ll message you to arrange the return',byDay:'By a certain day',byDayX:'Pick the latest day you need it back',backBy:'Back by',notesPh:'Cold wash, unscented detergent, delicates, hang-dry items…',estTitle:'Your estimate',wash:'Wash & fold',coll:'Laundry collection',ret:'Laundry return',total:'Estimated total',weigh:'Weighed at pickup: you pay {rate} per lb for the actual weight. No Service Fee and no basket minimum on laundry.',add:'Add laundry to basket',update:'Update laundry in basket',remove:'Remove laundry from basket',added:'Laundry added to your basket.',updated:'Laundry updated in your basket.',removed:'Laundry removed from your basket.',addedX:'Check out now, or add groceries or a pickup and we’ll take the bag when we deliver.',readyX:'Your basket has your order in it too, so you can check out now.',picAlt:'Folded white towels in a laundry basket',needDay:'Pick the day you need it back.',fail:'That didn’t save. Please try again.',shop:'Shop groceries',go:'View basket & checkout',inBasket:' in your basket',item:' item',items:' items',howT:'How it works',how:[['Add it to your basket','Pick a bag size and when you need it back, then check out.'],['We pick it up and weigh it','On the day you choose, or when we deliver your order. You pay for the actual weight.'],['Washed, folded, returned','Back at your door, folded and fresh.']],oneRun:'Everything goes in one basket and one delivery:',links:[['Shop groceries','/shop-now'],['Restaurants','/restaurants'],['Pharmacy','/pharmacy']],noRushTag:'no rush',backTag:'back by ',weighTag:'weighed at pickup',notesTag:'notes: '}},a='ggsx_basket',o=null,s=null,i={},r=null;function l(e,n,a){var o,s=t.createElement(e);if(n)for(o in n)null!=n[o]&&('class'===o?s.className=n[o]:'text'===o?s.textContent=n[o]:'on'===o.slice(0,2)?s.addEventListener(o.slice(2),n[o]):s.setAttribute(o,n[o]));return(a||[]).forEach((function(e){e&&s.appendChild('string'==typeof e?t.createTextNode(e):e)})),s}function d(e){return'$'+(Math.round(100*e)/100).toFixed(2)}function c(e){return d(e).replace('.00','')}function u(e){return Math.round(100*e)/100}function h(e){return!!e&&(/^laundry:/.test(e.id||'')||/^laundry, wash/i.test(e.name||''))}function b(t){if(o&&null!=o[t]&&''!==o[t])return n=o[t],parseFloat(String(null==n?'':n).replace(/[^0-9.-]/g,''));var n;try{return e.GGSX_MORE.setting(t,NaN)}catch(e){return NaN}}function g(){var e=b('laundry_per_lb');return e>0?e:n.rate}function p(e){var t=new Date;return t.setDate(t.getDate()+e),t.getFullYear()+'-'+('0'+(t.getMonth()+1)).slice(-2)+'-'+('0'+t.getDate()).slice(-2)}function w(e){location.assign(e)}function y(){try{var e=JSON.parse(localStorage.getItem(a)||'null');if(e&&e.items)return e}catch(e){}return{v:1,items:{}}}function m(t){t.t=Date.now();try{localStorage.setItem(a,JSON.stringify(t))}catch(e){return!1}try{e.dispatchEvent(new CustomEvent('ggsx-basket'))}catch(e){}return!0}function f(){var e,t=y();for(e in t.items)if(h(t.items[e])&&t.items[e].n>0)return t.items[e];return null}function k(e){return n.bags.filter((function(t){return t.k===e}))[0]||n.bags[1]||n.bags[0]}function v(){return u(k(r.bag).lb*g())}function x(){if('by'!==r.when||!r.back)return n.copy.noRushTag;var e=new Date(r.back+'T12:00:00');return n.copy.backTag+e.toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'})}function C(){var e=k(r.bag),t=n.copy,a=r.notes.split('').map((function(e){return e<' '?' ':e})).join('').replace(/  +/g,' ').trim();return[e.t+', '+t.about+e.lb+' lb',x(),t.weighTag].concat(a?[t.notesTag+a.slice(0,160)]:[]).join(' · ')}function L(e){var n={s:26,m:32,l:38}[e]||32,a=l('span',{class:'gw-ic','aria-hidden':'true'});function o(e,n){var a,o=t.createElementNS('http://www.w3.org/2000/svg',e);for(a in n)o.setAttribute(a,n[a]);return o}var s=o('svg',{viewBox:'0 0 24 24',width:n,height:n,fill:'none',stroke:'currentColor','stroke-width':'1.7','stroke-linecap':'round','stroke-linejoin':'round'});return['M9 2.5h6l-1.6 3.2h-2.8z','M10.6 5.7C6.3 7.6 4.2 11.6 4.7 15.6c.4 3.2 2.8 5.4 7.3 5.4s6.9-2.2 7.3-5.4c.5-4-1.6-8-5.9-9.9','M9 13.5c1.8 1.2 4.2 1.2 6 0'].forEach((function(e){s.appendChild(o('path',{d:e}))})),a.appendChild(s),a}function T(e,t,n){return l('div',{class:'gw-st'},[l('h3',{},[l('i',{text:String(e)}),t]),n])}function E(e,t){i.msg.textContent=e,i.msg.className='gw-msg'+(t?' '+t:'')}function S(){if(i.strip){var e,t,a=y(),o=0,s=0;for(e in a.items)(t=a.items[e])&&t.n>0&&(o+=t.n,s+=t.n*(+t.price||0));i.strip.hidden=!o,i.strip.firstChild.textContent=o+(1===o?n.copy.item:n.copy.items)+' · '+d(s)+n.copy.inBasket}}function _(){if(i.est){var e,t=n.copy,a=g(),s=(e=b('laundry_fee_each_way'))>=0?e:n.each,p=k(r.bag),w=u(v()*r.n),m=f(),x=b('whatsapp');i.lead.textContent=t.lead.split('{rate}').join(c(a)).split('{each}').join(c(s)),x>0&&(i.wa.href='https://wa.me/'+x+'?text='+encodeURIComponent(t.waText)),n.bags.forEach((function(e){var t=e.k===r.bag,n=i.bags[e.k];n.el.classList.toggle('on',t),n.el.setAttribute('aria-checked',t?'true':'false'),n.price.textContent='≈ '+d(u(e.lb*a))})),i.n.textContent=r.n,i.minus.disabled=r.n<=1,i.plus.disabled=r.n>=n.max,i.lb.textContent=t.about+p.lb*r.n+' lb'+t.inTotal,['any','by'].forEach((function(e){var t=r.when===e;i.when[e].classList.toggle('on',t),i.when[e].setAttribute('aria-checked',t?'true':'false')})),i.dateRow.hidden='by'!==r.when,i.est.innerHTML='',[[t.wash+' · '+r.n+' '+p.t.toLowerCase()+(1===r.n?'':'s')+' ('+t.about+p.lb*r.n+' lb)',w],[t.coll,s],[t.ret,s]].forEach((function(e){i.est.appendChild(l('div',{},[l('span',{text:e[0]}),l('b',{text:d(e[1])})]))})),i.est.appendChild(l('div',{class:'gw-tot'},[l('span',{text:t.total}),l('b',{text:d(w+2*s)})])),i.small.textContent=t.weigh.replace('{rate}',c(a))+(o&&o.laundry_note?' '+o.laundry_note:''),i.btn.textContent=m?t.update:t.add,i.btn.className='gw-btn gw-add'+(m?' gw-s':''),i.rm.hidden=!m,i.done.hidden=!m;var C,L=!1,T=y().items;for(C in T)T[C]&&T[C].n>0&&!h(T[C])&&(L=!0);i.doneT.textContent=L?t.readyX:t.addedX}}function M(){var e=n.copy;if(r.notes=i.notes.value.trim(),'by'!==r.when||r.back&&!(r.back<p(1))){var t=!!f();!function(){var e,t=y(),a=0,o=null;for(e in t.items)a=Math.max(a,t.items[e].o||0),h(t.items[e])&&(o=o||t.items[e],delete t.items[e]);return t.items[n.id]={id:n.id,n:r.n,name:n.name,size:C(),price:v(),img:n.img,o:o&&o.o?o.o:a+1,lau:{bag:r.bag,back:'by'===r.when?r.back:'',notes:r.notes}},m(t)}()?E(e.fail,'bad'):(E(t?e.updated:e.added,'ok'),_(),S())}else{E(e.needDay,'bad');try{i.date.focus()}catch(e){}}}function R(){!function(){var e,t=y();for(e in t.items)h(t.items[e])&&delete t.items[e];m(t)}(),E(n.copy.removed),_(),S()}function A(){if(function(){for(var e=location.pathname;e.length>1&&'/'===e.charAt(e.length-1);)e=e.slice(0,-1);return e===n.path}()){if(!s||!t.body.contains(s)){var a=t.querySelector('main[id^=PAGE_SECTIONS] > section')||t.querySelector('main > section')||t.querySelector('#SITE_PAGES > div')||t.querySelector('main');a&&(s||function(){var t,a,d=n.copy;a=(t=f())&&t.lau||{},r={bag:k(a.bag||'m').k,n:1,when:a.back?'by':'any',back:a.back||'',notes:a.notes||''},t&&(r.n=Math.max(1,Math.min(n.max,0|t.n))),i={};var c=l('section',{id:'ggsx-laundry'}),u=l('div',{class:'gw-w'});c.appendChild(u),i.lead=l('p',{class:'gw-lead'}),i.wa=l('a',{href:'https://wa.me/'+n.wa+'?text='+encodeURIComponent(d.waText),target:'_blank',rel:'noopener',text:d.waLink}),i.strip=l('div',{class:'gw-bask',hidden:'hidden'},[l('span'),l('button',{type:'button',class:'gw-btn gw-s',text:d.go,onclick:function(){w(n.shop+'#basket')}})]);var h=n.img.split('/media/')[1];u.appendChild(l('div',{class:'gw-top'},[l('div',{},[l('p',{class:'gw-eb',text:d.eyebrow}),l('h1',{text:d.title}),i.lead]),l('img',{class:'gw-pic',alt:d.picAlt,loading:'lazy',src:h?n.img+'/v1/fill/w_640,h_440,al_c,q_80,enc_auto/'+h:n.img})])),u.appendChild(l('p',{class:'gw-note'},[l('b',{text:d.rideT}),d.ride,i.wa])),u.appendChild(i.strip);var b=l('div',{class:'gw-card gw-form'});i.bags={};var g=l('div',{class:'gw-bags',role:'radiogroup','aria-label':d.s1});n.bags.forEach((function(e){var t=l('b',{class:'gw-bp'}),n=l('button',{type:'button',class:'gw-bag',role:'radio','aria-checked':'false',onclick:function(){r.bag=e.k,_()}},[L(e.k),l('span',{class:'gw-bt',text:e.t}),l('small',{text:d.about+e.lb+' lb'}),l('span',{class:'gw-bx',text:e.x}),t]);i.bags[e.k]={el:n,price:t},g.appendChild(n)})),b.appendChild(T(1,d.s1,g)),i.n=l('output',{class:'gw-n'}),i.lb=l('small',{class:'gw-lb'}),i.minus=l('button',{type:'button','aria-label':d.less,text:'−',onclick:function(){r.n=Math.max(1,r.n-1),_()}}),i.plus=l('button',{type:'button','aria-label':d.more,text:'+',onclick:function(){r.n=Math.min(n.max,r.n+1),_()}}),b.appendChild(T(2,d.s2,l('div',{class:'gw-row'},[l('div',{class:'gw-step'},[i.minus,i.n,i.plus]),i.lb]))),i.when={};var y,m=l('div',{class:'gw-when',role:'radiogroup','aria-label':d.s3});function v(){r.back=i.date.value,r.back&&E('')}[['any',d.noRush,d.noRushX],['by',d.byDay,d.byDayX]].forEach((function(e){var t=l('button',{type:'button',class:'gw-opt',role:'radio','aria-checked':'false',onclick:function(){if(r.when=e[0],_(),'by'===e[0]&&!r.back)try{i.date.focus()}catch(e){}}},[l('b',{text:e[1]}),l('small',{text:e[2]})]);i.when[e[0]]=t,m.appendChild(t)})),i.date=l('input',{type:'date',min:p(1),max:p(n.days)}),i.date.value=r.back,i.date.addEventListener('input',v),i.date.addEventListener('change',v),i.dateRow=l('label',{class:'gw-date'},[l('span',{text:d.backBy}),i.date]),b.appendChild(T(3,d.s3,l('div',{},[m,i.dateRow]))),i.notes=l('textarea',{rows:'3',maxlength:'300',placeholder:d.notesPh,'aria-label':d.s4}),i.notes.value=r.notes,i.notes.addEventListener('input',(function(){r.notes=i.notes.value})),b.appendChild(T(4,d.s4,i.notes)),i.est=l('div',{class:'gw-rows'}),i.small=l('p',{class:'gw-small'}),i.msg=l('div',{class:'gw-msg',role:'status'}),i.btn=l('button',{type:'button',class:'gw-btn gw-add',onclick:M}),i.rm=l('button',{type:'button',class:'gw-link',text:d.remove,onclick:R}),i.doneT=l('p'),i.shopB=l('button',{type:'button',class:'gw-btn gw-s',text:d.shop,onclick:function(){w(n.shop)}}),i.goB=l('button',{type:'button',class:'gw-btn',text:d.go,onclick:function(){w(n.shop+'#basket')}}),i.btns=l('div',{class:'gw-btns'},[i.goB,i.shopB]),i.done=l('div',{class:'gw-done',hidden:'hidden'},[i.doneT,i.btns]),u.appendChild(l('div',{class:'gw-grid'},[b,l('aside',{class:'gw-card gw-est'},[l('h2',{text:d.estTitle}),i.est,i.small,i.msg,i.btn,i.rm,i.done])])),u.appendChild(l('h2',{class:'gw-h2',text:d.howT})),u.appendChild(l('ol',{class:'gw-how'},d.how.map((function(e,t){return l('li',{},[l('i',{text:String(t+1)}),l('b',{text:e[0]}),l('span',{text:e[1]})])})))),u.appendChild(l('p',{class:'gw-cross'},[d.oneRun].concat(d.links.map((function(e){return l('button',{type:'button',text:e[0],onclick:function(){w(e[1])}})}))))),s=c,_(),S(),(y=e.GGSX_MORE,y&&y.load?y.load().then((function(e){return o=e&&e.set||{}}),(function(){return null})):Promise.resolve(null)).then((function(){_()}))}(),a.appendChild(s),Array.prototype.forEach.call(a.children,(function(e){e!==s&&(e.style.minHeight='0',e.style.height='0',e.style.overflow='hidden')})))}}else s&&(s.remove(),s=null,i={})}function D(){s&&(_(),S())}function N(){var n=!1;new MutationObserver((function(){n||(n=!0,(e.requestAnimationFrame||setTimeout)((function(){n=!1,A()})))})).observe(t.documentElement,{childList:!0,subtree:!0}),e.addEventListener('ggsx-basket',D),e.addEventListener('storage',(function(e){e.key===a&&D()})),A()}e.__ggsxLaundry||(e.__ggsxLaundry=1,t.body?N():t.addEventListener('DOMContentLoaded',N))}();
} catch (e) { try { console.warn('[GGSX bundle] Shop 24 Laundry 2 Engine', e); } catch (e2) {} }
__ggsxE("b50e9a01-c25c-4e19-9104-e5566d30d3ee#0");

/* ===== GrocerGoSx Shop 25 Grand Total (0a31a09c-6bb1-47c1-9dc3-5bb3f9a0d252, rev 1) ===== */
__ggsxCss("", ".gc-wrap .gc-est .gt-bar{display:flex;justify-content:space-between;align-items:center;gap:12px;margin:10px 0 0;padding:12px 14px;border:2px solid #f4551b;border-radius:12px;background:#fff;font-size:16px}.gc-wrap .gc-est .gt-bar span{font-weight:700;font-size:16px;line-height:1.2;color:#1b1b1b}.gc-wrap .gc-est .gt-bar small,.gp-cout div.t.gt-bar dt small{display:block;margin:2px 0 0;font-size:12px;font-weight:400;line-height:1.3;color:#6b6b6b}.gc-wrap .gc-est .gt-bar b{font-size:24px;line-height:1.1;color:#f4551b;white-space:nowrap}.gc-wrap .gc-est .gt-ph b{color:#b9b0a4}.gp-cout div.t.gt-bar{align-items:center;margin:14px 0 0;padding:14px 16px;border:2px solid #f4551b;border-radius:14px;background:#fff}");
__ggsxB("0a31a09c-6bb1-47c1-9dc3-5bb3f9a0d252#0");
try {
!function(){var t=window,e=document,n=t.GGSX_TOTAL={label:'Grand total',sub:'service incl.',wait:'Shows once your order can be placed',dash:'—'};function a(t,n,a){var o=e.createElement(t);return n&&(o.className=n),null!=a&&(o.textContent=a),o}function o(t){return Array.prototype.slice.call(t.children)}function l(t){t.textContent='',t.appendChild(e.createTextNode(n.label)),t.appendChild(a('small',null,n.sub))}function r(t){var r=o(t),c=null,i=null;if(r.forEach((function(t){t.classList.contains('gt-ph')?i=t:t.classList.contains('gc-tot')&&(c=t)})),c){if(i&&i.remove(),!c.classList.contains('gt-bar')){c.classList.add('gt-bar');var s=c.querySelector('span');s&&l(s)}}else if(!i){var d=a('span');d.appendChild(e.createTextNode(n.label)),d.appendChild(a('small',null,n.wait));var u=a('div','gt-bar gt-ph');u.appendChild(d),u.appendChild(a('b',null,n.dash)),t.appendChild(u)}}function c(t){o(t).forEach((function(t){if(t.classList.contains('t')&&!t.classList.contains('gt-bar')){t.classList.add('gt-bar');var e=t.querySelector('dt');e&&l(e)}}))}function i(t,e){t&&!t.__gt&&(t.__gt=1,new MutationObserver((function(){e(t)})).observe(t,{childList:!0}),e(t))}function s(){Array.prototype.forEach.call(e.querySelectorAll('.gc-wrap .gc-est'),(function(t){i(t,r)})),Array.prototype.forEach.call(e.querySelectorAll('dl.gp-cout'),(function(t){i(t,c)}))}function d(){var n=!1;new MutationObserver((function(){n||(n=!0,(t.requestAnimationFrame||setTimeout)((function(){n=!1,s()})))})).observe(e.documentElement,{childList:!0,subtree:!0}),s()}e.addEventListener('ggsx-checkout-build',(function(t){var e=t.detail||{};e.before&&i(e.before,r)})),e.addEventListener('ggsx-checkout-open',s),t.__ggsxTotal||(t.__ggsxTotal=1,e.body?d():e.addEventListener('DOMContentLoaded',d))}();
} catch (e) { try { console.warn('[GGSX bundle] Shop 25 Grand Total', e); } catch (e2) {} }
__ggsxE("0a31a09c-6bb1-47c1-9dc3-5bb3f9a0d252#0");

/* ===== GrocerGoSx Shop 24 Laundry 3 Checkout (872eb2d1-53a6-4be9-805e-93b3a7cd8763, rev 1) ===== */
__ggsxB("872eb2d1-53a6-4be9-805e-93b3a7cd8763#0");
try {
!function(){var e=window,t=document,n=e.GGSX_LAUNDRY_CHECKOUT={coll:'Laundry collection',ret:'Laundry return',each:20,date:'Pickup date *',win:'Pickup window *',lead:'Tell us where and when to pick up your laundry. No payment now: we confirm by message and send your invoice once it’s weighed.'};function r(e){return!!e&&(/^laundry:/.test(e.id||'')||/^laundry, wash/i.test(e.name||''))}function a(){var e=function(){try{var e=JSON.parse(localStorage.getItem('ggsx_basket')||'null');if(e&&e.items)return Object.keys(e.items).map((function(t){return e.items[t]})).filter((function(e){return e&&e.n>0}))}catch(e){}return[]}();return e.length>0&&e.every(r)}function u(){var t=e.GGSX_CHECKOUT;if(t&&!t.__lau){t.__lau=1;var u=t.extraFees,i=t.exempt;t.exempt=function(e){var t=0;(e||[]).forEach((function(e){r(e)&&(t+=(e.n||0)*(+e.price||0))}));try{i&&(t+=+i(e)||0)}catch(e){}return Math.round(100*t)/100};var c=function(t,a){var i=t||[],c=[];try{c=(u?u(i.filter((function(e){return!r(e)})),a):[])||[]}catch(o){}if(i.some(r)){var o=function(){var t=NaN;try{t=e.GGSX_MORE.setting('laundry_fee_each_way',NaN)}catch(e){}return t>=0?t:n.each}();c=c.concat([{label:n.coll,amount:o},{label:n.ret,amount:o}])}return c};try{Object.defineProperty(t,'extraFees',{configurable:!0,enumerable:!0,get:function(){return c},set:function(e){e!==c&&(u=e)}})}catch(e){t.extraFees=c}}var o=e.GGSX_MORE;if(o&&o.setting&&!o.__lauFee){o.__lauFee=1;var l=o.setting;o.setting=function(e){return'service_fee_max'===e&&a()?1e-9:l.apply(this,arguments)}}var s=e.GGSX_EDIT,d=s&&s.h;if(d&&d.estimate&&!d.__lau){d.__lau=1;var f=d.estimate;d.estimate=function(e){var t=f.apply(this,arguments);return t&&e&&e.length&&e.every((function(e){return/^laundry, wash/i.test(String(e&&e[0]||''))}))&&(t.total-=t.fee,t.fee=0),t}}}function i(e){return e&&e.closest?e.closest('label'):null}function c(e,t,n){e&&(e.hasAttribute('data-gw')||e.setAttribute('data-gw',e.textContent),e.textContent=n?t:e.getAttribute('data-gw'))}var o=null;function l(){var r=t.querySelector('.gc-wrap .gc-form');if(r){var u=a(),l=e.GGSX_DYN,s=i(r.querySelector('input[name=date]')),d=i(r.querySelector('select[name=win]')),f=i(r.querySelector('select[name=subs]')),y=r.querySelector('.gc-pi'),g=s&&s.querySelector('span');l&&(o||(o={h:l.dateHere,a:l.dateArrive}),l.dateHere=u?n.date:o.h,l.dateArrive=u?n.date:o.a),g&&(u?g.textContent=n.date:g.textContent===n.date&&(g.textContent=o?o.h:'Delivery date *')),c(d&&d.querySelector('span'),n.win,u),f&&(f.style.display=u?'none':''),y&&(y.style.display=u?'none':''),c(t.querySelector('.gc-wrap .gc-lead'),n.lead,u)}}u(),t.addEventListener('ggsx-checkout-build',u),t.addEventListener('ggsx-checkout-open',(function(){u(),setTimeout(l,0)})),e.addEventListener('ggsx-basket',(function(){setTimeout(l,0)}))}();
} catch (e) { try { console.warn('[GGSX bundle] Shop 24 Laundry 3 Checkout', e); } catch (e2) {} }
__ggsxE("872eb2d1-53a6-4be9-805e-93b3a7cd8763#0");

/* ===== GrocerGoSx Shop 26 Restaurant-only Fee & Client Codes (297ffbbe-6336-4544-b531-37b0c1d5005f, rev 5) ===== */
__ggsxCss("", ".gc-wrap .gc-est .rof-cap{display:block;margin:2px 0 0;font-size:12px;font-weight:400;line-height:1.3;color:#6b6b6b}.gc-wrap .ggc{margin:2px 0 12px}.gc-wrap .ggc[hidden],.gc-wrap .ggc [hidden]{display:none!important}.gc-wrap .ggc-open{background:none;border:0;padding:0;font:inherit;font-size:14px;color:#f4551b;text-decoration:underline;cursor:pointer}.gc-wrap .ggc-box{display:flex;gap:8px;margin-top:8px}.gc-wrap .ggc-box input{flex:1;min-width:0;padding:10px 12px;border:1.5px solid #d9d2c7;border-radius:10px;font:inherit;font-size:16px;text-transform:uppercase;background:#fff;color:#1b1b1b}.gc-wrap .ggc-apply{flex:none;padding:10px 16px;border:1.5px solid #f4551b;border-radius:10px;background:#fff;color:#f4551b;font:inherit;font-size:15px;font-weight:600;cursor:pointer}.gc-wrap .ggc-msg{display:block;margin-top:6px;font-size:13px;line-height:1.4;color:#6b6b6b}.gc-wrap .ggc-msg.ok{color:#1d7a3a}.gc-wrap .ggc-msg.err{color:#b3261e}.gc-wrap .ggc-rm{background:none;border:0;padding:0 0 0 6px;font:inherit;font-size:13px;color:#6b6b6b;text-decoration:underline;cursor:pointer}");
__ggsxB("297ffbbe-6336-4544-b531-37b0c1d5005f#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxRestOnly) return;
  W.__ggsxRestOnly = 1;
  var S = { dutch: 10, french: 20, rate: 0.15, max: 120, del: 25, delFr: 25 }, SIDE = {};

  function num(v, d) { v = parseFloat(v); return v >= 0 ? v : d; }
  function isFrench(s) { return /french|saint-martin/i.test(String(s || '')); }
  function minFee(french) { return french ? S.french : S.dutch; }

  /* rates and each restaurant's side from the Vendors & Menus sheet (Shop 5 loads and caches it) */
  function load() {
    var M = W.GGSX_MORE;
    if (!M || !M.load) return;
    M.load().then(function (d) {
      var s = (d && d.set) || {};
      S.dutch = num(s.restaurant_only_fee, S.dutch);
      S.french = num(s.restaurant_only_fee_french, S.french);
      S.del = num(s.restaurant_only_delivery, S.del);
      S.delFr = num(s.restaurant_only_delivery_french, S.delFr);
      S.rate = num(s.service_fee_rate, S.rate) || 0.15;
      S.max = num(s.service_fee_max, S.max) || 120;
      ((d && d.vendors) || []).forEach(function (v) {
        var fr = isFrench(v.side);
        if (v.vendor_id) SIDE['id:' + v.vendor_id] = fr;
        if (v.name) SIDE['nm:' + String(v.name).toLowerCase()] = fr;
      });
    }).catch(function () {});
  }

  /* Shop Now checkout (Shop 3): basket lines { id, name, n, price }; restaurant dishes have ids rest:<vendor>:… */
  function checkoutMin(lines, side, dflt) {
    try {
      var rest = 0, other = 0, french = isFrench(side);
      (lines || []).forEach(function (l) {
        if (!l || !((+l.n || 0) > 0)) return;
        var id = String(l.id || '');
        if (/^laundry:/.test(id) || /^laundry, wash/i.test(String(l.name || ''))) return;
        var m = /^rest:([^:]+):/.exec(id);
        if (m) { rest++; if (SIDE['id:' + m[1]]) french = true; }
        else other++;
      });
      var m = rest && !other ? minFee(french) : dflt, c = applied();
      if (c && c.type === 'fee_min' && c.value >= 0) m = Math.min(m, c.value);
      return m;
    } catch (e) { return dflt; }
  }

  /* order editor (Shop 13): lines are [name, …, qty, price]; restaurant dishes end in "(Restaurant name)" */
  /* v1.3: restaurant-only Delivery Fee for Shop 3 */
  function checkoutDel(lines, side) {
    try { var k = kind((lines || []).filter(function (l) { return l && (+l.n || 0) > 0; }), side); return k.only ? (k.french ? S.delFr : S.del) : 0; } catch (e) { return 0; }
  }

  function wrapEstimate() {
    var E = W.GGSX_EDIT, H = E && E.h;
    if (!H || !H.estimate || H.__restOnly) return;
    H.__restOnly = 1;
    var base = H.estimate;
    H.estimate = function (lines, side) {
      var t = base.apply(this, arguments);
      try {
        var V = (E.fees && E.fees.vendors) || {}, nv = 0, other = 0, lau = 0, french = isFrench(side), seen = {};
        (lines || []).forEach(function (l) {
          var name = String((l && l[0]) || ''), amt = (+(l && l[2]) || 0) * (+(l && l[3]) || 0);
          if (/^laundry, wash/i.test(name)) { lau += amt; return; }
          var m = /\(([^()]+)\)\s*$/.exec(name), v = m ? m[1].trim().toLowerCase() : '';
          if (v && V[v]) { if (!seen[v]) { seen[v] = 1; nv++; } if (SIDE['nm:' + v]) french = true; }
          else other++;
        });
        if (t && nv && !other) {
          var fee = Math.min(Math.max(Math.round((t.sub - lau) * S.rate * 100) / 100, minFee(french)), S.max);
          t.total += fee - t.fee;
          t.fee = fee;
          var dl = french ? S.delFr : S.del;
          t.total += dl - (+t.del || 0);
          t.del = dl;
        }
      } catch (e) {}
      return t;
    };
  }

  /* client codes (v1.2): the Codes tab of the Vendors & Menus sheet; the applied code is kept for this browser tab until the order is sent */
  var KEY = 'ggsx_client_code', CODES = null, CTXT = { open: 'Have a client code?', ph: 'Enter code', apply: 'Apply', checking: 'Checking…', ok: 'Code {c} applied.', bad: 'That code isn’t valid.', fail: 'Couldn’t check the code. Please try again.', rm: 'Remove', cap: 'Client code ' };
  function norm(s) { return String(s == null ? '' : s).replace(/\s+/g, '').toUpperCase(); }
  function applied() { try { return JSON.parse(sessionStorage.getItem(KEY) || 'null'); } catch (e) { return null; } }
  function today() {
    try { return new Date().toLocaleDateString('en-CA', { timeZone: 'America/Lower_Princes' }); }
    catch (e) { var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); }
  }
  function loadCodes() {
    if (CODES) return CODES;
    var id = (W.GGSX_MORE && W.GGSX_MORE.sheetId) || '1-h6W54Wbscz_5zMAVU0myRr0PCYoVW_sJZo4XWe2MXE';
    CODES = fetch('https://docs.google.com/spreadsheets/d/' + id + '/gviz/tq?tqx=out:json&headers=1&sheet=Codes&t=' + Date.now(), { cache: 'no-store' })
      .then(function (r) { return r.text(); })
      .then(function (t) {
        var j = JSON.parse(t.slice(t.indexOf('(') + 1, t.lastIndexOf(')'))), cols = j.table.cols.map(function (c) { return String(c.label || '').trim().toLowerCase(); });
        return (j.table.rows || []).map(function (r) {
          var o = {};
          (r.c || []).forEach(function (c, i) { var v = c ? c.v : ''; if (typeof v === 'string' && /^Date\(/.test(v) && c.f) v = c.f; o[cols[i]] = v; });
          return o;
        });
      });
    CODES.catch(function () { CODES = null; });
    return CODES;
  }
  function rerender() {
    var s = D.querySelector('.gc-wrap select[name=side]');
    if (s) s.dispatchEvent(new Event('input', { bubbles: true }));
    setTimeout(paint, 0);
  }
  function codeUi(form) {
    var est = form.querySelector('.gc-est');
    if (!est) return null;
    var ui = form.querySelector('.ggc');
    if (ui) return ui;
    ui = D.createElement('div'); ui.className = 'ggc';
    ui.innerHTML = '<button type="button" class="ggc-open"></button><div class="ggc-box" hidden><input type="text" autocomplete="off" autocapitalize="characters" spellcheck="false"><button type="button" class="ggc-apply"></button></div><small class="ggc-msg" role="status"></small>';
    var open = ui.querySelector('.ggc-open'), box = ui.querySelector('.ggc-box'), inp = box.querySelector('input'), btn = box.querySelector('.ggc-apply'), msg = ui.querySelector('.ggc-msg');
    open.textContent = CTXT.open; inp.placeholder = CTXT.ph; btn.textContent = CTXT.apply;
    function say(t, cls) { msg.className = 'ggc-msg' + (cls ? ' ' + cls : ''); msg.textContent = t || ''; }
    function show() {
      var c = applied();
      if (c) {
        open.hidden = true; box.hidden = true; say(CTXT.ok.replace('{c}', c.code), 'ok');
        var rm = D.createElement('button'); rm.type = 'button'; rm.className = 'ggc-rm'; rm.textContent = CTXT.rm;
        rm.onclick = function () { try { sessionStorage.removeItem(KEY); } catch (e) {} show(); rerender(); };
        msg.appendChild(rm);
      } else { open.hidden = false; say(''); }
    }
    open.onclick = function () { open.hidden = true; box.hidden = false; inp.focus(); };
    function go() {
      var want = norm(inp.value);
      if (!want) return;
      say(CTXT.checking);
      loadCodes().then(function (rows) {
        var t = today(), row = rows.filter(function (r) {
          return norm(r.code) === want && /^(true|yes|y|1|x|✓|✔)$/i.test(String(r.active).trim()) && (!r.expires || String(r.expires).trim() >= t);
        })[0], v = row ? parseFloat(row.value) : NaN, type = row ? String(row.type || 'fee_min').trim().toLowerCase() : '';
        if (!row || type !== 'fee_min' || !(v >= 0)) { say(CTXT.bad, 'err'); return; }
        try { sessionStorage.setItem(KEY, JSON.stringify({ code: want, type: type, value: v })); } catch (e) {}
        show(); rerender();
      }).catch(function () { say(CTXT.fail, 'err'); });
    }
    btn.onclick = go;
    inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); go(); } });
    est.parentNode.insertBefore(ui, est);
    show();
    return ui;
  }
  function syncUi() {
    var form = D.querySelector('.gc-wrap .gc-form') || D.querySelector('.gc-wrap form');
    if (!form) return;
    var ui = codeUi(form), est = form.querySelector('.gc-est');
    if (!ui || !est) return;
    var want = getComputedStyle(est).display === 'none';
    if (ui.hidden !== want) ui.hidden = want;
  }
  D.addEventListener('submit', function (e) {
    var f = e.target, c = applied();
    if (!c || !f || !f.classList || !f.classList.contains('gc-form')) return;
    var n = f.querySelector('textarea[name=notes]');
    if (n && n.value.indexOf(CTXT.cap + c.code) < 0) n.value = (n.value ? n.value.replace(/\s+$/, '') + '\n' : '') + CTXT.cap + c.code;
  }, true);
  D.addEventListener('ggsx-checkout-submit', function () { setTimeout(function () { try { sessionStorage.removeItem(KEY); } catch (e) {} }, 4000); });

  /* checkout display (v1.1): restaurant-only baskets show the Service Fee amount and rule; the summary line names menu prices */
  var TXT = { cap: 'Restaurant order: 15%, min ', fr: ' (French side)', grocer: ' at GrocerGoSx prices', one: ' at the menu price', many: ' at menu prices', mixed: ' at GrocerGoSx and menu prices' };
  function basket() {
    try {
      var b = JSON.parse(localStorage.getItem('ggsx_basket') || 'null');
      return b && b.items ? Object.keys(b.items).map(function (k) { return b.items[k]; }).filter(function (e) { return e && (+e.n || 0) > 0; }) : [];
    } catch (e) { return []; }
  }
  function kind(lines, side) {
    var rest = 0, other = 0, french = isFrench(side);
    lines.forEach(function (l) {
      var id = String(l.id || '');
      if (/^laundry:/.test(id) || /^laundry, wash/i.test(String(l.name || ''))) return;
      var m = /^rest:([^:]+):/.exec(id);
      if (m) { rest++; if (SIDE['id:' + m[1]]) french = true; } else other++;
    });
    return { only: rest > 0 && !other, any: rest > 0, french: french };
  }
  function money(n) { return '$' + (Math.round(n * 100) / 100).toFixed(2); }
  function amount(el) {
    var m = /(\d[\d,]*(?:\.\d+)?)/.exec(String((el && el.textContent) || '').replace(/,/g, ''));
    return m ? parseFloat(m[1]) : NaN;
  }
  function paint() {
    var wrap = D.querySelector('.gc-wrap');
    if (!wrap) return;
    var sideEl = wrap.querySelector('select[name=side]'), k = kind(basket(), sideEl ? sideEl.value : '');
    var sum = wrap.querySelector('.gc-sum');
    if (sum && k.any) {
      var t = sum.textContent, i = t.lastIndexOf(TXT.grocer);
      if (i > -1 && i === t.length - TXT.grocer.length) sum.textContent = t.slice(0, i) + (k.only ? (/^1 item\b/.test(t) ? TXT.one : TXT.many) : TXT.mixed);
    }
    syncUi();
    var est = wrap.querySelector('.gc-est'), code = applied();
    if (!est || (!k.only && !code)) return;
    var feeRow = null, excl = NaN, grand = NaN;
    Array.prototype.forEach.call(est.children, function (r) {
      var s = r.querySelector('span'), label = s && s.firstChild ? String(s.firstChild.textContent || '').trim() : '';
      if (/^Taxes \/ Service Fee/.test(label)) feeRow = r;
      else if (/^Total \(service excl\.\)/.test(label)) excl = amount(r.querySelector('b'));
      if (r.classList.contains('gc-tot')) grand = amount(r.querySelector('b'));
    });
    if (!feeRow || feeRow.getAttribute('data-rof')) return;
    var fee = Math.round((grand - excl) * 100) / 100, b = feeRow.querySelector('b'), s = feeRow.querySelector('span');
    if (!(fee > 0) || !b || !s) return;
    feeRow.setAttribute('data-rof', '1');
    b.textContent = money(fee);
    var cap = D.createElement('small');
    cap.className = 'rof-cap';
    cap.textContent = code ? CTXT.cap + code.code : TXT.cap + '$' + minFee(k.french) + (k.french ? TXT.fr : '');
    s.appendChild(cap);
  }
  function watch() {
    var wrap = D.querySelector('.gc-wrap');
    if (!wrap) return;
    [wrap.querySelector('.gc-est'), wrap.querySelector('.gc-sum')].forEach(function (el, i) {
      if (el && !el.__rof12) {
        el.__rof12 = 1;
        new MutationObserver(paint).observe(el, i ? { childList: true, characterData: true, subtree: true } : { childList: true });
      }
    });
    paint();
  }
  D.addEventListener('click', function (e) { if (e.target && e.target.closest && e.target.closest('.gc-wrap')) setTimeout(syncUi, 60); }, true);
  D.addEventListener('change', function (e) { if (e.target && e.target.closest && e.target.closest('.gc-wrap')) setTimeout(syncUi, 60); }, true);
  W.GGSX_REST_ONLY = { text: TXT, paint: paint, codes: CTXT, applied: applied };

  function hook() {
    var C = W.GGSX_CHECKOUT;
    if (C && !C.minFee) C.minFee = checkoutMin;
    if (C && !C.delFee) C.delFee = checkoutDel;
    wrapEstimate();
  }

  load();
  hook();
  D.addEventListener('ggsx-checkout-build', function () { hook(); setTimeout(watch, 0); });
  D.addEventListener('ggsx-checkout-open', function () { hook(); setTimeout(watch, 0); setTimeout(watch, 400); });
  W.addEventListener('ggsx-basket', function () { setTimeout(paint, 0); });
  W.addEventListener('load', hook);
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 26 Restaurant-only Fee & Client Codes', e); } catch (e2) {} }
__ggsxE("297ffbbe-6336-4544-b531-37b0c1d5005f#0");

/* ===== GrocerGoSx Shop 27 Restaurant Hours (e52c9570-becd-441e-afb4-085f5b59aefd, rev 1) ===== */
__ggsxCss("", "\n.gm-sheet .gs-add[disabled],.gm-sheet .gm-qty button[disabled],.gm-sheet .gm-btn[disabled]{opacity:.45;cursor:not-allowed}\n.gm-sheet .gh-bar{margin:12px 0 2px;padding:10px 12px;border-radius:12px;background:#fdecea;color:#b3261e;font-size:14px;line-height:1.4}\n.gc-wrap .gh-block{display:none;margin:0 0 12px;background:#fdecea;color:#b3261e;border:1px solid #f3c4bf;border-radius:12px;padding:10px 12px;font-size:14px;line-height:1.45}\n");
__ggsxB("e52c9570-becd-441e-afb4-085f5b59aefd#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxHours) return;
  W.__ggsxHours = 1;
  var TZ = 'America/Lower_Princes', BYID = {}, BYNAME = {}, CUT = 60;
  var TXT = W.GGSX_HOURS = {
    open: 'Open · orders until {last}',
    closed: 'Closed · orders {a}–{last}',
    bar: '{n} isn’t taking orders right now. Orders open {a}–{last} (island time).',
    add: 'Closed',
    block: '{n} takes orders {a}–{last} (island time). Remove its items, or place your order during those hours.',
    win: ' — restaurant closed'
  };

  function nowMin() {
    try {
      var h = 0, m = 0;
      new Intl.DateTimeFormat('en-GB', { timeZone: TZ, hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date()).forEach(function (x) {
        if (x.type === 'hour') h = +x.value;
        if (x.type === 'minute') m = +x.value;
      });
      return (h % 24) * 60 + m;
    } catch (e) { var d = new Date(); return d.getHours() * 60 + d.getMinutes(); }
  }
  function parse(s) {
    var m = /^\s*(\d{1,2})(?::(\d{2}))?\s*[-–]\s*(\d{1,2})(?::(\d{2}))?\s*$/.exec(String(s == null ? '' : s));
    if (!m) return null;
    var a = +m[1] * 60 + (+m[2] || 0), b = +m[3] * 60 + (+m[4] || 0);
    if (b <= a) b += 1440;
    return { a: a, b: b };
  }
  function fmt(x) {
    x = ((x % 1440) + 1440) % 1440;
    var h = Math.floor(x / 60), m = x % 60;
    return (h % 12 || 12) + (m ? ':' + ('0' + m).slice(-2) : '') + (h < 12 ? ' AM' : ' PM');
  }
  function state(r) {
    var t = nowMin(), last = r.b - CUT;
    if (last <= r.a) last = r.b;
    if (t < r.a && r.b > 1440 && t + 1440 < last) t += 1440;
    return { open: t >= r.a && t < last, a: r.a, last: last };
  }
  function fill(s, v, st) { return s.replace('{n}', v.name).replace('{a}', fmt(st.a)).replace('{last}', fmt(st.last)); }

  function load() {
    var M = W.GGSX_MORE;
    if (!M || !M.load) return;
    M.load().then(function (d) {
      var c = parseFloat(d && d.set && d.set.restaurant_last_order_min);
      if (c >= 0) CUT = c;
      ((d && d.vendors) || []).forEach(function (v) {
        var r = parse(v.hours);
        if (!r) return;
        var o = { id: v.vendor_id, name: v.name, r: r };
        if (v.vendor_id) BYID[v.vendor_id] = o;
        if (v.name) BYNAME[String(v.name).trim().toLowerCase()] = o;
      });
      paintAll();
    }).catch(function () {});
  }

  /* the small line under a restaurant's name: keep what Shop 5/6/11 wrote and add the status */
  function status(sm, v) {
    if (!sm) return;
    var base = sm.getAttribute('data-gh-base');
    if (base == null) { base = sm.textContent; sm.setAttribute('data-gh-base', base); }
    var st = state(v.r), want = (base ? base + ' · ' : '') + fill(st.open ? TXT.open : TXT.closed, v, st);
    if (sm.textContent !== want) sm.textContent = want;
  }
  function cards() {
    Array.prototype.forEach.call(D.querySelectorAll('.gm-vendor'), function (b) {
      var nm = b.querySelector('.gm-vn'), v = nm && BYNAME[nm.textContent.trim().toLowerCase()];
      if (v) status(b.querySelector('.gm-vt small'), v);
    });
  }
  function sheet() {
    var s = D.querySelector('.gm-sheet[data-v]'), v = s && BYID[s.getAttribute('data-v')];
    if (!v) return;
    var st = state(v.r), body = s.querySelector('.gm-body'), bar = s.querySelector('.gh-bar');
    status(s.querySelector('.gm-ht small'), v);
    if (!st.open && body && !bar) { bar = D.createElement('p'); bar.className = 'gh-bar'; body.insertBefore(bar, body.firstChild); }
    if (bar) { if (st.open) bar.parentNode.removeChild(bar); else if (bar.textContent !== fill(TXT.bar, v, st)) bar.textContent = fill(TXT.bar, v, st); }
    Array.prototype.forEach.call(s.querySelectorAll('.gs-add, .gm-qty button[aria-label=More], .gm-opts .gm-btn'), function (b) {
      if (!st.open) {
        if (!b.getAttribute('data-gh-off')) {
          b.setAttribute('data-gh-off', '1');
          b.disabled = true;
          if (b.classList.contains('gs-add')) { b.setAttribute('data-gh-t', b.textContent); b.textContent = TXT.add; }
        }
      } else if (b.getAttribute('data-gh-off')) {
        b.removeAttribute('data-gh-off');
        b.disabled = false;
        var t = b.getAttribute('data-gh-t');
        if (t != null) { b.textContent = t; b.removeAttribute('data-gh-t'); }
      }
    });
  }

  /* Shop Now checkout */
  function basket() {
    try {
      var b = JSON.parse(localStorage.getItem('ggsx_basket') || 'null');
      return b && b.items ? Object.keys(b.items).map(function (k) { return b.items[k]; }).filter(function (e) { return e && (+e.n || 0) > 0; }) : [];
    } catch (e) { return []; }
  }
  function inBasket() {
    var seen = {}, out = [];
    basket().forEach(function (l) {
      var m = /^rest:([^:]+):/.exec(String(l.id || ''));
      if (m && BYID[m[1]] && !seen[m[1]]) { seen[m[1]] = 1; out.push(BYID[m[1]]); }
    });
    return out;
  }
  function closedIn() { return inBasket().filter(function (v) { return !state(v.r).open; }); }
  function checkout() {
    var form = D.querySelector('.gc-wrap .gc-form');
    if (!form) return;
    var rs = inBasket(), closed = closedIn(), btn = form.querySelector('button[type=submit]'), box = form.querySelector('.gh-block');
    if (!box) {
      box = D.createElement('div'); box.className = 'gh-block'; box.setAttribute('role', 'status');
      if (btn && btn.parentNode) btn.parentNode.insertBefore(box, btn); else form.appendChild(box);
    }
    if (closed.length) {
      var t = fill(TXT.block, closed[0], state(closed[0].r));
      if (box.textContent !== t) box.textContent = t;
      if (box.style.display !== 'block') box.style.display = 'block';
      if (btn) {
        btn.setAttribute('data-gh-off', '1');
        if (!btn.disabled) btn.disabled = true;
        if (!btn.__gh) {
          btn.__gh = 1;
          new MutationObserver(function () { if (btn.getAttribute('data-gh-off') && !btn.disabled) btn.disabled = true; }).observe(btn, { attributes: true, attributeFilter: ['disabled'] });
        }
      }
    } else {
      if (box.style.display !== 'none') { box.style.display = 'none'; box.textContent = ''; }
      if (btn && btn.getAttribute('data-gh-off')) { btn.removeAttribute('data-gh-off'); btn.disabled = !!(W.GGSX_MIN && W.GGSX_MIN.below && W.GGSX_MIN.below()); }
    }
    var sel = form.querySelector('select[name=win]'), restored = false;
    if (sel) Array.prototype.forEach.call(sel.options, function (o) {
      var m = /(\d{1,2}):(\d{2})\s*[–-]\s*(\d{1,2}):(\d{2})/.exec(o.value || '');
      if (!m) return;
      var a = +m[1] * 60 + +m[2], b = +m[3] * 60 + +m[4];
      var bad = rs.some(function (v) { return !(a < v.r.b && b > v.r.a); });
      if (bad && !o.getAttribute('data-gh-off')) {
        o.setAttribute('data-gh-off', '1'); o.setAttribute('data-gh-t', o.text);
        o.disabled = true; o.text = o.text + TXT.win;
        if (sel.value === o.value) { sel.value = ''; sel.dispatchEvent(new Event('change', { bubbles: true })); }
      } else if (!bad && o.getAttribute('data-gh-off')) {
        o.text = o.getAttribute('data-gh-t'); o.removeAttribute('data-gh-t'); o.removeAttribute('data-gh-off');
        o.disabled = false; restored = true;
      }
    });
    if (restored) { var dt = form.querySelector('input[name=date]'); if (dt) dt.dispatchEvent(new Event('change', { bubbles: true })); }
  }
  D.addEventListener('submit', function (e) {
    var f = e.target;
    if (!f || !f.classList || !f.classList.contains('gc-form') || !closedIn().length) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    checkout();
    var box = f.querySelector('.gh-block');
    if (box && box.scrollIntoView) box.scrollIntoView({ block: 'center' });
  }, true);

  function paintAll() { cards(); sheet(); checkout(); }
  var busy = false;
  new MutationObserver(function () {
    if (busy) return;
    busy = true;
    (W.requestAnimationFrame || setTimeout)(function () { busy = false; paintAll(); });
  }).observe(D.documentElement, { childList: true, subtree: true });
  D.addEventListener('ggsx-checkout-open', function () { setTimeout(checkout, 60); setTimeout(checkout, 400); });
  D.addEventListener('change', function (e) { if (e.target && e.target.closest && e.target.closest('.gc-wrap')) setTimeout(checkout, 80); }, true);
  W.addEventListener('ggsx-basket', function () { setTimeout(paintAll, 0); });
  setInterval(paintAll, 30000);
  load();
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 27 Restaurant Hours', e); } catch (e2) {} }
__ggsxE("e52c9570-becd-441e-afb4-085f5b59aefd#0");

/* ===== GrocerGoSx Shop 28 Menu Search (f76bc714-cd1e-4741-ad30-a5e4d8d7c10f, rev 1) ===== */
__ggsxCss("", "\n.gm-sheet .gq-wrap{flex:none;padding:10px 20px;border-bottom:1px solid #efeae3;background:#fff}\n.gm-sheet .gq-field{position:relative}\n.gm-sheet .gq-field svg{position:absolute;left:15px;top:50%;width:18px;height:18px;margin-top:-9px;color:#8a837b;pointer-events:none}\n.gm-sheet .gq-in{display:block;width:100%;height:44px;margin:0;font:inherit;font-size:16px;color:#1b1b1b;background:#f6f3ee;border:1.5px solid #e4ddd3;border-radius:999px;padding:0 46px 0 42px;outline:none;-webkit-appearance:none;appearance:none}\n.gm-sheet .gq-in:focus{border-color:#F4551B;background:#fff}\n.gm-sheet .gq-in::-webkit-search-cancel-button,.gm-sheet .gq-in::-webkit-search-decoration{-webkit-appearance:none;display:none}\n.gm-sheet .gq-in::placeholder{color:#8a837b;opacity:1}\n.gm-sheet .gq-x{position:absolute;right:5px;top:50%;width:34px;height:34px;margin-top:-17px;border:0;border-radius:50%;background:#e9e3db;color:#1b1b1b;font-size:20px;line-height:34px;padding:0;display:none}\n.gm-sheet .gq-wrap.on .gq-x{display:block}\n.gm-sheet .gq-n{margin:6px 8px 0;font-size:12px;line-height:1.3;color:#6b6b6b;display:none}\n.gm-sheet .gq-wrap.on .gq-n{display:block}\n.gm-sheet .gq-hide{display:none!important}\n.gm-sheet .gq-none{margin:28px 0;text-align:center;color:#6b6b6b}\n");
__ggsxB("f76bc714-cd1e-4741-ad30-a5e4d8d7c10f#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxMenuSearch) return;
  W.__ggsxMenuSearch = 1;
  var TXT = W.GGSX_MENU_SEARCH = {
    ph: 'Search the menu',
    clear: 'Clear search',
    one: '1 match',
    many: '{c} matches',
    none: 'Nothing on the menu matches “{q}”.'
  };
  var ON = {}, OPTS = [], tries = 0;

  function norm(s) {
    s = String(s == null ? '' : s).toLowerCase();
    try { s = s.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); } catch (e) {}
    return s.replace(/['’]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
  }
  /* every typed word must start a word on the dish (so "ice" finds ice cream, not rice); "rolls" also finds "roll" */
  function has(hay, w) {
    if (hay.indexOf(' ' + w) >= 0) return true;
    return w.length > 3 && w.charAt(w.length - 1) === 's' && hay.indexOf(' ' + w.slice(0, -1) + ' ') >= 0;
  }

  function load() {
    var M = W.GGSX_MORE;
    if (!M || !M.load) { if (tries++ < 40) setTimeout(load, 500); return; }
    M.load().then(function (d) {
      ((d && d.vendors) || []).forEach(function (v) {
        if (v && v.vendor_id && M.truthy(v.menu_search)) ON[v.vendor_id] = 1;
      });
      OPTS = (d && d.options) || [];
      scan();
    }).catch(function () {});
  }

  function scan() {
    var s = D.querySelector('.gm-sheet[data-v]');
    if (!s || s.__gq || !ON[s.getAttribute('data-v')]) return;
    var box = s.querySelector('.gm-box'), body = s.querySelector('.gm-body');
    if (!box || !body) return;
    s.__gq = 1;
    build(s.getAttribute('data-v'), box, body);
  }

  /* the choices a dish offers, by the same rule Shop 6 uses (applies_to = blank, the section or the dish) */
  function choices(vid, sec, item) {
    var a = sec.toLowerCase(), b = item.toLowerCase(), out = [];
    OPTS.forEach(function (o) {
      if (!o || o.vendor_id !== vid) return;
      var t = String(o.applies_to || '').toLowerCase();
      if (!t || t === a || t === b) out.push(o.option);
    });
    return out.join(' ');
  }

  function build(vid, box, body) {
    var wrap = D.createElement('div'), field = D.createElement('div'), inp = D.createElement('input'),
        x = D.createElement('button'), n = D.createElement('p'), none = null, rows = null;
    wrap.className = 'gq-wrap';
    field.className = 'gq-field';
    field.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';
    inp.type = 'search';
    inp.className = 'gq-in';
    inp.placeholder = TXT.ph;
    inp.setAttribute('aria-label', TXT.ph);
    inp.setAttribute('autocomplete', 'off');
    inp.setAttribute('autocorrect', 'off');
    inp.setAttribute('autocapitalize', 'off');
    inp.setAttribute('spellcheck', 'false');
    inp.setAttribute('enterkeyhint', 'search');
    x.type = 'button';
    x.className = 'gq-x';
    x.setAttribute('aria-label', TXT.clear);
    x.textContent = '×';
    n.className = 'gq-n';
    n.setAttribute('aria-live', 'polite');
    field.appendChild(inp);
    field.appendChild(x);
    wrap.appendChild(field);
    wrap.appendChild(n);
    box.insertBefore(wrap, body);

    function index() {
      rows = [];
      var sec = null;
      Array.prototype.forEach.call(body.children, function (el) {
        if (el.tagName === 'H4') { sec = { el: el, name: el.textContent, items: [] }; rows.push(sec); return; }
        if (!el.classList.contains('gm-item')) return;
        if (!sec) { sec = { el: null, name: 'Menu', items: [] }; rows.push(sec); }
        var nm = el.querySelector('.gm-in'), note = el.querySelector('.gm-it small'), name = nm ? nm.textContent : '';
        sec.items.push({ el: el, hay: ' ' + norm([sec.name, name, note ? note.textContent : '', choices(vid, sec.name, name)].join(' ')) + ' ' });
      });
    }

    function run() {
      if (!rows) index();
      var q = inp.value, ws = norm(q).split(' ').filter(Boolean), shown = 0;
      /* keep the sheet the height it opened at, so it doesn't jump as results shrink */
      if (ws.length && !box.__gqh) { box.__gqh = 1; box.style.minHeight = 'min(' + Math.round(box.getBoundingClientRect().height) + 'px, 92vh)'; }
      wrap.classList.toggle('on', !!q);
      rows.forEach(function (sec) {
        var any = false;
        sec.items.forEach(function (it) {
          var ok = ws.every(function (w) { return has(it.hay, w); });
          it.el.classList.toggle('gq-hide', !ok);
          if (ok) { any = true; shown++; }
        });
        if (sec.el) sec.el.classList.toggle('gq-hide', !any);
      });
      n.textContent = ws.length && shown ? (shown === 1 ? TXT.one : TXT.many.replace('{c}', shown)) : '';
      if (ws.length && !shown) {
        if (!none) { none = D.createElement('p'); none.className = 'gq-none'; }
        none.textContent = TXT.none.replace('{q}', q.trim());
        if (!none.parentNode) body.appendChild(none);
      } else if (none && none.parentNode) {
        none.parentNode.removeChild(none);
      }
      body.scrollTop = 0;
    }

    inp.addEventListener('input', run);
    inp.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); inp.blur(); }
      else if (e.key === 'Escape' && inp.value) { e.preventDefault(); e.stopPropagation(); inp.value = ''; run(); }
    });
    x.addEventListener('click', function () { inp.value = ''; run(); inp.focus(); });
  }

  new MutationObserver(scan).observe(D.body, { childList: true });
  load();
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 28 Menu Search', e); } catch (e2) {} }
__ggsxE("f76bc714-cd1e-4741-ad30-a5e4d8d7c10f#0");

/* ===== GrocerGoSx Site Menu Order (d4be7d75-648b-4b26-8177-1195f40045aa, rev 1) ===== */
__ggsxB("d4be7d75-648b-4b26-8177-1195f40045aa#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxMenuOrder) return;
  W.__ggsxMenuOrder = 1;
  var ORDER = W.GGSX_MENU_ORDER = [
    '/', '/shop-now', '/restaurants', '/pharmacy', '/laundry',
    '/services-hub', '/villa-stocking', '/stocking-packages', '/yacht-provisioning', '/concierge-services',
    '/how-it-works', '/pricing', '/service-area', '/partners', '/contact'
  ];

  /* 1. Wix site menu: flex "order" per link, so the menu's own HTML is never moved */
  var css = 'nav.navbar>ul>li{order:99}';
  ORDER.forEach(function (p, i) {
    var sel = p === '/'
      ? 'a[href$="grocergosx.com"],a[href$="grocergosx.com/"]'
      : 'a[href$="' + p + '"],a[href$="' + p + '/"]';
    css += 'nav.navbar>ul>li:has(' + sel + '){order:' + (i + 1) + '}';
  });
  var st = D.createElement('style');
  st.setAttribute('data-ggsx', 'menu-order');
  st.textContent = css;
  (D.head || D.documentElement).appendChild(st);

  /* 2. Phone "More" sheet (App Shell): it copies the menu links in page order each time it opens, so sort that list */
  function pathOf(a) {
    try { return new URL(a.getAttribute('href'), location.href).pathname.replace(/\/+$/, '') || '/'; } catch (e) { return ''; }
  }
  function rank(a) { var i = ORDER.indexOf(pathOf(a)); return i < 0 ? 999 : i; }
  function sortSheet(sheet) {
    var list = sheet.lastElementChild;
    if (!list || list.classList.contains('gg-sheet-h')) return;
    var nav = [], kids = list.children;
    for (var i = 0; i < kids.length; i++) {
      if (kids[i].tagName === 'HR') break;
      if (kids[i].tagName === 'A') nav.push(kids[i]);
    }
    if (nav.length < 2) return;
    var sorted = nav.map(function (a, i) { return { a: a, r: rank(a), i: i }; })
      .sort(function (x, y) { return x.r - y.r || x.i - y.i; });
    if (sorted.every(function (s, i) { return s.a === nav[i]; })) return;
    var after = nav[nav.length - 1].nextSibling;
    sorted.forEach(function (s) { list.insertBefore(s.a, after); });
  }
  var tries = 0;
  (function watch() {
    var sheet = D.querySelector('.gg-sheet');
    if (!sheet) { if (tries++ < 60) setTimeout(watch, 500); return; }
    new MutationObserver(function () { sortSheet(sheet); }).observe(sheet, { childList: true, subtree: true });
    sortSheet(sheet);
  })();
})();
} catch (e) { try { console.warn('[GGSX bundle] Site Menu Order', e); } catch (e2) {} }
__ggsxE("d4be7d75-648b-4b26-8177-1195f40045aa#0");

/* ===== GrocerGoSx Shop 29 Restaurant Pages (e238fbc6-fab9-4159-8848-4bfddb286e94, rev 1) ===== */
__ggsxCss("", "\n.gm-sheet.gr-page{position:static;inset:auto;z-index:auto;display:block;padding:0;background:none;--gr-top:0px;--gr-bot:0px}\n.gm-sheet.gr-page .gm-box{display:block;max-width:none;max-height:none;min-height:0!important;border-radius:0;box-shadow:none;overflow:visible;background:none}\n.gm-sheet.gr-page .gm-head{padding:6px 0 18px;gap:16px;border-bottom:1px solid #efeae3}\n.gm-sheet.gr-page .gm-head .gm-logo{width:72px;height:72px;border-radius:16px}\n.gm-sheet.gr-page .gm-head h3{font-size:34px;line-height:1.1}\n.gm-sheet.gr-page .gm-head small{font-size:14px;margin-top:6px}\n.gm-sheet.gr-page .gm-head .gm-x{display:none}\n.gm-sheet.gr-page .gq-wrap{position:sticky;top:var(--gr-top);z-index:6;padding:12px 0;background:#fff}\n.gm-sheet.gr-page .gm-body{overflow:visible;padding:4px 0 16px}\n.gm-sheet.gr-page .gm-body h4{font-size:18px;margin:22px 0 4px}\n.gm-sheet.gr-page .gm-foot{position:sticky;bottom:var(--gr-bot);z-index:6;justify-content:center;padding:12px 0;border-top:0;background:linear-gradient(rgba(255,255,255,0),#fff 40%);pointer-events:none}\n.gm-sheet.gr-page .gm-foot .gm-btn{flex:0 1 400px;pointer-events:auto;box-shadow:0 8px 24px rgba(244,85,27,.28)}\n#ggsx-more-page .gr-back{display:inline-flex;align-items:center;gap:8px;margin:0 0 16px;padding:9px 16px;border:1.5px solid #e9e4dd;border-radius:999px;background:#fff;color:#1b1b1b;font:inherit;font-weight:700;cursor:pointer}\n#ggsx-more-page .gr-back:hover{border-color:#F4551B;color:#F4551B}\nhtml.gr-on #ggsx-more-page>h1,html.gr-on #ggsx-more-page>.gp-lead,html.gr-on #ggsx-more-page>.gm-vendors,html.gr-on #ggsx-more-page>.gp-cross{display:none!important}\n@media (max-width:860px){\nhtml.gg-m .gm-sheet.gr-page{--gr-top:calc(56px + env(safe-area-inset-top,0px));--gr-bot:calc(64px + env(safe-area-inset-bottom,0px))}\n.gm-sheet.gr-page .gm-head .gm-logo{width:56px;height:56px;border-radius:14px}\n.gm-sheet.gr-page .gm-head h3{font-size:24px}\n.gm-sheet.gr-page .gm-foot{background:#fff;border-top:1px solid #efeae3}\n.gm-sheet.gr-page .gm-foot .gm-btn{flex:1;box-shadow:none}\n}\n");
__ggsxB("e238fbc6-fab9-4159-8848-4bfddb286e94#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxRestPages) return;
  W.__ggsxRestPages = 1;
  var TXT = W.GGSX_REST_PAGES = { back: '← All restaurants', title: '{n} · Order for delivery · GrocerGoSx' };
  var BACK = null, ON = false, baseTitle = null, busy = false;

  function path() { return location.pathname.replace(/\/+$/, '') || '/'; }

  /* old Shop Now links to a restaurant open its page on /restaurants */
  function forward() {
    var m = /^#restaurants\/([^\/?#&]+)/.exec(location.hash);
    if (m && path() === '/shop-now') location.replace('/restaurants#restaurants/' + m[1]);
  }

  function root() {
    var r = D.getElementById('ggsx-more-page');
    return r && r.querySelector('.gm-vendors') ? r : null;
  }
  function topBar() {   /* the phone's fixed orange bar (App Shell); the desktop header scrolls away */
    var bar = D.querySelector('html.gg-m .gg-top');
    return bar && getComputedStyle(bar).display !== 'none' ? bar.getBoundingClientRect().height : 0;
  }
  function toTop() { try { W.scrollTo(0, 0); } catch (e) {} }   /* like a new page: start at the top */

  function enter(s, r) {
    s.classList.add('gr-page');
    var strip = r.querySelector('.gp-bask'), list = r.querySelector('.gm-vendors');
    if (!BACK) {
      BACK = D.createElement('button');
      BACK.type = 'button';
      BACK.className = 'gr-back';
      BACK.textContent = TXT.back;
      BACK.addEventListener('click', function () { location.hash = '#restaurants'; });
    }
    r.insertBefore(BACK, strip || r.firstChild);
    r.insertBefore(s, list);
    D.documentElement.classList.remove('gm-lock');
    D.documentElement.classList.add('gr-on');
    var nm = s.querySelector('.gm-head h3');
    if (baseTitle == null) baseTitle = D.title;
    if (nm) D.title = TXT.title.replace('{n}', nm.textContent);
    if (!ON) { ON = true; toTop(); }
  }

  function leave() {
    if (!ON) return;
    ON = false;
    D.documentElement.classList.remove('gr-on');
    if (BACK && BACK.parentNode) BACK.parentNode.removeChild(BACK);
    if (baseTitle != null) { D.title = baseTitle; baseTitle = null; }
    if (root()) toTop();
  }

  function check() {
    busy = false;
    var s = D.querySelector('.gm-sheet[data-v]'), r = root();
    if (s && r) {
      if (s.parentNode !== r || !s.classList.contains('gr-page') || !BACK || BACK.parentNode !== r) enter(s, r);
      else if (D.documentElement.classList.contains('gm-lock')) D.documentElement.classList.remove('gm-lock');
    } else leave();
  }
  function soon() { if (!busy) { busy = true; Promise.resolve().then(check); } }

  /* typing in the search while scrolled down: bring the results into view */
  D.addEventListener('input', function (e) {
    var t = e.target;
    if (!t || !t.classList || !t.classList.contains('gq-in')) return;
    var s = t.closest('.gm-sheet.gr-page'), body = s && s.querySelector('.gm-body'), wrap = s && s.querySelector('.gq-wrap');
    if (!body || !wrap) return;
    var want = body.getBoundingClientRect().top + (W.pageYOffset || 0) - wrap.getBoundingClientRect().height - topBar();
    if ((W.pageYOffset || 0) > want) W.scrollTo(0, Math.max(0, want));
  }, true);

  forward();
  W.addEventListener('hashchange', function () { forward(); setTimeout(check, 0); });
  new MutationObserver(soon).observe(D.body, { childList: true, subtree: true });
  check();
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 29 Restaurant Pages', e); } catch (e2) {} }
__ggsxE("e238fbc6-fab9-4159-8848-4bfddb286e94#0");

/* ===== GrocerGoSx Shop 30 Restaurant Addresses (83f85b48-9a02-40e3-bec1-9037e96e03b7, rev 1) ===== */
__ggsxCss("", "#ggsx-more-page a.gm-vendor,#ggsx-shop a.gm-vendor{color:inherit;text-decoration:none}#ggsx-more-page a.gm-vendor:focus-visible,#ggsx-shop a.gm-vendor:focus-visible{outline:#F4551B solid 2px;outline-offset:2px}#ggsx-more-page a.gp-btn{text-decoration:none}#ggsx-more-page.gr-solo>.gm-vendors{display:block;padding:8px 0 24px}#ggsx-more-page.gr-solo>.gm-vendors .gp-btn{margin-top:4px}");
__ggsxB("83f85b48-9a02-40e3-bec1-9037e96e03b7#0");
try {
!function(){var e=window,t=document;if(!e.__ggsxRestAddr){e.__ggsxRestAddr=1;var n=e.GGSX_REST_ADDR={pages:{hanami:'/hanami-sushi','rolling-boil':'/rolling-boil',subway:'/subway'},list:'/restaurants',basket:'/shop-now#basket',loading:'Loading the menu…',gone:'This restaurant isn’t taking orders right now.',fail:'Couldn’t load the menu. Please refresh the page.',all:'See all restaurants',item:' item',items:' items',inBasket:' in your basket',go:'View basket & checkout'},i=null,r=null,a=null,o=null,l=null,s='',u='',c=null,d=0,f=!1;t.body?R():t.addEventListener('DOMContentLoaded',R)}function g(e){for(e=String(e||'');e.length>1&&'/'===e.charAt(e.length-1);)e=e.slice(0,-1);return e||'/'}function p(){return g(location.pathname)}function h(t){if(!t||'/'!==t.charAt(0))return!1;var n=(((e.viewerModel||{}).siteFeaturesConfigs||{}).router||{}).routes||null;return n?!!n['.'+t]:t===p()}function m(e){if(!(e=String(e||'').trim()))return'';try{return g(new URL(e,location.origin).pathname)}catch(e){return''}}function v(t){return'/'===t||t===g(n.list)||(e.GGSX_MENU_ORDER||[]).indexOf(t)>=0}function b(e){if(!e)return'';var t,i,r,a=m(e.page),o=[a,a.toLowerCase(),m(n.pages[e.vendor_id])],l=(i=e.name,(r=String(i||'')).normalize&&(r=r.normalize('NFD')),(r=r.split('').filter((function(e){var t=e.charCodeAt(0);return t<768||t>879})).join('')).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,''));for(l&&o.push('/'+l),t=0;t<o.length;t++)if(o[t]&&!v(o[t])&&h(o[t]))return o[t];return''}function y(e){return r?r.vendors.filter((function(t){return t.vendor_id===e}))[0]:null}function C(){var e,t=location.hash;if(0!==t.indexOf('#restaurants/'))return'';e=t.slice(13).split('/')[0].split('?')[0].split('&')[0].split('#')[0];try{e=decodeURIComponent(e)}catch(e){}return e}function S(){var e,t,i=C();return!(!i||(e=y(i),(t=e?b(e):'')||r||h(t=m(n.pages[i]))&&!v(t)||(t=''),!t||t===p()||(setTimeout((function(){location.replace(t)}),0),0)))}function k(e,n,i){var r=t.createElement(e);return n&&(r.className=n),null!=i&&(r.textContent=i),r}function E(){if(o){var e,t,r,a=function(){try{var e=JSON.parse(localStorage.getItem('ggsx_basket')||'null');if(e&&e.items)return e}catch(e){}return{items:{}}}(),l=0,s=0;for(e in a.items)l+=t=+(a.items[e]||{}).n||0,s+=t*(+a.items[e].price||0);o.hidden=!l,o.firstChild.textContent=l+(1===l?n.item:n.items)+' · '+(r=s,i&&i.money?i.money(r):'$'+(Math.round(100*r)/100).toFixed(2))+n.inBasket}}function _(e,t){if(l&&(l.innerHTML='',l.appendChild(k('p','gp-muted',e)),t)){var i=k('a','gp-btn',n.all);i.href=n.list,l.appendChild(i)}}function L(){var e,i;if(s&&(a||(e=k('section','gr-solo'),i=k('button','gp-btn',n.go),e.id='ggsx-more-page',i.type='button',i.addEventListener('click',(function(){location.assign(n.basket)})),(o=k('div','gp-bask')).hidden=!0,o.appendChild(k('span')),o.appendChild(i),(l=k('div','gm-vendors')).appendChild(k('p','gp-muted',n.loading)),e.appendChild(o),e.appendChild(l),E(),a=e),!t.body.contains(a))){var r=t.querySelector('main[id^=PAGE_SECTIONS] > section')||t.querySelector('main > section')||t.querySelector('main');r&&(r.appendChild(a),Array.prototype.forEach.call(r.children,(function(e){e!==a&&(e.style.minHeight='0',e.style.height='0',e.style.overflow='hidden')})))}}function w(){if(s&&i&&i.openMenu&&y(s)){var e=t.querySelector('.gm-sheet[data-v]');e&&e.getAttribute('data-v')===s||i.openMenu(s)}}function x(){r&&Array.prototype.forEach.call(t.querySelectorAll('button.gm-vendor'),(function(e){var t,n,i=e.querySelector('.gm-vn'),a=b((n=i&&i.textContent,n=String(n||'').trim().toLowerCase(),r&&n?r.vendors.filter((function(e){return String(e.name||'').trim().toLowerCase()===n}))[0]:null));if(a&&e.parentNode){for((t=k('a',e.className)).href=a;e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}}))}function A(n){var i=e.GGSX_REST_PAGES;i&&(null==c&&(c=i.title),i.title=n?t.title:c)}function G(){u=p(),S()||(A(!!(s=function(){var e,t=p();for(e in n.pages)if(m(n.pages[e])===t&&h(t))return e;return''}())),s&&L(),i.load().then((function(e){if(r=e,u===p()&&!S()){var t,i,a=(t=p(),((i=r?r.vendors.filter((function(e){return b(e)===t}))[0]:null)?i.vendor_id:'')||s);a&&(s||A(!0),s=a,L(),y(a)?w():_(n.gone,!0)),x()}}),(function(){s&&_(i.copy&&i.copy.fail||n.fail,!1)})))}function N(){if(f=!1,p()!==u)return a&&a.parentNode&&a.parentNode.removeChild(a),a=o=l=null,s='',void G();s&&L(),r&&x()}function R(){(i=e.GGSX_MORE)&&i.load&&i.h?(t.addEventListener('click',(function(e){if(s&&a){var t=e.target&&e.target.closest?e.target.closest('.gr-back,.gm-foot .gm-btn'):null;t&&a.contains(t)&&(e.preventDefault(),e.stopImmediatePropagation(),location.assign(t.classList.contains('gr-back')?n.list:n.basket))}}),!0),e.addEventListener('hashchange',(function(){if(!S()&&s){var e=location.hash,t=C();'#restaurants'===e||'#restaurants/'===e?location.replace(n.list):0===e.indexOf('#basket')?location.replace(n.basket):t&&t!==s?location.replace(n.list+e):setTimeout(w,0)}})),e.addEventListener('ggsx-basket',E),e.addEventListener('storage',(function(e){'ggsx_basket'===e.key&&E()})),new MutationObserver((function(){f||(f=!0,(e.requestAnimationFrame||setTimeout)(N))})).observe(t.documentElement,{childList:!0,subtree:!0}),G()):++d<60&&setTimeout(R,200)}}();
} catch (e) { try { console.warn('[GGSX bundle] Shop 30 Restaurant Addresses', e); } catch (e2) {} }
__ggsxE("83f85b48-9a02-40e3-bec1-9037e96e03b7#0");

/* ===== GrocerGoSx Shop 31 Basket Fix (6b174a00-fa8e-4f74-bb54-dbcd05380819, rev 1) ===== */
__ggsxB("6b174a00-fa8e-4f74-bb54-dbcd05380819#0");
try {
!function(){var t=window;if(document,!t.__ggsxBasketFix){t.__ggsxBasketFix=1;var e='ggsx_basket',i=0;!function e(){var s;!(!(s=t.GGSX_SHOP_API)||s.__fresh||n(location.pathname)===n(t.GGSX_SHOP&&t.GGSX_SHOP.path||'/shop-now')?s:(s.add=a,s.__fresh=1,1))&&++i<40&&setTimeout(e,250)}()}function n(t){for(t=String(t||'');t.length>1&&'/'===t.charAt(t.length-1);)t=t.slice(0,-1);return t||'/'}function a(i,n){if(i&&i.id){n=Math.max(0,Math.min(99,0|n));var a,s=function(){try{var t=JSON.parse(localStorage.getItem(e)||'null');if(t&&t.items)return t}catch(t){}return{v:1,items:{}}}(),r=s.items[i.id],o=0;for(a in s.items)o=Math.max(o,+(s.items[a]||{}).o||0);n?r?r.n=n:s.items[i.id]={id:i.id,n:n,name:i.name,size:i.size||'',price:+i.price||0,img:i.img||'',o:o+1}:delete s.items[i.id],s.v=s.v||1,s.t=Date.now();try{localStorage.setItem(e,JSON.stringify(s))}catch(t){}try{t.dispatchEvent(new CustomEvent('ggsx-basket'))}catch(t){}}}}();
} catch (e) { try { console.warn('[GGSX bundle] Shop 31 Basket Fix', e); } catch (e2) {} }
__ggsxE("6b174a00-fa8e-4f74-bb54-dbcd05380819#0");

/* ===== GrocerGoSx Shop 32 Restaurant Menu Bar (20946a54-50f0-45a2-b2e4-9e1b38ea4dcd, rev 2) ===== */
__ggsxCss("", "\n.gm-sheet.gr-page.gmb-on .gm-foot{display:none}\nhtml.gr-on #ggsx-more-page>.gp-bask{display:none!important}\n.gm-sheet.gr-page .gmb-bar{position:sticky;top:var(--gr-top,0px);z-index:7;background:#fff;padding:10px 0 0;border-bottom:1px solid #efeae3}\n.gm-sheet.gr-page .gmb-bar[hidden]{display:none}\n.gm-sheet.gr-page .gmb-row{display:flex;align-items:flex-start;justify-content:flex-end;gap:10px;padding-bottom:10px}\n.gm-sheet.gr-page .gmb-bar .gq-wrap{position:static;flex:1;min-width:0;padding:0;border:0;background:none}\n.gm-sheet.gr-page .gmb-bk{display:inline-flex;align-items:center;gap:8px;flex:none;height:44px;padding:0 18px 0 14px;border:0;border-radius:999px;background:#F4551B;color:#fff;font:inherit;font-weight:700;font-size:15px;cursor:pointer;white-space:nowrap;box-shadow:0 4px 14px rgba(244,85,27,.25)}\n.gm-sheet.gr-page .gmb-bk[hidden]{display:none}\n.gm-sheet.gr-page .gmb-bk svg{width:20px;height:20px;flex:none}\n.gm-sheet.gr-page .gmb-bk i{font-style:normal;font-weight:400;opacity:.9}\n.gm-sheet.gr-page .gmb-tabs{display:flex;gap:8px;overflow-x:auto;padding:0 0 10px;margin:0;scrollbar-width:none;-webkit-overflow-scrolling:touch;scroll-behavior:smooth}\n.gm-sheet.gr-page .gmb-tabs::-webkit-scrollbar{display:none}\n.gm-sheet.gr-page .gmb-tabs{-webkit-mask-image:linear-gradient(90deg,#000 calc(100% - 28px),transparent);mask-image:linear-gradient(90deg,#000 calc(100% - 28px),transparent)}\n.gm-sheet.gr-page .gmb-tabs[hidden]{display:none}\n.gm-sheet.gr-page .gmb-tab{flex:none;height:34px;padding:0 14px;border:1.5px solid #e4ddd3;border-radius:999px;background:#fff;color:#1b1b1b;font:inherit;font-size:14px;font-weight:600;cursor:pointer;white-space:nowrap}\n.gm-sheet.gr-page .gmb-tab:hover{border-color:#F4551B}\n.gm-sheet.gr-page .gmb-tab.on{background:#F4551B;border-color:#F4551B;color:#fff}\n.gm-sheet.gr-page .gmb-tab[hidden]{display:none}\n.gm-sheet.gr-page .gm-it small{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n.gm-sheet.gr-page .gm-item.gmb-open .gm-it small{display:block}\n.gm-sheet.gr-page .gm-body h4{scroll-margin-top:140px}\n@media (min-width:900px){\n.gm-sheet.gr-page .gm-body{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));column-gap:36px;align-items:start}\n.gm-sheet.gr-page .gm-body>*:not(.gm-item){grid-column:1/-1}\n}\n@media (max-width:860px){\n.gm-sheet.gr-page .gmb-bk{height:44px;padding:0 14px 0 12px}\n.gm-sheet.gr-page .gmb-bk .gmb-w{display:none}\n}\n");
__ggsxB("20946a54-50f0-45a2-b2e4-9e1b38ea4dcd#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxMenuBar) return;
  W.__ggsxMenuBar = 1;
  var TXT = W.GGSX_MENU_BAR = {
    item: ' item', items: ' items', view: 'View basket', short: 'Search',
    basket: '/shop-now#basket',   /* Shop 30's address wins when it is there */
    minSections: 3, minItems: 15
  };
  var BAG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 8h12l-1 12H7L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>';
  var CUR = null, busy = false, spyBusy = false;

  function el(tag, cls, txt) { var e = D.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  function money(v) { var M = W.GGSX_MORE; return M && M.money ? M.money(v) : '$' + (Math.round(v * 100) / 100).toFixed(2); }
  function basketUrl() { var A = W.GGSX_REST_ADDR; return (A && A.basket) || TXT.basket; }
  function topBar() {
    var bar = D.querySelector('html.gg-m .gg-top');
    return bar && getComputedStyle(bar).display !== 'none' ? bar.getBoundingClientRect().height : 0;
  }
  function readBasket() {
    try { var b = JSON.parse(localStorage.getItem('ggsx_basket') || 'null'); if (b && b.items) return b; } catch (e) {}
    return { items: {} };
  }

  /* ---------- the frozen bar ---------- */
  function build(s) {
    var box = s.querySelector('.gm-box'), body = s.querySelector('.gm-body');
    if (!box || !body) return null;
    var bar = el('div', 'gmb-bar'), row = el('div', 'gmb-row'), bk = el('button', 'gmb-bk'), tabs = el('div', 'gmb-tabs');
    bk.type = 'button';
    bk.innerHTML = BAG + '<span class="gmb-c"></span><i class="gmb-t"></i><span class="gmb-w"></span>';
    bk.addEventListener('click', function () { location.assign(basketUrl()); });
    tabs.setAttribute('role', 'tablist');
    row.appendChild(bk);
    bar.appendChild(row);
    bar.appendChild(tabs);
    box.insertBefore(bar, body);
    var st = { s: s, box: box, body: body, bar: bar, row: row, bk: bk, tabs: tabs, heads: [] };
    s.classList.add('gmb-on');
    tabsBuild(st);
    return st;
  }

  function adoptSearch(st) {   /* Shop 28's search box joins the frozen bar */
    var w = st.box.querySelector(':scope > .gq-wrap');
    if (w && w.parentNode !== st.row) st.row.insertBefore(w, st.bk);
  }

  function paint(st) {
    if (!st) return;
    var b = readBasket(), n = 0, sum = 0, k, it;
    for (k in b.items) { it = b.items[k] || {}; n += +it.n || 0; sum += (+it.n || 0) * (+it.price || 0); }
    st.bk.hidden = !n;
    st.bk.querySelector('.gmb-c').textContent = n + (n === 1 ? TXT.item : TXT.items);
    st.bk.querySelector('.gmb-t').textContent = '· ' + money(sum);
    st.bk.querySelector('.gmb-w').textContent = '· ' + TXT.view;
    st.bk.setAttribute('aria-label', TXT.view + ': ' + n + (n === 1 ? TXT.item : TXT.items) + ', ' + money(sum));
    st.bar.hidden = !n && !st.row.querySelector('.gq-wrap') && st.tabs.hidden;
    var inp = st.row.querySelector('.gq-in'), narrow = W.matchMedia && W.matchMedia('(max-width:860px)').matches;
    if (inp) inp.placeholder = narrow && n ? TXT.short : ((W.GGSX_MENU_SEARCH && W.GGSX_MENU_SEARCH.ph) || 'Search the menu');
  }

  /* ---------- section tabs ---------- */
  function label(t) { return String(t || '').replace(/\s*\([^)]*\)/g, '').replace(/\s+/g, ' ').trim(); }
  function tabsBuild(st) {
    var hs = Array.prototype.filter.call(st.body.children, function (e) { return e.tagName === 'H4'; });
    var items = st.body.querySelectorAll('.gm-item').length;
    st.heads = hs;
    st.tabs.innerHTML = '';
    if (hs.length < TXT.minSections || items < TXT.minItems) { st.tabs.hidden = true; return; }
    st.tabs.hidden = false;
    hs.forEach(function (h) {
      var b = el('button', 'gmb-tab', label(h.textContent));
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.addEventListener('click', function () { jump(st, h); });
      h.__gmbTab = b;
      st.tabs.appendChild(b);
    });
  }
  function stuckBottom(st) { return topBar() + st.bar.getBoundingClientRect().height; }
  function jump(st, h) {
    var y = h.getBoundingClientRect().top + (W.pageYOffset || 0) - stuckBottom(st) - 6;
    try { W.scrollTo({ top: Math.max(0, y), behavior: 'smooth' }); } catch (e) { W.scrollTo(0, Math.max(0, y)); }
    on(st, h);
  }
  function on(st, h) {
    st.heads.forEach(function (x) { if (x.__gmbTab) x.__gmbTab.classList.toggle('on', x === h); });
    var t = h && h.__gmbTab;
    if (!t) return;
    var L = t.offsetLeft, R = L + t.offsetWidth, sl = st.tabs.scrollLeft, w = st.tabs.clientWidth;
    if (L < sl + 12 || R > sl + w - 12) st.tabs.scrollLeft = Math.max(0, L - 24);
  }
  function spy() {
    spyBusy = false;
    var st = CUR;
    if (!st || st.tabs.hidden || !st.heads.length) return;
    var line = stuckBottom(st) + 14, cur = null, first = null;
    st.heads.forEach(function (h) {
      var hidden = h.classList.contains('gq-hide');
      if (h.__gmbTab) h.__gmbTab.hidden = hidden;
      if (hidden) return;
      if (!first) first = h;
      if (h.getBoundingClientRect().top <= line) cur = h;
    });
    on(st, cur || first);
  }
  function spySoon() { if (!spyBusy) { spyBusy = true; (W.requestAnimationFrame || setTimeout)(spy); } }

  /* ---------- keep up with the page ---------- */
  function check() {
    busy = false;
    var s = D.querySelector('.gm-sheet.gr-page[data-v]');
    if (!s) return;   /* the page can be re-drawn for a moment; keep the bar we built */
    var fresh = false;
    if (s.__gmb && s.contains(s.__gmb.bar)) { if (CUR !== s.__gmb) { CUR = s.__gmb; fresh = true; } }
    else { CUR = build(s); if (CUR) s.__gmb = CUR; fresh = true; }
    if (!CUR) return;
    var had = !!CUR.row.querySelector('.gq-wrap');
    adoptSearch(CUR);
    var n = CUR.body.querySelectorAll('.gm-item').length;
    if (n !== CUR.n) { CUR.n = n; tabsBuild(CUR); fresh = true; }
    if (fresh || had !== !!CUR.row.querySelector('.gq-wrap')) { paint(CUR); spySoon(); }
  }
  function soon() { if (!busy) { busy = true; Promise.resolve().then(check); } }

  /* a dish's full description shows while its Customize panel is open */
  D.addEventListener('click', function (e) {
    var it = e.target && e.target.closest ? e.target.closest('.gm-sheet.gr-page .gm-item') : null;
    if (it) setTimeout(function () { var o = it.querySelector('.gm-opts'); it.classList.toggle('gmb-open', !!(o && o.offsetParent)); }, 0);
  }, true);

  /* typing in the search while scrolled down: show the results under the frozen bar */
  D.addEventListener('input', function (e) {
    var t = e.target, st = CUR;
    if (!st || !t || !t.classList || !t.classList.contains('gq-in') || !st.bar.contains(t)) return;
    var want = st.body.getBoundingClientRect().top + (W.pageYOffset || 0) - stuckBottom(st);
    if ((W.pageYOffset || 0) > want) W.scrollTo(0, Math.max(0, want));
    spySoon();
  }, true);

  W.addEventListener('scroll', spySoon, { passive: true });
  W.addEventListener('resize', spySoon);
  W.addEventListener('ggsx-basket', function () { paint(CUR); });
  W.addEventListener('storage', function (e) { if (e.key === 'ggsx_basket') paint(CUR); });
  new MutationObserver(soon).observe(D.body, { childList: true, subtree: true });
  check();
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 32 Restaurant Menu Bar', e); } catch (e2) {} }
__ggsxE("20946a54-50f0-45a2-b2e4-9e1b38ea4dcd#0");

/* ===== GrocerGoSx Shop 33 Fee Split & Checkout Totals (85daf06a-5759-4480-843c-48b6c948eac1, rev 6) ===== */
__ggsxCss("", ".gc-wrap .gc-est .gfs-hide,.gp-cout .gfs-hide{display:none!important}.gc-wrap .gfs-note{margin:8px 2px 0;font-size:12px;line-height:1.45;color:#6b6b6b}.gc-wrap .gfs-note[hidden]{display:none}");
__ggsxB("85daf06a-5759-4480-843c-48b6c948eac1#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxFeeSplit) return;
  W.__ggsxFeeSplit = 1;
  var S = { del: 25, delFr: 25, min: 80, planned: 70, max: 120, rate: 0.15, ph: 48, onTop: 0, sf: 80, pf: 70, smin: 0, rateStd: 0.15, ratePlan: 0.15, dp: -1, dpf: -1 };
  function derive() {   /* v1.4: shopping_fee / planned_fee typed as a percentage are the run's rate, with service_fee_min as the $ minimum */
    S.rateStd = S.sf <= 1 ? S.sf : S.rate; S.ratePlan = S.pf <= 1 ? S.pf : S.rate;
    S.min = S.sf <= 1 ? S.smin : S.sf; S.planned = S.pf <= 1 ? S.smin : S.pf;
  }
  var S2 = { rmin: 10, rminFr: 20, rdel: 25 };
  var TXT = W.GGSX_FEE_SPLIT = {
    fee: 'Service fee', del: 'Delivery fee', total: 'Total', sub: 'taxes included',
    run: 'Prices include taxes. Service and delivery together are 15% of your basket, never less than {min} ({planned} when you book 48 hours ahead) and never more than {max}.',
    rest: 'Menu prices, taxes included. Restaurant orders: 15% service fee, at least {rmin} ({rminFr} on the French side), plus {rdel} delivery.'
  };
  if (W.GGSX_TOTAL) { W.GGSX_TOTAL.label = TXT.total; W.GGSX_TOTAL.sub = TXT.sub; }   /* Shop 25's Total bar */

  function num(v, d) { var s = String(v == null ? '' : v), x = parseFloat(s); return x >= 0 ? (/%/.test(s) ? x / 100 : x) : d; }   /* '15%' = 0.15; 0 counts */
  function pick(s, a, b) { return s[a] != null && String(s[a]).trim() !== '' ? s[a] : s[b]; }   /* new key name first, old one as a fallback */
  function french(s) { return /french|saint-martin/i.test(String(s || '')); }
  function dPlan(fr) { return fr ? (S.dpf >= 0 ? S.dpf : S.delFr) : (S.dp >= 0 ? S.dp : S.del); }   /* v1.5: delivery_fee_planned(_french); not set = the standard fee */
  function del(side) { var fr = french(side); return planned() ? dPlan(fr) : (fr ? S.delFr : S.del); }
  function load() {
    var M = W.GGSX_MORE;
    if (!M || !M.load) return;
    M.load().then(function (d) {
      var s = (d && d.set) || {};
      S.del = num(pick(s, 'delivery_fee', 'delivery_in_fee'), S.del);
      S.delFr = num(pick(s, 'delivery_fee_french', 'delivery_in_fee_french'), S.delFr);
      S.onTop = /^(1|true|yes|y|on|x)$/i.test(String(s.delivery_on_top == null ? '' : s.delivery_on_top).trim()) ? 1 : 0;   /* v1.3 */
      S.sf = num(s.shopping_fee, S.sf);
      S.pf = num(s.planned_fee, S.pf);
      S.smin = num(s.service_fee_min, S.smin);
      S.dp = num(s.delivery_fee_planned, -1);
      S.dpf = num(s.delivery_fee_planned_french, -1);
      S.max = num(s.service_fee_max, S.max);
      S.rate = num(s.service_fee_rate, S.rate);
      S.ph = num(s.planned_hours, S.ph);
      S2.rmin = num(s.restaurant_only_fee, S2.rmin);
      S2.rminFr = num(s.restaurant_only_fee_french, S2.rminFr);
      S2.rdel = num(s.restaurant_only_delivery, S2.rdel);
      derive();
    }).catch(function () {});
  }

  /* checkout lines: {id, n, name, price}; restaurant dishes have ids rest:<vendor>:…; laundry is left out, as in Shop 26 */
  function kind(lines) {
    var rest = 0, other = 0;
    (lines || []).forEach(function (l) {
      if (!l || !((+l.n || 0) > 0)) return;
      var id = String(l.id || '');
      if (/^laundry:/.test(id) || /^laundry, wash/i.test(String(l.name || ''))) return;
      if (/^rest:/.test(id)) rest++; else other++;
    });
    return { restOnly: rest > 0 && !other, any: rest + other > 0 };
  }

  /* Shop 3 asks GGSX_MORE.setting for service_fee_rate, shopping_fee and planned_fee: answer with this run's rate and $ minimum */
  function planned() {   /* as Shop 3 works it out: a partner link, or a delivery window planned_hours or more ahead */
    try { if (W.GGSX_REF && W.GGSX_REF.get().name) return true; } catch (e) {}
    var f = D.querySelector('.gc-wrap'), d = f && f.querySelector('input[name=date]'), w = f && f.querySelector('select[name=win]');
    var n = /^(\d{4})-(\d{2})-(\d{2})/.exec(d ? d.value : ''), a = /(\d{1,2}):(\d{2})/.exec(w ? w.value : '');
    return !!n && new Date(+n[1], n[2] - 1, +n[3], a ? +a[1] : 8, a ? +a[2] : 30) - Date.now() >= S.ph * 36e5;
  }
  function wrapSetting() {
    var M = W.GGSX_MORE;
    if (!M || !M.setting || M.setting.__rate) return;
    var base = M.setting;
    M.setting = function (key) {
      var v = base.apply(this, arguments);
      try {
        if (key === 'shopping_fee') return S.sf <= 1 ? S.smin : v;
        if (key === 'planned_fee') return S.pf <= 1 ? S.smin : v;
        if (key === 'service_fee_rate' && !kind(basket()).restOnly) { var p = planned(); if (p ? S.pf <= 1 : S.sf <= 1) return p ? S.pf : S.sf; }
      } catch (e) {}
      return v;
    };
    M.setting.__rate = 1;
  }

  function hook() {
    var C = W.GGSX_CHECKOUT;
    if (!C) return;
    if (C.delFee && !C.delFee.__split) {
      var base = C.delFee;
      C.delFee = function (lines, side) {
        var d = 0, k = kind(lines);
        try { d = +base.apply(this, arguments) || 0; } catch (e) {}
        return d || (k.any && !k.restOnly ? del(side) : 0);
      };
      C.delFee.__split = 1;
    }
    if (!C.delIn) C.delIn = function (lines) { var k = kind(lines); return !S.onTop && k.any && !k.restOnly; };   /* delivery_on_top 1: added, not taken out of the fee */
  }

  /* order editor (Shop 13): lines are [name, …, qty, price]; a run whose delivery is still 0 gets it carved out of its fee */
  function wrapEdit() {
    var E = W.GGSX_EDIT, H = E && E.h;
    if (!H || !H.estimate || H.__split) return;
    H.__split = 1;
    var base = H.estimate;
    H.estimate = function (lines, side) {
      var t = base.apply(this, arguments);
      try {
        if (t && !(+t.del > 0) && +t.sub > 0) {
          var d = del(side);
          if (S.onTop) { t.del = d; t.total = Math.round((+t.total + d) * 100) / 100; }   /* on top of the fee */
          else if (+t.fee > 0) { d = Math.min(d, +t.fee); t.fee = Math.round((+t.fee - d) * 100) / 100; t.del = d; }   /* out of the fee */
        }
      } catch (e) {}
      return t;
    };
  }

  /* the totals: plain labels, no "service excl." row, one note under them */
  function basket() {
    try {
      var b = JSON.parse(localStorage.getItem('ggsx_basket') || 'null'), out = [], k;
      if (b && b.items) for (k in b.items) out.push(b.items[k]);
      return out;
    } catch (e) { return []; }
  }
  function money(n) { return '$' + (Math.round(n * 100) / 100).toFixed(n % 1 ? 2 : 0); }
  function fill(t) {
    return t.replace('{min}', money(S.min)).replace('{planned}', money(S.planned)).replace('{max}', money(S.max))
      .replace('{rmin}', money(S2.rmin)).replace('{rminFr}', money(S2.rminFr)).replace('{rdel}', money(S2.rdel));
  }
  function pct(x) { return Math.round(x * 1000) / 10 + '%'; }
  function runNote() {   /* reads well whatever the Settings say, a 0 included */
    var t = (S.onTop ? 'Prices include taxes. The service fee is ' : 'Prices include taxes. Service and delivery together are ') + pct(S.rateStd) + ' of your basket' + (S.ratePlan !== S.rateStd ? ' (' + pct(S.ratePlan) + ' when you book ' + S.ph + ' hours ahead)' : '');
    if (S.min > 0) t += ', never less than ' + money(S.min) + (S.planned > 0 && S.planned !== S.min ? ' (' + money(S.planned) + ' when you book ' + S.ph + ' hours ahead)' : '');
    else if (S.planned > 0) t += ', at least ' + money(S.planned) + ' when you book ' + S.ph + ' hours ahead';
    if (S.max > 0) t += (S.min > 0 || S.planned > 0 ? ' and' : ',') + ' never more than ' + money(S.max);
    if (S.onTop) t += '; delivery is ' + money(S.del) + (S.delFr !== S.del ? ' (' + money(S.delFr) + ' on the French side)' : '') + ' on top'
      + (dPlan(0) !== S.del || dPlan(1) !== S.delFr ? ', ' + money(dPlan(0)) + (dPlan(1) !== dPlan(0) ? ' Dutch side, ' + money(dPlan(1)) + ' French side' : '') + ' when you book ' + S.ph + ' hours ahead' : '');
    return t + '.';
  }
  function restNote() {
    var t = 'Menu prices, taxes included. Restaurant orders: ' + pct(S.rate) + ' service fee';
    if (S2.rmin > 0) t += ', at least ' + money(S2.rmin) + (S2.rminFr !== S2.rmin ? ' (' + money(S2.rminFr) + ' on the French side)' : '');
    return t + (S2.rdel > 0 ? (S2.rmin > 0 ? ',' : '') + ' plus ' + money(S2.rdel) + ' delivery.' : '.');
  }
  function relabel(rows, tag) {
    var dash = false, delRow = null;
    rows.forEach(function (r) {
      var s = r.querySelector(tag), t = s && s.firstChild && s.firstChild.nodeType === 3 ? s.firstChild : null, x = t ? t.textContent.trim() : '';
      var v = r.querySelector(tag === 'span' ? 'b' : 'dd');
      if (x === 'Taxes / Service Fee' || x === TXT.fee) { if (x !== TXT.fee) t.textContent = TXT.fee; dash = !!(v && /^\s*—\s*$/.test(v.textContent)); }
      else if (x === 'Delivery Fee' || x === TXT.del) { if (x !== TXT.del) t.textContent = TXT.del; delRow = v; }
      else if (/^Total \(service excl\.\)$/.test(x)) r.classList.add('gfs-hide');
      if (r.classList.contains('gt-bar') && !r.classList.contains('gt-ph') && t) {   /* Shop 25's Total bar */
        var sm = s.querySelector('small');
        if (t.textContent !== TXT.total) t.textContent = TXT.total;
        if (sm && sm.textContent !== TXT.sub) sm.textContent = TXT.sub;
      }
    });
    if (dash && delRow && delRow.textContent !== '—') delRow.textContent = '—';   /* order can't be placed yet: no amounts */
  }
  function present() {
    if (W.GGSX_TOTAL && W.GGSX_TOTAL.label !== TXT.total) { W.GGSX_TOTAL.label = TXT.total; W.GGSX_TOTAL.sub = TXT.sub; }
    var est = D.querySelector('.gc-wrap .gc-est');
    if (est) {
      var rows = Array.prototype.slice.call(est.children), k = kind(basket());
      relabel(rows, 'span');
      Array.prototype.forEach.call(est.querySelectorAll('.rof-cap'), function (c) { if (/^Restaurant order/.test(c.textContent)) c.classList.add('gfs-hide'); });
      var note = est.parentNode && est.parentNode.querySelector(':scope > .gfs-note');
      if (!note && est.parentNode) {
        note = D.createElement('p');
        note.className = 'gfs-note';
        var after = est.nextElementSibling && est.nextElementSibling.classList.contains('gc-min') ? est.nextElementSibling : est;
        est.parentNode.insertBefore(note, after.nextSibling);
      }
      if (note) { note.hidden = !k.any; note.textContent = k.restOnly ? restNote() : runNote(); }
      if (!est.__gfs) { est.__gfs = 1; new MutationObserver(present).observe(est, { childList: true, subtree: true }); }   /* subtree: Shop 26 adds its line inside a row */
    }
    Array.prototype.forEach.call(D.querySelectorAll('dl.gp-cout'), function (dl) {   /* the /pricing estimator */
      relabel(Array.prototype.slice.call(dl.children), 'dt');
      if (!dl.__gfs) { dl.__gfs = 1; new MutationObserver(present).observe(dl, { childList: true, subtree: true }); }
    });
  }

  function all() { hook(); wrapSetting(); wrapEdit(); present(); }
  load();
  all();
  var tries = 0;
  (function again() { all(); if (++tries < 20) setTimeout(again, 500); })();
  D.addEventListener('ggsx-checkout-build', function () { setTimeout(all, 0); });
  D.addEventListener('ggsx-checkout-open', function () { setTimeout(all, 0); });
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 33 Fee Split & Checkout Totals', e); } catch (e2) {} }
__ggsxE("85daf06a-5759-4480-843c-48b6c948eac1#0");

/* ===== GrocerGoSx Shop 35 Sub-category Bar (4d149ea5-db0d-490f-bdda-17e998cd6d34, rev 1) ===== */
__ggsxCss("", "\n#ggsx-shop .gs-main .gs-subs{flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;overscroll-behavior-x:contain;-webkit-overflow-scrolling:touch}\n#ggsx-shop .gs-main .gs-subs::-webkit-scrollbar{display:none}\n#ggsx-shop .gs-main .gs-subs .gs-chip{flex:none}\n#ggsx-shop .gs-sb{position:sticky;top:var(--gs-sbt,84px);z-index:40;margin:-12px 0 6px;padding:8px 0 6px;background:var(--gs-sbg,#fff)}\n#ggsx-shop .gs-sb .gs-subs{--fl:0px;--fr:0px;margin:0 -4px;padding:4px;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 var(--fl),#000 calc(100% - var(--fr)),transparent 100%);mask-image:linear-gradient(90deg,transparent 0,#000 var(--fl),#000 calc(100% - var(--fr)),transparent 100%)}\n#ggsx-shop .gs-sb.gs-l .gs-subs{--fl:64px}\n#ggsx-shop .gs-sb.gs-r .gs-subs{--fr:64px}\n#ggsx-shop .gs-sb .gs-chip:hover{border-color:var(--o)}\n#ggsx-shop .gs-sb .gs-chip:focus-visible{outline:2px solid var(--o);outline-offset:2px}\n#ggsx-shop .gs-sba{position:absolute;top:50%;z-index:2;display:none;align-items:center;justify-content:center;width:34px;height:34px;margin-top:-16px;padding:0;border:1.5px solid #cfc9c1;border-radius:999px;background:#fff;color:var(--ink);box-shadow:0 2px 8px rgba(27,27,27,.14)}\n#ggsx-shop .gs-sba svg{display:block;width:16px;height:16px}\n#ggsx-shop .gs-sba:hover{border-color:var(--o);color:var(--o)}\n#ggsx-shop .gs-sba.p{left:0}\n#ggsx-shop .gs-sba.n{right:0}\n@media (min-width:861px) and (hover:hover){\n#ggsx-shop .gs-sb.gs-l .gs-sba.p,#ggsx-shop .gs-sb.gs-r .gs-sba.n{display:flex}\n}\n@media (min-width:861px){\n#ggsx-shop .gs-sb::before{content:\"\";position:absolute;left:-12px;right:-12px;bottom:100%;height:calc(var(--gs-sbt,84px) + 2px);background:inherit;opacity:0;transition:opacity .15s;pointer-events:none}\n#ggsx-shop .gs-sb.gs-stuck::before{opacity:1}\n#ggsx-shop .gs-sb.gs-stuck{box-shadow:0 12px 12px -14px rgba(27,27,27,.28)}\n}\n@media (max-width:860px){\n#ggsx-shop .gs-sb{margin:-8px -16px 10px;padding:2px 0 4px;background:var(--bg)}\n#ggsx-shop .gs-sb .gs-subs{margin:0;padding:4px 16px}\n#ggsx-shop .gs-sb.gs-l .gs-subs{--fl:28px}\n#ggsx-shop .gs-sb.gs-r .gs-subs{--fr:36px}\n#ggsx-shop .gs-sb.gs-stuck{box-shadow:0 10px 10px -10px rgba(27,27,27,.3)}\n}\n@media (prefers-reduced-motion:reduce){#ggsx-shop .gs-sb::before{transition:none}}\n");
__ggsxB("4d149ea5-db0d-490f-bdda-17e998cd6d34#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxSubBar) return;
  W.__ggsxSubBar = 1;
  var TXT = W.GGSX_SUB_BAR = {
    label: 'Sub-categories',
    prev: 'Earlier sub-categories',
    next: 'More sub-categories',
    step: 0.75,   /* how far an arrow slides the row, as a share of the row's width */
    keep: true    /* a tap in the frozen row keeps the row frozen and shows the products from the top */
  };
  var BAR = null, HOST = null, gone = false, busy = false, ticking = false, keepUntil = 0, keepY = null;
  var RO = W.ResizeObserver ? new ResizeObserver(function () { if (BAR) edges(BAR); }) : null;

  function shop() { return D.getElementById('ggsx-shop'); }
  function narrow() { return W.matchMedia ? W.matchMedia('(max-width:860px)').matches : W.innerWidth <= 860; }
  function calm() { return !!(W.matchMedia && W.matchMedia('(prefers-reduced-motion: reduce)').matches); }
  function sticky(cs) { return cs.position === 'sticky' || cs.position === '-webkit-sticky'; }
  function arrow(d) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="' +
      (d < 0 ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7') + '"/></svg>';
  }

  /* where the row freezes: under the shop's search bar on phones; level with the department list and basket on computers */
  function topLine(s) {
    var t = 0, cs;
    if (narrow()) {
      var h = s.querySelector('.gs-head');
      if (h && sticky(cs = getComputedStyle(h))) t = (parseFloat(cs.top) || 0) + h.getBoundingClientRect().height;
      else {
        var tb = D.querySelector('html.gg-m .gg-top');
        t = tb && getComputedStyle(tb).display !== 'none' ? tb.getBoundingClientRect().height : 0;
      }
      return Math.max(0, Math.floor(t));
    }
    var n = s.querySelector('.gs-nav');
    if (n && sticky(cs = getComputedStyle(n))) t = (parseFloat(cs.top) || 0) - 12;
    return Math.max(0, Math.round(t));
  }
  function setTop(s) {
    var v = topLine(s) + 'px';
    if (s.style.getPropertyValue('--gs-sbt') !== v) s.style.setProperty('--gs-sbt', v);
    return parseFloat(v);
  }

  /* arrows and faded edges only where the row has more to show */
  function edges(sb) {
    var r = sb.querySelector('.gs-subs');
    if (!r || !r.clientWidth) return;
    r.__sl = r.scrollLeft;
    var max = r.scrollWidth - r.clientWidth;
    sb.classList.toggle('gs-l', r.scrollLeft > 2);
    sb.classList.toggle('gs-r', r.scrollLeft < max - 2);
  }
  /* the chosen sub-category is brought into view in the middle of the row */
  function center(r) {
    var on = r.querySelector('.gs-chip.on');
    if (!on) return;
    [].forEach.call(r.querySelectorAll('.gs-chip'), function (c) {
      if (c === on) c.setAttribute('aria-current', 'true'); else c.removeAttribute('aria-current');
    });
    var a = r.getBoundingClientRect(), b = on.getBoundingClientRect();
    var x = r.scrollLeft + (b.left - a.left) - (r.clientWidth - b.width) / 2;
    r.scrollLeft = Math.max(0, Math.min(x, r.scrollWidth - r.clientWidth));
  }
  function wrap(subs) {
    var sb = D.createElement('div');
    sb.className = 'gs-sb';
    subs.parentNode.insertBefore(sb, subs);
    sb.appendChild(subs);
    subs.setAttribute('role', 'group');
    subs.setAttribute('aria-label', TXT.label);
    [-1, 1].forEach(function (d) {
      var b = D.createElement('button');
      b.type = 'button';
      b.className = 'gs-sba ' + (d < 0 ? 'p' : 'n');
      b.tabIndex = -1;
      b.title = d < 0 ? TXT.prev : TXT.next;
      b.setAttribute('aria-hidden', 'true');
      b.innerHTML = arrow(d);
      b.addEventListener('click', function () {
        var dx = d * Math.max(140, subs.clientWidth * TXT.step);
        try { subs.scrollBy({ left: dx, behavior: calm() ? 'auto' : 'smooth' }); } catch (e) { subs.scrollLeft += dx; }
      });
      sb.appendChild(b);
    });
    subs.addEventListener('scroll', function () { edges(sb); }, { passive: true });
    if (RO) { RO.disconnect(); RO.observe(subs); }
    return sb;
  }

  /* after a tap in the frozen row: keep the row frozen, the new products start right under it */
  function target(s) {
    var g = s.querySelector('.gs-main > .gs-grid');
    if (!g || !BAR) return null;
    var y = g.getBoundingClientRect().top + (W.pageYOffset || 0) - setTop(s) - BAR.offsetHeight -
      (parseFloat(getComputedStyle(BAR).marginBottom) || 0);
    var max = Math.max(D.documentElement.scrollHeight, D.body.scrollHeight) - W.innerHeight;
    return Math.max(0, Math.round(Math.min(y, max)));
  }
  function keep(s) {
    var y = target(s);
    if (y == null) return;
    W.scrollTo(0, y);
    keepY = { until: Date.now() + 3500 };
    [300, 800, 1500, 2500, 3400].forEach(function (ms) { setTimeout(settle, ms); });
  }
  /* the site redraws the page once after the first sub-category tap, which can shift things: line the products up again,
     unless the client has started scrolling or typing in the meantime */
  function settle() {
    if (!keepY) return;
    if (keepY.until < Date.now()) { keepY = null; return; }
    var s = shop();
    if (!s || !BAR || !s.contains(BAR)) return;
    var y = target(s);
    if (y != null && Math.abs(y - (W.pageYOffset || 0)) > 2) W.scrollTo(0, y);
  }
  function hands() { keepY = null; }

  /* when the site redraws the page and the shop is put back, the row goes back to where it was */
  function back() {
    var r = BAR.querySelector('.gs-subs');
    if (r && r.__sl != null && Math.abs(r.scrollLeft - r.__sl) > 1) r.scrollLeft = r.__sl;
    edges(BAR);
    stuckSoon();
  }

  function stuck() {
    ticking = false;
    var s = shop();
    if (!BAR || !s || !s.contains(BAR)) return;
    var t = setTop(s);
    BAR.classList.toggle('gs-stuck', (W.pageYOffset || 0) > 0 && BAR.getBoundingClientRect().top <= t + 1);
  }
  function stuckSoon() { if (!ticking) { ticking = true; (W.requestAnimationFrame || setTimeout)(stuck); } }

  function check() {
    busy = false;
    var s = shop();
    if (!s) { gone = true; return; }
    var moved = gone || s.parentNode !== HOST;
    gone = false;
    HOST = s.parentNode;
    var subs = s.querySelector('.gs-main > .gs-subs');
    if (subs) {
      BAR = wrap(subs);
      setTop(s);
      center(subs);
      edges(BAR);
      if (keepUntil > Date.now()) { keepUntil = 0; keep(s); }
      stuck();
      return;
    }
    BAR = s.querySelector('.gs-main > .gs-sb');
    if (BAR && moved) back();
    if (BAR && keepY) settle();
  }
  function soon() { if (!busy) { busy = true; Promise.resolve().then(check); } }

  D.addEventListener('click', function (e) {
    var c = e.target && e.target.closest ? e.target.closest('#ggsx-shop .gs-sb .gs-chip') : null;
    if (c && TXT.keep && BAR && BAR.classList.contains('gs-stuck')) keepUntil = Date.now() + 2000;
  }, true);
  ['wheel', 'touchstart', 'mousedown', 'keydown'].forEach(function (t) { W.addEventListener(t, hands, { capture: true, passive: true }); });
  W.addEventListener('scroll', stuckSoon, { passive: true });
  W.addEventListener('resize', function () { if (BAR) edges(BAR); stuckSoon(); });
  new MutationObserver(soon).observe(D.body, { childList: true, subtree: true });
  new MutationObserver(stuckSoon).observe(D.documentElement, { attributes: true, attributeFilter: ['class'] });
  check();
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 35 Sub-category Bar', e); } catch (e2) {} }
__ggsxE("4d149ea5-db0d-490f-bdda-17e998cd6d34#0");

/* ===== GrocerGoSx Shop 36 Errands 1 Config & Style (2aafdf15-5cb8-4fda-b0a3-0d2273d77009, rev 2) ===== */
__ggsxB("2aafdf15-5cb8-4fda-b0a3-0d2273d77009#0");
try {
window.GGSX_ERRANDS=window.GGSX_ERRANDS||{path:"/errands",shop:"/shop-now",wa:"590690779119",days:180,types:[{k:"court",t:"Court & government",x:"Stamps, fees, certificates and filings",task:"e.g. Pay the stamps for a petition at the courthouse. Add the case name, the lawyer on file and who to ask for.",where:"e.g. Courthouse, Front Street, Philipsburg",i:["M3 9.5h18","M12 3 3 8h18z","M5.5 10v7.5","M10 10v7.5","M14 10v7.5","M18.5 10v7.5","M3 20.5h18"]},{k:"bill",t:"Pay a bill",x:"Utilities, phone, insurance, taxes and more",task:"e.g. Pay my electricity bill. Add the account name and number, or send a photo of the bill by message.",where:"e.g. the utility office in Philipsburg",i:["M6 2.5h12v19l-3-2-3 2-3-2-3 2z","M9 8h6","M9 12h6","M9 16h3.5"]},{k:"docs",t:"Documents & keys",x:"Pick up or drop off between two places",task:"e.g. Collect signed papers from my notary and drop them at my lawyer’s office.",where:"e.g. pick up in Cole Bay, drop off in Philipsburg",i:["M7 2.5h7l4 4v15H7z","M14 2.5v4h4","M9.5 12h5","M9.5 16h5"]},{k:"parcel",t:"Parcels & post",x:"Collect a parcel or post something",task:"e.g. Collect my parcel from the courier and bring it to my villa.",where:"e.g. the courier office in Simpson Bay",i:["M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z","M3.5 7.5 12 12l8.5-4.5","M12 12v9"]},{k:"other",t:"Something else",x:"Anything that needs someone there in person",task:"Tell us what you need done, with any names, numbers or details we should have.",where:"Where should we go?",i:["M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2z"]}],copy:{eyebrow:"Errand service",title:"Errands, run for you",lead:"Court stamps and government fees, bill payments, documents and parcels, anywhere on the island. You pay exactly what it costs, plus a {sf} Service Fee on the amount and a {del} Delivery Fee ({delFr} French side).",noteT:"On its own or with your order.",note:" An errand can ride along with your grocery, restaurant or pharmacy order for {stop} per stop. Questions? ",waLink:"Message us",waText:"Hi GrocerGoSx, I have an errand I’d like help with.",s1:"What kind of errand?",s2:"What do we need to do?",s3:"Where is it?",s4:"How much is it?",s5:"When do you need it done?",s6:"What should come back to you?",side:"Side of the island",dutch:"Dutch side",french:"French side",amtPh:"Amount, if you know it",usd:"US$",cg:"Guilders",amtX:"An estimate is fine. Leave it blank if you don’t know: we confirm the amount with you before we pay.",conv:"≈ {usd} at {rate} guilders to the dollar",asap:"As soon as possible",asapX:"Today or the next run we can do",byDay:"By a certain day",byDayX:"Pick the last day it can be done",by:"Needed by",photo:"A photo of the receipt",photoX:"Sent by message once it’s done",back:"Bring it back to me",backX:"Papers, receipt or parcel, to the address you give at checkout",estTitle:"Your estimate",amt:"Amount, at cost",amtUnknown:"confirmed before we pay",fee:"Service Fee",feeUnknown:"{sf} of the amount",del:"Delivery Fee",stop:"Errand stop",total:"Estimated total",plus:" + the amount",ride:"Riding along with what’s in your basket, so it’s a stop, not a separate delivery.",small:"Same-day and next-day rates. Booked {ph}+ hours ahead, the Service Fee is {pf} and delivery is {dp} ({dpf} French side), set at checkout. Nothing is charged now: we confirm by message, run the errand, then send your invoice. All prices include applicable taxes.",add:"Add errand to basket",another:"Add another errand",added:"Errand added to your basket.",addedX:"Check out now, or add another errand, groceries or a restaurant order: it all goes in one run.",needType:"Pick the kind of errand first.",needTask:"Tell us what we need to do.",needWhere:"Tell us where to go.",needDay:"Pick the day it’s needed by.",fail:"That didn’t save. Please try again.",inB:"Errands in your basket",rm:"Remove",tbc:"to confirm",shopG:"Shop groceries",go:"View basket & checkout",inBasket:" in your basket",item:" item",items:" items",howT:"How it works",how:[["Tell us the errand","What, where, the amount if you know it, and when it’s needed."],["We confirm and go","We message you to confirm the details and the total, then head out."],["Receipt and invoice","You get a photo of the receipt, and an invoice at exactly what we paid."]],oneRun:"Everything goes in one basket and one run:",links:[["Shop groceries","/shop-now"],["Restaurants","/restaurants"],["Pharmacy","/pharmacy"],["Laundry","/laundry"],["Beach gear, snack run & more","/concierge-services"]],line:"Errand: ",tWhere:"where: ",tPay:"pay ",tNone:"amount to confirm",tGuil:" guilders",tNeed:"needed ",tAsap:"as soon as possible",tBy:"by ",tPhoto:"receipt photo",tBack:"bring it back",tTask:"task: ",tSide:{d:"Dutch side",f:"French side"}}};
} catch (e) { try { console.warn('[GGSX bundle] Shop 36 Errands 1 Config & Style', e); } catch (e2) {} }
__ggsxE("2aafdf15-5cb8-4fda-b0a3-0d2273d77009#0");
__ggsxCss("", "#ggsx-errands{--o:#F4551B;--od:#d9420d;--t:#0e7490;--bg:#f6f3ee;--ink:#1b1b1b;--mute:#6b6b6b;--line:#e9e4dd;width:100%;background:var(--bg);color:var(--ink);font-family:\"Avenir Light\",avenir-lt-w01_35-light1475496,Avenir,\"Helvetica Neue\",Arial,sans-serif;font-size:15px;line-height:1.45;text-align:left;padding:36px 0 84px;-webkit-font-smoothing:antialiased}#ggsx-errands,#ggsx-errands *{box-sizing:border-box}#ggsx-errands [hidden]{display:none!important}#ggsx-errands .gw-w{max-width:1080px;margin:0 auto;padding:0 24px}#ggsx-errands h1,#ggsx-errands h2,#ggsx-errands h3{font-family:Benzin,sans-serif;font-weight:700;color:var(--ink);line-height:1.15;letter-spacing:0}#ggsx-errands h2{margin:0}#ggsx-errands h1{font-size:40px;margin:0 0 10px}#ggsx-errands p{margin:0}#ggsx-errands button{font:inherit;color:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent}#ggsx-errands :focus-visible{outline:3px solid var(--o);outline-offset:2px}#ggsx-errands .gw-eb{display:inline-block;margin:0 0 14px;padding:6px 12px;border-radius:999px;background:#e3f2f5;color:var(--t);font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}#ggsx-errands .gw-lead{font-size:17px;color:#444;max-width:760px;margin:0 0 16px}#ggsx-errands .gw-note{max-width:760px;margin:0 0 22px;font-size:14px;color:#3a3a3a;background:#fff;border:1.5px solid var(--line);border-left:4px solid var(--t);border-radius:12px;padding:10px 14px}#ggsx-errands .gw-note a{color:var(--o);font-weight:700;text-decoration:none;white-space:nowrap}#ggsx-errands .gw-bask{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px;background:#fff1ea;border:1.5px solid #f6c9b3;border-radius:16px;padding:10px 14px;margin:0 0 18px}#ggsx-errands .gw-bask span{font-weight:700}#ggsx-errands .gw-grid{display:grid;grid-template-columns:minmax(0,1fr) 340px;gap:20px;align-items:start}#ggsx-errands .gw-card{background:#fff;border:1.5px solid var(--line);border-radius:20px;padding:22px}#ggsx-errands .gw-st+.gw-st{margin-top:22px;padding-top:20px;border-top:1px solid var(--line)}#ggsx-errands h3{display:flex;align-items:center;gap:10px;font-size:17px;margin:0 0 12px}#ggsx-errands h3 i{display:inline-flex;align-items:center;justify-content:center;flex:none;width:26px;height:26px;border-radius:50%;font:700 13px/1 Arial,sans-serif}#ggsx-errands .gw-types{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}#ggsx-errands .gw-two{display:grid;grid-template-columns:1fr 1fr;gap:10px}#ggsx-errands .gw-opt{display:flex;flex-direction:column;align-items:flex-start;gap:2px;text-align:left;background:#fff;border:1.5px solid #ddd6cc;border-radius:14px;padding:12px 14px;margin:0;transition:border-color .15s,background .15s}#ggsx-errands .gw-opt:hover{border-color:#b9b0a4}#ggsx-errands .gw-opt.on{border-color:var(--o);background:#fff7f2;box-shadow:inset 0 0 0 1px var(--o)}#ggsx-errands .gw-opt small{color:var(--mute);font-size:13px}#ggsx-errands .gw-ic{display:flex;color:var(--t);margin:0 0 6px}#ggsx-errands .gw-lbl{display:block;font-size:13px;font-weight:700;color:#3a3a3a;margin:14px 0 6px}#ggsx-errands .gw-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap}#ggsx-errands .gw-row input{flex:1 1 160px;width:auto}#ggsx-errands .gw-seg{display:inline-flex;flex:none;border:1.5px solid #ddd6cc;border-radius:999px;overflow:hidden;background:#fff}#ggsx-errands .gw-seg button{border:0;background:#fff;margin:0;padding:0 16px;min-height:44px;font-size:14px;font-weight:700;color:var(--mute)}#ggsx-errands .gw-seg button.on,#ggsx-errands h3 i{background:var(--o);color:#fff}#ggsx-errands .gw-conv,#ggsx-errands .gw-hint{color:var(--mute);font-size:13px;margin-top:8px}#ggsx-errands .gw-conv{color:var(--od);font-weight:700}#ggsx-errands .gw-conv:empty{display:none}#ggsx-errands .gw-date{display:flex;flex-direction:column;gap:6px;margin-top:12px;font-size:13px;font-weight:700;color:#3a3a3a;max-width:260px}#ggsx-errands input,#ggsx-errands textarea{width:100%;font:inherit;font-weight:400;font-size:16px;color:var(--ink);background:#fff;border:1.5px solid #cfc9c1;border-radius:12px;padding:11px 12px;outline:0;-webkit-appearance:none;appearance:none;margin:0}#ggsx-errands input{min-height:46px}#ggsx-errands textarea{resize:vertical;min-height:90px;display:block}#ggsx-errands input:focus,#ggsx-errands textarea:focus{border-color:var(--o)}#ggsx-errands .gw-est{position:sticky;top:96px}#ggsx-errands .gw-est h2{font-size:20px;margin:0 0 12px}#ggsx-errands .gw-rows div{display:flex;justify-content:space-between;gap:12px;padding:4px 0;font-size:14px}#ggsx-errands .gw-rows b{white-space:nowrap;text-align:right}#ggsx-errands .gw-rows .gw-tot{border-top:1px solid var(--line);margin-top:6px;padding-top:10px;font-size:17px}#ggsx-errands .gw-tot b{color:var(--o)}#ggsx-errands .gw-ride{margin:8px 0 0;font-size:12.5px;color:var(--t);font-weight:700}#ggsx-errands .gw-small{margin:10px 0 14px;color:var(--mute);font-size:12.5px;line-height:1.45}#ggsx-errands .gw-btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;border:0;border-radius:999px;background:var(--o);color:#fff;font-weight:700;font-size:15px;text-align:center;margin:0;transition:background .15s}#ggsx-errands .gw-btn:hover{background:var(--od)}#ggsx-errands .gw-btn.gw-s{background:#fff;color:var(--ink);border:1.5px solid #d8d1c8}#ggsx-errands .gw-btn.gw-s:hover{border-color:var(--ink)}#ggsx-errands .gw-add{width:100%}#ggsx-errands .gw-msg{font-size:14px;font-weight:700;margin:0 0 10px}#ggsx-errands .gw-msg:empty{display:none}#ggsx-errands .gw-msg.ok{color:#1e7a3a}#ggsx-errands .gw-msg.bad{color:#d93025}#ggsx-errands .gw-done{margin-top:14px;padding-top:14px;border-top:1px solid var(--line)}#ggsx-errands .gw-done p{font-size:14px;color:#3a3a3a;margin:0 0 10px}#ggsx-errands .gw-btns,#ggsx-errands .gw-how li{display:flex;flex-direction:column;gap:8px}#ggsx-errands .gw-list{margin-top:16px;padding-top:14px;border-top:1px solid var(--line)}#ggsx-errands .gw-list h4{margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--mute)}#ggsx-errands .gw-li{display:flex;align-items:flex-start;gap:10px;padding:8px 0;font-size:14px}#ggsx-errands .gw-li+.gw-li{border-top:1px dashed var(--line)}#ggsx-errands .gw-li span{flex:1;min-width:0}#ggsx-errands .gw-li small{display:block;color:var(--mute);font-size:12.5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#ggsx-errands .gw-li b{white-space:nowrap}#ggsx-errands .gw-li button{flex:none;border:0;background:0 0;margin:0;padding:0;color:var(--mute);font-size:13px;text-decoration:underline}#ggsx-errands .gw-h2{font-size:24px;margin:40px 0 14px}#ggsx-errands .gw-how{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}#ggsx-errands .gw-how li{gap:4px;background:#fff;border:1.5px solid var(--line);border-radius:16px;padding:16px;margin:0}#ggsx-errands .gw-how i{display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:#e3f2f5;color:var(--t);font:700 14px/1 Arial,sans-serif;margin:0 0 6px}#ggsx-errands .gw-cross,#ggsx-errands .gw-how span{color:var(--mute);font-size:14px}#ggsx-errands .gw-cross{margin:28px 0 0}#ggsx-errands .gw-cross button{border:0;background:0 0;padding:0 0 0 8px;font-weight:700;color:var(--o)}@media (max-width:860px){#ggsx-errands{padding:18px 0 120px}#ggsx-errands .gw-w{padding:0 16px}#ggsx-errands h1{font-size:28px}#ggsx-errands .gw-lead{font-size:15px}#ggsx-errands .gw-grid{grid-template-columns:minmax(0,1fr);gap:14px}#ggsx-errands .gw-card{padding:16px;border-radius:18px}#ggsx-errands .gw-how,#ggsx-errands .gw-two,#ggsx-errands .gw-types{grid-template-columns:minmax(0,1fr)}#ggsx-errands .gw-types .gw-opt{display:grid;grid-template-columns:34px minmax(0,1fr);grid-template-areas:\"i t\"\"i x\";column-gap:10px;align-items:center}#ggsx-errands .gw-types .gw-ic{grid-area:i;margin:0}#ggsx-errands .gw-types .gw-opt b{grid-area:t}#ggsx-errands .gw-types .gw-opt small{grid-area:x}#ggsx-errands .gw-date{max-width:none}#ggsx-errands .gw-est{position:static}#ggsx-errands .gw-bask .gw-btn{width:100%}#ggsx-errands .gw-h2{font-size:21px;margin:30px 0 12px}}");
__ggsxCss("", "#ggsx-errands .gw-eb a{color:inherit;text-decoration:none}#ggsx-errands .gw-eb a:hover{text-decoration:underline}");
__ggsxB("2aafdf15-5cb8-4fda-b0a3-0d2273d77009#1");
try {
/* v1.1 tie-in */(function(){var W=window,D=document;if(W.__ggsxErrandsTie)return;W.__ggsxErrandsTie=1;var C=W.GGSX_ERRANDS||{};if(location.pathname.replace(/\/+$/,'').toLowerCase()!==String(C.path||'/errands').toLowerCase())return;var n=0,pk=false,ob=null;function cr(r){var e=r.querySelector('.gw-eb');if(!e||e.querySelector('a'))return;var a=D.createElement('a');a.href='/concierge-services';a.textContent='Concierge services';e.textContent='';e.appendChild(a);e.appendChild(D.createTextNode(' \u203a Errands'))}function pi(r){if(pk)return;var k=(location.hash||'').slice(1).toLowerCase(),t=C.types||[],i=-1,j;for(j=0;j<t.length;j++)if(String(t[j].k).toLowerCase()===k)i=j;if(i<0){pk=true;return}var b=r.querySelectorAll('.gw-types [role="radio"]');if(!b[i])return;pk=true;if(b[i].getAttribute('aria-checked')!=='true')b[i].click()}function run(){var r=D.getElementById('ggsx-errands');if(!r)return false;cr(r);pi(r);if(!ob&&W.MutationObserver){ob=new MutationObserver(function(){var x=D.getElementById('ggsx-errands');if(x)cr(x)});ob.observe(r,{childList:true,subtree:true})}return pk}(function tk(){if(!run()&&n++<150)setTimeout(tk,200)})()})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 36 Errands 1 Config & Style', e); } catch (e2) {} }
__ggsxE("2aafdf15-5cb8-4fda-b0a3-0d2273d77009#1");

/* ===== GrocerGoSx Shop 36 Errands 2 Engine (f370f065-40d0-48b2-988a-956ca823a00e, rev 1) ===== */
__ggsxB("f370f065-40d0-48b2-988a-956ca823a00e#0");
try {
!function(){var e=window,t=document;if(!e.__ggsxErrands){e.__ggsxErrands=1;var n="ggsx_basket",a=null,i=null,r=null,s={},o=null,c=0;!function n(){(a=e.GGSX_ERRANDS)?t.body?F():t.addEventListener("DOMContentLoaded",F):c++<100&&setTimeout(n,50)}()}function d(e,n,a){var i,r=t.createElement(e);if(n)for(i in n)null!=n[i]&&("class"===i?r.className=n[i]:"text"===i?r.textContent=n[i]:"on"===i.slice(0,2)?r.addEventListener(i.slice(2),n[i]):r.setAttribute(i,n[i]));return(a||[]).forEach(function(e){e&&r.appendChild("string"==typeof e?t.createTextNode(e):e)}),r}function l(e){return Math.round(100*e)/100}function u(e){return"$"+l(e).toFixed(2)}function p(e){return u(e).replace(".00","")}function h(e){return i&&null!=i[e]&&""!==String(i[e]).trim()?String(i[e]):null}function f(t,n){var a,i=h(t);if(null==i){try{if((a=+e.GGSX_MORE.setting(t,NaN))>=0)return a}catch(e){}return n}return a=parseFloat(i.replace(/[^0-9.-]/g,"")),isNaN(a)?n:a}function g(e,t){var n,a=h(e);return null==a?[t,0]:(n=parseFloat(a.replace(/[^0-9.-]/g,"")),isNaN(n)?[t,0]:/%/.test(a)?[n/100,0]:n<=1?[n,0]:[g("service_fee_rate",.15)[0],n])}function w(e,t,n){var a=f(e,-1);return a>=0?a:f(t,n)}function m(e){return Math.round(1e3*e)/10+"%"}function y(e){var t=new Date;return t.setDate(t.getDate()+e),t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2)}function v(e){return String(e||"").split("").map(function(e){return e<" "?" ":e}).join("").replace(/  +/g," ").trim()}function b(e){return e.split("{sf}").join(m(g("shopping_fee",.25)[0])).split("{pf}").join(m(g("planned_fee",.15)[0])).split("{delFr}").join(p(f("delivery_fee_french",35))).split("{del}").join(p(f("delivery_fee",30))).split("{stop}").join(p(f("errand_stop_fee",25))).split("{ph}").join(String(f("planned_hours",48))).split("{dpf}").join(p(w("delivery_fee_planned_french","delivery_fee_french",25))).split("{dp}").join(p(w("delivery_fee_planned","delivery_fee",20)))}function x(){try{var e=JSON.parse(localStorage.getItem(n)||"null");if(e&&e.items)return e}catch(e){}return{v:1,items:{}}}function k(t){t.t=Date.now();try{localStorage.setItem(n,JSON.stringify(t))}catch(e){return!1}try{e.dispatchEvent(new CustomEvent("ggsx-basket"))}catch(e){}return!0}function _(){var e,t=x(),n=[];for(e in t.items)t.items[e]&&t.items[e].n>0&&n.push(t.items[e]);return n}function C(){var e=0,t=[];return _().forEach(function(n){!function(e){return/^errand:/.test(e.id||"")}(n)?/^(rest|pharm|laundry):/.test(n.id||"")||(e=1):t.push(n)}),t.sort(function(e,t){return(e.o||0)-(t.o||0)}),{shop:e,errs:t}}function E(e){return a.types.filter(function(t){return t.k===e})[0]}function S(){var e=String(o.amt||"").trim();e=/^\d+,\d{1,2}$/.test(e)?e.replace(",","."):e.replace(/,/g,"");var t=parseFloat(e.replace(/[^0-9.]/g,""));return t>0?l(t):null}function T(){var e=S();return e?l("cg"===o.cur?e/(f("usd_rate",1.8)||1.8):e):null}function N(e,t){s.msg.textContent=e||"",s.msg.className="gw-msg"+(t?" "+t:"")}function L(e,t){var n;for(n in e){var a=n===t;e[n].classList.toggle("on",a),e[n].setAttribute("radio"===e[n].getAttribute("role")?"aria-checked":"aria-pressed",a?"true":"false")}}function M(){if(s.est){var e,t,n=a.copy,i=T(),r=function(e){var t=C(),n=g("shopping_fee",.25),a=!(!t.shop&&!t.errs.length),i=a?0:Math.max(n[1],f("service_fee_min",0)),r=f("service_fee_max",200),s=Math.min(Math.max(e?l(e*n[0]):0,i),r),c=a?f("errand_stop_fee",25):f("f"===o.side?"delivery_fee_french":"delivery_fee","f"===o.side?35:30);if(!a&&0===f("delivery_on_top",1)){var d=Math.min(c,s);s=l(s-d),c=d}return{ride:a,fee:s,del:c}}(i),c=E(o.type)||a.types[0],p=C(),h=f("whatsapp",0);s.lead.textContent=b(n.lead),s.noteTxt.textContent=b(n.note),h>0&&(s.wa.href="https://wa.me/"+h+"?text="+encodeURIComponent(n.waText)),L(s.types,o.type),s.task.placeholder=c.task,s.where.placeholder=c.where,L(s.side,o.side),L(s.cur,o.cur),L(s.when,o.when),L(s.back,o.back),s.dateRow.hidden="by"!==o.when,s.conv.textContent="cg"===o.cur&&i?n.conv.replace("{usd}",u(i)).replace("{rate}",String(f("usd_rate",1.8))):"",s.est.innerHTML="",[[n.amt,i?u(i):n.amtUnknown],[n.fee,i||r.fee?u(r.fee):b(n.feeUnknown)],[r.ride?n.stop:n.del,u(r.del)]].forEach(function(e){s.est.appendChild(d("div",{},[d("span",{text:e[0]}),d("b",{text:e[1]})]))}),s.est.appendChild(d("div",{class:"gw-tot"},[d("span",{text:n.total}),d("b",{text:i?u(i+r.fee+r.del):u(r.fee+r.del)+n.plus})])),s.ride.hidden=!r.ride,s.small.textContent=b(n.small),s.list.hidden=!p.errs.length,s.listBody.innerHTML="",p.errs.forEach(function(e){var t=e.err||{};s.listBody.appendChild(d("div",{class:"gw-li"},[d("span",{},[String(e.name||"").replace(n.line,""),d("small",{text:t.where||e.size||""})]),d("b",{text:+e.price>0?u(e.price):n.tbc}),d("button",{type:"button",text:n.rm,"aria-label":n.rm+" "+(e.name||""),onclick:function(){var t,n;t=e.id,delete(n=x()).items[t],k(n),N(""),M()}})]))}),e=0,t=0,_().forEach(function(n){e+=n.n,t+=n.n*(+n.price||0)}),s.strip.hidden=!e,s.strip.firstChild.textContent=e+(1===e?a.copy.item:a.copy.items)+" · "+u(t)+a.copy.inBasket}}function D(e,t){var n,i=a.copy,r=S(),s=[];return s.push(i.tWhere+v(o.where).slice(0,160)+" ("+i.tSide[o.side]+")"),s.push(e?i.tPay+("cg"===o.cur?r+i.tGuil+" (≈ "+u(e)+")":u(e)):i.tNone),s.push(i.tNeed+("by"===o.when&&o.by?i.tBy+(n=o.by,new Date(n+"T12:00:00").toLocaleDateString("en-US",{weekday:"short",month:"short",day:"numeric"})):i.tAsap)),s.push("back"===o.back?i.tBack:i.tPhoto),s.push(i.tTask+v(o.task).slice(0,300)),s.join(" · ")}function A(){var e=a.copy;if(o.task=s.task.value.trim(),o.where=s.where.value.trim(),o.amt=s.amt.value.trim(),o.type)if(o.task.length<3){N(e.needTask,"bad");try{s.task.focus()}catch(e){}}else if(o.where)if("by"!==o.when||o.by){var t,n=T(),i=E(o.type),r=x(),c=0,d="errand:"+Date.now().toString(36);for(t in r.items)c=Math.max(c,r.items[t]&&r.items[t].o||0);r.items[d]={id:d,n:1,name:e.line+i.t,size:D(n),price:n||0,img:"",o:c+1,err:{type:i.k,task:v(o.task),where:v(o.where),side:o.side,amount:S(),cur:o.cur,usd:n||0,by:"by"===o.when?o.by:"",back:o.back}},k(r)?(o={type:"",task:"",where:"",side:o.side,amt:"",cur:o.cur,when:"asap",by:"",back:"photo"},s.task.value="",s.where.value="",s.amt.value="",s.date.value="",N(e.added,"ok"),s.done.hidden=!1,M()):N(e.fail,"bad")}else{N(e.needDay,"bad");try{s.date.focus()}catch(e){}}else{N(e.needWhere,"bad");try{s.where.focus()}catch(e){}}else{N(e.needType,"bad");try{s.types[a.types[0].k].focus()}catch(e){}}}function j(e){location.assign(e)}function G(e,t,n){return d("div",{class:"gw-st"},[d("h3",{},[d("i",{text:String(e)}),t]),n])}function R(e,t,n,a,i){var r=d("div",{class:n,role:"radio"===a?"radiogroup":"group"});return t.forEach(function(t){var n=0,s=d("button",{type:"button",class:"radio"===a?"gw-opt":"",role:"radio"===a?"radio":null,onclick:function(){i(t[0]),M()}},t.slice(1).map(function(e){return"string"==typeof e?d(n++?"small":"b",{text:e}):e}));e[t[0]]=s,r.appendChild(s)}),r}function B(){if(function(){for(var e=location.pathname.toLowerCase();e.length>1&&"/"===e.charAt(e.length-1);)e=e.slice(0,-1);return e===a.path}()){if(!r||!t.body.contains(r)){var n=t.querySelector("main[id^=PAGE_SECTIONS] > section")||t.querySelector("main > section")||t.querySelector("#SITE_PAGES > div")||t.querySelector("main");n&&(r||function(){var n=a.copy;o={type:"",task:"",where:"",side:"d",amt:"",cur:"usd",when:"asap",by:"",back:"photo"},s={types:{},side:{},cur:{},when:{},back:{}};var c=d("section",{id:"ggsx-errands"}),l=d("div",{class:"gw-w"});c.appendChild(l),s.lead=d("p",{class:"gw-lead"}),s.noteTxt=document.createTextNode(""),s.wa=d("a",{href:"https://wa.me/"+a.wa+"?text="+encodeURIComponent(n.waText),target:"_blank",rel:"noopener",text:n.waLink}),s.strip=d("div",{class:"gw-bask",hidden:"hidden"},[d("span"),d("button",{type:"button",class:"gw-btn gw-s",text:n.go,onclick:function(){j(a.shop+"#basket")}})]),l.appendChild(d("p",{class:"gw-eb",text:n.eyebrow})),l.appendChild(d("h1",{text:n.title})),l.appendChild(s.lead),l.appendChild(d("p",{class:"gw-note"},[d("b",{text:n.noteT}),s.noteTxt,s.wa])),l.appendChild(s.strip);var u=d("div",{class:"gw-card gw-form"});u.appendChild(G(1,n.s1,R(s.types,a.types.map(function(e){return[e.k,(n=e.i,a="http://www.w3.org/2000/svg",i=t.createElementNS(a,"svg"),[["viewBox","0 0 24 24"],["width","26"],["height","26"],["fill","none"],["stroke","currentColor"],["stroke-width","1.7"],["stroke-linecap","round"],["stroke-linejoin","round"]].forEach(function(e){i.setAttribute(e[0],e[1])}),n.forEach(function(e){var n=t.createElementNS(a,"path");n.setAttribute("d",e),i.appendChild(n)}),d("span",{class:"gw-ic","aria-hidden":"true"},[i])),e.t,e.x];var n,a,i}),"gw-types","radio",function(e){o.type=e,N("")}))),s.task=d("textarea",{rows:"3",maxlength:"400","aria-label":n.s2}),u.appendChild(G(2,n.s2,s.task)),s.where=d("input",{type:"text",maxlength:"160",autocomplete:"off","aria-label":n.s3}),u.appendChild(G(3,n.s3,d("div",{},[s.where,d("span",{class:"gw-lbl",text:n.side}),R(s.side,[["d",n.dutch],["f",n.french]],"gw-seg","toggle",function(e){o.side=e})]))),s.amt=d("input",{type:"text",inputmode:"decimal",maxlength:"12",placeholder:n.amtPh,"aria-label":n.amtPh}),s.amt.addEventListener("input",function(){o.amt=s.amt.value,M()}),s.conv=d("p",{class:"gw-conv"}),u.appendChild(G(4,n.s4,d("div",{},[d("div",{class:"gw-row"},[s.amt,R(s.cur,[["usd",n.usd],["cg",n.cg]],"gw-seg","toggle",function(e){o.cur=e})]),s.conv,d("p",{class:"gw-hint",text:n.amtX})]))),s.date=d("input",{type:"date",min:y(0),max:y(a.days)});var p=function(){o.by=s.date.value,o.by&&N("")};s.date.addEventListener("input",p),s.date.addEventListener("change",p),s.dateRow=d("label",{class:"gw-date"},[d("span",{text:n.by}),s.date]),u.appendChild(G(5,n.s5,d("div",{},[R(s.when,[["asap",n.asap,n.asapX],["by",n.byDay,n.byDayX]],"gw-two","radio",function(e){o.when=e,"by"!==e||o.by||setTimeout(function(){try{s.date.focus()}catch(e){}},0)}),s.dateRow]))),u.appendChild(G(6,n.s6,R(s.back,[["photo",n.photo,n.photoX],["back",n.back,n.backX]],"gw-two","radio",function(e){o.back=e}))),s.est=d("div",{class:"gw-rows"}),s.ride=d("p",{class:"gw-ride",text:n.ride,hidden:"hidden"}),s.small=d("p",{class:"gw-small"}),s.msg=d("div",{class:"gw-msg",role:"status"}),s.done=d("div",{class:"gw-done",hidden:"hidden"},[d("p",{text:n.addedX}),d("div",{class:"gw-btns"},[d("button",{type:"button",class:"gw-btn",text:n.go,onclick:function(){j(a.shop+"#basket")}}),d("button",{type:"button",class:"gw-btn gw-s",text:n.another,onclick:function(){s.done.hidden=!0,N("");try{u.scrollIntoView({behavior:"smooth",block:"start"})}catch(e){}}}),d("button",{type:"button",class:"gw-btn gw-s",text:n.shopG,onclick:function(){j(a.shop)}})])]),s.listBody=d("div"),s.list=d("div",{class:"gw-list",hidden:"hidden"},[d("h4",{text:n.inB}),s.listBody]),l.appendChild(d("div",{class:"gw-grid"},[u,d("aside",{class:"gw-card gw-est"},[d("h2",{text:n.estTitle}),s.est,s.ride,s.small,s.msg,d("button",{type:"button",class:"gw-btn gw-add",text:n.add,onclick:A}),s.done,s.list])])),l.appendChild(d("h2",{class:"gw-h2",text:n.howT})),l.appendChild(d("ol",{class:"gw-how"},n.how.map(function(e,t){return d("li",{},[d("i",{text:String(t+1)}),d("b",{text:e[0]}),d("span",{text:e[1]})])}))),l.appendChild(d("p",{class:"gw-cross"},[n.oneRun].concat(n.links.map(function(e){return d("button",{type:"button",text:e[0],onclick:function(){j(e[1])}})})))),r=c,M();var h=e.GGSX_MORE;(h&&h.load?h.load().then(function(e){i=e&&e.set||{}},function(){return null}):Promise.resolve()).then(function(){M()})}(),n.appendChild(r),Array.prototype.forEach.call(n.children,function(e){e!==r&&(e.style.minHeight="0",e.style.height="0",e.style.overflow="hidden")}))}}else r&&(r.remove(),r=null,s={})}function X(){r&&M()}function F(){var a=!1;new MutationObserver(function(){a||(a=!0,(e.requestAnimationFrame||setTimeout)(function(){a=!1,B()}))}).observe(t.documentElement,{childList:!0,subtree:!0}),e.addEventListener("ggsx-basket",X),e.addEventListener("storage",function(e){e.key===n&&X()}),B()}}();
} catch (e) { try { console.warn('[GGSX bundle] Shop 36 Errands 2 Engine', e); } catch (e2) {} }
__ggsxE("f370f065-40d0-48b2-988a-956ca823a00e#0");

/* ===== GrocerGoSx Shop 36 Errands 3 Checkout (4fa622a5-ca35-4525-bf80-b2c3571fc8e6, rev 1) ===== */
__ggsxB("4fa622a5-ca35-4525-bf80-b2c3571fc8e6#0");
try {
!function(){var e=window,t=document;if(!e.__ggsxErrandsCk){e.__ggsxErrandsCk=1;var n=e.GGSX_ERRANDS_CHECKOUT={stop:"Errand stop",stops:"Errand stops ×",each:25,date:"Errand date *",win:"Time window *",lead:"Tell us how to reach you and when you need it done. No payment now: we confirm by message, run the errand, then send your invoice at exactly what we paid, plus the fees shown."},r=null;n.count=u,c(),t.addEventListener("ggsx-checkout-build",c),t.addEventListener("ggsx-checkout-open",function(){c(),setTimeout(d,0)}),e.addEventListener("ggsx-basket",function(){setTimeout(d,0)})}function a(e){return!!e&&(/^errand:/.test(e.id||"")||/^errand: /i.test(e.name||""))}function o(e){return!!e&&(/^laundry:/.test(e.id||"")||/^laundry, wash/i.test(e.name||""))}function s(){var t=NaN;try{t=+e.GGSX_MORE.setting("errand_stop_fee",NaN)}catch(e){}return t>=0?t:n.each}function u(e){var t=e||[],n=t.filter(a).length;return n?t.some(function(e){return!a(e)&&!o(e)&&!function(e){return!!e&&/^(rest|pharm):/.test(e.id||"")}(e)})?n:n-1:0}function c(){var t=e.GGSX_CHECKOUT;if(t&&!t.__errands){t.__errands=1;var r=Object.getOwnPropertyDescriptor(t,"extraFees"),a=r&&!r.get?r.value:null,o=function(e,o){var c=[];try{var i=r&&r.get?r.get.call(t):a;c=(i?i(e,o):[])||[]}catch(e){}var d=u(e);return d>0?c.concat([{label:d>1?n.stops+d:n.stop,amount:Math.round(d*s()*100)/100}]):c};try{Object.defineProperty(t,"extraFees",{configurable:!0,enumerable:!0,get:function(){return o},set:function(e){e!==o&&(r&&r.set?r.set.call(t,e):a=e)}})}catch(e){a=t.extraFees,t.extraFees=o}}}function i(e,t,n){e&&(e.hasAttribute("data-ge")||e.setAttribute("data-ge",e.textContent),n?e.textContent=t:e.textContent===t&&(e.textContent=e.getAttribute("data-ge")))}function d(){var s,u=t.querySelector(".gc-wrap .gc-form");if(u){var c=(s=function(){try{var e=JSON.parse(localStorage.getItem("ggsx_basket")||"null");if(e&&e.items)return Object.keys(e.items).map(function(t){return e.items[t]}).filter(function(e){return e&&e.n>0})}catch(e){}return[]}()).some(a)&&s.every(function(e){return a(e)||o(e)}),d=e.GGSX_DYN,l=function(e){var t=u.querySelector(e);return t&&t.closest?t.closest("label"):null},f=l("input[name=date]"),g=l("select[name=win]"),y=l("select[name=subs]"),p=u.querySelector(".gc-pi");d&&(r||(r={h:d.dateHere,a:d.dateArrive}),c?(d.dateHere=n.date,d.dateArrive=n.date):d.dateHere===n.date&&(d.dateHere=r.h,d.dateArrive=r.a)),i(f&&f.querySelector("span"),n.date,c),i(g&&g.querySelector("span"),n.win,c),y&&(y.style.display=c?"none":""),p&&(p.style.display=c?"none":""),i(t.querySelector(".gc-wrap .gc-lead"),n.lead,c)}}}();
} catch (e) { try { console.warn('[GGSX bundle] Shop 36 Errands 3 Checkout', e); } catch (e2) {} }
__ggsxE("4fa622a5-ca35-4525-bf80-b2c3571fc8e6#0");

/* ===== GrocerGoSx Shop 37 Live Driver Map (7b08366b-5daa-49fc-adba-35ce707d9ea6, rev 2) ===== */
__ggsxCss("", ".gd-hide{display:none!important}.gd-card .gd-h{font-family:Benzin,Helvetica Neue,Arial,sans-serif;font-size:16px;line-height:1.3;margin:0 0 8px;color:#1b1b1b}.gd-card .gd-p{margin:0 0 10px;font-size:15px;color:#3a3a3a}.gd-note{margin:8px 0 0;font-size:13px;color:#6b6b6b}.gd-good{color:#1e7a3a}.gd-warn{color:#b45309}.gd-row{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}.gd-btn{display:inline-flex;align-items:center;justify-content:center;min-height:42px;border:1.5px solid #cfc9c1;border-radius:999px;background:#fff;color:#1b1b1b;font:inherit;font-size:14px;font-weight:700;padding:0 16px;text-decoration:none;cursor:pointer;box-sizing:border-box}.gd-btn.main{background:#F4551B;border-color:#F4551B;color:#fff}.gd-btn:disabled{opacity:.6}.gd-a{border:0;background:none;padding:0;color:#F4551B;font:inherit;font-weight:700;cursor:pointer;text-decoration:underline}.gd-in{flex:1;min-width:120px;min-height:42px;border:1.5px solid #cfc9c1;border-radius:12px;padding:0 12px;font:inherit;font-size:16px;box-sizing:border-box;background:#fff}.gd-st{font-size:13px;color:#6b6b6b;margin:0 0 10px}.gd-st i{display:inline-block;width:8px;height:8px;border-radius:50%;background:#2f9e55;margin-right:6px;vertical-align:1px;animation:gdp 2s infinite}.gd-st.off i{background:#cfc9c1;animation:none}@keyframes gdp{50%{opacity:.3}}.gd-map{height:260px;border-radius:14px;overflow:hidden;margin:0 0 12px;position:relative;z-index:0;isolation:isolate;background:#e9e4dc}.gd-ic{background:none;border:0}.gd-car,.gd-home{border-radius:50%;border:3px solid #fff;box-shadow:0 3px 10px rgba(0,0,0,.35);display:flex;align-items:center;justify-content:center;box-sizing:border-box}.gd-car{width:38px;height:38px;background:#F4551B}.gd-car b{display:block;width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-bottom:17px solid #fff;margin-top:-3px;transition:transform .4s}.gd-home{width:34px;height:34px;background:#1b1b1b;font-size:16px;line-height:1}");
__ggsxB("7b08366b-5daa-49fc-adba-35ce707d9ea6#0");
try {
!function(){var t=window,e=document;if(!t.__ggsxDriverMap){t.__ggsxDriverMap=1;var n='https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/',o='ggsx_driver_pin',a=0,i='Your delivery',r='At your place now? Share your exact location and we’ll drive straight to your door.',s='Share my location',c='Finding you…',d='Your location is shared with us for this delivery.',l='Update',u='Remove',g='When we’re on our way, you’ll see us live on a map right here.',h='Location is off for this page, so we’ll use your address.',f='Couldn’t share your location just now. Please try again.',m=' is on the way',p=' is arriving',v='Live location paused',y=' · last seen ',x='Live · updated just now',w='Live · updated ',b=' ago',C='Delivered. Enjoy, and thank you for choosing GrocerGoSx.',k='Delivery',S='Driver PIN',_='Save',A='That PIN didn’t work.',L='Too many wrong PINs. Driver actions are paused for an hour.',z='Live map offline, retrying…',M='’s location is shared',T='No location shared yet, so Waze will search the address.',D='Start delivery + Waze',R='Waze only',G='Open Waze',E='Delivered',N='Sharing your location with ',I=' since ',B='You’re sharing another delivery. Starting this one switches to ',j=' · location sharing stopped',O='Start again',W='Mark delivered? Sharing stops and the client’s shared location is deleted.',X='Tracker sending ✓',K=' · battery ',P='Your tracker isn’t sending.',q='No position from your tracker yet.',U='Turn tracker on',Z='Set up tracker app',Y=null,UU='https://script.google.com/macros/s/AKfycbwnVbqpsaVZLRy2wBP2YEtcgs4BM_K3JGsk-X4zEV1ykAi_X_8OP9oNjcsYtookxd4t/exec';e.body?ht():e.addEventListener('DOMContentLoaded',ht)}function F(t,e,n){var o=Object.keys(e).map(function(t){return t+'='+encodeURIComponent(e[t])}).join('&');return fetch(t.url+'?'+o+'&_='+Date.now(),{cache:'no-store',keepalive:!!n}).then(function(t){return t.json()})}function H(e,n,o){return t.GGSX_TRACK.el(e,n,o)}function J(e){return t.GGSX_TRACK.hhmm(e)}function V(t){var e=Math.max(0,Math.round(t/1e3));return e<60?e+' s':Math.round(e/60)+' min'}function $(t,e){t&&t.classList.toggle('gd-hide',!e)}function Q(t,e){if(e)return'https://waze.com/ul?ll='+e.lat+','+e.lng+'&navigate=yes';var n=String((t.c||{}).a||'').trim();return n?'https://waze.com/ul?q='+encodeURIComponent(n)+'&navigate=yes':'https://waze.com/ul'}function tt(t){var e=(t.c||{}).d,n=new Date,o=n.getFullYear()+'-'+('0'+(n.getMonth()+1)).slice(-2)+'-'+('0'+n.getDate()).slice(-2);return!e||e<=o}function et(t,e){var n=t.querySelector('.gr-card');return!(!n||!n.parentNode||(n.nextSibling!==e&&n.parentNode.insertBefore(e,n.nextSibling),0))}function nt(n){var o=t.GGSX_TRACK,a=o.fromHash(n.kind);return e.body.contains(n.w)&&a&&o.seed(a)===n.seed?(n.w.contains(n.card)||et(n.w,n.card),!0):(clearTimeout(n.t),n.dead=1,!1)}function ot(n,o,a,c,h){var f={w:n,c:o,o:a,order:c,seed:t.GGSX_TRACK.seed(h),kind:'track'},m=H('h3',{class:'gd-h',text:i}),p=H('div',{class:'gd-st gd-hide'},[H('i'),H('span')]),v=H('div',{class:'gd-map gd-hide'}),y=H('p',{class:'gd-p',text:r}),x=H('button',{type:'button',class:'gd-btn main',text:s,onclick:function(){it(f)}}),w=H('p',{class:'gd-p gd-ok gd-hide'},[d+' ',H('button',{type:'button',class:'gd-a',text:l,onclick:function(){it(f)}}),' · ',H('button',{type:'button',class:'gd-a',text:u,onclick:function(){!function(t){F(t.c,{a:'unpin',o:t.o}).then(function(){at(t)}).catch(function(){})}(f)}})]),b=H('p',{class:'gd-note gd-hide'}),k=H('p',{class:'gd-note',text:g}),S=H('p',{class:'gd-p gd-hide',text:C}),_=H('div',{class:'gd-here'},[y,x,w,b,k]);f.card=H('div',{class:'gr-card gd-card'},[m,p,v,_,S]),f.ui={title:m,stat:p,mapBox:v,ask:y,btn:x,ok:w,msg:b,later:k,done:S,here:_},et(n,f.card)&&(e.addEventListener('visibilitychange',function(){'visible'!==e.visibilityState||f.dead||at(f)}),at(f))}function at(o){clearTimeout(o.t),nt(o)&&F(o.c,{a:'state',o:o.o}).then(function(a){a&&a.ok&&function(o,a){var r=o.ui,s=o.c.name;if(o.st=a,a.done)return $(r.done,!0),$(r.here,!1),$(r.stat,!1),$(r.mapBox,!1),void(r.title.textContent=i);$(r.done,!1),$(r.here,!0);var c=tt(o.order);if($(r.ask,c&&!a.pin),$(r.btn,c&&!a.pin),$(r.ok,!!a.pin),$(r.later,!a.live),!a.live)return $(r.stat,!1),$(r.mapBox,!1),void(r.title.textContent=i);if($(r.stat,!0),r.title.textContent=s+(a.near?p:m),a.drv){var d=(a.now||Date.now())-a.drv.t;r.stat.className='gd-st',r.stat.lastChild.textContent=d<1e4?x:w+V(d)+b,function(o,a){var i=a.drv,r=a.pin;(function(){if(t.__ggsxLeaf)return t.__ggsxLeaf;var o=e.createElement('link');o.rel='stylesheet',o.href=n+'leaflet.min.css',e.head.appendChild(o);var a='L'in t,i=t.L;return t.__ggsxLeaf=fetch(n+'leaflet.min.js').then(function(t){if(!t.ok)throw new Error('map');return t.text()}).then(function(e){new Function('define','exports','module',e).call(t);var n=t.L;if(a&&(t.L=i),!n||!n.map)throw new Error('map');return n}),t.__ggsxLeaf.catch(function(){t.__ggsxLeaf=null}),t.__ggsxLeaf})().then(function(t){if(!o.dead){var e=o.ui;e.map||($(e.mapBox,!0),e.map=t.map(e.mapBox,{center:[i.lat,i.lng],zoom:15,scrollWheelZoom:!1,zoomControl:!0}),e.map.attributionControl.setPrefix(!1),t.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; OpenStreetMap'}).addTo(e.map),e.map.on('dragstart',function(){e.moved=Date.now()}),e.car=t.marker([i.lat,i.lng],{icon:t.divIcon({className:'gd-ic',html:'<div class=gd-car><b></b></div>',iconSize:[38,38],iconAnchor:[19,19]}),zIndexOffset:1e3}).addTo(e.map)),e.car.setLatLng([i.lat,i.lng]);var n=e.car.getElement&&e.car.getElement();(n=n&&n.querySelector('b'))&&(n.style.transform=null!=i.brg?'rotate('+i.brg+'deg)':''),r?e.home?e.home.setLatLng([r.lat,r.lng]):e.home=t.marker([r.lat,r.lng],{icon:t.divIcon({className:'gd-ic',html:'<div class=gd-home>🏠</div>',iconSize:[34,34],iconAnchor:[17,17]})}).addTo(e.map):e.home&&(e.map.removeLayer(e.home),e.home=null),(!e.moved||Date.now()-e.moved>3e4)&&(r?e.map.fitBounds([[i.lat,i.lng],[r.lat,r.lng]],{padding:[40,40],maxZoom:16}):e.map.setView([i.lat,i.lng],e.map.getZoom()>13?e.map.getZoom():15)),setTimeout(function(){e.map&&e.map.invalidateSize()},60)}}).catch(function(){})}(o,a)}else r.stat.className='gd-st off',r.stat.lastChild.textContent=v+(a.paused?y+J(a.paused):''),r.map||$(r.mapBox,!1)}(o,a)}).catch(function(){}).then(function(){if(!(o.dead||o.st&&o.st.done)){var t=o.st&&o.st.live,n='hidden'===e.visibilityState;o.t=setTimeout(function(){at(o)},n?6e4:t?1e4:tt(o.order)?3e4:3e5)}})}function it(t){var e=t.ui;if($(e.msg,!1),!navigator.geolocation)return e.msg.textContent=h,void $(e.msg,!0);e.btn.disabled=!0,e.btn.textContent=c,navigator.geolocation.getCurrentPosition(function(n){var o=n.coords;F(t.c,{a:'pin',o:t.o,lat:o.latitude.toFixed(6),lng:o.longitude.toFixed(6),acc:Math.round(o.accuracy||0)}).then(function(e){if(!e||!e.ok)throw new Error('pin');at(t)}).catch(function(){e.msg.textContent=f,$(e.msg,!0)}).then(function(){e.btn.disabled=!1,e.btn.textContent=s})},function(t){e.btn.disabled=!1,e.btn.textContent=s,e.msg.textContent=t&&1===t.code?h:f,$(e.msg,!0)},{enableHighAccuracy:!0,timeout:2e4,maximumAge:0})}function rt(){try{return localStorage.getItem(o)||''}catch(t){return''}}function st(t){try{t?localStorage.setItem(o,t):localStorage.removeItem(o)}catch(t){}}function ct(n,o,a,i,r){var s={w:n,c:o,o:a,order:i,seed:t.GGSX_TRACK.seed(r),kind:'run',who:i.c&&i.c.f||'The client'},c=Q(i,null),d=H('input',{type:'password',inputmode:'numeric',autocomplete:'off',class:'gd-in',placeholder:S}),l=H('div',{class:'gd-row gd-hide'},[d,H('button',{type:'button',class:'gd-btn main',text:_,onclick:function(){dt(s,d.value.trim())}})]),u=H('p',{class:'gd-note gd-hide'}),g=H('p',{class:'gd-p'}),h=H('div',{class:'gd-st gd-hide'},[H('i'),H('span')]),f=H('a',{class:'gd-btn main',text:D,href:c,onclick:function(){!function(t){var e=rt();e&&(t.ui.live.className='gd-st',t.ui.live.lastChild.textContent=N+t.who+I+J(Date.now()),$(t.ui.live,!0),F(t.c,{a:'start',o:t.o,k:e},!0).then(function(){t.dead||lt(t)}).catch(function(){}))}(s)}}),m=H('a',{class:'gd-btn',text:R,href:c}),p=H('button',{type:'button',class:'gd-btn main',text:E,onclick:function(){!function(e){var n=rt();n&&t.confirm(W)&&(e.ui.doneB.disabled=!0,F(e.c,{a:'stop',o:e.o,k:n}).then(function(){lt(e)},function(){lt(e)}).then(function(){e.ui.doneB.disabled=!1}))}(s)}}),v=H('div',{class:'gd-row'},[f,m,p]),y=H('p',{class:'gd-note'}),x=H('a',{class:'gd-btn',text:U,href:'org.traccar.client://action/start'}),w=H('a',{class:'gd-btn gd-hide',text:Z}),b=H('div',{class:'gd-row gd-hide'},[x,w]),C=H('div',{class:'gd-hide'},[g,h,v,y,b]);s.card=H('div',{class:'gr-card gd-card'},[H('h3',{class:'gd-h',text:k}),l,u,C]),s.ui={input:d,pinRow:l,pinMsg:u,info:g,live:h,startA:f,wazeA:m,doneB:p,trk:y,trkOn:x,trkSet:w,trkRow:b,body:C},d.addEventListener('keydown',function(t){'Enter'===t.key&&dt(s,d.value.trim())}),et(n,s.card)&&(e.addEventListener('visibilitychange',function(){'visible'!==e.visibilityState||s.dead||lt(s)}),lt(s))}function dt(t,e){if(!/^[0-9]{4,10}$/.test(e))return t.ui.pinMsg.textContent=A,void $(t.ui.pinMsg,!0);st(e),lt(t)}function lt(t){if(clearTimeout(t.t),nt(t)){var n=rt(),o={a:'state',o:t.o};n&&(o.k=n),F(t.c,o).then(function(e){ut(t,e,n)},function(){ut(t,null,n)}).then(function(){t.dead||'hidden'===e.visibilityState||(t.t=setTimeout(function(){lt(t)},2e4))})}}function ut(t,e,n){var o=t.ui;if(!e)return $(o.pinRow,!1),$(o.body,!1),o.pinMsg.textContent=z,void $(o.pinMsg,!0);if(!e.ok)return $(o.body,!1),void('locked'===e.error&&(o.pinMsg.textContent=L,$(o.pinMsg,!0)));if(!n||!1===e.me)return n?(st(''),o.pinMsg.textContent=A,$(o.pinMsg,!0)):$(o.pinMsg,!1),$(o.pinRow,!0),void $(o.body,!1);$(o.pinRow,!1),$(o.pinMsg,!1),$(o.body,!0),t.st=e;var a=e.pin,i=Q(t.order,a);o.info.textContent=a?'📍 '+t.who+M+(a.acc?' (±'+a.acc+' m · ':' (')+J(a.t)+')':T,o.startA.href=i,o.wazeA.href=i,e.done?(o.info.textContent=E+' '+J(e.done)+j,o.startA.textContent=O,o.wazeA.textContent=R,$(o.startA,!0),$(o.wazeA,!0),$(o.doneB,!1),$(o.live,!1)):e.live?(o.live.className='gd-st',o.live.lastChild.textContent=N+t.who+I+J(e.since),$(o.live,!0),$(o.startA,!1),o.wazeA.textContent=G,$(o.wazeA,!0),$(o.doneB,!0)):($(o.live,!(!e.me||!e.me.other)),e.me&&e.me.other&&(o.live.className='gd-st off',o.live.lastChild.textContent=B+t.who+'.'),o.startA.textContent=D,o.wazeA.textContent=R,$(o.startA,!0),$(o.wazeA,!0),$(o.doneB,!!a));var r,s,c=e.me&&e.me.fix,d=c&&c.age<120;o.trk.textContent=d?X+(c.age<10?'':' · '+V(1e3*c.age)+b)+(null!=c.batt?K+c.batt+'%':''):c?P:q,o.trk.className='gd-note'+(d?' gd-good':' gd-warn'),e.me&&e.me.dev&&(o.trkSet.href=(r=t.c,s=e.me.dev,'org.traccar.client://?url='+encodeURIComponent(r.url)+'&id='+encodeURIComponent(s)+'&accuracy=high&interval=10&distance=0&angle=0&heartbeat=60&buffer=false&stop_detection=true'),$(o.trkSet,!0)),$(o.trkRow,!d)}function gt(){var n=t.GGSX_TRACK;Array.prototype.forEach.call(e.querySelectorAll('.gr-wrap'),function(o){if(!o.__gd){var a=o.classList.contains('gl-view'),i=n.fromHash(a?'track':'run'),r=i&&n.decode(i);r&&o.querySelector('.gr-card')&&(o.__gd=1,t.crypto&&crypto.subtle&&function(){if(Y)return Y;try{var t=JSON.parse(sessionStorage.getItem('ggsx_drv_cfg')||'null');if(t&&Date.now()-t.t<3e5)return Y=Promise.resolve(t.v)}catch(t){}return Y=fetch('https://docs.google.com/spreadsheets/d/1-h6W54Wbscz_5zMAVU0myRr0PCYoVW_sJZo4XWe2MXE/gviz/tq?tqx=out:csv&headers=1&sheet=Settings&t='+Math.floor(Date.now()/6e4),{cache:'no-store'}).then(function(t){return t.ok?t.text():''}).then(function(t){var e={url:'',name:'Dwayne'},n=String.fromCharCode(34);t.split(String.fromCharCode(10)).forEach(function(t){var o=t.split(n+','+n),a=o.length>1?o[0].replace(n,'').trim():'',i=a?o[1].split(n)[0].trim():'';'live_driver_map'===a&&(e.url=/^(1|on|yes|true)$/i.test(i)?UU:''),'driver_name'===a&&i&&(e.name=i)});try{sessionStorage.setItem('ggsx_drv_cfg',JSON.stringify({t:Date.now(),v:e}))}catch(t){}return e}).catch(function(){return{url:'',name:'Dwayne'}})}().then(function(n){if(n.url&&e.body.contains(o))return function(e){var n=t.GGSX_TRACK;return crypto.subtle.digest('SHA-256',(new TextEncoder).encode('ggsx-gps|'+n.seed(e))).then(function(t){return Array.prototype.map.call(new Uint8Array(t),function(t){return(t<16?'0':'')+t.toString(16)}).join('').slice(0,32)})}(i).then(function(t){(a?ot:ct)(o,n,t,r,i)})}).catch(function(){}))}})}function ht(){var n=t.GGSX_TRACK;n&&n.seed&&n.decode&&n.el?(gt(),new MutationObserver(gt).observe(e.body,{childList:!0}),t.addEventListener('hashchange',function(){setTimeout(gt,60)})):++a<60&&setTimeout(ht,250)}}();
} catch (e) { try { console.warn('[GGSX bundle] Shop 37 Live Driver Map', e); } catch (e2) {} }
__ggsxE("7b08366b-5daa-49fc-adba-35ce707d9ea6#0");

/* ===== GrocerGoSx Shop 38 Run Sheet Aisles (ed129f8d-5b54-4196-bfe7-ae990009f1b5, rev 1) ===== */
__ggsxCss("", "\n.gr-list.gra-on{display:flex;flex-direction:column}\n.gra-h{display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin:16px 4px 8px;font-family:Benzin,\"Helvetica Neue\",Arial,sans-serif;font-size:14px;line-height:1.25;color:#F4551B;text-transform:uppercase;letter-spacing:.02em}\n.gra-h small{flex:none;font-family:\"Avenir Light\",avenir-lt-w01_35-light1475496,Avenir,\"Helvetica Neue\",Arial,sans-serif;font-size:13px;font-weight:700;letter-spacing:0;text-transform:none;color:#6b6b6b}\n.gra-h.done,.gra-h.done small{color:#1e7a3a}\n.gra-t{display:block;margin-top:8px;border:0;background:none;padding:0;font:inherit;font-size:13px;font-weight:700;color:#F4551B;cursor:pointer}\n");
__ggsxB("ed129f8d-5b54-4196-bfe7-ae990009f1b5#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxRunAisles) return;
  W.__ggsxRunAisles = 1;

  var A = W.GGSX_AISLES = W.GGSX_AISLES || {
    /* Walking order, top to bottom. */
    sections: [
      ['other', 'Not sorted'],
      ['produce', 'Produce'],
      ['bakery', 'Bakery & bread'],
      ['breakfast', 'Breakfast, coffee & spreads'],
      ['pantry', 'Pantry: pasta, cans & sauces'],
      ['snacks', 'Snacks & sweets'],
      ['drinks', 'Water, soda & juice'],
      ['household', 'Household, baby & pets'],
      ['alcohol', 'Beer, wine & spirits'],
      ['dairy', 'Dairy, eggs & chilled'],
      ['meat', 'Meat, deli & fish'],
      ['frozen', 'Frozen'],
      ['stops', 'Other stops']
    ],
    /* Products tab category, or "category|subcategory", in lower case → section. */
    map: {
      'fruit & vegetables': 'produce',
      'bakery': 'bakery',
      'bakery|milk & dairy': 'dairy',
      'bakery|pancakes & syrups': 'breakfast',
      'pantry': 'pantry',
      'pantry|cereals & breakfast': 'breakfast',
      'pantry|jams, jellies honey & nut butters': 'breakfast',
      'pantry|powdered milk': 'breakfast',
      'pantry|chips & savory snacks': 'snacks',
      'pantry|snacks, nuts, chips & crisps': 'snacks',
      'pantry|crackers': 'snacks',
      'pantry|cookies & granola bars': 'snacks',
      'pantry|candy & chocolate': 'snacks',
      'beverages': 'drinks',
      'beverages|coffee & tea': 'breakfast',
      'baby & household': 'household',
      'beer & seltzers': 'alcohol',
      'wine': 'alcohol',
      'spirits / liquor': 'alcohol',
      'chilled foods': 'dairy',
      'fresh foods': 'meat',
      'dairy & eggs': 'dairy',
      'meat, fish & deli': 'meat',
      'frozen foods': 'frozen',
      'villa kits & bundles': 'other'
    },
    /* Juices kept in the fridge, not the drinks aisle. */
    chilled: /\b(simply (juice|orange|apple|lemonade|limeade|cranberry|cocktail|grapefruit|mixed berry|tropical|pineapple|watermelon|peach|mango|light)|florida'?s natural|bolthouse|naked juice)\b/i,
    /* Items the Products tab doesn't know (renamed or typed in): the first rule that matches the name wins. */
    words: [
      ['drinks', /\b(ginger ale|root beer|non[- ]?alcoholic)\b/i],
      ['dairy', /\b(cracker barrel|cream cheese|coffee[- ]?mate|creamer|half (and|&) half)\b/i],
      ['alcohol', /\b(beer|lager|ale|ipa|seltzer|wine|prosecco|champagne|rum|vodka|tequila|whiske?y|gin|bourbon|cognac|brandy|liqueur)s?\b/i],
      ['household', /\b(paper (towels?|plates|cups|napkins)|plastic (plates|cups|cutlery)|toilet|tissues?|napkins?|foil|trash|garbage|bin liners?|detergent|bleach|soap|shampoo|conditioner|toothpaste|diapers?|wipes|batter(y|ies)|charcoal|lighter|cleaner|sponges?|dish ?washing|cutlery|cat food|dog food)\b/i],
      ['frozen', /\b(frozen|ice cream|popsicles?|ice)\b/i],
      ['drinks', /\b(water|juice|soda|cola|coke|sprite|lemonade|limeade|iced tea|gatorade|powerade|energy drinks?|tonic)\b/i],
      ['snacks', /\b(chips|crisps|crackers?|cookies?|pretzels?|popcorn|nuts|candy|chocolate|gum|jerky|salsa|dip)\b/i],
      ['breakfast', /\b(coffee|tea|cereal|oatmeal|oats|granola|pancakes?|waffles?|syrup|jam|jelly|honey|peanut butter|nutella)\b/i],
      ['pantry', /\b(pasta|penne|spaghetti|macaroni|noodles|rice|sauce|soup|beans|flour|sugar|oil|vinegar|salt|spices?|seasoning|ketchup|mustard|mayo(nnaise)?|dressing|broth|stock|canned|tuna|coconut milk|evaporated|condensed)\b/i],
      ['bakery', /\b(bagels?|bread|buns?|rolls|croissants?|muffins?|tortillas?|wraps|pita|baguettes?|loaf|cakes?|donuts?)\b/i],
      ['dairy', /\b(milk|cheese|butter|yogh?urt|eggs?|cream|creamer|margarine|hummus)\b/i],
      ['meat', /\b(bacon|chicken|beef|pork|steaks?|ham|turkey|sausages?|salami|hot ?dogs?|fish|salmon|shrimp|lobster|mahi|ribs|burgers?|ground)\b/i],
      ['produce', /\b(apples?|bananas?|oranges?|limes?|lemons?|strawberr(y|ies)|blueberr(y|ies)|raspberr(y|ies)|grapes?|melons?|watermelons?|mango(es)?|pineapples?|avocados?|tomato(es)?|onions?|potato(es)?|lettuce|salad|spinach|peppers?|cucumbers?|carrots?|garlic|cilantro|parsley|basil|kale|broccoli|celery|mushrooms?|plantains?|fruit|vegetables?)\b/i]
    ],
    copy: { off: 'Show list order', on: 'Group by aisle' }
  };

  var SHOP = W.GGSX_SHOP || {},
      SHEET = SHOP.sheetId || '1-h6W54Wbscz_5zMAVU0myRr0PCYoVW_sJZo4XWe2MXE',
      TAB = (SHOP.tabs && SHOP.tabs.products) || 'Products',
      CACHE = 'ggsx_shop_cache',   /* Shop 2's copy of the Products tab */
      PREF = 'ggsx_aisles_off',    /* "1" = this phone shows the plain list order */
      KEYS = {}, PMAP = null, WAIT = [], started = 0;
  A.sections.forEach(function (s, i) { KEYS[s[0]] = i; });

  function el(tag, attrs, kids) {
    var e = D.createElement(tag), k;
    for (k in attrs || {}) {
      if (attrs[k] == null) continue;
      if (k === 'class') e.className = attrs[k];
      else if (k === 'text') e.textContent = attrs[k];
      else e.setAttribute(k, attrs[k]);
    }
    (kids || []).forEach(function (c) { if (c) e.appendChild(typeof c === 'string' ? D.createTextNode(c) : c); });
    return e;
  }
  function norm(s) { return String(s == null ? '' : s).toLowerCase().replace(/\s+/g, ' ').trim(); }
  function isOff() { try { return localStorage.getItem(PREF) === '1'; } catch (e) { return false; } }
  function setOff(v) { try { if (v) localStorage.setItem(PREF, '1'); else localStorage.removeItem(PREF); } catch (e) {} }

  /* ---- Products tab: category and subcategory per product ---- */
  function parseCsv(text) {
    var rows = [], row = [], cell = '', q = false, i, ch;
    for (i = 0; i < text.length; i++) {
      ch = text[i];
      if (q) { if (ch === '"') { if (text[i + 1] === '"') { cell += '"'; i++; } else q = false; } else cell += ch; }
      else if (ch === '"') q = true;
      else if (ch === ',') { row.push(cell); cell = ''; }
      else if (ch === '\n' || ch === '\r') { if (ch === '\r' && text[i + 1] === '\n') i++; row.push(cell); rows.push(row); row = []; cell = ''; }
      else cell += ch;
    }
    if (cell || row.length) { row.push(cell); rows.push(row); }
    var head = (rows.shift() || []).map(function (c) { return c.trim().toLowerCase(); });
    return rows.map(function (r) { var o = {}; head.forEach(function (k, j) { o[k] = (r[j] || '').trim(); }); return o; });
  }
  function fromCache() {
    try {
      var c = JSON.parse(sessionStorage.getItem(CACHE) || 'null'), p = c && c.p;
      if (!p || !p.length) return null;
      for (var i = 0; i < p.length && i < 50; i++) if (p[i] && (p[i].category || p[i].cat)) return p;
    } catch (e) {}
    return null;
  }
  function build(rows) {
    var m = {};
    (rows || []).forEach(function (r) {
      var n = r.product || r.name;
      if (!n) return;
      var v = [norm(r.category || r.cat), norm(r.subcategory || r.sub)], ex = norm(n) + '|' + norm(r.size), lo = norm(n);
      if (!m[ex]) m[ex] = v;
      if (!m[lo]) m[lo] = v;
    });
    return m;
  }
  function ready(rows) { PMAP = build(rows); WAIT.splice(0).forEach(function (f) { f(); }); }
  function loadProducts() {
    if (started) return;
    started = 1;
    var n = 0;
    (function poll() {
      var rows = fromCache();
      if (rows) return ready(rows);
      if (++n < 25) return setTimeout(poll, 400);
      var url = 'https://docs.google.com/spreadsheets/d/' + SHEET + '/gviz/tq?tqx=out:csv&headers=1&sheet=' + encodeURIComponent(TAB);
      fetch(url).then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
        .then(function (t) { ready(parseCsv(t)); }, function () { ready([]); });
    })();
  }

  /* ---- which section an item belongs to ---- */
  function vendorOf(name) { var m = /\(([^()]+)\)\s*$/.exec(name); return m ? m[1].trim() : ''; }
  function chill(k, name) { return k === 'drinks' && A.chilled && A.chilled.test(name) ? 'dairy' : k; }
  function sectionOf(name, size) {
    name = String(name || '');
    var n = norm(name), v = PMAP && (PMAP[n + '|' + norm(size)] || PMAP[n]), k, i;
    if (v) {
      k = A.map[v[0] + '|' + v[1]] || A.map[v[0]];
      if (k && KEYS[k] != null) return chill(k, name);
    }
    if (/^(pharmacy|laundry)\b/i.test(name) || vendorOf(name)) return 'stops';
    if (A.chilled && A.chilled.test(name)) return 'dairy';
    for (i = 0; i < A.words.length; i++) {
      if (A.words[i][1].test(name) && KEYS[A.words[i][0]] != null) return chill(A.words[i][0], name);
    }
    return 'other';
  }

  /* The run sheet's order lines, read from the link the same way Shop 4 reads them: [name, size, qty, price, rule]. */
  function orderLines() {
    var m = /^#run\/([A-Za-z0-9_-]+)/.exec(location.hash);
    if (!m) return null;
    try {
      var d = JSON.parse(decodeURIComponent(escape(atob(m[1].replace(/-/g, '+').replace(/_/g, '/')))));
      return d && d.i || null;
    } catch (e) { return null; }
  }
  function itemName(it) {
    var n = it.querySelector('.gr-it-n');
    return n ? n.textContent.replace(/^\s*\d+\s*×\s*/, '') : '';
  }

  /* ---- grouping: CSS order only, so the items keep their place in the page for every other snippet ---- */
  function counts(st) {
    st.heads.forEach(function (h) {
      var g = h.__graItems, done = 0;
      g.forEach(function (it) { if (/(^|\s)(got|sub|out)(\s|$)/.test(it.className)) done++; });
      var all = done === g.length, sm = h.querySelector('small'), txt = done + '/' + g.length + (all ? ' ✓' : '');
      if (sm.textContent !== txt) sm.textContent = txt;
      if (h.classList.contains('done') !== all) h.classList.toggle('done', all);
    });
  }
  function apply(st) {
    if (!D.body.contains(st.wrap)) return;
    var list = st.list, items = Array.prototype.slice.call(list.querySelectorAll('.gr-item')), off = isOff();
    st.heads.forEach(function (h) { if (h.parentNode) h.parentNode.removeChild(h); });
    st.heads = [];
    if (st.btn) st.btn.textContent = off ? A.copy.on : A.copy.off;
    if (off || !items.length) {
      list.classList.remove('gra-on');
      items.forEach(function (it) { it.style.order = ''; });
      return;
    }
    var L = orderLines(), useL = !!(L && L.length === items.length), groups = {};
    items.forEach(function (it, i) {
      var ln = useL ? L[i] : null,
          k = ln ? sectionOf(ln[0], ln[1]) : sectionOf(itemName(it), '');
      it.style.order = String(KEYS[k] * 1000 + 1 + i);
      (groups[k] = groups[k] || []).push(it);
    });
    A.sections.forEach(function (sec, s) {
      var g = groups[sec[0]];
      if (!g) return;
      var h = el('div', { class: 'gra-h', role: 'heading', 'aria-level': '3' }, [el('span', { text: sec[1] }), el('small')]);
      h.style.order = String(s * 1000);
      h.__graItems = g;
      list.appendChild(h);
      st.heads.push(h);
    });
    list.classList.add('gra-on');
    counts(st);
  }
  function later(st) { clearTimeout(st.t); st.t = setTimeout(function () { apply(st); }, 60); }

  function setup(wrap) {
    if (wrap.__gra || wrap.classList.contains('gl-view') || !/^#run\//.test(location.hash)) return;
    var list = wrap.querySelector('.gr-list');
    if (!list || !list.querySelector('.gr-item')) return;
    var st = wrap.__gra = { wrap: wrap, list: list, heads: [] }, pw = wrap.querySelector('.gr-pw');
    if (pw) {
      st.btn = el('button', { type: 'button', class: 'gra-t' });
      st.btn.addEventListener('click', function () { setOff(!isOff()); apply(st); });
      pw.appendChild(st.btn);
    }
    new MutationObserver(function (recs) {
      var regroup = false, recount = false;
      recs.forEach(function (r) {
        if (r.type === 'childList') {
          Array.prototype.forEach.call(r.addedNodes, function (x) { if (x.nodeType === 1 && x.classList.contains('gr-item')) regroup = true; });
          Array.prototype.forEach.call(r.removedNodes, function (x) { if (x.nodeType === 1 && x.classList.contains('gr-item')) regroup = true; });
        } else if (r.target.classList && r.target.classList.contains('gr-item')) recount = true;
      });
      if (regroup) later(st);
      else if (recount) counts(st);
    }).observe(list, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
    if (PMAP) return apply(st);
    var t = setTimeout(function () { apply(st); }, 2500);   /* keywords only, if the Products tab is slow */
    WAIT.push(function () { clearTimeout(t); apply(st); });
    loadProducts();
  }

  function scan() { Array.prototype.forEach.call(D.querySelectorAll('.gr-wrap'), setup); }
  function start() {
    scan();
    new MutationObserver(scan).observe(D.body, { childList: true });
    W.addEventListener('hashchange', function () { setTimeout(scan, 0); });
  }
  if (D.body) start(); else D.addEventListener('DOMContentLoaded', start);
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 38 Run Sheet Aisles', e); } catch (e2) {} }
__ggsxE("ed129f8d-5b54-4196-bfe7-ae990009f1b5#0");

/* ===== GrocerGoSx SEO Content (e289f192-d106-44a8-b1ad-815c9bfc9d86, rev 1) ===== */
__ggsxB("e289f192-d106-44a8-b1ad-815c9bfc9d86#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxSeo) { W.__ggsxSeo.run(); return; }
  var A = 'Anywhere on the island, Dutch and French side: Simpson Bay, Maho, Cupecoy, Cole Bay, Philipsburg, Marigot, Grand Case, Orient Bay, Terres Basses and the marinas. Deliveries to the French side carry the French-side delivery fee.';
  var PAY = 'Not at checkout. We confirm your total by message and send a secure card payment link first; bank transfer or cash works too, at the same price, all in US dollars.';
  var T = {
    '/restaurants': { h: 'Restaurant pickup and food delivery across St. Maarten', p: [
      'GrocerGoSx is a food delivery and restaurant pickup service for the whole island. Pick a restaurant above, add dishes to your basket and check out; we collect the order at the restaurant and bring it to your villa, hotel, condo or boat on the Dutch or French side, with every fee shown before you order and taxes included.',
      'Restaurants on GrocerGoSx include Hanami Sushi & Asian Cuisine in Cole Bay (sushi, sashimi, poke bowls, ramen and grills), Subway in Simpson Bay (subs, Subway Series, breakfast and party platters) and Rolling Boil in St. Peter’s (seafood boil boxes with shrimp, crawfish, snow crab and mussels). More local restaurants are added as we partner with them; if your favourite isn’t listed, message us and we’ll see what we can do.',
      'Food delivery in St. Maarten the GrocerGoSx way: your food is charged at the restaurant’s menu price, plus a service fee and a delivery fee that you see at checkout. You can add groceries, pharmacy items or an errand to the same run, and every order comes with a live order page so you can follow it.'],
      f: [['Which areas do you deliver restaurant food to?', A],
        ['How long does restaurant delivery take?', 'It depends on the restaurant’s preparation time and where you are on the island. We confirm your delivery window by message once the order is in, and your live order page shows the driver on the way.'],
        ['Can I order from two restaurants in one delivery?', 'Yes. Each extra restaurant on the same run adds a small pickup fee, shown at checkout before you order.'],
        ['Do you deliver late at night?', 'Our hours are 8:30 AM to 11 PM daily. Restaurant orders follow each restaurant’s opening hours, and the Late Night Snack Run (Thursday to Saturday until 11:30 PM) covers snacks and drinks.'],
        ['How do I pay?', PAY]] },
    '/pharmacy': { h: 'Pharmacy delivery in St. Maarten, Dutch and French side', p: [
      'Need something from the pharmacy but would rather stay by the pool or with the kids? Tell GrocerGoSx what you need, from over-the-counter medicine, pain relief, sunscreen, after-sun and baby essentials to a prescription that is ready for collection, and we pick it up and deliver it to your villa, hotel, condo or boat anywhere on the island.',
      'Pharmacy items are charged at the pharmacy’s receipt price, plus our service fee and delivery fee, shown before you confirm; taxes are included. A pharmacy stop can also be added to a grocery run or a restaurant pickup, so one delivery covers everything.'],
      f: [['Can you pick up a prescription for me?', 'Yes. Tell us which pharmacy it’s at (or send a photo of the prescription by message) and whether the pharmacy needs anything from you; we collect it with your run and keep you posted on your live order page.'],
        ['What if the pharmacy doesn’t have what I asked for?', 'We message you with the closest alternative the pharmacist suggests, or skip the item: your choice. Nothing is swapped without your OK.'],
        ['Which pharmacies do you go to?', 'Any pharmacy on the Dutch or French side. If you don’t have a preference, we use the nearest one that has your items in stock.'],
        ['How do I pay?', PAY]] },
    '/shop-now': { h: 'How online grocery shopping with GrocerGoSx works', p: [
      'Browse the departments above, from fresh produce, dairy and meat to pantry staples, snacks, drinks, baby, household and pet supplies, and add what you need to your basket. Prices are GrocerGoSx concierge prices, worked out from the island’s supermarket shelf prices, and the price you see is the price you pay.',
      'At checkout you choose a delivery date and window, tell us where you’re staying (villa, condo, hotel or marina, Dutch or French side) and see your service fee and delivery fee before you place the order. We shop, you follow every item on your live order page, and we deliver to your door, with substitutions only with your say-so.'],
      f: [['What are the delivery windows?', 'Delivery windows run daily from 8:30 AM to 11 PM. Same-day windows are often available; booking 48 hours ahead gets you our planned-run rates and the window you want in high season.'],
        ['Can I order groceries before I arrive in St. Maarten?', 'Yes. Shop online from home, pick your arrival date and a window before check-in, and we stock the villa with your host’s OK. See Pre-Arrival Villa Stocking for how access works.'],
        ['What if an item is out of stock?', 'Island supply varies. At checkout you choose whether we substitute the closest match, message you first or skip the item, and you can set a different choice per item.'],
        ['Where do you deliver?', A],
        ['How do I pay?', PAY]] },
    '/laundry': { h: 'Laundry pickup and delivery in St. Maarten', p: [
      'GrocerGoSx collects your laundry from your villa, hotel, condo or boat, has it washed, dried and folded, and brings it back, Dutch or French side. Use the estimator above to tell us roughly how many bags you have and when you need it back; wash and fold is priced per pound, weighed at pickup, plus a pickup fee and a return fee that you see before you confirm.',
      'Laundry can be ordered on its own or added to a grocery run, so one visit covers your groceries and your washing. Care notes (delicates, cold wash, no dryer) are welcome.'],
      f: [['How is laundry priced?', 'Per pound of wash and fold, weighed at pickup, plus a pickup fee and a return fee shown on this page and at checkout. Every price includes applicable taxes.'],
        ['When do I get it back?', 'Pick the return window you need in the form above; we confirm by message whether it’s possible for that day and keep you posted on your live order page.'],
        ['Do you cover the French side?', 'Yes: Marigot, Grand Case, Orient Bay, Terres Basses and the rest of French Saint-Martin, as well as all of Dutch Sint Maarten.']] },
    '/errands': { h: 'Errand service in St. Maarten: bills, documents, parcels and pickups', p: [
      'GrocerGoSx runs the errands you’d rather not spend your island time on: paying utility or phone bills, collecting court stamps and documents, dropping off or picking up parcels, returns and repairs, and pickups from shops on either side of the island. Describe the errand in the form above and you get an estimate before anything is booked.',
      'What we pay on your behalf is passed on at exact cost with the receipt, plus our service fee and delivery fee. Errands can be bundled with a grocery run or a restaurant pickup, so one delivery covers everything on your list.'],
      f: [['What errands can you run?', 'Bill payments, document and court-stamp runs, parcel drop-offs and pickups, store pickups and returns, and most other “can someone grab this for me” requests. If it’s unusual, ask: we’ll tell you quickly if it’s possible.'],
        ['Do I pay for the errand before you go?', 'We confirm the estimate by message and send a secure payment link before we start. Anything paid on your behalf is itemised on your invoice with the receipt.'],
        ['Can you handle errands on the French side?', 'Yes, we cover Marigot, Grand Case, Orient Bay and the rest of French Saint-Martin as well as Dutch Sint Maarten.']] },
    '/how-it-works': { h: 'Grocery delivery in St. Maarten, step by step', p: [
      '1. Order: shop more than 3,000 supermarket items online on Shop Now, or send us your list by WhatsApp, iMessage, text or email. 2. Confirm: we check your list, show your service fee and delivery fee, and send a secure payment link. 3. We shop: follow every item on your live order page as we shop the island’s supermarkets, with substitutions only on your terms. 4. Delivered: to your villa, hotel, condo or boat, Dutch or French side, in the window you chose, and put away on request for pre-arrival stockings.'],
      f: [['What can I order besides groceries?', 'Restaurant pickups, pharmacy runs, laundry, errands and bill payments, yacht provisioning and ready-made villa stocking kits. Everything can go on one run.'],
        ['Which areas do you cover?', 'The whole island: Dutch Sint Maarten and French Saint-Martin, from Philipsburg and Simpson Bay to Marigot and Orient Bay. See the Delivery Area page for the full list.'],
        ['When are you open?', 'Daily from 8:30 AM to 11 PM, until 11:30 PM Thursday to Saturday for the Late Night Snack Run.'],
        ['Can I track my order?', 'Yes. Every order comes with a live order page where you see each item as it’s shopped, any substitutions, and the driver on the way.'],
        ['How do I pay?', PAY]] }
  };
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;'); }
  function path() { return (location.pathname || '/').replace(/\/+$/, '') || '/'; }
  function mainEl() { return D.querySelector('main[id^="PAGE_SECTIONS"]') || D.querySelector('main'); }
  function build(c) {
    var s = D.createElement('div');
    s.className = 'ggsx-seo';
    s.setAttribute('data-ggsx-seo', path());
    var html = '<div class="ggsx-seo-box"><h2>' + esc(c.h) + '</h2>';
    c.p.forEach(function (p) { html += '<p>' + esc(p) + '</p>'; });
    if (c.f && c.f.length) {
      html += '<h3>Good to know</h3>';
      c.f.forEach(function (q) { html += '<details><summary>' + esc(q[0]) + '</summary><p>' + esc(q[1]) + '</p></details>'; });
    }
    s.innerHTML = html + '</div><div class="ggsx-seo-more"><button type="button" aria-expanded="false">Read more</button></div>';
    var box = s.firstChild, btn = s.querySelector('button'), ref = D.querySelector('main p');
    if (ref) s.style.fontFamily = W.getComputedStyle(ref).fontFamily;
    box.classList.add('ggsx-seo-clamp');
    btn.addEventListener('click', function () {
      var open = box.classList.toggle('ggsx-seo-clamp') === false;
      btn.textContent = open ? 'Show less' : 'Read more';
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    return s;
  }
  /* Where the block goes: appended to the Editor intro section (below its text), else to the page engine's root,
     else to the page's last section. Never a new main child: Wix's grid would put it under the footer. */
  function host(main) {
    var h = main.querySelector('section.ggsx-note-sec') || main.querySelector('#ggsx-page,#ggsx-shop,#ggsx-home,#ggsx-more-page,section[id^="ggsx-"]');
    if (!h) { var secs = main.querySelectorAll(':scope > section'); h = secs.length ? secs[secs.length - 1] : null; }
    return h;
  }
  function alts() {
    var imgs = D.querySelectorAll('img:not([alt]), img[alt=""]'), i, img, card, t, h;
    for (i = 0; i < imgs.length; i++) {
      img = imgs[i];
      if (img.getAttribute('data-ggsx-alt')) continue;
      t = img.getAttribute('title') || img.getAttribute('aria-label') || '';
      if (!t) {
        card = img.closest('a,button,article,li,figure,[class*="card"],[class*="tile"],[class*="item"]');
        h = card && card.querySelector('h1,h2,h3,h4,strong,figcaption,[class*="title"],[class*="name"]');
        t = h ? (h.textContent || '').replace(/\s+/g, ' ').trim() : '';
      }
      if (!t || t.length > 120) { t = (D.querySelector('h1') || {}).textContent || D.title || 'GrocerGoSx'; t = String(t).replace(/\s+/g, ' ').trim().slice(0, 100); }
      img.setAttribute('alt', t);
      img.setAttribute('data-ggsx-alt', '1');
    }
  }
  function run() {
    var p = path(), c = T[p], main = mainEl(), h;
    if (main && c && !D.querySelector('[data-ggsx-seo="' + p + '"]')) {
      h = host(main);
      if (h) {
        var el = build(c), sec = h.closest('section'), bg = 'rgb(255, 255, 255)', e = h;
        while (e && e !== D.documentElement) { var cbg = W.getComputedStyle(e).backgroundColor; if (cbg && cbg !== 'transparent' && !/rgba\(\s*0,\s*0,\s*0,\s*0\s*\)/.test(cbg)) { bg = cbg; break; } e = e.parentNode; }
        el.style.setProperty('--ggsx-seo-bg', bg);
        h.appendChild(el);
        if (sec) sec.classList.add('ggsx-seo-host');
      }
    }
    alts();
  }
  var q = false;
  function later() { if (q) return; q = true; (W.requestAnimationFrame || setTimeout)(function () { q = false; run(); }); }
  new MutationObserver(later).observe(D.documentElement, { childList: true, subtree: true });
  W.__ggsxSeo = { run: run };
  run();
})();
} catch (e) { try { console.warn('[GGSX bundle] SEO Content', e); } catch (e2) {} }
__ggsxE("e289f192-d106-44a8-b1ad-815c9bfc9d86#0");
__ggsxCss("id=\"ggsx-seo-css\"", "\nmain section.ggsx-seo-host{height:auto!important;min-height:0!important;max-height:none!important;overflow:visible!important}\n.ggsx-seo{display:block;width:100%;box-sizing:border-box;padding:10px 0 26px;text-align:left;font-family:inherit}\n.ggsx-seo .ggsx-seo-box{max-width:760px;margin:0 auto;padding:0 20px;box-sizing:border-box;position:relative}\n.ggsx-seo .ggsx-seo-box.ggsx-seo-clamp{max-height:7.6em;overflow:hidden}\n.ggsx-seo .ggsx-seo-box.ggsx-seo-clamp:after{content:\"\";position:absolute;left:0;right:0;bottom:0;height:2.4em;background:linear-gradient(rgba(255,255,255,0),var(--ggsx-seo-bg,#fff))}\n.ggsx-seo h2,.ggsx-seo h3{font-size:16px!important;line-height:1.35!important;font-weight:700!important;color:#3d3d3d!important;margin:0 0 6px!important;letter-spacing:normal!important;text-transform:none!important}\n.ggsx-seo h3{margin-top:10px!important}\n.ggsx-seo p,.ggsx-seo summary{font-size:14px!important;line-height:1.6!important;color:#6b6b6b!important;margin:0 0 8px!important;font-weight:400!important}\n.ggsx-seo summary{cursor:pointer;color:#3d3d3d!important;font-weight:600!important}\n.ggsx-seo details{margin:0 0 4px}\n.ggsx-seo details>p{margin:4px 0 8px 14px!important}\n.ggsx-seo-more{max-width:760px;margin:6px auto 0;padding:0 20px;box-sizing:border-box;text-align:center}\n.ggsx-seo-more button{background:none;border:0;padding:4px 0;margin:0;color:#F4551B;font-weight:700;font-size:14px;line-height:1.4;cursor:pointer;font-family:inherit}\n.ggsx-seo-more button:focus-visible{outline:2px solid #F4551B;outline-offset:2px;border-radius:4px}\n");

/* ===== GrocerGoSx Shop 39 Department Menu (shop39-department-menu, rev bundle-only) ===== */
__ggsxCss("", "\n@media (min-width:861px){\n#ggsx-shop .gs-nav{max-height:calc(100vh - 112px);overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin;scrollbar-color:#cfc9c1 transparent;--nt:0px;--nb:0px;-webkit-mask-image:linear-gradient(180deg,transparent 0,#000 var(--nt),#000 calc(100% - var(--nb)),transparent 100%);mask-image:linear-gradient(180deg,transparent 0,#000 var(--nt),#000 calc(100% - var(--nb)),transparent 100%)}\n#ggsx-shop .gs-nav.gs-nt{--nt:22px}\n#ggsx-shop .gs-nav.gs-nb{--nb:36px}\n#ggsx-shop .gs-nav .gs-navsubs{display:flex;flex-direction:column;gap:1px;margin:2px 0 8px 14px;padding:4px 0 4px 10px;border-left:2px solid #f6c7b3}\n#ggsx-shop .gs-nav .gs-navsubs button{display:block;width:100%;text-align:left;border:0;background:none;padding:6px 10px;border-radius:10px;font-size:14px;font-weight:400;line-height:1.3;color:#3b3b3b;white-space:normal}\n#ggsx-shop .gs-nav .gs-navsubs button:hover{background:#fff;color:var(--ink)}\n#ggsx-shop .gs-nav .gs-navsubs button.on{background:#fff;color:var(--o);font-weight:700;box-shadow:inset 0 0 0 1.5px var(--o)}\n#ggsx-shop .gs-nav .gs-navsubs button:focus-visible{outline:2px solid var(--o);outline-offset:1px}\n}\n@media (max-width:860px){\n#ggsx-shop .gs-navsubs{display:none}\n}\n");
__ggsxB("shop39-department-menu#0");
try {
(function () {
  var W = window, D = document;
  if (W.__ggsxDeptMenu) return;
  W.__ggsxDeptMenu = 1;
  var TXT = W.GGSX_DEPT_MENU = {
    all: 'All',                       /* first entry: the whole department */
    label: 'Sub-departments of '      /* screen-reader name of the list, followed by the department */
  };
  var busy = false;

  /* same slug rule as the Shop engine: "Dairy & Eggs" → dairy-and-eggs */
  function slug(t) { return String(t || '').toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''); }
  function narrow() { return W.matchMedia ? W.matchMedia('(max-width:860px)').matches : W.innerWidth <= 860; }
  function go(h) {
    if (location.hash.replace(/^#/, '') === h) return;   /* already there */
    location.hash = h;                                    /* the Shop engine listens for hashchange and redraws */
  }
  function remove(el) { if (el && el.parentNode) el.parentNode.removeChild(el); }

  /* faded top/bottom edges tell the client the menu scrolls when a long department (Pantry) is open */
  function edges(nav) {
    var more = nav.scrollHeight > nav.clientHeight + 1;
    nav.classList.toggle('gs-nt', more && nav.scrollTop > 2);
    nav.classList.toggle('gs-nb', more && nav.scrollTop < nav.scrollHeight - nav.clientHeight - 2);
  }
  /* the menu never runs past the bottom of the window: it scrolls inside instead (it sits lower on the page until it sticks) */
  function fit(nav) {
    if (narrow()) { if (nav.style.maxHeight) nav.style.maxHeight = ''; return; }
    var top = nav.getBoundingClientRect().top;
    var v = Math.max(240, Math.floor(W.innerHeight - Math.max(top, 0) - 16)) + 'px';
    if (nav.style.maxHeight !== v) nav.style.maxHeight = v;
  }
  var ticking = false;
  function later() { if (!ticking) { ticking = true; (W.requestAnimationFrame || setTimeout)(function () { ticking = false; var n = D.querySelector('#ggsx-shop .gs-nav'); if (n) { fit(n); edges(n); } }); } }
  function watch(nav) {
    if (nav.__ggsxNavEdges) return;
    nav.__ggsxNavEdges = 1;
    nav.addEventListener('scroll', function () { edges(nav); }, { passive: true });
  }
  /* scroll the menu only as far as needed: the open department stays in view, and so does the chosen sub-department */
  function reveal(nav, on, box) {
    try {
      if (nav.scrollHeight <= nav.clientHeight + 1) return;
      var cur = box.querySelector('button.on') || box.firstElementChild;
      var top = on.offsetTop - 8, bottom = cur ? cur.offsetTop + cur.offsetHeight + 8 : top;
      if (top < nav.scrollTop) nav.scrollTop = Math.max(0, top);
      else if (bottom > nav.scrollTop + nav.clientHeight) nav.scrollTop = Math.max(top, bottom - nav.clientHeight);
    } catch (e) {}
  }

  function check() {
    busy = false;
    var s = D.getElementById('ggsx-shop');
    if (!s) return;
    var nav = s.querySelector('.gs-nav');
    if (!nav) return;
    watch(nav);
    fit(nav);
    draw(s, nav);
    if (narrow()) nav.classList.remove('gs-nt', 'gs-nb'); else edges(nav);
  }
  function draw(s, nav) {
    var old = nav.querySelector('.gs-navsubs');
    var m = /^#?d\/([^\/]+)(?:\/([^\/]+))?/.exec(location.hash || '');
    var on = m && !narrow() ? nav.querySelector('.gs-navb.on') : null;
    if (!on || on === nav.firstElementChild) { remove(old); return; }   /* home, search, or "All departments" */
    var chips = [].slice.call(s.querySelectorAll('.gs-main .gs-subs .gs-chip'));
    if (chips.length < 2) { remove(old); return; }                        /* a department with no sub-departments */
    var dslug = m[1], sub = m[2] || '';
    var names = chips.slice(1).map(function (c) { return c.textContent.trim(); });
    var sig = dslug + '|' + sub + '|' + names.join('\u0001');
    if (old && old.getAttribute('data-sig') === sig && old.previousElementSibling === on) return;   /* already drawn */
    remove(old);
    var box = D.createElement('div');
    box.className = 'gs-navsubs';
    box.setAttribute('role', 'group');
    box.setAttribute('aria-label', TXT.label + ((on.firstChild && on.firstChild.textContent) || '').trim());
    box.setAttribute('data-sig', sig);
    function item(text, h, isOn) {
      var b = D.createElement('button');
      b.type = 'button';
      b.className = 'gs-navs' + (isOn ? ' on' : '');
      b.textContent = text;
      if (isOn) b.setAttribute('aria-current', 'true');
      b.addEventListener('click', function () { go(h); });
      box.appendChild(b);
    }
    item(TXT.all, 'd/' + dslug, !sub);
    names.forEach(function (n) { var sl = slug(n); item(n, 'd/' + dslug + '/' + sl, !!sub && sl === sub); });
    on.parentNode.insertBefore(box, on.nextSibling);
    reveal(nav, on, box);
  }
  function soon() { if (!busy) { busy = true; Promise.resolve().then(check); } }

  new MutationObserver(soon).observe(D.body, { childList: true, subtree: true });
  W.addEventListener('hashchange', soon);
  W.addEventListener('resize', soon);
  W.addEventListener('scroll', later, { passive: true });
  check();
})();
} catch (e) { try { console.warn('[GGSX bundle] Shop 39 Department Menu', e); } catch (e2) {} }
__ggsxE("shop39-department-menu#0");
