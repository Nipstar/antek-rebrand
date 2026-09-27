import { useState, Suspense, lazy } from 'react'
import { Button } from '../../src/components/Button'
import { Card } from '../../src/components/Card'
import { Container } from '../../src/components/Container'
import { HeadlineBlock } from '../../src/components/HeadlineBlock'
import { VoiceDemoButton } from '../../src/components/VoiceDemoButton'
import { QuickRecap } from '../../src/components/QuickRecap'
import { RetellDemoCards } from '../../src/components/RetellDemoCards'
import { TrustStrip } from '../../src/components/TrustStrip'
import { AnsweringComparisonTable } from '../../src/components/AnsweringComparisonTable'
import { ReceptionistHowItWorks } from '../../src/components/ReceptionistHowItWorks'
import { LinkedText } from '../../src/components/LinkedText'
import { openBookingPopup } from '../../src/utils/bookingPopup'
import { getAllIndustries } from '../../src/data/aiReceptionist'
import { PRICES, PRICE_TEXT } from '../../src/data/pricing'
import { faqs } from './faqs'

const VoiceChat = lazy(() =>
  import('../../src/components/VoiceChat').then((m) => ({ default: m.VoiceChat }))
)

const LINK = 'underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors'

export default function Page() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false)
  const industries = getAllIndustries()

  return (
    <div>
      {/* ── HERO ── */}
      <section className="bg-ink border-b border-hairline">
        <Container className="py-20 md:py-28">
          <div className="max-w-4xl">
            <HeadlineBlock as="h1" kicker={<>CALL ANSWERING SERVICE &bull; UK</>}>
              AI Call Answering Service <span className="text-coral">for UK Businesses</span>
            </HeadlineBlock>
            <p className="font-display font-extrabold uppercase text-cream text-[clamp(1.5rem,3vw,2rem)] leading-[0.95] tracking-[-0.01em] mt-6 max-w-[40ch]">
              A virtual receptionist that never takes a day off, <span className="text-coral">from {PRICE_TEXT.receptionistMonthly}.</span>
            </p>
            <p className="text-lg md:text-xl text-body leading-normal mb-8 mt-6 max-w-[60ch]">
              Antek Automation&rsquo;s AI call answering service answers every call to your business 24/7, captures the caller&rsquo;s details and books appointments into your calendar. It&rsquo;s built for UK trades and service businesses, costs from {PRICE_TEXT.receptionistMonthly} plus setup, and can be live within 24&ndash;48 hours.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <a href="#demo">
                <Button variant="primary">Hear It Answer a Call</Button>
              </a>
              <Button variant="secondary" onClick={() => openBookingPopup('call-answering-hero')}>
                Book a 30-min discovery call
              </Button>
            </div>
            <p className="text-sm text-muted mt-4 tracking-wide">
              From {PRICE_TEXT.receptionistMonthly} &middot; {PRICE_TEXT.receptionistMinutes} &middot; Setup from &pound;{PRICES.receptionist.setupFrom} &middot; Certified Retell AI Partner
            </p>
            <TrustStrip className="mt-6" />
          </div>
        </Container>
      </section>

      {/* ── WHAT IT IS ── */}
      <section className="py-20 md:py-28 border-b border-hairline">
        <Container>
          <HeadlineBlock className="mb-8">
            What Is a <span className="text-coral">Call Answering Service?</span>
          </HeadlineBlock>
          <div className="space-y-6 text-lg text-body leading-normal max-w-[65ch]">
            <p>
              A call answering service answers your business calls when you can&rsquo;t, takes the caller&rsquo;s details and passes them on to you.
            </p>
            <p>
              Let&rsquo;s be upfront: ours is an AI answering service, not a human call centre. There&rsquo;s no team in an office picking up your line. An AI voice agent answers, in a natural voice, using what it&rsquo;s been told about your business.
            </p>
            <p>
              That&rsquo;s the point. It picks up on the first ring, it can take several calls at once, it asks your questions every time, and it books the job rather than just taking a message. You get a summary of every call.
            </p>
            <p>
              If a caller needs a person, it takes a message or passes the call on. It won&rsquo;t pretend to be human if someone asks. For the full product detail, see our <a href="/ai-receptionist" className={LINK}>AI receptionist</a> page.
            </p>
          </div>
        </Container>
      </section>

      {/* ── HOW IT WORKS (shared with /ai-receptionist) ── */}
      <ReceptionistHowItWorks />

      {/* ── AI VS HUMAN ── */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-6">
            AI vs Human <span className="text-coral">Answering Service</span>
          </HeadlineBlock>
          <div className="space-y-4 mb-12 max-w-[65ch]">
            <p className="text-lg text-body leading-normal">
              If you&rsquo;re comparing answering services, these are the differences that matter to a small business: when it covers, how you pay, and whether the caller ends up booked in or just on a list to call back.
            </p>
            <p className="text-lg text-body leading-normal">
              A human service is good at judgement calls. The AI is better at volume, consistency and cost you can predict.
            </p>
          </div>
          <AnsweringComparisonTable />
        </Container>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" className="py-20 md:py-28 border-b border-hairline">
        <Container>
          <HeadlineBlock className="mb-6">
            Call Answering <span className="text-coral">Pricing</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-normal mb-10 max-w-[65ch]">
            A fixed monthly fee with minutes included, so you know the bill before the month starts. All prices ex-VAT. Monthly plans roll month to month with {PRICES.noticeDays} days&rsquo; notice.
          </p>
          <div className="overflow-x-auto mb-10">
            <table className="w-full border-2 border-hairline text-left text-sm">
              <thead>
                <tr className="bg-coral text-ink">
                  <th scope="col" className="p-4 font-sans font-bold uppercase border-r border-hairline">Plan</th>
                  <th scope="col" className="p-4 font-sans font-bold uppercase border-r border-hairline">Monthly</th>
                  <th scope="col" className="p-4 font-sans font-bold uppercase border-r border-hairline">Minutes included</th>
                  <th scope="col" className="p-4 font-sans font-bold uppercase">What you get</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-hairline bg-ink">
                  <th scope="row" className="p-4 font-sans font-bold text-cream border-r border-hairline uppercase text-xs">Starter</th>
                  <td className="p-4 text-body border-r border-hairline">{PRICE_TEXT.receptionistMonthly}</td>
                  <td className="p-4 text-body border-r border-hairline">{PRICES.receptionist.starter.minutes}, then {PRICE_TEXT.receptionistOverage}</td>
                  <td className="p-4 text-body">Call answering, screening, summaries</td>
                </tr>
                <tr className="border-t border-hairline bg-charcoal">
                  <th scope="row" className="p-4 font-sans font-bold text-cream border-r border-hairline uppercase text-xs">Standard</th>
                  <td className="p-4 text-body border-r border-hairline">{PRICE_TEXT.receptionistStandardMonthly}</td>
                  <td className="p-4 text-body border-r border-hairline">{PRICES.receptionist.standard.minutes}, then {PRICE_TEXT.receptionistOverage}</td>
                  <td className="p-4 text-body">Starter plus CRM and API integrations</td>
                </tr>
                <tr className="border-t border-hairline bg-ink">
                  <th scope="row" className="p-4 font-sans font-bold text-cream border-r border-hairline uppercase text-xs">Pro</th>
                  <td className="p-4 text-body border-r border-hairline">Contact us</td>
                  <td className="p-4 text-body border-r border-hairline">Custom</td>
                  <td className="p-4 text-body">Standard plus workflow automations for complex call flows</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-body leading-normal mb-8 max-w-[65ch]">
            One-off setup from &pound;{PRICES.receptionist.setupFrom} on every plan. Full detail on our <a href="/pricing#ai-receptionist" className={LINK}>AI receptionist pricing</a> page.
          </p>
          <Button variant="primary" onClick={() => openBookingPopup('call-answering-pricing')}>
            Book a 30-min discovery call
          </Button>
        </Container>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className="bg-ink border-b border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-4">
            Who Uses Our <span className="text-coral">Answering Service</span>
          </HeadlineBlock>
          <p className="text-lg text-body mb-12 max-w-[65ch]">
            Businesses where the person who should answer the phone is usually busy doing the work. Each has its own setup, with screening questions that fit the trade.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {industries.map((industry) => (
              <a key={industry.slug} href={`/ai-receptionist/${industry.slug}`} className="block">
                <Card hover className="bg-charcoal h-full !p-6 md:!p-8">
                  <h3 className="font-display font-extrabold text-lg uppercase text-cream mb-3">
                    Answering service for {industry.name.toLowerCase()}
                  </h3>
                  <p className="text-sm text-body leading-normal">{industry.gridDescription}</p>
                </Card>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* ── DEMO ── */}
      <div id="demo">
        <RetellDemoCards
          subhead="Tap an industry and talk to a real AI voice agent in your browser. This is what your callers would hear."
        />
      </div>

      <QuickRecap items={[
        'An AI call answering service for UK businesses: every call answered 24/7, details captured, appointments booked',
        'An AI answering service, not a human call centre — it answers several calls at once and follows your screening questions every time',
        `From ${PRICE_TEXT.receptionistMonthly} with ${PRICES.receptionist.starter.minutes} minutes included, ${PRICE_TEXT.receptionistOverage}, ${PRICE_TEXT.receptionistSetup} — <a href="/pricing#ai-receptionist" class="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">see full pricing</a>`,
        `Live within ${PRICES.receptionist.goLive}; built by Antek Automation, a Certified Retell AI Partner based in Andover, Hampshire`,
        'Evenings, weekends and bank holidays covered — <a href="/out-of-hours-call-answering" class="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">out of hours call answering</a>',
      ]} />

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-10">
            Call Answering <span className="text-coral">Questions</span>
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
            Every Call Answered. <span className="text-coral">Starting This Week.</span>
          </HeadlineBlock>
          <p className="text-lg md:text-xl text-body leading-normal mb-10 max-w-[65ch]">
            Talk to the demo, then book a 30-minute call. We&rsquo;ll tell you straight whether it fits your business.
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
