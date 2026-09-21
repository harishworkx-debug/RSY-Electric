import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Zap } from 'lucide-react';
import { BUSINESS } from '@/data/business';
import { services } from '@/data/services';
import { mainLocation, nearbyLocations } from '@/data/locations';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top bar */}
      <div className="bg-neutral-900 text-white text-sm hidden md:block">
        <div className="container-page flex items-center justify-between py-2">
          <p className="text-neutral-300">
            Providing Miami Gardens homeowners with expert residential electrical services
          </p>
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="flex items-center gap-2 font-semibold text-accent-400 hover:text-accent-300 transition-colors"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container-page">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 text-white group-hover:bg-primary-700 transition-colors">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <span className="block font-heading text-lg font-bold text-neutral-900 leading-none">
                  RSY Electric
                </span>

              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-primary-700 bg-primary-50' : 'text-neutral-700 hover:text-primary-700 hover:bg-neutral-50'
                }`}
              >
                Home
              </Link>

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="px-3 py-2 rounded-md text-sm font-medium text-neutral-700 hover:text-primary-700 hover:bg-neutral-50 transition-colors flex items-center gap-1">
                  Services
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 w-80 pt-1">
                    <div className="rounded-xl border border-neutral-200 bg-white shadow-xl overflow-hidden">
                      <div className="max-h-96 overflow-y-auto">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/${s.slug}`}
                            className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors border-b border-neutral-100 last:border-0"
                          >
                            {s.shortTitle}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Service areas dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <button className="px-3 py-2 rounded-md text-sm font-medium text-neutral-700 hover:text-primary-700 hover:bg-neutral-50 transition-colors flex items-center gap-1">
                  Service Areas
                </button>
                {areasOpen && (
                  <div className="absolute top-full left-0 w-64 pt-1">
                    <div className="rounded-xl border border-neutral-200 bg-white shadow-xl overflow-hidden">
                      <Link
                        to={`/electrician-${mainLocation.slug}`}
                        className="block px-4 py-2.5 text-sm font-semibold text-primary-700 hover:bg-primary-50 transition-colors border-b border-neutral-100"
                      >
                        {mainLocation.name} (Main Area)
                      </Link>
                      {nearbyLocations.map((l) => (
                        <Link
                          key={l.slug}
                          to={`/electrician-${l.slug}`}
                          className="block px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700 transition-colors border-b border-neutral-100 last:border-0"
                        >
                          {l.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/service-areas"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/service-areas') ? 'text-primary-700 bg-primary-50' : 'text-neutral-700 hover:text-primary-700 hover:bg-neutral-50'
                }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/contact') ? 'text-primary-700 bg-primary-50' : 'text-neutral-700 hover:text-primary-700 hover:bg-neutral-50'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Call button */}
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="btn-accent hidden sm:inline-flex text-sm md:text-base"
            >
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
              Call Now
            </a>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-neutral-700 hover:bg-neutral-100"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-neutral-200 bg-white max-h-[80vh] overflow-y-auto">
            <nav className="container-page py-4 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-700"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              <div className="pt-2 pb-1">
                <p className="px-3 text-xs font-semibold text-neutral-400 uppercase tracking-wider">Services</p>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    className="block px-3 py-2 rounded-md text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.shortTitle}
                  </Link>
                ))}
              </div>

              <div className="pt-2 pb-1">
                <p className="px-3 text-xs font-semibold text-neutral-400 uppercase tracking-wider">Service Areas</p>
              </div>
              <Link
                to={`/electrician-${mainLocation.slug}`}
                className="block px-3 py-2 rounded-md text-sm font-semibold text-primary-700 hover:bg-primary-50"
                onClick={() => setMobileOpen(false)}
              >
                {mainLocation.name} (Main Area)
              </Link>
              {nearbyLocations.map((l) => (
                <Link
                  key={l.slug}
                  to={`/electrician-${l.slug}`}
                  className="block px-3 py-2 rounded-md text-sm text-neutral-700 hover:bg-primary-50 hover:text-primary-700"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.name}
                </Link>
              ))}

              <div className="pt-2 border-t border-neutral-200 mt-2">
                <Link
                  to="/service-areas"
                  className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-700"
                  onClick={() => setMobileOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-md text-base font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-700"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Link>
              </div>

              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="btn-accent w-full mt-4"
              >
                <Phone className="h-5 w-5" />
                Call {BUSINESS.phone}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
