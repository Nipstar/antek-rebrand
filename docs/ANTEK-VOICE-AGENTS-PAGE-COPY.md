# AI Voice Agents — page copy rewrite

For `/services/ai-voice-assistants`. Goal: stop this page duplicating the AI Receptionist page,
and reposition it around the full range of voice AI — speed to lead, qualifying, reminders,
customer service and outbound follow-up — not just answering inbound calls.

---

## Implementation notes (for Claude Code)

- Update **copy and meta on this page only**. Do not touch other pages, routes, or schema beyond this page's own meta and FAQ.
- Keep the existing brand styling and components (hero block, numbered rows, comparison table, FAQ accordion, GEO band, related services).
- Keep pricing accurate: "From £97/month + £249 setup" stays. Bespoke outbound / multi-step builds are scoped on a call — do not invent figures.
- Add an internal link to `/ai-receptionist` for inbound-only intent (see cross-link block).
- Reframe the industry demo block from the six trades to **use-case scenarios** (callback, qualifying, reminder) so it stops mirroring the receptionist page.
- Replace the page's JSON-LD with the Service + FAQPage blocks in the Schema section below. Before committing, **open the deployed schema on `/ai-receptionist` and `/services/ai-chatbots` in the repo and diff against these** — the voice page's `name`, `serviceType` and `description` must not duplicate the receptionist's. If they currently match, that is the cannibalisation to fix.
- Align the `provider` reference and any `@id` / `BreadcrumbList` / Organization pattern with whatever the other service pages already use in the repo (match the existing convention rather than inlining a fresh Organization if one exists site-wide).
- The H1 must not contain the word "receptionist".
- Validate the final markup in Google's Rich Results Test before deploy.

---

## Meta

**Title:** AI Voice Agents UK | Speed-to-Lead, Qualifying & Customer Service | Antek

**Description:** Custom AI voice agents that call leads back in seconds, qualify and book them, confirm appointments and handle customer service. Inbound and outbound. Certified Retell partner.

---

## Schema (JSON-LD)

Replace the page's existing Service/Product and FAQPage blocks with these. Plain text only in answers (no markdown). Diff `name`/`serviceType`/`description` against the receptionist page and keep them distinct.

### Service

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.antekautomation.com/services/ai-voice-assistants#service",
  "name": "AI Voice Agents",
  "serviceType": "AI voice agent",
  "description": "Custom AI voice agents for UK businesses that call new leads back in seconds, qualify and book them, confirm appointments, follow up on quotes and handle routine customer service. Inbound and outbound, around the clock.",
  "url": "https://www.antekautomation.com/services/ai-voice-assistants",
  "provider": {
    "@type": "Organization",
    "name": "Antek Automation",
    "url": "https://www.antekautomation.com/"
  },
  "areaServed": { "@type": "Country", "name": "United Kingdom" },
  "offers": {
    "@type": "Offer",
    "price": "97",
    "priceCurrency": "GBP",
    "url": "https://www.antekautomation.com/pricing#ai-voice-assistant",
    "priceSpecification": {
      "@type": "UnitPriceSpecification",
      "price": "97",
      "priceCurrency": "GBP",
      "referenceQuantity": { "@type": "QuantitativeValue", "value": "1", "unitCode": "MON" }
    }
  }
}
```

Note: if the site already defines an Organization with an `@id` (e.g. `https://www.antekautomation.com/#organization`), replace the inline `provider` object with `{ "@id": "https://www.antekautomation.com/#organization" }` to match the existing pattern. Setup fee (£249) is intentionally left out of the offer to keep the monthly price clean for rich results; mention it in copy only.

### FAQPage

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.antekautomation.com/services/ai-voice-assistants#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's the difference between a voice agent and your AI Receptionist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The AI Receptionist is our productised inbound product that answers, screens and books incoming calls. A voice agent is the broader, bespoke build: it does that plus outbound work like speed-to-lead callbacks, appointment reminders, follow-ups and customer service. If you just need calls answered, start with the Receptionist."
      }
    },
    {
      "@type": "Question",
      "name": "Can it make outbound calls, not just answer them?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. That is the main thing that sets it apart. It calls leads back, confirms appointments, chases quotes and follows up after jobs, triggered by your forms, your CRM or a schedule."
      }
    },
    {
      "@type": "Question",
      "name": "How fast can it call a new lead back?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Within seconds of the lead coming in. The moment a form is submitted or a call is missed, the agent rings them back while they are still interested."
      }
    },
    {
      "@type": "Question",
      "name": "Will callers know they're talking to AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "About 1 in 20 notice. The voice is natural. If someone wants a person, it transfers them to you or takes a message."
      }
    },
    {
      "@type": "Question",
      "name": "What does it integrate with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Google Calendar, Outlook, Calendly, and most CRMs and field-service tools via API or webhook. Outbound calls can be triggered straight from your existing systems."
      }
    },
    {
      "@type": "Question",
      "name": "How much does an AI voice agent cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "From £97/month with a £249 setup. Bespoke outbound and multi-step builds are scoped on a quick call. See the pricing page for detail."
      }
    }
  ]
}
```

Keep the six FAQ questions in the schema identical to the six rendered on the page — Google flags FAQ schema that doesn't match visible content.

---

## Hero

**Eyebrow:** AI VOICE AGENTS • UK

**H1:** Your leads go cold in minutes. Your AI calls them back in **seconds.**

**Sub:** Speed-to-lead callbacks, lead qualifying, appointment reminders and customer service. Inbound and outbound, around the clock. This is voice AI doing the whole job, not just answering the phone.

**Buttons:** Try the Demo Now · Book a Free 30-Min Discovery Call

**By line:** By Andy Norman, Founder | 30+ years in technology | Certified Retell AI Partner

---

## Quick recap

- An AI voice agent that calls new leads back in seconds, qualifies them, books the good ones, confirms appointments and handles routine customer calls
- Works inbound and outbound — the calls you can't get to, and the calls you never get round to making
- For UK businesses losing leads to slow follow-up, no-shows and a phone that never stops
- From £97/month + £249 setup — bespoke outbound and multi-step builds scoped on a call — [see pricing](https://www.antekautomation.com/pricing#ai-voice-assistant)
- Live in 24–48 hours, configured from your website and your tools

---

## The real problem

Most businesses don't lose work because the phone rings out. They lose it in the gaps around the phone.

A lead fills in your form at 9pm and you call back at 11am the next day. They've already booked someone else. A customer rings to ask where their job is, and your engineer picks up mid-task to answer it. Tomorrow's appointments don't get confirmed, so two of them no-show. The quote you sent last week goes quiet, and you never chase it.

None of that is a missed call. It's slow follow-up, wasted time on routine questions, and the jobs you meant to chase but didn't. A voice agent closes those gaps — both directions, day and night.

---

## What our voice agents do

Six jobs, one agent. Built around how your business actually runs.

**01 · Speed to lead**
The moment a lead comes in — web form, missed call, ad click — the AI calls them back. In seconds, not the next morning. The faster you respond, the more you win, and most businesses respond far too slowly. This is the single biggest thing voice AI can do for your revenue.

**02 · Qualify and book**
It asks your qualifying questions, scores the lead, and only books the ones worth your time. Budget, timeline, job type, location. You get warm, qualified appointments in your calendar, not a diary full of tyre-kickers.

**03 · Confirm and remind**
Outbound calls that confirm tomorrow's bookings, cut your no-show rate, and offer a rebook if they can't make it. Your diary stays full and accurate without anyone lifting the phone.

**04 · Customer service**
It handles the routine inbound — opening hours, job status, account questions, the same five FAQs you answer every day. Your team stops getting interrupted and deals with the work that actually needs a human.

**05 · Follow up and reactivate**
It chases quotes that went quiet, follows up after a job, asks for a review, and wins back lapsed customers. The calls you know you should make and never get round to.

**06 · Overflow and after-hours**
It sits alongside your existing phone team and picks up the overflow at peak and the calls after everyone's gone home. You stop paying for round-the-clock cover you don't need.

---

## Spotlight: speed to lead

If you do one thing with voice AI, do this.

The data on lead response time is brutal. Contact a lead within the first minute and you're far more likely to convert them than if you wait even half an hour. Wait until the next day, which is what most busy businesses do, and the lead has usually gone cold or gone elsewhere.

Your AI voice agent removes the wait entirely. A form hits your website, a caller hangs up, an ad generates an enquiry — and the agent rings them straight back while your business is still the one they were looking at. It qualifies them, books them if they're ready, and hands you a hot lead instead of a cold one.

You can't sit by the phone 24/7. It can.

---

## How it compares

Reframe the comparison table away from "vs voicemail" (that's the receptionist page's angle).
New axis — **AI Voice Agent vs You and Your Team vs a Traditional Call Centre:**

| | AI Voice Agent | You & Your Team | Call Centre |
| --- | --- | --- | --- |
| Speed to lead | Calls back in seconds | When you get a minute | Inbound only, usually |
| Outbound follow-up | Automatic, every time | When you remember | Extra cost per campaign |
| Availability | 24/7/365 | Working hours | Set hours, premium for more |
| Consistency | Same every call | Varies with the day | Script-bound |
| Knows your business | Trained on it | Yes | Basic script |
| Cost | From £97/month | Your time | £200–£800+/month |
| Scales | Unlimited concurrent calls | One call at a time | Cost rises with volume |

---

## What it can't do (keep this section, light edit)

**01 · It's not a human.** About 1 in 20 callers clock that it's AI. If someone wants a person, it transfers them or takes a message.

**02 · It won't blag complex issues.** A complicated complaint or a judgement call gets captured and flagged for you, not bluffed through.

**03 · It's only as good as its setup.** Quality depends on how well it's trained on your business, which is why onboarding is thorough.

---

## Cross-link block (new — prevents overlap)

> **Just want your inbound calls answered and screened?**
> That's our productised AI Receptionist — answer, screen and book, from £97/month.
> [See the AI Receptionist →](https://www.antekautomation.com/ai-receptionist)

---

## Demo block (reframe scenarios, drop the trade list)

Keep the live-demo component, but change the cards from six trades to three use cases:

- **Speed-to-lead callback** — hear the AI ring a new web lead back, qualify them and book the job.
- **Qualifying call** — hear it run your questions, score the lead and route the hot ones.
- **Reminder & rebook** — hear it confirm tomorrow's appointment and offer a rebook.

---

## FAQ (replace existing)

**What's the difference between a voice agent and your AI Receptionist?**
The AI Receptionist is our productised inbound product — it answers, screens and books your incoming calls. A voice agent is the broader, bespoke build: it does that plus outbound work like speed-to-lead callbacks, appointment reminders, follow-ups and customer service. If you just need calls answered, start with the Receptionist.

**Can it make outbound calls, not just answer them?**
Yes. That's the main thing that sets it apart. It calls leads back, confirms appointments, chases quotes and follows up after jobs — triggered by your forms, your CRM or a schedule.

**How fast can it call a new lead back?**
Within seconds of the lead coming in. The moment a form is submitted or a call is missed, the agent rings them back, while they're still interested.

**Will callers know they're talking to AI?**
About 1 in 20 notice. The voice is natural. If someone wants a person, it transfers or takes a message.

**What does it integrate with?**
Google Calendar, Outlook, Calendly, and most CRMs and field-service tools via API or webhook. Outbound calls can be triggered straight from your existing systems.

**How much does it cost?**
From £97/month with a £249 setup. Bespoke outbound and multi-step builds are scoped on a quick call. [See pricing](https://www.antekautomation.com/pricing#ai-voice-assistant).

---

Keep the existing GEO cross-sell band and Related Services section unchanged.
