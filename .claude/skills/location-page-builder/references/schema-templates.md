# Schema Templates (JSON-LD)

Drop-in structured data for a location page. Adapt the bracketed values. Validate before shipping. Keep `sameAs` URIs verified (see `entity-layer.md`).

> **Critical: one canonical Organization node, referenced — never re-minted per page.** Define the business's `Organization`/`LocalBusiness` ONCE (e.g. on the homepage, with `@id` `https://[domain]/#organization`), then on every location page set `"provider": { "@id": "https://[domain]/#organization" }`. Do NOT inline a fresh `Organization`/`LocalBusiness` per location — duplicate org nodes split the entity and weaken the whole site. Per page, carry a lean `@graph` of just `[ Service, BreadcrumbList, FAQPage ]`; the place identity lives in `Service.areaServed` (City/AdministrativeArea + verified Wikipedia `sameAs` + `containedInPlace`) and `Service.about[]` (`Place` co-entities + `sameAs`). No per-page `ImageObject` needed.

## Service + areaServed + provider

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Automation in [Town]",
  "serviceType": "[service set, e.g. AI voice agents, chatbots and workflow automation]",
  "provider": { "@id": "https://[domain]/#organization" },
  "areaServed": {
    "@type": "City",
    "name": "[Town]",
    "sameAs": [
      "https://en.wikipedia.org/wiki/[Town_slug]",
      "https://www.wikidata.org/wiki/[QID]"
    ],
    "containedInPlace": {
      "@type": "AdministrativeArea",
      "name": "[Region]",
      "sameAs": "https://en.wikipedia.org/wiki/[Region_slug]"
    }
  },
  "about": [
    { "@type": "Place", "name": "[co-entity 1, e.g. business district]" },
    { "@type": "Place", "name": "[co-entity 2]" }
  ]
}
```

Use `LocalBusiness` instead of (or alongside) `Service` only if the page represents a real physical presence in that town. For a service-area business operating remotely, `Service` with `areaServed` is the honest choice — do not fake a `LocalBusiness` address in a town where there is none.

## FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question]",
      "acceptedAnswer": { "@type": "Answer", "text": "[Answer]" }
    }
  ]
}
```

## ImageObject (localized entity signal)

```json
{
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": "https://[domain]/images/[town]-[descriptive].jpg",
  "caption": "[place-specific caption]",
  "contentLocation": {
    "@type": "Place",
    "name": "[Town]",
    "sameAs": "https://en.wikipedia.org/wiki/[Town_slug]"
  }
}
```

## Notes
- One primary keyword per page; do not let child-page schema claim the parent region as its `name`.
- Reuse the exact schema *pattern* across the network so structure is consistent, but the values (town, co-entities, sameAs) must differ per page — consistent structure, distinct data.
