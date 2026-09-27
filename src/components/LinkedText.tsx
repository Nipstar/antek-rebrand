import React from 'react'

export interface InlineLink {
  /** Exact substring of `text` to turn into a link (first occurrence). */
  text: string
  href: string
}

const LINK = 'underline underline-offset-4 decoration-coral decoration-2 hover:text-coral transition-colors'

// Renders plain text with some phrases linked. The visible text stays
// identical to `text`, so the same string can feed FAQPage JSON-LD verbatim.
export function LinkedText({ text, links = [] }: { text: string; links?: InlineLink[] }) {
  const parts: React.ReactNode[] = []
  let rest = text
  let key = 0
  for (const link of links) {
    const i = rest.indexOf(link.text)
    if (i === -1) continue
    parts.push(rest.slice(0, i))
    parts.push(
      <a key={key++} href={link.href} className={LINK}>
        {link.text}
      </a>
    )
    rest = rest.slice(i + link.text.length)
  }
  parts.push(rest)
  return <>{parts}</>
}
