interface TrustStripProps {
  className?: string
  /** Visual variant: 'dark' (body text) or 'light' (cream text) — both on the dark base */
  variant?: 'dark' | 'light'
}

const PILLS = [
  'Replies within 1 hour Mon–Fri',
  'Free 30-min discovery call',
  'No long-term contracts',
  'Certified Retell AI Partner',
]

export function TrustStrip({ className = '', variant = 'dark' }: TrustStripProps) {
  const textCls = variant === 'dark' ? 'text-body' : 'text-cream'
  const checkCls = 'text-coral'
  return (
    <ul
      aria-label="Why work with us"
      className={`flex flex-wrap gap-x-5 gap-y-2 text-sm md:text-base font-bold ${textCls} ${className}`}
    >
      {PILLS.map((pill) => (
        <li key={pill} className="flex items-center gap-2">
          <span className={checkCls} aria-hidden="true">&#10003;</span>
          {pill}
        </li>
      ))}
    </ul>
  )
}
