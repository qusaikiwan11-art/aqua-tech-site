# HP-07R — Remove Offers and Security Sections

## Goal

Remove the public Offers and Security marketing sections from the Aqua.Tech
homepage without weakening the website's actual technical security controls.

## Changes

- Removes `#offers` and `#security` from generated `index.html`.
- Removes Offers links from desktop and mobile navigation.
- Removes Offers and Security links from the footer.
- Removes the retired section partials from the source tree.
- Updates the main partial wrapper and split helper so the sections are not
  reintroduced later.
- Keeps CSP, referrer policy, HTTPS-related configuration, `security.txt`, and
  all other technical protection unchanged.

## Base

- Branch: `main`
- Commit: `601e818`
- Commit message: `feat: add compact product showcase`

## Verification

- Production build succeeds.
- JavaScript syntax checks pass.
- Generated HTML contains no `#offers` or `#security` section.
- Generated HTML contains no navigation or footer links to those anchors.
- The remaining page flow stays intact: product showcase, support, FAQ, then
  contact.
