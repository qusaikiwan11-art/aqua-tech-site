# HP-04 — Service Architecture

## Objective

Turn the services area into a decision surface that helps visitors choose the right Aqua.Tech engagement path without scanning seven repetitive cards or opening a separate details panel.

## Included

- Organized the public offer into three aligned paths: Core, Growth, and Care.
- Kept every existing service visible inside its correct path.
- Added a direct CTA on every path that continues to the existing detailed service selector in the contact form.
- Replaced the hidden details accordion with always-visible, scannable service lists.
- Added a compact decision prompt for visitors who do not yet know which path fits.
- Added a quiet visual signal linking the three paths while respecting reduced-motion settings.
- Preserved Arabic and English content, RTL/LTR behavior, keyboard focus, and mobile layout.
- Made `src/partials/services.html` the services source used by the production build so future builds cannot restore the older embedded section.

## Files

- `css/aqua-service-paths.css`
- `dist/output.css`
- `docs/BATCH_HP_04_SERVICE_ARCHITECTURE.md`
- `HP04_MANIFEST.txt`
- `index.html`
- `scripts/build-html.js`
- `src/partials/head.html`
- `src/partials/scripts.html`
- `src/partials/services.html`
- `src/template.html`

## Validation

- `npm run build`
- Required marker and service-group checks
- Template-to-generated-page parity check
- JavaScript syntax checks
- Package isolation check against the HP-03C working source
- `git diff --check`
