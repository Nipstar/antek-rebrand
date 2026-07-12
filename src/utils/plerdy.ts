// Plerdy — behavioural analytics (heatmaps, click maps, session tracking).
//
// Plerdy sets cookies and tracks user interaction, so it is consent-gated like
// Clarity and the Meta Pixel: loaded only after the visitor accepts cookies
// (see pages/+Layout.tsx). The site hash is public (embedded in page markup),
// so it is safe in the client bundle.

const SITE_HASH = '7b34e623fe0e3ba781bfb2aab5feceee'
const SUID = 51607

let initialised = false

export const initializePlerdy = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined' || initialised) return
  initialised = true

  const w = window as unknown as Record<string, unknown>
  w._site_hash_code = SITE_HASH
  w._suid = SUID
  w._protocol = document.location.protocol === 'https:' ? 'https://' : 'http://'

  // Drop any stale instance, then append the main script (Plerdy's own guard).
  const existing = document.querySelector("[data-plerdymainscript='plerdymainscript']")
  if (existing?.parentNode) existing.parentNode.removeChild(existing)

  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.defer = true
  script.dataset.plerdy_code = '1'
  script.dataset.plerdymainscript = 'plerdymainscript'
  script.src = 'https://d.plerdy.com/public/js/click/main.js?v=' + Math.random()
  try {
    document.head.appendChild(script)
  } catch (e) {
    console.log(e, 'unable add script tag')
  }
}
