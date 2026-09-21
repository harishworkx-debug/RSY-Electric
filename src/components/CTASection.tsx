import { Phone, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { BUSINESS } from '@/data/business';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  variant?: 'light' | 'dark';
}

export default function CTASection({
  title = 'Need a Residential Electrician?',
  subtitle = 'Call now and we will connect you with an available residential electrical service provider in your area.',
  variant = 'dark',
}: CTASectionProps) {
  const isDark = variant === 'dark';

  return (
    <section className={`section-padding ${isDark ? 'bg-neutral-900' : 'bg-primary-50'}`}>
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6 ${
            isDark ? 'bg-primary-600/20 text-primary-300' : 'bg-primary-100 text-primary-700'
          }`}>
            <ShieldCheck className="h-4 w-4" />
            Residential Electrical Help
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-neutral-900'}`}>
            {title}
          </h2>
          <p className={`text-lg mb-8 ${isDark ? 'text-neutral-300' : 'text-neutral-600'}`}>
            {subtitle}
          </p>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="btn-accent text-lg px-8 py-4"
          >
            <Phone className="h-5 w-5" />
            Call {BUSINESS.phone}
          </a>
          <div className={`mt-8 flex flex-wrap items-center justify-center gap-6 text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Connect with local providers
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Serving {BUSINESS.mainLocationFull}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
