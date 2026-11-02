import { Button } from '../../../src/components/Button'
import { Card } from '../../../src/components/Card'
import { Icon } from '../../../src/components/Icon'
import { Container } from '../../../src/components/Container'
import { HeadlineBlock } from '../../../src/components/HeadlineBlock'
import { ReviewsStrip } from '../../../src/components/ReviewsStrip'
import { PRICE_TEXT, PRICES } from '../../../src/data/pricing'
import { faq } from './faq'

const LINK = 'underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors'
const TH = 'p-4 font-display font-extrabold uppercase border-r border-ink/20'
const TD_LABEL = 'p-4 font-bold text-cream border-r border-hairline'
const TD = 'p-4 text-body border-r border-hairline'

const included = [
  'A Clear Route To An Enquiry',
  'Pages Built Around Customer Questions',
  'Built For Google',
  'Ready For AI Search',
  'Ready For AI And Automation',
  'Yours To Keep',
]

const includedCopy = [
  'Every page tells visitors what to do next. Call, send a form or book a time, with the main action easy to reach on a phone.',
  'What do you do? Where do you work? Can you be trusted? How do I get a quote? We structure each page so people get those answers without hunting for them.',
  'Fast pages, mobile-first layouts, clear titles and sensible site structure. New service or location pages can be added later without starting again.',
  "Structured data, citable answers, llms.txt and AI crawler access. ChatGPT, Perplexity, Gemini and Google's AI Overviews get clear facts about your business.",
  'Add a chatbot or voice agent when you need one. New enquiries can flow into your CRM, calendar or inbox, with follow-ups handled automatically.',
  "You own the finished website, including the code and content. There's no compulsory monthly fee to us. If you want ongoing help, it's there.",
]

const comparison = [
  ['Enquiries', 'A contact page', 'A clear next step on every page'],
  ['Out of hours', 'A form that waits until morning', 'Chatbot or voice agent available as an add-on'],
  ['Google', 'Basic page titles', 'Structure and pages planned around search'],
  ['AI search', 'Often left out', 'Structured data, citable answers and crawler access'],
  ['New enquiries', 'Sit in an inbox', 'Can go straight to your CRM, calendar or phone'],
  ['Growing the site', 'May need a rebuild', 'Add pages as you grow'],
]

const pricingRows = [
  ['Website Build', `From £${PRICES.website.from}`, 'Included', '£0 to us'],
  ['Website + AI Chatbot', `From £${PRICES.website.from}`, `Chatbot from £${PRICES.chatbot.setupFrom}`, PRICE_TEXT.chatbotMonthly],
  ['Website + AI Receptionist', `From £${PRICES.website.from}`, `Receptionist from £${PRICES.receptionist.setupFrom}`, `From ${PRICE_TEXT.receptionistMonthly}`],
]

const buildIncludes = [
  `Up to ${PRICES.website.maxPages} pages`,
  'Bespoke design matched to your branding',
  'Mobile-first Next.js build',
  'Contact forms and click-to-call',
  'On-page SEO foundation',
  'Structured data and AI crawler access',
  'Launch on your domain and business email',
  'Full ownership of the code and content',
]

const steps = [
  ['Free discovery call.', 'We talk through your business, your customers and what the site needs to do.'],
  ['Fixed quote.', 'You get the price, scope and timings in writing.'],
  ['Your content.', "You send your logo, photos and business details. We'll tell you exactly what we need."],
  ['Design and build.', 'We build the site and show you progress as it comes together.'],
  ['Private review.', 'You check it on a private link and tell us what to change. Nothing goes live until you approve it.'],
  ['Launch and handover.', "We launch on your domain and hand over the site's code and accounts."],
]

const industries = [
  'Law firms',
  'Accountants',
  'Dental practices',
  'Estate agents',
  'Clinics and salons',
  'Cleaning companies',
  'Consultancies',
  'Property managers',
]

const proof = [
  'Fixed quote before we start',
  'You own the finished site',
  'Built for Google and AI search',
  'Certified Retell AI Partner',
]

export default function Page() {
  return (
    <div>
      {/* Hero Section */}
      <section className="border-b border-hairline">
        <Container className="py-20 md:py-28">
          <div className="max-w-4xl">
            <HeadlineBlock as="h1" kicker="WEBSITE DESIGN | LEAD CAPTURE | AI SEARCH READY">
              Small Business Website Design That <span className="text-coral">Brings In Enquiries</span>
            </HeadlineBlock>
            <p className="text-xl text-body leading-normal mb-4 mt-6 max-w-[60ch]">
              Your website should do more than sit there looking smart. We build fast, clear websites that turn visitors into enquiries, work with your AI receptionist or chatbot, and give ChatGPT, Google and other AI search tools the facts they need about your business.
            </p>
            <p className="text-lg text-body leading-normal mb-4 max-w-[60ch]">
              Antek Automation builds websites for UK small businesses from Andover, Hampshire. Each build is structured for lead capture, Google and AI search, and can connect to a chatbot, voice agent or your existing systems. Website builds start from &pound;{PRICES.website.from}, and you own the finished site.
            </p>
            <p className="text-sm text-muted mb-8">By <a href="/about" className={LINK}>Andy Norman</a>, Founder | 30+ years in technology | Last updated November 2026</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <a href="/contact">
                <Button variant="primary">Book a free 30-min discovery call</Button>
              </a>
              <a href="#whats-included">
                <Button variant="secondary">See what&rsquo;s included</Button>
              </a>
            </div>
            <ul className="flex flex-wrap gap-3 mt-8" aria-label="Proof points">
              {proof.map((p) => (
                <li key={p} className="border-2 border-hairline px-3 py-1.5 font-mono font-bold text-xs uppercase tracking-eyebrow text-body">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            A Good-Looking Website Can Still <span className="text-coral">Lose You Work</span>
          </HeadlineBlock>
          <div className="space-y-6 text-lg text-body leading-normal max-w-[65ch]">
            <p>Most small business websites have the same problem. They look fine, but they don&rsquo;t do much.</p>
            <p>
              Someone finds you at 9pm and wants a quick answer. They can&rsquo;t find your prices, your coverage or the next step. All they get is a contact form, so they try the next business instead.
            </p>
            <p>
              Google can&rsquo;t always tell what you do or where you work. AI search tools can&rsquo;t find clear facts to quote. When a customer asks ChatGPT who to use, it names someone else.
            </p>
            <p>
              The enquiries that do come in land in an inbox. Nobody sees them until the evening, and by then the customer may have moved on.
            </p>
            <p>
              A new coat of paint won&rsquo;t fix that. The site has to be built around how customers find you, decide and get in touch.
            </p>
          </div>
        </Container>
      </section>

      {/* What Goes Into Every Website */}
      <section id="whats-included" className="bg-ink border-y border-hairline py-20 md:py-28 scroll-mt-24">
        <Container>
          <HeadlineBlock className="mb-6">
            What Goes Into <span className="text-coral">Every Website</span>
          </HeadlineBlock>
          <p className="text-lg text-body mb-16 max-w-[60ch]">
            The design matters. So does everything people don&rsquo;t see.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {included.map((title, i) => (
              <Card key={title} hover className="bg-charcoal h-full">
                <Icon letter={String(i + 1).padStart(2, '0')} size="lg" mono />
                <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-6 mb-3">{title}</h3>
                <p className="text-body leading-normal">{includedCopy[i]}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-10">
            Ordinary Website vs <span className="text-coral">Antek-Built Website</span>
          </HeadlineBlock>
          <div className="overflow-x-auto">
            <table className="w-full border-2 border-hairline text-left text-sm">
              <thead>
                <tr className="bg-coral text-ink">
                  <th className={TH}><span className="sr-only">Factor</span></th>
                  <th className={TH}>Ordinary website</th>
                  <th className="p-4 font-display font-extrabold uppercase">Antek-built website</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([label, ordinary, antek], i) => (
                  <tr key={label} className={`border-t border-hairline ${i % 2 === 0 ? 'bg-ink' : 'bg-charcoal'}`}>
                    <td className={TD_LABEL}>{label}</td>
                    <td className={TD}>{ordinary}</td>
                    <td className="p-4 text-body">{antek}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* What It Won't Do */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            What A Website <span className="text-coral">Can&rsquo;t Do</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-normal mb-10 max-w-[65ch]">We&rsquo;d rather be upfront.</p>
          <div className="space-y-8 max-w-[65ch]">
            <Card className="bg-charcoal">
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mb-3">It Won&rsquo;t Guarantee Rankings</h3>
              <p className="text-body leading-normal">
                Nobody can honestly promise you the top spot on Google or a mention in ChatGPT. We give you a strong foundation. Competition, reviews and your wider online presence still matter.
              </p>
            </Card>
            <Card className="bg-charcoal">
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mb-3">One Page Won&rsquo;t Rank Everywhere</h3>
              <p className="text-body leading-normal">
                If you want to win work in several towns, each town usually needs its own page. Stuffing every location onto one page makes it weaker, not stronger.
              </p>
            </Card>
            <Card className="bg-charcoal">
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mb-3">It Won&rsquo;t Fix A Weak Offer</h3>
              <p className="text-body leading-normal">
                A website can make a good business easier to find and easier to choose. It can&rsquo;t fix poor service, unclear pricing or a phone nobody answers. We can help with that last one.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-6">
            Website <span className="text-coral">Pricing</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-normal mb-10 max-w-[65ch]">
            Website builds start from &pound;{PRICES.website.from} for up to {PRICES.website.maxPages} pages. You get a fixed quote before we start.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-2 border-hairline text-left text-sm">
              <thead>
                <tr className="bg-coral text-ink">
                  <th className={TH}>Option</th>
                  <th className={TH}>Website</th>
                  <th className={TH}>Setup</th>
                  <th className="p-4 font-display font-extrabold uppercase">Monthly</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map(([option, site, setup, monthly], i) => (
                  <tr key={option} className={`border-t border-hairline ${i % 2 === 0 ? 'bg-ink' : 'bg-charcoal'}`}>
                    <td className={TD_LABEL}>{option}</td>
                    <td className={TD}>{site}</td>
                    <td className={TD}>{setup}</td>
                    <td className="p-4 text-body">{monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-body leading-normal mb-10 max-w-[65ch]">
            Extra pages and location pages are {PRICE_TEXT.websiteExtraPage} each.
          </p>

          <div className="bg-ink border-2 border-coral shadow-brutal-coral p-6 md:p-8 max-w-[65ch] mb-10">
            <h3 className="font-display font-extrabold text-xl uppercase text-cream mb-4">Every Website Build includes:</h3>
            <ul className="space-y-3 text-body">
              {buildIncludes.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="text-coral font-bold text-lg leading-none mt-0.5 shrink-0">&bull;</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 text-body leading-normal max-w-[65ch]">
            <p>Hosting and your domain are paid separately. We&rsquo;ll confirm the likely cost in your quote.</p>
            <p>
              Payment is 50% to start and 50% on launch. If you add AI, its monthly plan rolls month to month with {PRICES.noticeDays} days&rsquo; notice.
            </p>
            <p>
              Want more after launch? We can look after your <a href="/services/ai-seo" className={LINK}>AI SEO and GEO</a>. It&rsquo;s optional.
            </p>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-12">
            How It <span className="text-coral">Works</span>
          </HeadlineBlock>
          <ol className="space-y-0 max-w-[65ch]">
            {steps.map(([title, body], i) => (
              <li key={title} className="flex gap-6 border-t border-hairline py-6 last:border-b">
                <span className="font-mono font-bold text-coral text-lg shrink-0 w-8">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-body leading-normal">
                  <strong className="font-bold text-cream">{title}</strong> {body}
                </p>
              </li>
            ))}
          </ol>
          <p className="text-lg text-body leading-normal mt-10 max-w-[65ch]">
            Most builds go live in around {PRICES.website.goLive} from receiving your content.
          </p>
        </Container>
      </section>

      {/* Who It's For */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            Who It&rsquo;s <span className="text-coral">For</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-normal mb-8 max-w-[65ch]">
            This works best for service businesses that rely on enquiries, calls or bookings:
          </p>
          <ul className="flex flex-wrap gap-3 mb-10" aria-label="Industries">
            {industries.map((name) => (
              <li key={name} className="border-2 border-hairline px-3 py-1.5 font-mono font-bold text-xs uppercase tracking-eyebrow text-body">
                {name}
              </li>
            ))}
          </ul>
          <div className="space-y-4 text-body leading-normal max-w-[65ch]">
            <p>
              <strong className="font-bold text-cream">Are you a plumber, heating engineer or bathroom fitter?</strong> See our specialist site,{' '}
              <a href="https://www.plumberwebdesign.co.uk/" target="_blank" rel="noopener noreferrer" className={LINK}>Plumber Web Design</a>.
            </p>
            <p>
              <strong className="font-bold text-cream">Work in another trade?</strong> Visit{' '}
              <a href="https://www.webdesignfortradespeople.co.uk/" target="_blank" rel="noopener noreferrer" className={LINK}>Web Design for Tradespeople</a>.
            </p>
          </div>
        </Container>
      </section>

      <ReviewsStrip />

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-10">
            Frequently Asked <span className="text-coral">Questions</span>
          </HeadlineBlock>
          <div className="space-y-4 max-w-[65ch]">
            {faq.map((item) => (
              <details key={item.q} className="border-2 border-hairline bg-ink group">
                <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                  {item.q}
                  <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">{item.a}</div>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-charcoal border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-6">
            Not Sure If You Need <span className="text-coral">A New Website?</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-normal mb-10 max-w-[65ch]">
            Start with a free check. We&rsquo;ll show you whether ChatGPT, Perplexity, Gemini and Google&rsquo;s AI Overviews mention your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/free-ai-visibility-check">
              <Button variant="primary" className="text-lg px-10">Get a Free AI Visibility Check</Button>
            </a>
            <a href="/contact">
              <Button variant="secondary" className="text-lg px-10">Book a free 30-min discovery call</Button>
            </a>
          </div>
        </Container>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20">
        <Container>
          <HeadlineBlock as="h3" className="mb-8">
            Related <span className="text-coral">Services</span>
          </HeadlineBlock>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            <a href="/services/ai-chatbots" className="block">
              <Card hover className="h-full">
                <Icon letter="01" size="md" mono />
                <h4 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2">AI Chatbots</h4>
                <p className="text-body text-sm leading-normal">
                  A chatbot trained on your business that answers questions and captures leads 24/7. From {PRICE_TEXT.chatbotMonthly}.
                </p>
              </Card>
            </a>
            <a href="/ai-receptionist" className="block">
              <Card hover className="h-full">
                <Icon letter="02" size="md" mono />
                <h4 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2">AI Receptionist</h4>
                <p className="text-body text-sm leading-normal">
                  Productised phone answering from {PRICE_TEXT.receptionistMonthly}. Screens callers and books appointments 24/7.
                </p>
              </Card>
            </a>
            <a href="/services/geo" className="block">
              <Card hover className="h-full">
                <Icon letter="03" size="md" mono />
                <h4 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2">GEO</h4>
                <p className="text-body text-sm leading-normal">
                  Get cited by ChatGPT, Perplexity, Gemini and Google&rsquo;s AI Overviews. Start with a free AI visibility check.
                </p>
              </Card>
            </a>
            <a href="/services/workflow-automation" className="block">
              <Card hover className="h-full">
                <Icon letter="04" size="md" mono />
                <h4 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2">Workflow Automation</h4>
                <p className="text-body text-sm leading-normal">
                  Automate the admin that&rsquo;s burying you. CRM updates, invoicing, follow-ups.
                </p>
              </Card>
            </a>
          </div>
        </Container>
      </section>
    </div>
  )
}
