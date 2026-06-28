import { useState, Suspense, lazy } from 'react';
import { Button } from '../../../src/components/Button';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';
import { Container } from '../../../src/components/Container';
import { CalBooking } from '../../../src/components/CalBooking';
import { VoiceDemoButton } from '../../../src/components/VoiceDemoButton';
import { TrustBlock } from '../../../src/components/TrustBlock';
import { RetellDemoCards } from '../../../src/components/RetellDemoCards';
import { QuickRecap } from '../../../src/components/QuickRecap';
import { ResourcesCompliance } from '../../../src/components/ResourcesCompliance';
import { HeadlineBlock } from '../../../src/components/HeadlineBlock';

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
              AI AUTOMATION &bull; BASINGSTOKE
            </p>
            <HeadlineBlock as="h1" className="mb-6">
              Your Basingstoke Website, <span className="text-coral">Open for Business at 2am</span>
            </HeadlineBlock>
            <p className="text-lg md:text-xl text-body leading-relaxed mb-8 max-w-3xl">
              AI that answers your website day and night, captures the lead and handles the admin. Built by <a href="/about" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Andy Norman</a>, 20 minutes up the A303 in Andover.
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
        'AI voice agents, chatbots and workflow automation for Basingstoke businesses',
        'Stop losing jobs to missed calls — your phone answered 24/7, even mid-job',
        'Built by a Hampshire founder in Andover, about 20 minutes up the A303',
        'From £57/month — everything delivered remotely, with face-to-face if you want it — <a href="/pricing" class="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">see full pricing</a>',
        'Voice and chat products typically live within 24–48 hours',
      ]} />

      {/* ── PROBLEM (localised, before any proof) ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            The <span className="text-coral">Missed Call</span> That Costs You the Job
          </HeadlineBlock>
          <p className="text-lg md:text-xl text-body leading-relaxed mb-6 max-w-[65ch]">
            You&rsquo;re on a job in Chineham or out on the new estates at Hatch Warren. The phone rings and you can&rsquo;t answer. By the time you call back, they&rsquo;ve booked someone else.
          </p>
          <p className="text-lg md:text-xl text-body leading-relaxed max-w-[65ch]">
            That&rsquo;s a two grand job gone &mdash; because you were busy doing the work you&rsquo;re actually good at. Now multiply it across a week. Every missed call is a customer who needed you and found someone else instead.
          </p>
        </Container>
      </section>

      {/* ── OFFER (three services framed as outcomes, single primary CTA) ── */}
      <section className="border-y border-hairline py-20 md:py-28 bg-ink">
        <Container>
          <div className="mb-16">
            <HeadlineBlock className="mb-4">
              AI Automation for <span className="text-coral">Basingstoke Businesses</span>
            </HeadlineBlock>
            <p className="text-lg text-body max-w-2xl">
              Three things that stop the leaks &mdash; framed by the outcome, not the tech.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            <Card hover className="bg-charcoal h-full">
              <Icon letter="01" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                Your Phone, Answered 24/7
              </h3>
              <p className="text-body leading-relaxed mb-6">
                An AI voice agent picks up on the first ring &mdash; mid-job, after hours, weekends &mdash; takes the details, books the work and texts you the lead. No voicemail, no lost job.
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
                A chatbot trained on your business answers questions, qualifies the enquiry and books the appointment while every competitor shows a &ldquo;we&rsquo;ll call you back&rdquo; form.
              </p>
              <a href="/services/ai-chatbots" aria-label="See how AI Chatbots work">
                <Button variant="primary" className="w-full">See Chatbots</Button>
              </a>
            </Card>

            <Card hover className="bg-charcoal h-full">
              <Icon letter="03" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                Your Admin, Handled
              </h3>
              <p className="text-body leading-relaxed mb-6">
                Follow-ups, quotes, CRM updates and the repetitive jobs that eat your evenings &mdash; connected up and automated so a new enquiry gets handled without you lifting a finger.
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
        </Container>
      </section>

      {/* ── PROOF (reusable governed TrustBlock + local testimonial slot) ── */}
      <TrustBlock>
        {/* local testimonial slot — add a Basingstoke testimonial here once signed off in writing */}
      </TrustBlock>

      {/* ── RETELL INDUSTRY DEMOS (pop-card orbs) ── */}
      <RetellDemoCards curated />

      {/* ── LOCAL RELEVANCE — "Our Basingstoke patch" (entity layer sits UNDER the hook) ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            Our <span className="text-coral">Basingstoke Patch</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-relaxed mb-6 max-w-[65ch]">
            Basingstoke is the largest town in{' '}
            <a href="https://en.wikipedia.org/wiki/Hampshire" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Hampshire</a>{' '}
            without city status, sitting at the source of the{' '}
            <a href="https://en.wikipedia.org/wiki/River_Loddon" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">River Loddon</a>{' '}
            and served by the{' '}
            <a href="https://en.wikipedia.org/wiki/M3_motorway" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">M3</a>. The business base sits around Basing View, Chineham Business Park and Houndmills, while the trades and service firms work across Chineham, Old Basing, Hatch Warren, Brighton Hill, Lychpit, Popley, Kempshott and Oakridge.
          </p>
          <p className="text-lg text-body leading-relaxed mb-6 max-w-[65ch]">
            It sits about 20 miles north-east of the county town,{' '}
            <a href="/locations/winchester" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Winchester</a>, within the borough of Basingstoke and Deane. We&rsquo;re based 20 minutes away in{' '}
            <a href="/locations/andover" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Andover</a>, up the A303 &mdash; which makes us one of the closest AI automation agencies to Basingstoke, and one of the few that will actually meet you for a coffee.
          </p>
          <p className="text-lg text-body leading-relaxed max-w-[65ch]">
            That said, you don&rsquo;t need us on your doorstep. Everything &mdash; setup, testing, ongoing support &mdash; runs over video call, which is how most of our{' '}
            <a href="/locations/hampshire" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Hampshire</a>{' '}
            clients prefer it. The AI doesn&rsquo;t care about geography. It just answers.
          </p>
        </Container>
      </section>

      <ResourcesCompliance links={[
        { text: 'Basingstoke and Deane Borough Council — business support', url: 'https://www.basingstoke.gov.uk/business', context: 'Local authority business support and economic information' },
        { text: 'ICO data protection guidance', url: 'https://ico.org.uk/for-organisations/guide-to-data-protection/', context: 'UK law governing customer data collected by AI systems' },
      ]} />

      {/* ── SIBLING / GEO LINKS ── */}
      <section className="bg-ink border-y border-hairline py-16 md:py-20">
        <Container>
          <HeadlineBlock className="mb-8">
            Nearby &amp; <span className="text-coral">Across Hampshire</span>
          </HeadlineBlock>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <a href="/locations/winchester" className="block group">
              <Card hover className="bg-charcoal h-full">
                <Icon letter="01" size="md" mono />
                <h3 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2 group-hover:text-coral transition-colors">Winchester</h3>
                <p className="text-body text-sm leading-normal">AI automation for the county town&rsquo;s professional firms and trades.</p>
              </Card>
            </a>
            <a href="/locations/andover" className="block group">
              <Card hover className="bg-charcoal h-full">
                <Icon letter="02" size="md" mono />
                <h3 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2 group-hover:text-coral transition-colors">Andover</h3>
                <p className="text-body text-sm leading-normal">Our HQ, 20 minutes up the A303. Happy to meet for a coffee.</p>
              </Card>
            </a>
            <a href="/locations/southampton" className="block group">
              <Card hover className="bg-charcoal h-full">
                <Icon letter="03" size="md" mono />
                <h3 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2 group-hover:text-coral transition-colors">Southampton</h3>
                <p className="text-body text-sm leading-normal">Port-city automation for 18,000+ businesses down the M3.</p>
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
            Is <span className="text-coral">AI Search</span> Recommending Your Basingstoke Business?
          </HeadlineBlock>
          <p className="text-lg text-body leading-relaxed mb-6 max-w-[65ch]">
            When someone asks ChatGPT for &ldquo;the best plumber in Basingstoke&rdquo; or tells Perplexity to find &ldquo;a builder near Chineham&rdquo;, is your business in the answer? Our <a href="/services/geo-audit" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">GEO Audit</a> checks your visibility across ChatGPT, Perplexity, Google AI Overviews and Claude &mdash; and gives you a clear plan to get cited. From &pound;247.
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
            <details className="border-2 border-hairline bg-ink shadow-brutal-sm group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do you actually cover Basingstoke, or just Andover?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Both. Andover is our base, but we work with Basingstoke businesses every week &mdash; we&rsquo;re only 20 minutes up the A303. The AI runs in the cloud, so your voice agent answers Basingstoke calls exactly the same whether we&rsquo;re next door or up the road.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink shadow-brutal-sm group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do I need to be in Basingstoke for this to work?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Not at all. The whole thing runs remotely &mdash; setup, testing and support all happen over video call. Your AI voice agent doesn&rsquo;t need a desk in Basing View to answer your phone. Most clients are set up without us ever stepping into their office.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink shadow-brutal-sm group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What kind of Basingstoke businesses do you work with?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Trades and service firms across Chineham, Old Basing, Hatch Warren and the rest, plus the office-based businesses around Basing View, Chineham Business Park and Houndmills. If your team answers phones or chases admin every week, it&rsquo;s a fit.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink shadow-brutal-sm group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Can we meet in person?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Yes &mdash; we&rsquo;re 20 minutes away in Andover, just up the A303, so a face-to-face is easy if you&rsquo;d prefer to kick things off over a coffee. Most people are happy on video, but the option&rsquo;s there.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink shadow-brutal-sm group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How much does it cost and how quickly can I start?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                AI voice agents and chatbots start from £57/month, and most are live within 24&ndash;48 hours of you forwarding your number or giving us website access. For a Basingstoke trade missing even a few calls a week, it usually pays for itself almost immediately.
              </div>
            </details>
          </div>
        </Container>
      </section>

      {/* ── FINAL CTA (booking + click-to-call) ── */}
      <section className="bg-charcoal border-t border-coral py-24 md:py-32">
        <Container>
          <HeadlineBlock className="mb-6">
            Stop Losing <span className="text-coral">Basingstoke Jobs</span>
          </HeadlineBlock>
          <p className="text-lg md:text-xl text-body leading-relaxed mb-10 max-w-2xl">
            Book a free 30-minute call with Andy. We&rsquo;re just up the A303, we know Hampshire, and we&rsquo;ll give you a straight answer about whether AI automation is right for your business.
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
      <section className="bg-ink border-t border-hairline py-20 md:py-28">
        <Container>
          <div className="mb-10">
            <HeadlineBlock className="mb-4">
              Pick a <span className="text-coral">Time That Works for You</span>
            </HeadlineBlock>
            <p className="text-body max-w-2xl">
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
