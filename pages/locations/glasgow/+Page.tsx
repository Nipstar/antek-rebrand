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
              AI AUTOMATION &bull; GLASGOW
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for Glasgow Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              Glasgow is Scotland's commercial engine &mdash; a city built on graft, straight-talking, and getting things done. Whether you're a joiner in the Southside, a lettings agent in the West End, or a dental practice in Finnieston, you know the score: miss a call, lose a job. Spend your evenings on admin, lose your sanity.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              We build AI that answers your phone, converts your website visitors, and automates the boring stuff &mdash; so you can focus on the work that actually pays. Delivered remotely from Hampshire, working just as well in Glasgow as it does anywhere in the UK. We also serve businesses in <a href="/locations/newcastle" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Newcastle</a> and <a href="/locations/leeds" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Leeds</a>.
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
              What We Build for Glasgow Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three services that stop you losing money to missed calls, slow responses, and admin that never ends.
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
                A joiner in Govan gets a call about a kitchen refit in the West End &mdash; he&rsquo;s mid-job on a Merchant City flat conversion. Our AI voice agent picks up, confirms the caller&rsquo;s address, checks the type of work, and books an estimate for next week. That&rsquo;s a &pound;3,000+ job that would have gone to the next name on Google. Across Glasgow&rsquo;s 28,000+ businesses, the tradespeople and firms that answer fastest build the strongest books. It&rsquo;s that simple.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Every call answered. Nae jobs lost.
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
                A homeowner in Finnieston is comparing three bathroom fitters at 9 pm. Your chatbot answers &ldquo;Do you cover G3?&rdquo;, shows your recent work, and books a free measure-up &mdash; while the other two fitters&rsquo; websites sit there doing hee-haw. From Merchant City to the Clydeside, Glasgow&rsquo;s service businesses compete on speed and reputation. The one that responds first wins the job. Every time.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Your 24/7 sales team that never takes a sickie.
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
                West End, Southside, Partick, East Kilbride &mdash; if you&rsquo;re covering Greater Glasgow, your admin is all over the shop. Quotes in your email, bookings in your calendar, invoices in a spreadsheet, follow-ups in your head. We connect everything so a new enquiry gets logged, confirmed, scheduled, and invoiced without manual input. Scottish trades businesses tell us they save 8&ndash;12 hours a week. That&rsquo;s a full day back on the tools.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Less admin. More earning. Simple as.
              </p>
              <a href="/services/workflow-automation" aria-label="See how Workflow Automation works">
                <Button variant="primary" className="w-full">See Automation</Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* ── WHY REMOTE WORKS ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-black text-4xl md:text-5xl uppercase tracking-tight-lg text-charcoal mb-8">
              Hampshire to Glasgow. Nae Bother.
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Aye, we're based in Hampshire. But AI doesn't care about geography &mdash; and neither does a good working relationship. Everything we build is set up, tested, and supported over video calls. Our Glasgow clients get the same service, the same turnaround, and the same results as businesses five miles down the road from us.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We've worked with Scottish businesses who were sceptical about working with someone south of the border. Fair enough &mdash; we get it. But once they see the AI answering their calls and booking their appointments while they're out on a job in Merchant City, the geography stops mattering pretty quickly.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Whether you're in the West End, the Southside, Partick, or out towards East Kilbride, the technology works the same. And you deal directly with Andy &mdash; no call centres, no runaround, no account managers who don't know your name.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              Glasgow businesses are straight-talking, and so are we. If AI automation isn't right for you, we'll say so. If it is, we'll build it properly and make sure it works.
            </p>
          </div>
        </div>
      </section>

      {/* ── GLASGOW BY THE NUMBERS ── */}
      <section className="bg-peach border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-12 text-center">
            Glasgow by the Numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">28,000+</div>
              <p className="text-charcoal font-bold">Registered businesses in Greater Glasgow &mdash; Scotland&rsquo;s commercial engine</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">&pound;22bn</div>
              <p className="text-charcoal font-bold">GVA for the Glasgow City Region economy (ONS)</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">1.8M</div>
              <p className="text-charcoal font-bold">Greater Glasgow population &mdash; the largest metropolitan area in Scotland</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">Clydeside</div>
              <p className="text-charcoal font-bold">Major regeneration across Clydeside, Govan, and the Merchant City creating thousands of new customers</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── GEO CROSS-SELL ── */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-6">
            Is AI Search Recommending Your Glasgow Business?
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            When someone asks ChatGPT &ldquo;best joiner in Glasgow West End&rdquo; or tells Perplexity to &ldquo;find a reliable cleaner in Finnieston&rdquo;, is your business in the answer? In a city where reputation is everything, AI search is becoming the new word of mouth. Our <a href="/services/geo-audit" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">GEO Audit</a> checks your visibility across ChatGPT, Perplexity, Google AI Overviews and Claude &mdash; and gives you a clear plan to get cited. Starting from &pound;247.
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
                Can the AI handle Scottish accents?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Aye. Modern speech recognition handles Scottish accents &mdash; including Glaswegian &mdash; accurately. We test with real Glasgow callers during setup and fine-tune until it&rsquo;s spot-on. The AI&rsquo;s own voice is configurable too.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do you cover all of Greater Glasgow?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes &mdash; Glasgow, Paisley, East Kilbride, Clydebank, Rutherglen, and the surrounding areas. The AI runs on cloud infrastructure, so it works identically anywhere. We also serve businesses in <a href="/locations/newcastle" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Newcastle</a> and <a href="/locations/leeds" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Leeds</a>.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Why use an English agency for my Scottish business?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Fair question. Because AI doesn&rsquo;t care about borders &mdash; it cares about being built properly. You get the same quality at a competitive price, direct access to the founder, and support that&rsquo;s a phone call away. No George Square office rent on your invoice.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How quickly can you get things set up?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Most voice agents and chatbots are live within 5&ndash;7 working days. Workflow automation typically 1&ndash;2 weeks depending on complexity. All done remotely over video call &mdash; nae need to block out your diary.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Let's Talk Business
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 15-minute chat. No sales pitch, no jargon &mdash; just a straight conversation about whether AI automation makes sense for your Glasgow business.
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
