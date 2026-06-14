import { Button } from '../../../src/components/Button';
import { CalBooking } from '../../../src/components/CalBooking';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';

const hampshireHub = {
  name: 'Hampshire',
  slug: 'hampshire',
  description: 'Our home county. Based in Andover, we work with businesses right across Hampshire — Basingstoke, Winchester, the New Forest and everywhere between — and serve the rest of the UK remotely.',
};

const localLocations = [
  { name: 'Andover', slug: 'andover', description: 'Our HQ. Chantry House, 38 Chantry Way. Happy to meet for a coffee if you\'re local.' },
  { name: 'Southampton', slug: 'southampton', description: 'Port city with 18,000+ businesses. Maritime economy, two major universities, and a hospitality sector that never sleeps.' },
  { name: 'Salisbury', slug: 'salisbury', description: 'Wiltshire cathedral city on Hampshire\'s western edge. Trades and service businesses across the Salisbury area.' },
  { name: 'Newbury', slug: 'newbury', description: 'Berkshire market town just up the A34. Close enough for a face-to-face, with the same 24/7 AI coverage.' },
];

export default function Page() {
  return (
    <div className="bg-off-white">

      {/* ── HERO ── */}
      <section className="bg-warm-beige border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              LOCATIONS &bull; HAMPSHIRE &amp; UK-WIDE
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation in Hampshire &amp; Across the UK
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              We&rsquo;re a Hampshire automation agency, based in Andover. Everything we build runs in the cloud &mdash; so your AI voice agent, chatbot or automation workflow works identically whether you&rsquo;re down the road in Southampton or anywhere else in the UK. Here&rsquo;s our local patch, and yes, we cover the rest of the country remotely.
            </p>
          </div>
        </div>
      </section>

      {/* ── HAMPSHIRE HUB + LOCAL CLUSTER ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
            Our Local Patch
          </h2>
          <p className="text-lg text-charcoal mb-12 max-w-2xl">
            Hampshire is home. Face-to-face meetings available, same-day support, and a founder who actually lives here.
          </p>

          {/* Hampshire — county hub (lead card) */}
          <a href={`/locations/${hampshireHub.slug}`} className="block group mb-8">
            <Card hover>
              <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
                <Icon letter={hampshireHub.name[0]} size="lg" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-terracotta font-black mb-2">County Hub</p>
                  <h3 className="font-black text-3xl md:text-4xl uppercase text-charcoal mb-4 group-hover:text-terracotta transition-colors">
                    {hampshireHub.name}
                  </h3>
                  <p className="text-charcoal leading-relaxed text-lg max-w-3xl">
                    {hampshireHub.description}
                  </p>
                </div>
              </div>
            </Card>
          </a>

          {/* Local cluster */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localLocations.map((location) => (
              <a key={location.slug} href={`/locations/${location.slug}`} className="block group">
                <Card hover>
                  <Icon letter={location.name[0]} size="md" />
                  <h3 className="font-black text-xl uppercase text-charcoal mt-4 mb-3 group-hover:text-terracotta transition-colors">
                    {location.name}
                  </h3>
                  <p className="text-charcoal leading-relaxed text-sm">
                    {location.description}
                  </p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── NATIONWIDE (REMOTE) ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
            The Rest of the UK
          </h2>
          <p className="text-lg text-charcoal max-w-2xl mx-auto">
            Not in Hampshire? No problem. AI doesn&rsquo;t need a local office &mdash; it needs someone who builds it properly. Same technology, same quality, same straight-talking support, wherever you are in the UK.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Not Listed Here? We Still Cover You.
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            We work with businesses across the UK. If you&rsquo;re not in one of the areas above, that&rsquo;s fine &mdash; everything works remotely. Book a free call and we&rsquo;ll sort you out.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <a href="/contact">
              <Button variant="primary">Use the contact form</Button>
            </a>
            <a href="tel:03330389960">
              <Button variant="secondary">Call 0333 038 9960</Button>
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
              Book a free 30-minute call below.
            </p>
          </div>
          <CalBooking />
        </div>
      </section>
    </div>
  );
}
