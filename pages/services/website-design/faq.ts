import { PRICES } from '../../../src/data/pricing'

// Shared by +Page.tsx (visible FAQ) and +Head.tsx (FAQPage JSON-LD) so the
// schema always matches the visible answers word for word.
export const faq = [
  {
    q: 'How much does a small business website cost?',
    a: `Our website builds start from £${PRICES.website.from} for up to ${PRICES.website.maxPages} pages. Hosting and your domain are paid separately. You'll get a fixed quote before we start.`,
  },
  {
    q: 'How long does a website take?',
    a: `Most builds go live in around ${PRICES.website.goLive} from receiving your content. Larger sites and integrations can take longer.`,
  },
  {
    q: 'Do I own the website?',
    a: "Yes. You own the finished site, including the code and content. There's no compulsory monthly fee to us.",
  },
  {
    q: 'Can you redesign my existing website?',
    a: "Yes. We'll review what you have, keep what's working and rebuild what isn't. We'll also plan redirects, so you don't throw away the search visibility you've already built.",
  },
  {
    q: "Will my website appear in ChatGPT or Google's AI Overviews?",
    a: "We can't promise that, and you should be wary of anyone who does. We give the site the structure AI search tools need. Citations also depend on your reputation, your competitors and what's said about you elsewhere.",
  },
  {
    q: 'Can I add a chatbot or AI receptionist later?',
    a: `Yes. You can start with the website and add AI when you're ready. Chatbot and receptionist plans roll month to month with ${PRICES.noticeDays} days' notice.`,
  },
  {
    q: 'Can I update the website myself?',
    a: "We build on Next.js, which keeps sites fast, so changes are usually made for you. If you want to edit text and photos yourself, tell us at the quote stage and we'll build that in.",
  },
]
