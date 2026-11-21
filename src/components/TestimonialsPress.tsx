'use client';

import React from 'react';
import { Star, Flame, CheckCircle, TrendingUp } from 'lucide-react';

interface TestimonialsPressProps {
  onOpenApplication?: (planId?: string) => void;
}

export default function TestimonialsPress({ onOpenApplication }: TestimonialsPressProps) {
  const transformations = [
    {
      name: "Devendra Mehta",
      role: "Managing Director",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
      result: "Lost 18kg Fat · Added 5kg Muscle",
      stats: "Body Fat: 28% → 12%",
      quote: "World-class Arsenal machines, zero crowds in the morning, and coaches who actually push your limits.",
      tag: "6 Months Program"
    },
    {
      name: "Rhea Singhania",
      role: "Architect & Athlete",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop",
      result: "Cured Back Pain · Squat Doubled",
      stats: "Squat 1RM: 40kg → 95kg",
      quote: "Clean, high-class, respectful. The steam room and fuel bar after heavy lifts are irreplaceable.",
      tag: "4 Months Program"
    },
    {
      name: "Karan Malhotra",
      role: "Tech CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
      result: "Rebuilt Physique · High Energy",
      stats: "Deadlift: 100kg → 210kg",
      quote: "Working 14-hour days, Muscle Fitness Gym became my daily anchor. Coach Amit pushed me past my mental limits.",
      tag: "5 Months Program"
    }
  ];

  return (
    <section id="transformations" className="relative py-24 bg-[#f0f2f7] dark:bg-[#070709] border-t border-neutral-200 dark:border-[#d4af37]/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#161622] border border-[#d4af37]/40 text-xs font-mono uppercase tracking-widest text-[#b8860b] dark:text-[#d4af37] mb-3 shadow-sm">
            <Flame className="w-3.5 h-3.5 fill-current" />
            <span>Proven Progress</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-black text-neutral-900 dark:text-white tracking-tight mb-2 sm:mb-3">
            CLIENT <span className="gold-text-gradient">TRANSFORMATIONS</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
            Real members who achieved extraordinary results with Muscle Fitness Gym coaching.
          </p>
        </div>

        {/* 3 Visual Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-10 sm:mb-12">
          {transformations.map((t, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white dark:bg-[#0f0f18] border border-neutral-200 dark:border-[#d4af37]/25 hover:border-[#d4af37]/60 overflow-hidden shadow-lg dark:shadow-xl flex flex-col justify-between group transition-all"
            >
              <div>
                {/* Member Photo */}
                <div className="relative h-44 sm:h-48 lg:h-44 xl:h-48 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0f0f18] via-transparent to-transparent" />
                  
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#d4af37]/40 text-[10px] font-mono text-[#f3e5ab] font-bold shadow-sm">
                    {t.tag}
                  </span>
                </div>

                <div className="p-4 sm:p-6">
                  {/* Results highlight box */}
                  <div className="p-3 rounded-xl bg-neutral-50 dark:bg-[#141420] border border-neutral-200 dark:border-white/5 mb-3 sm:mb-4">
                    <div className="font-serif font-black text-emerald-600 dark:text-[#10b981] text-xs sm:text-sm">
                      {t.result}
                    </div>
                    <div className="text-[11px] sm:text-xs font-mono text-[#b8860b] dark:text-[#f3e5ab] mt-0.5 font-bold">
                      {t.stats}
                    </div>
                  </div>

                  <p className="text-xs text-neutral-600 dark:text-neutral-300 italic mb-3 sm:mb-4 leading-relaxed font-light">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              </div>

              <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-3 border-t border-neutral-100 dark:border-white/5 flex items-center justify-between">
                <div>
                  <div className="font-serif font-black text-neutral-900 dark:text-white text-xs sm:text-sm">
                    {t.name}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-neutral-500 dark:text-neutral-400 font-mono">
                    {t.role}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[#d4af37]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating Badge Strip */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-[#12121a] border border-neutral-200 dark:border-[#d4af37]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-md">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-serif font-black text-[#b8860b] dark:text-[#f3e5ab]">5.0 ★</span>
            <div className="text-xs text-neutral-700 dark:text-neutral-300">
              5.0 Star Google Rating across 50+ Verified Reviews • Kadma, Jamshedpur
            </div>
          </div>
          <button
            onClick={() => onOpenApplication ? onOpenApplication('pro') : document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-5 py-3 sm:py-2.5 rounded-xl bg-[#d4af37] hover:bg-[#f3e5ab] text-black font-black text-xs uppercase tracking-wider transition-all active:scale-95 shadow-md text-center"
          >
            Start Your Transformation
          </button>
        </div>

      </div>
    </section>
  );
}
