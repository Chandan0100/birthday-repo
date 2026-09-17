import React from 'react';
import { Heart } from 'lucide-react';
import { ZenmonkLogo } from './ZenmonkLogo';
import content from '../content';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/5 bg-[#0a0d14]/90 backdrop-blur-sm py-8 px-4 mt-auto relative z-20">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand Mark */}
        <div className="flex items-center space-x-3">
          <ZenmonkLogo size="sm" showWordmark={true} />
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="font-mono text-xs text-slate-400">
            {content.brand.subtext}
          </span>
        </div>

        {/* Sign-off */}
        <div className="flex items-center space-x-1.5 text-xs text-slate-400 font-mono">
          <span>{content.brand.madeWith}</span>
          <Heart className="w-3.5 h-3.5 text-zen-500 fill-current animate-pulse" />
          <span>by</span>
          <span className="text-white font-semibold">{content.brand.subtext}</span>
          <span>for</span>
          <span className="text-zen-400 font-bold">{content.person.name}</span>
        </div>
      </div>
    </footer>
  );
};

