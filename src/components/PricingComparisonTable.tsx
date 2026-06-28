const products = [
  { name: 'AI Voice & Receptionist', href: '/pricing#ai-voice-assistant' },
  { name: 'AI Chatbot', href: '/pricing#ai-chatbot' },
  { name: 'Workflow Automation', href: '/pricing#workflow-automation' },
  { name: 'GEO Audit', href: '/pricing#geo-audit' },
]

const rows: { label: string; values: string[] }[] = [
  {
    label: 'Starting price',
    values: ['from £97/month (3 tiers)', '£57/month', 'from £250', 'from £247'],
  },
  {
    label: 'Setup fee',
    values: ['£249', '£149', 'Included', 'Included'],
  },
  {
    label: 'Time to live',
    values: ['24–48 hours', '24–48 hours', '1–14 days', '24 hours'],
  },
  {
    label: 'Best for',
    values: [
      'Missed calls & high call volume',
      'Websites losing leads out-of-hours',
      'Admin-heavy operations',
      'AI search visibility',
    ],
  },
  {
    label: 'Common integrations',
    values: [
      'Most CRMs, calendars, field-service tools',
      'HubSpot, Google Calendar, Calendly',
      'Google Workspace, Xero, HubSpot, Stripe, 400+ more',
      '—',
    ],
  },
]

export function PricingComparisonTable() {
  return (
    <div>
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-2 border-hairline text-left text-sm">
          <thead>
            <tr className="bg-coral text-ink">
              <th className="p-4 font-sans font-bold uppercase border-r border-hairline w-36"></th>
              {products.map((p) => (
                <th key={p.href} className="p-4 font-sans font-bold uppercase border-r border-hairline last:border-r-0">
                  <a href={p.href} className="hover:text-cream transition-colors">
                    {p.name}
                  </a>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={row.label} className={`border-t border-hairline ${ri % 2 === 0 ? 'bg-ink' : 'bg-charcoal'}`}>
                <td className="p-4 font-sans font-bold text-cream border-r border-hairline uppercase text-xs">{row.label}</td>
                {row.values.map((val, vi) => (
                  <td key={vi} className="p-4 text-body border-r border-hairline last:border-r-0">
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="md:hidden space-y-6">
        {products.map((product, pi) => (
          <div key={product.href} className="border-2 border-hairline bg-ink">
            <div className="bg-coral text-ink px-6 py-4">
              <a href={product.href} className="font-sans font-bold uppercase text-sm hover:text-cream transition-colors">
                {product.name}
              </a>
            </div>
            {rows.map((row, ri) => (
              <div key={row.label} className={`px-6 py-4 flex gap-4 border-t border-hairline ${ri % 2 === 0 ? 'bg-ink' : 'bg-charcoal'}`}>
                <span className="font-sans font-bold uppercase text-xs text-cream w-28 shrink-0">{row.label}</span>
                <span className="text-body text-sm">{row.values[pi]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
