import { Link } from 'react-router-dom';
import { Phone, Zap, MapPin, Mail } from 'lucide-react';
import { BUSINESS } from '@/data/business';
import { services } from '@/data/services';
import { mainLocation, nearbyLocations } from '@/data/locations';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-page py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <span className="font-heading text-lg font-bold text-white">RSY Electric</span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400 mb-4">
              Providing expert residential electrical services to Miami Gardens homeowners. We handle all your home electrical needs safely and professionally.
            </p>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-2 text-accent-400 font-semibold hover:text-accent-300 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Residential Services
            </h3>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}`}
                    className="text-neutral-400 hover:text-primary-300 transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More services + areas */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              More Services
            </h3>
            <ul className="space-y-2 text-sm mb-6">
              {services.slice(7).map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}`}
                    className="text-neutral-400 hover:text-primary-300 transition-colors"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Service Areas
            </h3>
            <Link
              to={`/electrician-${mainLocation.slug}`}
              className="block text-sm text-neutral-400 hover:text-primary-300 transition-colors mb-1"
            >
              {mainLocation.name}
            </Link>
            {nearbyLocations.slice(0, 5).map((l) => (
              <Link
                key={l.slug}
                to={`/electrician-${l.slug}`}
                className="block text-sm text-neutral-400 hover:text-primary-300 transition-colors mb-1"
              >
                {l.name}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-400" />
                <span className="text-neutral-400">
                  Serving {BUSINESS.mainLocationFull} and surrounding areas
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary-400" />
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="text-neutral-400 hover:text-primary-300 transition-colors"
                >
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary-400" />
                <span className="text-neutral-400">{BUSINESS.email}</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-neutral-600 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors mt-4"
            >
              Contact Page
            </Link>
          </div>
        </div>

        {/* About */}
        <div className="mt-12 pt-8 border-t border-neutral-800">
          <div className="rounded-lg bg-neutral-800/50 p-4 md:p-6">
            <p className="text-xs leading-relaxed text-neutral-400">
              <strong className="text-neutral-300">RSY Electric, Inc:</strong>{' '}
              We are a dedicated residential electrical service provider serving Miami Gardens and surrounding areas. Our licensed and insured electricians are committed to providing safe, reliable, and high-quality electrical work for your home. From simple repairs to full panel upgrades, we stand behind the quality of our services. This website focuses exclusively on residential electrical services.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-neutral-500">
            <Link to="/service-areas" className="hover:text-neutral-300 transition-colors">Service Areas</Link>
            <Link to="/contact" className="hover:text-neutral-300 transition-colors">Contact</Link>
            <Link to="/sitemap.xml" className="hover:text-neutral-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
