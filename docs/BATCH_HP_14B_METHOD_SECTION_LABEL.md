# HP-14B — English Section Labels

## Goal

Apply the approved English labels `Aqua.Tech Method` and `Why Aqua.Tech` to their section kickers in both supported page languages.

## Content correction

- Replaces the Arabic fallback label `منهج Aqua.Tech`.
- Replaces the English translation `The Aqua.Tech method`.
- Uses the exact wording and capitalization `Aqua.Tech Method` in Arabic and English modes.
- Replaces the Arabic trust label `لماذا Aqua.Tech`.
- Uses the exact wording and capitalization `Why Aqua.Tech` in Arabic and English modes.
- Keeps the main heading and section content localized normally.
- Preserves the HP-14 trust panel and HP-14A step-marker alignment without layout changes.

## Files

- `src/partials/overview.html`
- `src/partials/about.html` already contains the approved trust fallback.
- `js/site-i18n.js`
- Generated `index.html`

## Validation

- Production build completes successfully.
- JavaScript syntax validation passes.
- The source fallbacks and both language dictionaries contain the exact approved labels.
- The old section labels no longer appear in active source or generated HTML.
- HP-14A CSS markers remain present.
