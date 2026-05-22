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
              AI AUTOMATION &bull; LEEDS
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation for Leeds Businesses
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-4 max-w-3xl">
              Leeds has quietly become one of the UK's strongest business cities. A hub for professional services, a growing digital economy, and a thriving SMB scene that runs on hard work and word of mouth. From solicitors around Park Square to personal trainers in Headingley, from accountants in Chapel Allerton to cleaning firms covering Roundhay &mdash; the businesses here don't mess about.
            </p>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              Neither do we. We build AI voice agents, chatbots, and workflow automation that catch the calls you're missing, convert the website visitors you're losing, and handle the admin that eats your evenings. We also work with businesses in <a href="/locations/manchester" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Manchester</a> and <a href="/locations/liverpool" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Liverpool</a>.
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
              What We Build for Leeds Businesses
            </h2>
            <p className="text-lg text-charcoal max-w-2xl mx-auto">
              Three services that help professional services firms, tradespeople, and growing SMBs operate like businesses twice their size.
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
                A solicitor near Call Lane gets a new-client enquiry at 4:30 pm &mdash; they&rsquo;re in a meeting that won&rsquo;t finish until six. Our AI voice agent picks up, takes the caller&rsquo;s details, confirms the type of case, and books a consultation for Thursday morning. That lead would have gone to the firm down the road. Instead, it&rsquo;s booked in before the meeting&rsquo;s even over. Whether you&rsquo;re a trades firm in Kirkstall or an accountant in Leeds Dock, every missed call is money left on the table.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Every call answered. Every lead captured. Every time.
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
                A homeowner in Roundhay is comparing three electricians at 9 pm. Your chatbot answers &ldquo;Do you cover LS8?&rdquo;, confirms your availability, and books an estimate &mdash; while the other two electricians&rsquo; websites sit there with a contact form nobody checks until morning. In a city with the largest financial centre outside London, the professional services and trades businesses that respond fastest win. Full stop.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Your 24/7 lead converter that never takes a day off.
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
                Headingley, Horsforth, Morley, Pudsey &mdash; if you&rsquo;re covering West Yorkshire, your admin is scattered across emails, calendars, and half-finished spreadsheets. We connect your CRM, calendar, invoicing, and job-management tools so a new enquiry gets logged, confirmed, scheduled, and invoiced without you touching a thing. Leeds professional services firms and tradespeople tell us they save 8&ndash;10 hours a week on admin.
              </p>
              <p className="text-charcoal leading-relaxed mb-6">
                Professional operations. Without the professional overheads.
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
              Remote Delivery. Real Results.
            </h2>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              We're based in Hampshire, not Leeds &mdash; and we're completely transparent about that. But Leeds is a city that understands modern business. Remote working isn't a novelty here; it's standard practice. And AI automation works the same way &mdash; everything from the first conversation to ongoing support happens over video call, screen share, and good old-fashioned phone calls.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              Our Leeds clients span professional services in the city centre, trades firms out towards Pudsey and Morley, and growing businesses across the whole Leeds City Region. The technology doesn't care about postcodes. What matters is that it answers your calls, books your appointments, and stops leads falling through the cracks.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mb-6">
              You deal directly with Andy &mdash; 30+ years in tech, no juniors, no account managers, no "we'll get back to you." If something needs sorting, it gets sorted. No fuss.
            </p>
            <p className="text-lg text-charcoal leading-relaxed">
              Leeds businesses earn their reputation through results, not promises. We work the same way.
            </p>
          </div>
        </div>
      </section>

      {/* ── LEEDS BY THE NUMBERS ── */}
      <section className="bg-peach border-y-3 border-charcoal py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-12 text-center">
            Leeds by the Numbers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">28,000+</div>
              <p className="text-charcoal font-bold">Registered SMEs across the Leeds City Region</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">#1</div>
              <p className="text-charcoal font-bold">Largest financial and professional services centre outside London</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">&pound;29bn</div>
              <p className="text-charcoal font-bold">GVA output for the Leeds City Region economy (ONS)</p>
            </Card>
            <Card>
              <div className="text-4xl font-black text-terracotta mb-2">780K+</div>
              <p className="text-charcoal font-bold">Working-age population across Leeds &mdash; a deep talent pool and customer base</p>
            </Card>
          </div>
        </div>
      </section>

      {/* ── GEO CROSS-SELL ── */}
      <section className="bg-warm-beige border-y-3 border-charcoal py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-lg text-charcoal mb-6">
            Is AI Search Recommending Your Leeds Business?
          </h2>
          <p className="text-lg text-charcoal leading-relaxed mb-6">
            When someone asks ChatGPT &ldquo;best accountant in Leeds city centre&rdquo; or tells Perplexity to &ldquo;find an emergency plumber in Headingley&rdquo;, is your business in the answer? In a city built on professional services, the firms that get cited by AI search have a serious edge. Our <a href="/services/geo-audit" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">GEO Audit</a> checks your visibility across ChatGPT, Perplexity, Google AI Overviews and Claude &mdash; and gives you a clear plan to get found. Starting from &pound;247.
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
                Do I need a Leeds-based agency for AI automation?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                No. AI runs on cloud infrastructure &mdash; it works identically whether the builder is in Leeds or Hampshire. What matters is the quality of the build, the reliability of the support, and whether you can get hold of someone when you need them. We deliver on all three, and you deal directly with the founder.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What types of Leeds businesses do you work with?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Professional services (solicitors, accountants, consultants), trades (plumbers, electricians, builders), dental and medical practices, cleaning companies, estate agents, and hospitality businesses. If you take calls, book appointments, or chase invoices &mdash; we can automate it. We also serve businesses in <a href="/locations/manchester" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Manchester</a> and <a href="/locations/liverpool" className="underline underline-offset-4 decoration-terracotta decoration-2 hover:text-terracotta transition-colors">Liverpool</a>.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do you cover all of West Yorkshire?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Yes &mdash; Leeds, Bradford, Wakefield, Huddersfield, Halifax, and everywhere in between. The AI doesn&rsquo;t care about postcodes. It answers your calls and books your appointments whether the caller&rsquo;s in LS1 or HD1.
              </div>
            </details>

            <details className="border-3 border-charcoal bg-white shadow-brutal-sm group">
              <summary className="font-black text-lg text-charcoal px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How quickly can you set things up?
                <span className="text-terracotta text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-charcoal leading-relaxed border-t-3 border-charcoal pt-4">
                Most voice agents and chatbots are live within 5&ndash;7 working days from our first call. Workflow automation depends on complexity but typically 1&ndash;2 weeks. Everything is set up remotely over video call &mdash; no need to block out a day for meetings.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Work Smarter, Not Harder
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            Book a free 15-minute chat. No pressure, no jargon &mdash; just a straight conversation about whether AI automation makes sense for your Leeds business.
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
