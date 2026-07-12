# Gleam Auto Detailing — Website Sitemap & User Flow

*Phase 3 of 5 — Information architecture. Built on Phase 1 Strategy and informed by the Phase 3 Brand Voice.*

---

## Site Structure

Primary format: single-page scroll homepage, with two standalone pages (Booking/Quote form as its own route for direct linking from ads/DMs, and a Gallery archive page for the full before/after library beyond the homepage teaser).

### 1. Hero
- **Purpose:** Establish premium positioning and the mobile-or-studio choice within one viewport, before any scrolling.
- **Key visitor action:** Start a booking/quote request.
- **CTA placement:** One primary button, "Book Your Detail," centered below the subheadline — visible without scrolling on mobile.
- **Headline/subheadline direction:** Headline states the outcome and the city ("Miami's cars, treated like they're ours"); subheadline states the mechanism (mobile + studio, paint correction, ceramic coating).
- **Hero visual direction:** Slow-motion or cinemagraph loop of water beading off a freshly coated hood in direct sun — motion communicates the outcome before any copy is read.
- *CTA psychology: a first-time visitor arriving from an Instagram link is already warm on the aesthetic — the single ask here is to keep momentum before they scroll away.*

### 2. Services
- **Purpose:** Let a visitor self-sort into the tier that matches their car and budget without needing to call first.
- **Key visitor action:** Select a package to see detail, or jump straight to booking with a package pre-selected.
- **CTA placement:** Each of the three package cards (Mía's Radiance / Full Gleam Ceramic / The Miami Rebirth) carries its own "Get This Package" CTA, plus one secondary "Compare All Packages" link to the standalone service detail content.
- *CTA psychology: by this point the visitor is evaluating fit, not intent — a per-card CTA removes the extra step of scrolling back up to a single generic button.*

### 3. About / The Mía Story
- **Purpose:** Convert price-shopping into trust by putting a real founder and a real promise behind the packages just shown.
- **Key visitor action:** Read far enough to internalize the "mía" promise, then continue scrolling (soft CTA only).
- **CTA placement:** No hard CTA in this section — a single text link, "See the work," anchoring down to Gallery, keeps momentum without interrupting the story.
- *CTA psychology: this section's job is emotional, not transactional — pushing a booking CTA here would undercut the trust it's building.*

### 4. Gallery / Before & After
- **Purpose:** Provide the proof that justifies premium pricing.
- **Key visitor action:** Interact with at least one before/after slider.
- **Format:** Draggable slider comparisons (5–7 on homepage, full archive on standalone Gallery page), grouped by service type (paint correction, ceramic, interior) with a filter control.
- **CTA placement:** A single "Book Your Transformation" button after the slider set, plus a "View Full Gallery" link to the standalone page.
- *CTA psychology: visual proof is the strongest conversion trigger in this category — the CTA should appear at the exact peak of that proof, not buried after unrelated content.*

### 5. Testimonials
- **Purpose:** Layer social proof from people like the visitor (by vehicle type, not just star rating).
- **Format:** Card carousel, each testimonial tagged with the client's vehicle type (e.g., "Range Rover owner, Coral Gables") so Camila, Marco, and Diego each see a persona-matched quote.
- **What to highlight:** Trust and turnaround specifics ("in my driveway before my 9am call," "didn't touch the original patina") over generic praise.
- **CTA placement:** One CTA at the end of the carousel, "Read More Reviews" (links to Google Business Profile) plus "Book Now."
- *CTA psychology: testimonials remove the last objection (will they respect MY car) — the CTA should capture that resolved doubt immediately.*

### 6. Booking / Contact
- **Purpose:** Convert.
- **Form fields:** Name, phone, email, vehicle make/model/year, service location (mobile address or studio), preferred package (pre-filled if arriving from a Services card), preferred date/time, optional photo upload of current condition.
- **Scheduling logic:** Calendar picker showing real availability by service area/day (mobile radius vs. studio-only slots), instant confirmation email/SMS, manual founder confirmation call within 2 hours for exotic/high-value vehicles.
- **CTA placement:** Persistent sticky "Book Now" button in the nav from this point forward on mobile.
- *CTA psychology: reduce friction to the minimum viable form — every extra required field is a chance for a mobile visitor to abandon.*

### 7. Footer
- **Purpose:** Close the loop for visitors not ready to book, and establish local legitimacy for SEO and trust.
- **Links:** Services, Gallery, About, Booking, Instagram/TikTok, phone (click-to-call), email.
- **Trust signals:** Insured & licensed badge, service-area map (Miami-Dade, Coral Gables, Miami Beach, Brickell, etc.), Google review star rating pulled live.
- **Local business info:** NAP (Name, Address service-area, Phone) consistent with Google Business Profile for local SEO.

---

## Conversion Logic Map

```
Instagram/TikTok → Hero (aesthetic hook, single CTA)
                       ↓ scroll
                   Services (self-sort by tier)
                       ↓ scroll (or direct CTA click → Booking)
                   About/Mía Story (trust build, no hard CTA)
                       ↓ scroll
                   Gallery (proof, peak-intent CTA)
                       ↓ scroll (or direct CTA click → Booking)
                   Testimonials (objection removal, CTA)
                       ↓ scroll
                   Booking/Contact (conversion)
                       ↓
                   Footer (safety net: contact info, socials, trust badges for not-yet-ready visitors)
```

Booking is reachable via direct CTA from Hero, Services, Gallery, and Testimonials — never more than one section away from a conversion point, and never below three scrolls of content on mobile.
