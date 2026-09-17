import React from 'react';
import { ShieldCheck, Sparkles } from 'lucide-react';
import { ZenmonkLogo } from './ZenmonkLogo';
import content from '../content';

interface HeaderProps {
  currentStage: number;
  totalStages: number;
  onNavigateStage?: (stage: number) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentStage, totalStages, onNavigateStage }) => {
  const stageLabels = [
    'Gate',
    'Ready',
    'Build',
    'Release',
    'Legacy',
    'Team',
    'Telemetry',
    'Message',
    'Party',
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0a0d14]/85 backdrop-blur-md border-b border-white/5 px-4 lg:px-8 py-3 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left: Brand & Release Version */}
        <div className="flex items-center space-x-3">
          <ZenmonkLogo size="sm" showWordmark={true} />
          <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
          <div className="hidden sm:flex items-center space-x-2">
            <span className="font-mono text-xs text-zen-400 font-medium">
              {content.release.version}
            </span>
            <span className="text-slate-600">/</span>
            <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{content.release.environment}</span>
            </div>
          </div>
        </div>

        {/* Center: Stage Step Indicator */}
        <div className="hidden md:flex items-center space-x-1.5 bg-black/40 border border-white/5 rounded-full px-3 py-1">
          {stageLabels.slice(1).map((label, idx) => {
            const stepNum = idx + 1;
            const isCompleted = currentStage > stepNum;
            const isCurrent = currentStage === stepNum;

            return (
              <button
                key={label}
                onClick={() => onNavigateStage && onNavigateStage(stepNum)}
                disabled={currentStage === 0 || !onNavigateStage}
                className={`flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono transition-all ${
                  isCurrent
                    ? 'bg-zen-500/20 text-zen-300 font-semibold border border-zen-500/30'
                    : isCompleted
                    ? 'text-slate-400 hover:text-slate-200'
                    : 'text-slate-600'
                }`}
                title={`Stage ${stepNum}: ${label}`}
              >
                <span>{stepNum}.</span>
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Right: Security & Priority Status */}
        <div className="flex items-center space-x-3">
          <div className="hidden sm:flex items-center space-x-1.5 text-[11px] font-mono px-2.5 py-1 rounded bg-slate-900/60 border border-slate-800 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-zen-400" />
            <span>CONFIDENTIAL</span>
          </div>
          <div className="text-[11px] font-mono px-2.5 py-1 rounded bg-zen-500/10 border border-zen-500/20 text-zen-300 font-medium flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-zen-400" />
            <span>STAGE {currentStage}/{totalStages}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
