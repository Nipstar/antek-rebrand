import { RECEPTIONIST_STEPS } from '../../../src/components/ReceptionistHowItWorks'
import { PRICES, PRICE_TEXT } from '../../../src/data/pricing'
import { faqs } from './faqs'

export function Head() {
  const title = 'AI Receptionist & Call Answering Service UK | From £97/mo'
  const description =
    'AI receptionist that answers every call 24/7, captures caller details and books appointments. UK call answering from £97/month. Live in 24–48 hours.'
  const canonical = 'https://www.antekautomation.com/ai-receptionist'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.antekautomation.com/' },
      { '@type': 'ListItem', position: 2, name: 'AI Receptionist', item: canonical },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonical}#service`,
    name: 'AI Receptionist',
    description: `AI receptionist and call answering service for UK businesses. Screens callers, captures details, and books appointments 24/7. Plans from ${PRICE_TEXT.receptionistMonthly} with ${PRICE_TEXT.receptionistSetup}.`,
    provider: { '@id': 'https://www.antekautomation.com/#organization' },
    serviceType: 'AI Phone Answering Service',
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    audience: { '@type': 'BusinessAudience', name: 'UK SMBs and businesses' },
    url: canonical,
    offers: {
      '@type': 'Offer',
      name: 'AI Receptionist Plan',
      price: String(PRICES.receptionist.starter.monthly),
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: String(PRICES.receptionist.starter.monthly),
        priceCurrency: 'GBP',
        unitText: 'month',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'AI Receptionist Pricing',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'AI Receptionist Setup',
          price: String(PRICES.receptionist.setupFrom),
          priceCurrency: 'GBP',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: String(PRICES.receptionist.setupFrom),
            priceCurrency: 'GBP',
            unitText: 'one-time',
          },
        },
        {
          '@type': 'Offer',
          name: 'AI Receptionist Monthly Plan',
          price: String(PRICES.receptionist.starter.monthly),
          priceCurrency: 'GBP',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: String(PRICES.receptionist.starter.monthly),
            priceCurrency: 'GBP',
            unitText: 'month',
          },
        },
      ],
    },
  }

  // Built from the same array as the visible FAQ, so the text matches word for word.
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HowTo Schema — "Live in 24–48 Hours" setup steps */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            '@id': 'https://www.antekautomation.com/ai-receptionist#how-to-setup',
            name: 'How to Set Up Your AI Receptionist',
            description:
              'Live in 24 to 48 hours. No long setup. Three simple steps to get your AI receptionist answering calls.',
            inLanguage: 'en-GB',
            step: RECEPTIONIST_STEPS.map((st, i) => ({
              '@type': 'HowToStep',
              position: i + 1,
              name: st.h,
              text: st.b,
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Speakable Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'AI Receptionist for UK Businesses: Every Call Answered, 24/7',
            url: 'https://www.antekautomation.com/ai-receptionist',
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', 'section p.text-lg'],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
