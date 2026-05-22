import { useState, Suspense, lazy } from 'react';
import { Button } from '../../../src/components/Button';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';
import { CalBooking } from '../../../src/components/CalBooking';
import { VoiceDemoButton } from '../../../src/components/VoiceDemoButton';
import { QuickRecap } from '../../../src/components/QuickRecap';
import { ResourcesCompliance } from '../../../src/components/ResourcesCompliance';

const VoiceChat = lazy(() => import('../../../src/components/VoiceChat').then(m => ({ default: m.VoiceChat })));

export default function Page() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);

  return (
    <div className="bg-off-white">

      {/* ── HERO ── */}
      <section className="bg-warm-beige border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              AI AUTOMATION &bull; SOUTHAMPTON
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for Southampton Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              Southampton is a city that knows how to work. It's a major port, a university city, and home to a strong service economy that covers everything from maritime logistics to high-street retail. From Ocean Village to Portswood, from Shirley to Bitterne &mdash; the businesses here are practical, no-nonsense, and focused on getting the job done.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              We're a <a href="/locations/hampshire" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Hampshire</a>-based AI automation agency, just up the road in Andover. We build voice agents, chatbots, and workflow automation for Southampton businesses that are tired of losing leads to missed calls and drowning in admin.
            </p>
            <p className="text-sm text-mid-gray mb-8">By <a href="/about" className="underline hover:text-terracotta transition-colors">Andy Norman</a>, Founder | 30+ years in technology</p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              <a href="/contact">
                <Button variant="primary">Book a free 15-min chat</Button>
              </a>
              <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
            </div>
          </div>
        </div>
      </section>

      <QuickRecap items={[
        'AI automation for Southampton and Hampshire businesses — voice agents, chatbots, and workflow automation',
        'For Southampton service businesses tired of missing calls and drowning in admin',
        'From £57/month — based in Andover, about 30 minutes up the road — <a href="/pricing" class="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">see full pricing</a>',
        'Voice and chat products live within 24–48 hours; closer to you than any London agency',
        'No travel costs, no commuting overheads — everything delivered remotely by a team that knows Hampshire',
      ]} />

      <ResourcesCompliance links={[
        { text: 'ONS regional economic data', url: 'https://www.ons.gov.uk/economy/grossdomesticproductgdp', context: 'Official ONS statistics on UK regional economic output' },
        { text: 'Southampton City Council business profile', url: 'https://www.southampton.gov.uk/business/', context: 'Local authority business support and economic data' },
        { text: 'ICO data protection guidance', url: 'https://ico.org.uk/for-organisations/guide-to-data-protection/', context: 'UK law governing customer data collected by AI systems' },
      ]} />

      {/* ── SERVICES ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              What We Build for Southampton Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three services designed for a port city that never stops. Because your customers don't wait, and neither should your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Voice Agents */}
            <Card hover>
              <Icon letter="V" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                AI Voice Agents
              </h3>
              <p className="text-charcoal leading-relaxed mb-4">
                Your phone rings while you&rsquo;re mid-job on a site near the SO postcode. A port worker needs emergency repairs. A cruise terminal hospitality business is drowning in seasonal enquiries. Tradespeople covering Eastleigh to the New Forest who miss calls on the M27 &mdash; our AI picks up on the first ring, books the job, and sends you the details.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                No more missed calls. No more chasing voicemails at 9pm.
              </p>
              <a href="/services/ai-voice-assistants" aria-label="See how AI Voice Agents work">
                <Button variant="primary" className="w-full">See Voice Agents</Button>
              </a>
            </Card>

            {/* AI Chatbots */}
            <Card hover>
              <Icon letter="C" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                AI Chatbots
              </h3>
              <p className="text-charcoal leading-relaxed mb-4">
                Two major universities means 40,000+ tech-savvy consumers who expect instant online responses. Hospitality businesses in Ocean Village competing for bookings. Potential customers comparison-shopping at midnight &mdash; your chatbot is the one that&rsquo;s actually engaging them while every other website shows a &ldquo;we&rsquo;ll call you back&rdquo; form.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Turns browsers into booked appointments while you sleep.
              </p>
              <a href="/services/ai-chatbots" aria-label="See how AI Chatbots work">
                <Button variant="primary" className="w-full">See Chatbots</Button>
              </a>
            </Card>

            {/* Workflow Automation */}
            <Card hover>
              <Icon letter="A" size="lg" />
              <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4">
                Workflow Automation
              </h3>
              <p className="text-charcoal leading-relaxed mb-4">
                Southampton&rsquo;s maritime logistics businesses managing complex scheduling. Lettings agents juggling property viewings across the city. Service businesses with enquiries coming from every direction &mdash; we connect your tools and automate the repetitive bits so a new enquiry gets handled without you lifting a finger.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Less admin. Fewer mistakes. More time for paying work.
              </p>
              <a href="/services/workflow-automation" aria-label="See how Workflow Automation works">
                <Button variant="primary" className="w-full">See Automation</Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* ── LOCAL ADVANTAGE ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              Just Up the Road. Properly Local.
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We&rsquo;re based in <a href="/locations/andover" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Andover</a> &mdash; about 30 minutes up the A3057. That makes us one of the closest AI automation agencies to Southampton, and definitely the most accessible. While the big London agencies charge London rates and treat you like a line item on a spreadsheet, we&rsquo;re right here in <a href="/locations/hampshire" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Hampshire</a>, building bespoke AI solutions for local businesses.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              That said, you don&rsquo;t need to drive up the A303 to work with us. Everything runs perfectly over video calls and screen share &mdash; which is how most of our Southampton clients prefer it anyway. The setup, testing, and ongoing support all happen remotely. Your AI voice agent doesn&rsquo;t need a parking space in Ocean Village to answer your calls.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We&rsquo;ve worked with tradespeople covering the SO postcode, lettings agents in the city centre, health and wellness businesses in Portswood, and service companies that cover everything from Eastleigh to the New Forest. The AI doesn&rsquo;t care about geography &mdash; it just works.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              You&rsquo;ll deal with Andy directly. 30+ years in tech, no account managers, no handoffs. When something needs doing, it gets done. That&rsquo;s the <a href="/locations/hampshire" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Hampshire</a> way.
            </p>
          </div>
        </div>
      </section>

      {/* ── SOUTHAMPTON BY THE NUMBERS ── */}
      <section className="bg-peach border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-12 text-center">
            Southampton by the Numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">&pound;7.5bn</div>
              <p className="text-charcoal font-bold">Gross Value Added economy <span className="font-normal text-mid-gray text-sm">(ONS regional data)</span></p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">18,000+</div>
              <p className="text-charcoal font-bold">Registered businesses <span className="font-normal text-mid-gray text-sm">(Companies House / ONS)</span></p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">40,000+</div>
              <p className="text-charcoal font-bold">Students across two major universities driving digital-first consumer behaviour</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">1.5M</div>
              <p className="text-charcoal font-bold">Cruise passengers annually, supporting a hospitality sector that needs 24/7 responsiveness</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── GEO CROSS-SELL ── */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-6">
            Is AI Search Recommending Your Southampton Business?
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            When someone asks ChatGPT &ldquo;best electrician in Southampton&rdquo; or searches Perplexity for &ldquo;reliable cleaning company near Ocean Village&rdquo;, is your business showing up? Our <a href="/services/geo-audit" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">GEO Audit</a> starts from &pound;247.
          </p>
          <a href="/services/geo-audit">
            <Button variant="primary">Check Your AI Visibility &rarr;</Button>
          </a>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                You&rsquo;re based in Andover &mdash; why should I choose you over a Southampton agency?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                We&rsquo;re 30 minutes up the A3057 &mdash; closer than most London agencies that target Southampton businesses. More importantly, AI automation runs on cloud infrastructure. Your voice agent doesn&rsquo;t need a local office. What matters is the quality of the build and the speed of support, and we deliver both.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do your AI voice agents work for hospitality businesses near the cruise terminals?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes. We&rsquo;ve built voice agents that handle high-volume seasonal enquiries &mdash; exactly the pattern cruise terminal hospitality businesses deal with. The AI handles the peaks so your staff can focus on service.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Can your chatbot handle enquiries in multiple languages?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes. Southampton&rsquo;s diverse population and international port traffic means multilingual capability matters. Our chatbots can be configured to handle conversations in multiple languages.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What&rsquo;s the typical ROI for a Southampton service business?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                A Southampton trades business missing just 5 calls per week at an average job value of &pound;200 is losing &pound;4,000/month in potential revenue. AI voice agents start from &pound;97/month — that&rsquo;s a 40&times; return if you capture just one extra job per week.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How quickly can you get started with a Southampton business?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Voice agents and chatbots are typically live within 24&ndash;48 hours of you forwarding your number or giving us website access. We&rsquo;re based in Andover &mdash; about 30 minutes up the A3057 &mdash; so a face-to-face meeting is straightforward if you prefer it, but most clients get set up entirely over video call.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Your Nearest AI Automation Agency
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 15-minute chat with Andy. We're just up the road, we know Hampshire, and we'll give you a straight answer about whether AI automation is right for your business.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
            <a href="/contact">
              <Button variant="secondary">Book a free 15-min chat</Button>
            </a>
          </div>
        </div>
      </section>

      {/* ── BOOK A CALL (Cal.com) ── */}
      <section className="bg-off-white border-t-3 border-charcoal py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-10">
            <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-4">
              Pick a Time That Works for You
            </h2>
            <p className="text-charcoal max-w-2xl mx-auto">
              Book a free 30-minute call below &mdash; or use the contact form if you prefer.
            </p>
          </div>
          <CalBooking />
        </div>
      </section>


      {/* ── VOICE CHAT MODAL ── */}
      {isVoiceChatOpen && (
        <Suspense fallback={null}>
          <VoiceChat isOpen={isVoiceChatOpen} onClose={() => setIsVoiceChatOpen(false)} />
        </Suspense>
      )}
    </div>
  );
}
