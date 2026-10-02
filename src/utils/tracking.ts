/**
 * Utility for basic conversion tracking.
 * This can be wired up to Google Analytics (gtag), Google Tag Manager, or Facebook Pixel.
 */
export const trackConversion = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  } else {
    // Fallback or dev-mode logging
    console.log(`[Tracking] Event: ${eventName}`, eventParams);
  }
};

export const trackCallClick = (location: string = 'header') => {
  trackConversion('click_to_call', {
    placement: location,
  });
};
