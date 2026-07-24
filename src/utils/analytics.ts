import { getStoredConsent } from './consent'

let initialised = false

export const initializeGoogleAnalytics = (gtagId: string) => {
  if (!gtagId || gtagId === 'G-XXXXXXXXXX') {
    console.warn('Google Analytics ID not configured')
    return
  }
  if (typeof window === 'undefined' || initialised) return
  initialised = true

  const loadGA = () => {
    window.dataLayer = window.dataLayer || []
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }
    window.gtag = gtag as (...args: unknown[]) => void

    // Google Consent Mode v2 — default denied. GA script can still load but
    // won't store identifiers or send personal data until consent is granted.
    gtag('consent', 'default', {
      ad_storage: 'denied',
      analytics_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      wait_for_update: 500,
    })

    // Consent Mode v2 modelling helpers: pass ad-click/session info through the
    // URL (not cookies) and redact ad data while consent is denied. These let
    // GA4 send cookieless "consent pings" and model the traffic that hasn't
    // accepted cookies — recovering the data lost when the banner went live.
    gtag('set', 'url_passthrough', true)
    gtag('set', 'ads_data_redaction', true)

    // If user previously accepted, grant immediately
    if (getStoredConsent() === 'accepted') {
      gtag('consent', 'update', { analytics_storage: 'granted' })
    }

    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`
    document.head.appendChild(s)

    gtag('js', new Date())
    gtag('config', gtagId, {
      page_path: window.location.pathname,
      anonymize_ip: true,
    })
  }

  if ('requestIdleCallback' in window) {
    (window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(loadGA)
  } else {
    setTimeout(loadGA, 2000)
  }
}

export const grantAnalyticsConsent = () => {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('consent', 'update', { analytics_storage: 'granted' })
}

export const revokeAnalyticsConsent = () => {
  if (typeof window === 'undefined' || !window.gtag) return
  window.gtag('consent', 'update', { analytics_storage: 'denied' })
}

export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('config', import.meta.env.VITE_GOOGLE_ANALYTICS_ID, {
      page_path: path,
    })
  }
}

export const trackEvent = (eventName: string, eventData?: Record<string, string | number | boolean>) => {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, eventData || {})
  }
}

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}
