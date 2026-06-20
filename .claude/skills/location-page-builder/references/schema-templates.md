# Schema Templates (JSON-LD)

Drop-in structured data for a location page. Adapt the bracketed values. Validate before shipping. Keep `sameAs` URIs verified (see `entity-layer.md`).

## Service + areaServed + provider

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Automation in [Town]",
  "serviceType": "[service set, e.g. AI voice agents, chatbots and workflow automation]",
  "provider": {
    "@type": "Organization",
    "name": "[Business Name]",
    "url": "https://[domain]",
    "telephone": "[phone]",
    "knowsAbout": ["[service 1]", "[service 2]", "[service 3]"]
  },
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
