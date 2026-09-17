import React from 'react';
import { ZenmonkLogo } from './ZenmonkLogo';

interface StageNavProps {
  currentStage: number;
  totalStages: number;
  onNavigateStage: (stage: number) => void;
}

export const StageNav: React.FC<StageNavProps> = ({
  currentStage,
  totalStages,
  onNavigateStage,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 md:px-8 py-3.5 backdrop-blur-md bg-[#FFF9F2]/90 border-b border-[#FED7AA]/50 text-[#292524] transition-colors duration-500 shadow-sm shadow-[#F97316]/5">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <ZenmonkLogo variant="light" />

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
                    ? 'w-7 bg-[#F97316] shadow-sm shadow-[#F97316]/30'
                    : isPassed
                    ? 'w-2.5 bg-[#FDBA74] hover:bg-[#FB923C]'
                    : 'w-2 bg-[#E7E5E4] hover:bg-[#D6D3D1]'
                }`}
              />
            );
          })}
        </div>

        <div className="hidden sm:flex items-center space-x-2 font-mono text-xs">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#FFF4E8] border border-[#FED7AA] text-[#EA580C]">
            Chapter 0{currentStage} / 0{totalStages}
          </span>
        </div>
      </div>
    </header>
  );
};

export default StageNav;
