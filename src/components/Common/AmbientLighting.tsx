import React from 'react';
import { motion } from 'framer-motion';

interface AmbientLightingProps {
  stage: number;
}

export const AmbientLighting: React.FC<AmbientLightingProps> = ({ stage }) => {
  // Determine if the current stage uses the dark engineering theme
  const isDarkStage = stage === 3 || stage === 5;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-700">
      {/* Background radial atmosphere */}
      {isDarkStage ? (
        <>
          <div className="absolute inset-0 bg-[#08080A]" />
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(#00FF66 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          {/* Neon green ambient spot */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 0.8 }}
            className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FF66] rounded-full blur-[140px]"
          />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-[#FFF9F2]" />
          {/* Warm background subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(#F97316 1.5px, transparent 1.5px)',
              backgroundSize: '32px 32px',
            }}
          />
          {/* Warm orange & gold glow blobs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 0.8 }}
            className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#F97316] rounded-full blur-[120px]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.25 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-1/2 -right-32 w-[450px] h-[450px] bg-[#FFD166] rounded-full blur-[130px]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-[#F7A8B8] rounded-full blur-[140px]"
          />
        </>
      )}
    </div>
  );
};

export default AmbientLighting;

