# HP-14C — Remove Arabic Shadda

## Goal

Remove the Arabic shadda character (`U+0651`) from all active website copy so it cannot appear above letters in headings, paragraphs, controls, consent text, the 404 page, or the proposal template.

## Scope

- Removes only the shadda character.
- Preserves Arabic letters, hamza forms, punctuation, and all other content.
- Updates the Arabic translation dictionary and source HTML.
- Rebuilds the generated `index.html` from the updated source.
- Preserves the approved English section labels `Aqua.Tech Method` and `Why Aqua.Tech`.
- Preserves the HP-14 trust panel and HP-14A marker alignment.

## Validation

- Production build completes successfully.
- JavaScript syntax validation passes.
- No `U+0651` character remains in active website files.
- The two approved English section labels remain present in both language dictionaries.
