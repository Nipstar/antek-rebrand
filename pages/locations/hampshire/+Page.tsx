import { useState, Suspense, lazy } from 'react';
import { Button } from '../../../src/components/Button';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';
import { CalBooking } from '../../../src/components/CalBooking';
import { VoiceDemoButton } from '../../../src/components/VoiceDemoButton';
import { TrustBlock } from '../../../src/components/TrustBlock';
import { QuickRecap } from '../../../src/components/QuickRecap';

const VoiceChat = lazy(() => import('../../../src/components/VoiceChat').then(m => ({ default: m.VoiceChat })));

// HUB PAGE — this is the only location page that targets the "Hampshire" head term.
// Town pages target their own town and link up here; this page links DOWN to every town.
const towns = [
  { name: 'Andover', slug: 'andover', blurb: 'Our HQ. Chantry House, 38 Chantry Way. Happy to meet for a coffee.' },
  { name: 'Basingstoke', slug: 'basingstoke', blurb: 'Hampshire’s largest town, up the A303. Chineham, Old Basing, Hatch Warren.' },
  { name: 'Winchester', slug: 'winchester', blurb: 'The county town and cathedral city — professional firms, practices, hospitality.' },
  { name: 'Southampton', slug: 'southampton', blurb: 'Port city with thousands of businesses, two universities, a 24/7 hospitality sector.' },
  { name: 'Salisbury', slug: 'salisbury', blurb: 'Wiltshire cathedral city on Hampshire’s western edge, down the A303.' },
  { name: 'Newbury', slug: 'newbury', blurb: 'Berkshire market town just up the A34. Same 24/7 AI coverage, easy face-to-face.' },
];

export default function Page() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);

  return (
    <div className="bg-off-white">

      {/* ── HERO (benefit-led H1, keeps the Hampshire head term — hub only) ── */}
      <section className="bg-warm-beige border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              AI AGENCY &bull; HAMPSHIRE
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              Never Miss Another Lead Across Hampshire
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              We&rsquo;re a Hampshire AI agency based in <a href="/locations/andover" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Andover</a>, right in the middle of the county. From Basingstoke to Southampton, Winchester to the borders, we build the AI that keeps your phone answered and your leads captured while you&rsquo;re out doing the actual work. Built by <a href="/about" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Andy Norman</a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href="/contact">
                <Button variant="primary" className="w-full sm:w-auto">Book a free 30-min call</Button>
              </a>
              <a href="tel:03330389960">
                <Button variant="secondary" className="w-full sm:w-auto">Call 0333 038 9960</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <QuickRecap items={[
        'AI voice agents, chatbots and workflow automation for businesses right across Hampshire',
        'Based in Andover — founder-led, with face-to-face available across the county',
        'Stop losing work to missed calls, slow follow-ups and admin overload',
        'From £57/month, live within 24–48 hours — <a href="/pricing" class="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">see full pricing</a>',
        'Everything runs remotely — same quality whether you’re in Winchester or anywhere else in the UK',
      ]} />

      {/* ── OFFER / SERVICES ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              AI Automation for Hampshire Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three services, all designed to stop you losing money to missed calls, slow follow-ups, and admin that eats your evenings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card hover>
              <Icon letter="V" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Your Phone, Answered 24/7
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                An AI voice agent that picks up when you&rsquo;re on a job in Romsey or stuck on the M3 &mdash; answering questions, booking appointments and capturing caller details in a natural, human-sounding voice. It catches every call you can&rsquo;t.
              </p>
              <a href="/services/ai-voice-assistants" aria-label="See how AI Voice Agents work">
                <Button variant="primary" className="w-full">See Voice Agents</Button>
              </a>
            </Card>

            <Card hover>
              <Icon letter="C" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Your Website, Answered at 2am
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                A chatbot trained on your business that talks to visitors the moment they land &mdash; answering questions, qualifying them and booking them straight into your calendar, whether it&rsquo;s 2pm or 2am.
              </p>
              <a href="/services/ai-chatbots" aria-label="See how AI Chatbots work">
                <Button variant="primary" className="w-full">See Chatbots</Button>
              </a>
            </Card>

            <Card hover>
              <Icon letter="A" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Your Admin, Handled
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                We connect the tools you already use &mdash; calendar, CRM, email, invoicing &mdash; and automate the repetitive stuff. New enquiry comes in? Logged, acknowledged and followed up automatically.
              </p>
              <a href="/services/workflow-automation" aria-label="See how Workflow Automation works">
                <Button variant="primary" className="w-full">See Automation</Button>
              </a>
            </Card>
          </div>

          <div className="text-center mt-14">
            <a href="/contact">
              <Button variant="primary">Book a free 30-min call</Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── PROOF ── */}
      <TrustBlock>
        {/* local testimonial slot */}
      </TrustBlock>

      {/* ── TOWNS WE COVER (hub-and-spoke: links DOWN to every town page) ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-12">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              Towns We Cover Across Hampshire
            </h2>
            <p className="text-lg text-charcoal leading-relaxed">
              Pick your town for the local detail &mdash; or just <a href="/contact" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">book a call</a>. We cover the whole county and the border towns, and everywhere else in the UK runs remotely just the same.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {towns.map((town) => (
              <a key={town.slug} href={`/locations/${town.slug}`} className="block group">
                <Card hover>
                  <Icon letter={town.name[0]} size="md" />
                  <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-3 group-hover:text-terracotta transition-colors">
                    {town.name}
                  </h3>
                  <p className="text-charcoal leading-relaxed text-sm">
                    {town.blurb}
                  </p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY A HAMPSHIRE AGENCY (local / founder) ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              Why a Hampshire AI Agency?
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              I&rsquo;m Andy, and I&rsquo;m based in <a href="/locations/andover" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Andover</a>. I&rsquo;ve got 30+ years in tech &mdash; not the trendy Silicon Valley kind, but the kind where you actually build things that work and fix them when they don&rsquo;t.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              I set up Antek Automation because I kept seeing local tradespeople and service businesses losing work to missed calls, slow follow-ups and admin overload. The big AI agencies don&rsquo;t care about a plumber in Alton or a cleaning company in Fareham. I do.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Happy to meet for a coffee if you&rsquo;re nearby &mdash; I&rsquo;ve done it with businesses across the county, from Petersfield to Aldershot. But everything works brilliantly over a video call too. Most of my Hampshire clients never need to meet in person, and their AI agents run just as well.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              The point is: you&rsquo;re not dealing with a faceless agency. You&rsquo;re dealing with someone who lives here, picks up his own phone, and actually gives a toss about whether this works for your business.
            </p>
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
                Absolutely &mdash; we&rsquo;re based in <a href="/locations/andover" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Andover</a>, so if you&rsquo;re anywhere in Hampshire we&rsquo;re happy to meet for a coffee. That said, most of our Hampshire clients prefer video calls because it&rsquo;s faster and more convenient. Either way works.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do you work with tradespeople in rural Hampshire?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes. Some of our best-performing voice agents are for trades businesses covering rural areas &mdash; exactly the kind of businesses where you&rsquo;re most likely to miss calls because you&rsquo;re mid-job with no signal. The AI catches everything you can&rsquo;t.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What areas of Hampshire do you cover?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                All of it &mdash; we&rsquo;ve got dedicated pages for <a href="/locations/andover" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Andover</a>, <a href="/locations/basingstoke" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Basingstoke</a>, <a href="/locations/winchester" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Winchester</a> and <a href="/locations/southampton" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Southampton</a>, plus the border towns of <a href="/locations/salisbury" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Salisbury</a> and <a href="/locations/newbury" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Newbury</a>. Our AI solutions work remotely, so there are no geographic limitations.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How quickly can you set up an AI voice agent for my Hampshire business?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Most voice agents and chatbots are live within 24&ndash;48 hours of you forwarding your number or giving us website access. For Hampshire businesses, we can usually do a face-to-face kickoff the same week if you prefer.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What does it cost for a Hampshire business?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                AI voice agents and chatbots start from &pound;57/month. Most Hampshire businesses recover that within the first few captured calls. <a href="/pricing" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">See full pricing</a>, or book a free call for an exact quote.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Ready to Stop Losing Leads?
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 30-minute discovery call with Andy. No pitch deck, no pressure &mdash; just a straight conversation about whether AI automation makes sense for your Hampshire business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a href="/contact">
              <Button variant="primary">Book a free 30-min call</Button>
            </a>
            <a href="tel:03330389960">
              <Button variant="secondary">Call 0333 038 9960</Button>
            </a>
            <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
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
