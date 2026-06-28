import { useEffect, useState } from 'react'
import { getStoredConsent, setStoredConsent } from '../utils/consent'
import { Button } from './Button'

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
    window.dispatchEvent(new Event('consentDecided'))
  }

  const reject = () => {
    setStoredConsent('rejected')
    setVisible(false)
    window.dispatchEvent(new Event('consentDecided'))
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-28 left-4 right-4 xl:left-auto xl:right-6 xl:bottom-6 xl:max-w-md z-50 bg-ink border-2 border-coral shadow-brutal text-body p-5 md:p-6"
    >
      <h2 className="font-display font-extrabold uppercase tracking-tight-lg text-lg text-cream mb-2">
        Cookies
      </h2>
      <p className="text-sm leading-relaxed mb-4">
        We use Google Analytics and Meta Pixel to understand how visitors use this site. Nothing is shared for third-party advertising. You can change your mind any time &mdash; see our{' '}
        <a
          href="/privacy-policy"
          className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors"
        >
          privacy policy
        </a>
        .
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button type="button" variant="primary" onClick={accept} className="text-sm px-4 py-2">
          Accept
        </Button>
        <Button type="button" variant="secondary" onClick={reject} className="text-sm px-4 py-2">
          Decline
        </Button>
      </div>
    </div>
  )
}
