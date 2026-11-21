'use client';

import React from 'react';
import { Dumbbell, ShieldCheck, CreditCard, Users, ArrowRight } from 'lucide-react';
import { TRAINERS } from '@/data/gymData';

interface AboutUsProps {
  onOpenApplication: () => void;
}

export default function AboutUs({ onOpenApplication }: AboutUsProps) {
  const gymStandards = [
    { icon: Dumbbell, title: 'Modern Strength & Free Weights', desc: 'Dumbbells, Olympic plates, power racks, and cardio machines.' },
    { icon: ShieldCheck, title: 'Clean Restroom Facilities', desc: 'Hygienic restrooms and well-maintained equipment daily.' },
    { icon: CreditCard, title: 'Google Pay & UPI Payments', desc: 'Easy contactless digital payments with zero transaction hassle.' },
    { icon: Users, title: 'Welcoming For Adults & Kids', desc: 'Friendly, motivating, and safe training environment for all ages.' },
  ];

  return (
    <section id="about" className="relative py-24 bg-[#f0f2f7] dark:bg-[#09090e] border-t border-neutral-200 dark:border-[#d4af37]/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Story Section - Visual Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center mb-16 sm:mb-20">
          
          {/* Image (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#d4af37]/40 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop"
                alt="Gym Owner Amit Kumar"
                className="w-full h-72 sm:h-96 lg:h-[430px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5">
                <span className="text-[10px] font-mono text-[#f3e5ab] uppercase font-bold tracking-wider">
                  Gym Owner & Head Strength Coach
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-black text-white">
                  Amit Kumar
                </h3>
                <p className="text-xs text-neutral-300 mt-1">
                  Founder · Certified Strength Coach · Kadma, Jamshedpur
                </p>
              </div>
            </div>
          </div>

          {/* Text (7 cols) - Clean & Concise */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#161622] border border-[#d4af37]/40 text-xs font-mono uppercase tracking-widest text-[#b8860b] dark:text-[#d4af37] mb-3 shadow-sm">
              <Dumbbell className="w-3.5 h-3.5" />
              <span>The Muscle Fitness Story</span>
            </div>
            
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-black text-neutral-900 dark:text-white tracking-tight leading-tight mb-4">
              BUILT FOR THOSE WHO <br className="hidden sm:inline" />
              <span className="gold-text-gradient">TAKE TRAINING SERIOUSLY</span>
            </h2>

            <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-normal">
              Muscle Fitness Gym was founded by Coach Amit Kumar in Shiv Nagar, Bhatia Basti, Kadma to bring authentic strength training, bodybuilding mechanics, and dedicated body transformation coaching to Jamshedpur.
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5 mb-8">
              {gymStandards.map((std, idx) => {
                const Icon = std.icon;
                return (
                  <div key={idx} className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-[#12121a] border border-neutral-200 dark:border-white/5 flex items-start gap-3 shadow-sm">
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-[#1a1a26] border border-[#d4af37]/40 flex items-center justify-center text-[#b8860b] dark:text-[#d4af37] shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-neutral-900 dark:text-white mb-0.5">{std.title}</h4>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-snug">{std.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={onOpenApplication}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#d4af37] hover:bg-[#f3e5ab] text-black font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Claim Free 1-Day Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-neutral-300 dark:border-white/20 hover:border-[#d4af37] text-neutral-800 dark:text-white font-bold text-xs uppercase tracking-wider transition-all hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer text-center"
              >
                <span>View Location &amp; Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Coaches Cards */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white mb-2">
              MEET OUR <span className="gold-text-gradient">COACHING STAFF</span>
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Certified master trainers with proven client transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {TRAINERS.map((trainer, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white dark:bg-[#0f0f18] border border-neutral-200 dark:border-white/10 overflow-hidden shadow-sm dark:shadow-lg group hover:border-[#d4af37]/50 transition-all"
              >
                <div className="h-48 sm:h-56 lg:h-48 xl:h-56 w-full overflow-hidden bg-neutral-900 relative">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0f0f18] via-transparent to-transparent" />
                </div>
                <div className="p-3.5 sm:p-4">
                  <div className="text-[10px] font-mono text-[#b8860b] dark:text-[#d4af37] uppercase font-bold mb-0.5">
                    {trainer.role}
                  </div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-neutral-900 dark:text-white mb-2">
                    {trainer.name}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {trainer.specialty.slice(0, 2).map((s, i) => (
                      <span key={i} className="text-[9px] px-2 py-0.5 rounded bg-neutral-100 dark:bg-black/60 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/10 font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
