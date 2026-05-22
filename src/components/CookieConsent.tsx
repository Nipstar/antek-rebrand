import { useEffect, useState } from 'react'
import { getStoredConsent, setStoredConsent } from '../utils/consent'

export function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    // Show banner only when no decision has been recorded yet
    if (getStoredConsent() === null) {
      // Slight delay so it doesn't fight with LCP
      const t = window.setTimeout(() => setVisible(true), 800)
      return () => window.clearTimeout(t)
    }
  }, [])

  const accept = () => {
    setStoredConsent('accepted')
    setVisible(false)
  }

  const reject = () => {
    setStoredConsent('rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:bottom-6 md:max-w-md z-50 bg-charcoal border-3 border-charcoal shadow-brutal text-off-white p-5 md:p-6"
    >
      <h2 className="font-black uppercase tracking-tight-lg text-lg mb-2">
        Cookies
      </h2>
      <p className="text-sm leading-relaxed mb-4">
        We use Google Analytics and Meta Pixel to understand how visitors use this site. Nothing is shared for third-party advertising. You can change your mind any time &mdash; see our{' '}
        <a
          href="/privacy-policy"
          className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors"
        >
          privacy policy
        </a>
        .
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          onClick={accept}
          className="bg-terracotta border-3 border-off-white text-off-white font-black uppercase text-sm px-4 py-2 shadow-brutal-xs hover:-translate-y-0.5 hover:shadow-brutal-sm active:translate-y-0 active:shadow-none transition-all"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={reject}
          className="bg-off-white border-3 border-off-white text-charcoal font-black uppercase text-sm px-4 py-2 shadow-brutal-xs hover:-translate-y-0.5 hover:shadow-brutal-sm active:translate-y-0 active:shadow-none transition-all"
        >
          Reject
        </button>
      </div>
    </div>
  )
}
