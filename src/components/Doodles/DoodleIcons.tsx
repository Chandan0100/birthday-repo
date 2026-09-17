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
    {/* Flame */}
    <path d="M32 6C30 9 30 11 32 13C34 11 34 9 32 6Z" fill="#FFD166" />
    {/* Candle */}
    <rect x="30.5" y="13" width="3" height="10" rx="1.5" fill="#F97316" />
    {/* Frosting Top */}
    <path
      d="M16 28C19 26 23 29 27 27C31 29 35 26 39 28C43 26 46 28 48 28C48 34 47 37 45 40C41 42 35 41 32 42C29 41 23 42 19 40C17 37 16 34 16 28Z"
      fill="#FFF4E8"
      stroke="#EA580C"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Cake Base */}
    <path
      d="M16 35L17 52C17 55 23 57 32 57C41 57 47 55 47 52L48 35"
      stroke="#EA580C"
      strokeWidth="2"
      strokeLinecap="round"
      fill="#FFEDE1"
    />
    {/* Middle line */}
    <path
      d="M17 44C23 46 41 46 47 44"
      stroke="#F97316"
      strokeWidth="1.5"
      strokeDasharray="2 2"
    />
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
