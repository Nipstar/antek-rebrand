import React from 'react'

interface EyebrowProps {
  children: React.ReactNode
  /** coral (default) for page/section labels, muted for quieter captions. */
  tone?: 'coral' | 'muted'
  className?: string
}

// Mono, uppercase, wide tracking. Guidelines §5.1/§5.2 (eyebrow / kicker).
export function Eyebrow({ children, tone = 'coral', className = '' }: EyebrowProps) {
  const color = tone === 'coral' ? 'text-coral' : 'text-muted'
  return (
    <p className={`font-mono font-bold text-xs uppercase tracking-eyebrow ${color} ${className}`}>
      {children}
    </p>
  )
}
