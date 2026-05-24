import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../../src/components/Button';
import { Card } from '../../src/components/Card';
import { CalBooking } from '../../src/components/CalBooking';
import { CONSTANTS } from '../../src/constants';
import { SocialLinks } from '../../src/components/SocialLinks';
import { trackEvent } from '../../src/utils/analytics';

const CONTACT_WEBHOOK_URL = import.meta.env.VITE_CONTACT_WEBHOOK_URL || '';
const GA_MEASUREMENT_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID || '';

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

  useEffect(() => {
    pageStartRef.current = Date.now();
    if (typeof window !== 'undefined') {
      const count = parseInt(sessionStorage.getItem('antek_pages_viewed') || '0', 10);
      sessionStorage.setItem('antek_pages_viewed', String(count + 1));
    }
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
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    const gaIds = await getGaIds();
    const ctx = getUtmAndContext();
    const payload = {
      ...formData,
      timestamp: new Date().toISOString(),
      source: CONSTANTS.WEBHOOK_SOURCE_CONTACT_FORM,
      page_town: 'brand-hub',
      time_on_page_s: Math.round((Date.now() - pageStartRef.current) / 1000),
      ...ctx,
      ...gaIds,
    };

    try {
      if (CONTACT_WEBHOOK_URL) {
        const response = await fetch(CONTACT_WEBHOOK_URL, {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          trackEvent('form_submit', {
            page_town: 'brand-hub',
            form_source: 'contact_form',
            preferred_contact: formData.preferredContact,
            interests_count: formData.interests.length,
          });
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
          throw new Error('Webhook failed');
        }
      } else {
        setSubmitStatus({
          type: 'success',
          message: `Thank you! We'll contact you within 2 hours. You can also reach us directly at ${CONSTANTS.CONTACT_EMAIL}`,
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
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: `Something went wrong. Please email us directly at ${CONSTANTS.CONTACT_EMAIL}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-soft-sage py-20 md:py-28" data-contact-region>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h1 className="font-black text-5xl md:text-6xl uppercase tracking-tight-xl text-charcoal mb-6">
            Let's Build Your AI Automation Solution
          </h1>
          <p className="text-lg text-charcoal leading-normal max-w-2xl mx-auto">
            Whether you're a restaurant, consultancy, retailer, or healthcare provider&mdash;tell us your challenges and we'll show you exactly how AI automation can transform your business
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <div className="mb-6 border-l-4 border-terracotta bg-warm-beige/60 px-4 py-3 text-charcoal">
              <p className="font-bold text-sm md:text-base">
                Free 30-min discovery call. No sales pitch.
              </p>
              <p className="text-sm text-charcoal/80 mt-1">
                We reply within 1 hour Mon&ndash;Fri 9&ndash;6. No long-term contracts.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-black text-charcoal mb-2 block uppercase text-sm">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border-3 border-charcoal bg-white px-4 py-3 focus:border-terracotta focus:outline-none text-charcoal"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="font-black text-charcoal mb-2 block uppercase text-sm">
                  Business Name
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full border-3 border-charcoal bg-white px-4 py-3 focus:border-terracotta focus:outline-none text-charcoal"
                  placeholder="Your Business Name Ltd"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-black text-charcoal mb-2 block uppercase text-sm">
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border-3 border-charcoal bg-white px-4 py-3 focus:border-terracotta focus:outline-none text-charcoal"
                  placeholder="+44 7123 456789"
                />
              </div>

              <div>
                <label className="font-black text-charcoal mb-2 block uppercase text-sm">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border-3 border-charcoal bg-white px-4 py-3 focus:border-terracotta focus:outline-none text-charcoal"
                  placeholder="john@yourbusiness.co.uk"
                />
              </div>
            </div>

            <div>
              <label className="font-black text-charcoal mb-2 block uppercase text-sm">
                Industry / Business Type *
              </label>
              <input
                type="text"
                required
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full border-3 border-charcoal bg-white px-4 py-3 focus:border-terracotta focus:outline-none text-charcoal"
                placeholder="e.g., Restaurant, Law Firm, E-commerce, Healthcare, Retail"
              />
            </div>

            <div>
              <label className="font-black text-charcoal mb-3 block uppercase text-sm">
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
                  <label key={option.value} className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(option.value)}
                      onChange={() => handleCheckboxChange(option.value)}
                      className="accent-terracotta w-5 h-5 border-3 border-charcoal"
                    />
                    <span className="text-charcoal">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {formData.interests.includes('geo_audit') && (
              <div>
                <label className="font-black text-charcoal mb-2 block uppercase text-sm">
                  Website URL *
                </label>
                <input
                  type="url"
                  required={formData.interests.includes('geo_audit')}
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  className="w-full border-3 border-charcoal bg-white px-4 py-3 focus:border-terracotta focus:outline-none text-charcoal"
                  placeholder="https://www.yourbusiness.co.uk"
                />
                <p className="text-sm text-mid-gray mt-1">The website we'll audit for AI search visibility</p>
              </div>
            )}

            <div>
              <label className="font-black text-charcoal mb-2 block uppercase text-sm">
                Tell us about your needs
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full border-3 border-charcoal bg-white px-4 py-3 focus:border-terracotta focus:outline-none text-charcoal resize-none"
                placeholder="What challenges are you facing? How can we help?"
              />
            </div>

            <div>
              <label className="font-black text-charcoal mb-3 block uppercase text-sm">
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
                      className="accent-terracotta w-5 h-5"
                    />
                    <span className="text-charcoal font-bold">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {submitStatus.type && (
              <div
                className={`p-4 border-3 border-charcoal ${
                  submitStatus.type === 'success' ? 'bg-success-green' : 'bg-peach'
                }`}
              >
                <p className={`font-bold ${submitStatus.type === 'success' ? 'text-off-white' : 'text-charcoal'}`}>
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

              <p className="text-sm text-charcoal text-center">
                We typically respond within 2 hours during business hours
              </p>
            </form>
          </Card>
        </div>

        {/* Book a Call (Cal.com inline) */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-xl text-charcoal mb-4">
              Or Book a Free 30-Minute Call
            </h2>
            <p className="text-charcoal max-w-2xl mx-auto">
              Pick a slot that works for you. We&rsquo;ll talk through what you&rsquo;re trying to fix and where AI can actually help.
            </p>
          </div>
          <CalBooking />
        </div>

        {/* Contact Information Section */}
        <div className="mt-20 mb-16">
          <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tight-xl text-charcoal mb-10 text-center">
            Other Ways to Reach Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-2">Email</h3>
              <p className="text-charcoal break-words"><a href={`mailto:${CONSTANTS.CONTACT_EMAIL}`} className="hover:text-terracotta transition-colors font-bold break-words">{CONSTANTS.CONTACT_EMAIL}</a></p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-2">Phone</h3>
              <p className="text-charcoal"><a href="tel:03330389960" className="hover:text-terracotta transition-colors font-bold">0333 038 9960</a></p>
            </Card>
            <Card>
              <h3 className="font-black text-xl uppercase text-charcoal mb-2">Location</h3>
              <p className="text-charcoal">
                <a href="https://maps.google.com/?q=Chantry+House,+38+Chantry+Way,+Andover,+SP10+1LZ" target="_blank" rel="noopener noreferrer" className="hover:text-terracotta transition-colors font-bold">
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
          <div className="text-center mb-8">
            <h2 className="font-black text-3xl uppercase tracking-tight-xl text-charcoal mb-4">
              Connect With Us
            </h2>
            <p className="text-charcoal text-lg">
              Follow us on social media and stay updated with the latest AI automation insights
            </p>
          </div>
          <SocialLinks variant="page" showLabels={true} />
        </Card>
        </div>
      </div>
    </div>
  );
}
