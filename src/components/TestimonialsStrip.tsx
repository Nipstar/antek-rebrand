import { caseStudies } from '../data/caseStudies'

interface TestimonialsStripProps {
  /** How many testimonials to render (default 3) */
  limit?: number
}

export function TestimonialsStrip({ limit = 3 }: TestimonialsStripProps) {
  const items = caseStudies.slice(0, limit)
  if (items.length === 0) return null

  return (
    <section className="bg-warm-beige border-b-3 border-charcoal py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <p className="text-xs uppercase tracking-wide text-terracotta mb-3 font-black">
          What results look like
        </p>
        <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-3">
          Real outcomes from real businesses
        </h2>
        <p className="text-sm text-charcoal/70 mb-8 max-w-2xl">
          Illustrative case studies based on typical client engagements. Real client names withheld.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {items.map((cs) => (
            <article
              key={cs.id}
              className="bg-off-white border-3 border-charcoal shadow-brutal-sm p-5 md:p-6 flex flex-col"
            >
              <p className="text-xs font-black uppercase tracking-wide text-terracotta mb-2">
                {cs.industry}
              </p>
              <p className="font-black text-base md:text-lg uppercase text-charcoal mb-3 leading-tight">
                {cs.headline}
              </p>
              <p className="text-sm text-charcoal/80 leading-relaxed flex-1 mb-4">
                &ldquo;{cs.testimonial.quote}&rdquo;
              </p>
              <p className="text-xs text-charcoal/60 font-bold">
                &mdash; {cs.testimonial.author}, {cs.testimonial.business}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
