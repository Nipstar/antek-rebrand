import { useEffect, useState } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'

interface CalBookingProps {
  calLink?: string
  namespace?: string
  className?: string
}

// Official Cal.com React embed. Dark theme + coral brand to match the site.
export function CalBooking({
  calLink = 'antek-automation/30min',
  namespace = '30min',
  className = 'w-full min-h-[600px] border-2 border-coral shadow-brutal bg-ink p-4 md:p-6',
}: CalBookingProps) {
  // Gate render to the client — the embed touches browser APIs, and the page is
  // pre-rendered (SSR) by Vike.
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    ;(async () => {
      const cal = await getCalApi({ namespace })
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
        theme: 'dark',
        cssVarsPerTheme: { light: { 'cal-brand': '#CD5C3C' }, dark: { 'cal-brand': '#CD5C3C' } },
      })
    })()
  }, [namespace])

  if (!mounted) return <div className={className} aria-hidden="true" />

  return (
    <div className={className}>
      <Cal
        namespace={namespace}
        calLink={calLink}
        // width only — the embed auto-resizes its own height and reflows, so the
        // box never forces inner scrollbars or clips the month view.
        style={{ width: '100%' }}
        config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true', theme: 'dark' }}
      />
    </div>
  )
}
