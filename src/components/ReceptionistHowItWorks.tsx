import { Card } from './Card'
import { Icon } from './Icon'
import { Container } from './Container'
import { HeadlineBlock } from './HeadlineBlock'
import { RECEPTIONIST_STEPS } from '../data/receptionistSteps'

// Three-step setup section, shared by /ai-receptionist and /call-answering-service.
export function ReceptionistHowItWorks() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <HeadlineBlock className="mb-16">
          Live in <span className="text-coral">24&ndash;48 Hours</span>. No Long Setup.
        </HeadlineBlock>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {RECEPTIONIST_STEPS.map((step, i) => (
            <Card key={i} className="h-full">
              <Icon letter={String(i + 1).padStart(2, '0')} size="lg" mono />
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-6 mb-4">{step.h}</h3>
              <p className="text-body leading-normal">{step.b}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
