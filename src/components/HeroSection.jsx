import React from 'react';
import Header from './Header';
import { Calendar, Phone } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

function WhatsAppIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function HeroSection({ onOpenCalendly }) {
  return (
    <section className="relative w-full overflow-hidden bg-white flex flex-col justify-between min-h-0 sm:min-h-[640px] md:min-h-[700px] lg:min-h-[760px]">

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
          HERO CONTENT (Linke Spalte)
         ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full pt-4 sm:pt-10 md:pt-14 lg:pt-18 pb-6 sm:pb-16 lg:pb-20">
        <div className="max-w-xl lg:max-w-2xl">

          {/* Eyebrow / Kategorie */}
          <div className="mb-2 sm:mb-4">
            <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.08em] sm:tracking-[0.16em] text-slate-700 uppercase">
              SCHLÜSSELFERTIG &amp; RECHTSSICHER IN ÖSTERREICH
            </span>
          </div>

          {/* Haupt-Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-slate-900 tracking-tight leading-[1.12] mb-3 sm:mb-5">
            Deine Website zum<br />
            fairen Fixpreis
          </h1>

          {/* Sub-Headline Fließtext */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed mb-4 sm:mb-6 font-normal max-w-xl">
            Ich baue für Neugründer und kleine Betriebe in Österreich einen modernen Webauftritt,
            mit dem du online perfekt gefunden wirst und dein Angebot überzeugt – unkompliziert,
            auf Augenhöhe und in nur 10 Tagen online - <b>ab 890 €</b>.
          </p>

          {/* 3 USPs mit Checkmark */}
          <ul className="space-y-1.5 sm:space-y-2.5 mb-5 sm:mb-8 text-slate-800 text-sm sm:text-base font-medium">
            <li className="flex items-center gap-2.5 sm:gap-3">
              <span className="text-brand-600 font-bold text-base sm:text-lg leading-none select-none">✓</span>
              <span>100% DSGVO- &amp; WKO-konform</span>
            </li>
            <li className="flex items-center gap-2.5 sm:gap-3">
              <span className="text-brand-600 font-bold text-base sm:text-lg leading-none select-none">✓</span>
              <span>Inklusive Google-Optimierung</span>
            </li>
            <li className="flex items-center gap-2.5 sm:gap-3">
              <span className="text-brand-600 font-bold text-base sm:text-lg leading-none select-none">✓</span>
              <span>Garantiert keine monatliche Bindung</span>
            </li>
          </ul>

          {/* CTA & Kontakt-Optionen (Calendly, Trennlinie "oder", Anruf & WhatsApp bündig) */}
          <div className="flex flex-col items-start gap-2 sm:gap-2.5 w-full sm:w-[360px]">
            {/* 1. Calendly Button */}
            <button
              onClick={() => onOpenCalendly('Hero CTA: Gratis Erstgespräch')}
              className="w-full py-3 sm:py-3.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs sm:text-base shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 text-center cursor-pointer"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <span>Gratis Erstgespräch vereinbaren</span>
            </button>

            {/* Trennlinie mit "oder" */}
            <div className="w-full flex items-center gap-2.5 sm:gap-3 py-0.5">
              <div className="h-px bg-slate-200/90 flex-1" />
              <span className="text-[11px] sm:text-xs font-medium text-slate-400 uppercase tracking-wider select-none">
                oder
              </span>
              <div className="h-px bg-slate-200/90 flex-1" />
            </div>

            {/* 2. Anruf & WhatsApp Buttons (nehmen exakt die gleiche Breite ein wie der Button darüber) */}
            <div className="grid grid-cols-2 gap-2 sm:gap-2.5 w-full">
              <a
                href="tel:+436644356834"
                title="0664 / 43 56 834"
                onClick={() => trackEvent('click_call', { source: 'hero' })}
                className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2.5 sm:py-3 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-xs sm:text-sm shadow-2xs hover:shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-w-0"
              >
                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-600 shrink-0" />
                <span className="truncate">Direkt anrufen</span>
              </a>

              <a
                href="https://wa.me/436644356834?text=Hallo%20Lukas,%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Website."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('click_whatsapp', { source: 'hero' })}
                className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-2.5 sm:py-3 rounded-lg bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-900 font-semibold text-xs sm:text-sm shadow-2xs hover:shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0 min-w-0"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#25D366] shrink-0" />
                <span className="truncate">WhatsApp</span>
              </a>
            </div>
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
          <span>Inklusive Wunschdomain (.at)</span>
          <span className="text-slate-400 select-none">•</span>
          <span>WKO-konform &amp; DSGVO-sicher</span>
        </div>
      </div>

    </section>
  );
}
