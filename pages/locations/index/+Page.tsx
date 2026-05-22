import { Button } from '../../../src/components/Button';
import { CalBooking } from '../../../src/components/CalBooking';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';

const localLocations = [
  { name: 'Hampshire', slug: 'hampshire', description: 'Our home county. Based in Andover, serving businesses across Hampshire from Basingstoke to the New Forest.' },
  { name: 'Southampton', slug: 'southampton', description: 'Port city with 18,000+ businesses. Maritime economy, two major universities, and a hospitality sector that never sleeps.' },
  { name: 'Andover', slug: 'andover', description: 'Our HQ. Chantry House, 38 Chantry Way. Happy to meet for a coffee if you\'re local.' },
];

const nationalLocations = [
  { name: 'London', slug: 'london', description: 'The UK\'s most competitive market. London-quality AI automation without London agency prices.' },
  { name: 'Birmingham', slug: 'birmingham', description: 'Second-city economy with 45,000+ SMEs. From the Jewellery Quarter to Solihull, we\'ve got you covered.' },
  { name: 'Manchester', slug: 'manchester', description: 'Northern Powerhouse. 67,000 registered SMEs and the fastest-growing tech economy outside London.' },
  { name: 'Leeds', slug: 'leeds', description: 'Largest financial centre outside London. Professional services and trades businesses across West Yorkshire.' },
  { name: 'Liverpool', slug: 'liverpool', description: 'Maritime heritage meets modern service economy. From the Baltic Triangle to Albert Dock.' },
  { name: 'Glasgow', slug: 'glasgow', description: 'Scotland\'s commercial engine. 28,000+ businesses from Merchant City to the West End.' },
  { name: 'Newcastle', slug: 'newcastle', description: 'North East\'s digital future. From Newcastle Helix to the Quayside, plus Gateshead and Sunderland.' },
];

export default function Page() {
  return (
    <div className="bg-off-white">

      {/* ── HERO ── */}
      <section className="bg-warm-beige border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-wide text-charcoal mb-4 font-black">
              LOCATIONS &bull; UK-WIDE
            </p>
            <h1 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-xl text-charcoal mb-6 leading-tight">
              AI Automation Across the UK
            </h1>
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8 max-w-3xl">
              We&rsquo;re based in Hampshire but serve UK businesses nationwide. Everything we build runs on cloud infrastructure &mdash; your AI voice agent, chatbot or automation workflow works identically whether you&rsquo;re in Andover or Aberdeen. Here&rsquo;s where we&rsquo;re currently working with local businesses.
            </p>
          </div>
        </div>
      </section>

      {/* ── LOCAL TO US ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
            Local to Us
          </h2>
          <p className="text-lg text-charcoal mb-12 max-w-2xl">
            Our home patch. Face-to-face meetings available, same-day support, and a founder who actually lives here.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {localLocations.map((location) => (
              <a key={location.slug} href={`/locations/${location.slug}`} className="block group">
                <Card hover>
                  <Icon letter={location.name[0]} size="lg" />
                  <h3 className="font-black text-2xl uppercase text-charcoal mt-6 mb-4 group-hover:text-terracotta transition-colors">
                    {location.name}
                  </h3>
                  <p className="text-charcoal leading-relaxed">
                    {location.description}
                  </p>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── NATIONWIDE ── */}
      <section className="border-y-3 border-charcoal py-20 md:py-28 bg-soft-sage">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight-lg text-charcoal mb-4">
            Nationwide
          </h2>
          <p className="text-lg text-charcoal mb-12 max-w-2xl">
            Same technology, same quality, same straight-talking support. AI doesn&rsquo;t need a local office &mdash; it needs someone who builds it properly.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {nationalLocations.map((location) => (
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

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-8 border-terracotta py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-black text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight-lg text-off-white mb-6">
            Not Listed Here? We Still Cover You.
          </h2>
          <p className="text-lg md:text-xl text-off-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            We work with businesses across the UK. If you&rsquo;re not in one of the cities above, that&rsquo;s fine &mdash; everything works remotely. Book a free chat and we&rsquo;ll sort you out.
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
