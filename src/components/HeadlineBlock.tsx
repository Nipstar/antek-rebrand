import React from 'react'
import { Eyebrow } from './Eyebrow'

interface HeadlineBlockProps {
  /** Optional mono kicker line above the headline. */
  kicker?: React.ReactNode
  /** Heading content. Wrap one phrase in <span className="text-coral"> per the headline rule. */
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

// Headline with a 5px coral left bar and optional coral kicker (guidelines §4/§5.3).
// Cream by default; colour exactly one phrase coral at the call site. Outfit 800,
// uppercase, tight line-height, responsive clamp. Used for every section heading.
const SIZES = {
  h1: 'text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.01em]',
  h2: 'text-[clamp(2rem,4vw,3rem)] leading-[0.95] tracking-[-0.01em]',
  h3: 'text-[clamp(1.5rem,3vw,2rem)] leading-[0.95] tracking-[-0.01em]',
}

export function HeadlineBlock({ kicker, children, as = 'h2', className = '' }: HeadlineBlockProps) {
  const Heading = as
  return (
    <div className={`border-l-[5px] border-coral pl-5 md:pl-7 ${className}`}>
      {kicker ? <Eyebrow className="mb-4">{kicker}</Eyebrow> : null}
      <Heading className={`font-display font-extrabold uppercase text-cream break-words ${SIZES[as]}`}>
        {children}
      </Heading>
    </div>
  )
}
