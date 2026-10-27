import React, { useEffect } from 'react';
import { X, Calendar, ExternalLink } from 'lucide-react';

export default function CalendlyModal({ isOpen, onClose, calendlyUrl }) {
  const urlToUse = calendlyUrl || 'https://calendly.com/office-schweiger-webdesign/30min';

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getEmbedUrl = () => {
    try {
      const base = urlToUse.trim();
      const url = new URL(base.startsWith('http') ? base : `https://${base}`);
      url.searchParams.set('embed_domain', window.location.hostname || 'localhost');
      url.searchParams.set('embed_type', 'Inline');
      url.searchParams.set('primary_color', '0d9488');
      url.searchParams.set('hide_landing_page_details', '1');
      url.searchParams.set('hide_gdpr_banner', '1');
      return url.toString();
    } catch {
      return urlToUse;
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[92vh] max-h-[820px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-white">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900">
                Erstgespräch vereinbaren
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500">
                Kostenlos &amp; unverbindlich • 30 Minuten
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Calendly iFrame Container – randlos, füllt den gesamten Raum */}
        <div className="flex-1 w-full bg-white relative">
          <iframe
            src={getEmbedUrl()}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Calendly Terminbuchung"
            className="w-full h-full border-0"
          />
        </div>

        {/* Schlanker Footer */}
        <div className="px-5 py-2.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
          <a
            href={urlToUse}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:underline flex items-center gap-1 font-medium"
          >
            In neuem Tab öffnen <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={onClose}
            className="text-slate-600 hover:text-slate-900 font-semibold cursor-pointer"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
