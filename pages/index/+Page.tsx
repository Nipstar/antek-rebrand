import { useState, useEffect, Suspense, lazy } from 'react';
import { Button } from '../../src/components/Button';
import { Card } from '../../src/components/Card';
import { Icon } from '../../src/components/Icon';
import { Container } from '../../src/components/Container';
import { HeadlineBlock } from '../../src/components/HeadlineBlock';
import { Eyebrow } from '../../src/components/Eyebrow';
import { VoiceDemoButton } from '../../src/components/VoiceDemoButton';
import { CaseStudyCard } from '../../src/components/CaseStudyCard';
import { QuickRecap } from '../../src/components/QuickRecap';
import { ResourcesCompliance } from '../../src/components/ResourcesCompliance';
import { TestimonialsStrip } from '../../src/components/TestimonialsStrip';
import { TrustStrip } from '../../src/components/TrustStrip';
import { openBookingPopup } from '../../src/utils/bookingPopup';
import { caseStudies } from '../../src/data/caseStudies';

const VoiceChat = lazy(() => import('../../src/components/VoiceChat').then(m => ({ default: m.VoiceChat })));

export default function Page() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);

  useEffect(() => {
    const handleOpenVoiceChat = () => {
      setIsVoiceChatOpen(true);
    };

    window.addEventListener('openVoiceChat', handleOpenVoiceChat);
    return () => window.removeEventListener('openVoiceChat', handleOpenVoiceChat);
  }, []);

  return (
    <div>

      {/* ── HERO ── */}
      <section className="bg-ink border-b border-hairline">
        <Container className="py-20 md:py-28">
          <div className="max-w-4xl">
            <HeadlineBlock
              as="h1"
              kicker={<>AI AUTOMATION AGENCY &bull; UK</>}
            >
              Capture your leads. Automate your admin. <span className="text-coral">Get found by AI.</span>
            </HeadlineBlock>
            <p className="hero-description text-lg md:text-xl text-body leading-relaxed mb-8 mt-6 max-w-[60ch]">
              We build AI voice agents, website chatbots, workflow automation and GEO for UK businesses. Capture the leads you're missing, automate the work that eats your evenings, and make sure AI search recommends you instead of your competitors.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
              <Button variant="secondary" onClick={() => openBookingPopup('hero-cta')}>
                Book a free 30-min discovery call
              </Button>
            </div>
            <p className="text-sm text-muted mt-4 tracking-wide">
              Voice from &pound;97/mo &middot; Chatbots from &pound;57/mo &middot; Automation from &pound;250 &middot; GEO audits from &pound;247 &middot; <a href="/pricing" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">See pricing</a>
            </p>
            <TrustStrip className="mt-6" />
          </div>
        </Container>
      </section>

      {/* ── TESTIMONIALS STRIP (illustrative case studies) ── */}
      <TestimonialsStrip limit={3} />

      {/* ── SNIPPET BAIT ── */}
      <section className="border-b border-hairline py-16 md:py-20">
        <Container>
          <HeadlineBlock className="mb-6">
            What Is <span className="text-coral">Antek Automation?</span>
          </HeadlineBlock>
          <p className="snippet-bait text-lg text-body leading-relaxed max-w-[65ch]">
            Antek Automation is a UK-based AI automation company specialising in AI voice agents, chatbots, n8n workflow automation, and Generative Engine Optimisation (GEO). Based in Andover, Hampshire, we help UK SMBs automate calls, leads, and workflows. Transparent pricing, no offshore handoffs, and a certified Retell AI partnership.
          </p>
        </Container>
      </section>

      {/* ── PROBLEM / SOUND FAMILIAR? ── */}
      <section className="bg-ink border-b border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            Sound <span className="text-coral">Familiar?</span>
          </HeadlineBlock>
          <div className="max-w-[65ch]">
            <p className="text-lg text-body leading-relaxed mb-6">
              You're on a job and the phone rings. By the time you call back, they've found someone else. That's a £2,000 job gone because you were busy doing the work you're good at.
            </p>
            <p className="text-lg text-body leading-relaxed mb-6">
              Someone lands on your website at 10pm, ready to buy. There's no one to answer, just a contact form. They close the tab and try the next result.
            </p>
            <p className="text-lg text-body leading-relaxed mb-6">
              Your evenings disappear into admin. Updating the CRM, chasing invoices, sending the follow-ups you keep forgetting. The business runs on your time and there's never enough of it.
            </p>
            <p className="text-lg text-body leading-relaxed mb-6">
              And when a buyer asks ChatGPT or Google's AI for a business like yours, it names a competitor. You're not even in the conversation.
            </p>
            <p className="text-xl font-display font-extrabold text-cream">
              It doesn't have to be like that.
            </p>
          </div>
        </Container>
      </section>

      {/* ── WHAT WE DO / THREE THINGS ── */}
      <section className="py-20 md:py-28" id="services">
        <Container>
          <HeadlineBlock className="mb-16 max-w-[65ch]">
            Four Things We Build. All of Them <span className="text-coral">Save You Time and Money.</span>
          </HeadlineBlock>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 items-stretch">
            {/* AI Voice Agents */}
            <Card hover className="h-full flex flex-col !p-6 md:!p-8">
              <Icon letter="01" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                AI Voice Agents
              </h3>
              <p className="text-body leading-relaxed mb-6">
                Calls new leads back in seconds, qualifies them, confirms appointments and handles routine customer calls. Inbound and outbound, around the clock.
              </p>
              <a href="/services/ai-voice-assistants" aria-label="See how AI Voice Agents work" className="mt-auto block">
                <Button variant="primary" className="text-sm !px-4">See Voice Agents</Button>
              </a>
            </Card>

            {/* AI Chatbots */}
            <Card hover className="h-full flex flex-col !p-6 md:!p-8">
              <Icon letter="02" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                AI Chatbots
              </h3>
              <p className="text-body leading-relaxed mb-6">
                A smart chat widget that talks to website visitors the moment they land, answers questions, qualifies them and books them in. Works while you sleep.
              </p>
              <a href="/services/ai-chatbots" aria-label="See how AI Chatbots work" className="mt-auto block">
                <Button variant="primary" className="text-sm !px-4">See Chatbots</Button>
              </a>
            </Card>

            {/* Workflow Automation */}
            <Card hover className="h-full flex flex-col !p-6 md:!p-8">
              <Icon letter="03" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                Workflow Automation
              </h3>
              <p className="text-body leading-relaxed mb-6">
                We connect the tools you already use and automate the repetitive admin that eats your evenings. Logged, acknowledged and followed up, automatically.
              </p>
              <a href="/services/workflow-automation" aria-label="See how Workflow Automation works" className="mt-auto block">
                <Button variant="primary" className="text-sm !px-4">See Automation</Button>
              </a>
            </Card>

            {/* GEO */}
            <Card hover className="h-full flex flex-col !p-6 md:!p-8">
              <Icon letter="04" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                GEO
              </h3>
              <p className="text-body leading-relaxed mb-6">
                When buyers ask ChatGPT, Perplexity or Google's AI Overviews for a business like yours, we make sure you're the one it names. Audit, fix, stay visible.
              </p>
              <a href="/services/geo-audit" aria-label="See how GEO works" className="mt-auto block">
                <Button variant="primary" className="text-sm !px-4">See GEO</Button>
              </a>
            </Card>
          </div>
        </Container>
      </section>

      {/* ── AI RECEPTIONIST PROMO ── */}
      <section className="bg-ink border-y-2 border-coral py-20 md:py-28">
        <Container>
          <Eyebrow className="mb-4">
            NEW &middot; FROM &pound;97/MONTH
          </Eyebrow>
          <HeadlineBlock className="mb-6">
            <span className="text-coral">AI Receptionist</span> &mdash; From &pound;97/Month
          </HeadlineBlock>
          <p className="text-lg md:text-xl text-body leading-relaxed mb-10 max-w-[60ch]">
            Your phone answered 24/7. Callers screened. Appointments booked. Summaries sent. All
            while you focus on the actual work.
          </p>
          <a href="/ai-receptionist">
            <Button variant="primary">See How It Works</Button>
          </a>
        </Container>
      </section>

      {/* ── HONESTY SECTION ── */}
      <section className="border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            What We <span className="text-coral">Won't Tell You</span>
          </HeadlineBlock>
          <div className="max-w-[65ch]">
            <p className="text-lg text-body leading-relaxed mb-6">
              We're not going to tell you AI is magic. It isn't. It won't replace you, it won't run your business for you, and it won't fix a broken process — it'll just break it faster.
            </p>
            <p className="text-lg text-body leading-relaxed mb-6">
              What it <strong className="font-bold text-cream">will</strong> do is handle the repetitive, time-consuming stuff that keeps you from doing your best work. Answer the calls you'd otherwise miss. Reply to website visitors at 2am. Send the follow-ups you forget. And get you cited when buyers ask AI search for a business like yours.
            </p>
            <p className="text-lg text-body leading-relaxed">
              We build tools that do the boring bits brilliantly — so you can focus on the work that actually matters.
            </p>
          </div>
        </Container>
      </section>

      {/* ── SOCIAL PROOF / WHO WE WORK WITH ── */}
      <section className="bg-ink border-b border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-16">
            Who We <span className="text-coral">Work With</span>
          </HeadlineBlock>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {[
              'Tradespeople',
              'Cleaning Companies',
              'Estate Agents',
              'Dental Practices',
              'Law Firms',
              'Accountants',
              'Restaurants',
              'Salons & Spas',
              'Fitness Studios',
              'Consultancies',
              'Property Managers',
              'Veterinary Clinics',
            ].map((business) => (
              <div
                key={business}
                className="bg-charcoal border-2 border-hairline shadow-brutal-sm p-4 text-center font-sans font-bold text-sm uppercase tracking-wide text-cream"
              >
                {business}
              </div>
            ))}
          </div>

          <p className="text-lg text-body font-sans font-bold">
            Based in <a href="/locations/hampshire" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Hampshire</a>. Work with businesses across the UK.
          </p>
        </Container>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="border-b border-hairline py-24 md:py-32">
        <Container>
          <div className="mb-20">
            <HeadlineBlock className="mb-6">
              What <span className="text-coral">Results</span> Look Like
            </HeadlineBlock>
            <p className="text-xl md:text-2xl font-bold text-body max-w-[60ch]">
              Illustrative examples based on the types of outcomes our products are designed to deliver.
            </p>
          </div>

          <div className="space-y-0">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <section className="border-b border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-12">
            Questions We Get <span className="text-coral">Asked</span>
          </HeadlineBlock>
          <div className="space-y-4 max-w-[65ch]">
            <details className="border-2 border-hairline bg-ink shadow-brutal-sm group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What does Antek Automation do?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                We build AI voice agents, website chatbots, workflow automation and GEO for UK businesses. Capture the leads you miss, cut the admin that eats your evenings, and get named when buyers ask AI search for a business like yours.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink shadow-brutal-sm group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How much does it cost?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Voice agents from &pound;97/month, chatbots from &pound;57/month, workflow automation projects from &pound;250, and GEO audits from &pound;247. Setup fees are one-off and quoted up front. No long-term contracts.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink shadow-brutal-sm group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How quickly can you go live?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Voice and chat products are usually live within 24 to 48 hours. Larger automation builds take one to two weeks, depending on the integrations involved.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink shadow-brutal-sm group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do I need to be in Hampshire?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                No. We&rsquo;re based in Andover and happy to meet locally, but everything runs in the cloud. Most clients across the UK work with us entirely over video call and screen share.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink shadow-brutal-sm group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Will callers know they&rsquo;re talking to AI?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                About 1 in 20 do. The voice is natural and the agent handles routine calls end to end. When a conversation needs a human, it takes a message or routes it on. If automation isn&rsquo;t right for the job, we tell you.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink shadow-brutal-sm group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What is GEO and do I need it?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                GEO is Generative Engine Optimisation: making sure ChatGPT, Perplexity, Claude and Google&rsquo;s AI Overviews recommend you instead of a competitor. If buyers ask AI for a business like yours and you&rsquo;re not in the answer, you need it. We audit, fix and monitor.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink shadow-brutal-sm group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Are you tied into a contract?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                No long-term contracts and no lock-in. Monthly products are month to month.
              </div>
            </details>
          </div>
        </Container>
      </section>

      {/* ── FINAL CTA ── */}
      <QuickRecap items={[
        'We build AI voice agents, chatbots, workflow automation and GEO for UK businesses',
        'For businesses missing calls, losing website leads, drowning in admin, or invisible in AI search',
        'Voice from £97/mo, chatbots from £57/mo, automation from £250, GEO audits from £247 — no contracts, no lock-in',
        'Voice and chat products live within 24–48 hours',
        '<a href="/contact" class="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Book a free 30-min discovery call</a> to see which fits',
      ]} />

      <ResourcesCompliance links={[
        { text: 'ICO data protection guidance', url: 'https://ico.org.uk/for-organisations/guide-to-data-protection/', context: 'How UK law governs customer data collected by AI systems' },
        { text: 'Ofcom telecoms regulation', url: 'https://www.ofcom.org.uk/', context: 'UK regulator for communications services including AI call handling' },
        { text: 'Interactive voice response (IVR) overview', url: 'https://en.wikipedia.org/wiki/Interactive_voice_response', context: 'Background on automated phone answering technology' },
      ]} />

      <section className="bg-charcoal border-t-2 border-coral py-24 md:py-32">
        <Container>
          <HeadlineBlock className="mb-6">
            Want to <span className="text-coral">See It in Action?</span>
          </HeadlineBlock>
          <p className="text-lg md:text-xl text-body leading-relaxed mb-10 max-w-[60ch]">
            Try our demo voice agent right now — no signup needed. Or book a free 30-min discovery call and we'll show you exactly how it'd work for your business.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
            <a href="/contact">
              <Button variant="secondary">Book a free 30-min discovery call</Button>
            </a>
          </div>
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
