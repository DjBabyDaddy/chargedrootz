# Charged Rootz — Website Design Round 1

Three design directions for **one** website: an assisted-stretch practice with a
cold-pressed juice / botanical bar section on the same site.

**Live review page:** open `index.html` — it presents all three concepts, the
build scope, and the questions the client needs to answer.

---

## The three concepts

| # | Name | Direction | Leads with |
|---|------|-----------|------------|
| 1 | **Ember** | Dark, cinematic, scroll-driven. The client's native fire brand. | Scroll-scrubbed session sequence |
| 2 | **Apothecary** | Warm daylight, editorial, calm. Herbalist's shop. | Filterable, printable menu |
| 3 | **Broadsheet** | Swiss industrial print. Big type, hard edges, grid. | Structure — plus a Phase 2 hub sketch |

All three ship the **same scope**. Only the art direction differs.

---

## Scope (binding)

**In — $100 flat, client hosts:**
one site · stretch practice leads · about + what a session involves · session
types · booking request form that emails her · botanical bar menu on the same
site · contact + her existing payment handles · mobile-first, accessible, fast,
SEO-ready.

**Not in — separate quote:**
per-lane sub-sites · live checkout / card processing · event ticketing ·
customer accounts · calendar-synced availability · ongoing content updates.

> Concept 3 contains a deliberately-stamped **Phase 2 / not included** block
> sketching the multi-lane hub. It exists to show where the business could go.
> It is not a deliverable of this round. Do not let it read as included.

---

## Structure

```
index.html                     review hub — start here
DESIGN.md                      design system, tokens, scope (source of truth)
concept-1-ember/index.html
concept-2-apothecary/index.html
concept-3-broadsheet/index.html
assets/
  data/content.js              all copy, menu items, prices, image manifest
  img/                         web-optimised imagery (see provenance below)
  vendor/                      gsap, ScrollTrigger, lenis (vendored, no CDN)
  shots/                       preview screenshots for the review hub
```

Each concept is a **single self-contained HTML file**. No build step, no package
manager. Open directly from disk or serve statically.

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

---

## Placeholders

Anything invented renders with a **dotted underline** (`class="tbd"`) and is
listed in a legend at the bottom of each concept, plus on the review hub.

Currently placeholder: session lengths, session prices, city/venue, and whether
the stretch lane gets its own name.

Open questions for the client are in `content.js` under `questions` and rendered
on the review hub.

---

## Known gaps

- The client mentioned **videos** of her stretching. Not yet received.
- Her shirt reads **"CNU Stretch"** — unclear whether that is a certification, a
  studio she works under, or a name she wants used. Asked.
- Phone is a **314** (St. Louis) but the gym wall shows an **Arkansas** flag.
  Location not asserted anywhere in the build. Asked.

---

## Domain recommendation

She already owns `chargedrootz.com` and asked whether to buy
`stretchbychargedrootz`. Recommendation: **don't**. Put the stretch site at the
root, and add lanes later as paths (`/bar`, `/events`) on the same domain. One
domain, one search reputation, no extra spend.

---

## Accessibility and performance baseline

Applies to all three concepts:

- Semantic landmarks, single `h1`, logical heading order
- Visible `:focus-visible` styling, full keyboard operation
- WCAG AA contrast on body text
- `prefers-reduced-motion` fully honoured — all motion disabled, content intact
- Content readable with JavaScript disabled
- Responsive `srcset`, lazy loading below the fold, explicit dimensions (no CLS)
- No CDN dependencies — animation libraries are vendored locally

---

*Built by BabyDaddy · jada.ai@builtbybabydaddy.com*
