import React, { useState } from 'react';
import { Calendar, Mail, Phone, ChevronDown, ChevronUp } from 'lucide-react';

export default function ContactSection({ onOpenCalendly }) {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "Wie läuft das 15-minütige Erstgespräch ab?",
      a: "Völlig unkompliziert per Telefon oder Google Meet. Wir sprechen kurz über dein Geschäftsmodell, wer deine Kunden sind und ob der 890-€ Start-Paket oder das Business-Paket besser zu dir passt. Danach erhältst du ein klares schriftliches Angebot."
    },
    {
      q: "Brauche ich vorab schon fertige Texte und Bilder?",
      a: "Nein! Genau das ist oft die größte Hürde für Neugründer. Wenn du bereits Material hast, verwenden wir es gerne. Wenn nicht, reichen mir ein paar Stichpunkte zu deinen Leistungen, und ich erstelle die Texte und die Bildauswahl für dich."
    },
    {
      q: "Gibt es versteckte Folgekosten oder eine monatliche Bindung?",
      a: "Garantiert nicht. Der Fixpreis (ab 890 €) ist einmalig. Die Website gehört zu 100% dir. Für Domain & Webspace fallen bei Standard-Hostern in der Regel lediglich ca. 4–8 € pro Monat an – ohne jeden Vertrag mit mir, es sei denn, du buchst die optionale Wartung."
    },
    {
      q: "Ist die Website wirklich rechtssicher in Österreich?",
      a: "Ja. Ich richte dein Impressum nach den Vorgaben der Wirtschaftskammer (WKO) und des Mediengesetzes ein, binde eine DSGVO-konforme Datenschutzerklärung ein und achte auf Cookie-Freiheit bzw. rechtssichere Einbettungen."
    }
  ];

  return (
    <section id="kontakt" className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* FAQ Accordion */}
        <div id="faq" className="max-w-3xl mx-auto scroll-mt-24">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Häufig gestellte Fragen (FAQ)
            </h3>
            <p className="text-slate-600 text-sm">
              Antworten auf die wichtigsten Fragen von Neugründern.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full text-left py-4 px-6 flex items-center justify-between font-semibold text-slate-900 text-base hover:text-brand-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-brand-600 shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-4" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
