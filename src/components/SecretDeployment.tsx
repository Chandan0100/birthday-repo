import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Server, Shield, Sparkles, Cpu } from 'lucide-react';
import { ZenmonkLogo } from './ZenmonkLogo';
import content from '../content';

interface SecretDeploymentProps {
  onDeploy: () => void;
}

export const SecretDeployment: React.FC<SecretDeploymentProps> = ({ onDeploy }) => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-2xl"
      >
        <div className="glass-panel-neon rounded-3xl p-8 md:p-12 relative overflow-hidden border border-[#00FF66]/20 shadow-2xl">
          {/* Subtle background glow circle */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00FF66]/[0.06] rounded-full blur-3xl pointer-events-none" />

          {/* Top Tag & Brand mark */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <div className="flex items-center space-x-3">
              <ZenmonkLogo size="sm" showWordmark={true} />
              <span className="hidden sm:inline text-white/20">|</span>
              <div className="hidden sm:inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-[#00FF66]/10 border border-[#00FF66]/30 text-[#00FF66] font-mono text-xs">
                <Sparkles className="w-3 h-3" />
                <span>{content.brand.badge}</span>
              </div>
            </div>
            <div className="font-mono text-xs text-[#A0A0A0] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping" />
              <span>{content.release.status.toUpperCase()}</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-3 mb-10">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F5F5F5] leading-tight"
            >
              {content.release.headline} <br />
              <span className="bg-gradient-to-r from-[#00FF66] via-[#39FF88] to-[#7CFFB2] bg-clip-text text-transparent">
                {content.release.headlineHighlight}
              </span>
            </motion.h1>
            <p className="text-[#A0A0A0] text-sm md:text-base leading-relaxed">
              {content.release.description}
            </p>
          </div>

          {/* Metadata Grid (The Spec Card) */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-[#050505]/80 border border-white/5 rounded-2xl p-4">
              <div className="text-[11px] font-mono text-[#666666] uppercase tracking-wider mb-1">
                RELEASE
              </div>
              <div className="font-mono text-sm sm:text-base font-semibold text-[#00FF66]">
                {content.person.name.toUpperCase()} {content.release.version}
              </div>
            </div>

            <div className="bg-[#050505]/80 border border-white/5 rounded-2xl p-4">
              <div className="text-[11px] font-mono text-[#666666] uppercase tracking-wider mb-1">
                ENVIRONMENT
              </div>
              <div className="font-mono text-sm sm:text-base font-semibold text-[#39FF88] flex items-center gap-2">
                <Server className="w-4 h-4 text-[#00FF66]" />
                <span>{content.release.environment}</span>
              </div>
            </div>

            <div className="bg-[#050505]/80 border border-white/5 rounded-2xl p-4">
              <div className="text-[11px] font-mono text-[#666666] uppercase tracking-wider mb-1">
                INITIATED BY
              </div>
              <div className="font-mono text-sm sm:text-base font-semibold text-[#F5F5F5] flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#FFD166]" />
                <span>{content.release.initiatedBy}</span>
              </div>
            </div>

            <div className="bg-[#050505]/80 border border-white/5 rounded-2xl p-4">
              <div className="text-[11px] font-mono text-[#666666] uppercase tracking-wider mb-1">
                PRIORITY
              </div>
              <div className="font-mono text-sm sm:text-base font-semibold text-[#00FF66] flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#00FF66]" />
                <span>{content.release.priority}</span>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              onClick={onDeploy}
              className="w-full py-4 px-6 rounded-2xl bg-[#00FF66] hover:bg-[#39FF88] text-[#050505] font-mono text-base font-bold tracking-wider uppercase shadow-xl shadow-[#00FF66]/20 hover:shadow-[#00FF66]/35 transition-all duration-300 flex items-center justify-center space-x-3 group"
            >
              <Rocket className="w-5 h-5 text-[#050505] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              <span>DEPLOY →</span>
              <ArrowRight className="w-5 h-5 text-[#050505] group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
