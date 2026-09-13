import type { Check } from '../types.js'
import * as fs from 'fs'
import * as path from 'path'

// Only flag these exact canonical product prices when they appear WITHOUT "from" prefix
// Arbitrary financial figures (ROI calcs, case studies, comparison rows) are allowed
const CANONICAL_PRICES = [57, 97, 247, 250, 297, 497, 997]

const check: Check = {
  name: 'Pricing teaser strings on non-/pricing pages',
  description: 'Canonical product prices must appear as "from £X" teasers linking to /pricing on non-pricing pages',
  introducedInPhase: 3,
  async run({ url, document }) {
    if (url === '/pricing') {
      return { status: 'pass', detail: '/pricing itself — skipped' }
    }

    const candidates = [
      path.resolve(process.cwd(), 'canonical-pricing.json'),
      path.resolve(process.cwd(), '..', 'canonical-pricing.json'),
    ]
    const pricingFile = candidates.find(p => fs.existsSync(p))
    if (!pricingFile) {
      return { status: 'warn', detail: 'canonical-pricing.json missing — cannot verify teasers (Phase 2 not complete)' }
    }

    const bodyHtml = document.body?.innerHTML ?? ''
    const issues: string[] = []

    // If this page has any link to /pricing anywhere, all canonical prices are acceptable
    // (the page is showing its own product pricing with a cross-reference to the canonical page)
    const pageHasPricingLink = /href="\/pricing/.test(bodyHtml)

    for (const price of CANONICAL_PRICES) {
      // Look for the exact canonical price as a standalone amount (not part of larger number)
      const regex = new RegExp(`£${price}(?![\\d,])`, 'g')
      const matches = [...bodyHtml.matchAll(regex)]

      for (const match of matches) {
        // Allow: "from £X", "From £X"
        if (/from\s+$/i.test(bodyHtml.slice(Math.max(0, match.index! - 15), match.index!))) continue
        // Allow: page already has a /pricing link
        if (pageHasPricingLink) continue
        // Allow: inside a schema JSON block
        const surrounding = bodyHtml.slice(Math.max(0, match.index! - 15), match.index! + 20)
        if (/"price":\s*"/.test(surrounding)) continue

        issues.push(`£${price} appears without "from" prefix or /pricing link`)
        break // one report per price amount
      }
    }

    if (issues.length > 0) {
      return {
        status: 'fail',
        detail: issues.join(' | '),
      }
    }
    return { status: 'pass', detail: 'Canonical product prices use "from £X" pattern or link to /pricing' }
  },
}

export default check
