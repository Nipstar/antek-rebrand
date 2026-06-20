export function Head() {
  return (
    <>
      <title>AI Automation Salisbury | Voice Agents &amp; Chatbots</title>
      <meta name="description" content="Stop losing Salisbury jobs to missed calls. AI voice agents, chatbots and automation, built by a founder down the A303 in Andover. Book a free 30-min call." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/salisbury" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Salisbury | Voice Agents & Chatbots" />
      <meta property="og:description" content="Stop losing Salisbury jobs to missed calls. AI voice agents, chatbots and automation, built by a founder down the A303 in Andover. Book a free 30-min call." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/salisbury" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Automation Salisbury | Voice Agents & Chatbots" />
      <meta name="twitter:description" content="Stop losing Salisbury jobs to missed calls. AI voice agents, chatbots and automation, built by a founder down the A303 in Andover. Book a free 30-min call." />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.antekautomation.com/' },
              { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.antekautomation.com/locations' },
              { '@type': 'ListItem', position: 3, name: 'Salisbury', item: 'https://www.antekautomation.com/locations/salisbury' },
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
            name: 'Antek Automation Salisbury',
            url: 'https://www.antekautomation.com/locations/salisbury',
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
              latitude: 51.0688,
              longitude: -1.7945,
            },
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', 'h2', '.text-lg'],
            },
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
            makesOffer: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Voice Agents' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Chatbots' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workflow Automation' } },
            ],
          }),
        }}
      />

      {/* Service Schema — WHO (Antek/Andy) → WHAT (voice agents, chatbots, automation) → WHERE (Salisbury, Wiltshire) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Automation Salisbury',
            serviceType: 'AI automation',
            url: 'https://www.antekautomation.com/locations/salisbury',
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
              '@type': 'City',
              name: 'Salisbury',
              sameAs: ['https://en.wikipedia.org/wiki/Salisbury', 'https://www.wikidata.org/wiki/Q160642'],
              containedInPlace: {
                '@type': 'AdministrativeArea',
                name: 'Wiltshire',
                sameAs: ['https://en.wikipedia.org/wiki/Wiltshire', 'https://www.wikidata.org/wiki/Q21694746'],
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
            caption: 'Antek Automation — AI automation for Salisbury businesses',
            contentLocation: {
              '@type': 'City',
              name: 'Salisbury',
              sameAs: ['https://en.wikipedia.org/wiki/Salisbury', 'https://www.wikidata.org/wiki/Q160642'],
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
                name: 'You’re in Andover — do you cover Salisbury?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Andover is our base, but we work with Salisbury businesses regularly — it’s an easy run down the A303. The AI runs in the cloud, so your voice agent answers Salisbury calls exactly the same whether we’re next door or up the road.',
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
                  text: 'AI voice agents and chatbots start from £57/month. For a Salisbury trade missing even a few calls a week, it usually pays for itself almost immediately. Full numbers are on our pricing page.',
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
          }),
        }}
      />
    </>
  );
}
