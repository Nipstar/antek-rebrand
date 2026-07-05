export function Head() {
  return (
    <>
      <title>AI Automation Bournemouth | Voice Agents &amp; Chatbots | Antek</title>
      <meta name="description" content="AI voice agents, chatbots & automation for Bournemouth, Poole & Christchurch finance and tourism firms. Capture every coastal lead. Book a free call today." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/bournemouth" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Bournemouth | Voice Agents & Chatbots | Antek" />
      <meta property="og:description" content="AI voice agents, chatbots & automation for Bournemouth, Poole & Christchurch finance and tourism firms. Capture every coastal lead. Book a free call today." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/bournemouth" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Automation Bournemouth | Voice Agents & Chatbots | Antek" />
      <meta name="twitter:description" content="AI voice agents, chatbots & automation for Bournemouth, Poole & Christchurch finance and tourism firms. Capture every coastal lead. Book a free call today." />

      {/* JSON-LD @graph — references the canonical #organization node (no per-page org/LocalBusiness) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://www.antekautomation.com/locations/bournemouth#service',
                name: 'AI Automation Services in Bournemouth',
                serviceType: 'AI automation',
                url: 'https://www.antekautomation.com/locations/bournemouth',
                provider: { '@id': 'https://www.antekautomation.com/#organization' },
                areaServed: {
                  '@type': 'City',
                  name: 'Bournemouth',
                  sameAs: ['https://en.wikipedia.org/wiki/Bournemouth'],
                  containedInPlace: {
                    '@type': 'AdministrativeArea',
                    name: 'Dorset',
                    sameAs: ['https://en.wikipedia.org/wiki/Dorset'],
                  },
                },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.antekautomation.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.antekautomation.com/locations' },
                  { '@type': 'ListItem', position: 3, name: 'Bournemouth', item: 'https://www.antekautomation.com/locations/bournemouth' },
                ],
              },
              {
                '@type': 'FAQPage',
                about: [
                  { '@type': 'Place', name: 'Bournemouth, Christchurch and Poole', sameAs: 'https://en.wikipedia.org/wiki/Bournemouth,_Christchurch_and_Poole' },
                  { '@type': 'Place', name: 'Poole', sameAs: 'https://en.wikipedia.org/wiki/Poole' },
                ],
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Do you really cover Bournemouth and Dorset, this far from Andover?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We do. Bournemouth is further from our Andover base than our Hampshire patch, so we’re honest about it: we’re remote-first here. Setup, testing and ongoing support all run over video call, and your AI voice agent or chatbot answers BCP enquiries exactly the same whether we’re next door or up the A338. We come down to the coast in person when a job genuinely warrants it.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does AI automation suit Bournemouth’s finance and hospitality firms?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Especially well. A Bournemouth finance firm needs every call answered accurately and consistently — ideal for an AI voice agent. A seafront hotel or restaurant takes enquiries and bookings around the clock in season — ideal for a chatbot. And creative or digital studios across BCP claw back billable hours when the admin is automated. Different sectors, same principle.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How much does it cost and how quickly can I start?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'AI voice agents and chatbots start from £57/month, and most go live within 24–48 hours of you forwarding your number or giving us website access — see full pricing. For a Bournemouth business losing even a few enquiries a week, it tends to pay for itself fast.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can we meet in person on the coast?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes, where it genuinely helps. Most Bournemouth clients are happy on video and never need us in the room — but for a larger or more complex build we’ll come down to the seafront to kick things off face-to-face. We won’t pretend we’re local; we’ll just be straight about when a trip earns its keep.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do you only cover Bournemouth itself, or the whole BCP area?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'The whole conurbation — Bournemouth, Poole, Sandbanks and Christchurch, plus the surrounding Dorset towns out toward the New Forest. Because the AI lives in the cloud, the exact postcode never changes how well it works for you.',
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
    </>
  );
}
