import React from 'react';

export const SparkleDoodle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-6 h-6",
  color = "#F97316"
}) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M24 4C24 15.0457 15.0457 24 4 24C15.0457 24 24 32.9543 24 44C24 32.9543 32.9543 24 44 24C32.9543 24 24 15.0457 24 4Z"
      fill={color}
      opacity="0.85"
    />
  </svg>
);

export const StarDoodle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-5 h-5",
  color = "#FFD166"
}) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M16 2L19.5 11.5L29 12.5L21.5 19L24 29L16 23.5L8 29L10.5 19L3 12.5L12.5 11.5L16 2Z"
      fill={color}
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const HeartDoodle: React.FC<{ className?: string; color?: string }> = ({
  className = "w-5 h-5",
  color = "#F7A8B8"
}) => (
  <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M18 31C18 31 5 21.5 5 12C5 7.5 8.5 4 13 4C15.8 4 17.3 5.5 18 6.5C18.7 5.5 20.2 4 23 4C27.5 4 31 7.5 31 12C31 21.5 18 31 18 31Z"
      fill={color}
      stroke="#EA580C"
      strokeWidth="1.2"
      strokeDasharray="1 0.5"
    />
  </svg>
);

export const CakeDoodle: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Glow behind candles */}
    <circle cx="32" cy="14" r="12" fill="#FFD166" opacity="0.3" />

    {/* Left Candle & Flame */}
    <path d="M24 7C23 9.5 23 11.5 24 13C25 11.5 25 9.5 24 7Z" fill="#FFD166" />
    <circle cx="24" cy="10.5" r="1.5" fill="#F59E0B" />
    <rect x="23" y="13" width="2" height="8" rx="1" fill="#F97316" />

    {/* Center Candle & Flame */}
    <path d="M32 4C30.5 6.8 30.5 9.5 32 11C33.5 9.5 33.5 6.8 32 4Z" fill="#FFD166" />
    <circle cx="32" cy="8.5" r="2" fill="#F59E0B" />
    <rect x="31" y="11" width="2" height="10" rx="1" fill="#EA580C" />

    {/* Right Candle & Flame */}
    <path d="M40 7C39 9.5 39 11.5 40 13C41 11.5 41 9.5 40 7Z" fill="#FFD166" />
    <circle cx="40" cy="10.5" r="1.5" fill="#F59E0B" />
    <rect x="39" y="13" width="2" height="8" rx="1" fill="#F97316" />

    {/* Top Tier Base */}
    <rect x="20" y="21" width="24" height="13" rx="3" fill="#FED7AA" stroke="#EA580C" strokeWidth="1.5" />

    {/* Top Tier Frosting Drips */}
    <path
      d="M20 25C22 27 24 23 26 27C28 29 30 25 32 28C34 26 36 29 38 26C40 24 42 27 44 25L44 21L20 21Z"
      fill="#FFF9F2"
      stroke="#EA580C"
      strokeWidth="1.2"
    />

    {/* Cherries on top tier */}
    <circle cx="23" cy="20.5" r="2" fill="#EF4444" />
    <circle cx="32" cy="20" r="2.2" fill="#EF4444" />
    <circle cx="41" cy="20.5" r="2" fill="#EF4444" />
    <circle cx="22.5" cy="19.5" r="0.6" fill="#FFFFFF" />
    <circle cx="31.5" cy="19" r="0.7" fill="#FFFFFF" />
    <circle cx="40.5" cy="19.5" r="0.6" fill="#FFFFFF" />

    {/* Bottom Tier Base */}
    <rect x="13" y="34" width="38" height="20" rx="4" fill="#FFEDE1" stroke="#EA580C" strokeWidth="1.8" />

    {/* Bottom Tier Middle Cream Layer */}
    <path d="M13 44C20 46 44 46 51 44" stroke="#F97316" strokeWidth="2" strokeDasharray="3 2" />

    {/* Bottom Tier Frosting Drips */}
    <path
      d="M13 38C15 41 18 36 21 40C24 43 27 38 30 42C33 39 36 43 39 40C42 37 45 42 48 39C50 37 51 39 51 38L51 34L13 34Z"
      fill="#FFF4E8"
      stroke="#EA580C"
      strokeWidth="1.4"
    />

    {/* Decorative sprinkles */}
    <circle cx="18" cy="48" r="1.2" fill="#F97316" />
    <circle cx="26" cy="50" r="1.2" fill="#FFD166" />
    <circle cx="34" cy="48" r="1.2" fill="#EF4444" />
    <circle cx="42" cy="50" r="1.2" fill="#F97316" />
    <circle cx="46" cy="47" r="1" fill="#10B981" />

    {/* Serving Plate */}
    <path d="M8 56C20 59 44 59 56 56" stroke="#EA580C" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M11 58C21 61 43 61 53 58" stroke="#FED7AA" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const HandDrawnArrow: React.FC<{ className?: string; color?: string }> = ({
  className = "w-8 h-8",
  color = "#F97316"
}) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M10 24C16 22 26 21 36 24M36 24L28 16M36 24L28 32"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BalloonDoodle: React.FC<{ className?: string; color?: string; stringColor?: string }> = ({
  className = "w-10 h-16",
  color = "#F97316",
  stringColor = "#D97706"
}) => (
  <svg viewBox="0 0 40 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M20 38C29 38 36 30 36 20C36 10 29 2 20 2C11 2 4 10 4 20C4 30 11 38 20 38Z"
      fill={color}
    />
    {/* Knot */}
    <path d="M18 38L22 38L20 42Z" fill={color} />
    {/* Highlight shine */}
    <path
      d="M12 10C9 14 9 20 11 24"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.6"
    />
    {/* String */}
    <path
      d="M20 42C17 48 23 52 19 60"
      stroke={stringColor}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeDasharray="2 1.5"
    />
  </svg>
);

