# Antek Automation Website

A production-ready marketing website for Antek Automation — a UK-based AI automation agency serving service businesses. Built with Vite + Vike (file-based SSR/pre-render), React 18, TypeScript and Tailwind CSS, featuring the **neo-brutalist dark brand system (v2.0)**.

## Features

- **Neo-Brutalist Dark Design**: charcoal base, 2px borders, hard offset shadows, zero border-radius, fixed background grid
- **Coral Brand Palette**: coral accent, cream display text, ink panels (see Design System below)
- **Self-hosted Fonts**: Outfit (display), DM Sans (body), JetBrains Mono (labels) via `@fontsource` — no third-party CDN
- **Section-heading system**: `HeadlineBlock` — Outfit 800 uppercase, 5px coral left bar, cream with one coral phrase
- **Four services**: AI Voice Agents, AI Chatbots, Workflow Automation, GEO (Generative Engine Optimisation), plus the productised AI Receptionist
- **Live Voice Demos**: Retell AI orb demos (`RetellDemoCards`) + ElevenLabs `VoiceChat` modal
- **Cal.com booking**: official `@calcom/embed-react` embed (dark + coral brand)
- **AI Chatbot Widget**: persistent widget with n8n webhook integration (auto-opens on first visit, consent-gated)
- **Contact Form**: lead capture form with n8n webhook
- **Location Network**: Hampshire + Berkshire county hubs over town pages (Andover, Basingstoke, Winchester, Southampton, Portsmouth, Reading, Newbury, Salisbury, Bournemouth) — anti-cannibalisation, one canonical Organization node
- **SEO/GEO Optimised**: JSON-LD schema, Open Graph, canonical, FAQPage matching visible content, per-page meta (title ≤60, description ~150–160)
- **Code Splitting**: lazy-loaded widgets/modals; Vike pre-renders every route to static HTML
- **Analytics**: Google Analytics + Microsoft Clarity + Meta Pixel (Consent Mode v2, default-denied until accept)

## Tech Stack

- Vike (`vike-react`) — file-based routing + SSR/pre-render (every route → static HTML)
- React 18 + TypeScript
- Vite (build tool & dev server)
- Tailwind CSS (v3)
- `@fontsource` — self-hosted Outfit / DM Sans / JetBrains Mono
- Lucide React (icons)
- `@elevenlabs/react` (voice chat) · `@calcom/embed-react` (booking)
- `@supabase/supabase-js` (optional backend)

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   Then update `.env` with your webhook URLs and analytics IDs.

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Pages

- `/` — Home (agency hero, four services equal-weight, problem, case studies, CTAs)
- `/services/ai-chatbots` — AI Chatbots
- `/services/ai-voice-assistants` — AI Voice Agents (speed-to-lead / inbound + outbound; Retell + ElevenLabs demo)
- `/services/workflow-automation` — Workflow Automation (n8n)
- `/services/geo-audit` — GEO Audit (Generative Engine Optimisation)
- `/ai-receptionist` + 8 industry subpages — productised inbound call answering
- `/pricing` — pricing (AI Voice & Receptionist combined, Chatbot, Workflow, GEO) + comparison table
- `/about` · `/contact` (Cal.com booking + form)
- `/locations/*` — county hubs (Hampshire, Berkshire) + town pages (Andover, Basingstoke, Winchester, Southampton, Portsmouth, Reading, Newbury, Salisbury, Bournemouth)
- `/terms-of-business` · `/privacy-policy`

## Webhook Integration

The site communicates with n8n webhooks via two environment variables:

- `VITE_CONTACT_WEBHOOK_URL` — Contact form submissions
- `VITE_CHATBOT_WEBHOOK_URL` — Chatbot messages

See `CLAUDE.md` for detailed payload formats and error handling patterns.

### Testing Webhooks Locally

Use ngrok to expose your local n8n instance:
```bash
ngrok http 5678
```
Then update `.env` with the ngrok URLs and restart the dev server.

## Design System (Brand Guidelines v2.0)

Single source of truth: `docs/ANTEK-BRAND-GUIDELINES.md` + `docs/Antek-Brand-System.pdf`. Tokens in `tailwind.config.js`, CSS vars + grid in `src/index.css`.

| Token | Value | Role |
|-------|-------|------|
| Coral | `#CD5C3C` | Primary accent — headline phrase, bars, numerals, CTAs |
| Cream | `#E8DCC8` | Display headings, high-contrast text on dark |
| Charcoal | `#2C2C2C` | Base background |
| Ink | `#1A1A1A` | Panels, cards, text on coral |
| Sage | `#C8D8D0` | Rare secondary accent |
| Body | `#CFC6B6` | Body text on dark (warm grey) |
| Muted | `#8C8880` | Mono labels, captions |
| Hairline | `rgba(232,220,200,0.10)` | Dividers / borders |

- **Borders** 2px · **Shadows** hard offset only (`shadow-brutal*`, `shadow-brutal-coral`) · **Zero border-radius** · flat colour, no gradients
- **Type**: Outfit 700/800 (display, uppercase H1/H2) · DM Sans 400/500/700 (body/UI/buttons) · JetBrains Mono 700 (eyebrows/labels)
- **Headline rule**: cream by default, one coral phrase per heading, 5px coral left bar (via `HeadlineBlock`). Coral bands invert: ink text + one cream phrase.

### Key brand components (`src/components/`)
`HeadlineBlock` (coral-bar heading) · `Eyebrow` · `Container` (1200px, clamp padding) · `Button` (primary coral/ink, secondary cream-outline, ink-on-coral) · `Card` · `Icon` (coral chip / mono number badge) · `PricingCard` (price box) · `RetellDemoCards` · `VoiceChat` · `CalBooking` · `TrustBlock`.

## Development

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Type check | `npm run typecheck` |
| Lint | `npm run lint` |
| Production build | `npm run build` |
| Preview build | `npm run preview` |

Run `npm run typecheck && npm run lint && npm run build` before committing.

## License

All rights reserved — Antek Automation © 2026
