import React from 'react';
import content from '../content';

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
      {/* Brand Icon / Symbol */}
      <div
        className={`${iconDimensions[size]} rounded-xl bg-gradient-to-br from-[#00FF66] via-[#39FF88] to-[#00D957] p-[1.5px] shadow-md shadow-[#00FF66]/20 flex items-center justify-center`}
      >
        <div className="w-full h-full bg-[#050505] rounded-[10px] flex items-center justify-center p-1">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full text-[#00FF66]"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            <circle cx="12" cy="12" r="3" fill="#00FF66" stroke="none" />
            <path d="M12 3v3" stroke="#39FF88" />
          </svg>
        </div>
      </div>

      {/* Brand Wordmark */}
      {showWordmark && (
        <div className="flex flex-col">
          <span
            className={`font-mono font-bold tracking-wider text-[#F5F5F5] ${textSizes[size]}`}
          >
            {content.brand.name}
          </span>
        </div>
      )}
    </div>
  );
};
