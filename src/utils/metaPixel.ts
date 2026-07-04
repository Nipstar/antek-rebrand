const PIXEL_ID = '1430686008694674'

let loaded = false

export function initializeMetaPixel() {
  if (typeof window === 'undefined') return
  if (loaded || window.fbq) return
  loaded = true

  const load = () => {
    // Standard Meta Pixel snippet (declarations intentionally permissive — matches FB's official snippet)
    /* eslint-disable */
    ;(function (f: any, b: Document, e: string, v: string, n?: any, t?: any, s?: any) {
      if (f.fbq) return
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      }
      if (!f._fbq) f._fbq = n
      n.push = n
      n.loaded = true
      n.version = '2.0'
      n.queue = []
      t = b.createElement(e)
      t.async = true
      t.src = v
      s = b.getElementsByTagName(e)[0]
      s.parentNode.insertBefore(t, s)
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
    /* eslint-enable */

    window.fbq!('init', PIXEL_ID)
    window.fbq!('track', 'PageView')
  }

  if ('requestIdleCallback' in window) {
    ;(window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(load)
  } else {
    setTimeout(load, 1500)
  }
}

/**
 * Fire a Meta Pixel standard `Lead` event.
 *
 * This is a no-op until the pixel has been initialised — i.e. until the
 * visitor has accepted cookies — so it inherits the same consent gating as
 * the pixel itself. If a call happens after consent but before fbevents.js
 * has finished loading, the pixel snippet queues it and flushes on load.
 */
export function trackLead(params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || !window.fbq) return
  window.fbq('track', 'Lead', params ?? {})
}

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    _fbq?: unknown
  }
}
