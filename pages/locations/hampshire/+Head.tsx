export function Head() {
  return (
    <>
      <title>AI Agency Hampshire | Voice Agents &amp; Automation | Antek</title>
      <meta name="description" content="Andover-based AI agency for Hampshire businesses. Voice agents, chatbots and automation that answer calls, reply online and chase follow-ups. Book a free call." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/hampshire" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Agency Hampshire | Voice Agents & Automation | Antek" />
      <meta property="og:description" content="Andover-based AI agency for Hampshire businesses. Voice agents, chatbots and automation that answer calls, reply online and chase follow-ups. Book a free call." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/hampshire" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Agency Hampshire | Voice Agents & Automation | Antek" />
      <meta name="twitter:description" content="Andover-based AI agency for Hampshire businesses. Voice agents, chatbots and automation that answer calls, reply online and chase follow-ups. Book a free call." />

      {/* JSON-LD @graph — references the canonical #organization node (no per-page org/LocalBusiness) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://www.antekautomation.com/locations/hampshire#service',
                name: 'AI Automation Services in Hampshire',
                serviceType: 'AI automation',
                url: 'https://www.antekautomation.com/locations/hampshire',
                provider: { '@id': 'https://www.antekautomation.com/#organization' },
                areaServed: {
                  '@type': 'AdministrativeArea',
                  name: 'Hampshire',
                  sameAs: ['https://en.wikipedia.org/wiki/Hampshire', 'https://www.wikidata.org/wiki/Q23204'],
                  containedInPlace: {
                    '@type': 'Country',
                    name: 'United Kingdom',
                    sameAs: 'https://en.wikipedia.org/wiki/United_Kingdom',
                  },
                },
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'AI Services in Hampshire',
                  itemListElement: [
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'AI as a Service (AIaaS)',
                        alternateName: ['AIaaS', 'Artificial Intelligence as a Service'],
                        description: 'Fully managed AI voice agents, chatbots and workflow automation delivered as a monthly subscription for Hampshire businesses.',
                      },
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Agentic AI Deployment',
                        alternateName: ['Agentic AI'],
                        description: 'AI agents that take action after the conversation: booking appointments, updating CRM records and triggering follow-ups.',
                      },
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'AI Contact Centre',
                        alternateName: ['CCaaS', 'Contact Centre as a Service'],
                        description: 'Unified AI handling of inbound calls, web chat and follow-up for Hampshire service businesses.',
                      },
                    },
                  ],
                },
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.antekautomation.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.antekautomation.com/locations' },
                  { '@type': 'ListItem', position: 3, name: 'Hampshire', item: 'https://www.antekautomation.com/locations/hampshire' },
                ],
              },
              {
                '@type': 'FAQPage',
                about: [
                  { '@type': 'Place', name: 'South Downs', sameAs: 'https://en.wikipedia.org/wiki/South_Downs' },
                  { '@type': 'Place', name: 'New Forest', sameAs: 'https://en.wikipedia.org/wiki/New_Forest' },
                ],
                mainEntity: [
              {
                '@type': 'Question',
                name: 'Can I meet you in person?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Absolutely \u2014 we're based in Andover, so if you're anywhere in Hampshire we're happy to meet for a coffee. That said, most of our Hampshire clients prefer video calls because it's faster and more convenient. Either way works.",
                },
              },
              {
                '@type': 'Question',
                name: 'Do you work with tradespeople in rural Hampshire?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes. Some of our best-performing voice agents are for trades businesses covering rural areas \u2014 exactly the kind of businesses where you're most likely to miss calls because you're mid-job with no signal. The AI catches everything you can't.",
                },
              },
              {
                '@type': 'Question',
                name: 'What areas of Hampshire do you cover?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "All of it — we've got dedicated pages for Andover, Basingstoke, Winchester, Southampton and Portsmouth. Our AI solutions work remotely, so there are no geographic limitations.",
                },
              },
              {
                '@type': 'Question',
                name: 'How quickly can you set up an AI voice agent for my Hampshire business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most voice agents and chatbots are live within 24–48 hours of you forwarding your number or giving us website access. For Hampshire businesses, we can usually do a face-to-face kickoff the same week if you prefer.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does it cost for a Hampshire business?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI voice agents and chatbots start from £57/month. Most Hampshire businesses recover that within the first few captured calls. See full pricing, or book a free call for an exact quote.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is AI as a service (AIaaS)?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You rent the outcome rather than buying the technology. We build, host and maintain the AI agent, and you pay monthly from £57. No developers to hire, no platform licences, no long build.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is agentic AI, and do you provide it in Hampshire?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. An agentic AI does something after the conversation ends: books the job, updates your CRM, chases the confirmation. A chatbot that only answers questions is not agentic.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you provide AI contact centre services in Hampshire?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Calls, web chat and follow-ups handled in one place, without running a contact centre. Suited to firms taking roughly fifty calls a week or more.',
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
