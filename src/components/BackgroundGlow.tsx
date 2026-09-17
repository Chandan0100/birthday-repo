import React from 'react';

export const BackgroundGlow: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      
      {/* Ambient gradient blobs */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-zen-500/10 blur-[130px] rounded-full" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full" />
      <div className="absolute top-[40%] left-[-15%] w-[400px] h-[400px] bg-orange-600/5 blur-[110px] rounded-full" />

      {/* Subtle vignette border */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(9,11,14,0.8)_100%)]" />
    </div>
  );
};

