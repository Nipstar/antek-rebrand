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

      {/* ── 1. HERO ── */}
      <section className="bg-warm-beige border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              AI AUTOMATION &bull; READING
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for Reading Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              Reading runs at Thames Valley speed &mdash; so the firm that answers first wins the work. AI voice agents, chatbots and{' '}
              <a href="/services/workflow-automation" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">workflow automation</a>{' '}
              that pick up every call, every web enquiry and every follow-up, day and night, for offices along the M4 corridor.
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
            Yes &mdash; Antek serves Reading and the wider Thames Valley with AI voice agents, AI chatbots and{' '}
            <a href="/services/workflow-automation" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">workflow automation</a>{' '}
            that capture leads and cut admin. We work with office-based firms across Reading, neighbouring Wokingham and out towards Newbury, set up and supported remotely from our Andover base.
          </p>
        </div>
      </section>

      {/* ── 3. LOCAL CONTEXT (entity-dense) ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            Built for the Thames Valley
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            <a href="https://en.wikipedia.org/wiki/Reading,_Berkshire" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Reading</a>{' '}
            is the commercial heart of the{' '}
            <a href="https://en.wikipedia.org/wiki/Thames_Valley" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Thames Valley</a>, strung along the M4 between London and the West. Reading station is one of the busiest interchanges outside the capital, feeding a daily tide of commuters into offices that never quite switch off &mdash; which is exactly where an enquiry slips through unanswered.
          </p>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            The town sits where the{' '}
            <a href="https://en.wikipedia.org/wiki/River_Thames" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">River Thames</a>{' '}
            meets the River Kennet, with the bulk of its business base clustered on Green Park and Thames Valley Park rather than the high street. Those parks are full of technology and professional-services firms &mdash; the kind of office where the phones and inboxes are the front door, and a slow reply is a lost contract.
          </p>
          <p className="text-lg text-charcoal leading-relaxed">
            Reading anchors a busy patch: Wokingham to the south-east, Bracknell down the A329(M), and Newbury to the west along the M4. We cover the lot. Everything &mdash; setup, testing, ongoing support &mdash; runs over video call, so a Reading firm is supported exactly the same as one on our doorstep.
          </p>
        </div>
      </section>

      {/* ── 4. SERVICES IN READING ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              AI Automation for Reading Firms
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Four ways to stop the leaks in a busy Thames Valley office &mdash; framed by the outcome, not the tech.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card hover>
              <Icon letter="C" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Your Website, Answered at 2am
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                A chatbot trained on your business answers questions, qualifies the enquiry and books the meeting &mdash; so a prospect researching suppliers after hours gets a reply instead of a contact form.
              </p>
              <a href="/services/ai-chatbots" aria-label="See how AI Chatbots work">
                <Button variant="primary" className="w-full">See Chatbots</Button>
              </a>
            </Card>

            <Card hover>
              <Icon letter="V" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Your Phone, Answered Every Time
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                An AI voice agent picks up on the first ring &mdash; through back-to-back meetings, lunch and after hours &mdash; takes the details, books the call back and logs the lead. No voicemail, no missed contract.
              </p>
              <a href="/services/ai-voice-assistants" aria-label="See how AI Voice Agents work">
                <Button variant="primary" className="w-full">See Voice Agents</Button>
              </a>
            </Card>

            <Card hover>
              <Icon letter="A" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Your Admin, Handled
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                Follow-ups, proposals, CRM updates and the repetitive desk work that eats a fee-earner&rsquo;s day &mdash; connected up and automated so a new enquiry gets handled without anyone chasing it.
              </p>
              <a href="/services/workflow-automation" aria-label="See how Workflow Automation works">
                <Button variant="primary" className="w-full">See Automation</Button>
              </a>
            </Card>

            <Card hover>
              <Icon letter="G" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Found in AI Search
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                When a buyer asks ChatGPT or Perplexity for a Reading supplier, are you in the answer? A GEO audit checks your visibility across the AI engines and gives you a clear plan to get cited.
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

      {/* ── 5. AREAS WE COVER ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            Areas We Cover
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            Reading is part of our wider{' '}
            <a href="/locations/berkshire" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Berkshire</a>{' '}
            patch &mdash; head there for every town we cover across the county, from the M4 corridor to the Kennet valley.
          </p>
          <p className="text-lg text-charcoal leading-relaxed">
            Just west along the M4 is{' '}
            <a href="/locations/newbury" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Newbury</a>, where we cover the same four services for office-based and trade firms. Whatever corner of the Thames Valley you&rsquo;re in, the setup is remote-first and the AI answers around the clock.
          </p>
        </div>
      </section>

      {/* ── 6. PROOF ── */}
      <TrustBlock>
        {/* local testimonial slot — add a Reading testimonial here once signed off in writing */}
      </TrustBlock>

      <section className="py-12 md:py-16 border-b-3 border-charcoal">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <p className="text-lg text-charcoal leading-relaxed">
            We&rsquo;re a{' '}
            <a href="/about" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Certified Retell AI Partner</a>{' '}
            with 30+ years of business and systems experience behind us, working from our base in Andover. No call centre, no offshore team &mdash; you deal with the people who build your{' '}
            <a href="/services/ai-voice-assistants" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">voice agents</a>{' '}
            directly.
          </p>
        </div>
      </section>

      {/* ── 7. RETELL INDUSTRY DEMOS ── */}
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
                Do you cover Reading and the rest of the Thames Valley?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes. We work with Reading businesses alongside neighbouring Wokingham, Bracknell and Newbury along the M4. The AI runs in the cloud, so your voice agent and chatbot answer Reading enquiries exactly the same whether your office is on Green Park, Thames Valley Park or anywhere else in town.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do I need to be in Reading for this to work?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Not at all. We&rsquo;re based in Andover and run the whole thing remotely &mdash; setup, testing and support all happen over video call. Your AI doesn&rsquo;t need a desk in the Thames Valley to answer your phone or your website, so most Reading clients are live without us ever stepping into their office.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Does this fit an office-based Reading firm, not just trades?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Very much so. A lot of Reading&rsquo;s business base is technology and professional-services firms around Green Park and Thames Valley Park, where the phones and inboxes are the front door. Voice agents, chatbots and workflow automation are a natural fit for any office where enquiries and admin pile up faster than the team can clear them.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How much does it cost?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                AI voice agents and chatbots start from &pound;57/month. For a Reading firm that wins work on response time, recovering even a handful of missed enquiries a week usually covers the cost several times over. Book a free 30-minute call and we&rsquo;ll give you a straight figure for your setup.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How quickly can a Reading business go live?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Most voice and chat products are live within 24&ndash;48 hours of you forwarding your number or giving us website access. Workflow automation depends on the systems involved, but we scope that on the first call so you know the timeline before anything starts.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA (charcoal) ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Stop Losing Reading Enquiries
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 30-minute call. We know the Thames Valley, we&rsquo;ll give you a straight answer about whether AI automation fits your business, and you&rsquo;ll leave the call knowing exactly what it would cost.
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
            Antek Automation &mdash; Chantry House, 38 Chantry Way, Andover SP10 1LZ
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
