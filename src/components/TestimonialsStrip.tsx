import { caseStudies } from '../data/caseStudies'
import { HeadlineBlock } from './HeadlineBlock'

interface TestimonialsStripProps {
  /** How many testimonials to render (default 3) */
  limit?: number
}

export function TestimonialsStrip({ limit = 3 }: TestimonialsStripProps) {
  const items = caseStudies.slice(0, limit)
  if (items.length === 0) return null

  return (
    <section className="bg-ink border-b border-hairline py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <HeadlineBlock kicker={<>What results look like</>} className="mb-3">
          Real outcomes from <span className="text-coral">real businesses</span>
        </HeadlineBlock>
        <p className="text-sm text-muted mb-8 max-w-2xl">
          Illustrative case studies based on typical client engagements. Real client names withheld.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {items.map((cs) => (
            <article
              key={cs.id}
              className="bg-charcoal border-2 border-hairline shadow-brutal-sm p-5 md:p-6 flex flex-col h-full"
            >
              <p className="text-xs font-sans font-bold uppercase tracking-wide text-coral mb-2">
                {cs.industry}
              </p>
              <p className="font-display font-extrabold text-base md:text-lg uppercase text-cream mb-3 leading-tight">
                {cs.headline}
              </p>
              <p className="text-sm text-body leading-relaxed flex-1 mb-4">
                &ldquo;{cs.testimonial.quote}&rdquo;
              </p>
              <p className="text-xs text-muted font-bold">
                &mdash; {cs.testimonial.author}, {cs.testimonial.business}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
