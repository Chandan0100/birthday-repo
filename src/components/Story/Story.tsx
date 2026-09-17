import React from 'react';
import { motion } from 'framer-motion';
import content from '../../content';
import { StarDoodle, HeartDoodle, HandDrawnArrow, SparkleDoodle } from '../Doodles/DoodleIcons';
import { ProfilePhoto } from '../Common/ProfilePhoto';
import { ArrowRight, BookOpen, Quote, Sparkles } from 'lucide-react';

interface StoryProps {
  onNext: () => void;
}

export const Story: React.FC<StoryProps> = ({ onNext }) => {
  const { story } = content;
  const { telemetryJoke, photoSection } = story;

  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 py-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl w-full bg-white/90 backdrop-blur-md border border-[#FED7AA]/75 rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl shadow-[#F97316]/5 text-left"
      >
        {/* Top Badge */}
        <div className="flex items-center justify-between mb-6">
          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFF4E8] border border-[#FED7AA] text-xs font-mono text-[#EA580C]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{story.badge}</span>
          </span>
          <StarDoodle className="w-5 h-5" color="#FFD166" />
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] tracking-tight leading-tight mb-2">
          {story.title}
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg font-medium text-[#EA580C] mb-6">
          {story.subtitle}
        </p>

        {/* "The Person Behind The CTO Title" Photo Section Card */}
        {photoSection && (
          <div className="my-6 p-6 rounded-3xl bg-[#FFF9F2] border border-[#FED7AA] relative overflow-hidden shadow-xs">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Photo with subtle glow & rounded crop */}
              <div className="relative shrink-0">
                <ProfilePhoto
                  src={photoSection.photoUrl}
                  alt={photoSection.title}
                  size="lg"
                  shape="rounded"
                  showGlow={true}
                />
              </div>

              {/* Story Details & Playful Annotations */}
              <div className="space-y-2.5 text-center sm:text-left flex-1">
                <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-white border border-[#FED7AA] text-[11px] font-mono text-[#EA580C]">
                  <SparkleDoodle className="w-3 h-3" color="#EA580C" />
                  <span>OUR CTO & COLLEAGUE</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1C1917]">
                  {photoSection.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {photoSection.subtitle}
                </p>

                {/* Handwritten annotations around photo */}
                {photoSection.annotations && (
                  <div className="pt-2 border-t border-[#FED7AA]/60 flex items-center justify-center sm:justify-start gap-1.5 flex-wrap font-handwriting text-sm sm:text-base text-[#EA580C]">
                    <span>{photoSection.annotations[0]}</span>
                    <HandDrawnArrow className="w-4 h-4 text-[#F97316] inline-block" />
                    <span className="font-bold underline">{photoSection.annotations[1]}</span>
                    <HandDrawnArrow className="w-4 h-4 text-[#F97316] inline-block" />
                    <span>{photoSection.annotations[2]}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Paragraphs */}
        <div className="space-y-3 text-sm sm:text-base text-[#57534E] leading-relaxed mb-6">
          {story.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* The Engineering Telemetry Card (Warm Technical Styling) */}
        <div className="my-6 p-5 rounded-2xl bg-[#FFF9F2] border border-[#FED7AA] text-[#1C1917] shadow-sm font-mono text-xs">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#FED7AA]/70 text-[#78716C]">
            <span className="flex items-center space-x-1.5 text-[#EA580C] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{telemetryJoke.title}</span>
            </span>
            <span className="text-[#A8A29E] text-[11px]">DIFF://v2026</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
            <div className="p-3 rounded-xl bg-white border border-[#FED7AA]/80 shadow-xs">
              <span className="text-[#78716C] block text-[10px] uppercase font-bold tracking-wider">{telemetryJoke.metricLabel}</span>
              <span className="text-[#EA580C] font-bold text-base mt-0.5 block">{telemetryJoke.metricValue}</span>
            </div>

            <div className="p-3 rounded-xl bg-white border border-[#FED7AA]/80 shadow-xs">
              <span className="text-[#78716C] block text-[10px] uppercase font-bold tracking-wider">{telemetryJoke.archLabel}</span>
              <span className="text-[#F97316] font-bold text-base mt-0.5 block tracking-widest">{telemetryJoke.archValue}</span>
            </div>
          </div>

          <p className="text-[#44403C] text-xs italic bg-white/80 p-3 rounded-xl border-l-3 border-[#F97316] shadow-xs">
            {telemetryJoke.punchline}
          </p>
        </div>

        {/* Core Quote Callout */}
        <div className="relative my-6 p-5 rounded-2xl bg-[#FFF4E8] border border-[#FED7AA] shadow-xs">
          <Quote className="w-7 h-7 text-[#FB923C]/30 absolute -top-3 -left-2 rotate-180" />
          <p className="font-serif italic text-lg sm:text-xl text-[#1C1917] font-semibold text-center leading-snug">
            {story.quote}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-4 flex items-center justify-between flex-wrap gap-4 border-t border-[#FED7AA]/50">
          <div className="inline-flex items-center space-x-1.5 font-handwriting text-xl text-[#EA580C]">
            <HeartDoodle className="w-4 h-4" />
            <span>The engineering banter</span>
          </div>

          <button
            onClick={onNext}
            className="inline-flex items-center space-x-2 px-6 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-xl font-medium text-sm transition-all shadow-md shadow-[#F97316]/20 hover:shadow-lg group"
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
