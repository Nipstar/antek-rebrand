import { usePageContext } from 'vike-react/usePageContext'
import { Button } from '../../src/components/Button'
import { Container } from '../../src/components/Container'
import { HeadlineBlock } from '../../src/components/HeadlineBlock'

export default function Page() {
  const pageContext = usePageContext()
  const is404 = pageContext.is404

  const title = is404 ? '404' : '500'
  const heading = is404 ? 'This Page Went Missing' : 'Something Went Wrong'
  const subhead = is404
    ? "The page you're looking for doesn't exist, has been moved, or never existed in the first place. Happens to the best of us."
    : 'An error occurred on our end. We\u2019ve logged it and we\u2019re looking into it. Try again in a moment, or head back to the homepage.'

  return (
    <div className="min-h-[70vh] flex items-center">
      <Container className="py-20 md:py-28">
        <div className="bg-ink border-2 border-hairline shadow-brutal p-8 md:p-16">
          <p className="font-display font-extrabold text-[8rem] md:text-[12rem] uppercase tracking-tight-xl text-coral leading-none mb-4">
            {title}
          </p>
          <HeadlineBlock as="h1" className="mb-6 leading-tight">{heading}</HeadlineBlock>
          <p className="text-lg md:text-xl text-body leading-relaxed mb-10 max-w-2xl">
            {subhead}
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-12">
            <a href="/">
              <Button variant="primary">Back to Homepage</Button>
            </a>
            <a href="/contact">
              <Button variant="secondary">Talk to a Human</Button>
            </a>
          </div>

          <div className="border-t border-hairline pt-8">
            <p className="font-sans font-bold text-sm uppercase tracking-wide text-cream mb-5">
              Popular Pages
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <li>
                <a
                  href="/ai-receptionist"
                  className="text-body hover:text-coral transition-colors font-bold underline underline-offset-4 decoration-coral decoration-2"
                >
                  AI Receptionist &rarr;
                </a>
              </li>
              <li>
                <a
                  href="/services/ai-voice-assistants"
                  className="text-body hover:text-coral transition-colors font-bold underline underline-offset-4 decoration-coral decoration-2"
                >
                  AI Voice Agents &rarr;
                </a>
              </li>
              <li>
                <a
                  href="/services/ai-chatbots"
                  className="text-body hover:text-coral transition-colors font-bold underline underline-offset-4 decoration-coral decoration-2"
                >
                  AI Chatbots &rarr;
                </a>
              </li>
              <li>
                <a
                  href="/services/workflow-automation"
                  className="text-body hover:text-coral transition-colors font-bold underline underline-offset-4 decoration-coral decoration-2"
                >
                  Workflow Automation &rarr;
                </a>
              </li>
              <li>
                <a
                  href="/services/geo-audit"
                  className="text-body hover:text-coral transition-colors font-bold underline underline-offset-4 decoration-coral decoration-2"
                >
                  GEO Audit &rarr;
                </a>
              </li>
              <li>
                <a
                  href="/locations"
                  className="text-body hover:text-coral transition-colors font-bold underline underline-offset-4 decoration-coral decoration-2"
                >
                  All Locations &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}
