# HP-14 — Trust Flow Panel

## Goal

Bring the `#trust` section into the same visual language used by the refreshed Aqua.Tech homepage while keeping its existing message and four trust pillars.

## Design changes

- Replaces four separate heavy cards with one unified glass panel.
- Presents the four trust pillars as numbered stages `01` through `04`.
- Adds a subtle desktop connector line to reinforce the Aqua.Tech flow concept.
- Uses the approved dark navy surfaces, translucent aqua borders, restrained glow, and shared icon treatment.
- Reduces visual weight and empty card space without reducing readability.
- Keeps responsive layouts: four columns on desktop, two on tablet, and one on mobile.
- Preserves RTL/LTR alignment and reduced-motion behavior.

## Content and translation

- Existing titles and descriptions remain unchanged.
- Corrects `trust.card3.kicker` in Arabic from `Support` to `الدعم`.
- No new navigation links, CTA labels, or arrow symbols are introduced.

## Files

- `src/partials/about.html`
- `src/input.css`
- `js/site-i18n.js`
- Generated `index.html`
- Generated `dist/output.css`

## Validation

- Production HTML and Tailwind build completes successfully.
- `js/site-i18n.js` and `scripts/build-html.js` pass Node syntax checks.
- Generated CSS contains the trust stage, card title, and step index selectors.
- Generated HTML contains exactly four trust stages.
- Floating header and HP-13R3 mobile Hero containment markers remain present.
