import React, { useEffect, useRef, useState } from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { Container } from './Container';
import { HeadlineBlock } from './HeadlineBlock';
import { trackEvent } from '../utils/analytics';
import { trackLead } from '../utils/metaPixel';

const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';
// Same gateway as the contact form: verifies the reCAPTCHA token server-side,
// then forwards the (token-stripped) payload to the n8n webhook.
const CONTACT_ENDPOINT = '/api/contact';

const BUSINESS_TYPES = [
  'Solicitor',
  'Accountant',
  'Dentist',
  'Trades & home services',
  'Other service business',
];

// Accept bare domains; prepend https:// on submit so the webhook always gets a URL.
function normaliseUrl(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return '';
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

// Shared AI Visibility Check capture form. Mounted at #visibility-check on the
// /services/geo and /services/ai-seo pages. Styling and anti-spam flow mirror
// the existing contact form (dark Card, coral-bordered inputs, reCAPTCHA v2).
export function AIVisibilityCheckForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    businessType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [recaptchaError, setRecaptchaError] = useState(false);

  const recaptchaRef = useRef<HTMLDivElement>(null);
  const recaptchaWidgetId = useRef<number | null>(null);

  // Load and render the reCAPTCHA v2 challenge (client-side only) — identical
  // flow to the contact form, reusing the same site key and script guard.
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

    const website = normaliseUrl(formData.website);
    const page = typeof window !== 'undefined' ? window.location.pathname : '';
    // Map name/email as the contact form does; carry website + business type in the
    // message body too, so the details survive regardless of webhook field mapping.
    const payload = {
      name: formData.name,
      email: formData.email,
      websiteUrl: website,
      serviceType: formData.businessType,
      message: `AI Visibility Check request.\nWebsite: ${website}\nBusiness type: ${formData.businessType}`,
      source: 'ai-visibility-check',
      page,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, recaptchaToken }),
      });

      if (response.ok) {
        trackEvent('form_submit', { form_source: 'ai_visibility_check', page });
        // Meta Pixel conversion (consent-gated inside trackLead).
        trackLead({ content_name: 'ai_visibility_check' });
        setSubmitStatus('success');
        setFormData({ name: '', email: '', website: '', businessType: '' });
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

  return (
    <section id="visibility-check" className="py-20 md:py-28 scroll-mt-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <HeadlineBlock className="mb-4">
            Free AI <span className="text-coral">Visibility Check</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-relaxed mb-8 max-w-[65ch]">
            Tell us where to look. Within 48 hours you&rsquo;ll get a plain-English summary of whether
            ChatGPT, Perplexity, Gemini and Google&rsquo;s AI Overviews mention your business &mdash; and
            what to do if they don&rsquo;t.
          </p>

          <Card>
            {submitStatus === 'success' ? (
              <div className="bg-sage border-2 border-sage p-6">
                <p className="font-display font-extrabold text-ink text-xl uppercase mb-2">
                  Done &mdash; your AI Visibility Check is booked.
                </p>
                <p className="text-ink font-bold">
                  You&rsquo;ll have your report within 48 hours. No obligation, no follow-up pestering.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="avc-name" className="font-sans font-bold text-cream mb-2 block uppercase text-sm">
                      Name *
                    </label>
                    <input
                      id="avc-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border-2 border-coral bg-ink px-4 py-3 text-cream placeholder:text-muted focus:border-cream"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="avc-email" className="font-sans font-bold text-cream mb-2 block uppercase text-sm">
                      Email *
                    </label>
                    <input
                      id="avc-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border-2 border-coral bg-ink px-4 py-3 text-cream placeholder:text-muted focus:border-cream"
                      placeholder="john@yourbusiness.co.uk"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="avc-website" className="font-sans font-bold text-cream mb-2 block uppercase text-sm">
                    Business website *
                  </label>
                  <input
                    id="avc-website"
                    name="website"
                    type="text"
                    required
                    inputMode="url"
                    autoComplete="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full border-2 border-coral bg-ink px-4 py-3 text-cream placeholder:text-muted focus:border-cream"
                    placeholder="yourbusiness.co.uk"
                  />
                </div>

                <div>
                  <label htmlFor="avc-business-type" className="font-sans font-bold text-cream mb-2 block uppercase text-sm">
                    Business type *
                  </label>
                  <select
                    id="avc-business-type"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full border-2 border-coral bg-ink px-4 py-3 text-cream focus:border-cream"
                  >
                    <option value="" disabled>
                      Select your business type
                    </option>
                    {BUSINESS_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {RECAPTCHA_SITE_KEY && <div ref={recaptchaRef} className="flex justify-center" />}

                {recaptchaError && (
                  <div className="p-4 border-2 bg-ink border-coral">
                    <p className="font-bold text-cream">Please complete the reCAPTCHA challenge.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 border-2 bg-ink border-coral">
                    <p className="font-bold text-cream">
                      Something went wrong &mdash; email us at{' '}
                      <a href="mailto:hello@antekautomation.com" className="underline hover:text-coral">
                        hello@antekautomation.com
                      </a>{' '}
                      and we&rsquo;ll run the check manually.
                    </p>
                  </div>
                )}

                <Button type="submit" variant="primary" className="w-full text-lg" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send My Free Check'}
                </Button>

                <p className="text-sm text-muted text-center">
                  No spam, no sales calls, no obligation. One report, then it&rsquo;s your move.
                </p>
              </form>
            )}
          </Card>
        </div>
      </Container>
    </section>
  );
}
