'use client';

import React, { useState, useEffect } from 'react';
import { X, Dumbbell, Flame, CheckCircle, Sparkles, Copy, Check, ChevronDown } from 'lucide-react';
import { MEMBERSHIP_TIERS } from '@/data/gymData';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlanId?: string;
  onSuccess: (message: string) => void;
}

export default function ApplicationModal({
  isOpen,
  onClose,
  selectedPlanId,
  onSuccess,
}: ApplicationModalProps) {
  const [tier, setTier] = useState(selectedPlanId || 'standard');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    fitnessGoal: 'hypertrophy',
  });

  useEffect(() => {
    if (selectedPlanId) {
      setTier(selectedPlanId);
    }
  }, [selectedPlanId]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setCopied(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      return;
    }
    setSubmitted(true);
    onSuccess(`1-Day VIP Pass issued for ${formData.fullName}! Show your code at the desk.`);
  };

  const copyCode = () => {
    navigator.clipboard?.writeText('MF-PASS-2026');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[999] flex items-center justify-center p-3.5 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#0e0e16] border-2 border-neutral-300 dark:border-[#d4af37]/50 shadow-[0_15px_60px_rgba(0,0,0,0.3)] dark:shadow-[0_0_60px_rgba(212,175,55,0.3)] p-5 sm:p-7 md:p-8 overflow-hidden max-h-[92vh] flex flex-col transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Orb */}
        <div className="absolute -top-16 -right-16 w-52 h-52 bg-[#d4af37]/15 dark:bg-[#d4af37]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-3.5 sm:pb-4 border-b border-neutral-200 dark:border-white/10 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#d4af37] flex items-center justify-center text-black font-black shadow-md shrink-0">
              <Dumbbell className="w-4 h-4 sm:w-5 sm:h-5 -rotate-45" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 font-serif text-base sm:text-lg font-black text-neutral-900 dark:text-white">
                <span>MUSCLE</span>
                <span className="text-[#d4af37]">FITNESS</span>
              </div>
              <p className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                1-Day Free Trial Pass • Kadma, Jamshedpur
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-1.5 sm:p-2 text-neutral-400 hover:text-neutral-800 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto py-3.5 sm:py-4 flex-1">
          {submitted ? (
            /* Instant Voucher Card */
            <div className="py-4 sm:py-6 text-center space-y-3 sm:space-y-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-50 dark:bg-[#10b981]/20 border-2 border-emerald-500 dark:border-[#10b981] mx-auto flex items-center justify-center text-emerald-600 dark:text-[#10b981]">
                <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#b8860b] dark:text-[#d4af37] font-bold">
                  Official Guest Pass
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-black text-neutral-900 dark:text-white mt-1">
                  YOU&apos;RE ALL SET, {formData.fullName.toUpperCase()}!
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1 max-w-sm mx-auto">
                  Your 1-Day Free VIP Pass has been activated. Show this voucher or provide your phone number at our reception.
                </p>
              </div>

              {/* Pass Voucher Ticket */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-50 dark:bg-gradient-to-br dark:from-[#1a1a28] dark:to-[#101018] border-2 border-[#d4af37] text-left relative overflow-hidden shadow-lg dark:shadow-2xl">
                <div className="flex items-center justify-between border-b border-neutral-200 dark:border-white/10 pb-2.5 mb-2.5">
                  <div>
                    <div className="text-[9px] sm:text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase">Pass Type</div>
                    <div className="font-serif font-black text-xs sm:text-sm text-[#b8860b] dark:text-[#f3e5ab]">1-DAY VIP TRIAL PASS</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] sm:text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase">Status</div>
                    <div className="text-xs font-bold text-emerald-600 dark:text-[#10b981]">ACTIVE &amp; READY</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-neutral-500 dark:text-neutral-400 font-mono">Member:</span>
                    <p className="font-bold text-neutral-900 dark:text-white truncate text-xs">{formData.fullName}</p>
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-neutral-500 dark:text-neutral-400 font-mono">Mobile:</span>
                    <p className="font-bold text-neutral-900 dark:text-white truncate text-xs">{formData.phone}</p>
                  </div>
                </div>

                {/* Voucher Code Box */}
                <div className="p-2 sm:p-2.5 rounded-xl bg-white dark:bg-black/60 border border-neutral-300 dark:border-[#d4af37]/40 flex items-center justify-between shadow-sm">
                  <div>
                    <div className="text-[8px] sm:text-[9px] font-mono text-neutral-500 dark:text-neutral-400 uppercase">Voucher Code</div>
                    <div className="font-mono font-black text-xs sm:text-sm text-[#b8860b] dark:text-[#d4af37]">MF-PASS-2026</div>
                  </div>
                  <button
                    type="button"
                    onClick={copyCode}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-neutral-100 hover:bg-[#d4af37] text-neutral-800 hover:text-black dark:bg-white/10 dark:text-white text-[10px] sm:text-[11px] font-mono uppercase font-bold transition-all flex items-center gap-1 shadow-sm"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#10b981]" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa820a] text-black font-black text-xs uppercase tracking-wider shadow-lg active:scale-95 transition-all"
                >
                  Done &amp; Close
                </button>
              </div>
            </div>
          ) : (
            /* Pass Request Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono uppercase text-neutral-700 dark:text-neutral-300 mb-2 font-bold">
                  Select Desired Pass / Plan:
                </label>
                
                {/* Spacious un-truncated plan picker */}
                <div className="space-y-2">
                  {MEMBERSHIP_TIERS.map((item) => {
                    const isSelected = tier === item.id;
                    return (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setTier(item.id)}
                        className={`w-full p-2.5 sm:p-3 rounded-2xl flex items-center justify-between border transition-all text-left ${
                          isSelected
                            ? 'border-[#d4af37] bg-[#fdfbf3] dark:bg-gradient-to-r dark:from-[#1c1c2b] dark:to-[#13131e] shadow-[0_0_15px_rgba(212,175,55,0.2)] ring-1 ring-[#d4af37]'
                            : 'border-neutral-200 dark:border-white/10 bg-neutral-50 dark:bg-[#09090e] hover:border-neutral-300 dark:hover:border-white/25'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                            isSelected ? 'border-[#d4af37] bg-[#d4af37]' : 'border-neutral-400 dark:border-neutral-600'
                          }`}>
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                              <span className="font-serif text-xs sm:text-sm font-bold text-neutral-900 dark:text-white whitespace-nowrap">
                                {item.name}
                              </span>
                              {item.popular && (
                                <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#d4af37] text-black font-mono font-black uppercase tracking-wider">
                                  Popular
                                </span>
                              )}
                              {item.vip && (
                                <span className="text-[9px] px-2 py-0.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-[#f3e5ab] border border-neutral-300 dark:border-[#d4af37]/40 font-mono font-bold uppercase tracking-wider">
                                  VIP Suite
                                </span>
                              )}
                            </div>
                            <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-mono block mt-0.5 truncate">
                              {item.tagline}
                            </span>
                          </div>
                        </div>

                        <div className="text-right shrink-0 pl-3">
                          <span className="font-serif text-sm sm:text-base font-black text-[#b8860b] dark:text-[#f3e5ab]">
                            ${item.annualPrice}
                          </span>
                          <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-mono font-normal">/mo</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3 pt-1">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-neutral-700 dark:text-neutral-300 mb-1 font-bold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Vikram Malhotra"
                    className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-neutral-50 dark:bg-black/60 border border-neutral-300 dark:border-white/15 focus:border-[#d4af37] focus:outline-none text-neutral-900 dark:text-white text-base sm:text-xs transition-colors placeholder-neutral-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono uppercase text-neutral-700 dark:text-neutral-300 mb-1 font-bold">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-neutral-50 dark:bg-black/60 border border-neutral-300 dark:border-white/15 focus:border-[#d4af37] focus:outline-none text-neutral-900 dark:text-white text-base sm:text-xs transition-colors placeholder-neutral-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-neutral-700 dark:text-neutral-300 mb-1 font-bold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@mail.com"
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-neutral-50 dark:bg-black/60 border border-neutral-300 dark:border-white/15 focus:border-[#d4af37] focus:outline-none text-neutral-900 dark:text-white text-base sm:text-xs transition-colors placeholder-neutral-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-neutral-700 dark:text-neutral-300 mb-1 font-bold">
                    Primary Fitness Focus
                  </label>
                  <div className="relative">
                    <select
                      value={formData.fitnessGoal}
                      onChange={(e) => setFormData({ ...formData, fitnessGoal: e.target.value })}
                      className="w-full px-4 py-2.5 sm:py-3 rounded-xl bg-neutral-50 dark:bg-black/60 border border-neutral-300 dark:border-white/15 focus:border-[#d4af37] focus:outline-none text-neutral-900 dark:text-white text-base sm:text-xs appearance-none pr-10 cursor-pointer transition-colors"
                    >
                      <option value="hypertrophy" className="bg-white dark:bg-[#12121a] text-neutral-900 dark:text-white">Muscle Hypertrophy &amp; Heavy Iron</option>
                      <option value="fatloss" className="bg-white dark:bg-[#12121a] text-neutral-900 dark:text-white">Rapid Fat Loss &amp; Conditioning</option>
                      <option value="fitness" className="bg-white dark:bg-[#12121a] text-neutral-900 dark:text-white">General Fitness &amp; Longevity</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#d4af37]">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa820a] text-black shadow-lg hover:brightness-110 flex items-center justify-center gap-2 active:scale-95 transition-all mt-1"
                >
                  <Flame className="w-4 h-4 fill-current shrink-0" />
                  <span>Generate Free 1-Day Pass</span>
                </button>
                <p className="text-[10px] text-center text-neutral-500 font-mono mt-2">
                  Zero Obligation • Instant Pass Activation • Valid for 14 Days
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
