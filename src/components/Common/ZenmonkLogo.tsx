import React from 'react';

interface ZenmonkLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showText?: boolean;
}

export const ZenmonkLogo: React.FC<ZenmonkLogoProps> = ({
  className = "w-6 h-6",
  variant = 'light',
  showText = true,
}) => {
  const isLight = variant === 'light';

  return (
    <div className="flex items-center space-x-2.5">
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect width="40" height="40" rx="10" fill={isLight ? "#F97316" : "#1C1917"} />
          {/* Zen circle (Enso) / Stylized 'Z' monk motif */}
          <path
            d="M12 14H28L14 26H28"
            stroke={isLight ? "#FFFFFF" : "#F97316"}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="27" cy="14" r="2.5" fill="#FFD166" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-semibold text-sm tracking-tight ${isLight ? 'text-[#1C1917]' : 'text-neutral-100'}`}>
            Zenmonk
          </span>
          <span className={`text-[10px] uppercase tracking-wider font-mono ${isLight ? 'text-[#78716C]' : 'text-neutral-400'}`}>
            Engineering
          </span>
        </div>
      )}
    </div>
  );
};

export default ZenmonkLogo;
