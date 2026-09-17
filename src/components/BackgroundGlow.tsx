import React from 'react';

interface BackgroundGlowProps {
  stage?: number;
}

export const BackgroundGlow: React.FC<BackgroundGlowProps> = ({ stage = 1 }) => {
  const isCelebration = stage >= 7;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      
      {/* Ambient neon green gradient blobs (Engineering theme) */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-[#00FF66]/[0.06] blur-[140px] rounded-full" />
      <div className="absolute top-[40%] left-[-15%] w-[450px] h-[450px] bg-[#00D957]/[0.04] blur-[130px] rounded-full" />

      {/* Warm gold ambient glow in later celebratory stages */}
      {isCelebration && (
        <div className="absolute bottom-[-10%] right-[-10%] w-[550px] h-[550px] bg-[#FFD166]/[0.08] blur-[150px] rounded-full transition-opacity duration-1000" />
      )}

      {/* Pitch black vignette border */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(5,5,5,0.92)_100%)]" />
    </div>
  );
};
