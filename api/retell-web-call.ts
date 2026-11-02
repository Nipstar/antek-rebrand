// Vercel Serverless Function — mints a Retell web-call session for the
// homepage "Try the demo" button.
//
// Calls POST https://api.retellai.com/v3/create-web-call with the server-side
// API key and returns the browser connection details that
// RetellWebClient.startCall() needs. The key never reaches the browser.
//
// Required env (set in Vercel project settings, no VITE_ prefix):
//   RETELL_API_KEY   — Retell secret API key
//   RETELL_AGENT_ID  — the agent that answers the demo call
//
// shortcut: uses the legacy RetellWebClient token flow, which Retell removes in
// browser SDK 4.0. Upgrade to RetellClient + a domain-scoped public key
// (dashboard-only) before moving to 4.x; this function then goes away.

const RETELL_WEB_CALL_URL = 'https://api.retellai.com/v3/create-web-call'

function json(data: unknown, status: number): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  })
}

export async function POST(request: Request): Promise<Response> {
  const apiKey = process.env.RETELL_API_KEY
  const agentId = process.env.RETELL_AGENT_ID
  if (!apiKey || !agentId) {
    return json({ error: 'Voice demo not configured' }, 500)
  }

  let page = ''
  try {
    const body = (await request.json()) as { page?: unknown }
    if (typeof body.page === 'string') page = body.page.slice(0, 200)
  } catch {
    // body is optional
  }

  try {
    const res = await fetch(RETELL_WEB_CALL_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ agent_id: agentId, metadata: { source: 'antekautomation.com web demo', page } }),
    })
    if (!res.ok) {
      return json({ error: 'Unable to start the demo call. Please try again.' }, 502)
    }
    const data = (await res.json()) as {
      call_id: string
      access_token: string
      transport?: string
      ice_servers?: unknown[]
      expires_at?: number
    }
    return json(
      {
        call_id: data.call_id,
        access_token: data.access_token,
        transport: data.transport,
        ice_servers: data.ice_servers,
        expires_at: data.expires_at,
      },
      200,
    )
  } catch {
    return json({ error: 'Voice demo temporarily unavailable' }, 502)
  }
}
