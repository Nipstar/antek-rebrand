export function Head() {
  return (
    <>
      {/* Favicon and Icons */}
      <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#1A1A1A" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Antek Automation" />

      {/* Social Share Defaults — per-page +Head.tsx files override title/description/url */}
      <meta property="og:site_name" content="Antek Automation" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:image" content="https://www.antekautomation.com/og-image.png" />
      <meta property="og:image:secure_url" content="https://www.antekautomation.com/og-image.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Antek Automation — AI automation agency for UK businesses" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@AntekAutomation" />
      <meta name="twitter:creator" content="@AntekAutomation" />
      <meta name="twitter:image" content="https://www.antekautomation.com/og-image.png" />
      <meta name="twitter:image:alt" content="Antek Automation — AI automation agency for UK businesses" />

      {/* Performance — preconnect third-party origins used by lazy-loaded widgets */}
      <link rel="preload" as="image" href="/logo.svg" type="image/svg+xml" />
      <link rel="preconnect" href="https://app.cal.com" crossOrigin="" />
      <link rel="dns-prefetch" href="https://app.cal.com" />
      <link rel="dns-prefetch" href="https://www.clarity.ms" />
      <link rel="dns-prefetch" href="https://dashboard.retellai.com" />

      {/* Meta Pixel loads only after the visitor accepts cookies — see src/utils/metaPixel.ts */}
    </>
  )
}
