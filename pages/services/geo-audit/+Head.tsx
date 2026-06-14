export function Head() {
  return (
    <>
      <title>GEO Audit | Cited by ChatGPT &amp; AI Search | Antek Automation</title>
      <meta
        name="description"
        content="Is AI recommending you or your competitors? Our GEO audit checks your visibility in ChatGPT, Perplexity & Google AI Overviews. From £247, UK-wide."
      />
      <link rel="canonical" href="https://www.antekautomation.com/services/geo-audit" />

      {/* Open Graph */}
      <meta property="og:title" content="GEO Audit | Cited by ChatGPT & AI Search | Antek Automation" />
      <meta
        property="og:description"
        content="Is AI recommending you or your competitors? Our GEO audit checks your visibility in ChatGPT, Perplexity & Google AI Overviews. From £247, UK-wide."
      />
      <meta property="og:url" content="https://www.antekautomation.com/services/geo-audit" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Antek Automation" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="GEO Audit | Cited by ChatGPT & AI Search | Antek Automation" />
      <meta
        name="twitter:description"
        content="Is AI recommending you or your competitors? Our GEO audit checks your visibility in ChatGPT, Perplexity & Google AI Overviews. From £247, UK-wide."
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
                name: 'GEO Audit',
                item: 'https://www.antekautomation.com/services/geo-audit',
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
            name: 'GEO Audit',
            description:
              'Generative Engine Optimisation audit assessing your business visibility in AI-generated search results from ChatGPT, Perplexity, Google AI Overviews and Claude. Includes technical setup review, content structure analysis, citation readiness scoring and prioritised action plan.',
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
            serviceType: 'GEO Audit',
            url: 'https://www.antekautomation.com/services/geo-audit',
            author: {
              '@type': 'Person',
              '@id': 'https://www.antekautomation.com/#founder',
              name: 'Andy Norman',
              jobTitle: 'Founder',
              sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
            },
            knowsAbout: [
              'Generative Engine Optimisation',
              'AI search visibility',
              'ChatGPT citations',
              'Schema markup',
              'Content structure for AI',
              'AI crawler optimisation',
            ],
            offers: [
              {
                '@type': 'Offer',
                name: 'Quick Check',
                price: '247',
                priceCurrency: 'GBP',
                description: 'AI visibility test across 4 platforms, 10 real customer prompts tested, citation readiness score, top 5 priorities, Loom video walkthrough + 1-page PDF. Delivered within 24 hours.',
              },
              {
                '@type': 'Offer',
                name: 'Full Audit',
                price: '497',
                priceCurrency: 'GBP',
                description: 'Everything in Quick Check plus full technical crawlability review, schema audit, content structure analysis, 3 competitor benchmarks, 30+ test prompts, effort/impact action plan, PDF report + 30-min video walkthrough. Delivered within 24 hours.',
              },
              {
                '@type': 'AggregateOffer',
                name: 'Audit + Fix',
                lowPrice: '997',
                priceCurrency: 'GBP',
                offerCount: '1',
                description: 'Full Audit included plus hands-on implementation: schema deployment, content restructuring, llms.txt setup, directory submissions, re-test to measure improvement. Final price scoped to site size and complexity.',
              },
            ],
            potentialAction: {
              '@type': 'ScheduleAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://www.antekautomation.com/contact',
                actionPlatform: 'https://schema.org/DesktopWebPlatform',
              },
              description: 'Book a free AI visibility check',
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
                name: 'What is a GEO audit?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A GEO audit assesses how visible your business is in AI-generated search results from ChatGPT, Perplexity, Google AI Overviews and Claude. It evaluates your technical setup, content structure, authority signals and citation readiness, then provides a prioritised action plan.',
                },
              },
              {
                '@type': 'Question',
                name: 'How is GEO different from SEO?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "SEO focuses on ranking in Google's traditional results. GEO focuses on getting cited in AI-generated answers. AI engines prioritise content clarity, structured data and extractable statements over keyword density and backlink volume.",
                },
              },
              {
                '@type': 'Question',
                name: 'How long does a GEO audit take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'All audits delivered within 24 hours. Ongoing fixes are handled through the monthly GEO retainer.',
                },
              },
              {
                '@type': 'Question',
                name: 'Which AI platforms do you test?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'ChatGPT (including ChatGPT Search), Perplexity, Google AI Overviews, Claude and Gemini. We use real prompts your customers would actually type.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need GEO if I already rank well on Google?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes. Many businesses rank well in Google's blue links but are completely absent from AI-generated answers. GEO and SEO complement each other, but they're different disciplines.",
                },
              },
              {
                '@type': 'Question',
                name: 'What size business is this for?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "We've priced this for small businesses and SMBs — sole traders through to companies with up to 50 staff. If you're spending money on Google Ads or SEO but haven't thought about AI search yet, this is for you.",
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
            name: 'GEO Audit — AI Search Visibility for UK Businesses',
            url: 'https://www.antekautomation.com/services/geo-audit',
            speakable: {
              '@type': 'SpeakableSpecification',
              cssSelector: ['h1', 'section p.text-xl', 'section p.text-lg'],
            },
          }),
        }}
      />
    </>
  );
}
