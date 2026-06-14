export function Head() {
  return (
    <>
      <title>AI Voice Agents UK | 24/7 Call Answering | Antek Automation</title>
      <meta
        name="description"
        content="AI voice agents that answer every call, qualify leads and book appointments 24/7. Built for UK service businesses. Certified Retell AI partner."
      />
      <link rel="canonical" href="https://www.antekautomation.com/services/ai-voice-assistants" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Voice Agents UK | 24/7 Call Answering | Antek Automation" />
      <meta
        property="og:description"
        content="AI voice agents that answer every call, qualify leads and book appointments 24/7. Built for UK service businesses. Certified Retell AI partner."
      />
      <meta property="og:url" content="https://www.antekautomation.com/services/ai-voice-assistants" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Antek Automation" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AI Voice Agents UK | 24/7 Call Answering | Antek Automation" />
      <meta
        name="twitter:description"
        content="AI voice agents that answer every call, qualify leads and book appointments 24/7. Built for UK service businesses. Certified Retell AI partner."
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

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Voice Agents',
            description:
              'AI voice agents that answer calls 24/7, book appointments and qualify leads for UK businesses. Sounds natural, works with your calendar.',
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
            serviceType: 'AI Voice Agent',
            url: 'https://www.antekautomation.com/services/ai-voice-assistants',
            author: {
              '@type': 'Person',
              '@id': 'https://www.antekautomation.com/#founder',
              name: 'Andy Norman',
              jobTitle: 'Founder',
              sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
            },
            knowsAbout: [
              'AI voice agents',
              'Phone answering automation',
              'Call handling AI',
              'Appointment booking automation',
              'Retell AI',
              'Conversational AI',
            ],
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

      {/* HowTo Schema — "Here's What Happens When Someone Rings You" */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            '@id': 'https://www.antekautomation.com/services/ai-voice-assistants#how-it-works',
            name: "Here's What Happens When Someone Rings You",
            description:
              'From the moment the phone rings to the moment you get a summary in your pocket. The whole thing takes about two minutes.',
            inLanguage: 'en-GB',
            step: [
              {
                '@type': 'HowToStep',
                position: 1,
                name: 'The Phone Rings',
                text: 'Someone calls your business number. Your AI agent picks up within two rings. No hold music. No "press 1 for sales." Just a friendly, natural-sounding voice.',
              },
              {
                '@type': 'HowToStep',
                position: 2,
                name: 'It Has a Proper Conversation',
                text: 'The AI asks what they need, answers questions about your services, pricing, and availability. It is trained on your business, so it actually knows what it is talking about.',
              },
              {
                '@type': 'HowToStep',
                position: 3,
                name: 'It Captures Their Details',
                text: 'Name, number, email, what they need, when they need it. All collected naturally during the conversation, not through some robotic questionnaire.',
              },
              {
                '@type': 'HowToStep',
                position: 4,
                name: 'It Books the Appointment',
                text: 'Connected to your calendar, so it checks your real availability and books them in. They get a confirmation text or email straight away.',
              },
              {
                '@type': 'HowToStep',
                position: 5,
                name: 'You Get a Summary',
                text: 'Within seconds, you get a text or email with everything: who called, what they want, their contact details, and when they are booked in. Check it when you are ready.',
              },
            ],
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
                name: 'How much does an AI voice agent cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Setup starts from £249, with monthly plans from £97/month. The exact cost depends on complexity, call volume, and what integrations you need (calendar, CRM, etc.). We offer a free consultation to scope your requirements and give you an honest quote.',
                },
              },
              {
                '@type': 'Question',
                name: "Will callers know they're talking to AI?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "About 1 in 20 callers notice. The voice sounds natural and conversational — most people assume they're speaking to a receptionist. If someone does ask for a real person, the AI can transfer them to you or take a message.",
                },
              },
              {
                '@type': 'Question',
                name: 'Can it book appointments into my calendar?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. It connects to Google Calendar, Outlook, Calendly, and other scheduling tools. It checks your real availability, books the caller in, and sends them a confirmation automatically.',
                },
              },
              {
                '@type': 'Question',
                name: "What happens if the AI can't answer a question?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "It takes the caller's details and flags it for you to follow up. It won't make things up or try to blag its way through something it shouldn't. You get a notification with the caller's name, number, and what they asked about.",
                },
              },
              {
                '@type': 'Question',
                name: 'How long does it take to set up?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Typically 5–7 working days from kickoff. We spend that time training the AI on your business — your services, pricing, processes, and FAQs — so it handles calls properly from day one.',
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
