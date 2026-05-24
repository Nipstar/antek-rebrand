import { useEffect, useRef, useState } from 'react'
import { CONSTANTS } from '../constants'
import { trackEvent } from '../utils/analytics'

const CONTACT_WEBHOOK_URL = import.meta.env.VITE_CONTACT_WEBHOOK_URL || ''
const GA_MEASUREMENT_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID || ''

interface QuickFormProps {
  source: string
  pageTown?: string
  /** Optional override placeholder, e.g. for industry pages */
  placeholder?: string
  /** Optional second field (business name) */
  showBusinessField?: boolean
  className?: string
}

function getCtx() {
  if (typeof window === 'undefined') return {}
  const p = new URLSearchParams(window.location.search)
  return {
    utm_source: p.get('utm_source') || '',
    utm_medium: p.get('utm_medium') || '',
    utm_campaign: p.get('utm_campaign') || '',
    utm_term: p.get('utm_term') || '',
    utm_content: p.get('utm_content') || '',
    referrer: document.referrer || 'direct',
    page_url: window.location.href,
    page_path: window.location.pathname,
  }
}

function getGaIds(): Promise<Record<string, string>> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) {
      resolve({})
      return
    }
    const out: Record<string, string> = {}
    let pending = 2
    const done = () => { if (--pending === 0) resolve(out) }
    try {
      window.gtag('get', GA_MEASUREMENT_ID, 'client_id', (cid: string) => { out.ga_client_id = cid; done() })
      window.gtag('get', GA_MEASUREMENT_ID, 'session_id', (sid: string) => { out.ga_session_id = sid; done() })
      setTimeout(() => resolve(out), 800)
    } catch { resolve({}) }
  })
}

export function QuickForm({
  source,
  pageTown = 'brand-hub',
  placeholder = 'Your phone number',
  showBusinessField = false,
  className = '',
}: QuickFormProps) {
  const [phone, setPhone] = useState('')
  const [business, setBusiness] = useState('')
  const [website, setWebsite] = useState('') // honeypot
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [err, setErr] = useState<string | null>(null)
  const pageStartRef = useRef<number>(Date.now())

  useEffect(() => { pageStartRef.current = Date.now() }, [])

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErr(null)
    if (website) return // honeypot tripped
    if (!phone.trim() || phone.replace(/\D/g, '').length < 7) {
      setErr('Please enter a valid phone number.')
      return
    }
    if (!CONTACT_WEBHOOK_URL) {
      setErr('Configuration error. Please use the full contact form.')
      return
    }
    setSubmitting(true)
    try {
      const ctx = getCtx()
      const gaIds = await getGaIds()
      const payload = {
        phone,
        business,
        timestamp: new Date().toISOString(),
        source: CONSTANTS.WEBHOOK_SOURCE_CONTACT_FORM,
        form_source: source,
        page_town: pageTown,
        time_on_page_s: Math.round((Date.now() - pageStartRef.current) / 1000),
        ...ctx,
        ...gaIds,
      }
      const res = await fetch(CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setDone(true)
      trackEvent('form_submit', {
        event_category: 'conversion',
        form_source: source,
        page_town: pageTown,
        form_type: 'quick',
      })
    } catch {
      setErr('Sorry, that didn’t go through. Please try again or use the contact form.')
    } finally {
      setSubmitting(false)
    }
  }

  if (done) {
    return (
      <div className={`bg-soft-sage border-3 border-charcoal p-5 ${className}`}>
        <p className="font-black uppercase tracking-tight-lg text-charcoal text-base mb-1">
          Got it &mdash; we&rsquo;ll call you back
        </p>
        <p className="text-sm text-charcoal/80">
          Within 1 hour Mon&ndash;Fri 9&ndash;6. Outside hours, first thing next working day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className={`bg-white border-3 border-charcoal shadow-brutal p-4 md:p-5 ${className}`}>
      <p className="font-black uppercase text-charcoal text-sm tracking-wide mb-3">
        Or get a callback in 1 hour
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="tel"
          inputMode="tel"
          required
          placeholder={placeholder}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          aria-label="Your phone number"
          className="flex-1 border-3 border-charcoal bg-white px-3 py-2.5 focus:border-terracotta focus:outline-none text-charcoal text-sm md:text-base"
        />
        {showBusinessField && (
          <input
            type="text"
            placeholder="Business name (optional)"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            aria-label="Business name"
            className="flex-1 border-3 border-charcoal bg-white px-3 py-2.5 focus:border-terracotta focus:outline-none text-charcoal text-sm md:text-base"
          />
        )}
        <button
          type="submit"
          disabled={submitting}
          className="bg-terracotta border-3 border-charcoal shadow-brutal-xs font-black uppercase text-sm text-charcoal px-5 py-2.5 hover:-translate-y-0.5 hover:shadow-brutal-sm active:translate-y-0 active:shadow-none transition-all disabled:opacity-60"
        >
          {submitting ? 'Sending…' : 'Call me back'}
        </button>
      </div>
      {/* Honeypot */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
        <label htmlFor={`qf-website-${source}`}>Website</label>
        <input
          type="text"
          id={`qf-website-${source}`}
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      {err && <p className="text-sm text-terracotta mt-2 font-bold">{err}</p>}
      <p className="text-xs text-charcoal/60 mt-2">
        No long-term contracts. We reply within 1 hour Mon&ndash;Fri.
      </p>
    </form>
  )
}
