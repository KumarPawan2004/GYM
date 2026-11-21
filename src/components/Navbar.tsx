'use client';

import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X, Flame, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface NavbarProps {
  onOpenApplication: (planId?: string) => void;
}

export default function Navbar({ onOpenApplication }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Facilities', href: '#services' },
    { label: 'Plans', href: '#offers' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'About', href: '#about' },
    { label: 'Results', href: '#transformations' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', href);
    } else {
      window.location.hash = href;
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 dark:bg-[#08080b]/95 backdrop-blur-md py-3 sm:py-3.5 border-b border-neutral-200 dark:border-[#d4af37]/30 shadow-md dark:shadow-xl'
            : 'bg-gradient-to-b from-white/90 dark:from-black/90 to-transparent py-3.5 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-2.5 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Minimal Punchy Logo */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 group cursor-pointer shrink-0"
            >
              <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#d4af37] to-[#aa820a] flex items-center justify-center text-black shadow-md sm:shadow-lg shadow-[#d4af37]/30 group-hover:scale-105 transition-transform shrink-0">
                <Dumbbell className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5 -rotate-45 text-black stroke-[2.5]" />
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-sm xs:text-base sm:text-2xl font-black text-neutral-900 dark:text-white tracking-wider">
                  MUSCLE
                </span>
                <span className="text-sm xs:text-base sm:text-2xl font-black text-[#d4af37]">
                  FITNESS
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center lg:gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-[11px] lg:text-xs uppercase tracking-wider lg:tracking-widest text-neutral-600 dark:text-neutral-300 hover:text-[#d4af37] dark:hover:text-[#d4af37] transition-colors font-bold py-1 relative group cursor-pointer"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA + Theme Toggle + Mobile/Tablet Toggle */}
            <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-3 shrink-0">
              {/* Theme Toggle Button */}
              <button
                type="button"
                onClick={toggleTheme}
                className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl border border-neutral-300 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:text-[#d4af37] dark:hover:text-[#d4af37] bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center shrink-0 shadow-sm"
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-[#d4af37]" />
                ) : (
                  <Moon className="w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 text-neutral-800" />
                )}
              </button>

              <button
                type="button"
                onClick={() => onOpenApplication('standard')}
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2 xs:px-2.5 sm:px-5 py-1.5 sm:py-2.5 rounded-full text-[9px] xs:text-[10px] sm:text-xs font-black uppercase tracking-wider text-black bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa820a] hover:brightness-110 shadow-md sm:shadow-lg shadow-[#d4af37]/25 active:scale-95 transition-all whitespace-nowrap shrink-0 leading-none"
              >
                <Flame className="w-3 h-3 sm:w-4 sm:h-4 fill-current shrink-0" />
                <span className="hidden sm:inline">Free Day Pass</span>
                <span className="hidden xs:inline sm:hidden">Free Pass</span>
                <span className="xs:hidden">Pass</span>
              </button>

              {/* Mobile & Tablet Toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1 sm:p-2 text-neutral-700 dark:text-neutral-300 hover:text-[#d4af37] dark:hover:text-[#d4af37] lg:hidden focus:outline-none shrink-0"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sleek Mobile & Tablet Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#f8f9fc]/95 dark:bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between overflow-y-auto px-6 py-8 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-neutral-200 dark:border-white/10 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#d4af37] flex items-center justify-center text-black">
                <Dumbbell className="w-4 h-4 -rotate-45" />
              </div>
              <span className="font-serif text-lg font-black text-neutral-900 dark:text-white">MUSCLE <span className="text-[#d4af37]">FITNESS</span></span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 text-neutral-700 dark:text-neutral-300 rounded-full bg-black/5 dark:bg-white/5 border border-neutral-200 dark:border-white/10"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-[#d4af37]" /> : <Moon className="w-5 h-5 text-neutral-800" />}
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white rounded-full bg-black/5 dark:bg-white/5"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-8 text-center my-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xl sm:text-2xl font-serif font-black tracking-wider text-neutral-800 dark:text-white hover:text-[#d4af37] dark:hover:text-[#d4af37] transition-colors py-1.5 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-neutral-200 dark:border-white/10 shrink-0">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplication('standard');
              }}
              className="w-full py-3.5 sm:py-4 rounded-xl text-center font-black text-xs sm:text-sm uppercase tracking-widest bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#aa820a] text-black shadow-lg active:scale-95 transition-all"
            >
              Claim Free Day Pass
            </button>
            <p className="text-center text-[10px] font-mono text-neutral-500 mt-2">
              Open 6:30 AM – 10:00 PM • Shiv Nagar, Kadma • Jamshedpur
            </p>
          </div>
        </div>
      )}
    </>
  );
}
