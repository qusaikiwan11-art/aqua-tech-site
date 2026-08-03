# HP-14A — Trust Step Marker Alignment

## Goal

Correct the ambiguous spacing between the `01–04` step numbers and their icons in the HP-14 trust flow panel.

## Design correction

- Centers each icon-and-number group within its stage.
- Places each number immediately beside its matching icon instead of at the opposite edge of the column.
- Styles the number as a compact secondary marker with improved contrast.
- Keeps the desktop connector line behind the centered stage markers.
- Applies the same relationship on tablet and mobile.
- Preserves all trust copy, translations, card order, and RTL/LTR behavior.

## Files

- `src/input.css`
- Generated `dist/output.css`

## Validation

- Production HTML and Tailwind build completes successfully.
- Generated CSS includes centered step headers and compact numbered markers.
- The HP-14 four-stage structure remains unchanged.
- No translation or JavaScript files are modified.
