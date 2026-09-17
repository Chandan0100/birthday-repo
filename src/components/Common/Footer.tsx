import React from 'react';
import content from '../../content';
import { ZenmonkLogo } from './ZenmonkLogo';

interface FooterProps {
  isDarkTheme?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDarkTheme = false }) => {
  const { brand } = content;

  return (
    <footer className={`relative z-10 py-6 px-4 border-t transition-colors duration-500 ${
      isDarkTheme ? 'bg-[#0A0A0A]/90 border-neutral-800 text-neutral-400' : 'bg-[#FFF9F2]/90 border-[#FED7AA]/40 text-[#78716C]'
    }`}>
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <ZenmonkLogo variant={isDarkTheme ? 'dark' : 'light'} />

        <div className="text-center sm:text-right font-mono">
          <p className={isDarkTheme ? 'text-neutral-300' : 'text-[#292524]'}>
            {brand.teamTagline}
          </p>
          <p className="text-[11px] opacity-75 mt-0.5">
            {brand.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
