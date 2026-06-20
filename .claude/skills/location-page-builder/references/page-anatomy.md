# Page Anatomy — Conversion-First Structure

The visible page is ordered for the human. The entity and local detail sit underneath the offer and proof. This is the single most important rule in the skill: a page can win the crawl and still convert nobody.

## The seven sections

### 1. Hook (above the fold)
- **H1: benefit-led, contains the place name.** It states a reason to act, not a category.
  - Weak (category): "AI Automation in Basingstoke"
  - Strong (benefit): "Never miss another Basingstoke job to a missed call"
- **Subhead:** one line, what you do + local proximity/credibility.
- **Primary CTA:** visible without scrolling. Booking link + click-to-call.
- Keep the exact-keyword phrasing for an H2 just below ("AI automation for Basingstoke businesses") so the title/H1/H2 stack serves both conversion and ranking.

### 2. Problem (before any proof)
Name the specific, localised pain. Concrete beats abstract. Reference a real local context (a named area, a typical local job) so it reads written-for-here, not spun.
> "You're on a job in Chineham or out on the new estates at Hatch Warren. The phone rings and you can't answer. By the time you call back, they've booked someone else."

### 3. Offer
The services framed as outcomes, not features. One primary CTA, repeated — not five competing links. Reuse the site's existing services block where one exists.

### 4. Proof
A specific, local result outperforms any schema or trust badge. Use a real testimonial, a named outcome, or an anonymised-but-concrete result. If the proof is a client story, it must be permission-governed (see `build-discipline.md` → Proof governance).

### 5. Local relevance ("Our [place] patch")
This is where entity density lives. Entity-dense, all verifiable: named neighbourhoods and business districts, co-entities (rivers, roads, landmarks, adjacent towns, institutions), and true facts about the place. This section feeds the knowledge graph; it does not lead the page. See `entity-layer.md`.

### 6. FAQ
Three to five questions that double as conversion (coverage, remote vs in-person, who you work with, can we meet) and as extractable Q&A for AI search. Mark up with `FAQPage` schema.

### 7. Final CTA
Repeat the primary action. Booking + click-to-call.

## Conversion guardrails

- One primary CTA per page. Internal links and external entity links must not pull the eye off the booking action.
- Visible external (e.g. Wikipedia) links open in a new tab so they never bounce a visitor mid-decision.
- Mobile: the click-to-call must be thumb-reachable; the hero CTA must not require scrolling.
- Lead with the problem, not the company history. Credibility facts ("county town of Wessex", "30 years in the trade") are trust scaffolding and belong lower.

## Worked example (before → after H1 + opening)

**Before (category-led, machine-first):**
> # AI Automation in Winchester
> We are a Hampshire automation agency based in Andover. Winchester is the county town of Hampshire...

**After (conversion-first):**
> # Stop losing Winchester clients to voicemail
> AI that answers after hours, screens enquiries and books consultations. Built by Andy Norman, 30 minutes away in Andover. [Book a free 30-min call] [Call now]
>
> A solicitors' practice loses an after-hours enquiry before anyone calls back. An accountant is buried at year-end... (problem) ... (offer) ... (proof) ... then, lower down: "Winchester is the county town of Hampshire, a cathedral city on the River Itchen..." (entity layer)
