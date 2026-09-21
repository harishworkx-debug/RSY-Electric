import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/business';

export default function StickyCallButton() {
  return (
    <a
      href={`tel:${BUSINESS.phoneRaw}`}
      className="sm:hidden fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-accent-500 px-5 py-3.5 font-bold text-neutral-900 shadow-2xl shadow-accent-500/40 animate-pulse-ring active:scale-95 transition-transform"
      aria-label={`Call ${BUSINESS.phone}`}
    >
      <Phone className="h-5 w-5" />
      <span className="text-sm">Call Now</span>
    </a>
  );
}
