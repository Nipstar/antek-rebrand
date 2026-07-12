import { useState, Suspense, lazy } from 'react';
import { Button } from '../../../src/components/Button';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';
import { Container } from '../../../src/components/Container';
import { CalBooking } from '../../../src/components/CalBooking';
import { VoiceDemoButton } from '../../../src/components/VoiceDemoButton';
import { TrustBlock } from '../../../src/components/TrustBlock';
import { RetellDemoCards } from '../../../src/components/RetellDemoCards';
import { QuickRecap } from '../../../src/components/QuickRecap';
import { HeadlineBlock } from '../../../src/components/HeadlineBlock';

const VoiceChat = lazy(() => import('../../../src/components/VoiceChat').then(m => ({ default: m.VoiceChat })));

// HUB PAGE — this is the only location page that targets the "Hampshire" head term.
// Town pages target their own town and link up here; this page links DOWN to every town.
const towns = [
  { name: 'Andover', slug: 'andover', blurb: 'Our HQ. Chantry House, 38 Chantry Way. Happy to meet for a coffee.' },
  { name: 'Basingstoke', slug: 'basingstoke', blurb: 'Hampshire’s largest town, up the A303. Chineham, Old Basing, Hatch Warren.' },
  { name: 'Winchester', slug: 'winchester', blurb: 'The county town and cathedral city — professional firms, practices, hospitality.' },
  { name: 'Southampton', slug: 'southampton', blurb: 'Port city with thousands of businesses, two universities, a 24/7 hospitality sector.' },
  { name: 'Portsmouth', slug: 'portsmouth', blurb: 'Waterfront island city — naval heritage, dense SMB base, the M27 corridor.' },
];

export default function Page() {
  const [isVoiceChatOpen, setIsVoiceChatOpen] = useState(false);

  return (
    <div>

      {/* ── HERO (benefit-led H1, keeps the Hampshire head term — hub only) ── */}
      <section className="bg-ink border-b border-hairline">
        <Container className="py-20 md:py-28">
          <div className="max-w-4xl">
            <HeadlineBlock as="h1" kicker={<>AI AGENCY &bull; HAMPSHIRE</>} className="mb-6">
              Never Let a Hampshire Lead <span className="text-coral">Go Cold</span>
            </HeadlineBlock>
            <p className="text-lg md:text-xl text-body leading-relaxed mb-8 max-w-3xl">
              We&rsquo;re a Hampshire AI agency based in <a href="/locations/andover" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Andover</a>, right in the middle of the county. From Basingstoke to Southampton, Winchester to the borders, we build the AI that answers the calls, replies on your website and chases the follow-ups &mdash; so no lead goes cold while you&rsquo;re out doing the actual work. Built by <a href="/about" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Andy Norman</a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href="/contact">
                <Button variant="primary" className="w-full sm:w-auto">Book a free 30-min call</Button>
              </a>
              <a href="tel:03330389960">
                <Button variant="secondary" className="w-full sm:w-auto">Call 0333 038 9960</Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <QuickRecap items={[
        'AI voice agents, chatbots and workflow automation for businesses right across Hampshire',
        'Based in Andover — founder-led, with face-to-face available across the county',
        'Stop losing work to missed calls, slow follow-ups and admin overload',
        'Chatbots from £57/month, voice agents from £97/month, live within 24–48 hours — <a href="/pricing" class="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">see full pricing</a>',
        'Everything runs remotely — same quality whether you’re in Winchester or anywhere else in the UK',
      ]} />

      {/* ── OFFER / SERVICES ── */}
      <section>
        <Container className="py-20 md:py-28">
          <div className="mb-16">
            <HeadlineBlock className="mb-4">
              AI Automation for <span className="text-coral">Hampshire Businesses</span>
            </HeadlineBlock>
            <p className="text-lg text-body max-w-[60ch]">
              We&rsquo;re an AI automation company based in Andover, serving businesses across Hampshire. Three services, all designed to stop you losing money to missed calls, slow follow-ups, and admin that eats your evenings.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            <Card hover className="h-full">
              <Icon letter="01" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                Your Phone, Answered 24/7
              </h3>
              <p className="text-body leading-relaxed mb-6">
                An AI voice agent that picks up when you&rsquo;re on a job in Romsey or stuck on the M3 &mdash; answering questions, booking appointments and capturing caller details in a natural, human-sounding voice. It catches every call you can&rsquo;t.
              </p>
              <a href="/services/ai-voice-assistants" aria-label="See how AI Voice Agents work">
                <Button variant="primary" className="w-full">See Voice Agents</Button>
              </a>
            </Card>

            <Card hover className="h-full">
              <Icon letter="02" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                Your Website, Answered at 2am
              </h3>
              <p className="text-body leading-relaxed mb-6">
                A chatbot trained on your business that talks to visitors the moment they land &mdash; answering questions, qualifying them and booking them straight into your calendar, whether it&rsquo;s 2pm or 2am.
              </p>
              <a href="/services/ai-chatbots" aria-label="See how AI Chatbots work">
                <Button variant="primary" className="w-full">See Chatbots</Button>
              </a>
            </Card>

            <Card hover className="h-full">
              <Icon letter="03" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                Your Admin, Handled
              </h3>
              <p className="text-body leading-relaxed mb-6">
                We connect the tools you already use &mdash; calendar, CRM, email, invoicing &mdash; and automate the repetitive stuff. New enquiry comes in? Logged, acknowledged and followed up automatically.
              </p>
              <a href="/services/workflow-automation" aria-label="See how Workflow Automation works">
                <Button variant="primary" className="w-full">See Automation</Button>
              </a>
            </Card>
          </div>

          <div className="mt-14">
            <a href="/contact">
              <Button variant="primary">Book a free 30-min call</Button>
            </a>
          </div>
        </Container>
      </section>

      {/* ── AIaaS / AGENTIC AI / CCaaS (maps buyer jargon onto the services above) ── */}
      <section className="bg-ink border-y border-hairline">
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl mb-14">
            <HeadlineBlock className="mb-6">
              Agentic AI and AI as a Service in <span className="text-coral">Hampshire</span>
            </HeadlineBlock>
            <p className="text-lg text-body leading-relaxed max-w-[60ch]">
              Half the agencies in Hampshire will sell you &ldquo;agentic AI&rdquo; without telling you what it is. Here&rsquo;s the plain version, and what you actually get for your money.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            <Card className="h-full bg-charcoal">
              <Icon letter="01" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                AI as a Service (AIaaS)
              </h3>
              <p className="text-body leading-relaxed mb-4">
                You don&rsquo;t buy the technology. You rent the outcome.
              </p>
              <p className="text-body leading-relaxed mb-4">
                We build the agent, host it, monitor it and fix it when it breaks. You pay monthly and you get a working system, not a project plan and an invoice. No developers to hire, no platform licences to negotiate, no six-month build.
              </p>
              <p className="text-body leading-relaxed">
                That&rsquo;s what AIaaS means when a Hampshire business buys it. Chatbots from &pound;57/month, voice agents from &pound;97/month.
              </p>
            </Card>

            <Card className="h-full bg-charcoal">
              <Icon letter="02" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                Agentic AI
              </h3>
              <p className="text-body leading-relaxed mb-4">
                An <a href="/services/ai-voice-assistants" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">agent</a> doesn&rsquo;t just answer. It does.
              </p>
              <p className="text-body leading-relaxed mb-4">
                A chatbot tells your customer you&rsquo;re open until five. An agent takes the booking, puts it in your calendar, texts you the details and chases them the day before if they don&rsquo;t confirm.
              </p>
              <p className="text-body leading-relaxed">
                The difference is whether anything actually happens at the end of the conversation. If a provider can&rsquo;t tell you what their AI <em>does</em> after it stops talking, it isn&rsquo;t agentic.
              </p>
            </Card>

            <Card className="h-full bg-charcoal">
              <Icon letter="03" size="lg" mono />
              <h3 className="font-display font-extrabold text-2xl uppercase text-cream mt-6 mb-4">
                AI Contact Centre
              </h3>
              <p className="text-body leading-relaxed mb-4">
                Calls, <a href="/services/ai-chatbots" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">web chat</a> and follow-ups handled in one place, without a contact centre.
              </p>
              <p className="text-body leading-relaxed">
                For a Hampshire firm taking fifty calls a week, you don&rsquo;t need a call centre. You need one agent that never goes to lunch, never leaves a voicemail and <a href="/services/workflow-automation" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">puts everything in the same system</a>.
              </p>
            </Card>
          </div>

          {/* Honesty block */}
          <div className="mt-8 border-2 border-coral bg-charcoal p-8 md:p-10 max-w-4xl">
            <h3 className="font-display font-extrabold text-xl md:text-2xl uppercase text-cream mb-4">
              What It Won&rsquo;t Do
            </h3>
            <p className="text-body leading-relaxed mb-6 max-w-[60ch]">
              Straight answer, because you&rsquo;re comparing providers and everyone else will tell you it does everything.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-4 text-body leading-relaxed">
                <span className="text-coral font-mono font-bold shrink-0">&rarr;</span>
                <span>It won&rsquo;t replace your team. It removes the work they hate.</span>
              </li>
              <li className="flex gap-4 text-body leading-relaxed">
                <span className="text-coral font-mono font-bold shrink-0">&rarr;</span>
                <span>It won&rsquo;t fix a broken process. Automate a mess and you get a faster mess.</span>
              </li>
              <li className="flex gap-4 text-body leading-relaxed">
                <span className="text-coral font-mono font-bold shrink-0">&rarr;</span>
                <span>It won&rsquo;t handle every call perfectly on day one. It gets tuned over the first fortnight, with you.</span>
              </li>
            </ul>
            <p className="text-body leading-relaxed font-bold text-cream">
              If someone tells you otherwise, they&rsquo;re selling.
            </p>
          </div>

          {/* Conversion close */}
          <div className="mt-14 max-w-[65ch]">
            <HeadlineBlock className="mb-6">
              Two ways <span className="text-coral">in</span>.
            </HeadlineBlock>
            <p className="text-lg text-body leading-relaxed mb-4">
              You can book a free 30-minute call and we&rsquo;ll scope what&rsquo;s worth automating and what isn&rsquo;t. No pitch deck. If the honest answer is that AI won&rsquo;t help you, we&rsquo;ll say so.
            </p>
            <p className="text-lg text-body leading-relaxed mb-8">
              Or if you already know what you want, pricing starts at <a href="/pricing" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">&pound;57/month</a> for chatbots and &pound;97/month for voice agents, and most systems are live in 24 to 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a href="/contact">
                <Button variant="primary" className="w-full sm:w-auto">Book a free 30-min call</Button>
              </a>
              <a href="/pricing">
                <Button variant="secondary" className="w-full sm:w-auto">See pricing</Button>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── PROOF ── */}
      <TrustBlock>
        {/* local testimonial slot */}
      </TrustBlock>

      {/* ── RETELL INDUSTRY DEMOS (pop-card orbs) ── */}
      <RetellDemoCards curated />

      {/* ── TOWNS WE COVER (hub-and-spoke: links DOWN to every town page) ── */}
      <section>
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl mb-12">
            <HeadlineBlock className="mb-4">
              Towns We Cover Across <span className="text-coral">Hampshire</span>
            </HeadlineBlock>
            <p className="text-lg text-body leading-relaxed">
              Pick your town for the local detail &mdash; or just <a href="/contact" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">book a call</a>. We cover the whole county and the border towns, and everywhere else in the UK runs remotely just the same.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {towns.map((town, i) => (
              <a key={town.slug} href={`/locations/${town.slug}`} className="block group">
                <Card hover className="h-full">
                  <Icon letter={String(i + 1).padStart(2, '0')} size="md" mono />
                  <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-4 mb-3 group-hover:text-coral transition-colors">
                    {town.name}
                  </h3>
                  <p className="text-body leading-relaxed text-sm">
                    {town.blurb}
                  </p>
                </Card>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHY A HAMPSHIRE AGENCY (local / founder) ── */}
      <section className="bg-ink border-y border-hairline py-20 md:py-28">
        <Container>
          <div className="max-w-[65ch]">
            <HeadlineBlock className="mb-8">
              Why a <span className="text-coral">Hampshire AI Agency</span>?
            </HeadlineBlock>
            <p className="text-lg text-body leading-relaxed mb-6">
              I&rsquo;m Andy, and I&rsquo;m based in <a href="/locations/andover" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Andover</a>. I&rsquo;ve got 30+ years in tech &mdash; not the trendy Silicon Valley kind, but the kind where you actually build things that work and fix them when they don&rsquo;t.
            </p>
            <p className="text-lg text-body leading-relaxed mb-6">
              I set up Antek Automation because I kept seeing local tradespeople and service businesses losing work to missed calls, slow follow-ups and admin overload. The big AI agencies don&rsquo;t care about a plumber in Alton or a cleaning company in Fareham. I do.
            </p>
            <p className="text-lg text-body leading-relaxed mb-6">
              Happy to meet for a coffee if you&rsquo;re nearby &mdash; I&rsquo;ve done it with businesses across the county, from Petersfield to Aldershot. But everything works brilliantly over a video call too. Most of my Hampshire clients never need to meet in person, and their AI agents run just as well.
            </p>
            <p className="text-lg text-body leading-relaxed">
              The point is: you&rsquo;re not dealing with a faceless agency. You&rsquo;re dealing with someone who lives here, picks up his own phone, and actually gives a toss about whether this works for your business.
            </p>
          </div>
        </Container>
      </section>

      {/* ── GEO PROOF (local authority → up to /services/geo-audit; no GEO definition here) ── */}
      <section className="bg-ink border-y border-hairline py-16 md:py-20">
        <Container>
          <div className="max-w-4xl">
            <HeadlineBlock className="mb-6">
              Is <span className="text-coral">AI Search</span> Recommending Your Hampshire Business?
            </HeadlineBlock>
            <p className="text-lg text-body leading-relaxed mb-4">
              When someone asks ChatGPT for the best plumber in Winchester, or tells Perplexity to find an electrician near Basingstoke, one business gets named. Usually it isn&rsquo;t the one with the best website.
            </p>
            <p className="text-lg text-body leading-relaxed mb-4">
              We know this works because we did it to ourselves. Antek is cited by name in Google&rsquo;s AI Overview for AI automation in Andover, and holds 100% Share of AI Voice across the Andover grid. Same county, same search engines, same methods we&rsquo;d use on you.
            </p>
            <p className="text-lg text-body leading-relaxed mb-8">
              A GEO audit shows you exactly where your business currently stands across ChatGPT, Perplexity, Google AI Overviews, Claude and Gemini, and what it takes to get cited.
            </p>

            {/* Proof images. Two-up when the Local Falcon grid (slot A) is supplied; the
                AI Overview citation (slot B) ships now. Grid strip goes alongside as
                <figure> #1 when available. */}
            <figure className="mb-8 max-w-2xl border-2 border-hairline bg-charcoal">
              <img
                src="/geo-proof-aio-andover.webp"
                alt="Google AI Overview citing Antek Automation as an AI automation provider in Andover"
                width={800}
                height={143}
                loading="lazy"
                decoding="async"
                className="w-full h-auto"
              />
              <figcaption className="font-mono text-xs text-muted px-3 py-2 border-t border-hairline">
                Google AI Overview &mdash; &ldquo;AI automation in Andover&rdquo;
              </figcaption>
            </figure>

            <a href="/services/geo-audit">
              <Button variant="primary">Check Your Hampshire AI Visibility &rarr;</Button>
            </a>
            <p className="font-mono text-sm text-muted mt-3">From &pound;247. Delivered in 24 hours.</p>
          </div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <section>
        <Container className="py-20 md:py-28">
          <HeadlineBlock className="mb-12">
            Frequently Asked <span className="text-coral">Questions</span>
          </HeadlineBlock>
          <div className="space-y-4 max-w-[65ch]">
            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Can I meet you in person?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Absolutely &mdash; we&rsquo;re based in <a href="/locations/andover" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Andover</a>, so if you&rsquo;re anywhere in Hampshire we&rsquo;re happy to meet for a coffee. That said, most of our Hampshire clients prefer video calls because it&rsquo;s faster and more convenient. Either way works.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do you work with tradespeople in rural Hampshire?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Yes. Some of our best-performing voice agents are for trades businesses covering rural areas &mdash; exactly the kind of businesses where you&rsquo;re most likely to miss calls because you&rsquo;re mid-job with no signal. The AI catches everything you can&rsquo;t.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What areas of Hampshire do you cover?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                All of it &mdash; we&rsquo;ve got dedicated pages for <a href="/locations/andover" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Andover</a>, <a href="/locations/basingstoke" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Basingstoke</a>, <a href="/locations/winchester" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Winchester</a>, <a href="/locations/southampton" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Southampton</a> and <a href="/locations/portsmouth" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">Portsmouth</a>. Our AI solutions work remotely, so there are no geographic limitations.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                How quickly can you set up an AI voice agent for my Hampshire business?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Most voice agents and chatbots are live within 24&ndash;48 hours of you forwarding your number or giving us website access. For Hampshire businesses, we can usually do a face-to-face kickoff the same week if you prefer.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What does it cost for a Hampshire business?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                AI chatbots start from &pound;57/month, AI voice agents from &pound;97/month, plus a one-off setup fee. Most Hampshire businesses recover that within the first few captured calls. <a href="/pricing" className="underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors">See full pricing</a>, or book a free call for an exact quote.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What is AI as a service (AIaaS)?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                You rent the outcome rather than buying the technology. We build, host and maintain the AI system, and you pay monthly, from &pound;57 for a chatbot or &pound;97 for a voice agent. No developers to hire, no platform licences, no long build.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                What is agentic AI, and do you provide it in Hampshire?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Yes. An agentic AI does something after the conversation ends: books the job, updates your CRM, chases the confirmation. A chatbot that only answers questions is not agentic.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Do you provide AI contact centre services in Hampshire?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                Yes. Calls, web chat and follow-ups handled in one place, without running a contact centre. Suited to firms taking roughly fifty calls a week or more.
              </div>
            </details>

            <details className="border-2 border-hairline bg-ink group">
              <summary className="font-display font-extrabold text-lg text-cream px-6 py-5 cursor-pointer list-none flex justify-between items-center">
                Can you get my Hampshire business cited in ChatGPT and Google AI Overviews?
                <span className="text-coral text-2xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-6 text-body leading-relaxed border-t border-hairline pt-4">
                That&rsquo;s what a GEO audit is for. We test your visibility across ChatGPT, Perplexity, Google AI Overviews, Claude and Gemini, then give you the plan to get cited. Antek itself is cited in Google&rsquo;s AI Overview for AI automation in Andover, so the methods are the ones we use on our own business.
              </div>
            </details>
          </div>
        </Container>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-charcoal border-t border-coral py-24 md:py-32">
        <Container>
          <HeadlineBlock className="mb-6">
            Ready to <span className="text-coral">Stop Losing Leads</span>?
          </HeadlineBlock>
          <p className="text-lg md:text-xl text-body leading-relaxed mb-10 max-w-[60ch]">
            Book a free 30-minute discovery call with Andy. No pitch deck, no pressure &mdash; just a straight conversation about whether AI automation makes sense for your Hampshire business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a href="/contact">
              <Button variant="primary">Book a free 30-min call</Button>
            </a>
            <a href="tel:03330389960">
              <Button variant="secondary">Call 0333 038 9960</Button>
            </a>
            <VoiceDemoButton onClick={() => setIsVoiceChatOpen(true)} />
          </div>
        </Container>
      </section>

      {/* ── BOOK A CALL (Cal.com) ── */}
      <section className="border-t border-hairline py-20 md:py-28">
        <Container>
          <div className="mb-10">
            <HeadlineBlock className="mb-4">
              Pick a Time That <span className="text-coral">Works for You</span>
            </HeadlineBlock>
            <p className="text-body max-w-[60ch]">
              Book a free 30-minute call below &mdash; or use the contact form if you prefer.
            </p>
          </div>
          <CalBooking />
        </Container>
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
