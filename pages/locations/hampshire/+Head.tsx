export function Head() {
  return (
    <>
      <title>AI Agency Hampshire | Voice Agents &amp; Automation | Antek</title>
      <meta name="description" content="Andover-based AI agency for Hampshire trades and service businesses. Voice agents and chatbots that answer every call and capture leads. Book a free call." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/hampshire" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Agency Hampshire | Voice Agents & Automation | Antek" />
      <meta property="og:description" content="Andover-based AI agency for Hampshire trades and service businesses. Voice agents and chatbots that answer every call and capture leads. Book a free call." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/hampshire" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Agency Hampshire | Voice Agents & Automation | Antek" />
      <meta name="twitter:description" content="Andover-based AI agency for Hampshire trades and service businesses. Voice agents and chatbots that answer every call and capture leads. Book a free call." />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.antekautomation.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Locations',
                item: 'https://www.antekautomation.com/locations',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Hampshire',
                item: 'https://www.antekautomation.com/locations/hampshire',
              },
            ],
          }),
        }}
      />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Antek Automation Hampshire',
            url: 'https://www.antekautomation.com/locations/hampshire',
            telephone: '+44-3330-389960',
            founder: {
              '@type': 'Person',
              '@id': 'https://www.antekautomation.com/#founder',
              name: 'Andy Norman',
              sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Andover',
              addressRegion: 'Hampshire',
              addressCountry: 'GB',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 51.05,
              longitude: -1.31,
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Hampshire',
              sameAs: ['https://en.wikipedia.org/wiki/Hampshire', 'https://www.wikidata.org/wiki/Q23204'],
            },
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', 'h2', '.text-lg'],
            },
            makesOffer: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI Voice Agents',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI Chatbots',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Workflow Automation',
                },
              },
            ],
          }),
        }}
      />

      {/* Service Schema — WHO (Antek/Andy) → WHAT (voice agents, chatbots, automation) → WHERE (Hampshire) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Automation Hampshire',
            serviceType: 'AI automation',
            url: 'https://www.antekautomation.com/locations/hampshire',
            provider: {
              '@type': 'Organization',
              name: 'Antek Automation',
              url: 'https://www.antekautomation.com/',
              knowsAbout: [
                'AI voice agents',
                'AI chatbots',
                'Workflow automation',
                'Business process automation',
                'Lead capture',
              ],
              founder: { '@type': 'Person', name: 'Andy Norman' },
            },
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Hampshire',
              sameAs: ['https://en.wikipedia.org/wiki/Hampshire', 'https://www.wikidata.org/wiki/Q23204'],
              containedInPlace: {
                '@type': 'Country',
                name: 'United Kingdom',
                sameAs: ['https://en.wikipedia.org/wiki/United_Kingdom', 'https://www.wikidata.org/wiki/Q145'],
              },
            },
          }),
        }}
      />

      {/* ImageObject Schema — with contentLocation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ImageObject',
            url: 'https://www.antekautomation.com/og-image.png',
            contentUrl: 'https://www.antekautomation.com/og-image.png',
            caption: 'Antek Automation — AI automation for Hampshire businesses',
            contentLocation: {
              '@type': 'AdministrativeArea',
              name: 'Hampshire',
              sameAs: ['https://en.wikipedia.org/wiki/Hampshire', 'https://www.wikidata.org/wiki/Q23204'],
            },
          }),
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Can I meet you in person?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Absolutely \u2014 we're based in Andover, so if you're anywhere in Hampshire we're happy to meet for a coffee. That said, most of our Hampshire clients prefer video calls because it's faster and more convenient. Either way works.",
                },
              },
              {
                '@type': 'Question',
                name: 'Do you work with tradespeople in rural Hampshire?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes. Some of our best-performing voice agents are for trades businesses covering rural areas \u2014 exactly the kind of businesses where you're most likely to miss calls because you're mid-job with no signal. The AI catches everything you can't.",
                },
              },
              {
                '@type': 'Question',
                name: 'What areas of Hampshire do you cover?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "All of it — we've got dedicated pages for Andover, Basingstoke, Winchester and Southampton, plus the border towns of Salisbury and Newbury. Our AI solutions work remotely, so there are no geographic limitations.",
                },
              },
              {
                '@type': 'Question',
                name: 'How quickly can you set up an AI voice agent for my Hampshire business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most voice agents and chatbots are live within 24–48 hours of you forwarding your number or giving us website access. For Hampshire businesses, we can usually do a face-to-face kickoff the same week if you prefer.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does it cost for a Hampshire business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI voice agents and chatbots start from £57/month. Most Hampshire businesses recover that within the first few captured calls. See full pricing, or book a free call for an exact quote.',
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
