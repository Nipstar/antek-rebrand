export function Head() {
  return (
    <>
      <title>AI Voice Agents UK | Speed-to-Lead &amp; Customer Service</title>
      <meta
        name="description"
        content="Custom AI voice agents that call leads back in seconds, qualify and book them, and handle customer service. Inbound and outbound. Certified Retell partner."
      />
      <link rel="canonical" href="https://www.antekautomation.com/services/ai-voice-assistants" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Voice Agents UK | Speed-to-Lead & Customer Service" />
      <meta
        property="og:description"
        content="Custom AI voice agents that call leads back in seconds, qualify and book them, and handle customer service. Inbound and outbound. Certified Retell partner."
      />
      <meta property="og:url" content="https://www.antekautomation.com/services/ai-voice-assistants" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Antek Automation" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AI Voice Agents UK | Speed-to-Lead & Customer Service" />
      <meta
        name="twitter:description"
        content="Custom AI voice agents that call leads back in seconds, qualify and book them, and handle customer service. Inbound and outbound. Certified Retell partner."
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
                name: 'AI Voice Assistants',
                item: 'https://www.antekautomation.com/services/ai-voice-assistants',
              },
            ],
          }),
        }}
      />

      {/* Service Schema — distinct from the AI Receptionist (broader, inbound + outbound) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            '@id': 'https://www.antekautomation.com/services/ai-voice-assistants#service',
            name: 'AI Voice Agents',
            serviceType: 'AI voice agent',
            description:
              'Custom AI voice agents for UK businesses that call new leads back in seconds, qualify and book them, confirm appointments, follow up on quotes and handle routine customer service. Inbound and outbound, around the clock.',
            url: 'https://www.antekautomation.com/services/ai-voice-assistants',
            provider: { '@id': 'https://www.antekautomation.com/#organization' },
            areaServed: { '@type': 'Country', name: 'United Kingdom' },
            offers: {
              '@type': 'Offer',
              price: '97',
              priceCurrency: 'GBP',
              url: 'https://www.antekautomation.com/pricing#ai-voice-assistant',
              priceSpecification: {
                '@type': 'UnitPriceSpecification',
                price: '97',
                priceCurrency: 'GBP',
                referenceQuantity: { '@type': 'QuantitativeValue', value: '1', unitCode: 'MON' },
              },
            },
          }),
        }}
      />

      {/* FAQPage Schema — must match the six questions rendered on the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            '@id': 'https://www.antekautomation.com/services/ai-voice-assistants#faq',
            mainEntity: [
              {
                '@type': 'Question',
                name: "What's the difference between a voice agent and your AI Receptionist?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The AI Receptionist is our productised inbound product that answers, screens and books incoming calls. A voice agent is the broader, bespoke build: it does that plus outbound work like speed-to-lead callbacks, appointment reminders, follow-ups and customer service. If you just need calls answered, start with the Receptionist.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can it make outbound calls, not just answer them?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. That is the main thing that sets it apart. It calls leads back, confirms appointments, chases quotes and follows up after jobs, triggered by your forms, your CRM or a schedule.',
                },
              },
              {
                '@type': 'Question',
                name: 'How fast can it call a new lead back?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Within seconds of the lead coming in. The moment a form is submitted or a call is missed, the agent rings them back while they are still interested.',
                },
              },
              {
                '@type': 'Question',
                name: "Will callers know they're talking to AI?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'About 1 in 20 notice. The voice is natural. If someone wants a person, it transfers them to you or takes a message.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does it integrate with?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Google Calendar, Outlook, Calendly, and most CRMs and field-service tools via API or webhook. Outbound calls can be triggered straight from your existing systems.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much does an AI voice agent cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'From £97/month with a £249 setup. Bespoke outbound and multi-step builds are scoped on a quick call. See the pricing page for detail.',
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
            name: 'AI Voice Agents for UK Businesses',
            url: 'https://www.antekautomation.com/services/ai-voice-assistants',
            about: [
              { '@type': 'Thing', name: 'Virtual assistant', sameAs: 'https://en.wikipedia.org/wiki/Virtual_assistant' },
              { '@type': 'Thing', name: 'Speech recognition', sameAs: 'https://en.wikipedia.org/wiki/Speech_recognition' },
              { '@type': 'Thing', name: 'Interactive voice response', sameAs: 'https://en.wikipedia.org/wiki/Interactive_voice_response' },
              { '@type': 'Thing', name: 'Natural language processing', sameAs: 'https://en.wikipedia.org/wiki/Natural_language_processing' },
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
