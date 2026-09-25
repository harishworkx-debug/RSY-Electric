import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { BUSINESS, images } from '@/data/business';
import { mainLocation, nearbyLocations } from '@/data/locations';
import { services } from '@/data/services';

export default function ServiceAreasPage() {
  const allLocations = [mainLocation, ...nearbyLocations];

  return (
    <>
      <SEO
        title="Service Areas | RSY Electric - Miami Gardens & Surrounding Areas"
        description="RSY Electric provides homeowners in Miami Gardens, FL and surrounding areas with expert residential electrical services. View all service areas and call 786-733-0075."
        canonical="/service-areas"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-900">
        <div className="absolute inset-0">
          <img
            src={images.miamiSkyline}
            alt="Miami area residential neighborhoods served by RSY Electric"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-900/60" />
        </div>
        <div className="relative container-page py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Our Service Areas
            </h1>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              RSY Electric provides homeowners throughout Miami-Dade County and northern Broward County with expert residential electrical services. Our main service location is Miami Gardens, Florida, and we serve surrounding communities as well.
            </p>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-accent text-lg px-8 py-4">
              <Phone className="h-5 w-5" />
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Main location */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Main Service Location: {mainLocation.name}
            </h2>
            <p className="text-lg text-neutral-600">
              {mainLocation.description}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Find an Electrician in {mainLocation.name}</h3>
              <p className="text-neutral-600 mb-4">
                Our main service location has dedicated pages for every type of residential electrical service.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to={`/electrician-${mainLocation.slug}`} className="btn-primary text-sm">
                  <MapPin className="h-4 w-4" />
                  Electrician {mainLocation.name}
                </Link>
                <Link to={`/electrical-services-${mainLocation.slug}`} className="btn-outline text-sm">
                  Electrical Services {mainLocation.name}
                </Link>
              </div>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Residential Services in {mainLocation.name}</h3>
              <div className="grid grid-cols-2 gap-2">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}`}
                    className="flex items-center gap-2 text-sm text-neutral-700 hover:text-primary-700"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary-600 flex-shrink-0" />
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All locations */}
      <section className="section-padding bg-neutral-50">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All Service Areas
            </h2>
            <p className="text-lg text-neutral-600">
              We provide expert residential electrical services to homeowners in these communities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allLocations.map((loc) => (
              <div key={loc.slug} className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900">{loc.name}</h3>
                    {loc.slug === mainLocation.slug && (
                      <span className="text-xs text-primary-600 font-semibold">Main Area</span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-neutral-600 mb-4 leading-relaxed line-clamp-3">
                  {loc.description}
                </p>
                <div className="flex flex-col gap-2">
                  <Link
                    to={`/electrician-${loc.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700"
                  >
                    Electrician {loc.name} <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link
                    to={`/electrical-services-${loc.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700"
                  >
                    Electrical Services {loc.name} <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
