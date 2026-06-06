# Handoff: Salaro.com — 2026 Relaunch

> **v3 update (May 2026)** — see the **"v3 revisions"** section below before reading the rest. v1 is already shipped on Vercel; v3 changes the chrome (header, footer, logo, hero animation, spacing) and leaves the page content alone.

---

## v3 revisions — what changed since the live site

The live site at `salaro-website-g7o6.vercel.app` is in good shape. This revision is **chrome and motion only** — none of the body copy or section content needs to change. Five focused changes, applied across all pages:

### 1. Logo — new mark + wordmark

A new SVG mark sits left of the wordmark. It's a tiny pictogram of the agent-factory diagram: a **terracotta dot** (the human-judgment node) above a **horizontal line** (the build conveyor). Conceptually rhymes with the homepage hero without being literal.

- See `prototypes/logo-mark.jsx` for the source. ~30 lines of inline SVG, no dependencies.
- Renders crisply at any size, including 16px favicon.
- Has a `darkBackground` prop that switches the conveyor stroke to cream for use on the dark footer.
- Reuse the same component everywhere (header, footer, favicon, OG image).
- Replace the current `Salaro.` wordmark with: `<LogoMark size={22} /> Salaro` (no period; the mark replaces it).

**Favicon**: render the mark alone at 32×32 onto a cream background and save as `/public/favicon.png` + apple-touch-icon. Both colours from the existing palette, no new tokens.

### 2. Header background — subtle warm tint

The header is now distinguished from the page surface:

- Background: `var(--bg-warm)` (the same warm-paper tone used on the diagram band).
- Border-bottom: `1px solid var(--line)` (slightly heavier than the old `--line-soft`).
- `position: sticky; top: 0; z-index: 20;` — header stays visible as the page scrolls.
- `backdrop-filter: saturate(120%)` — keeps it lively when content scrolls under.
- Padding tightened from `22px` to `18px` vertical.

Do **not** go darker than this on the header — anything stronger competes with the hero and breaks the editorial feel.

### 3. Hero — tighter spacing between header and h1

The gap between the menu bar and the page content was too large. New values:

- **Homepage hero**: `padding: 56px 64px 40px` (was `80px 64px 48px`).
- **Inner-page hero**: `padding: 64px 64px 56px` (was `96px 64px 64px`).
- Hero `h1` top margin reduced from `24px` to `20px`.

### 4. Rotating italicised hero word — the subtle animation

The italicised word at the end of the homepage h1 (`"...outgrown a template"`) now cycles slowly through alternatives, on a soft vertical-slide crossfade.

**Default rotation set** (5 entries, 5-second hold each, 500ms transition):

```
template → Wix site → WordPress install → Squarespace → starter kit
```

Implementation specifics:

- Component: `HeroRotator` in `prototypes/Salaro Homepage.html` (~30 lines of React).
- Honour `prefers-reduced-motion: reduce` — when set, freeze on the first word, no rotation.
- Use `min-width: 6ch` on the rotator container so the headline doesn't reflow as words change width.
- The italic styling, accent colour, and weight are all unchanged from the static version — only the word swaps.
- This is the **only new animation on the site** apart from reveal-on-scroll (see below). No other rotators, tickers, or auto-playing carousels.

If a longer rotation feels right later, candidate phrases are: "a brittle agency build", "their starter kit", "a no-code Frankenstein". Keep all entries grammatical with the preceding "a".

### 5. Footer — dark, distinguished, with link columns

The footer is now a true different surface: near-ink background, cream-on-dark text, link columns. Matches what was already shipped in content, just inverted.

Tokens to add to `styles.css`:

```css
--footer-bg:        oklch(0.16 0.02 60);   /* near-ink, slightly warm */
--footer-fg:        oklch(0.72 0.02 60);   /* default footer text */
--footer-fg-strong: oklch(0.92 0.02 60);   /* footer headlines, wordmark */
--footer-line:      oklch(0.28 0.02 60);   /* internal dividers */
--footer-meta:      oklch(0.55 0.02 60);   /* tiny bottom meta line */
```

Structure: a 5-column grid (`1.4fr 1fr 1fr 1fr 1fr`) at desktop, collapsing to 2-column on tablet and single-column on mobile.

- Column 1: logo (with the dark variant of the mark) + an italic display tag-line.
- Columns 2–5: Practice / Studio / Work / Contact, each with a terracotta mono title and a vertical list of links. Same content as the currently-shipped footer.
- Hairline divider, then a single meta row with the © line and the "Practising since 1995" tag.
- Top padding `80px`, bottom padding `32px`. Generous, deliberate.
- Link hover colour: `var(--accent)`.

### 6. Reveal-on-scroll (bonus, very subtle)

A small `<Reveal>` wrapper fades each major section in (16px upward) on first intersection with the viewport. 700ms ease, no stagger. Honours `prefers-reduced-motion`. Implementation: `IntersectionObserver` with `threshold: 0.12`.

This is **not** parallax. There is no continuous scroll-tied animation. Each section reveals once and stays put. If it feels heavy, dial down to opacity-only.

---

## Files changed in v3

```
prototypes/
├── Salaro Homepage.html       ← updated header, hero rotator, dark footer, reveal
├── Practice.html              ← updated header + dark footer
├── Work.html                  ← updated header + dark footer
├── Studio.html                ← updated header + dark footer
├── Writing.html               ← updated header + dark footer
├── Contact.html               ← updated header + dark footer
├── logo-mark.jsx              ← NEW — SVG logo component (also used as favicon)
├── styles.css                 ← (add the --footer-* tokens listed above)
└── agent-factory.jsx          ← unchanged
```

The previous v2 homepage is preserved at `prototypes/Salaro Homepage v2 (previous).html` for diff reference.

---

## What NOT to change in v3

- All body copy, section headings, work archive entries, essay titles — **unchanged**. The live content is good.
- The agent-factory diagram — **unchanged**.
- The colour palette and type system — **unchanged**.
- The page structure — **unchanged**. Same five pages, same routes, same section order.

---

## Overview

Salaro is a small UK web consultancy, founded in 2000, returning in 2026 with a new operating model: **AI-native delivery for SMEs**. The site needs to communicate three things at once:

1. We are experienced (25 years in the trade).
2. We are not a big agency, and we are not a template builder — we sit in the middle, deliberately.
3. We work AI-first, ship through GitHub and Vercel, and we are honest about it.

The visual direction is **light editorial** (cream paper, terracotta accent, classical serif headlines) — a counter-position to the dark/glassy/cosmic look most AI-era agency sites are sliding into.

---

## About the design files

The files in `prototypes/` are **design references created in HTML/JSX** — visual specs showing intended look, copy and behaviour. They are **not production code to ship directly**.

The task is to **recreate these designs in a real codebase** — see the recommended stack below — using the codebase's own patterns. Use the HTML files for the visual truth, the CSS file for tokens, and this README for everything else.

## Fidelity

**High-fidelity.** The prototypes are pixel-accurate for desktop (1280–1440px). Final colors, typography, spacing, and the one piece of interactive motion (the agent-factory diagram on the homepage) are all final and should be matched precisely. Mobile layouts are **not** in the prototypes and need to be designed at implementation time — see the "Responsive behaviour" section.

---

## Recommended stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router) + TypeScript** | Static-friendly, plays well with Vercel, matches Salaro's own pitch (Claude → GitHub → Vercel) |
| Styling | **CSS variables + plain CSS modules** (or Tailwind v4 with the tokens below mapped to CSS vars) | The design is token-driven; a heavy framework is overkill |
| Fonts | **`next/font/google`** for Cormorant Garamond, Inter Tight, JetBrains Mono | Self-hosted, no FOUT |
| Forms (Contact) | Vercel-hosted endpoint OR Formspree / Resend / Plunk | Whichever the studio already uses; not opinionated |
| Hosting | **Vercel** | Per the brief |
| Repo | **GitHub** | Per the brief |
| Analytics | Plausible or Vercel Analytics | Privacy-respecting, no cookie banner needed |

Routes map 1:1 to the prototype files:

| Route | Prototype | Notes |
|---|---|---|
| `/` | `Salaro Homepage.html` | Hero + live diagram + services + proof + manifesto |
| `/practice` | `Practice.html` | Detail on the three service lines |
| `/work` | `Work.html` | Recent (confidential) + archive (anonymised) |
| `/studio` | `Studio.html` | Founder, team, values |
| `/writing` | `Writing.html` | Essay list. Hook up to MDX or a headless CMS later |
| `/contact` | `Contact.html` | Form + process + honest-filter footer |

---

## Design tokens

All tokens live in `prototypes/styles.css` as CSS custom properties. Reproduce them exactly. Do **not** add new colors or font sizes without checking — the palette is intentionally narrow.

### Colors (oklch — match these values, do not "approximate" in hex)

```css
--bg:          oklch(0.97  0.008 85);   /* warm paper */
--bg-warm:     oklch(0.945 0.014 80);   /* slightly deeper paper for banded sections */
--bg-card:     oklch(0.99  0.005 85);

--ink:         oklch(0.22  0.02  60);   /* body text */
--ink-strong:  oklch(0.14  0.02  60);   /* headlines, primary button */
--ink-soft:    oklch(0.42  0.025 60);   /* lede paragraphs */
--ink-faint:   oklch(0.58  0.02  60);   /* mono labels, eyebrows */

--line:        oklch(0.82  0.015 60 / 0.6);
--line-soft:   oklch(0.82  0.015 60 / 0.3);

--accent:      oklch(0.48  0.13  35);   /* deep terracotta */
--accent-soft: oklch(0.48  0.13  35 / 0.1);
--accent-ink:  oklch(0.32  0.10  35);   /* italic accent text — readable next to body */
```

Hex fallbacks (for tooling that doesn't speak oklch — Tailwind v3, older browsers): generate from the oklch values at build time, don't hand-pick. Modern Vercel build pipelines render oklch natively.

### Typography

| Token | Family | Use |
|---|---|---|
| `--font-display` | **Cormorant Garamond** (400, 500, italic 400/500) | All headlines, lede paragraphs, italic accent words |
| `--font-body` | **Inter Tight** (300, 400, 500, 600) | Body copy, UI labels, form fields |
| `--font-mono` | **JetBrains Mono** (400, 500) | Eyebrows, step numbers, meta lines, button labels |

**Mono labels are uppercase with `letter-spacing: 0.22em` and `font-size: 10–11px`.** This is a load-bearing detail of the design — do not skip the letter-spacing.

**Headlines use negative letter-spacing** (`-0.025em` for the 96px hero, scaling toward 0 as sizes shrink). The italics carry the warmth — every page has at least one italicised word in `--accent-ink` per headline.

### Type scale (desktop)

| Size | Use | Weight | Family |
|---|---|---|---|
| 96px | Homepage hero h1 | 400 | Display |
| 84px | Inner-page hero h1 | 400 | Display |
| 56px | Practice section h2 | 400 | Display |
| 44px | Studio section h2 | 400 | Display |
| 36px | Manifesto h3, services h2, page-block h2 | 400 | Display |
| 32px | Essay h2, contact h2 | 400 | Display |
| 28px | Diagram h2 | 500 | Display |
| 24px | Service card h4 | 500 | Display |
| 22px | Proof-bar / lede / work-row title | 400 italic / 500 | Display |
| 16px | Body copy default | 400 | Body |
| 14–15px | Service/card body, secondary text | 400 | Body |
| 11px | Eyebrow / mono labels | 400/500 | Mono |
| 10px | Footer / step nums | 400 | Mono |

### Spacing

The prototypes use multiples of **4px**, with most page padding/margins at **64px** (section gutter) and **96px** (vertical rhythm between major sections). Hero blocks are **80–96px** top padding. Map to a simple scale:

```
--space-1: 4px;   --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
--space-5: 24px;  --space-6: 32px;  --space-7: 48px;  --space-8: 64px;
--space-9: 96px;
```

### Borders & radii

- Buttons: `border-radius: 2px` (subtle, not soft)
- Inputs: bottom border only (`1px solid var(--ink-strong)`), no rounding
- Cards/sections: **no radius** — boundaries are hairlines (`1px solid var(--line-soft)`) or top-borders-only on individual cards
- The design has **no drop shadows**. Light, flat, editorial.

### Max content width

`1320px` centered, with `64px` horizontal padding. The diagram band breaks out to full bleed via negative margins (see `.diagram-block`).

---

## Page-by-page spec

### 1. Homepage (`/`)

**Sections in order:**

1. **Header** — wordmark "Salaro." (period in accent terracotta) + 5-link nav, all `--font-body 14px`. Hairline border-bottom.

2. **Hero** — two-column grid (1fr 1fr, `gap: 64px`, items aligned to `end`).
   - Left: eyebrow ("A UK web consultancy · Practising since 2000") + h1 (`The complex builds...` style, with `judgment` italicised in `--accent-ink`).
   - Right: italic lede paragraph in display serif + two CTAs ("Start a conversation" primary, "See how we build →" secondary).
   - The headline is currently **"For UK businesses that have outgrown a template."** — see "Open content slots" below for the user's pending decision on alternate headlines.

3. **Diagram block** — full-bleed warm-paper band (`--bg-warm`) with the live agent-factory diagram. **See "Live diagram" section below** for the implementation.

4. **Services** (3 cards, top-border-only, no fills): Build / Migrate / Advise, each with a mono number, italicised display headline, body paragraph, and a mono meta-line.

5. **Proof bar** — 4 items in a row, each with `--font-mono` eyebrow ("01 · Tenure") above an italic display claim.

6. **Manifesto** — two-column (280px sidebar + content). Sidebar has a mono "A note · 01" tag; content is a single italic display h3 with `middle`, `The judgment, we keep human` italicised in accent.

7. **Footer** — single line of mono text, hairline border-top.

### 2. Practice (`/practice`)

Three large `.practice-section` rows (the same three lines as the homepage Services strip, but expanded):

- **01 Build** — h2 + lede + a 4-step process grid (Brief → AI draft → Engineer → Ship), each step a top-border card.
- **02 Migrate** — h2 + lede + a 2-column bullet list of DNN-specific capabilities. **The DNN focus is core positioning** — do not soften this.
- **03 Advise** — h2 + lede + a 4-format grid (Half-day, 30-day pilot, Retainer, Build & advise).

Each row uses the **280px sidebar + content** pattern. Sidebar carries a mono number, a hairline divider, and a stack of mono meta-lines.

### 3. Work (`/work`)

Two blocks:

- **Recent · 2026 →** — explicit note that recent work is confidential. 3 anonymised placeholder rows.
- **Archive · 2000–2015** — 7 anonymised rows (charity, law firm, manufacturer, etc.). Ends with `2000 — Salaro · founded` row.

Row layout: 4-column grid (110px year / 1fr title / 200px sector / 120px kind), hairline dividers between rows.

**Important:** all client names are anonymised placeholders. The user will replace these or leave them anonymous; do not invent client names.

### 4. Studio (`/studio`)

Three `.studio-section` rows (same 280px+content pattern):

- **01 Founder** — bio placeholder. **Contains an inline "Note for Claude Code" tag in the prototype** flagging that the bio + photo need to be supplied by the user.
- **02 Team** — explains the UK-lead-plus-India-team model. Honest, do not euphemise.
- **03 Values** — 2x2 grid of four values: "Small on purpose", "You own everything", "Plain numbers", "Judgment not throughput".

### 5. Writing (`/writing`)

A list of essays. Each essay is a 3-column row (160px date / 1fr title + preview / 200px meta). 4 placeholder essays are seeded with the titles below — these are real working titles for the relaunch, the user wants to keep them as content commitments:

1. *Why a ten-year-old with a template will eat most agency work.* (8 min essay)
2. *DNN in 2026: it's still out there, and it still needs help.* (12 min field note)
3. *AI for SMEs: a fortnight's primer.* (14 min primer)
4. *Days, not months: a build diary.* (18 min diary)

Hook the route up to **MDX in `/content/writing/*.mdx`** or a tiny headless CMS — the user will write the actual essays later. The list page is the priority; individual essay pages can be a basic prose layout (60ch column, display serif h1, body sans body).

Page ends with a small italic aside: "More notes as the studio writes them. No subscription, no newsletter — yet."

### 6. Contact (`/contact`)

Two-column grid (1fr 1fr, `gap: 96px`):

- **Left:** "Send a note" form — Name, Email, Company (optional), Message. Bottom-border inputs only, italic display placeholders, primary button. Below the form: "Or write directly to **hello@salaro.com**."
- **Right:** "How this goes" — 4-step process (Write → Talk → Propose → Build), each step in a hairline-divided row.

Below the grid, full-bleed centered **"honest-filter" paragraph**: italic display, 22px, explicitly says "We work with UK SMEs. We don't take on enterprise projects that need procurement..." — **keep this; it is intentionally repellent to the wrong leads.**

The form needs a real backend. **Recommendation:** a Vercel route handler at `/api/contact` that posts to Resend (or Plunk, or just sends an email via SMTP). Validate server-side, return JSON, show a success state in-place. Or use Formspree if the user wants zero backend code.

---

## The live diagram (homepage only)

The hero of the homepage is a **live, programmatic SVG diagram** (`prototypes/agent-factory.jsx`) showing the build pipeline:

`Architect → Researcher → Developer → Reviewer → Shipped`

with a **Human Judgment** node sitting above the conveyor. Tokens of work move left-to-right along the line; ~18% are flagged in terracotta; the Human Judgment node pulses every ~4 seconds.

**Implementation guidance:**

- Port as a **React client component** (`'use client'` in App Router). It uses `requestAnimationFrame` and `useState`.
- The component is **~200 lines**; lift it verbatim and adapt the imports.
- All colors are CSS variables — keep that pattern so it picks up the global theme.
- It is responsive via `viewBox` — keep that, do not switch to a fixed-px canvas.
- Do **not** swap to a canvas-based animation; the SVG version is intentionally crisp on retina and trivially debuggable.
- Respect `prefers-reduced-motion` — when set, freeze the tokens and skip the pulse.

If the engineer prefers, the animation timings can be lifted into a small config object at the top of the component for tuning.

---

## Interactions & behaviour

| Element | Behaviour |
|---|---|
| Nav links | Hover: color → `--accent` (200ms). Active page: persistent `--accent`. |
| Buttons (primary) | Hover: bg → `--accent`, border → `--accent`. 200ms. |
| Buttons (secondary) | Hover: color → `--accent`, border-bottom → `--accent`. |
| Essay titles | Hover: color → `--accent`. |
| Form inputs | Focus: border-bottom → `--accent`. |
| Headline italics | Static — no animation. The italics ARE the emphasis. |
| Diagram | Auto-running as described above. Pause on hover is **not** required. |
| Page transitions | Standard browser navigation; no SPA fades. The site is meant to feel like printed matter, not a SaaS. |

**No scroll animations, no parallax, no reveal-on-scroll.** The design is intentionally still; the diagram is the only motion on the site.

---

## Responsive behaviour

Prototypes are designed for desktop 1280–1440. For implementation:

- **≥ 1100px**: as drawn. Two-column hero, multi-column grids.
- **768–1099px**: collapse two-column hero to stacked; reduce hero h1 from 96px → 64px; reduce inner-page h1 from 84px → 56px; collapse 280px sidebars to full-width above their content; services grid 3-col → 1-col stack with hairline dividers between cards; work-row 4-col → 2-col (year + title on one line, sector + kind below).
- **< 768px**: 32px page padding, header nav collapses to a hamburger (use the wordmark + a single mono "Menu" link; the drawer is a stacked list of the same 5 nav items, mono uppercase 13px).
- **Type minimums on mobile**: hero h1 ≥ 40px, body ≥ 15px. The mono labels stay at 10–11px — they are intended to feel small.
- Diagram: stays a viewBox SVG, just narrows. Below 600px wide, hide the tick marks on the conveyor for clarity.

---

## State management

The site is **almost entirely static**. State requirements:

1. **Diagram** — local `useState` for tokens and pulse, as in the prototype.
2. **Contact form** — local state for fields, loading, success/error. No global store needed.
3. **Mobile nav drawer** — local boolean.

No global state library. No data fetching at runtime (except the contact form POST).

---

## SEO / metadata

Per page, set:

- `<title>` — `Salaro — {Page Name}` for inner pages; `Salaro — A UK web consultancy, AI-native delivery` for the homepage.
- `<meta name="description">` — one line per page, draw from the page lede.
- Open Graph image — **needs design**. A simple flag: title set in Cormorant on cream, terracotta accent. 1200×630. Can be generated with `@vercel/og`.
- `robots`: index, follow.
- `sitemap.xml` — generate from the routes.

---

## Open content slots (the user will fill these in)

These are intentionally placeholder in the prototypes — flag clearly in the build that they need real content before launch:

| Item | Where | Notes |
|---|---|---|
| Logo / wordmark | Header | Currently "Salaro." in Cormorant. If a real mark arrives later, replace. |
| Headline copy | Homepage hero | Current: *"For UK businesses that have outgrown a template."* The user is reviewing alternatives. |
| Founder bio + photo | `/studio` → section 01 | Prototype has an inline "Note for Claude Code" placeholder. |
| Real client references | `/work` | All currently anonymised. The user may add real names selectively. |
| Essay bodies | `/writing` | The 4 essay titles are committed; bodies to be written. Use MDX or a simple CMS. |
| `hello@salaro.com` | `/contact`, footer | Confirm this is the real address before launch. |
| OG image | `/public/og.png` | Needs design. |

---

## Deployment

The user has specifically asked for the flow:

**Claude Code → GitHub → Vercel.**

Suggested setup:

1. Initialise a Next.js 15 project, push to a fresh GitHub repo under the user's account.
2. Connect the repo to Vercel; configure the production domain (`salaro.com`) once DNS is ready.
3. Use Vercel preview deployments for review — every PR gets a URL.
4. Set environment variables in Vercel for the contact-form backend (e.g. `RESEND_API_KEY`).
5. Add a basic `vercel.json` only if needed; defaults are fine.

The site should pass Lighthouse with high scores out of the box — it is small, image-light, and uses system font rendering well.

---

## Assets

| Asset | Status |
|---|---|
| Cormorant Garamond, Inter Tight, JetBrains Mono | Google Fonts — load via `next/font/google` |
| Logo / wordmark | Typographic only at present; no SVG mark |
| Imagery | **None.** The design is deliberately image-free; the diagram is the only "image" on the homepage |
| Icons | **None.** No iconography is used in the design — do not add any |
| Favicon | Needs to be generated — a terracotta "S." in Cormorant on cream is a sensible default |

---

## Files in this handoff

```
design_handoff_salaro_site/
├── README.md                          ← this file
└── prototypes/
    ├── Salaro Homepage.html           ← homepage with live diagram
    ├── Practice.html
    ├── Work.html
    ├── Studio.html
    ├── Writing.html
    ├── Contact.html
    ├── styles.css                     ← design tokens (the source of truth)
    └── agent-factory.jsx              ← the live diagram React component
```

Open `Salaro Homepage.html` in a browser to see the full system; the inner-page nav links are wired so you can click through.

---

## A note on tone

This is a **consultancy site, not a SaaS site**. Treat the copy as if it were set in a small magazine — careful, slightly literary, never breathless. If you find yourself reaching for words like *"empower"*, *"unlock"*, *"transform"*, *"seamless"*, *"cutting-edge"* — stop. The site's voice is its differentiation.
