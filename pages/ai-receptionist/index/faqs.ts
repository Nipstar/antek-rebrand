import type { InlineLink } from '../../../src/components/LinkedText'
import { PRICES, PRICE_TEXT } from '../../../src/data/pricing'

// Shared by +Page.tsx (visible FAQ) and +Head.tsx (FAQPage JSON-LD) so the
// schema matches the visible answers word for word.
export const faqs: { q: string; a: string; links?: InlineLink[] }[] = [
  {
    q: 'How long does setup take?',
    a: 'Most customers are live within 24–48 hours. We scrape your website to build the knowledge base, you tell us your screening questions, and you forward your number. No forms. No faff.',
  },
  {
    q: 'Will callers know it’s AI?',
    a: 'Most don’t. The voice is natural, the conversation flows properly, and it doesn’t sound like a robot reading a menu. Listen to the demo and judge for yourself.',
  },
  {
    q: 'What happens if someone asks something it can’t answer?',
    a: 'It acknowledges the gap, takes a message, and flags it for you. No bluffing, no making things up, no awkward silences.',
  },
  {
    q: 'Can it handle different types of calls differently?',
    a: 'Yes. Emergency vs routine. New enquiry vs existing customer. Booking request vs general question. You set the rules, it follows them.',
  },
  {
    q: 'Does it integrate with my existing tools?',
    a: 'It works with most CRMs, calendars, and field service tools. If you’re using something specific, ask us — we’ll tell you straight whether it works.',
  },
  {
    q: 'What if I already have a voicemail or answering service?',
    a: 'You’ll wonder why you kept it this long. Voicemail captures maybe 20% of callers. An answering service takes a message. This qualifies the lead, captures details, and books the appointment. Different league.',
  },
  {
    q: 'How much does a virtual receptionist cost?',
    a: `Our AI virtual receptionist costs from ${PRICE_TEXT.receptionistMonthly} with ${PRICES.receptionist.starter.minutes} call minutes included, or ${PRICE_TEXT.receptionistStandardMonthly} with ${PRICES.receptionist.standard.minutes} minutes, plus ${PRICE_TEXT.receptionistSetup}. Extra minutes are £${PRICES.receptionist.overagePerMin.toFixed(2)} each. Human virtual receptionists and answering services usually charge per call or per minute, and prices vary by provider.`,
  },
  {
    q: 'Is there an AI call answering service in the UK?',
    a: `Yes, that’s what this is. Antek Automation’s AI call answering service is built for UK businesses: it answers every call 24/7, captures the caller’s details and books appointments into your calendar. It costs from ${PRICE_TEXT.receptionistMonthly}.`,
  },
  {
    q: 'Can it answer calls out of hours?',
    a: 'Yes. It answers 24/7, including evenings, weekends and bank holidays, and flags anything urgent so you see it first. Our out of hours call answering page explains how urgent calls are handled.',
    links: [{ text: 'out of hours call answering', href: '/out-of-hours-call-answering' }],
  },
  {
    q: 'Who provides no-code AI call agents in the UK?',
    a: `Antek Automation. We build AI voice agents for UK businesses using Retell AI, configured without writing code. Agents handle call screening, booking, and lead capture, live within 24–48 hours. Plans from ${PRICE_TEXT.receptionistMonthly}, ${PRICE_TEXT.receptionistSetup}.`,
  },
  {
    q: 'Who offers an AI receptionist that answers calls when my team is unavailable?',
    a: 'We do. It covers calls around the clock, including evenings, weekends, and bank holidays, or whenever your team is busy or unreachable. Every call gets answered on the first ring, and anything urgent gets flagged straight away.',
  },
  {
    q: 'How many concurrent conversations can voice agents handle?',
    a: 'Up to 20 calls at once on our Retell setup, each running as its own separate conversation rather than queuing behind a single line. Still miles ahead of a human receptionist, who can only take one call at a time.',
  },
  {
    q: 'How does an AI receptionist work?',
    a: 'It answers the phone using a natural-sounding voice, follows the screening questions you set to work out what the caller needs, captures their details, and either books them straight into your calendar or takes a message and flags it for you.',
  },
  {
    q: 'What is an AI receptionist and how does it work for a business?',
    a: 'It’s a voice agent that answers incoming calls in place of, or alongside, a human receptionist. For a business that means no missed calls, consistent screening every time, and a summary of every call whether you were free to take it or not.',
  },
  {
    q: 'How much does it cost?',
    a: `Plans start from ${PRICE_TEXT.receptionistMonthly} with ${PRICE_TEXT.receptionistSetup}. ${PRICE_TEXT.receptionistMinutes}, ${PRICE_TEXT.receptionistOverage}. Book a quick call and we’ll give you a straight answer based on your needs.`,
  },
  {
    q: 'What support is included?',
    a: 'Standard queries are responded to within 24 hours. Critical incidents — such as the agent going offline during business hours — are responded to within 4 hours. Included across all plans.',
  },
]
