import { Button } from '../../../src/components/Button';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';
import { Container } from '../../../src/components/Container';
import { HeadlineBlock } from '../../../src/components/HeadlineBlock';
import { AIVisibilityCheckForm } from '../../../src/components/AIVisibilityCheckForm';
import { ResourcesCompliance } from '../../../src/components/ResourcesCompliance';

const SERVICES = [
  {
    title: 'Citability optimisation',
    body: 'We restructure your key pages so AI engines can lift clean, quotable answers from them. If a machine can’t quote you, it won’t cite you.',
  },
  {
    title: 'Schema & structured data',
    body: 'Machine-readable facts about your business: services, prices, location, credentials. The engines stop guessing and start stating.',
  },
  {
    title: 'llms.txt & AI crawler access',
    body: 'We make sure the AI crawlers can reach your site and hand them a map of what matters. Most sites block or confuse them without knowing.',
  },
  {
    title: 'Entity & citation building',
    body: 'Consistent facts about your business across the directories and sources the models actually read. This is where citations are won.',
  },
  {
    title: 'AI answer monitoring',
    body: 'Monthly checks across ChatGPT, Claude, Perplexity, Gemini and AI Overviews. You see exactly where you’re mentioned, where you’re not, and the trend.',
  },
];

const PROOF_SLOTS = [
  { slot: 'geo-proof-1', alt: 'Screenshot of an AI engine response citing Antek Automation among UK AI automation agencies' },
  { slot: 'geo-proof-2', alt: 'Screenshot of an AI engine naming Antek Automation in a recommendation answer' },
  { slot: 'geo-proof-3', alt: 'Screenshot of an AI Overview referencing Antek Automation, Andover' },
];

const FAQS = [
  {
    q: 'What does a GEO agency actually do?',
    a: 'Technical and content work that makes your business citable by AI engines: structured data, citable page copy, llms.txt, crawler access, and building consistent mentions on sources the models trust. Then monthly measurement of whether it’s working.',
  },
  {
    q: 'How long before we see AI citations?',
    a: 'Technical fixes land in days; citations typically start appearing within 6–12 weeks depending on your starting point and sector competition. We won’t promise a date, and you should be wary of anyone who does.',
  },
  {
    q: 'Which AI engines do you cover?',
    a: 'ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews. If a new engine matters to UK buyers, we add it to monitoring at no extra charge.',
  },
  {
    q: 'Do you work UK-wide?',
    a: 'Yes. We’re based in Andover, Hampshire and work remote-first — same service whether you’re in Winchester or Glasgow.',
  },
];

export default function Page() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="border-b border-hairline">
        <Container className="py-20 md:py-28">
          <div className="max-w-4xl">
            <HeadlineBlock as="h1" kicker="GENERATIVE ENGINE OPTIMISATION">
              Generative Engine Optimisation <span className="text-coral">Agency</span>
            </HeadlineBlock>
            <p className="text-lg md:text-xl text-body leading-relaxed mb-6 mt-6 max-w-[65ch]">
              Your next customer isn&rsquo;t Googling you. They&rsquo;re asking ChatGPT &mdash; and it&rsquo;s recommending someone else.
            </p>
            <p className="text-lg text-body leading-relaxed mb-8 max-w-[65ch]">
              GEO is the work that puts your business inside AI answers. We do it for ourselves, we can prove it, and we&rsquo;ll show you exactly where you stand &mdash; free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center">
              <a href="#visibility-check">
                <Button variant="primary">Check My AI Visibility &mdash; Free</Button>
              </a>
            </div>
            <p className="text-sm text-muted mt-4">48-hour turnaround. No call required. No obligation.</p>
            <p className="text-body mt-6">
              Prefer the full picture?{' '}
              <a href="/services/geo-audit" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">
                The GEO Audit is &pound;247 &rarr;
              </a>
            </p>
          </div>
        </Container>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            When AI answers, most businesses <span className="text-coral">don&rsquo;t exist</span>
          </HeadlineBlock>
          <div className="space-y-6 text-lg text-body leading-relaxed max-w-[65ch]">
            <p>
              Ask ChatGPT to recommend an accountant in your town. Ask Perplexity for a reliable emergency plumber. Ask Google&rsquo;s AI Overview which agency to hire. You&rsquo;ll get two or three names and a summary. Everyone else is invisible.
            </p>
            <p>
              That&rsquo;s not a future problem. AI Overviews already sit above the organic results for a growing share of UK searches, and ChatGPT handles millions of &ldquo;who should I use&rdquo; questions every day. The customer never sees a list of ten blue links. They see an answer.
            </p>
            <p>
              If you&rsquo;re not in the answer, you don&rsquo;t come second. You don&rsquo;t come anywhere.
            </p>
          </div>
        </Container>
      </section>

      {/* ── AGITATE ── */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            Your SEO can be working and you&rsquo;ll <span className="text-coral">still lose</span>
          </HeadlineBlock>
          <div className="space-y-6 text-lg text-body leading-relaxed max-w-[65ch]">
            <p>
              Here&rsquo;s the uncomfortable bit: you can rank page one on Google and still be absent from AI answers. The engines don&rsquo;t pick citations the way Google ranks pages. They favour businesses with clean entity data, structured markup, citable content, consistent facts across the web, and mentions on sources the models trust.
            </p>
            <p>
              Most UK small business websites have none of that &mdash; not because the businesses are bad, but because nobody&rsquo;s done the work. Meanwhile the two or three competitors who have done it are quietly taking every AI-referred enquiry in your area. You&rsquo;ll never see it happen. There&rsquo;s no ranking report for work you never knew existed.
            </p>
          </div>
        </Container>
      </section>

      {/* ── SOLUTION ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            What is <span className="text-coral">generative engine optimisation?</span>
          </HeadlineBlock>
          <div className="space-y-6 text-lg text-body leading-relaxed max-w-[65ch]">
            <p>
              Generative engine optimisation (GEO) is the practice of structuring a business&rsquo;s website, data and off-site presence so that AI engines &mdash; ChatGPT, Claude, Perplexity, Gemini and Google AI Overviews &mdash; cite and recommend it in their answers. Where SEO earns rankings in a list of links, GEO earns inclusion in the answer itself.
            </p>
            <p>
              It&rsquo;s not a dark art and it&rsquo;s not a gamble. It&rsquo;s a checklist of technical and content work, done properly, then measured: are the engines mentioning you or not?
            </p>
          </div>
        </Container>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-16">
            What we <span className="text-coral">actually do</span>
          </HeadlineBlock>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {SERVICES.map((s, i) => (
              <Card key={s.title} hover className="bg-charcoal h-full">
                <Icon letter={`0${i + 1}`} size="lg" mono />
                <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                  {s.title}
                </h3>
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
            <p className="font-display font-extrabold text-2xl md:text-3xl uppercase text-cream max-w-[30ch]">
              Find out in 48 hours whether the AI engines know you exist.
            </p>
            <a href="#visibility-check" className="shrink-0">
              <Button variant="primary">Get the Free Check &rarr;</Button>
            </a>
          </div>
        </Container>
      </section>

      {/* ── PROOF ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            We don&rsquo;t ask you to <span className="text-coral">take our word for it</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-relaxed mb-10 max-w-[65ch]">
            We use our own service on ourselves. Ask an AI assistant about UK AI automation agencies and see who comes up &mdash; a small agency in Andover, Hampshire, competing with London firms ten times our size. That&rsquo;s not luck. It&rsquo;s the exact process we&rsquo;ll run on your business.
          </p>

          {/* Screenshot slots — drop real AI-citation screenshots into /public/proof/<slot>.webp */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {PROOF_SLOTS.map((p) => (
              <div key={p.slot} className="bg-charcoal border-2 border-hairline shadow-brutal p-3">
                <img
                  src={`/proof/${p.slot}.webp`}
                  alt={p.alt}
                  width={960}
                  height={540}
                  loading="lazy"
                  className="aspect-video w-full object-cover object-top border-2 border-hairline"
                />
              </div>
            ))}
          </div>

          <div className="border-t border-hairline pt-6">
            <p className="font-mono uppercase text-sm text-body tracking-wider">
              Certified Retell AI Partner &middot; 30+ years in service management &middot; Based in Andover, serving the UK &middot; Transparent pricing, no lock-in
            </p>
          </div>
        </Container>
      </section>

      {/* ── AEO ── */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          {/* H2 kept lowercase in the DOM so it contains the exact phrase "answer engine optimisation" for AEO; CSS renders it uppercase. */}
          <HeadlineBlock className="mb-8">
            answer engine <span className="text-coral">optimisation</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-relaxed max-w-[65ch]">
            You&rsquo;ll also hear this called answer engine optimisation (AEO) &mdash; tuning content for the question-and-answer formats AI engines prefer. We treat AEO as part of the job, not a separate invoice. Every GEO engagement includes it.
          </p>
        </Container>
      </section>

      {/* ── GEO vs SEO ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-10">
            GEO vs SEO &mdash; <span className="text-coral">do you need both?</span>
          </HeadlineBlock>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-2 border-hairline text-left min-w-[560px]">
              <thead>
                <tr className="bg-ink border-b-2 border-hairline">
                  <th className="p-4 font-display font-extrabold uppercase text-cream border-r border-hairline">&nbsp;</th>
                  <th className="p-4 font-display font-extrabold uppercase text-cream border-r border-hairline">SEO</th>
                  <th className="p-4 font-display font-extrabold uppercase text-coral">GEO</th>
                </tr>
              </thead>
              <tbody className="text-body">
                <tr className="border-b border-hairline">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Goal</td>
                  <td className="p-4 border-r border-hairline">Rankings in links</td>
                  <td className="p-4">Inclusion in answers</td>
                </tr>
                <tr className="border-b border-hairline">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Where you appear</td>
                  <td className="p-4 border-r border-hairline">Google results page</td>
                  <td className="p-4">ChatGPT, Claude, Perplexity, Gemini, AI Overviews</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-cream border-r border-hairline">How it&rsquo;s measured</td>
                  <td className="p-4 border-r border-hairline">Positions and clicks</td>
                  <td className="p-4">Citations and mentions</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-lg text-body leading-relaxed max-w-[65ch]">
            Most businesses need both, weighted by where their customers ask. If you want the SEO side handled too, that&rsquo;s our{' '}
            <a href="/services/ai-seo" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">
              AI SEO service
            </a>
            .
          </p>
        </Container>
      </section>

      {/* ── FORM ── */}
      <AIVisibilityCheckForm />

      {/* ── PRICING ── */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-12">
            Pricing &mdash; start free, <span className="text-coral">escalate only if it&rsquo;s worth it</span>
          </HeadlineBlock>
          <div className="space-y-6">
            <div className="bg-charcoal border-2 border-coral shadow-brutal-coral p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3 className="font-display font-extrabold text-2xl uppercase text-cream mb-2">AI Visibility Check &mdash; Free</h3>
                <p className="text-body leading-relaxed max-w-[60ch]">
                  Where you stand across the engines, in plain English, within 48 hours. No call, no obligation.
                </p>
              </div>
              <a href="#visibility-check" className="shrink-0">
                <Button variant="primary" className="w-full md:w-auto">Check My AI Visibility &mdash; Free</Button>
              </a>
            </div>

            <div className="bg-charcoal border-2 border-hairline p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex-1">
                <h3 className="font-display font-extrabold text-2xl uppercase text-cream mb-2">GEO Audit &mdash; &pound;247, one-off</h3>
                <p className="text-body leading-relaxed max-w-[60ch]">
                  The full scored report: citability, schema, llms.txt, crawler access, entity consistency, competitor citations &mdash; and a prioritised fix list you can action with anyone, not just us.
                </p>
              </div>
              <a href="/services/geo-audit" className="shrink-0">
                <Button variant="secondary" className="w-full md:w-auto">See the GEO Audit</Button>
              </a>
            </div>

            <div className="bg-charcoal border-2 border-hairline p-6 md:p-8">
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mb-2">GEO Retainer &mdash; from &pound;297/month</h3>
              <p className="text-body leading-relaxed max-w-[60ch]">
                We do the fixes, build the citations and monitor the engines monthly. Projects from &pound;997. No long contracts.
              </p>
            </div>
          </div>
          <p className="text-body leading-relaxed mt-8 max-w-[65ch]">
            If the audit finds nothing worth fixing, we&rsquo;ll tell you that too. We&rsquo;d rather keep the reputation than the &pound;247.
          </p>
        </Container>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-12">
            How it <span className="text-coral">works</span>
          </HeadlineBlock>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {[
              { n: '01', t: 'Check', d: 'Free, in 48 hours. We tell you where you stand across the engines.' },
              { n: '02', t: 'Audit', d: 'A scored report with a prioritised fix list you can action with anyone.' },
              { n: '03', t: 'Fix', d: 'We do the work, or hand you the list to run yourself.' },
              { n: '04', t: 'Monitor', d: 'Monthly citation tracking so you can see the trend, not guess at it.' },
            ].map((step) => (
              <Card key={step.n} className="h-full">
                <Icon letter={step.n} size="lg" mono />
                <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-3">{step.t}</h3>
                <p className="text-body leading-relaxed">{step.d}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-12">
            Questions we <span className="text-coral">actually get</span>
          </HeadlineBlock>
          <div className="space-y-4 max-w-[65ch]">
            {FAQS.map((f) => (
              <details key={f.q} className="border-2 border-hairline bg-charcoal group">
                <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center gap-4">
                  {f.q}
                  <span className="text-coral text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
                </summary>
                <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">{f.a}</div>
              </details>
            ))}
            <details className="border-2 border-hairline bg-charcoal group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center gap-4">
                Is GEO a replacement for SEO?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                No. GEO gets you into AI answers; SEO still wins Google rankings, and the two feed each other. If you need both handled together, see our{' '}
                <a href="/services/ai-seo" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">AI SEO services</a>.
              </div>
            </details>
          </div>
        </Container>
      </section>

      <ResourcesCompliance links={[
        { text: 'Generative engine optimisation (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Generative_engine_optimization', context: 'The discipline this page delivers — structuring content so AI engines cite you' },
        { text: 'Generative artificial intelligence (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Generative_artificial_intelligence', context: 'The AI systems GEO optimises for — ChatGPT, Claude, Perplexity, Gemini' },
        { text: 'Large language model (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Large_language_model', context: 'How AI engines generate the answers your business needs to appear in' },
        { text: 'Search engine optimisation (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Search_engine_optimization', context: 'The sibling discipline GEO complements, rather than replaces' },
      ]} />

      {/* ── CLOSING CTA ── */}
      <section className="bg-charcoal border-t-2 border-coral py-24 md:py-32">
        <Container>
          <HeadlineBlock className="mb-6">
            The engines are answering questions about your trade today. <span className="text-coral">With or without you.</span>
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
