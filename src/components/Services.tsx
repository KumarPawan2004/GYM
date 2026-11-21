'use client';

import React, { useState } from 'react';
import { Dumbbell, Activity, Wind, Flame, Coffee, ArrowUpRight, Check } from 'lucide-react';
import { GYM_AMENITIES } from '@/data/gymData';

interface ServicesProps {
  onInquireService: (serviceTitle: string) => void;
}

export default function Services({ onInquireService }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Zones' },
    { id: 'strength', label: 'Heavy Iron' },
    { id: 'machines', label: 'Arsenal Rigs' },
    { id: 'functional', label: 'Sprint Turf' },
    { id: 'recovery', label: 'Sauna & Steam' },
    { id: 'nutrition', label: 'Fuel Bar' },
  ];

  const filteredAmenities = activeCategory === 'all'
    ? GYM_AMENITIES
    : GYM_AMENITIES.filter((a) => a.category === activeCategory);

  return (
    <section id="services" className="relative py-24 bg-[#f8f9fc] dark:bg-[#070709] border-t border-neutral-200 dark:border-[#d4af37]/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Clean & Punchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#161622] border border-[#d4af37]/40 text-xs font-mono uppercase tracking-widest text-[#b8860b] dark:text-[#d4af37] mb-3 shadow-sm">
              <Dumbbell className="w-3.5 h-3.5" />
              <span>World-Class Equipment</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-black text-neutral-900 dark:text-white tracking-tight">
              GYM FACILITIES AT <span className="gold-text-gradient">MUSCLE FITNESS</span>
            </h2>
          </div>

          {/* Minimal Filter Tabs - No Horizontal Scroll */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-[#d4af37] text-black shadow-md'
                    : 'bg-white dark:bg-[#12121a] text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white border border-neutral-200 dark:border-white/5 shadow-sm'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="rounded-3xl bg-white dark:bg-[#0f0f18] border border-neutral-200 dark:border-[#d4af37]/20 hover:border-[#d4af37]/60 overflow-hidden transition-all duration-300 flex flex-col group shadow-lg dark:shadow-xl hover:-translate-y-1.5"
            >
              {/* Large Image with Highlight Badge */}
              <div className="relative h-48 sm:h-52 lg:h-48 xl:h-56 w-full overflow-hidden bg-neutral-950">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0f0f18] via-transparent to-black/30" />
                
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#d4af37]/50 text-[10px] font-mono tracking-wider text-[#f3e5ab] uppercase font-bold flex items-center gap-1.5 shadow-sm">
                  <Flame className="w-3 h-3 text-[#d4af37] fill-current" />
                  <span>{amenity.highlight}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-black text-neutral-900 dark:text-white mb-2 group-hover:text-[#b8860b] dark:group-hover:text-[#f3e5ab] transition-colors">
                    {amenity.title}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4 sm:mb-5">
                    {amenity.description}
                  </p>

                  {/* Bullet Specs */}
                  <div className="space-y-1.5 mb-5 sm:mb-6 pt-3 border-t border-neutral-100 dark:border-white/5">
                    {amenity.specs.slice(0, 3).map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-700 dark:text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onInquireService(amenity.title)}
                  className="w-full py-2.5 sm:py-3 px-4 rounded-xl bg-neutral-100 dark:bg-white/[0.04] hover:bg-[#d4af37] border border-neutral-300 dark:border-[#d4af37]/30 hover:border-[#d4af37] text-neutral-800 dark:text-neutral-200 hover:text-black transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-between group/btn shadow-sm"
                >
                  <span>Experience This Zone</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
