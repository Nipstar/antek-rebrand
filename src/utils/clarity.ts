import { getStoredConsent } from './consent'

let initialised = false

export const initializeClarity = (projectId: string) => {
  if (!projectId) {
    console.warn('Microsoft Clarity project ID not configured')
    return
  }
  if (typeof window === 'undefined' || initialised) return
  initialised = true

  const loadClarity = () => {
    ;(function (c: Window, l: Document, a: 'clarity', r: 'script', i: string) {
      const w = c as unknown as Record<string, (...args: unknown[]) => void> & { [k: string]: unknown }
      const stub: { q?: unknown[][] } & ((...args: unknown[]) => void) = function (...args: unknown[]) {
        ;(stub.q = stub.q || []).push(args)
      } as unknown as { q?: unknown[][] } & ((...args: unknown[]) => void)
      if (!w[a]) {
        w[a] = stub
      }
      const t = l.createElement(r)
      t.async = true
      t.src = 'https://www.clarity.ms/tag/' + i
      const y = l.getElementsByTagName(r)[0]
      y.parentNode?.insertBefore(t, y)
    })(window, document, 'clarity', 'script', projectId)

    if (getStoredConsent() === 'accepted') {
      window.clarity?.('consent')
    }

    window.clarity?.('set', 'site_domain', window.location.hostname)
    window.clarity?.('set', 'page_path', window.location.pathname)
  }

  const w = window as Window & {
    requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
  }
  if (typeof w.requestIdleCallback === 'function') {
    w.requestIdleCallback(loadClarity, { timeout: 3000 })
  } else {
    setTimeout(loadClarity, 2000)
  }
}

export const grantClarityConsent = () => {
  if (typeof window === 'undefined' || !window.clarity) return
  window.clarity('consent')
}

export const tagClarityPage = (params: Record<string, string>) => {
  if (typeof window === 'undefined' || !window.clarity) return
  Object.entries(params).forEach(([key, value]) => {
    window.clarity?.('set', key, value)
  })
}

declare global {
  interface Window {
    clarity?: (action: string, ...args: unknown[]) => void
  }
}
