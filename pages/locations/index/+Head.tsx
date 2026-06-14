export function Head() {
  return (
    <>
      <title>AI Automation Agency Hampshire & UK | Antek</title>
      <meta
        name="description"
        content="Hampshire-based AI automation agency in Andover — voice agents, chatbots and workflow automation for businesses across Hampshire and the UK. Book a free call."
      />
      <link rel="canonical" href="https://www.antekautomation.com/locations" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Agency Hampshire & UK | Antek" />
      <meta
        property="og:description"
        content="Hampshire-based AI automation agency in Andover — voice agents, chatbots and workflow automation for businesses across Hampshire and the UK. Book a free call."
      />
      <meta property="og:url" content="https://www.antekautomation.com/locations" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Antek Automation" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AI Automation Agency Hampshire & UK | Antek" />
      <meta
        name="twitter:description"
        content="Hampshire-based AI automation agency in Andover — voice agents, chatbots and workflow automation for businesses across Hampshire and the UK. Book a free call."
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.antekautomation.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Locations',
                item: 'https://www.antekautomation.com/locations',
              },
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
            name: 'Antek Automation',
            url: 'https://www.antekautomation.com',
            telephone: '+44-3330-389960',
            email: 'hello@antekautomation.com',
            founder: {
              '@type': 'Person',
              '@id': 'https://www.antekautomation.com/#founder',
              name: 'Andy Norman',
              sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Chantry House, 38 Chantry Way',
              addressLocality: 'Andover',
              addressRegion: 'Hampshire',
              postalCode: 'SP10 1LZ',
              addressCountry: 'GB',
            },
            areaServed: [
              { '@type': 'AdministrativeArea', name: 'Hampshire' },
              { '@type': 'AdministrativeArea', name: 'Southampton' },
              { '@type': 'AdministrativeArea', name: 'Andover' },
              { '@type': 'AdministrativeArea', name: 'London' },
              { '@type': 'AdministrativeArea', name: 'Birmingham' },
              { '@type': 'AdministrativeArea', name: 'Manchester' },
              { '@type': 'AdministrativeArea', name: 'Leeds' },
              { '@type': 'AdministrativeArea', name: 'Liverpool' },
              { '@type': 'AdministrativeArea', name: 'Glasgow' },
              { '@type': 'AdministrativeArea', name: 'Newcastle' },
            ],
            priceRange: '££',
            makesOffer: [
              {
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: 'AI Voice Agents' },
              },
              {
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: 'AI Chatbots' },
              },
              {
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: 'Workflow Automation' },
              },
              {
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: 'GEO Audit' },
              },
            ],
          }),
        }}
      />
    </>
  );
}
