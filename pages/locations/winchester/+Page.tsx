import { useState, Suspense, lazy } from 'react';
import { Button } from '../../../src/components/Button';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';
import { Container } from '../../../src/components/Container';
import { HeadlineBlock } from '../../../src/components/HeadlineBlock';
import { CalBooking } from '../../../src/components/CalBooking';
import { VoiceDemoButton } from '../../../src/components/VoiceDemoButton';
import { TrustBlock } from '../../../src/components/TrustBlock';
import { RetellDemoCards } from '../../../src/components/RetellDemoCards';
import { QuickRecap } from '../../../src/components/QuickRecap';
import { ResourcesCompliance } from '../../../src/components/ResourcesCompliance';

const VoiceChat = lazy(() => import('../../../src/components/VoiceChat').then(m => ({ default: m.VoiceChat })));

export default function Page() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);

  return (
    <div>

      {/* ── HERO (conversion-first: benefit H1 + town, subhead, primary CTA + click-to-call) ── */}
      <section className="bg-ink border-b border-hairline">
        <Container className="py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-muted mb-4 font-sans font-bold">
              AI AUTOMATION &bull; WINCHESTER
            </p>
            <HeadlineBlock as="h1" className="mb-6">
              Stop Losing <span className="text-coral">Winchester Clients</span> to Voicemail
            </HeadlineBlock>
            <p className="text-lg md:text-xl text-body leading-relaxed mb-8 max-w-3xl">
              AI that answers after hours, screens enquiries and books consultations. Built by <a href="/about" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Andy Norman</a>, 30 minutes away in Andover.
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

      <QuickRecap items={[
        'AI voice agents, chatbots and workflow automation for Winchester businesses',
        'For professional firms, practices and hospitality losing after-hours enquiries',
        'Answers and screens enquiries 24/7, then books the consultation',
        'Built by a Hampshire founder in Andover, about 30 minutes away',
        'From £57/month, live within 24–48 hours — <a href="/pricing" class="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">see full pricing</a>',
      ]} />

      {/* ── PROBLEM (localised, before any proof) ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            In a City That Runs on <span className="text-coral">Professional Services</span>, a Missed Call Is <span className="text-coral">a Lost Client</span>
          </HeadlineBlock>
          <p className="text-lg md:text-xl text-body leading-relaxed mb-6 max-w-[65ch]">
            A solicitors&rsquo; practice loses an after-hours enquiry before anyone calls back. An accountant is buried at year-end. A restaurant is trying to take bookings between services.
          </p>
          <p className="text-lg md:text-xl text-body leading-relaxed max-w-[65ch]">
            Winchester clients expect to be looked after &mdash; and the firm that picks up first usually wins the instruction. Every call that hits voicemail is a client quietly deciding to try the next name on the list.
          </p>
        </Container>
      </section>

      {/* ── OFFER (three services framed as outcomes, single primary CTA) ── */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <div className="mb-16">
            <HeadlineBlock className="mb-4">
              AI Automation for <span className="text-coral">Winchester Businesses</span>
            </HeadlineBlock>
            <p className="text-lg text-body max-w-[60ch]">
              Three things that keep enquiries from slipping away &mdash; built for professional firms and hospitality alike.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            <Card hover className="bg-charcoal h-full">
              <Icon letter="01" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                Enquiries Answered After Hours
              </h3>
              <p className="text-body leading-relaxed mb-6">
                An AI voice agent answers when your team can&rsquo;t &mdash; evenings, weekends, mid-meeting &mdash; screens the enquiry, captures the details and books the consultation. No new client lost to voicemail.
              </p>
              <a href="/services/ai-voice-assistants" aria-label="See how AI Voice Agents work">
                <Button variant="primary" className="w-full">See Voice Agents</Button>
              </a>
            </Card>

            <Card hover className="bg-charcoal h-full">
              <Icon letter="02" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                Your Website, Answered at 2am
              </h3>
              <p className="text-body leading-relaxed mb-6">
                A chatbot trained on your practice answers questions, qualifies the enquiry and books the appointment &mdash; so the client comparing firms at midnight books with you, not the one with a callback form.
              </p>
              <a href="/services/ai-chatbots" aria-label="See how AI Chatbots work">
                <Button variant="primary" className="w-full">See Chatbots</Button>
              </a>
            </Card>

            <Card hover className="bg-charcoal h-full">
              <Icon letter="03" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                Follow-Ups &amp; Admin, Automated
              </h3>
              <p className="text-body leading-relaxed mb-6">
                Onboarding, reminders, CRM updates and the year-end admin that eats your evenings &mdash; connected up and automated so every enquiry is handled without anyone chasing it.
              </p>
              <a href="/services/workflow-automation" aria-label="See how Workflow Automation works">
                <Button variant="primary" className="w-full">See Automation</Button>
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

      {/* ── PROOF (reusable governed TrustBlock + local testimonial slot) ── */}
      <TrustBlock>
        {/* local testimonial slot — add a Winchester testimonial here once signed off in writing */}
      </TrustBlock>

      {/* ── RETELL INDUSTRY DEMOS (pop-card orbs) ── */}
      <RetellDemoCards curated />

      {/* ── LOCAL RELEVANCE — "Our Winchester patch" (entity layer sits UNDER the hook) ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            Our <span className="text-coral">Winchester Patch</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-relaxed mb-6 max-w-[65ch]">
            Winchester is the county town of Hampshire and a cathedral city on the River Itchen, at the western end of the{' '}
            <a href="https://en.wikipedia.org/wiki/South_Downs" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">South Downs National Park</a>. The ancient capital of Wessex, it&rsquo;s home to{' '}
            <a href="https://en.wikipedia.org/wiki/Winchester_Cathedral" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Winchester Cathedral</a>, the University of Winchester and Winchester College.
          </p>
          <p className="text-lg text-body leading-relaxed mb-6 max-w-[65ch]">
            Professional firms cluster around the centre and Winnall, with trades and service businesses working across Fulflood, Stanmore, Weeke, St Cross, Highcliffe, Badger Farm, Oliver&rsquo;s Battery and Hyde. Southampton is about 14 miles south, and{' '}
            <a href="/locations/basingstoke" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Basingstoke</a>{' '}
            about 20 miles to the north-east.
          </p>
          <p className="text-lg text-body leading-relaxed max-w-[65ch]">
            We&rsquo;re based 30 minutes away in{' '}
            <a href="/locations/andover" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Andover</a>, which makes us one of the closest AI automation agencies to Winchester. Everything &mdash; setup, testing, ongoing support &mdash; runs over video call, the way most of our{' '}
            <a href="/locations/hampshire" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Hampshire</a>{' '}
            clients prefer it, with a face-to-face whenever it genuinely helps.
          </p>
        </Container>
      </section>

      <ResourcesCompliance links={[
        { text: 'Winchester City Council — business and licensing', url: 'https://www.winchester.gov.uk/business', context: 'Local authority business support and licensing information' },
        { text: 'ICO data protection guidance', url: 'https://ico.org.uk/for-organisations/guide-to-data-protection/', context: 'UK law governing customer data collected by AI systems' },
      ]} />

      {/* ── SIBLING / GEO LINKS ── */}
      <section className="bg-ink border-y border-hairline py-16 md:py-20">
        <Container>
          <HeadlineBlock className="mb-8">
            Nearby &amp; <span className="text-coral">Across Hampshire</span>
          </HeadlineBlock>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <a href="/locations/basingstoke" className="block group">
              <Card hover className="bg-charcoal h-full">
                <Icon letter="01" size="md" mono />
                <h3 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2 group-hover:text-coral transition-colors">Basingstoke</h3>
                <p className="text-body text-sm leading-normal">AI automation for Hampshire&rsquo;s largest town, 20 miles north-east.</p>
              </Card>
            </a>
            <a href="/locations/andover" className="block group">
              <Card hover className="bg-charcoal h-full">
                <Icon letter="02" size="md" mono />
                <h3 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2 group-hover:text-coral transition-colors">Andover</h3>
                <p className="text-body text-sm leading-normal">Our HQ, 30 minutes away. Happy to meet face-to-face.</p>
              </Card>
            </a>
            <a href="/locations/southampton" className="block group">
              <Card hover className="bg-charcoal h-full">
                <Icon letter="03" size="md" mono />
                <h3 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2 group-hover:text-coral transition-colors">Southampton</h3>
                <p className="text-body text-sm leading-normal">Port-city automation, about 14 miles south.</p>
              </Card>
            </a>
            <a href="/locations/hampshire" className="block group">
              <Card hover className="bg-charcoal h-full">
                <Icon letter="04" size="md" mono />
                <h3 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2 group-hover:text-coral transition-colors">Hampshire</h3>
                <p className="text-body text-sm leading-normal">The county hub — every town we cover, in one place.</p>
              </Card>
            </a>
          </div>
        </Container>
      </section>

      {/* ── GEO CROSS-SELL (we also offer GEO — AI-search visibility) ── */}
      <section className="bg-ink border-y border-hairline py-16 md:py-20">
        <Container>
          <HeadlineBlock className="mb-6">
            Is AI Search Recommending Your <span className="text-coral">Winchester Firm?</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-relaxed mb-6 max-w-[65ch]">
            When someone asks ChatGPT for &ldquo;a good solicitor in Winchester&rdquo; or tells Perplexity to find &ldquo;an accountant near Winchester&rdquo;, is your firm in the answer? Our <a href="/services/geo-audit" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">GEO Audit</a> checks your visibility across ChatGPT, Perplexity, Google AI Overviews and Claude &mdash; and gives you a clear plan to get cited. From &pound;247.
          </p>
          <a href="/services/geo-audit">
            <Button variant="primary">Check Your AI Visibility &rarr;</Button>
          </a>
        </Container>
      </section>

      {/* ── FAQ (conversion + local) ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-12">
            Frequently Asked <span className="text-coral">Questions</span>
          </HeadlineBlock>
          <div className="space-y-4 max-w-[65ch]">
            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do you work with Winchester law firms and accountants?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Yes &mdash; professional firms are a natural fit. An AI voice agent screens after-hours enquiries, captures the details and books the consultation, so a new client never hits voicemail. The same setup handles the year-end and onboarding admin that buries accountants.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do I need to be in Winchester for this to work?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                No. Everything runs remotely &mdash; setup, testing and support all happen over video call. Your AI voice agent answers Winchester enquiries from the cloud, whether your office is on the High Street, in Winnall, or anywhere else.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Can you handle hospitality booking calls?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Yes. A restaurant trying to take bookings between services is exactly the pattern voice agents are built for &mdash; the AI takes the booking, answers the common questions and handles the peaks so your staff can focus on the room.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Can we meet in person?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                We&rsquo;re 30 minutes away in Andover, so a face-to-face is straightforward if you&rsquo;d prefer to start that way. Most Winchester clients are happy on video call, but the option&rsquo;s there whenever it genuinely helps.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How much does it cost and how quickly can I start?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                AI voice agents and chatbots start from £57/month, and most are live within 24&ndash;48 hours of you forwarding your number or giving us website access. For a Winchester practice winning even one extra instruction a month, the return is usually clear quickly.
              </div>
            </details>
          </div>
        </Container>
      </section>

      {/* ── FINAL CTA (booking + click-to-call) ── */}
      <section className="bg-charcoal border-t border-coral py-24 md:py-32">
        <Container>
          <HeadlineBlock className="mb-6">
            Don&rsquo;t Let the Next Client <span className="text-coral">Hit Voicemail</span>
          </HeadlineBlock>
          <p className="text-lg md:text-xl text-body leading-relaxed mb-10 max-w-[60ch]">
            Book a free 30-minute call with Andy. We know Hampshire, we&rsquo;re half an hour away, and we&rsquo;ll give you a straight answer about whether AI automation is right for your firm.
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
