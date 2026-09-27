import { PRICES } from '../../src/data/pricing'
import { faq } from './faq'

export function Head() {
  const title = 'AI Receptionist & Automation Pricing UK | From £97/month'
  const description =
    'UK pricing: AI receptionist from £97/month, chatbot £57/month, workflows from £250, GEO audits from £247. Month-to-month plans. Prices ex-VAT.'
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
    provider: { '@id': 'https://www.antekautomation.com/#organization' },
    offers: {
      '@type': 'Offer',
      price: PRICES.receptionist.starter.monthly.toFixed(2),
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: PRICES.receptionist.starter.monthly.toFixed(2),
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
    provider: { '@id': 'https://www.antekautomation.com/#organization' },
    offers: {
      '@type': 'Offer',
      price: PRICES.chatbot.monthly.toFixed(2),
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: PRICES.chatbot.monthly.toFixed(2),
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
    provider: { '@id': 'https://www.antekautomation.com/#organization' },
    offers: {
      '@type': 'Offer',
      price: PRICES.workflow.from.toFixed(2),
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
    provider: { '@id': 'https://www.antekautomation.com/#organization' },
    offers: [
      {
        '@type': 'Offer',
        name: 'Quick Check',
        price: PRICES.geo.quickCheck.toFixed(2),
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2027-12-31',
      },
      {
        '@type': 'Offer',
        name: 'Full Audit',
        price: PRICES.geo.fullAudit.toFixed(2),
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2027-12-31',
      },
      {
        '@type': 'AggregateOffer',
        name: 'Audit + Fix',
        lowPrice: PRICES.geo.auditFixFrom.toFixed(2),
        priceCurrency: 'GBP',
        offerCount: '1',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2027-12-31',
      },
      {
        '@type': 'Offer',
        name: 'GEO Monthly Retainer',
        description: `From £${PRICES.geo.retainerFrom}/month. ${PRICES.geo.retainerMinimumMonths}-month minimum, then rolling monthly.`,
        price: PRICES.geo.retainerFrom.toFixed(2),
        priceCurrency: 'GBP',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: PRICES.geo.retainerFrom.toFixed(2),
          priceCurrency: 'GBP',
          billingDuration: 'P1M',
        },
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2027-12-31',
      },
    ],
  }

  const receptionistSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AI Receptionist',
    description: `AI call-answering receptionist that screens callers, books appointments, and sends call summaries. 24/7, ${PRICES.receptionist.starter.minutes} call minutes included per month, £${PRICES.receptionist.overagePerMin.toFixed(2)}/min over.`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Cloud',
    url: 'https://www.antekautomation.com/ai-receptionist',
    provider: { '@id': 'https://www.antekautomation.com/#organization' },
    offers: {
      '@type': 'Offer',
      price: PRICES.receptionist.starter.monthly.toFixed(2),
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: PRICES.receptionist.starter.monthly.toFixed(2),
        priceCurrency: 'GBP',
        billingDuration: 'P1M',
      },
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2027-12-31',
    },
  }

  // Built from the same array as the visible FAQ, so the text matches word for word.
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
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
