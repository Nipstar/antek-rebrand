import { useState, lazy, Suspense } from 'react'
import { Button } from '../../../src/components/Button'
import { Card } from '../../../src/components/Card'
import { Icon } from '../../../src/components/Icon'
import { Container } from '../../../src/components/Container'
import { HeadlineBlock } from '../../../src/components/HeadlineBlock'
import { QuickRecap } from '../../../src/components/QuickRecap'
import { ResourcesCompliance } from '../../../src/components/ResourcesCompliance'
import { RetellDemoCards } from '../../../src/components/RetellDemoCards'

const VoiceChat = lazy(() =>
  import('../../../src/components/VoiceChat').then((m) => ({ default: m.VoiceChat }))
)

// What our voice agents do — six jobs, one agent.
const JOBS = [
  {
    title: 'Speed to lead',
    body: 'The moment a lead comes in — web form, missed call, ad click — the AI calls them back. In seconds, not the next morning. The faster you respond, the more you win, and most businesses respond far too slowly. This is the single biggest thing voice AI can do for your revenue.',
  },
  {
    title: 'Qualify and book',
    body: 'It asks your qualifying questions, scores the lead, and only books the ones worth your time. Budget, timeline, job type, location. You get warm, qualified appointments in your calendar, not a diary full of tyre-kickers.',
  },
  {
    title: 'Confirm and remind',
    body: "Outbound calls that confirm tomorrow's bookings, cut your no-show rate, and offer a rebook if they can't make it. Your diary stays full and accurate without anyone lifting the phone.",
  },
  {
    title: 'Customer service',
    body: 'It handles the routine inbound — opening hours, job status, account questions, the same five FAQs you answer every day. Your team stops getting interrupted and deals with the work that actually needs a human.',
  },
  {
    title: 'Follow up and reactivate',
    body: 'It chases quotes that went quiet, follows up after a job, asks for a review, and wins back lapsed customers. The calls you know you should make and never get round to.',
  },
  {
    title: 'Overflow and after-hours',
    body: "It sits alongside your existing phone team and picks up the overflow at peak and the calls after everyone's gone home. You stop paying for round-the-clock cover you don't need.",
  },
]

export default function Page() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false)

  return (
    <div>
      {/* Hero Section */}
      <section className="border-b border-hairline">
        <Container className="py-20 md:py-28">
          <div className="max-w-4xl">
            <HeadlineBlock as="h1" kicker="AI VOICE AGENTS • UK">
              Your leads go cold in minutes. <span className="text-coral">Your AI calls them back in seconds.</span>
            </HeadlineBlock>
            <p className="text-xl text-body leading-normal mb-4 mt-6 max-w-[60ch]">
              Speed-to-lead callbacks, lead qualifying, appointment reminders and customer service. Inbound and outbound, around the clock. This is voice AI doing the whole job, not just answering the phone.
            </p>
            <p className="text-sm text-muted mb-8">By <a href="/about" className="underline decoration-coral underline-offset-4 hover:text-coral transition-colors">Andy Norman</a>, Founder | 30+ years in technology | Certified Retell AI Partner</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <Button variant="primary" onClick={() => setIsVoiceChatOpen(true)}>
                Try the Demo Now
              </Button>
              <a href="/contact">
                <Button variant="secondary">
                  Book a Free 30-Min Discovery Call
                </Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <QuickRecap items={[
        'An AI voice agent that calls new leads back in seconds, qualifies them, books the good ones, confirms appointments and handles routine customer calls',
        "Works inbound and outbound — the calls you can't get to, and the calls you never get round to making",
        'For UK businesses losing leads to slow follow-up, no-shows and a phone that never stops',
        'From £97/month + £249 setup — bespoke outbound and multi-step builds scoped on a call — <a href="/pricing#ai-voice-assistant" class="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">see pricing</a>',
        'Live in 24–48 hours, configured from your website and your tools',
      ]} />

      {/* The real problem */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            You don't lose work to a ringing phone. You lose it in the <span className="text-coral">gaps around it.</span>
          </HeadlineBlock>
          <div className="space-y-6 text-lg text-body leading-normal max-w-[65ch]">
            <p>
              Most businesses don't lose work because the phone rings out. They lose it in the gaps around the phone.
            </p>
            <p>
              A lead fills in your form at 9pm and you call back at 11am the next day. They've already booked someone else. A customer rings to ask where their job is, and your engineer picks up mid-task to answer it. Tomorrow's appointments don't get confirmed, so two of them no-show. The quote you sent last week goes quiet, and you never chase it.
            </p>
            <p>
              None of that is a missed call. It's slow follow-up, wasted time on routine questions, and the jobs you meant to chase but didn't. A voice agent closes those gaps — both directions, day and night.
            </p>
          </div>
        </Container>
      </section>

      {/* What our voice agents do — numbered rows */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-6">
            What Our <span className="text-coral">Voice Agents</span> Do
          </HeadlineBlock>
          <p className="text-lg text-body mb-12 max-w-[60ch]">
            Six jobs, one agent. Built around how your business actually runs.
          </p>

          <div className="border-t border-hairline">
            {JOBS.map((job, i) => (
              <div key={job.title} className="grid md:grid-cols-[auto_1fr] gap-x-6 gap-y-2 py-6 border-b border-hairline">
                <span className="font-mono font-bold text-coral text-lg">{String(i + 1).padStart(2, '0')}</span>
                <div className="max-w-[65ch]">
                  <h3 className="font-display font-extrabold text-xl uppercase text-cream mb-2">{job.title}</h3>
                  <p className="text-body leading-normal">{job.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Spotlight: speed to lead */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            Spotlight: <span className="text-coral">speed to lead.</span>
          </HeadlineBlock>
          <div className="space-y-6 text-lg text-body leading-normal max-w-[65ch]">
            <p className="font-bold text-cream">If you do one thing with voice AI, do this.</p>
            <p>
              The data on lead response time is brutal. Contact a lead within the first minute and you're far more likely to convert them than if you wait even half an hour. Wait until the next day, which is what most busy businesses do, and the lead has usually gone cold or gone elsewhere.
            </p>
            <p>
              Your AI voice agent removes the wait entirely. A form hits your website, a caller hangs up, an ad generates an enquiry — and the agent rings them straight back while your business is still the one they were looking at. It qualifies them, books them if they're ready, and hands you a hot lead instead of a cold one.
            </p>
            <p>
              You can't sit by the phone 24/7. It can.
            </p>
          </div>
        </Container>
      </section>

      {/* How it compares */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-4">
            How It <span className="text-coral">Compares</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-normal mb-10 max-w-[65ch]">
            A voice agent isn't another inbox or another hire. Here's how it stacks up against doing it yourself and against a traditional call centre.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-2 border-hairline text-left text-sm">
              <thead>
                <tr className="bg-coral text-ink">
                  <th className="p-4 font-display font-extrabold uppercase border-r border-ink/20"></th>
                  <th className="p-4 font-display font-extrabold uppercase border-r border-ink/20">AI Voice Agent</th>
                  <th className="p-4 font-display font-extrabold uppercase border-r border-ink/20">You &amp; Your Team</th>
                  <th className="p-4 font-display font-extrabold uppercase">Call Centre</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-hairline bg-charcoal">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Speed to lead</td>
                  <td className="p-4 text-body border-r border-hairline">Calls back in seconds</td>
                  <td className="p-4 text-body border-r border-hairline">When you get a minute</td>
                  <td className="p-4 text-body">Inbound only, usually</td>
                </tr>
                <tr className="border-t border-hairline bg-ink">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Outbound follow-up</td>
                  <td className="p-4 text-body border-r border-hairline">Automatic, every time</td>
                  <td className="p-4 text-body border-r border-hairline">When you remember</td>
                  <td className="p-4 text-body">Extra cost per campaign</td>
                </tr>
                <tr className="border-t border-hairline bg-charcoal">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Availability</td>
                  <td className="p-4 text-body border-r border-hairline">24/7/365</td>
                  <td className="p-4 text-body border-r border-hairline">Working hours</td>
                  <td className="p-4 text-body">Set hours, premium for more</td>
                </tr>
                <tr className="border-t border-hairline bg-ink">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Consistency</td>
                  <td className="p-4 text-body border-r border-hairline">Same every call</td>
                  <td className="p-4 text-body border-r border-hairline">Varies with the day</td>
                  <td className="p-4 text-body">Script-bound</td>
                </tr>
                <tr className="border-t border-hairline bg-charcoal">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Knows your business</td>
                  <td className="p-4 text-body border-r border-hairline">Trained on it</td>
                  <td className="p-4 text-body border-r border-hairline">Yes</td>
                  <td className="p-4 text-body">Basic script</td>
                </tr>
                <tr className="border-t border-hairline bg-ink">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Cost</td>
                  <td className="p-4 text-body border-r border-hairline"><a href="/pricing#ai-voice-assistant" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">From £97/month</a></td>
                  <td className="p-4 text-body border-r border-hairline">Your time</td>
                  <td className="p-4 text-body">£200–£800+/month</td>
                </tr>
                <tr className="border-t border-hairline bg-charcoal">
                  <td className="p-4 font-bold text-cream border-r border-hairline">Scales</td>
                  <td className="p-4 text-body border-r border-hairline">Unlimited concurrent calls</td>
                  <td className="p-4 text-body border-r border-hairline">One call at a time</td>
                  <td className="p-4 text-body">Cost rises with volume</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* What it can't do */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-8">
            What It <span className="text-coral">Can't Do</span>
          </HeadlineBlock>
          <div className="space-y-8 max-w-[65ch]">
            <Card className="bg-ink">
              <Icon letter="01" size="md" mono />
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-4 mb-3">
                It's Not a Human
              </h3>
              <p className="text-body leading-normal">
                About 1 in 20 callers clock that it's AI. If someone wants a person, it transfers them or takes a message.
              </p>
            </Card>

            <Card className="bg-ink">
              <Icon letter="02" size="md" mono />
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-4 mb-3">
                It Won't Blag Complex Issues
              </h3>
              <p className="text-body leading-normal">
                A complicated complaint or a judgement call gets captured and flagged for you, not bluffed through.
              </p>
            </Card>

            <Card className="bg-ink">
              <Icon letter="03" size="md" mono />
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-4 mb-3">
                It's Only as Good as Its Setup
              </h3>
              <p className="text-body leading-normal">
                Quality depends on how well it's trained on your business, which is why onboarding is thorough.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Cross-link block — prevents overlap with the AI Receptionist page */}
      <section className="py-12 md:py-16">
        <Container>
          <div className="border-l-[5px] border-coral bg-ink p-6 md:p-8 max-w-[65ch]">
            <p className="font-display font-extrabold text-xl uppercase text-cream mb-2">
              Just want your inbound calls <span className="text-coral">answered and screened?</span>
            </p>
            <p className="text-body leading-normal mb-4">
              That's our productised AI Receptionist — answer, screen and book, from £97/month.
            </p>
            <a href="/ai-receptionist" className="font-sans font-bold uppercase text-sm text-coral hover:underline">
              See the AI Receptionist &rarr;
            </a>
          </div>
        </Container>
      </section>

      {/* FAQ Section — six questions, must match the FAQPage schema in +Head */}
      <section className="py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-10">
            Frequently Asked <span className="text-coral">Questions</span>
          </HeadlineBlock>
          <div className="space-y-4 max-w-[65ch]">
            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center gap-4">
                What's the difference between a voice agent and your AI Receptionist?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                The AI Receptionist is our productised inbound product — it answers, screens and books your incoming calls. A voice agent is the broader, bespoke build: it does that plus outbound work like speed-to-lead callbacks, appointment reminders, follow-ups and customer service. If you just need calls answered, start with the Receptionist.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center gap-4">
                Can it make outbound calls, not just answer them?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Yes. That's the main thing that sets it apart. It calls leads back, confirms appointments, chases quotes and follows up after jobs — triggered by your forms, your CRM or a schedule.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center gap-4">
                How fast can it call a new lead back?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Within seconds of the lead coming in. The moment a form is submitted or a call is missed, the agent rings them back, while they're still interested.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center gap-4">
                Will callers know they're talking to AI?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                About 1 in 20 notice. The voice is natural. If someone wants a person, it transfers or takes a message.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center gap-4">
                What does it integrate with?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Google Calendar, Outlook, Calendly, and most CRMs and field-service tools via API or webhook. Outbound calls can be triggered straight from your existing systems.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center gap-4">
                How much does it cost?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform shrink-0">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                From £97/month with a £249 setup. Bespoke outbound and multi-step builds are scoped on a quick call. <a href="/pricing#ai-voice-assistant" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">See pricing</a>.
              </div>
            </details>
          </div>
        </Container>
      </section>

      <ResourcesCompliance links={[
        { text: 'ICO call recording guidance', url: 'https://ico.org.uk/for-organisations/guide-to-data-protection/', context: 'UK law on call recording and caller data handling' },
        { text: 'Ofcom UK call statistics', url: 'https://www.ofcom.org.uk/', context: 'UK regulator for business telephone services' },
        { text: 'Interactive voice response (IVR) overview', url: 'https://en.wikipedia.org/wiki/Interactive_voice_response', context: 'Background on automated call answering technology' },
      ]} />

      {/* CTA Section */}
      <section className="bg-charcoal py-20 md:py-28">
        <Container>
          <HeadlineBlock className="mb-6">
            Try It <span className="text-coral">Right Now</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-normal mb-4 max-w-[65ch]">
            Seriously. Hit the button below and have a chat with our demo agent. Ask it anything. See how natural it sounds. No signup, no credit card, no sales pitch. Just the tech, doing its thing.
          </p>
          <p className="text-body leading-normal mb-10 max-w-[65ch]">
            If you like what you hear, get in touch and we'll build one for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" className="text-lg px-10" onClick={() => setIsVoiceChatOpen(true)}>
              Talk to the AI Agent
            </Button>
            <a href="/contact">
              <Button variant="secondary" className="text-lg px-10">
                Book a free 30-min discovery call
              </Button>
            </a>
          </div>
        </Container>
      </section>

      {/* ── RETELL DEMOS — reframed around use-case scenarios ── */}
      <RetellDemoCards
        heading={<>Hear a <span className="text-coral">Voice Agent</span> in Action</>}
        subhead="Speed-to-lead callback, qualifying call, reminder and rebook — tap a scenario and talk to a live AI agent, the same kind we build for businesses like yours."
      />

      {/* ── GEO CROSS-SELL (our 4th service — AI-search visibility) ── */}
      <section className="bg-coral py-16 md:py-20">
        <Container>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl uppercase tracking-tight-lg text-ink mb-6">
            Your Phone&rsquo;s Covered. Is <span className="text-cream">AI Search Covering You?</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <a href="/services/ai-chatbots" className="block">
              <Card hover className="h-full">
                <Icon letter="01" size="md" mono />
                <h4 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2">AI Chatbots</h4>
                <p className="text-body text-sm leading-normal">
                  Capture leads on your website 24/7 with a chatbot trained on your business.
                </p>
              </Card>
            </a>
            <a href="/services/workflow-automation" className="block">
              <Card hover className="h-full">
                <Icon letter="02" size="md" mono />
                <h4 className="font-display font-extrabold text-lg uppercase text-cream mt-4 mb-2">Workflow Automation</h4>
                <p className="text-body text-sm leading-normal">
                  Automate the admin that's burying you. CRM updates, invoicing, follow-ups.
                </p>
              </Card>
            </a>
          </div>
          <p className="text-body mt-8">
            Local to us? See AI voice agents for{' '}
            <a href="/locations/basingstoke" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Basingstoke businesses</a>.
          </p>
        </Container>
      </section>

      {/* Voice Chat Modal */}
      {isVoiceChatOpen && (
        <Suspense fallback={null}>
          <VoiceChat isOpen={isVoiceChatOpen} onClose={() => setIsVoiceChatOpen(false)} />
        </Suspense>
      )}
    </div>
  )
}
