import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../../src/components/Button';
import { Card } from '../../src/components/Card';
import { Container } from '../../src/components/Container';
import { HeadlineBlock } from '../../src/components/HeadlineBlock';
import { CalBooking } from '../../src/components/CalBooking';
import { CONSTANTS } from '../../src/constants';
import { SocialLinks } from '../../src/components/SocialLinks';
import { trackEvent } from '../../src/utils/analytics';
import { trackLead } from '../../src/utils/metaPixel';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID || '';
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';
// Submissions are routed through a Vercel serverless function that verifies the
// reCAPTCHA token and forwards to n8n — the webhook URL stays server-side.
const CONTACT_ENDPOINT = '/api/contact';

// Accept bare domains (e.g. "example.co.uk") — prepend https:// on submit so we
// never reject a valid site just because the visitor left off the scheme.
function normaliseUrl(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return '';
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function getUtmAndContext() {
  if (typeof window === 'undefined') return {} as Record<string, string>;
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_term: params.get('utm_term') || '',
    utm_content: params.get('utm_content') || '',
    referrer: document.referrer || 'direct',
    page_url: window.location.href,
    page_path: window.location.pathname,
    session_pages: sessionStorage.getItem('antek_pages_viewed') || '1',
  };
}

function getGaIds(): Promise<{ ga_client_id?: string; ga_session_id?: string }> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !window.gtag || !GA_MEASUREMENT_ID) {
      resolve({});
      return;
    }
    const out: { ga_client_id?: string; ga_session_id?: string } = {};
    let pending = 2;
    const done = () => {
      if (--pending === 0) resolve(out);
    };
    try {
      window.gtag('get', GA_MEASUREMENT_ID, 'client_id', (cid: string) => {
        out.ga_client_id = cid;
        done();
      });
      window.gtag('get', GA_MEASUREMENT_ID, 'session_id', (sid: string) => {
        out.ga_session_id = sid;
        done();
      });
      setTimeout(() => resolve(out), 800);
    } catch {
      resolve({});
    }
  });
}

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    serviceType: '',
    interests: [] as string[],
    websiteUrl: '',
    message: '',
    preferredContact: 'either' as 'phone' | 'email' | 'either',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const pageStartRef = useRef<number>(Date.now());
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const recaptchaWidgetId = useRef<number | null>(null);

  useEffect(() => {
    pageStartRef.current = Date.now();
    if (typeof window !== 'undefined') {
      const count = parseInt(sessionStorage.getItem('antek_pages_viewed') || '0', 10);
      sessionStorage.setItem('antek_pages_viewed', String(count + 1));
    }
  }, []);

  // Load and render the reCAPTCHA v2 challenge (client-side only).
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

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter((i) => i !== value)
        : [...prev.interests, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Require a solved reCAPTCHA challenge before doing anything else.
    let recaptchaToken = '';
    if (RECAPTCHA_SITE_KEY) {
      recaptchaToken =
        window.grecaptcha && recaptchaWidgetId.current !== null
          ? window.grecaptcha.getResponse(recaptchaWidgetId.current)
          : '';
      if (!recaptchaToken) {
        setSubmitStatus({ type: 'error', message: 'Please complete the reCAPTCHA challenge.' });
        return;
      }
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const gaIds = await getGaIds();
    const ctx = getUtmAndContext();
    const payload = {
      ...formData,
      websiteUrl: normaliseUrl(formData.websiteUrl),
      timestamp: new Date().toISOString(),
      source: CONSTANTS.WEBHOOK_SOURCE_CONTACT_FORM,
      page_town: 'brand-hub',
      time_on_page_s: Math.round((Date.now() - pageStartRef.current) / 1000),
      ...ctx,
      ...gaIds,
    };

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...payload, recaptchaToken }),
      });

      if (response.ok) {
        trackEvent('form_submit', {
          page_town: 'brand-hub',
          form_source: 'contact_form',
          preferred_contact: formData.preferredContact,
          interests_count: formData.interests.length,
        });
        // Meta Pixel conversion (consent-gated inside trackLead).
        trackLead({ content_name: 'contact_form' });
        setSubmitStatus({
          type: 'success',
          message: "Thank you! We'll contact you within 2 hours.",
        });
        setFormData({
          name: '',
          businessName: '',
          phone: '',
          email: '',
          serviceType: '',
          interests: [],
          websiteUrl: '',
          message: '',
          preferredContact: 'either',
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: `Something went wrong. Please email us directly at ${CONSTANTS.CONTACT_EMAIL}`,
      });
    } finally {
      setIsSubmitting(false);
      if (RECAPTCHA_SITE_KEY && window.grecaptcha && recaptchaWidgetId.current !== null) {
        window.grecaptcha.reset(recaptchaWidgetId.current);
      }
    }
  };

  return (
    <div className="py-20 md:py-28" data-contact-region>
      <Container>
        <div className="mb-12">
          <HeadlineBlock as="h1" className="mb-6">
            Let's Build Your <span className="text-coral">AI Automation Solution</span>
          </HeadlineBlock>
          <p className="text-lg text-body leading-normal max-w-[60ch]">
            Whether you're a restaurant, consultancy, retailer, or healthcare provider&mdash;tell us your challenges and we'll show you exactly how AI automation can transform your business
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <div className="mb-6 border-l-4 border-coral bg-charcoal px-4 py-3 text-body">
              <p className="font-bold text-sm md:text-base">
                Free 30-min discovery call. No sales pitch.
              </p>
              <p className="text-sm text-muted mt-1">
                We reply within 1 hour Mon&ndash;Fri 9&ndash;6. No long-term contracts.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-name" className="font-sans font-bold text-cream mb-2 block uppercase text-sm">
                  Name *
                </label>
                <input
                  id="contact-name"
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
                <label htmlFor="contact-business-name" className="font-sans font-bold text-cream mb-2 block uppercase text-sm">
                  Business Name
                </label>
                <input
                  id="contact-business-name"
                  name="businessName"
                  type="text"
                  autoComplete="organization"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full border-2 border-coral bg-ink px-4 py-3 text-cream placeholder:text-muted focus:border-cream"
                  placeholder="Your Business Name Ltd"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contact-phone" className="font-sans font-bold text-cream mb-2 block uppercase text-sm">
                  Phone *
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border-2 border-coral bg-ink px-4 py-3 text-cream placeholder:text-muted focus:border-cream"
                  placeholder="+44 7123 456789"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="font-sans font-bold text-cream mb-2 block uppercase text-sm">
                  Email *
                </label>
                <input
                  id="contact-email"
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
              <label htmlFor="contact-service-type" className="font-sans font-bold text-cream mb-2 block uppercase text-sm">
                Industry / Business Type *
              </label>
              <input
                id="contact-service-type"
                name="serviceType"
                type="text"
                required
                autoComplete="organization-title"
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full border-2 border-coral bg-ink px-4 py-3 text-cream placeholder:text-muted focus:border-cream"
                placeholder="e.g., Restaurant, Law Firm, E-commerce, Healthcare, Retail"
              />
            </div>

            <div>
              <label className="font-sans font-bold text-cream mb-3 block uppercase text-sm">
                What interests you? *
              </label>
              <div className="space-y-3">
                {[
                  { value: 'chatbot', label: 'AI Chatbot for Website' },
                  { value: 'voice', label: 'Voice AI Phone Agent' },
                  { value: 'automation', label: 'Workflow Automation' },
                  { value: 'geo_audit', label: 'GEO Audit (AI Search Visibility)' },
                  { value: 'not_sure', label: "Not Sure - Need Guidance" },
                ].map((option) => (
                  <label key={option.value} htmlFor={`contact-interest-${option.value}`} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      id={`contact-interest-${option.value}`}
                      name="interests"
                      type="checkbox"
                      value={option.value}
                      checked={formData.interests.includes(option.value)}
                      onChange={() => handleCheckboxChange(option.value)}
                      className="accent-coral w-5 h-5 border-2 border-coral"
                    />
                    <span className="text-body">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {formData.interests.includes('geo_audit') && (
              <div>
                <label htmlFor="contact-website-url" className="font-sans font-bold text-cream mb-2 block uppercase text-sm">
                  Website URL *
                </label>
                <input
                  id="contact-website-url"
                  name="websiteUrl"
                  type="text"
                  inputMode="url"
                  required={formData.interests.includes('geo_audit')}
                  autoComplete="url"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full border-2 border-coral bg-ink px-4 py-3 text-cream placeholder:text-muted focus:border-cream"
                  placeholder="https://www.yourbusiness.co.uk"
                />
                <p className="text-sm text-muted mt-1">The website we'll audit for AI search visibility</p>
              </div>
            )}

            <div>
              <label htmlFor="contact-message" className="font-sans font-bold text-cream mb-2 block uppercase text-sm">
                Tell us about your needs
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full border-2 border-coral bg-ink px-4 py-3 text-cream placeholder:text-muted focus:border-cream resize-none"
                placeholder="What challenges are you facing? How can we help?"
              />
            </div>

            <div>
              <label className="font-sans font-bold text-cream mb-3 block uppercase text-sm">
                Preferred Contact Method *
              </label>
              <div className="flex flex-wrap gap-4">
                {[
                  { value: 'phone', label: 'Phone' },
                  { value: 'email', label: 'Email' },
                  { value: 'either', label: 'Either' },
                ].map((option) => (
                  <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="preferredContact"
                      value={option.value}
                      checked={formData.preferredContact === option.value}
                      onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value as 'phone' | 'email' | 'either' })}
                      className="accent-coral w-5 h-5"
                    />
                    <span className="text-cream font-bold">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {RECAPTCHA_SITE_KEY && (
              <div ref={recaptchaRef} className="flex justify-center" />
            )}

            {submitStatus.type && (
              <div
                className={`p-4 border-2 ${
                  submitStatus.type === 'success' ? 'bg-sage border-sage' : 'bg-ink border-coral'
                }`}
              >
                <p className={`font-bold ${submitStatus.type === 'success' ? 'text-ink' : 'text-cream'}`}>
                  {submitStatus.message}
                </p>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              className="w-full text-lg"
              disabled={isSubmitting || formData.interests.length === 0 || !formData.serviceType.trim()}
            >
              {isSubmitting ? 'Sending...' : 'Send Enquiry'}
            </Button>

              <p className="text-sm text-muted text-center">
                We typically respond within 2 hours during business hours
              </p>
            </form>
          </Card>
        </div>

        {/* Book a Call (Cal.com inline) */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="mb-8">
            <HeadlineBlock className="mb-4">
              Or Book a <span className="text-coral">Free 30-Minute Call</span>
            </HeadlineBlock>
            <p className="text-body max-w-[60ch]">
              Pick a slot that works for you. We&rsquo;ll talk through what you&rsquo;re trying to fix and where AI can actually help.
            </p>
          </div>
          <CalBooking />
        </div>

        {/* Contact Information Section */}
        <div className="mt-20 mb-16">
          <HeadlineBlock className="mb-10">
            Other Ways to <span className="text-coral">Reach Us</span>
          </HeadlineBlock>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            <Card className="h-full">
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mb-2">Email</h3>
              <p className="text-body break-words"><a href={`mailto:${CONSTANTS.CONTACT_EMAIL}`} className="hover:text-coral transition-colors font-bold break-words">{CONSTANTS.CONTACT_EMAIL}</a></p>
            </Card>
            <Card className="h-full">
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mb-2">Phone</h3>
              <p className="text-body"><a href="tel:03330389960" className="hover:text-coral transition-colors font-bold">0333 038 9960</a></p>
            </Card>
            <Card className="h-full">
              <h3 className="font-display font-extrabold text-xl uppercase text-cream mb-2">Location</h3>
              <p className="text-body">
                <a href="https://maps.google.com/?q=Chantry+House,+38+Chantry+Way,+Andover,+SP10+1LZ" target="_blank" rel="noopener noreferrer" className="hover:text-coral transition-colors font-bold">
                  Chantry House<br />
                  38 Chantry Way<br />
                  Andover, SP10 1LZ
                </a>
              </p>
            </Card>
          </div>
        </div>

        {/* Connect With Us Section */}
        <div className="max-w-3xl mx-auto">
          <Card>
          <div className="mb-8">
            <HeadlineBlock className="mb-4">
              <span className="text-coral">Connect</span> With Us
            </HeadlineBlock>
            <p className="text-body text-lg">
              Follow us on social media and stay updated with the latest AI automation insights
            </p>
          </div>
          <SocialLinks variant="page" showLabels={true} />
        </Card>
        </div>
      </Container>
    </div>
  );
}
