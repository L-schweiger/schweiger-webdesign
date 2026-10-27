import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header({ onOpenCalendly }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Unser Angebot", href: "#pakete" },
    { label: "Zusatzleistungen", href: "#zusatzleistungen" },
    { label: "Vorteile", href: "#vorteile" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <header className="w-full bg-white/95 md:bg-transparent backdrop-blur-xs md:backdrop-blur-none border-b border-slate-200/60 md:border-transparent transition-all z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">

        {/* Brand / Logo */}
        <a href="#" className="flex flex-col group">
          <span className="font-extrabold text-lg sm:text-xl text-brand-600 hover:text-brand-700 tracking-tight leading-none transition-colors">
            SCHWEIGER WEBDESIGN
          </span>
          <span className="text-xs sm:text-sm text-slate-600 font-normal mt-1 leading-none">
            Webdesign für Neugründer
          </span>
        </a>

        {/* Navigation & CTA Desktop */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {/* Einzelne Badges mit weißem Hintergrund & Runterspring-Hover-Effekt */}
          <nav className="flex items-center space-x-2.5 lg:space-x-3.5">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="px-4 py-2 rounded-full bg-white hover:bg-white text-slate-800 hover:text-brand-600 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-brand-300 font-semibold text-xs sm:text-sm transition-all duration-200 transform hover:translate-y-1.5 active:translate-y-2 select-none backdrop-blur-xs"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Button right */}
          <button
            onClick={() => onOpenCalendly('Header: Erstgespräch vereinbaren')}
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-xs hover:shadow-md transition-all duration-200 transform hover:translate-y-1 active:translate-y-1.5"
          >
            Erstgespräch vereinbaren
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-brand-600 focus:outline-hidden"
            aria-label="Menü öffnen"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-wrap gap-2 pt-1">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3.5 py-2 rounded-full bg-slate-50 hover:bg-white border border-slate-200 text-slate-800 hover:text-brand-600 text-sm font-semibold shadow-2xs transition-all active:translate-y-1"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenCalendly('Mobile Menu: Erstgespräch vereinbaren');
              }}
              className="w-full py-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm text-center shadow-xs"
            >
              Erstgespräch vereinbaren
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
