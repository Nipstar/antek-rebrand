import { useEffect, useId } from 'react'

interface CalBookingProps {
  calLink?: string
  namespace?: string
  className?: string
}

declare global {
  interface Window {
    Cal?: any
  }
}

export function CalBooking({
  calLink = 'antek-automation/30min',
  namespace = '30min',
  className = 'w-full min-h-[600px] border-3 border-charcoal shadow-brutal bg-white',
}: CalBookingProps) {
  const reactId = useId()
  const elementId = `cal-inline-${reactId.replace(/:/g, '')}`

  useEffect(() => {
    if (typeof window === 'undefined') return

    ;(function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { a.q.push(ar) }
      const d = C.document
      C.Cal = C.Cal || function () {
        const cal = C.Cal
        const ar = arguments
        if (!cal.loaded) {
          cal.ns = {}
          cal.q = cal.q || []
          d.head.appendChild(d.createElement('script')).src = A
          cal.loaded = true
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments) }
          const ns = ar[1]
          api.q = api.q || []
          if (typeof ns === 'string') {
            cal.ns[ns] = cal.ns[ns] || api
            p(cal.ns[ns], ar)
            p(cal, ['initNamespace', ns])
          } else {
            p(cal, ar)
          }
          return
        }
        p(cal, ar)
      }
    })(window, 'https://app.cal.com/embed/embed.js', 'init')

    const Cal = window.Cal
    Cal('init', namespace, { origin: 'https://app.cal.com' })
    Cal.ns[namespace]('inline', {
      elementOrSelector: `#${elementId}`,
      config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true', theme: 'light' },
      calLink,
    })
    Cal.ns[namespace]('ui', { theme: 'light', hideEventTypeDetails: false, layout: 'month_view' })
  }, [calLink, namespace, elementId])

  return <div id={elementId} className={className} />
}
