# Phase 5 Placeholders

Items requiring Andy's real data before Phase 5 can be executed.
See `antek-content-fix-phased-prompts.md` lines 736–800 for the full template.

## Pricing — exact tier inclusions
- [ ] How many call minutes are included per plan (£97/month voice/receptionist, £57/month chatbot)?
- [ ] What triggers additional charges after included minutes?
- [ ] Is there a Standard/Pro tier above £97/month for voice?

## Setup times (currently using site copy — confirm these are accurate)
- AI Voice Assistant / Receptionist: 24–48 hours ← confirm
- AI Chatbot: 24–48 hours ← confirm
- Workflow Automation (simple): 1–2 working days ← confirm
- Workflow Automation (complex): 1–2 weeks ← confirm
- GEO Audit Quick Check: 3 working days ← confirm
- GEO Audit Full Audit: 5–7 working days ← confirm

## SLA / support response targets
- [ ] Standard support response time (hours)
- [ ] Critical incident response time (hours)
- [ ] Uptime target (% — contractual or best-effort?)

## Data and compliance
- [x] Call recording retention: 90 days, then deleted
- [x] Chat transcript retention: 12 months
- [x] Data residency: UK/EU (Retell AI infrastructure — verify exact server region in Retell dashboard)
- [x] ICO registration number: **ZC133436** — apply to privacy-policy/+Page.tsx ~line 28 + all 7 satellite privacy-policy.html files. (DUNS **235593033** also available — add to Organization JSON-LD schema network-wide.)
- [x] GDPR DPA: available on request

## Case study metrics (with client consent)
- All three case studies are now clearly labelled "Illustrative example" on screen and in the data
- Business names and testimonial authors anonymised (no specific names)
- "source" field removed from CaseStudy type
- Section heading changed from "Proven Results" to "What Results Look Like"
- [ ] Replace with real client data when available — update src/data/caseStudies.ts and remove "illustrative: true" flag per case study

## Vague claims requiring qualification (from Otterly audit)
- [ ] "About 80% of conversations handled autonomously" — confirm this is typical, add qualifier
- [ ] "The average UK small business misses 30–50% of incoming calls" — cite source or change to "many"
- [ ] "Most clients save 10–20 hours/week" — add case study qualifier
- [ ] "Capturing 25% of all search traffic in 2026" (GEO page) — cite source or qualify
- [ ] "1M+ businesses, 5.6M population" (London page) — cite ONS
- [ ] "GVA £7.5bn, 18,000 businesses" (Southampton page) — cite ONS / Southampton City Council
