import { useState, Suspense, lazy } from 'react';
import { Button } from '../../../src/components/Button';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';
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
    <div className="bg-off-white">

      {/* ── HERO (conversion-first: benefit H1 + city, subhead, primary CTA + click-to-call) ── */}
      <section className="bg-warm-beige border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              AI AUTOMATION &bull; SOUTHAMPTON
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              Southampton Never Sleeps &mdash; Your Website Shouldn&rsquo;t Either
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              AI that answers your website around the clock, captures the lead and handles the admin &mdash; from Ocean Village to Bitterne. Built by <a href="/about" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Andy Norman</a>, up the road in Andover.
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
        'AI voice agents, chatbots and workflow automation for Southampton businesses',
        'Stop losing port-city enquiries to missed calls — your phone answered 24/7, even after hours',
        'Built by a Hampshire founder in Andover, just up the M3 and A3057',
        'From £57/month — everything delivered remotely, with face-to-face if you want it — <a href="/pricing" class="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">see full pricing</a>',
        'Voice and chat products typically live within 24–48 hours',
      ]} />

      {/* ── PROBLEM (localised, before any proof) ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            The After-Hours Enquiry That Costs You the Booking
          </h2>
          <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-6">
            Southampton is a port city that never really stops &mdash; cruise passengers arriving at all hours, a service economy stretching from the SO postcode out to Eastleigh and the New Forest. Your phone rings while you&rsquo;re mid-job or after the office has shut, and you can&rsquo;t pick up. By the time you call back, they&rsquo;ve booked someone else.
          </p>
          <p className="text-lg md:text-xl text-charcoal leading-relaxed">
            That&rsquo;s a booking gone &mdash; whether it&rsquo;s a hospitality enquiry around the cruise terminals, a trades job near Ocean Village, or a lettings viewing in the city centre. Now multiply it across a week. Every missed call is a customer who needed you and found someone else instead.
          </p>
        </div>
      </section>

      {/* ── OFFER (three services framed as outcomes, single primary CTA) ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              AI Automation for Southampton Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three services designed for a port city that never stops &mdash; framed by the outcome, not the tech.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Voice Agents */}
            <Card hover>
              <Icon letter="V" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Your Phone, Answered 24/7
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                Your phone rings while you&rsquo;re mid-job on a site near the SO postcode, a cruise terminal hospitality business is drowning in seasonal enquiries, or a trades firm covering Eastleigh to the New Forest misses a call on the M27. An AI voice agent picks up on the first ring, books the job and texts you the lead. No voicemail, no lost booking.
              </p>
              <a href="/services/ai-voice-assistants" aria-label="See how AI Voice Agents work">
                <Button variant="primary" className="w-full">See Voice Agents</Button>
              </a>
            </Card>

            {/* AI Chatbots */}
            <Card hover>
              <Icon letter="C" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Your Website, Answered at 2am
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                Two universities mean tens of thousands of tech-savvy consumers who expect instant online answers, and hospitality businesses in Ocean Village competing for bookings. A chatbot trained on your business qualifies the enquiry and books the appointment while every competitor shows a &ldquo;we&rsquo;ll call you back&rdquo; form.
              </p>
              <a href="/services/ai-chatbots" aria-label="See how AI Chatbots work">
                <Button variant="primary" className="w-full">See Chatbots</Button>
              </a>
            </Card>

            {/* Workflow Automation */}
            <Card hover>
              <Icon letter="A" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Your Admin, Handled
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                Southampton&rsquo;s maritime logistics businesses managing complex scheduling, lettings agents juggling viewings across the city, service firms with enquiries coming from every direction &mdash; we connect your tools and automate the repetitive bits so a new enquiry gets handled without you lifting a finger.
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

      {/* ── PROOF (reusable governed TrustBlock + local testimonial slot) ── */}
      <TrustBlock>
        {/* local testimonial slot — add a Southampton testimonial here once signed off in writing */}
      </TrustBlock>

      {/* ── RETELL INDUSTRY DEMOS (pop-card orbs) ── */}
      <RetellDemoCards curated />

      {/* ── LOCAL RELEVANCE — "Our Southampton patch" (entity layer sits UNDER the hook) ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            Our Southampton Patch
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            <a href="https://en.wikipedia.org/wiki/Southampton" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Southampton</a>{' '}
            is a major port city in{' '}
            <a href="/locations/hampshire" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Hampshire</a>, sitting where the{' '}
            <a href="https://en.wikipedia.org/wiki/River_Itchen,_Hampshire" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">River Itchen</a>{' '}
            meets the River Test, served by the M27 and the M3. Its maritime and port economy runs alongside a strong service sector and two universities &mdash; the{' '}
            <a href="https://en.wikipedia.org/wiki/University_of_Southampton" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">University of Southampton</a>{' '}
            and Solent University &mdash; that together drive a digital-first, around-the-clock consumer base. The trades and service firms work across Ocean Village, Portswood, Shirley and Bitterne, while the wider patch stretches from the cruise terminals out to Eastleigh and the New Forest.
          </p>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            We&rsquo;re based just up the road in{' '}
            <a href="/locations/andover" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Andover</a>, about 30 minutes via the A3057 &mdash; which makes us one of the closest AI automation agencies to Southampton, and one of the few that will actually meet you for a coffee. While the big London agencies charge London rates, we&rsquo;re right here in Hampshire.
          </p>
          <p className="text-lg text-charcoal leading-relaxed">
            That said, you don&rsquo;t need us on your doorstep. Everything &mdash; setup, testing, ongoing support &mdash; runs over video call, which is how most of our Hampshire clients prefer it. Your AI voice agent doesn&rsquo;t need a parking space in Ocean Village to answer your calls. The AI doesn&rsquo;t care about geography. It just answers.
          </p>
        </div>
      </section>

      {/* ── SOUTHAMPTON BY THE NUMBERS (cited figures preserved; lower on the page) ── */}
      <section className="bg-peach border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-12 text-center">
            Southampton by the Numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">&pound;7.5bn</div>
              <p className="text-charcoal font-bold">Gross Value Added economy <span className="font-normal text-mid-gray text-sm">(ONS regional data)</span></p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">18,000+</div>
              <p className="text-charcoal font-bold">Registered businesses <span className="font-normal text-mid-gray text-sm">(Companies House / ONS)</span></p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">40,000+</div>
              {/* [VERIFY] student figure across the two universities — no published citation attached */}
              <p className="text-charcoal font-bold">Students across two major universities driving digital-first consumer behaviour</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">1.5M</div>
              {/* [VERIFY] annual cruise passenger figure — no published citation attached */}
              <p className="text-charcoal font-bold">Cruise passengers annually, supporting a hospitality sector that needs 24/7 responsiveness</p>
            </Card>
          </div>
        </div>
      </section>

      <ResourcesCompliance links={[
        { text: 'Southampton City Council business support', url: 'https://www.southampton.gov.uk/business/', context: 'Local authority business support and economic data' },
        { text: 'ONS regional economic data', url: 'https://www.ons.gov.uk/economy/grossdomesticproductgdp', context: 'Official ONS statistics on UK regional economic output' },
        { text: 'ICO data protection guidance', url: 'https://ico.org.uk/for-organisations/guide-to-data-protection/', context: 'UK law governing customer data collected by AI systems' },
      ]} />

      {/* ── SIBLING / GEO LINKS ── */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-2xl md:text-3xl uppercase tracking-tight-lg text-charcoal mb-8 text-center">
            Nearby &amp; Across Hampshire
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/locations/winchester" className="block group">
              <Card hover>
                <Icon letter="W" size="md" />
                <h3 className="font-black text-lg uppercase text-charcoal mt-4 mb-2 group-hover:text-terracotta transition-colors">Winchester</h3>
                <p className="text-charcoal text-sm leading-normal">AI automation for the county town&rsquo;s professional firms and trades.</p>
              </Card>
            </a>
            <a href="/locations/andover" className="block group">
              <Card hover>
                <Icon letter="A" size="md" />
                <h3 className="font-black text-lg uppercase text-charcoal mt-4 mb-2 group-hover:text-terracotta transition-colors">Andover</h3>
                <p className="text-charcoal text-sm leading-normal">Our HQ, about 30 minutes up the A3057. Happy to meet for a coffee.</p>
              </Card>
            </a>
            <a href="/locations/basingstoke" className="block group">
              <Card hover>
                <Icon letter="B" size="md" />
                <h3 className="font-black text-lg uppercase text-charcoal mt-4 mb-2 group-hover:text-terracotta transition-colors">Basingstoke</h3>
                <p className="text-charcoal text-sm leading-normal">AI automation for the largest town in Hampshire, up the M3.</p>
              </Card>
            </a>
            <a href="/locations/hampshire" className="block group">
              <Card hover>
                <Icon letter="H" size="md" />
                <h3 className="font-black text-lg uppercase text-charcoal mt-4 mb-2 group-hover:text-terracotta transition-colors">Hampshire</h3>
                <p className="text-charcoal text-sm leading-normal">The county hub — every town we cover, in one place.</p>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* ── GEO CROSS-SELL (we also offer GEO — AI-search visibility) ── */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-6">
            Is AI Search Recommending Your Southampton Business?
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            When someone asks ChatGPT for &ldquo;the best cleaning company in Southampton&rdquo; or tells Perplexity to find &ldquo;a plumber near Ocean Village&rdquo;, is your business in the answer? Our <a href="/services/geo-audit" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">GEO Audit</a> checks your visibility across ChatGPT, Perplexity, Google AI Overviews and Claude &mdash; and gives you a clear plan to get cited. From &pound;247.
          </p>
          <a href="/services/geo-audit">
            <Button variant="primary">Check Your AI Visibility &rarr;</Button>
          </a>
        </div>
      </section>

      {/* ── FAQ (conversion + local) ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                You&rsquo;re based in Andover &mdash; why should I choose you over a Southampton agency?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                We&rsquo;re 30 minutes up the A3057 &mdash; closer than most London agencies that target Southampton businesses. More importantly, AI automation runs on cloud infrastructure. Your voice agent doesn&rsquo;t need a local office. What matters is the quality of the build and the speed of support, and we deliver both.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do your AI voice agents work for hospitality businesses near the cruise terminals?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes. We&rsquo;ve built voice agents that handle high-volume seasonal enquiries &mdash; exactly the pattern cruise terminal hospitality businesses deal with. The AI handles the peaks so your staff can focus on service.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Can your chatbot handle enquiries in multiple languages?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes. Southampton&rsquo;s diverse population and international port traffic means multilingual capability matters. Our chatbots can be configured to handle conversations in multiple languages.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What kind of Southampton businesses do you work with?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Trades and service firms across Ocean Village, Portswood, Shirley and Bitterne, plus lettings agents in the city centre, hospitality around the cruise terminals, and maritime and logistics businesses. If your team answers phones or chases admin every week, it&rsquo;s a fit &mdash; from the SO postcode out to Eastleigh and the New Forest.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How much does it cost and how quickly can I start?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                AI voice agents and chatbots start from £57/month, and most are live within 24&ndash;48 hours of you forwarding your number or giving us website access. For a Southampton business missing even a few calls a week, it usually pays for itself almost immediately.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA (booking + click-to-call + voice demo) ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Stop Losing Southampton Enquiries
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 30-minute call with Andy. We&rsquo;re just up the road, we know Hampshire, and we&rsquo;ll give you a straight answer about whether AI automation is right for your business.
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
