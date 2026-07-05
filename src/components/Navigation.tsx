import { useState, useRef, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'AI Receptionist', href: '/ai-receptionist' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  const serviceLinks = [
    { label: 'AI Chatbots', href: '/services/ai-chatbots' },
    { label: 'AI Voice Assistants', href: '/services/ai-voice-assistants' },
    { label: 'Workflow Automation', href: '/services/workflow-automation' },
    { label: 'GEO', href: '/services/geo' },
    { label: 'GEO Audit', href: '/services/geo-audit' },
    { label: 'AI SEO', href: '/services/ai-seo' },
    { label: 'Pricing', href: '/pricing' },
  ]

  return (
    <nav className="sticky top-0 z-40 bg-charcoal border-b border-hairline">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <a
            href="/"
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img src="/logo.svg" alt="Antek Automation Logo" width={56} height={56} decoding="async" className="w-14 h-14" />
            <span className="font-display font-extrabold text-2xl uppercase text-cream">
              Antek Automation
            </span>
          </a>

          <div className="hidden xl:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono font-bold uppercase text-xs tracking-eyebrow text-body hover:text-coral transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onMouseEnter={() => setIsServicesOpen(true)}
                className="font-mono font-bold uppercase text-xs tracking-eyebrow text-body hover:text-coral transition-colors flex items-center space-x-1"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 bg-ink border-2 border-coral shadow-brutal min-w-[260px] z-50">
                  {serviceLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsServicesOpen(false)}
                      className="block w-full text-left px-6 py-4 font-mono font-bold uppercase text-xs tracking-eyebrow text-body hover:bg-charcoal hover:text-coral transition-colors border-b border-hairline last:border-b-0"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a
              href="/contact"
              className="px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 bg-coral border-2 border-ink shadow-brutal-sm font-sans font-bold uppercase text-ink text-xs md:text-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 whitespace-nowrap"
            >
              Book a free 30-min discovery call
            </a>
          </div>

          <button
            className="xl:hidden p-2 text-cream"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="xl:hidden border-t border-hairline bg-ink">
            <div className="flex flex-col space-y-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-mono font-bold uppercase text-xs tracking-eyebrow text-body hover:text-coral transition-colors text-left"
                >
                  {link.label}
                </a>
              ))}
              <div className="border-t border-hairline pt-4">
                <p className="font-mono font-bold uppercase text-xs tracking-eyebrow text-muted mb-3">Services</p>
                {serviceLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block font-mono font-bold uppercase text-xs tracking-eyebrow text-body hover:text-coral transition-colors mb-3 text-left w-full"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full px-6 py-3 bg-coral border-2 border-ink shadow-brutal-sm font-sans font-bold uppercase text-ink text-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-150 text-center block"
              >
                Book a free 30-min discovery call
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
