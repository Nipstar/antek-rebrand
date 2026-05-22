import { useState, Suspense, lazy } from 'react';
import { Button } from '../../../src/components/Button';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';
import { CalBooking } from '../../../src/components/CalBooking';
import { VoiceDemoButton } from '../../../src/components/VoiceDemoButton';
import { QuickRecap } from '../../../src/components/QuickRecap';
import { ResourcesCompliance } from '../../../src/components/ResourcesCompliance';

const VoiceChat = lazy(() => import('../../../src/components/VoiceChat').then(m => ({ default: m.VoiceChat })));

export default function Page() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);

  return (
    <div className="bg-off-white">

      {/* ── HERO ── */}
      <section className="bg-warm-beige border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              AI AUTOMATION &bull; LONDON
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for London Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              London customers have the highest expectations in the country. They want instant responses, seamless booking, and zero friction &mdash; and they've got a hundred alternatives if you can't deliver. Meanwhile, hiring staff to handle calls, enquiries, and admin in London costs more than almost anywhere else in the UK.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              AI automation isn't just a nice-to-have in London. It's the difference between competing and getting buried. We build voice agents, chatbots, and workflow automation that give you enterprise-level responsiveness without the enterprise-level payroll.
            </p>
            <p className="text-sm text-mid-gray mb-8">By <a href="/about" className="underline hover:text-terracotta transition-colors">Andy Norman</a>, Founder | 30+ years in technology</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <a href="/contact">
                <Button variant="primary">Book a free 15-min chat</Button>
              </a>
              <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
            </div>
          </div>
        </div>
      </section>

      <QuickRecap items={[
        'AI voice agents, chatbots, and workflow automation built for London businesses',
        'For London trades firms, consultancies, and service businesses competing in the UK\'s most expensive market',
        'From £57/month — Hampshire-based team, no London agency overheads — <a href="/pricing" class="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">see full pricing</a>',
        'Voice and chat products live within 24–48 hours; workflow automation in 1–14 days',
        'Delivered fully remotely — same quality, no Shoreditch office rent on your invoice',
      ]} />

      <ResourcesCompliance links={[
        { text: 'ONS Greater London business statistics', url: 'https://www.ons.gov.uk/businessindustryandtrade', context: 'Official data on London\'s business population and economy' },
        { text: 'TfL ULEZ information', url: 'https://tfl.gov.uk/modes/driving/ultra-low-emission-zone', context: 'Ultra Low Emission Zone (ULEZ) guidance for London businesses' },
        { text: 'ICO data protection guidance', url: 'https://ico.org.uk/for-organisations/guide-to-data-protection/', context: 'UK law governing customer data collected by AI systems' },
        { text: 'Conversational agent overview', url: 'https://en.wikipedia.org/wiki/Conversational_agent', context: 'Background on AI conversational agent technology' },
      ]} />

      {/* ── SERVICES ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              What We Build for London Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three services that help you compete with larger agencies in the most competitive market in the UK.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Voice Agents */}
            <Card hover>
              <Icon letter="V" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                AI Voice Agents
              </h3>
              <p className="text-charcoal leading-relaxed mb-4">
                A Croydon boiler-repair firm gets a call at 7 am on a freezing Monday. The owner&rsquo;s already under a boiler in Bromley. Our AI voice agent picks up, confirms the caller&rsquo;s postcode is in range, books a slot for Wednesday, and texts the owner a summary &mdash; all within minutes. That&rsquo;s a &pound;300&ndash;500 job that would have gone to a competitor. Multiply that by 47 inbound enquiries a week (the London average for established trades firms) and you can see why voice AI pays for itself quickly for most London trades businesses.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                With London job values and average enquiry volumes, every missed call has real revenue attached to it. Make sure you catch them all.
              </p>
              <a href="/services/ai-voice-assistants" aria-label="See how AI Voice Agents work">
                <Button variant="primary" className="w-full">See Voice Agents</Button>
              </a>
            </Card>

            {/* AI Chatbots */}
            <Card hover>
              <Icon letter="C" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                AI Chatbots
              </h3>
              <p className="text-charcoal leading-relaxed mb-4">
                A London customer finds your site at 11 pm. They&rsquo;ve got 15 browser tabs open &mdash; yours and fourteen competitors. Our chatbot engages them in under two seconds, answers &ldquo;Do you cover E14?&rdquo;, confirms pricing ballpark, and books a callback for 9 am. The other fourteen tabs get closed. In a market where attention spans are measured in seconds, being first isn&rsquo;t an advantage &mdash; it&rsquo;s the entire game.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Capture out-of-hours enquiries while you sleep.
              </p>
              <a href="/services/ai-chatbots" aria-label="See how AI Chatbots work">
                <Button variant="primary" className="w-full">See Chatbots</Button>
              </a>
            </Card>

            {/* Workflow Automation */}
            <Card hover>
              <Icon letter="A" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Workflow Automation
              </h3>
              <p className="text-charcoal leading-relaxed mb-4">
                ULEZ charges, congestion-charge zones, parking permits &mdash; London adds layers of admin that businesses elsewhere don&rsquo;t deal with. We connect your calendar, CRM, invoicing, and job-management tools so a new lead gets logged, a confirmation goes out, the job hits your schedule with the right zone notes, and the invoice fires the moment you mark it complete. No copy-pasting, no forgotten follow-ups, no end-of-month invoice panic.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Automate the London-specific admin that eats your margins.
              </p>
              <a href="/services/workflow-automation" aria-label="See how Workflow Automation works">
                <Button variant="primary" className="w-full">See Automation</Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* ── WHY REMOTE WORKS ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              Not Based in London. That's the Point.
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We&rsquo;re based in <a href="/locations/hampshire" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Hampshire</a>, and we&rsquo;re not going to pretend otherwise. But here's what that means for you: you get the same quality work without the London agency price tag. No Shoreditch office rent baked into your invoice. No overheads that exist purely to impress other agencies.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Whether your business is in the City, Camden, Croydon, or anywhere in between, the AI we build works the same. Setup, testing, and ongoing support all happen over video call and screen share &mdash; which, let's be honest, is how most London business gets done these days anyway.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We work with accountants in Canary Wharf, trades firms in South London, dental practices in Kensington, and cleaning companies that cover half the city. The geography doesn't matter. What matters is that the AI picks up your calls, books your appointments, and handles your admin &mdash; and that's what we deliver.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              You'll deal directly with Andy &mdash; 30+ years in tech, no account managers, no juniors, no runaround.
            </p>
          </div>
        </div>
      </section>

      {/* ── LONDON BY THE NUMBERS ── */}
      <section className="bg-peach border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-12 text-center">
            London by the Numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">1M+</div>
              <p className="text-charcoal font-bold">Registered businesses in Greater London &mdash; the most competitive market in the UK <span className="font-normal text-mid-gray text-sm">(ONS / Companies House)</span></p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">5.6M</div>
              <p className="text-charcoal font-bold">Working-age population in Greater London, with a service economy that never sleeps <span className="font-normal text-mid-gray text-sm">(ONS)</span></p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">&pound;150&ndash;250/hr</div>
              <p className="text-charcoal font-bold">Average London agency rate &mdash; we charge a fraction with no drop in quality</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">47</div>
              <p className="text-charcoal font-bold">Estimated weekly inbound enquiries for an established London trades firm at capacity</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── GEO CROSS-SELL ── */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-6">
            Is AI Search Recommending Your London Business?
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            When someone asks ChatGPT &ldquo;best emergency plumber in South London&rdquo; or tells Perplexity to &ldquo;find me a reliable accountant in Canary Wharf&rdquo;, is your business in the answer? With a million competitors, standing out in AI search results is make-or-break. Our <a href="/services/geo-audit" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">GEO Audit</a> checks your visibility across ChatGPT, Perplexity, Google AI Overviews and Claude &mdash; and gives you a clear plan to get cited. Starting from &pound;247.
          </p>
          <a href="/services/geo-audit">
            <Button variant="primary">Check Your AI Visibility &rarr;</Button>
          </a>
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
                Why would I use a Hampshire agency instead of a London one?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Because ours works the same and costs less. You&rsquo;re not paying for a Shoreditch office, a 12-person &ldquo;innovation team&rdquo;, or Friday drinks. You&rsquo;re paying for AI that answers your phone, books your appointments, and handles your admin. We deliver that from <a href="/locations/hampshire" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Hampshire</a> at a fraction of the London rate, and you deal directly with the founder &mdash; not a junior account manager.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Will the AI voice agent sound right for London callers?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes. We configure the voice, tone, and vocabulary to match your brand and your clientele. A Mayfair dental practice gets a different voice profile from a South London roofing company. We test with real scenarios before go-live and tweak until it&rsquo;s spot-on.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What types of London businesses do you work with?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Trades (plumbers, electricians, roofers, builders), dental and medical practices, cleaning companies, estate agents, accountants, solicitors, restaurants, salons, and fitness studios. If you take bookings, answer phone calls, or chase invoices &mdash; we can automate it. We also work with businesses in <a href="/locations/birmingham" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Birmingham</a> and other UK cities.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How do your prices compare to London AI agencies?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Significantly lower. London agencies typically charge &pound;150&ndash;250/hr for the same services we deliver at a fixed project price. Our voice agents start from a one-off setup fee plus a monthly subscription &mdash; no hourly billing, no scope creep, no surprises. You can see our <a href="/services/geo-audit" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">GEO Audit pricing</a> as an example of how we keep things transparent.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How quickly can you get started with a London business?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Voice agents and chatbots are typically live within 24&ndash;48 hours of you forwarding your number or giving us website access. Workflow automation projects start with a discovery call and go live in 1&ndash;14 days depending on complexity. Everything is set up remotely &mdash; no site visits needed.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            London Speed. Without London Prices.
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 15-minute chat. We'll tell you exactly what AI can do for your London business &mdash; and what it can't.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
            <a href="/contact">
              <Button variant="secondary">Book a free 15-min chat</Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── BOOK A CALL (Cal.com) ── */}
      <section className="bg-off-white border-t-3 border-charcoal py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-4">
              Pick a Time That Works for You
            </h2>
            <p className="text-charcoal max-w-2xl mx-auto">
              Book a free 30-minute call below &mdash; or use the contact form if you prefer.
            </p>
          </div>
          <CalBooking />
        </div>
      </section>


      {/* ── VOICE CHAT MODAL ── */}
      {isVoiceChatOpen && (
        <Suspense fallback={null}>
          <VoiceChat isOpen={isVoiceChatOpen} onClose={() => setIsVoiceChatOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}
