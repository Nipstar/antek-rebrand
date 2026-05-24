import { Button } from '../../../src/components/Button';
import { CalBooking } from '../../../src/components/CalBooking';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';
import { QuickForm } from '../../../src/components/QuickForm';
import { TrustStrip } from '../../../src/components/TrustStrip';

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm-beige border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6">
            AI Automation for Newbury Businesses
          </h1>
          <p className="text-lg md:text-xl text-mid-gray max-w-3xl mb-8">
            Andover-based AI agency serving Newbury and West Berkshire — 18 miles up the A34.
            Voice agents, chatbots, and workflow automation built around your business. Same M4
            corridor pace, same hands-on partnership our Hampshire clients get.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact"><Button variant="primary">Book a free 30-min call</Button></a>
            <a href="tel:+443330389960"><Button variant="secondary">Call 0333 038 9960</Button></a>
          </div>
          <p className="mt-6 text-sm text-mid-gray">
            Berkshire-focused work also covered at{' '}
            <a className="underline hover:text-terracotta" href="https://aiservicesberkshire.co.uk" target="_blank" rel="noopener noreferrer">
              aiservicesberkshire.co.uk
            </a>{' '}— Antek's Berkshire satellite covering Reading, Slough, Maidenhead, Bracknell + the wider M4 corridor.
          </p>
        </div>
      </section>

      {/* Local credibility */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-10">
            Why Newbury Businesses Pick Antek
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <Icon letter="A" size="sm" />
              <h3 className="font-black text-lg uppercase text-charcoal mt-4 mb-3">A34 corridor agency</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Andover to Newbury is 25 minutes up the A34, no slow B-roads. We meet Newbury
                clients in person whenever it helps — discovery, kick-off, post-launch reviews —
                and run the rest remote.
              </p>
            </Card>
            <Card>
              <Icon letter="3" size="sm" />
              <h3 className="font-black text-lg uppercase text-charcoal mt-4 mb-3">30+ years in technology</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Antek was founded by Andy Norman after 30+ years in managed technology services.
                Not a tech startup. A partner that understands enterprise-supplier dynamics
                because we've lived them.
              </p>
            </Card>
            <Card>
              <Icon letter="R" size="sm" />
              <h3 className="font-black text-lg uppercase text-charcoal mt-4 mb-3">Certified Retell AI Partner</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Same voice-agent stack we deploy for enterprise clients, priced for Newbury SMEs.
                Voice agents from £97/month. Chatbots from £57/month. Workflow automation
                project-priced.
              </p>
            </Card>
            <Card>
              <Icon letter="↻" size="sm" />
              <h3 className="font-black text-lg uppercase text-charcoal mt-4 mb-3">Same-week visits</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Most Newbury enquiries answered within 1 hour Mon–Fri 9–6. In-person workshops in
                Newbury, Thatcham, or Hungerford usually possible same-week.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-soft-sage border-t-3 border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-10">
            AI Services in Newbury
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
                CRM. Same agent stack as voice so handoffs stay consistent.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-lg uppercase text-charcoal mb-3">n8n Workflow Automation</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Lead intake to CRM, quote-to-invoice, supplier onboarding, document chase. We
                integrate with Xero, QuickBooks, HubSpot, Pipedrive, Microsoft 365, Salesforce,
                ServiceNow, and most UK + enterprise stacks.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-lg uppercase text-charcoal mb-3">GEO Audits</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Get your Newbury business cited by ChatGPT, Claude, Perplexity, and Google AI
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
            Newbury Industries We Work With
          </h2>
          <p className="text-mid-gray text-lg mb-10 max-w-3xl">
            Newbury sits inside the M4 corridor's most concentrated tech and financial-services
            cluster — Vodafone's UK HQ, telecoms + IT supply chains, financial advisers, racing,
            and a vibrant SME town centre. We build AI for the suppliers, professional firms, and
            independent businesses that orbit it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-2">Tech + telecoms supply chain</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Vodafone HQ in Newbury anchors a large supplier and contractor ecosystem. We
                build AI for the SMEs feeding it — supplier qualification, document chase,
                compliance-aware enquiry routing.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-2">Financial + professional services</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Financial advisers, accountants, solicitors across Newbury and Thatcham business
                parks. AI-powered intake, fee-quote workflows, MTD inbox triage.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-2">Equestrian + racing</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Newbury Racecourse, Lambourn training yards, and the supporting trades. Voice
                agents handle stable enquiries and racing-related bookings without missing a beat
                on race days.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-2">Retail + hospitality</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Town-centre independents, Parkway development tenants, hospitality businesses
                serving racing-day visitors. AI booking and after-hours reservation handling.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-2">Agriculture + rural enterprise</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                West Berkshire farms and estates. AI voice agents that catch the calls when
                you're out on the land or in the yard, not in front of a phone.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-2">Trades + service businesses</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Electricians, plumbers, builders, gas engineers across Newbury, Thatcham,
                Hungerford, and the surrounding villages. After-hours emergency-call capture
                pays for itself in week one.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Area covered */}
      <section className="bg-warm-beige border-t-3 border-b-3 border-charcoal py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-2xl md:text-3xl uppercase tracking-tight-lg text-charcoal mb-4">
            Areas We Cover Around Newbury
          </h2>
          <p className="text-mid-gray leading-relaxed">
            Newbury, Thatcham, Hungerford, Lambourn, Kintbury, Burghclere, Hermitage, Cold Ash,
            plus the surrounding West Berkshire villages. The A34 puts every town within 40
            minutes of our Hampshire base. For Reading, Slough, Maidenhead, Bracknell, and the
            wider Berkshire county, see{' '}
            <a className="underline hover:text-terracotta" href="https://aiservicesberkshire.co.uk" target="_blank" rel="noopener noreferrer">
              aiservicesberkshire.co.uk
            </a>.
          </p>
        </div>
      </section>

      {/* How we work / proof */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-10">
            How a Newbury Project Starts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <Icon letter="1" size="sm" />
              <h3 className="font-black text-base uppercase text-charcoal mt-4 mb-2">Discovery call</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                30 minutes by video. We listen first, ask about your real workflows, and tell you
                what AI can realistically do for your Newbury business right now.
              </p>
            </Card>
            <Card>
              <Icon letter="2" size="sm" />
              <h3 className="font-black text-base uppercase text-charcoal mt-4 mb-2">Costed proposal</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Within a week we send a fixed-price proposal — what we'll build, what it does,
                what it costs, what's monthly. No consulting-by-the-hour.
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
            FAQs — AI Automation in Newbury
          </h2>
          <div className="space-y-6">
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-3">Do you serve businesses in Newbury from your Hampshire base?</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Yes — Andover to Newbury is 18 miles straight up the A34, around 25 minutes. We
                work with Newbury and wider West Berkshire businesses regularly and visit in
                person whenever it adds value.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-3">How quickly can you visit Newbury for in-person meetings?</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Usually same week, often same day for existing clients. Discovery calls are
                remote by default to save time on both sides.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-3">What does an AI voice agent cost for a Newbury small business?</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Setup from £497, then £97/month for the voice agent on standard plans. Pricing
                scales with call volume — full breakdown on our{' '}
                <a className="underline hover:text-terracotta" href="/pricing">pricing page</a>.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-3">Do you work with Newbury and Lambourn equestrian businesses?</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Yes. Voice agents handling stable enquiries and chatbots for racing-related
                bookings are both well-suited to the sector. We tailor the agent's voice and
                knowledge base to the business.
              </p>
            </Card>
            <Card>
              <h3 className="font-black text-base uppercase text-charcoal mb-3">Are you used to working with larger Newbury employers and their supply chains?</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                We work with SME suppliers into larger Newbury employers including telecoms and
                financial services. The AI agents and workflows we build can be tuned to
                enterprise procurement and compliance requirements.
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
              your Newbury business right now.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <a href="tel:03330389960"><Button variant="primary">Call 0333 038 9960</Button></a>
              <a href="mailto:hello@antekautomation.com"><Button variant="secondary">Email hello@antekautomation.com</Button></a>
            </div>
            <TrustStrip className="justify-center mb-8" variant="light" />
            <div className="max-w-2xl mx-auto mb-10">
              <QuickForm source="newbury-final-cta" pageTown="newbury" />
            </div>
          </div>
          <CalBooking />
        </div>
      </section>
    </>
  );
}
