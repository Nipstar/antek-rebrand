export function Head() {
  return (
    <>
      <title>AI Automation Winchester | Voice Agents &amp; Chatbots | Antek</title>
      <meta name="description" content="Stop letting Winchester enquiries hit voicemail. AI voice agents and automation for firms, practices and trades, from a founder near Andover. Book a call." />
      <link rel="canonical" href="https://www.antekautomation.com/locations/winchester" />

      {/* Open Graph */}
      <meta property="og:title" content="AI Automation Winchester | Voice Agents & Chatbots | Antek" />
      <meta property="og:description" content="Stop letting Winchester enquiries hit voicemail. AI voice agents and automation for firms, practices and trades, from a founder near Andover. Book a call." />
      <meta property="og:url" content="https://www.antekautomation.com/locations/winchester" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:title" content="AI Automation Winchester | Voice Agents & Chatbots | Antek" />
      <meta name="twitter:description" content="Stop letting Winchester enquiries hit voicemail. AI voice agents and automation for firms, practices and trades, from a founder near Andover. Book a call." />

      {/* JSON-LD @graph — references the canonical #organization node (no per-page org/LocalBusiness) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://www.antekautomation.com/locations/winchester#service',
                name: 'AI Automation Services in Winchester',
                serviceType: 'AI automation',
                url: 'https://www.antekautomation.com/locations/winchester',
                provider: { '@id': 'https://www.antekautomation.com/#organization' },
                areaServed: {
                  '@type': 'City',
                  name: 'Winchester',
                  sameAs: ['https://en.wikipedia.org/wiki/Winchester', 'https://www.wikidata.org/wiki/Q172157'],
                  containedInPlace: {
                    '@type': 'AdministrativeArea',
                    name: 'Hampshire',
                    sameAs: ['https://en.wikipedia.org/wiki/Hampshire', 'https://www.wikidata.org/wiki/Q23204'],
                  },
                },
                about: [
                  { '@type': 'Place', name: 'Winchester Cathedral', sameAs: 'https://en.wikipedia.org/wiki/Winchester_Cathedral' },
                  { '@type': 'Place', name: 'South Downs', sameAs: 'https://en.wikipedia.org/wiki/South_Downs' },
                ],
              },
              {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.antekautomation.com/' },
                  { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.antekautomation.com/locations' },
                  { '@type': 'ListItem', position: 3, name: 'Hampshire', item: 'https://www.antekautomation.com/locations/hampshire' },
                  { '@type': 'ListItem', position: 4, name: 'Winchester', item: 'https://www.antekautomation.com/locations/winchester' },
                ],
              },
              {
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: 'Do you work with Winchester law firms and accountants?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes — professional firms are a natural fit. An AI voice agent screens after-hours enquiries, captures the details and books the consultation, so a new client never hits voicemail. The same setup handles the year-end and onboarding admin that buries accountants.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Do I need to be in Winchester for this to work?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'No. Everything runs remotely — setup, testing and support all happen over video call. Your AI voice agent answers Winchester enquiries from the cloud, whether your office is on the High Street, in Winnall, or anywhere else.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can you handle hospitality booking calls?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Yes. A restaurant trying to take bookings between services is exactly the pattern voice agents are built for — the AI takes the booking, answers the common questions and handles the peaks so your staff can focus on the room.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'Can we meet in person?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'We’re 30 minutes away in Andover, so a face-to-face is straightforward if you’d prefer to start that way. Most Winchester clients are happy on video call, but the option’s there whenever it genuinely helps.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: 'How much does it cost and how quickly can I start?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'AI voice agents and chatbots start from £57/month, and most are live within 24–48 hours of you forwarding your number or giving us website access. For a Winchester practice winning even one extra instruction a month, the return is usually clear quickly.',
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
