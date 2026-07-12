# Gleam Auto Detailing — UI/UX Design Direction

*Phase 4 of 5 — Visual design system brief for Webflow/Figma build. References Phase 2 Visual Identity and Phase 3 Sitemap.*

---

## Layout Rhythm & Grid Logic

- 12-column grid, 1280px max content width, 80px outer gutters on desktop / 20px on mobile.
- Sections alternate full-bleed image blocks (Hero, Gallery) with contained-width text/content blocks (Services, About, Testimonials), so the page has a visible breathing pattern between "wide" and "framed" as you scroll.
- Vertical section spacing: 120px between sections on desktop, 64px on mobile — generous enough that each section reads as its own statement, not a continuous wall of content.
- Services cards use a strict 3-column grid on desktop that collapses to a single stacked column on mobile, each card equal height regardless of copy length.

## White Space Philosophy

Treat white space the way you'd treat the space around a car on a showroom floor — enough that the subject (the photography, a single headline) is never competing with anything else in the frame. Body copy blocks are capped at 60–65 characters per line and left generous top/bottom padding (48px minimum) so no text block ever feels dense. This is a brand about precision and restraint; a cluttered layout would contradict the product itself.

## Image-First Storytelling

Photography carries the emotional arc between sections — the copy explains, the image proves. Hero opens on motion (beading water), Services uses static hero shots per package tier, About uses a candid founder/process shot (hands, not posed portraits), Gallery is the explicit proof section via sliders, and Testimonials pairs each quote with a small thumbnail of that client's actual vehicle. No stock photography — if a section lacks real photography, it stays copy-only rather than filling the gap with generic imagery.

## Scroll-Based Animation Direction

- **Hero:** looping cinemagraph plays on load, no scroll-trigger needed; headline fades up 20px over 500ms on load, easing `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Section headlines:** fade + rise 16px on scroll into view (40% viewport threshold), 400ms, same easing — consistent across every section so the motion language never feels ad hoc.
- **Services cards:** stagger in individually, 80ms delay between each card, so the eye reads them left to right rather than all at once.
- **Gallery before/after slider:** on scroll into view, the slider handle animates from left (100% "before") to center over 600ms, easing `ease-out`, so the visitor sees the reveal happen once automatically before they take manual control of the drag.
- **Static elements:** the logo/nav bar, footer, and body copy paragraphs do not animate — motion is reserved for headlines, imagery, and the gallery mechanic only, so it reads as intentional rather than decorative.

## Button & CTA Styling

- Shape: rounded-rectangle, 4px radius (not pill-shaped — a pill reads too soft against the brand's precision positioning), generous horizontal padding (32px) for a substantial tap target.
- Primary CTA: Deep Bay background, Sun Chrome text, on hover the background shifts to Causeway Gold over 200ms with no layout shift.
- Secondary/text CTAs (e.g., "View Full Gallery"): underline animates in from left to right on hover, 200ms, no background fill — keeps secondary actions visually quieter than primary booking CTAs.
- All CTA hover states include a subtle 2px upward translate to suggest tactile response, reverting on mouse-out.

## Before/After Gallery Card & Slider

- Card container: 4:3 image ratio, single draggable vertical handle styled as a thin Sun Chrome line with a small circular grip (echoing the "correction pass" logo mark).
- Default position: handle starts at the left edge and auto-reveals to center (50%) on scroll into view (matching the animation above), then hands control to the visitor's drag — the resting position after that automatic reveal is always center, never 35%.
- **Accessibility:** the handle is a real `role="slider"` element with `aria-valuemin`/`aria-valuemax`/`aria-valuenow` kept in sync on drag, is reachable by keyboard (Tab) with a visible focus outline, and responds to Left/Right arrow keys in 5% steps. The automatic reveal animation is skipped entirely under `prefers-reduced-motion: reduce`, snapping straight to the center position instead.
- Label chips: small "BEFORE" / "AFTER" text labels in Wet Asphalt, fade out on drag start and fade back in 800ms after drag ends.
- Filter tabs above the gallery grid (All / Paint Correction / Ceramic / Interior) use the same underline-hover treatment as secondary CTAs.

## Responsive Behaviour (Mobile-First, Instagram-Driven Audience)

- Sticky bottom "Book Now" bar appears after the visitor scrolls past the Hero on mobile — persistent access to conversion without needing to scroll back up.
- Before/after sliders default to a single tap-and-drag gesture (no hover-dependent interactions anywhere in the site, since a meaningful share of traffic never touches a mouse).
- Services cards stack vertically with the CTA button always visible at the bottom of each card, not hidden below a "read more" toggle.
- All hero and gallery video/motion content is served as compressed, muted-autoplay loops under 2MB to protect load time on mobile data.
