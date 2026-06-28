import { Button } from '../../../src/components/Button'
import { Card } from '../../../src/components/Card'
import { Icon } from '../../../src/components/Icon'
import { Container } from '../../../src/components/Container'
import { HeadlineBlock } from '../../../src/components/HeadlineBlock'
import { QuickRecap } from '../../../src/components/QuickRecap'
import { ResourcesCompliance } from '../../../src/components/ResourcesCompliance'

export default function Page() {
  const openChatbot = () => {
    window.dispatchEvent(new Event('openChatbot'))
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="border-b border-hairline">
        <Container className="py-20 md:py-28">
          <div className="max-w-4xl">
            <HeadlineBlock
              as="h1"
              kicker="AI CHATBOTS | 24/7 LEAD CAPTURE | HAMPSHIRE, UK"
            >
              A Website Chatbot <span className="text-coral">That Actually Knows Your Business</span>
            </HeadlineBlock>
            <p className="text-xl text-body leading-normal mb-4 mt-6 max-w-[60ch]">
              Not a generic FAQ widget. An AI trained on your services, prices, and availability that captures leads and books appointments around the clock.
            </p>
            <p className="text-sm text-muted mb-8">By <a href="/about" className="underline decoration-coral underline-offset-4 hover:text-coral transition-colors">Andy Norman</a>, Founder | 30+ years in technology | Last updated March 2026</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <Button variant="primary" onClick={openChatbot}>
                Try the Chatbot Demo
              </Button>
              <a href="/contact">
                <Button variant="secondary">
                  Get Your Chatbot
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <QuickRecap items={[
        'An AI chatbot trained on your business — answers questions, captures leads, and books appointments 24/7',
        'For businesses whose websites get traffic but lose visitors out of hours or at weekends',
        'From £57/month + £149 one-off setup — <a href="/pricing#ai-chatbot" class="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">see full pricing</a>',
        'Live on your website within 24–48 hours',
        'Typically handles ~80% of standard conversations autonomously; flags the rest for your team',
      ]} />

      {/* Problem Section */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            Your Website Is Open 24/7. <span className="text-coral">Your Team Isn't.</span>
          </HeadlineBlock>
          <div className="space-y-6 text-lg text-body leading-normal max-w-[65ch]">
            <p>
              Picture this. It's 10pm on a Tuesday. Someone's sitting on their sofa, phone in hand, looking for exactly the service you offer. They land on your website. They've got questions — how much does it cost? Do you cover their area? Can they book for next week?
            </p>
            <p>
              There's no one there to answer. No live chat. No quick reply. Just a contact form — an unanswered form. So they close the tab and try the next result on Google.
            </p>
            <div className="bg-ink border-2 border-coral shadow-brutal-coral p-6">
              <p className="font-display font-extrabold text-cream text-xl mb-2 uppercase">
                You paid for that click. They were ready to buy. <span className="text-coral">And they left because nobody was there.</span>
              </p>
              <p className="text-body">
                This happens dozens of times a week on most business websites. Evenings, weekends, bank holidays — your busiest traffic often arrives when your team is offline.
              </p>
            </div>
            <p>
              A chatbot that actually knows your business changes the whole equation. It's there at 10pm, at 6am on a Sunday, on Christmas Day. It answers questions, captures details, and books them in. While you sleep.
            </p>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-6">
            What Your Chatbot <span className="text-coral">Does</span>
          </HeadlineBlock>
          <p className="text-lg text-body mb-16 max-w-[60ch]">
            Not just any chatbot. One that's trained on your business, speaks in your tone, and actually helps people.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            <Card hover className="bg-charcoal h-full">
              <Icon letter="01" size="lg" mono />
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-6 mb-3">
                Answers Questions Instantly
              </h3>
              <p className="text-body leading-normal">
                Pricing, availability, service areas, opening hours, what you do, what you don't do. Trained on your actual business info, not generic waffle.
              </p>
            </Card>

            <Card hover className="bg-charcoal h-full">
              <Icon letter="02" size="lg" mono />
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-6 mb-3">
                Captures Lead Details
              </h3>
              <p className="text-body leading-normal">
                Name, email, phone number, what they need. Collected naturally through conversation, not through a boring form they'll abandon halfway through.
              </p>
            </Card>

            <Card hover className="bg-charcoal h-full">
              <Icon letter="03" size="lg" mono />
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-6 mb-3">
                Books Appointments
              </h3>
              <p className="text-body leading-normal">
                Connected to your calendar, so visitors can book a time slot that actually works. Confirmation sent automatically. No back-and-forth emails needed.
              </p>
            </Card>

            <Card hover className="bg-charcoal h-full">
              <Icon letter="04" size="lg" mono />
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-6 mb-3">
                Qualifies Leads
              </h3>
              <p className="text-body leading-normal">
                Asks the right questions to work out if someone's a good fit. Budget, timeline, location. You get warm leads, not low-quality leads.
              </p>
            </Card>

            <Card hover className="bg-charcoal h-full">
              <Icon letter="05" size="lg" mono />
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-6 mb-3">
                Sends You Notifications
              </h3>
              <p className="text-body leading-normal">
                Every lead gets pinged straight to your inbox, phone, or CRM. You'll know within seconds that someone's interested, even at 3am.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-4">
            How Does an <span className="text-coral">AI Chatbot</span> Compare to a Contact Form or <span className="text-coral">Live Chat?</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-normal mb-10 max-w-[65ch]">
            An AI chatbot combines the always-on availability of a contact form with the conversational engagement of live chat — without needing a human sitting at a screen. It captures more leads because it answers questions in real time, 24/7, and guides visitors toward booking rather than just collecting an email address.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-2 border-hairline text-left text-sm">
              <thead>
                <tr className="bg-coral text-ink">
                  <th className="p-4 font-display font-extrabold uppercase border-r border-ink/20"></th>
                  <th className="p-4 font-display font-extrabold uppercase border-r border-ink/20">AI Chatbot</th>
                  <th className="p-4 font-display font-extrabold uppercase border-r border-ink/20">Live Chat</th>
                  <th className="p-4 font-display font-extrabold uppercase">Contact Form</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-hairline bg-ink">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Availability</td>
                  <td className="p-4 text-body border-r border-hairline">24/7/365</td>
                  <td className="p-4 text-body border-r border-hairline">Office hours only</td>
                  <td className="p-4 text-body">24/7 but no instant response</td>
                </tr>
                <tr className="border-t border-hairline bg-charcoal">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Response Time</td>
                  <td className="p-4 text-body border-r border-hairline">Instant</td>
                  <td className="p-4 text-body border-r border-hairline">Minutes (if someone's available)</td>
                  <td className="p-4 text-body">Hours to days</td>
                </tr>
                <tr className="border-t border-hairline bg-ink">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Answers Questions</td>
                  <td className="p-4 text-body border-r border-hairline">Yes, trained on your business</td>
                  <td className="p-4 text-body border-r border-hairline">Yes, but needs a human</td>
                  <td className="p-4 text-body">No</td>
                </tr>
                <tr className="border-t border-hairline bg-charcoal">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Captures Leads</td>
                  <td className="p-4 text-body border-r border-hairline">Naturally during conversation</td>
                  <td className="p-4 text-body border-r border-hairline">If agent remembers to ask</td>
                  <td className="p-4 text-body">Yes, but high abandonment rate</td>
                </tr>
                <tr className="border-t border-hairline bg-ink">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Books Appointments</td>
                  <td className="p-4 text-body border-r border-hairline">Yes, directly into your calendar</td>
                  <td className="p-4 text-body border-r border-hairline">Manual booking by agent</td>
                  <td className="p-4 text-body">No</td>
                </tr>
                <tr className="border-t border-hairline bg-charcoal">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Monthly Cost</td>
                  <td className="p-4 text-body border-r border-hairline"><a href="/pricing#ai-chatbot" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">From £57/month — see pricing</a></td>
                  <td className="p-4 text-body border-r border-hairline">£500+/month (staff costs)</td>
                  <td className="p-4 text-body">Free</td>
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
            What Are the <span className="text-coral">Limits of an AI Chatbot?</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-normal mb-10 max-w-[65ch]">
            We'd rather be upfront than oversell you. Here's what a chatbot can and can't do:
          </p>

          <div className="space-y-8 max-w-[65ch]">
            <Card className="bg-charcoal">
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mb-3">
                It Handles About 80% of Conversations Perfectly
              </h3>
              <p className="text-body leading-normal">
                The common questions, the lead capture, the appointment booking -- it nails that. The other 20%? Unusual requests, complex complaints, edge cases. For those, it takes details and flags them for you. It won't make things up or pretend it knows something it doesn't.
              </p>
            </Card>

            <Card className="bg-charcoal">
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mb-3">
                It's Not a Replacement for Human Connection
              </h3>
              <p className="text-body leading-normal">
                Some customers want to talk to a real person. That's fine. Your chatbot can hand over to you during office hours or collect details for a callback. It's an initial contact handler, not a replacement for your team.
              </p>
            </Card>

            <Card className="bg-charcoal">
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mb-3">
                It's Only as Good as the Information You Give It
              </h3>
              <p className="text-body leading-normal">
                We spend proper time training it on your business. If your pricing changes or you add new services, we update it. But if you don't tell us, it can't know. Simple as that.
              </p>
            </Card>
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
                How much does an AI chatbot cost?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                From £57/month with a £149 one-off setup fee. <a href="/pricing#ai-chatbot" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">See full pricing</a> — no hidden fees.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Can it integrate with my CRM or booking system?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Yes. It connects to HubSpot, Google Calendar, Calendly, and most tools via API or webhook. Lead details flow straight into your existing systems without any manual copying.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What percentage of conversations can it handle?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Typically around 80% of conversations are handled autonomously (standard questions, lead capture, booking) — exact rates depend on how well the bot is trained on your business — common questions, lead capture, appointment booking. The other 20% (complex queries, complaints, edge cases) get flagged for your team to follow up.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Will it sound like a generic bot?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                No. It's trained on your business — your services, pricing, availability, and tone of voice. It answers like someone who actually works there, not a generic FAQ widget.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Can visitors still talk to a real person?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Yes. During office hours the chatbot can hand over to your team for a live conversation. Outside hours it captures the visitor's details so you can call them back.
              </div>
            </details>
          </div>
        </Container>
      </section>

      <ResourcesCompliance links={[
        { text: 'ICO data protection for businesses', url: 'https://ico.org.uk/for-organisations/guide-to-data-protection/', context: 'UK law on handling lead data collected via chatbot conversations' },
        { text: 'Chatbot overview', url: 'https://en.wikipedia.org/wiki/Chatbot', context: 'Background on conversational AI and chatbot technology' },
        { text: 'Chatbot technology overview', url: 'https://en.wikipedia.org/wiki/Chatbot', context: 'Background on the technology behind AI website chatbots' },
      ]} />

      {/* CTA Section */}
      <section className="bg-charcoal py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-6">
            See It <span className="text-coral">in Action</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-normal mb-4 max-w-[65ch]">
            Hit the button below to chat with our demo bot. Ask it questions, try to trip it up, see how it handles a real conversation. That's the kind of thing we'll build for your business.
          </p>
          <p className="text-body leading-normal mb-10 max-w-[65ch]">
            Or if you've seen enough and want to get cracking, book a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" className="text-lg px-10" onClick={openChatbot}>
              Chat with the Demo Bot
            </Button>
            <a href="/contact">
              <Button variant="secondary" className="text-lg px-10">
                Book a free 30-min discovery call
              </Button>
            </a>
          </div>
        </Container>
      </section>

      {/* ── GEO CROSS-SELL (our 4th service — AI-search visibility) ── */}
      <section className="bg-coral py-16 md:py-20">
        <Container>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase tracking-tight-lg text-ink mb-6">
            Your Website Answers. <span className="text-cream">Does AI Search Recommend It?</span>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
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
            <a href="/services/workflow-automation" className="block">
              <Card hover className="h-full">
                <Icon letter="03" size="md" mono />
                <h4 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2">Workflow Automation</h4>
                <p className="text-body text-sm leading-normal">
                  Automate the admin that's burying you. CRM updates, invoicing, follow-ups.
                </p>
              </Card>
            </a>
            <a href="/locations/hampshire" className="block">
              <Card hover className="h-full">
                <Icon letter="04" size="md" mono />
                <h4 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2">Hampshire</h4>
                <p className="text-body text-sm leading-normal">
                  AI automation services for businesses across Hampshire and the South Coast.
                </p>
              </Card>
            </a>
          </div>
          <p className="text-body mt-8">
            Local to us? See AI chatbots for{' '}
            <a href="/locations/winchester" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Winchester businesses</a>.
          </p>
        </Container>
      </section>
    </div>
  )
}
