export function Head() {
  return (
    <>
      <title>AI Automation Reading | Thames Valley AI Agents | Antek</title>
      <meta name="description" content="AI voice agents, chatbots and automation for Reading and Thames Valley offices. Capture every M4-corridor lead and cut admin from our Andover base. Book a call." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/reading" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Reading | Thames Valley AI Agents | Antek" />
      <meta property="og:description" content="AI voice agents, chatbots and automation for Reading and Thames Valley offices. Capture every M4-corridor lead and cut admin from our Andover base. Book a call." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/reading" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Automation Reading | Thames Valley AI Agents | Antek" />
      <meta name="twitter:description" content="AI voice agents, chatbots and automation for Reading and Thames Valley offices. Capture every M4-corridor lead and cut admin from our Andover base. Book a call." />

      {/* JSON-LD @graph — references the canonical #organization node (no per-page org/LocalBusiness) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://www.antekautomation.com/locations/reading#service',
                name: 'AI Automation Services in Reading',
                serviceType: 'AI automation',
                url: 'https://www.antekautomation.com/locations/reading',
                provider: { '@id': 'https://www.antekautomation.com/#organization' },
                areaServed: {
                  '@type': 'City',
                  name: 'Reading',
                  sameAs: ['https://en.wikipedia.org/wiki/Reading,_Berkshire'],
                  containedInPlace: {
                    '@type': 'AdministrativeArea',
                    name: 'Berkshire',
                    sameAs: ['https://en.wikipedia.org/wiki/Berkshire', 'https://www.wikidata.org/wiki/Q23220'],
                  },
                },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.antekautomation.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.antekautomation.com/locations' },
                  { '@type': 'ListItem', position: 3, name: 'Berkshire', item: 'https://www.antekautomation.com/locations/berkshire' },
                  { '@type': 'ListItem', position: 4, name: 'Reading', item: 'https://www.antekautomation.com/locations/reading' },
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
                    name: 'Do you cover Reading and the rest of the Thames Valley?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. We work with Reading businesses alongside neighbouring Wokingham, Bracknell and Newbury along the M4. The AI runs in the cloud, so your voice agent and chatbot answer Reading enquiries exactly the same whether your office is on Green Park, Thames Valley Park or anywhere else in town.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do I need to be in Reading for this to work?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Not at all. We’re based in Andover and run the whole thing remotely — setup, testing and support all happen over video call. Your AI doesn’t need a desk in the Thames Valley to answer your phone or your website, so most Reading clients are live without us ever stepping into their office.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Does this fit an office-based Reading firm, not just trades?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Very much so. A lot of Reading’s business base is technology and professional-services firms around Green Park and Thames Valley Park, where the phones and inboxes are the front door. Voice agents, chatbots and workflow automation are a natural fit for any office where enquiries and admin pile up faster than the team can clear them.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How much does it cost?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'AI chatbots start from £57/month, AI voice agents from £97/month. For a Reading firm that wins work on response time, recovering even a handful of missed enquiries a week usually covers the cost several times over. Book a free 30-minute call and we’ll give you a straight figure for your setup.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How quickly can a Reading business go live?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Most voice and chat products are live within 24–48 hours of you forwarding your number or giving us website access. Workflow automation depends on the systems involved, but we scope that on the first call so you know the timeline before anything starts.',
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
