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
    </>
  );
}
