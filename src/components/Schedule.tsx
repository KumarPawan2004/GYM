'use client';

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Dumbbell, Filter, Flame } from 'lucide-react';
import { MASTER_SCHEDULE, SCHEDULE_DAYS, ClassSession } from '@/data/gymData';

interface ScheduleProps {
  onReserveSession: (session: ClassSession) => void;
}

export default function Schedule({ onReserveSession }: ScheduleProps) {
  const [activeDay, setActiveDay] = useState<string>('Monday');
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Strength', 'Conditioning', 'Hypertrophy', 'Boxing & Combat', 'Mobility'];

  const dailySessions = MASTER_SCHEDULE[activeDay] || [];

  const filteredSessions = activeFilter === 'All'
    ? dailySessions
    : dailySessions.filter((s) => s.category === activeFilter);

  return (
    <section id="schedule" className="relative py-28 bg-[#f8f9fc] dark:bg-[#070709] border-t border-neutral-200 dark:border-[#d4af37]/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-5 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#161622] border border-[#d4af37]/40 text-xs font-mono uppercase tracking-widest text-[#b8860b] dark:text-[#d4af37] mb-3 sm:mb-4 shadow-sm">
              <Calendar className="w-3.5 h-3.5" />
              <span>Muscle Fitness Workout Timetable</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-black text-neutral-900 dark:text-white tracking-tight">
              WEEKLY WORKOUTS & <span className="gold-text-gradient">LIFTING CLINICS</span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm md:text-base mt-2 sm:mt-3 leading-relaxed">
              Included in Pro and VIP memberships. Join guided heavy lifting clinics, high-intensity turf conditioning, 
              and boxing sessions coached by our senior faculty.
            </p>
          </div>

          <div className="text-xs font-mono text-neutral-700 dark:text-neutral-300 p-3 sm:p-3.5 rounded-xl bg-white dark:bg-[#12121a] border border-neutral-200 dark:border-[#d4af37]/30 shrink-0 flex items-center gap-2 self-start md:self-auto shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-pulse" />
            <span>Floor Status: <strong className="text-neutral-900 dark:text-white">Open 6:30 AM – 10:00 PM</strong></span>
          </div>
        </div>

        {/* Day Selector - Flex Wrap, No Horizontal Scroll */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pb-3 sm:pb-4 mb-6 sm:mb-8 border-b border-neutral-200 dark:border-white/10">
          {SCHEDULE_DAYS.map((day) => {
            const isActive = activeDay === day;
            return (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-xl text-[11px] sm:text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap font-bold ${
                  isActive
                    ? 'bg-[#d4af37] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                    : 'bg-white dark:bg-[#101018] text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-[#161624] border border-neutral-200 dark:border-transparent shadow-sm dark:shadow-none'
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-6 sm:mb-10">
          <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono mr-1 sm:mr-2 flex items-center gap-1.5 font-bold w-full sm:w-auto mb-1 sm:mb-0">
            <Filter className="w-3.5 h-3.5 text-[#d4af37]" /> Filter By Type:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-[11px] sm:text-xs px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full font-bold transition-all ${
                activeFilter === cat
                  ? 'bg-[#d4af37] text-black shadow-md'
                  : 'bg-white dark:bg-black/50 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white border border-neutral-200 dark:border-white/10 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Schedule List Cards */}
        {filteredSessions.length > 0 ? (
          <div className="space-y-3 sm:space-y-4">
            {filteredSessions.map((session) => (
              <div
                key={session.id}
                className="rounded-2xl bg-white dark:bg-[#0f0f18] border border-neutral-200 dark:border-white/10 hover:border-[#d4af37]/50 p-4 sm:p-6 transition-all flex flex-col xl:flex-row xl:items-center justify-between gap-4 sm:gap-6 group hover:bg-neutral-50 dark:hover:bg-[#141422] shadow-sm dark:shadow-lg"
              >
                {/* Time & Title */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 flex-1">
                  <div className="sm:w-32 shrink-0">
                    <div className="text-sm font-mono font-black text-[#b8860b] dark:text-[#f3e5ab] flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#d4af37]" />
                      <span>{session.time}</span>
                    </div>
                    <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 mt-0.5">
                      Duration: {session.duration}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-[#1b1b28] text-[#b8860b] dark:text-[#d4af37] border border-[#d4af37]/30 font-bold">
                        {session.category}
                      </span>
                      <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-md bg-neutral-100 dark:bg-white/10 text-neutral-700 dark:text-neutral-200">
                        {session.intensity}
                      </span>
                    </div>
                    <h3 className="font-serif text-base sm:text-xl font-black text-neutral-900 dark:text-white group-hover:text-[#b8860b] dark:group-hover:text-[#f3e5ab] transition-colors">
                      {session.title}
                    </h3>
                  </div>
                </div>

                {/* Details & CTA */}
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between sm:justify-start gap-4 sm:gap-6 text-xs text-neutral-600 dark:text-neutral-300 pt-3 xl:pt-0 border-t xl:border-t-0 border-neutral-100 dark:border-white/5">
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span className="font-semibold text-neutral-900 dark:text-white">{session.coach}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{session.zone}</span>
                  </div>

                  <button
                    onClick={() => onReserveSession(session)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa820a] hover:brightness-110 text-black font-black text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 text-center shrink-0"
                  >
                    Reserve Spot
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 sm:p-12 text-center rounded-2xl bg-white dark:bg-[#0f0f15] border border-neutral-200 dark:border-white/10 text-neutral-500 dark:text-neutral-400 shadow-sm">
            <p className="text-sm font-mono">No sessions scheduled for this category on {activeDay}.</p>
            <button
              onClick={() => setActiveFilter('All')}
              className="mt-3 text-xs text-[#b8860b] dark:text-[#d4af37] underline font-bold"
            >
              Reset filter
            </button>
          </div>
        )}

        {/* Free Trial Banner */}
        <div className="mt-6 sm:mt-8 p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#12121a] border border-neutral-200 dark:border-[#d4af37]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 text-xs text-neutral-700 dark:text-neutral-300 shadow-md">
          <div className="flex items-center gap-2.5">
            <Flame className="w-5 h-5 text-[#d4af37] shrink-0 fill-current" />
            <span>
              First time visiting Muscle Fitness Gym? Join any of these masterclasses with your <strong className="text-neutral-900 dark:text-white">Complimentary 1-Day Trial Pass</strong>.
            </span>
          </div>
          <a
            href="#contact"
            className="text-[#b8860b] dark:text-[#d4af37] hover:text-[#d4af37] dark:hover:text-[#f3e5ab] font-mono uppercase tracking-wider font-bold text-xs whitespace-nowrap self-end sm:self-auto"
          >
            Claim Free Day Pass →
          </a>
        </div>
      </div>
    </section>
  );
}
