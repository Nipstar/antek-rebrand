import type { InlineLink } from '../../src/components/LinkedText'
import { PRICES, PRICE_TEXT } from '../../src/data/pricing'

// Shared by +Page.tsx (visible FAQ) and +Head.tsx (FAQPage JSON-LD) so the
// schema matches the visible answers word for word.
export const faqs: { q: string; a: string; links?: InlineLink[] }[] = [
  {
    q: 'Does it work on bank holidays?',
    a: 'Yes. It answers 24/7, every day of the year, including bank holidays, Christmas and the weekend after. There’s no holiday rota to arrange and no extra charge for answering on a bank holiday.',
  },
  {
    q: 'Can urgent calls be passed to me?',
    a: 'Yes. You decide what counts as urgent, such as a burst pipe, no heating or a lockout, and the AI screens every call against those rules. Urgent calls are sent to your mobile by SMS straight away, with the caller\u2019s details and what\u2019s wrong, so you can decide whether to ring back tonight. If you\u2019d rather talk to them there and then, live transfer is available as an option: urgent callers are put straight through to your phone. Routine calls are logged for the morning.',
  },
  {
    q: 'What does out of hours call answering cost?',
    a: `The same as daytime cover, because it’s the same service: from ${PRICE_TEXT.receptionistMonthly} with ${PRICES.receptionist.starter.minutes} minutes included, ${PRICE_TEXT.receptionistOverage}, plus ${PRICE_TEXT.receptionistSetup}. There’s no out-of-hours premium. Human answering services typically charge per call or per minute, and prices vary by provider.`,
  },
  {
    q: 'Will callers know they\u2019re talking to AI?',
    a: 'About 1 in 20 notice. The voice is natural and calm, which matters on a stressful evening call. If someone asks, it tells them honestly, and if they want a person it takes a message or passes the call on.',
  },
  {
    q: 'How quickly can out of hours cover be live?',
    a: `Usually within ${PRICES.receptionist.goLive}. We build it from your website, you tell us what counts as urgent and where urgent calls should go, and you forward your number. Forwarding takes about 30 seconds.`,
  },
]
