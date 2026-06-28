# Antek Automation — Brand Guidelines

Version 2.0 · Neo-brutalist system as applied to the 2026 brochure set.
This is the single source of truth. The website, decks, social cards and PDFs all follow it.

---

## 1. Brand essence

Plain-spoken, results-led, no hype. We sound like a technician who has fixed
businesses for thirty years, not a startup. Short sentences. Specifics over adjectives.

Positioning line: **Less hype. More phones answered. More admin gone.**

Voice rules:
- Short, declarative sentences. One idea per line.
- Plain British English. No corporate filler ("leverage", "synergy", "solutions-driven").
- Lead with the problem or the number, then the fix.
- Honest about limits. We say what AI can't do, on purpose. It builds trust.
- Em dashes allowed sparingly in brand copy. Never exclamation marks.

---

## 2. Colour

One coral. Consolidate everything to this value — older social cards that run a
brighter orange-red should migrate to `#CD5C3C` so the system is consistent.

| Token | Hex | Role |
|---|---|---|
| Coral | `#CD5C3C` | Primary accent. Headlines accents, bars, numerals, CTAs. |
| Cream | `#E8DCC8` | Primary text on dark. Display headings. |
| Charcoal | `#2C2C2C` | Base background. |
| Ink | `#1A1A1A` | Deep panels, cards, button text on coral. |
| Sage | `#C8D8D0` | Secondary accent only. Use sparingly. |
| Warm grey | `#CFC6B6` | Body text on dark. |
| Muted | `#8C8880` | Mono labels, captions, secondary detail. |
| Hairline | `rgba(232,220,200,0.10)` | Dividers, borders between rows. |
| Grid | `rgba(232,220,200,0.035)` | Background grid lines. |

Contrast and usage:
- Cream on charcoal: high contrast, safe for any size.
- **Coral is for large display and accents only** (24px+ and bold). Never body copy — it fails contrast at small sizes on dark.
- On coral bars, text is Ink and must stay bold and large. For small mono labels on coral, keep weight 700 and 13px minimum.
- Body copy is Warm grey or Cream. Captions and data labels are Muted mono.

---

## 3. Typography

| Family | Weights | Use |
|---|---|---|
| Outfit | 700, 800 | Display headings, big numerals. Always uppercase for H1/H2. |
| DM Sans | 400, 500, 700 | Body, ledes, UI, buttons. |
| JetBrains Mono | 400, 700 | Eyebrows, section labels, data labels, price strips, footers. |

Type scale (responsive, web):
- Display H1 — Outfit 800, `clamp(2.5rem, 6vw, 4.5rem)`, line-height .95, uppercase, tracking -0.01em.
- Section H2 — Outfit 800, `clamp(2rem, 4vw, 3rem)`, uppercase.
- H3 — Outfit 700.
- Lede — DM Sans 400, `clamp(1.0625rem, 1.5vw, 1.25rem)`, line-height 1.5.
- Body — DM Sans 400, 1rem, line-height 1.6.
- Stat numeral — Outfit 800, `clamp(2rem, 5vw, 3.5rem)`, coral.
- Eyebrow / label — JetBrains Mono 700, 0.75rem, uppercase, tracking 0.22em, Muted.

Headline rule: one phrase in coral per headline, the rest in cream. Never colour the whole headline.

---

## 4. Layout

- **Background grid.** Faint two-axis grid over the charcoal base, ~56px cells at `rgba(232,220,200,0.035)`. Always present, never loud.
- **Generous negative space.** Let headlines breathe. Crowding kills the look.
- **Coral left bar.** 5px coral vertical bar to the left of primary headlines.
- **Full-bleed coral bars.** Section breaks and CTAs use edge-to-edge coral bands with Ink text, mono, uppercase, often with a `→` and a question.
- 8px spacing base. Section padding is generous (96–128px on desktop).

---

## 5. Component catalogue

These are the repeatable blocks. Build them once, reuse everywhere.

1. **Eyebrow row** — mono, uppercase, tracking 0.22em. Left: `ANTEK / AUTOMATION`. Right: section/page label in coral.
2. **Kicker** — short coral mono line above a headline.
3. **Headline + left bar** — Outfit 800 uppercase, cream with one coral phrase, 5px coral left bar.
4. **Lede** — DM Sans, warm light, max ~60ch.
5. **Mono strip** — price/fact strip, mono uppercase, coral `·` bullets, key figure bold coral.
6. **Section label** — mono Muted label with a coral hairline rule running to the right edge.
7. **Numbered rows** — coral mono index (01–06), bold DM Sans title, Muted description, hairline dividers between rows.
8. **Stat row** — three cells divided by hairlines, big coral Outfit numeral + mono Muted label.
9. **Price box** — 2px coral border, Ink fill, hard offset shadow `6px 6px 0 rgba(205,92,60,0.35)`, big Outfit figure, DM Sans detail with bold key terms.
10. **Tag chips** — 2px hairline border, mono uppercase, zero radius. Used for industries and trust badges.
11. **Coral CTA band** — full-bleed coral, Ink headline + button.
12. **Footer strip** — full-bleed coral, mono, phone / email / address / URL separated by `/`.

---

## 6. Visual rules (non-negotiable)

- **Zero border-radius.** Everything is square.
- **Flat colour only.** No gradients, ever.
- **Hard offset shadows only.** `Npx Npx 0` in coral or ink. No soft/blurred drop shadows.
- **2px borders.** Consistent weight across chips, boxes, frames.
- **No emoji, no stock photography.** The brand is typographic.
- Imagery, where used: the founder shot on a coral circle, or product/dashboard screenshots. Nothing decorative.

---

## 7. Buttons

- **Primary** — coral fill, Ink text, 2px Ink border, hard offset shadow `4px 4px 0 #1A1A1A`. On hover, translate 2px down-right and collapse the shadow. Uppercase, DM Sans 700.
- **Secondary** — transparent, 2px cream border, cream text. On hover, invert to cream fill with Ink text.
- Focus state: 2px coral outline, 2px offset. Always visible.

---

## 8. Accessibility

- Body text contrast meets WCAG AA. Coral text only at large/bold sizes.
- Every interactive element has a visible focus ring.
- Honour `prefers-reduced-motion`: disable the hover translate and any transitions.

---

## 9. Don't

- Don't round corners, blur shadows, or add gradients.
- Don't colour a whole headline coral.
- Don't use coral for body text.
- Don't crowd the layout. Negative space is part of the brand.
- Don't introduce a second accent beyond sage, and keep sage rare.
