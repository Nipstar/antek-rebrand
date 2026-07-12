import { useEffect, useState } from 'react';
import { Container } from '../../src/components/Container';
import { HeadlineBlock } from '../../src/components/HeadlineBlock';
import { Eyebrow } from '../../src/components/Eyebrow';
import { Card } from '../../src/components/Card';
import { AICitationProof } from '../../src/components/AICitationProof';
import { AIVisibilityCheckForm } from '../../src/components/AIVisibilityCheckForm';

// Primary-button styling on an <a> (Button renders a <button>, which can't be an
// anchor). Matches Button variant="primary".
const CTA_CLASS =
  'inline-block font-sans font-bold uppercase px-7 py-3 border-2 bg-coral text-ink border-ink shadow-brutal-sm transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none';

const PROBLEMS = [
  {
    h: 'AI answers, not links',
    p: 'ChatGPT, Perplexity and Google AI name specific businesses. If you are not named, you do not exist.',
  },
  {
    h: 'Your competitors are being recommended',
    p: 'Someone is getting those customers. Probably not you.',
  },
  {
    h: 'SEO alone does not fix it',
    p: 'Ranking on Google does not mean AI mentions you. Different game. Different rules.',
  },
];

const COVERS = [
  'Your visibility across 9 AI platforms including ChatGPT, Perplexity and Google AI Overviews',
  'Which competitors AI names instead of you',
  'Whether AI crawlers can even read your site',
  'llms.txt status, generated free if missing',
  'A scored report with your top fixes',
];

const STEPS = [
  { n: '01', h: 'Fill in the form', p: 'Takes 60 seconds.' },
  { n: '02', h: 'We run the checks', p: 'Your business goes through the same checks AI platforms use.' },
  { n: '03', h: 'Report lands in your inbox', p: 'Usually within 15 minutes.' },
];

const FAQS = [
  {
    q: 'Is it really free?',
    a: 'Yes. It is automated. It costs us pennies to run.',
  },
  {
    q: 'What is the catch?',
    a: 'The report shows what needs fixing. If you want help fixing it we sell audits. No pressure either way.',
  },
  {
    q: 'Will you call me?',
    a: 'No. The report arrives by email. You reply if you want to talk.',
  },
  {
    q: 'What is GEO?',
    a: 'Generative Engine Optimisation. Getting your business named in AI answers, not just ranked in Google.',
  },
  {
    q: 'How long does it take?',
    a: 'Usually 15 minutes. Complex sites can take longer.',
  },
  {
    q: 'Who is behind this?',
    a: 'Antek Automation, Andover. AI automation for UK businesses.',
  },
];

// Page-local sticky CTA: appears once the hero is scrolled past, hides while the
// form is in view. Scoped to this landing page (the global StickyMobileCTA is
// suppressed on the bare landing layout).
function StickyCheckCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let formInView = false;
    let scrolledPast = false;
    const sync = () => setVisible(scrolledPast && !formInView);

    const onScroll = () => {
      scrolledPast = window.scrollY > window.innerHeight * 0.6;
      sync();
    };

    let observer: IntersectionObserver | null = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          formInView = entries.some((e) => e.isIntersecting);
          sync();
        },
        { threshold: 0.05 }
      );
      const form = document.getElementById('visibility-check');
      if (form) observer.observe(form);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer?.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 border-t-2 border-ink bg-charcoal/95 backdrop-blur p-3 md:hidden transition-transform duration-200 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a href="#visibility-check" className={`${CTA_CLASS} w-full text-center`}>
        Run My Free Check
      </a>
    </div>
  );
}

export default function Page() {
  return (
    <div className="text-cream">
      {/* HERO */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-28">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow className="mb-5">Free AI Visibility Check</Eyebrow>
            <h1 className="font-display font-extrabold uppercase text-cream break-words text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.01em]">
              When someone asks ChatGPT for a business like yours,{' '}
              <span className="text-coral">do you show up</span>
            </h1>
            <p className="text-lg md:text-xl text-body leading-relaxed mt-6 max-w-[60ch]">
              85% of UK small businesses are invisible in AI search. Their competitors get named
              instead. Find out where you stand in 15 minutes. No cost. No call required.
            </p>
            <div className="mt-8">
              <a href="#visibility-check" className={`${CTA_CLASS} text-lg`}>
                Run My Free Check
              </a>
              <p className="font-mono text-sm text-muted mt-4 uppercase tracking-wider">
                No card. No obligation. Report by email.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* PROBLEM */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-12 max-w-3xl">
            AI is answering &mdash; <span className="text-coral">and naming names</span>
          </HeadlineBlock>
          <div className="grid md:grid-cols-3 gap-6">
            {PROBLEMS.map((item) => (
              <Card key={item.h} className="h-full">
                <h2 className="font-display font-extrabold uppercase text-cream text-xl mb-3">
                  {item.h}
                </h2>
                <p className="text-body leading-relaxed">{item.p}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* WHAT THE CHECK COVERS */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <HeadlineBlock className="mb-8">
              What the <span className="text-coral">check covers</span>
            </HeadlineBlock>
            <ul className="space-y-4">
              {COVERS.map((c) => (
                <li key={c} className="flex items-start gap-4">
                  <span className="font-mono text-coral font-bold mt-1 shrink-0">&rarr;</span>
                  <span className="text-lg text-body leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-12 max-w-3xl">
            How it <span className="text-coral">works</span>
          </HeadlineBlock>
          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((s) => (
              <Card key={s.n} className="h-full">
                <p className="font-mono text-coral font-bold text-2xl mb-4">{s.n}</p>
                <h3 className="font-display font-extrabold uppercase text-cream text-xl mb-2">
                  {s.h}
                </h3>
                <p className="text-body leading-relaxed">{s.p}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* PROOF — reuse the live 7-engine citation gallery */}
      <AICitationProof />

      {/* Local Falcon proof stat */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="max-w-3xl border-l-[5px] border-coral pl-5 md:pl-7">
            <p className="font-mono font-extrabold text-coral text-[clamp(2.5rem,6vw,4rem)] leading-none">
              100%
            </p>
            <p className="text-lg text-body leading-relaxed mt-3">
              Share of AI Voice for &ldquo;ai voice agents andover&rdquo;, verified by a Local Falcon
              grid scan. We do not just check AI visibility. We have it.
            </p>
          </div>
        </Container>
      </section>

      {/* FORM */}
      <AIVisibilityCheckForm />

      {/* FAQ */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <HeadlineBlock className="mb-10">
              Questions, <span className="text-coral">answered</span>
            </HeadlineBlock>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <details key={f.q} className="border-2 border-coral bg-ink p-6 group">
                  <summary className="font-display font-extrabold uppercase text-cream text-lg cursor-pointer list-none flex items-center justify-between gap-4">
                    {f.q}
                    <span className="font-mono text-coral group-open:rotate-45 transition-transform shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="text-body leading-relaxed mt-4">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-3xl">
            <HeadlineBlock className="mb-6">
              Find out where you <span className="text-coral">stand</span>
            </HeadlineBlock>
            <p className="text-lg text-body leading-relaxed mb-8 max-w-[60ch]">
              85% of UK small businesses are invisible in AI search. Fifteen minutes tells you if you
              are one of them.
            </p>
            <a href="#visibility-check" className={`${CTA_CLASS} text-lg`}>
              Run My Free Check
            </a>
          </div>
        </Container>
      </section>

      <StickyCheckCTA />
    </div>
  );
}
