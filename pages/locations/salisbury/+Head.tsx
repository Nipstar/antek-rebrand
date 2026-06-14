export function Head() {
  return (
    <>
      <title>AI Automation Salisbury | Antek Automation</title>
      <meta
        name="description"
        content="AI automation for Salisbury businesses. Voice agents, chatbots, workflow automation. Andover-based AI agency 18 miles up the A303. Certified Retell AI Partner."
      />
      <link rel="canonical" href="https://www.antekautomation.com/locations/salisbury" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Salisbury | Antek Automation" />
      <meta
        property="og:description"
        content="AI automation for Salisbury businesses. Voice agents, chatbots, workflow automation. Andover-based agency 18 miles up the A303. Certified Retell AI Partner."
      />
      <meta property="og:url" content="https://www.antekautomation.com/locations/salisbury" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AI Automation Salisbury | Antek Automation" />
      <meta
        name="twitter:description"
        content="AI voice agents, chatbots & workflow automation for Salisbury and Wiltshire businesses. Andover-based, 18 miles up the A303."
      />

      {/* Geo tags */}
      <meta name="geo.region" content="GB-WIL" />
      <meta name="geo.placename" content="Salisbury" />
      <meta name="geo.position" content="51.0688;-1.7945" />
      <meta name="ICBM" content="51.0688, -1.7945" />

      {/* BreadcrumbList */}
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

      {/* LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Antek Automation Salisbury',
            url: 'https://www.antekautomation.com/locations/salisbury',
            telephone: '+44-3330-389960',
            email: 'hello@antekautomation.com',
            parentOrganization: {
              '@type': 'Organization',
              '@id': 'https://www.antekautomation.com/#organization',
              name: 'Antek Automation',
              url: 'https://www.antekautomation.com',
            },
            founder: {
              '@type': 'Person',
              '@id': 'https://www.antekautomation.com/#founder',
              name: 'Andy Norman',
              sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1', 'https://about.me/andynorman'],
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Salisbury',
              addressRegion: 'Wiltshire',
              addressCountry: 'GB',
            },
            geo: { '@type': 'GeoCoordinates', latitude: 51.0688, longitude: -1.7945 },
            speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '.text-lg'] },
            areaServed: [
              { '@type': 'City', name: 'Salisbury' },
              { '@type': 'City', name: 'Amesbury' },
              { '@type': 'City', name: 'Wilton' },
              { '@type': 'Place', name: 'Old Sarum' },
              { '@type': 'Place', name: 'Tisbury' },
              { '@type': 'Place', name: 'Downton' },
              { '@type': 'Place', name: 'Bemerton' },
              { '@type': 'Place', name: 'Laverstock' },
              { '@type': 'AdministrativeArea', name: 'Wiltshire' },
            ],
            makesOffer: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Voice Agents' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Chatbots' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workflow Automation' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GEO Audit' } },
            ],
            priceRange: 'From £97/month',
          }),
        }}
      />

      {/* FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Do you serve businesses in Salisbury from your Hampshire base?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes — Andover to Salisbury is 18 miles up the A303, around 30 minutes. We work with Salisbury and wider Wiltshire businesses regularly and visit in person whenever it adds value.',
                },
              },
              {
                '@type': 'Question',
                name: 'How quickly can you visit Salisbury for in-person meetings?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Usually same week, often same day for existing clients. Discovery calls are remote by default to save time on both sides.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does an AI voice agent cost for a Salisbury small business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Setup from £497, then £97/month for the voice agent on standard plans. Pricing scales with call volume — full breakdown on our pricing page.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can you build automation for defence supply chain companies?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We have worked with regulated supply chains and understand the data handling and audit requirements. We can build to your security and compliance baseline.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you work with Salisbury tourism and hospitality businesses?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Regularly. AI chatbots for booking enquiries and voice agents for after-hours reservations are two of our most common deployments in hospitality.',
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
