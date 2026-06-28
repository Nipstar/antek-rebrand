# Prompt — Restyle antekautomation.com to the neo-brutalist brand system

Paste this into Claude Code (or your build agent) at the root of the site repo.
It pairs with `ANTEK-BRAND-GUIDELINES.md` — keep that file in the repo and treat it as the source of truth.

---

## Role and goal

You are restyling the existing antekautomation.com front end to match Antek's neo-brutalist
brand system (see ANTEK-BRAND-GUIDELINES.md). This is a **visual restyle only**. You are not
rewriting the site's copy, information architecture, or SEO.

## Hard constraints — do not break these

1. **Do not change copy.** Headlines, body, FAQs, pricing numbers stay exactly as written.
2. **Do not touch** `<head>`, meta tags, canonical URLs, Open Graph, JSON-LD schema, `robots`, `sitemap`, or `llms.txt`.
3. **Do not change routes, slugs, or internal links.** Preserve every existing URL.
4. **Do not remove** the FAQ accordions, the demo embeds, the Retell/FSB trust signals, or any structured-data-bearing markup.
5. Preserve or improve accessibility. Do not regress contrast or keyboard support.
6. Mobile-first. The current site must stay fully responsive.

Work component-by-component. After each, confirm the page still renders and links still resolve.

## Design tokens

Add these as CSS variables on `:root` and, if the project uses Tailwind, mirror them in `theme.extend`.

```css
:root{
  --coral:#CD5C3C;
  --cream:#E8DCC8;
  --charcoal:#2C2C2C;   /* base background */
  --ink:#1A1A1A;        /* panels, cards, text on coral */
  --sage:#C8D8D0;       /* rare secondary accent */
  --body:#CFC6B6;       /* body text on dark */
  --muted:#8C8880;      /* mono labels */
  --hairline:rgba(232,220,200,0.10);
  --grid:rgba(232,220,200,0.035);
}
```

Fonts: Outfit (700, 800), DM Sans (400, 500, 700), JetBrains Mono (400, 700). Self-host via
`@fontsource` or the existing font pipeline. Do not load from a third-party CDN if the site self-hosts today.

## Type scale (responsive)

- H1 display: Outfit 800, `clamp(2.5rem,6vw,4.5rem)`, line-height .95, uppercase, letter-spacing -0.01em.
- H2 section: Outfit 800, `clamp(2rem,4vw,3rem)`, uppercase.
- H3: Outfit 700.
- Lede: DM Sans 400, `clamp(1.0625rem,1.5vw,1.25rem)`, line-height 1.5.
- Body: DM Sans 400, 1rem, line-height 1.6, colour `--body`.
- Stat numeral: Outfit 800, `clamp(2rem,5vw,3.5rem)`, colour `--coral`.
- Eyebrow/label: JetBrains Mono 700, .75rem, uppercase, letter-spacing .22em, colour `--muted`.

Headline rule: cream by default, exactly one phrase in coral per headline.

## Global look

- Page background `--charcoal` with a faint two-axis grid overlay (`--grid`, ~56px cells), fixed and low.
- Zero border-radius everywhere. Flat colour, no gradients.
- Shadows are hard offsets only: `Npx Npx 0` in coral or ink. Remove every blurred/soft shadow.
- Borders are 2px.
- Generous section padding (96–128px desktop, 56–72px mobile). Protect negative space.

## Components to build, then apply across the site

1. **Eyebrow row** — mono, left `ANTEK / AUTOMATION`, right page label in coral.
2. **Headline block** — H1 with a 5px coral left bar, kicker (coral mono) above.
3. **Mono strip** — fact/price row, mono uppercase, coral `·` separators, key figure bold coral.
4. **Section label** — mono muted label with a coral hairline rule to the right edge.
5. **Feature/numbered rows** — coral mono index, bold title, muted description, hairline dividers. (Use for service capability lists.)
6. **Stat row** — three cells, hairline dividers, big coral numeral + mono label.
7. **Price box** — 2px coral border, `--ink` fill, shadow `6px 6px 0 rgba(205,92,60,0.35)`, big Outfit figure, DM Sans detail with bold key terms.
8. **Tag chips** — 2px hairline border, mono uppercase, zero radius. For industry lists and trust badges.
9. **Coral CTA band** — full-bleed coral, ink headline + primary button.
10. **Buttons** — primary: coral fill, ink text, 2px ink border, shadow `4px 4px 0 #1A1A1A`, hover translates 2px and collapses shadow. secondary: transparent, 2px cream border, hover inverts to cream fill / ink text. Visible coral focus ring.
11. **FAQ accordion** — restyle only: hairline dividers, mono index, coral `+`/`−`. Keep the existing markup and content intact for schema.
12. **Footer** — full-bleed coral strip, mono, phone / email / address / URL separated by `/`.

## Page-by-page application

- **Homepage** — hero uses the headline block + coral left bar + primary button. Services as numbered rows or three cards. A coral CTA band before the footer.
- **Service pages** (`/services/ai-chatbots`, `/services/workflow-automation`, `/services/ai-voice-assistants`, `/services/geo-audit`) — hero headline block, mono price strip, capabilities as numbered rows, a stat row where the page has figures, price box, FAQ accordion, coral CTA band. Mirror the matching brochure exactly.
- **AI Receptionist** (`/ai-receptionist`) and its industry subpages — same pattern, industry tag chips, "what this isn't" as a contrast block.
- **Location pages** (`/locations/*`) — headline block with the town in coral, service tag chips, keep all local copy and internal links unchanged.
- **About** (`/about`) — journey as numbered rows, trust badges as tag chips, the company-details panel as a price-box-style block (ICO, DUNS, partnerships). Founder photo on a coral circle.
- **Pricing** and **Contact** — price boxes and the coral CTA/footer treatment.

## Motion

Minimal. Hard, fast transitions only (≤120ms). Button hover = 2px translate + shadow collapse.
No fades on scroll beyond a subtle reveal. Honour `prefers-reduced-motion` by disabling transforms.

## Accessibility

- Coral text only at 24px+ and bold. Body stays `--body` or cream.
- Maintain WCAG AA on body text. Keep alt text. Visible focus rings on all interactive elements.

## Definition of done

- Every page renders in the new system, mobile and desktop, with no horizontal overflow.
- No copy, meta, schema, route, or internal link changed.
- No rounded corners, gradients, or soft shadows remain anywhere.
- Lighthouse accessibility score is equal or higher than before.
- Service and receptionist pages visually match their brochures.

Start with the global tokens, fonts, and the component library. Then apply to one service page,
show me the result, and once approved, roll out to the rest.
