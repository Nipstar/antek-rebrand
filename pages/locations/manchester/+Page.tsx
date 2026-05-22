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
              AI AUTOMATION &bull; MANCHESTER
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for Manchester Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              Manchester moves fast. It's the beating heart of the Northern Powerhouse, with one of the fastest-growing business scenes in the UK. From media agencies in Salford to plumbing firms in Trafford, from estate agents along Deansgate to cleaning companies covering Stockport &mdash; everyone's fighting for the same customers, and the businesses that respond fastest win.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              We build AI voice agents, chatbots, and workflow automation that make sure you're always the first to respond &mdash; even when you're mid-job, mid-meeting, or fast asleep. We also work with businesses in <a href="/locations/leeds" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Leeds</a> and <a href="/locations/liverpool" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Liverpool</a>.
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
              What We Build for Manchester Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three services built for a city that doesn't wait around. Speed, efficiency, and zero wasted time.
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
                A plumber in Chorlton gets a call while they&rsquo;re elbow-deep in a boiler in Didsbury. Our AI voice agent answers in a natural, human-sounding voice, confirms the caller&rsquo;s postcode, gives a ballpark for the job, and books a slot &mdash; all while the plumber finishes the job in hand. Across Greater Manchester&rsquo;s 67,000 SMEs, the businesses that respond fastest win the work. Full stop.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Never lose a job to a missed call again.
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
                Northern Quarter bar owners, Altrincham estate agents, Stockport dental practices &mdash; their customers are browsing at all hours. Our chatbot sits on your website and engages every visitor the moment they land: answering &ldquo;Do you cover M21?&rdquo;, qualifying the lead, and booking an appointment before they click back to Google. In a city with 67,000 competing businesses, two seconds of hesitation loses you the customer.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Your 24/7 sales team that never calls in sick.
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
                Stockport, Trafford, Salford, Oldham, Bury &mdash; if you&rsquo;re covering Greater Manchester, your admin is scattered across postcodes, tools, and half-finished spreadsheets. We connect your calendar, CRM, invoicing, and job-management tools so a new enquiry gets logged, confirmed, scheduled, and invoiced without you touching a thing. The average Manchester tradesperson spends 8&ndash;10 hours a week on admin. We cut that to near-zero.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Spend your time earning, not admin-ing.
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
              Why a Hampshire Agency Works for Manchester
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Manchester knows tech. It's home to MediaCity, a thriving startup scene, and businesses that expect digital-first solutions. So it won't surprise you that our entire service works remotely &mdash; from initial consultation to build, launch, and ongoing support.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We're based in Hampshire, but our Manchester clients don't notice the distance. Everything happens over video call and screen share. The AI we build runs on cloud infrastructure that doesn't care whether it's answering calls in Didsbury or Deansgate. And when something needs tweaking, we're a phone call or message away.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              What you won't get is a bloated team, layers of account managers, or the kind of agency overhead that Manchester's Northern Quarter seems to specialise in. You get Andy &mdash; 30+ years in tech, direct access, straight answers.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              We've worked with Manchester trades firms, professional services companies, and hospitality businesses. The common thread? They all wanted something that actually works, without the waffle. That's what we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* ── MANCHESTER BY THE NUMBERS ── */}
      <section className="bg-peach border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-12 text-center">
            Manchester by the Numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">67,000</div>
              <p className="text-charcoal font-bold">Registered SMEs across Greater Manchester</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">#1</div>
              <p className="text-charcoal font-bold">Fastest-growing tech and digital economy outside London</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">&pound;24bn</div>
              <p className="text-charcoal font-bold">Service-sector output across Greater Manchester (ONS)</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">10</div>
              <p className="text-charcoal font-bold">Local authority areas covered &mdash; from MediaCity in Salford to Trafford Park and beyond</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── GEO CROSS-SELL ── */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-6">
            Is AI Search Recommending Your Manchester Business?
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            When someone asks ChatGPT &ldquo;best plumber in Chorlton&rdquo; or tells Perplexity to &ldquo;find an emergency electrician in Stockport&rdquo;, is your business in the answer? In a city with 67,000 SMEs, the businesses that get cited by AI search have a massive edge. Our <a href="/services/geo-audit" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">GEO Audit</a> checks your visibility across ChatGPT, Perplexity, Google AI Overviews and Claude &mdash; and gives you a clear plan to get found. Starting from &pound;247.
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
                Do I need a Manchester-based agency?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                No. AI automation runs on cloud infrastructure &mdash; it doesn&rsquo;t matter whether the person who built it is in Salford or Southampton. What matters is that it works, that it&rsquo;s built properly, and that you can get hold of someone when you need support. We tick all three boxes.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How does your pricing compare to Manchester agencies?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Lower, because we don&rsquo;t have Northern Quarter office rent or a team of twelve. You get the same technology, the same quality build, and direct access to the founder &mdash; at a price that makes sense for Manchester SMEs, not enterprise budgets.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Can the AI voice agent handle Manchester accents?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes. Modern speech recognition handles regional accents extremely well &mdash; we test with real Manchester callers during setup. The voice agent&rsquo;s own voice is configurable too, so it matches the tone of your business.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do you cover all of Greater Manchester?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                All ten boroughs: Manchester, Salford, Trafford, Stockport, Tameside, Oldham, Rochdale, Bury, Bolton, and Wigan. The AI doesn&rsquo;t care about postcodes &mdash; it works anywhere. We also serve businesses in <a href="/locations/leeds" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Leeds</a> and <a href="/locations/liverpool" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Liverpool</a>.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Move Faster Than the Competition
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            15 minutes. Free. No obligation. Let's talk about whether AI automation makes sense for your Manchester business.
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
