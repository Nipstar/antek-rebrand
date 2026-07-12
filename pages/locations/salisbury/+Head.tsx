export function Head() {
  return (
    <>
      <title>AI Automation Salisbury | Voice Agents &amp; Chatbots</title>
      <meta name="description" content="Stop drowning in Salisbury admin. AI that chases quotes and follow-ups, answers your calls and captures leads, built down the A303 in Andover. Book a free call." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/salisbury" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Salisbury | Voice Agents & Chatbots" />
      <meta property="og:description" content="Stop drowning in Salisbury admin. AI that chases quotes and follow-ups, answers your calls and captures leads, built down the A303 in Andover. Book a free call." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/salisbury" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Automation Salisbury | Voice Agents & Chatbots" />
      <meta name="twitter:description" content="Stop drowning in Salisbury admin. AI that chases quotes and follow-ups, answers your calls and captures leads, built down the A303 in Andover. Book a free call." />

      {/* JSON-LD @graph — references the canonical #organization node (no per-page org/LocalBusiness) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://www.antekautomation.com/locations/salisbury#service',
                name: 'AI Automation Services in Salisbury',
                serviceType: 'AI automation',
                url: 'https://www.antekautomation.com/locations/salisbury',
                provider: { '@id': 'https://www.antekautomation.com/#organization' },
                areaServed: {
                  '@type': 'City',
                  name: 'Salisbury',
                  sameAs: ['https://en.wikipedia.org/wiki/Salisbury', 'https://www.wikidata.org/wiki/Q160642'],
                  containedInPlace: {
                    '@type': 'AdministrativeArea',
                    name: 'Wiltshire',
                    sameAs: ['https://en.wikipedia.org/wiki/Wiltshire', 'https://www.wikidata.org/wiki/Q21694746'],
                  },
                },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.antekautomation.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.antekautomation.com/locations' },
                  { '@type': 'ListItem', position: 3, name: 'Salisbury', item: 'https://www.antekautomation.com/locations/salisbury' },
                ],
              },
              {
                '@type': 'FAQPage',
                about: [
                  { '@type': 'Place', name: 'Salisbury Cathedral', sameAs: 'https://en.wikipedia.org/wiki/Salisbury_Cathedral' },
                  { '@type': 'Place', name: 'Stonehenge', sameAs: 'https://en.wikipedia.org/wiki/Stonehenge' },
                ],
                mainEntity: [
              {
                '@type': 'Question',
                name: 'You’re in Andover — do you cover Salisbury?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Andover is our base, and as an AI automation company 18 miles up the A303, we can be in Salisbury same-week for face-to-face work. The AI runs in the cloud, so your voice agent answers Salisbury calls exactly the same whether we’re next door or up the road.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need to be in Salisbury for this to work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Not at all. The whole thing runs remotely — setup, testing and support all happen over video call. Your AI voice agent doesn’t need a desk in the city centre to answer your phone. Most clients are set up without us ever stepping into their office.',
                },
              },
              {
                '@type': 'Question',
                name: 'Salisbury is in Wiltshire, not Hampshire — does that matter?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Salisbury is a Wiltshire cathedral city on Hampshire’s western edge, and it’s a border town we happily cover. County lines make no difference to how the AI works or how we support you — we’re a short run down the A303 either way.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does it cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI chatbots start from £57/month, AI voice agents from £97/month. For a Salisbury trade missing even a few calls a week, it usually pays for itself almost immediately. Full numbers are on our pricing page.',
                },
              },
              {
                '@type': 'Question',
                name: 'How fast can you set it up?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most voice agents and chatbots are live within 24–48 hours of you forwarding your number or giving us website access. We handle the build, testing and ongoing tweaks, so there’s very little for you to do at your end.',
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
