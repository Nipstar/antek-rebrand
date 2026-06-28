import { Button } from '../../../src/components/Button'
import { Card } from '../../../src/components/Card'
import { Icon } from '../../../src/components/Icon'
import { Container } from '../../../src/components/Container'
import { Eyebrow } from '../../../src/components/Eyebrow'
import { HeadlineBlock } from '../../../src/components/HeadlineBlock'

const services = [
  {
    letter: 'V',
    name: 'AI Voice Assistants',
    slug: 'ai-voice-assistants',
    description:
      'Phone agents that answer every call 24/7, qualify leads, book appointments, and send you a summary — all without hiring anyone.',
    price: 'From £249 setup + £97/month',
  },
  {
    letter: 'C',
    name: 'AI Chatbots',
    slug: 'ai-chatbots',
    description:
      "Website chat that handles enquiries, qualifies prospects, and books appointments around the clock — even when you're asleep.",
    price:   'From £149 setup + £57/month',
  },
  {
    letter: 'A',
    name: 'Workflow Automation',
    slug: 'workflow-automation',
    description:
      "Connect your tools. Eliminate repetitive tasks. From invoice chasing to CRM updates — let AI handle the busywork so you don't have to.",
    price: 'From £250 one-off',
  },
  {
    letter: 'G',
    name: 'GEO Audit',
    slug: 'geo-audit',
    description:
      'A full audit of how visible your business is in AI-generated answers from ChatGPT, Claude, Gemini, and Perplexity — with a clear action plan to fix it.',
    price: 'From £247 one-time',
  },
]

export default function Page() {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="bg-ink border-b border-hairline py-20 md:py-28">
        <Container>
          <div className="max-w-4xl">
            <Eyebrow className="mb-4">
              SERVICES &bull; AI AUTOMATION
            </Eyebrow>
            <HeadlineBlock as="h1" className="mb-6">
              <span className="text-coral">AI Automation Services</span> for UK Businesses
            </HeadlineBlock>
            <p className="text-lg md:text-xl text-body leading-relaxed mb-8 max-w-[60ch]">
              We build AI voice agents, chatbots, and workflow automation that work 24/7 — capturing leads, booking appointments, and handling admin while you focus on the actual work. Based in Hampshire. Serving the whole UK.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <a href="/contact">
                <Button variant="primary">Book a free 30-min discovery call</Button>
              </a>
              <a href="/ai-receptionist">
                <Button variant="secondary">See AI Receptionist</Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-4">
            What We <span className="text-coral">Build</span>
          </HeadlineBlock>
          <p className="text-lg text-body mb-12 max-w-[60ch]">
            Everything is built to your business, not bolted on from a template. Pick one service or combine them — most clients start with voice and add automation over time.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {services.map((service, i) => (
              <a key={service.slug} href={`/services/${service.slug}`} className="block group">
                <Card hover className="h-full">
                  <Icon letter={String(i + 1).padStart(2, '0')} size="lg" mono />
                  <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-3 group-hover:text-coral transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-body leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <p className="text-sm font-sans font-bold text-coral uppercase">
                    {service.price}
                  </p>
                </Card>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHY ANTEK ── */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-12">
            Why <span className="text-coral">Antek Automation?</span>
          </HeadlineBlock>
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            <Card className="bg-charcoal h-full">
              <Icon letter="01" size="md" mono />
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-4 mb-3">
                Built for Your Business
              </h3>
              <p className="text-body leading-relaxed text-sm">
                We don't sell subscriptions to generic tools. Everything is configured to your services, your customers, and your workflows.
              </p>
            </Card>
            <Card className="bg-charcoal h-full">
              <Icon letter="02" size="md" mono />
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-4 mb-3">
                UK-Based Support
              </h3>
              <p className="text-body leading-relaxed text-sm">
                We're in Hampshire. You'll speak to the person who built your system, not a support ticket queue. Same-day responses, proper answers.
              </p>
            </Card>
            <Card className="bg-charcoal h-full">
              <Icon letter="03" size="md" mono />
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-4 mb-3">
                Certified Retell AI Partner
              </h3>
              <p className="text-body leading-relaxed text-sm">
                One of a handful of certified Retell AI partners in the UK. The technology is enterprise-grade — the price and attitude are not.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t border-coral py-24 md:py-32">
        <Container>
          <HeadlineBlock className="mb-6">
            Not Sure <span className="text-coral">Where to Start?</span>
          </HeadlineBlock>
          <p className="text-lg md:text-xl text-body leading-relaxed mb-10 max-w-[65ch]">
            Book a free 30-minute call. We'll look at where you're losing time, where you're missing leads, and tell you honestly which service will make the biggest difference.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <a href="/contact">
              <Button variant="primary">Book a free 30-min discovery call</Button>
            </a>
            <a href="tel:03330389960">
              <Button variant="secondary">Call 0333 038 9960</Button>
            </a>
          </div>
        </Container>
      </section>
    </div>
  )
}
