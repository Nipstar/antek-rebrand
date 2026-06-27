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

      {/* ── HERO ── */}
      <section className="bg-warm-beige border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              AI AUTOMATION &bull; PORTSMOUTH
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for Portsmouth Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              England&rsquo;s only island city runs at full tilt &mdash; the dockyard, the waterfront, the Solent trade. AI voice agents, chatbots and workflow automation that answer every enquiry and clear the admin, so nothing slips through while you&rsquo;re busy.
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

      {/* ── DIRECT-ANSWER INTRO ── */}
      <section className="py-16 md:py-20 border-b-3 border-charcoal">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <p className="text-xl md:text-2xl text-charcoal leading-relaxed font-bold">
            Yes &mdash; Antek serves Portsmouth and the wider Solent area, including neighbouring Gosport, Fareham and Havant. We build AI voice agents, AI chatbots, workflow automation and GEO audits for island-city businesses, so calls get answered, web enquiries get captured and the repetitive admin runs itself &mdash; delivered remotely from our Andover base.
          </p>
        </div>
      </section>

      {/* ── LOCAL CONTEXT (entity-dense) ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            Trading on an Island City
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            <a href="https://en.wikipedia.org/wiki/Portsmouth" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Portsmouth</a>{' '}
            is the only city in England built almost entirely on an island &mdash;{' '}
            <a href="https://en.wikipedia.org/wiki/Portsea_Island" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Portsea Island</a>, hemmed in by{' '}
            <a href="https://en.wikipedia.org/wiki/The_Solent" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">the Solent</a>{' '}
            and the harbour. That density does something to local business: thousands of firms packed into Southsea, the waterfront retail of Gunwharf Quays and the streets under the Spinnaker Tower, all competing for the same passing trade and the same phone calls.
          </p>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            The city&rsquo;s economy is unusually distinctive. The Portsmouth Historic Dockyard and the working Port of Portsmouth anchor a deep cluster of marine and maritime businesses; a long defence heritage means a web of defence-adjacent suppliers and contractors; tourism and hospitality pull crowds to Southsea and Gunwharf year-round; and the University of Portsmouth keeps a steady stream of professional and creative services in the centre.
          </p>
          <p className="text-lg text-charcoal leading-relaxed">
            It&rsquo;s tightly connected, too &mdash; the M27, the A3(M) and the A27 feed the island and its neighbours: Gosport across the harbour, Fareham and Havant up the road, Hayling Island to the east and Waterlooville to the north. Whether you serve the island itself or the towns ringing the Solent, the bottleneck is the same one everywhere: enquiries arriving faster than a small team can answer them.
          </p>
        </div>
      </section>

      {/* ── SERVICES IN PORTSMOUTH ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              AI Automation for Portsmouth Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Four ways to stop enquiries leaking &mdash; framed for the island&rsquo;s marine, defence, tourism and professional firms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card hover>
              <Icon letter="V" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Voice Agents for Marine &amp; Trade
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                A boatyard, chandlery or marine contractor can&rsquo;t down tools to answer the phone. An AI voice agent picks up on the first ring, takes the job, books the slot and texts you the lead &mdash; no missed enquiry, no voicemail tag.
              </p>
              <a href="/services/ai-voice-assistants" aria-label="See how AI Voice Assistants work">
                <Button variant="primary" className="w-full">See Voice Agents</Button>
              </a>
            </Card>

            <Card hover>
              <Icon letter="C" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Chatbots for Tourism &amp; Hospitality
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                Southsea and Gunwharf visitors plan at all hours. A chatbot trained on your business answers questions, checks availability and books the table or room at 2am, while every competitor shows a &ldquo;we&rsquo;ll reply tomorrow&rdquo; form.
              </p>
              <a href="/services/ai-chatbots" aria-label="See how AI Chatbots work">
                <Button variant="primary" className="w-full">See Chatbots</Button>
              </a>
            </Card>

            <Card hover>
              <Icon letter="A" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Automation for Defence Suppliers &amp; Pros
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                Defence-adjacent suppliers and professional firms drown in quotes, follow-ups, compliance paperwork and CRM updates. We connect the tools and automate the repetitive admin, so a new enquiry is handled without anyone lifting a finger.
              </p>
              <a href="/services/workflow-automation" aria-label="See how Workflow Automation works">
                <Button variant="primary" className="w-full">See Automation</Button>
              </a>
            </Card>

            <Card hover>
              <Icon letter="G" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                GEO for Professional Services
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                When someone asks ChatGPT or Perplexity for the best firm in Portsmouth, are you in the answer? A GEO audit checks your visibility across the AI search tools and gives you a plan to get cited. From &pound;247.
              </p>
              <a href="/services/geo-audit" aria-label="See how the GEO Audit works">
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

      {/* ── AREAS WE COVER ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            Across Portsmouth &amp; the Solent
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            We work right across Portsea Island &mdash; Southsea, the city centre, the dockyard quarter and the Gunwharf waterfront &mdash; and out to the towns that ring the harbour: Gosport just across the water, plus Fareham, Havant, Hayling Island and Waterlooville within an easy reach of the M27 and A27.
          </p>
          <p className="text-lg text-charcoal leading-relaxed">
            Portsmouth shares the Solent with its sister city,{' '}
            <a href="/locations/southampton" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Southampton</a>, a short hop west along the M27 &mdash; if you trade across both port cities, we cover that whole waterfront stretch. None of it needs us on your doorstep: setup, testing and support all run remotely, which is how most of our coastal clients prefer it.
          </p>
        </div>
      </section>

      {/* ── PROOF ── */}
      <TrustBlock>
        {/* local testimonial slot — add a Portsmouth testimonial here once signed off in writing */}
        <p className="text-base text-charcoal leading-relaxed mt-8">
          Antek is a Certified Retell AI Partner with 30+ years in business technology, run from our base in Andover. We build and support every system ourselves &mdash; no offshore handoffs, no account-manager wall between you and the people doing the work.
        </p>
      </TrustBlock>

      {/* ── RETELL INDUSTRY DEMOS ── */}
      <RetellDemoCards curated />

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do you actually cover Portsmouth from Andover?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes. Andover is our base, but the AI runs in the cloud, so your voice agent answers Portsmouth calls exactly the same whether we&rsquo;re on the island or up the A303. Setup, testing and support all happen over video call &mdash; we work with island-city and Solent businesses without needing a desk on Portsea Island.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Does this fit marine and maritime businesses?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Well. Chandleries, boatyards, marine contractors and the suppliers around the Historic Dockyard and the Port of Portsmouth all share the same problem &mdash; you&rsquo;re on the water or on a job when the phone rings. A voice agent catches that enquiry, books it and texts you, so the work isn&rsquo;t lost while you&rsquo;re away from the desk.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What about Southsea hospitality and Gunwharf retail?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                A great fit. Tourism and hospitality around Southsea and Gunwharf Quays gets enquiries at every hour. A chatbot answers questions, checks availability and books the table, room or slot day and night &mdash; capturing the visitor who&rsquo;d otherwise click away to whoever replies first.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do you also cover Gosport, Fareham and Havant?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes. We work across the whole Solent ring &mdash; Gosport across the harbour, Fareham and Havant up the road, plus Hayling Island and Waterlooville. We also cover Portsmouth&rsquo;s sister port,{' '}
                <a href="/locations/southampton" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Southampton</a>, west along the M27.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How much does it cost and how quickly can I start?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                AI voice agents and chatbots start from &pound;57/month, and most are live within 24&ndash;48 hours of you forwarding your number or giving us website access. For a busy Portsmouth firm missing even a few enquiries a week, it usually pays for itself almost immediately.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Stop Losing Portsmouth Enquiries
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 30-minute call. We&rsquo;ll give you a straight answer about whether AI automation is right for your island-city business &mdash; no jargon, no pressure.
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
          <p className="text-sm text-off-white/70 mt-10">
            Antek &middot; Chantry House, 38 Chantry Way, Andover SP10 1LZ
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
