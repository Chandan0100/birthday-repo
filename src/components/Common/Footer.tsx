import React from 'react';
import content from '../../content';
import { ZenmonkLogo } from './ZenmonkLogo';

export const Footer: React.FC = () => {
  const { brand } = content;

  return (
    <footer className="relative z-10 py-6 px-4 border-t bg-[#FFF9F2]/90 border-[#FED7AA]/40 text-[#78716C] transition-colors duration-500">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <ZenmonkLogo variant="light" />

        <div className="text-center sm:text-right font-mono">
          <p className="text-[#292524] font-medium">
            {brand.teamTagline}
          </p>
          <p className="text-[11px] text-[#A8A29E] mt-0.5">
            {brand.madeWith}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
