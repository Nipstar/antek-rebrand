import { useState, Suspense, lazy } from 'react'
import { Button } from './Button'
import { Card } from './Card'
import { Icon } from './Icon'
import { Container } from './Container'
import { Eyebrow } from './Eyebrow'
import { VoiceDemoButton } from './VoiceDemoButton'
import { RetellDemoCards } from './RetellDemoCards'
import { QuickRecap } from './QuickRecap'
import { ResourcesCompliance } from './ResourcesCompliance'
import { HeadlineBlock } from './HeadlineBlock'
import type { IndustryData } from '../data/aiReceptionist'
import { getIndustryBySlug } from '../data/aiReceptionist'
import { PRICES, PRICE_TEXT } from '../data/pricing'

const VoiceChat = lazy(() => import('./VoiceChat').then((m) => ({ default: m.VoiceChat })))

// Map an AI-receptionist industry slug to its matching Retell orb demo(s).
const ORB_DEMOS: Record<string, string[]> = {
  plumbers: ['heating'],
  hvac: ['hvac'],
  electricians: ['electrical'],
  lawyers: ['lawyer', 'legal'],
}

interface Props {
  industry: IndustryData
}

export function AIReceptionistIndustryPage({ industry }: Props) {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false)
  const orbKeys = ORB_DEMOS[industry.slug]

  const related = industry.alsoPopularWith
    .map((slug) => getIndustryBySlug(slug))
    .filter((i): i is IndustryData => !!i)

  return (
    <div>
      {/* ── HERO ── */}
      <section className="bg-ink border-b border-hairline py-20 md:py-28">
        <Container>
          <div className="max-w-4xl">
            <Eyebrow className="mb-4">{industry.heroEyebrow}</Eyebrow>
            <HeadlineBlock as="h1" className="mb-6">
              {industry.heroH1}
            </HeadlineBlock>
            <p className="text-lg md:text-xl text-body leading-relaxed mb-8 max-w-[60ch]">
              {industry.heroSubhead}
            </p>
            <p className="text-lg text-body leading-relaxed mb-8 max-w-[60ch]">
              {industry.answerBlock}
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
              <a href="/contact">
                <Button variant="secondary">Book a 30-Min Discovery Call</Button>
              </a>
            </div>
            <p className="text-sm text-muted mt-4 tracking-wide">
              Plans from {PRICE_TEXT.receptionistMonthly} &middot; Setup from &pound;{PRICES.receptionist.setupFrom}
            </p>
          </div>
        </Container>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-10">
            {industry.problemH2}
          </HeadlineBlock>
          <div className="max-w-[65ch]">
            {industry.problemParagraphs.map((p, i) => (
              <p key={i} className="text-lg text-body leading-relaxed mb-6">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* ── BEFORE/AFTER ── */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-12">
            Before vs <span className="text-coral">After</span>
          </HeadlineBlock>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Card className="bg-charcoal h-full">
              <Eyebrow tone="muted" className="mb-4">
                Without AI Receptionist
              </Eyebrow>
              <p className="text-lg text-body leading-relaxed">{industry.beforeAfter.without}</p>
            </Card>
            <Card className="h-full">
              <Eyebrow className="mb-4">With AI Receptionist</Eyebrow>
              <p className="text-lg text-body leading-relaxed">{industry.beforeAfter.with}</p>
            </Card>
          </div>
        </Container>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-4">
            How It <span className="text-coral">Works</span>
          </HeadlineBlock>
          <p className="text-lg text-body mb-16 max-w-[60ch]">Live in 24&ndash;48 hours. No forms. No faff.</p>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {industry.howItWorks.map((step, i) => (
              <Card key={i} className="h-full">
                <Icon letter={String(i + 1).padStart(2, '0')} size="lg" mono />
                <p className="text-body leading-relaxed mt-6">{step}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHAT IT CAPTURES ── */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-10">
            What It <span className="text-coral">Captures</span> on Every Call
          </HeadlineBlock>
          <ul className="space-y-4 max-w-[65ch]">
            {industry.captures.map((c, i) => (
              <li
                key={i}
                className="bg-charcoal border-2 border-hairline p-5 text-body font-bold flex items-start gap-4"
              >
                <span className="text-coral font-display font-extrabold text-xl leading-none mt-0.5">&rarr;</span>
                <span className="leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* ── PRICING + INTEGRATIONS ── */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Card className="h-full">
              <Icon letter="01" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                Simple Pricing
              </h3>
              <p className="text-body leading-relaxed mb-4">
                Plans from {PRICE_TEXT.receptionistMonthly}. Setup from &pound;{PRICES.receptionist.setupFrom}. {PRICE_TEXT.receptionistMinutes}, {PRICE_TEXT.receptionistOverage}. No hidden
                fees.
              </p>
              <a href="/contact">
                <Button variant="primary" className="w-full">
                  Book a 30-Min Discovery Call
                </Button>
              </a>
            </Card>
            <Card className="h-full">
              <Icon letter="02" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                Integrations
              </h3>
              <p className="text-body leading-relaxed">{industry.integrations}</p>
            </Card>
          </div>
        </Container>
      </section>

      {/* ── DEMO (live Retell voice orbs) ── */}
      <div id="demo">
        <RetellDemoCards
          industries={orbKeys}
          subhead="Tap a card and talk to a real AI voice agent right in your browser — the same kind we build for your business."
        />
      </div>

      {/* ── ALSO POPULAR WITH ── */}
      {related.length > 0 && (
        <section className="py-20 md:py-28">
          <Container>
            <HeadlineBlock className="mb-10">
              Also <span className="text-coral">Popular With</span>
            </HeadlineBlock>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {related.map((r, i) => (
                <a key={r.slug} href={`/ai-receptionist/${r.slug}`} className="block">
                  <Card hover className="h-full">
                    <Icon letter={String(i + 1).padStart(2, '0')} size="md" mono />
                    <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-4 mb-3">{r.name}</h3>
                    <p className="text-body leading-relaxed mb-4">{r.gridDescription}</p>
                    <p className="font-sans font-bold text-coral uppercase text-sm tracking-wide">
                      Learn More &rarr;
                    </p>
                  </Card>
                </a>
              ))}
              <a href="/call-answering-service" className="block">
                <Card hover className="h-full">
                  <Icon letter={String(related.length + 1).padStart(2, '0')} size="md" mono />
                  <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-4 mb-3">Call Answering Service</h3>
                  <p className="text-body leading-relaxed mb-4">
                    Comparing answering services? See how our AI call answering service stacks up against a human one.
                  </p>
                  <p className="font-sans font-bold text-coral uppercase text-sm tracking-wide">
                    Compare Answering Services &rarr;
                  </p>
                </Card>
              </a>
              <a href="/out-of-hours-call-answering" className="block">
                <Card hover className="h-full">
                  <Icon letter={String(related.length + 2).padStart(2, '0')} size="md" mono />
                  <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-4 mb-3">Out of Hours Call Answering</h3>
                  <p className="text-body leading-relaxed mb-4">
                    Evenings, weekends and bank holidays covered, with urgent calls flagged.
                  </p>
                  <p className="font-sans font-bold text-coral uppercase text-sm tracking-wide">
                    See Out of Hours Cover &rarr;
                  </p>
                </Card>
              </a>
              <a href="/ai-receptionist" className="block">
                <Card hover className="h-full">
                  <Icon letter={String(related.length + 3).padStart(2, '0')} size="md" mono />
                  <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-4 mb-3">All Industries</h3>
                  <p className="text-body leading-relaxed mb-4">
                    See every industry we build AI receptionists for.
                  </p>
                  <p className="font-sans font-bold text-coral uppercase text-sm tracking-wide">
                    See All &rarr;
                  </p>
                </Card>
              </a>
            </div>
          </Container>
        </section>
      )}

      <QuickRecap items={[
        `AI receptionist built specifically for ${industry.name} — answers calls, screens callers, and books appointments 24/7`,
        `For ${industry.name.toLowerCase()} who miss calls when they're on jobs or out of hours`,
        `From ${PRICE_TEXT.receptionistMonthly} + ${PRICE_TEXT.receptionistSetup} — <a href="/pricing#ai-receptionist" class="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">see full pricing</a>`,
        'Live in 24–48 hours — configure from your website, set your screening questions, forward your number',
        `${PRICE_TEXT.receptionistMinutes} — higher plans add more minutes and features; handles emergency vs routine calls differently based on your rules`,
      ]} />

      <ResourcesCompliance links={[
        { text: 'ICO call recording guidance', url: 'https://ico.org.uk/for-organisations/guide-to-data-protection/', context: 'UK law on handling caller data and call recordings' },
        { text: 'Ofcom telecoms guidance', url: 'https://www.ofcom.org.uk/phones-telecoms-and-internet', context: 'UK regulator for business phone services' },
        { text: 'Virtual receptionist overview', url: 'https://en.wikipedia.org/wiki/Virtual_receptionist', context: 'Background on automated reception technology' },
      ]} />

      {/* ── FAQ ── */}
      <section className="border-t border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-10">
            Frequently Asked <span className="text-coral">Questions</span>
          </HeadlineBlock>
          <div className="space-y-4 max-w-[65ch]">
            {industry.faqs.map((faq, i) => (
              <details
                key={i}
                className="border-2 border-hairline bg-ink group"
              >
                <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center gap-4">
                  <span>{faq.question}</span>
                  <span className="text-coral text-2xl group-open:rotate-45 transition-transform flex-shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-charcoal border-t-2 border-coral py-24 md:py-32">
        <Container>
          <div className="max-w-4xl">
            <HeadlineBlock className="mb-6">
              {industry.bottomCtaH2}
            </HeadlineBlock>
            <p className="text-lg md:text-xl text-body leading-relaxed mb-10 max-w-[60ch]">
              {industry.bottomCtaSubhead}
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
              <a href="/contact">
                <Button variant="secondary">Book a 30-Min Discovery Call</Button>
              </a>
            </div>
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
