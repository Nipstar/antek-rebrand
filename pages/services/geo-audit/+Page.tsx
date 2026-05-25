import { Button } from '../../../src/components/Button';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';
import { QuickRecap } from '../../../src/components/QuickRecap';
import { ResourcesCompliance } from '../../../src/components/ResourcesCompliance';

export default function Page() {
  return (
    <div className="bg-off-white">

      {/* ── HERO ── */}
      <section className="bg-warm-beige border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              GEO AUDIT &bull; AI SEARCH VISIBILITY
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              Your Customers Are Asking AI. Is It Recommending You?
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              Right now, people are typing &ldquo;Who&rsquo;s the best plumber near me?&rdquo; into ChatGPT. They&rsquo;re asking Perplexity for recommendations. Google&rsquo;s showing AI-generated answers above the traditional results. If your business isn&rsquo;t in those answers, you&rsquo;re not ranking low &mdash; you&rsquo;re invisible. Completely absent from a channel that industry analysts expect to handle a substantial and growing share of search queries in 2026 and beyond.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              Our GEO Audit shows you exactly where you stand &mdash; and what to do about it. No jargon, no 50-page report. Just a clear, prioritised action plan.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              For most businesses, that&rsquo;s the beginning of an ongoing process &mdash; not a one-time fix. AI models update. Competitors improve. New platforms emerge. The businesses that stay visible are the ones that keep working at it.
            </p>
            <p className="text-sm text-mid-gray mb-8">By <a href="/about" className="underline hover:text-terracotta transition-colors">Andy Norman</a>, Founder | 30+ years in technology</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <a href="/contact">
                <Button variant="primary">Book Your Free AI Visibility Check</Button>
              </a>
              <a href="tel:03330389960">
                <Button variant="secondary">Call 0333 038 9960</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <QuickRecap items={[
        'A GEO audit (Generative Engine Optimisation) measures how visible your business is in AI-generated answers — ChatGPT, Perplexity, Google AI Overviews, Claude, and Gemini',
        'For UK SMEs that rely on being found online, especially those already investing in SEO or Google Ads',
        'Quick Check from £247 one-off · Full Audit £497 · Audit + Fix from £997 · Retainer from £497/month — <a href="/pricing#geo-audit" class="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">see full pricing</a>',
        'All audits delivered within 24 hours',
        'GEO is ongoing work — most clients start with an audit, then move to a monthly retainer',
      ]} />

      {/* ── WHAT IS GEO ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            What Is GEO?
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            GEO &mdash; Generative Engine Optimisation &mdash; is SEO&rsquo;s sharper sibling. While SEO gets you ranking in Google&rsquo;s blue links, GEO gets you cited in the AI-generated answers that are increasingly replacing those links.
          </p>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            When ChatGPT recommends a business, it doesn&rsquo;t scroll through search results. It pulls from content it trusts, understands, and can verify. Getting into that answer requires a different approach: clear content structure, proper schema markup, strong authority signals, and extractable statements AI can confidently cite.
          </p>
          <p className="text-lg text-charcoal leading-relaxed">
            Most small businesses haven&rsquo;t done any of this. Which is exactly why it&rsquo;s an opportunity right now.
          </p>
        </div>
      </section>

      {/* ── WHAT OUR GEO AUDIT COVERS ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              What Our GEO Audit Covers
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card hover>
              <Icon letter="1" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                AI Visibility
              </h3>
              <p className="text-charcoal leading-relaxed">
                We test real prompts your customers would use across ChatGPT, Perplexity, Google AI Overviews and Claude. How often do you appear? How are you described?
              </p>
            </Card>

            <Card hover>
              <Icon letter="2" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Citation Readiness
              </h3>
              <p className="text-charcoal leading-relaxed">
                Can AI actually quote your content? We check for clear statements, attributed data, and extractable insights.
              </p>
            </Card>

            <Card hover>
              <Icon letter="3" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Technical Setup
              </h3>
              <p className="text-charcoal leading-relaxed">
                Schema markup, robots.txt, llms.txt, site speed, mobile-readiness, structured data.
              </p>
            </Card>

            <Card hover>
              <Icon letter="4" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Content Structure
              </h3>
              <p className="text-charcoal leading-relaxed">
                Does your site answer questions directly? FAQ coverage, heading hierarchy, answer density.
              </p>
            </Card>

            <Card hover>
              <Icon letter="5" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Authority Signals
              </h3>
              <p className="text-charcoal leading-relaxed">
                NAP consistency, directory listings, review profiles, brand mentions across the web.
              </p>
            </Card>

            <Card hover>
              <Icon letter="6" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Competitor Gaps
              </h3>
              <p className="text-charcoal leading-relaxed">
                Where competitors are getting cited and you&rsquo;re not. Which prompts they&rsquo;re winning.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── PACKAGES ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              Packages
            </h2>
            <p className="text-mid-gray text-sm">
              All prices ex-VAT. <a href="/pricing#geo-audit" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Full pricing page</a>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Quick Check */}
            <Card>
              <div className="text-center mb-6">
                <h3 className="font-black text-2xl uppercase text-charcoal mb-2">Quick Check</h3>
                <p className="font-black text-5xl text-terracotta">&pound;247</p>
              </div>
              <ul className="space-y-3 text-charcoal mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>AI visibility test across 4 platforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>10 real customer prompts tested</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Citation readiness score</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Top 5 priorities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Loom video walkthrough + 1-page PDF</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Delivered within 24 hours</span>
                </li>
              </ul>
              <a href="/contact">
                <Button variant="secondary" className="w-full">Get Started</Button>
              </a>
            </Card>

            {/* Full Audit */}
            <Card>
              <div className="border-3 border-terracotta bg-peach px-4 py-1 inline-block mb-4">
                <span className="font-black uppercase text-sm text-charcoal">Most Popular</span>
              </div>
              <div className="text-center mb-6">
                <h3 className="font-black text-2xl uppercase text-charcoal mb-2">Full Audit</h3>
                <p className="font-black text-5xl text-terracotta">&pound;497</p>
              </div>
              <ul className="space-y-3 text-charcoal mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Everything in Quick Check</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Full technical crawlability review</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Schema audit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Content structure analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>3 competitor benchmarks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>30+ test prompts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Effort/impact action plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>PDF report + 30-min video walkthrough</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Delivered within 24 hours</span>
                </li>
              </ul>
              <a href="/contact">
                <Button variant="primary" className="w-full">Get Started</Button>
              </a>
            </Card>

            {/* Audit + Fix */}
            <Card>
              <div className="text-center mb-6">
                <h3 className="font-black text-2xl uppercase text-charcoal mb-2">Audit + Fix</h3>
                <p className="font-black text-5xl text-terracotta"><span className="text-2xl mr-2">from</span>&pound;997</p>
              </div>
              <ul className="space-y-3 text-charcoal mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Full Audit included</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>3 weeks hands-on implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Schema deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Content restructuring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>llms.txt setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Directory submissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta font-black text-lg mt-0.5">&bull;</span>
                  <span>Re-test to measure improvement</span>
                </li>
              </ul>
              <a href="/contact">
                <Button variant="secondary" className="w-full">Get Started</Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* ── WHY ONGOING ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-warm-beige">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            GEO Doesn&rsquo;t Happen Overnight
          </h2>
          <div className="space-y-6 text-lg text-charcoal leading-relaxed">
            <p>
              The audit tells you where you stand and what&rsquo;s broken. The fix gets you in front of AI search for the first time. But staying there is a different problem.
            </p>
            <p>
              AI models update their training and retrieval systems every few months. ChatGPT Search rolls out new indexing. Perplexity changes which sources it trusts. Google AI Overviews shifts what it surfaces. Your competitors aren&rsquo;t standing still &mdash; they&rsquo;re fixing the same things you are.
            </p>
            <p>
              A business that does a one-off audit and never revisits it will see its AI visibility erode. The citations you earn today aren&rsquo;t guaranteed tomorrow. Content needs refreshing, schema needs maintaining, new questions your customers are asking need answering.
            </p>
            <div className="border-3 border-charcoal bg-white p-6 shadow-brutal-sm">
              <p className="font-black text-charcoal text-xl mb-2">Think of it like SEO was in 2010.</p>
              <p>The businesses that treated it as a one-time job lost their rankings within a year. The ones that kept at it built positions that compounded. GEO is the same, but the window to build an early advantage is shorter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MONTHLY RETAINER ── */}
      <section className="border-b-3 border-charcoal py-20 md:py-28 bg-peach">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-4">
            Monthly GEO Retainer
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-8 max-w-2xl">
            From <span className="font-black">&pound;497/month</span>, rolling monthly after an initial 3-month foundation period. Most clients start with a Full Audit or Audit + Fix, then move to the retainer once the foundations are in place.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-3 border-charcoal bg-white p-6 shadow-brutal-sm">
              <h3 className="font-black text-lg uppercase text-charcoal mb-4">What&rsquo;s included monthly</h3>
              <ul className="space-y-3 text-charcoal">
                {[
                  'AI citation monitoring across 5 platforms',
                  'Content updates based on what AI is now rewarding',
                  'Schema maintenance as standards evolve',
                  'New Q&A content for emerging search prompts',
                  'Monthly report showing citation movement',
                  'Quarterly strategy call',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-terracotta font-black text-lg leading-none mt-0.5 shrink-0">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-3 border-charcoal bg-white p-6 shadow-brutal-sm">
              <h3 className="font-black text-lg uppercase text-charcoal mb-4">Why it takes 3 months</h3>
              <ul className="space-y-3 text-charcoal">
                {[
                  'Month 1: Audit findings implemented, foundations fixed',
                  'Month 2: AI engines begin re-indexing your updated content',
                  'Month 3: First measurable citation improvements visible',
                  'Month 4+: Ongoing optimisation compounds the gains',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-terracotta font-black text-lg leading-none mt-0.5 shrink-0">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <a href="/contact">
            <button className="font-black uppercase px-7 py-3 border-3 border-charcoal shadow-brutal-sm transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-xs bg-terracotta text-off-white">
              Ask About the Retainer
            </button>
          </a>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            Who This Is For
          </h2>
          <ul className="space-y-4 text-lg text-charcoal leading-relaxed">
            <li className="flex items-start gap-3">
              <span className="text-terracotta font-black text-xl mt-0.5">&bull;</span>
              <span>Trades businesses</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-terracotta font-black text-xl mt-0.5">&bull;</span>
              <span>Professional services</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-terracotta font-black text-xl mt-0.5">&bull;</span>
              <span>Local businesses with defined service areas</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-terracotta font-black text-xl mt-0.5">&bull;</span>
              <span>MSPs and IT companies</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-terracotta font-black text-xl mt-0.5">&bull;</span>
              <span>Any SME/SMB that relies on being found online</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            Why Us?
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            We&rsquo;re not an SEO agency sticking &ldquo;AI optimisation&rdquo; on the menu because it&rsquo;s trendy. We build AI voice agents, chatbots and automation workflows every single day. We understand how AI systems retrieve, evaluate and cite content because we work with the same technology stack.
          </p>
          <p className="text-lg text-charcoal leading-relaxed">
            Based in Hampshire. UK-wide. 30+ years in service business technology.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What is a GEO audit?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                A GEO audit assesses how visible your business is in AI-generated search results from ChatGPT, Perplexity, Google AI Overviews and Claude. It evaluates your technical setup, content structure, authority signals and citation readiness, then provides a prioritised action plan.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How is GEO different from SEO?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                SEO focuses on ranking in Google&rsquo;s traditional results. GEO focuses on getting cited in AI-generated answers. AI engines prioritise content clarity, structured data and extractable statements over keyword density and backlink volume.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How long does a GEO audit take?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                All audits are delivered within 24 hours. Ongoing fixes are handled through the monthly GEO retainer.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Which AI platforms do you test?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                ChatGPT (including ChatGPT Search), Perplexity, Google AI Overviews, Claude and Gemini. We use real prompts your customers would actually type.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do I need GEO if I already rank well on Google?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes. Many businesses rank well in Google&rsquo;s blue links but are completely absent from AI-generated answers. GEO and SEO complement each other, but they&rsquo;re different disciplines.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Is a GEO audit a one-time thing or ongoing work?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Both, in sequence. The audit is a one-off snapshot of where you stand today. Fixing the issues found is also a defined project. But maintaining and growing your AI visibility is ongoing &mdash; because AI models update, competitors don&rsquo;t stand still, and the content patterns that get cited evolve over time. Most clients do an audit first, then move to a monthly retainer once the foundations are in place. You won&rsquo;t see meaningful results from a one-off fix after 6 months unless someone is actively maintaining it.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What size business is this for?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                We&rsquo;ve priced this for small businesses and SMBs &mdash; sole traders through to companies with up to 50 staff. If you&rsquo;re spending money on Google Ads or SEO but haven&rsquo;t thought about AI search yet, this is for you.
              </div>
            </details>
          </div>
        </div>
      </section>

      <ResourcesCompliance links={[
        { text: 'Generative AI overview', url: 'https://en.wikipedia.org/wiki/Generative_artificial_intelligence', context: 'Background on the AI systems GEO optimises for' },
        { text: 'Google structured data documentation', url: 'https://developers.google.com/search/docs/appearance/structured-data', context: 'Official guidance on schema markup that improves AI citation readiness' },
        { text: 'schema.org', url: 'https://schema.org/', context: 'The structured data vocabulary used in GEO audit recommendations' },
        { text: 'ICO data protection guidance', url: 'https://ico.org.uk/for-organisations/guide-to-data-protection/', context: 'UK law on data handling within AI-driven content strategies' },
      ]} />

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Find Out If AI&rsquo;s Recommending You (Or Just Your Competitors)
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 30-minute AI visibility check. We&rsquo;ll run your business through ChatGPT and Perplexity live on the call. No pitch, no obligation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <a href="/contact">
              <Button variant="primary">Book Your Free AI Visibility Check</Button>
            </a>
            <a href="tel:03330389960">
              <Button variant="secondary">Call 0333 038 9960</Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
