import { PRICES } from '../../../src/data/pricing'
import { faq } from './faq'

export function Head() {
  const title = 'Small Business Website Design UK | Antek Automation'
  const description =
    'Fast, clear websites for UK small businesses, built to capture enquiries and get found on Google and AI search. Builds from £995. You own the site.'
  const canonical = 'https://www.antekautomation.com/services/website-design'

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.antekautomation.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.antekautomation.com/#services' },
      { '@type': 'ListItem', position: 3, name: 'Website Design', item: canonical },
    ],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Website Design',
    description:
      'Fast, clear websites for UK small businesses, structured for lead capture, Google and AI search, and ready to connect to a chatbot, voice agent or existing systems.',
    provider: {
      '@type': 'Organization',
      '@id': 'https://www.antekautomation.com/#organization',
      name: 'Antek Automation',
      url: 'https://www.antekautomation.com',
    },
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    serviceType: 'Website Design',
    url: canonical,
    offers: {
      '@type': 'Offer',
      name: 'Website Build',
      price: PRICES.website.from.toFixed(2),
      priceCurrency: 'GBP',
      description: `From £${PRICES.website.from} for up to ${PRICES.website.maxPages} pages. Fixed quote before work starts.`,
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2027-12-31',
    },
    potentialAction: {
      '@type': 'ScheduleAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.antekautomation.com/contact',
        actionPlatform: 'https://schema.org/DesktopWebPlatform',
      },
      description: 'Book a free 30-min discovery call',
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

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Small Business Website Design UK',
    url: canonical,
    author: {
      '@type': 'Person',
      '@id': 'https://www.antekautomation.com/#founder',
      name: 'Andy Norman',
      jobTitle: 'Founder',
      sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
    },
    keywords: [
      'Small business website design',
      'Website design UK',
      'Lead capture websites',
      'AI search ready websites',
      'Next.js websites',
    ],
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'section p.text-xl', 'section p.text-lg'],
    },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
    </>
  )
}
