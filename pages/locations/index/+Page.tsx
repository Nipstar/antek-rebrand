import { Button } from '../../../src/components/Button';
import { CalBooking } from '../../../src/components/CalBooking';
import { Card } from '../../../src/components/Card';
import { Icon } from '../../../src/components/Icon';
import { Container } from '../../../src/components/Container';
import { HeadlineBlock } from '../../../src/components/HeadlineBlock';

const countyHubs = [
  {
    name: 'Hampshire',
    slug: 'hampshire',
    description: 'Our home county. Based in Andover, we work with businesses right across Hampshire — Basingstoke, Winchester, the New Forest and everywhere between — and serve the rest of the UK remotely.',
  },
  {
    name: 'Berkshire',
    slug: 'berkshire',
    description: 'Our Thames Valley county hub. AI automation for office-based firms across Reading, Newbury and the M4 corridor — technology, professional services, telecoms and finance.',
  },
];

const localLocations = [
  { name: 'Andover', slug: 'andover', description: 'Our HQ. Chantry House, 38 Chantry Way. Happy to meet for a coffee if you\'re local.' },
  { name: 'Basingstoke', slug: 'basingstoke', description: 'Hampshire\'s largest town, 20 minutes up the A303. Trades and service firms across Chineham, Old Basing and Hatch Warren.' },
  { name: 'Winchester', slug: 'winchester', description: 'The county town and cathedral city. AI automation for professional firms, practices and hospitality.' },
  { name: 'Southampton', slug: 'southampton', description: 'Port city with 18,000+ businesses. Maritime economy, two major universities, and a hospitality sector that never sleeps.' },
  { name: 'Salisbury', slug: 'salisbury', description: 'Wiltshire cathedral city on Hampshire\'s western edge. Trades and service businesses across the Salisbury area.' },
  { name: 'Newbury', slug: 'newbury', description: 'Berkshire market town just up the A34. Close enough for a face-to-face, with the same 24/7 AI coverage.' },
  { name: 'Reading', slug: 'reading', description: 'Thames Valley tech hub on the M4. AI automation for Reading\'s office-based and professional firms.' },
  { name: 'Portsmouth', slug: 'portsmouth', description: 'South-coast island city on the Solent. AI for marine, defence, hospitality and professional firms.' },
  { name: 'Bournemouth', slug: 'bournemouth', description: 'Dorset coastal city (BCP). AI for finance, tourism and creative firms, delivered remotely.' },
];

export default function Page() {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="bg-ink border-b border-hairline">
        <Container className="py-20 md:py-28">
          <div className="max-w-4xl">
            <HeadlineBlock
              as="h1"
              kicker={<>LOCATIONS &bull; HAMPSHIRE &amp; UK-WIDE</>}
            >
              AI Automation in Hampshire &amp; <span className="text-coral">Across the UK</span>
            </HeadlineBlock>
            <p className="text-lg md:text-xl text-body leading-relaxed mb-8 mt-6 max-w-[65ch]">
              We&rsquo;re a Hampshire automation agency, based in Andover. Everything we build runs in the cloud &mdash; so your AI voice agent, chatbot or automation workflow works identically whether you&rsquo;re down the road in Southampton or anywhere else in the UK. Here&rsquo;s our local patch, and yes, we cover the rest of the country remotely.
            </p>
          </div>
        </Container>
      </section>

      {/* ── HAMPSHIRE HUB + LOCAL CLUSTER ── */}
      <section>
        <Container className="py-20 md:py-28">
          <HeadlineBlock>
            Our <span className="text-coral">Local Patch</span>
          </HeadlineBlock>
          <p className="text-lg text-body mb-12 mt-6 max-w-[65ch]">
            Hampshire is home. Face-to-face meetings available, same-day support, and a founder who actually lives here.
          </p>

          {/* County hubs (lead cards) */}
          {countyHubs.map((hub) => (
            <a key={hub.slug} href={`/locations/${hub.slug}`} className="block group mb-8">
              <Card hover>
                <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-center">
                  <Icon letter={hub.name[0]} size="lg" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-coral font-sans font-bold mb-2">County Hub</p>
                    <h3 className="font-display font-extrabold text-3xl md:text-4xl uppercase text-cream mb-4 group-hover:text-coral transition-colors">
                      {hub.name}
                    </h3>
                    <p className="text-body leading-relaxed text-lg max-w-[65ch]">
                      {hub.description}
                    </p>
                  </div>
                </div>
              </Card>
            </a>
          ))}

          {/* Local cluster */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {localLocations.map((location) => (
              <a key={location.slug} href={`/locations/${location.slug}`} className="block group">
                <Card hover className="h-full">
                  <Icon letter={location.name[0]} size="md" />
                  <h3 className="font-display font-extrabold text-xl uppercase text-cream mt-4 mb-3 group-hover:text-coral transition-colors">
                    {location.name}
                  </h3>
                  <p className="text-body leading-relaxed text-sm">
                    {location.description}
                  </p>
                </Card>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* ── NATIONWIDE (REMOTE) ── */}
      <section className="border-y border-hairline py-20 md:py-28 bg-ink">
        <Container>
          <HeadlineBlock>
            The Rest of <span className="text-coral">the UK</span>
          </HeadlineBlock>
          <p className="text-lg text-body max-w-[65ch] mt-6">
            Not in Hampshire? No problem. AI doesn&rsquo;t need a local office &mdash; it needs someone who builds it properly. Same technology, same quality, same straight-talking support, wherever you are in the UK.
          </p>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t border-coral py-24 md:py-32">
        <Container>
          <HeadlineBlock as="h2">
            Not Listed Here? <span className="text-coral">We Still Cover You.</span>
          </HeadlineBlock>
          <p className="text-lg md:text-xl text-body leading-relaxed mb-10 mt-6 max-w-[65ch]">
            We work with businesses across the UK. If you&rsquo;re not in one of the areas above, that&rsquo;s fine &mdash; everything works remotely. Book a free call and we&rsquo;ll sort you out.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <a href="/contact">
              <Button variant="primary">Use the contact form</Button>
            </a>
            <a href="tel:03330389960">
              <Button variant="secondary">Call 0333 038 9960</Button>
            </a>
          </div>
        </Container>
      </section>

      {/* ── BOOK A CALL (Cal.com) ── */}
      <section className="border-t border-hairline py-20 md:py-28">
        <Container>
          <div className="mb-10">
            <HeadlineBlock>
              Pick a Time That <span className="text-coral">Works for You</span>
            </HeadlineBlock>
            <p className="text-body max-w-[65ch] mt-6">
              Book a free 30-minute call below.
            </p>
          </div>
          <CalBooking />
        </Container>
      </section>
    </div>
  );
}
