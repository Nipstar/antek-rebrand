# Location Page Template (fill-in skeleton)

## Project profile (set once, reuse on every page)

```
Business name:      [e.g. Antek Automation]
Founder / owner:    [e.g. Andy Norman]
HQ location:        [e.g. Andover, Hampshire]
Phone:              [e.g. 0333 038 9960]
Service set:        [e.g. AI voice agents, chatbots, workflow automation]
Brand fonts:        [headings / body / data — e.g. Outfit 700-800 / DM Sans / JetBrains Mono]
Brand colours:      [hex values]
Regional hub URL:   [e.g. /locations/hampshire]
Proof / trust block:[the real, permission-cleared or anonymised result to reuse]
Proof governance:   [named with consent | anonymised | gated/noindex]
```

## Per-page inputs

```
Town:               [e.g. Basingstoke]
URL:                [/locations/basingstoke]
Primary keyword:    [AI automation Basingstoke]
Drive time from HQ: [e.g. 20 min up the A303]  (only claim in-person if true)
Named areas:        [neighbourhoods + business districts]
Co-entities:        [rivers, roads, landmarks, institutions, adjacent towns]
Verified refs:      [Wikipedia slug + Wikidata QID per entity — VERIFY each]
Vertical angle:     [who this town's businesses mostly are]
```

## Page skeleton (visible order = conversion-first)

```
Title tag (≤60):    AI Automation [Town] | [services] | [Brand]
Meta desc (150-160): [hook + place + CTA]

H1 (benefit, incl. town):   [reason to act, not a category]
H2 (exact keyword):         AI automation for [Town] businesses
Hero subhead:               [what you do + local proximity/credibility]
Primary CTA:                [Book a free call] [Call now]

PROBLEM:   [localised pain, named local context, before any proof]
OFFER:     [services as outcomes; single primary CTA]
PROOF:     [trust block + optional local testimonial slot]
LOCAL:     "Our [Town] patch" — entity-dense, verifiable: named areas + co-entities + true facts
FAQ:       [3-5 conversion + local Qs]  -> FAQPage schema
FINAL CTA: [booking + click-to-call]
```

## Schema to attach
- `Service` (+ provider, knowsAbout) with `areaServed` + `containedInPlace` + verified `sameAs`
- `FAQPage`
- `ImageObject` with `contentLocation` (one genuinely local image, place-specific alt text)
(See `references/schema-templates.md`.)

## Internal links to wire
- Up to: regional hub
- Across to: 2-3 sibling towns
- Hub grid card + footer locations entry
- One link from each relevant service page

## Before shipping
Run the output checklist in SKILL.md. Confirm meta lengths, verified entity URIs, no invented stats, scope lock (if part of a staggered network build).
