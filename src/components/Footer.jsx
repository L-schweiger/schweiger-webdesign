import React from 'react';
import { Calendar } from 'lucide-react';

export default function Footer({ onOpenCalendly }) {
  return (
    <footer className="bg-white border-t border-slate-200 py-12 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div>
          <div className="font-extrabold text-base text-slate-900 tracking-tight">
            Schweiger Webdesign
          </div>
          <div className="text-[11px] font-normal text-slate-600 mt-0.5">
            Webdesign für Neugründer &amp; kleine Betriebe in Österreich
          </div>
          <p className="text-slate-400 text-xs mt-1">
            Schlüsselfertig &amp; rechtssicher in 10 Tagen online.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-slate-600">
          <a href="/#pakete" className="hover:text-brand-600 transition-colors">
            Unser Angebot
          </a>
          <span>•</span>
          <a href="/#zusatzleistungen" className="hover:text-brand-600 transition-colors">
            Zusatzleistungen
          </a>
          <span>•</span>
          <a href="/#vorteile" className="hover:text-brand-600 transition-colors">
            Vorteile
          </a>
          <span>•</span>
          <a href="/#faq" className="hover:text-brand-600 transition-colors">
            FAQ
          </a>
          <span>•</span>
          <a href="/impressum" className="hover:text-brand-600 transition-colors">
            Impressum
          </a>
        </div>

        {/* Action & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-right">
          <div className="text-slate-400">
            © {new Date().getFullYear()} Schweiger Webdesign. Alle Rechte vorbehalten.
          </div>
        </div>

      </div>
    </footer>
  );
}
