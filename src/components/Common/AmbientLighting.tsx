import React from 'react';
import { motion } from 'framer-motion';

interface AmbientLightingProps {
  stage: number;
}

export const AmbientLighting: React.FC<AmbientLightingProps> = ({ stage }) => {
  // Richer warm celebratory glow for final celebration stage
  const isCelebration = stage === 7;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-700">
      {/* Primary warm cream background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F2] to-[#FFF4E8]" />

      {/* Subtle warm architectural dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: 'radial-gradient(#F97316 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Primary soft warm orange glow blob */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isCelebration ? 0.35 : 0.22 }}
        transition={{ duration: 0.8 }}
        className="absolute -top-32 -left-20 w-[550px] h-[550px] bg-[#F97316] rounded-full blur-[130px]"
      />

      {/* Supporting celebratory golden warm spot */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isCelebration ? 0.38 : 0.25 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-1/3 -right-28 w-[500px] h-[500px] bg-[#FFD166] rounded-full blur-[140px]"
      />

      {/* Gentle peach/rose ambient base */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isCelebration ? 0.25 : 0.18 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute -bottom-28 left-1/4 w-[520px] h-[520px] bg-[#F7A8B8] rounded-full blur-[150px]"
      />
    </div>
  );
};

export default AmbientLighting;
