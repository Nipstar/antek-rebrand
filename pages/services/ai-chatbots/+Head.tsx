export function Head() {
  return (
    <>
      <title>AI Chatbots for UK Business | Antek Automation</title>
      <meta
        name="description"
        content="Custom-trained AI chatbots that answer customer questions, capture leads & book appointments on your website 24/7. Works on any platform. Try a demo."
      />
      <link rel="canonical" href="https://www.antekautomation.com/services/ai-chatbots" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Chatbots for UK Business | Antek Automation" />
      <meta
        property="og:description"
        content="Custom-trained AI chatbots that answer customer questions, capture leads & book appointments on your website 24/7. Works on any platform. Try a demo."
      />
      <meta property="og:url" content="https://www.antekautomation.com/services/ai-chatbots" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Antek Automation" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AI Chatbots for UK Business | Antek Automation" />
      <meta
        name="twitter:description"
        content="Custom-trained AI chatbots that answer customer questions, capture leads & book appointments on your website 24/7. Works on any platform. Try a demo."
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
                name: 'AI Chatbots',
                item: 'https://www.antekautomation.com/services/ai-chatbots',
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
            name: 'AI Chatbots',
            description:
              'Custom-trained AI chatbots that answer customer questions, capture leads and book appointments on your website 24/7 for UK businesses.',
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
            serviceType: 'AI Chatbot',
            url: 'https://www.antekautomation.com/services/ai-chatbots',
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
                name: 'How much does an AI chatbot cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Setup starts from £149, with monthly plans from £57/month. The exact pricing depends on features, integrations, and complexity. We offer a free consultation to scope your needs and give you a clear quote — no hidden fees.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can it integrate with my CRM or booking system?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. It connects to HubSpot, Google Calendar, Calendly, and most tools via API or webhook. Lead details flow straight into your existing systems without any manual copying.',
                },
              },
              {
                '@type': 'Question',
                name: 'What percentage of conversations can it handle?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'About 80% of conversations are handled autonomously — common questions, lead capture, appointment booking. The other 20% (complex queries, complaints, edge cases) get flagged for your team to follow up.',
                },
              },
              {
                '@type': 'Question',
                name: 'Will it sound like a generic bot?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "No. It's trained on your business — your services, pricing, availability, and tone of voice. It answers like someone who actually works there, not a generic FAQ widget.",
                },
              },
              {
                '@type': 'Question',
                name: 'Can visitors still talk to a real person?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. During office hours the chatbot can hand over to your team for a live conversation. Outside hours it captures the visitor\'s details so you can call them back.',
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
            name: 'AI Chatbots for UK Businesses',
            url: 'https://www.antekautomation.com/services/ai-chatbots',
            author: {
              '@type': 'Person',
              '@id': 'https://www.antekautomation.com/#founder',
              name: 'Andy Norman',
              jobTitle: 'Founder',
              sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
            },
            keywords: [
              'AI chatbots',
              'Website lead capture',
              'Conversational AI',
              'Live chat automation',
              'Appointment booking chatbots',
              'Customer service automation',
            ],
            about: [
              { '@type': 'Thing', name: 'Chatbot', sameAs: 'https://en.wikipedia.org/wiki/Chatbot' },
              { '@type': 'Thing', name: 'Virtual assistant', sameAs: 'https://en.wikipedia.org/wiki/Virtual_assistant' },
              { '@type': 'Thing', name: 'Natural language processing', sameAs: 'https://en.wikipedia.org/wiki/Natural_language_processing' },
              { '@type': 'Thing', name: 'Large language model', sameAs: 'https://en.wikipedia.org/wiki/Large_language_model' },
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
