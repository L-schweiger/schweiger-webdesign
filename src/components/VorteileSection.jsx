import React from 'react';
import { Clock, ShieldCheck, BadgePercent, Search, Mail, Users } from 'lucide-react';

export default function VorteileSection({ onOpenCalendly }) {
  const vorteile = [
    {
      icon: Clock,
      title: "In nur 10 Tagen online",
      desc: "Keine zeitraubenden Feedback-Schleifen. Nach unserem Erstgespräch steht dein moderner Webauftritt in Rekordzeit schlüsselfertig im Netz."
    },
    {
      icon: BadgePercent,
      title: "Einmaliger Fixpreis ab 890 €",
      desc: "Keine bösen Überraschungen oder teure Nachberechnungen. Du zahlst genau das, was wir vereinbaren – transparent und fair kalkuliert."
    },
    {
      icon: ShieldCheck,
      title: "100% DSGVO- & WKO-konform",
      desc: "Rechtssicher in Österreich: Vollständiges Impressum nach österr. Mediengesetz, saubere Datenschutzerklärung und Cookie-konforme Umsetzung."
    }
  ];

  return (
    <section id="vorteile" className="py-20 sm:py-24 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3.5 py-1 rounded-full mb-3">
            DEINE VORTEILE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Die richtige Wahl für Neugründer
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Alles, was du für einen überzeugenden ersten Eindruck im Netz brauchst –
            ohne versteckte Kosten und ohne komplizierten Fachjargon.
          </p>
        </div>

        {/* Grid 3x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vorteile.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-brand-300 hover:bg-white hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-brand-50 via-slate-50 to-brand-50 border border-brand-200/60 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-lg font-bold text-slate-900 mb-1">
              Bereit, in 10 Tagen mit deiner neuen Website online zu gehen?
            </div>
            <p className="text-sm text-slate-600">
              Lass uns kurz 15 Minuten über dein Projekt sprechen. Völlig unverbindlich und kostenlos.
            </p>
          </div>
          <button
            onClick={() => onOpenCalendly('Vorteile CTA: Erstgespräch')}
            className="shrink-0 px-6 py-3.5 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm shadow-xs transition-all transform hover:-translate-y-0.5"
          >
            Gratis Erstgespräch vereinbaren
          </button>
        </div>

      </div>
    </section>
  );
}
