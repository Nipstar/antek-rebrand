import { useState, Suspense, lazy } from 'react';
import { Button } from '../../../src/components/Button';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';
import { Container } from '../../../src/components/Container';
import { CalBooking } from '../../../src/components/CalBooking';
import { VoiceDemoButton } from '../../../src/components/VoiceDemoButton';
import { TrustBlock } from '../../../src/components/TrustBlock';
import { RetellDemoCards } from '../../../src/components/RetellDemoCards';
import { HeadlineBlock } from '../../../src/components/HeadlineBlock';

const VoiceChat = lazy(() => import('../../../src/components/VoiceChat').then(m => ({ default: m.VoiceChat })));

export default function Page() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);

  return (
    <div>

      {/* ── 1. HERO (county hub: benefit H1 + Thames Valley / M4 hook, two CTAs) ── */}
      <section className="bg-ink border-b border-hairline py-20 md:py-28">
        <Container>
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-muted mb-4 font-sans font-bold">
              AI AUTOMATION &bull; BERKSHIRE
            </p>
            <HeadlineBlock as="h1" className="mb-6">
              Win Back the Hours Your <span className="text-coral">Berkshire Office</span> Loses to Admin
            </HeadlineBlock>
            <p className="text-lg md:text-xl text-body leading-relaxed mb-8 max-w-[65ch]">
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
        </Container>
      </section>

      {/* ── 2. DIRECT-ANSWER INTRO (snippet-friendly, names Berkshire + a town) ── */}
      <section className="py-16 md:py-20 border-b border-hairline">
        <Container>
          <p className="text-xl md:text-2xl text-body leading-relaxed font-bold max-w-[65ch]">
            Yes &mdash; Antek serves Berkshire. We design and run AI voice assistants, chatbots, workflow automation and Generative Engine Optimisation for office-based firms across the county, from Reading and Newbury to Bracknell, Wokingham and Maidenhead. Everything is delivered remotely from our Andover base, with face-to-face when you want it.
          </p>
        </Container>
      </section>

      {/* ── 3. LOCAL CONTEXT (entity-dense differentiator, office-based economy) ── */}
      <section>
        <Container className="py-20 md:py-28">
          <HeadlineBlock className="mb-8">
            Built for the <span className="text-coral">Thames Valley</span>
          </HeadlineBlock>
          <div className="max-w-[65ch]">
            <p className="text-lg text-body leading-relaxed mb-6">
              <a href="https://en.wikipedia.org/wiki/Berkshire" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Berkshire</a>{' '}
              is one of the most concentrated business economies in the country. The{' '}
              <a href="https://en.wikipedia.org/wiki/Thames_Valley" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Thames Valley</a>{' '}
              runs the length of the county along the M4 corridor and the A34, with the{' '}
              <a href="https://en.wikipedia.org/wiki/River_Thames" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">River Thames</a>{' '}
              tracing the northern edge past Maidenhead, Windsor and Slough. That corridor is the reason so many head offices sit here.
            </p>
            <p className="text-lg text-body leading-relaxed mb-6">
              We work across Reading, Newbury, Bracknell, Wokingham, Maidenhead, Windsor, Slough and Thatcham &mdash; and around the major employment sites such as Green Park and Thames Valley Park in Reading, where a lot of the county&rsquo;s desk-based work is done.
            </p>
            <p className="text-lg text-body leading-relaxed">
              This isn&rsquo;t a trades patch. Berkshire&rsquo;s economy leans on technology and professional services, telecoms, pharmaceuticals and finance &mdash; office teams handling inbound enquiries, scheduling and back-office admin at volume. That&rsquo;s exactly the work our <a href="/services/workflow-automation" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">workflow automation</a> and <a href="/services/ai-chatbots" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">AI chatbots</a> are built to absorb.
            </p>
          </div>
        </Container>
      </section>

      {/* ── 4. SERVICES IN BERKSHIRE (four canonical services, office-framed) ── */}
      <section className="border-y border-hairline py-20 md:py-28 bg-ink">
        <Container>
          <div className="mb-16">
            <HeadlineBlock className="mb-4">
              AI Automation for <span className="text-coral">Berkshire Firms</span>
            </HeadlineBlock>
            <p className="text-lg text-body max-w-[60ch]">
              Four services, framed for office-based Thames Valley teams &mdash; not generic tooling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Card hover className="bg-charcoal h-full">
              <Icon letter="01" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                AI Chatbots
              </h3>
              <p className="text-body leading-relaxed mb-6">
                A chatbot trained on your business answers product and service questions, qualifies the enquiry and books the meeting &mdash; so a prospect landing on your site at 9pm gets a useful reply instead of a contact form.
              </p>
              <a href="/services/ai-chatbots" aria-label="See how AI Chatbots work">
                <Button variant="primary" className="w-full">See Chatbots</Button>
              </a>
            </Card>

            <Card hover className="bg-charcoal h-full">
              <Icon letter="02" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                AI Voice Assistants
              </h3>
              <p className="text-body leading-relaxed mb-6">
                An AI voice agent answers your lines on the first ring, takes the details, routes the call and books the appointment &mdash; covering reception overflow and out-of-hours so no Thames Valley enquiry hits a voicemail.
              </p>
              <a href="/services/ai-voice-assistants" aria-label="See how AI Voice Assistants work">
                <Button variant="primary" className="w-full">See Voice Assistants</Button>
              </a>
            </Card>

            <Card hover className="bg-charcoal h-full">
              <Icon letter="03" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                Workflow Automation
              </h3>
              <p className="text-body leading-relaxed mb-6">
                Quotes, follow-ups, CRM updates and the repetitive back-office tasks that eat an office team&rsquo;s week &mdash; connected up and automated so a new enquiry is handled end to end without manual re-keying.
              </p>
              <a href="/services/workflow-automation" aria-label="See how Workflow Automation works">
                <Button variant="primary" className="w-full">See Automation</Button>
              </a>
            </Card>

            <Card hover className="bg-charcoal h-full">
              <Icon letter="04" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                GEO &mdash; Generative Engine Optimisation
              </h3>
              <p className="text-body leading-relaxed mb-6">
                When buyers ask ChatGPT, Perplexity or Google AI Overviews to shortlist a supplier, our GEO audit checks whether your Berkshire firm is being cited &mdash; and gives you a plan to get into those answers.
              </p>
              <a href="/services/geo-audit" aria-label="See how Generative Engine Optimisation works">
                <Button variant="primary" className="w-full">See GEO Audit</Button>
              </a>
            </Card>
          </div>

          <div className="mt-14">
            <a href="/contact">
              <Button variant="primary">Book a free 30-min call</Button>
            </a>
          </div>
        </Container>
      </section>

      {/* ── 5. TOWNS WE COVER (hub links DOWN to child town pages) ── */}
      <section>
        <Container className="py-20 md:py-28">
          <div className="mb-12">
            <HeadlineBlock className="mb-4">
              Towns We Cover in <span className="text-coral">Berkshire</span>
            </HeadlineBlock>
            <p className="text-lg text-body max-w-[60ch]">
              Dedicated pages for our main Berkshire towns &mdash; more added on demand as we take on work across the county.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-4xl">
            <a href="/locations/reading" className="block group">
              <Card hover className="h-full">
                <Icon letter="01" size="md" mono />
                <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-4 mb-2 group-hover:text-coral transition-colors">Reading</h3>
                <p className="text-body leading-normal">AI automation for the county&rsquo;s commercial centre &mdash; Green Park, Thames Valley Park and the M4 office firms.</p>
              </Card>
            </a>
            <a href="/locations/newbury" className="block group">
              <Card hover className="h-full">
                <Icon letter="02" size="md" mono />
                <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-4 mb-2 group-hover:text-coral transition-colors">Newbury</h3>
                <p className="text-body leading-normal">AI automation for West Berkshire businesses, on the A34 where the M4 meets the corridor south.</p>
              </Card>
            </a>
          </div>
        </Container>
      </section>

      {/* ── 6. PROOF (governed TrustBlock + credibility line) ── */}
      <TrustBlock>
        {/* local testimonial slot — add a Berkshire testimonial here once signed off in writing */}
      </TrustBlock>

      <section className="py-12 md:py-16 border-b border-hairline">
        <Container>
          <p className="text-lg md:text-xl text-body leading-relaxed max-w-[65ch]">
            We&rsquo;re a <span className="font-bold">Certified Retell AI Partner</span> with <span className="font-bold">30+ years in field-service technology</span>, working with Berkshire firms from our base in Andover &mdash; close enough to meet, set up to deliver everything remotely.
          </p>
        </Container>
      </section>

      {/* ── 7. RETELL INDUSTRY DEMOS (pop-card orbs) ── */}
      <RetellDemoCards curated />

      {/* ── 8. FAQ (locally flavoured) ── */}
      <section>
        <Container className="py-20 md:py-28">
          <HeadlineBlock className="mb-12">
            Frequently Asked <span className="text-coral">Questions</span>
          </HeadlineBlock>
          <div className="space-y-4 max-w-4xl">
            <details className="border-2 border-hairline bg-ink shadow-brutal-sm group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do you actually cover Berkshire from Andover?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Yes. Andover is our base, but we work with Berkshire businesses across Reading, Newbury, Bracknell, Wokingham and the wider Thames Valley. The AI runs in the cloud, so your voice agent and chatbot answer Berkshire enquiries exactly the same whether your office is in Reading or Maidenhead.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink shadow-brutal-sm group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do we work remotely or do you come to us?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Both options are open. Most of our Berkshire work is delivered remotely &mdash; setup, testing and support all happen over video call, which suits busy Thames Valley teams. If you&rsquo;d rather kick off in person, we can travel up the M4 to meet.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink shadow-brutal-sm group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Is this a fit for office-based firms, not just trades?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                It&rsquo;s built for them. Berkshire&rsquo;s economy is weighted towards technology and professional services, telecoms, pharma and finance &mdash; office teams handling inbound enquiries, scheduling and back-office admin. A professional-services firm around Green Park, for example, can put a chatbot on its site to qualify enquiries and a workflow to route them into the CRM without manual re-keying.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink shadow-brutal-sm group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Which Berkshire towns do you have pages for?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                We have dedicated pages for Reading and Newbury, our two main Berkshire towns, with more added on demand as we take on work across Bracknell, Wokingham, Maidenhead, Windsor, Slough and Thatcham. The county hub covers all of Berkshire in the meantime.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink shadow-brutal-sm group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How much does it cost and how quickly can we start?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                AI chatbots start from £57/month, AI voice agents from £97/month, and most are live within 24&ndash;48 hours of you forwarding your number or giving us website access. For a Berkshire firm fielding a steady stream of enquiries across the M4 corridor, it usually pays for itself quickly.
              </div>
            </details>
          </div>
        </Container>
      </section>

      {/* ── FINAL CTA (charcoal, Book + Call + NAP) ── */}
      <section className="bg-charcoal border-t-2 border-coral py-24 md:py-32">
        <Container>
          <div className="max-w-4xl">
            <HeadlineBlock className="mb-6">
              Put AI to Work Across <span className="text-coral">Berkshire</span>
            </HeadlineBlock>
            <p className="text-lg md:text-xl text-body leading-relaxed mb-10 max-w-[65ch]">
              Book a free 30-minute call. We&rsquo;ll look at where your Thames Valley team is losing time to enquiries and admin, and give you a straight answer on whether AI automation is the right fix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href="/contact">
                <Button variant="primary">Book a free 30-min call</Button>
              </a>
              <a href="tel:03330389960">
                <Button variant="secondary">Call 0333 038 9960</Button>
              </a>
              <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
            </div>
            <p className="text-muted text-sm mt-10">
              Chantry House, 38 Chantry Way, Andover SP10 1LZ
            </p>
          </div>
        </Container>
      </section>

      {/* ── BOOK A CALL (Cal.com) ── */}
      <section className="border-t border-hairline py-20 md:py-28">
        <Container>
          <div className="mb-10">
            <HeadlineBlock className="mb-4">
              Pick a Time That <span className="text-coral">Works for You</span>
            </HeadlineBlock>
            <p className="text-body max-w-[60ch]">
              Book a free 30-minute call below &mdash; or use the contact form if you prefer.
            </p>
          </div>
          <CalBooking />
        </Container>
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
