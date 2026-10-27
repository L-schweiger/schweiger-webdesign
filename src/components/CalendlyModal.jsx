import React, { useState, useEffect } from 'react';
import { X, Calendar, Settings, ExternalLink } from 'lucide-react';

export default function CalendlyModal({ isOpen, onClose, selectedPackageInfo, calendlyUrl, setCalendlyUrl }) {
  const [showConfig, setShowConfig] = useState(false);
  const [tempUrl, setTempUrl] = useState(calendlyUrl || 'https://calendly.com/office-schweiger-webdesign/30min');

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

  const handleSaveUrl = (e) => {
    e.preventDefault();
    setCalendlyUrl(tempUrl);
    setShowConfig(false);
  };

  const getEmbedUrl = () => {
    try {
      const base = (calendlyUrl || tempUrl).trim();
      const url = new URL(base.startsWith('http') ? base : `https://${base}`);
      url.searchParams.set('embed_domain', window.location.hostname || 'localhost');
      url.searchParams.set('embed_type', 'Inline');
      url.searchParams.set('primary_color', '0d9488');
      return url.toString();
    } catch {
      return calendlyUrl || tempUrl;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Termin buchen – Schweiger Webdesign
              </h3>
              <p className="text-xs text-slate-500">
                Kostenloses, unverbindliches Erstgespräch
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowConfig(!showConfig)}
              title="Calendly Link anpassen"
              className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Selected Package Banner */}
        {selectedPackageInfo && (
          <div className="bg-teal-50/70 border-b border-teal-100 px-6 py-2 text-xs text-teal-800 flex items-center justify-between">
            <span>Thema: <strong>{selectedPackageInfo}</strong></span>
          </div>
        )}

        {/* Config input if toggled */}
        {showConfig && (
          <form onSubmit={handleSaveUrl} className="bg-slate-100 p-3 border-b border-slate-200 flex items-center gap-2 text-xs">
            <span className="text-slate-600 font-medium">Dein Calendly Link:</span>
            <input
              type="text"
              value={tempUrl}
              onChange={(e) => setTempUrl(e.target.value)}
              placeholder="https://calendly.com/dein-name"
              className="flex-1 px-3 py-1.5 bg-white border border-slate-300 rounded-md text-slate-900 text-xs focus:outline-none focus:border-teal-600"
            />
            <button
              type="submit"
              className="px-3 py-1.5 bg-teal-600 text-white rounded-md font-semibold hover:bg-teal-700"
            >
              Speichern
            </button>
          </form>
        )}

        {/* Calendly iFrame Container */}
        <div className="flex-1 overflow-hidden p-2 sm:p-4 bg-slate-50 min-h-[460px]">
          <iframe
            src={getEmbedUrl()}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Calendly Terminbuchung"
            className="w-full h-[460px] rounded-lg bg-white border border-slate-200 shadow-xs"
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-white flex items-center justify-between text-xs text-slate-500">
          <a
            href={calendlyUrl || tempUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:underline flex items-center gap-1"
          >
            In separatem Fenster öffnen <ExternalLink className="w-3 h-3" />
          </a>
          <button
            onClick={onClose}
            className="text-slate-600 hover:text-slate-900 font-semibold"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
