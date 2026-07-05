export function Head() {
  return (
    <>
      <title>AI Automation Southampton | Voice Agents &amp; Chatbots | Antek</title>
      <meta name="description" content="Your Southampton website should never sleep. AI chatbots, voice agents and automation capturing leads around the clock, built near Andover. Book a free call." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/southampton" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Southampton | Voice Agents & Chatbots | Antek" />
      <meta property="og:description" content="Your Southampton website should never sleep. AI chatbots, voice agents and automation capturing leads around the clock, built near Andover. Book a free call." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/southampton" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Automation Southampton | Voice Agents & Chatbots | Antek" />
      <meta name="twitter:description" content="Your Southampton website should never sleep. AI chatbots, voice agents and automation capturing leads around the clock, built near Andover. Book a free call." />

      {/* JSON-LD @graph — references the canonical #organization node (no per-page org/LocalBusiness) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://www.antekautomation.com/locations/southampton#service',
                name: 'AI Automation Services in Southampton',
                serviceType: 'AI automation',
                url: 'https://www.antekautomation.com/locations/southampton',
                provider: { '@id': 'https://www.antekautomation.com/#organization' },
                areaServed: {
                  '@type': 'City',
                  name: 'Southampton',
                  sameAs: ['https://en.wikipedia.org/wiki/Southampton', 'https://www.wikidata.org/wiki/Q79848'],
                  containedInPlace: {
                    '@type': 'AdministrativeArea',
                    name: 'Hampshire',
                    sameAs: ['https://en.wikipedia.org/wiki/Hampshire', 'https://www.wikidata.org/wiki/Q23204'],
                  },
                },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.antekautomation.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.antekautomation.com/locations' },
                  { '@type': 'ListItem', position: 3, name: 'Hampshire', item: 'https://www.antekautomation.com/locations/hampshire' },
                  { '@type': 'ListItem', position: 4, name: 'Southampton', item: 'https://www.antekautomation.com/locations/southampton' },
                ],
              },
              {
                '@type': 'FAQPage',
                about: [
                  { '@type': 'Place', name: 'University of Southampton', sameAs: 'https://en.wikipedia.org/wiki/University_of_Southampton' },
                  { '@type': 'Place', name: 'River Itchen', sameAs: 'https://en.wikipedia.org/wiki/River_Itchen,_Hampshire' },
                ],
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'You’re based in Andover — why should I choose you over a Southampton agency?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We’re an AI automation company about 30 minutes up the A3057, closer than most London agencies that target Southampton businesses. More importantly, AI automation runs on cloud infrastructure. Your voice agent doesn’t need a local office. What matters is the quality of the build and the speed of support, and we deliver both.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do your AI voice agents work for hospitality businesses near the cruise terminals?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. We’ve built voice agents that handle high-volume seasonal enquiries — exactly the pattern cruise terminal hospitality businesses deal with. The AI handles the peaks so your staff can focus on service.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can your chatbot handle enquiries in multiple languages?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. Southampton’s diverse population and international port traffic means multilingual capability matters. Our chatbots can be configured to handle conversations in multiple languages.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'What kind of Southampton businesses do you work with?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Trades and service firms across Ocean Village, Portswood, Shirley and Bitterne, plus lettings agents in the city centre, hospitality around the cruise terminals, and maritime and logistics businesses. If your team answers phones or chases admin every week, it’s a fit — from the SO postcode out to Eastleigh and the New Forest.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How much does it cost and how quickly can I start?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'AI voice agents and chatbots start from £57/month, and most are live within 24–48 hours of you forwarding your number or giving us website access. For a Southampton business missing even a few calls a week, it usually pays for itself almost immediately.',
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
