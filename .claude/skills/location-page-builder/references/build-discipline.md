# Build Discipline — Metas, Linking, Cannibalisation, Staggered Builds

## Meta length limits

Apply to every page, including generated ones. Count characters before finalising; trim rather than truncate.

- **Title tag: ≤ 60 characters.** Google cuts around 580px. Keyword-led, include the place name and brand.
- **Meta description: 150–160 characters.** Keep the place name and a CTA. Lead with the conversion hook.

Note: Google often rewrites descriptions in the SERP regardless, so treat the description as the preferred version, not a guarantee. Title length is the one that visibly truncates and costs clicks — get that right first.

Worked, in-spec examples:
- Title (59): `AI Automation Basingstoke | Voice Agents & Chatbots | Antek`
- Description (149): `Stop losing Basingstoke jobs to missed calls. AI voice agents, chatbots and automation, built by a founder up the A303 in Andover. Book a free call.`

## Internal linking (hub-and-spoke)

- **Regional hub page** (e.g. `/locations/[region]`) is the centre. It targets the region head term and links *down* to every town page.
- **Town pages** link *up* to the hub and *across* to 2–3 sibling towns ("Nearby").
- Add every town to the footer locations list and the hub grid.
- One contextual link from each relevant service page to the most relevant town page(s).
- Anchor text = place + context ("AI automation in [Town]"), never bare "click here" and never the region head term pointing at a town page.
- No orphan pages: re-run the linking pass each time new towns are added so sibling blocks include them.

## Cannibalisation guardrails

- **One primary keyword per page.** Town pages never target the region head term in title/H1/meta — the hub owns it.
- **Anchor to towns, not administrative areas.** Don't build `/locations/[council]` and `/locations/[town]` both chasing the same searches.
- **Exact-match domains (EMDs):** if a separate EMD site targets the same term as a town page (e.g. `aiautomation[town].co.uk` vs `/locations/[town]`), resolve the overlap — 301 the EMD into the main page, canonical the weaker one, or differentiate intent. Don't leave two owned assets competing.
- If two pages would read identically minus the place name, stop and differentiate them with real local substance, or don't build the second one.

## Proof governance (for client case-study proof blocks)

- A named client requires explicit, ideally written, consent — name, logo, and quote approved.
- Default to **anonymised now, named later**: sector + outcome, no client name, no location, no give-away of their competitive mechanism.
- For regulated clients (finance, legal, health), hold publication until the client *and* any governing body clears it. Build the page as `noindex`, unlinked, with placeholders until then.
- Mark anonymised/gated blocks with a code comment so a future session doesn't accidentally de-anonymise or publish them.

## Staggered build (so an agent never builds the whole network at once)

When generating Claude Code (or similar) build prompts for a network, produce **separate prompts, one batch per drop, 2–3 pages each**, not one prompt that builds everything.

Each prompt must:
1. Open with a **SCOPE LOCK**: "In this pass, create ONLY [these pages]. Do NOT create or modify any other page. Do NOT batch-generate other towns."
2. Restate the standard pattern compactly so it works as a standalone drop (conversion structure, entity layer, schema, meta limits, internal linking, guardrails).
3. Reuse the established components (proof block, page template) by reference to the first batch.
4. End with the output checklist + "SCOPE respected" as an acceptance item.

Suggested batch order for a new network:
1. Foundation + 2 flagship pages (sets the pattern + reusable proof block).
2. Update any existing live pages to the new pattern.
3–N. Expansion batches of 2–3, prioritised by demand and proximity.

## Rollout cadence (set expectations)

New pages take weeks to index and longer to rank, and many local "[service] [town]" terms are low-volume. Month one is about shipping a tested template, wiring links, and establishing measurement — judge success on pages indexed, links live, and first impressions in Search Console, not on positions.

- **Validate before expanding:** ship a batch, request indexing, then check which town queries already draw impressions on the hub. Build the next batch where demand is proven.
- **Gate the far/low-relevance pages:** places far from HQ that can't earn a map-pack presence are an organic + AI-citation play only. Build them last and only on a real impression signal.
- For an emerging-category service, AI/LLM citation is often a faster visibility route than organic ranking — structure pages to be extractable (clear problem→outcome, FAQ schema) accordingly.
- **Post-merge ship check:** confirm the new pages actually appear in the built hub, footer, index and sitemap (check the build output, not just source) and that production redeployed. Bump each changed page's `lastmod` (including the hub/index that gained a link) so crawlers re-fetch, then resubmit the sitemap and request indexing. A correct build that looks stale on the live site is a deploy/CDN-cache issue, not the markup — check the production branch and purge any CDN in front before touching code.
