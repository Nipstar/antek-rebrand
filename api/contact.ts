// Vercel Serverless Function — contact form gateway.
//
// Verifies the Google reCAPTCHA v2 token server-side, then forwards the
// (token-stripped) form data to the n8n contact webhook. Keeping the secret
// and the webhook URL server-side means the browser never sees either.
//
// Required env (set in Vercel project settings):
//   RECAPTCHA_SECRET_KEY  — reCAPTCHA v2 secret key (server-side only, no VITE_ prefix)
//   CONTACT_WEBHOOK_URL   — n8n webhook the submission is forwarded to
//
// The matching public site key is exposed to the browser as VITE_RECAPTCHA_SITE_KEY.

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
      // Surfaces the real reason (e.g. invalid-input-secret = wrong/missing secret;
      // hostname mismatch = domain not allow-listed). Non-sensitive; aids debugging.
      console.error('reCAPTCHA verification failed', { codes, hostname: verification.hostname })
      return json({ error: 'reCAPTCHA challenge failed', codes }, 403)
    }
  } else if (process.env.VERCEL_ENV === 'production') {
    // Fail closed: never accept an unverified submission in production.
    console.error('RECAPTCHA_SECRET_KEY is not set in production')
    return json({ error: 'Server misconfigured', reason: 'missing RECAPTCHA_SECRET_KEY' }, 500)
  }

  // Canonical name is CONTACT_WEBHOOK_URL (server-side secret — no VITE_ prefix,
  // which would mark it browser-exposable). Fall back to VITE_CONTACT_WEBHOOK_URL
  // for deployments configured with the prefixed name. Read server-side only
  // (process.env, never import.meta.env) so it is never bundled into client JS.
  const webhook = process.env.CONTACT_WEBHOOK_URL || process.env.VITE_CONTACT_WEBHOOK_URL
  if (!webhook) {
    console.error('CONTACT_WEBHOOK_URL / VITE_CONTACT_WEBHOOK_URL is not set')
    return json({ error: 'Server misconfigured', reason: 'missing CONTACT_WEBHOOK_URL' }, 500)
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
