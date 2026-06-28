import { Mic } from 'lucide-react';

interface VoiceDemoButtonProps {
  onClick: () => void;
}

export function VoiceDemoButton({ onClick }: VoiceDemoButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative group"
      aria-label="Try voice AI demo"
    >
      {/* Main button — coral primary on dark */}
      <div className="relative px-6 md:px-8 py-3 md:py-4 bg-coral border-2 border-ink shadow-brutal-sm hover:shadow-none transition-all duration-150 group-hover:translate-x-[2px] group-hover:translate-y-[2px]">
        {/* Live badge */}
        <div className="absolute -top-3 -right-3 flex items-center space-x-1 bg-ink border-2 border-coral px-2 py-1">
          <span className="w-2 h-2 bg-coral animate-pulse"></span>
          <span aria-hidden="true" className="text-xs font-bold uppercase text-cream">Live</span>
        </div>

        {/* Button content */}
        <div className="flex items-center justify-center space-x-2">
          <Mic className="w-5 h-5 md:w-6 md:h-6 text-ink" />

          {/* Button text - solid, always readable */}
          <div className="text-center">
            <div className="font-sans font-bold uppercase text-sm md:text-base text-ink tracking-tight-lg">
              Try the demo
            </div>
            <div className="hidden md:block text-xs text-ink">
              No signup required
            </div>
          </div>
        </div>
      </div>

      {/* Supporting text for mobile */}
      <div className="md:hidden text-center text-xs text-body font-bold mt-2">
        Free instant demo
      </div>
    </button>
  );
}
