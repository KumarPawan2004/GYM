'use client';

import React from 'react';
import { Dumbbell, ArrowUp, Phone, Mail, MapPin, Flame } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#ebedf3] dark:bg-[#050507] border-t border-neutral-200 dark:border-[#d4af37]/25 pt-12 sm:pt-14 pb-10 text-neutral-600 dark:text-neutral-400 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-neutral-200 dark:border-white/10">
          
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#d4af37] flex items-center justify-center text-black shadow-md">
                <Dumbbell className="w-5 h-5 -rotate-45" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-xl font-black text-neutral-900 dark:text-white">MUSCLE</span>
                <span className="text-xl font-black text-[#d4af37]">FITNESS</span>
              </div>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xs">
              Premier fitness club at Shiv Nagar, Bhatia Basti, Kadma. Coached by Amit Kumar with modern strength equipment, personal training, and 5.0 ★ Google reviews.
            </p>
            <div className="text-[11px] font-mono text-emerald-600 dark:text-[#10b981] flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
              <span>Open 6:30 AM – 10:00 PM Daily</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#b8860b] dark:text-[#f3e5ab] mb-3 font-bold">
              Quick Links
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#services" className="hover:text-neutral-900 dark:hover:text-[#d4af37] transition-colors py-0.5 inline-block">Gym Facilities</a>
              </li>
              <li>
                <a href="#offers" className="hover:text-neutral-900 dark:hover:text-[#d4af37] transition-colors py-0.5 inline-block">Membership Plans</a>
              </li>
              <li>
                <a href="#about" className="hover:text-neutral-900 dark:hover:text-[#d4af37] transition-colors py-0.5 inline-block">About Coach Amit</a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-neutral-900 dark:hover:text-[#d4af37] transition-colors py-0.5 inline-block">Transformations</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-neutral-900 dark:hover:text-[#d4af37] transition-colors py-0.5 inline-block">Claim Free Pass</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Facilities */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#b8860b] dark:text-[#f3e5ab] mb-3 font-bold">
              Highlights
            </div>
            <ul className="space-y-1.5 text-xs text-neutral-700 dark:text-neutral-300">
              <li>Heavy Free Weights &amp; Dumbbells</li>
              <li>Cardio &amp; Modern Strength Machines</li>
              <li>Personal Coaching by Amit Kumar</li>
              <li>Restroom Available</li>
              <li>Google Pay &amp; Good for Kids</li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#b8860b] dark:text-[#f3e5ab] mb-3 font-bold">
              Location & Hours
            </div>
            <div className="space-y-2.5 text-xs text-neutral-700 dark:text-neutral-300">
              <a 
                href="https://maps.google.com/?q=Muscle+Fitness+Gym+Shani+Mandir+Shiv+Nagar+Bhatia+Basti+Kadma+Jamshedpur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-[#b8860b] dark:hover:text-[#d4af37] transition-colors group cursor-pointer"
                title="Open location on Google Maps"
              >
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="group-hover:underline">Shiv Nagar, Bhatia Basti, Kadma, Jamshedpur - 831005</span>
              </a>
              <a 
                href="tel:07004584937" 
                className="flex items-center gap-2 hover:text-[#b8860b] dark:hover:text-[#d4af37] transition-colors group cursor-pointer"
                title="Call 070045 84937"
              >
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="font-mono font-bold group-hover:underline">070045 84937 / +91 70045 84937</span>
              </a>
              <a 
                href="mailto:musclefitnessjsr@gmail.com" 
                className="flex items-center gap-2 hover:text-[#b8860b] dark:hover:text-[#d4af37] transition-colors group cursor-pointer"
                title="Send email to musclefitnessjsr@gmail.com"
              >
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:underline">musclefitnessjsr@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-center sm:text-left">
          <div className="text-neutral-500">
            © {new Date().getFullYear()} MUSCLE FITNESS GYM. ALL RIGHTS RESERVED.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#b8860b] dark:text-[#d4af37] hover:text-black dark:hover:text-white transition-colors font-bold"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
