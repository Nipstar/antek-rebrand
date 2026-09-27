import { useState, Suspense, lazy } from 'react'
import { Button } from '../../src/components/Button'
import { Card } from '../../src/components/Card'
import { Icon } from '../../src/components/Icon'
import { Container } from '../../src/components/Container'
import { HeadlineBlock } from '../../src/components/HeadlineBlock'
import { VoiceDemoButton } from '../../src/components/VoiceDemoButton'
import { QuickRecap } from '../../src/components/QuickRecap'
import { TrustStrip } from '../../src/components/TrustStrip'
import { LinkedText } from '../../src/components/LinkedText'
import { openBookingPopup } from '../../src/utils/bookingPopup'
import { PRICES, PRICE_TEXT } from '../../src/data/pricing'
import { faqs } from './faqs'

const VoiceChat = lazy(() =>
  import('../../src/components/VoiceChat').then((m) => ({ default: m.VoiceChat }))
)

const LINK = 'underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors'

const URGENT_STEPS = [
  {
    h: 'It answers straight away',
    b: 'First ring, whatever the time. The caller talks to a calm, natural voice instead of your voicemail greeting.',
  },
  {
    h: 'It checks against your rules',
    b: 'You decide what counts as urgent: a burst pipe, no heating, a lockout, a tenant with water coming through the ceiling. It asks the questions that tell the difference.',
  },
  {
    h: 'You get a text',
    b: 'Anything urgent is sent to your mobile by SMS straight away, with who called, where they are and what\u2019s wrong. Everything else is logged with full details for the morning.',
  },
  {
    h: 'You get a summary',
    b: 'Every call ends with a summary: who rang, what they needed, what was booked and what’s waiting for you.',
  },
]

const AUDIENCES = [
  {
    title: 'Trades',
    body: 'Plumbers, electricians and heating engineers get their most urgent calls when they’re off the tools. Emergencies get flagged; the rest get booked in.',
    links: [
      { label: 'Plumbers', href: '/ai-receptionist/plumbers' },
      { label: 'Electricians', href: '/ai-receptionist/electricians' },
      { label: 'HVAC engineers', href: '/ai-receptionist/hvac' },
    ],
  },
  {
    title: 'Property management',
    body: 'Tenants report leaks and boiler failures at 9pm, not 9am. Repairs get logged with access details, and genuine emergencies get flagged.',
    links: [{ label: 'Property managers and letting agents', href: '/ai-receptionist/property-management' }],
  },
  {
    title: 'Legal',
    body: 'Someone who needs a solicitor often calls the evening it happens. Capture the enquiry and book the consultation before they ring a firm with longer hours.',
    links: [{ label: 'Solicitors and law firms', href: '/ai-receptionist/lawyers' }],
  },
]

export default function Page() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false)

  return (
    <div>
      {/* ── HERO ── */}
      <section className="bg-ink border-b border-hairline">
        <Container className="py-20 md:py-28">
          <div className="max-w-4xl">
            <HeadlineBlock as="h1" kicker={<>OUT OF HOURS &bull; EVENINGS &bull; WEEKENDS &bull; BANK HOLIDAYS</>}>
              Out of Hours Call Answering, <span className="text-coral">24/7</span>
            </HeadlineBlock>
            <p className="text-lg md:text-xl text-body leading-normal mb-6 mt-6 max-w-[60ch]">
              Your phone doesn&rsquo;t stop ringing at 5pm. Your customers&rsquo; problems don&rsquo;t either.
            </p>
            <p className="text-lg text-body leading-normal mb-8 max-w-[60ch]">
              Antek Automation&rsquo;s out of hours call answering service uses AI to answer your business calls on evenings, weekends and bank holidays. It captures the caller&rsquo;s details, books appointments and texts you about urgent jobs straight away. It&rsquo;s the same 24/7 service as daytime, from {PRICE_TEXT.receptionistMonthly}, with no out-of-hours premium.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
              <Button variant="secondary" onClick={() => openBookingPopup('out-of-hours-hero')}>
                Book a 30-min discovery call
              </Button>
            </div>
            <TrustStrip className="mt-6" />
          </div>
        </Container>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className="py-20 md:py-28 border-b border-hairline">
        <Container>
          <HeadlineBlock className="mb-8">
            Why Out-of-Hours Calls <span className="text-coral">Matter</span>
          </HeadlineBlock>
          <div className="space-y-6 text-lg text-body leading-normal max-w-[65ch]">
            <p>
              Plenty of enquiries arrive after 5pm. People get home, notice the leak, find the damp patch, or finally have ten minutes to ring round for quotes.
            </p>
            <p>
              If they get voicemail, most won&rsquo;t leave a message. They ring the next business on the list. By the time you call back in the morning, the job&rsquo;s gone.
            </p>
            <p>
              Out of hours call answering means every one of those calls is picked up, sorted into urgent and routine, and ready for you when you start.
            </p>
          </div>
        </Container>
      </section>

      {/* ── WHAT HAPPENS TO AN URGENT CALL ── */}
      <section className="bg-ink border-b border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-6">
            What Happens to an <span className="text-coral">Urgent Call</span>
          </HeadlineBlock>
          <p className="text-lg text-body mb-12 max-w-[65ch]">
            You set the rules once. The AI follows them on every call, at any hour.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {URGENT_STEPS.map((step, i) => (
              <Card key={step.h} className="bg-charcoal h-full !p-6 md:!p-8">
                <Icon letter={String(i + 1).padStart(2, '0')} size="md" mono />
                <h3 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-3">{step.h}</h3>
                <p className="text-body leading-normal">{step.b}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHO USES IT ── */}
      <section className="py-20 md:py-28 border-b border-hairline">
        <Container>
          <HeadlineBlock className="mb-12">
            Who Uses Out of Hours <span className="text-coral">Call Answering</span>
          </HeadlineBlock>
          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {AUDIENCES.map((a) => (
              <Card key={a.title} className="h-full !p-6 md:!p-8">
                <h3 className="font-display font-extrabold text-xl uppercase text-cream mb-3">{a.title}</h3>
                <p className="text-body leading-normal mb-4">{a.body}</p>
                <ul className="space-y-2">
                  {a.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className={`${LINK} font-bold text-cream text-sm`}>
                        AI receptionist for {l.label.toLowerCase()} &rarr;
                      </a>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── PRICING ── */}
      <section className="bg-ink border-b border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-6">
            Out of Hours <span className="text-coral">Pricing</span>
          </HeadlineBlock>
          <div className="space-y-6 text-lg text-body leading-normal max-w-[65ch] mb-10">
            <p>
              There&rsquo;s no separate out-of-hours plan. The same service answers day and night.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-coral font-bold text-lg leading-none mt-0.5 shrink-0">&bull;</span>
                <span>Starter: {PRICE_TEXT.receptionistMonthly}, {PRICES.receptionist.starter.minutes} minutes included</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-coral font-bold text-lg leading-none mt-0.5 shrink-0">&bull;</span>
                <span>Standard: {PRICE_TEXT.receptionistStandardMonthly}, {PRICES.receptionist.standard.minutes} minutes included, plus CRM and API integrations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-coral font-bold text-lg leading-none mt-0.5 shrink-0">&bull;</span>
                <span>Extra minutes {PRICE_TEXT.receptionistOverage}; one-off setup from &pound;{PRICES.receptionist.setupFrom}; all prices ex-VAT</span>
              </li>
            </ul>
            <p>
              Want daytime overflow covered too? See our <a href="/call-answering-service" className={LINK}>call answering service</a>, or the full <a href="/pricing#ai-receptionist" className={LINK}>AI receptionist pricing</a>.
            </p>
          </div>
          <Button variant="primary" onClick={() => openBookingPopup('out-of-hours-pricing')}>
            Book a 30-min discovery call
          </Button>
        </Container>
      </section>

      <QuickRecap items={[
        'Out of hours call answering by AI: evenings, weekends and bank holidays, 24/7',
        'Urgent calls are sent to you by SMS, based on rules you set; routine calls are logged and booked for the morning',
        'For trades, property managers, solicitors and anyone whose phone keeps ringing after 5pm',
        `From ${PRICE_TEXT.receptionistMonthly} with ${PRICES.receptionist.starter.minutes} minutes included, no out-of-hours premium — <a href="/pricing#ai-receptionist" class="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">see full pricing</a>`,
        `Live within ${PRICES.receptionist.goLive}; built by Antek Automation, a Certified Retell AI Partner based in Andover, Hampshire`,
      ]} />

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-10">
            Out of Hours <span className="text-coral">Questions</span>
          </HeadlineBlock>
          <div className="space-y-4 max-w-[65ch]">
            {faqs.map((faq, i) => (
              <details key={i} className="border-2 border-hairline bg-ink group">
                <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center gap-4">
                  <span>{faq.q}</span>
                  <span className="text-coral text-2xl group-open:rotate-45 transition-transform flex-shrink-0">+</span>
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
            Stop Finding Tomorrow&rsquo;s Jobs <span className="text-coral">in Last Night&rsquo;s Voicemail</span>
          </HeadlineBlock>
          <p className="text-lg md:text-xl text-body leading-normal mb-10 max-w-[65ch]">
            Talk to the demo, then book a 30-minute call. We&rsquo;ll set it up around your hours and your idea of urgent.
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
