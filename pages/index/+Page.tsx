import { useState, useEffect, Suspense, lazy } from 'react';
import { Button } from '../../src/components/Button';
import { Card } from '../../src/components/Card';
import { Icon } from '../../src/components/Icon';
import { VoiceDemoButton } from '../../src/components/VoiceDemoButton';
import { CaseStudyCard } from '../../src/components/CaseStudyCard';
import { QuickRecap } from '../../src/components/QuickRecap';
import { ResourcesCompliance } from '../../src/components/ResourcesCompliance';
import { QuickForm } from '../../src/components/QuickForm';
import { TestimonialsStrip } from '../../src/components/TestimonialsStrip';
import { TrustStrip } from '../../src/components/TrustStrip';
import { openBookingPopup } from '../../src/components/BookingPopupCTA';
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
    <div className="bg-off-white">

      {/* ── HERO ── */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              AI AUTOMATION FOR UK SERVICE BUSINESSES
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              Every Unanswered Call Is a Missed Opportunity
            </h1>
            <p className="hero-description text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              We build AI that answers your calls, captures your leads, and books your appointments — so you can focus on the actual work.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
              <button
                type="button"
                onClick={() => openBookingPopup('hero-cta')}
                className="inline-block"
              >
                <Button variant="secondary">Book a free 30-min discovery call</Button>
              </button>
            </div>
            <p className="text-sm text-charcoal/70 mt-4 tracking-wide">
              AI voice agents from &pound;97/month &middot; Workflow automation from &pound;250 &middot; <a href="/pricing" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">See full pricing</a>
            </p>
            <TrustStrip className="mt-6" />
            <div className="mt-8 max-w-2xl">
              <QuickForm source="home-hero" pageTown="brand-hub" />
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS STRIP (illustrative case studies) ── */}
      <TestimonialsStrip limit={3} />

      {/* ── SNIPPET BAIT ── */}
      <section className="bg-off-white border-b-3 border-charcoal py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-6">
              What Is Antek Automation?
            </h2>
            <p className="snippet-bait text-lg text-charcoal leading-relaxed">
              Antek Automation is a UK-based AI automation agency specialising in AI voice agents, chatbots, n8n workflow automation, and Generative Engine Optimisation (GEO). Based in Andover, Hampshire, we help SMBs and service businesses automate calls, leads, and workflows &mdash; with transparent pricing, no offshore handoffs, and a certified Retell AI partnership.
            </p>
          </div>
        </div>
      </section>

      {/* ── PROBLEM / SOUND FAMILIAR? ── */}
      <section className="bg-muted-taupe border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              Sound Familiar?
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              You're on a job — up a ladder, under a sink, halfway through a client meeting — and the phone rings. You can't answer it. By the time you call back, they've already found someone else. That's a £2,000 job gone because you were busy doing the work you're actually good at.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Then there's the evenings. You finally sit down, and instead of switching off you're replying to enquiries, updating spreadsheets, chasing invoices, and trying to remember who you promised a quote to on Tuesday. Your business runs on your time, and there's never enough of it.
            </p>
            <p className="text-xl font-black text-charcoal">
              It doesn't have to be like that.
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO / THREE THINGS ── */}
      <section className="py-20 md:py-28" id="services">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              Three Things We Build. All of Them Save You Time and Money.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Voice Agents */}
            <Card hover>
              <Icon letter="V" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                AI Voice Agents
              </h3>
              <p className="text-charcoal leading-relaxed mb-4">
                An AI receptionist that picks up the phone when you can't. It answers questions, takes messages, captures caller details, and books appointments — in a natural, human-sounding voice. Available 24/7, including weekends and bank holidays.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                No more missed calls. No more lost leads. No more "sorry I missed you" voicemails that never get returned.
              </p>
              <a href="/services/ai-voice-assistants" aria-label="See how AI Voice Agents work">
                <Button variant="primary" className="w-full">See Voice Agents</Button>
              </a>
            </Card>

            {/* AI Chatbots */}
            <Card hover>
              <Icon letter="C" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                AI Chatbots
              </h3>
              <p className="text-charcoal leading-relaxed mb-4">
                A smart chat widget on your website that talks to visitors the moment they land. It answers their questions, qualifies them as leads, and books them straight into your calendar — without you lifting a finger.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Works while you sleep. Turns browsers into booked appointments.
              </p>
              <a href="/services/ai-chatbots" aria-label="See how AI Chatbots work">
                <Button variant="primary" className="w-full">See Chatbots</Button>
              </a>
            </Card>

            {/* Workflow Automation */}
            <Card hover>
              <Icon letter="A" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Workflow Automation
              </h3>
              <p className="text-charcoal leading-relaxed mb-4">
                We connect the tools you already use — your calendar, CRM, email, invoicing — and automate the repetitive tasks that eat your evenings. New enquiry comes in? It gets logged, acknowledged, and followed up automatically.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Less admin. Fewer mistakes. More time for the work that actually pays.
              </p>
              <a href="/services/workflow-automation" aria-label="See how Workflow Automation works">
                <Button variant="primary" className="w-full">See Automation</Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* ── AI RECEPTIONIST PROMO ── */}
      <section className="bg-peach border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
            NEW &middot; FROM &pound;97/MONTH
          </p>
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-charcoal mb-6">
            AI Receptionist &mdash; From &pound;97/Month
          </h2>
          <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-10 max-w-2xl mx-auto">
            Your phone answered 24/7. Callers screened. Appointments booked. Summaries sent. All
            while you focus on the actual work.
          </p>
          <a href="/ai-receptionist">
            <Button variant="primary">See How It Works</Button>
          </a>
        </div>
      </section>

      {/* ── HONESTY SECTION ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              What We Won't Tell You
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We're not going to tell you AI is magic. It isn't. It won't replace you, it won't run your business for you, and it won't fix a broken process — it'll just break it faster.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              What it <strong className="font-black">will</strong> do is handle the repetitive, time-consuming stuff that keeps you from doing your best work. Answer calls you'd otherwise miss. Respond to website visitors at 2am. Send follow-ups you keep forgetting. Book appointments without the back-and-forth.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              We build tools that do the boring bits brilliantly — so you can focus on the work that actually matters.
            </p>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF / WHO WE WORK WITH ── */}
      <section className="bg-soft-sage border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-6">
              Who We Work With
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
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
                className="bg-white border-3 border-charcoal shadow-brutal-sm p-4 text-center font-black text-sm uppercase tracking-wide text-charcoal"
              >
                {business}
              </div>
            ))}
          </div>

          <p className="text-center text-lg text-charcoal font-black">
            Based in <a href="/locations/hampshire" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Hampshire</a>. Work with businesses across the UK.
          </p>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="bg-off-white border-b-3 border-charcoal py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-charcoal mb-6">
              What Results Look Like
            </h2>
            <p className="text-xl md:text-2xl font-bold text-charcoal max-w-2xl mx-auto">
              Illustrative examples based on the types of outcomes our products are designed to deliver.
            </p>
          </div>

          <div className="space-y-0">
            {caseStudies.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <QuickRecap items={[
        'We build AI voice agents, chatbots, and workflow automation for UK service businesses',
        'For businesses missing calls, losing website leads, or drowning in admin',
        'From £57/month — no contracts, no lock-in',
        'Voice and chat products live within 24–48 hours',
        '<a href="/contact" class="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Book a free 15-min chat</a> to see which product fits your business',
      ]} />

      <ResourcesCompliance links={[
        { text: 'ICO data protection guidance', url: 'https://ico.org.uk/for-organisations/guide-to-data-protection/', context: 'How UK law governs customer data collected by AI systems' },
        { text: 'Ofcom telecoms regulation', url: 'https://www.ofcom.org.uk/', context: 'UK regulator for communications services including AI call handling' },
        { text: 'Interactive voice response (IVR) overview', url: 'https://en.wikipedia.org/wiki/Interactive_voice_response', context: 'Background on automated phone answering technology' },
      ]} />

      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Want to See It in Action?
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Try our demo voice agent right now — no signup needed. Or book a free 15-min chat and we'll show you exactly how it'd work for your business.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
            <a href="/contact">
              <Button variant="secondary">Book a free 15-min chat</Button>
            </a>
          </div>
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
