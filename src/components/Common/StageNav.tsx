import React from 'react';
import { ZenmonkLogo } from './ZenmonkLogo';

interface StageNavProps {
  currentStage: number;
  totalStages: number;
  onNavigateStage: (stage: number) => void;
  isDarkTheme?: boolean;
}

export const StageNav: React.FC<StageNavProps> = ({
  currentStage,
  totalStages,
  onNavigateStage,
  isDarkTheme = false,
}) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-3.5 backdrop-blur-md border-b transition-colors duration-500 ${
        isDarkTheme
          ? 'bg-[#0A0A0A]/85 border-neutral-800 text-neutral-200'
          : 'bg-[#FFF9F2]/85 border-[#FED7AA]/50 text-[#292524]'
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <ZenmonkLogo variant={isDarkTheme ? 'dark' : 'light'} />

        {/* Stage progress pill / indicator */}
        <div className="flex items-center space-x-1.5">
          {Array.from({ length: totalStages }).map((_, index) => {
            const stepNum = index + 1;
            const isActive = stepNum === currentStage;
            const isPassed = stepNum < currentStage;

            return (
              <button
                key={stepNum}
                onClick={() => onNavigateStage(stepNum)}
                aria-label={`Jump to chapter ${stepNum}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-7 bg-[#F97316]'
                    : isPassed
                    ? isDarkTheme ? 'w-2.5 bg-neutral-600 hover:bg-neutral-500' : 'w-2.5 bg-[#FDBA74] hover:bg-[#FB923C]'
                    : isDarkTheme ? 'w-2 bg-neutral-800 hover:bg-neutral-700' : 'w-2 bg-[#E7E5E4] hover:bg-[#D6D3D1]'
                }`}
              />
            );
          })}
        </div>

        <div className="hidden sm:flex items-center space-x-2 font-mono text-xs">
          <span className={`px-2.5 py-1 rounded-full text-[11px] font-medium ${
            isDarkTheme
              ? 'bg-neutral-900 border border-neutral-800 text-neutral-400'
              : 'bg-[#FFF4E8] border border-[#FED7AA] text-[#EA580C]'
          }`}>
            Part {currentStage} of {totalStages}
          </span>
        </div>
      </div>
    </header>
  );
};

export default StageNav;
