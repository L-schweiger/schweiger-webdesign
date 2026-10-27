import React from 'react';
import Header from './Header';

export default function HeroSection({ onOpenCalendly }) {
  return (
    <section className="relative w-full overflow-hidden bg-white flex flex-col justify-between min-h-[640px] md:min-h-[720px] lg:min-h-[780px]">

      {/* =========================================================================
          BACKGROUND FOTO (Skizzenblock, Laptop & Hand mit weichem Verlauf nach links)
         ========================================================================= */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat pointer-events-none transition-all"
        style={{
          backgroundImage: `url('/hero-bg-2x.png')`,
          backgroundPosition: 'right top',
          backgroundSize: 'cover'
        }}
      />

      {/* Sanfter weißer Fade auf kleineren Screens für perfekte Lesbarkeit */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/90 to-transparent lg:from-transparent pointer-events-none" />

      {/* =========================================================================
          TRANSPARENTER HEADER DIREKT IM HERO BEREICH INTEGRIERT
         ========================================================================= */}
      <div className="relative z-20 w-full">
        <Header onOpenCalendly={onOpenCalendly} />
      </div>

      {/* =========================================================================
          HERO CONTENT (Linke Spalte exakt wie im Screenshot)
         ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full pt-8 sm:pt-14 md:pt-16 lg:pt-20 pb-16 sm:pb-20">
        <div className="max-w-xl lg:max-w-2xl">

          {/* Eyebrow / Kategorie */}
          <div className="mb-4 sm:mb-5">
            <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.16em] text-slate-700 uppercase">
              SCHLÜSSELFERTIG &amp; RECHTSSICHER IN ÖSTERREICH
            </span>
          </div>

          {/* Haupt-Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-slate-900 tracking-tight leading-[1.12] mb-5 sm:mb-6">
            Deine Website zum<br />
            fairen Fixpreis
          </h1>

          {/* Sub-Headline Fließtext */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-6 sm:mb-8 font-normal max-w-xl">
            Ich baue für Neugründer und kleine Betriebe in Österreich einen modernen Webauftritt,
            mit dem du online perfekt gefunden wirst und dein Angebot überzeugt – unkompliziert,
            auf Augenhöhe und in nur 10 Tagen online - ab 890 €.
          </p>

          {/* 3 USPs mit Checkmark */}
          <ul className="space-y-2.5 sm:space-y-3 mb-8 sm:mb-10 text-slate-800 text-sm sm:text-base font-medium">
            <li className="flex items-center gap-3">
              <span className="text-brand-600 font-bold text-lg leading-none select-none">✓</span>
              <span>100% DSGVO- &amp; WKO-konform</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-brand-600 font-bold text-lg leading-none select-none">✓</span>
              <span>Inklusive Google-Optimierung</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-brand-600 font-bold text-lg leading-none select-none">✓</span>
              <span>Garantiert keine monatliche Bindung</span>
            </li>
          </ul>

          {/* 2 CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              onClick={() => onOpenCalendly('Hero CTA: Gratis Erstgespräch')}
              className="px-6 sm:px-7 py-3.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm sm:text-base shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              Gratis Erstgespräch vereinbaren
            </button>
          </div>

        </div>
      </div>

      {/* =========================================================================
          UNTERER TRUST BANNER / TICKER (Exakt wie am Fuß des Screenshots)
         ========================================================================= */}
      <div className="relative z-10 w-full border-t border-slate-200/80 bg-white/70 backdrop-blur-xs py-3 sm:py-3.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-4 gap-y-1.5 text-xs sm:text-sm font-medium text-slate-700 text-center">
          <span>10 Tage Lieferzeit</span>
          <span className="text-slate-400 select-none">•</span>
          <span>Einmaliger Fixpreis</span>
          <span className="text-slate-400 select-none">•</span>
          <span>Inklusive Domain &amp; E-Mails</span>
          <span className="text-slate-400 select-none">•</span>
          <span>WKO-konform &amp; DSGVO-sicher</span>
        </div>
      </div>

    </section>
  );
}
