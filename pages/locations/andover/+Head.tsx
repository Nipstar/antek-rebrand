export function Head() {
  return (
    <>
      <title>AI Automation Andover | Antek Automation</title>
      <meta name="description" content="Andover's AI automation agency. Voice agents, chatbots and workflow automation for local businesses — straight-talking, and we deliver. Book a free call." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/andover" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Andover | Antek Automation" />
      <meta property="og:description" content="Andover's AI automation agency. Voice agents, chatbots and workflow automation for local businesses — straight-talking, and we deliver. Book a free call." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/andover" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Automation Andover | Antek Automation" />
      <meta name="twitter:description" content="Andover's AI automation agency. Voice agents, chatbots and workflow automation for local businesses — straight-talking, and we deliver. Book a free call." />

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
                name: 'Andover',
                item: 'https://www.antekautomation.com/locations/andover',
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
            name: 'Antek Automation Andover',
            url: 'https://www.antekautomation.com/locations/andover',
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
              latitude: 51.2114,
              longitude: -1.4901,
            },
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', 'h2', '.text-lg'],
            },
            areaServed: {
              '@type': 'City',
              name: 'Andover',
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
                name: 'Can I come to your office?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes — we're at Chantry House, 38 Chantry Way, Andover SP10 1LZ. Happy to have you round for a demo. Most clients prefer a video call, but the door's always open if you're local.",
                },
              },
              {
                '@type': 'Question',
                name: 'Do you work with businesses outside Andover?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Absolutely. We serve all of Hampshire and the UK. Andover is our base, but AI automation works remotely — we've got clients from Glasgow to Southampton. That said, we do have a soft spot for local businesses and can usually meet face-to-face within the week.",
                },
              },
              {
                '@type': 'Question',
                name: "I'm a tradesperson in Andover — is AI really for someone like me?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Especially for someone like you. You're probably a one-person band or a small team, out on jobs all day, missing calls you can't afford to miss. An AI voice agent costs less than a part-time receptionist and works 24/7. It's built for exactly your situation.",
                },
              },
              {
                '@type': 'Question',
                name: 'How much does it cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI voice agents start from £97/month. For an Andover tradesperson missing even 3-4 calls a week, the return on investment is usually clear within the first couple of weeks.',
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
