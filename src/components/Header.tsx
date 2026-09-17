import React from 'react';
import { ShieldCheck, Terminal, Sparkles } from 'lucide-react';
import { BIRTHDAY_CONFIG } from '../config/birthdayData';

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
    'Team',
    'Telemetry',
    'Message',
    'Party',
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0a0d14]/80 backdrop-blur-md border-b border-white/5 px-4 lg:px-8 py-3 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left: System Branding */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-zen-500/20 to-amber-500/10 border border-zen-500/30 flex items-center justify-center text-zen-400 shadow-sm shadow-zen-500/10">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs font-semibold tracking-wider text-slate-200">
                {BIRTHDAY_CONFIG.teamName.toUpperCase()}
              </span>
              <span className="text-slate-600">/</span>
              <span className="font-mono text-xs text-zen-400 font-medium">
                {BIRTHDAY_CONFIG.releaseVersion}
              </span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ENV: {BIRTHDAY_CONFIG.environment}</span>
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
