import React from 'react';
import { HeadlineBlock } from './HeadlineBlock';

// ANONYMISED proof. No client name/town/mechanism without written sign-off.
//
// Reusable proof block used across the location pages. The copy is governed:
// do NOT add a client name, town or mechanism here or in any page that renders it.
// `children` is an optional slot for a verified, signed-off local testimonial.
interface TrustBlockProps {
  children?: React.ReactNode;
}

export function TrustBlock({ children }: TrustBlockProps) {
  return (
    <section className="bg-ink border-y border-hairline py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <HeadlineBlock className="mb-10">
          Proof It <span className="text-coral">Works</span>
        </HeadlineBlock>

        <figure className="border-2 border-coral bg-charcoal shadow-brutal-coral p-8 md:p-10">
          <span aria-hidden="true" className="block font-display font-extrabold text-6xl leading-none text-coral mb-2">&ldquo;</span>
          <blockquote className="text-xl md:text-2xl text-body leading-relaxed font-bold">
            We recently built a system for a UK letting agency that took around seven hours a week of manual research off their plate. Whether it&rsquo;s answering calls or killing admin, the principle&rsquo;s the same: if your team does it every week and hates it, it can usually be automated.
          </blockquote>
        </figure>

        {/* local testimonial slot */}
        {children}
      </div>
    </section>
  );
}
