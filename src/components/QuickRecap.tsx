import { Container } from './Container'

interface QuickRecapProps {
  items: string[]
}

export function QuickRecap({ items }: QuickRecapProps) {
  return (
    <section className="border-y border-hairline bg-ink py-10 md:py-12">
      <Container>
        <h2 className="font-display font-extrabold text-xl uppercase tracking-tight-lg text-cream mb-5">
          Quick Recap
        </h2>
        <ul className="space-y-3">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-body leading-normal">
              <span className="text-coral font-bold text-lg leading-none mt-0.5 shrink-0">&bull;</span>
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
