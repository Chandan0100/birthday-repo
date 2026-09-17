import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import content from '../../content';
import {
  SparkleDoodle,
  StarDoodle,
  HeartDoodle,
  BalloonDoodle
} from '../Doodles/DoodleIcons';
import { ProfilePhoto } from '../Common/ProfilePhoto';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface BirthdayHeroProps {
  onNext: () => void;
}

export const BirthdayHero: React.FC<BirthdayHeroProps> = ({ onNext }) => {
  const { hero } = content;

  // Gentle celebratory confetti puff on initial reveal
  useEffect(() => {
    const timer = setTimeout(() => {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.65 },
        colors: ['#F97316', '#FFD166', '#FFB86C', '#F7A8B8', '#FFF4E8'],
        disableForReducedMotion: true,
      });
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-8 text-center overflow-hidden">
      {/* Decorative floating balloons in background */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: [0, -12, 0], opacity: 0.9 }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1 }
        }}
        className="absolute top-8 left-6 md:left-20 pointer-events-none"
      >
        <BalloonDoodle color="#F97316" stringColor="#EA580C" className="w-12 h-20 md:w-16 md:h-28" />
      </motion.div>

      <motion.div
        initial={{ y: 90, opacity: 0 }}
        animate={{ y: [0, -16, 0], opacity: 0.9 }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          opacity: { duration: 1.2, delay: 0.2 }
        }}
        className="absolute top-12 right-6 md:right-24 pointer-events-none"
      >
        <BalloonDoodle color="#FFD166" stringColor="#D97706" className="w-10 h-16 md:w-14 md:h-24" />
      </motion.div>

      {/* Floating stars and sparkles */}
      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: [0, 15, -15, 0] }}
        transition={{
          scale: { duration: 0.6, delay: 0.3 },
          rotate: { duration: 7, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute top-24 left-1/4 hidden md:block pointer-events-none"
      >
        <StarDoodle className="w-6 h-6" color="#FFD166" />
      </motion.div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="absolute bottom-20 right-1/4 hidden md:block pointer-events-none"
      >
        <SparkleDoodle className="w-7 h-7" color="#F97316" />
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="absolute bottom-24 left-1/5 hidden lg:block pointer-events-none"
      >
        <HeartDoodle className="w-6 h-6" color="#F7A8B8" />
      </motion.div>

      {/* Main Birthday Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl w-full bg-white/90 backdrop-blur-md border border-[#FED7AA]/80 rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl shadow-[#F97316]/5"
      >
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#FFF4E8] border border-[#FED7AA] text-xs font-medium text-[#EA580C] mb-4"
        >
          <SparkleDoodle className="w-3.5 h-3.5" color="#EA580C" />
          <span>{hero.badge}</span>
        </motion.div>

        {/* Profile Photograph (Circular Crop with clean white border and warm glow) */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-4"
        >
          <ProfilePhoto
            src={hero.photoUrl}
            alt={hero.name}
            size="md"
            shape="circle"
            showGlow={true}
          />
        </motion.div>

        {/* Focal Headline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-3"
        >
          <p className="text-xs sm:text-sm font-mono tracking-[0.2em] text-[#A8A29E] uppercase mb-1">
            {hero.greetingPrefix}
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-[#1C1917] leading-tight">
            <span className="bg-gradient-to-r from-[#1C1917] via-[#EA580C] to-[#1C1917] bg-clip-text text-transparent">
              {hero.greetingHighlight}
            </span>
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-base sm:text-lg font-medium text-[#EA580C] max-w-lg mx-auto mb-1.5"
        >
          {hero.subtext}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-xs sm:text-sm text-[#57534E] italic max-w-md mx-auto mb-5"
        >
          “{hero.playfulSubtext}”
        </motion.p>

        {/* Birthday Requirements Checklist Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="p-4 sm:p-5 rounded-2xl bg-[#FFF9F2] border border-[#FED7AA] text-left mb-6 font-mono text-xs sm:text-sm shadow-xs"
        >
          <div className="text-[11px] font-bold text-[#EA580C] uppercase tracking-wider mb-2.5 pb-1.5 border-b border-[#FED7AA]/60 flex items-center justify-between">
            <span>{hero.requirementsTitle}</span>
            <span className="text-neutral-400">spec://bday.v1</span>
          </div>

          <div className="space-y-1.5 mb-3 text-[#292524]">
            {hero.requirements.map((req, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#00D957] shrink-0" />
                <span>{req}</span>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-[#FED7AA]/60 flex items-center justify-between text-[11px]">
            <span className="font-semibold text-[#1C1917]">{hero.requirementOne}</span>
            <span className="text-[#EA580C] font-semibold">{hero.requirementStatus}</span>
          </div>
        </motion.div>

        {/* Handwritten Annotation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-6"
        >
          <span className="font-handwriting text-xl md:text-2xl text-[#EA580C] tracking-wide inline-block -rotate-1">
            ✦ {hero.cardNote} ✦
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex justify-center"
        >
          <button
            onClick={onNext}
            className="group inline-flex items-center space-x-3 px-8 py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white font-medium text-sm sm:text-base rounded-2xl shadow-lg shadow-[#F97316]/25 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{hero.buttonText}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BirthdayHero;
