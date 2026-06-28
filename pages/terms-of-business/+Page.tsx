import { Container } from '../../src/components/Container'
import { HeadlineBlock } from '../../src/components/HeadlineBlock'

export default function Page() {
  return (
    <div>

      {/* ── HEADER ── */}
      <div className="bg-ink border-b border-hairline">
        <Container className="py-16">
          <HeadlineBlock as="h1" className="mb-6">Terms of <span className="text-coral">Business</span></HeadlineBlock>
          <p className="text-lg text-body">
            Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </Container>
      </div>

      {/* ── CONTENT ── */}
      <Container className="py-16">
        <div className="prose prose-sm max-w-[65ch] space-y-8 text-body">

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">1. Agreement</h2>
            <p className="leading-relaxed">
              These Terms of Business ("Terms") set out the terms and conditions under which Antek Automation ("We", "Us", "Our"), a sole trader based at Chantry House, 38 Chantry Way, Andover SP10 1LZ, provides services to you ("Client", "You", "Your"). By engaging our services, you agree to be bound by these Terms.
            </p>
            <p className="leading-relaxed mt-2">
              These Terms, together with any written proposal, statement of work, or service agreement, form the entire agreement between the parties. No variation of these Terms shall be effective unless agreed in writing by both parties.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">2. Scope of Services</h2>
            <p className="leading-relaxed">
              We provide AI automation solutions including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>AI voice agents for inbound and outbound call handling</li>
              <li>AI-powered chatbots for website and messaging platforms</li>
              <li>Workflow automation and business process integration</li>
              <li>Ongoing maintenance, support, and optimisation of delivered solutions</li>
            </ul>
            <p className="leading-relaxed mt-2">
              The specific scope of services will be detailed in a written proposal or statement of work agreed between both parties prior to commencement. Any changes to the agreed scope must be confirmed in writing and may result in adjustments to fees and timelines.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">3. Client Obligations</h2>
            <p className="leading-relaxed">
              To enable us to deliver our services effectively, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Provide timely and accurate information, materials, and access required for the project</li>
              <li>Designate a primary point of contact authorised to make decisions on your behalf</li>
              <li>Review and provide feedback on deliverables within agreed timescales</li>
              <li>Ensure that any content, data, or materials you provide do not infringe third-party rights</li>
            </ul>
            <p className="leading-relaxed mt-2">
              Delays caused by the Client's failure to meet these obligations may result in revised timelines and additional fees.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">4. Fees and Payment</h2>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Fees will be quoted in advance and confirmed in writing prior to commencement of work</li>
              <li>Payment terms are typically 50% deposit on agreement, with the remaining 50% due on completion, unless otherwise agreed</li>
              <li>Recurring service fees (e.g., monthly maintenance, hosting, or subscription charges) are invoiced monthly in advance and due within 14 days of invoice date</li>
              <li>All fees are exclusive of VAT unless otherwise stated</li>
              <li>We reserve the right to suspend services if payment is overdue beyond 14 days</li>
              <li>Late payment interest may apply in accordance with the Late Payment of Commercial Debts (Interest) Act 1998</li>
              <li>We reserve the right to adjust recurring fees with 30 days' written notice</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">5. Intellectual Property</h2>
            <p className="leading-relaxed">
              All intellectual property rights in the services, software, systems, and deliverables created by us shall remain the property of Antek Automation unless otherwise agreed in writing. Upon full payment of all fees, you are granted a non-exclusive, non-transferable licence to use the deliverables for your business purposes.
            </p>
            <p className="leading-relaxed mt-2">
              Any pre-existing intellectual property, frameworks, templates, or tools used in the delivery of services remain our property. You may not reverse-engineer, decompile, or attempt to extract the source code of any software or systems we provide.
            </p>
            <p className="leading-relaxed mt-2">
              Any intellectual property provided by the Client for use in the project remains the Client's property. The Client grants us a licence to use such materials solely for the purpose of delivering the agreed services.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">6. Confidentiality</h2>
            <p className="leading-relaxed">
              Both parties agree to maintain the confidentiality of any proprietary, commercial, or sensitive information shared during the course of the engagement ("Confidential Information"). This obligation shall survive the termination of the agreement for a period of two years.
            </p>
            <p className="leading-relaxed mt-2">
              This obligation does not apply to information that:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Is or becomes publicly available through no fault of the receiving party</li>
              <li>Was already known to the receiving party prior to disclosure</li>
              <li>Is independently developed without reference to the Confidential Information</li>
              <li>Is required to be disclosed by law, regulation, or court order</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">7. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by law, our total aggregate liability arising out of or in connection with these Terms shall not exceed the total fees paid by you to us in the 12 months preceding the event giving rise to the claim.
            </p>
            <p className="leading-relaxed mt-2">
              We shall not be liable for any indirect, consequential, special, incidental, or punitive damages, including but not limited to loss of profits, loss of revenue, loss of data, loss of business opportunity, or reputational damage, howsoever arising.
            </p>
            <p className="leading-relaxed mt-2">
              Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by law.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">8. Warranties and Disclaimers</h2>
            <p className="leading-relaxed">
              We warrant that our services will be provided with reasonable care and skill, in a professional and workmanlike manner, and in accordance with the agreed specification.
            </p>
            <p className="leading-relaxed mt-2">
              However, we do not warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>Services will be uninterrupted, error-free, or free from all defects</li>
              <li>AI-powered solutions will produce specific business outcomes or results</li>
              <li>Third-party services, APIs, or platforms upon which our solutions depend will remain available or unchanged</li>
            </ul>
            <p className="leading-relaxed mt-2">
              We will use reasonable endeavours to rectify any defects reported within 30 days of delivery, provided such defects arise from our work and not from changes made by the Client or third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">9. Force Majeure</h2>
            <p className="leading-relaxed">
              Neither party shall be liable for any failure or delay in performing its obligations where such failure or delay results from circumstances beyond the reasonable control of that party, including but not limited to acts of God, natural disasters, pandemic, war, terrorism, riots, governmental action, power failure, internet or telecommunications failure, or actions of third-party service providers.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">10. Termination</h2>
            <p className="leading-relaxed">
              Either party may terminate this agreement by providing 30 days' written notice to the other party.
            </p>
            <p className="leading-relaxed mt-2">
              We may terminate this agreement immediately if:
            </p>
            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li>You fail to pay any amount due within 30 days of the due date</li>
              <li>You commit a material breach of these Terms that is not remedied within 14 days of written notice</li>
              <li>You become insolvent, enter administration, or have a receiver appointed</li>
            </ul>
            <p className="leading-relaxed mt-2">
              Upon termination, you remain liable for all fees incurred up to the termination date, including any work in progress. We will provide reasonable assistance to transition services, subject to payment of any outstanding fees.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">11. Data Protection</h2>
            <p className="leading-relaxed">
              We comply with all applicable data protection laws, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Where we process personal data on your behalf, we will do so only in accordance with your documented instructions and will enter into a data processing agreement as required.
            </p>
            <p className="leading-relaxed mt-2">
              Our{' '}
              <a href="/privacy-policy" className="text-coral hover:underline font-bold">Privacy Policy</a>{' '}
              sets out how we process personal data. Please refer to it for further information.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">12. Indemnification</h2>
            <p className="leading-relaxed">
              You agree to indemnify and hold harmless Antek Automation (sole trader), its proprietor, employees, contractors, and agents from and against any claims, losses, damages, liabilities, and expenses (including reasonable legal fees) arising from your breach of these Terms, your use of the services, or your provision of inaccurate or unlawful content or data.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">13. Dispute Resolution</h2>
            <p className="leading-relaxed">
              In the event of any dispute arising out of or in connection with these Terms, the parties will first attempt to resolve the matter through good-faith negotiation. If the dispute cannot be resolved within 30 days, either party may refer the matter to mediation before commencing court proceedings.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">14. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms of Business shall be governed by and construed in accordance with the laws of England and Wales. Both parties submit to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">15. Severability</h2>
            <p className="leading-relaxed">
              If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="font-display font-extrabold text-2xl uppercase tracking-tight-lg mb-4 text-cream">16. Contact</h2>
            <p className="leading-relaxed">
              If you have any questions about these Terms of Business, please contact us:
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
