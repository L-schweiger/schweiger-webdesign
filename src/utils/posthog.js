import posthog from 'posthog-js';

// Konfiguration aus Umgebungsvariablen (Vite)
const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_KEY || import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = import.meta.env.VITE_POSTHOG_HOST || import.meta.env.VITE_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com';

let isInitialized = false;

/**
 * Initialisiert PostHog inklusive Session Replay mit DSGVO-freundlichen Einstellungen.
 */
export const initPostHog = () => {
  if (typeof window === 'undefined') return posthog;
  if (isInitialized) return posthog;

  if (!POSTHOG_KEY || POSTHOG_KEY.trim() === '' || POSTHOG_KEY.startsWith('phc_your_') || POSTHOG_KEY.includes('xxx')) {
    if (import.meta.env.DEV) {
      console.info(
        '[PostHog] Kein gültiger VITE_POSTHOG_KEY gefunden. Session-Replays und Tracking bleiben lokal deaktiviert. Trage deinen Schlüssel in die .env-Datei ein.'
      );
    }
    return posthog;
  }

  try {
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      // DSGVO & Privacy: Nur identifizierte Profile erstellen, um Ressourcen zu sparen
      person_profiles: 'identified_only',
      // Automatische Pageviews bei SPAs (erkennt pushState / popState)
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: true,
      // Session Replay Konfiguration
      disable_session_recording: false,
      session_recording: {
        // Alle Eingabefelder maskieren (DSGVO-konformer Schutz sensibler Eingaben)
        maskAllInputs: true,
        // Elemente mit der Klasse .ph-mask unkenntlich machen
        maskTextSelector: '.ph-mask',
        // Elemente mit .ph-no-mask sichtbar lassen
        unmaskTextSelector: '.ph-no-mask',
      },
      loaded: (ph) => {
        // Session Recording bei Initialisierung sicher starten
        if (typeof ph.startSessionRecording === 'function') {
          ph.startSessionRecording();
        }
        if (import.meta.env.DEV) {
          console.info('[PostHog] Initialisiert & Session-Recording aktiv auf:', POSTHOG_HOST);
        }
      },
    });

    isInitialized = true;
  } catch (error) {
    console.warn('[PostHog] Fehler bei der Initialisierung:', error);
  }

  return posthog;
};

/**
 * Sicheres Erfassen eines benutzerdefinierten Events in PostHog.
 * Wird z. B. auf der Session-Replay-Timeline angezeigt.
 */
export const capturePostHogEvent = (eventName, properties = {}) => {
  if (typeof window === 'undefined') return;
  try {
    if (posthog && typeof posthog.capture === 'function') {
      posthog.capture(eventName, properties);
    }
  } catch (error) {
    console.warn('[PostHog] capturePostHogEvent Fehler:', error);
  }
};

export { posthog };
export default posthog;

