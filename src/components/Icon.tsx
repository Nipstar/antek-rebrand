interface IconProps {
  letter: string;
  size?: 'sm' | 'md' | 'lg';
  /** Coral disc (founder shot / feature accent) instead of the default square chip. */
  circle?: boolean;
  /** JetBrains Mono numerals (numbered-badge convention) instead of display glyph. */
  mono?: boolean;
}

export function Icon({ letter, size = 'md', circle = false, mono = false }: IconProps) {
  const sizeClasses = {
    sm: 'w-12 h-12 text-xl',
    md: 'w-15 h-15 text-2xl',
    lg: 'w-20 h-20 text-4xl',
  };

  // Square coral chip with ink glyph (default), or a coral disc.
  const shapeClasses = circle
    ? 'bg-coral text-ink rounded-full'
    : 'bg-coral text-ink border-2 border-ink';

  const fontClasses = mono ? 'font-mono font-bold' : 'font-display font-extrabold';

  return (
    <div
      aria-hidden="true"
      className={`${sizeClasses[size]} ${shapeClasses} flex items-center justify-center ${fontClasses}`}
    >
      {mono ? letter : letter.toUpperCase()}
    </div>
  );
}
