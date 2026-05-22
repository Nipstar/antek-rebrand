#!/usr/bin/env tsx
import { chromium } from 'playwright'

const BASE = process.env.AUDIT_BASE_URL ?? 'http://localhost:3000'

async function run() {
  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext()
  const page = await context.newPage()

  const consoleErrors: string[] = []
  const consoleAll: string[] = []
  page.on('console', msg => {
    consoleAll.push(`[${msg.type()}] ${msg.text()}`)
    if (msg.type() === 'error') consoleErrors.push(msg.text())
  })
  page.on('pageerror', err => {
    consoleErrors.push(`PAGE ERROR: ${err.message}`)
  })

  console.log(`\nLoading ${BASE}/...\n`)
  await page.goto(`${BASE}/`, { waitUntil: 'domcontentloaded', timeout: 15000 })
  await page.waitForTimeout(2000)

  // 1. Collect all console output
  console.log('== Console output ==')
  consoleAll.forEach(l => console.log(' ', l))
  if (consoleErrors.length) {
    console.log('\n== ERRORS ==')
    consoleErrors.forEach(e => console.log('  ❌', e))
  } else {
    console.log('  ✓ No JS errors')
  }

  // 2. Check for blocking overlays (elements covering >50% of viewport at z-index > 0)
  console.log('\n== Overlay check ==')
  const overlays = await page.evaluate(() => {
    const results: { tag: string; class: string; z: string; rect: string }[] = []
    const all = document.querySelectorAll('*')
    const vw = window.innerWidth
    const vh = window.innerHeight
    for (const el of all) {
      const style = window.getComputedStyle(el)
      const pos = style.position
      if (pos !== 'fixed' && pos !== 'absolute') continue
      const z = parseInt(style.zIndex || '0', 10)
      if (z < 1) continue
      const rect = el.getBoundingClientRect()
      const area = rect.width * rect.height
      if (area > vw * vh * 0.3) {
        results.push({
          tag: el.tagName,
          class: el.className.toString().slice(0, 80),
          z: style.zIndex,
          rect: `${Math.round(rect.width)}x${Math.round(rect.height)}`,
        })
      }
    }
    return results
  })

  if (overlays.length) {
    console.log('  ❌ Blocking overlays found:')
    overlays.forEach(o => console.log(`    <${o.tag}> z=${o.z} size=${o.rect} class="${o.class}"`))
  } else {
    console.log('  ✓ No blocking overlays')
  }

  // 3. Check if nav links are actually clickable (pointer-events not none)
  console.log('\n== Nav link pointer-events ==')
  const navLinks = await page.evaluate(() => {
    const links = document.querySelectorAll('nav a[href]')
    return Array.from(links).map(el => {
      const style = window.getComputedStyle(el)
      return {
        href: el.getAttribute('href'),
        text: el.textContent?.trim().slice(0, 30),
        pointerEvents: style.pointerEvents,
        visibility: style.visibility,
        display: style.display,
      }
    })
  })
  navLinks.forEach(l => {
    const ok = l.pointerEvents !== 'none' && l.visibility !== 'hidden' && l.display !== 'none'
    console.log(`  ${ok ? '✓' : '❌'} [${l.href}] "${l.text}" pointer-events=${l.pointerEvents}`)
  })

  // 4. Try actually clicking the first nav link and see if navigation happens
  console.log('\n== Click test on /contact link ==')
  const contactLink = page.locator('a[href="/contact"]').first()
  const exists = await contactLink.count()
  if (exists) {
    const [response] = await Promise.all([
      page.waitForNavigation({ timeout: 5000 }).catch(() => null),
      contactLink.click({ timeout: 3000 }).catch(e => console.log('  Click error:', e.message)),
    ])
    if (response) {
      console.log(`  ✓ Navigated to ${page.url()} (${response?.status()})`)
    } else {
      console.log(`  ❌ No navigation after click. Current URL: ${page.url()}`)
    }
  } else {
    console.log('  ⚠ No /contact link found on page')
  }

  // 5. Check what element is at the center of the page (to detect invisible overlays)
  console.log('\n== Element at center of viewport ==')
  const centerEl = await page.evaluate(() => {
    const el = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2)
    if (!el) return 'null'
    const style = window.getComputedStyle(el)
    return `<${el.tagName}> class="${el.className.toString().slice(0, 60)}" z=${style.zIndex} pos=${style.position}`
  })
  console.log(' ', centerEl)

  // 6. Element at top-left nav area
  console.log('\n== Element at nav (200, 40) ==')
  const navEl = await page.evaluate(() => {
    const el = document.elementFromPoint(200, 40)
    if (!el) return 'null'
    return `<${el.tagName}> "${el.textContent?.trim().slice(0, 40)}" href="${el.getAttribute('href') ?? ''}"`
  })
  console.log(' ', navEl)

  await browser.close()
  console.log('\nDone.\n')
}

run().catch(e => { console.error(e); process.exit(1) })
