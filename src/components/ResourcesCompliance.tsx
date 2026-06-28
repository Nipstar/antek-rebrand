import { Container } from './Container'

interface ResourceLink {
  text: string
  url: string
  context: string
}

interface ResourcesComplianceProps {
  links: ResourceLink[]
}

export function ResourcesCompliance({ links }: ResourcesComplianceProps) {
  return (
    <section className="py-12 border-b border-hairline">
      <Container>
        <h3 className="font-mono font-bold text-xs uppercase tracking-eyebrow text-muted mb-5">
          Resources &amp; Compliance
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-2 border-hairline bg-ink p-4 hover:border-coral transition-colors"
            >
              <span className="font-bold text-cream text-sm block mb-1 underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">
                {link.text}
              </span>
              <span className="text-muted text-xs">{link.context}</span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
