import { useState, Suspense, lazy } from 'react'
import {
  Zap,
  Droplets,
  Thermometer,
  Calculator,
  Scale,
  Stethoscope,
  Smile,
  Brain,
  Building2,
  type LucideIcon,
} from 'lucide-react'
import { Button } from '../../../src/components/Button'
import { Card } from '../../../src/components/Card'
import { Icon } from '../../../src/components/Icon'
import { Container } from '../../../src/components/Container'
import { HeadlineBlock } from '../../../src/components/HeadlineBlock'
import { VoiceDemoButton } from '../../../src/components/VoiceDemoButton'
import { QuickRecap } from '../../../src/components/QuickRecap'
import { ResourcesCompliance } from '../../../src/components/ResourcesCompliance'
import { RetellDemoCards } from '../../../src/components/RetellDemoCards'
import { TrustStrip } from '../../../src/components/TrustStrip'
import { openBookingPopup } from '../../../src/utils/bookingPopup'
import { getAllIndustries, type IndustryData } from '../../../src/data/aiReceptionist'
import { AnsweringComparisonTable } from '../../../src/components/AnsweringComparisonTable'
import { LinkedText } from '../../../src/components/LinkedText'
import { ReceptionistHowItWorks } from '../../../src/components/ReceptionistHowItWorks'
import { PRICES, PRICE_TEXT } from '../../../src/data/pricing'
import { faqs } from './faqs'

const LINK = 'underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors'

const VoiceChat = lazy(() =>
  import('../../../src/components/VoiceChat').then((m) => ({ default: m.VoiceChat }))
)

const iconMap: Record<IndustryData['iconName'], LucideIcon> = {
  Zap,
  Droplets,
  Thermometer,
  Calculator,
  Scale,
  Stethoscope,
  Smile,
  Brain,
  Building2,
}

const features = [
  {
    title: 'Answers Every Call, 24/7',
    body: 'Evenings, weekends, bank holidays, school runs, lunch breaks. It never calls in sick, never puts anyone on hold, and never sounds like it\u2019s reading from a script.',
  },
  {
    title: 'Screens and Qualifies Callers',
    body: 'It doesn\u2019t just take a message and hope for the best. It asks your questions, captures the details you need, and filters low-quality leads from serious enquiries \u2014 before you spend a second on them.',
  },
  {
    title: 'Books Appointments Into Your Calendar',
    body: 'Qualified caller? They get your booking link. Appointment lands in your calendar with full context \u2014 who they are, what they need, and why they called. No back-and-forth calls.',
  },
  {
    title: 'Sends You a Summary After Every Call',
    body: 'Missed the call? Doesn\u2019t matter. You get a full summary \u2014 caller name, what they wanted, what was discussed, and what action was taken. Read it when you\u2019re ready.',
  },
  {
    title: 'Knows Existing Customers From New Ones',
    body: 'Returning customer? It takes a message or transfers them. New enquiry? It runs your full screening process. No one gets the wrong experience.',
  },
]

export default function Page() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false)
  const industries = getAllIndustries()

  return (
    <div>
      {/* ── HERO ── */}
      <section className="border-b border-hairline">
        <Container className="py-20 md:py-28">
          <div className="max-w-4xl">
            <HeadlineBlock as="h1" kicker={<>AI RECEPTIONIST &bull; UK</>}>
              AI Receptionist for UK Businesses: <span className="text-coral">Every Call Answered, 24/7</span>
            </HeadlineBlock>
            <p className="font-display font-extrabold uppercase text-cream text-[clamp(1.5rem,3vw,2rem)] leading-[0.95] tracking-[-0.01em] mt-6 max-w-[40ch]">
              Every Missed Call Is a Customer Who <span className="text-coral">Found Someone Else</span>
            </p>
            <p className="text-lg md:text-xl text-body leading-normal mb-6 mt-6 max-w-[60ch]">
              An AI receptionist that picks up when you can&rsquo;t. It screens callers, captures
              the details you need, and books them into your calendar &mdash; 24/7, including
              weekends and bank holidays. From {PRICE_TEXT.receptionistMonthly}.
            </p>
            <p className="text-lg text-body leading-normal mb-8 max-w-[60ch]">
              Antek Automation&rsquo;s AI receptionist answers every call to your business 24/7, screens callers, captures their details and books appointments into your calendar. It&rsquo;s a virtual receptionist and call answering service for UK businesses, from {PRICE_TEXT.receptionistMonthly} with {PRICES.receptionist.starter.minutes} minutes included, and live within 24&ndash;48 hours. Built by a Certified Retell AI Partner based in Andover, Hampshire.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <a href="#demo">
                <Button variant="primary">Try the Demo</Button>
              </a>
              <Button variant="secondary" onClick={() => openBookingPopup('ai-receptionist-hero')}>
                Book a 30-min discovery call
              </Button>
            </div>
            <p className="text-sm text-muted mt-4 tracking-wide">
              Plans from {PRICE_TEXT.receptionistMonthly} &middot; Setup from &pound;{PRICES.receptionist.setupFrom} &middot; {PRICE_TEXT.receptionistMinutes} — higher plans add more minutes and features
            </p>
            <TrustStrip className="mt-6" />
          </div>
        </Container>
      </section>

      {/* ── HOW IT WORKS ── */}
      <ReceptionistHowItWorks />

      {/* ── WHAT IT DOES ── */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-16 max-w-[60ch]">
            Not a Voicemail. Not a Call Centre. An AI That Actually <span className="text-coral">Qualifies Your Leads</span>.
          </HeadlineBlock>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {features.map((f, i) => (
              <Card key={i} className="bg-charcoal h-full">
                <Icon letter={String(i + 1).padStart(2, '0')} size="lg" mono />
                <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-6 mb-4">{f.title}</h3>
                <p className="text-body leading-normal">{f.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── COMPARISON ── */}
      <section className="py-20 md:py-28 border-b border-hairline">
        <Container>
          <HeadlineBlock className="mb-6">
            AI Receptionist vs Virtual Receptionist vs <span className="text-coral">Call Answering Service</span>
          </HeadlineBlock>
          <div className="space-y-4 mb-12 max-w-[65ch]">
            <p className="text-lg text-body leading-normal">
              A human virtual receptionist or answering service puts a person on your line. That works until they&rsquo;re busy with another caller, and most charge by the call or the minute.
            </p>
            <p className="text-lg text-body leading-normal">
              An AI receptionist answers every call at once, 24/7, and books the appointment itself. Voicemail is free, but it captures maybe 20% of callers. Comparing options? Our <a href="/call-answering-service" className={LINK}>call answering service</a> page goes through it in more detail.
            </p>
          </div>
          <AnsweringComparisonTable />
        </Container>
      </section>

      {/* ── PRICING INDICATOR ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-6">
            Simple, <span className="text-coral">Transparent Pricing</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-normal mb-10 max-w-[65ch]">
            Plans start from {PRICE_TEXT.receptionistMonthly}. {PRICE_TEXT.receptionistMinutes}, {PRICE_TEXT.receptionistOverage}. No hidden fees. Setup from
            &pound;{PRICES.receptionist.setupFrom}. The exact cost depends on your call volume and what integrations you need
            &mdash; book a quick chat and we&rsquo;ll give you a straight answer. Every tier is on our <a href="/pricing#ai-receptionist" className={LINK}>AI receptionist pricing</a> page.
          </p>
          <a href="/contact">
            <Button variant="primary">Book a 30-Min Discovery Call</Button>
          </a>
        </Container>
      </section>

      {/* ── INDUSTRY GRID ── */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-4">
            Built for Businesses That <span className="text-coral">Can&rsquo;t Always Answer the Phone</span>
          </HeadlineBlock>
          <p className="text-lg text-body mb-16">Which is most of them, to be fair.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {industries.map((industry) => {
              const IconComp = iconMap[industry.iconName]
              return (
                <a
                  key={industry.slug}
                  href={`/ai-receptionist/${industry.slug}`}
                  className="block"
                >
                  <Card hover className="bg-charcoal h-full">
                    <div className="w-14 h-14 bg-ink border-2 border-coral shadow-brutal-sm flex items-center justify-center mb-5">
                      <IconComp className="w-7 h-7 text-coral" strokeWidth={2.5} />
                    </div>
                    <h3 className="font-display font-extrabold text-lg uppercase text-cream mb-3">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-body leading-normal mb-4">
                      {industry.gridDescription}
                    </p>
                    <p className="font-sans font-bold text-coral uppercase text-xs tracking-wide">
                      Learn More &rarr;
                    </p>
                  </Card>
                </a>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ── WHAT THIS ISN'T ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-10">
            What This <span className="text-coral">Isn&rsquo;t</span>
          </HeadlineBlock>
          <div className="space-y-6 max-w-[65ch]">
            <p className="text-lg text-body leading-normal">
              This isn&rsquo;t a chatbot bolted onto a phone line. It isn&rsquo;t a glorified
              voicemail that says &lsquo;leave a message after the tone.&rsquo; And it definitely
              isn&rsquo;t going to replace you.
            </p>
            <p className="text-lg text-body leading-normal">
              It&rsquo;s a phone system that actually works when you&rsquo;re not available. It
              answers in a natural, human-sounding voice. It asks the right questions. It captures
              what you need to follow up properly. And it books the good ones straight into your
              diary.
            </p>
            <p className="text-lg text-body leading-normal">
              You still run your business. You still talk to your customers. You just stop losing
              them because you were busy doing the work.
            </p>
          </div>
        </Container>
      </section>

      {/* ── DEMO ── */}
      <div id="demo">
        <RetellDemoCards
          subhead="Tap any industry and talk to a real AI voice agent right in your browser — pick one, give it a go, then imagine it on your number."
        />
      </div>

      <QuickRecap items={[
        'An AI receptionist and call answering service for UK businesses: answers every call, screens callers against your criteria, and books appointments 24/7',
        'For UK trades businesses, professional services, property managers and healthcare practices missing calls during the working day or out of hours',
        `From ${PRICE_TEXT.receptionistMonthly} + ${PRICE_TEXT.receptionistSetup} — <a href="/pricing#ai-receptionist" class="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">see full pricing</a>`,
        'Live in 24–48 hours — we pull your services from your website, you set the screening questions',
        `${PRICE_TEXT.receptionistMinutes} (${PRICE_TEXT.receptionistOverage}) — higher plans add more minutes and features; industry-specific setups available for trades, legal, healthcare, and more`,
      ]} />

      <ResourcesCompliance links={[
        { text: 'ICO call recording and data protection', url: 'https://ico.org.uk/for-organisations/guide-to-data-protection/', context: 'UK law on handling caller data and recording conversations' },
        { text: 'Ofcom telecoms guidance', url: 'https://www.ofcom.org.uk/phones-telecoms-and-internet', context: 'UK regulator for business telecommunications' },
        { text: 'Virtual receptionist overview', url: 'https://en.wikipedia.org/wiki/Virtual_receptionist', context: 'Background on automated reception technology' },
      ]} />

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-10">
            Frequently Asked <span className="text-coral">Questions</span>
          </HeadlineBlock>
          <div className="space-y-4 max-w-[65ch]">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="border-2 border-hairline bg-ink group"
              >
                <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center gap-4">
                  <span>{faq.q}</span>
                  <span className="text-coral text-2xl group-open:rotate-45 transition-transform flex-shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                  <LinkedText text={faq.a} links={faq.links} />
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-charcoal border-t-2 border-coral py-24 md:py-32">
        <Container>
          <HeadlineBlock className="mb-6">
            Stop Losing Customers to the <span className="text-coral">Firm That Answered First</span>
          </HeadlineBlock>
          <p className="text-lg md:text-xl text-body leading-normal mb-10 max-w-[65ch]">
            Try the demo. Book a 30-minute discovery call. We&rsquo;ll show you exactly how it would work for
            your business.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
            <a href="/contact">
              <Button variant="secondary">Book a 30-Min Discovery Call</Button>
            </a>
          </div>
        </Container>
      </section>

      {isVoiceChatOpen && (
        <Suspense fallback={null}>
          <VoiceChat isOpen={isVoiceChatOpen} onClose={() => setIsVoiceChatOpen(false)} />
        </Suspense>
      )}
    </div>
  )
}
