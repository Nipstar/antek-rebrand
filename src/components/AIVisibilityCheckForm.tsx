import React, { useEffect, useRef, useState } from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { Container } from './Container';
import { HeadlineBlock } from './HeadlineBlock';
import { trackEvent } from '../utils/analytics';
import { trackLead } from '../utils/metaPixel';

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';
// WF9 gateway: verifies the reCAPTCHA token server-side, then forwards the
// (token-stripped) lead to the n8n visibility-check webhook. Falls back to the
// contact pipeline until WF9 is live (see api/visibility-check.ts).
const VISIBILITY_ENDPOINT = '/api/visibility-check';

// Accept bare domains; prepend https:// on submit so the webhook always gets a URL.
function normaliseUrl(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return '';
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY = {
  name: '',
  email: '',
  phone: '',
  business_name: '',
  website: '',
  location: '',
  consent: false,
  company_size: '', // honeypot — real users never see or fill this
};

// Shared AI Visibility Check capture form. Mounted at #visibility-check on the
// landing page and the /services/geo, /services/ai-seo and /services/geo-audit
// pages. One form spec feeds WF9: name, email, phone, business, website, location.
// Trade is classified from the site scrape, so there is no business-type dropdown.
export function AIVisibilityCheckForm() {
  const [formData, setFormData] = useState({ ...EMPTY });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [recaptchaError, setRecaptchaError] = useState(false);
  const [fieldError, setFieldError] = useState('');

  const recaptchaRef = useRef<HTMLDivElement>(null);
  const recaptchaWidgetId = useRef<number | null>(null);

  // Load and render the reCAPTCHA v2 challenge (client-side only) — same flow and
  // site key as the contact form.
  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY || typeof window === 'undefined') return;

    const renderWidget = () => {
      if (recaptchaWidgetId.current !== null) return;
      if (typeof window.grecaptcha?.render !== 'function' || !recaptchaRef.current) return;
      recaptchaWidgetId.current = window.grecaptcha.render(recaptchaRef.current, {
        sitekey: RECAPTCHA_SITE_KEY,
      });
    };

    if (typeof window.grecaptcha?.render === 'function') {
      renderWidget();
      return;
    }

    if (!document.querySelector('script[data-recaptcha]')) {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.setAttribute('data-recaptcha', 'true');
      document.head.appendChild(script);
    }

    const interval = window.setInterval(() => {
      if (typeof window.grecaptcha?.render === 'function') {
        window.clearInterval(interval);
        renderWidget();
      }
    }, 200);
    return () => window.clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRecaptchaError(false);
    setFieldError('');

    if (!EMAIL_RE.test(formData.email.trim())) {
      setFieldError('Please enter a valid email address.');
      return;
    }
    const website = normaliseUrl(formData.website);
    try {
      void new URL(website);
    } catch {
      setFieldError('Please enter a valid website address.');
      return;
    }
    if (!formData.consent) {
      setFieldError('Please tick the consent box so we can email your report.');
      return;
    }

    // Require a solved reCAPTCHA challenge before doing anything else.
    let recaptchaToken = '';
    if (RECAPTCHA_SITE_KEY) {
      recaptchaToken =
        window.grecaptcha && recaptchaWidgetId.current !== null
          ? window.grecaptcha.getResponse(recaptchaWidgetId.current)
          : '';
      if (!recaptchaToken) {
        setRecaptchaError(true);
        return;
      }
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const page = typeof window !== 'undefined' ? window.location.pathname : '';
    // Snake_case fields for WF9; recaptchaToken (camel) is read + stripped by the
    // Vercel function and never reaches the webhook.
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      business_name: formData.business_name.trim(),
      website_url: website,
      location: formData.location.trim(),
      consent: formData.consent,
      company_size: formData.company_size, // honeypot
      source: 'ai-visibility-check',
      page,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch(VISIBILITY_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, recaptchaToken }),
      });

      if (response.ok) {
        trackEvent('form_submit', { form_source: 'ai_visibility_check', page });
        // Meta Pixel conversion (consent-gated inside trackLead), fired on 200 only.
        trackLead({ content_name: 'ai_visibility_check' });
        setSubmitStatus('success');
        setFormData({ ...EMPTY });
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      if (RECAPTCHA_SITE_KEY && window.grecaptcha && recaptchaWidgetId.current !== null) {
        window.grecaptcha.reset(recaptchaWidgetId.current);
      }
    }
  };

  const inputClass =
    'w-full border-2 border-coral bg-ink px-4 py-3 text-cream placeholder:text-muted focus:border-cream';
  const labelClass = 'font-sans font-bold text-cream mb-2 block uppercase text-sm';

  return (
    <section id="visibility-check" className="py-20 md:py-28 scroll-mt-24" data-contact-region>
      <Container>
        <div className="max-w-3xl mx-auto">
          <HeadlineBlock className="mb-4">
            Free AI <span className="text-coral">Visibility Check</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-relaxed mb-8 max-w-[65ch]">
            Tell us where to look. You&rsquo;ll get a plain-English report on whether ChatGPT, Perplexity,
            Gemini and Google&rsquo;s AI Overviews mention your business &mdash; and what to do if they
            don&rsquo;t. Usually within 15 minutes. No cost, no call required.
          </p>

          <Card>
            {submitStatus === 'success' ? (
              <div className="bg-sage border-2 border-sage p-6">
                <p className="font-display font-extrabold text-ink text-xl uppercase mb-2">
                  Check running.
                </p>
                <p className="text-ink font-bold">
                  Your report will be in your inbox within 15 minutes. Check your spam folder if it does
                  not arrive.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot — off-screen, not a real field. Bots fill it, humans do not. */}
                <div className="absolute left-[-9999px]" aria-hidden="true">
                  <label htmlFor="avc-company-size">Company size</label>
                  <input
                    id="avc-company-size"
                    name="company_size"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.company_size}
                    onChange={(e) => setFormData({ ...formData, company_size: e.target.value })}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="avc-name" className={labelClass}>Name *</label>
                    <input
                      id="avc-name" name="name" type="text" required autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClass} placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="avc-email" className={labelClass}>Email *</label>
                    <input
                      id="avc-email" name="email" type="email" required autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass} placeholder="john@yourbusiness.co.uk"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="avc-phone" className={labelClass}>Phone *</label>
                    <input
                      id="avc-phone" name="phone" type="tel" required autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClass} placeholder="07123 456789"
                    />
                  </div>
                  <div>
                    <label htmlFor="avc-business" className={labelClass}>Business name *</label>
                    <input
                      id="avc-business" name="business_name" type="text" required autoComplete="organization"
                      value={formData.business_name}
                      onChange={(e) => setFormData({ ...formData, business_name: e.target.value })}
                      className={inputClass} placeholder="Smith &amp; Co"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="avc-website" className={labelClass}>Business website *</label>
                    <input
                      id="avc-website" name="website_url" type="text" required inputMode="url" autoComplete="url"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className={inputClass} placeholder="yourbusiness.co.uk"
                    />
                  </div>
                  <div>
                    <label htmlFor="avc-location" className={labelClass}>Town *</label>
                    <input
                      id="avc-location" name="location" type="text" required autoComplete="address-level2"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className={inputClass} placeholder="Basingstoke"
                    />
                  </div>
                </div>

                <label htmlFor="avc-consent" className="flex items-start gap-3 cursor-pointer">
                  <input
                    id="avc-consent" name="consent" type="checkbox" required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 w-5 h-5 shrink-0 border-2 border-coral bg-ink accent-coral"
                  />
                  <span className="text-sm text-body leading-relaxed">
                    Email me the report and occasional AI visibility tips. Unsubscribe any time.
                  </span>
                </label>

                {RECAPTCHA_SITE_KEY && <div ref={recaptchaRef} className="flex justify-center" />}

                {(recaptchaError || fieldError) && (
                  <div className="p-4 border-2 bg-ink border-coral">
                    <p className="font-bold text-cream">
                      {fieldError || 'Please complete the reCAPTCHA challenge.'}
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 border-2 bg-ink border-coral">
                    <p className="font-bold text-cream">
                      Something went wrong &mdash; try again or email us at{' '}
                      <a href="mailto:hello@antekautomation.com" className="underline hover:text-coral">
                        hello@antekautomation.com
                      </a>.
                    </p>
                  </div>
                )}

                <Button type="submit" variant="primary" className="w-full text-lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Checking your site...' : 'Run My Free Check'}
                </Button>

                <p className="text-sm text-muted text-center">
                  No card. No obligation. One report, then it&rsquo;s your move.
                </p>
              </form>
            )}
          </Card>
        </div>
      </Container>
    </section>
  );
}
