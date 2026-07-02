import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from './Card';
import { Container } from './Container';
import { HeadlineBlock } from './HeadlineBlock';

// Screenshots of Antek being cited by each major AI engine. Files live in
// /public/proof (see plan). Add an engine by dropping its webp in there + a row here.
const CITATIONS = [
  { engine: 'ChatGPT', src: '/proof/chatgpt.webp' },
  { engine: 'Claude', src: '/proof/claude.webp' },
  { engine: 'Google Gemini', src: '/proof/gemini.webp' },
  { engine: 'Grok', src: '/proof/grok.webp' },
  { engine: 'Perplexity', src: '/proof/perplexity.webp' },
  { engine: 'Google AI Overview', src: '/proof/google-ai-overview.webp' },
  { engine: 'Google AI Mode', src: '/proof/google-ai-mode.webp' },
];

// Grid of AI-engine cards → click opens a full-size lightbox of the citation
// screenshot. Same interaction as RetellDemoCards (grid + one modal, Esc/backdrop/X);
// swaps the iframe for an <img> and adds prev/next to flick through all engines.
export function AICitationProof() {
  const [index, setIndex] = useState<number | null>(null);
  const active = index === null ? null : CITATIONS[index];

  // Close on Escape, step with arrow keys while the lightbox is open.
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIndex(null);
      if (e.key === 'ArrowRight') setIndex((i) => (i === null ? i : (i + 1) % CITATIONS.length));
      if (e.key === 'ArrowLeft') setIndex((i) => (i === null ? i : (i - 1 + CITATIONS.length) % CITATIONS.length));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index]);

  const step = (dir: number) =>
    setIndex((i) => (i === null ? i : (i + dir + CITATIONS.length) % CITATIONS.length));

  return (
    <section className="bg-ink border-y border-hairline py-20 md:py-28">
      <Container>
        <div className="max-w-3xl mb-12">
          <p className="font-mono uppercase text-sm text-coral tracking-wider mb-4">Proof</p>
          <HeadlineBlock className="mb-4">
            We don&rsquo;t just audit AI visibility &mdash; <span className="text-coral">we&rsquo;ve got it.</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-relaxed mt-4">
            Ask ChatGPT, Claude, Gemini, Grok or Perplexity about AI automation and Antek turns up{' '}
            <strong className="text-cream">in the answer</strong> &mdash; cited in the response, not buried on page
            two. That&rsquo;s exactly the result our GEO Audit is built to get you. Tap any engine to see the receipt.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CITATIONS.map((c, i) => (
            <button
              key={c.engine}
              onClick={() => setIndex(i)}
              className="block text-left group"
              aria-label={`View ${c.engine} citation`}
            >
              <Card hover className="h-full">
                <p className="font-mono uppercase text-sm text-coral tracking-wider mb-3">{c.engine}</p>
                <img
                  src={c.src}
                  alt={`Antek cited by ${c.engine}`}
                  width={960}
                  height={540}
                  loading="lazy"
                  className="aspect-video w-full object-cover object-top border-2 border-hairline"
                />
                <span className="inline-block font-sans font-bold uppercase text-sm text-coral mt-4 group-hover:underline underline-offset-4 decoration-2">
                  View citation &rarr;
                </span>
              </Card>
            </button>
          ))}
        </div>
      </Container>

      {/* ── LIGHTBOX (citation screenshot + prev/next) ── */}
      {active && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setIndex(null)}
        >
          <div
            className="bg-ink border-2 border-coral shadow-brutal-chat w-full max-w-4xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.engine} citation`}
          >
            <div className="bg-charcoal border-b-2 border-coral p-4 flex items-center justify-between gap-3">
              <h3 className="font-display font-extrabold text-lg uppercase text-cream truncate">
                Cited by {active.engine}
              </h3>
              <button
                onClick={() => setIndex(null)}
                className="shrink-0 w-8 h-8 flex items-center justify-center text-cream hover:bg-coral hover:text-ink transition-colors border-2 border-coral"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative bg-ink">
              <img src={active.src} alt={`Antek cited by ${active.engine}`} className="w-full h-auto" />
              <button
                onClick={() => step(-1)}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-ink/80 text-cream hover:bg-coral hover:text-ink transition-colors border-2 border-coral"
                aria-label="Previous engine"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => step(1)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-ink/80 text-cream hover:bg-coral hover:text-ink transition-colors border-2 border-coral"
                aria-label="Next engine"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
