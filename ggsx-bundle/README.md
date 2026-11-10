# GrocerGoSx site code bundle — source package v2.2

Since v1.5 the "Body – end" site code of grocergosx.com (Wix Harmony, site ID `c1f8709f-fe64-4674-a830-0417bef25a2e`) is external
files: **ggsx-body** (the core, run on every page), **ggsx-home** (Home 1–3 and the Home Snapshot, run on `/` only), **ggsx-pages** (Pages 2–9,
run on the eight code-drawn service pages only) and, since v1.6, **ggsx-rentals** (Shop 41 Rentals 2 Page, run on `/rentals` only). Which build a visitor gets is decided by the **First Paint** Custom Code snippet in the head
(`BUILDS` / `LIVE`; id `6a5a38e9-c19a-497e-aa91-a9e32867c9aa`), which also starts downloading that page's files straight away; the
**GrocerGoSx Bundle Loader** snippet (Settings → Custom Code, Body end, all pages, each new page, Essential; id `d06df95b-02f7-442a-a6f1-89b740d4798e`)
runs them. The files live in the site's own Media Manager, folder **Site code bundle** (id `9e7b645b6616415b8b5f9b9ccd73b8ff`), cached 180 days.
**Live: build 22 (v2.2, checkout helpers: the basket's estimate line, "As soon as possible", "Dates not set yet?", saved basket links) for every visitor since 9 Nov 2026** (First Paint rev 20; rev 19 had it on the test link only). A test link `?ggsx_v=<build>` (for example
`https://www.grocergosx.com/?ggsx_v=18` for the previous build) shows another build of `BUILDS` in that browser tab only (`?ggsx_v=0` goes
back); PageSpeed Insights can test such a link.

## What is in this package

* `dist/ggsx-body.js`, `dist/ggsx-home.js`, `dist/ggsx-pages.js`, `dist/ggsx-rentals.js` and their `.gz` – the files of build 22, byte-identical to the hosted ones: the v2.2
  core file and, unchanged, the v2.0 home, pages and rentals files (a v2.1 build of those differs only in the version in their first line)
* `src/<id>.html` + `.json` – the source of every bundled module (71 since v2.2: + Shop 45 Basket Estimate & ASAP, Shop 46 Saved Basket Links; 69 since v2.0: + Shop 44 Shopping Hours; 68 since v1.9: + Shop 43 Search Help; 67 since v1.8: + Shop 42 Sold by Weight; 66 since v1.6: + Shop 41 Rentals 1–3) plus the HEAD/Body-start snippets
  (App Icon, App Mode, First Paint, Microsoft Clarity, Shop 19 Short Tracker Links, Splash), with name, revision and settings
* `order.json` – the modules in execution order; `groups.json` – which modules go to which group file, and on which pages each group runs
* `snapshot.js` – rebuilds `src/home-snapshot.html` (the home page's first screen, from the Vendors & Menus sheet); run it before each build
* `build.js` – rebuilds `dist/` from `src/` (`npm install`, then `node build.js <version>`); each module is minified on its own (whitespace,
  comments, local names) unless `MINIFY=0`
* `loader.html` – the live Bundle Loader snippet; `restore/` – copies of every snippet and module as they were before v1.5
* `test-loader.js` – checks First Paint + the loader against the hosted files, for every build in `BUILDS` (`node test-loader.js`; since v1.6 also /rentals)
* `tests/` – (need Playwright) `pileup-audit.js` (what piles up after simulated page changes), `checkout-after-page-changes.js` (opens the
  checkout after several page changes, nothing is sent), `render-compare.js` (page text of 15 page types, fresh and after a page change, to
  compare two builds), `speed-check.js` (the home page on a slowed-down phone or a desktop: CLS with every layout shift, LCP, blocking time,
  screenshots; `old` = v1.4, `new` = this build; `NAV=1` also tests page changes), `perf-modules.js` (CPU time per module). The first three
  take a dist folder (`node tests/pileup-audit.js dist loader.html 6`) or, for old builds, `bundle.js bundle.js.gz loader.html`.
  v1.6: `rentals-check.js` (the Rentals page and rentals at checkout on the harness with the real sheet: `node tests/rentals-check.js dist
  loader.html <Shop 34 head script>`; nothing is sent). v1.8: `weight-check.js` (items sold by weight, same arguments: it marks three products
  "per lb" as the sheet is read, then walks Shop Now, checkout, the run sheet in lb and kg, the client's page, the order editor, the home search).
* `tests/search-help-check.js` (v1.9) – Shop Now search help: `node tests/search-help-check.js dist loader.html` (typo, exact search, no match → request card →
  request line in the basket, Fleet / Enima, more typos, pharmacy hand-off, phone width; nothing is sent).
* `tests/shopping-hours-check.js` (v2.0) – shopping hours at checkout: `node tests/shopping-hours-check.js dist loader.html` (49 checks: groceries at
  different island times with Playwright's clock, a snacks-drinks-ice basket on a Friday night and its order notes, a Monday night, Sunday, a
  pharmacy-only basket, a holiday and a Saturday with other hours added to the Settings tab as the site reads it, a restaurant window that has to
  stay off after a date change, phone width; the one order placed is caught, nothing is sent).
* `patches/` – v2.1: `ops-v1.1.2-confirm-message.py` + `.js` (the change made to the built Orders app v1.1.1 → v1.1.2; make the same change in
  `ggsx-ops/app/src` before the next app build); v2.0: `v2.0-shopping-hours.py` (the Shop 2 hook, Shop 12 v1.1, the wording in Pages 5, 8, 9 and SEO Content, and the order.json
  line for Shop 44, already applied to `src/`); v1.9: `v1.9-search-help.py` (the Shop 2 hooks and the order.json line for Shop 43, already applied to `src/`); v1.8: `v1.8-sold-by-weight.py` (the hooks the other modules got for Shop 42, already applied to `src/`) and
  `ops-v1.1.1-weights.py` (the change made to the built Orders app; its source `ggsx-ops/app/src` is not in this package, so make the same
  change there before the next app build); `ops/` – the Orders app files `ggsx-ops-v1.1.0.txt` (as built), `ggsx-ops-v1.1.1.txt` and `ggsx-ops-v1.1.2.txt` (live).
* `tests/checkout-helpers-check.js` (v2.2) – the four checkout helpers on the harness with the real sheet: `node tests/checkout-helpers-check.js dist loader.html
  inline/shop34-fees-live-copy-9nov2026.html inline/shop17-checkout-follow-up-v1.2-e506fbdc.html` (50 checks: estimate line and the same total at
  checkout, earliest delivery on a Friday afternoon and a Sunday night, Hanami "As soon as possible" at 7:39 PM and closed at 10:30 PM, "Dates not set
  yet?" and the order it sends, the not-sent record with the whole basket, +1 phone and finish link, the link restoring the basket on a phone, an
  unknown link, min_order 100, the three Settings switches; nothing is sent). `inline/` – copies of the inline snippets as live on 9 Nov 2026
  (Shop 17 Checkout Follow-up v1.2, Shop 34 Fees & Prices).
* `tests/ops-confirm-message-check.js` (v2.1) – the Confirmed message for every checkout case (`node tests/ops-confirm-message-check.js`, 24 checks);
  `tests/ops-confirm-app-check.js` – the whole Orders app on a phone-sized headless Chromium with a stand-in Orders API (`NODE_PATH=$(npm root -g)
  node tests/ops-confirm-app-check.js`): opens an order, both Message buttons, the chips and the WhatsApp/Text/Email links; nothing reaches the real API.

## Live files

| build | file | Media Manager name | URL | bytes | md5 |
|---|---|---|---|---|---|
| **v2.2** (live since 9 Nov 2026, First Paint `LIVE="22"`) | core, gzip | `ggsx-body-v2.2.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_9d7ec51e3c7449d1866a2e91da8aa0e1.txt | 149,922 | `259f69327a8170965d5776e501ab0ddf` |
| v2.2 | core, plain | `ggsx-body-v2.2.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_26aa4135aaa64ec88b06bb140ccdb53b.txt | 475,359 | `f1477fdeef888ccfed600182a8913c3d` |
| v2.2 | home, pages, rentals; Orders app | the v2.0 group files and `ggsx-ops-v1.1.2.txt` below (build 22 points at them) | | | |
| v2.1 (rollback: `?ggsx_v=21` or `LIVE="21"`; live 7 Nov – 9 Nov 2026) | core, gzip | `ggsx-body-v2.1.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_6b2e1fd38a004a1199e408ea66cff0b1.txt | 143,983 | `5ba7770a152bd0c887751d9fab95869c` |
| v2.1 | core, plain | `ggsx-body-v2.1.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_4708fe556af442f2ba849d9f730a3a75.txt | 457,037 | `fed399a73bae1d26a9e55dec23cc0478` |
| v2.1 | home, pages, rentals | the v2.0 files below (build 21 points at them) | | | |
| v2.1 | Orders app (loaded by the Ops Loader on `#ops`) | `ggsx-ops-v1.1.2.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_bc1f24b95d5549aeb29d2dba7efe87a6.txt | 92,787 | `5caf7e83aff4ee7bb1a9423205f470b6` |
| v2.0 (rollback: `?ggsx_v=20` or `LIVE="20"`; live 6 Nov – 7 Nov 2026) | core, gzip | `ggsx-body-v2.0.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_596c60a0b99c4317a048ab699ffbd18d.txt | 143,981 | `aae60771094a94f55b773f55a4ec5eb3` |
| v2.0 | core, plain | `ggsx-body-v2.0.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_dbd9107518b3450cb22953ae8f6a402f.txt | 457,037 | `78a1dea444f2b1e346d21824e6b29b5d` |
| v2.0 | home, gzip | `ggsx-home-v2.0.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_465b66b0d694416dbde06caf4001d581.txt | 21,078 | `fab766f24eb90fd06430f72f59cf3bfc` |
| v2.0 | home, plain | `ggsx-home-v2.0.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_9cb87049f0c3461aac90213e97be8116.txt | 63,933 | `62052c6205332a1f0d4ee3a2f0bb9802` |
| v2.0 | pages, gzip | `ggsx-pages-v2.0.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_20d878bd488b4024875b115294a65dc0.txt | 30,086 | `759a72122c0cdafa894b8710f153e130` |
| v2.0 | pages, plain | `ggsx-pages-v2.0.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_46609832a98147dca75697dfc52e335c.txt | 90,263 | `c81b4498571c92bb9f1173a141d1fec4` |
| v2.0 | rentals, gzip | `ggsx-rentals-v2.0.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_8f5d7f7eff3044b4977d50c728372e2b.txt | 10,689 | `8c940734a12a292450f91171b32b11e1` |
| v2.0 | rentals, plain | `ggsx-rentals-v2.0.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_9c7de257406e4d6287ae2ac126943399.txt | 30,884 | `4686f773f7ab760f00a7215a192f70c0` |
| v1.9 (rollback: `?ggsx_v=19` or `LIVE="19"`; live 5 Nov – 6 Nov 2026) | core, gzip | `ggsx-body-v1.9.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_8c8fc4f3be8041b39c4e7fff4b888f19.txt | 141,090 | `6801f0996926d69b3cc79ec2febab7be` |
| v1.9 | core, plain | `ggsx-body-v1.9.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_9db761f30fa446a7a5757e059f675a42.txt | 449,904 | `8826efe59d381b965784aaa9b1aac4c4` |
| v1.9 | home, gzip | `ggsx-home-v1.9.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_c3a1c21b7f004d1bbea8808d0c1c4998.txt | 21,081 | `321a94c48a7b1a266d9216e6372367b1` |
| v1.9 | home, plain | `ggsx-home-v1.9.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_7104f54a7c044d8e994fc14ab6089bd3.txt | 63,945 | `1c90c1bc7a151b58743ae77eaae32c16` |
| v1.9 | pages, gzip | `ggsx-pages-v1.9.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_f6668755dd20463da5651afa6983d5c6.txt | 30,031 | `c10dc816a0e3d849c442f44037081eab` |
| v1.9 | pages, plain | `ggsx-pages-v1.9.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_b2dbe8f757b7472c85c6145f8f377b00.txt | 90,136 | `786c3c10864386c082c0f0f92ac65b44` |
| v1.9 | rentals, gzip | `ggsx-rentals-v1.9.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_c8996a415051471496d2f6a4aa810fd6.txt | 10,689 | `e6207e9ff9487f2c0fa29d0022c1677d` |
| v1.9 | rentals, plain | `ggsx-rentals-v1.9.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_18148ac9fd024fcaa7eabcaeef4f302c.txt | 30,884 | `1fb4439f751bcabd529f9e49d128ed21` |
| v1.8 (rollback: `?ggsx_v=18` or `LIVE="18"`; live 4 Nov – 5 Nov 2026) | core, gzip | `ggsx-body-v1.8.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_8b685840a4554395a62aaaed628af631.txt | 137,939 | `29906a3d8d0cf58bb7376521dbd69d76` |
| v1.8 | core, plain | `ggsx-body-v1.8.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_3c75ae73bd6d4d5d8a0d149c07bbf943.txt | 440,842 | `88f0a4a7ba19fe773bbc3232b2b15a46` |
| v1.8 | home, gzip | `ggsx-home-v1.8.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_bf5829d64a1c420da3c0e92ed8beffc5.txt | 21,078 | `0ef08e7c6b2e3538b83ab8c5dd4cf9e9` |
| v1.8 | home, plain | `ggsx-home-v1.8.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_1e7c4039b64b4d31a90ef5e29ea992fd.txt | 63,937 | `e24a2b05291f9e003812cd0c20b62338` |
| v1.8 | pages, gzip | `ggsx-pages-v1.8.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_e008002126374f6385daf03859ebac3b.txt | 30,031 | `a2c25b6ce6c3354dd1f308054f6eafc3` |
| v1.8 | pages, plain | `ggsx-pages-v1.8.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_d3098f9de2f947e2b48decb57084779f.txt | 90,136 | `3e597a1c810c82830816f33bfcd3f6aa` |
| v1.8 | rentals, gzip | `ggsx-rentals-v1.8.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_bedc8b66cb3e4cf4b7ced2c4d86d893a.txt | 10,689 | `edcac8f7cbdff5e99f609a2b7c5e7ada` |
| v1.8 | rentals, plain | `ggsx-rentals-v1.8.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_520ed20011dc4532ad430b6d20ffa73c.txt | 30,884 | `b38c08526bf050d44e785e621d523a8e` |
| v1.7 (rollback: `?ggsx_v=17` or `LIVE="17"`; live 4 Nov 2026 until v1.8) | core, gzip | `ggsx-body-v1.7.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_5a9b01c4f15042d8a6310c93ce357da6.txt | 134,555 | `1f2dbbb57b0f2ac11ca40603e9ac0149` |
| v1.7 | core, plain | `ggsx-body-v1.7.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_b330a25d94f548dbbe8bbcfc7a356d0f.txt | 430,762 | `d4d1fa3f653a445eeee95764a2f5f16d` |
| v1.7 | home, gzip | `ggsx-home-v1.7.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_d387b93efb7441c285ce6c92a2ce3331.txt | 20,924 | `8628b5e368c53757278c0a8628dcdf32` |
| v1.7 | home, plain | `ggsx-home-v1.7.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_9c921f9af8ab4a33b77d5af09581762b.txt | 63,416 | `1fc31b54601fc8aaad5e338d9d6c82ed` |
| v1.7 | pages, gzip | `ggsx-pages-v1.7.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_8b4707d810cd4f51a3a7b5e72286bfa1.txt | 30,031 | `cf940196284e2f0129acfd07540d1434` |
| v1.7 | pages, plain | `ggsx-pages-v1.7.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_6abeaa3cd82f4459922bbee11afe6b8f.txt | 90,136 | `d176b48d8eaaa523250bb94533445dba` |
| v1.7 | rentals, gzip | `ggsx-rentals-v1.7.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_c9c83d8f6f8944ed9564d4bffff053d6.txt | 10,648 | `3b9472fe05252d4a55c3e7eb8f7f56ec` |
| v1.7 | rentals, plain | `ggsx-rentals-v1.7.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_a7797a5ef3af4776944aad5a50cde3f5.txt | 30,847 | `0c503dce370310fcbbb05ee094de2a26` |
| v1.6 (rollback: `?ggsx_v=16` or `LIVE="16"`; live 4 Nov 2026 until v1.7) | core, gzip | `ggsx-body-v1.6.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_e137d9b64ddd4e03954979d6103625eb.txt | 134,564 | `a4d33e7f30fa0d2d2e856bdc7f350222` |
| v1.6 | core, plain | `ggsx-body-v1.6.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_d7e223c1f1f44489ba4eda4d85217d04.txt | 430,774 | `9ca5a7d404bfad5fbf93c1ded5460bbf` |
| v1.6 | home, gzip | `ggsx-home-v1.6.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_94512b1c49644b13abb3c7d6097d100f.txt | 20,914 | `2b2709a8e979cfeb03957e3aacddc3a1` |
| v1.6 | home, plain | `ggsx-home-v1.6.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_b5744ed007c34a30a080ebbf50da3444.txt | 63,419 | `956f8d7702f2edbf18d8fea99fba85de` |
| v1.6 | pages, gzip | `ggsx-pages-v1.6.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_86370d5c118b468c9dd4e54b7ce5d084.txt | 30,065 | `7ed801014051379ddfbe15362acd5d80` |
| v1.6 | pages, plain | `ggsx-pages-v1.6.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_0ef580cac3cf42d58be026c99a45228f.txt | 90,209 | `b848c1a01ea7fc3bc72925d6c16eb7f7` |
| v1.6 | rentals, gzip | `ggsx-rentals-v1.6.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_12c1d7f331204a419f7106800fe27224.txt | 10,648 | `00bc3801da7b88b24e4a0ed2a6abe2f1` |
| v1.6 | rentals, plain | `ggsx-rentals-v1.6.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_dd3e05a103f14f9a89b320dfb8cf47e2.txt | 30,847 | `67bc5bec4814b16fdfcc6d09b736424c` |
| v1.5 (rollback: `?ggsx_v=15` or `LIVE="15"`; live 2 Nov – 4 Nov 2026) | core, gzip | `ggsx-body-v1.5.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_10b85db55cf8498aac4de36649cd5311.txt | 130,180 | `d5245fefb06336b1405ddea6db867ab1` |
| v1.5 | core, plain | `ggsx-body-v1.5.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_de4adc2e65f34ef4bc5457d71fca996e.txt | 417,571 | `187c721627eb5b5eef0009460cb4812e` |
| v1.5 | home, gzip | `ggsx-home-v1.5.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_fabbbfcb8ea3493391c284ad7bb03413.txt | 20,942 | `c87182eee6a1a6d189b33545dced29ea` |
| v1.5 | home, plain | `ggsx-home-v1.5.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_7d56ea73341b4c458c409b5df081b8b7.txt | 63,639 | `66e5363304915dc902bc1700563b85dc` |
| v1.5 | pages, gzip | `ggsx-pages-v1.5.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_393566fb2fdf41e8841c43d274fa1482.txt | 29,961 | `97cf18d9fea914d6947fa5b1345f515e` |
| v1.5 | pages, plain | `ggsx-pages-v1.5.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_980fb21fd2d847aeb56cd8dd6819e2c1.txt | 90,079 | `cb368367a6049e4ee7f318dece876598` |
| v1.4 (rollback: `?ggsx_v=14` or `LIVE="14"`; live 2 Nov 2026 until v1.5) | gzip | `ggsx-body-v1.4.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_f2e52822518449e08c58281866b826c9.txt | 186,496 | `be190451c793c9cbfe35ed3f80d91c69` |
| v1.4 (rollback) | plain | `ggsx-body-v1.4.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_935061aaa8034fdbb2467c0c5240deb8.txt | 606,628 | `41cfc48b7bc2a2318c65600964ac5abc` |
| v1.3 (rollback; loader rev 6) | gzip | `ggsx-body-v1.3.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_f82eac065e414f019a6df50675848788.txt | 186,446 | `7a272b90011dd59d579cb49ca166c250` |
| v1.3 (rollback) | plain | `ggsx-body-v1.3.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_04f03234ad44471e9c8f815adf083c99.txt | 606,566 | `5054df6fd4af66bcc1994557ba2cb577` |
| v1.2 (rollback) | gzip | `ggsx-body-v1.2.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_4912c66a5e724b54aab69640835faa41.txt | 185,087 | `42ed746cf1caf9590d3c3cae30aba139` |
| v1.2 (rollback) | plain | `ggsx-body-v1.2.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_ee95a697328346e3b61f71d0151c8805.txt | 602,673 | `923ee13ae86da04a7a36c9b49ff4d128` |
| v1.1 | gzip | `ggsx-body-v1.1.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_06805e22cc8c4ab0886515e9abf10877.txt | 182,844 | `9e97cff75185dc1e8ebdd591ebd0b863` |
| v1.1 | plain | `ggsx-body-v1.1.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_18dbe117ace64e60ba953b18652cbfd7.txt | 593,129 | `12d65db1a2c46f3dca17115add5dc0f2` |
| v1.0 | gzip | `ggsx-body-v1.0.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_d2afda9e935446149673f46b8d91ab29.txt | 180,069 | `06aaeb07b3f06f51ae0a3bf8feed7f9a` |
| v1.0 | plain | `ggsx-body-v1.0.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_804de5b6f4324218bba9512cf2d22eda.txt | 585,852 | `3c515c9ac500da3fcb5dba1a129fcf12` |

A first upload of v1.5 (same file names, before the core file was cut into steps; ids 85c3c2_5c667f1c…, 7298b3c4…, d5819303…, 0c920e00…, ad5c5e95…,
51ef1596…) is in the same folder and unused. `ggsx-body-v1.2-superseded.txt` / `.gz.txt` in the same folder are a first v1.2 build that was live for about half an hour on
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

* **v1.3** (1 Nov 2026) – adds **GrocerGoSx Ops Loader** (bundle-only module `ops-loader`, last in `order.json`): it opens Dwayne's phone app
  *GrocerGoSx Orders* at `/shop-now#ops`. The app is a separate Media file (`ggsx-ops-v1.0.0.txt`) loaded only on `#ops`, or on a run sheet
  opened from the app, so visitors never download it; the module holds `GGSX_OPS_CFG` (app file, Orders API web-app URL, app icons), shows an
  orange cover while the app loads, skips the intro screen and sends `#ops` on other pages to `/shop-now#ops`. It registers its two window
  listeners once per visit. Nothing else changed: fresh renders of the 15 page types are identical to v1.2, listeners stay flat after page
  changes (107 = v1.2's 105 + the loader's 2), the checkout test passes. Same day, the **Splash** snippet (Custom Code, rev 11, v10.1) was
  set to skip `#ops`, `#r/…` and `#run/…` (restore copy of rev 10: `ggsx-ops/restore/RESTORE-splash-rev10-d298f6a7.html`).
  App, API and their tests: `ggsx-ops/` (see its README).
* **v1.4** (2 Nov 2026) – the Ops Loader opens Orders app **v1.1.0** (`ggsx-ops-v1.1.0.txt`): after each step the client is emailed by the
  Orders API v1.1.0 and the app offers the same message on WhatsApp in one tap; new "I'm on my way" button; the order screen lists the
  emails sent. The bundle differs from v1.3 only in the version line and the app file URL (checked with a diff); the pile-up audit and the
  app's 101 phone checks pass. Loader rev 7 (restore copy of rev 6: `ggsx-ops/restore/RESTORE-bundle-loader-rev6-d06df95b.html`).

* **v1.5** (2 Nov 2026, page speed; live for every visitor since 2 Nov 2026: First Paint rev 6, Bundle Loader rev 9, Microsoft Clarity rev 3,
  Splash rev 12; before that on the test link `?ggsx_v=15` with First Paint rev 3) – PageSpeed found the home page jumping (CLS
  0.345 on phones, 0.265 on desktop), its largest picture arriving late, and a lot of work on the phone's processor. Measured causes and fixes:
  * **Home 3 Auto-slide v1.4**: v1.3.1 moved the end card round to the front before every slide, which Google counted as a layout shift of
    0.17–0.35 every 2 seconds (the site's whole CLS). Now a copy of the cards follows the originals and the row only scrolls. The first slide
    also waits until the page can be seen (Splash and white cover gone) + 4 s, so visitors see the first card.
  * **Home 2 Engine v2.0** + bundle-only **Home Snapshot** (`snapshot.js`): the home is drawn at once from the browser's copy from an earlier
    visit today or from the snapshot built in (Home tab, departments, restaurants, and for each of the 10 daily product samples the 20
    products on screen), then refreshed from the sheet in the background (prices in place; a changed card set redraws once if the visitor
    has not touched the page yet). The home reads the Vendors tab itself instead of all restaurant menus. `window.__ggsxHome` says where the
    first screen came from and what the refresh did.
  * **Shop 5**: `GGSX_MORE.load()` shares one download between callers; about ten snippets call it as a page opens and each used to fetch all
    four tabs (Vendors, Items, Options, Settings, ~120 KB) again – six full copies per page view.
  * **App Shell v1.3.5**: the top-bar logo is loaded at the size it is shown (8 KB instead of the 195 KB original) and has a fixed size.
  * **Page groups** (`groups.json`): `ggsx-home` and `ggsx-pages` run only on their pages; the rest is the core file. Each module is minified on its
    own. Home page download 151 KB instead of 186 KB (gzip), shop and other pages 130 KB.
  * **Short steps**: the core file carries marks between modules (`/*@@ggsx-yield@@*/` after App Shell and then every 5 modules, `groups.json` →
    `run`); the loader runs it part by part (`scheduler.postTask` user-blocking, else `setTimeout`), the page's group at `/*@@ggsx-group@@*/` (after
    Partner Links, where Home 1/2 and Pages 2–7 used to sit), and the home group in two parts (after Home 1). Each part keeps its line numbers.
    Home 2 also builds the sections below the first screen in a second step.
  * Head snippets: **First Paint v1.1** picks the build (`BUILDS`/`LIVE`, test link `?ggsx_v=`), starts downloading its files from the head,
    gives phones the App Shell page frame from the first paint (the tall Wix header used to be swapped for the slim bar when the site code ran:
    a layout shift of ~0.39), keeps the home's Wix Editor content hidden and its space reserved until the home is drawn (12-second fallback),
    waits for a page's group and the home's final version (`gh-done`), and loads its icon at 128 px. **Bundle Loader v1.5** runs the picked
    build's core file + the page's group, using First Paint's downloads, and fetches the other groups once the page is idle. **Microsoft Clarity
    v1.2** starts on the visitor's first touch, tap, key, mouse wheel or scroll of the page, or 15 s after the page has loaded (the hero row's own
    sliding does not count; v1.1 started 3 s after load, still inside Google's measuring window). **Splash v10.2** keeps the logo's space (its
    tagline jumped when the logo arrived).
  * **First Paint rev 5 + 6** (after the switch, from checks in Chrome on a computer): the first section of the home and of every page the
    site code draws (`CODE` in First Paint: Shop Now, Run, Restaurants, Pharmacy, the restaurant pages, Laundry, Errands, the 8 service pages;
    class `gg-cp`) keeps at least a screen of height from the first paint, so the Wix footer below it stays out of sight while the page is
    drawn. On computers Wix's own `min-height: 0` rule (home) and the site code's `section:has(> #ggsx-shop / #ggsx-page){min-height:0!important}`
    rules had won, so the footer sat under the header and then jumped down: 0.67 on the home with rev 4, 0.30 on Shop Now with v1.4 and 0.79
    with v1.5 (its "Loading…" box now comes in a separate step). The rule carries two `:not(#…)` only to outrank those rules. Phones were not
    affected. `tests/speed-check.js` now has Wix's rule in its page, and takes `FP=<first paint file>` and `PATH_=<page>`.
  * Checks (2 Nov 2026): render-compare – the 14 other page types are identical to v1.4 fresh and after a page change; the home shows the same
    cards (only the order differs: v1.4's slider had moved them round). Pile-up audit flat after page changes (33 observers, 108 listeners).
    Checkout test passes. Orders app: 101 phone checks pass. test-loader: builds 14 and 15, gzip and plain, home/pricing/shop all pass against
    the hosted files. speed-check (Wix-like page, phone 4x slower CPU + slow 4G): CLS 0.390 → 0.000, blocking 339 → 260 ms, load 4.99 → 2.78 s;
    desktop CLS 0.273 → 0.000. perf-modules (home, 4x CPU): site code 584 → 288 ms.
  * PageSpeed Insights, phone, 2 Nov 2026 (single runs vary a lot): normal link (v1.4) 25 – FCP 4.0 s, LCP 24.6 s, TBT 620 ms, CLS 0.345, SI 14.0 s
    (the scorecard's run: 20 – LCP 18.4 s, TBT 910 ms, SI 17.5 s); test link `?ggsx_v=15`: 33 / 35 / 40 – FCP 4.0–4.1 s, LCP 12.8 / 18.0 / 12.8 s,
    TBT 1,210 / 1,110 / 730 ms, CLS 0, SI 18.1 / 11.1 / 10.2 s. What is left is mostly Wix's own weight: a 3.7 MB page (2 MB of it CSS in the
    page, parsed as one ~1 s task on a phone), Wix's React, a Wix Forms widget, Facebook Pixel, Google Tag Manager, the AI chat, and Clarity
    (3 s after load is still inside Google's measuring window).
  * After the switch (2 Nov 2026, First Paint rev 6, Clarity v1.2), PageSpeed Insights, home page – phone: 36 (7:00 PM AST, cache-busting
    `?r=` link: FCP 4.0 s, LCP 19.2 s, TBT 950 ms, CLS 0, SI 12.3 s) and 54 (7:03 PM, normal link: FCP 3.2 s, LCP 8.2 s, TBT 320 ms, CLS 0.007
    – only Wix's "Chat with us" button, SI 9.5 s) and 46 (7:06 PM, normal link: FCP 4.0 s, LCP 24.3 s, TBT 480 ms, CLS 0, SI 11.3 s);
    computer: 59 (7:00 PM: FCP 0.7 s, LCP 1.7 s, TBT 650 ms, CLS 0.003, SI 3.8 s) and 54 (7:06 PM: FCP 0.7 s, LCP 1.8 s, TBT 1,240 ms,
    CLS 0.003, SI 3.9 s); at 7:03 PM Google's test server still got the old v1.4 page for computers from Wix's cache (48, CLS 0.265). Chrome on a computer (1440×759): home, Shop Now and Pricing
    each show only Wix's own chat button growing (0.003). Clarity no longer shows up in Google's report.
  * **Clarity is loaded twice**: besides the Custom Code snippet, Wix's own Microsoft Clarity connection (Marketing Integrations) loads
    `www.clarity.ms/tag/z0pzw2eygj?ref=wix` within a few seconds of the page loading, so Clarity still starts early whatever the snippet does.
    Keep one of the two: disconnecting the Wix connection keeps the late start (the snippet does everything, including Shop 16's tags).

* **v1.6** (4 Nov 2026, Rentals page; live for every visitor since 4 Nov 2026: First Paint rev 8, after the test link `?ggsx_v=16` with rev 7) –
  Dwayne asked for "a page where I can place all rental equipments", with clients booking through the basket and the Shop Now checkout.
  * **Shop 41 Rentals 1 Config** (core, after Shop 6, bundle-only): `window.GGSX_RENTALS` – the checkout wording (`ck`), the line prefix and the
    helpers the other two share (`GGSX_RENTALS.fn`: basket, dates in island time, collection fee, rental lines).
  * **Shop 41 Rentals 2 Page** (new group **rentals**, `/rentals` only; `groups.json` and `GROUPS` in First Paint): fills the blank Wix page
    grocergosx.com/rentals from the new **Rentals** tab of the Vendors & Menus sheet (id, category, item, size, description, photo, price_3day,
    price_week, qty, active; read through gviz, cached 2 minutes, the cache key `ggsx_pg_rentals` is cleared by Shop 34 on a refresh). Start and
    end date (both count; earliest start today + `rental_lead_days`, longest `rental_max_days`, up to `window_days` ahead), cards by category with
    the price for the dates, Add / quantity stepper (qty caps one booking, qty 0 = fully booked), a "Your rental" estimate (service fee and
    delivery fee as at checkout from GGSX_FEESET, + `rental_collection_fee` / `_french`), a phone bar above the tab bar. Prices: up to 3 days =
    price_3day, 4–7 days = price_week, longer = the week price per full week + the 3-day or week price for the days left over. One rental period
    per basket ("Use those dates" / "Move them to these dates"). Basket lines: id `rent:<item>:<start>:<end>`, name `Rental: <item> <size>`, size =
    the dates. Wording: `GGSX_RENTALS.page`.
  * **Shop 41 Rentals 3 Checkout** (core, last module so it wraps the others): a "Rental collection" fee on top of the extraFees chain (Shop 5,
    24 Laundry 3, 36 Errands 3), by island side, one per end date; a basket with only rentals gets its delivery date from the rental start
    (locked), the rentals intro line and label; nothing to shop (rentals, laundry, errands) hides "If something is unavailable" and the per-item
    list; rental rows never show in the per-item list (Shop 4); rental dates that are now too soon block Place order with a link back to /rentals;
    groceries on another day get a note. The order editor (Shop 13 `GGSX_EDIT.h.estimate`) adds the collection fee for "Rental: " lines.
    `{{rental_collection}}`, `{{rental_collection_fee}}`, `{{rental_collection_fee_french}}` are filled from the Settings tab on any page.
  * **Shop 22 Minimum Order v1.5**: rentals are not counted toward `min_order`; a rentals-only basket has no minimum.
  * **Pages 8 All Services / Pages 9 Concierge Services**: the "Beach & baby gear" cards open /rentals (were WhatsApp). **Pages 5 / Pages 9**
    pricing rows "Beach & baby equipment / Partner price" are now "Rentals & beach gear / Rental price + {{run_rate}}" with the collection fee.
    **Shop 36 Errands 1**: "Rentals" in the one-basket links. **SEO Content v1.1**: crawlable intro + FAQ for /rentals. **Home Snapshot**: rebuilt,
    and its two beach gear rows pointed at /rentals by hand (the Home tab rows 29 and 35 were changed the same way when v1.6 went live).
  * Sheet (4 Nov 2026): new **Rentals** tab (11 items: 9 coolers 24–120 qt, 2 tables, all active, no photos yet, qty blank = no limit), Settings
    section **RENTALS** (rental_collection_fee 20, rental_collection_fee_french 25, rental_lead_days 1, rental_max_days 60), a "How to use" paragraph.
  * Wix Editor (4 Nov 2026): blank page **Rentals** at `/rentals`, in the site menu (after Errands), SEO title "Cooler & Table Rentals in
    St. Maarten, Delivered | GrocerGoSx" and a meta description; site published at Dwayne's OK.
  * First Paint rev 7 (BUILDS "16", GROUPS rentals, /rentals in CODE, the cover waits for #ggsx-rentals) and rev 8 (`LIVE="16"`); restore copies
    of rev 6 and rev 7 in `restore/`.
  * Sizes: core 130,180 → 134,564 bytes gzip (+4.4 KB: the checkout part, config, SEO text); the page itself is the 10.6 KB rentals group.
  * Checks (4 Nov 2026): render-compare – the 15 page types are identical to v1.5 except the intended /pricing, /services-hub,
    /concierge-services and /errands changes; pile-up audit flat after page changes (34 observers, 115 listeners); checkout-after-page-changes
    passes; rentals-check passes (2 × 70 qt cooler + 3 × 6 ft table, 3 days booked 10 days ahead: $105 + $15.75 service + $20 delivery + $20
    collection = $160.75, French side $170.75; dates too soon block Place order; phone width 390 with no sideways scroll); test-loader passes for
    builds 14, 15 and 16, gzip and plain, including /rentals. Live (headless Chrome, desktop + iPhone size): /rentals, basket, checkout as above.
  * Not checked: the "GrocerGoSx invoice drafts" Apps Script (draft invoices) with the new "Rental collection" line; check the first rental
    order's draft invoice.

* **v1.7** (4 Nov 2026, "Rentals" instead of "Beach & baby gear"; live for every visitor since 4 Nov 2026: First Paint rev 10, after the test
  link `?ggsx_v=17` with rev 9) – Dwayne asked to remove "Beach & baby gear" and replace it with "Rentals".
  * Sheet, Home tab row 29 (the home page's big card): title "Rentals", subtitle "Coolers and tables for the beach, the boat or a party, delivered
    and collected", button "See rentals" → /rentals. The Home Snapshot was rebuilt from it, so the first paint already says "Rentals".
  * **Pages 9 Concierge Services** and **Pages 8 All Services**: the card is "Rentals"; the Concierge lead says "rentals"; **Pages 5 Pricing** and
    Pages 9 pricing rows are "Rentals"; **Pages 4 Hosts & Partners**: "Errands, laundry and rentals" / "Pharmacy runs, laundry, rentals and custom
    requests."; **Shop 36 Errands 1**: "Snack run & more" (was "Beach gear, snack run & more").
  * Checks (4 Nov 2026): render-compare – only /, /pricing, /partners, /services-hub, /concierge-services and /errands differ from v1.6, no
    errors; test-loader passes for builds 16 and 17 (gzip and plain, including /rentals). Live (headless Chrome, desktop + iPhone size, first with
    `?ggsx_v=17`, then for every visitor): v1.7 on every page, the cards and rows read "Rentals", /rentals shows its 11 items, the rentals
    checkout is unchanged (2 coolers: $60 + $9 service + $20 delivery + $20 collection = $109). The page errors seen in headless Chrome
    (`getCurrentConsentPolicy`, `getConfig`, `wixTagManager`) come from other snippets and a Wix app and are the same with v1.6.
  * Not site code, so not changed: the Wix Editor text blocks at the bottom of Home, Concierge Services, Pricing & Fees, All Services and
    Hosts & Partners still say "beach and baby gear" / "beach and baby equipment" (Concierge and Pricing: "quoted on request"), two blog posts
    mention beach and baby equipment, and the home "Beach Equipment" service tile (Home tab row 35) keeps its title (it links to /rentals).
  * First Paint rev 9 (BUILDS "17") and rev 10 (`LIVE="17"`); restore copies of rev 8 and rev 9 in `restore/`.

* **v1.8** (4 Nov 2026, items sold by weight; live for every visitor since 4 Nov 2026: First Paint rev 12, after the test link `?ggsx_v=18`
  with rev 11) – Dwayne: "for the meat section … price per weight … the shopper input the weight while the system dynamically price the
  item base on the weight in store". He chose: Fresh Meat, Fresh Fish & Seafood and loose fruit & vegetables; the client picks a weight;
  labels in lb or kg (switch); a pack heavier than asked is charged at the label weight, the client sees it on the live page.
  * **How it is switched on:** an item is sold by weight when its **size** on the Products tab is `per lb`; its **price** is then the price
    per lb (the shelf-photo markup still applies). 89 items were set to `per lb` on 4 Nov 2026: Fresh Meat g0337–g0403 except g0359 (16 oz
    ground turkey), g0366 (Claxton leg quarters bag), g0382 (whole Plainville turkey) and g0392 (1.5 lb ground pork pack); Salmon Fillets
    (g0333) and Salted Ling Fish (g0334); and 24 loose fruit and vegetables that were priced per 1 lb (apples, pears, grapes, papaya, ginger,
    zucchini, cassava, eggplant, loose potatoes, onions, turnips, squash, okra, yellow peppers). Their sizes before: `sizes-before-v1.8.json`.
  * **Shop 42 Sold by Weight** (new, core, right after Shop 1; `GGSX_WEIGHT`): Shop Now / home cards show `$19.49/lb` and "Sold by weight";
    Add = 1 lb, then ½ lb steps (up to 20 lb); a basket line keeps n = the weight in lb and price = the price per lb, so every total
    (n × price) is the estimate, and reads "about 1.5 lb · $19.49/lb · est. $29.24"; counts count a weighed line once; a note under the basket
    and in the checkout says the invoice follows the label weights. The checkout's order text is unchanged in form
    ("1.5 × Beef Boneless Sirloin Steak per lb — $29.24"), which the Orders API reads as qty 1.5 at $19.49.
  * **Run sheet** (Shop 4 → `GGSX_WEIGHT.row`): each item sold by weight shows "about 1.5 lb", its price per lb and the estimate, and a
    **Label weight** box with an lb / kg switch (kept per phone; "1.1 + 0.95" adds two packs). The weight × the price per lb is the item's
    price, the item is ticked Got it, the run sheet total and the shopped summary use it ("3.12 × … per lb — $60.81 (weighed)"). The weights
    are saved with the ticks (state `w`; Shop 9 syncs it, Shop 14 remaps it when the list is edited), and the **client's live page** (Shop 10)
    shows "3.12 lb · $60.81 · Got it ✓ · 3.12 lb weighed". No email is sent for a weight.
  * **Orders app v1.1.1** (`ggsx-ops-v1.1.1.txt`, Ops Loader v1.2): "Use the run sheet" also lists "Weighed at the store" and, on Apply, sets
    each such invoice line's quantity to the label weight (lb, 3 decimals; the Orders API sends it to Wix Invoices as is).
  * Other hooks (patches/v1.8-sold-by-weight.py): Shop 2 Engine, Shop 31 Basket Fix, Shop 3 Checkout (count), Shop 13/15 order editor (½ lb
    steps, $/lb), Home 2 (cards, search suggestions), Header Basket and App Shell badges, Laundry / Errands / Rentals basket strips (count).
  * Checks (4 Nov 2026): render-compare – all 15 page types identical to v1.7 with the sheet as it was; pile-up audit flat (as v1.7, +1
    listener); checkout-after-page-changes and rentals-check pass; weight-check passes (34 checks); test-loader passes for builds 17 and 18.
    Live (headless Chrome, test link with three items marked in the browser, then for every visitor with the real sheet; nothing sent or
    saved): cards, ½ lb steps, basket, checkout note, run sheet 1.62 lb → $31.57 on a phone, Orders app v1.1.1 loads.
  * Not checked: the "GrocerGoSx invoice drafts" Apps Script (automatic draft at checkout, grocergosx@gmail.com) with a decimal quantity
    such as "1.5 × …"; check the first by-weight order's draft. Found on the way (not changed): a line with a per-item "if unavailable"
    choice ends in " · if unavailable: …", which the Orders API's line reader (lines_) does not take, so that line is left off an invoice
    the Orders app creates.
  * First Paint rev 11 (BUILDS "18") and rev 12 (`LIVE="18"`); restore copies of rev 10 and rev 11 in `restore/`.

* **v1.9** (5 Nov 2026, Shop Now search help; live for every visitor since 5 Nov 2026: First Paint rev 14, after the test link `?ggsx_v=19`
  with rev 13) – on 4 Nov a visitor searched "Fleet" and "Enima" (a Fleet enema) and on 5 Nov another searched "Karuline" twice; each got
  "Nothing matched that" and left with an empty basket. Dwayne chose both fixes ("build both into the site code").
  * **Shop 43 Search Help** (new, core, bundle-only, right before Shop 2; `window.GGSX_SEARCH`): when no product matches every word as typed,
    Shop 2 asks `GGSX_SEARCH.fuzzy` for close matches – accents and punctuation ignored (creme = crème, mms = M&M's), two words run together
    found (icecream = ice cream) and a letter or two forgiven (4–7 letters 1 edit, 8+ letters 2, a swap of neighbouring letters is one edit;
    the first letter must match, and in 4–6 letter words the second letter too, so "fleet" does not become "feet"; words of 1–3 letters
    as typed). Name/brand matches win; up to 24 shown as "24 close matches for “chese”" with a note. With nothing found, a card "Can’t find
    “…”?" with the words in an editable box: **Add it to my basket as a request** puts a $0 line `Request: <words>` (id `req:<slug>`, size
    "priced from the store receipt") in the shared basket, priced from the receipt after shopping like pharmacy lines (it counts as $0 toward
    the $100 minimum); **Request it from the pharmacy** opens /pharmacy with the words already in its request box (sessionStorage
    `ggsx_pharm_ask`, 15 minutes, never over typed text). After close matches the card follows them ("Not what you were looking for?") and the
    "Nothing matched that…" line stays in the page, hidden, so Shop 16 Live Baskets still logs "no match for …". Wording: `GGSX_SEARCH.copy`.
  * **Shop 2 Engine**: two hooks in the search view (patches/v1.9-search-help.py); exact searches are unchanged.
  * Checks (5 Nov 2026): search-help-check passes (32 checks: chese → 24 cheese matches, cheese → 146 results as before, Karuline → card →
    "Request: Karuline" in the basket and panel, Fleet / Enima / Fleet enema → card and no junk, bred / wiskey / mayonaise / heinekin /
    icecream found, pharmacy hand-off fills "Fleet enema", phone 390 px no sideways scroll); render-compare – all 15 page types identical to
    v1.8 fresh and after page changes; pile-up audit flat (34 observers, 116 listeners); checkout-after-page-changes passes; weight-check passes
    (36 checks); test-loader passes for builds 18 and 19, gzip and plain. Live (headless Chrome, desktop + iPhone size, first with
    `?ggsx_v=19`, then for every visitor, POSTs blocked so nothing was logged or sent): Karuline → card, chese → close matches, milk →
    295 results with no card.
  * Home Snapshot rebuilt from the sheet (`node snapshot.js`) before the build.
  * First Paint rev 13 (BUILDS "19") and rev 14 (`LIVE="19"`); restore copies of rev 12 and rev 13 in `restore/`.

* **v2.0** (6 Nov 2026, shopping hours; live for every visitor since 6 Nov 2026: First Paint rev 16, after the test link `?ggsx_v=20` with rev 15) – Dwayne: use the
  supermarkets' hours (Monday to Saturday 8 AM–7 PM, Sunday 9 AM–1 PM) as the shopping window, "not necessarily for delivery … but for shopping".
  He chose: checkout only offers delivery windows we can shop in time, and shows the hours; same-day shopping only; the Late Night Snack Run
  stays, ending at 11 PM.
  * **Shop 44 Shopping Hours** (new, core, bundle-only, right after Shop 12; `window.GGSX_SHOPHOURS`): a basket with shop items (Products tab
    lines and "Request:" lines) is shopped on its delivery day: shopping starts at opening (or when the order comes in, if later), has to start by
    the last call (closing − `shop_last_call_min`), and a window has to end after that start + `lead_hours`. So Monday to Saturday the first
    window must end after 11 AM and an order after 6 PM goes to the next day; Sunday after noon, and after noon it goes to Monday. Baskets with
    only restaurant, pharmacy, laundry, errand or rental lines keep the old rule. Late Night Snack Run: on Thursday, Friday and Saturday a basket
    with only snacks, drinks and ice (the Beverages, Beer & Seltzers, Wine and Spirits / Liquor departments, Pantry's snack aisles, ice cream,
    bagged ice; `GGSX_SHOPHOURS.snack`) still gets that evening's window after shopping hours if it ends more than `snack_lead_hours` from now
    (window end capped at `snack_run_end`: order by 9:30 PM for 11 PM); its order notes get the line "Late Night Snack Run (after supermarket
    hours)." The hint under Delivery window says when we shop ("Mon–Sat 8 AM–7 PM, Sun 9 AM–1 PM", from the Settings tab); a window outside the
    hours reads "— outside shopping hours". Wording: `GGSX_SHOPHOURS.copy`.
  * **Shop 12 Checkout Polish v1.1**: asks `GGSX_SHOPHOURS.why` about every window (and its `.hint`), exposes `GGSX_POLISH.refresh / .now /
    .endOf`; a window Shop 27 Restaurant Hours switched off for a restaurant's hours now stays off when the date changes (it used to come back,
    found while testing). **Shop 2 Engine**: `GGSX_SHOP_API.product(id)` (the product a basket line stands for, from the list Shop Now drew last).
  * Wording: the Late Night Snack Run ends at 11 PM (was 11:30) in Pages 5, 8, 9, SEO Content and the Home tab (rows 27 and 37, so the Home
    Snapshot too); the Pricing/Service Area "Delivery windows" card, the All Services "How far ahead should I book?" answer and the SEO FAQ
    ("What are the delivery windows?", "When are you open?") say we shop in supermarket hours and when to order for the same day. Not site
    code, so not changed: the Wix Editor text blocks on /concierge-services, /pricing and /service-area still say "9:00 to 11:30 PM".
  * Sheet (6 Nov 2026): Settings section **SHOPPING HOURS** (rows 42–49: shop_opens 8, shop_closes 19, shop_opens_sun 9, shop_closes_sun 13,
    shop_last_call_min 60, snack_run_end 23, snack_lead_hours 1.5; numbers only, because the gviz reader drops text in the numeric value column;
    optional rows: shop_opens_<mon…sat> / shop_closes_<mon…sat>, shop_closed_<YYYY-MM-DD> = 1, shop_opens_<date> / shop_closes_<date>), a
    "How to use" paragraph (row 34), Home tab rows 27 and 37 "9 to 11 PM".
  * Checks (6 Nov 2026): shopping-hours-check passes (49 checks; the restaurant check fails on v1.9, as it should); render-compare – identical
    to v1.9 except the intended /service-area and /services-hub text (/pricing and /concierge-services differ only in "11:00", which the
    comparison masks); checkout-after-page-changes passes; pile-up audit flat after page changes (34 observers, 119 listeners: + Shop 44's 3, once
    per visit); search-help-check passes (32; its no-match word is now "Zylofrex": "Karuline" is in the catalogue since the 6 Nov import, Karuline
    Water); weight-check passes; rentals-check as before ($160.75 / $170.75); test-loader passes for builds 19 and 20, gzip and plain. Live, with
    `?ggsx_v=20` in Chrome (nothing opened or sent): v2.0 runs, the live Settings rows are read, a milk basket at 3:35 PM Friday gets Evening and
    Any time today and Sunday without Morning, popcorn + beer + ice count as a snack basket, a pharmacy-only basket keeps the old rule;
    /service-area, /concierge-services and the home show the new wording.
  * Sizes: core 141,090 → 143,981 bytes gzip (+2.9 KB).
  * First Paint rev 15 (BUILDS "20") and rev 16 (`LIVE="20"`, at Dwayne's OK); restore copies of rev 14 and rev 15 in `restore/`.

* **v2.1** (7 Nov 2026, the Orders app's Confirmed message; live for every visitor since 7 Nov 2026: First Paint rev 18, after the test link
  `?ggsx_v=21` with rev 17) – Dwayne wanted the pre-written "Confirmed" message based on what the client chose at checkout ("flight number etc"),
  worded like his own: "Hi Darlene! / Your GrocerGoSx order is confirmed for Sunday, November 8. / We've noted your flight details and will
  coordinate with The Cliff reception to have your groceries stocked before your arrival. / Once we've sourced your requested items, we'll send
  you a secure payment link. / Thank you for choosing GrocerGoSx!"
  * **Orders app v1.1.2** (`ggsx-ops-v1.1.2.txt`, patched on the built v1.1.1: `patches/ops-v1.1.2-confirm-message.py` + `.js`; the app source
    `ggsx-ops/app/src` is still not in this package, so port the change there before the next app build): the Confirmed chip in "Message from a
    template" (and the WhatsApp text offered after the Confirmed step) reads the block Shop 23 Dynamic Checkout puts at the top of the order notes
    ("Already on the island." / "[For guest …. ]Arriving <Sun Nov 08>[, flight …][, lands …].", "Stock the unit before arrival." or "Wait until
    check-in, …", "Access: <option>[ (…)]."), top down, never the client's own notes after it. Arriving + stock: "We've noted your flight details
    (or "your arrival time") and will coordinate with <The Cliff reception | the front desk | your host> to have your groceries stocked before your
    arrival." (front desk: the property is the address before its first number or comma, unless it looks like a street; lockbox: "…the access code,
    and we'll have…"; not sure yet: asks for the access details); wait until check-in: "Just message us once you've checked in and we'll head over";
    a guest's order says "for <guest>" and "their"/"before they arrive"; arriving orders leave the window out, as Dwayne's wording does; on the
    island or no block (taken by message, older orders): the window stays and "We'll shop everything fresh and let you know when we're on our way."
    Every version ends with the payment-link line and "Thank you for choosing GrocerGoSx!" (no separate sign-off). The other templates are unchanged.
  * **Ops Loader rev 2 (v1.3)** points at app v1.1.2; that string and the bundle's version are the only differences from v2.0 (the rebuilt v2.0 was
    byte-identical to the hosted one apart from its build time, so the build is reproducible). Build 21 = the v2.1 core file + the v2.0 group files.
  * Not changed: the client's automatic "order confirmed" email is written by the GrocerGoSx Orders API (Apps Script, `mail_('confirmed')` in
    `ggsx-orders-api-Code-v1.1.0.txt`), which this package does not deploy.
  * Checks (7 Nov 2026): ops-confirm-message-check 24/24; ops-confirm-app-check passes (both Message buttons, chips, links, no page errors);
    build report PARSES OK, no DUPLICATE; test-loader passes for builds 20 and 21, gzip and plain (the 404s it prints come from the harness page and
    show for build 20 too). Live, phone-sized Chromium on `?ggsx_v=21`: Shop Now, the home and /pricing draw with v2.1, no page errors, `#ops`
    loads Orders app v1.1.2 to its PIN screen; after rev 18 an ordinary page load gets build 21 and app v1.1.2.
  * First Paint rev 17 (BUILDS "21"; the rev 7–14 notes condensed to one comment, so the snippet went from 14,250 to 13,766 characters, the full
    text is in the restore copies) and rev 18 (`LIVE="21"`); restore copies of rev 16 and rev 17 in `restore/`.

* **v2.2** (9 Nov 2026, checkout helpers; live for every visitor since 9 Nov 2026: First Paint rev 20, after the test link `?ggsx_v=22` with rev 19) –
  from Dwayne's review of 13 "Checkout not sent" records (23 Oct – 7 Nov: small baskets that met the $100 minimum or the fees only at the end of
  checkout, planners with $148–$349 lists who stopped at dates / windows / access, a 7:39 PM restaurant order with no "now" option, records cutting
  baskets at 900 characters), he had all four fixes built ("build all four into the site code … and the planners option as well"):
  * **Shop 45 Basket Estimate & ASAP** (new, bundle-only, core, after Shop 44): the basket's note ("… no fee is added after your quote", which read
    as no fees) gives way to an estimate box: "Estimated total $X incl. service & delivery" (Shop 3's own maths for the earliest window; "from" while
    the island side isn't known), "Booked 2+ days ahead: $Y" when cheaper, "Earliest delivery: today, evening (5–11 PM)" / "tomorrow, morning
    (8:30 AM–12 PM)" / "as soon as possible", a closed restaurant's order hours instead, and "Add $Z more to check out (minimum $M)" with no totals
    while Settings min_order isn't met. "As soon as possible" (GGSX_ASAP): restaurant-only basket (a laundry add-on is fine), today, every restaurant
    taking orders (Shop 27; no hours on the Vendors tab: 8:30 AM–10 PM); picked for the client when the checkout opens with no date; hint under the window.
  * **Shop 46 Saved Basket Links** (new, bundle-only, core): GGSX_SAVED.save() / current() / restore(). The basket is stored encrypted (rows "b…",
    kind "basket") in the CMS "Short tracker links" collection with the key only in the link, grocergosx.com/shop-now#b/<12 characters>; opening it
    puts the basket back (the previous one kept as ggsx_basket_before_link), reloads Shop Now with the basket open and a "Welcome back" note; a link
    that can't be read leaves the basket alone and says so.
  * **Shop 23 Dynamic Checkout v1.1**: "Dates not set yet?" for arriving guests and hosts. The date, window, flight and landing time step aside, the
    address and the handling question are optional; the order goes in with no date, the window "Dates to confirm by message", the address "To confirm
    by message" when blank, the booked-ahead rate, and the note block "[For guest X. ]Arriving." … "Dates to confirm by message." (the Orders app reads
    it as an arriving guest; its Confirmed message then has no date, so Dwayne edits it before sending).
  * Hooks in existing modules (`patches/v2.2-checkout-helpers.py`, `patches/v2.2-shop23-dates-later.py`, already applied to `src/`): Shop 3 Checkout
    v1.18 (GGSX_CHECKOUT.estimate / optional / prefill / planned, window.GGSX_PLAN_FORCE), Shop 8 Live Core v1.4 (C.when without a date), Shop 12
    Checkout Polish v1.2 ("As soon as possible" first in why(); why / open / settings exported; the recap without a date), Shop 22 Minimum Order v1.5
    (GGSX_MIN.state), Shop 27 Restaurant Hours v1.1 (inBasket / closedIn / state / fmt / ready), Shop 33 Fee Split v1.6 (planned() follows
    GGSX_PLAN_FORCE and GGSX_CHECKOUT.planned(); kind exported), Shop 44 Shopping Hours v1.1 (load exported).
  * Outside the bundle, same day: **Shop 17 Checkout Follow-up v1.2** (inline, Functional; `inline/` and `restore/`): the whole basket (was cut at
    900 characters), the phone through GGSX_PHONE (+1 …), and "Finish order link" (finish_c7n2) from GGSX_SAVED.current(), with save() called when the
    checkout opens and after basket changes. **Wix Forms**: "Shop Now checkout" rev 4 (delivery date optional; the window dropdown also lists "As soon
    as possible" and "Dates to confirm by message"), "📝 Checkout not sent" rev 2 (field "Finish order link", target finish_c7n2, before Send).
    **Settings tab**: section CHECKOUT HELPERS with basket_estimate, restaurant_asap and dates_later (1 = on, 0 = off).
  * Checks (9 Nov 2026): checkout-helpers-check 50/50; shopping-hours, search-help, weight and rentals checks pass; checkout-after-page-changes and
    pileup-audit as for v2.1 (its "place-order" button count is 2 on the first checkout because the "Dates not set yet? … Send your list" chip matches
    /send/); render-compare: the 15 page types identical to v2.1, fresh and after a page change; build report PARSES OK, no DUPLICATE; test-loader passes
    for builds 21 and 22, gzip and plain. Live, phone-sized Chromium on `?ggsx_v=22` (nothing sent): the estimate box, "Dates not set yet?" at the
    booked-ahead rate, Hanami "As soon as possible" picked with today's date, no page errors; after rev 20 a fresh page load gets build 22 and Shop 17
    v1.2 (pages Wix still has cached follow within about an hour).
  * Build 22 = the v2.2 core file + the v2.0 group files. First Paint rev 19 (BUILDS "22") and rev 20 (`LIVE="22"`); restore copies of rev 18 and
    rev 19 in `restore/`.

**Important:** the disabled Custom Code copies in Wix are v1.0. Re-enabling them would bring back v1.0 behaviour (no Shop 39, old
department names, the pile-ups). Never re-enable just one of them: if any of Pages 2–9, SEO Footnotes or SEO Content runs inline,
the loader sees its global (`GGSX_PAGES`, `__ggsxNote`, `__ggsxSeo`) and skips the whole bundle.

## Updating the site code

1. Edit the module in `src/` (or add `src/<id>.html` + `.json` and append `[id, name, size]` to `order.json`; a module that only belongs on some
   pages can go into a group in `groups.json`). A module that adds persistent elements to `<body>` should either run once per visit (window flag)
   or reuse/remove its previous copy.
2. `npm install`, `node snapshot.js` (home page snapshot from the sheet), `node build.js 2.3` → `dist/ggsx-<body|home|pages|rentals>.js` + `.gz`; the
   build report must say every file `PARSES OK` and list no `DUPLICATE`.
3. Run `node tests/pileup-audit.js dist loader.html 6`, `node tests/checkout-after-page-changes.js dist loader.html 4`,
   `node tests/render-compare.js dist loader.html` (compare with the previous build) and `node tests/speed-check.js mobile both`; for the Orders
   app also `node ../../ggsx-ops/test/app.test.js`.
4. Upload the eight files to the **Site code bundle** folder as `ggsx-<name>-v2.3.txt` / `ggsx-<name>-v2.3.gz.txt` (Media API `generate-upload-url`
   with `mimeType: text/plain`, then PUT the bytes; Wix refuses `.js`). Media files are immutable, so each build is a new set of URLs.
5. Add the build to `BUILDS` in First Paint (`src/6a5a38e9-….html`) as `"23"` (and any new page the site code draws to `CODE` there), run `node test-loader.js`, PATCH the First Paint embed with its
   current revision, open `https://www.grocergosx.com/?ggsx_v=23` (and run PageSpeed Insights on that link), then set `LIVE="23"` and PATCH again.
   Wix can take up to about an hour to push a Custom Code change to cached pages; `https://www.grocergosx.com/?any=1` shows it at once.
6. Zip this folder (without `node_modules`) as `ggsx-site-code-source-v2.3.zip`, upload it to the same folder, and refresh the GitHub backup
   (update the archive URL and SHA-256 in `.github/workflows/backup-bundle.yml` of `ddfowler/grocergosx-site` and commit; the workflow commits the files).

Roll back a bad build: set `LIVE` in First Paint back to the previous build (its files stay in the Media Manager), or try it first in one tab
with `?ggsx_v=<old build>`. The Bundle Loader has v1.4 built in for the case where First Paint is missing.

The HEAD and Body-start snippets (App Icon, App Mode, First Paint, Microsoft Clarity, Shop 19, Shop 34 Fees & Prices, Splash; copies in `src/`) and the two
consent-category snippets (Shop 16 Live Baskets – Analytics, Shop 17 Checkout Follow-up – Functional; copy of v1.2 in `inline/`) stay inline in Wix and are edited there.
