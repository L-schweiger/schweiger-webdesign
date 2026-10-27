import React, { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import PricingTable from './components/PricingTable';
import UpsellCards from './components/UpsellCards';
import VorteileSection from './components/VorteileSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CalendlyModal from './components/CalendlyModal';
import ImpressumPage from './components/ImpressumPage';

export default function App() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [selectedPackageInfo, setSelectedPackageInfo] = useState('');
  const [calendlyUrl, setCalendlyUrl] = useState('https://calendly.com/schweiger-webdesign/erstgespraech');
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    // Intercept clicks on links pointing to /impressum or / for instant SPA transition without reload
    const handleClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href === '/impressum' || href === '/') {
        e.preventDefault();
        window.history.pushState({}, '', href);
        setCurrentPath(href);
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const handleOpenCalendly = (packageInfo = '') => {
    setSelectedPackageInfo(packageInfo);
    setIsCalendlyOpen(true);
  };

  // If path is /impressum, render the full Impressum page
  if (currentPath === '/impressum' || currentPath === '/impressum/') {
    return <ImpressumPage />;
  }

  // Standard Startseite (One-Pager)
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-brand-600 selection:text-white">
      {/* Hauptinhalt */}
      <main className="flex-1">
        {/* 1. Hero Section mit Schreibtisch-Foto, Bleistift-Skizzen, Laptop & Kaffee */}
        <HeroSection onOpenCalendly={handleOpenCalendly} />

        {/* 2. Die Pakete direkt unter der Hero Section (Starter One-Pager ab 690 € & Business-Paket) */}
        <PricingTable onOpenCalendly={handleOpenCalendly} />

        {/* 3. Die Zusatzleistungen (Texte & Bilder, Local SEO, Wartung) */}
        <UpsellCards onOpenCalendly={handleOpenCalendly} />

        {/* 4. Vorteile für Neugründer */}
        <VorteileSection onOpenCalendly={handleOpenCalendly} />

        {/* 5. Kontakt & FAQ */}
        <ContactSection onOpenCalendly={handleOpenCalendly} />
      </main>

      {/* Footer */}
      <Footer onOpenCalendly={handleOpenCalendly} />

      {/* Calendly Buchungs-Modal */}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        selectedPackageInfo={selectedPackageInfo}
        calendlyUrl={calendlyUrl}
        setCalendlyUrl={setCalendlyUrl}
      />
    </div>
  );
}
