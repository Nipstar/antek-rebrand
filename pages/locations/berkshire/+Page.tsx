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

      {/* ── 1. HERO (county hub: benefit H1 + Thames Valley / M4 hook, two CTAs) ── */}
      <section className="bg-warm-beige border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              AI AUTOMATION &bull; BERKSHIRE
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for Berkshire Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              From the M4 corridor through the Thames Valley, we build AI voice agents, chatbots and workflow automation that answer enquiries, qualify leads and clear the admin &mdash; so your Berkshire team spends its hours on the work that pays.
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

      {/* ── 2. DIRECT-ANSWER INTRO (snippet-friendly, names Berkshire + a town) ── */}
      <section className="py-16 md:py-20 border-b-3 border-charcoal">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <p className="text-xl md:text-2xl text-charcoal leading-relaxed font-bold">
            Yes &mdash; Antek serves Berkshire. We design and run AI voice assistants, chatbots, workflow automation and Generative Engine Optimisation for office-based firms across the county, from Reading and Newbury to Bracknell, Wokingham and Maidenhead. Everything is delivered remotely from our Andover base, with face-to-face when you want it.
          </p>
        </div>
      </section>

      {/* ── 3. LOCAL CONTEXT (entity-dense differentiator, office-based economy) ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            Built for the Thames Valley
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            <a href="https://en.wikipedia.org/wiki/Berkshire" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Berkshire</a>{' '}
            is one of the most concentrated business economies in the country. The{' '}
            <a href="https://en.wikipedia.org/wiki/Thames_Valley" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Thames Valley</a>{' '}
            runs the length of the county along the M4 corridor and the A34, with the{' '}
            <a href="https://en.wikipedia.org/wiki/River_Thames" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">River Thames</a>{' '}
            tracing the northern edge past Maidenhead, Windsor and Slough. That corridor is the reason so many head offices sit here.
          </p>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            We work across Reading, Newbury, Bracknell, Wokingham, Maidenhead, Windsor, Slough and Thatcham &mdash; and around the major employment sites such as Green Park and Thames Valley Park in Reading, where a lot of the county&rsquo;s desk-based work is done.
          </p>
          <p className="text-lg text-charcoal leading-relaxed">
            This isn&rsquo;t a trades patch. Berkshire&rsquo;s economy leans on technology and professional services, telecoms, pharmaceuticals and finance &mdash; office teams handling inbound enquiries, scheduling and back-office admin at volume. That&rsquo;s exactly the work our <a href="/services/workflow-automation" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">workflow automation</a> and <a href="/services/ai-chatbots" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">AI chatbots</a> are built to absorb.
          </p>
        </div>
      </section>

      {/* ── 4. SERVICES IN BERKSHIRE (four canonical services, office-framed) ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              AI Automation for Berkshire Firms
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Four services, framed for office-based Thames Valley teams &mdash; not generic tooling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card hover>
              <Icon letter="C" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                AI Chatbots
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                A chatbot trained on your business answers product and service questions, qualifies the enquiry and books the meeting &mdash; so a prospect landing on your site at 9pm gets a useful reply instead of a contact form.
              </p>
              <a href="/services/ai-chatbots" aria-label="See how AI Chatbots work">
                <Button variant="primary" className="w-full">See Chatbots</Button>
              </a>
            </Card>

            <Card hover>
              <Icon letter="V" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                AI Voice Assistants
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                An AI voice agent answers your lines on the first ring, takes the details, routes the call and books the appointment &mdash; covering reception overflow and out-of-hours so no Thames Valley enquiry hits a voicemail.
              </p>
              <a href="/services/ai-voice-assistants" aria-label="See how AI Voice Assistants work">
                <Button variant="primary" className="w-full">See Voice Assistants</Button>
              </a>
            </Card>

            <Card hover>
              <Icon letter="A" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Workflow Automation
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                Quotes, follow-ups, CRM updates and the repetitive back-office tasks that eat an office team&rsquo;s week &mdash; connected up and automated so a new enquiry is handled end to end without manual re-keying.
              </p>
              <a href="/services/workflow-automation" aria-label="See how Workflow Automation works">
                <Button variant="primary" className="w-full">See Automation</Button>
              </a>
            </Card>

            <Card hover>
              <Icon letter="G" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                GEO &mdash; Generative Engine Optimisation
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                When buyers ask ChatGPT, Perplexity or Google AI Overviews to shortlist a supplier, our GEO audit checks whether your Berkshire firm is being cited &mdash; and gives you a plan to get into those answers.
              </p>
              <a href="/services/geo-audit" aria-label="See how Generative Engine Optimisation works">
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

      {/* ── 5. TOWNS WE COVER (hub links DOWN to child town pages) ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              Towns We Cover in Berkshire
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Dedicated pages for our main Berkshire towns &mdash; more added on demand as we take on work across the county.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a href="/locations/reading" className="block group">
              <Card hover>
                <Icon letter="R" size="md" />
                <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-2 group-hover:text-terracotta transition-colors">Reading</h3>
                <p className="text-charcoal leading-normal">AI automation for the county&rsquo;s commercial centre &mdash; Green Park, Thames Valley Park and the M4 office firms.</p>
              </Card>
            </a>
            <a href="/locations/newbury" className="block group">
              <Card hover>
                <Icon letter="N" size="md" />
                <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-2 group-hover:text-terracotta transition-colors">Newbury</h3>
                <p className="text-charcoal leading-normal">AI automation for West Berkshire businesses, on the A34 where the M4 meets the corridor south.</p>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. PROOF (governed TrustBlock + credibility line) ── */}
      <TrustBlock>
        {/* local testimonial slot — add a Berkshire testimonial here once signed off in writing */}
      </TrustBlock>

      <section className="py-12 md:py-16 border-b-3 border-charcoal">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-lg md:text-xl text-charcoal leading-relaxed">
            We&rsquo;re a <span className="font-bold">Certified Retell AI Partner</span> with <span className="font-bold">30+ years in field-service technology</span>, working with Berkshire firms from our base in Andover &mdash; close enough to meet, set up to deliver everything remotely.
          </p>
        </div>
      </section>

      {/* ── 7. RETELL INDUSTRY DEMOS (pop-card orbs) ── */}
      <RetellDemoCards curated />

      {/* ── 8. FAQ (locally flavoured) ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do you actually cover Berkshire from Andover?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes. Andover is our base, but we work with Berkshire businesses across Reading, Newbury, Bracknell, Wokingham and the wider Thames Valley. The AI runs in the cloud, so your voice agent and chatbot answer Berkshire enquiries exactly the same whether your office is in Reading or Maidenhead.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do we work remotely or do you come to us?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Both options are open. Most of our Berkshire work is delivered remotely &mdash; setup, testing and support all happen over video call, which suits busy Thames Valley teams. If you&rsquo;d rather kick off in person, we can travel up the M4 to meet.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Is this a fit for office-based firms, not just trades?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                It&rsquo;s built for them. Berkshire&rsquo;s economy is weighted towards technology and professional services, telecoms, pharma and finance &mdash; office teams handling inbound enquiries, scheduling and back-office admin. A professional-services firm around Green Park, for example, can put a chatbot on its site to qualify enquiries and a workflow to route them into the CRM without manual re-keying.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Which Berkshire towns do you have pages for?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                We have dedicated pages for Reading and Newbury, our two main Berkshire towns, with more added on demand as we take on work across Bracknell, Wokingham, Maidenhead, Windsor, Slough and Thatcham. The county hub covers all of Berkshire in the meantime.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How much does it cost and how quickly can we start?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                AI voice agents and chatbots start from £57/month, and most are live within 24&ndash;48 hours of you forwarding your number or giving us website access. For a Berkshire firm fielding a steady stream of enquiries across the M4 corridor, it usually pays for itself quickly.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA (charcoal, Book + Call + NAP) ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Put AI to Work Across Berkshire
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 30-minute call. We&rsquo;ll look at where your Thames Valley team is losing time to enquiries and admin, and give you a straight answer on whether AI automation is the right fix.
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
          <p className="text-off-white/70 text-sm mt-10">
            Chantry House, 38 Chantry Way, Andover SP10 1LZ
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
