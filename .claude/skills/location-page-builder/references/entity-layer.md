# Entity Layer — Semantic Triples, Co-Entities, Verifiable References

The entity layer is what lets Google's semantic engine and AI search treat the page as a factual node rather than a templated copy. It lives in the markup (schema) and in the lower "local relevance" copy — never above the conversion content.

## Why this matters

Modern search maps Subject–Predicate–Object relationships (entity associations), not just keyword strings. If two location pages read identically except for the place name, their semantic density is zero and they get flagged as unvalidated template copies. The fix is real, place-specific entity content, anchored to known knowledge-graph nodes.

## 1. Semantic triples (WHO / WHAT / WHERE)

For each page, write the core relationships as triples. Each triple should appear twice: once as a real sentence in the copy, once as a schema statement.

- **WHO** (the provider): `[Business] → provides → [service]`, `[Business] → based in → [HQ]`, `[Business] → founded by → [person]`
- **WHAT** (the services): the service set, as outcomes
- **WHERE** (the place + co-entities): `[Town] → located in → [region]`, `[Town] → lies on → [river]`, `[Town] → served by → [road]`, `[Town] → home to → [institution]`, `[Town] → near → [adjacent town]`

Example (Basingstoke):
- Antek Automation → serves → Basingstoke
- Antek Automation → based in → Andover
- Basingstoke → located in → Hampshire
- Basingstoke → lies on → River Loddon
- Basingstoke → served by → M3 motorway
- Basingstoke → 20 miles from → Winchester

## 2. Co-entity association

Mention adjacent, real local entities in natural context: bordering roads/highways, rivers, named neighbourhoods, business districts, landmarks, institutions (universities, hospitals, airports), and adjacent towns. These establish the page's position in the local knowledge graph in a way a generic page cannot replicate. Weave them into the "local relevance" section, not the hook.

## 3. Wikipedia / Wikidata references (the verifiable truth layer)

Tie place entities to known nodes so AI search can cross-reference the page.

**Verification is mandatory.** Before embedding any reference:
- Confirm the exact Wikipedia article slug (watch disambiguation, e.g. `Fleet,_Hampshire` not `Fleet`).
- Confirm the Wikidata QID by opening the entity's Wikidata page.
- If a QID can't be verified, use the Wikipedia URL alone and flag the QID as TODO. Never guess a QID.

**Where references go:**
- **Schema `sameAs`** (primary, invisible): list Wikipedia + Wikidata URIs on the `areaServed` Place and major co-entities. This is the clean signal.
- **Visible contextual links** (secondary): at most 3–4 per page, on first mention of major entities only, opening in a new tab. Do not link every neighbourhood — that is the old spam in a new coat and it bleeds attention and equity.

Example verified set (reuse pattern):
- Basingstoke — `https://en.wikipedia.org/wiki/Basingstoke` + `https://www.wikidata.org/wiki/Q810196`
- Winchester — `https://en.wikipedia.org/wiki/Winchester` + `https://www.wikidata.org/wiki/Q172157`
- Winchester Cathedral — `https://www.wikidata.org/wiki/Q476529`

## 4. Localised image entity data

Give each page at least one genuinely local image with descriptive, place-specific `alt` text and an `ImageObject` schema entry whose `contentLocation` references the town. This adds a localized entity signal most templated pages skip.

## What not to do

- Do not inject entities the page has no real relationship to.
- Do not stuff the place name; reference relationships, not repetitions.
- Do not let the entity section climb above the offer/proof. It is scaffolding, not the pitch.
