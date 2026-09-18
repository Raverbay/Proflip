# Flip&Co — Production Deploy Base V1

Standalone static repository, rebuilt from scratch. No dependency on previous V18/V27/V29/V30/V31 files.

## Public pages
- `index.html` — editorial homepage
- `shop.html` — product catalog with category filters
- `collections.html` — collection index
- `collection.html?slug=new-arrivals` — dynamic collection page
- `brand.html` — brand index
- `product.html?id=...` — dynamic product detail
- `checkout.html` — demo checkout
- `order-confirmation.html` — demo confirmation
- `faq.html`, `shipping.html`, `returns.html`, `privacy.html`, `cookies.html`, `terms.html`

## Data
- `data/products.json` — single demo inventory
- `data/collections.json` — collection definitions
- `data/site.json` — store/contact data
- `data/imported-stock.csv` — demo CSV

## Deploy
The repository is static and can be deployed directly to GitHub Pages from the repository root.

For local preview, use a static server because the pages load JSON through `fetch()`:

`python3 -m http.server 8080`

Then open `/index.html`.

## Go-live requirements
This package is a complete front-end deploy base, but checkout and inventory are still demo/local. Before real sales: connect a backend inventory/OMS, authenticated admin, payment provider, order management, shipping, transactional email, consent/analytics, authorized product photography, definitive legal texts and production domain configuration.
