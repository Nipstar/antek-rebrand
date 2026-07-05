export function Head() {
  return (
    <>
      <title>AI Automation Newbury | Voice Agents &amp; Chatbots</title>
      <meta name="description" content="Get your Newbury evenings back. AI that handles admin and follow-ups, answers your calls and captures leads, built just up the A34 in Andover. Book a free call." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/newbury" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Newbury | Voice Agents & Chatbots" />
      <meta property="og:description" content="Get your Newbury evenings back. AI that handles admin and follow-ups, answers your calls and captures leads, built just up the A34 in Andover. Book a free call." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/newbury" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Automation Newbury | Voice Agents & Chatbots" />
      <meta name="twitter:description" content="Get your Newbury evenings back. AI that handles admin and follow-ups, answers your calls and captures leads, built just up the A34 in Andover. Book a free call." />

      {/* JSON-LD @graph — references the canonical #organization node (no per-page org/LocalBusiness) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://www.antekautomation.com/locations/newbury#service',
                name: 'AI Automation Services in Newbury',
                serviceType: 'AI automation',
                url: 'https://www.antekautomation.com/locations/newbury',
                provider: { '@id': 'https://www.antekautomation.com/#organization' },
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
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.antekautomation.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.antekautomation.com/locations' },
                  { '@type': 'ListItem', position: 3, name: 'Berkshire', item: 'https://www.antekautomation.com/locations/berkshire' },
                  { '@type': 'ListItem', position: 4, name: 'Newbury', item: 'https://www.antekautomation.com/locations/newbury' },
                ],
              },
              {
                '@type': 'FAQPage',
                about: [
                  { '@type': 'Place', name: 'River Kennet', sameAs: 'https://en.wikipedia.org/wiki/River_Kennet' },
                  { '@type': 'Place', name: 'Newbury Racecourse', sameAs: 'https://en.wikipedia.org/wiki/Newbury_Racecourse' },
                ],
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
              },
            ],
          }),
        }}
      />
    </>
  );
}
