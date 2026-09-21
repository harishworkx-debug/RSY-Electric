import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, ArrowRight, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import FAQSection, { buildFAQSchema } from '@/components/FAQSection';
import { BUSINESS } from '@/data/business';
import { services } from '@/data/services';
import { mainLocation, nearbyLocations } from '@/data/locations';

export default function ServicePage({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="container-page py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <Link to="/" className="btn-primary">Return Home</Link>
      </div>
    );
  }

  const faqSchema = buildFAQSchema(service.faqs);
  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 5);

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`/${service.slug}`}
        schema={faqSchema}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-900">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-900/60" />
        </div>
        <div className="relative container-page py-16 md:py-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sm text-neutral-400 mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link to="/service-areas" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-neutral-300">{service.shortTitle}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              {service.h1}
            </h1>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              {service.description}
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

      {/* Overview + Benefits */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 prose-content">
              <h2>About {service.shortTitle} in {BUSINESS.mainLocation}</h2>
              <p>{service.overview}</p>

              {service.sections.map((section, i) => (
                <div key={i}>
                  <h2>{section.heading}</h2>
                  <p>{section.body}</p>
                </div>
              ))}
            </div>

            <div>
              <div className="card p-6 sticky top-24">
                <h3 className="text-lg font-bold mb-4">What You Get</h3>
                <ul className="space-y-3 mb-6">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-neutral-700">
                      <CheckCircle2 className="h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-accent w-full">
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
                <p className="text-xs text-neutral-500 text-center mt-3">
                  Connect with a local residential electrical provider
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-page">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={service.image}
              alt={service.imageAlt}
              className="w-full h-[300px] md:h-[450px] object-cover"
            />
          </div>
        </div>
      </section>

      <CTASection
        title={`Need ${service.shortTitle} in ${BUSINESS.mainLocation}?`}
        subtitle="Call now and we will connect you with an available residential electrical service provider."
      />

      {/* Related services */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Other Residential Electrical Services in {BUSINESS.mainLocation}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="card p-5 group hover:-translate-y-1 transition-transform"
              >
                <h3 className="font-bold text-lg mb-1 group-hover:text-primary-700 transition-colors">
                  {s.shortTitle}
                </h3>
                <p className="text-sm text-neutral-600">{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={service.faqs} />

      {/* Service area links */}
      <section className="section-padding bg-neutral-50">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Serving {BUSINESS.mainLocationFull} and Beyond
            </h2>
            <p className="text-neutral-600">
              We connect homeowners throughout the area with residential electrical service providers.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to={`/electrician-${mainLocation.slug}`}
              className="card px-4 py-2 text-sm font-medium text-primary-700 hover:bg-primary-50"
            >
              <MapPin className="inline h-4 w-4 mr-1" />
              {mainLocation.name}
            </Link>
            {nearbyLocations.map((loc) => (
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
