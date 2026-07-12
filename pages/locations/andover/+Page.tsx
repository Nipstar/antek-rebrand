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

      {/* CANNIBALISATION RESOLUTION: aiautomationandover.co.uk (EMD) also targets "AI automation Andover". Chosen: differentiate intent — this is the brand/HQ hub page (founder-led, in-person, full service). The EMD should 301-redirect or rel=canonical to this URL; that change must be made on the external domain and cannot be done from this repo. */}

      {/* ── HERO (conversion-first: benefit H1 + town, subhead, primary CTA + click-to-call) ── */}
      <section className="bg-ink border-b border-hairline">
        <Container className="py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-coral mb-4 font-sans font-bold">
              AI AUTOMATION &bull; ANDOVER
            </p>
            <HeadlineBlock as="h1" className="mb-6">
              Book More <span className="text-coral">Andover Jobs</span> While You&rsquo;re on the Tools
            </HeadlineBlock>
            <p className="text-lg md:text-xl text-body leading-relaxed mb-8 max-w-[65ch]">
              AI that answers the phone while you&rsquo;re on the tools, books the job and handles the admin. Built and run from our Andover HQ by <a href="/about" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Andy Norman</a>, at Chantry House in the middle of town.
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
        'AI voice agents, chatbots and workflow automation for Andover businesses',
        'Stop losing jobs to missed calls — your phone answered 24/7, even out on a job in Weyhill or Thruxton',
        'Founder-led from our Andover HQ at Chantry House, 38 Chantry Way — meet us in person if you want',
        'Chatbots from £57/month, voice agents from £97/month — everything delivered remotely, with face-to-face if you want it — <a href="/pricing" class="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">see full pricing</a>',
        'Voice and chat products typically live within 24–48 hours',
      ]} />

      {/* ── PROBLEM (localised, before any proof) ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            The <span className="text-coral">Missed Call</span> That Costs You the Job
          </HeadlineBlock>
          <div className="max-w-[65ch]">
          <p className="text-lg md:text-xl text-body leading-relaxed mb-6">
            You&rsquo;re on a job out at Weyhill or Thruxton, where the mobile signal drops, or up to your elbows on a new build in Augusta Park. The phone rings and you can&rsquo;t answer. By the time you call back, they&rsquo;ve booked someone else.
          </p>
          <p className="text-lg md:text-xl text-body leading-relaxed">
            That&rsquo;s a two grand job gone &mdash; because you were busy doing the work you&rsquo;re actually good at. Now multiply it across a week. Every missed call is an Andover customer who needed you and found someone else instead.
          </p>
          </div>
        </Container>
      </section>

      {/* ── OFFER (three services framed as outcomes, single primary CTA) ── */}
      <section className="border-y border-hairline py-20 md:py-28 bg-ink">
        <Container>
          <div className="mb-16">
            <HeadlineBlock className="mb-4">
              AI Automation for <span className="text-coral">Andover Businesses</span>
            </HeadlineBlock>
            <p className="text-lg text-body max-w-[60ch]">
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
                Augusta Park and Picket Piece have added thousands of new Andover homes &mdash; and every homeowner needs a plumber, electrician or builder. When they call and you&rsquo;re out in Weyhill or Thruxton, an AI voice agent picks up on the first ring, books the work and texts you the lead. No voicemail, no lost job.
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
                New residents at East Anton and Picket Twenty don&rsquo;t have a regular tradesperson yet &mdash; they&rsquo;re searching at 10pm after the kids are down. A chatbot trained on your business answers their questions and books the appointment while every competitor shows a &ldquo;we&rsquo;ll call you back&rdquo; form.
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
                Sole traders and small teams across Andover &mdash; quoting, invoicing, chasing, booking and the repetitive jobs that eat your evenings &mdash; connected up and automated so a new enquiry gets handled without you lifting a finger.
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
        {/* local testimonial slot — add an Andover testimonial here once signed off in writing */}
      </TrustBlock>

      {/* ── RETELL INDUSTRY DEMOS (pop-card orbs) ── */}
      <RetellDemoCards curated />

      {/* ── LOCAL RELEVANCE — "Our Andover patch" (entity layer sits UNDER the hook) ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            Our <span className="text-coral">Andover Patch</span>
          </HeadlineBlock>
          <div className="max-w-[65ch]">
          <p className="text-lg text-body leading-relaxed mb-6">
            Andover sits in the{' '}
            <a href="https://en.wikipedia.org/wiki/Test_Valley" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Test Valley</a>{' '}
            district of{' '}
            <a href="https://en.wikipedia.org/wiki/Hampshire" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Hampshire</a>, on the{' '}
            <a href="https://en.wikipedia.org/wiki/River_Anton" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">River Anton</a>{' '}
            and right on the A303. The town has grown fast: Augusta Park, Picket Twenty, East Anton and Picket Piece have added thousands of new homes, while the trades and service firms work across the centre, the industrial estates and out to Weyhill and Thruxton.
          </p>
          <p className="text-lg text-body leading-relaxed mb-6">
            Our HQ is at Chantry House, 38 Chantry Way, Andover SP10 1LZ &mdash; right in the middle of town. That makes us the founder-led, in-person option for Andover: full service, on your doorstep, with the kettle on. We&rsquo;re 20 minutes up the A303 from{' '}
            <a href="/locations/basingstoke" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Basingstoke</a>{' '}
            and an easy run to{' '}
            <a href="/locations/winchester" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Winchester</a>{' '}
            and{' '}
            <a href="/locations/southampton" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Southampton</a>.
          </p>
          <p className="text-lg text-body leading-relaxed">
            That said, you don&rsquo;t need us on your doorstep. Everything &mdash; setup, testing, ongoing support &mdash; runs over video call, which is how most of our{' '}
            <a href="/locations/hampshire" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Hampshire</a>{' '}
            clients prefer it. The AI doesn&rsquo;t care about geography. It just answers.
          </p>
          </div>
        </Container>
      </section>

      <ResourcesCompliance links={[
        { text: 'Test Valley Borough Council — business support', url: 'https://www.testvalley.gov.uk/business', context: 'Local authority business support and economic information' },
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
                <Icon letter="B" size="md" />
                <h3 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2 group-hover:text-coral transition-colors">Basingstoke</h3>
                <p className="text-body text-sm leading-normal">AI automation for the largest town in Hampshire, 20 minutes up the A303.</p>
              </Card>
            </a>
            <a href="/locations/winchester" className="block group">
              <Card hover className="bg-charcoal h-full">
                <Icon letter="W" size="md" />
                <h3 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2 group-hover:text-coral transition-colors">Winchester</h3>
                <p className="text-body text-sm leading-normal">AI automation for the county town&rsquo;s professional firms and trades.</p>
              </Card>
            </a>
            <a href="/locations/southampton" className="block group">
              <Card hover className="bg-charcoal h-full">
                <Icon letter="S" size="md" />
                <h3 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2 group-hover:text-coral transition-colors">Southampton</h3>
                <p className="text-body text-sm leading-normal">Port-city automation for 18,000+ businesses down the M3.</p>
              </Card>
            </a>
            <a href="/locations/hampshire" className="block group">
              <Card hover className="bg-charcoal h-full">
                <Icon letter="H" size="md" />
                <h3 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2 group-hover:text-coral transition-colors">Hampshire</h3>
                <p className="text-body text-sm leading-normal">The county hub — every town we cover, in one place.</p>
              </Card>
            </a>
          </div>
        </Container>
      </section>

      {/* ── GEO PROOF (local authority → up to /services/geo-audit; no GEO definition here) ── */}
      <section className="bg-coral py-16 md:py-20">
        <Container>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase tracking-tight-lg text-ink mb-6">
            Is AI Search Recommending Your <span className="text-cream">Andover Business?</span>
          </h2>
          <p className="text-lg text-ink leading-relaxed mb-4 max-w-[60ch]">
            When someone asks ChatGPT for the best electrician in Andover, or tells Perplexity to find a reliable builder near Andover, one business gets named. Usually it isn&rsquo;t the one with the best website.
          </p>
          <p className="text-lg text-ink leading-relaxed mb-4 max-w-[60ch]">
            We know this works because we did it to ourselves. Antek is cited by name in Google&rsquo;s AI Overview for AI automation in Andover, and ranks in the top three across the Andover map grid. Same town, same search engines, same methods we&rsquo;d use on you.
          </p>
          <p className="text-lg text-ink leading-relaxed mb-8 max-w-[60ch]">
            A GEO audit shows you exactly where your business currently stands across ChatGPT, Perplexity, Google AI Overviews, Claude and Gemini, and what it takes to get cited.
          </p>

          {/* Proof images. Two-up when the Local Falcon grid (slot A) is supplied; the
              AI Overview citation (slot B) ships now. */}
          <figure className="mb-8 max-w-2xl border-2 border-ink bg-charcoal">
            <img
              src="/geo-proof-aio-andover.webp"
              alt="Google AI Overview citing Antek Automation as an AI automation provider in Andover"
              width={800}
              height={143}
              loading="lazy"
              decoding="async"
              className="w-full h-auto"
            />
            <figcaption className="font-mono text-xs text-muted px-3 py-2 border-t border-hairline">
              Google AI Overview &mdash; &ldquo;AI automation in Andover&rdquo;
            </figcaption>
          </figure>

          <a href="/services/geo-audit#visibility-check">
            <Button variant="ink">Get Your Free AI Visibility Check &rarr;</Button>
          </a>
          <p className="font-mono text-sm text-ink/70 mt-3">Free check, results in 48 hours. <a href="/services/geo-audit" className="underline underline-offset-4 decoration-ink decoration-2 hover:opacity-70 transition-opacity">Full GEO audit</a> from &pound;247, delivered in 24 hours.</p>
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
                Can I come to your office?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Yes &mdash; we&rsquo;re at Chantry House, 38 Chantry Way, Andover SP10 1LZ, right in the middle of town. Happy to have you round for a demo. Most clients prefer a video call, but the door&rsquo;s always open if you&rsquo;re local.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do you work with businesses outside Andover?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Absolutely. We serve all of <a href="/locations/hampshire" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Hampshire</a> and the UK. Andover is our HQ, but AI automation works remotely &mdash; we&rsquo;ve got clients right across the county, from <a href="/locations/basingstoke" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Basingstoke</a> down to <a href="/locations/southampton" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Southampton</a>. That said, we do have a soft spot for local businesses and can usually meet face-to-face within the week.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                I&rsquo;m an Andover tradesperson &mdash; is AI really for me?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Especially for you. You&rsquo;re probably a one-person band or a small team, out on jobs in Weyhill, Thruxton or across the new estates all day, missing calls you can&rsquo;t afford to miss. An AI voice agent costs less than a part-time receptionist and works 24/7. It&rsquo;s built for exactly your situation.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How much does it cost?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                AI chatbots start from &pound;57/month, AI voice agents from &pound;97/month, plus a one-off setup fee. For an Andover tradesperson missing even a few calls a week, the return is usually clear within the first couple of weeks.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How quickly can you set me up?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Most voice and chat products are live within 24&ndash;48 hours of you forwarding your number or giving us website access. If you&rsquo;d rather kick off in person, we&rsquo;re at Chantry House in town and can usually meet the same week &mdash; being on your doorstep keeps things quick.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Can you get my Andover business cited in ChatGPT and Google AI Overviews?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                That&rsquo;s what a GEO audit is for. We test your visibility across ChatGPT, Perplexity, Google AI Overviews, Claude and Gemini, then give you the plan to get cited. Antek itself is cited in Google&rsquo;s AI Overview for AI automation in Andover, so the methods are the ones we use on our own business.
              </div>
            </details>
          </div>
        </Container>
      </section>

      {/* ── FINAL CTA (booking + click-to-call) ── */}
      <section className="bg-charcoal border-t border-coral py-24 md:py-32">
        <Container>
          <HeadlineBlock className="mb-6">
            Stop Losing <span className="text-coral">Andover Jobs</span>
          </HeadlineBlock>
          <p className="text-lg md:text-xl text-body leading-relaxed mb-10 max-w-[65ch]">
            Book a free 30-minute call with Andy. We&rsquo;re right here at Chantry House in town, we know Andover and Hampshire, and we&rsquo;ll give you a straight answer about whether AI automation is right for your business.
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
              Pick a <span className="text-coral">Time That Works</span> for You
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
