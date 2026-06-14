export function Head() {
  return (
    <>
      <title>AI Automation Agency Hampshire | Antek Automation</title>
      <meta name="description" content="Hampshire's specialist AI automation agency, based in Andover. Voice agents and chatbots that answer every call and capture every lead. Book a free call." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/hampshire" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Agency Hampshire | Antek Automation" />
      <meta property="og:description" content="Hampshire's specialist AI automation agency, based in Andover. Voice agents and chatbots that answer every call and capture every lead. Book a free call." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/hampshire" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Automation Agency Hampshire | Antek Automation" />
      <meta name="twitter:description" content="Hampshire's specialist AI automation agency, based in Andover. Voice agents and chatbots that answer every call and capture every lead. Book a free call." />

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
                  text: 'All of it. From Basingstoke down to the New Forest, Winchester across to Farnborough, and everywhere in between. We\'ve worked with businesses across Test Valley, Basingstoke & Deane, Winchester, Eastleigh, Hart, Rushmoor and the New Forest. Our AI solutions work remotely so there are no geographic limitations.',
                },
              },
              {
                '@type': 'Question',
                name: 'How quickly can you set up an AI voice agent for my Hampshire business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most voice agents are live within 5-7 working days from our first call. For Hampshire businesses, we can usually do a face-to-face kickoff meeting the same week if you prefer, which speeds things up even further.',
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
