import { Button } from '../../../src/components/Button';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';
import { Container } from '../../../src/components/Container';
import { HeadlineBlock } from '../../../src/components/HeadlineBlock';
import { AIVisibilityCheckForm } from '../../../src/components/AIVisibilityCheckForm';
import { ResourcesCompliance } from '../../../src/components/ResourcesCompliance';
import { AICitationProof } from '../../../src/components/AICitationProof';

const LINK = 'underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors';

const SERVICES = [
  {
    title: 'AI-assisted keyword & content strategy',
    body: (
      <>We find the questions your buyers ask machines, not just the phrases they typed in 2019, and build the content plan around them.</>
    ),
  },
  {
    title: 'Content optimised for AI Overviews',
    body: (
      <>Pages structured so Google&rsquo;s AI quotes you instead of a competitor &mdash; clear answers, clean structure, real expertise on show.</>
    ),
  },
  {
    title: 'Technical SEO',
    body: <>Speed, indexing, schema, internal linking. The unglamorous foundations both Google and the AI engines still require.</>,
  },
  {
    title: 'Generative engine optimisation',
    body: (
      <>
        Getting you cited by ChatGPT, Claude, Perplexity and Gemini. It&rsquo;s a specialism in its own right &mdash;{' '}
        <a href="/services/geo" className={LINK}>see the full GEO service</a>.
      </>
    ),
  },
  {
    title: 'Plain-English reporting',
    body: <>What moved, why, and what it means for enquiries. No 40-page PDF of vanity graphs.</>,
  },
];

const AUDIENCES = [
  {
    title: 'Solicitors',
    body: '“Best family solicitor near me” is now answered by AI before a results page loads. Firms cited in that answer take the enquiry; everyone else relies on referrals holding up.',
  },
  {
    title: 'Accountants',
    body: 'Businesses switch accountants once a year at most, and they start by asking an engine who to consider. Be in the shortlist or wait another year.',
  },
  {
    title: 'Dentists',
    body: 'New patients compare practices at 10pm, increasingly by asking AI. Visibility in those answers fills appointment books quietly and consistently.',
  },
  {
    title: 'Trades & home services',
    body: 'Emergency searches are becoming AI questions with instant answers. The plumber the engine names gets the job — there is no page two.',
  },
];

export default function Page() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="border-b border-hairline">
        <Container className="py-20 md:py-28">
          <div className="max-w-4xl">
            <HeadlineBlock as="h1" kicker="AI SEO • AI SEARCH OPTIMISATION">
              AI SEO Agency for <span className="text-coral">UK Businesses</span>
            </HeadlineBlock>
            <p className="text-lg md:text-xl text-body leading-relaxed mb-6 mt-6 max-w-[65ch]">
              Search didn&rsquo;t die. It split in two &mdash; and most agencies are still only optimising for half of it.
            </p>
            <p className="text-lg text-body leading-relaxed mb-8 max-w-[65ch]">
              We get you ranked in Google and cited in AI answers, with one strategy and one plain-English report. Start by finding out where you stand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center">
              <a href="#visibility-check">
                <Button variant="primary">Check My AI Visibility &mdash; Free</Button>
              </a>
            </div>
            <p className="text-sm text-muted mt-4">48-hour turnaround. No call required. No obligation.</p>
            <p className="text-body mt-6">
              Want the deep dive first?{' '}
              <a href="/services/geo-audit" className={LINK}>GEO Audit &mdash; &pound;247 &rarr;</a>
            </p>
          </div>
        </Container>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            The report says page one. <span className="text-coral">The phone says otherwise.</span>
          </HeadlineBlock>
          <div className="space-y-6 text-lg text-body leading-relaxed max-w-[65ch]">
            <p>
              Plenty of UK businesses are paying for SEO that&rsquo;s technically working &mdash; rankings up, traffic steady &mdash; while enquiries quietly fall. The missing piece isn&rsquo;t on the ranking report, because the ranking report only covers Google&rsquo;s blue links.
            </p>
            <p>
              Your customers now ask in two places. Some still search Google &mdash; where AI Overviews increasingly answer before anyone scrolls to your listing. The rest ask ChatGPT, Perplexity or Gemini directly and never open a results page at all.
            </p>
          </div>
        </Container>
      </section>

      {/* ── AGITATE ── */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            Optimising for half of search is <span className="text-coral">the expensive option</span>
          </HeadlineBlock>
          <div className="space-y-6 text-lg text-body leading-relaxed max-w-[65ch]">
            <p>
              Every month you optimise for blue links alone, the AI half of your market gets answered by someone else &mdash; and those answers compound. The engines keep citing the businesses they already trust, which makes the gap harder to close the longer you leave it. The cheapest time to fix this was last year. The second cheapest is now.
            </p>
          </div>
        </Container>
      </section>

      {/* ── SOLUTION ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            What is <span className="text-coral">AI SEO?</span>
          </HeadlineBlock>
          <div className="space-y-6 text-lg text-body leading-relaxed max-w-[65ch]">
            <p>
              AI SEO is search optimisation built for the AI era: earning traditional Google rankings while also being surfaced in AI Overviews and cited by AI assistants. It combines classic technical and content SEO with the newer discipline of{' '}
              <a href="/services/geo" className={LINK}>generative engine optimisation</a>.
            </p>
            <p>
              One strategy, both halves of search, measured honestly: rankings, citations, and &mdash; the number that actually matters &mdash; enquiries.
            </p>
          </div>
        </Container>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-16">
            What&rsquo;s <span className="text-coral">included</span>
          </HeadlineBlock>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {SERVICES.map((s, i) => (
              <Card key={s.title} hover className="bg-charcoal h-full">
                <Icon letter={`0${i + 1}`} size="lg" mono />
                <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">{s.title}</h3>
                <p className="text-body leading-relaxed">{s.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── MID-PAGE CTA STRIP ── */}
      <section className="bg-ink border-y-2 border-coral py-12 md:py-16">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="font-display font-extrabold text-2xl md:text-3xl uppercase text-cream max-w-[34ch]">
              One free check shows you both halves: Google visibility and AI citations.
            </p>
            <a href="#visibility-check" className="shrink-0">
              <Button variant="primary">Get the Free Check &rarr;</Button>
            </a>
          </div>
        </Container>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-16">
            Built for firms that live on <span className="text-coral">local reputation</span>
          </HeadlineBlock>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {AUDIENCES.map((a) => (
              <Card key={a.title} className="h-full">
                <h3 className="font-display font-extrabold text-2xl uppercase text-cream mb-4">{a.title}</h3>
                <p className="text-body leading-relaxed">{a.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── PROOF (shared component — same grid + lightbox as the GEO Audit page) ── */}
      <AICitationProof />

      {/* ── FORM ── */}
      <AIVisibilityCheckForm />

      {/* ── PRICING ── */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-12">
            <span className="text-coral">Pricing</span>
          </HeadlineBlock>
          <div className="space-y-6">
            <div className="bg-charcoal border-2 border-coral shadow-brutal-coral p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3 className="font-display font-extrabold text-2xl uppercase text-cream mb-2">AI Visibility Check &mdash; Free</h3>
                <p className="text-body leading-relaxed max-w-[60ch]">
                  Both halves of your search presence, summarised in plain English within 48 hours.
                </p>
              </div>
              <a href="#visibility-check" className="shrink-0">
                <Button variant="primary" className="w-full md:w-auto">Check My AI Visibility &mdash; Free</Button>
              </a>
            </div>

            <div className="bg-charcoal border-2 border-hairline p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3 className="font-display font-extrabold text-2xl uppercase text-cream mb-2">GEO Audit &mdash; &pound;247, one-off</h3>
                <p className="text-body leading-relaxed max-w-[60ch]">Full scored report with a prioritised fix list.</p>
              </div>
              <a href="/services/geo-audit" className="shrink-0">
                <Button variant="secondary" className="w-full md:w-auto">See the GEO Audit</Button>
              </a>
            </div>

            <div className="bg-charcoal border-2 border-hairline p-6 md:p-8">
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mb-2">AI SEO Retainer &mdash; from &pound;497/month</h3>
              <p className="text-body leading-relaxed max-w-[60ch]">
                Strategy, content, technical work and monthly reporting across Google and the AI engines. No long contracts.
              </p>
            </div>
          </div>
          <p className="text-body leading-relaxed mt-8 max-w-[65ch]">
            If your current SEO is already covering the AI side properly, the free check will say so, and we&rsquo;ll tell you to stay put.
          </p>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-12">
            Questions we <span className="text-coral">actually get</span>
          </HeadlineBlock>
          <div className="space-y-4 max-w-[65ch]">
            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center gap-4">
                What&rsquo;s the difference between an AI SEO agency and a traditional one?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                A traditional agency optimises for Google&rsquo;s ranked links. An AI SEO agency covers those and the AI-generated answers in ChatGPT, Perplexity, Gemini and AI Overviews &mdash; because your customers now use both.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center gap-4">
                Do I need AI SEO or GEO?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                If you want one partner covering rankings and AI citations together, AI SEO. If you specifically want the citation work, our{' '}
                <a href="/services/geo" className={LINK}>generative engine optimisation agency</a> service is the focused option. The free check will tell you which gap is bigger.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center gap-4">
                Can you work as an AI SEO consultant on a project basis?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Yes. Strategy projects and one-off implementations are available alongside the retainer.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center gap-4">
                How do you report results?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Monthly, in plain English: rankings, AI citations, traffic and enquiries, with what changed and what we&rsquo;re doing next. No jargon, no padding.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center gap-4">
                Do you cover London and the rest of the UK?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Yes. We&rsquo;re based in Andover, Hampshire and work remote-first with clients across the UK, London included.
              </div>
            </details>
          </div>
        </Container>
      </section>

      <ResourcesCompliance links={[
        { text: 'Search engine optimisation (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Search_engine_optimization', context: 'The classic discipline AI SEO builds on' },
        { text: 'Generative engine optimisation (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Generative_engine_optimization', context: 'The AI-answer half of the job — our focused GEO service' },
        { text: 'Generative artificial intelligence (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Generative_artificial_intelligence', context: 'The systems now answering searches before the blue links' },
        { text: 'ChatGPT (Wikipedia)', url: 'https://en.wikipedia.org/wiki/ChatGPT', context: 'One of the AI assistants your customers now ask directly' },
      ]} />

      {/* ── CLOSING CTA ── */}
      <section className="bg-charcoal border-t-2 border-coral py-24 md:py-32">
        <Container>
          <HeadlineBlock className="mb-6">
            Half your market is asking machines. <span className="text-coral">Find out what the machines say about you.</span>
          </HeadlineBlock>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a href="#visibility-check">
              <Button variant="primary">Check My AI Visibility &mdash; Free</Button>
            </a>
          </div>
          <p className="text-sm text-muted mt-4">48 hours. Plain English. No obligation.</p>
        </Container>
      </section>
    </div>
  );
}
