import { Card } from './Card'
import { Icon } from './Icon'
import { Container } from './Container'
import { HeadlineBlock } from './HeadlineBlock'

// The three setup steps for the AI receptionist. Shared by /ai-receptionist
// and /call-answering-service; the HowTo JSON-LD reads the same array.
export const RECEPTIONIST_STEPS = [
  {
    h: 'Tell Us About Your Business',
    b: 'Share your website and phone number. We pull your services, hours, and service areas automatically.',
  },
  {
    h: 'Set Your Screening Logic',
    b: 'What questions should we ask? What qualifies a good lead for you? What’s urgent vs routine? You set the rules. The AI follows them.',
  },
  {
    h: 'Forward Your Calls',
    b: 'Dial a short code or scan a QR. Takes 30 seconds. Your AI receptionist is live — answering calls, screening callers, and booking appointments while you get on with the actual work.',
  },
]

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
