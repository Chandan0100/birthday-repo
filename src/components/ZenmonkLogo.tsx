import React from 'react';

interface ZenmonkLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
}

export const ZenmonkLogo: React.FC<ZenmonkLogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
}) => {
  const iconDimensions = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className={`inline-flex items-center space-x-2.5 ${className}`}>
      {/* Zenmonk Brand Icon / Symbol */}
      <div
        className={`${iconDimensions[size]} rounded-xl bg-gradient-to-br from-zen-500 via-orange-500 to-amber-600 p-[1.5px] shadow-md shadow-zen-500/20 flex items-center justify-center`}
      >
        <div className="w-full h-full bg-[#0a0d14] rounded-[10px] flex items-center justify-center p-1">
          {/* Zenmonk geometric glyph: Modern clean Zen Enso / Monk geometry */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full text-zen-400"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Minimalist Zen circle with opening & core node */}
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            <circle cx="12" cy="12" r="3" fill="#f97316" stroke="none" />
            <path d="M12 3v3" stroke="#fb923c" />
          </svg>
        </div>
      </div>

      {/* Zenmonk Wordmark */}
      {showWordmark && (
        <div className="flex flex-col">
          <span
            className={`font-mono font-bold tracking-wider text-white ${textSizes[size]}`}
          >
            ZENMONK
          </span>
        </div>
      )}
    </div>
  );
};

