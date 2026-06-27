export function Head() {
  return (
    <>
      <title>AI Automation Andover | Voice Agents &amp; Chatbots | Antek</title>
      <meta name="description" content="Stop losing Andover jobs to missed calls. AI voice agents, chatbots and workflow automation, founder-led from our Andover HQ at Chantry House. Book a free call." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/andover" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Andover | Voice Agents & Chatbots | Antek" />
      <meta property="og:description" content="Stop losing Andover jobs to missed calls. AI voice agents, chatbots and workflow automation, founder-led from our Andover HQ at Chantry House. Book a free call." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/andover" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Automation Andover | Voice Agents & Chatbots | Antek" />
      <meta name="twitter:description" content="Stop losing Andover jobs to missed calls. AI voice agents, chatbots and workflow automation, founder-led from our Andover HQ at Chantry House. Book a free call." />

      {/* JSON-LD @graph — references the canonical #organization node (no per-page org/LocalBusiness) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://www.antekautomation.com/locations/andover#service',
                name: 'AI Automation Services in Andover',
                serviceType: 'AI automation',
                url: 'https://www.antekautomation.com/locations/andover',
                provider: { '@id': 'https://www.antekautomation.com/#organization' },
                areaServed: {
                  '@type': 'City',
                  name: 'Andover',
                  sameAs: ['https://en.wikipedia.org/wiki/Andover,_Hampshire', 'https://www.wikidata.org/wiki/Q492805'],
                  containedInPlace: {
                    '@type': 'AdministrativeArea',
                    name: 'Hampshire',
                    sameAs: ['https://en.wikipedia.org/wiki/Hampshire', 'https://www.wikidata.org/wiki/Q23204'],
                  },
                },
                about: [
                  { '@type': 'Place', name: 'Test Valley', sameAs: 'https://en.wikipedia.org/wiki/Test_Valley' },
                  { '@type': 'Place', name: 'River Anton', sameAs: 'https://en.wikipedia.org/wiki/River_Anton' },
                ],
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.antekautomation.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.antekautomation.com/locations' },
                  { '@type': 'ListItem', position: 3, name: 'Hampshire', item: 'https://www.antekautomation.com/locations/hampshire' },
                  { '@type': 'ListItem', position: 4, name: 'Andover', item: 'https://www.antekautomation.com/locations/andover' },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Can I come to your office?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes — we’re at Chantry House, 38 Chantry Way, Andover SP10 1LZ, right in the middle of town. Happy to have you round for a demo. Most clients prefer a video call, but the door’s always open if you’re local.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do you work with businesses outside Andover?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Absolutely. We serve all of Hampshire and the UK. Andover is our HQ, but AI automation works remotely — we’ve got clients right across the county, from Basingstoke down to Southampton. That said, we do have a soft spot for local businesses and can usually meet face-to-face within the week.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'I’m an Andover tradesperson — is AI really for me?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Especially for you. You’re probably a one-person band or a small team, out on jobs in Weyhill, Thruxton or across the new estates all day, missing calls you can’t afford to miss. An AI voice agent costs less than a part-time receptionist and works 24/7. It’s built for exactly your situation.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How much does it cost?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'AI voice agents and chatbots start from £57/month. For an Andover tradesperson missing even a few calls a week, the return on investment is usually clear within the first couple of weeks.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How quickly can you set me up?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Most voice and chat products are live within 24–48 hours of you forwarding your number or giving us website access. If you’d rather kick off in person, we’re at Chantry House in town and can usually meet the same week — being on your doorstep keeps things quick.',
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
