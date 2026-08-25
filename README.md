# Charged Rootz — Website

**Ember is the chosen direction.** It is now the site. The other two concepts
(Apothecary, Broadsheet) were removed after the client picked Ember — they
remain in git history at commit `29d4038` if they are ever needed again.

Open `index.html` to view the site. No build step, no package manager. Works
from disk (`file://`) or any static host.

---

## What the site is

A concierge stretch-therapy practice: **in the client's home or at the pop-up
studio.** Stretch only — the juice / botanical bar was removed on 2026-08-25 at
the client's request. That content is recoverable at commit `a986dae`, and the
product photography is still in `assets/img/` for a future `/bar` lane.

```
index.html      the site — hero, practice, sequence, 12-point assessment,
                sessions, prep, booking (live Acuity scheduler)
about.html      "About Stretch by Charged Rootz" — long-form reading page
assets/
  css/ember.css shared foundation: tokens, reset, chrome, buttons, photo
                treatment, footer. Both pages load it.
  data/content.js   all copy, session prices, image manifest, booking URLs
  img/              web-optimised imagery (provenance below)
  vendor/           gsap, ScrollTrigger, lenis (vendored, no CDN)
```

Page-specific CSS stays inline in the page that uses it, so there is exactly one
place to look for it. Anything shared lives in `ember.css`.

---

## The signature element

**The 12-point assessment.** Every new client starts with a full-body evaluation,
and the site makes that the centrepiece: a hand-placed body map whose twelve
points ignite cumulatively as you scroll the zone list, with a live readout
below the figure.

The count (12) is the client's and is confirmed. **The twelve zone names are
placeholders** — they are the standard full-body mobility checks, marked `.tbd`,
until she sends her actual protocol. See "Still open" below.

Under `prefers-reduced-motion` every point renders lit and the panel un-sticks,
so nothing is hidden behind motion.

---

## Confirmed by the client

These came from her own written copy and are no longer placeholders:

| | |
|---|---|
| Model | Concierge — she travels to the client |
| Certification | Certified in stretch therapy through **CNU Stretch** |
| 50-minute session | **$120** — full body; first visit includes the 12-point assessment |
| 25-minute session | **$60** — targeted (hips, shoulders, lower back) |
| First visit | Begins with the 12-point assessment |
| What to wear | Loose clothing you can move in; **socks required**, hygiene and safety |
| What she needs | A bed, couch, floor mat or yoga mat. She brings everything else |
| New offering | **Stretch parties** — groups, by arrangement |

---

## Blocking conflict — needs a decision

**The Acuity account does not match the site's pricing.** The embedded scheduler
(owner `31437308`) currently offers:

> *45 minute Consultation with Health Consultations — 45 minutes @ $100.00*

The site advertises her written prices: **$120 / 50 min** and **$60 / 25 min**.
Nothing was changed to paper over this. Either the Acuity services need
rebuilding to match, or the site prices are out of date. Until it is resolved a
visitor sees one price on the page and a different one in the scheduler.

The Acuity listing also uses a stock red-lotus image that is off-brand against
her own photography.

## Copy conflict — minor

Her About copy (emailed) says *"you don't come to me, I come to you."* Her later
note says *"In Your Home or at Our Pop-Up Studio."* The positioning lines now use
the newer version; **her About body copy was left in her own words** and still
says home-visit only. She should confirm which is right.

## Still open

Rendered live in the "Still needs your input" panel at the bottom of the site,
and listed in `content.js` under `questions`.

- **The twelve assessment zones** — her actual list.
- **City and travel radius.** Phone is 314 (St. Louis), gym wall shows an
  Arkansas flag. Not asserted anywhere in the build.
- **Stretch party pricing** — per head or flat visit fee.
- **Days and hours** she takes bookings.

---

## Before it goes live

- **Delete the `#legend` section** at the bottom of `index.html`. It is a
  client-review aid listing every placeholder — useful now, not for the public.
- Confirm the mail path: the booking form validates, then opens the visitor's
  mail client with a finished draft addressed to `contact@chargedrootz.com`.
  If she would rather receive form posts directly, swap in a form service.

---

## Content and asset provenance

Everything is the client's own material. Nothing was invented silently.

| Asset | Source |
|---|---|
| `logo-*.png` | Her 2000×2000 logo file. Cropped square, alpha variant keyed off black. |
| `menu-juice-*`, `menu-food-*` | Her two printed menus. |
| `shots-*`, `lineup-*`, `infusions-*` | Her product photography. `infusions` rotated 90° CW. |
| `stretch-1..4-*` | Her four session photos. Rotated 90° CW, cropped 4:5, desaturated ~8% to calm busy gym backgrounds. |

**Brand palette** was sampled pixel-by-pixel from the logo file, top to bottom:

```
gold    #E8C21A      flame    #DA3E1B      void   #060505
amber   #D98A1C      crimson  #E11417      bone   #F2E9DC
gradient: linear-gradient(180deg,#E8C21A,#D98A1C 28%,#DA3E1B 62%,#E11417)
```

**Menu data is real** — all 11 juices, 6 wellness shots, 4 add-ons and the
smoothie, with her actual prices, transcribed from her printed menus. Payment
handles are hers.

Anything still invented renders with a **dotted underline** (`class="tbd"`) and
is listed in the legend panel at the bottom of the site.

---

## Accessibility and performance baseline

- Semantic landmarks, single `h1`, logical heading order, skip link
- Visible `:focus-visible` ring on real controls only — anchor targets take
  `tabindex="-1"` for keyboard/screen-reader landing and deliberately do **not**
  paint a ring around a whole section
- WCAG AA contrast on body text
- `prefers-reduced-motion` fully honoured — motion disabled, all content intact,
  assessment points render lit
- Hero ignition uses explicit `fromTo` + `clearProps` and a 4s failsafe, so the
  hero can never be left invisible if GSAP fails to load
- Content readable with JavaScript disabled
- Responsive `srcset`, lazy loading below the fold, explicit dimensions (no CLS)
- No CDN dependencies — animation libraries are vendored locally

---

## Domain recommendation

She already owns `chargedrootz.com` and asked whether to buy
`stretchbychargedrootz`. Recommendation: **don't**. Put the stretch site at the
root, and add lanes later as paths (`/bar`, `/events`) on the same domain. One
domain, one search reputation, no extra spend.

---

*Built by BabyDaddy · jada.ai@builtbybabydaddy.com*
