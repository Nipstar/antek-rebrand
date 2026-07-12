export function Head() {
  return (
    <>
      <title>AI Automation Berkshire | Thames Valley | Antek</title>
      <meta name="description" content="AI automation for Berkshire businesses across the M4 corridor and Thames Valley: AI chatbots, voice agents, workflow automation and GEO. Book a free call." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/berkshire" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Berkshire | Thames Valley | Antek" />
      <meta property="og:description" content="AI automation for Berkshire businesses across the M4 corridor and Thames Valley: AI chatbots, voice agents, workflow automation and GEO. Book a free call." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/berkshire" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Automation Berkshire | Thames Valley | Antek" />
      <meta name="twitter:description" content="AI automation for Berkshire businesses across the M4 corridor and Thames Valley: AI chatbots, voice agents, workflow automation and GEO. Book a free call." />

      {/* JSON-LD @graph — references the canonical #organization node (no per-page org/LocalBusiness) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://www.antekautomation.com/locations/berkshire#service',
                name: 'AI Automation Services in Berkshire',
                serviceType: 'AI automation',
                url: 'https://www.antekautomation.com/locations/berkshire',
                provider: { '@id': 'https://www.antekautomation.com/#organization' },
                areaServed: {
                  '@type': 'AdministrativeArea',
                  name: 'Berkshire',
                  sameAs: ['https://en.wikipedia.org/wiki/Berkshire', 'https://www.wikidata.org/wiki/Q23220'],
                  containedInPlace: {
                    '@type': 'Country',
                    name: 'United Kingdom',
                    sameAs: 'https://en.wikipedia.org/wiki/United_Kingdom',
                  },
                },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.antekautomation.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.antekautomation.com/locations' },
                  { '@type': 'ListItem', position: 3, name: 'Berkshire', item: 'https://www.antekautomation.com/locations/berkshire' },
                ],
              },
              {
                '@type': 'FAQPage',
                about: [
                  { '@type': 'Place', name: 'Thames Valley', sameAs: 'https://en.wikipedia.org/wiki/Thames_Valley' },
                  { '@type': 'Place', name: 'River Thames', sameAs: 'https://en.wikipedia.org/wiki/River_Thames' },
                ],
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Do you actually cover Berkshire from Andover?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Andover is our base, but we work with Berkshire businesses across Reading, Newbury, Bracknell, Wokingham and the wider Thames Valley. The AI runs in the cloud, so your voice agent and chatbot answer Berkshire enquiries exactly the same whether your office is in Reading or Maidenhead.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do we work remotely or do you come to us?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Both options are open. Most of our Berkshire work is delivered remotely — setup, testing and support all happen over video call, which suits busy Thames Valley teams. If you’d rather kick off in person, we can travel up the M4 to meet.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Is this a fit for office-based firms, not just trades?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'It’s built for them. Berkshire’s economy is weighted towards technology and professional services, telecoms, pharma and finance — office teams handling inbound enquiries, scheduling and back-office admin. A professional-services firm around Green Park, for example, can put a chatbot on its site to qualify enquiries and a workflow to route them into the CRM without manual re-keying.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Which Berkshire towns do you have pages for?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We have dedicated pages for Reading and Newbury, our two main Berkshire towns, with more added on demand as we take on work across Bracknell, Wokingham, Maidenhead, Windsor, Slough and Thatcham. The county hub covers all of Berkshire in the meantime.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How much does it cost and how quickly can we start?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'AI chatbots start from £57/month, AI voice agents from £97/month, and most are live within 24–48 hours of you forwarding your number or giving us website access. For a Berkshire firm fielding a steady stream of enquiries across the M4 corridor, it usually pays for itself quickly.',
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
