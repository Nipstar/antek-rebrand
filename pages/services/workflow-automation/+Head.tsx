export function Head() {
  return (
    <>
      <title>Workflow Automation for UK Business | Antek Automation</title>
      <meta
        name="description"
        content="We automate the admin that's burying you. CRM updates, email follow-ups, invoicing, data entry — all handled automatically with n8n. Based in Hampshire."
      />
      <link rel="canonical" href="https://www.antekautomation.com/services/workflow-automation" />

      {/* Open Graph */}
      <meta property="og:title" content="Workflow Automation for UK Business | Antek Automation" />
      <meta
        property="og:description"
        content="We automate the admin that's burying you. CRM updates, email follow-ups, invoicing, data entry — all handled automatically with n8n. Based in Hampshire."
      />
      <meta property="og:url" content="https://www.antekautomation.com/services/workflow-automation" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Antek Automation" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Workflow Automation for UK Business | Antek Automation" />
      <meta
        name="twitter:description"
        content="We automate the admin that's burying you. CRM updates, email follow-ups, invoicing, data entry — all handled automatically with n8n. Based in Hampshire."
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
                name: 'Services',
                item: 'https://www.antekautomation.com/#services',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Workflow Automation',
                item: 'https://www.antekautomation.com/services/workflow-automation',
              },
            ],
          }),
        }}
      />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Workflow Automation',
            description:
              'Custom n8n workflow automation for UK businesses. We automate CRM updates, email follow-ups, invoicing, and data entry to save you 10-20 hours a week.',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Antek Automation',
              url: 'https://www.antekautomation.com',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'Hampshire',
                addressCountry: 'GB',
              },
            },
            areaServed: {
              '@type': 'Country',
              name: 'United Kingdom',
            },
            serviceType: 'Workflow Automation',
            url: 'https://www.antekautomation.com/services/workflow-automation',
            potentialAction: {
              '@type': 'ScheduleAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.antekautomation.com/contact',
                actionPlatform: 'https://schema.org/DesktopWebPlatform',
              },
              description: 'Book a free consultation',
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
                name: 'How much does workflow automation cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Automations start from £250. The exact cost depends on the number of workflows, integrations, and complexity. We offer a free automation audit to scope your needs and give you a clear quote.',
                },
              },
              {
                '@type': 'Question',
                name: "What's n8n and why do you use it instead of Zapier?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "n8n is open-source automation software. Unlike Zapier, you own your workflows — there's no per-task pricing and no vendor lock-in. If you stop working with us, your automations keep running. You're not renting them.",
                },
              },
              {
                '@type': 'Question',
                name: 'What tools can you connect?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: '400+ integrations out of the box — Google Workspace, Xero, Stripe, HubSpot, Slack, WhatsApp, Shopify, and more. If a tool has an API or webhook, we can connect it.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does it take to set up automations?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Simple workflows take 1–2 days. Complex multi-step processes with multiple integrations take 1–2 weeks. Every project starts with an audit so we understand exactly what needs automating.',
                },
              },
              {
                '@type': 'Question',
                name: 'What if my current process is a mess?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "That's fine — and common. We audit your processes first and recommend fixes before automating anything. We won't automate chaos. If something needs fixing first, we'll tell you honestly.",
                },
              },
            ],
          }),
        }}
      />
      {/* Speakable Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Workflow Automation for UK Businesses',
            url: 'https://www.antekautomation.com/services/workflow-automation',
            author: {
              '@type': 'Person',
              '@id': 'https://www.antekautomation.com/#founder',
              name: 'Andy Norman',
              jobTitle: 'Founder',
              sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
            },
            keywords: [
              'Workflow automation',
              'n8n automation',
              'Business process automation',
              'API integration',
              'CRM automation',
              'Invoice automation',
            ],
            about: [
              { '@type': 'Thing', name: 'Business process automation', sameAs: 'https://en.wikipedia.org/wiki/Business_process_automation' },
              { '@type': 'Thing', name: 'Robotic process automation', sameAs: 'https://en.wikipedia.org/wiki/Robotic_process_automation' },
              { '@type': 'Thing', name: 'n8n', sameAs: 'https://en.wikipedia.org/wiki/N8n' },
              { '@type': 'Thing', name: 'Workflow management system', sameAs: 'https://en.wikipedia.org/wiki/Workflow_management_system' },
            ],
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', 'section p.text-xl', 'section p.text-lg'],
            },
          }),
        }}
      />
    </>
  )
}
