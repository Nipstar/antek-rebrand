import { useState, useEffect, type ReactNode } from 'react';
import { X } from 'lucide-react';
import { Card } from './Card';
import { Icon } from './Icon';
import { Container } from './Container';
import { HeadlineBlock } from './HeadlineBlock';
import { retellDemos, LOCATION_DEMO_INDUSTRIES, type RetellDemo } from '../data/retellDemos';

interface RetellDemoCardsProps {
  heading?: ReactNode;
  subhead?: string;
  /** optional filter by industry key (e.g. ['heating']); defaults to all demos */
  industries?: string[];
  /** convenience: show the curated location-page set (LOCATION_DEMO_INDUSTRIES) */
  curated?: boolean;
  /** render just the card grid + modal, no section/heading — to embed inside an existing section */
  bare?: boolean;
}

// Industry demo "orbs" from Retell. Each card pops a modal with the live orb in an
// iframe (asks for mic, then you can talk to the agent). If Retell ever blocks framing
// on this domain, the "open in a new tab" fallback below the iframe always works.
export function RetellDemoCards({
  heading = <>Talk to a <span className="text-coral">Live AI Agent</span></>,
  subhead = 'Tap an industry and talk to a live AI voice agent right in your browser — the same kind we build for your business.',
  industries,
  curated = false,
  bare = false,
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

  const grid = (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {demos.map((demo) => (
        <button
          key={demo.industry}
          onClick={() => setActive(demo)}
          className="block text-left group"
          aria-label={`Try the ${demo.label} voice demo`}
        >
          <Card hover className="h-full">
            <Icon letter={demo.icon} size="md" />
            <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-4 mb-3 group-hover:text-coral transition-colors">
              {demo.label}
            </h3>
            <p className="text-body leading-relaxed text-sm mb-4">{demo.blurb}</p>
            <span className="inline-block font-sans font-bold uppercase text-sm text-coral">
              Try the live demo &rarr;
            </span>
          </Card>
        </button>
      ))}
    </div>
  );

  // ── DEMO MODAL (Retell orb in an iframe + new-tab fallback) ──
  const modal = active && (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={() => setActive(null)}
    >
      <div
        className="bg-ink border-2 border-coral shadow-brutal-chat w-full max-w-md h-[80vh] max-h-[680px] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${active.label} voice demo`}
      >
        <div className="bg-charcoal border-b-2 border-coral p-4 flex items-center justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display font-extrabold text-lg uppercase text-cream truncate">{active.label} Demo</h3>
            <p className="text-xs text-muted">Allow microphone access, then talk to the agent.</p>
          </div>
          <button
            onClick={() => setActive(null)}
            className="shrink-0 w-8 h-8 flex items-center justify-center text-cream hover:bg-coral hover:text-ink transition-colors border-2 border-coral"
            aria-label="Close demo"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <iframe
          key={active.industry}
          src={active.orbUrl}
          title={`${active.label} AI voice demo`}
          className="flex-1 w-full bg-ink"
          allow="microphone; autoplay; clipboard-write; encrypted-media"
        />

        <div className="border-t-2 border-hairline bg-ink p-3 text-center">
          <a
            href={active.orbUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans font-bold uppercase text-xs text-cream underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors"
          >
            Demo not loading? Open in a new tab &rarr;
          </a>
        </div>
      </div>
    </div>
  );

  // Embedded inside an existing section (e.g. the AI-receptionist demo section).
  if (bare) {
    return (
      <>
        {grid}
        {modal}
      </>
    );
  }

  return (
    <section className="bg-ink border-y border-hairline py-20 md:py-28">
      <Container>
        <div className="max-w-3xl mb-12">
          <HeadlineBlock className="mb-4">{heading}</HeadlineBlock>
          {subhead && <p className="text-lg text-body leading-relaxed mt-4">{subhead}</p>}
        </div>
        {grid}
      </Container>
      {modal}
    </section>
  );
}
