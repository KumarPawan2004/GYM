'use client';

import React from 'react';
import { ArrowRight, Flame, Dumbbell, Shield, Award, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenApplication: (planId?: string) => void;
}

export default function Hero({ onOpenApplication }: HeroProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15 dark:opacity-30 mix-blend-luminosity scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8f9fc] via-[#f8f9fc]/85 to-[#f8f9fc]/50 dark:from-[#070709] dark:via-[#070709]/80 dark:to-[#070709]/50 transition-colors duration-300" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#d4af37]/10 dark:bg-[#d4af37]/15 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
          
          {/* Left Text & CTA (7 cols) */}
          <div className="lg:col-span-7">
            {/* Quick Badge */}
            <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white dark:bg-[#161622] border border-[#d4af37]/30 dark:border-[#d4af37]/40 text-xs mb-5 sm:mb-6 shadow-sm dark:shadow-md max-w-full">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping shrink-0" />
              <span className="text-[#b8860b] dark:text-[#f3e5ab] font-mono font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">
                Shiv Nagar, Kadma • Jamshedpur
              </span>
              <span className="text-neutral-400 dark:text-neutral-500 hidden xs:inline">•</span>
              <span className="text-neutral-800 dark:text-white font-semibold text-[10px] sm:text-[11px] flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-[#d4af37] fill-current shrink-0" />
                Open 6:30 AM – 10 PM
              </span>
              <span className="text-neutral-400 dark:text-neutral-500 hidden sm:inline">•</span>
              <span className="text-[#b8860b] dark:text-[#d4af37] font-bold text-[10px] sm:text-[11px] hidden sm:inline">
                5.0 ★ Rating
              </span>
            </div>

            {/* Big Impact Headline */}
            <h1 className="font-serif text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-neutral-900 dark:text-white tracking-tight leading-[1.08] mb-4 sm:mb-5 break-words">
              MUSCLE FITNESS <br />
              <span className="gold-text-gradient">GYM JAMSHEDPUR</span>
            </h1>

            {/* Crisp 2-line Subtitle */}
            <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-base md:text-lg max-w-xl mb-6 sm:mb-8 leading-relaxed font-normal">
              Premier fitness destination at Shiv Nagar, Bhatia Basti, Kadma. Coached by Amit Kumar with imported heavy iron, specialized machines, and genuine 5.0 ★ Google community reviews.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <button
                onClick={() => onOpenApplication()}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-black text-xs sm:text-sm tracking-wider uppercase bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa820a] text-black hover:brightness-110 shadow-[0_0_30px_rgba(212,175,55,0.4)] active:scale-95 transition-all flex items-center justify-center gap-2.5"
              >
                <Flame className="w-4 h-4 fill-current shrink-0" />
                <span>Claim Free 1-Day Pass</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                onClick={() => scrollToSection('offers')}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase text-neutral-800 dark:text-white border-2 border-neutral-300 dark:border-white/20 hover:border-[#d4af37] bg-black/[0.03] dark:bg-white/[0.03] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-center transition-all"
              >
                View Plans
              </button>
            </div>

            {/* Quick Feature Tickers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-5 sm:pt-6 border-t border-neutral-200 dark:border-white/10">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-neutral-700 dark:text-neutral-300 min-w-0">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4af37] shrink-0" />
                <span className="truncate">25,000 Sq. Ft.</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-neutral-700 dark:text-neutral-300 min-w-0">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4af37] shrink-0" />
                <span className="truncate">Up to 150 lbs</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-neutral-700 dark:text-neutral-300 min-w-0">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4af37] shrink-0" />
                <span className="truncate">Arsenal Rigs</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-neutral-700 dark:text-neutral-300 min-w-0">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#d4af37] shrink-0" />
                <span className="truncate">Steam & Sauna</span>
              </div>
            </div>
          </div>

          {/* Right Visual Image Showcase (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-3.5 mt-6 lg:mt-0">
            {/* Main Featured Gym Photo */}
            <div className="col-span-2 relative h-48 sm:h-60 md:h-64 lg:h-52 xl:h-64 rounded-2xl overflow-hidden border border-[#d4af37]/40 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=900&auto=format&fit=crop"
                alt="Muscle Fitness Gym Floor"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                <span className="font-bold text-white font-serif text-[11px] sm:text-xs truncate mr-2">Arsenal Strength & Free Weights</span>
                <span className="px-2 py-0.5 rounded bg-[#d4af37] text-black font-mono font-bold text-[9px] sm:text-[10px] shrink-0">Level 1</span>
              </div>
            </div>

            {/* Sub Photo 1: Heavy Dumbbells */}
            <div className="relative h-32 sm:h-36 md:h-40 lg:h-32 xl:h-40 rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/10 shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop"
                alt="Heavy Calibrated Weights"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-2 left-2 sm:bottom-2.5 sm:left-2.5 text-[10px] sm:text-[11px] font-bold text-neutral-200">
                Eleiko Calibrated Iron
              </span>
            </div>

            {/* Sub Photo 2: Luxury Sauna */}
            <div className="relative h-32 sm:h-36 md:h-40 lg:h-32 xl:h-40 rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/10 shadow-sm group">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop"
                alt="Post-Workout Sauna & Steam"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute bottom-2 left-2 sm:bottom-2.5 sm:left-2.5 text-[10px] sm:text-[11px] font-bold text-neutral-200">
                Cedarwood Sauna
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
