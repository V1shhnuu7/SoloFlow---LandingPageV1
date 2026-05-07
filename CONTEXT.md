# SoloFlow Landing Page — Context

## What this is
Waitlist landing page for **SoloFlow** — a freelancer SaaS (client portals, project tracking, invoicing, Razorpay/Stripe payments). India-first (₹ pricing), targeting freelancers/designers. Public launch Q3 2026.

## Stack
- **No build tooling.** Pure HTML/CSS + React 18 + Babel standalone via CDN (JSX transpiled in-browser).
- Entry: `index.html` (~2350 lines — all CSS inline in `<style>`, all HTML sections inline in `<body>`)
- JSX loaded as `<script type="text/babel" src="...">` at bottom of `index.html`

## File map
```
index.html                     # Full page: CSS tokens, HTML sections, script tags
sl/project/app.jsx             # Root orchestrator — mounts all React trees, FAQ, scroll, tweaks
sl/project/scenes.jsx          # 4 hero showcase scenes: ScenePortal, SceneProjects, SceneInvoices, ScenePayments
sl/project/mockups.jsx         # Feature section mocks: MockPortal, MockProjects, MockInvoices, MockPayments + StepVisual1/2/3
sl/project/tweaks-panel.jsx    # Dev-only live-customization panel (TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakSelect, useTweaks)
sl/README.md                   # Handoff note from Claude Design — says to read the HTML fully before building
```

## Page sections (in DOM order)
| Screen label | ID / selector | Description |
|---|---|---|
| 00 Nav | `.nav` | Sticky header, logo, nav links, "Join waitlist" CTA |
| 01 Hero | `.hero` | H1 with word rotator, lede, two CTAs, tabbed showcase frame |
| 02 Replaces strip | `.replaces` | Crossed-out tool chips (WhatsApp, Drive, Excel, Trello…) |
| 03 Stats | `.stats` | 4-up stat grid (6×, 60s, 1, 0) |
| 04 Features | `#features` | 4 alternating feature rows with React mock components |
| 05 How it works | `#how` | Dark-bg 3-step grid |
| 06 Comparison | `#compare` | 3-col table (task / old stack / SoloFlow) |
| 07 Testimonials | `.testimonials` | 3 test-cards (Thanish, Hithend, Sanjay) |
| 08 Pricing | `#pricing` | 3 cards: Free / Pro ₹499/mo / Per-project ₹169; local/intl toggle |
| 09 FAQ | `#faq` | 7-item accordion |
| 10 Final CTA | `#cta` | Formspree waitlist form + success state |
| — | `#price-modal` | Modal for "Lock founding price" (Formspree xojygvap) |
| — | `#outside-modal` | Modal for international users (Formspree mykoggog) |

## Design tokens (CSS vars on :root)
- Colors: `--bg`, `--bg-soft`, `--ink`, `--ink-2`, `--ink-3`, `--line`, `--line-2`
- Brand: `--brand` (indigo oklch 56% 0.19 258), `--brand-2`, `--brand-soft`
- Accent/status: `--accent` (amber), `--green`
- Dark mode vars: `--dark-bg`, `--dark-bg-2`, `--dark-line`, `--dark-ink`, `--dark-ink-2`
- Layout: `--pad-x` (clamp 20–80px), `--section-y` (clamp 80–140px), `--radius` 14px, `--radius-lg` 22px

## Theming system (tweaks panel)
`data-mode` on `<body>`: `light` | `dark`  
`data-density`: `compact` | `default` | `spacious`  
`data-type`: `sans` (Geist) | `serif` (Instrument Serif) | `mono` (Geist Mono)  
Accent swapped at runtime via `--brand`/`--brand-2`/`--brand-soft` CSS vars (indigo/amber/emerald/rose).  
Section order can be reordered via `applySectionOrder()` in app.jsx.

## React mount points
```
#scenes          → App → Showcase (4 SceneX children, auto-cycles every 5200ms)
#mock-portal     → MockPortal
#mock-projects   → MockProjects
#mock-invoices   → MockInvoices
#mock-payments   → MockPayments
#step-visual-1/2/3 → StepVisual1/2/3
tweakRoot (appended to body) → TweakUI
```

## Forms / integrations
- Main waitlist: `https://formspree.io/f/mdaygdeq` (name + email)
- Price lock modal: `https://formspree.io/f/xojygvap`
- International modal: `https://formspree.io/f/mykoggog`

## Key UI patterns
- `.magic-card` — mouse-tracking radial glow via `--mouse-x`/`--mouse-y` CSS vars
- `.reveal` + IntersectionObserver — fade-up on scroll
- `.word-rotator` — CSS animation cycling "freelance / design / consulting / agency"
- `.btn-primary::after` — `@property --shiny-x` animated shine sweep
- `.pulse-dot` — green ring pulse animation

## Fonts (Google Fonts CDN)
Geist 300–800, Geist Mono 400–500, Instrument Serif (used for italic accents in headings)

## Notable constraints
- No Node/npm — edits must stay in vanilla HTML/CSS or browser-compatible JSX
- `sl/project/animated-grid-pattern.jsx` is referenced in index.html but not present in the file listing (may be missing or unused)
- Pricing shown in INR by default; intl toggle button exists but pricing content doesn't change dynamically yet
