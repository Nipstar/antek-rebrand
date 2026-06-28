import { useEffect, useState } from 'react'
import { CalBooking } from './CalBooking'
import { trackEvent } from '../utils/analytics'
import { BOOKING_POPUP_EVENT } from '../utils/bookingPopup'

export function BookingPopupCTA() {
  const [open, setOpen] = useState(false)
  const [source, setSource] = useState<string>('unknown')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const onOpen = (e: Event) => {
      const detail = (e as CustomEvent).detail || {}
      setSource(detail.source || 'unknown')
      setOpen(true)
      trackEvent('booking_popup_shown', {
        event_category: 'conversion',
        source: detail.source || 'unknown',
        page_path: window.location.pathname,
      })
    }
    window.addEventListener(BOOKING_POPUP_EVENT, onOpen)
    return () => window.removeEventListener(BOOKING_POPUP_EVENT, onOpen)
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dismiss('esc')
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  const dismiss = (how: 'esc' | 'backdrop' | 'close') => {
    trackEvent('booking_popup_dismissed', {
      event_category: 'conversion',
      method: how,
      source,
    })
    setOpen(false)
  }

  if (!open) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book a free 30-minute discovery call"
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-charcoal/70 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) dismiss('backdrop')
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-ink border-2 border-coral shadow-brutal-coral">
        <button
          type="button"
          aria-label="Close booking popup"
          onClick={() => dismiss('close')}
          className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center font-sans font-bold text-cream bg-charcoal border-2 border-hairline hover:bg-coral hover:text-ink transition-colors"
        >
          &times;
        </button>
        <div className="px-6 pt-8 pb-2 md:px-10 md:pt-10">
          <p className="text-xs uppercase tracking-wide text-coral font-sans font-bold mb-2">
            Free 30-min discovery call
          </p>
          <h2 className="font-display font-extrabold text-2xl md:text-3xl uppercase tracking-tight-lg text-cream mb-3 pr-12">
            Pick a time that works
          </h2>
          <p className="text-sm md:text-base text-body mb-5">
            We&rsquo;ll review where AI can save you time + win you more business. No sales pitch.
            Replies within 1 hour Mon&ndash;Fri.
          </p>
        </div>
        <div className="px-3 pb-3 md:px-6 md:pb-6">
          <CalBooking
            namespace="popup"
            className="w-full min-h-[520px] border-2 border-hairline bg-charcoal"
          />
        </div>
      </div>
    </div>
  )
}
