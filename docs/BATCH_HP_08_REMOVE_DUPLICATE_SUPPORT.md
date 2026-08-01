# HP-08 — Remove Duplicate Post-Launch Support Section

## Goal

Remove the public post-launch support section titled "Our role does not end at
delivery" / "لا ينتهي دورنا عند التسليم" because its content is already covered
by the Growth and Care service paths.

## Changes

- Removes the complete `#support` section and its contact CTA.
- Removes the support link from mobile navigation and the footer.
- Removes the duplicate support markup embedded after the FAQ source partial.
- Adds a build-time safeguard that removes any stale `#support` section or link.
- Keeps the Growth and Care service content unchanged.
- Keeps CSP, referrer policy, `security.txt`, and all technical protection
  unchanged.

## Prerequisite

- Branch: `main`
- Base commit: `601e818`
- Base commit message: `feat: add compact product showcase`
- HP-07R must already be present as pending changes.

## Verification

- Production build succeeds.
- JavaScript syntax checks pass.
- Generated HTML contains no `#support` section or link.
- Generated HTML still contains no retired `#offers` or `#security` section.
- The final tail of the homepage is `#solutions`, `#faq`, then `#contact`.
