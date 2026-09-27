import { CONTRACT_TERMS, PRICES, VAT_NOTE } from '../../src/data/pricing'

// Shared by +Page.tsx (visible FAQ) and +Head.tsx (FAQPage JSON-LD) so the
// schema always matches the visible answers word for word.
export const faq = [
  {
    q: "What's included in setup?",
    a: "For AI Voice Assistant and AI Receptionist: we scrape your website, configure call responses to your services and screening questions, and forward your number to us. For AI Chatbot: we train the bot on your content and integrate your calendar or CRM. For Workflow Automation: we run a discovery audit first — we won't automate processes until we understand them. Setup takes 24–48 hours for voice and chat products; 1–14 days for automations depending on complexity.",
  },
  {
    q: "What support is included?",
    a: "Standard support is responded to within 24 hours. Critical incidents — such as a voice agent going down during business hours — are responded to within 4 hours. Support is included across all monthly plans.",
  },
  {
    q: "How is caller data handled under GDPR?",
    a: "Call recordings are retained for 90 days then permanently deleted. Chat transcripts are retained for up to 12 months. Data is processed within the UK and EU. A Data Processing Agreement (DPA) is available on request. We are registered with the ICO as required under UK GDPR.",
  },
  {
    q: "Are there contracts or minimum terms?",
    a: `${CONTRACT_TERMS} Workflow automation projects and GEO audits are one-off payments with no ongoing commitment unless you choose a retainer.`,
  },
  {
    q: "When do you quote bespoke?",
    a: "Workflow automations with five or more steps, complex CRM integrations, or multi-system builds are scoped per project. We'll always audit first and give you a fixed quote before starting.",
  },
  {
    q: "Do you offer discounts for multi-product bundles?",
    a: "Yes. Speak to us if you're taking two or more products — we typically discount on a case-by-case basis. Book a free 30-min call to discuss.",
  },
  {
    q: "What happens if I want to cancel?",
    a: `Give us ${PRICES.noticeDays} days' notice (the GEO retainer has a ${PRICES.geo.retainerMinimumMonths}-month minimum first). We'll return your data in a portable format. Workflow automations built on n8n keep running — you own them, not us.`,
  },
  {
    q: "Do prices include VAT?",
    a: VAT_NOTE,
  },
  {
    q: "How quickly will I see results?",
    a: "Voice and receptionist products start capturing calls from the first day live. Chatbots typically produce the first leads within 48 hours. Workflow automations save time from week one.",
  },
  {
    q: "Will callers or visitors know they're talking to AI?",
    a: "Most don't ask — and the majority of those who do are fine with it. About 1 in 20 callers notice unprompted. If someone asks directly, the AI will tell them honestly. If they request a human, we can transfer the call or take a message.",
  },
]
