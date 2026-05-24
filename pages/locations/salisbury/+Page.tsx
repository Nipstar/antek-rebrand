import { Button } from '../../../src/components/Button';
import { CalBooking } from '../../../src/components/CalBooking';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm-beige border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6">
            AI Automation for Salisbury Businesses
          </h1>
          <p className="text-lg md:text-xl text-mid-gray max-w-3xl mb-8">
            Andover-based AI agency serving Salisbury and Wiltshire — 18 miles up the A303. Voice
            agents, chatbots, and workflow automation built around your business. Close enough to
            meet over coffee. Focused enough to actually deliver.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact"><Button variant="primary">Book a free 30-min call</Button></a>
            <a href="tel:+443330389960"><Button variant="secondary">Call 0333 038 9960</Button></a>
          </div>
        </div>
      </section>

      {/* Local credibility */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-10">
            Why Salisbury Businesses Pick Antek
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <Icon letter="A" size="sm" />
              <h3 className="font-black text-lg uppercase text-charcoal mt-4 mb-3">A303 corridor agency</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Andover to Salisbury is a 30-minute drive up the A303. We meet Salisbury clients in
                person whenever it helps — discovery workshops, integration kick-offs, post-launch
                reviews — and run the rest remote.
              </p>
            </Card>
            <Card>
              <Icon letter="3" size="sm" />
              <h3 className="font-black text-lg uppercase text-charcoal mt-4 mb-3">30+ years in technology</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Antek was founded by Andy Norman after 30+ years in managed technology services.
                Not a tech startup. A business that understands how Salisbury businesses actually
                operate.
              </p>
            </Card>
            <Card>
              <Icon letter="R" size="sm" />
              <h3 className="font-black text-lg uppercase text-charcoal mt-4 mb-3">Certified Retell AI Partner</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Same voice-agent stack we deploy for enterprise clients, priced and packaged for
                Salisbury SMEs. Voice agents from £97/month. Chatbots from £57/month.
              </p>
            </Card>
            <Card>
              <Icon letter="↻" size="sm" />
              <h3 className="font-black text-lg uppercase text-charcoal mt-4 mb-3">Same-day response</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Most Salisbury enquiries answered within 1 hour Mon–Fri 9–6. In-person workshops in
                Salisbury usually possible same-week.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-soft-sage border-t-3 border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-10">
            AI Services in Salisbury
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-black text-lg uppercase text-charcoal mb-3">AI Voice Agents</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                24/7 phone receptionist that answers in your business name, books appointments,
                qualifies leads, escalates urgent calls. Live in 7–10 working days.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-lg uppercase text-charcoal mb-3">AI Chatbots</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Website chat that qualifies enquiries, books appointments, integrates with your
                CRM. Same agent stack as voice for consistent handoff.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-lg uppercase text-charcoal mb-3">n8n Workflow Automation</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Lead intake to CRM, quote-to-invoice, supplier onboarding, document chase. We
                integrate with Xero, QuickBooks, HubSpot, Pipedrive, Microsoft 365, Google
                Workspace, and most UK business stacks.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-lg uppercase text-charcoal mb-3">GEO Audits</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Get your Salisbury business cited by ChatGPT, Claude, Perplexity, and Google AI
                Overviews. Citability scoring, schema audit, llms.txt, AI crawler analysis.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Local industries */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-6">
            Salisbury Industries We Work With
          </h2>
          <p className="text-mid-gray text-lg mb-10 max-w-3xl">
            Salisbury's economy is a mix of defence supply chain (Boscombe Down, DSTL Porton Down,
            MoD-adjacent SMEs), tourism + hospitality serving cathedral visitors, professional
            services, healthcare around Salisbury District Hospital, and rural enterprise across
            Wiltshire. We build AI for SMEs in every one of these sectors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-2">Defence + MoD supply chain</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Boscombe Down, DSTL Porton Down, MoD-contractor SMEs. We respect compliance,
                audit, and data-handling requirements that come with serving regulated customers.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-2">Tourism + hospitality</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Salisbury Cathedral visitors, Stonehenge tour operators, hotels, restaurants,
                attractions. AI chatbots for booking enquiries and voice agents for after-hours
                reservations are our most common deployments.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-2">Professional services</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Solicitors, accountants, surveyors. AI-powered intake handles new-matter
                qualification, fee-quote workflows, and out-of-hours enquiry capture.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-2">Healthcare + clinics</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Private clinics, Salisbury District Hospital supply chain. We build to GDPR and
                clinical-data baselines. Appointment booking, intake forms, follow-up sequences.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-2">Agriculture + rural enterprise</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Wiltshire farms, equestrian businesses, rural trades. AI voice agents that take
                calls when you're out on the land, not in front of a phone.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-2">Trades + service businesses</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Electricians, plumbers, builders, gas engineers across Salisbury and the
                surrounding villages. After-hours emergency-call capture pays for itself in week
                one.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Area covered */}
      <section className="bg-warm-beige border-t-3 border-b-3 border-charcoal py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-2xl md:text-3xl uppercase tracking-tight-lg text-charcoal mb-4">
            Areas We Cover Around Salisbury
          </h2>
          <p className="text-mid-gray leading-relaxed">
            Salisbury, Amesbury, Wilton, Old Sarum, Tisbury, Downton, Bemerton, Laverstock, plus
            the surrounding Wiltshire villages. The A303 puts every town within 45 minutes of our
            Hampshire base — face-to-face whenever it helps.
          </p>
        </div>
      </section>

      {/* How we work / proof */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-10">
            How a Salisbury Project Starts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <Icon letter="1" size="sm" />
              <h3 className="font-black text-base uppercase text-charcoal mt-4 mb-2">Discovery call</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                30 minutes by video. We listen first, ask about your actual workflows, and tell
                you what AI can realistically do for your Salisbury business right now.
              </p>
            </Card>
            <Card>
              <Icon letter="2" size="sm" />
              <h3 className="font-black text-base uppercase text-charcoal mt-4 mb-2">Costed proposal</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Within a week we send a clear, fixed-price proposal — what we'll build, what it
                does, what it costs, what's monthly. No vague consulting-by-the-hour.
              </p>
            </Card>
            <Card>
              <Icon letter="3" size="sm" />
              <h3 className="font-black text-base uppercase text-charcoal mt-4 mb-2">Live in 7–10 days</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Standard voice agent or chatbot live in under two weeks. We handle the build,
                hosting, monitoring, and ongoing tweaks under one monthly fee.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-soft-sage border-t-3 border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-10">
            FAQs — AI Automation in Salisbury
          </h2>
          <div className="space-y-6">
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-3">Do you serve businesses in Salisbury from your Hampshire base?</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Yes — Andover to Salisbury is 18 miles up the A303, around 30 minutes. We work
                with Salisbury and wider Wiltshire businesses regularly and visit in person
                whenever it adds value.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-3">How quickly can you visit Salisbury for in-person meetings?</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Usually same week, often same day for existing clients. Discovery calls are remote
                by default to save time on both sides.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-3">What does an AI voice agent cost for a Salisbury small business?</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Setup from £497, then £97/month for the voice agent on standard plans. Pricing
                scales with call volume — full breakdown on our{' '}
                <a className="underline hover:text-terracotta" href="/pricing">pricing page</a>.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-3">Can you build automation for defence supply chain companies?</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Yes. We've worked with regulated supply chains and understand the data handling
                and audit requirements. We can build to your security and compliance baseline.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-3">Do you work with Salisbury tourism and hospitality businesses?</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Regularly. AI chatbots for booking enquiries and voice agents for after-hours
                reservations are two of our most common deployments in hospitality.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="bg-charcoal border-t-3 border-charcoal py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-off-white mb-6">
              Book a free 30-minute call
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              No sales pressure. We listen, scope, and tell you whether AI is the right answer for
              your Salisbury business right now.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a href="tel:+443330389960"><Button variant="primary">Call 0333 038 9960</Button></a>
              <a href="mailto:hello@antekautomation.com"><Button variant="secondary">Email hello@antekautomation.com</Button></a>
            </div>
          </div>
          <CalBooking />
        </div>
      </section>
    </>
  );
}
