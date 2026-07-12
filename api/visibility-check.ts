// Vercel Serverless Function — AI Visibility Check gateway.
//
// Mirrors api/contact.ts: verifies the Google reCAPTCHA v2 token server-side,
// then forwards the (token-stripped) lead to the WF9 n8n webhook. Keeping the
// secret and the webhook URL server-side means the browser never sees either.
//
// Required env (set in Vercel project settings):
//   RECAPTCHA_SECRET_KEY   — reCAPTCHA v2 secret (server-side only, no VITE_ prefix)
//   VISIBILITY_WEBHOOK_URL — WF9 n8n webhook the submission is forwarded to
//
// Falls back to CONTACT_WEBHOOK_URL when VISIBILITY_WEBHOOK_URL is unset, so the
// unified form keeps working (routed to the existing contact pipeline) until WF9
// is live. The matching public site key is VITE_RECAPTCHA_SITE_KEY.

const SITEVERIFY_URL = 'https://www.google.com/recaptcha/api/siteverify'

function json(data: unknown, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

export async function POST(request: Request): Promise<Response> {
  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return json({ error: 'Invalid JSON body' }, 400)
  }

  const { recaptchaToken, ...formData } = body as {
    recaptchaToken?: unknown
  } & Record<string, unknown>

  const secret = process.env.RECAPTCHA_SECRET_KEY
  if (secret) {
    if (typeof recaptchaToken !== 'string' || !recaptchaToken) {
      return json({ error: 'Missing reCAPTCHA token' }, 400)
    }

    const params = new URLSearchParams()
    params.append('secret', secret)
    params.append('response', recaptchaToken)
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    if (clientIp) params.append('remoteip', clientIp)

    let verification: { success?: boolean; 'error-codes'?: string[]; hostname?: string }
    try {
      const res = await fetch(SITEVERIFY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params,
      })
      verification = (await res.json()) as { success?: boolean; 'error-codes'?: string[]; hostname?: string }
    } catch {
      return json({ error: 'reCAPTCHA verification unavailable' }, 502)
    }

    if (!verification.success) {
      const codes = verification['error-codes'] ?? []
      console.error('reCAPTCHA verification failed', { codes, hostname: verification.hostname })
      return json({ error: 'reCAPTCHA challenge failed', codes }, 403)
    }
  } else if (process.env.VERCEL_ENV === 'production') {
    // Fail closed: never accept an unverified submission in production.
    console.error('RECAPTCHA_SECRET_KEY is not set in production')
    return json({ error: 'Server misconfigured', reason: 'missing RECAPTCHA_SECRET_KEY' }, 500)
  }

  // WF9 webhook. Falls back to the contact webhook so the form still lands
  // somewhere before WF9 is wired. Read server-side only (never bundled to client).
  const webhook =
    process.env.VISIBILITY_WEBHOOK_URL ||
    process.env.CONTACT_WEBHOOK_URL ||
    process.env.VITE_CONTACT_WEBHOOK_URL
  if (!webhook) {
    console.error('VISIBILITY_WEBHOOK_URL / CONTACT_WEBHOOK_URL is not set')
    return json({ error: 'Server misconfigured', reason: 'missing VISIBILITY_WEBHOOK_URL' }, 500)
  }

  try {
    const forwarded = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    if (!forwarded.ok) {
      console.error('Upstream webhook returned non-OK', forwarded.status)
      return json({ error: 'Upstream webhook error', status: forwarded.status }, 502)
    }
  } catch {
    return json({ error: 'Failed to reach webhook' }, 502)
  }

  return json({ ok: true }, 200)
}
