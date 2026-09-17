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
        <div className="glass-panel-glow rounded-3xl p-8 md:p-12 relative overflow-hidden border border-zen-500/20 shadow-2xl">
          {/* Subtle background glow circle */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-zen-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Tag & Brand mark */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <ZenmonkLogo size="sm" showWordmark={true} />
              <span className="hidden sm:inline text-white/20">|</span>
              <div className="hidden sm:inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-zen-500/10 border border-zen-500/30 text-zen-400 font-mono text-xs">
                <Sparkles className="w-3 h-3" />
                <span>{content.brand.badge}</span>
              </div>
            </div>
            <div className="font-mono text-xs text-slate-500 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{content.release.status.toUpperCase()}</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="space-y-3 mb-10">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              {content.release.headline} <br />
              <span className="bg-gradient-to-r from-zen-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
                {content.release.headlineHighlight}
              </span>
            </motion.h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              {content.release.description}
            </p>
          </div>

          {/* Metadata Grid (The Spec Card) */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-black/40 border border-white/5 rounded-2xl p-4">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                RELEASE
              </div>
              <div className="font-mono text-sm sm:text-base font-semibold text-zen-300">
                {content.person.name.toUpperCase()} {content.release.version}
              </div>
            </div>

            <div className="bg-black/40 border border-white/5 rounded-2xl p-4">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                ENVIRONMENT
              </div>
              <div className="font-mono text-sm sm:text-base font-semibold text-emerald-400 flex items-center gap-2">
                <Server className="w-4 h-4" />
                <span>{content.release.environment}</span>
              </div>
            </div>

            <div className="bg-black/40 border border-white/5 rounded-2xl p-4">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                INITIATED BY
              </div>
              <div className="font-mono text-sm sm:text-base font-semibold text-white flex items-center gap-2">
                <Cpu className="w-4 h-4 text-amber-400" />
                <span>{content.release.initiatedBy}</span>
              </div>
            </div>

            <div className="bg-black/40 border border-white/5 rounded-2xl p-4">
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                PRIORITY
              </div>
              <div className="font-mono text-sm sm:text-base font-semibold text-zen-400 flex items-center gap-2">
                <Shield className="w-4 h-4 text-zen-500" />
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
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-zen-500 via-orange-500 to-amber-500 text-slate-950 font-mono text-base font-bold tracking-wider uppercase shadow-xl shadow-zen-500/25 hover:shadow-zen-500/40 transition-all duration-300 flex items-center justify-center space-x-3 group"
            >
              <Rocket className="w-5 h-5 text-slate-950 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              <span>DEPLOY →</span>
              <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

