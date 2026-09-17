import React from 'react';
import { motion } from 'framer-motion';
import content from '../../content';
import { SparkleDoodle, StarDoodle } from '../Doodles/DoodleIcons';
import { ArrowRight, BookOpen, Quote } from 'lucide-react';

interface StoryProps {
  onNext: () => void;
}

export const Story: React.FC<StoryProps> = ({ onNext }) => {
  const { story } = content;

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl w-full bg-white/85 backdrop-blur-md border border-[#FED7AA]/70 rounded-3xl p-8 sm:p-12 md:p-14 shadow-xl shadow-[#F97316]/5 text-left"
      >
        {/* Top Badge */}
        <div className="flex items-center justify-between mb-8">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF4E8] border border-[#FED7AA] text-xs font-mono text-[#EA580C]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{story.badge}</span>
          </span>
          <StarDoodle className="w-5 h-5" color="#FFD166" />
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1C1917] tracking-tight leading-tight mb-4">
          {story.title}
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg font-medium text-[#EA580C] mb-8">
          {story.subtitle}
        </p>

        {/* Paragraphs */}
        <div className="space-y-4 text-base sm:text-lg text-[#57534E] leading-relaxed mb-8">
          {story.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Highlighted Quote Callout */}
        <div className="relative my-8 p-6 rounded-2xl bg-[#FFF9F2] border border-[#FED7AA] shadow-sm">
          <Quote className="w-8 h-8 text-[#FB923C]/40 absolute -top-3 -left-2 rotate-180" />
          <p className="font-serif italic text-xl sm:text-2xl text-[#1C1917] font-semibold text-center leading-snug">
            {story.quote}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4 flex items-center justify-between flex-wrap gap-4 border-t border-[#FED7AA]/40">
          <div className="inline-flex items-center space-x-1.5 font-handwriting text-xl text-[#EA580C]">
            <SparkleDoodle className="w-4 h-4" />
            <span>The engineering journey</span>
          </div>

          <button
            onClick={onNext}
            className="inline-flex items-center space-x-2 px-6 py-3.5 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-xl font-medium text-sm transition-all shadow-md shadow-[#F97316]/20 hover:shadow-lg hover:shadow-[#F97316]/30 group"
          >
            <span>{story.buttonText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Story;

