import { PRICES, PRICE_TEXT } from '../data/pricing'

// AI receptionist vs human answering service vs voicemail. Used on
// /ai-receptionist and /call-answering-service. General, true claims only:
// no competitor names or prices.
const columns = [
  'AI receptionist (Antek)',
  'Human virtual receptionist / answering service',
  'Voicemail',
]

const rows: { label: string; values: [string, string, string] }[] = [
  {
    label: 'Hours covered',
    values: ['24/7, including evenings, weekends and bank holidays', 'Set by the provider and the plan you choose', '24/7, but it only records a message'],
  },
  {
    label: "How you're charged",
    values: [
      `${PRICE_TEXT.receptionistMonthly} including ${PRICES.receptionist.starter.minutes} minutes`,
      'Typically per call or per minute; varies by provider',
      'Free',
    ],
  },
  {
    label: 'Books appointments',
    values: ['Yes, straight into your calendar', 'Some do; many take a message for you to call back', 'No'],
  },
  {
    label: 'Captures caller details',
    values: ['Yes, against the screening questions you set', 'Yes, usually as a message', 'Only what the caller chooses to leave'],
  },
  {
    label: 'Answers at the same time as other callers',
    values: ['Yes, up to 20 calls at once', 'Depends on how many people are free', 'No one answers; callers leave a message'],
  },
  {
    label: 'Speed to go live',
    values: [PRICES.receptionist.goLive, 'Varies by provider', 'Immediate'],
  },
]

export function AnsweringComparisonTable() {
  return (
    <div>
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-2 border-hairline text-left text-sm">
          <thead>
            <tr className="bg-coral text-ink">
              <th className="p-4 font-sans font-bold uppercase border-r border-hairline w-48"></th>
              {columns.map((c) => (
                <th key={c} scope="col" className="p-4 font-sans font-bold uppercase border-r border-hairline last:border-r-0">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={row.label} className={`border-t border-hairline ${ri % 2 === 0 ? 'bg-ink' : 'bg-charcoal'}`}>
                <th scope="row" className="p-4 font-sans font-bold text-cream border-r border-hairline uppercase text-xs">{row.label}</th>
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
        {columns.map((col, ci) => (
          <div key={col} className="border-2 border-hairline bg-ink">
            <div className="bg-coral text-ink px-6 py-4">
              <span className="font-sans font-bold uppercase text-sm">{col}</span>
            </div>
            {rows.map((row, ri) => (
              <div key={row.label} className={`px-6 py-4 flex gap-4 border-t border-hairline ${ri % 2 === 0 ? 'bg-ink' : 'bg-charcoal'}`}>
                <span className="font-sans font-bold uppercase text-xs text-cream w-28 shrink-0">{row.label}</span>
                <span className="text-body text-sm">{row.values[ci]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
