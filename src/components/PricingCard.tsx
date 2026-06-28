import { Button } from './Button'

interface PricingCardProps {
  id: string
  name: string
  tagline: string
  price: string
  setupNote?: string
  bullets: string[]
  integrations?: string
  cta: string
  ctaHref: string
  featured?: boolean
  billingLabel?: string
}

export function PricingCard({
  id,
  name,
  tagline,
  price,
  setupNote,
  bullets,
  integrations,
  cta,
  ctaHref,
  featured = false,
  billingLabel,
}: PricingCardProps) {
  return (
    <div
      id={id}
      className={`border-2 border-coral p-8 md:p-10 bg-ink ${featured ? 'shadow-brutal-coral' : 'shadow-brutal-sm'}`}
    >
      {featured && (
        <div className="inline-block border-2 border-coral bg-coral px-4 py-1 mb-6">
          <span className="font-sans font-bold uppercase text-xs text-ink">Most Popular</span>
        </div>
      )}
      <h3 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg text-cream mb-2">{name}</h3>
      <p className="text-body text-base leading-normal mb-6">{tagline}</p>

      <div className="mb-6">
        <span className="font-display font-extrabold text-5xl text-coral">{price}</span>
        {billingLabel && (
          <span className="text-muted text-sm ml-1">{billingLabel}</span>
        )}
        {setupNote && (
          <p className="text-muted text-sm mt-1">{setupNote}</p>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-3 text-body text-sm leading-normal">
            <span className="text-coral font-sans font-bold text-lg leading-none mt-0.5 shrink-0">&bull;</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {integrations && (
        <p className="text-xs text-muted border-t border-hairline pt-4 mb-6">
          <span className="font-sans font-bold uppercase">Integrations: </span>{integrations}
        </p>
      )}

      <a href={ctaHref}>
        <Button variant={featured ? 'primary' : 'secondary'} className="w-full text-center">
          {cta}
        </Button>
      </a>
    </div>
  )
}
