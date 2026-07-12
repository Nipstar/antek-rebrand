import { Container } from '../../src/components/Container'
import { HeadlineBlock } from '../../src/components/HeadlineBlock'

export default function Page() {
  return (
    <div>

      {/* ── HEADER ── */}
      <div className="bg-ink border-b border-hairline">
        <Container className="py-16">
          <HeadlineBlock as="h1" className="mb-6">Privacy <span className="text-coral">Policy</span></HeadlineBlock>
          <p className="text-lg text-body">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </Container>
      </div>

      {/* ── CONTENT ── */}
      <Container className="py-16">
        <div className="prose prose-sm max-w-[65ch] space-y-8 text-body">

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">1. Introduction</h2>
            <p className="leading-relaxed">
              Antek Automation ("we", "us", "our") is a sole trader committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
            <p className="leading-relaxed mt-2">
              Our trading address is Chantry House, 38 Chantry Way, Andover SP10 1LZ. ICO registration number: <strong>ZC133436</strong>. DUNS number: <strong>235593033</strong>. You can contact us at{' '}
              <a href="mailto:hello@antekautomation.com" className="text-coral hover:underline font-bold">hello@antekautomation.com</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">2. Information We Collect</h2>
            <p className="font-bold mb-2">We collect information in the following ways:</p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li><strong>Contact Form Data:</strong> Name, business name, email, phone number, and messages when you submit a contact form</li>
              <li><strong>Chatbot Interactions:</strong> Messages exchanged with our AI chatbot, session IDs, and timestamps</li>
              <li><strong>Voice Agent Interactions:</strong> Call recordings and transcripts when you interact with our AI voice agents</li>
              <li><strong>Website Usage:</strong> IP address, browser type, pages visited, time spent on pages, and referrer information</li>
              <li><strong>Cookies:</strong> Session cookies and tracking cookies for analytics and user preferences</li>
              <li><strong>Voluntary Information:</strong> Any additional information you choose to provide to us</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">3. How We Use Your Information</h2>
            <p className="font-bold mb-2">We use the information we collect for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>To respond to your enquiries and provide requested services</li>
              <li>To deliver, maintain, and improve our AI automation services</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To improve our website and services</li>
              <li>To analyse website usage and traffic patterns</li>
              <li>To comply with legal and regulatory obligations</li>
              <li>To prevent fraud and enhance security</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">4. Legal Basis for Processing</h2>
            <p className="leading-relaxed">
              We process your personal data on the following legal bases under UK GDPR:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li><strong>Contract:</strong> To perform our contractual obligations to you</li>
              <li><strong>Consent:</strong> Where you have provided explicit consent</li>
              <li><strong>Legitimate Interest:</strong> For our business purposes, including marketing, analytics, and service improvement</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">5. Data Sharing and Third Parties</h2>
            <p className="leading-relaxed">
              We do not sell or rent your personal data to third parties. We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li><strong>Service Providers:</strong> Third-party vendors who assist us in delivering services (e.g., hosting providers, analytics services, AI platform providers, workflow automation tools)</li>
              <li><strong>Legal Requirements:</strong> When required by law, regulation, or court order, or to protect our legal rights</li>
              <li><strong>Business Partners:</strong> With your consent for joint marketing initiatives</li>
            </ul>
            <p className="leading-relaxed mt-2">
              Where we share data with third parties, we ensure appropriate data processing agreements are in place and that they comply with UK GDPR requirements.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">6. Data Residency and International Transfers</h2>
            <p className="leading-relaxed">
              Our primary data processing takes place within the UK and EU. We use third-party service providers — including Retell AI for voice agent infrastructure and Supabase for data storage — whose servers may be located within the EU or UK. Where data is processed outside the UK, we ensure appropriate safeguards are in place (standard contractual clauses or adequacy decisions) in accordance with UK GDPR.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">7. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your personal data for as long as necessary to fulfil the purposes for which it was collected, typically:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Contact form submissions: Up to 3 years for business records</li>
              <li>Call recordings: 90 days, then permanently deleted</li>
              <li>Chat transcripts and chatbot session data: Up to 12 months</li>
              <li>Analytics data: Up to 26 months</li>
              <li>Marketing communications: Until you unsubscribe</li>
              <li>Contractual records: 6 years after the end of the contract (Companies Act 2006)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">8. Your Rights</h2>
            <p className="leading-relaxed">
              Under UK GDPR and the Data Protection Act 2018, you have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li><strong>Right of Access:</strong> Request a copy of your personal data</li>
              <li><strong>Right to Rectification:</strong> Correct inaccurate or incomplete data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your data</li>
              <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
              <li><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
              <li><strong>Right to Object:</strong> Object to certain types of processing, including direct marketing</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent to marketing at any time</li>
              <li><strong>Rights Related to Automated Decision-Making:</strong> Not to be subject to decisions based solely on automated processing that produce legal or significant effects</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              To exercise any of these rights, contact us at:{' '}
              <a href="mailto:hello@antekautomation.com" className="text-coral hover:underline font-bold">
                hello@antekautomation.com
              </a>
            </p>
            <p className="mt-2 leading-relaxed">
              We will respond to your request within one month. In certain circumstances, we may extend this by a further two months, but we will inform you if this is the case.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">9. Cookies and Tracking</h2>
            <p className="leading-relaxed">
              Our website uses cookies to enhance your experience. Cookies are small files stored on your device. We use:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li><strong>Essential Cookies:</strong> Required for website functionality (e.g., session management, chatbot state). These do not require consent.</li>
              <li><strong>Analytics Cookies:</strong> To measure website performance (Google Analytics, with IP anonymisation; Plerdy for heatmaps and click analytics). Loaded only after you click <em>Accept</em> on the cookie banner.</li>
              <li><strong>Marketing Cookies:</strong> Meta Pixel, used to measure marketing campaign performance. Loaded only after you click <em>Accept</em>.</li>
              <li><strong>Functional Cookies:</strong> To remember your preferences (including your cookie choice itself, stored in your browser&rsquo;s localStorage under the key <code>antek_cookie_consent</code>).</li>
            </ul>
            <p className="mt-4 leading-relaxed">
              When you first visit, you will see a cookie banner. <strong>Accept</strong> enables analytics and marketing cookies; <strong>Reject</strong> keeps them disabled. Either choice is stored locally so you are not asked again. To change your mind, clear the <code>antek_cookie_consent</code> key from your browser&rsquo;s site storage (or use your browser&rsquo;s cookie/site-data settings) and reload the page &mdash; the banner will reappear.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">10. Security</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These measures include encryption in transit (HTTPS), access controls, and regular security reviews. However, no method of transmission over the internet is completely secure.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">11. Data Breaches</h2>
            <p className="leading-relaxed">
              In the event of a personal data breach that poses a risk to your rights and freedoms, we will notify the Information Commissioner's Office (ICO) within 72 hours of becoming aware of the breach. Where the breach is likely to result in a high risk to you, we will notify you directly without undue delay.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">12. Children's Privacy</h2>
            <p className="leading-relaxed">
              Our services are not directed at children under 13 years of age. We do not knowingly collect personal data from children. If we become aware that a child has provided us with personal data, we will delete such information promptly.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">13. External Links</h2>
            <p className="leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. We recommend reviewing their privacy policies before providing personal information.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">14. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. Your continued use of our website following the posting of changes constitutes your acceptance of such changes.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">15. Complaints</h2>
            <p className="leading-relaxed">
              If you have concerns about our data protection practices, you can contact our team at:{' '}
              <a href="mailto:hello@antekautomation.com" className="text-coral hover:underline font-bold">
                hello@antekautomation.com
              </a>
            </p>
            <p className="mt-2 leading-relaxed">
              You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at{' '}
              <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-coral hover:underline font-bold">ico.org.uk</a>{' '}
              or by calling 0303 123 1113.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">16. Contact Us</h2>
            <p className="leading-relaxed">
              For any questions about this Privacy Policy or your personal data:
            </p>
            <div className="mt-4 space-y-1 leading-relaxed">
              <p><strong>Antek Automation</strong> (sole trader)</p>
              <p><strong>Email:</strong>{' '}
                <a href="mailto:hello@antekautomation.com" className="text-coral hover:underline font-bold">hello@antekautomation.com</a>
              </p>
              <p><strong>Phone:</strong>{' '}
                <a href="tel:03330389960" className="text-coral hover:underline font-bold">0333 038 9960</a>
              </p>
              <p><strong>Address:</strong> Chantry House, 38 Chantry Way, Andover SP10 1LZ</p>
              <p><strong>ICO Registration:</strong> ZC133436</p>
              <p><strong>DUNS Number:</strong> 235593033</p>
            </div>
          </section>

        </div>
      </Container>
    </div>
  );
}
