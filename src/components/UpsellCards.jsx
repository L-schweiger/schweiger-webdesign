import React from 'react';
import { PenTool, MapPin, Mail, ShieldCheck, Check } from 'lucide-react';

export default function UpsellCards({ onOpenCalendly }) {
  const oneTimeUpsells = [
    {
      title: "E-Mail-Einrichtung",
      badge: "+99 € einmalig",
      subtitle: "Professioneller Auftritt mit eigener Domain",
      icon: Mail,
      description: "Vollständige technische Einrichtung deiner geschäftlichen Postfächer (z. B. office@deine-domain.at) inkl. DNS-Einträgen (SPF, DKIM, MX) für maximale Zustellsicherheit.",
      quote: "„Keine privaten @gmx- oder @gmail-Adressen mehr auf Angeboten.“",
      benefit: "Seriöser Eindruck bei Kunden & zuverlässiger Empfang auf allen Geräten."
    },
    {
      title: "Texte & Bildauswahl",
      badge: "+350 € einmalig",
      subtitle: "Der größte Zeitfresser für Neugründer",
      icon: PenTool,
      description: "Du musst keine Werbetexte verfassen. Gib mir einfache Stichpunkte zu deiner Arbeit – ich formuliere überzeugende, suchmaschinenoptimierte Texte für deine gesamte Website.",
      quote: "„Stichpunkte per Sprachnachricht oder Notizen genügen vollkommen.“",
      benefit: "Keine Schreibblockaden, sofort professionelle Formulierungen."
    },
    {
      title: "Google Unternehmensprofil",
      badge: "+190 € einmalig",
      subtitle: "Sofortige Sichtbarkeit in deiner Region",
      icon: MapPin,
      description: "Professionelle Einrichtung oder Optimierung deines Google Business Profils (Google Maps), inklusive Kategorien, Einzugsgebiet und direktem Link für Kundenbewertungen.",
      quote: "„Bringe Kunden direkt bei der Google-Suche zu dir.“",
      benefit: "Top-Platzierung in Google Maps und mehr direkte Anrufe."
    }
  ];

  const maintenancePlan = {
    title: "Rundum-Sorglos-Wartung",
    badge: "59 € / Monat",
    billingNote: "Monatlich kündbar • Keine Mindestvertragslaufzeit",
    subtitle: "Technik, Sicherheit & Updates ohne Kopfschmerzen",
    icon: ShieldCheck,
    description: "Schnelles Hosting in Österreich/Deutschland, SSL-Zertifikat, automatische wöchentliche Backups und laufende Sicherheitsupdates. Du musst dich um absolut nichts kümmern.",
    quote: "„100% stressfrei: Deine Website läuft dauerhaft sicher, stabil und schnell.“",
    benefit: "Sicherheitsgarantie, schnelle Ladezeiten & persönlicher Notfall-Support."
  };

  return (
    <section id="zusatzleistungen" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <span id="upsells" className="sr-only" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-3">
            FLEXIBEL ERWEITERBAR
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
            Sinnvolle Zusatzleistungen
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Optionale Bausteine, die dir noch mehr Arbeit abnehmen und für maximale Sichtbarkeit und Sicherheit sorgen.
          </p>
        </div>

        {/* 1. Einmalige Zusatzleistungen (3 Spalten) */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Einmalige Erweiterungen
            </span>
            <div className="h-px bg-slate-200 flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {oneTimeUpsells.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between hover:border-brand-500 hover:shadow-md transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-brand-600 text-white shadow-2xs">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                    <div className="text-xs font-semibold text-brand-700 mb-3">{item.subtitle}</div>

                    <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs text-slate-700 italic mb-5">
                      {item.quote}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                    <Check className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>{item.benefit}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Separierter Bereich: Monatliche Betreuung / Wartung */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Laufende Betreuung &amp; Hosting (Monatlich)
            </span>
            <div className="h-px bg-slate-200 flex-1" />
          </div>

          <div className="bg-white border-2 border-brand-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:border-brand-400 hover:shadow-md transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-center">
              {/* Spalte 1: Icon & Titel & Badges */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2.5 py-0.5 rounded-full">
                      Monatlicher Service
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1">{maintenancePlan.title}</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-black text-brand-700">{maintenancePlan.badge}</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">{maintenancePlan.billingNote}</div>
                </div>
              </div>

              {/* Spalte 2: Beschreibung & Zitat */}
              <div className="lg:col-span-1">
                <div className="text-xs font-semibold text-brand-700 mb-2">{maintenancePlan.subtitle}</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  {maintenancePlan.description}
                </p>
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs text-slate-700 italic">
                  {maintenancePlan.quote}
                </div>
              </div>

              {/* Spalte 3: Vorteile (zentriert) */}
              <div className="lg:col-span-1 flex flex-col justify-center h-full pt-4 lg:pt-0 lg:border-l lg:border-slate-100 lg:pl-8">
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>{maintenancePlan.benefit}</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                    <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <span>Keine Bindung: Jederzeit zum Monatsende kündbar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600 mb-3">
            Nicht sicher, was du brauchst? Lass uns das im 15-minütigen Kennenlerngespräch klären.
          </p>
          <button
            onClick={() => onOpenCalendly('Zusatzleistungen: Beratung')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700 hover:underline cursor-pointer"
          >
            <span>Jetzt unverbindlich besprechen →</span>
          </button>
        </div>

      </div>
    </section>
  );
}
