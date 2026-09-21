import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import { BUSINESS, images } from '@/data/business';
import { services } from '@/data/services';
import { mainLocation, nearbyLocations, type LocationInfo } from '@/data/locations';

interface LocationPageProps {
  location: LocationInfo;
  variant: 'electrician' | 'electrical-services';
}

export default function LocationPage({ location, variant }: LocationPageProps) {
  const isElectrician = variant === 'electrician';
  const isMain = location.slug === mainLocation.slug;

  const metaTitle = isElectrician
    ? `Electrician ${location.name}, FL | Residential Electrician ${location.name}`
    : `Electrical Services ${location.name}, FL | Residential Electrical Services`;

  const metaDescription = isElectrician
    ? `Connect with a residential electrician in ${location.name}, FL for home electrical repair, panel upgrades, and more. Call 305-206-1431.`
    : `Residential electrical services in ${location.name}, FL — repair, wiring, lighting, panels, and more. Connect with a local provider. Call 305-206-1431.`;

  const h1 = isElectrician
    ? `Electrician in ${location.fullName}`
    : `Electrical Services in ${location.fullName}`;

  const canonical = isElectrician
    ? `/electrician-${location.slug}`
    : `/electrical-services-${location.slug}`;

  return (
    <>
      <SEO
        title={metaTitle}
        description={metaDescription}
        canonical={canonical}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-900">
        <div className="absolute inset-0">
          <img
            src={images.miamiHouses}
            alt={`Residential homes in ${location.name}, Florida`}
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-900/60" />
        </div>
        <div className="relative container-page py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sm text-neutral-400 mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/service-areas" className="hover:text-white transition-colors">Service Areas</Link>
              <span>/</span>
              <span className="text-neutral-300">{location.name}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              {h1}
            </h1>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              {isElectrician
                ? `Looking for a residential electrician in ${location.name}? RSY Electric connects homeowners with available residential electrical service providers in the ${location.name} area. Call now to get connected.`
                : `Need residential electrical services in ${location.name}? RSY Electric connects homeowners with available residential electrical service providers serving the ${location.name} area.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-accent text-lg px-8 py-4">
                <Phone className="h-5 w-5" />
                Call {BUSINESS.phone}
              </a>
              <Link to="/contact" className="btn-outline text-lg px-8 py-4 border-white text-white hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About the area */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                About {location.fullName}
              </h2>
              <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
                {location.description}
              </p>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                {isElectrician
                  ? `If you are a homeowner in ${location.name} and need residential electrical help — whether it is a flickering light, a tripping breaker, or a full panel upgrade — RSY Electric can connect you with an available local service provider. We focus exclusively on residential electrical work.`
                  : `From electrical repair and outlet replacement to lighting installation and surge protection, we help ${location.name} homeowners find residential electrical service providers for a wide range of home electrical needs.`}
              </p>
              {location.neighborhoods.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">Neighborhoods We Connect With Providers In:</h3>
                  <div className="flex flex-wrap gap-2">
                    {location.neighborhoods.map((n) => (
                      <span key={n} className="rounded-lg bg-neutral-100 px-3 py-1.5 text-sm text-neutral-700">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div>
              <img
                src={images.miamiPalm}
                alt={`Residential neighborhood in ${location.name}, Florida`}
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* For main location: show service links */}
      {isMain && (
        <section className="section-padding bg-neutral-50">
          <div className="container-page">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Residential Electrical Services in {location.name}
              </h2>
              <p className="text-lg text-neutral-600">
                As our main service location, {location.name} has dedicated service pages for every type of residential electrical work.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/${s.slug}`}
                  className="card p-5 group hover:-translate-y-1 transition-transform"
                >
                  <h3 className="font-bold text-lg mb-1 group-hover:text-primary-700 transition-colors">
                    {s.shortTitle}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-3">{s.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* For non-main locations: show what services are available */}
      {!isMain && (
        <section className="section-padding bg-neutral-50">
          <div className="container-page">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Residential Electrical Services Available in {location.name}
              </h2>
              <p className="text-lg text-neutral-600">
                Connect with residential electrical service providers for these common home electrical needs in {location.name}.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                'Electrical Repair',
                'Outlet Repair & Replacement',
                'Light Switch Repair',
                'Lighting Installation',
                'Electrical Panel Service',
                'Residential Wiring',
                'Ceiling Fan Installation',
                'EV Charger Installation',
                'Electrical Inspections',
                'Whole-Home Surge Protection',
                'Generator Electrical Service',
                'Residential Electrician',
              ].map((item) => (
                <div key={item} className="card p-5">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    <span className="font-medium text-neutral-800">{item}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-neutral-600 mb-4">
                For detailed service information, see our main location service pages in {mainLocation.name}.
              </p>
              <Link to={`/electrical-services-${mainLocation.slug}`} className="btn-outline">
                View {mainLocation.name} Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Need an Electrician in ${location.name}?`}
        subtitle={`Call now and we will connect you with an available residential electrical service provider in the ${location.name} area.`}
      />

      {/* Other location links */}
      <section className="section-padding bg-neutral-50">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Other Service Areas Near {location.name}
            </h2>
            <p className="text-neutral-600">
              We connect homeowners throughout Miami-Dade and northern Broward County with residential electrical service providers.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {!isMain && (
              <Link
                to={`/electrician-${mainLocation.slug}`}
                className="card px-4 py-2 text-sm font-semibold text-primary-700 hover:bg-primary-50"
              >
                <MapPin className="inline h-4 w-4 mr-1" />
                {mainLocation.name} (Main Area)
              </Link>
            )}
            {nearbyLocations
              .filter((l) => l.slug !== location.slug)
              .map((loc) => (
                <Link
                  key={loc.slug}
                  to={`/electrician-${loc.slug}`}
                  className="card px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-primary-50 hover:text-primary-700"
                >
                  <MapPin className="inline h-4 w-4 mr-1" />
                  {loc.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
