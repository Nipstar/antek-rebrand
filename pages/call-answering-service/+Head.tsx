import { PRICES, PRICE_TEXT } from '../../src/data/pricing'
import { faqs } from './faqs'

export function Head() {
  const title = 'AI Call Answering & Virtual Receptionist UK | £97/mo'
  const description =
    'A UK call answering service run by AI: every call answered 24/7, details captured, appointments booked. A virtual receptionist from £97/month.'
  const canonical = 'https://www.antekautomation.com/call-answering-service'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.antekautomation.com/' },
      { '@type': 'ListItem', position: 2, name: 'AI Receptionist', item: 'https://www.antekautomation.com/ai-receptionist' },
      { '@type': 'ListItem', position: 3, name: 'Call Answering Service', item: canonical },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonical}#service`,
    name: 'AI Call Answering Service',
    description: `AI call answering service and virtual receptionist for UK businesses. Answers every call 24/7, captures caller details and books appointments. From ${PRICE_TEXT.receptionistMonthly} with ${PRICE_TEXT.receptionistSetup}.`,
    provider: { '@id': 'https://www.antekautomation.com/#organization' },
    serviceType: 'Call Answering Service',
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
