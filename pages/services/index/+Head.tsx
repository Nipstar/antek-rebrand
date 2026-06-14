export function Head() {
  const canonical = 'https://www.antekautomation.com/services'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.antekautomation.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: canonical },
    ],
  }

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${canonical}#page`,
    name: 'AI Automation Services | Antek Automation',
    description:
      'AI voice agents, chatbots, workflow automation, and GEO audits for UK businesses. Every service is built to your business — not a generic template.',
    url: canonical,
    inLanguage: 'en-GB',
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.antekautomation.com/#website',
      name: 'Antek Automation',
      url: 'https://www.antekautomation.com',
    },
    publisher: { '@id': 'https://www.antekautomation.com/#organization' },
    mainEntity: {
      '@type': 'ItemList',
      name: 'Antek Automation Services',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'AI Voice Assistants',
          url: 'https://www.antekautomation.com/services/ai-voice-assistants',
          description: 'Phone agents that answer calls 24/7, book appointments, and qualify leads.',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'AI Chatbots',
          url: 'https://www.antekautomation.com/services/ai-chatbots',
          description: 'Website chat that handles enquiries and books appointments around the clock.',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Workflow Automation',
          url: 'https://www.antekautomation.com/services/workflow-automation',
          description: 'Connect your tools and eliminate repetitive tasks with AI-driven automation.',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'GEO Audit',
          url: 'https://www.antekautomation.com/services/geo-audit',
          description: 'Full audit of your visibility in AI-generated search results with an action plan.',
        },
      ],
    },
  }

  return (
    <>
      <title>AI Automation Services | Antek Automation</title>
      <meta
        name="description"
        content="AI voice agents, chatbots, workflow automation and GEO audits for UK businesses. Built to your business, not a template. Hampshire-based, UK-wide."
      />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Services | Antek Automation" />
      <meta
        property="og:description"
        content="AI voice agents, chatbots, workflow automation, and GEO audits for UK businesses. Built to your business, not a template. Based in Hampshire."
      />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Antek Automation" />
      <meta property="og:image" content="https://www.antekautomation.com/og-image.png" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AI Automation Services | Antek Automation" />
      <meta
        name="twitter:description"
        content="AI voice agents, chatbots, workflow automation, and GEO audits for UK businesses. Built to your business, not a template."
      />
      <meta name="twitter:image" content="https://www.antekautomation.com/og-image.png" />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* CollectionPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
    </>
  )
}
