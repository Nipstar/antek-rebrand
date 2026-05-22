import { useState, Suspense, lazy } from 'react';
import { Button } from '../../../src/components/Button';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';
import { CalBooking } from '../../../src/components/CalBooking';
import { VoiceDemoButton } from '../../../src/components/VoiceDemoButton';

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
              AI AUTOMATION &bull; BIRMINGHAM
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for Birmingham Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              Birmingham doesn't hang about. It's the UK's second-largest city, it's got a manufacturing heritage that runs deep, and its service sector is fiercely competitive. If you're running a business here &mdash; whether that's a trades firm in Digbeth, a consultancy in the Jewellery Quarter, or a dental practice out in Solihull &mdash; you already know that every missed call is lost revenue.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              We build AI that catches those calls, converts those website visitors, and handles the admin that eats your evenings. Delivered remotely from Hampshire, working brilliantly for businesses across the West Midlands. We also serve <a href="/locations/manchester" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Manchester</a> and <a href="/locations/london" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">London</a>.
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

      {/* ── SERVICES ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              What We Build for Birmingham Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three tools that give you a competitive edge in a city where everyone's fighting for the same customers.
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
                A locksmith in the Jewellery Quarter gets a panic call at 11 pm &mdash; locked out, freezing, desperate. The locksmith&rsquo;s driving to another job in Digbeth. Our AI picks up, confirms the address, gives an ETA based on the locksmith&rsquo;s current location rules, and texts the details through. Job saved, customer sorted, zero stress. Across Birmingham&rsquo;s 45,000+ SMEs, that responsiveness is what separates the businesses that grow from the ones that tread water.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                24/7 call handling. No missed emergencies. No lost revenue.
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
                A homeowner in Solihull is comparing three kitchen fitters at 9 pm. Your chatbot answers &ldquo;Do you cover B91?&rdquo;, shows recent project photos, and books a free measure-up &mdash; while the other two fitters&rsquo; websites sit there doing nothing. In a city where 14% of the workforce is in construction and trades, the competition for every job is fierce. The business that responds first wins.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Convert browsers into bookings while Birmingham sleeps.
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
                Running jobs across Edgbaston, Sutton Coldfield, and Solihull means your admin is all over the place &mdash; quotes in your email, bookings in your calendar, invoices in a spreadsheet, and follow-ups in your head. We connect everything so a new lead gets logged, confirmed, scheduled, and invoiced without manual input. Birmingham trades businesses tell us they save 8&ndash;12 hours a week. That&rsquo;s a full day back.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Stop drowning in admin. Start scaling.
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
              Hampshire-Based. Birmingham-Ready.
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We're based in Hampshire, not Birmingham &mdash; and we're upfront about that. But here's the thing: AI automation doesn't need someone sitting in your office. It needs someone who knows what they're doing, builds it properly, and is available when you need them.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Everything we do &mdash; from the initial chat to the build, testing, and ongoing support &mdash; works over video call, screen share, and good old-fashioned phone conversations. Our Birmingham clients get exactly the same service, the same turnaround, and the same results as the businesses we work with down the road.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Whether you're a property manager in Edgbaston, a cleaning company covering Sutton Coldfield, or a solicitor's practice in the city centre &mdash; the AI we build works from day one, and we're a phone call away if anything needs tweaking.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              Birmingham's got enough agencies that over-promise and under-deliver. We'd rather just build something that works and let the results speak for themselves.
            </p>
          </div>
        </div>
      </section>

      {/* ── BIRMINGHAM BY THE NUMBERS ── */}
      <section className="bg-peach border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-12 text-center">
            Birmingham by the Numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">&pound;31.8bn</div>
              <p className="text-charcoal font-bold">Gross Value Added &mdash; Birmingham is the UK&rsquo;s second-largest city economy</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">45,000+</div>
              <p className="text-charcoal font-bold">Registered SMEs across the West Midlands combined authority</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">14%</div>
              <p className="text-charcoal font-bold">Of Birmingham&rsquo;s workforce in construction and trades &mdash; one of the highest in any major UK city</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">HS2</div>
              <p className="text-charcoal font-bold">Smithfield, HS2, and Eastside &mdash; three major regeneration projects creating thousands of new service-business customers</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── GEO CROSS-SELL ── */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-6">
            Is AI Search Recommending Your Birmingham Business?
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            When someone asks ChatGPT &ldquo;best locksmith near the Jewellery Quarter&rdquo; or tells Perplexity to &ldquo;find a reliable cleaning company in Solihull&rdquo;, is your business in the answer? With 45,000+ SMEs in the West Midlands, AI search visibility is becoming a serious competitive advantage. Our <a href="/services/geo-audit" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">GEO Audit</a> checks your visibility across ChatGPT, Perplexity, Google AI Overviews and Claude &mdash; and gives you a clear plan to get cited. Starting from &pound;247.
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
                Can the AI handle Birmingham accents and local dialect?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes. Modern speech recognition handles Brummie accents and Black Country dialect accurately &mdash; we test with real local callers during setup. The AI&rsquo;s own voice is configurable too, so it matches the tone and personality of your business.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do you cover the whole West Midlands?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes &mdash; Birmingham, Solihull, Wolverhampton, Walsall, Dudley, Sandwell, and Coventry. The AI runs on cloud infrastructure, so it works identically regardless of location. We also serve businesses in <a href="/locations/manchester" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Manchester</a> and <a href="/locations/london" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">London</a>.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Which Birmingham industries do you specialise in?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Construction and trades (14% of the local workforce), dental and medical, hospitality, cleaning, estate agents, legal, and professional services. If your business takes calls, books appointments, or sends invoices &mdash; we can automate it.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Why use a Hampshire agency for my Birmingham business?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Because AI doesn&rsquo;t need a local postcode &mdash; it needs someone who builds it properly. You get the same technology a Birmingham agency would charge double for, direct access to the founder (not a junior), and support that&rsquo;s a phone call away. No Brindleyplace office rent baked into your invoice.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Ready to Compete Smarter?
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 15-minute chat. No jargon, no pitch deck &mdash; just a straight conversation about whether AI automation makes sense for your Birmingham business.
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
