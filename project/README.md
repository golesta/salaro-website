# Salaro — Homepage Direction (handoff)

A single-page light-editorial exploration to replace the dark-mode direction.

## Files

- `Salaro Homepage.html` — the page. Open directly in a browser, or load in any static host.
- `agent-factory.jsx` — the live SVG pipeline diagram (Architect → Researcher → Developer → Reviewer → Shipped, with a human-judgment node above). Pure React + SVG, no images, no video, no libraries.
- `styles.css` — design tokens. Cream background, warm-leaning ink, deep terracotta accent. Type: Cormorant Garamond (display, italic) + Inter Tight (body) + JetBrains Mono (labels).

## Design intent

1. **Light, not dark.** Most agency sites built with AI assistance are sliding into the same dark/glassy/cosmic look. Salaro reads as an established consultancy, not a 2024 SaaS launch — cream paper, editorial serif, restrained accent.
2. **Different accent from Quantime.** Quantime uses a cool blue; Salaro uses a warm terracotta so the two sites are siblings without being twins.
3. **Lead with the thesis, not the hero image.** The headline says what Salaro is in one breath. The italic Cormorant carries the warmth; the mono labels carry the rigour.
4. **The diagram earns the fold.** A live programmatic pipeline replaces the astronaut. It shows — without claiming — that Salaro builds with agents plus human judgment. Tokens move along the conveyor; the human-judgment node pulses every ~4 seconds. Flagged tokens (about 18%) light up in terracotta.

## Sections

1. **Header** — wordmark + 5-link nav
2. **Hero** — eyebrow, headline with italicised "judgment", lede paragraph, two CTAs (Start a conversation / See how we build)
3. **Live diagram** — full-bleed warm-paper band with the build pipeline
4. **Proof bar** — 4 numbered claims (tenure, team, method, reach)
5. **Manifesto** — "Why we are not another agency" — short, italic accents
6. **Footer**

## Open items (Sunday)

- Logo / wordmark — currently set in Cormorant; swap for the real mark when ready
- Real client names / logos for the proof bar
- One-line elevator pitch — the current copy is a placeholder and should come from you
- Decide if the headline should mention "AI-native" / "agent-factory" explicitly, or imply it via the diagram only (recommend the latter)
- Connect the live "Start a conversation" CTA — Calendly, email, or a contact form

## To take into the Salaro project

Drop these three files into a new project (or into the design-handoff folder of your existing Salaro repo). Treat the HTML as a visual spec, not as the deliverable — port to whatever stack the Salaro site lives on, same way we did with Quantime.

The Cormorant + Inter Tight + JetBrains Mono trio loads from Google Fonts in the HTML head — for production, swap to `next/font/google` or your framework's equivalent.
