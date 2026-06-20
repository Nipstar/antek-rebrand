# CLAUDE.md

This file is intentionally stubbed.

The previous contents described the old client-side SPA routing architecture, which has been replaced by Vike (file-based SSR with pre-rendering). That stale guidance was actively misleading.

**Source of truth:** `../CLAUDE.md` (one directory up, at the repo root).

Do not restore the old contents. Update the root `CLAUDE.md` instead.

---

# Location pages — rollout state & plan (memory)

_Last updated: 2026-06-20. This is the working memory for the staggered location-page build. Read it before starting the next batch._

> **Every town page ships FOUR services, not three.** AI Voice Agents + AI Chatbots + Workflow Automation + **GEO Audit**. GEO is an offering, not an afterthought — it must appear as a visible block, an internal link, and in the schema (see "Services & GEO" below). It was missed on the first build and had to be retrofitted; don't repeat that.

## Stack reality (don't trust prompts that say "Next.js")
- **Vite + Vike (`vike-react`)**, React 18, TypeScript, Tailwind. File-based routing: each route is a folder under `pages/` with `+Page.tsx` (body) and `+Head.tsx` (title/meta/JSON-LD). `prerender: true` in `pages/+config.ts` → every page is static SSR HTML (indexable).
- Brand tokens in `tailwind.config.js`: neo-brutalist — `charcoal`, `terracotta`, `warm-beige`, `soft-sage`, `peach`, `off-white`; `shadow-brutal*`; `border-3/4/8`; `tracking-tight-xl`. Headings use `font-black uppercase`. (Ignore any prompt that names Outfit/DM Sans — those tokens don't exist here.)

## How to build a location page
- **Use the `location-page-builder` skill** (installed at `.claude/skills/location-page-builder/`).
- **Gold standard to mirror exactly:** `pages/locations/basingstoke/+Page.tsx` and `+Head.tsx`. Copy its section order, components, and schema shape.
- Reusable components: `Button`, `Card`, `Icon`, `CalBooking`, `VoiceDemoButton`, `VoiceChat` (lazy), `TrustBlock` (governed proof — no client name/town/mechanism), `QuickRecap`, `ResourcesCompliance`.
- Visible order (conversion-first): HERO (benefit H1 incl. town + subhead + Book a free 30-min call + click-to-call `tel:03330389960`) → QuickRecap → PROBLEM → OFFER (3 core services as outcomes + single CTA, H2 = "AI automation for [Town] businesses") → TrustBlock → `<RetellDemoCards curated />` (industry voice-demo orbs) → "Our [Town] patch" entity layer → ResourcesCompliance → sibling/geo cards (up to hub + 3 siblings) → **GEO cross-sell block** ("Is AI Search Recommending Your [Town] Business?" → localised ChatGPT/Perplexity query → link to `/services/geo-audit`, from £247) → FAQ (5 inline `<details>`) → final CTA → CalBooking → VoiceChat modal.
- Head schema per page: BreadcrumbList, LocalBusiness (geo + areaServed City sameAs + containedInPlace + **makesOffer = all 4 services incl. `GEO Audit`** + speakable), Service (**provider.knowsAbout incl. `Generative Engine Optimization (GEO)`** + areaServed sameAs/containedInPlace), ImageObject (contentLocation), FAQPage (matches the page's 5 Q&As verbatim).
- Guardrails: title ≤60 chars, meta 150–160 (count, don't eyeball); town pages never target "Hampshire" head term (hub owns it); ≤4 visible Wikipedia links, `target="_blank" rel="noopener noreferrer"`, first-mention only; **verify every Wikidata QID before embedding**; no invented stats (leave `{/* [VERIFY] */}`).
- **Hook variety (no doorway templating):** vary the H1 angle per town AND spread it across the services — don't lead every page on "missed calls". Across the network, balance voice / chatbot / automation hooks (e.g. "website open at 2am" = chatbot, "back its evenings" = automation). Match each page's subhead AND meta description to its lead service. Titles stay keyword-led ("AI Automation [Town] | …").

## Services & GEO (every page — REQUIRED)
We sell FOUR services; every location page must represent all four:
1. AI Voice Agents → `/services/ai-voice-assistants`
2. AI Chatbots → `/services/ai-chatbots`
3. Workflow Automation → `/services/workflow-automation`
4. **GEO Audit** → `/services/geo-audit` (entry tier from £247). Surfaced via the GEO cross-sell block (visible), an internal link, and the schema (`makesOffer` + `knowsAbout`).
Reference implementation: any current location page (e.g. `pages/locations/winchester/`). Service pages also cross-link the GEO Audit (the 3 core `/services/*` pages carry a GEO block/link).

## Voice demos (Retell orbs)
- `src/data/retellDemos.ts` = the list of shareable Retell orb demos (industry, label, blurb, icon, orbUrl) + `LOCATION_DEMO_INDUSTRIES` (the curated subset shown on town pages). Add a new industry by pasting its Retell **Share** URL — every page updates automatically.
- `src/components/RetellDemoCards.tsx` = pop-card grid → modal with the orb in an `<iframe allow="microphone; …">`, Esc/backdrop close, and an "open in a new tab" fallback. Orb tokens are public share links by design.
- Placement: voice service page shows **all** demos; every **location page** shows `<RetellDemoCards curated />` (the curated set), placed right after `<TrustBlock>`. New town pages must include it.
- AI-receptionist pages: the old phone-dial demo (`AIReceptionistDemoCards` + the `demoCalls`/`DemoCall` data) was removed and replaced by the orbs. The shared `AIReceptionistIndustryPage.tsx` maps slug→orb via `ORB_DEMOS` (plumbers→heating, hvac→hvac, electricians→electrical, lawyers→lawyer+legal) and renders `<RetellDemoCards>` at `#demo`; mapped industries show their orb, unmapped ones show all orbs. The `/ai-receptionist` index shows all orbs at `#demo`. Add a new industry's mapping in `ORB_DEMOS` when its orb exists.

## Wiring checklist when adding a town (do all 7)
1. `pages/locations/<town>/+Page.tsx` + `+Head.tsx`
2. Hub grid: `towns[]` array in `pages/locations/hampshire/+Page.tsx`
3. Hub list: `localLocations` in `pages/locations/index/+Page.tsx`
4. Footer: `FOOTER_LOCATIONS` in `src/components/Footer.tsx`
5. `public/sitemap.xml` (static — hand-edit; priority 0.7 for towns) — also bump `lastmod` to today on the hub + `/locations` index (they gain a link to the new town, so crawlers should re-fetch)
6. `scripts/audit/pages.ts` + one contextual `/services/*` link
7. GEO: localised GEO cross-sell block + `/services/geo-audit` link + `GEO Audit` in `makesOffer` + `Generative Engine Optimization (GEO)` in `knowsAbout`
8. `<RetellDemoCards curated />` after `<TrustBlock>` (see Voice demos)

## Deploy & crawl (post-merge)
- After merging to `main`, confirm production actually redeployed from `main` (Vercel → Deployments; Production Branch should be `main`). Correct code but stale live pages = a deploy/CDN-cache issue, not markup.
- `vercel.json` doesn't long-cache HTML (only `/assets` + images), so a fresh deploy busts stale HTML at Vercel's edge. If a CDN sits in front (e.g. Cloudflare), purge HTML for `/` and `/locations`.
- Freshen `lastmod` in `public/sitemap.xml` for every changed page (incl. the hub + `/locations` index when new towns are added), then resubmit the sitemap and Request Indexing in GSC. Internal-linking lists (hub `towns[]`, index `localLocations`, footer `FOOTER_LOCATIONS`) must be re-verified in the **built** output, not just source.

## Verified entity IDs (reuse; re-confirm at build time)
- Hampshire `Q23204` · Basingstoke `Q810196` · Winchester `Q172157` (Univ of Winchester `Q3551690`, Winchester College `Q1059517`, Cathedral `Q476529`) · Andover, Hampshire `Q492805` (Test Valley `Q2116338`) · Southampton `Q79848` (Univ of Southampton `Q76473`) · Salisbury `Q160642` (Wiltshire `Q21694746`, Salisbury Cathedral `Q390150`) · Newbury, Berkshire `Q655874` (Berkshire `Q23220`).

## Progress
- **Prompt 1 — DONE:** `/locations/basingstoke`, `/locations/winchester` + `TrustBlock` component.
- **Prompt 2 — DONE:** updated existing pages to the standard — `hampshire` (hub: benefit H1, links down to all 6 towns, AdministrativeArea sameAs, TrustBlock, dropped invented stats), `andover`, `southampton`, `salisbury` (Wiltshire), `newbury` (Berkshire).
- **Post-Prompt-2 refinements — DONE:** (a) H1s differentiated per town and balanced across services (voice/chatbot/automation), subheads + metas aligned to each page's lead service; (b) GEO Audit added as the 4th offering on all 7 location pages (visible block + link + schema); (c) GEO block/link added to the 3 core `/services/*` pages.
- **Retell demo orbs — DONE:** shareable orb pop-cards (`RetellDemoCards`) on the voice service page (all), every location page (curated set), and the ai-receptionist pages (mapped orb at `#demo`); replaced the old phone-dial demos. Repo lint is fully green; sitemap `lastmod` freshened for the changed pages.
- **Andover cannibalisation:** resolved by *differentiate intent* (this page = founder-led brand/HQ hub). ⚠️ **External action still required:** 301-redirect or `rel=canonical` `aiautomationandover.co.uk` → `/locations/andover`. Can't be done from this repo — needs the EMD domain's DNS/host. See the comment at the top of `pages/locations/andover/+Page.tsx`.

## Remaining batches (one prompt per session; deploy + index between each)
- **Prompt 3 — Eastleigh + Romsey.** Eastleigh (River Itchen, Southampton Airport, M3/M27, Chandler's Ford/Hedge End/Botley/Bishopstoke). Romsey (Test Valley, River Test, Romsey Abbey, Broadlands, M27).
- **Prompt 4 — Fleet + Farnborough + Fareham.** Fleet (Hart, Fleet Pond, M3). Farnborough (Rushmoor, Farnborough Airport + Airshow, adjacent Aldershot, Blackwater Valley). Fareham (M27, Portchester Castle, between Southampton & Portsmouth).
- **Prompt 5 — Petersfield + Totton** (Totton or coastal alt Lymington — build one). Petersfield (East Hampshire, South Downs, A3; secondary Alton). Totton (New Forest district, New Forest NP edge, River Test estuary, near Southampton/M27). Keep the in-person line honest (further from HQ — remote-first).
- **GATE after Prompt 5:** STOP and review GSC/impression data before any coastal + BCP pages (Portsmouth, Gosport, Havant, Bournemouth, Poole). Build those only on a real impression signal.

## End state target
12 town pages + Hampshire hub, all conversion-first, interlinked, carrying entity schema + the governed proof block.
