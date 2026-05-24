import { Button } from '../../src/components/Button';
import { CalBooking } from '../../src/components/CalBooking';
import { Card } from '../../src/components/Card';
import { Icon } from '../../src/components/Icon';

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="bg-warm-beige border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6">
              About Antek Automation
            </h1>
            <p className="text-lg md:text-xl text-mid-gray max-w-2xl mb-4">
              AI automation built by someone who's spent 30+ years solving technology problems for businesses. Not a tech startup. A business that understands yours.
            </p>
            <p className="text-sm text-mid-gray">
              By Andy Norman, Founder | 30+ years in technology | Last updated March 2026
            </p>
          </div>
          <img
            src="/andy-norman.webp"
            alt="Andy Norman, founder of Antek Automation"
            width={240}
            height={240}
            loading="eager"
            className="w-48 h-48 md:w-60 md:h-60 border-3 border-charcoal shadow-brutal object-cover bg-soft-sage"
          />
        </div>
      </section>

      {/* The Short Version */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <Card>
            <h2 className="font-black text-2xl md:text-3xl uppercase tracking-tight-lg text-charcoal mb-6">
              The Short Version
            </h2>
            <div className="space-y-4 text-mid-gray leading-relaxed text-lg">
              <p>
                Antek Automation is an AI automation agency based in Andover, Hampshire, founded by Andy Norman. We build AI voice agents, chatbots, and workflow automation that help UK businesses stop missing calls, respond to customers faster, and eliminate hours of manual admin every week. Andy spent 30+ years in managed technology services before founding Antek — he's not guessing what businesses need, he's lived it.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Founder Journey */}
      <section className="bg-soft-sage border-t-3 border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-10">
            From Print Management to AI
          </h2>

          <div className="space-y-6 text-mid-gray leading-relaxed">
            <p>
              Andy started where most good technologists start — hands-on. As a technician in Managed Print Services, he was the person businesses called when things broke. Installing, configuring, troubleshooting — learning how offices actually worked, not how they were supposed to work on paper.
            </p>
            <p>
              Over the years, he moved from fixing problems to managing teams that fixed problems. As a service manager, he saw the patterns: businesses losing time to the same manual processes, the same communication gaps, the same operational headaches. The technology changed, but the problems didn't.
            </p>
            <p>
              As a print management solutions specialist, Andy designed systems that saved businesses thousands of hours and tens of thousands of pounds. He learned that the best technology solutions aren't the most complex — they're the ones that fit how a business actually operates.
            </p>
          </div>

          <div className="mt-8 bg-peach border-3 border-charcoal p-6 md:p-8">
            <p className="text-charcoal font-bold leading-relaxed">
              After three decades of watching businesses struggle with missed calls, slow responses, and repetitive admin, Andy saw AI voice and chat technology reach the point where it could genuinely solve these problems — affordably, reliably, and without replacing the people who make a business what it is.
            </p>
          </div>

          <div className="mt-8 space-y-6 text-mid-gray leading-relaxed">
            <p>
              That's why he built Antek Automation. Not because AI is trendy, but because 30 years of working with businesses taught him exactly where time gets wasted and customers get lost. The problems haven't changed. The tools to fix them finally have.
            </p>
          </div>
        </div>
      </section>

      {/* Why AI. Why Now. */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-10">
            Why AI Automation. Why Now.
          </h2>

          <div className="space-y-6 text-mid-gray leading-relaxed">
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
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-warm-beige border-t-3 border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-4">
            How We Work
          </h2>
          <p className="text-mid-gray text-lg mb-10 max-w-2xl">
            No sales pitch, no jargon, no one-size-fits-all packages. Here's how every project starts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-3 border-charcoal shadow-brutal-sm bg-white p-8">
              <Icon letter="L" size="sm" />
              <h3 className="font-black text-lg uppercase text-charcoal mt-4 mb-3">Listen First</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                We start by understanding how your business actually runs — not how we think it should. What calls come in? What questions do customers ask? Where does time disappear? We don't propose anything until we know.
              </p>
            </div>
            <div className="border-3 border-charcoal shadow-brutal-sm bg-white p-8">
              <Icon letter="B" size="sm" />
              <h3 className="font-black text-lg uppercase text-charcoal mt-4 mb-3">Build to Fit</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                Every voice agent, chatbot, and workflow is configured for how your business operates. Your terminology, your booking process, your opening hours, your edge cases. Not a template with your logo on it.
              </p>
            </div>
            <div className="border-3 border-charcoal shadow-brutal-sm bg-white p-8">
              <Icon letter="H" size="sm" />
              <h3 className="font-black text-lg uppercase text-charcoal mt-4 mb-3">Honest About Limits</h3>
              <p className="text-mid-gray text-sm leading-relaxed">
                AI isn't magic. About 1 in 20 callers will realise they're talking to AI. Some conversations need a human. If automation isn't the right answer for your problem, we'll tell you — not sell you something that won't work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-10">
            Why Businesses Trust Us
          </h2>

          <div className="space-y-8">
            <Card>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-black text-lg uppercase text-charcoal mb-3">Certified Retell AI Partner</h3>
                  <p className="text-mid-gray text-sm leading-relaxed">
                    Retell AI is the platform behind our voice agents. As a certified partner, we have direct access to their engineering team, early access to new features, and proven expertise in building production-grade voice AI. This isn't a side project — it's our core technology partnership.
                  </p>
                </div>
                <div>
                  <h3 className="font-black text-lg uppercase text-charcoal mb-3">FSB Member</h3>
                  <p className="text-mid-gray text-sm leading-relaxed">
                    We're members of the Federation of Small Businesses because we are one. We understand the constraints, the budgets, and the reality of running a small business in the UK. Our solutions are built with that reality in mind.
                  </p>
                </div>
              </div>
            </Card>

            <div className="bg-peach border-3 border-charcoal p-6 md:p-8">
              <p className="text-charcoal font-bold leading-relaxed">
                We're not a faceless agency. We're based at Chantry House, 38 Chantry Way, Andover, Hampshire, SP10 1LZ. You can call us on 0333 038 9960. Andy personally oversees every project. When you work with Antek, you're working with the person who built it.
              </p>
            </div>

            <Card>
              <h3 className="font-black text-lg uppercase text-charcoal mb-4">Company Details</h3>
              <ul className="space-y-2 text-mid-gray text-sm">
                <li><span className="font-bold text-charcoal">Founded by:</span> Andy Norman — 30+ years in technology</li>
                <li><span className="font-bold text-charcoal">Headquarters:</span> Chantry House, 38 Chantry Way, Andover, Hampshire, SP10 1LZ</li>
                <li><span className="font-bold text-charcoal">Phone:</span> 0333 038 9960</li>
                <li><span className="font-bold text-charcoal">Email:</span> hello@antekautomation.com</li>
                <li><span className="font-bold text-charcoal">ICO Registration:</span> ZC133436</li>
                <li><span className="font-bold text-charcoal">DUNS Number:</span> 235593033</li>
                <li><span className="font-bold text-charcoal">Partnership:</span> Certified Retell AI Partner</li>
                <li><span className="font-bold text-charcoal">Membership:</span> Federation of Small Businesses (FSB)</li>
                <li><span className="font-bold text-charcoal">Services:</span> AI Voice Agents, AI Chatbots, Workflow Automation</li>
                <li><span className="font-bold text-charcoal">Areas Served:</span> UK-wide, headquartered in Hampshire</li>
              </ul>
            </Card>

            <Card>
              <h3 className="font-black text-lg uppercase text-charcoal mb-4">Find Antek elsewhere</h3>
              <ul className="space-y-2 text-mid-gray text-sm">
                <li>
                  <span className="font-bold text-charcoal">About.me:</span>{' '}
                  <a className="underline hover:text-terracotta" href="https://about.me/andynorman" target="_blank" rel="noopener noreferrer">about.me/andynorman</a>
                </li>
                <li>
                  <span className="font-bold text-charcoal">Upwork:</span>{' '}
                  <a className="underline hover:text-terracotta" href="https://www.upwork.com/freelancers/antekautomation" target="_blank" rel="noopener noreferrer">upwork.com/freelancers/antekautomation</a>
                </li>
                <li>
                  <span className="font-bold text-charcoal">Clutch:</span>{' '}
                  <a className="underline hover:text-terracotta" href="https://clutch.co/profile/antek-automation" target="_blank" rel="noopener noreferrer">clutch.co/profile/antek-automation</a>
                </li>
                <li>
                  <span className="font-bold text-charcoal">LinkedIn (company):</span>{' '}
                  <a className="underline hover:text-terracotta" href="https://www.linkedin.com/company/antek-automation" target="_blank" rel="noopener noreferrer">linkedin.com/company/antek-automation</a>
                </li>
                <li>
                  <span className="font-bold text-charcoal">Crunchbase:</span>{' '}
                  <a className="underline hover:text-terracotta" href="https://www.crunchbase.com/organization/antek-automation" target="_blank" rel="noopener noreferrer">crunchbase.com/organization/antek-automation</a>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal border-t-3 border-charcoal py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-off-white mb-6">
              Ready to Automate?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Book a free 30-minute call. We'll look at where AI can save you time and win you more business.
            </p>
            <a href="/contact">
              <Button variant="primary">Prefer the contact form?</Button>
            </a>
          </div>
          <CalBooking />
        </div>
      </section>
    </>
  );
}
