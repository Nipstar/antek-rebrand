import React from 'react'

interface CtaBandProps {
  heading: React.ReactNode
  children?: React.ReactNode
  className?: string
}

// Full-bleed coral band, ink headline + buttons (guidelines §5.11). Section
// breaks and CTAs use edge-to-edge coral with ink text.
export function CtaBand({ heading, children, className = '' }: CtaBandProps) {
  return (
    <section className={`bg-coral py-20 md:py-28 ${className}`}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-display font-extrabold uppercase text-ink text-[clamp(2rem,4vw,3rem)] mb-6">
          {heading}
        </h2>
        {children}
      </div>
    </section>
  )
}
