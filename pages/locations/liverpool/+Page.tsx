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
              AI AUTOMATION &bull; LIVERPOOL
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for Liverpool Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              Liverpool is a city that gets things done. From the commercial district around Dale Street to the creative quarter in the Baltic Triangle, from family trades firms in Aigburth to lettings agents covering Toxteth and Wavertree &mdash; the businesses here are built on graft, reputation, and word of mouth.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              But graft alone doesn't scale. We build AI voice agents, chatbots, and workflow automation that catch the calls you miss, convert the website visitors you lose, and handle the admin that keeps you at your desk until 8pm. We also work with businesses in <a href="/locations/manchester" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Manchester</a> and <a href="/locations/glasgow" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Glasgow</a>.
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
              What We Build for Liverpool Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three services that help Merseyside businesses compete with larger operations. No fluff, no jargon &mdash; just tools that work.
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
                A heating engineer in Anfield gets an emergency call at 7 am &mdash; boiler&rsquo;s gone in a terraced house off Breck Road. He&rsquo;s already on a job in Bootle. Our AI voice agent picks up, confirms the address, gives an ETA based on his schedule rules, and texts the details through. Job saved. Customer sorted. No stress. Across Merseyside, the tradespeople and service businesses that answer fastest build the strongest reputations. That&rsquo;s how Scouse loyalty works.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Every call answered. Every job captured. Every time.
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
                A couple in Wirral is comparing three estate agents at 10 pm. Your chatbot answers &ldquo;Do you cover CH43?&rdquo;, shows your latest listings, and books a valuation &mdash; while the other two agents&rsquo; websites offer nothing but a contact form. From the Baltic Triangle to Albert Dock, Liverpool&rsquo;s service economy moves fast. The business that responds first wins the instruction.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Your 24/7 lead converter that never clocks off.
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
                Bootle, Wirral, Knowsley, St Helens &mdash; if you&rsquo;re covering Merseyside, your admin is scattered across postcodes and spreadsheets. We connect your calendar, CRM, invoicing, and job-management tools so a new enquiry gets logged, confirmed, scheduled, and invoiced without you lifting a finger. Liverpool trades businesses tell us they save 8&ndash;10 hours a week. That&rsquo;s a full day back doing paying work.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Spend your time earning, not chasing paperwork.
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
              Remote Delivery. No Nonsense.
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We're based in Hampshire, not Liverpool &mdash; and we won't pretend otherwise. But here's the thing: AI automation doesn't need someone sitting in your office. Everything from the initial chat to the build, testing, and ongoing support happens over video call and screen share. It's how most tech businesses work these days, and it's how we've delivered for clients across the UK.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Our Liverpool clients include trades firms working across Merseyside, professional services in the city centre, and growing businesses from Wirral to Knowsley. The AI doesn't care about postcodes &mdash; it answers your calls and books your appointments whether the caller's in L1 or L36.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              What you get is Andy directly. 30+ years in tech, no juniors, no layers of account managers. If something needs sorting, it gets sorted. Liverpool businesses appreciate straight dealing &mdash; that's exactly what we offer.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              You'll judge us on results, not geography. And we're comfortable with that.
            </p>
          </div>
        </div>
      </section>

      {/* ── LIVERPOOL BY THE NUMBERS ── */}
      <section className="bg-peach border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-12 text-center">
            Liverpool by the Numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">22,000+</div>
              <p className="text-charcoal font-bold">Registered businesses across the Liverpool City Region</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">&pound;35bn</div>
              <p className="text-charcoal font-bold">GVA for the Liverpool City Region economy &mdash; and growing fast</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">1.5M</div>
              <p className="text-charcoal font-bold">City Region population &mdash; a massive customer base for service businesses</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">Baltic &amp; Beyond</div>
              <p className="text-charcoal font-bold">Major regeneration across the Baltic Triangle, waterfront, and Knowledge Quarter creating new demand</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── GEO CROSS-SELL ── */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-6">
            Is AI Search Recommending Your Liverpool Business?
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            When someone asks ChatGPT &ldquo;best plumber near Anfield&rdquo; or tells Perplexity to &ldquo;find a reliable estate agent in Wirral&rdquo;, is your business in the answer? In a city built on word of mouth, AI search is becoming the new recommendation engine. Our <a href="/services/geo-audit" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">GEO Audit</a> checks your visibility across ChatGPT, Perplexity, Google AI Overviews and Claude &mdash; and gives you a clear plan to get cited. Starting from &pound;247.
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
                Can the AI handle Scouse accents?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes. Modern speech recognition handles regional accents well &mdash; including Scouse. We test with real Liverpool callers during setup and tweak until it&rsquo;s spot-on. The AI&rsquo;s own voice is configurable too, so it matches the tone of your business.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do you cover all of Merseyside?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes &mdash; Liverpool, Wirral, Sefton, Knowsley, St Helens, and Halton. The AI runs on cloud infrastructure, so it works identically regardless of postcode. We also serve businesses in <a href="/locations/manchester" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Manchester</a> and <a href="/locations/glasgow" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Glasgow</a>.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Why use a Hampshire agency for my Liverpool business?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Because AI doesn&rsquo;t need a local postcode &mdash; it needs someone who builds it properly. You get the same technology at a lower price point, direct access to the founder, and support that&rsquo;s a phone call away. No Bold Street office rent baked into your invoice.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How quickly can you get my AI live?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Most voice agents and chatbots are live within 5&ndash;7 working days. Workflow automation typically takes 1&ndash;2 weeks depending on how many tools we&rsquo;re connecting. Everything is done remotely &mdash; no need to clear your diary.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Ready to Stop Losing Leads?
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 15-minute chat. No sales pitch, no obligation &mdash; just a straight conversation about whether AI automation is right for your Liverpool business.
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
