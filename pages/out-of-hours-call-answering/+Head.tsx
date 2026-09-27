import { PRICES, PRICE_TEXT } from '../../src/data/pricing'
import { faqs } from './faqs'

export function Head() {
  const title = 'Out of Hours Call Answering UK | 24/7 AI Answering Service'
  const description =
    'Evening, weekend and bank holiday calls answered by AI: urgent jobs flagged, details captured, bookings made. 24/7 cover from £97/month, no extra fee.'
  const canonical = 'https://www.antekautomation.com/out-of-hours-call-answering'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.antekautomation.com/' },
      { '@type': 'ListItem', position: 2, name: 'AI Receptionist', item: 'https://www.antekautomation.com/ai-receptionist' },
      { '@type': 'ListItem', position: 3, name: 'Out of Hours Call Answering', item: canonical },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonical}#service`,
    name: 'Out of Hours Call Answering',
    description: `AI out of hours call answering for UK businesses. Answers evening, weekend and bank holiday calls, texts you urgent jobs by SMS with optional live transfer, captures caller details and books appointments. From ${PRICE_TEXT.receptionistMonthly} with ${PRICE_TEXT.receptionistSetup}.`,
    provider: { '@id': 'https://www.antekautomation.com/#organization' },
    serviceType: 'Out of Hours Call Answering',
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    audience: { '@type': 'BusinessAudience', name: 'UK trades and service businesses' },
    url: canonical,
    offers: [
      {
        '@type': 'Offer',
        name: 'Starter',
        description: `${PRICES.receptionist.starter.minutes} minutes included per month, ${PRICE_TEXT.receptionistOverage}.`,
        price: String(PRICES.receptionist.starter.monthly),
        priceCurrency: 'GBP',
        priceSpecification: { '@type': 'UnitPriceSpecification', price: String(PRICES.receptionist.starter.monthly), priceCurrency: 'GBP', unitText: 'month' },
      },
      {
        '@type': 'Offer',
        name: 'Standard',
        description: `${PRICES.receptionist.standard.minutes} minutes included per month, ${PRICE_TEXT.receptionistOverage}. Adds CRM and API integrations.`,
        price: String(PRICES.receptionist.standard.monthly),
        priceCurrency: 'GBP',
        priceSpecification: { '@type': 'UnitPriceSpecification', price: String(PRICES.receptionist.standard.monthly), priceCurrency: 'GBP', unitText: 'month' },
      },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
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
      <meta property="og:site_name" content="Antek Automation" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}
