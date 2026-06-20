export function Head() {
  return (
    <>
      <title>AI Automation Newbury | Voice Agents &amp; Chatbots</title>
      <meta name="description" content="Stop losing Newbury enquiries to missed calls. AI voice agents, chatbots and automation, built by a founder just up the A34 in Andover. Book a free call." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/newbury" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Newbury | Voice Agents & Chatbots" />
      <meta property="og:description" content="Stop losing Newbury enquiries to missed calls. AI voice agents, chatbots and automation, built by a founder just up the A34 in Andover. Book a free call." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/newbury" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Automation Newbury | Voice Agents & Chatbots" />
      <meta name="twitter:description" content="Stop losing Newbury enquiries to missed calls. AI voice agents, chatbots and automation, built by a founder just up the A34 in Andover. Book a free call." />

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
              { '@type': 'ListItem', position: 3, name: 'Newbury', item: 'https://www.antekautomation.com/locations/newbury' },
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
            name: 'Antek Automation Newbury',
            url: 'https://www.antekautomation.com/locations/newbury',
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
              latitude: 51.4014,
              longitude: -1.3231,
            },
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', 'h2', '.text-lg'],
            },
            areaServed: {
              '@type': 'City',
              name: 'Newbury',
              sameAs: ['https://en.wikipedia.org/wiki/Newbury,_Berkshire', 'https://www.wikidata.org/wiki/Q655874'],
              containedInPlace: {
                '@type': 'AdministrativeArea',
                name: 'Berkshire',
                sameAs: ['https://en.wikipedia.org/wiki/Berkshire', 'https://www.wikidata.org/wiki/Q23220'],
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

      {/* Service Schema — WHO (Antek/Andy) → WHAT (voice agents, chatbots, automation) → WHERE (Newbury, Berkshire) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Automation Newbury',
            serviceType: 'AI automation',
            url: 'https://www.antekautomation.com/locations/newbury',
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
              name: 'Newbury',
              sameAs: ['https://en.wikipedia.org/wiki/Newbury,_Berkshire', 'https://www.wikidata.org/wiki/Q655874'],
              containedInPlace: {
                '@type': 'AdministrativeArea',
                name: 'Berkshire',
                sameAs: ['https://en.wikipedia.org/wiki/Berkshire', 'https://www.wikidata.org/wiki/Q23220'],
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
            caption: 'Antek Automation — AI automation for Newbury businesses',
            contentLocation: {
              '@type': 'City',
              name: 'Newbury',
              sameAs: ['https://en.wikipedia.org/wiki/Newbury,_Berkshire', 'https://www.wikidata.org/wiki/Q655874'],
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
                name: 'You’re in Andover — do you actually cover Newbury?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Andover is our base, but we work with Newbury businesses every week — it’s a quick run up the A34. The AI runs in the cloud, so your voice agent answers Newbury calls exactly the same whether we’re next door or over the border.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need to be in Newbury for this to work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Not at all. The whole thing runs remotely — setup, testing and support all happen over video call. Your AI voice agent doesn’t need a desk in Newbury to answer your phone. Most clients are set up without us ever stepping into their office.',
                },
              },
              {
                '@type': 'Question',
                name: 'Newbury’s in Berkshire, not Hampshire — does that matter?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Not in the slightest. Newbury is a West Berkshire town, just over the Hampshire border, and it’s one of our nearest neighbours up the A34. County lines don’t change how the AI works or how we support you — we cover Newbury exactly the way we cover our Hampshire towns.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does it cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI voice agents and chatbots start from £57/month. There’s no long tie-in, and for a Newbury business missing even a few calls a week it usually pays for itself almost immediately. See the full pricing for the detail.',
                },
              },
              {
                '@type': 'Question',
                name: 'How fast can it be set up?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most voice and chat products are live within 24–48 hours of you forwarding your number or giving us website access. We handle the build, testing and ongoing tweaks, so there’s very little for you to do beyond the initial call.',
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
