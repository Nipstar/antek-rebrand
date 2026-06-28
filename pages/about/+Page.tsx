import { Button } from '../../src/components/Button';
import { CalBooking } from '../../src/components/CalBooking';
import { Card } from '../../src/components/Card';
import { Icon } from '../../src/components/Icon';
import { Container } from '../../src/components/Container';
import { HeadlineBlock } from '../../src/components/HeadlineBlock';

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-hairline py-20 md:py-28">
        <Container>
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <HeadlineBlock as="h1" className="mb-6">
                About <span className="text-coral">Antek Automation</span>
              </HeadlineBlock>
              <p className="text-lg md:text-xl text-body max-w-[60ch] mb-4">
                AI automation built by someone who's spent 30+ years solving technology problems for businesses. Not a tech startup. A business that understands yours.
              </p>
              <p className="text-sm text-muted">
                By Andy Norman, Founder | 30+ years in technology | Last updated March 2026
              </p>
            </div>
            <img
              src="/andy-norman.webp"
              alt="Andy Norman, founder of Antek Automation"
              width={240}
              height={240}
              loading="eager"
              className="w-48 h-48 md:w-60 md:h-60 border-2 border-coral shadow-brutal object-cover"
            />
          </div>
        </Container>
      </section>

      {/* The Short Version */}
      <section className="py-20 md:py-28">
        <Container>
          <Card>
            <HeadlineBlock className="mb-6">
              The Short <span className="text-coral">Version</span>
            </HeadlineBlock>
            <div className="space-y-4 text-body leading-relaxed text-lg max-w-[65ch]">
              <p>
                Antek Automation is an AI automation agency based in Andover, Hampshire, founded by Andy Norman. We build AI voice agents, chatbots, and workflow automation that help UK businesses stop missing calls, respond to customers faster, and eliminate hours of manual admin every week. Andy spent 30+ years in managed technology services before founding Antek — he's not guessing what businesses need, he's lived it.
              </p>
            </div>
          </Card>
        </Container>
      </section>

      {/* Founder Journey */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-10">
            From Print Management to <span className="text-coral">AI</span>
          </HeadlineBlock>

          <div className="space-y-8 max-w-[65ch]">
            <div className="flex gap-5">
              <Icon letter="01" size="md" mono />
              <p className="text-body leading-relaxed">
                Andy started where most good technologists start — hands-on. As a technician in Managed Print Services, he was the person businesses called when things broke. Installing, configuring, troubleshooting — learning how offices actually worked, not how they were supposed to work on paper.
              </p>
            </div>
            <div className="flex gap-5">
              <Icon letter="02" size="md" mono />
              <p className="text-body leading-relaxed">
                Over the years, he moved from fixing problems to managing teams that fixed problems. As a service manager, he saw the patterns: businesses losing time to the same manual processes, the same communication gaps, the same operational headaches. The technology changed, but the problems didn't.
              </p>
            </div>
            <div className="flex gap-5">
              <Icon letter="03" size="md" mono />
              <p className="text-body leading-relaxed">
                As a print management solutions specialist, Andy designed systems that saved businesses thousands of hours and tens of thousands of pounds. He learned that the best technology solutions aren't the most complex — they're the ones that fit how a business actually operates.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-ink border-2 border-coral shadow-brutal-coral p-6 md:p-8 max-w-[65ch]">
            <p className="text-cream font-bold leading-relaxed">
              After three decades of watching businesses struggle with missed calls, slow responses, and repetitive admin, Andy saw AI voice and chat technology reach the point where it could genuinely solve these problems — affordably, reliably, and without replacing the people who make a business what it is.
            </p>
          </div>

          <div className="mt-10 space-y-6 text-body leading-relaxed max-w-[65ch]">
            <p>
              That's why he built Antek Automation. Not because AI is trendy, but because 30 years of working with businesses taught him exactly where time gets wasted and customers get lost. The problems haven't changed. The tools to fix them finally have.
            </p>
          </div>
        </Container>
      </section>

      {/* Why AI. Why Now. */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-10">
            Why <span className="text-coral">AI Automation</span>. Why Now.
          </HeadlineBlock>

          <div className="space-y-6 text-body leading-relaxed max-w-[65ch]">
            <p>
              Two years ago, AI voice agents sounded robotic and chatbots were glorified FAQ pages. That's changed. The technology has reached a point where an AI can hold a natural phone conversation, understand what a caller actually needs, and take real action — booking appointments, capturing details, transferring urgent calls.
            </p>
            <p>
              Large enterprises have been using this technology for years. They have the budgets, the IT teams, and the consultants. But the businesses that need it most — tradespeople, dental practices, restaurants, cleaning companies, estate agents, solicitors — have been locked out. The solutions were too expensive, too complex, and built for companies with 500 employees, not 5.
            </p>
            <p>
              Antek exists to close that gap. We take the same AI technology that powers enterprise contact centres and make it work for businesses with one phone line and no IT department. Set up in days, not months. Priced in hundreds, not tens of thousands.
            </p>
          </div>
        </Container>
      </section>

      {/* How We Work */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-4">
            How We <span className="text-coral">Work</span>
          </HeadlineBlock>
          <p className="text-body text-lg mb-10 max-w-[60ch]">
            No sales pitch, no jargon, no one-size-fits-all packages. Here's how every project starts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <Card className="bg-charcoal h-full">
              <Icon letter="01" size="md" mono />
              <h3 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-3">Listen First</h3>
              <p className="text-body text-sm leading-relaxed">
                We start by understanding how your business actually runs — not how we think it should. What calls come in? What questions do customers ask? Where does time disappear? We don't propose anything until we know.
              </p>
            </Card>
            <Card className="bg-charcoal h-full">
              <Icon letter="02" size="md" mono />
              <h3 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-3">Build to Fit</h3>
              <p className="text-body text-sm leading-relaxed">
                Every voice agent, chatbot, and workflow is configured for how your business operates. Your terminology, your booking process, your opening hours, your edge cases. Not a template with your logo on it.
              </p>
            </Card>
            <Card className="bg-charcoal h-full">
              <Icon letter="03" size="md" mono />
              <h3 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-3">Honest About Limits</h3>
              <p className="text-body text-sm leading-relaxed">
                AI isn't magic. About 1 in 20 callers will realise they're talking to AI. Some conversations need a human. If automation isn't the right answer for your problem, we'll tell you — not sell you something that won't work.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Trust Signals */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-10">
            Why Businesses <span className="text-coral">Trust Us</span>
          </HeadlineBlock>

          <div className="space-y-8">
            <Card>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display font-extrabold text-lg uppercase text-cream mb-3">Certified Retell AI Partner</h3>
                  <p className="text-body text-sm leading-relaxed">
                    Retell AI is the platform behind our voice agents. As a certified partner, we have direct access to their engineering team, early access to new features, and proven expertise in building production-grade voice AI. This isn't a side project — it's our core technology partnership.
                  </p>
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg uppercase text-cream mb-3">FSB Member</h3>
                  <p className="text-body text-sm leading-relaxed">
                    We're members of the Federation of Small Businesses because we are one. We understand the constraints, the budgets, and the reality of running a small business in the UK. Our solutions are built with that reality in mind.
                  </p>
                </div>
              </div>
            </Card>

            <div className="bg-ink border-2 border-coral shadow-brutal-coral p-6 md:p-8">
              <p className="text-cream font-bold leading-relaxed">
                We're not a faceless agency. We're based at Chantry House, 38 Chantry Way, Andover, Hampshire, SP10 1LZ. You can call us on 0333 038 9960. Andy personally oversees every project. When you work with Antek, you're working with the person who built it.
              </p>
            </div>

            <div className="bg-ink border-2 border-coral p-6 md:p-8">
              <h3 className="font-display font-extrabold text-lg uppercase text-cream mb-4">Company <span className="text-coral">Details</span></h3>
              <ul className="space-y-2 text-body text-sm">
                <li><span className="font-bold text-cream">Founded by:</span> Andy Norman — 30+ years in technology</li>
                <li><span className="font-bold text-cream">Headquarters:</span> Chantry House, 38 Chantry Way, Andover, Hampshire, SP10 1LZ</li>
                <li><span className="font-bold text-cream">Phone:</span> 0333 038 9960</li>
                <li><span className="font-bold text-cream">Email:</span> hello@antekautomation.com</li>
                <li><span className="font-bold text-cream">ICO Registration:</span> ZC133436</li>
                <li><span className="font-bold text-cream">DUNS Number:</span> 235593033</li>
                <li><span className="font-bold text-cream">Partnership:</span> Certified Retell AI Partner</li>
                <li><span className="font-bold text-cream">Membership:</span> Federation of Small Businesses (FSB)</li>
                <li><span className="font-bold text-cream">Services:</span> AI Voice Agents, AI Chatbots, Workflow Automation</li>
                <li><span className="font-bold text-cream">Areas Served:</span> UK-wide, headquartered in Hampshire</li>
              </ul>
            </div>

            <Card>
              <h3 className="font-display font-extrabold text-lg uppercase text-cream mb-4">Find Antek elsewhere</h3>
              <ul className="space-y-2 text-body text-sm">
                <li>
                  <span className="font-bold text-cream">About.me:</span>{' '}
                  <a className="underline hover:text-coral" href="https://about.me/andynorman" target="_blank" rel="noopener noreferrer">about.me/andynorman</a>
                </li>
                <li>
                  <span className="font-bold text-cream">Upwork:</span>{' '}
                  <a className="underline hover:text-coral" href="https://www.upwork.com/freelancers/antekautomation" target="_blank" rel="noopener noreferrer">upwork.com/freelancers/antekautomation</a>
                </li>
                <li>
                  <span className="font-bold text-cream">Clutch:</span>{' '}
                  <a className="underline hover:text-coral" href="https://clutch.co/profile/antek-automation" target="_blank" rel="noopener noreferrer">clutch.co/profile/antek-automation</a>
                </li>
                <li>
                  <span className="font-bold text-cream">LinkedIn (company):</span>{' '}
                  <a className="underline hover:text-coral" href="https://www.linkedin.com/company/antek-automation" target="_blank" rel="noopener noreferrer">linkedin.com/company/antek-automation</a>
                </li>
                <li>
                  <span className="font-bold text-cream">Crunchbase:</span>{' '}
                  <a className="underline hover:text-coral" href="https://www.crunchbase.com/organization/antek-automation" target="_blank" rel="noopener noreferrer">crunchbase.com/organization/antek-automation</a>
                </li>
              </ul>
            </Card>
          </div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-12">
            Frequently Asked <span className="text-coral">Questions</span>
          </HeadlineBlock>
          <div className="space-y-4 max-w-[65ch]">
            <details className="border-2 border-hairline bg-charcoal group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Who runs Antek Automation?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Antek is led by founder Andy Norman, who has 30+ years in technology. You deal with him directly &mdash; not an account manager or an offshore call centre.
              </div>
            </details>

            <details className="border-2 border-hairline bg-charcoal group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Where are you based?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                We&rsquo;re based in Andover, Hampshire, and work with businesses across Hampshire and the whole UK remotely.
              </div>
            </details>

            <details className="border-2 border-hairline bg-charcoal group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Are you a certified partner?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Yes. Antek is a Certified Retell AI Partner and a member of the Federation of Small Businesses (FSB).
              </div>
            </details>

            <details className="border-2 border-hairline bg-charcoal group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What does Antek actually build?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                AI voice agents, website chatbots, and workflow automation &mdash; plus GEO audits that check how AI search engines like ChatGPT see your business.
              </div>
            </details>

            <details className="border-2 border-hairline bg-charcoal group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How do I get started?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Book a free 30-minute discovery call. We&rsquo;ll look at where AI can save you time and capture more leads &mdash; no obligation, no jargon.
              </div>
            </details>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 md:py-28">
        <Container>
          <div className="mb-10">
            <HeadlineBlock className="mb-6">
              Ready to <span className="text-coral">Automate?</span>
            </HeadlineBlock>
            <p className="text-body text-lg mb-8 max-w-[60ch]">
              Book a free 30-minute call. We'll look at where AI can save you time and win you more business.
            </p>
            <a href="/contact">
              <Button variant="primary">Prefer the contact form?</Button>
            </a>
          </div>
          <CalBooking />
        </Container>
      </section>
    </>
  );
}
