import React, { useState } from 'react';
import { EmergencyBanner } from './components/EmergencyBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { CommercialDomesticToggle } from './components/CommercialDomesticToggle';
import { ServicesSection } from './components/ServicesSection';
import { CoverageSection } from './components/CoverageSection';
import { FleetEquipment } from './components/FleetEquipment';
import { WhyMintrs } from './components/WhyMintrs';
import { PricingCalculator } from './components/PricingCalculator';
import { Testimonials } from './components/Testimonials';
import { SafetySOSGuide } from './components/SafetySOSGuide';
import { FAQSection } from './components/FAQSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { RecoveryModal } from './components/RecoveryModal';

export const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPreset, setModalPreset] = useState<{
    service?: string;
    vehicle?: string;
    pickup?: string;
    dropoff?: string;
    estimatedCost?: number;
  }>({});

  const handleOpenBooking = (preset?: {
    service?: string;
    vehicle?: string;
    pickup?: string;
    dropoff?: string;
    estimatedCost?: number;
  }) => {
    if (preset) {
      setModalPreset(preset);
    } else {
      setModalPreset({});
    }
    setModalOpen(true);
  };

  const handleCloseBooking = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col selection:bg-amber-500 selection:text-slate-950">
      {/* 1. Emergency Live Dispatch Banner */}
      <EmergencyBanner />

      {/* 2. Sticky Glassmorphic Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 3. High-Conversion Hero with Instant Quote Estimator */}
      <main className="flex-1">
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 4. Social Proof & Statistics Highlight Bar */}
        <SocialProof />

        {/* 5. Commercial vs Domestic Solutions Toggle */}
        <CommercialDomesticToggle onOpenBooking={handleOpenBooking} />

        {/* 6. Comprehensive 24h Services Grid */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* 7. Coverage Zone & Ribble Valley / North West Radar Map */}
        <CoverageSection />

        {/* 8. Fleet & Technical Equipment Showcase */}
        <FleetEquipment />

        {/* 9. Why Mintrs Ltd vs Traditional Clubs Comparison */}
        <WhyMintrs onOpenBooking={() => handleOpenBooking()} />

        {/* 10. Transparent Pricing Calculator */}
        <PricingCalculator onOpenBooking={handleOpenBooking} />

        {/* 11. Client Testimonials & Case Studies */}
        <Testimonials />

        {/* 12. Breakdown Safety SOS Wizard */}
        <SafetySOSGuide />

        {/* 13. Frequently Asked Questions */}
        <FAQSection />

        {/* 14. Bottom High-Impact Call to Action */}
        <CallToAction onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* 15. Footer */}
      <Footer />

      {/* 16. Sticky Mobile 1-Tap Emergency Bar */}
      <StickyMobileBar onOpenBooking={() => handleOpenBooking()} />

      {/* 17. Booking & Dispatch Modal */}
      <RecoveryModal
        isOpen={modalOpen}
        onClose={handleCloseBooking}
        presetData={modalPreset}
      />
    </div>
  );
};

export default App;
