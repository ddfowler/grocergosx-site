# GrocerGoSx site code bundle — source package v1.2

`ggsx-body.js` is the single external script that runs the "Body – end" site code of grocergosx.com (Wix Harmony, site ID
`c1f8709f-fe64-4674-a830-0417bef25a2e`). It is loaded by the Custom Code snippet **GrocerGoSx Bundle Loader**
(Settings → Custom Code, Body end, all pages, each new page, Essential; id `d06df95b-02f7-442a-a6f1-89b740d4798e`) and
served from the site's own Media Manager, folder **Site code bundle** (id `9e7b645b6616415b8b5f9b9ccd73b8ff`), cached 180 days.

## What is in this package

* `dist/ggsx-body.js`, `dist/ggsx-body.js.gz` – the live v1.2 files, byte-identical to what the site serves
* `src/<id>.html` + `.json` – the source of every bundled module (61) plus the 4 HEAD/Body-start snippets, with name, revision and settings
* `order.json` – the bundled modules in execution order
* `build.js` – rebuilds `dist/` from `src/` (`npm install`, then `node build.js <version>`)
* `loader.html` – the live Bundle Loader snippet (revision 5)
* `test-loader.js` – headless-Chromium check of `loader.html` against the hosted files (`node test-loader.js`)
* `tests/` – page-change tests (need Playwright): `pileup-audit.js` (what piles up after simulated page changes),
  `checkout-after-page-changes.js` (opens the checkout after several page changes, nothing is sent) and `render-compare.js`
  (page text of 15 page types, fresh and after a page change, to compare two builds). They make `addEventListener` read-only
  like the live Wix site does — the first v1.2 build passed the tests without that and still failed on the site.

## Live files

| build | copy | Media Manager name | URL | bytes | md5 |
|---|---|---|---|---|---|
| **v1.2** (live since 1 Nov 2026) | gzip | `ggsx-body-v1.2.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_4912c66a5e724b54aab69640835faa41.txt | 185,087 | `42ed746cf1caf9590d3c3cae30aba139` |
| **v1.2** | plain | `ggsx-body-v1.2.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_ee95a697328346e3b61f71d0151c8805.txt | 602,673 | `923ee13ae86da04a7a36c9b49ff4d128` |
| v1.1 (previous) | gzip | `ggsx-body-v1.1.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_06805e22cc8c4ab0886515e9abf10877.txt | 182,844 | `9e97cff75185dc1e8ebdd591ebd0b863` |
| v1.1 (previous) | plain | `ggsx-body-v1.1.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_18dbe117ace64e60ba953b18652cbfd7.txt | 593,129 | `12d65db1a2c46f3dca17115add5dc0f2` |
| v1.0 | gzip | `ggsx-body-v1.0.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_d2afda9e935446149673f46b8d91ab29.txt | 180,069 | `06aaeb07b3f06f51ae0a3bf8feed7f9a` |
| v1.0 | plain | `ggsx-body-v1.0.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_804de5b6f4324218bba9512cf2d22eda.txt | 585,852 | `3c515c9ac500da3fcb5dba1a129fcf12` |

`ggsx-body-v1.2-superseded.txt` / `.gz.txt` in the same folder are a first v1.2 build that was live for about half an hour on
1 Nov 2026: its listener tracking patched `EventTarget.prototype.addEventListener`, which is read-only on the Wix site, so the
duplicate checkout fields stayed. Don't use them.

## History

* **v1.0** (1 Nov 2026) – the 60 Body-end Custom Code snippets bundled as exported; the 60 snippets were then disabled in Wix.
* **v1.1** (1 Nov 2026) – adds **Shop 39 Department Menu** (bundle-only: it has no Custom Code copy, `src/shop39-department-menu.html` is
  its only source) and the department renames (Chilled Foods → Dairy & Eggs, which now also holds Milk & Dairy; Fresh Foods → Meat, Fish & Deli)
  in **Header Basket & Store Links** (department slugs, Milk & Dairy link `4/milk-and-dairy`) and **Shop 38 Run Sheet Aisles** (aisle map).
* **v1.2** (1 Nov 2026) – nothing piles up any more when a visitor clicks from page to page. The site code runs again on every
  page change (as the inline snippets did), and many modules registered their window/document listeners and observers again
  each time, so after a few pages the checkout opened one window per page viewed, each with the "If unavailable" field repeated,
  and the phone bars, header search box and basket icon were stacked in copies. Changes:
  * `build.js`: every module runs between `__ggsxB(key)` and `__ggsxE(key)`. Listeners added to window, document, `<html>` or
    `<body>` and MutationObservers created during the module's run are recorded with a signature (target, event, capture flag,
    hash of the handler's source); when the module's next run registers the same signature, the previous run's copy is removed /
    disconnected. Registrations a module makes only once (behind its own window flag) are left alone. Wix makes
    `EventTarget.prototype.addEventListener` (and `window.setInterval`) read-only, so the wrapper is an own `addEventListener`
    property on those four objects for the duration of the module's run.
  * **App Shell** v1.3.4 and **Header Basket & Store Links** v1.1.3: run once per visit (their own observers follow page changes).
  * **Shop 3 Checkout** v1.17: the checkout window is marked `data-ggsx-co`; building a new one removes the older one, so other
    snippets that look up `.gc-wrap` always find the open window.
  * **Footer Site Map** v1.5: the row is moved back to the end of `#SITE_PAGES` when Wix swaps in the next page (it used to end up
    above the header after the first click).
  * Loader v1.2: removes its `<script>` copy of the code once it has run (it used to leave a 580 KB copy per page view).
  * Checked on 1 Nov 2026: fresh renders of 15 page types are identical to v1.1; after page changes, listeners stay at 105 and
    there is one checkout window with one set of fields. Known differences that predate v1.2: the home cards' order varies, and
    the Errands page eyebrow reads "Errand service" instead of "Concierge services › Errands" after a page change.

**Important:** the disabled Custom Code copies in Wix are v1.0. Re-enabling them would bring back v1.0 behaviour (no Shop 39, old
department names, the pile-ups). Never re-enable just one of them: if any of Pages 2–9, SEO Footnotes or SEO Content runs inline,
the loader sees its global (`GGSX_PAGES`, `__ggsxNote`, `__ggsxSeo`) and skips the whole bundle.

## Updating the site code

1. Edit the module in `src/` (or add `src/<id>.html` + `.json` and append `[id, name, size]` to `order.json`). A module that adds
   persistent elements to `<body>` should either run once per visit (window flag) or reuse/remove its previous copy.
2. `npm install && node build.js 1.3` → `dist/ggsx-body.js` + `dist/ggsx-body.js.gz`; the build report must say `BUNDLE PARSES OK` and list no `DUPLICATE`.
3. Run `node tests/pileup-audit.js dist/ggsx-body.js dist/ggsx-body.js.gz loader.html 4`, `node tests/checkout-after-page-changes.js …` and
   `node tests/render-compare.js …` (compare with the previous build's `dist/`).
4. Upload both to the **Site code bundle** folder as `ggsx-body-v1.3.txt` and `ggsx-body-v1.3.gz.txt` (Media API `generate-upload-url` with
   `mimeType: text/plain`, then PUT the bytes; Wix refuses `.js`). Media files are immutable, so each build is a new pair of URLs.
5. Put the two URLs into `loader.html` (`GZ`, `PLAIN`), run `node test-loader.js`, then PATCH the loader embed with its current revision.
   Wix can take up to about an hour to push a Custom Code change to cached pages; `https://www.grocergosx.com/?any=1` shows it at once.
6. Zip this folder (without `node_modules`) as `ggsx-site-code-source-v1.3.zip`, upload it to the same folder, and refresh the GitHub backup
   (update the archive URL and SHA-256 in `.github/workflows/backup-bundle.yml` of `ddfowler/grocergosx-site` and commit; the workflow commits the files).

Roll back a bad build: put the previous pair of URLs back into the loader (old files stay in the Media Manager).

The HEAD and Body-start snippets (App Icon, App Mode, First Paint, Microsoft Clarity, Shop 19, Shop 34 Fees & Prices, Splash) and the two
consent-category snippets (Shop 16 Live Baskets – Analytics, Shop 17 Checkout Follow-up – Functional) stay inline in Wix and are edited there.
