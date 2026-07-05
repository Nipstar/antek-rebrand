export function Head() {
  return (
    <>
      <title>AI SEO Agency UK | AI Search Optimisation — Antek Automation</title>
      <meta
        name="description"
        content="AI SEO agency for UK businesses. Rank in Google and get cited in AI answers. AI-assisted content strategy, technical SEO and AI Overview optimisation. Free visibility check."
      />
      <link rel="canonical" href="https://www.antekautomation.com/services/ai-seo" />

      {/* Open Graph */}
      <meta property="og:title" content="AI SEO Agency UK | AI Search Optimisation — Antek Automation" />
      <meta
        property="og:description"
        content="AI SEO agency for UK businesses. Rank in Google and get cited in AI answers. AI-assisted content strategy, technical SEO and AI Overview optimisation. Free visibility check."
      />
      <meta property="og:url" content="https://www.antekautomation.com/services/ai-seo" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Antek Automation" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="AI SEO Agency UK | AI Search Optimisation — Antek Automation" />
      <meta
        name="twitter:description"
        content="AI SEO agency for UK businesses. Rank in Google and get cited in AI answers. AI-assisted content strategy, technical SEO and AI Overview optimisation. Free visibility check."
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.antekautomation.com/' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.antekautomation.com/#services' },
              { '@type': 'ListItem', position: 3, name: 'AI SEO', item: 'https://www.antekautomation.com/services/ai-seo' },
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
            name: 'AI SEO',
            description:
              'AI SEO is search optimisation built for the AI era: earning traditional Google rankings while also being surfaced in AI Overviews and cited by AI assistants such as ChatGPT, Perplexity and Gemini. Combines AI-assisted keyword and content strategy, content optimised for AI Overviews, technical SEO, generative engine optimisation and plain-English reporting.',
            provider: {
              '@type': 'Organization',
              '@id': 'https://www.antekautomation.com/#organization',
              name: 'Antek Automation',
              url: 'https://www.antekautomation.com',
            },
            areaServed: { '@type': 'Country', name: 'United Kingdom' },
            serviceType: 'AI SEO',
            url: 'https://www.antekautomation.com/services/ai-seo',
            offers: [
              { '@type': 'Offer', name: 'AI Visibility Check', price: '0', priceCurrency: 'GBP', description: 'Free AI Visibility Check — both halves of your search presence, in plain English, within 48 hours.' },
              { '@type': 'Offer', name: 'GEO Audit', price: '247', priceCurrency: 'GBP', description: 'One-off scored report with a prioritised fix list.' },
              { '@type': 'Offer', name: 'AI SEO Retainer', price: '497', priceCurrency: 'GBP', priceSpecification: { '@type': 'UnitPriceSpecification', price: '497', priceCurrency: 'GBP', unitText: 'MONTH' }, description: 'Monthly AI SEO retainer — strategy, content, technical work and reporting across Google and the AI engines. No long contracts.' },
            ],
            potentialAction: {
              '@type': 'ScheduleAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.antekautomation.com/services/ai-seo#visibility-check',
                actionPlatform: 'https://schema.org/DesktopWebPlatform',
              },
              description: 'Get a free AI Visibility Check',
            },
          }),
        }}
      />

      {/* FAQPage Schema — matches the on-page FAQ verbatim */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What’s the difference between an AI SEO agency and a traditional one?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A traditional agency optimises for Google’s ranked links. An AI SEO agency covers those and the AI-generated answers in ChatGPT, Perplexity, Gemini and AI Overviews — because your customers now use both.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need AI SEO or GEO?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'If you want one partner covering rankings and AI citations together, AI SEO. If you specifically want the citation work, our generative engine optimisation agency service is the focused option. The free check will tell you which gap is bigger.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can you work as an AI SEO consultant on a project basis?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Strategy projects and one-off implementations are available alongside the retainer.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do you report results?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Monthly, in plain English: rankings, AI citations, traffic and enquiries, with what changed and what we’re doing next. No jargon, no padding.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you cover London and the rest of the UK?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We’re based in Andover, Hampshire and work remote-first with clients across the UK, London included.',
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
            name: 'AI SEO Agency for UK Businesses — Antek Automation',
            url: 'https://www.antekautomation.com/services/ai-seo',
            author: {
              '@type': 'Person',
              '@id': 'https://www.antekautomation.com/#founder',
              name: 'Andy Norman',
              jobTitle: 'Founder',
              sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
            },
            keywords: [
              'AI SEO',
              'AI search optimisation',
              'AI Overview optimisation',
              'Technical SEO',
              'Content strategy',
              'Generative Engine Optimisation',
            ],
            about: [
              { '@type': 'Thing', name: 'Search engine optimization', sameAs: 'https://en.wikipedia.org/wiki/Search_engine_optimization' },
              { '@type': 'Thing', name: 'Generative engine optimization', sameAs: 'https://en.wikipedia.org/wiki/Generative_engine_optimization' },
              { '@type': 'Thing', name: 'Generative artificial intelligence', sameAs: 'https://en.wikipedia.org/wiki/Generative_artificial_intelligence' },
              { '@type': 'Thing', name: 'Large language model', sameAs: 'https://en.wikipedia.org/wiki/Large_language_model' },
              { '@type': 'Thing', name: 'ChatGPT', sameAs: 'https://en.wikipedia.org/wiki/ChatGPT' },
            ],
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', 'section p.text-lg'],
            },
          }),
        }}
      />
    </>
  );
}
