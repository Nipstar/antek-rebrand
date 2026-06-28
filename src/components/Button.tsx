import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ink';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  // Hard offset shadow, 2px borders, zero radius, DM Sans 700 uppercase.
  // Hover: translate 2px down-right and collapse the shadow (guidelines §7).
  const baseClasses = 'font-sans font-bold uppercase px-7 py-3 border-2 transition-all duration-150 hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[2px] active:translate-y-[2px] disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    // Coral fill, ink text + border, hard ink shadow that collapses on hover.
    primary: 'bg-coral text-ink border-ink shadow-brutal-sm hover:shadow-none',
    // Transparent + cream border; invert to cream fill / ink text on hover.
    secondary: 'bg-transparent text-cream border-cream hover:bg-cream hover:text-ink',
    // For use ON coral bands: ink fill, cream text, cream hard shadow.
    ink: 'bg-ink text-cream border-ink shadow-[4px_4px_0_#E8DCC8] hover:shadow-none',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
