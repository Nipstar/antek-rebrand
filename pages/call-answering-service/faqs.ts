import type { InlineLink } from '../../src/components/LinkedText'
import { PRICES, PRICE_TEXT } from '../../src/data/pricing'

// Shared by +Page.tsx (visible FAQ) and +Head.tsx (FAQPage JSON-LD) so the
// schema matches the visible answers word for word.
export const faqs: { q: string; a: string; links?: InlineLink[] }[] = [
  {
    q: 'What is a call answering service?',
    a: 'A call answering service answers your business calls when you can’t, takes the caller’s details and passes them on to you. Traditionally that’s a team of people in a call centre. Ours is run by AI, so every call is answered straight away, 24/7, and it can book appointments as well as take messages.',
  },
  {
    q: 'How much does a call answering service cost?',
    a: `Ours costs from ${PRICE_TEXT.receptionistMonthly} with ${PRICES.receptionist.starter.minutes} minutes included, or ${PRICE_TEXT.receptionistStandardMonthly} with ${PRICES.receptionist.standard.minutes} minutes, plus ${PRICE_TEXT.receptionistSetup}. Extra minutes are £${PRICES.receptionist.overagePerMin.toFixed(2)} each. Human answering services typically charge per call or per minute, so the cost varies by provider and by how busy your phone is.`,
  },
  {
    q: 'Is an AI answering service as good as a virtual receptionist?',
    a: 'For most routine calls, yes, and on some things it’s better. It answers every call at once instead of queuing, follows your screening questions every time, and books straight into your calendar. A human virtual receptionist is better at judgement calls, so our AI takes a message or passes the call on when a conversation needs a person.',
  },
  {
    q: 'Can it handle calls out of hours?',
    a: 'Yes. It answers 24/7, including evenings, weekends and bank holidays, and flags anything urgent so you see it first. See our out of hours call answering page for how urgent calls are handled.',
    links: [{ text: 'out of hours call answering', href: '/out-of-hours-call-answering' }],
  },
  {
    q: 'How quickly can it be live?',
    a: `Usually within ${PRICES.receptionist.goLive}. We build the knowledge base from your website, you tell us your screening questions, and you forward your number. Forwarding takes about 30 seconds.`,
  },
]
