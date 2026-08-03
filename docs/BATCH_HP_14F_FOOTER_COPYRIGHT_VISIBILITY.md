# HP-14F — Footer copyright visibility

## Problem

The copyright text and bilingual translation were present in the HTML, but the
motion system selected every direct footer group, including the final copyright
row. At the end of the document, the observer's negative bottom root margin
could prevent that last row from ever reaching its reveal threshold, leaving it
at `opacity: 0`.

## Change

- Limited footer entrance motion to `.aqua-site-footer__content`.
- Kept `.aqua-site-footer__bottom` outside observer-managed hidden state so the
  copyright remains visible at the end of the page.
- Preserved the existing Arabic and English copyright strings and compact footer
  styling.

## Validation

- Production build passes.
- Motion JavaScript syntax validation passes.
- The broad footer selector is absent.
- Only the footer content receives entrance motion.
- Copyright HTML and both translation strings remain present.
