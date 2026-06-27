import { useState, Suspense, lazy } from 'react';
import { Button } from '../../../src/components/Button';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';
import { CalBooking } from '../../../src/components/CalBooking';
import { VoiceDemoButton } from '../../../src/components/VoiceDemoButton';
import { TrustBlock } from '../../../src/components/TrustBlock';
import { RetellDemoCards } from '../../../src/components/RetellDemoCards';

const VoiceChat = lazy(() => import('../../../src/components/VoiceChat').then(m => ({ default: m.VoiceChat })));

export default function Page() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);

  return (
    <div className="bg-off-white">

      {/* ── 1. HERO (coastal / BCP hook + remote-first honesty) ── */}
      <section className="bg-warm-beige border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              AI AUTOMATION &bull; BOURNEMOUTH
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for Bournemouth Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              From the seafront to the BCP finance offices, AI voice agents, chatbots and{' '}
              <a href="/services/workflow-automation" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">workflow automation</a>{' '}
              that answer every enquiry and clear the admin. We&rsquo;re remote-first for the coast &mdash; Bournemouth sits a fair way from our Andover base, so everything runs over video, with us on the seafront in person where it genuinely earns the trip.
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

      {/* ── 2. DIRECT-ANSWER INTRO ── */}
      <section className="py-16 md:py-20 border-b-3 border-charcoal">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <p className="text-xl md:text-2xl text-charcoal leading-relaxed font-bold">
            Yes &mdash; Antek builds AI voice agents, chatbots and workflow automation for businesses in Bournemouth and across the wider Poole and Christchurch conurbation. We capture every call and web enquiry, qualify the lead and clear the repetitive admin, so finance, tourism and creative firms stop losing work to a missed phone or an unanswered form.
          </p>
        </div>
      </section>

      {/* ── 3. LOCAL CONTEXT (entity-dense) ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            The Bournemouth Picture
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            <a href="https://en.wikipedia.org/wiki/Bournemouth" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Bournemouth</a>{' '}
            anchors the{' '}
            <a href="https://en.wikipedia.org/wiki/Bournemouth,_Christchurch_and_Poole" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Bournemouth, Christchurch &amp; Poole</a>{' '}
            conurbation &mdash; the largest urban area on the south coast between Southampton and Plymouth. It runs from the chines and the seafront west to{' '}
            <a href="https://en.wikipedia.org/wiki/Poole" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Poole</a>{' '}
            harbour and the millionaires&rsquo; spit at Sandbanks, east through Christchurch toward the New Forest, and inland up the A338 Wessex Way. Bournemouth University and the Arts University feed a steady stream of graduates into the town.
          </p>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            What makes this a distinctive patch in{' '}
            <a href="https://en.wikipedia.org/wiki/Dorset" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Dorset</a>{' '}
            is the mix. There&rsquo;s a genuinely notable financial-services cluster &mdash; pensions, insurance, fund administration and advice firms with serious headcount &mdash; sitting alongside one of the country&rsquo;s busiest tourism and hospitality economies built around the seven miles of seafront. Add a fast-growing digital and creative scene, and you have three very different kinds of business under one BCP roof.
          </p>
          <p className="text-lg text-charcoal leading-relaxed">
            Each of those sectors leaks enquiries in its own way: a compliance-bound finance firm can&rsquo;t let calls go to voicemail, a seafront hotel or restaurant takes bookings around the clock in season, and a busy creative studio loses hours to admin instead of billable work. That&rsquo;s exactly where AI automation pays for itself.
          </p>
        </div>
      </section>

      {/* ── 4. SERVICES IN BOURNEMOUTH (4 cards, single CTA) ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              AI Automation for Bournemouth Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Four ways finance, tourism and creative firms across BCP stop the leaks &mdash; framed by the outcome.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card hover>
              <Icon letter="C" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Bookings Answered at 2am
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                A chatbot trained on your business answers the visitor mid-evening &mdash; the hotel guest checking parking, the restaurant table for eight, the studio enquiry &mdash; and books it while competitors show a &ldquo;we&rsquo;ll reply soon&rdquo; form. Perfect for seafront hospitality and tourism.
              </p>
              <a href="/services/ai-chatbots" aria-label="See how AI Chatbots work">
                <Button variant="primary" className="w-full">See Chatbots</Button>
              </a>
            </Card>

            <Card hover>
              <Icon letter="V" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Every Finance Call Picked Up
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                An AI voice agent answers on the first ring, takes the details accurately and routes or books the call &mdash; the consistency a compliance-minded Bournemouth finance firm needs, without a missed-call queue eating your morning.
              </p>
              <a href="/services/ai-voice-assistants" aria-label="See how AI Voice Agents work">
                <Button variant="primary" className="w-full">See Voice Agents</Button>
              </a>
            </Card>

            <Card hover>
              <Icon letter="A" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Admin Off the Creative Team
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                Follow-ups, quotes, onboarding and CRM updates &mdash; the repetitive jobs that steal billable hours from a digital or creative studio &mdash; connected up and automated so a new enquiry is handled without anyone touching a keyboard.
              </p>
              <a href="/services/workflow-automation" aria-label="See how Workflow Automation works">
                <Button variant="primary" className="w-full">See Automation</Button>
              </a>
            </Card>

            <Card hover>
              <Icon letter="G" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Get Found in AI Search
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                When someone asks ChatGPT or Perplexity for a Bournemouth accountant, hotel or agency, are you in the answer? Our GEO Audit checks your visibility across the AI engines and hands you a plan to get cited. From &pound;247.
              </p>
              <a href="/services/geo-audit" aria-label="See the GEO Audit">
                <Button variant="primary" className="w-full">See GEO Audit</Button>
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

      {/* ── 5. AREAS WE COVER (prose; light cross-link to Southampton) ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            Areas We Cover Around Bournemouth
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            We work with businesses right across the conurbation &mdash; from Poole harbour and the Sandbanks peninsula in the west, through Bournemouth town centre and the seafront, out to Christchurch and the Stour and Avon valleys in the east. Wherever you sit in BCP, the AI runs the same: it answers, qualifies and books regardless of which side of the chines you trade from.
          </p>
          <p className="text-lg text-charcoal leading-relaxed">
            Head east past the New Forest and you reach our nearest covered city,{' '}
            <a href="/locations/southampton" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Southampton</a>{' '}
            &mdash; a useful waypoint between Bournemouth and our Andover base, and a sign of how far along the south coast we already work.
          </p>
        </div>
      </section>

      {/* ── 6. PROOF (governed TrustBlock + credibility line) ── */}
      <TrustBlock>
        <p className="mt-8 text-charcoal leading-relaxed text-base md:text-lg">
          Antek is a Certified Retell AI Partner, drawing on 30+ years in technology and run from our base at Andover in Hampshire. Every Bournemouth build is delivered and supported remotely as standard, with face-to-face on the coast where it genuinely helps.
        </p>
      </TrustBlock>

      {/* ── 7. RETELL INDUSTRY DEMOS (pop-card orbs) ── */}
      <RetellDemoCards curated />

      {/* ── 8. FAQ ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do you really cover Bournemouth and Dorset, this far from Andover?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                We do. Bournemouth is further from our Andover base than our Hampshire patch, so we&rsquo;re honest about it: we&rsquo;re remote-first here. Setup, testing and ongoing support all run over video call, and your AI voice agent or chatbot answers BCP enquiries exactly the same whether we&rsquo;re next door or up the A338. We come down to the coast in person when a job genuinely warrants it.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Does AI automation suit Bournemouth&rsquo;s finance and hospitality firms?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Especially well. A Bournemouth finance firm needs every call answered accurately and consistently &mdash; ideal for an AI voice agent. A seafront hotel or restaurant takes enquiries and bookings around the clock in season &mdash; ideal for a chatbot. And creative or digital studios across BCP claw back billable hours when the admin is automated. Different sectors, same principle.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How much does it cost and how quickly can I start?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                AI voice agents and chatbots start from £57/month, and most go live within 24&ndash;48 hours of you forwarding your number or giving us website access &mdash;{' '}
                <a href="/pricing" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">see full pricing</a>. For a Bournemouth business losing even a few enquiries a week, it tends to pay for itself fast.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Can we meet in person on the coast?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes, where it genuinely helps. Most Bournemouth clients are happy on video and never need us in the room &mdash; but for a larger or more complex build we&rsquo;ll come down to the seafront to kick things off face-to-face. We won&rsquo;t pretend we&rsquo;re local; we&rsquo;ll just be straight about when a trip earns its keep.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do you only cover Bournemouth itself, or the whole BCP area?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                The whole conurbation &mdash; Bournemouth, Poole, Sandbanks and Christchurch, plus the surrounding Dorset towns out toward the New Forest. Because the AI lives in the cloud, the exact postcode never changes how well it works for you.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA (charcoal) + NAP ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Stop Losing Bournemouth Enquiries
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 30-minute call. We&rsquo;ll give you a straight answer about whether AI automation fits your Bournemouth finance, hospitality or creative business &mdash; and how fast you could be live.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12">
            <a href="/contact">
              <Button variant="primary">Book a free 30-min call</Button>
            </a>
            <a href="tel:03330389960">
              <Button variant="secondary">Call 0333 038 9960</Button>
            </a>
            <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
          </div>
          <p className="text-off-white/70 text-sm leading-relaxed">
            Antek &mdash; Chantry House, 38 Chantry Way, Andover SP10 1LZ
          </p>
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
