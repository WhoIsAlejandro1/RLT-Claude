# Renewed Life Therapies - website

Local marketing site built with Node.js, Express 5 and EJS, styled with a hand-rolled
Material Design 3 (M3) token system. No build step, no bundler.

## Run it

```
npm install
npm run dev      # auto-restarts when server-side JS changes
```

Open http://localhost:3000. Use `npm start` for a plain run. To change the port: `set PORT=3001 && npm start` (cmd) or `$env:PORT=3001; npm start` (PowerShell).
Template (`.ejs`) and `public/` edits show up on refresh; edits under `src/` restart the server automatically.

## Where things live

| Path | What it is |
|---|---|
| `src/config/site.js` | Site name, tagline, navigation, contact details, social links, footer columns, logo paths |
| `src/content/*.js` | The copy for each page (home, about, contact, login, errors, notices) |
| `src/routes/` | `pages.js` (GET routes) and `forms.js` (POST handlers) |
| `src/middleware/` | Template locals (`locals.js`) and the 404/500 handlers (`errors.js`) |
| `src/views/layouts/main.ejs` | The HTML shell every page renders into |
| `src/views/partials/` | Reusable components: app bar, drawer, footer, buttons, cards, text fields, forms, placeholders, hero, alert |
| `src/views/sections/` | Page sections built from components: card grid, feature split, gallery, newsletter, CTA band |
| `src/views/pages/` | One file per page, each just a handful of section includes |
| `public/css/tokens.css` | Every M3 color / shape / elevation / motion token (light scheme + opt-in dark) |
| `public/css/typescale.css` | The M3 type scale and the two typefaces |
| `public/css/components/` | One stylesheet per component |
| `public/js/` | Ripple, drawer, app-bar scroll state, icon-font guard, alert dismissal |
| `scripts/make-logo-variants.ps1` | Generates the header/footer/favicon logo files from `images/` |

## Common edits

- **Change copy**: edit the matching file in `src/content/`. Strings that start with `Placeholder:` are stand-ins waiting for real text.
- **Swap a placeholder for a photo**: put the file in `public/images/` and set that item's `src` (for example `image: { src: '/images/team.jpg', ratio: '4/3' }`). The placeholder box becomes a real `<img>`.
- **Change colors**: edit the `--md-sys-color-*` values in `public/css/tokens.css`. Buttons, cards, fields and surfaces all follow.
- **Try the dark scheme**: add `data-theme="dark"` to the `<html>` tag in `src/views/layouts/main.ejs`.
- **Add a page**: create `src/content/<name>.js`, `src/views/pages/<name>.ejs`, add a `router.get` in `src/routes/pages.js`, and add a link in `site.nav`.
- **Regenerate the logo files**: drop the transparent PNG in `images/` and run `npm run logo`. Crop rectangles are at the top of the script.

## Forms

Contact, connect (booking), newsletter and login forms post to Express. Submissions are validated, logged to the
terminal and answered with a redirect plus a success banner. Nothing is emailed or stored yet; wire `src/routes/forms.js`
to an email service or database when ready. Login is a placeholder and never signs anyone in.

## Images

The photos currently shown are hotlinked stock images from Unsplash and Pexels (both licensed free for
commercial use, no attribution required; photographer credits are kept in each `credit` field in
`src/content/*.js`). They load from `images.unsplash.com` / `images.pexels.com`, so the site needs internet
access to display them. To make the site self-contained, download each file into `public/images/` and point
the matching `src` at it (for example `src: '/images/hero.jpg'`). Set `src: null` to get the placeholder box back.
