/**
 * Hilfsfunktionen für Analytics & Conversion-Tracking (Umami & PostHog).
 */
import { capturePostHogEvent } from './posthog';

// Event erfassen (z. B. CTA-Klicks oder QR-Code Scans)
export const trackEvent = (eventName, data = {}) => {
  if (typeof window === 'undefined') return;

  // 1. PostHog erfassen (erscheint u. a. auf der Timeline der Session-Replays)
  capturePostHogEvent(eventName, data);

  // 2. Umami Analytics erfassen
  const send = () => {
    if (window.umami && typeof window.umami.track === 'function') {
      window.umami.track(eventName, data);
      return true;
    }
    return false;
  };

  if (!send()) {
    // Falls das Umami-Script noch im Hintergrund lädt, bis zu 3 Sekunden warten
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (send() || attempts >= 20) {
        clearInterval(interval);
      }
    }, 150);
  }
};

// Manuelle Pageview erfassen (wichtig bei SPA-Redirects wie /termin -> /)
export const trackPageView = (url) => {
  if (typeof window === 'undefined') return;

  // 1. PostHog erfassen
  capturePostHogEvent('$pageview', {
    $current_url: window.location.origin + (url || window.location.pathname),
  });

  // 2. Umami erfassen
  const send = () => {
    if (window.umami && typeof window.umami.track === 'function') {
      window.umami.track((props) => ({ ...props, url }));
      return true;
    }
    return false;
  };

  if (!send()) {
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (send() || attempts >= 20) {
        clearInterval(interval);
      }
    }, 150);
  }
};
