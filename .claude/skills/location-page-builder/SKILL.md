---
name: location-page-builder
description: Build high-converting local SEO location pages that also rank and get cited by AI search. Use this whenever the user wants to create, design, plan, audit, or improve location pages, area pages, town/city/regional service pages, "near me" pages, a multi-location page network, or local landing pages — even if they never say the word "skill". It enforces a conversion-first page structure (hook, problem, offer, proof, CTA) layered over an entity/semantic-triple SEO foundation, with schema, Wikipedia/Wikidata entity linking, hub-and-spoke internal linking, meta-length limits, anti-cannibalisation guardrails, and a scope-locked staggered build so an agent never mass-generates near-duplicate doorway pages. Also use it when turning a single location page into a repeatable network, or writing the Claude Code build prompts for one.
---

# Location Page Builder

Build local landing pages that convert a human first and feed Google and AI search second. This skill exists because the two goals are usually done badly together: most location-page networks are near-duplicate templates with the town name swapped, which Google filters as programmatic noise and which convert nobody. This skill keeps conversion at the visible top of the page and the entity/SEO machinery underneath and in the markup, so neither cannibalises the other.

## Core principles

1. **Conversion owns the top of the page.** Entity density gets a page seen and cited; it never makes a human pick up the phone. The visible page leads with the visitor's reason to act. The SEO and entity scaffolding sits lower and in the schema.
2. **No doorway pages.** Near-identical pages with a swapped place name get filtered and compete with each other. Every page must be genuinely differentiated by local substance and distinct entities. If two pages would read the same minus the town name, the network is wrong.
3. **One page, one place, one primary keyword.** Town pages never chase the parent region's head term — the regional hub owns that.
4. **Verify, don't invent.** Confirm every entity URI (Wikipedia slug + Wikidata QID) before embedding it, and never publish an unverified statistic.
5. **Build in scope-locked batches.** Set the pattern on 1–2 pages, then expand 2–3 pages at a time. Never mass-generate a whole network in one pass.

## Workflow

Follow these steps in order. For a single page, steps 3–7. For a network, all of them.

1. **Establish the project profile** (once, reused across every page). Capture: business name, founder/owner, HQ location, phone, the service set, brand fonts/colours, and the proof/trust block (a real, permission-cleared or anonymised result). If the user hasn't given these, ask or infer from their site. See `assets/page-template.md` for the profile block.
2. **Map places to a coverage framework, not a URL framework.** Anchor pages to *towns/cities* (stable search entities), not council/county/administrative names (which change and which nobody searches). Use any administrative list only as a checklist to avoid geographic gaps. Prioritise by search demand, business density, proximity to HQ (for the in-person angle), and competitive gap.
3. **Write the conversion layer** for the page: hook → problem → offer → proof → CTA. This is the visible top. See `references/page-anatomy.md`.
4. **Verify and build the entity layer:** semantic triples (WHO/WHAT/WHERE), co-entity associations, and Wikipedia/Wikidata references. Confirm each URI before use. See `references/entity-layer.md`.
5. **Add schema:** Service/LocalBusiness with `areaServed` + `containedInPlace` + `sameAs`, plus `FAQPage` and `ImageObject`. See `references/schema-templates.md`.
6. **Wire internal linking, set metas, and apply guardrails:** hub-and-spoke links, meta-length limits, one-keyword-per-page, resolve any exact-match-domain overlap. See `references/build-discipline.md`.
7. **Run the output checklist** (below) before shipping.
8. **For a network: stagger the build.** Produce separate, scope-locked build prompts (2–3 pages each) rather than one prompt that builds everything. See `references/build-discipline.md` ("Staggered build").

## Page anatomy (visible order, top to bottom)

Conversion-first. The entity/local content sits *below* the offer and proof, never above.

- **Hook** — benefit-led H1 containing the place name (a reason to call, not a category like "AI Automation in X"), a one-line local subhead, and a primary CTA visible without scrolling.
- **Problem** — the specific pain, localised, stated before any proof.
- **Offer** — the services as outcomes, one primary CTA repeated.
- **Proof** — the trust/proof block; a specific local result beats any amount of schema.
- **Local relevance** — entity-dense paragraph: named neighbourhoods, business districts, co-entities (rivers, roads, landmarks, adjacent towns), verifiable facts. Entity density lives here.
- **FAQ** — conversion + local questions, with `FAQPage` schema.
- **Final CTA** — booking + click-to-call.

Full spec and a worked example are in `references/page-anatomy.md`.

## Output checklist (gate before shipping every page)

Conversion:
- [ ] Above the fold: benefit H1 with place name, local subhead, primary CTA, all visible without scrolling
- [ ] Problem appears before proof
- [ ] One primary CTA, repeated; click-to-call thumb-reachable on mobile
- [ ] Proof/trust block present (and governed if anonymised — no client name/location/mechanism without sign-off)
- [ ] Entity/local content sits below the hook, not above it

Technical / entity:
- [ ] Title tag ≤ 60 chars; meta description 150–160 chars (count, don't eyeball; trim don't truncate)
- [ ] Title keyword-led; H1 benefit-led; an H2 carries the exact keyword; no parent-region head term on a child page
- [ ] Every entity `sameAs` URI verified (Wikipedia slug + Wikidata QID); ≤ 4 visible external links, opening in a new tab
- [ ] `Service`/`LocalBusiness` + `FAQPage` + `ImageObject` schema present and valid; `areaServed` + `containedInPlace`
- [ ] Internal links wired: up to hub, across to 2–3 siblings, hub links down, footer entry
- [ ] No invented stats; any unverified figure left as a visible `[VERIFY]` TODO
- [ ] For network builds: scope lock respected (only the named pages created/modified this pass)

## Reference files

Read the one you need for the step you're on:
- `references/page-anatomy.md` — full conversion structure with a worked before/after example
- `references/entity-layer.md` — semantic triples, co-entity association, Wikipedia/Wikidata verification, visible-link limits
- `references/schema-templates.md` — drop-in JSON-LD for Service, areaServed, FAQPage, ImageObject
- `references/build-discipline.md` — meta lengths, hub-and-spoke linking, cannibalisation/EMD guardrails, staggered scope-locked builds, rollout
- `assets/page-template.md` — a fill-in skeleton (profile block + page sections)
