export function Head() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://www.antekautomation.com/#founder',
    name: 'Andy Norman',
    jobTitle: 'Founder',
    image: 'https://www.antekautomation.com/andy-norman.webp',
    description:
      'Founder of Antek Automation with 30+ years in technology. Background in Managed Print Services as technician, service manager, and print management solutions specialist. Now building AI voice agents, chatbots, and workflow automation for UK businesses.',
    worksFor: {
      '@type': 'Organization',
      '@id': 'https://www.antekautomation.com/#organization',
      name: 'Antek Automation',
      url: 'https://www.antekautomation.com',
      foundingDate: '2024',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: 1,
      },
    },
    sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
    knowsAbout: [
      'AI automation',
      'AI chatbots',
      'Voice AI',
      'Workflow automation',
      'Business process automation',
      'Conversational AI',
      'Managed Print Services',
      'Service management',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'certification',
      name: 'Certified Retell AI Partner',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Retell AI',
        url: 'https://www.retellai.com',
      },
    },
  };

  const breadcrumbSchema = {
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
        name: 'About',
        item: 'https://www.antekautomation.com/about',
      },
    ],
  };

  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://www.antekautomation.com/about',
    name: 'About Antek Automation',
    description:
      'Antek Automation is an AI automation agency based in Andover, Hampshire, founded by Andy Norman. 30+ years in technology, Certified Retell AI Partner, building AI voice agents, chatbots and workflow automation for UK businesses.',
    url: 'https://www.antekautomation.com/about',
    mainEntity: {
      '@id': 'https://www.antekautomation.com/#founder',
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://www.antekautomation.com/#website',
      name: 'Antek Automation',
      url: 'https://www.antekautomation.com',
    },
  };

  return (
    <>
      <title>About Antek Automation | AI Automation Agency UK</title>
      <meta
        name="description"
        content="Meet Andy Norman, founder of Antek Automation. 30+ years in tech, Certified Retell AI Partner, building AI voice agents and chatbots for UK businesses."
      />
      <link rel="canonical" href="https://www.antekautomation.com/about" />

      {/* Open Graph */}
      <meta property="og:title" content="About Antek Automation | AI Automation Agency UK" />
      <meta
        property="og:description"
        content="Meet Andy Norman, founder of Antek Automation. 30+ years in tech, Certified Retell AI Partner, building AI voice agents and chatbots for UK businesses."
      />
      <meta property="og:url" content="https://www.antekautomation.com/about" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Antek Automation" />

      {/* Open Graph image */}
      <meta property="og:image" content="https://www.antekautomation.com/og-image.png" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Antek Automation | AI Automation Agency UK" />
      <meta
        name="twitter:description"
        content="Meet Andy Norman, founder of Antek Automation. 30+ years in tech, Certified Retell AI Partner, building AI voice agents and chatbots for UK businesses."
      />
      <meta name="twitter:image" content="https://www.antekautomation.com/og-image.png" />

      {/* AboutPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      {/* Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
