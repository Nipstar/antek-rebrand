import { HeadlineBlock } from './HeadlineBlock'
import reviewsData from '../data/reviews.json'

interface Review {
  id: string
  author: string
  rating: number
  text: string
  date: string
  location: string | null
  source: string
}

interface ReviewsStripProps {
  /** Town/county to prioritise (matches the `location` tag). Omit for the general pool. */
  town?: string
  /** Max cards to render (default 3). */
  limit?: number
  className?: string
}

const allReviews = (reviewsData.reviews as Review[]) || []

/** Coarse relative date ("3 weeks ago"). Coarse on purpose — avoids SSR/CSR
 *  hydration drift and reads naturally for months-old reviews. */
function relativeDate(iso: string): string {
  if (!iso) return ''
  const then = new Date(iso).getTime()
  if (Number.isNaN(then)) return ''
  const days = Math.floor((Date.now() - then) / 86_400_000)
  if (days < 1) return 'today'
  if (days < 7) return days === 1 ? '1 day ago' : `${days} days ago`
  const weeks = Math.floor(days / 7)
  if (weeks < 5) return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`
  const months = Math.floor(days / 30)
  if (months < 12) return months === 1 ? '1 month ago' : `${months} months ago`
  const years = Math.floor(days / 365)
  return years === 1 ? '1 year ago' : `${years} years ago`
}

function Stars({ rating }: { rating: number }) {
  const full = Math.max(0, Math.min(5, Math.round(rating)))
  return (
    <span
      className="text-coral text-base tracking-wide"
      aria-label={`${full} out of 5 stars`}
    >
      {'★'.repeat(full)}
      <span className="text-hairline">{'★'.repeat(5 - full)}</span>
    </span>
  )
}

export function ReviewsStrip({ town, limit = 3, className = '' }: ReviewsStripProps) {
  if (allReviews.length === 0) return null

  // Town-tagged first; fall back to the general pool if fewer than 3 tagged.
  let pool = allReviews
  if (town) {
    const tagged = allReviews.filter((r) => r.location === town)
    pool = tagged.length >= 3 ? tagged : allReviews
  }

  const items = pool.slice(0, limit)
  if (items.length === 0) return null

  return (
    <section className={`bg-ink border-b border-hairline py-16 md:py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <HeadlineBlock kicker={<>What clients say</>} className="mb-8">
          Reviewed by <span className="text-coral">real customers</span>
        </HeadlineBlock>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          {items.map((r) => (
            <article
              key={r.id || r.author + r.date}
              className="bg-charcoal border-2 border-hairline shadow-brutal-sm p-5 md:p-6 flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-3">
                <Stars rating={r.rating} />
                <span className="text-xs text-muted font-bold">{relativeDate(r.date)}</span>
              </div>
              <p className="text-sm text-body leading-relaxed flex-1 mb-4">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <p className="text-xs text-cream font-bold">&mdash; {r.author}</p>
                <span className="text-[11px] text-muted font-sans uppercase tracking-wide">via Google</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
