import { CONSTANTS } from '../constants';
import { SocialLinks } from './SocialLinks';

// Hampshire-led location cluster — kept locations only (national city pages removed)
const FOOTER_LOCATIONS = [
  { name: 'Hampshire', slug: 'hampshire' },
  { name: 'Berkshire', slug: 'berkshire' },
  { name: 'Andover', slug: 'andover' },
  { name: 'Basingstoke', slug: 'basingstoke' },
  { name: 'Winchester', slug: 'winchester' },
  { name: 'Southampton', slug: 'southampton' },
  { name: 'Salisbury', slug: 'salisbury' },
  { name: 'Newbury', slug: 'newbury' },
  { name: 'Reading', slug: 'reading' },
  { name: 'Portsmouth', slug: 'portsmouth' },
  { name: 'Bournemouth', slug: 'bournemouth' },
];

export function Footer() {
  return (
    <footer className="bg-mid-gray border-t-3 border-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Company Info */}
          <div>
            <a href="/" className="flex items-center space-x-3 mb-8 hover:opacity-80 transition-opacity">
              <img src="/logo.svg" alt="Antek Automation Logo" width={48} height={48} loading="lazy" decoding="async" className="w-12 h-12" />
              <span className="font-black text-lg uppercase tracking-tight-lg text-off-white">
                Antek Automation
              </span>
            </a>
            <p className="text-off-white/80 text-sm leading-relaxed">
              AI automation solutions for UK businesses. Save time, increase revenue, and delight customers.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="font-black uppercase text-off-white text-sm tracking-tight-lg mb-6">Services</p>
            <ul className="space-y-4">
              <li>
                <a href="/ai-receptionist" className="text-off-white/80 hover:text-terracotta transition-colors text-sm inline-block min-h-[36px] py-1.5">
                  AI Receptionist
                </a>
              </li>
              <li>
                <a href="/services/ai-chatbots" className="text-off-white/80 hover:text-terracotta transition-colors text-sm inline-block min-h-[36px] py-1.5">
                  AI Chatbots
                </a>
              </li>
              <li>
                <a href="/services/ai-voice-assistants" className="text-off-white/80 hover:text-terracotta transition-colors text-sm inline-block min-h-[36px] py-1.5">
                  Voice AI
                </a>
              </li>
              <li>
                <a href="/services/workflow-automation" className="text-off-white/80 hover:text-terracotta transition-colors text-sm inline-block min-h-[36px] py-1.5">
                  Automation
                </a>
              </li>
              <li>
                <a href="/services/geo-audit" className="text-off-white/80 hover:text-terracotta transition-colors text-sm inline-block min-h-[36px] py-1.5">
                  GEO Audit
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-off-white/80 hover:text-terracotta transition-colors text-sm inline-block min-h-[36px] py-1.5">
                  Pricing
                </a>
              </li>
              <li>
                <a href="https://blog.antekautomation.com" target="_blank" rel="noopener noreferrer" className="text-off-white/80 hover:text-terracotta transition-colors text-sm inline-block min-h-[36px] py-1.5">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Locations Grid */}
          <div>
            <p className="font-black uppercase text-off-white text-sm tracking-tight-lg mb-6">Locations</p>
            <a
              href="/locations"
              className="text-off-white/80 hover:text-terracotta transition-colors text-sm font-bold block mb-4"
            >
              All Locations
            </a>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {FOOTER_LOCATIONS.map((city) => (
                <a
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="text-off-white/80 hover:text-terracotta transition-colors text-sm inline-block min-h-[36px] py-1.5"
                >
                  {city.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-black uppercase text-off-white text-sm tracking-tight-lg mb-6">Contact</p>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="text-off-white/80">Email:</span>
                <br />
                <a href={`mailto:${CONSTANTS.CONTACT_EMAIL}`} className="text-off-white/80 hover:text-terracotta transition-colors">
                  {CONSTANTS.CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <span className="text-off-white/80">Phone:</span>
                <br />
                <a href="tel:03330389960" className="text-off-white/80 hover:text-terracotta transition-colors">
                  0333 038 9960
                </a>
              </li>
              <li>
                <span className="text-off-white/80">Address:</span>
                <br />
                <a href="https://maps.google.com/?q=Chantry+House,+38+Chantry+Way,+Andover,+SP10+1LZ" target="_blank" rel="noopener noreferrer" className="text-off-white/80 hover:text-terracotta transition-colors">
                  Chantry House<br />38 Chantry Way<br />Andover, SP10 1LZ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-black uppercase text-off-white text-sm tracking-tight-lg mb-6">Legal</p>
            <ul className="space-y-4">
              <li>
                <a href="/terms-of-business" className="text-off-white/80 hover:text-terracotta transition-colors text-sm inline-block min-h-[36px] py-1.5">
                  Terms of Business
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-off-white/80 hover:text-terracotta transition-colors text-sm inline-block min-h-[36px] py-1.5">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & FSB */}
        <div className="border-t-3 border-charcoal mt-16 pt-12">
          <p className="font-black uppercase text-off-white text-sm tracking-tight-lg mb-6">Connect With Us</p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <SocialLinks variant="footer" showLabels={false} />
            <a href="https://www.fsb.org.uk" target="_blank" rel="noopener noreferrer" className="shrink-0">
              <img
                src="/RS51463_FSB Member Logo_White.png"
                alt="visit FSB's website"
                width={240}
                height={135}
                loading="lazy"
                decoding="async"
                className="h-16 w-auto"
              />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t-3 border-charcoal mt-16 pt-10">
          <p className="text-center text-off-white/60 text-xs">
            © {new Date().getFullYear()} Antek Automation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
