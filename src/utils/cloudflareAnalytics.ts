// Cloudflare Web Analytics — privacy-first, cookieless page/beacon analytics.
//
// Unlike GA, Clarity and the Meta Pixel, Cloudflare Web Analytics uses no
// cookies, no localStorage and no fingerprinting, so it is exempt from the
// cookie-consent gate and can load on every visit. It is still deferred to
// browser idle so the beacon stays off the critical path (no LCP/TBT impact).
//
// The beacon token is public by design (it is embedded in the page markup
// Cloudflare would otherwise inject), so it is safe in the client bundle.

let initialised = false

export const initializeCloudflareAnalytics = (token: string) => {
  if (!token) return
  if (typeof window === 'undefined' || initialised) return
  initialised = true

  const loadBeacon = () => {
    if (document.querySelector('script[data-cf-beacon]')) return
    const script = document.createElement('script')
    script.defer = true
    script.src = 'https://static.cloudflareinsights.com/beacon.min.js'
    script.setAttribute('data-cf-beacon', JSON.stringify({ token }))
    document.head.appendChild(script)
  }

  const w = window as Window & {
    requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
  }
  if (typeof w.requestIdleCallback === 'function') {
    w.requestIdleCallback(loadBeacon, { timeout: 3000 })
  } else {
    setTimeout(loadBeacon, 2000)
  }
}
