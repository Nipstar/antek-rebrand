import { Button } from '../../../src/components/Button'
import { Card } from '../../../src/components/Card'
import { Icon } from '../../../src/components/Icon'
import { Container } from '../../../src/components/Container'
import { HeadlineBlock } from '../../../src/components/HeadlineBlock'
import { QuickRecap } from '../../../src/components/QuickRecap'
import { ResourcesCompliance } from '../../../src/components/ResourcesCompliance'

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <section className="border-b border-hairline">
        <Container className="py-20 md:py-28">
          <div className="max-w-4xl">
            <HeadlineBlock
              as="h1"
              kicker="WORKFLOW AUTOMATION | SAVE 10-20 HOURS A WEEK | HAMPSHIRE, UK"
            >
              Stop Doing the Same <span className="text-coral">Admin Tasks Every Day</span>. Automate Them.
            </HeadlineBlock>
            <p className="text-xl text-body leading-normal mb-4 mt-6 max-w-[60ch]">
              As an AI automation company that builds bespoke n8n workflows, we connect your tools, automate your processes, and give you back the hours you're currently wasting on repetitive work. No lock-in, you own everything.
            </p>
            <p className="text-sm text-muted mb-8">By <a href="/about" className="underline decoration-coral underline-offset-4 hover:text-coral transition-colors">Andy Norman</a>, Founder | 30+ years in technology | Last updated March 2026</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <a href="/contact">
                <Button variant="primary">
                  Book an Automation Audit
                </Button>
              </a>
              <a href="#what-we-automate">
                <Button variant="secondary">
                  See What We Automate
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <QuickRecap items={[
        'We automate your repetitive admin using n8n (open-source) — you own the workflows outright, no vendor lock-in',
        'For service businesses spending 10+ hours/week on manual data entry, follow-ups, and CRM updates',
        'From £250 one-off for a starter workflow — <a href="/pricing#workflow-automation" class="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">see full pricing</a>',
        'Simple workflows live in 1–2 days; complex multi-system builds take 1–2 weeks',
        'Discovery audit first — we won\'t automate processes we don\'t fully understand',
      ]} />

      {/* Problem Section */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            Your Evening Shouldn't Be Spent <span className="text-coral">Doing Admin</span>
          </HeadlineBlock>
          <div className="space-y-6 text-lg text-body leading-normal max-w-[65ch]">
            <p>
              You finish the actual work at 5. The stuff that makes money. The client calls, the projects, the creative problem-solving. That's done.
            </p>
            <p>
              Then the admin starts. Updating the CRM. Sending follow-up emails. Chasing invoices. Copying data from one spreadsheet to another. Checking who needs a reminder. Logging things in three different systems because none of them talk to each other.
            </p>
            <div className="bg-ink border-2 border-coral shadow-brutal-coral p-6">
              <p className="font-display font-extrabold text-cream text-xl mb-2 uppercase">
                You didn't start a business to do <span className="text-coral">data entry until 8pm.</span>
              </p>
              <p className="text-body">
                But that's where most small business owners end up. Buried in admin that could be done by a machine in seconds. While your kids are in the other room wondering when you're going to stop working.
              </p>
            </div>
            <p>
              Importantly, most of this work follows the exact same steps every single time. If something happens the same way every time, a computer can do it. Faster, more accurately, and without needing a tea break.
            </p>
          </div>
        </Container>
      </section>

      {/* What We Automate */}
      <section id="what-we-automate" className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-6">
            Stuff You're Probably <span className="text-coral">Doing Manually</span> Right Now
          </HeadlineBlock>
          <p className="text-lg text-body mb-16 max-w-[60ch]">
            Sound familiar? Every one of these can be fully automated. Set it up once, never think about it again.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <Card hover className="bg-charcoal h-full">
              <Icon letter="01" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                Lead Follow-Up
              </h3>
              <p className="text-body leading-normal mb-4">
                Someone fills in your contact form. You get a notification. You add them to your CRM. You send a welcome email. You set a reminder to follow up in 3 days.
              </p>
              <div className="bg-ink border-2 border-hairline p-4">
                <p className="font-sans font-bold text-cream text-sm uppercase mb-1">Automated version:</p>
                <p className="text-body text-sm">
                  All of that happens instantly, the moment they hit "send." CRM updated, email sent, follow-up scheduled. You just get a notification telling you it's done.
                </p>
              </div>
            </Card>

            <Card hover className="bg-charcoal h-full">
              <Icon letter="02" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                Invoicing and Chasing
              </h3>
              <p className="text-body leading-normal mb-4">
                Job done? Create an invoice in Xero. Send it to the client. Wait. Chase after 7 days. Chase again after 14 days. Mark as paid when money arrives.
              </p>
              <div className="bg-ink border-2 border-hairline p-4">
                <p className="font-sans font-bold text-cream text-sm uppercase mb-1">Automated version:</p>
                <p className="text-body text-sm">
                  Mark a job as complete in your system, and the invoice generates, sends, chases, and reconciles itself. You only hear about it if there's a problem.
                </p>
              </div>
            </Card>

            <Card hover className="bg-charcoal h-full">
              <Icon letter="03" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                Appointment Reminders
              </h3>
              <p className="text-body leading-normal mb-4">
                Client booked for Thursday. Send them a reminder on Wednesday. Another one Thursday morning. If they don't show, send a rebook link.
              </p>
              <div className="bg-ink border-2 border-hairline p-4">
                <p className="font-sans font-bold text-cream text-sm uppercase mb-1">Automated version:</p>
                <p className="text-body text-sm">
                  Reminders go out automatically at the intervals you choose. No-show follow-up handles itself. You just focus on the people who turn up.
                </p>
              </div>
            </Card>

            <Card hover className="bg-charcoal h-full">
              <Icon letter="04" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                Data Syncing Between Tools
              </h3>
              <p className="text-body leading-normal mb-4">
                Update a client's details in your CRM. Then update them in your email marketing tool. Then your project management tool. Then your accounting software.
              </p>
              <div className="bg-ink border-2 border-hairline p-4">
                <p className="font-sans font-bold text-cream text-sm uppercase mb-1">Automated version:</p>
                <p className="text-body text-sm">
                  Change it in one place, and it updates everywhere else automatically. One source of truth, zero copy-pasting.
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* Why n8n */}
      <section className="bg-ink border-b border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            Built on <span className="text-coral">n8n</span> -- And Why That Matters to You
          </HeadlineBlock>
          <p className="text-lg text-body leading-normal mb-10 max-w-[65ch]">
            You might be thinking "why not just use Zapier?" Fair question. Here's why we use n8n instead:
          </p>

          <div className="space-y-8 max-w-[65ch]">
            <Card className="bg-charcoal">
              <Icon letter="01" size="md" mono />
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-4 mb-3">
                It's Open Source -- You Own Everything
              </h3>
              <p className="text-body leading-normal">
                With Zapier, you rent your automations. Stop paying, they stop working. With n8n, we build it, you own it. Your workflows, your data, your infrastructure. No vendor lock-in, ever.
              </p>
            </Card>

            <Card className="bg-charcoal">
              <Icon letter="02" size="md" mono />
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-4 mb-3">
                It Connects to Pretty Much Everything
              </h3>
              <p className="text-body leading-normal">
                400+ integrations out of the box. Google Workspace, Xero, Stripe, HubSpot, Slack, WhatsApp, Shopify -- you name it. And if something doesn't have a built-in connector, we can hook into any API or webhook.
              </p>
            </Card>

            <Card className="bg-charcoal">
              <Icon letter="03" size="md" mono />
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-4 mb-3">
                No Per-Task Pricing That Catches You Out
              </h3>
              <p className="text-body leading-normal">
                Zapier charges per task. The more you automate, the more you pay. n8n doesn't work like that. Whether you run 100 tasks or 100,000, the cost stays the same. Scale without worrying about surprise bills.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-4">
            How Does <span className="text-coral">n8n</span> Compare to <span className="text-coral">Zapier and Make?</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-normal mb-10 max-w-[65ch]">
            n8n is an open-source workflow automation platform that gives you full ownership of your automations without per-task pricing. Unlike Zapier and Make, your workflows keep running even if you stop paying a subscription — because you own them. Here's how the three platforms compare for a typical small business.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-2 border-hairline text-left text-sm">
              <thead>
                <tr className="bg-coral text-ink">
                  <th className="p-4 font-display font-extrabold uppercase border-r border-ink/20"></th>
                  <th className="p-4 font-display font-extrabold uppercase border-r border-ink/20">n8n</th>
                  <th className="p-4 font-display font-extrabold uppercase border-r border-ink/20">Zapier</th>
                  <th className="p-4 font-display font-extrabold uppercase">Make</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-hairline bg-ink">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Ownership</td>
                  <td className="p-4 text-body border-r border-hairline">You own everything</td>
                  <td className="p-4 text-body border-r border-hairline">Rented (stop paying, it stops)</td>
                  <td className="p-4 text-body">Rented</td>
                </tr>
                <tr className="border-t border-hairline bg-charcoal">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Pricing Model</td>
                  <td className="p-4 text-body border-r border-hairline">Flat fee, unlimited tasks</td>
                  <td className="p-4 text-body border-r border-hairline">Per task (costs grow with usage)</td>
                  <td className="p-4 text-body">Per operation (cheaper than Zapier)</td>
                </tr>
                <tr className="border-t border-hairline bg-ink">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Integrations</td>
                  <td className="p-4 text-body border-r border-hairline">400+ built-in, any API/webhook</td>
                  <td className="p-4 text-body border-r border-hairline">6,000+ built-in</td>
                  <td className="p-4 text-body">1,800+ built-in</td>
                </tr>
                <tr className="border-t border-hairline bg-charcoal">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Complexity</td>
                  <td className="p-4 text-body border-r border-hairline">Handles complex multi-step logic</td>
                  <td className="p-4 text-body border-r border-hairline">Best for simple A-to-B automations</td>
                  <td className="p-4 text-body">Good for moderate complexity</td>
                </tr>
                <tr className="border-t border-hairline bg-ink">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Self-Hostable</td>
                  <td className="p-4 text-body border-r border-hairline">Yes (your server, your data)</td>
                  <td className="p-4 text-body border-r border-hairline">No</td>
                  <td className="p-4 text-body">No</td>
                </tr>
                <tr className="border-t border-hairline bg-charcoal">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Best For</td>
                  <td className="p-4 text-body border-r border-hairline">Businesses wanting ownership and scale</td>
                  <td className="p-4 text-body border-r border-hairline">Quick, simple integrations</td>
                  <td className="p-4 text-body">Budget-conscious teams</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* What It Won't Do */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            What Are the <span className="text-coral">Limits of Workflow Automation?</span>
          </HeadlineBlock>
          <div className="space-y-6 text-lg text-body leading-normal max-w-[65ch]">
            <p>
              We need to be straight with you about something. Automation is brilliant, but it's not a magic wand. If your process is broken, automating it just means you'll break things faster.
            </p>
            <div className="bg-ink border-2 border-coral shadow-brutal-coral p-6">
              <p className="font-display font-extrabold text-cream text-xl mb-2 uppercase">
                That's why every project <span className="text-coral">starts with an audit.</span>
              </p>
              <p className="text-body">
                We look at how things actually work in your business right now. What's working, what's not, and what would genuinely benefit from automation. Sometimes the answer is "fix the process first, then automate it." And we'll tell you that honestly, even if it means less work for us.
              </p>
            </div>
            <p>
              We've seen businesses try to automate chaos and end up with automated chaos. That's not what we do. We make sure the foundations are right before we build on top of them.
            </p>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-10">
            Frequently Asked <span className="text-coral">Questions</span>
          </HeadlineBlock>
          <div className="space-y-4 max-w-[65ch]">
            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How much does workflow automation cost?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                From £250 one-off for a starter workflow. <a href="/pricing#workflow-automation" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">See full pricing</a> — exact cost depends on workflow count and complexity.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What's n8n and why do you use it instead of Zapier?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                n8n is open-source automation software. Unlike Zapier, you own your workflows — there's no per-task pricing and no vendor lock-in. If you stop working with us, your automations keep running. You're not renting them.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What tools can you connect?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                400+ integrations out of the box — Google Workspace, Xero, Stripe, HubSpot, Slack, WhatsApp, Shopify, and more. If a tool has an API or webhook, we can connect it.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How long does it take to set up automations?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Simple workflows take 1–2 days. Complex multi-step processes with multiple integrations take 1–2 weeks. Every project starts with an audit so we understand exactly what needs automating.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What if my current process is a mess?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                That's fine — and common. We audit your processes first and recommend fixes before automating anything. We won't automate chaos. If something needs fixing first, we'll tell you honestly.
              </div>
            </details>
          </div>
        </Container>
      </section>

      <ResourcesCompliance links={[
        { text: 'n8n workflow automation (Wikipedia)', url: 'https://en.wikipedia.org/wiki/N8n', context: 'Open-source automation platform used for all Antek workflow builds' },
        { text: 'Webhook overview (Wikipedia)', url: 'https://en.wikipedia.org/wiki/Webhook', context: 'Technical explanation of webhooks — the backbone of automation integrations' },
        { text: 'ICO data protection for businesses', url: 'https://ico.org.uk/for-organisations/guide-to-data-protection/', context: 'UK law on data handling within automated workflows' },
      ]} />

      {/* CTA Section */}
      <section className="bg-charcoal py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-6">
            Book an <span className="text-coral">Automation Audit</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-normal mb-4 max-w-[65ch]">
            We'll spend 30 minutes on a call, look at your current processes, and tell you exactly where automation would save you the most time. No sales pitch, no pressure. If we think automation isn't right for you, we'll say so.
          </p>
          <p className="text-body leading-normal mb-10 max-w-[65ch]">
            Clients typically save 10–20 hours a week once automations are running — that's one to two full working days back, every week. Exact savings depend on the volume of manual work being replaced.
          </p>
          <a href="/contact">
            <Button variant="primary" className="text-lg px-10">
              Book Your Free Audit
            </Button>
          </a>
        </Container>
      </section>

      {/* ── GEO CROSS-SELL (our 4th service — AI-search visibility) ── */}
      <section className="bg-coral py-16 md:py-20">
        <Container>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase tracking-tight-lg text-ink mb-6">
            Your Admin&rsquo;s Automated. <span className="text-cream">Is Your AI Visibility?</span>
          </h2>
          <p className="text-lg text-ink leading-relaxed mb-6 max-w-[60ch]">
            When buyers ask ChatGPT, Perplexity or Google&rsquo;s AI Overviews for a business like yours, our <a href="/services/geo-audit" className="underline underline-offset-4 decoration-ink decoration-2 hover:opacity-70 transition-opacity">GEO Audit</a> shows whether you&rsquo;re cited &mdash; and gives you a clear plan to get there. From &pound;247.
          </p>
          <a href="/services/geo-audit">
            <Button variant="ink">Check Your AI Visibility &rarr;</Button>
          </a>
        </Container>
      </section>

      {/* Internal Links */}
      <section className="py-16 md:py-20">
        <Container>
          <HeadlineBlock as="h3" className="mb-8">
            Related <span className="text-coral">Services</span>
          </HeadlineBlock>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            <a href="/ai-receptionist" className="block">
              <Card hover className="h-full">
                <Icon letter="01" size="md" mono />
                <h4 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2">AI Receptionist</h4>
                <p className="text-body text-sm leading-normal">
                  Productised phone answering from &pound;97/month. Screens callers and books appointments 24/7.
                </p>
              </Card>
            </a>
            <a href="/services/ai-voice-assistants" className="block">
              <Card hover className="h-full">
                <Icon letter="02" size="md" mono />
                <h4 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2">AI Voice Agents</h4>
                <p className="text-body text-sm leading-normal">
                  Never miss a call again. AI that answers the phone, books appointments, and sounds like a real person.
                </p>
              </Card>
            </a>
            <a href="/services/ai-chatbots" className="block">
              <Card hover className="h-full">
                <Icon letter="03" size="md" mono />
                <h4 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2">AI Chatbots</h4>
                <p className="text-body text-sm leading-normal">
                  Capture leads on your website 24/7 with a chatbot trained on your business.
                </p>
              </Card>
            </a>
          </div>
          <p className="text-body mt-8">
            Local to us? See workflow automation for{' '}
            <a href="/locations/basingstoke" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Basingstoke</a>{' '}and{' '}
            <a href="/locations/winchester" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Winchester</a>{' '}businesses.
          </p>
        </Container>
      </section>
    </div>
  )
}
