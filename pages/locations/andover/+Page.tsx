import { useState, Suspense, lazy } from 'react';
import { Button } from '../../../src/components/Button';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';
import { CalBooking } from '../../../src/components/CalBooking';
import { VoiceDemoButton } from '../../../src/components/VoiceDemoButton';

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
              AI AUTOMATION &bull; ANDOVER
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation in Andover &mdash; Built by a Local
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              Andy here. I'm based in Andover &mdash; have been for years. I've got 30+ years in tech, and I started Antek Automation because I was tired of watching local businesses lose work to problems that technology solved ages ago.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              If you run a service business in Andover &mdash; whether you're based near the Chantry Centre, out on the industrial estate, or anywhere in between &mdash; I build AI voice agents, chatbots, and workflow automation that stop you losing leads and wasting time on admin.
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

      {/* ── SERVICES ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
              What I Build for Andover Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three services that solve the problems I hear about every week from businesses right here in town.
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
                Augusta Park and Picket Piece have added thousands of new homes to Andover &mdash; and every new homeowner needs a reliable plumber, electrician, or builder. When they call and you&rsquo;re on a job in Weyhill, Thruxton, or Hurstbourne &mdash; rural areas where mobile signal drops &mdash; our AI picks up on the first ring, books the job, and sends you the details.
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
                Andover&rsquo;s growing population means new residents who don&rsquo;t have established tradespeople yet &mdash; they&rsquo;re searching online, comparing options at 10pm after the kids are in bed. Your chatbot is the one that&rsquo;s actually engaging them, answering their specific questions, and getting them booked in while your competitors show a contact form.
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
                Sole traders and small teams in the Walworth Business Park and across Test Valley who are doing everything themselves &mdash; quoting, invoicing, chasing, booking &mdash; and drowning in admin. We connect your tools and automate the repetitive bits so a new enquiry gets handled without you lifting a finger.
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

      {/* ── LOCAL CREDIBILITY ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              Andover Born and Bred (Well, Almost)
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              I've been in Andover long enough to know the difference between the town centre on a Saturday and the ghost town it becomes by 6pm. I know the industrial estate, I know the businesses that keep this town running, and I know what it's like trying to grow a service business here without a massive marketing budget.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We're already ranking for searches like "AI automation company Andover," "AI automation for small business Andover," and "AI chatbot services Andover." That's not an accident &mdash; it's because I'm genuinely here, genuinely building this, and genuinely invested in making it work for local businesses.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              The kettle's always on. If you want to have a chat about what AI could do for your business, I'm happy to meet up locally or jump on a video call. No sales pitch, no jargon &mdash; just a straight conversation about whether this makes sense for you.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              And if you want to see the broader <a href="/locations/hampshire" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Hampshire</a> picture, we cover the whole county too.
            </p>
          </div>
        </div>
      </section>

      {/* ── ANDOVER BY THE NUMBERS ── */}
      <section className="bg-peach border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-12 text-center">
            Andover by the Numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">4,200+</div>
              <p className="text-charcoal font-bold">Registered small businesses in Test Valley</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">2,000+</div>
              <p className="text-charcoal font-bold">New homes added by Augusta Park, with every homeowner needing reliable local trades</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">1,200+</div>
              <p className="text-charcoal font-bold">Additional homes at Picket Piece, further growing demand for local services</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">12%</div>
              <p className="text-charcoal font-bold">Of Test Valley&rsquo;s local economy is construction and building trades</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── WHY WE'RE BASED HERE ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              Why We&rsquo;re Based Here
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Our office is at Chantry House, 38 Chantry Way &mdash; right in the middle of town. I chose Andover as a base because it&rsquo;s perfectly positioned for serving <a href="/locations/hampshire" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Hampshire</a> businesses, it&rsquo;s got a growing local economy, and it&rsquo;s home.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              If you&rsquo;re local, I&rsquo;m genuinely happy to meet for a coffee and talk through what AI could do for your business. No pitch deck, no PowerPoint &mdash; just two people having a chat about whether this makes sense for you.
            </p>
          </div>
        </div>
      </section>

      {/* ── GEO CROSS-SELL ── */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-6">
            Is AI Search Recommending Your Andover Business?
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            When someone asks ChatGPT &ldquo;Who&rsquo;s the best plumber in Andover?&rdquo; or tells Perplexity to &ldquo;find me a reliable electrician in Test Valley&rdquo;, is your business in the answer? Our <a href="/services/geo-audit" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">GEO Audit</a> checks your visibility across ChatGPT, Perplexity, Google AI Overviews and Claude &mdash; and gives you a clear plan to get cited. Starting from &pound;247.
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
                Can I come to your office?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes &mdash; we&rsquo;re at Chantry House, 38 Chantry Way, Andover SP10 1LZ. Happy to have you round for a demo. Most clients prefer a video call, but the door&rsquo;s always open if you&rsquo;re local.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do you work with businesses outside Andover?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Absolutely. We serve all of <a href="/locations/hampshire" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Hampshire</a> and the UK. Andover is our base, but AI automation works remotely &mdash; we&rsquo;ve got clients from <a href="/locations/glasgow" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Glasgow</a> to <a href="/locations/southampton" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Southampton</a>. That said, we do have a soft spot for local businesses and can usually meet face-to-face within the week.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                I&rsquo;m a tradesperson in Andover &mdash; is AI really for someone like me?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Especially for someone like you. You&rsquo;re probably a one-person band or a small team, out on jobs all day, missing calls you can&rsquo;t afford to miss. An AI voice agent costs less than a part-time receptionist and works 24/7. It&rsquo;s built for exactly your situation.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How much does it cost?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                AI voice agents start from &pound;97/month. For an Andover tradesperson missing even 3&ndash;4 calls a week, the return on investment is usually clear within the first couple of weeks.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Let's Have a Chat
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            15 minutes. No obligation. Just a conversation about your business and whether AI automation could actually help. The kettle's always on.
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
