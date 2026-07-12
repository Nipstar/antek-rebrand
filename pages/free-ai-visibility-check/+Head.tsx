const URL = 'https://www.antekautomation.com/free-ai-visibility-check';
const TITLE = 'Free AI Visibility Check for UK Businesses | Antek Automation';
const DESC =
  'See whether ChatGPT, Perplexity, Gemini and Google AI Overviews name your business or your competitors. Free automated AI visibility check, scored report by email in about 15 minutes. No call.';

const FAQS: [string, string][] = [
  ['Is it really free?', 'Yes. It is automated. It costs us pennies to run.'],
  [
    'What is the catch?',
    'The report shows what needs fixing. If you want help fixing it we sell audits. No pressure either way.',
  ],
  ['Will you call me?', 'No. The report arrives by email. You reply if you want to talk.'],
  [
    'What is GEO?',
    'Generative Engine Optimisation. Getting your business named in AI answers, not just ranked in Google.',
  ],
  ['How long does it take?', 'Usually 15 minutes. Complex sites can take longer.'],
  ['Who is behind this?', 'Antek Automation, Andover. AI automation for UK businesses.'],
];

export function Head() {
  return (
    <>
      <title>{TITLE}</title>
      <meta name="description" content={DESC} />
      <link rel="canonical" href={URL} />

      {/* Open Graph */}
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESC} />
      <meta property="og:url" content={URL} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Antek Automation" />
      <meta property="og:image" content="https://www.antekautomation.com/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESC} />
      <meta name="twitter:image" content="https://www.antekautomation.com/og-image.png" />

      {/* BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.antekautomation.com/' },
              { '@type': 'ListItem', position: 2, name: 'Free AI Visibility Check', item: URL },
            ],
          }),
        }}
      />

      {/* Service — the free check offer */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Visibility Check',
            description:
              'A free automated check of whether AI engines — ChatGPT, Perplexity, Gemini and Google AI Overviews — name a business or its competitors for its service and town. Delivered as a scored report by email, with the top fixes.',
            provider: {
              '@type': 'Organization',
              '@id': 'https://www.antekautomation.com/#organization',
              name: 'Antek Automation',
              url: 'https://www.antekautomation.com',
            },
            areaServed: { '@type': 'Country', name: 'United Kingdom' },
            serviceType: 'AI visibility check',
            url: URL,
            offers: {
              '@type': 'Offer',
              name: 'Free AI Visibility Check',
              price: '0',
              priceCurrency: 'GBP',
              description:
                'Free AI Visibility Check — where you stand across the AI engines, in plain English, by email in about 15 minutes. No call, no obligation.',
            },
            potentialAction: {
              '@type': 'ScheduleAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: `${URL}#visibility-check`,
                actionPlatform: 'https://schema.org/DesktopWebPlatform',
              },
              description: 'Run a free AI Visibility Check',
            },
          }),
        }}
      />

      {/* FAQPage — matches the on-page FAQ verbatim */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: FAQS.map(([q, a]) => ({
              '@type': 'Question',
              name: q,
              acceptedAnswer: { '@type': 'Answer', text: a },
            })),
          }),
        }}
      />

      {/* WebPage + Speakable */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: TITLE,
            url: URL,
            description: DESC,
            author: {
              '@type': 'Person',
              '@id': 'https://www.antekautomation.com/#founder',
              name: 'Andy Norman',
              jobTitle: 'Founder',
              sameAs: ['https://www.linkedin.com/in/andy-norman-ab78443a1'],
            },
            keywords: [
              'AI visibility check',
              'Generative Engine Optimisation',
              'ChatGPT citations',
              'AI search visibility',
              'AI Overviews',
            ],
            about: [
              { '@type': 'Thing', name: 'Generative engine optimization', sameAs: 'https://en.wikipedia.org/wiki/Generative_engine_optimization' },
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
