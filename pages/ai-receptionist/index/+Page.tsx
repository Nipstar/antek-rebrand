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
}

const faqs = [
  {
    q: 'How long does setup take?',
    a: 'Most customers are live within 24\u201348 hours. We scrape your website to build the knowledge base, you tell us your screening questions, and you forward your number. No forms. No faff.',
  },
  {
    q: 'Will callers know it\u2019s AI?',
    a: 'Most don\u2019t. The voice is natural, the conversation flows properly, and it doesn\u2019t sound like a robot reading a menu. Listen to the demo and judge for yourself.',
  },
  {
    q: 'What happens if someone asks something it can\u2019t answer?',
    a: 'It acknowledges the gap, takes a message, and flags it for you. No bluffing, no making things up, no awkward silences.',
  },
  {
    q: 'Can it handle different types of calls differently?',
    a: 'Yes. Emergency vs routine. New enquiry vs existing customer. Booking request vs general question. You set the rules, it follows them.',
  },
  {
    q: 'Does it integrate with my existing tools?',
    a: 'It works with most CRMs, calendars, and field service tools. If you\u2019re using something specific, ask us \u2014 we\u2019ll tell you straight whether it works.',
  },
  {
    q: 'What if I already have a voicemail or answering service?',
    a: 'You\u2019ll wonder why you kept it this long. Voicemail captures maybe 20% of callers. An answering service takes a message. This qualifies the lead, captures details, and books the appointment. Different league.',
  },
  {
    q: 'How much does it cost?',
    a: 'Plans start from \u00a397/month with setup from \u00a3249. 120 call minutes included per month, £0.18/min over. Book a quick call and we\u2019ll give you a straight answer based on your needs.',
  },
  {
    q: 'What support is included?',
    a: 'Standard queries are responded to within 24 hours. Critical incidents \u2014 such as the agent going offline during business hours \u2014 are responded to within 4 hours. Included across all plans.',
  },
]

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
              Every Missed Call Is a Customer Who <span className="text-coral">Found Someone Else</span>
            </HeadlineBlock>
            <p className="text-lg md:text-xl text-body leading-normal mb-8 mt-6 max-w-[60ch]">
              An AI receptionist that picks up when you can&rsquo;t. It screens callers, captures
              the details you need, and books them into your calendar &mdash; 24/7, including
              weekends and bank holidays. From &pound;97/month.
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
              Plans from &pound;97/month &middot; Setup from &pound;249 &middot; 120 call minutes included per month — higher plans add more minutes and features
            </p>
            <TrustStrip className="mt-6" />
          </div>
        </Container>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-16">
            Live in <span className="text-coral">24&ndash;48 Hours</span>. No Long Setup.
          </HeadlineBlock>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {[
              {
                h: 'Tell Us About Your Business',
                b: 'Share your website and phone number. We pull your services, hours, and service areas automatically.',
              },
              {
                h: 'Set Your Screening Logic',
                b: 'What questions should we ask? What qualifies a good lead for you? What\u2019s urgent vs routine? You set the rules. The AI follows them.',
              },
              {
                h: 'Forward Your Calls',
                b: 'Dial a short code or scan a QR. Takes 30 seconds. Your AI receptionist is live \u2014 answering calls, screening callers, and booking appointments while you get on with the actual work.',
              },
            ].map((step, i) => (
              <Card key={i} className="h-full">
                <Icon letter={String(i + 1).padStart(2, '0')} size="lg" mono />
                <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-6 mb-4">{step.h}</h3>
                <p className="text-body leading-normal">{step.b}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

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

      {/* ── PRICING INDICATOR ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-6">
            Simple, <span className="text-coral">Transparent Pricing</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-normal mb-10 max-w-[65ch]">
            Plans start from &pound;97/month. 120 call minutes included per month, £0.18/min over. No hidden fees. Setup from
            &pound;249. The exact cost depends on your call volume and what integrations you need
            &mdash; book a quick chat and we&rsquo;ll give you a straight answer.
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
        'An AI receptionist that answers every call, screens callers against your criteria, and books appointments 24/7',
        'For UK trades businesses, professional services, and healthcare practices missing calls during the working day',
        'From £97/month + £249 one-off setup — <a href="/pricing#ai-receptionist" class="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">see full pricing</a>',
        'Live in 24–48 hours — we pull your services from your website, you set the screening questions',
        '120 call minutes included per month — higher plans add more minutes and features; industry-specific setups available for trades, legal, healthcare, and more',
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
                  {faq.a}
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
