export function Head() {
  return (
    <>
      <title>Terms of Business | Antek Automation</title>
      <meta name="description" content="Terms of business for Antek Automation — AI voice agent, chatbot and workflow automation service agreements, payments, SLAs and data handling." />
      <link rel="canonical" href="https://www.antekautomation.com/terms-of-business" />

      {/* Open Graph */}
      <meta property="og:title" content="Terms of Business | Antek Automation" />
      <meta property="og:description" content="Terms of business for Antek Automation — AI voice agent, chatbot and workflow automation service agreements, payments, SLAs and data handling." />
      <meta property="og:url" content="https://www.antekautomation.com/terms-of-business" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Antek Automation" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Terms of Business | Antek Automation" />
      <meta name="twitter:description" content="Terms of business for Antek Automation — AI voice agent, chatbot and workflow automation service agreements, payments, SLAs and data handling." />

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
                name: 'Terms of Business',
                item: 'https://www.antekautomation.com/terms-of-business',
              },
            ],
          }),
        }}
      />
    </>
  );
}
