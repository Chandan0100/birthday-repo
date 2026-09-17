import React from 'react';
import { motion } from 'framer-motion';
import content from '../../content';
import { CakeDoodle, HeartDoodle, SparkleDoodle, StarDoodle, BalloonDoodle } from '../Doodles/DoodleIcons';
import { ArrowRight, Heart } from 'lucide-react';

interface FinalMessageProps {
  onNext: () => void;
}

export const FinalMessage: React.FC<FinalMessageProps> = ({ onNext }) => {
  const { finalMessage } = content;

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-8 max-w-3xl mx-auto">
      {/* Subtle floating background decorations */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-6 -left-6 hidden md:block pointer-events-none"
      >
        <BalloonDoodle color="#F97316" className="w-12 h-20" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-6 -right-6 hidden md:block pointer-events-none"
      >
        <BalloonDoodle color="#FFD166" className="w-10 h-16" />
      </motion.div>

      {/* Main Editorial Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full bg-white/90 backdrop-blur-md border border-[#FED7AA]/70 rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl shadow-[#F97316]/5 text-[#1C1917]"
      >
        {/* Top Badge */}
        <div className="flex items-center justify-between mb-6">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF4E8] border border-[#FED7AA] text-xs font-mono text-[#EA580C]">
            <Heart className="w-3.5 h-3.5 text-[#F97316]" />
            <span>{finalMessage.badge}</span>
          </span>
          <StarDoodle className="w-5 h-5" color="#FFD166" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1C1917] tracking-tight mb-6">
          {finalMessage.heading}
        </h2>

        {/* Paragraphs */}
        <div className="space-y-4 text-base sm:text-lg text-[#57534E] leading-relaxed mb-8">
          {finalMessage.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Closing Pillar Quote Box */}
        <div className="my-8 p-6 rounded-2xl bg-[#FFF9F2] border border-[#FED7AA] shadow-sm text-center">
          <SparkleDoodle className="w-6 h-6 mx-auto mb-2" color="#F97316" />
          <p className="font-serif italic text-xl sm:text-2xl text-[#1C1917] font-semibold leading-snug">
            “{finalMessage.closingLesson}”
          </p>
        </div>

        {/* Birthday Wish & Team Signoff */}
        <div className="text-center my-8 space-y-3">
          <div className="flex justify-center mb-2">
            <CakeDoodle className="w-14 h-14" />
          </div>

          <h3 className="text-3xl sm:text-4xl font-serif font-extrabold text-[#EA580C]">
            {finalMessage.birthdayWish}
          </h3>

          <div className="flex items-center justify-center space-x-2">
            <span className="font-handwriting text-2xl sm:text-3xl text-[#1C1917]">
              {finalMessage.signoff}
            </span>
            <HeartDoodle className="w-6 h-6 inline-block" />
          </div>
        </div>

        {/* Launch Celebration CTA */}
        <div className="pt-6 border-t border-[#FED7AA]/60 flex justify-center">
          <button
            onClick={onNext}
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium text-base rounded-2xl shadow-lg shadow-[#F97316]/25 hover:shadow-xl hover:shadow-[#F97316]/35 transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <span>{finalMessage.buttonText}</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default FinalMessage;

