import { Suspense, lazy, useEffect, useState } from 'react'
import { Navigation } from '../src/components/Navigation'
import { Footer } from '../src/components/Footer'
import { CookieConsent } from '../src/components/CookieConsent'
import { StickyMobileCTA } from '../src/components/StickyMobileCTA'
import { grantAnalyticsConsent, initializeGoogleAnalytics, revokeAnalyticsConsent, trackPageView } from '../src/utils/analytics'
import { grantClarityConsent, initializeClarity, tagClarityPage } from '../src/utils/clarity'
import { initializeMetaPixel } from '../src/utils/metaPixel'
import { getStoredConsent } from '../src/utils/consent'
// Self-hosted brand fonts (no third-party CDN). Outfit display, DM Sans body,
// JetBrains Mono labels. See docs/ANTEK-BRAND-GUIDELINES.md §3.
import '@fontsource/outfit/700.css'
import '@fontsource/outfit/800.css'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/dm-sans/700.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/700.css'
import '../src/index.css'

const ChatbotWidget = lazy(() =>
  import('../src/components/ChatbotWidget').then((m) => ({ default: m.ChatbotWidget }))
)
const BookingPopupCTA = lazy(() =>
  import('../src/components/BookingPopupCTA').then((m) => ({ default: m.BookingPopupCTA }))
)

export function Layout({ children }: { children: React.ReactNode }) {
  const [chatbotReady, setChatbotReady] = useState(false)

  useEffect(() => {
    const gtagId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID
    if (gtagId) {
      // Loads GA with Consent Mode v2 default-denied. Safe to run on first visit;
      // analytics_storage stays denied until the user clicks Accept.
      initializeGoogleAnalytics(gtagId)
    }
    trackPageView(window.location.pathname || '/')

    const clarityId = import.meta.env.VITE_CLARITY_ID
    if (clarityId) {
      initializeClarity(clarityId)
      tagClarityPage({ page_path: window.location.pathname || '/' })
    }

    // If the user already accepted on a prior visit, load Meta Pixel now.
    if (getStoredConsent() === 'accepted') {
      initializeMetaPixel()
    }

    // React to consent decisions made later in the session.
    const onConsentChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as 'accepted' | 'rejected' | null
      if (detail === 'accepted') {
        grantAnalyticsConsent()
        grantClarityConsent()
        initializeMetaPixel()
      } else if (detail === 'rejected') {
        revokeAnalyticsConsent()
      }
    }
    window.addEventListener('cookie-consent-change', onConsentChange)
    return () => window.removeEventListener('cookie-consent-change', onConsentChange)
  }, [])

  // Defer ChatbotWidget mount until browser is idle or after a short delay,
  // or on first user interaction (whichever comes first). This keeps the
  // chatbot JS off the critical path and improves LCP/TBT scores.
  useEffect(() => {
    let cancelled = false
    const mount = () => {
      if (cancelled) return
      setChatbotReady(true)
    }

    const events: Array<keyof WindowEventMap> = ['pointerdown', 'keydown', 'scroll', 'touchstart']
    const onInteract = () => {
      mount()
      events.forEach((e) => window.removeEventListener(e, onInteract))
    }
    events.forEach((e) => window.addEventListener(e, onInteract, { once: true, passive: true }))

    const ric = (window as unknown as {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
      cancelIdleCallback?: (id: number) => void
    }).requestIdleCallback
    const cic = (window as unknown as {
      cancelIdleCallback?: (id: number) => void
    }).cancelIdleCallback

    let idleId: number | undefined
    let timeoutId: number | undefined
    if (ric) {
      idleId = ric(mount, { timeout: 3000 })
    } else {
      timeoutId = window.setTimeout(mount, 2500)
    }

    return () => {
      cancelled = true
      events.forEach((e) => window.removeEventListener(e, onInteract))
      if (idleId !== undefined && cic) cic(idleId)
      if (timeoutId !== undefined) window.clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="min-h-screen bg-charcoal">
      <Navigation />
      <main className="pb-20 md:pb-0">{children}</main>
      <Footer />
      {chatbotReady && (
        <Suspense fallback={null}>
          <ChatbotWidget />
          <BookingPopupCTA />
        </Suspense>
      )}
      <StickyMobileCTA />
      <CookieConsent />
    </div>
  )
}
