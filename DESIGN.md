# Charged Rootz — Design System

> **Ember is the chosen direction and is now the site.** Concepts 2 and 3 were
> removed; they remain in git history at `29d4038`.

Source of truth: the client's own **logo file** (2000×2000) and her two printed
menus. Every colour below was sampled from those files, not invented.

## Visual Theme & Atmosphere
- Mood: rooted, warm, physical. Sun-and-fire energy over deep earth.
- Feel: hand-made, intentional, unhurried. Not clinical, not "spa-generic".
- Anchors: the sun-crowned figure in the mark; the brush-stroke section rules on
  her menus; glass bottles with real produce in them.
- Voice: plain, declarative, first person. Her tagline is the spine —
  **Rooted. Nourished. Elevated.**

## Colour Palette & Roles
Sampled top→bottom down the logo mark:

| Token | Hex | Role |
|---|---|---|
| `--cr-gold` | `#E8C21A` | Gradient start, sun rays, highlights |
| `--cr-amber` | `#D98A1C` | Gradient mid-high, hover states |
| `--cr-flame` | `#DA3E1B` | Primary accent, rules, active states |
| `--cr-crimson` | `#E11417` | Gradient end, emphasis |
| `--cr-ember` | `#8C1A0D` | Deep shadow accent (from menu artwork) |
| `--cr-void` | `#060505` | Warm black canvas |
| `--cr-bone` | `#F2E9DC` | Warm white text on dark |
| `--cr-paper` | `#F4F1EA` | Warm light canvas (unused by Ember; kept for future lanes) |
| `--cr-ink` | `#141110` | Text on light |

**Brand gradient:** `linear-gradient(180deg,#E8C21A,#D98A1C 28%,#DA3E1B 62%,#E11417)`

Juice-category accents (from her menu, used only as small category chips):
green `#8CC152` · purple `#9B59B6` · spirulina blue `#2E7FD4` · crimson `#D62828`

## Typography Rules
Set per concept — see each concept's header comment. Constant rules:
- Display is used with restraint: hero, section openers, numerals. Never body copy.
- Body copy max width `62ch`. Line height `1.6`.
- Micro/meta type is uppercase monospace, `11–13px`, `letter-spacing: .1em`.
- No Inter, Roboto, or Open Sans as a display face.

## Component Stylings
- Buttons carry the brand gradient only on the single primary action per view.
- Cards inherit the page substrate; never mix radii within a view.
- Every interactive element has a visible `:focus-visible` ring.

## Layout Principles
- Max width `1200px`; text columns `62ch`.
- Asymmetric by default — avoid three equal cards in a row.
- Mobile-first; single column below `768px`.

## Depth & Elevation
- Light comes from the gradient, not from shadows. Glows only on the mark.
- 1px hairlines carry structure. Shadows stay minimal.

## Do's and Don'ts
- DO use her real menu items, real prices, real payment handles.
- DO mark anything invented with `.tbd` (dotted underline) so she can correct it.
- DON'T invent stretch pricing, testimonials, credentials, or years of experience.
- DON'T use stock photos of people — her photography or a labelled slot only.
- DON'T design the multi-lane hub as if it ships in this build. See Scope.
- DON'T let the brand gradient carry more than ONE primary action per view.

## Responsive Behavior
- Breakpoints 640 / 768 / 1024 / 1280.
- Images fluid with `srcset`; art-directed crops via `<picture>` where needed.
- `prefers-reduced-motion: reduce` disables all scroll/parallax motion.

## Scope

**In:** ONE site. The stretch practice leads — who she is, what a session is,
the 12-point assessment, and booking. The botanical bar / juice menu rides along
on the same site as a second section. Contact + payment handles. She hosts the
domain.

**Not in (Phase 2, quoted separately):** multi-lane sub-sites, live e-commerce
checkout, event ticketing, member accounts, calendar-synced scheduling.

## Agent Prompt Guide
- Do NOT introduce colours outside the palette above.
- The brand gradient appears at most twice per viewport, and only ONE of those
  is a primary action.
- Every invented value gets `class="tbd"` and appears in the page legend.
- Shared foundation lives in `assets/css/ember.css`; page-specific CSS stays
  inline in the page that uses it. Never duplicate a token.

## Signature

The **12-point assessment** body map is the one element the site is remembered
by. Keep it quiet everywhere else: hairline figure, cumulative ignition, one
live readout. It earns its motion because the content is a real ordered
protocol, not decoration.
