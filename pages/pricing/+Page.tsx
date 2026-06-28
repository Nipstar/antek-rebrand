import { Button } from '../../src/components/Button'
import { CalBooking } from '../../src/components/CalBooking'
import { Container } from '../../src/components/Container'
import { Eyebrow } from '../../src/components/Eyebrow'
import { HeadlineBlock } from '../../src/components/HeadlineBlock'
import { PricingCard } from '../../src/components/PricingCard'
import { PricingComparisonTable } from '../../src/components/PricingComparisonTable'
import { TrustStrip } from '../../src/components/TrustStrip'
import { openBookingPopup } from '../../src/utils/bookingPopup'

const faq = [
  {
    q: "What's included in setup?",
    a: "For AI Voice Assistant and AI Receptionist: we scrape your website, configure call responses to your services and screening questions, and forward your number to us. For AI Chatbot: we train the bot on your content and integrate your calendar or CRM. For Workflow Automation: we run a discovery audit first — we won't automate processes until we understand them. Setup takes 24–48 hours for voice and chat products; 1–14 days for automations depending on complexity.",
  },
  {
    q: "What support is included?",
    a: "Standard support is responded to within 24 hours. Critical incidents — such as a voice agent going down during business hours — are responded to within 4 hours. Support is included across all monthly plans.",
  },
  {
    q: "How is caller data handled under GDPR?",
    a: "Call recordings are retained for 90 days then permanently deleted. Chat transcripts are retained for up to 12 months. Data is processed within the UK and EU. A Data Processing Agreement (DPA) is available on request. We are registered with the ICO as required under UK GDPR.",
  },
  {
    q: "Are there contracts or minimum terms?",
    a: "No contracts, no minimum terms. Monthly plans roll month-to-month — cancel with 30 days' notice. Workflow automation projects and GEO audits are one-off payments with no ongoing commitment unless you choose a retainer.",
  },
  {
    q: "When do you quote bespoke?",
    a: "Workflow automations with five or more steps, complex CRM integrations, or multi-system builds are scoped per project. We'll always audit first and give you a fixed quote before starting.",
  },
  {
    q: "Do you offer discounts for multi-product bundles?",
    a: "Yes. Speak to us if you're taking two or more products — we typically discount on a case-by-case basis. Book a free 30-min call to discuss.",
  },
  {
    q: "What happens if I want to cancel?",
    a: "Give us 30 days' notice. We'll return your data in a portable format. Workflow automations built on n8n keep running — you own them, not us. No lock-in.",
  },
  {
    q: "Do prices include VAT?",
    a: "All prices shown are ex-VAT. UK VAT at the current rate applies to UK-based businesses where applicable.",
  },
  {
    q: "How quickly will I see results?",
    a: "Voice and receptionist products start capturing calls from the first day live. Chatbots typically produce the first leads within 48 hours. Workflow automations save time from week one.",
  },
  {
    q: "Will callers or visitors know they're talking to AI?",
    a: "Most don't ask — and the majority of those who do are fine with it. About 1 in 20 callers notice unprompted. If someone asks directly, the AI will tell them honestly. If they request a human, we can transfer the call or take a message.",
  },
]

export default function Page() {
  return (
    <div>

      {/* Hero */}
      <section className="bg-ink border-b border-hairline">
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl">
            <HeadlineBlock
              as="h1"
              kicker={<>Pricing &bull; No Contracts &bull; UK-Based</>}
            >
              Transparent Pricing for <span className="text-coral">AI Automation</span>
            </HeadlineBlock>
            <p className="text-xl text-body leading-normal mb-8 mt-6 max-w-[60ch]">
              Fixed monthly plans for voice AI and chatbots. One-off projects for workflow automation and GEO audits. Voice plans start with 120 call minutes included. Chatbot conversations are unlimited. No hidden fees.
            </p>
            <Button variant="primary" onClick={() => openBookingPopup('pricing-hero')}>
              Book a free 30-min discovery call
            </Button>
            <TrustStrip className="mt-6" />
          </div>
        </Container>
      </section>

      {/* Comparison table */}
      <section className="py-20 md:py-28 border-b border-hairline">
        <Container>
          <HeadlineBlock className="mb-4"><span className="text-coral">Compare Products</span> at a Glance</HeadlineBlock>
          <p className="text-lg text-body mb-12 max-w-[65ch]">
            Four products. All priced for UK small businesses. All ready to go live within days, not months.
          </p>
          <PricingComparisonTable />
        </Container>
      </section>

      {/* AI Voice & Receptionist (combined — same pricing) */}
      <section id="ai-voice-assistant" className="py-20 md:py-28 border-b border-hairline">
        <span id="ai-receptionist" aria-hidden="true" className="block relative -top-24" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Eyebrow className="mb-3">AI Voice &amp; Receptionist</Eyebrow>
              <HeadlineBlock className="mb-6"><span className="text-coral">Inbound and Outbound</span>, Around the Clock</HeadlineBlock>
              <p className="text-lg text-body leading-normal mb-6 max-w-[60ch]">
                Same pricing, whether you want the productised <strong className="font-bold text-cream">AI Receptionist</strong> &mdash; answering, screening and booking your inbound calls &mdash; or a broader <strong className="font-bold text-cream">AI voice agent</strong> that also calls new leads back, qualifies them and chases follow-ups. 24/7, including evenings, weekends, and bank holidays.
              </p>
              <p className="text-body leading-normal mb-8 max-w-[60ch]">
                Every call ends with a summary sent to your phone or email: who called, what they wanted, what was booked. Industry-specific receptionist setups available for plumbers, electricians, HVAC, accountants, lawyers, vets, dentists, and therapists. Built on <a href="https://www.retellai.com" target="_blank" rel="noopener" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Retell AI</a> &mdash; Antek Automation is a certified Retell AI partner.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <a href="/services/ai-voice-assistants" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors font-bold text-cream">
                  Full details &rarr; AI Voice Agents
                </a>
                <a href="/ai-receptionist" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors font-bold text-cream">
                  Full details &rarr; AI Receptionist
                </a>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Starter', price: '£97', mins: '120 mins/month', note: 'Call answering, screening, summaries', featured: false },
                { name: 'Standard', price: '£198', mins: '240 mins/month', note: 'Starter + CRM & API integrations', featured: true },
                { name: 'Pro', price: 'Contact us', mins: 'Custom minutes', note: 'Standard + workflow automations for complex voice agent workflows', featured: false },
              ].map((tier) => (
                <div key={tier.name} className={`border-2 p-6 ${tier.featured ? 'bg-ink border-coral shadow-brutal-coral' : 'bg-ink border-hairline shadow-brutal-sm'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-display font-extrabold text-lg uppercase text-cream">{tier.name}</h4>
                    {tier.featured && <span className="text-xs font-sans font-bold uppercase bg-coral text-ink px-3 py-1 border-2 border-ink">Popular</span>}
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display font-extrabold text-3xl text-coral">{tier.price}</span>
                    {tier.price !== 'Contact us' && <span className="text-muted text-sm">/month + £249 setup</span>}
                  </div>
                  <p className="text-sm text-body mt-1">{tier.mins}{tier.price !== 'Contact us' && ' · £0.18/min over'}</p>
                  <p className="text-xs text-muted mt-1">{tier.note}</p>
                </div>
              ))}
              <a href="/contact" className="block">
                <Button variant="primary" className="w-full text-center">
                  Book a free 30-min discovery call about Voice AI
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* AI Chatbot */}
      <section id="ai-chatbot" className="bg-ink border-b border-hairline py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Eyebrow className="mb-3">AI Chatbot</Eyebrow>
              <HeadlineBlock className="mb-6"><span className="text-coral">Capture Leads</span> While You Sleep</HeadlineBlock>
              <p className="text-lg text-body leading-normal mb-6 max-w-[60ch]">
                A chatbot trained on your business &mdash; your services, prices, availability, and tone of voice &mdash; that lives on your website and qualifies leads, answers questions, and books appointments around the clock.
              </p>
              <p className="text-body leading-normal mb-8 max-w-[60ch]">
                Typically handles around 80% of conversations autonomously (exact rate depends on training quality and question complexity). The remaining 20% &mdash; edge cases, complaints, unusual requests &mdash; get flagged for your team to follow up. You get warm leads, not time-wasters.
              </p>
              <a href="/services/ai-chatbots" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors font-bold text-cream">
                Full details &rarr; AI Chatbots
              </a>
            </div>
            <PricingCard
              id="ai-chatbot-card"
              name="AI Chatbot"
              tagline="Trained on your business. Live on your website. Captures leads 24/7."
              price="£57/month"
              setupNote="+ £149 one-off setup"
              billingLabel="per month, no contract"
              bullets={[
                'Installed on your website within 24–48 hours',
                'Trained on your services, pricing, availability, and tone',
                'Answers questions, captures lead details naturally in conversation',
                'Books appointments directly into your calendar',
                'Typically handles ~80% of standard conversations autonomously (depends on training)',
                'Hands over to your team during office hours if needed',
                'Captures out-of-hours details so you can call back',
              ]}
              integrations="HubSpot, Google Calendar, Calendly, most tools via webhook"
              cta="Book a free 30-min discovery call about Chatbots"
              ctaHref="/contact"
            />
          </div>
        </Container>
      </section>

      {/* Workflow Automation */}
      <section id="workflow-automation" className="py-20 md:py-28 border-b border-hairline">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Eyebrow className="mb-3">Workflow Automation</Eyebrow>
              <HeadlineBlock className="mb-6">Stop Doing <span className="text-coral">Admin by Hand</span></HeadlineBlock>
              <p className="text-lg text-body leading-normal mb-6 max-w-[60ch]">
                Every project starts with a discovery audit. We map what you're doing manually, identify what's automatable, and build it on n8n &mdash; open-source, so you own everything. No per-task pricing. No vendor lock-in.
              </p>
              <p className="text-body leading-normal mb-8 max-w-[60ch]">
                Simple workflows go live in 1&ndash;2 days. Complex multi-system builds take 1&ndash;2 weeks. Clients typically save 10&ndash;20 hours per week from week one.
              </p>
              <a href="/services/workflow-automation" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors font-bold text-cream">
                Full details &rarr; Workflow Automation
              </a>
            </div>
            <PricingCard
              id="workflow-automation-card"
              name="Workflow Automation"
              tagline="One-off project pricing. You own the automations outright."
              price="from £250"
              setupNote="Bespoke from there — scoped per project"
              bullets={[
                'Discovery audit first — we won\'t automate processes we don\'t understand',
                'Simple workflows: live in 1–2 working days',
                'Complex multi-step builds: 1–2 weeks',
                'Built on n8n (open-source) — you own your workflows if you leave',
                '400+ integrations: Google Workspace, Xero, Stripe, HubSpot, Slack, Shopify, and more',
                'Ongoing retainer available if you want continued build and support',
              ]}
              integrations="Google Workspace, Xero, Stripe, HubSpot, Slack, WhatsApp, Shopify, Tradify, Jobber, ServiceM8, 400+ more"
              cta="Book a free 30-min discovery call about Automation"
              ctaHref="/contact"
            />
          </div>
        </Container>
      </section>

      {/* GEO Audit */}
      <section id="geo-audit" className="bg-ink border-b border-hairline py-20 md:py-28">
        <Container>
          <div className="mb-12">
            <Eyebrow className="mb-3">GEO Audit (Generative Engine Optimisation)</Eyebrow>
            <HeadlineBlock className="mb-6">Show Up in <span className="text-coral">AI Search Results</span></HeadlineBlock>
            <p className="text-lg text-body leading-normal max-w-[65ch]">
              ChatGPT, Perplexity, Google AI Overviews, Claude, and Gemini now answer questions directly &mdash; without sending users to Google. A GEO audit shows you exactly where your business stands in those results and what to do about it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Quick Check */}
            <div className="border-2 border-hairline bg-charcoal shadow-brutal-sm p-8 h-full">
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mb-2">Quick Check</h3>
              <p className="font-display font-extrabold text-5xl text-coral mb-6">&pound;247</p>
              <ul className="space-y-3 text-body text-sm mb-8">
                {[
                  'AI visibility test across 4 platforms',
                  '10 real customer prompts tested',
                  'Citation readiness score',
                  'Top 5 priorities',
                  'Loom video walkthrough + 1-page PDF',
                  'Delivered within 24 hours',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-coral font-bold text-lg leading-none mt-0.5 shrink-0">&bull;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact">
                <Button variant="secondary" className="w-full text-center">Get Started</Button>
              </a>
            </div>

            {/* Full Audit */}
            <div className="border-2 border-coral bg-charcoal shadow-brutal-coral p-8 h-full">
              <div className="inline-block border-2 border-ink bg-coral px-4 py-1 mb-4">
                <span className="font-sans font-bold uppercase text-xs text-ink">Most Popular</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mb-2">Full Audit</h3>
              <p className="font-display font-extrabold text-5xl text-coral mb-6">&pound;497</p>
              <ul className="space-y-3 text-body text-sm mb-8">
                {[
                  'Everything in Quick Check',
                  'Full technical crawlability review',
                  'Schema audit and recommendations',
                  'Content structure analysis',
                  '3 competitor benchmarks',
                  '30+ test prompts across 5 AI platforms',
                  'Effort/impact action plan',
                  'PDF report + 30-min video walkthrough',
                  'Delivered within 24 hours',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-coral font-bold text-lg leading-none mt-0.5 shrink-0">&bull;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact">
                <Button variant="primary" className="w-full text-center">Get Started</Button>
              </a>
            </div>

            {/* Audit + Fix */}
            <div className="border-2 border-hairline bg-charcoal shadow-brutal-sm p-8 h-full">
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mb-2">Audit + Fix</h3>
              <p className="font-display font-extrabold text-5xl text-coral mb-6"><span className="text-2xl mr-2">from</span>&pound;997</p>
              <ul className="space-y-3 text-body text-sm mb-8">
                {[
                  'Full Audit included',
                  'We implement the priority fixes for you',
                  'Schema markup and structured data fixes',
                  'Content rewrites for top 5 pages',
                  'llms.txt creation and optimisation',
                  'Re-test after fixes to confirm improvement',
                  'Delivered within 24 hours — fixes via ongoing monthly retainer',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-coral font-bold text-lg leading-none mt-0.5 shrink-0">&bull;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact">
                <Button variant="secondary" className="w-full text-center">Get Started</Button>
              </a>
            </div>
          </div>
          <div className="mt-8 border-2 border-coral bg-charcoal p-8 shadow-brutal-coral">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="max-w-xl">
                <h3 className="font-display font-extrabold text-2xl uppercase text-cream mb-2">Monthly <span className="text-coral">GEO Retainer</span></h3>
                <p className="text-body leading-normal mb-3">
                  GEO isn&rsquo;t a one-time fix. AI models update, competitors improve, and citation patterns shift. The retainer keeps your visibility growing after the audit foundations are in place.
                </p>
                <ul className="space-y-2 text-body text-sm">
                  {[
                    'Monthly AI citation monitoring across 5 platforms',
                    'Content updates as AI rewarding patterns evolve',
                    'Schema maintenance and new structured data',
                    'Monthly report + quarterly strategy call',
                    '3-month minimum, then rolling monthly',
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-coral font-bold shrink-0">&bull;</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0 text-center md:text-right">
                <p className="font-display font-extrabold text-5xl text-coral">&pound;497</p>
                <p className="text-muted text-sm mb-4">per month</p>
                <a href="/contact">
                  <Button variant="primary">Ask About the Retainer</Button>
                </a>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted mt-6">
            <a href="/services/geo-audit" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors font-bold text-cream">
              Full details &rarr; GEO Audit
            </a>
          </p>
        </Container>
      </section>

      {/* Pricing FAQ */}
      <section className="bg-ink border-b border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-12"><span className="text-coral">Pricing</span> Questions</HeadlineBlock>
          <div className="space-y-0">
            {faq.map((item, i) => (
              <details
                key={i}
                className="border-2 border-hairline bg-charcoal shadow-brutal-sm group -mt-[2px]"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-display font-extrabold uppercase text-cream list-none">
                  <span>{item.q}</span>
                  <span className="text-2xl font-bold text-coral ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-body leading-normal border-t border-hairline pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Resources & Compliance */}
      <section className="py-16 border-b border-hairline">
        <Container>
          <HeadlineBlock as="h3" className="mb-6">Resources &amp; <span className="text-coral">Compliance</span></HeadlineBlock>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { text: 'ICO data protection for businesses', url: 'https://ico.org.uk/for-organisations/guide-to-data-protection/', context: 'How UK law governs customer data collected by AI systems' },
              { text: 'Ofcom telecoms guidance', url: 'https://www.ofcom.org.uk/', context: 'UK regulator for communications services including AI call handling' },
              { text: 'ICO Register — Antek Automation (ZC133436)', url: 'https://ico.org.uk/ESDWebPages/Entry/ZC133436', context: 'UK data protection registration' },
              { text: 'schema.org structured data', url: 'https://schema.org/', context: 'The vocabulary used in GEO audit schema recommendations' },
            ].map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border-2 border-hairline bg-ink p-5 shadow-brutal-xs hover:shadow-brutal-sm hover:-translate-y-0.5 transition-all"
              >
                <span className="font-display font-extrabold text-cream text-sm block mb-1 underline underline-offset-4 decoration-coral decoration-2">{link.text}</span>
                <span className="text-muted text-xs">{link.context}</span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section>
        <Container className="py-20 md:py-28">
          <div className="mb-10">
            <HeadlineBlock className="mb-6">Not Sure <span className="text-coral">Which Product?</span></HeadlineBlock>
            <p className="text-xl text-body leading-normal mb-8 max-w-[65ch]">
              Book a free 30-minute call below. We&rsquo;ll listen to what you&rsquo;re trying to fix and tell you honestly which product fits &mdash; or whether you need one at all.
            </p>
            <a href="/contact">
              <Button variant="primary">Or use the contact form</Button>
            </a>
          </div>
          <CalBooking />
        </Container>
      </section>

    </div>
  )
}
