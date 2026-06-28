# Homepage rebalance — copy brief

For `/` (homepage). Problem: the page is heavily weighted to voice / missed calls, GEO is
absent from the body, and chatbots are under-represented. Goal: present all four services
evenly, own the broad "AI automation agency UK" head term, and stop the homepage competing
with the receptionist and voice pages for "missing calls" intent.

---

## Implementation notes (for Claude Code)

- Copy and meta changes on the **homepage only**. Don't touch other pages, routes, or schema beyond the homepage's own.
- Keep the brand styling and components. Apply the section-heading format (Outfit 800 uppercase, cream with one coral phrase, 5px coral left bar) consistently.
- The four services must appear with **equal weight**: AI Voice Agents, AI Chatbots, Workflow Automation, GEO. GEO is currently missing from the body — add it.
- Keep all "illustrative example" disclaimers on case studies. Do not present illustrative figures as named-client results.
- Homepage schema (Organization / WebSite / any service list): make sure it lists all four services and isn't call-centric. Diff against the current block in the repo.

---

## Meta

**Title:** AI Automation Agency UK | Voice, Chat, Automation & GEO | Antek

**Description:** Andover-based AI automation agency. We build AI voice agents, website chatbots, n8n workflow automation and GEO for UK businesses — capture every lead, automate the admin, and get found in AI search. Certified Retell partner.

(Drops "Stop Missing Calls" so the homepage stops competing with the voice/receptionist pages and targets the agency head term.)

---

## Hero

**Eyebrow:** AI AUTOMATION AGENCY • UK

**H1:** Capture your leads. Automate your admin. Get found by **AI.**

**Sub:** We build AI voice agents, website chatbots, workflow automation and GEO for UK businesses. Capture the leads you're missing, automate the work that eats your evenings, and make sure AI search recommends you instead of your competitors.

**Strip (all four services):** Voice from £97/mo · Chatbots from £57/mo · Automation from £250 · GEO audits from £247 · [See pricing](https://www.antekautomation.com/pricing)

Keep the demo widget and the four trust ticks as they are.

---

## "Sound familiar?" — broaden from two pains to four

Keep the format, but cover all four problem areas, one short beat each.

You're on a job and the phone rings. By the time you call back, they've found someone else. That's a £2,000 job gone because you were busy doing the work you're good at.

Someone lands on your website at 10pm, ready to buy. There's no one to answer, just a contact form. They close the tab and try the next result.

Your evenings disappear into admin. Updating the CRM, chasing invoices, sending the follow-ups you keep forgetting. The business runs on your time and there's never enough of it.

And when a buyer asks ChatGPT or Google's AI for a business like yours, it names a competitor. You're not even in the conversation.

It doesn't have to be like that.

---

## "Four things we build" (was "Three")

Rename the section. Add GEO as a fourth card. Reword the Voice card so it stops calling itself a receptionist (that's the productised band below). Equal weight, four cards.

**AI Voice Agents** — Calls new leads back in seconds, qualifies them, confirms appointments and handles routine customer calls. Inbound and outbound, around the clock. → [See Voice Agents](https://www.antekautomation.com/services/ai-voice-assistants)

**AI Chatbots** — A smart chat widget that talks to website visitors the moment they land, answers questions, qualifies them and books them in. Works while you sleep. → [See Chatbots](https://www.antekautomation.com/services/ai-chatbots)

**Workflow Automation** — We connect the tools you already use and automate the repetitive admin that eats your evenings. Logged, acknowledged and followed up, automatically. → [See Automation](https://www.antekautomation.com/services/workflow-automation)

**GEO** — When buyers ask ChatGPT, Perplexity or Google's AI Overviews for a business like yours, we make sure you're the one it names. Audit, fix, stay visible. → [See GEO](https://www.antekautomation.com/services/geo-audit)

Keep the dedicated **"AI Receptionist — From £97/Month"** band below the cards as the productised inbound entry point. It's distinct from the broader Voice Agents card now, so they no longer duplicate each other.

---

## Case studies — spread across services

Currently three: restaurant (voice), financial institution (voice), cleaning (workflow). Two of three are voice, and the "UK financial institution, millions saved" one sits oddly against the SMB positioning.

Recommended rebalance, keeping the illustrative framing:
- **Keep** the restaurant (voice) and cleaning (workflow) examples.
- **Replace** the financial-institution example with an illustrative **chatbot / website-lead** example for an SMB (e.g. a professional-services or trades firm turning after-hours website visitors into booked calls). Keep it clearly labelled illustrative.
- **Optional fourth:** a short illustrative **GEO** outcome (e.g. a local firm going from absent to cited in AI answers for its core service). Label illustrative.

Don't invent named clients or specific client figures. Keep every "illustrative example" disclaimer.

---

## "What we won't tell you" — light edit

Leads with "Answer calls you'd otherwise miss." Broaden the examples to span all four: answer the calls you'd miss, reply to website visitors at 2am, send the follow-ups you forget, and get you cited in AI search. One line each, same honest tone.

---

## Quick recap — add GEO, fix the service list

- We build AI voice agents, chatbots, workflow automation and GEO for UK businesses
- For businesses missing calls, losing website leads, drowning in admin, or invisible in AI search
- Voice from £97/mo, chatbots from £57/mo, automation from £250, GEO audits from £247 — no contracts, no lock-in
- Voice and chat products live within 24–48 hours
- [Book a free 30-min discovery call](https://www.antekautomation.com/contact) to see which fits

---

## Schema note

Homepage likely carries Organization and/or WebSite schema. Make sure:
- The Organization `description` / `knowsAbout` / any service list names all four services, not just voice and automation.
- If there's an `OfferCatalog` or service list, it includes GEO.
- Diff against the deployed block in the repo and keep it consistent with the per-service pages' provider `@id`.
