export const CONSENT_KEY = 'antek_cookie_consent'

export type ConsentValue = 'accepted' | 'rejected'

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === 'undefined') return null
  try {
    const v = localStorage.getItem(CONSENT_KEY)
    return v === 'accepted' || v === 'rejected' ? v : null
  } catch {
    return null
  }
}

export function setStoredConsent(value: ConsentValue) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch { /* localStorage blocked */ }
  window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: value }))
}

export function clearStoredConsent() {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(CONSENT_KEY)
  } catch { /* noop */ }
  window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: null }))
}
