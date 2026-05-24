import { Button } from '../../src/components/Button'
import { CalBooking } from '../../src/components/CalBooking'
import { PricingCard } from '../../src/components/PricingCard'
import { PricingComparisonTable } from '../../src/components/PricingComparisonTable'
import { TrustStrip } from '../../src/components/TrustStrip'
import { openBookingPopup } from '../../src/components/BookingPopupCTA'

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
    a: "Yes. Speak to us if you're taking two or more products — we typically discount on a case-by-case basis. Book a free 15-min call to discuss.",
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
    <div className="bg-off-white">

      {/* Hero */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              Pricing &bull; No Contracts &bull; UK-Based
            </p>
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              Transparent Pricing for AI Automation
            </h1>
            <p className="text-xl text-charcoal leading-normal mb-8">
              Fixed monthly plans for voice AI, chatbots, and AI receptionist. One-off projects for workflow automation and GEO audits. Voice plans start with 120 call minutes included. Chatbot conversations are unlimited. No hidden fees.
            </p>
            <button
              type="button"
              onClick={() => openBookingPopup('pricing-hero')}
              className="inline-block"
            >
              <Button variant="primary">Book a free 30-min discovery call</Button>
            </button>
            <TrustStrip className="mt-6" />
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 md:py-28 border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-4">
            Compare Products at a Glance
          </h2>
          <p className="text-lg text-charcoal mb-12 max-w-2xl">
            Five products. All priced for UK small businesses. All ready to go live within days, not months.
          </p>
          <PricingComparisonTable />
        </div>
      </section>

      {/* AI Voice Assistant */}
      <section id="ai-voice-assistant" className="py-20 md:py-28 border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm uppercase tracking-wide text-charcoal mb-3 font-black">AI Voice Assistant</p>
              <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-6">
                Never Miss a Call Again
              </h2>
              <p className="text-lg text-charcoal leading-normal mb-6">
                An AI agent that answers your phone within two rings, has a proper conversation, captures caller details, and books appointments directly into your calendar &mdash; 24/7, including evenings, weekends, and bank holidays.
              </p>
              <p className="text-charcoal leading-normal mb-8">
                Every call ends with a summary sent to your phone or email: who called, what they wanted, what was booked. Built on <a href="https://www.retellai.com" target="_blank" rel="noopener" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Retell AI</a> &mdash; Antek Automation is a certified Retell AI partner.
              </p>
              <a href="/services/ai-voice-assistants" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors font-bold text-charcoal">
                Full details &rarr; AI Voice Assistants
              </a>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Starter', price: '£97', mins: '120 mins/month', note: 'Call answering, screening, summaries', featured: false },
                { name: 'Standard', price: '£198', mins: '240 mins/month', note: 'Starter + CRM & API integrations', featured: true },
                { name: 'Pro', price: 'Contact us', mins: 'Custom minutes', note: 'Standard + workflow automations for complex voice agent workflows', featured: false },
              ].map((tier) => (
                <div key={tier.name} className={`border-3 border-charcoal p-6 ${tier.featured ? 'bg-warm-beige shadow-brutal' : 'bg-white shadow-brutal-sm'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-black text-lg uppercase text-charcoal">{tier.name}</h4>
                    {tier.featured && <span className="text-xs font-black uppercase bg-terracotta text-off-white px-3 py-1 border-3 border-charcoal">Popular</span>}
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-black text-3xl text-terracotta">{tier.price}</span>
                    {tier.price !== 'Contact us' && <span className="text-mid-gray text-sm">/month + £249 setup</span>}
                  </div>
                  <p className="text-sm text-charcoal mt-1">{tier.mins}{tier.price !== 'Contact us' && ' · £0.18/min over'}</p>
                  <p className="text-xs text-mid-gray mt-1">{tier.note}</p>
                </div>
              ))}
              <a href="/contact" className="block">
                <button className="w-full font-black uppercase px-7 py-3 border-3 border-charcoal shadow-brutal-sm transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-xs bg-terracotta text-off-white">
                  Book a free 15-min chat about Voice AI
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot */}
      <section id="ai-chatbot" className="bg-soft-sage border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm uppercase tracking-wide text-charcoal mb-3 font-black">AI Chatbot</p>
              <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-6">
                Capture Leads While You Sleep
              </h2>
              <p className="text-lg text-charcoal leading-normal mb-6">
                A chatbot trained on your business &mdash; your services, prices, availability, and tone of voice &mdash; that lives on your website and qualifies leads, answers questions, and books appointments around the clock.
              </p>
              <p className="text-charcoal leading-normal mb-8">
                Typically handles around 80% of conversations autonomously (exact rate depends on training quality and question complexity). The remaining 20% &mdash; edge cases, complaints, unusual requests &mdash; get flagged for your team to follow up. You get warm leads, not time-wasters.
              </p>
              <a href="/services/ai-chatbots" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors font-bold text-charcoal">
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
              cta="Book a free 15-min chat about Chatbots"
              ctaHref="/contact"
            />
          </div>
        </div>
      </section>

      {/* Workflow Automation */}
      <section id="workflow-automation" className="py-20 md:py-28 border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm uppercase tracking-wide text-charcoal mb-3 font-black">Workflow Automation</p>
              <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-6">
                Stop Doing Admin by Hand
              </h2>
              <p className="text-lg text-charcoal leading-normal mb-6">
                Every project starts with a discovery audit. We map what you're doing manually, identify what's automatable, and build it on n8n &mdash; open-source, so you own everything. No per-task pricing. No vendor lock-in.
              </p>
              <p className="text-charcoal leading-normal mb-8">
                Simple workflows go live in 1&ndash;2 days. Complex multi-system builds take 1&ndash;2 weeks. Clients typically save 10&ndash;20 hours per week from week one.
              </p>
              <a href="/services/workflow-automation" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors font-bold text-charcoal">
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
              cta="Book a free 15-min chat about Automation"
              ctaHref="/contact"
            />
          </div>
        </div>
      </section>

      {/* GEO Audit */}
      <section id="geo-audit" className="bg-warm-beige border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-3 font-black">GEO Audit (Generative Engine Optimisation)</p>
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-6">
              Show Up in AI Search Results
            </h2>
            <p className="text-lg text-charcoal leading-normal max-w-3xl">
              ChatGPT, Perplexity, Google AI Overviews, Claude, and Gemini now answer questions directly &mdash; without sending users to Google. A GEO audit shows you exactly where your business stands in those results and what to do about it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Quick Check */}
            <div className="border-3 border-charcoal bg-white shadow-brutal-sm p-8">
              <h3 className="font-black text-2xl uppercase text-charcoal mb-2">Quick Check</h3>
              <p className="font-black text-5xl text-terracotta mb-6">&pound;247</p>
              <ul className="space-y-3 text-charcoal text-sm mb-8">
                {[
                  'AI visibility test across 4 platforms',
                  '10 real customer prompts tested',
                  'Citation readiness score',
                  'Top 5 priorities',
                  'Loom video walkthrough + 1-page PDF',
                  'Delivered within 24 hours',
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-terracotta font-black text-lg leading-none mt-0.5 shrink-0">&bull;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact">
                <Button variant="secondary" className="w-full text-center">Get Started</Button>
              </a>
            </div>

            {/* Full Audit */}
            <div className="border-3 border-charcoal bg-warm-beige shadow-brutal p-8">
              <div className="inline-block border-3 border-charcoal bg-terracotta px-4 py-1 mb-4">
                <span className="font-black uppercase text-xs text-off-white">Most Popular</span>
              </div>
              <h3 className="font-black text-2xl uppercase text-charcoal mb-2">Full Audit</h3>
              <p className="font-black text-5xl text-terracotta mb-6">&pound;497</p>
              <ul className="space-y-3 text-charcoal text-sm mb-8">
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
                    <span className="text-terracotta font-black text-lg leading-none mt-0.5 shrink-0">&bull;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact">
                <Button variant="primary" className="w-full text-center">Get Started</Button>
              </a>
            </div>

            {/* Audit + Fix */}
            <div className="border-3 border-charcoal bg-white shadow-brutal-sm p-8">
              <h3 className="font-black text-2xl uppercase text-charcoal mb-2">Audit + Fix</h3>
              <p className="font-black text-5xl text-terracotta mb-6">&pound;997</p>
              <ul className="space-y-3 text-charcoal text-sm mb-8">
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
                    <span className="text-terracotta font-black text-lg leading-none mt-0.5 shrink-0">&bull;</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href="/contact">
                <Button variant="secondary" className="w-full text-center">Get Started</Button>
              </a>
            </div>
          </div>
          <div className="mt-8 border-3 border-charcoal bg-peach p-8 shadow-brutal-sm">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="max-w-xl">
                <h3 className="font-black text-2xl uppercase text-charcoal mb-2">Monthly GEO Retainer</h3>
                <p className="text-charcoal leading-normal mb-3">
                  GEO isn&rsquo;t a one-time fix. AI models update, competitors improve, and citation patterns shift. The retainer keeps your visibility growing after the audit foundations are in place.
                </p>
                <ul className="space-y-2 text-charcoal text-sm">
                  {[
                    'Monthly AI citation monitoring across 5 platforms',
                    'Content updates as AI rewarding patterns evolve',
                    'Schema maintenance and new structured data',
                    'Monthly report + quarterly strategy call',
                    '3-month minimum, then rolling monthly',
                  ].map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-terracotta font-black shrink-0">&bull;</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0 text-center md:text-right">
                <p className="font-black text-5xl text-terracotta">&pound;497</p>
                <p className="text-mid-gray text-sm mb-4">per month</p>
                <a href="/contact">
                  <Button variant="primary">Ask About the Retainer</Button>
                </a>
              </div>
            </div>
          </div>
          <p className="text-sm text-mid-gray mt-6">
            <a href="/services/geo-audit" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors font-bold text-charcoal">
              Full details &rarr; GEO Audit
            </a>
          </p>
        </div>
      </section>

      {/* AI Receptionist */}
      <section id="ai-receptionist" className="py-20 md:py-28 border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm uppercase tracking-wide text-charcoal mb-3 font-black">AI Receptionist</p>
              <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-6">
                A Receptionist That Never Calls in Sick
              </h2>
              <p className="text-lg text-charcoal leading-normal mb-6">
                The AI Receptionist is our productised call-answering service for service businesses. It screens callers against your criteria, books qualified enquiries into your calendar, and sends you a full summary after every call.
              </p>
              <p className="text-charcoal leading-normal mb-8">
                Industry-specific setups available for plumbers, electricians, HVAC, accountants, lawyers, vets, dentists, and therapists. Live within 24&ndash;48 hours. 120 call minutes included per month, £0.18/min over.
              </p>
              <a href="/ai-receptionist" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors font-bold text-charcoal">
                Full details &rarr; AI Receptionist
              </a>
            </div>
            <div className="space-y-4" id="ai-receptionist-card">
              {[
                { name: 'Starter', price: '£97', mins: '120 mins/month', note: 'Call answering, screening, summaries', featured: false },
                { name: 'Standard', price: '£198', mins: '240 mins/month', note: 'Starter + CRM & API integrations', featured: true },
                { name: 'Pro', price: 'Contact us', mins: 'Custom minutes', note: 'Standard + workflow automations for complex voice agent workflows', featured: false },
              ].map((tier) => (
                <div key={tier.name} className={`border-3 border-charcoal p-6 ${tier.featured ? 'bg-warm-beige shadow-brutal' : 'bg-white shadow-brutal-sm'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-black text-lg uppercase text-charcoal">{tier.name}</h4>
                    {tier.featured && <span className="text-xs font-black uppercase bg-terracotta text-off-white px-3 py-1 border-3 border-charcoal">Popular</span>}
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-black text-3xl text-terracotta">{tier.price}</span>
                    {tier.price !== 'Contact us' && <span className="text-mid-gray text-sm">/month + £249 setup</span>}
                  </div>
                  <p className="text-sm text-charcoal mt-1">{tier.mins}{tier.price !== 'Contact us' && ' · £0.18/min over'}</p>
                  <p className="text-xs text-mid-gray mt-1">{tier.note}</p>
                </div>
              ))}
              <a href="/contact" className="block">
                <button className="w-full font-black uppercase px-7 py-3 border-3 border-charcoal shadow-brutal-sm transition-all duration-200 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-brutal active:translate-x-[2px] active:translate-y-[2px] active:shadow-brutal-xs bg-terracotta text-off-white">
                  Book a free 15-min chat about AI Receptionist
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="bg-soft-sage border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            Pricing Questions
          </h2>
          <div className="space-y-0">
            {faq.map((item, i) => (
              <details
                key={i}
                className="border-3 border-charcoal bg-white shadow-brutal-sm group -mt-[3px]"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-black uppercase text-charcoal list-none">
                  <span>{item.q}</span>
                  <span className="text-2xl font-black text-terracotta ml-4 shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-charcoal leading-normal border-t-3 border-charcoal pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Compliance */}
      <section className="py-16 border-b-3 border-charcoal">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h3 className="font-black text-xl uppercase tracking-tight-lg text-charcoal mb-6">Resources &amp; Compliance</h3>
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
                className="block border-3 border-charcoal bg-white p-5 shadow-brutal-xs hover:shadow-brutal-sm hover:-translate-y-0.5 transition-all"
              >
                <span className="font-black text-charcoal text-sm block mb-1 underline underline-offset-4 decoration-terracotta decoration-2">{link.text}</span>
                <span className="text-mid-gray text-xs">{link.context}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-6">
              Not Sure Which Product?
            </h2>
            <p className="text-xl text-charcoal leading-normal mb-8 max-w-2xl mx-auto">
              Book a free 30-minute call below. We&rsquo;ll listen to what you&rsquo;re trying to fix and tell you honestly which product fits &mdash; or whether you need one at all.
            </p>
            <a href="/contact">
              <Button variant="primary">Or use the contact form</Button>
            </a>
          </div>
          <CalBooking />
        </div>
      </section>

    </div>
  )
}
