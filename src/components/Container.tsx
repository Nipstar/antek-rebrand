import React from 'react'

// One content column for the whole site: 1200px max, centred in the viewport,
// consistent horizontal padding. Every section's inner content aligns to the
// same left edge. Full-bleed backgrounds wrap this; only their content uses it.
export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[1200px] px-[clamp(1.5rem,5vw,6rem)] ${className}`}>
      {children}
    </div>
  )
}
