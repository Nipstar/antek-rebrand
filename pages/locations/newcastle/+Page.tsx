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
              AI AUTOMATION &bull; NEWCASTLE
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for Newcastle Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              Newcastle's got something a lot of cities don't: fierce local loyalty. When a Geordie finds a business they trust, they stick with it and tell their mates. But that loyalty has to be earned &mdash; and you earn it by being reliable, responsive, and not messing people about.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              That's exactly what our AI does. It answers every call, responds to every website visitor, and follows up on every lead &mdash; so you build the kind of reputation that keeps Jesmond, Gosforth, Gateshead, and the Quayside coming back. We build voice agents, chatbots, and workflow automation that make your business impossible to ignore. We also work with businesses in <a href="/locations/glasgow" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Glasgow</a> and <a href="/locations/leeds" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Leeds</a>.
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
              What We Build for Newcastle Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three services that give you big-business responsiveness at small-business prices. Proper value for money.
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
                An electrician in Ouseburn gets an emergency call at 6 pm &mdash; power&rsquo;s gone in a flat near the Quayside. He&rsquo;s finishing a rewire in Jesmond and can&rsquo;t pick up. Our AI voice agent answers, confirms the caller&rsquo;s address, explains that the next available slot is 7:30 pm, and books it in. That&rsquo;s a &pound;150+ callout that would have gone to whoever answered first. Across the North East, the tradespeople that respond fastest earn the loyalty &mdash; and the repeat business.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Every call answered. Every Geordie customer sorted.
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
                A homeowner in Gosforth is comparing three roofers at 10 pm after a storm. Your chatbot answers &ldquo;Do you cover NE3?&rdquo;, confirms emergency availability, and books a next-morning inspection &mdash; while the other two roofers&rsquo; websites offer a contact form and silence. From Newcastle Helix to Gateshead Quays, the North East&rsquo;s service economy rewards the businesses that show up first.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Always open. Always responsive. Proper canny.
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
                Jesmond, Gateshead, Sunderland, Durham &mdash; if you&rsquo;re covering the North East, your admin is scattered across emails, calendars, and that notebook you keep losing. We connect your CRM, calendar, invoicing, and job-management tools so a new enquiry gets logged, confirmed, scheduled, and invoiced automatically. North East trades businesses tell us they save 8&ndash;10 hours a week. That&rsquo;s a full day back on paying work.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                All the professionalism. None of the late-night spreadsheets.
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
              Value for Money. No Matter the Postcode.
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We're based in Hampshire, and we know what you're thinking: "Another southern company telling us how to run our business." That's not what this is. We're not here to sell you something flashy &mdash; we're here to build something useful at a price that makes sense for North East businesses.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              The beauty of AI automation is that it works the same whether you're in Jesmond or Johannesburg. Setup, testing, and ongoing support all happen remotely &mdash; video calls, screen shares, and phone conversations with Andy directly. No layers of middlemen, no premium pricing for the postcode.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We've worked with businesses across the North East &mdash; from electricians in Gosforth to property managers in Gateshead, from dental practices near the Quayside to service companies covering Sunderland and Durham. The tech doesn't know or care about borders. It just answers your phone and captures your leads.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              Newcastle businesses value straight-talking and fair pricing. That's exactly what you'll get from us. No surprises, no hidden costs, no waffle. Just AI that works and a bloke who picks up the phone when you need him.
            </p>
          </div>
        </div>
      </section>

      {/* ── NEWCASTLE BY THE NUMBERS ── */}
      <section className="bg-peach border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-12 text-center">
            Newcastle by the Numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">15,000+</div>
              <p className="text-charcoal font-bold">Registered businesses across Tyne and Wear</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">Newcastle Helix</div>
              <p className="text-charcoal font-bold">24-acre innovation hub &mdash; the North East&rsquo;s answer to the tech corridor, creating digital-first demand</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">1.1M</div>
              <p className="text-charcoal font-bold">Tyne and Wear population &mdash; a loyal customer base that values reliability</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">Gateshead Quays</div>
              <p className="text-charcoal font-bold">Major regeneration bringing new residents, businesses, and service demand to both sides of the Tyne</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── GEO CROSS-SELL ── */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-6">
            Is AI Search Recommending Your Newcastle Business?
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            When someone asks ChatGPT &ldquo;best electrician near the Quayside&rdquo; or tells Perplexity to &ldquo;find a reliable plumber in Jesmond&rdquo;, is your business in the answer? In a city where word of mouth matters more than anywhere, AI search is becoming the new recommendation engine. Our <a href="/services/geo-audit" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">GEO Audit</a> checks your visibility across ChatGPT, Perplexity, Google AI Overviews and Claude &mdash; and gives you a clear plan to get cited. Starting from &pound;247.
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
                Can the AI handle Geordie accents?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes, pet. Modern speech recognition handles Geordie and North East accents accurately &mdash; we test with real Newcastle callers during setup. The AI&rsquo;s own voice is configurable too, so it matches the tone of your business.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do you cover Gateshead, Sunderland, and Durham too?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes &mdash; Newcastle, Gateshead, Sunderland, Durham, North and South Tyneside, and Northumberland. The AI runs on cloud infrastructure, so it works identically regardless of postcode. We also serve businesses in <a href="/locations/glasgow" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Glasgow</a> and <a href="/locations/leeds" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Leeds</a>.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Why use a southern agency for my North East business?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Because AI doesn&rsquo;t care about the North-South divide &mdash; it cares about being built properly. You get the same quality at better value, direct access to the founder, and support that&rsquo;s a phone call away. No Grey Street office rent baked into your invoice. Newcastle businesses value fair pricing and straight talking &mdash; that&rsquo;s exactly what you get.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How quickly can you get my AI live?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Most voice agents and chatbots are live within 5&ndash;7 working days. Workflow automation typically 1&ndash;2 weeks depending on how many tools we&rsquo;re connecting. Everything is done remotely over video call &mdash; nee need to clear your diary.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Canny Investment. Proper Results.
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 15-minute chat. Straight conversation, no waffle &mdash; just an honest look at whether AI automation makes sense for your Newcastle business.
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
