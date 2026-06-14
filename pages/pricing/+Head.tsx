export function Head() {
  const title = 'Pricing | AI Automation for UK Businesses | Antek Automation'
  const description =
    'Transparent, no-contract pricing for AI voice agents, chatbots, receptionists and workflow automation. Plans from £57/month. UK-based, Hampshire-built.'
  const canonical = 'https://www.antekautomation.com/pricing'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.antekautomation.com/' },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: canonical },
    ],
  }

  const voiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AI Voice Assistant',
    description: 'AI voice agent that answers calls, books appointments, and sends call summaries 24/7 for UK businesses.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud',
    url: 'https://www.antekautomation.com/services/ai-voice-assistants',
    provider: {
      '@type': 'Organization',
      name: 'Antek Automation',
      url: 'https://www.antekautomation.com',
    },
    offers: {
      '@type': 'Offer',
      price: '97.00',
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '97.00',
        priceCurrency: 'GBP',
        billingDuration: 'P1M',
      },
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2027-12-31',
    },
  }

  const chatbotSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AI Chatbot',
    description: 'AI website chatbot trained on your business that captures leads, answers questions, and books appointments 24/7.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud',
    url: 'https://www.antekautomation.com/services/ai-chatbots',
    provider: {
      '@type': 'Organization',
      name: 'Antek Automation',
      url: 'https://www.antekautomation.com',
    },
    offers: {
      '@type': 'Offer',
      price: '57.00',
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '57.00',
        priceCurrency: 'GBP',
        billingDuration: 'P1M',
      },
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2027-12-31',
    },
  }

  const workflowSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Workflow Automation',
    description: 'Custom workflow automation built on n8n — one-off projects to eliminate manual admin. 400+ integrations.',
    url: 'https://www.antekautomation.com/services/workflow-automation',
    provider: {
      '@type': 'Organization',
      name: 'Antek Automation',
      url: 'https://www.antekautomation.com',
    },
    offers: {
      '@type': 'Offer',
      price: '250.00',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2027-12-31',
    },
  }

  const geoAuditSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'GEO Audit',
    description: 'Generative Engine Optimisation audit. Measures your AI search visibility across ChatGPT, Perplexity, Google AI Overviews, Claude, and Gemini.',
    url: 'https://www.antekautomation.com/services/geo-audit',
    provider: {
      '@type': 'Organization',
      name: 'Antek Automation',
      url: 'https://www.antekautomation.com',
    },
    offers: [
      {
        '@type': 'Offer',
        name: 'Quick Check',
        price: '247.00',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2027-12-31',
      },
      {
        '@type': 'Offer',
        name: 'Full Audit',
        price: '497.00',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2027-12-31',
      },
      {
        '@type': 'AggregateOffer',
        name: 'Audit + Fix',
        lowPrice: '997.00',
        priceCurrency: 'GBP',
        offerCount: '1',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2027-12-31',
      },
    ],
  }

  const receptionistSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AI Receptionist',
    description: 'AI call-answering receptionist that screens callers, books appointments, and sends call summaries. 24/7, 120 call minutes included per month, £0.18/min over.',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud',
    url: 'https://www.antekautomation.com/ai-receptionist',
    provider: {
      '@type': 'Organization',
      name: 'Antek Automation',
      url: 'https://www.antekautomation.com',
    },
    offers: {
      '@type': 'Offer',
      price: '97.00',
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '97.00',
        priceCurrency: 'GBP',
        billingDuration: 'P1M',
      },
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2027-12-31',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "What's included in setup?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "For AI Voice Assistant and AI Receptionist: we configure call responses and forward your number. For AI Chatbot: we train on your content and integrate your calendar. For Workflow Automation: we run a discovery audit first. Setup takes 24-48 hours for voice and chat; 1-14 days for automations.",
        },
      },
      {
        '@type': 'Question',
        name: 'Are there contracts or minimum terms?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No contracts, no minimum terms. Monthly plans roll month-to-month. Workflow automation projects and GEO audits are one-off payments.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do prices include VAT?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All prices shown are ex-VAT. UK VAT at the current rate applies to UK-based businesses where applicable.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if I want to cancel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Give 30 days notice. Your data is returned in a portable format. n8n automations keep running after cancellation — you own them.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will callers or visitors know they are talking to AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most do not ask. About 1 in 20 callers notice unprompted. If someone asks directly, the AI tells them honestly. If they request a human, the call transfers or a message is taken.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do you offer discounts for multi-product bundles?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Discounts are available when taking two or more products. Book a free 30-minute call to discuss.',
        },
      },
      {
        '@type': 'Question',
        name: 'When do you quote bespoke for workflow automation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Workflow automations with five or more steps, complex CRM integrations, or multi-system builds are scoped per project with a fixed quote before starting.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly will I see results?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Voice and receptionist products start from the first call. Chatbots produce first leads within 48 hours. Workflow automations save time from week one.',
        },
      },
    ],
  }

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://www.antekautomation.com/og-image.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(voiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(chatbotSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(workflowSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(geoAuditSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(receptionistSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
