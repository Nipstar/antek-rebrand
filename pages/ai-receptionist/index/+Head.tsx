export function Head() {
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
    description:
      'AI phone answering service for UK businesses. Screens callers, captures details, and books appointments 24/7. Plans from £97/month with setup from £497.',
    provider: { '@id': 'https://www.antekautomation.com/#organization' },
    serviceType: 'AI Phone Answering Service',
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    audience: { '@type': 'BusinessAudience', name: 'UK SMBs and businesses' },
    url: canonical,
    offers: {
      '@type': 'Offer',
      name: 'AI Receptionist Plan',
      price: '97',
      priceCurrency: 'GBP',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '97',
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
          price: '497',
          priceCurrency: 'GBP',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '497',
            priceCurrency: 'GBP',
            unitText: 'one-time',
          },
        },
        {
          '@type': 'Offer',
          name: 'AI Receptionist Monthly Plan',
          price: '97',
          priceCurrency: 'GBP',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '97',
            priceCurrency: 'GBP',
            unitText: 'month',
          },
        },
      ],
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does setup take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most customers are live within 24\u201348 hours. We scrape your website to build the knowledge base, you tell us your screening questions, and you forward your number. No long setup.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will callers know it\u2019s AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most don\u2019t. The voice is natural, the conversation flows properly, and it doesn\u2019t sound like a robot reading a menu.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if someone asks something it can\u2019t answer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It acknowledges the gap, takes a message, and flags it for you. No bluffing, no making things up, no awkward silences.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can it handle different types of calls differently?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Emergency vs routine. New enquiry vs existing customer. Booking request vs general question. You set the rules, it follows them.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does it integrate with my existing tools?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It works with most CRMs, calendars, and field service tools. If you\u2019re using something specific, ask us.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if I already have a voicemail or answering service?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Voicemail captures maybe 20% of callers. An answering service takes a message. This qualifies the lead, captures details, and books the appointment. Different league.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who provides no-code AI call agents in the UK?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Antek Automation. We build AI voice agents for UK businesses using Retell AI, configured without writing code. Agents handle call screening, booking, and lead capture, live within 24–48 hours. Plans from £97/month, setup from £497.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who offers an AI receptionist that answers calls when my team is unavailable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We do. It covers calls around the clock, including evenings, weekends, and bank holidays, or whenever your team is busy or unreachable. Every call gets answered on the first ring, and anything urgent gets flagged straight away.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many concurrent conversations can voice agents handle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Up to 20 calls at once on our Retell setup, each running as its own separate conversation rather than queuing behind a single line. Still miles ahead of a human receptionist, who can only take one call at a time.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does an AI receptionist work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It answers the phone using a natural-sounding voice, follows the screening questions you set to work out what the caller needs, captures their details, and either books them straight into your calendar or takes a message and flags it for you.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is an AI receptionist and how does it work for a business?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It’s a voice agent that answers incoming calls in place of, or alongside, a human receptionist. For a business that means no missed calls, consistent screening every time, and a summary of every call whether you were free to take it or not.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does it cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Plans start from \u00a397/month with setup from \u00a3497. 120 call minutes included per month, £0.18/min over. Book a quick call and we\u2019ll give you a straight answer based on your needs.',
        },
      },
    ],
  }

  return (
    <>
      <title>AI Receptionist UK | Answer Every Call 24/7 | Antek</title>
      <meta
        name="description"
        content="An AI receptionist that answers every call 24/7, books appointments and captures leads for UK businesses. Certified Retell partner. Hear a live demo."
      />
      <link rel="canonical" href={canonical} />

      <meta
        property="og:title"
        content="AI Receptionist UK | Answer Every Call 24/7 | Antek"
      />
      <meta
        property="og:description"
        content="An AI receptionist that answers every call 24/7, books appointments and captures leads for UK businesses. Certified Retell partner. Hear a live demo."
      />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Antek Automation" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="AI Receptionist UK | Answer Every Call 24/7 | Antek"
      />
      <meta
        name="twitter:description"
        content="An AI receptionist that answers every call 24/7, books appointments and captures leads for UK businesses. Certified Retell partner. Hear a live demo."
      />

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
            step: [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'Tell Us About Your Business',
                text: 'Share your website and phone number. We pull your services, hours, and service areas automatically. No long setup.',
              },
              {
                '@type': 'HowToStep',
                position: 2,
                name: 'Set Your Screening Logic',
                text: 'Tell us what questions to ask, what qualifies a good lead, and what is urgent versus routine. You set the rules. The AI follows them.',
              },
              {
                '@type': 'HowToStep',
                position: 3,
                name: 'Forward Your Calls',
                text: 'Dial a short code or scan a QR. Takes 30 seconds. Your AI receptionist is live — answering calls, screening callers, and booking appointments while you get on with the actual work.',
              },
            ],
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
            name: 'AI Receptionist for UK Businesses',
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
