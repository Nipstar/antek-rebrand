import { getIndustryHeadData } from '../../../src/data/aiReceptionist'

export function Head() {
  const h = getIndustryHeadData('property-management')
  return (
    <>
      <title>{h.title}</title>
      <meta name="description" content={h.description} />
      <link rel="canonical" href={h.canonical} />
      <meta property="og:title" content={h.title} />
      <meta property="og:description" content={h.description} />
      <meta property="og:url" content={h.canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Antek Automation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={h.title} />
      <meta name="twitter:description" content={h.description} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(h.breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(h.serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(h.faqSchema) }} />
    </>
  )
}
