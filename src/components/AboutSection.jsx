import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function AboutSection({ onOpenCalendly }) {
  const points = [
    "Fokus auf Neugründer & KMUs in Österreich",
    "Persönlicher Ansprechpartner – keine wechselnden Agentur-Praktikanten",
    "Verständliche Kommunikation ohne Fachchinesisch",
    "Rechtssicher nach österreichischem WKO- & DSGVO-Recht"
  ];

  return (
    <section id="ueber-mich" className="py-20 sm:py-24 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Linke Spalte: Karte / Profil */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="w-20 h-20 rounded-2xl bg-brand-600 flex items-center justify-center text-white font-extrabold text-3xl mb-6 shadow-md">
                LS
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-1">
                Schweiger Webdesign
              </h3>
              <p className="text-sm font-semibold text-brand-700 mb-4">
                Webdesign für Neugründer in Österreich
              </p>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                „Eine Website für Neugründer muss drei Dinge erfüllen: Sie muss seriös aussehen,
                sofort Vertrauen schaffen und vor allem in kürzester Zeit online sein – ohne ein Vermögen zu kosten.“
              </p>
              <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 flex items-center justify-between">
                <span>Standort: Österreich</span>
                <span className="font-semibold text-emerald-600 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Verfügbar für Neugründer
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
