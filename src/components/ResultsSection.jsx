import React from 'react';
import {
  Laptop,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Clock,
  Target,
  Briefcase,
  Flame,
  ShieldCheck,
  Building2,
  UtensilsCrossed,
  Zap
} from 'lucide-react';

// =============================================================================
// MODERNER, DÜNNER MACBOOK-RAHMEN (Ohne störende Adressleiste für maximale Wirkung)
// =============================================================================
// MODERNER, DÜNNER MACBOOK-RAHMEN (Ohne störende Adressleiste für maximale Wirkung)
// =============================================================================
function MacBookFrame({ domain, image, alt, children, className = '' }) {
  return (
    <div
      className={`relative transition-all duration-500 ease-out origin-center group-hover:scale-[1.01] ${className}`}
      style={{ transform: 'perspective(1000px) rotateY(-3deg) rotateX(1deg) rotate(-0.5deg)' }}
    >
      {/* Moderner, ultra-dünner Display-Rahmen (Space Black / Titanium) */}
      <div className="bg-slate-900 rounded-t-xl sm:rounded-t-2xl p-[3px] sm:p-1 pt-1.5 sm:pt-2 pb-[3px] sm:pb-1 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.35)] border border-slate-800">

        {/* Subtiler Kamera-Dot zentriert im oberen Rand */}
        <div className="w-1.5 h-1.5 rounded-full bg-slate-800 ring-1 ring-slate-700/70 mx-auto mb-1 select-none pointer-events-none" />

        {/* Display-Screen: Volle Breite im 16:9-Format, damit das Mockup auf Smartphone & Desktop komplett sichtbar ist */}
        <div className="bg-slate-950 rounded-md sm:rounded-lg overflow-hidden flex flex-col w-full aspect-[16/9] relative border border-slate-800/40">

          {/* SCREEN CONTENT: Eigenes Bild ODER interaktives Fallback-UI */}
          <div className="flex-1 w-full h-full relative overflow-hidden bg-slate-950">
            {image ? (
              <img
                src={image}
                alt={alt || domain}
                className="w-full h-full object-cover object-top select-none"
                loading="lazy"
              />
            ) : (
              children
            )}
          </div>

        </div>
      </div>

      {/* Ultra-dünne Aluminium-Basis / Kinn */}
      <div className="h-1.5 sm:h-2 bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 rounded-b-md shadow-sm flex items-center justify-center -mt-0.5">
        <div className="w-10 sm:w-14 h-0.5 sm:h-1 bg-slate-400/70 rounded-full" />
      </div>
    </div>
  );
}

// =============================================================================
// MODERNER, DÜNNER IPHONE-RAHMEN (Separater Rahmen für eigene Screenshots)
// =============================================================================
function IPhoneFrame({ image, alt, children, className = '' }) {
  return (
    <div className={`transform group-hover:translate-y-[-4px] group-hover:scale-[1.03] transition-all duration-300 ease-out ${className}`}>
      {/* Dünner, moderner iPhone 15/16 Pro Titan-Rahmen */}
      <div className="bg-slate-950 p-[3px] sm:p-1 rounded-[22px] sm:rounded-[28px] border border-slate-700/80 shadow-[0_22px_45px_-8px_rgba(0,0,0,0.55),0_0_20px_rgba(0,0,0,0.25)] ring-1 ring-white/10 relative overflow-hidden">

        {/* Screen Container */}
        <div className="bg-white rounded-[18px] sm:rounded-[24px] overflow-hidden relative w-full aspect-[9/19.5] flex flex-col">

          {/* Dynamic Island Pill nur anzeigen wenn kein eigenes Bild gerendert wird */}
          {!image && (
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-30 w-8 sm:w-10 h-2 sm:h-2.5 bg-black rounded-full flex items-center justify-end pr-1 pointer-events-none shadow-xs">
              <div className="w-1 h-1 rounded-full bg-slate-900 ring-1 ring-slate-800" />
            </div>
          )}

          {/* Subtiler Glas-Glanz-Effekt über dem Screen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/15 pointer-events-none z-20" />

          {/* SCREEN CONTENT: Eigenes Bild ODER interaktives Fallback-UI */}
          <div className="flex-1 w-full h-full relative overflow-hidden bg-slate-950">
            {image ? (
              <img
                src={image}
                alt={alt || 'Mobile Ansicht'}
                className="w-full h-full object-cover object-top select-none"
                loading="lazy"
              />
            ) : (
              children
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default function ResultsSection({ onOpenCalendly }) {
  const projects = [
    {
      id: 'kronjuwel',
      client: 'High-Class Restaurant',
      location: 'Wien',
      domain: 'kronjuwel-wien.at',
      badgeLabel: 'Gastronomie',
      packageBadge: 'Start-Paket (One-Pager)',
      fokusErgebnis: 'Konzipiert für stilvollen Luxus-Auftritt, direkte Online-Tischreservierungen und exzellente Auffindbarkeit für Feinschmecker.',

      // Echte Mockup-Screenshots (Desktop & Mobile)
      desktopImage: '/projects/kronjuwel-desktop.jpg',
      mobileImage: '/projects/kronjuwel-mobile-screen.jpg',

      facts: [
        {
          label: 'Branche',
          value: 'Gehobene Gastronomie & Fine Dining',
          icon: UtensilsCrossed
        },
        {
          label: 'Ziel',
          value: 'Online-Tischreservierungen & Menü-Präsentation',
          icon: Target
        },
        {
          label: 'Umfang',
          value: 'Start-Paket (One-Pager), online in 7 Tagen',
          icon: Clock
        }
      ],
      // Desktop Preview Data (Fallback)
      desktop: {
        badge: '2 Michelin Sterne • 1010 Wien',
        title: 'Haute Cuisine von zeitloser Eleganz',
        subtitle: 'Ein Refugium des vollendeten Genusses im Herzen von Wien.',
        ctaText: '🍷 Tisch reservieren',
        ctaColor: 'bg-rose-700 text-white',
        services: ['Degustationsmenü', 'Grand Cru Weine', 'Private Dining'],
        brandIcon: Flame,
        brandColor: 'text-rose-500',
        brandName: 'Kronjuwel Wien'
      },
      // Mobile Preview Data (Fallback)
      mobile: {
        badge: 'Herrengasse Wien',
        title: 'Haute Cuisine in Perfektion',
        subtitle: 'Reserviere deinen Tisch im Herzen von Wien.',
        btnText: '🍷 Jetzt Tisch reservieren',
        btnColor: 'bg-rose-700 text-white',
        bottomText: '01 / 533 82 10'
      }
    },
    {
      id: 'voltklima',
      client: 'Elektriker Meisterbetrieb',
      location: 'Mödling, Baden & NÖ Süd',
      domain: 'volt-klima.at',
      badgeLabel: 'Elektriker',
      packageBadge: 'Business-Paket (Multi-Page)',
      fokusErgebnis: 'Konzipiert für maximale regionale Sichtbarkeit in Mödling & Baden, 24/7 Notdienst-Anrufe und strukturierte Projektanfragen.',

      // Echte Mockup-Screenshots (Desktop & Mobile)
      desktopImage: '/projects/voltklima-desktop.jpg',
      mobileImage: '/projects/voltklima-mobile-screen.jpg',

      facts: [
        {
          label: 'Branche',
          value: 'Elektro- & Klimatechnik Meisterbetrieb',
          icon: Zap
        },
        {
          label: 'Ziel',
          value: 'Regionale Projektanfragen & 24/7 Notdienst-Einsätze',
          icon: Target
        },
        {
          label: 'Umfang',
          value: 'Business-Paket (4 Unterseiten inkl. Google-Profil), online in 10 Tagen',
          icon: Clock
        }
      ],
      // Desktop Preview Data (Fallback)
      desktop: {
        badge: 'Zertifizierter Fachbetrieb • Mödling & Baden',
        title: 'Meisterhafte Elektro- & Klimatechnik aus einer Hand',
        subtitle: 'Elektroinstallation, Wallbox, PV-Anlagen & Wärmepumpen mit 24/7 Notdienst.',
        ctaText: '⚡ Notdienst: 0800 / 456 78 90',
        ctaColor: 'bg-amber-500 text-slate-950 font-bold',
        services: ['Elektrik & ÖVE', 'Klima & Wärmepumpen', 'PV & Wallbox'],
        brandIcon: Zap,
        brandColor: 'text-amber-500',
        brandName: 'Volt & Klima'
      },
      // Mobile Preview Data (Fallback)
      mobile: {
        badge: 'Mödling & Baden',
        title: 'Elektro- & Klimatechnik',
        subtitle: 'Schnelle Notdienst-Hilfe & Fachberatung.',
        btnText: '⚡ 24h Notdienst anrufen',
        btnColor: 'bg-amber-500 text-slate-950 font-bold',
        bottomText: '0800 / 456 78 90'
      }
    }
  ];

  return (
    <section id="ergebnisse" className="py-20 sm:py-24 bg-slate-50/70 border-t border-slate-200 scroll-mt-20 relative overflow-hidden">
      {/* Alias für alte oder alternative Anker */}
      <span id="referenzen" className="sr-only" />

      {/* Dezente Hintergrund-Highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-brand-50/60 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-700 bg-brand-50 border border-brand-200/80 px-3.5 py-1.5 rounded-full mb-3.5 shadow-2xs">
            ECHTE ERGEBNISSE &amp; PRAXIS-KONZEPTE
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-black text-slate-900 tracking-tight leading-tight mb-4">
            Websites, die vom ersten Tag an Neukunden bringen
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Keine theoretischen Vorlagen, sondern praxisnahe Webauftritte für Dienstleister und Neugründer im Raum Wien &amp; Niederösterreich.
          </p>

          {/* Bereinigtes Benefit-Badge */}
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/90 shadow-2xs text-xs sm:text-sm font-semibold text-slate-800">
            <span className="text-emerald-600 font-bold">✓</span>
            <span>OPTIMIERT FÜR SMARTPHONE &amp; DESKTOP</span>
          </div>
        </div>

        {/* =========================================================================
            GRID: Mobile-First (1 Spalte) wechselt auf Desktop in 2-spaltiges Grid
           ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {projects.map((project) => {
            const DesktopBrandIcon = project.desktop.brandIcon;

            return (
              <div
                key={project.id}
                className="flex flex-col h-full bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brand-300/80 transition-all duration-300 group overflow-hidden"
              >

                {/* =================================================================
                    MOCKUP BÜHNE: Dünne, moderne Rahmen (MacBook + iPhone separiert)
                   ================================================================= */}
                <div className="relative bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100/80 p-4 sm:p-6 md:p-7 pt-5 sm:pt-7 border-b border-slate-200/80 overflow-hidden select-none">

                  {/* Subtile Studio-Lichteffekte im Hintergrund */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-400/5 rounded-full blur-2xl pointer-events-none" />

                  {/* Mockup-Container mit Raum für überlappendes iPhone */}
                  <div className="relative w-full h-[215px] sm:h-[285px] md:h-[315px] flex items-center justify-start pl-0.5 sm:pl-1">

                    {/* -------------------------------------------------------------
                        1. MACBOOK FRAME (Dünner Rahmen, nimmt image ODER Fallback-UI)
                       ------------------------------------------------------------- */}
                    <MacBookFrame
                      domain={project.domain}
                      image={project.desktopImage}
                      alt={`${project.client} Desktop Ansicht`}
                      className="w-[85%] sm:w-[82%] relative z-10"
                    >
                      {/* Fallback-UI für MacBook (wenn project.desktopImage leer ist) */}
                      <div className="w-full h-full p-2.5 sm:p-3.5 overflow-hidden flex flex-col justify-between text-left bg-white">
                        {/* Mini Nav */}
                        <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                          <div className="flex items-center gap-1.5">
                            <DesktopBrandIcon className={`w-3.5 h-3.5 ${project.desktop.brandColor}`} />
                            <span className="text-[10px] sm:text-[11px] font-black text-slate-900 tracking-tight">
                              {project.desktop.brandName}
                            </span>
                          </div>
                          <div className="hidden sm:flex items-center gap-2 text-[9px] font-medium text-slate-500">
                            <span>Leistungen</span>
                            <span>Über uns</span>
                            <span>Kontakt</span>
                          </div>
                          <span className="text-[8px] sm:text-[9px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                            Kontakt
                          </span>
                        </div>

                        {/* Mini Hero */}
                        <div className="my-auto py-1 sm:py-2">
                          <span className="inline-block text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-1.5 py-0.5 rounded mb-1">
                            {project.desktop.badge}
                          </span>
                          <h4 className="text-[12px] sm:text-[14px] md:text-[15px] font-extrabold text-slate-900 leading-snug line-clamp-2 max-w-[85%]">
                            {project.desktop.title}
                          </h4>
                          <p className="text-[9px] sm:text-[10px] text-slate-500 line-clamp-1 mt-0.5 max-w-[80%]">
                            {project.desktop.subtitle}
                          </p>

                          {/* Desktop CTA Button */}
                          <div className="mt-2 flex items-center gap-2">
                            <span className={`text-[8px] sm:text-[9px] font-bold px-2.5 py-1 rounded shadow-xs ${project.desktop.ctaColor}`}>
                              {project.desktop.ctaText}
                            </span>
                            <span className="text-[8px] text-slate-500 hidden sm:inline">
                              ✓ Fixpreis-Garantie
                            </span>
                          </div>
                        </div>

                        {/* Mini 3 Service Tags */}
                        <div className="grid grid-cols-3 gap-1 pt-1.5 border-t border-slate-100">
                          {project.desktop.services.map((srv, sIdx) => (
                            <div key={sIdx} className="bg-slate-50 border border-slate-200/70 rounded px-1.5 py-0.5 text-center">
                              <span className="text-[8px] sm:text-[9px] font-semibold text-slate-700 truncate block">
                                {srv}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </MacBookFrame>

                    {/* -------------------------------------------------------------
                        2. IPHONE FRAME (Dünner Titan-Rahmen, nimmt image ODER Fallback-UI)
                       ------------------------------------------------------------- */}
                    <IPhoneFrame
                      image={project.mobileImage}
                      alt={`${project.client} Mobile Ansicht`}
                      className="absolute bottom-0 sm:-bottom-2 right-0.5 sm:right-2 md:right-3 z-20 w-[96px] sm:w-[125px] md:w-[140px]"
                    >
                      {/* Fallback-UI für iPhone (wenn project.mobileImage leer ist) */}
                      <div className="w-full h-full p-2 sm:p-2.5 flex flex-col justify-between text-left bg-white">
                        {/* Statusbar Mini */}
                        <div className="flex items-center justify-between text-[7px] sm:text-[8px] font-bold text-slate-800 px-0.5 border-b border-slate-100 pb-1">
                          <span>09:41</span>
                          <div className="flex items-center gap-1">
                            <span className="text-[7px]">5G</span>
                            <div className="w-3 h-1.5 rounded-2xs border border-slate-800 p-0.5 flex items-center">
                              <div className="w-full h-full bg-slate-800" />
                            </div>
                          </div>
                        </div>

                        {/* Mobile Header */}
                        <div className="flex items-center justify-between py-1">
                          <span className="text-[9px] sm:text-[10px] font-black text-slate-900 truncate">
                            {project.desktop.brandName}
                          </span>
                          <span className="text-[9px] text-slate-600">☰</span>
                        </div>

                        {/* Mobile Hero & Focus on Contact */}
                        <div className="my-auto py-1">
                          <span className="inline-block text-[7px] sm:text-[8px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-1 py-0.5 rounded mb-1">
                            {project.mobile.badge}
                          </span>
                          <h5 className="text-[10px] sm:text-[11px] font-extrabold text-slate-900 leading-tight mb-1">
                            {project.mobile.title}
                          </h5>
                          <p className="text-[8px] text-slate-500 leading-tight mb-2">
                            {project.mobile.subtitle}
                          </p>

                          {/* Großer Touch-optimierter Mobil-CTA */}
                          <div className={`w-full text-center py-1.5 sm:py-2 rounded-lg text-[8px] sm:text-[9px] shadow-sm font-bold active:scale-95 transition-transform ${project.mobile.btnColor}`}>
                            {project.mobile.btnText}
                          </div>
                        </div>

                        {/* Mobile Sticky Quick Contact Bar am Display-Boden */}
                        <div className="pt-1 border-t border-slate-100 flex items-center justify-between text-[7px] sm:text-[8px] font-bold text-slate-800">
                          <span className="flex items-center gap-1 text-emerald-600 truncate">
                            <PhoneCall className="w-2.5 h-2.5 shrink-0" />
                            <span className="truncate">{project.mobile.bottomText}</span>
                          </span>
                          <span className="text-slate-400 shrink-0">Wien &amp; NÖ</span>
                        </div>
                      </div>
                    </IPhoneFrame>

                  </div>
                </div>

                {/* =================================================================
                    FAKTEN & STICHPUNKTE: Exakt wie vom Nutzer gefordert
                    - Branche: ...
                    - Ziel: ...
                    - Umfang: ...
                    Mit CSS-Höhenausgleich (flex flex-col justify-between)
                   ================================================================= */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">

                  {/* Firmenkopf mit fixer Mindesthöhe für ein- und zweizeilige Titel */}
                  <div className="mb-5">
                    <div className="flex items-start justify-between gap-3 min-h-[56px] sm:min-h-[64px]">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                        {project.client}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mt-1">
                      <span>Standort: {project.location}</span>
                    </div>
                  </div>

                  {/* 3 Klare Fakten als strukturierte Stichpunkte */}
                  <div className="space-y-3 mb-6 bg-slate-50/80 p-4 rounded-2xl border border-slate-200/70 flex-1 flex flex-col justify-center">
                    {project.facts.map((fact, fIdx) => {
                      const FactIcon = fact.icon;
                      return (
                        <div key={fIdx} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-lg bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center text-brand-600 shrink-0 mt-0.5">
                            <FactIcon className="w-3.5 h-3.5" />
                          </div>
                          <div className="text-sm leading-snug">
                            <span className="font-bold text-slate-900 mr-1.5">
                              {fact.label}:
                            </span>
                            <span className="text-slate-700 font-medium">
                              {fact.value}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* =========================================================================
            BOTTOM TRUST & CTA BANNER
           ========================================================================= */}
        <div className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-brand-50 via-white to-brand-50 border border-brand-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-100/70 px-2.5 py-0.5 rounded-full mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              100% Fixpreis-Garantie
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-1.5">
              Möchtest du eine ähnliche Website für deinen Betrieb?
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Lass uns in einem kurzen 15-Minuten-Gespräch klären, was dein Unternehmen wirklich braucht.
              Unverbindlich, kostenlos und ohne Fachchinesisch.
            </p>
          </div>
          <button
            onClick={() => onOpenCalendly('Ergebnisse: Erstgespräch anfragen')}
            className="shrink-0 w-full md:w-auto px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center flex items-center justify-center gap-2"
          >
            <span>Gratis Erstgespräch vereinbaren</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
