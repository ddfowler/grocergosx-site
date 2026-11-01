# GrocerGoSx site code bundle

`ggsx-body.js` is the single external script that replaces the 60 "Body – end" Custom Code snippets of grocergosx.com (Wix).
It is loaded by the Wix snippet **GrocerGoSx Bundle Loader** (`loader.html`, Settings → Custom Code, id `d06df95b-02f7-442a-a6f1-89b740d4798e`)
and served from the site's own Wix Media Manager (folder **Site code bundle**, on Wix's CDN `c1f8709f-….usrfiles.com`, cached for 180 days).

* `dist/ggsx-body.js` – the built bundle (what the site runs); `dist/ggsx-body.js.gz` – the same, gzip-compressed (what modern browsers download)
* `src/<id>.html` + `.json` – restore copies of every snippet exactly as exported from Wix, with name, revision and settings
* `order.json` – the snippets in their Wix order (the order they execute in)
* `build.js` – rebuilds `dist/` from `src/` (`node build.js <version>`); styles are injected with `__ggsxCss`, scripts run in order inside try/catch
* `loader.html` – the one Wix snippet that stays inline (fetches the gzip copy and unpacks it with DecompressionStream; older browsers get the plain copy)
* `test-loader.js` – headless-Chromium check of the loader against the hosted files (`node test-loader.js`)

## Live files (v1.0, 1 Nov 2026)

| copy | Media Manager name | URL | bytes | md5 |
|---|---|---|---|---|
| gzip | `ggsx-body-v1.0.gz.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_d2afda9e935446149673f46b8d91ab29.txt | 180,069 | `06aaeb07b3f06f51ae0a3bf8feed7f9a` |
| plain | `ggsx-body-v1.0.txt` | https://c1f8709f-fe64-4674-a830-0417bef25a2e.usrfiles.com/ugd/85c3c2_804de5b6f4324218bba9512cf2d22eda.txt | 585,852 | `3c515c9ac500da3fcb5dba1a129fcf12` |

Wix Media refuses `.js` uploads and serves these as `text/plain` (no `nosniff`, CORS `*`), which browsers execute fine as scripts.
Media files are immutable, so every new build is a new pair of files and a new pair of URLs in `loader.html`.

## Updating the site code

1. Edit the snippet copy in `src/` (or add a new one and append it to `order.json`).
2. `node build.js 1.1` → `dist/ggsx-body.js` + `dist/ggsx-body.js.gz` (the build report lists any parse error).
3. Upload both to the **Site code bundle** folder of the Media Manager as `ggsx-body-v1.1.txt` and `ggsx-body-v1.1.gz.txt`
   (Media Manager → Upload, or the Media API: `generate-upload-url` with `mimeType: text/plain`, then PUT the file).
4. Put the two new URLs into `loader.html` (`GZ`, `PLAIN`) and paste it over the Bundle Loader snippet in Settings → Custom Code
   (or PATCH the custom embed with its current `revision`). Wix takes up to about an hour to push snippet changes to the live site.

Roll back at any time: re-enable the 60 inline snippets in Settings → Custom Code and disable the Bundle Loader.

The HEAD and Body-start snippets (App Icon, App Mode, First Paint, Microsoft Clarity, Shop 19, Shop 34, Splash) and the two consent-category
snippets (Shop 16 Live Baskets – Analytics, Shop 17 Checkout Follow-up – Functional) stay inline in Wix on purpose.
