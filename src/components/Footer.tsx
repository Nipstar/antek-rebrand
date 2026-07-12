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
    <footer className="bg-ink border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Company Info */}
          <div>
            <a href="/" className="flex items-center space-x-3 mb-8 hover:opacity-80 transition-opacity">
              <img src="/logo.svg" alt="Antek Automation Logo" width={48} height={48} loading="lazy" decoding="async" className="w-12 h-12" />
              <span className="font-display font-extrabold text-lg uppercase tracking-tight-lg text-cream">
                Antek Automation
              </span>
            </a>
            <p className="text-body text-sm leading-relaxed">
              AI automation solutions for UK businesses. Save time, increase revenue, and delight customers.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="font-mono font-bold uppercase text-muted text-xs tracking-eyebrow mb-6">Services</p>
            <ul className="space-y-4">
              <li>
                <a href="/ai-receptionist" className="text-body hover:text-coral transition-colors text-sm inline-block min-h-[36px] py-1.5">
                  AI Receptionist
                </a>
              </li>
              <li>
                <a href="/services/ai-chatbots" className="text-body hover:text-coral transition-colors text-sm inline-block min-h-[36px] py-1.5">
                  AI Chatbots
                </a>
              </li>
              <li>
                <a href="/services/ai-voice-assistants" className="text-body hover:text-coral transition-colors text-sm inline-block min-h-[36px] py-1.5">
                  Voice AI
                </a>
              </li>
              <li>
                <a href="/services/workflow-automation" className="text-body hover:text-coral transition-colors text-sm inline-block min-h-[36px] py-1.5">
                  Automation
                </a>
              </li>
              <li>
                <a href="/services/geo-audit" className="text-body hover:text-coral transition-colors text-sm inline-block min-h-[36px] py-1.5">
                  GEO Audit
                </a>
              </li>
              <li>
                <a href="/free-ai-visibility-check" className="text-body hover:text-coral transition-colors text-sm inline-block min-h-[36px] py-1.5">
                  Free AI Visibility Check
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-body hover:text-coral transition-colors text-sm inline-block min-h-[36px] py-1.5">
                  Pricing
                </a>
              </li>
              <li>
                <a href="https://blog.antekautomation.com" target="_blank" rel="noopener noreferrer" className="text-body hover:text-coral transition-colors text-sm inline-block min-h-[36px] py-1.5">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Locations Grid */}
          <div>
            <p className="font-mono font-bold uppercase text-muted text-xs tracking-eyebrow mb-6">Locations</p>
            <a
              href="/locations"
              className="text-body hover:text-coral transition-colors text-sm font-bold block mb-4"
            >
              All Locations
            </a>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {FOOTER_LOCATIONS.map((city) => (
                <a
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="text-body hover:text-coral transition-colors text-sm inline-block min-h-[36px] py-1.5"
                >
                  {city.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono font-bold uppercase text-muted text-xs tracking-eyebrow mb-6">Contact</p>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="text-muted">Email:</span>
                <br />
                <a href={`mailto:${CONSTANTS.CONTACT_EMAIL}`} className="text-body hover:text-coral transition-colors">
                  {CONSTANTS.CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <span className="text-muted">Phone:</span>
                <br />
                <a href="tel:03330389960" className="text-body hover:text-coral transition-colors">
                  0333 038 9960
                </a>
              </li>
              <li>
                <span className="text-muted">Address:</span>
                <br />
                <a href="https://maps.google.com/?q=Chantry+House,+38+Chantry+Way,+Andover,+SP10+1LZ" target="_blank" rel="noopener noreferrer" className="text-body hover:text-coral transition-colors">
                  Chantry House<br />38 Chantry Way<br />Andover, SP10 1LZ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="font-mono font-bold uppercase text-muted text-xs tracking-eyebrow mb-6">Legal</p>
            <ul className="space-y-4">
              <li>
                <a href="/terms-of-business" className="text-body hover:text-coral transition-colors text-sm inline-block min-h-[36px] py-1.5">
                  Terms of Business
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-body hover:text-coral transition-colors text-sm inline-block min-h-[36px] py-1.5">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & FSB */}
        <div className="border-t border-hairline mt-16 pt-12">
          <p className="font-mono font-bold uppercase text-muted text-xs tracking-eyebrow mb-6">Connect With Us</p>
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
        <div className="border-t border-hairline mt-16 pt-10">
          <p className="text-center text-muted text-xs">
            © {new Date().getFullYear()} Antek Automation. All rights reserved.
          </p>
        </div>
      </div>

      {/* Brand footer strip — full-bleed coral, mono, separated by / (guidelines §5.12) */}
      <div className="bg-coral">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono font-bold uppercase text-ink text-xs tracking-eyebrow text-center">
          <a href="tel:03330389960" className="hover:underline">0333 038 9960</a>
          <span aria-hidden="true">/</span>
          <a href={`mailto:${CONSTANTS.CONTACT_EMAIL}`} className="hover:underline normal-case">{CONSTANTS.CONTACT_EMAIL}</a>
          <span aria-hidden="true">/</span>
          <span>Andover SP10 1LZ</span>
          <span aria-hidden="true">/</span>
          <a href="/" className="hover:underline normal-case">antekautomation.com</a>
        </div>
      </div>
    </footer>
  );
}
