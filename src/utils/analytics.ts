/**
 * Utilitário seguro para disparo de eventos no Google Analytics (GA4)
 * Fail-safe: não quebra a aplicação caso o usuário use adblockers ou o script demore a carregar.
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, unknown>
): void => {
  try {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, eventParams);
    }
  } catch {
    // Falha silenciosa para máxima segurança e estabilidade
  }
};
