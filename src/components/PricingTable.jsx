import React from 'react';
import { Calendar, Check, Sparkles, Minus } from 'lucide-react';

export default function PricingTable({ onOpenCalendly }) {
  const tableData = [
    {
      kriterium: "Seitenumfang",
      starter: "1 durchdachte, durchscrollbare Seite (Hero, Über uns, Leistungen, Kontakt, Impressum & DSGVO).",
      business: "3 bis 5 eigenständige Unterseiten (z. B. Startseite, 2–3 Einzelleistungen, Über mich, Kontakt/Karriere)."
    },
    {
      kriterium: "SEO-Reichweite",
      starter: "Rankt primär für deinen Firmennamen und allgemeine Kernbegriffe in deiner Region.",
      business: "Jede Unterseite rankt gezielt für eigene Suchbegriffe (z. B. /badrenovierung-wien und /notdienst)."
    },
    {
      kriterium: "Erklärungsraum",
      starter: "Kompakt & direkt auf den Punkt: Schnelle Kontaktaufnahme oder Anruf als klares Ziel.",
      business: "Ausführlich: Viel Platz für Referenzen, Bildergalerien, Zertifikate, FAQ und Team-Vorstellung."
    },
    {
      kriterium: "Domain",
      starter: "Inklusive Einrichtung deiner Wunschdomain (.at / .com).",
      business: "Inklusive Domain-Setup, professioneller E-Mail-Adressen und technischer DNS-Konfiguration."
    },
    {
      kriterium: "Rechtssicherheit",
      starter: "100% DSGVO- & WKO-konform mit vollständigem Impressum und Datenschutzerklärung.",
      business: "100% DSGVO- & WKO-konform inklusive optimiertem Cookie-Setup und Formularsicherheit."
    }
  ];

  return (
    <section id="pakete" className="py-20 sm:py-24 bg-white border-t border-slate-200 scroll-mt-20">
      {/* Alias für alte Links */}
      <span id="angebot" className="sr-only" />
      <span id="angebote" className="sr-only" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <div className="inline-block text-xs font-bold uppercase tracking-widest text-brand-600 bg-brand-50 px-3 py-1 rounded-full mb-3">
            TRANSPARENTE FIXPREISE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Unser Angebot im direkten Vergleich
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Wähle das Modell, das am besten zu deinen aktuellen Unternehmenszielen passt.
            Keine versteckten Gebühren, garantiert keine monatliche Bindung.
          </p>
        </div>

        {/* MOBILE VIEW: Gestapelte Karten mit Fokus-Hervorhebung (flex flex-col md:hidden) */}
        <div className="flex flex-col gap-6 md:hidden">

          {/* OBERE KARTE: Business-Paket (Hervorgehoben in Teal/Petrol mit Meistgewählt-Badge) */}
          <div className="relative bg-white rounded-2xl border-2 border-brand-500 shadow-lg shadow-brand-900/5 p-6 pt-7">
            {/* Badge oben rechts */}
            <div className="absolute -top-3.5 right-5 bg-brand-600 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>Meistgewählt</span>
            </div>

            {/* Header */}
            <div className="text-xs font-bold uppercase tracking-wider text-brand-700 mb-1">
              Für wachsende Betriebe
            </div>
            <h3 className="text-2xl font-black text-slate-900">Business-Paket</h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-black text-brand-700">ab 1.690 €</span>
              <span className="text-xs font-semibold text-slate-500">Fixpreis</span>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Für Betriebe mit mehreren Kernleistungen und hohem Anspruch an regionale Google-Sichtbarkeit.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => onOpenCalendly('Paket: Business-Paket')}
              className="mt-5 w-full py-3.5 px-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Business-Paket anfragen</span>
            </button>

            {/* Divider */}
            <div className="my-5 border-t border-brand-100" />

            {/* Features mit grünen Häkchen */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                Alles im Business-Paket enthalten:
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                  <strong className="font-semibold text-slate-900">3 bis 5 eigenständige Unterseiten:</strong> z. B. Startseite, Einzelleistungen, Über mich, Kontakt.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                  <strong className="font-semibold text-slate-900">Gezielte SEO-Reichweite pro Unterseite:</strong> rankt für individuelle Suchbegriffe (z. B. /badrenovierung, /notdienst).
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                  <strong className="font-semibold text-slate-900">Ausführlicher Erklärungsraum:</strong> viel Platz für Referenzen, Bildergalerien, Zertifikate, FAQ & Team.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                  <strong className="font-semibold text-slate-900">Domain & E-Mail-Setup:</strong> Wunschdomain, professionelle E-Mail-Adressen & technische DNS-Konfiguration.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                  <strong className="font-semibold text-slate-900">100% DSGVO- & WKO-konform:</strong> inklusive optimiertem Cookie-Setup und Formularsicherheit.
                </span>
              </div>
            </div>
          </div>

          {/* UNTERE KARTE: Start-Paket (Dezenter Rahmen, nicht enthaltene Features dezent markiert) */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6">
            {/* Header */}
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              Kompakter Einstieg
            </div>
            <h3 className="text-2xl font-black text-slate-900">Start-Paket</h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900">890 €</span>
              <span className="text-xs font-semibold text-slate-500">Fixpreis</span>
            </div>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              Perfekt für schnelle Sichtbarkeit von Tag 1 – schlank, professionell und ohne monatliche Bindung.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => onOpenCalendly('Paket: 890-€ Start-Paket')}
              className="mt-5 w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
            >
              <Calendar className="w-4 h-4" />
              <span>Start-Paket anfragen (890 €)</span>
            </button>

            {/* Divider */}
            <div className="my-5 border-t border-slate-100" />

            {/* Features */}
            <div className="space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                Enthaltene Leistungen:
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                  <strong className="font-semibold text-slate-900">1 durchdachte Seite:</strong> durchscrollbare One-Page (Hero, Über uns, Leistungen, Kontakt, Impressum & DSGVO).
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                  <strong className="font-semibold text-slate-900">Regionale Basis-SEO:</strong> auffindbar für deinen Firmennamen und Kernbegriffe in deiner Region.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                  <strong className="font-semibold text-slate-900">Kompakt & direkt:</strong> schneller Anruf oder Nachricht als klares Ziel für Besucher.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                  <strong className="font-semibold text-slate-900">Wunschdomain inklusive:</strong> Einrichtung deiner Wunschadresse (.at / .com).
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                  <strong className="font-semibold text-slate-900">100% DSGVO- & WKO-konform:</strong> vollständiges Impressum und Datenschutzerklärung.
                </span>
              </div>

              {/* Nicht enthaltene Features mit dezentem grauen Strich gekennzeichnet */}
              <div className="pt-2 border-t border-slate-100 space-y-2.5">
                <div className="flex items-start gap-2.5 text-slate-400">
                  <Minus className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-400 leading-snug">
                    Mehrere eigenständige Unterseiten (nur 1 Gesamtsite)
                  </span>
                </div>

                <div className="flex items-start gap-2.5 text-slate-400">
                  <Minus className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-400 leading-snug">
                    Einzelseiten-SEO für separate Suchbegriffe
                  </span>
                </div>

                <div className="flex items-start gap-2.5 text-slate-400">
                  <Minus className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-400 leading-snug">
                    Geschäftliche E-Mail-Postfächer / Google-Profil (als Zusatzleistung buchbar)
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Die Tabelle im schlichten, sauberen Look (Desktop / Tablet >= md) */}
        <div className="hidden md:block border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200">
                  <th className="py-5 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider w-1/4">
                    Kriterium
                  </th>
                  <th className="py-5 px-6 w-[37.5%] border-l border-slate-200 bg-white">
                    <div className="text-xl font-black text-slate-900">Start-Paket</div>
                    <div className="text-sm font-bold text-brand-600 mt-0.5">890 € Fixpreis</div>
                    <div className="text-xs text-slate-500 mt-1">Perfekt für schnelle Sichtbarkeit von Tag 1</div>
                  </th>
                  <th className="py-5 px-6 w-[37.5%] border-l border-slate-200 bg-brand-50/40">
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-black text-slate-900">Business-Paket</div>
                      <span className="text-[10px] font-bold bg-brand-600 text-white px-2 py-0.5 rounded-full">Beliebt</span>
                    </div>
                    <div className="text-sm font-bold text-brand-700 mt-0.5">ab 1.690 € Fixpreis</div>
                    <div className="text-xs text-slate-600 mt-1">Für Betriebe mit mehreren Kernleistungen</div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {tableData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/40"}>
                    <td className="py-5 px-6 font-semibold text-slate-800 align-top">
                      {row.kriterium}
                    </td>
                    <td className="py-5 px-6 text-slate-600 border-l border-slate-200 leading-relaxed align-top">
                      {row.starter}
                    </td>
                    <td className="py-5 px-6 text-slate-700 border-l border-slate-200 bg-brand-50/20 leading-relaxed align-top">
                      {row.business}
                    </td>
                  </tr>
                ))}

                {/* CTA Zeile */}
                <tr className="bg-slate-50/80 border-t border-slate-200">
                  <td className="py-5 px-6 font-medium text-xs text-slate-500">
                    Nächster Schritt
                  </td>
                  <td className="py-5 px-6 border-l border-slate-200 bg-white">
                    <button
                      onClick={() => onOpenCalendly('Paket: 890-€ Start-Paket')}
                      className="w-full py-3 px-4 rounded-lg bg-slate-800 hover:bg-slate-900 text-white font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Starter anfragen (890 €)</span>
                    </button>
                  </td>
                  <td className="py-5 px-6 border-l border-slate-200 bg-brand-50/40">
                    <button
                      onClick={() => onOpenCalendly('Paket: Business-Paket')}
                      className="w-full py-3 px-4 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm transition-all flex items-center justify-center gap-2 shadow-xs"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Business anfragen</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
