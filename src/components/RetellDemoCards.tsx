import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Card } from './Card';
import { Icon } from './Icon';
import { retellDemos, LOCATION_DEMO_INDUSTRIES, type RetellDemo } from '../data/retellDemos';

interface RetellDemoCardsProps {
  heading?: string;
  subhead?: string;
  /** optional filter by industry key (e.g. ['heating']); defaults to all demos */
  industries?: string[];
  /** convenience: show the curated location-page set (LOCATION_DEMO_INDUSTRIES) */
  curated?: boolean;
}

// Industry demo "orbs" from Retell. Each card pops a modal with the live orb in an
// iframe (asks for mic, then you can talk to the agent). If Retell blocks framing on
// this domain, the "open in a new tab" fallback below the iframe always works.
export function RetellDemoCards({
  heading = 'Hear It for Yourself',
  subhead = 'Tap an industry and talk to a live AI agent — the same kind we build for your business.',
  industries,
  curated = false,
}: RetellDemoCardsProps) {
  const [active, setActive] = useState<RetellDemo | null>(null);

  const filter = industries?.length ? industries : curated ? LOCATION_DEMO_INDUSTRIES : null;
  const demos = filter ? retellDemos.filter((d) => filter.includes(d.industry)) : retellDemos;

  // Close on Escape.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active]);

  if (demos.length === 0) return null;

  return (
    <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
            {heading}
          </h2>
          {subhead && <p className="text-lg text-charcoal leading-relaxed">{subhead}</p>}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {demos.map((demo) => (
            <button
              key={demo.industry}
              onClick={() => setActive(demo)}
              className="block text-left group"
              aria-label={`Try the ${demo.label} voice demo`}
            >
              <Card hover>
                <Icon letter={demo.icon} size="md" />
                <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-3 group-hover:text-terracotta transition-colors">
                  {demo.label}
                </h3>
                <p className="text-charcoal leading-relaxed text-sm mb-4">{demo.blurb}</p>
                <span className="inline-block font-black uppercase text-sm text-terracotta">
                  Try the live demo &rarr;
                </span>
              </Card>
            </button>
          ))}
        </div>
      </div>

      {/* ── DEMO MODAL (Retell orb in an iframe + new-tab fallback) ── */}
      {active && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-off-white border-3 border-charcoal shadow-brutal-chat w-full max-w-md h-[80vh] max-h-[680px] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${active.label} voice demo`}
          >
            <div className="bg-warm-beige border-b-3 border-charcoal p-4 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <h3 className="font-black text-lg uppercase truncate">{active.label} Demo</h3>
                <p className="text-xs text-charcoal">Allow microphone access, then talk to the agent.</p>
              </div>
              <button
                onClick={() => setActive(null)}
                className="shrink-0 w-8 h-8 flex items-center justify-center hover:bg-charcoal hover:text-off-white transition-colors border-2 border-charcoal"
                aria-label="Close demo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <iframe
              key={active.industry}
              src={active.orbUrl}
              title={`${active.label} AI voice demo`}
              className="flex-1 w-full bg-off-white"
              allow="microphone; autoplay; clipboard-write; encrypted-media"
            />

            <div className="border-t-3 border-charcoal bg-off-white p-3 text-center">
              <a
                href={active.orbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-black uppercase text-xs underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors"
              >
                Demo not loading? Open in a new tab &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
