'use client';

import React, { useState } from 'react';
import { Check, Flame, ArrowRight, Dumbbell, Sparkles, Sliders, ChevronDown, ChevronUp } from 'lucide-react';
import { MEMBERSHIP_TIERS } from '@/data/gymData';

interface OffersProps {
  onSelectTier: (tierId: string) => void;
}

export default function Offers({ onSelectTier }: OffersProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'quarterly' | 'annual'>('annual');
  const [showComparison, setShowComparison] = useState(false);
  const [workoutsPerWeek, setWorkoutsPerWeek] = useState(4);

  const comparisonFeatures = [
    { name: '25,000 Sq. Ft. Gym Floor Access', standard: '24/7 Access', pro: '24/7 Access', vip: '24/7 VIP Priority' },
    { name: 'Eleiko Olympic Lifting Platforms', standard: 'Full Access', pro: 'Full Access', vip: 'Reserved Cage Option' },
    { name: 'Arsenal Strength & Hammer Machines', standard: 'Full Access', pro: 'Full Access', vip: 'Full Access' },
    { name: 'Eucalyptus Steam & Finnish Sauna', standard: 'Day Pass Rate', pro: 'Unlimited Access', vip: 'Unlimited + Cold Plunge' },
    { name: '1-on-1 Personal Training Sessions', standard: 'Discounted Add-on', pro: '2 Sessions / Month', vip: 'Weekly Sessions (4/mo)' },
    { name: 'InBody Clinical Body Comp Scans', standard: 'Every 60 Days', pro: 'Monthly Scan', vip: 'Bi-Weekly + DEXA Sync' },
    { name: 'Customized Macro & Diet Plan', standard: 'Available via App', pro: 'Monthly Custom Plan', vip: 'Continuous Coaching' },
    { name: 'Muscle Fitness Shake & Nutrition Bar', standard: '10% Member Discount', pro: '15% Member Discount', vip: 'Daily Free Shake Included' },
    { name: 'Guest Workout Privileges', standard: '2 Passes / Month', pro: '4 Passes / Month', vip: 'Unlimited Anytime Guests' },
    { name: 'Executive Locker & Shower Suite', standard: 'Day Locker', pro: 'Permanent Locker Option', vip: 'Private VIP Locker Suite' },
  ];

  return (
    <section id="offers" className="relative py-24 bg-[#f0f2f7] dark:bg-[#09090e] border-t border-neutral-200 dark:border-[#d4af37]/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#161622] border border-[#d4af37]/40 text-xs font-mono uppercase tracking-widest text-[#b8860b] dark:text-[#d4af37] mb-3 shadow-sm">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>Membership Plans</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-neutral-900 dark:text-white tracking-tight mb-4">
            CHOOSE YOUR <span className="gold-text-gradient">PASS</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
            Open 6:30 AM – 10:00 PM daily, zero hidden admission fees, and personalized guidance by Coach Amit Kumar.
          </p>

          {/* 3-Way Billing Switcher - Flex Wrap, No Horizontal Scroll */}
          <div className="mt-6 inline-flex flex-wrap justify-center p-1.5 rounded-2xl sm:rounded-full bg-white dark:bg-[#12121a] border border-neutral-300 dark:border-[#d4af37]/40 shadow-sm dark:shadow-inner items-center gap-1 sm:gap-1.5">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-3.5 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                billingCycle === 'monthly' ? 'bg-[#d4af37] text-black shadow-md font-black' : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
              }`}
            >
              1 Month
            </button>
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`px-3.5 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                billingCycle === 'quarterly' ? 'bg-[#d4af37] text-black shadow-md font-black' : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
              }`}
            >
              3 Months
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`flex items-center gap-2 px-3.5 sm:px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                billingCycle === 'annual' ? 'bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa820a] text-black shadow-md font-black' : 'text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white'
              }`}
            >
              <span>12 Months</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold leading-none shrink-0 ${
                billingCycle === 'annual' ? 'bg-black/80 text-[#f3e5ab]' : 'bg-[#d4af37]/20 text-[#b8860b] dark:text-[#d4af37]'
              }`}>
                Save 25%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch mb-12">
          {MEMBERSHIP_TIERS.map((tier) => {
            let price = tier.annualPrice;
            let cycleText = 'Billed annually';
            if (billingCycle === 'monthly') {
              price = tier.monthlyPrice;
              cycleText = 'Billed monthly (no lock-in)';
            } else if (billingCycle === 'quarterly') {
              price = Math.round(tier.quarterlyPrice / 3);
              cycleText = 'Billed quarterly ($' + tier.quarterlyPrice + ')';
            }

            const isPro = tier.popular;
            const isVip = tier.vip;

            return (
              <div
                key={tier.id}
                className={`relative rounded-3xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                  isPro
                    ? 'bg-gradient-to-b from-[#fffef9] to-[#fbf8ed] dark:from-[#181826] dark:to-[#0f0f18] border-2 border-[#d4af37] shadow-[0_10px_35px_rgba(212,175,55,0.2)] dark:shadow-[0_0_35px_rgba(212,175,55,0.3)] md:-translate-y-2'
                    : isVip
                    ? 'bg-white dark:bg-gradient-to-b dark:from-[#13131c] dark:to-[#09090e] border border-neutral-300 dark:border-white/20 shadow-md dark:shadow-none'
                    : 'bg-white dark:bg-[#0f0f16] border border-neutral-200 dark:border-[#d4af37]/25 hover:border-[#d4af37]/60 shadow-md dark:shadow-none'
                }`}
              >
                {isPro && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa820a] text-black text-[10px] font-mono uppercase tracking-wider font-black shadow-md flex items-center gap-1">
                    <Flame className="w-3 h-3 fill-current" />
                    <span>Most Popular</span>
                  </div>
                )}

                {isVip && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-neutral-900 border border-[#d4af37]/50 text-[#f3e5ab] text-[10px] font-mono uppercase tracking-wider font-bold flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3 text-[#d4af37]" />
                    <span>VIP Coaching Suite</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#b8860b] dark:text-[#d4af37] font-bold">
                      {tier.badge}
                    </span>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300">
                      24/7 Access
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-black text-neutral-900 dark:text-white mb-1">
                    {tier.name}
                  </h3>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-6">
                    {tier.tagline}
                  </p>

                  {/* Price */}
                  <div className="mb-6 p-4 rounded-2xl bg-neutral-50 dark:bg-black/50 border border-neutral-200 dark:border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm font-mono text-[#b8860b] dark:text-[#d4af37] font-bold">$</span>
                      <span className="font-serif text-4xl font-black text-neutral-900 dark:text-white">{price}</span>
                      <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">/ month</span>
                    </div>
                    <div className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-1 font-mono">{cycleText}</div>
                  </div>

                  {/* Clean Feature List */}
                  <div className="space-y-2.5 mb-8">
                    {tier.features.slice(0, 5).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                        <div className="w-4 h-4 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/60 flex items-center justify-center shrink-0 text-[#b8860b] dark:text-[#d4af37]">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectTier(tier.id)}
                  className={`w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-black flex items-center justify-center gap-2 transition-all active:scale-95 ${
                    isPro
                      ? 'bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa820a] text-black hover:brightness-110 shadow-lg'
                      : isVip
                      ? 'bg-neutral-900 hover:bg-[#d4af37] text-white hover:text-black border border-neutral-800 dark:border-white/20 dark:bg-neutral-800'
                      : 'bg-neutral-100 hover:bg-[#d4af37] text-neutral-900 hover:text-black border border-neutral-300 dark:border-[#d4af37]/40 dark:bg-white/5 dark:text-white'
                  }`}
                >
                  <span>{isVip ? 'Join VIP Black' : 'Join Muscle Fitness'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Training Volume Calculator */}
        <div className="p-5 sm:p-7 rounded-3xl bg-white dark:bg-[#111118] border border-neutral-200 dark:border-[#d4af37]/30 mb-8 shadow-lg dark:shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#b8860b] dark:text-[#d4af37] font-bold">
                <Sliders className="w-3.5 h-3.5" />
                <span>Workout Value Calculator</span>
              </div>
              <h3 className="font-serif text-base sm:text-xl font-bold text-neutral-900 dark:text-white mt-1">
                How often will you train at Muscle Fitness Gym?
              </h3>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-neutral-100 dark:bg-[#1b1b26] border border-neutral-300 dark:border-[#d4af37]/40 text-[#b8860b] dark:text-[#f3e5ab] font-bold font-mono text-xs sm:text-sm self-start sm:self-auto">
              {workoutsPerWeek} Days / Week
            </div>
          </div>

          <input
            type="range"
            min={2}
            max={6}
            step={1}
            value={workoutsPerWeek}
            onChange={(e) => setWorkoutsPerWeek(Number(e.target.value))}
            className="w-full h-2.5 bg-neutral-200 dark:bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#d4af37] mb-4"
          />

          <div className="grid grid-cols-3 gap-2 sm:gap-3 text-center">
            <div className="p-2.5 sm:p-3 rounded-xl bg-neutral-50 dark:bg-black/40 border border-neutral-200 dark:border-white/5">
              <div className="text-[9px] sm:text-[10px] uppercase font-mono text-neutral-500 dark:text-neutral-400">Monthly Sessions</div>
              <div className="font-serif text-base sm:text-2xl font-black text-neutral-900 dark:text-[#f3e5ab] mt-0.5">
                {workoutsPerWeek * 4} <span className="text-[11px] sm:text-sm font-normal">Workouts</span>
              </div>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-neutral-50 dark:bg-black/40 border border-neutral-200 dark:border-white/5">
              <div className="text-[9px] sm:text-[10px] uppercase font-mono text-neutral-500 dark:text-neutral-400">Cost / Workout</div>
              <div className="font-serif text-base sm:text-2xl font-black text-emerald-600 dark:text-[#10b981] mt-0.5">
                ${(180 / (workoutsPerWeek * 4)).toFixed(1)}
              </div>
            </div>
            <div className="p-2.5 sm:p-3 rounded-xl bg-neutral-50 dark:bg-black/40 border border-neutral-200 dark:border-white/5">
              <div className="text-[9px] sm:text-[10px] uppercase font-mono text-neutral-500 dark:text-neutral-400">Best Match</div>
              <div className="font-serif text-sm sm:text-xl font-black text-[#b8860b] dark:text-[#d4af37] mt-0.5 truncate">
                {workoutsPerWeek >= 5 ? 'VIP Black' : 'Muscle Fitness Pro'}
              </div>
            </div>
          </div>
        </div>

        {/* Feature Comparison Drawer */}
        <div className="text-center mb-6">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#b8860b] dark:text-[#d4af37] hover:text-[#d4af37] dark:hover:text-[#f3e5ab] py-2 px-5 rounded-full border border-neutral-300 dark:border-[#d4af37]/40 hover:border-[#d4af37] bg-white dark:bg-transparent shadow-sm transition-all"
          >
            <span>{showComparison ? 'Hide Plan Comparison' : 'Compare All Plans Side-by-Side'}</span>
            {showComparison ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Comparison Table / Mobile Cards */}
        {showComparison && (
          <div className="mb-8">
            {/* Desktop / Tablet Table View (No forced overflow) */}
            <div className="hidden sm:block rounded-2xl border border-neutral-200 dark:border-[#d4af37]/30 bg-white dark:bg-[#0d0d14] p-4 shadow-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-neutral-200 dark:border-white/10 text-neutral-500 dark:text-neutral-400 font-mono uppercase tracking-wider text-[11px]">
                    <th className="py-3 px-3">Gym Privilege</th>
                    <th className="py-3 px-3 text-neutral-900 dark:text-white">Iron Standard</th>
                    <th className="py-3 px-3 text-[#b8860b] dark:text-[#d4af37] font-bold">Muscle Fitness Pro</th>
                    <th className="py-3 px-3 text-[#aa820a] dark:text-[#f3e5ab] font-bold">Elite Black VIP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-white/5 text-neutral-700 dark:text-neutral-300">
                  {comparisonFeatures.map((row, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50 dark:hover:bg-white/[0.02]">
                      <td className="py-2.5 px-3 font-semibold text-neutral-900 dark:text-white">{row.name}</td>
                      <td className="py-2.5 px-3">{row.standard}</td>
                      <td className="py-2.5 px-3 text-[#b8860b] dark:text-[#d4af37] font-medium">{row.pro}</td>
                      <td className="py-2.5 px-3 text-[#aa820a] dark:text-[#f3e5ab] font-bold">{row.vip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Stacked Feature Cards (Zero Horizontal Scroll) */}
            <div className="sm:hidden space-y-3">
              {comparisonFeatures.map((row, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-white dark:bg-[#0d0d14] border border-neutral-200 dark:border-[#d4af37]/30 shadow-sm">
                  <div className="font-bold text-xs text-neutral-900 dark:text-white mb-2 pb-1.5 border-b border-neutral-100 dark:border-white/10">
                    {row.name}
                  </div>
                  <div className="grid grid-cols-3 gap-1.5 text-[11px] font-mono text-center">
                    <div className="p-1.5 rounded-lg bg-neutral-100 dark:bg-white/5">
                      <span className="text-[9px] text-neutral-500 dark:text-neutral-400 block uppercase">Standard</span>
                      <span className="font-bold text-neutral-800 dark:text-neutral-200">{row.standard}</span>
                    </div>
                    <div className="p-1.5 rounded-lg bg-[#d4af37]/10 dark:bg-[#d4af37]/15 border border-[#d4af37]/30">
                      <span className="text-[9px] text-[#b8860b] dark:text-[#d4af37] block uppercase font-bold">Pro</span>
                      <span className="font-black text-[#b8860b] dark:text-[#d4af37]">{row.pro}</span>
                    </div>
                    <div className="p-1.5 rounded-lg bg-neutral-900 dark:bg-black text-[#f3e5ab] border border-[#d4af37]/40">
                      <span className="text-[9px] text-neutral-400 block uppercase">VIP</span>
                      <span className="font-black text-[#f3e5ab]">{row.vip}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
            Want to test Muscle Fitness Gym first? Claim our 100% free <a href="#contact" className="text-[#b8860b] dark:text-[#d4af37] font-bold underline">1-Day VIP Trial Pass</a>.
          </p>
        </div>

      </div>
    </section>
  );
}
