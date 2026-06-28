import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false, ...rest }: CardProps) {
  // Ink panel, 2px coral border, hard offset shadow, zero radius.
  const hoverClasses = hover
    ? 'hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-150'
    : '';

  return (
    <div
      className={`bg-ink border-2 border-coral shadow-brutal-coral rounded-none p-10 md:p-12 ${hoverClasses} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
