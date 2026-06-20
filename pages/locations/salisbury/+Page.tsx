import { useState, Suspense, lazy } from 'react';
import { Button } from '../../../src/components/Button';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';
import { CalBooking } from '../../../src/components/CalBooking';
import { VoiceDemoButton } from '../../../src/components/VoiceDemoButton';
import { TrustBlock } from '../../../src/components/TrustBlock';
import { QuickRecap } from '../../../src/components/QuickRecap';
import { ResourcesCompliance } from '../../../src/components/ResourcesCompliance';

const VoiceChat = lazy(() => import('../../../src/components/VoiceChat').then(m => ({ default: m.VoiceChat })));

export default function Page() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);

  return (
    <div className="bg-off-white">

      {/* ── HERO (conversion-first: benefit H1 + town, subhead, primary CTA + click-to-call) ── */}
      <section className="bg-warm-beige border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              AI AUTOMATION &bull; SALISBURY
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              Never Miss Another Salisbury Job to a Missed Call
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              AI that answers your phone, captures the lead and handles the admin. Built by <a href="/about" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Andy Norman</a>, just down the A303 in Andover.
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
        'AI voice agents, chatbots and workflow automation for Salisbury businesses',
        'Stop losing jobs to missed calls — your phone answered 24/7, even mid-job',
        'Built by a Hampshire founder in Andover, just down the A303 from Salisbury',
        'From £57/month — everything delivered remotely, with face-to-face if you want it — <a href="/pricing" class="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">see full pricing</a>',
        'Voice and chat products typically live within 24–48 hours',
      ]} />

      {/* ── PROBLEM (localised, before any proof) ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            The Missed Call That Costs You the Job
          </h2>
          <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-6">
            You&rsquo;re on a job out in Wilton or out across the villages towards Amesbury. The phone rings and you can&rsquo;t answer. By the time you call back, they&rsquo;ve booked someone else.
          </p>
          <p className="text-lg md:text-xl text-charcoal leading-relaxed">
            That&rsquo;s a two grand job gone &mdash; because you were busy doing the work you&rsquo;re actually good at. The same goes for the hotels, restaurants and cathedral-visitor businesses fielding booking enquiries after hours. Every missed call is a customer who needed you and found someone else instead.
          </p>
        </div>
      </section>

      {/* ── OFFER (three services framed as outcomes, single primary CTA) ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              AI Automation for Salisbury Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three things that stop the leaks &mdash; framed by the outcome, not the tech.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card hover>
              <Icon letter="V" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Your Phone, Answered 24/7
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                An AI voice agent picks up on the first ring &mdash; mid-job, after hours, weekends &mdash; takes the details, books the work and texts you the lead. No voicemail, no lost job.
              </p>
              <a href="/services/ai-voice-assistants" aria-label="See how AI Voice Agents work">
                <Button variant="primary" className="w-full">See Voice Agents</Button>
              </a>
            </Card>

            <Card hover>
              <Icon letter="C" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Your Website, Answered at 2am
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
                A chatbot trained on your business answers questions, qualifies the enquiry and books the appointment while every competitor shows a &ldquo;we&rsquo;ll call you back&rdquo; form.
              </p>
              <a href="/services/ai-chatbots" aria-label="See how AI Chatbots work">
                <Button variant="primary" className="w-full">See Chatbots</Button>
              </a>
            </Card>

            <Card hover>
              <Icon letter="A" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Your Admin, Handled
              </h3>
              <p className="text-charcoal leading-relaxed mb-6">
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
        </div>
      </section>

      {/* ── PROOF (reusable governed TrustBlock + local testimonial slot) ── */}
      <TrustBlock>
        {/* local testimonial slot — add a Salisbury testimonial here once signed off in writing */}
      </TrustBlock>

      {/* ── LOCAL RELEVANCE — "Our Salisbury patch" (entity layer sits UNDER the hook) ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            Our Salisbury Patch
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            Salisbury is a cathedral city in{' '}
            <a href="https://en.wikipedia.org/wiki/Wiltshire" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Wiltshire</a>, set at the confluence of the River Avon and its tributaries and home to{' '}
            <a href="https://en.wikipedia.org/wiki/Salisbury_Cathedral" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Salisbury Cathedral</a>, which carries Britain&rsquo;s tallest church spire. It sits on the A303/A36, a short hop from{' '}
            <a href="https://en.wikipedia.org/wiki/Stonehenge" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Stonehenge</a>, with the trades, professional firms and tourism businesses working across Wilton, Old Sarum, Amesbury, Downton, Bemerton and Laverstock.
          </p>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            Salisbury sits right on Hampshire&rsquo;s western border &mdash; it&rsquo;s a Wiltshire city, not a Hampshire one, but it&rsquo;s a border town we cover. We&rsquo;re based in{' '}
            <a href="/locations/andover" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Andover</a>, an easy run down the A303 &mdash; which makes us one of the closest AI automation agencies to Salisbury, and one of the few that will actually meet you for a coffee.
          </p>
          <p className="text-lg text-charcoal leading-relaxed">
            That said, you don&rsquo;t need us on your doorstep. Everything &mdash; setup, testing, ongoing support &mdash; runs over video call, which is how most of our{' '}
            <a href="/locations/hampshire" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Hampshire</a>{' '}
            and Wiltshire clients prefer it. The AI doesn&rsquo;t care about geography. It just answers.
          </p>
        </div>
      </section>

      <ResourcesCompliance links={[
        { text: 'Wiltshire Council — business support', url: 'https://www.wiltshire.gov.uk/business', context: 'Local authority business support and economic information' },
        { text: 'ICO data protection guidance', url: 'https://ico.org.uk/for-organisations/guide-to-data-protection/', context: 'UK law governing customer data collected by AI systems' },
      ]} />

      {/* ── SIBLING / GEO LINKS ── */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-2xl md:text-3xl uppercase tracking-tight-lg text-charcoal mb-8 text-center">
            Nearby Towns We Cover
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/locations/andover" className="block group">
              <Card hover>
                <Icon letter="A" size="md" />
                <h3 className="font-black text-lg uppercase text-charcoal mt-4 mb-2 group-hover:text-terracotta transition-colors">Andover</h3>
                <p className="text-charcoal text-sm leading-normal">Our HQ, an easy run down the A303. Happy to meet for a coffee.</p>
              </Card>
            </a>
            <a href="/locations/winchester" className="block group">
              <Card hover>
                <Icon letter="W" size="md" />
                <h3 className="font-black text-lg uppercase text-charcoal mt-4 mb-2 group-hover:text-terracotta transition-colors">Winchester</h3>
                <p className="text-charcoal text-sm leading-normal">AI automation for the county town&rsquo;s professional firms and trades.</p>
              </Card>
            </a>
            <a href="/locations/southampton" className="block group">
              <Card hover>
                <Icon letter="S" size="md" />
                <h3 className="font-black text-lg uppercase text-charcoal mt-4 mb-2 group-hover:text-terracotta transition-colors">Southampton</h3>
                <p className="text-charcoal text-sm leading-normal">Port-city automation for 18,000+ businesses down the M3.{/* [VERIFY] */}</p>
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

      {/* ── FAQ (conversion + local) ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                You&rsquo;re in Andover — do you cover Salisbury?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes. Andover is our base, but we work with Salisbury businesses regularly &mdash; it&rsquo;s an easy run down the A303. The AI runs in the cloud, so your voice agent answers Salisbury calls exactly the same whether we&rsquo;re next door or up the road.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do I need to be in Salisbury for this to work?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Not at all. The whole thing runs remotely &mdash; setup, testing and support all happen over video call. Your AI voice agent doesn&rsquo;t need a desk in the city centre to answer your phone. Most clients are set up without us ever stepping into their office.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Salisbury is in Wiltshire, not Hampshire — does that matter?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                No. Salisbury is a Wiltshire cathedral city on Hampshire&rsquo;s western edge, and it&rsquo;s a border town we happily cover. County lines make no difference to how the AI works or how we support you &mdash; we&rsquo;re a short run down the A303 either way.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What does it cost?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                AI voice agents and chatbots start from £57/month. For a Salisbury trade missing even a few calls a week, it usually pays for itself almost immediately. Full numbers are on our <a href="/pricing" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">pricing page</a>.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How fast can you set it up?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Most voice agents and chatbots are live within 24&ndash;48 hours of you forwarding your number or giving us website access. We handle the build, testing and ongoing tweaks, so there&rsquo;s very little for you to do at your end.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA (booking + click-to-call) ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Stop Losing Salisbury Jobs
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 30-minute call with Andy. We&rsquo;re just down the A303, we know the patch, and we&rsquo;ll give you a straight answer about whether AI automation is right for your business.
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
