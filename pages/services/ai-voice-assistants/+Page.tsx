import { useState, lazy, Suspense } from 'react'
import { Button } from '../../../src/components/Button'
import { Card } from '../../../src/components/Card'
import { Icon } from '../../../src/components/Icon'
import { QuickRecap } from '../../../src/components/QuickRecap'
import { ResourcesCompliance } from '../../../src/components/ResourcesCompliance'

const VoiceChat = lazy(() =>
  import('../../../src/components/VoiceChat').then((m) => ({ default: m.VoiceChat }))
)

export default function Page() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false)

  return (
    <div className="bg-off-white">
      {/* Hero Section */}
      <section className="bg-warm-beige border-b-3 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              AI VOICE AGENTS &bull; UK
            </p>
            <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              An AI Receptionist That Actually Sounds Like a Real Person
            </h1>
            <p className="text-xl text-charcoal leading-normal mb-4">
              Our AI voice agents answer every call, book appointments, qualify leads and send you the details. They work 24/7 and cost less than a part-time hire.
            </p>
            <p className="text-sm text-mid-gray mb-8">By <a href="/about" className="underline hover:text-terracotta transition-colors">Andy Norman</a>, Founder | 30+ years in technology | Last updated March 2026</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <Button variant="primary" onClick={() => setIsVoiceChatOpen(true)}>
                Try the Demo Now
              </Button>
              <a href="/contact">
                <Button variant="secondary">
                  Get Your Voice Agent
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <QuickRecap items={[
        'An AI agent answers your calls 24/7, books appointments directly into your calendar, and sends you a call summary',
        'For UK businesses missing calls when they\'re on the job, in a meeting, or out of hours',
        'From £97/month + £249 one-off setup — <a href="/pricing#ai-voice-assistant" class="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">see full pricing</a>',
        'Live in 24–48 hours — we configure everything from your website, no long setup',
        '~80% of incoming calls handled without you picking up; the rest are transferred or messaged to you',
      ]} />

      {/* Problem Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            How Many Calls Did You Miss Last Week?
          </h2>
          <div className="space-y-6 text-lg text-charcoal leading-normal">
            <p>
              Be honest. You were on a job. In a meeting. Having dinner with your family. The phone rang, you couldn't get to it, and whoever was calling hung up and rang someone else.
            </p>
            <p>
              It happens to every business owner. You're busy doing the actual work, and the phone just keeps ringing. You can't answer it when you're elbow-deep in a project, mid-conversation with a client, or trying to have five minutes of peace.
            </p>
            <div className="bg-peach border-3 border-charcoal p-6">
              <p className="font-black text-charcoal text-xl mb-2">
                Many UK small businesses miss a significant portion of incoming calls — especially during busy periods, out of hours, and when owners are on other jobs.
              </p>
              <p className="text-charcoal">
                That's not a guess. That's real data. Every one of those missed calls is lost revenue — straight to the competitor who picked up.
              </p>
            </div>
            <p>
              Voicemail? Nobody leaves voicemails anymore. They just call the next number on Google. You'll never even know they tried.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-soft-sage border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-6 text-center">
            Here's What Happens When Someone Rings You
          </h2>
          <p className="text-lg text-charcoal text-center mb-16 max-w-3xl mx-auto">
            From the moment the phone rings to the moment you get a summary in your pocket. The whole thing takes about two minutes.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card hover>
              <div className="w-16 h-16 bg-terracotta text-off-white flex items-center justify-center font-black text-3xl border-3 border-charcoal shadow-brutal-sm mb-6">
                1
              </div>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                The Phone Rings
              </h3>
              <p className="text-charcoal leading-normal">
                Someone calls your business number. Your AI agent picks up within two rings. No hold music. No "press 1 for sales." Just a friendly, natural-sounding voice.
              </p>
            </Card>

            <Card hover>
              <div className="w-16 h-16 bg-terracotta text-off-white flex items-center justify-center font-black text-3xl border-3 border-charcoal shadow-brutal-sm mb-6">
                2
              </div>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                It Has a Proper Conversation
              </h3>
              <p className="text-charcoal leading-normal">
                The AI asks what they need, answers questions about your services, pricing, and availability. It's trained on your business, so it actually knows what it's talking about.
              </p>
            </Card>

            <Card hover>
              <div className="w-16 h-16 bg-terracotta text-off-white flex items-center justify-center font-black text-3xl border-3 border-charcoal shadow-brutal-sm mb-6">
                3
              </div>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                It Captures Their Details
              </h3>
              <p className="text-charcoal leading-normal">
                Name, number, email, what they need, when they need it. All collected naturally during the conversation, not through some robotic questionnaire.
              </p>
            </Card>

            <Card hover>
              <div className="w-16 h-16 bg-terracotta text-off-white flex items-center justify-center font-black text-3xl border-3 border-charcoal shadow-brutal-sm mb-6">
                4
              </div>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                It Books the Appointment
              </h3>
              <p className="text-charcoal leading-normal">
                Connected to your calendar, so it checks your real availability and books them in. They get a confirmation text or email straight away.
              </p>
            </Card>

            <Card hover>
              <div className="w-16 h-16 bg-terracotta text-off-white flex items-center justify-center font-black text-3xl border-3 border-charcoal shadow-brutal-sm mb-6">
                5
              </div>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                You Get a Summary
              </h3>
              <p className="text-charcoal leading-normal">
                Within seconds, you get a text or email with everything: who called, what they want, their contact details, and when they're booked in. Check it when you're ready.
              </p>
            </Card>

            <Card hover>
              <div className="w-16 h-16 bg-terracotta text-off-white flex items-center justify-center font-black text-3xl border-3 border-charcoal shadow-brutal-sm mb-6">
                6
              </div>
              <h3 className="font-black text-xl uppercase text-charcoal mb-3">
                Urgent? It Puts Them Through
              </h3>
              <p className="text-charcoal leading-normal">
                If something's genuinely urgent, or it's a high-value caller, the AI recognises that and transfers the call to your mobile straight away. You decide the rules.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-4">
            How Does an AI Voice Agent Compare to Other Options?
          </h2>
          <p className="text-lg text-charcoal leading-normal mb-10">
            An AI voice agent handles calls autonomously using natural conversation, unlike voicemail which callers ignore or answering services that cost significantly more per hour. Here's how the options stack up for a typical UK small business.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-3 border-charcoal text-left text-sm">
              <thead>
                <tr className="bg-charcoal text-off-white">
                  <th className="p-4 font-black uppercase border-r-3 border-off-white/20"></th>
                  <th className="p-4 font-black uppercase border-r-3 border-off-white/20">AI Voice Agent</th>
                  <th className="p-4 font-black uppercase border-r-3 border-off-white/20">Answering Service</th>
                  <th className="p-4 font-black uppercase">Voicemail</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t-3 border-charcoal bg-white">
                  <td className="p-4 font-bold text-charcoal border-r-3 border-charcoal">Availability</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">24/7/365</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">Business hours only (usually)</td>
                  <td className="p-4 text-charcoal">24/7 but callers rarely leave messages</td>
                </tr>
                <tr className="border-t-3 border-charcoal bg-peach">
                  <td className="p-4 font-bold text-charcoal border-r-3 border-charcoal">Monthly Cost</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal"><a href="/pricing#ai-voice-assistant" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">From £97/month — see pricing</a></td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">£200-£800/month</td>
                  <td className="p-4 text-charcoal">Free</td>
                </tr>
                <tr className="border-t-3 border-charcoal bg-white">
                  <td className="p-4 font-bold text-charcoal border-r-3 border-charcoal">Books Appointments</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">Yes, directly into your calendar</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">Sometimes, depends on provider</td>
                  <td className="p-4 text-charcoal">No</td>
                </tr>
                <tr className="border-t-3 border-charcoal bg-peach">
                  <td className="p-4 font-bold text-charcoal border-r-3 border-charcoal">Knows Your Business</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">Trained on your services, pricing, FAQs</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">Basic script only</td>
                  <td className="p-4 text-charcoal">N/A</td>
                </tr>
                <tr className="border-t-3 border-charcoal bg-white">
                  <td className="p-4 font-bold text-charcoal border-r-3 border-charcoal">Caller Experience</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">Natural conversation, answers questions</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">Takes a message</td>
                  <td className="p-4 text-charcoal">Recorded greeting</td>
                </tr>
                <tr className="border-t-3 border-charcoal bg-peach">
                  <td className="p-4 font-bold text-charcoal border-r-3 border-charcoal">Scales With You</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">Handles unlimited concurrent calls</td>
                  <td className="p-4 text-charcoal border-r-3 border-charcoal">Cost increases with volume</td>
                  <td className="p-4 text-charcoal">One at a time</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What It Won't Do */}
      <section className="bg-warm-beige border-b-3 border-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
            What Are the Limits of an AI Voice Agent?
          </h2>
          <p className="text-lg text-charcoal leading-normal mb-10">
            We're not going to pretend this is magic. It's brilliant technology, but it has limits. Here's what you should know:
          </p>

          <div className="space-y-8">
            <Card>
              <Icon letter="1" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-3">
                It's Not a Human
              </h3>
              <p className="text-charcoal leading-normal">
                About 1 in 20 callers will realise they're talking to AI. Most won't. But some will, and a few of them might prefer to speak to a real person. That's fine -- the AI can transfer them to you or take a message.
              </p>
            </Card>

            <Card>
              <Icon letter="2" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-3">
                It Can't Handle Truly Complex Issues
              </h3>
              <p className="text-charcoal leading-normal">
                If someone rings with a complicated complaint or a situation that needs real judgement, the AI will take their details and flag it for you. It's not going to try to blag its way through something it shouldn't.
              </p>
            </Card>

            <Card>
              <Icon letter="3" size="md" />
              <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-3">
                It Needs Setting Up Properly
              </h3>
              <p className="text-charcoal leading-normal">
                The quality depends on how well it's trained on your business. That's why we spend time getting your services, prices, FAQs, and processes right. Answer accuracy depends on training data — which is why onboarding is thorough.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How much does an AI voice agent cost?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                From £97/month with a £249 one-off setup fee. <a href="/pricing#ai-voice-assistant" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">See full pricing</a> — no hidden fees.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Will callers know they're talking to AI?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                About 1 in 20 callers notice. The voice sounds natural and conversational — most people assume they're speaking to a receptionist. If someone does ask for a real person, the AI can transfer them to you or take a message.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Can it book appointments into my calendar?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes. It connects to Google Calendar, Outlook, Calendly, and other scheduling tools. It checks your real availability, books the caller in, and sends them a confirmation automatically.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What happens if the AI can't answer a question?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                It takes the caller's details and flags it for you to follow up. It won't make things up or try to blag its way through something it shouldn't. You get a notification with the caller's name, number, and what they asked about.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How long does it take to set up?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Typically 24–48 hours from kickoff. We pull your services, pricing, and FAQs from your website, configure the screening logic, and forward your number. Most clients are live the same day or next day.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What support is included?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Standard queries are responded to within 24 hours. Critical incidents — such as the agent going offline during business hours — are responded to within 4 hours. Included across all plans.
              </div>
            </details>
          </div>
        </div>
      </section>

      <ResourcesCompliance links={[
        { text: 'ICO call recording guidance', url: 'https://ico.org.uk/for-organisations/guide-to-data-protection/', context: 'UK law on call recording and caller data handling' },
        { text: 'Ofcom UK call statistics', url: 'https://www.ofcom.org.uk/', context: 'UK regulator for business telephone services' },
        { text: 'Interactive voice response (IVR) overview', url: 'https://en.wikipedia.org/wiki/Interactive_voice_response', context: 'Background on automated call answering technology' },
      ]} />

      {/* CTA Section */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-off-white mb-6">
            Try It Right Now
          </h2>
          <p className="text-lg text-off-white leading-normal mb-4">
            Seriously. Hit the button below and have a chat with our demo agent. Ask it anything. See how natural it sounds. No signup, no credit card, no sales pitch. Just the tech, doing its thing.
          </p>
          <p className="text-off-white leading-normal mb-10">
            If you like what you hear, get in touch and we'll build one for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" className="text-lg px-10" onClick={() => setIsVoiceChatOpen(true)}>
              Talk to the AI Agent
            </Button>
            <a href="/contact">
              <Button variant="secondary" className="text-lg px-10">
                Book a free 30-min discovery call
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h3 className="font-black text-2xl uppercase tracking-tight-lg text-charcoal mb-8 text-center">
            Related Services
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/services/ai-chatbots" className="block">
              <Card hover>
                <Icon letter="C" size="md" />
                <h4 className="font-black text-lg uppercase text-charcoal mt-4 mb-2">AI Chatbots</h4>
                <p className="text-charcoal text-sm leading-normal">
                  Capture leads on your website 24/7 with a chatbot trained on your business.
                </p>
              </Card>
            </a>
            <a href="/services/workflow-automation" className="block">
              <Card hover>
                <Icon letter="W" size="md" />
                <h4 className="font-black text-lg uppercase text-charcoal mt-4 mb-2">Workflow Automation</h4>
                <p className="text-charcoal text-sm leading-normal">
                  Automate the admin that's burying you. CRM updates, invoicing, follow-ups.
                </p>
              </Card>
            </a>
            <a href="/locations/hampshire" className="block">
              <Card hover>
                <Icon letter="H" size="md" />
                <h4 className="font-black text-lg uppercase text-charcoal mt-4 mb-2">Hampshire</h4>
                <p className="text-charcoal text-sm leading-normal">
                  AI automation services for businesses across Hampshire and the South Coast.
                </p>
              </Card>
            </a>
          </div>
        </div>
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
