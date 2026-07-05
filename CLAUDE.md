# CLAUDE.md

This file is intentionally stubbed.

The previous contents described the old client-side SPA routing architecture, which has been replaced by Vike (file-based SSR with pre-rendering). That stale guidance was actively misleading.

**Source of truth:** `../CLAUDE.md` (one directory up, at the repo root).

Do not restore the old contents. Update the root `CLAUDE.md` instead.

---

# Location pages — rollout state & plan (memory)

_Last updated: 2026-06-27. Working memory for the location-page build. Read it before starting the next batch._

> **GOVERNING SPEC v2 (27 Jun 2026) is in force.** Two non-negotiables changed the model: (1) **one canonical Organization node** — every location page's schema references `https://www.antekautomation.com/#organization` by `@id`; **never mint a per-page `Organization`/`LocalBusiness`** (it splits the entity). (2) **Local content is the moat, not schema** — every page needs substantial body copy that could only be about that place (≥6 real local proper nouns); if swapping the place name still reads fine, it fails. **Freeze the northern Hampshire/Wiltshire cluster** (Andover, Salisbury, Basingstoke, Newbury, Winchester) until the Salisbury↔Andover overlap clears — expand south + into new counties only. Quality over coverage: a few strong pages, then a GSC gate.

> **Every page ships FOUR services:** AI Chatbots, AI Voice Assistants, Workflow Automation (n8n), **GEO (Generative Engine Optimisation)**. On v2 pages GEO is just the 4th service card (no separate upsell block). **UPDATE (2026-07-05): GEO now HAS a Wikipedia entity** — `Generative_engine_optimization` (article created ~2026; confirmed live HTTP 200 via Apify). Use it as GEO's `sameAs`/`about`. Supersedes the old "no stable article" note.

## Stack reality (don't trust prompts that say "Next.js")
- **Vite + Vike (`vike-react`)**, React 18, TypeScript, Tailwind. File-based routing: each route is a folder under `pages/` with `+Page.tsx` (body) and `+Head.tsx` (title/meta/JSON-LD). `prerender: true` in `pages/+config.ts` → every page is static SSR HTML (indexable).
- **Brand = neo-brutalist DARK system v2.0** (rebranded 2026-06; source of truth `docs/ANTEK-BRAND-GUIDELINES.md` + `docs/Antek-Brand-System.pdf`). Tokens in `tailwind.config.js`: `coral` #CD5C3C (accent), `cream` #E8DCC8 (display text), `charcoal` #2C2C2C (base bg), `ink` #1A1A1A (panels/text-on-coral), `sage`, `body` #CFC6B6 (warm-grey body), `muted`, `hairline`. `border-2` (2px), `shadow-brutal*` + `shadow-brutal-coral` (hard offset only), zero radius, fixed bg grid (`src/index.css`). Fonts self-hosted via `@fontsource`: `font-display`=Outfit 800 (uppercase H1/H2), `font-sans`=DM Sans (body/buttons), `font-mono`=JetBrains Mono (eyebrows/labels). **Section headings use the `HeadlineBlock` component** (5px coral left bar, cream + one coral phrase; coral bands invert to ink + one cream phrase). The old light tokens (`terracotta`/`warm-beige`/`off-white`/`soft-sage`/`peach`) and system fonts are GONE — do not reintroduce them.

## How to build a location page
- **Use the `location-page-builder` skill** (installed at `.claude/skills/location-page-builder/`).
- **Gold standard to mirror exactly:** `pages/locations/basingstoke/+Page.tsx` and `+Head.tsx`. Copy its section order, components, and schema shape.
- Reusable components: `Button`, `Card`, `Icon`, `CalBooking`, `VoiceDemoButton`, `VoiceChat` (lazy), `TrustBlock` (governed proof — no client name/town/mechanism), `QuickRecap`, `ResourcesCompliance`.
- **v2 page template** (`+Page.tsx`; gold standard `pages/locations/portsmouth/+Page.tsx`): HERO (H1 "AI Automation for [Place] Businesses" + local hook + Book a free 30-min call + click-to-call `tel:03330389960`) → direct-answer intro (40–60 words, snippet-friendly, names place + ≥1 neighbour) → LOCAL CONTEXT (entity-dense differentiator: real geography/transit/sectors; ≤4 visible Wikipedia links, new tab, first-mention) → SERVICES IN [PLACE] (4 service cards framed for local sectors, linking to the 4 `/services/*`) → AREAS WE COVER (genuine neighbours) → PROOF (`<TrustBlock>` + credibility line: Certified Retell AI Partner, 30+ yrs, Andover base) → `<RetellDemoCards curated />` → FAQ (4–6 inline `<details>`) → FINAL CTA + NAP (book + tel + exact address line) → CalBooking → VoiceChat modal. **No QuickRecap, no GEO upsell block** on v2 pages.
- **v2 Head schema** (`@graph` of THREE nodes; gold standard `pages/locations/basingstoke/+Head.tsx`): one `<script>` `@graph:[ Service, BreadcrumbList, FAQPage ]`. Service: `@id` `<url>#service`, `provider:{'@id':'…/#organization'}` (REFERENCE — never inline org), `areaServed` City/AdministrativeArea + verified Wikipedia `sameAs` + `containedInPlace`, `about:[{Place,name,sameAs}]` co-entities. BreadcrumbList: Home > Locations > [County] > [Place] (add the county level where a hub exists; URL stays flat). FAQPage matches the `<details>` verbatim. **No `LocalBusiness`/`Organization`/`ImageObject` node.** Title ≤60 unique local-led; meta 150–160 local-led (count it).
- **NAP identical sitewide:** Chantry House, 38 Chantry Way, Andover SP10 1LZ · 0333 038 9960 · hello@antekautomation.com.
- The 7 original Hampshire-cluster pages predate v2: they keep their conversion-first bodies (QuickRecap/GEO-block) but their **Heads were retrofitted to the v2 `@graph`/#organization model**.
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

## Verified Wikipedia sameAs — v2 batch (all confirmed resolving, 27 Jun 2026)
Berkshire, Thames_Valley, River_Thames, Reading,_Berkshire, Newbury,_Berkshire, Portsmouth, Portsea_Island, The_Solent, Bournemouth, "Bournemouth,_Christchurch_and_Poole", Poole, Dorset. **GEO now HAS a Wikipedia entity: `Generative_engine_optimization` (verified live 2026-07-05) — use it in `sameAs`/`about`. Also verified live that day: `Large_language_model`, `Search_engine_optimization`, `ChatGPT`, `Generative_artificial_intelligence`.**

## Service pages, forms & schema conventions (2026-07-05 session)
- **New service pages:** `/services/geo` (**Generative Engine Optimisation Agency** — conversion-first Problem-Agitate-Solution page) and `/services/ai-seo` (**AI SEO Agency**). These are the *service* pages; `/services/geo-audit` remains the **£247 product/entry tier**. Title/H1 exclusion rules: geo page must NOT contain "AI SEO"; ai-seo page must NOT contain "generative engine" (body mentions fine). They cross-link each other + geo-audit; homepage GEO card and nav Services menu now point to `/services/geo` (GEO Audit kept in nav after GEO; AI SEO added).
- **AI Visibility Check form:** `src/components/AIVisibilityCheckForm.tsx` — shared capture form mounted at `#visibility-check` on **geo, ai-seo AND geo-audit**. Fields: name, email, business website (bare domains → `https://` on submit), business type. POSTs to the existing `/api/contact` gateway with `source:"ai-visibility-check"` + `page` (name/email discrete, website+type also folded into `message`); **same reCAPTCHA v2 flow and site key (`VITE_RECAPTCHA_SITE_KEY`) as the contact form** — no new endpoint/keys. Success replaces the form in place; dark `Card`, no new colours. On success fires GA `form_submit` + Meta Pixel `Lead`.
- **Meta Pixel:** `src/utils/metaPixel.ts` (Pixel `1430686008694674`) loads **only after cookie consent** (`pages/+Layout.tsx`), deferred via `requestIdleCallback`. `trackLead()` is consent-gated (no-op until `window.fbq` exists) and fires on: contact-form success, Cal.com `bookingSuccessful` (in `CalBooking.tsx`), and the visibility form. Only PageView + Lead are tracked.
- **⚠️ SCHEMA VALIDITY (reusable rule — Google flags these as warnings):** on schema.org **`Service`**, `knowsAbout`, `author` and `about` are **NOT valid** properties. Put them on the page's **`WebPage`** node instead — `author` (Person), `keywords` (topic strings, the old `knowsAbout` list), `about` (`Thing`+`sameAs` entities). All 6 service pages fixed this way (the WebPage node is the existing Speakable block). On **location pages** (which have no WebPage node) the co-entity `about` was moved onto the **`FAQPage`** node (a WebPage/CreativeWork subtype, so `about` is valid there). Service keeps only: name, description, serviceType, provider(@id ref), areaServed, offers, potentialAction, url.
- **Speakable selectors:** `section p.text-xl` only matches pages whose hero uses a **bare** `text-xl` class (chatbots, voice, workflow, ai-receptionist). Pages whose hero uses responsive `text-lg md:text-xl` (geo, ai-seo, geo-audit) have **no bare `text-xl`** → use `['h1','section p.text-lg']` or the selector errors ("no matches").
- **Entity coverage (all 6 service pages):** each carries `WebPage.about` Wikipedia `Thing`/`sameAs` entities WITH matching visible `ResourcesCompliance` body links (body↔schema parity, ≤4 Wikipedia links). geo/ai-seo/geo-audit → GEO/GenAI/LLM/SEO/ChatGPT set; chatbots → Chatbot, Virtual assistant, NLP, LLM; voice → Virtual assistant, Speech recognition, IVR, NLP; workflow → BPA, RPA, n8n, Workflow management system. **All verified live (HTTP 200) via Apify + WebSearch** — direct Wikipedia fetch is blocked by the sandbox network policy, so use Apify `rag-web-browser` (runs on Apify's cloud) or WebSearch to verify QIDs/URLs.
- **Pricing:** the monthly retainer is **£497/month** (canonical, matches `/pricing`) on GEO and AI SEO pages; `Service.offers` carry £0 (free check) / £247 (audit) / £497/mo. Retainer is NOT £297/£397 (those were wrong draft figures).
- **"AI automation company" phrasing:** added sparingly (one self-ref per page, varied wording) to home, about (title→"Company UK"), Hampshire hub, `/locations` index, Southampton FAQ, Salisbury FAQ, workflow-automation, + all three llms files; Org JSON-LD `description` updated. Antek is NOT a Ltd — never write "Ltd"/"Limited".

## Progress
- **v1 (DONE):** Hampshire hub + Andover, Basingstoke, Winchester, Southampton, Salisbury, Newbury — conversion-first bodies, GEO as 4th offering, Retell demo orbs, lint green.
- **v2 schema retrofit (DONE):** all 7 existing location Heads converted to the `@graph`/#organization model (per-page LocalBusiness + inline-org provider + ImageObject removed). Bodies unchanged (frozen north untouched). Town breadcrumbs gained the county level (Hampshire towns → Hampshire; Newbury → Berkshire; Salisbury stays flat — no Wiltshire hub).
- **v2 batch (DONE):** built `/locations/berkshire` (county hub), `/locations/reading`, `/locations/portsmouth`, `/locations/bournemouth` on the v2 spec. Wired into the index (2 county-hub lead cards: Hampshire + Berkshire), footer, sitemap, audit registry. Reciprocal links: Berkshire↔Reading, Berkshire↔Newbury (Newbury's up-link repointed Hampshire→Berkshire); Portsmouth↔Southampton; Bournemouth→Southampton (light).
- **Andover cannibalisation:** still "differentiate intent"; ⚠️ EMD `aiautomationandover.co.uk` 301/canonical → `/locations/andover` is an external (DNS/host) action, not in-repo.
- **2026-07-05 (DONE):** built `/services/geo` + `/services/ai-seo` (PAS bodies, shared AI Visibility Check form, £497/mo retainer, offers schema) + wired nav/homepage/llms/sitemap; added Meta Pixel `Lead` tracking; fixed Service-schema validity across all 6 service + 11 location pages (moved `knowsAbout`/`author`/`about` off `Service`); gave all 6 service pages verified Wikipedia entity coverage (schema `about` + body links, parity). All merged to `main`. See "Service pages, forms & schema conventions" section above.

## GATE — review before building more (do NOT speculatively expand)
STOP after this batch. Review a clean GSC week for Berkshire/Reading/Portsmouth/Bournemouth first.
- **Bournemouth** is a cold-region probe (no Dorset signal yet). Build `/locations/dorset` + reparent ONLY if it pulls impressions. **No Dorset hub speculatively.**
- **Northern freeze stays** until Salisbury↔Andover overlap resolves. The old v1 plan (Eastleigh/Romsey/Fleet/Farnborough/Fareham/Petersfield/Totton) is **PAUSED** — those are all northern Hampshire.
- Reading gives Berkshire a real 2nd child (Newbury is the 1st); add more Berkshire towns only on demand.

## End state target
A small, high-quality network: Hampshire + Berkshire county hubs over real children, plus south-coast anchors (Southampton, Portsmouth) and the Bournemouth probe — all on the canonical-org model, expanded only on GSC evidence.
