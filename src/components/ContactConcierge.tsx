'use client';

import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Car, Dumbbell, 
  CheckCircle, ChevronDown, ChevronUp, Flame, Sparkles 
} from 'lucide-react';
import { FAQS } from '@/data/gymData';

interface ContactConciergeProps {
  onShowToast: (message: string) => void;
}

export default function ContactConcierge({ onShowToast }: ContactConciergeProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'hypertrophy',
    preferredTier: 'pro',
  });

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      onShowToast('Please provide your name and phone number to claim your pass.');
      return;
    }
    setFormSubmitted(true);
    onShowToast(`Free Day Pass issued for ${formData.name}! Check your SMS.`);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#f8f9fc] dark:bg-[#09090e] border-t border-neutral-200 dark:border-[#d4af37]/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#161622] border border-[#d4af37]/40 text-xs font-mono uppercase tracking-widest text-[#b8860b] dark:text-[#d4af37] mb-3 shadow-sm">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>Visit Us</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-black text-neutral-900 dark:text-white tracking-tight mb-2 sm:mb-3">
            CLAIM YOUR FREE <span className="gold-text-gradient">1-DAY VIP PASS</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
            Full access to gym floor, heavy free weights, steam & dry sauna. Zero obligation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 mb-12 sm:mb-16">
          
          {/* Gym Location Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            <div className="p-5 sm:p-7 rounded-3xl bg-white dark:bg-[#0f0f18] border border-neutral-200 dark:border-[#d4af37]/30 shadow-lg dark:shadow-xl">
              <span className="text-[10px] font-mono uppercase text-[#b8860b] dark:text-[#d4af37] font-bold">
                Kadma Facility
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-black text-neutral-900 dark:text-white mt-1 mb-4">
                Muscle Fitness Gym
              </h3>
              
              <div className="space-y-3.5 text-xs text-neutral-700 dark:text-neutral-300">
                <a 
                  href="https://maps.google.com/?q=Muscle+Fitness+Gym+Shani+Mandir+Shiv+Nagar+Bhatia+Basti+Kadma+Jamshedpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-[#b8860b] dark:hover:text-[#d4af37] group cursor-pointer transition-colors"
                  title="Open location on Google Maps"
                >
                  <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="text-neutral-900 dark:text-white font-bold group-hover:underline">Shiv Nagar, Bhatia Basti, Kadma</span>
                    <p className="text-neutral-500 dark:text-neutral-400 mt-0.5">Shani Mandir, near ECC Flats, Uliyan, Kadma, Jamshedpur - 831005 (Plus Code: R542+MP)</p>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-[#b8860b] dark:text-[#d4af37] mt-1.5 underline">
                      Get Google Maps Directions →
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-3 pt-1">
                  <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-900 dark:text-white font-bold">Gym Hours</span>
                    <p className="text-emerald-600 dark:text-[#10b981] font-semibold mt-0.5">Open 6:30 AM – 10:00 PM Daily</p>
                    <p className="text-neutral-500 dark:text-neutral-400">Owner &amp; Head Coach: Amit Kumar</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-neutral-900 dark:text-white font-bold">Payments &amp; Amenities</span>
                    <p className="text-neutral-500 dark:text-neutral-400 mt-0.5">Google Pay / UPI Accepted • Restroom • Good for kids</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#11111a] border border-neutral-200 dark:border-white/5 space-y-2.5 text-xs shadow-sm">
              <a 
                href="tel:07004584937" 
                className="flex items-center gap-3 hover:text-[#b8860b] dark:hover:text-[#d4af37] transition-colors group cursor-pointer"
                title="Call 070045 84937"
              >
                <Phone className="w-4 h-4 text-[#d4af37] group-hover:scale-110 transition-transform" />
                <span className="font-mono font-bold text-neutral-900 dark:text-white group-hover:underline">070045 84937 / +91 70045 84937</span>
              </a>
              <a 
                href="mailto:musclefitnessjsr@gmail.com" 
                className="flex items-center gap-3 pt-2 border-t border-neutral-100 dark:border-white/5 hover:text-[#b8860b] dark:hover:text-[#d4af37] transition-colors group cursor-pointer"
                title="Send email"
              >
                <Mail className="w-4 h-4 text-[#d4af37] group-hover:scale-110 transition-transform" />
                <span className="text-neutral-600 dark:text-neutral-300 group-hover:underline">musclefitnessjsr@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Clean 3-Field Pass Generator (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-7 md:p-9 rounded-3xl bg-white dark:bg-[#0f0f18] border-2 border-neutral-300 dark:border-[#d4af37]/35 shadow-xl dark:shadow-2xl">
              {formSubmitted ? (
                <div className="py-8 sm:py-10 text-center space-y-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-50 dark:bg-[#10b981]/20 border-2 border-emerald-500 dark:border-[#10b981] mx-auto flex items-center justify-center text-emerald-600 dark:text-[#10b981]">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-[#10b981]/15 text-emerald-700 dark:text-[#10b981] font-mono text-[11px] sm:text-xs font-bold uppercase">
                    VOUCHER CODE: MF-VIP-PASS
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-black text-neutral-900 dark:text-white">
                    1-DAY PASS READY!
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 text-xs max-w-sm mx-auto">
                    Show this confirmation or your mobile number at the Muscle Fitness Gym front desk to enter today.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-5 py-2 rounded-xl text-xs font-mono uppercase bg-neutral-100 hover:bg-neutral-200 dark:bg-white/10 dark:hover:bg-white/20 text-neutral-800 dark:text-white font-bold"
                  >
                    Generate Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="font-serif text-lg sm:text-2xl font-black text-neutral-900 dark:text-white">
                      GET YOUR 1-DAY PASS INSTANTLY
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      No payment card required. Immediate gym floor access.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-neutral-700 dark:text-neutral-300 mb-1 font-bold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-black/60 border border-neutral-300 dark:border-white/15 focus:border-[#d4af37] focus:outline-none text-neutral-900 dark:text-white text-base sm:text-xs placeholder-neutral-400"
                      />
                    </div>

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
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-black/60 border border-neutral-300 dark:border-white/15 focus:border-[#d4af37] focus:outline-none text-neutral-900 dark:text-white text-base sm:text-xs placeholder-neutral-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-neutral-700 dark:text-neutral-300 mb-1 font-bold">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rahul@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-black/60 border border-neutral-300 dark:border-white/15 focus:border-[#d4af37] focus:outline-none text-neutral-900 dark:text-white text-base sm:text-xs placeholder-neutral-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-neutral-700 dark:text-neutral-300 mb-1 font-bold">
                        Primary Goal
                      </label>
                      <div className="relative">
                        <select
                          value={formData.goal}
                          onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-black/60 border border-neutral-300 dark:border-white/15 focus:border-[#d4af37] focus:outline-none text-neutral-900 dark:text-white text-base sm:text-xs appearance-none pr-10 cursor-pointer"
                        >
                          <option value="hypertrophy" className="bg-white dark:bg-[#12121a] text-neutral-900 dark:text-white">Muscle Hypertrophy &amp; Strength</option>
                          <option value="fatloss" className="bg-white dark:bg-[#12121a] text-neutral-900 dark:text-white">Fat Loss &amp; Conditioning</option>
                          <option value="general" className="bg-white dark:bg-[#12121a] text-neutral-900 dark:text-white">Fitness &amp; Energy</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#d4af37]">
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-xs uppercase tracking-wider font-black bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa820a] text-black hover:brightness-110 shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all mt-2"
                  >
                    <Flame className="w-4 h-4 fill-current" />
                    <span>Claim Free 1-Day Pass Now</span>
                  </button>
                  <p className="text-[10px] text-center text-neutral-500 font-mono">
                    Instant Voucher • 100% Free • Valid for 14 days
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="max-w-2xl mx-auto pt-4">
          <div className="text-center mb-8">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-1">
              QUESTIONS & ANSWERS
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.slice(0, 4).map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-[#0e0e16] border border-neutral-200 dark:border-white/10 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-semibold text-neutral-900 dark:text-white text-xs sm:text-sm"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#d4af37] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-neutral-400 dark:text-neutral-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed border-t border-neutral-100 dark:border-white/5 pt-2">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
