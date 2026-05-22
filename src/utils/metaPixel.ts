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

    window.fbq('init', PIXEL_ID)
    window.fbq('track', 'PageView')
  }

  if ('requestIdleCallback' in window) {
    ;(window as unknown as { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(load)
  } else {
    setTimeout(load, 1500)
  }
}

declare global {
  interface Window {
    fbq: any
    _fbq: any
  }
}
