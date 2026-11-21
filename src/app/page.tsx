'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Offers from '@/components/Offers';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import Schedule from '@/components/Schedule';
import TestimonialsPress from '@/components/TestimonialsPress';
import ContactConcierge from '@/components/ContactConcierge';
import ApplicationModal from '@/components/ApplicationModal';
import Footer from '@/components/Footer';
import { ClassSession } from '@/data/gymData';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string>('pro');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleOpenApplication = (planId?: string) => {
    if (planId) {
      setSelectedPlanId(planId);
    }
    setModalOpen(true);
  };

  const handleSelectTier = (tierId: string) => {
    setSelectedPlanId(tierId);
    setModalOpen(true);
  };

  const handleInquireService = (serviceTitle: string) => {
    setSelectedPlanId('pro');
    setModalOpen(true);
    showToast(`Inquiring about access to: ${serviceTitle}`);
  };

  const handleReserveSession = (session: ClassSession) => {
    setSelectedPlanId('pro');
    setModalOpen(true);
    showToast(`Spot reserved for "${session.title}" (${session.time}). Fill in your details below.`);
  };

  return (
    <main className="relative min-h-screen bg-[#f8f9fc] text-[#111827] dark:bg-[#070709] dark:text-[#ededf2] transition-colors duration-300">
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 sm:max-w-md p-4 rounded-2xl bg-white/95 dark:bg-[#12121c]/95 border border-[#d4af37]/40 sm:border-[#d4af37]/50 shadow-[0_10px_35px_rgba(0,0,0,0.15)] dark:shadow-[0_0_35px_rgba(212,175,55,0.35)] backdrop-blur-xl flex items-start gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="w-8 h-8 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/60 flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="flex-1">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#b8860b] dark:text-[#d4af37] font-bold">
              Muscle Fitness Gym Desk
            </div>
            <p className="text-xs text-neutral-700 dark:text-neutral-200 mt-0.5 leading-snug">
              {toastMessage}
            </p>
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-neutral-400 hover:text-neutral-800 dark:text-neutral-500 dark:hover:text-white text-xs font-mono"
          >
            ✕
          </button>
        </div>
      )}

      {/* Global Navigation */}
      <Navbar onOpenApplication={handleOpenApplication} />

      {/* Section 1: Hero */}
      <Hero onOpenApplication={handleOpenApplication} />

      {/* Section 2: Offers & Membership Tiers */}
      <Offers onSelectTier={handleSelectTier} />

      {/* Section 3: Services & Curated Amenities */}
      <Services onInquireService={handleInquireService} />

      {/* Section 4: About Us & Philosophy */}
      <AboutUs onOpenApplication={() => handleOpenApplication('pro')} />

      {/* Section 5: Daily Rituals & Schedule */}
      <Schedule onReserveSession={handleReserveSession} />

      {/* Section 6: Press & Elite Member Testimonials */}
      <TestimonialsPress onOpenApplication={handleOpenApplication} />

      {/* Section 7: Contact Us & Private Concierge Desk */}
      <ContactConcierge onShowToast={showToast} />

      {/* Footer */}
      <Footer />

      {/* Interactive VIP Admissions Modal */}
      <ApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPlanId={selectedPlanId}
        onSuccess={showToast}
      />
    </main>
  );
}
