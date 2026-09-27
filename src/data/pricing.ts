// Single source of truth for every public price on the site (all ex-VAT).
// Mirrors /pricing. Change a number here and every page, FAQ and JSON-LD
// block that imports it updates together. canonical-pricing.json (used by
// scripts/audit) must be kept in step with these values.

export const PRICES = {
  receptionist: {
    starter: { monthly: 97, minutes: 120 },
    standard: { monthly: 198, minutes: 240 },
    setupFrom: 497,
    overagePerMin: 0.18,
    goLive: '24–48 hours',
  },
  chatbot: {
    monthly: 57,
    setupFrom: 297,
    goLive: '24–48 hours',
  },
  workflow: {
    from: 250,
    goLive: '1–14 days',
  },
  geo: {
    quickCheck: 247,
    fullAudit: 497,
    auditFixFrom: 997,
    retainerFrom: 497,
    retainerMinimumMonths: 3,
  },
  noticeDays: 30,
} as const

const gbp = (n: number) => `£${n}`

// Pre-formatted strings, so copy reads the same everywhere it appears.
export const PRICE_TEXT = {
  receptionistMonthly: `${gbp(PRICES.receptionist.starter.monthly)}/month`,
  receptionistStandardMonthly: `${gbp(PRICES.receptionist.standard.monthly)}/month`,
  receptionistSetup: `setup from ${gbp(PRICES.receptionist.setupFrom)}`,
  receptionistMinutes: `${PRICES.receptionist.starter.minutes} call minutes included per month`,
  receptionistOverage: `£${PRICES.receptionist.overagePerMin.toFixed(2)}/min over`,
  chatbotMonthly: `${gbp(PRICES.chatbot.monthly)}/month`,
  chatbotSetup: `setup from ${gbp(PRICES.chatbot.setupFrom)}`,
  workflowFrom: `from ${gbp(PRICES.workflow.from)}`,
  geoQuickCheck: gbp(PRICES.geo.quickCheck),
  geoFullAudit: gbp(PRICES.geo.fullAudit),
  geoAuditFixFrom: `from ${gbp(PRICES.geo.auditFixFrom)}`,
  geoRetainerFrom: `from ${gbp(PRICES.geo.retainerFrom)}/month`,
} as const

// The one true line about contracts. The GEO retainer has a minimum term,
// so "no contracts, no minimum terms" is never true site-wide.
export const CONTRACT_TERMS =
  `No contracts on AI receptionist, chatbot and workflow plans. Monthly plans roll month to month with ${PRICES.noticeDays} days' notice. The GEO retainer has a ${PRICES.geo.retainerMinimumMonths}-month minimum.`

export const VAT_NOTE = 'All prices are ex-VAT. UK VAT applies to UK businesses where applicable.'
