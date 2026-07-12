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

      {/* ── HERO (conversion-first: benefit H1 + city, subhead, primary CTA + click-to-call) ── */}
      <section className="bg-ink border-b border-hairline">
        <Container className="py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-coral mb-4 font-sans font-bold">
              AI AUTOMATION &bull; SOUTHAMPTON
            </p>
            <HeadlineBlock as="h1" className="mb-6">
              <span className="text-coral">Southampton Never Sleeps</span> &mdash; Your Website Shouldn&rsquo;t Either
            </HeadlineBlock>
            <p className="text-lg md:text-xl text-body leading-relaxed mb-8 max-w-[60ch]">
              AI that answers your website around the clock, captures the lead and handles the admin &mdash; from Ocean Village to Bitterne. Built by <a href="/about" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Andy Norman</a>, up the road in Andover.
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
        'AI voice agents, chatbots and workflow automation for Southampton businesses',
        'Stop losing port-city enquiries to missed calls — your phone answered 24/7, even after hours',
        'Built by a Hampshire founder in Andover, just up the M3 and A3057',
        'Chatbots from £57/month, voice agents from £97/month — everything delivered remotely, with face-to-face if you want it — <a href="/pricing" class="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">see full pricing</a>',
        'Voice and chat products typically live within 24–48 hours',
      ]} />

      {/* ── PROBLEM (localised, before any proof) ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            The <span className="text-coral">After-Hours Enquiry</span> That Costs You the Booking
          </HeadlineBlock>
          <p className="text-lg md:text-xl text-body leading-relaxed mb-6 max-w-[65ch]">
            Southampton is a port city that never really stops &mdash; cruise passengers arriving at all hours, a service economy stretching from the SO postcode out to Eastleigh and the New Forest. Your phone rings while you&rsquo;re mid-job or after the office has shut, and you can&rsquo;t pick up. By the time you call back, they&rsquo;ve booked someone else.
          </p>
          <p className="text-lg md:text-xl text-body leading-relaxed max-w-[65ch]">
            That&rsquo;s a booking gone &mdash; whether it&rsquo;s a hospitality enquiry around the cruise terminals, a trades job near Ocean Village, or a lettings viewing in the city centre. Now multiply it across a week. Every missed call is a customer who needed you and found someone else instead.
          </p>
        </Container>
      </section>

      {/* ── OFFER (three services framed as outcomes, single primary CTA) ── */}
      <section className="border-y border-hairline py-20 md:py-28 bg-ink">
        <Container>
          <div className="mb-16">
            <HeadlineBlock className="mb-4">
              AI Automation for <span className="text-coral">Southampton Businesses</span>
            </HeadlineBlock>
            <p className="text-lg text-body max-w-[60ch]">
              Three services designed for a port city that never stops &mdash; framed by the outcome, not the tech.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {/* AI Voice Agents */}
            <Card hover className="bg-charcoal h-full">
              <Icon letter="01" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                Your Phone, Answered 24/7
              </h3>
              <p className="text-body leading-relaxed mb-6">
                Your phone rings while you&rsquo;re mid-job on a site near the SO postcode, a cruise terminal hospitality business is drowning in seasonal enquiries, or a trades firm covering Eastleigh to the New Forest misses a call on the M27. An AI voice agent picks up on the first ring, books the job and texts you the lead. No voicemail, no lost booking.
              </p>
              <a href="/services/ai-voice-assistants" aria-label="See how AI Voice Agents work">
                <Button variant="primary" className="w-full">See Voice Agents</Button>
              </a>
            </Card>

            {/* AI Chatbots */}
            <Card hover className="bg-charcoal h-full">
              <Icon letter="02" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                Your Website, Answered at 2am
              </h3>
              <p className="text-body leading-relaxed mb-6">
                Two universities mean tens of thousands of tech-savvy consumers who expect instant online answers, and hospitality businesses in Ocean Village competing for bookings. A chatbot trained on your business qualifies the enquiry and books the appointment while every competitor shows a &ldquo;we&rsquo;ll call you back&rdquo; form.
              </p>
              <a href="/services/ai-chatbots" aria-label="See how AI Chatbots work">
                <Button variant="primary" className="w-full">See Chatbots</Button>
              </a>
            </Card>

            {/* Workflow Automation */}
            <Card hover className="bg-charcoal h-full">
              <Icon letter="03" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                Your Admin, Handled
              </h3>
              <p className="text-body leading-relaxed mb-6">
                Southampton&rsquo;s maritime logistics businesses managing complex scheduling, lettings agents juggling viewings across the city, service firms with enquiries coming from every direction &mdash; we connect your tools and automate the repetitive bits so a new enquiry gets handled without you lifting a finger.
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
        {/* local testimonial slot — add a Southampton testimonial here once signed off in writing */}
      </TrustBlock>

      {/* ── RETELL INDUSTRY DEMOS (pop-card orbs) ── */}
      <RetellDemoCards curated />

      {/* ── LOCAL RELEVANCE — "Our Southampton patch" (entity layer sits UNDER the hook) ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            Our <span className="text-coral">Southampton</span> Patch
          </HeadlineBlock>
          <p className="text-lg text-body leading-relaxed mb-6 max-w-[65ch]">
            <a href="https://en.wikipedia.org/wiki/Southampton" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Southampton</a>{' '}
            is a major port city in{' '}
            <a href="/locations/hampshire" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Hampshire</a>, sitting where the{' '}
            <a href="https://en.wikipedia.org/wiki/River_Itchen,_Hampshire" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">River Itchen</a>{' '}
            meets the River Test, served by the M27 and the M3. Its maritime and port economy runs alongside a strong service sector and two universities &mdash; the{' '}
            <a href="https://en.wikipedia.org/wiki/University_of_Southampton" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">University of Southampton</a>{' '}
            and Solent University &mdash; that together drive a digital-first, around-the-clock consumer base. The trades and service firms work across Ocean Village, Portswood, Shirley and Bitterne, while the wider patch stretches from the cruise terminals out to Eastleigh and the New Forest.
          </p>
          <p className="text-lg text-body leading-relaxed mb-6 max-w-[65ch]">
            We&rsquo;re based just up the road in{' '}
            <a href="/locations/andover" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Andover</a>, about 30 minutes via the A3057 &mdash; which makes us one of the closest AI automation agencies to Southampton, and one of the few that will actually meet you for a coffee. While the big London agencies charge London rates, we&rsquo;re right here in Hampshire.
          </p>
          <p className="text-lg text-body leading-relaxed max-w-[65ch]">
            That said, you don&rsquo;t need us on your doorstep. Everything &mdash; setup, testing, ongoing support &mdash; runs over video call, which is how most of our Hampshire clients prefer it. Your AI voice agent doesn&rsquo;t need a parking space in Ocean Village to answer your calls. The AI doesn&rsquo;t care about geography. It just answers.
          </p>
        </Container>
      </section>

      {/* ── SOUTHAMPTON BY THE NUMBERS (cited figures preserved; lower on the page) ── */}
      <section className="bg-ink border-y-2 border-coral py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-12">
            <span className="text-coral">Southampton</span> by the Numbers
          </HeadlineBlock>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            <Card className="bg-charcoal h-full">
              <div className="text-4xl font-display font-extrabold text-coral mb-2">&pound;7.5bn</div>
              <p className="text-body font-bold">Gross Value Added economy <span className="font-normal text-muted text-sm">(ONS regional data)</span></p>
            </Card>
            <Card className="bg-charcoal h-full">
              <div className="text-4xl font-display font-extrabold text-coral mb-2">18,000+</div>
              <p className="text-body font-bold">Registered businesses <span className="font-normal text-muted text-sm">(Companies House / ONS)</span></p>
            </Card>
            <Card className="bg-charcoal h-full">
              <div className="text-4xl font-display font-extrabold text-coral mb-2">40,000+</div>
              {/* [VERIFY] student figure across the two universities — no published citation attached */}
              <p className="text-body font-bold">Students across two major universities driving digital-first consumer behaviour</p>
            </Card>
            <Card className="bg-charcoal h-full">
              <div className="text-4xl font-display font-extrabold text-coral mb-2">1.5M</div>
              {/* [VERIFY] annual cruise passenger figure — no published citation attached */}
              <p className="text-body font-bold">Cruise passengers annually, supporting a hospitality sector that needs 24/7 responsiveness</p>
            </Card>
          </div>
        </Container>
      </section>

      <ResourcesCompliance links={[
        { text: 'Southampton City Council business support', url: 'https://www.southampton.gov.uk/business/', context: 'Local authority business support and economic data' },
        { text: 'ONS regional economic data', url: 'https://www.ons.gov.uk/economy/grossdomesticproductgdp', context: 'Official ONS statistics on UK regional economic output' },
        { text: 'ICO data protection guidance', url: 'https://ico.org.uk/for-organisations/guide-to-data-protection/', context: 'UK law governing customer data collected by AI systems' },
      ]} />

      {/* ── SIBLING / GEO LINKS ── */}
      <section className="bg-ink border-y border-hairline py-16 md:py-20">
        <Container>
          <HeadlineBlock className="mb-8">
            Nearby &amp; Across <span className="text-coral">Hampshire</span>
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
                <p className="text-body text-sm leading-normal">Our HQ, about 30 minutes up the A3057. Happy to meet for a coffee.</p>
              </Card>
            </a>
            <a href="/locations/basingstoke" className="block group">
              <Card hover className="bg-charcoal h-full">
                <Icon letter="03" size="md" mono />
                <h3 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2 group-hover:text-coral transition-colors">Basingstoke</h3>
                <p className="text-body text-sm leading-normal">AI automation for the largest town in Hampshire, up the M3.</p>
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
            Is <span className="text-coral">AI Search</span> Recommending Your Southampton Business?
          </HeadlineBlock>
          <p className="text-lg text-body leading-relaxed mb-6 max-w-[60ch]">
            When someone asks ChatGPT for &ldquo;the best cleaning company in Southampton&rdquo; or tells Perplexity to find &ldquo;a plumber near Ocean Village&rdquo;, is your business in the answer? Our <a href="/services/geo-audit" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">GEO Audit</a> checks your visibility across ChatGPT, Perplexity, Google AI Overviews and Claude &mdash; and gives you a clear plan to get cited. From &pound;247.
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
                You&rsquo;re based in Andover &mdash; why should I choose you over a Southampton agency?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                We&rsquo;re an AI automation company about 30 minutes up the A3057, closer than most London agencies that target Southampton businesses. More importantly, AI automation runs on cloud infrastructure. Your voice agent doesn&rsquo;t need a local office. What matters is the quality of the build and the speed of support, and we deliver both.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do your AI voice agents work for hospitality businesses near the cruise terminals?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Yes. We&rsquo;ve built voice agents that handle high-volume seasonal enquiries &mdash; exactly the pattern cruise terminal hospitality businesses deal with. The AI handles the peaks so your staff can focus on service.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Can your chatbot handle enquiries in multiple languages?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Yes. Southampton&rsquo;s diverse population and international port traffic means multilingual capability matters. Our chatbots can be configured to handle conversations in multiple languages.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What kind of Southampton businesses do you work with?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Trades and service firms across Ocean Village, Portswood, Shirley and Bitterne, plus lettings agents in the city centre, hospitality around the cruise terminals, and maritime and logistics businesses. If your team answers phones or chases admin every week, it&rsquo;s a fit &mdash; from the SO postcode out to Eastleigh and the New Forest.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How much does it cost and how quickly can I start?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                AI chatbots start from £57/month, AI voice agents from £97/month, and most are live within 24&ndash;48 hours of you forwarding your number or giving us website access. For a Southampton business missing even a few calls a week, it usually pays for itself almost immediately.
              </div>
            </details>
          </div>
        </Container>
      </section>

      {/* ── FINAL CTA (booking + click-to-call + voice demo) ── */}
      <section className="bg-charcoal border-t border-coral py-24 md:py-32">
        <Container>
          <HeadlineBlock className="mb-6">
            Stop Losing <span className="text-coral">Southampton Enquiries</span>
          </HeadlineBlock>
          <p className="text-lg md:text-xl text-body leading-relaxed mb-10 max-w-[65ch]">
            Book a free 30-minute call with Andy. We&rsquo;re just up the road, we know Hampshire, and we&rsquo;ll give you a straight answer about whether AI automation is right for your business.
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
