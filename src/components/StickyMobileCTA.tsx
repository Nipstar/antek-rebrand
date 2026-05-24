import { useEffect, useState } from 'react'
import { trackEvent } from '../utils/analytics'
import { openBookingPopup } from './BookingPopupCTA'

const PHONE_TEL = '03330389960'

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let contactInView = false

    const onScroll = () => {
      const scrolled =
        (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight
      const shouldShow = scrolled > 0.35 && !contactInView
      setVisible(shouldShow)
    }

    let observer: IntersectionObserver | null = null
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          contactInView = entries.some((e) => e.isIntersecting)
          onScroll()
        },
        { threshold: 0.05 }
      )
      const observe = () => {
        document
          .querySelectorAll<HTMLElement>('[data-contact-region]')
          .forEach((el) => observer?.observe(el))
      }
      observe()
      // Re-observe on route change (Vike client-side nav)
      window.addEventListener('hashchange', observe)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      observer?.disconnect()
    }
  }, [])

  const onClick = (action: 'call' | 'book') => {
    trackEvent('sticky_cta_click', {
      event_category: 'conversion',
      event_label: action,
      cta_type: action,
    })
  }

  return (
    <div
      aria-hidden={!visible}
      className={`md:hidden fixed bottom-0 left-0 right-0 z-[9998] grid grid-cols-2 border-t-3 border-charcoal bg-charcoal/95 backdrop-blur shadow-brutal transition-transform duration-200 ${
        visible ? 'translate-y-0' : 'translate-y-full pointer-events-none'
      }`}
    >
      <a
        href={`tel:${PHONE_TEL}`}
        onClick={() => onClick('call')}
        className="flex items-center justify-center gap-2 py-4 px-4 font-bold text-sm uppercase tracking-wide text-off-white border-r-3 border-charcoal bg-warm-beige/10 active:bg-warm-beige/20"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Call Now
      </a>
      <a
        href="/contact"
        onClick={(e) => {
          e.preventDefault()
          onClick('book')
          openBookingPopup('sticky-mobile-cta')
        }}
        className="flex items-center justify-center gap-2 py-4 px-4 font-bold text-sm uppercase tracking-wide text-charcoal bg-terracotta active:bg-terracotta/90"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        Book Free Call
      </a>
    </div>
  )
}
