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
              AI AGENCY &bull; HAMPSHIRE
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for Hampshire Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              We're based in <a href="/locations/andover" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Andover</a>, right in the middle of Hampshire. From <a href="/locations/southampton" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Southampton</a> up to Basingstoke, from Winchester across to Farnborough &mdash; if you run a service business anywhere in the county, we build the AI that keeps your phone answered and your leads captured while you're out doing the actual work.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              Whether you're a plumber in Eastleigh who can't answer calls mid-job, an electrician in Fleet losing evening enquiries, or a dental practice in Winchester drowning in appointment requests &mdash; we've got something that'll genuinely help.
            </p>
            <p className="text-sm text-mid-gray mb-8">By <a href="/about" className="underline hover:text-terracotta transition-colors">Andy Norman</a>, Founder | 30+ years in technology</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <a href="/contact">
                <Button variant="primary">Book a free 30-min discovery call</Button>
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
              What We Build for Hampshire Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three services. All of them designed to stop you losing money to missed calls, slow follow-ups, and admin that eats your evenings.
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
                An AI receptionist that picks up when you're on a job in Romsey or stuck in traffic on the M3. It answers questions, books appointments, and captures caller details in a natural, human-sounding voice. Whether you're a tradesperson in rural areas around Weyhill and Thruxton with patchy mobile signal, or running a busy practice in Winchester &mdash; it catches every call you can't.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                No more missed calls. No more chasing voicemails at 9pm.
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
                A smart chat widget on your website that talks to visitors the moment they land. Answers their questions, qualifies them, and books them straight into your calendar &mdash; whether it's 2pm or 2am. New residents on Augusta Park and Picket Piece who don't have an established plumber yet? They're searching online at 10pm. Your chatbot is the one that's actually there.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Turns browsers into booked appointments while you sleep.
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
                We connect the tools you already use &mdash; your calendar, CRM, email, invoicing &mdash; and automate the repetitive stuff. New enquiry comes in? Logged, acknowledged, and followed up automatically. Perfect for sole traders and small teams across Test Valley who are doing everything themselves &mdash; quoting, invoicing, chasing, booking &mdash; and drowning in admin.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Less admin. Fewer mistakes. More time for paying work.
              </p>
              <a href="/services/workflow-automation" aria-label="See how Workflow Automation works">
                <Button variant="primary" className="w-full">See Automation</Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* ── WHY LOCAL MATTERS ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              Why a Hampshire AI Agency?
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              I'm Andy, and I'm based in <a href="/locations/andover" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Andover</a>. I've got 30+ years in tech &mdash; not the trendy Silicon Valley kind, but the kind where you actually build things that work and fix them when they don't.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              I set up Antek Automation because I kept seeing local tradespeople and service businesses losing work to missed calls, slow follow-ups, and admin overload. The big AI agencies don't care about a plumber in Alton or a cleaning company in Fareham. I do.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Happy to meet for a coffee if you're nearby &mdash; I've done it with businesses across the county, from Petersfield to Aldershot. But honestly, everything works brilliantly over a video call too. Most of my Hampshire clients never need to meet in person, and their AI agents run just as well.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              The point is: you're not dealing with a faceless agency. You're dealing with a bloke who lives here, who picks up his own phone, and who actually gives a toss about whether this works for your business.
            </p>
          </div>
        </div>
      </section>

      {/* ── HAMPSHIRE BY THE NUMBERS ── */}
      <section className="bg-peach border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-12 text-center">
            Hampshire by the Numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">72,000+</div>
              <p className="text-charcoal font-bold">Registered businesses in Hampshire (ONS)</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">4,200+</div>
              <p className="text-charcoal font-bold">Small businesses in Test Valley alone, with construction and trades representing 12% of the local economy</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">11.3%</div>
              <p className="text-charcoal font-bold">Self-employment rate &mdash; one of the highest in the South East</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">78%</div>
              <p className="text-charcoal font-bold">Of Hampshire's over-55 population &mdash; the demographic most likely to need home services &mdash; are regular internet users</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── GEO CROSS-SELL ── */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-6">
            Is AI Search Recommending Your Hampshire Business?
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            When someone asks ChatGPT &ldquo;Who&rsquo;s the best plumber in Winchester?&rdquo; or tells Perplexity to &ldquo;find me an electrician near Basingstoke&rdquo;, is your business in the answer? Our <a href="/services/geo-audit" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">GEO Audit</a> checks your visibility across ChatGPT, Perplexity, Google AI Overviews and Claude &mdash; and gives you a clear plan to get cited. Starting from &pound;247.
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
                Can I meet you in person?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Absolutely &mdash; we're based in <a href="/locations/andover" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Andover</a>, so if you're anywhere in Hampshire we're happy to meet for a coffee. That said, most of our Hampshire clients prefer video calls because it's faster and more convenient. Either way works.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do you work with tradespeople in rural Hampshire?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes. Some of our best-performing voice agents are for trades businesses covering rural areas &mdash; exactly the kind of businesses where you're most likely to miss calls because you're mid-job with no signal. The AI catches everything you can't.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What areas of Hampshire do you cover?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                All of it. From Basingstoke down to the New Forest, Winchester across to Farnborough, and everywhere in between. We've worked with businesses across Test Valley, Basingstoke &amp; Deane, Winchester, Eastleigh, Hart, Rushmoor and the New Forest. Our AI solutions work remotely so there are no geographic limitations.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How quickly can you set up an AI voice agent for my Hampshire business?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Most voice agents are live within 5&ndash;7 working days from our first call. For Hampshire businesses, we can usually do a face-to-face kickoff meeting the same week if you prefer, which speeds things up even further.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What does it cost for a Hampshire business?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                AI voice agents start from &pound;97/month and chatbots from &pound;57/month, with setup from &pound;249. Most Hampshire businesses recover that within the first few captured calls. Book a free call for an exact quote.
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
            Book a free 30-minute discovery call with Andy. No pitch deck, no pressure &mdash; just a straight conversation about whether AI automation makes sense for your Hampshire business.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
            <a href="/contact">
              <Button variant="secondary">Book a free 30-min discovery call</Button>
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
