export function Head() {
  return (
    <>
      <title>AI Automation Portsmouth | Solent &amp; Island City | Antek</title>
      <meta name="description" content="AI automation for Portsmouth, England’s only island city. AI voice agents, chatbots and automation that answer every Solent enquiry. Book a free call." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/portsmouth" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Portsmouth | Solent & Island City | Antek" />
      <meta property="og:description" content="AI automation for Portsmouth, England’s only island city. AI voice agents, chatbots and automation that answer every Solent enquiry. Book a free call." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/portsmouth" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Automation Portsmouth | Solent & Island City | Antek" />
      <meta name="twitter:description" content="AI automation for Portsmouth, England’s only island city. AI voice agents, chatbots and automation that answer every Solent enquiry. Book a free call." />

      {/* JSON-LD @graph — references the canonical #organization node (no per-page org/LocalBusiness) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://www.antekautomation.com/locations/portsmouth#service',
                name: 'AI Automation Services in Portsmouth',
                serviceType: 'AI automation',
                url: 'https://www.antekautomation.com/locations/portsmouth',
                provider: { '@id': 'https://www.antekautomation.com/#organization' },
                areaServed: {
                  '@type': 'City',
                  name: 'Portsmouth',
                  sameAs: ['https://en.wikipedia.org/wiki/Portsmouth'],
                },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.antekautomation.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.antekautomation.com/locations' },
                  { '@type': 'ListItem', position: 3, name: 'Portsmouth', item: 'https://www.antekautomation.com/locations/portsmouth' },
                ],
              },
              {
                '@type': 'FAQPage',
                about: [
                  { '@type': 'Place', name: 'The Solent', sameAs: 'https://en.wikipedia.org/wiki/The_Solent' },
                  { '@type': 'Place', name: 'Portsea Island', sameAs: 'https://en.wikipedia.org/wiki/Portsea_Island' },
                ],
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Do you actually cover Portsmouth from Andover?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Andover is our base, but the AI runs in the cloud, so your voice agent answers Portsmouth calls exactly the same whether we’re on the island or up the A303. Setup, testing and support all happen over video call — we work with island-city and Solent businesses without needing a desk on Portsea Island.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does this fit marine and maritime businesses?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Well. Chandleries, boatyards, marine contractors and the suppliers around the Historic Dockyard and the Port of Portsmouth all share the same problem — you’re on the water or on a job when the phone rings. A voice agent catches that enquiry, books it and texts you, so the work isn’t lost while you’re away from the desk.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What about Southsea hospitality and Gunwharf retail?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'A great fit. Tourism and hospitality around Southsea and Gunwharf Quays gets enquiries at every hour. A chatbot answers questions, checks availability and books the table, room or slot day and night — capturing the visitor who’d otherwise click away to whoever replies first.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do you also cover Gosport, Fareham and Havant?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. We work across the whole Solent ring — Gosport across the harbour, Fareham and Havant up the road, plus Hayling Island and Waterlooville. We also cover Portsmouth’s sister port, Southampton, west along the M27.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How much does it cost and how quickly can I start?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'AI chatbots start from £57/month, AI voice agents from £97/month, and most are live within 24–48 hours of you forwarding your number or giving us website access. For a busy Portsmouth firm missing even a few enquiries a week, it usually pays for itself almost immediately.',
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
