import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

export default function ImpressumPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Schlichte Kopfzeile */}
      <header className="border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="/" className="font-bold text-slate-900 text-sm hover:text-brand-600 transition-colors">
            Schweiger Webdesign
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Zurück zur Startseite</span>
          </a>
        </div>
      </header>

      {/* Einfacher Fließtext */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16 text-sm text-slate-700 leading-relaxed space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Impressum</h1>
          <p className="text-slate-500 text-xs">
            Informationspflicht laut § 5 E-Commerce Gesetz und Offenlegungspflicht gemäß § 25 Mediengesetz.
          </p>
        </div>

        <section className="space-y-1">
          <p className="font-semibold text-slate-900">Lukas Schweiger</p>
          <p>Hermelinweg 19, 1220 Wien</p>
          <p>Österreich</p>
        </section>

        <section className="space-y-1">
          <h2 className="font-semibold text-slate-900">Kontakt</h2>
          <p>E-Mail: <a href="mailto:office@schweiger-webdesign.at" className="text-slate-900 underline hover:text-brand-600">office@schweiger-webdesign.at</a></p>
          <p>Website: <a href="https://schweiger-webdesign.at" className="text-slate-900 underline hover:text-brand-600">www.schweiger-webdesign.at</a></p>
        </section>

        <section className="space-y-1">
          <h2 className="font-semibold text-slate-900">Unternehmensgegenstand</h2>
          <p>Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik (Webdesign &amp; Webentwicklung).</p>
        </section>

        <section className="space-y-1">
          <h2 className="font-semibold text-slate-900">Kammerzugehörigkeit</h2>
          <p>Mitglied der Wirtschaftskammer Österreich (WKO)</p>
        </section>

        <section className="space-y-1">
          <h2 className="font-semibold text-slate-900">Anwendbare Rechtsvorschriften</h2>
          <p>
            Gewerbeordnung (GewO), Mediengesetz (MedienG), E-Commerce-Gesetz (ECG).<br />
            Einsehbar im Rechtsinformationssystem des Bundes unter{' '}
            <a href="https://www.ris.bka.gv.at" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-600">
              www.ris.bka.gv.at
            </a>.
          </p>
        </section>

        <section className="space-y-1">
          <h2 className="font-semibold text-slate-900">Berufsbezeichnung &amp; Aufsichtsbehörde</h2>
          <p>Berufsbezeichnung: Webdesigner / IT-Dienstleister</p>
          <p>Aufsichtsbehörde: Zuständige Gewerbebehörde in Österreich</p>
        </section>

        <section className="space-y-2 pt-4 border-t border-slate-200 text-xs text-slate-600 leading-normal">
          <h2 className="font-semibold text-slate-900 text-sm">Haftung für Inhalte dieser Website</h2>
          <p>
            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>
        </section>

        <section className="space-y-2 text-xs text-slate-600 leading-normal">
          <h2 className="font-semibold text-slate-900 text-sm">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>

        <section className="space-y-2 text-xs text-slate-600 leading-normal">
          <h2 className="font-semibold text-slate-900 text-sm">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
        </section>

        <div className="pt-8">
          <a
            href="/"
            className="text-xs text-slate-600 hover:text-slate-900 underline"
          >
            ← Zurück zur Startseite
          </a>
        </div>
      </main>

      {/* Schlichter Footer */}
      <footer className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Schweiger Webdesign
      </footer>
    </div>
  );
}
