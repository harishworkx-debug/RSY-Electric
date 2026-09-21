import { Phone, MapPin, Clock, Mail, ExternalLink } from 'lucide-react';
import SEO from '@/components/SEO';
import { BUSINESS, images } from '@/data/business';

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact RSY Electric | Connect With a Residential Electrician"
        description="Contact RSY Electric to connect with a residential electrical service provider in Miami Gardens, FL and surrounding areas. Call 305-206-1431."
        canonical="/contact"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-900">
        <div className="absolute inset-0">
          <img
            src={images.panelGloves}
            alt="Electrician working safely on a residential electrical panel"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-900/60" />
        </div>
        <div className="relative container-page py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Contact RSY Electric
            </h1>
            <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
              Call now to connect with an available residential electrical service provider in the Miami Gardens area. We help homeowners find local providers for their home electrical needs.
            </p>
            <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-accent text-lg px-8 py-4">
              <Phone className="h-5 w-5" />
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get Connected</h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                RSY Electric is a lead generation and connection service. We do not perform electrical work directly. Instead, we connect homeowners with available residential electrical service providers in their area. Call us and we will help you find a local provider for your home electrical needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Phone</h3>
                    <a
                      href={`tel:${BUSINESS.phoneRaw}`}
                      className="text-lg text-primary-600 hover:text-primary-700 transition-colors"
                    >
                      {BUSINESS.phone}
                    </a>
                    <p className="text-sm text-neutral-500 mt-1">Call to connect with a residential electrical provider</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Service Area</h3>
                    <p className="text-neutral-600">{BUSINESS.mainLocationFull} and surrounding areas</p>
                    <p className="text-sm text-neutral-500 mt-1">{BUSINESS.serviceArea}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">Email</h3>
                    <p className="text-neutral-600">{BUSINESS.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600 flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">How to Get Help</h3>
                    <p className="text-neutral-600">Call us and we will connect you with an available provider</p>
                    <p className="text-sm text-neutral-500 mt-1">For emergencies like sparking or fire, call 911</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Find Us on the Map</h2>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-neutral-200">
                <iframe
                  src="https://maps.google.com/maps?q=Miami+Gardens,+FL&output=embed"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${BUSINESS.mainLocationFull}`}
                />
              </div>
              <div className="mt-4">
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
                >
                  View on Google Maps
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section-padding bg-neutral-50">
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-2xl bg-white border border-neutral-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Lead Generation Disclaimer</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              RSY Electric, Inc is a lead generation and connection service. We help homeowners find and connect with available independent residential electrical service providers in their area. We are not an electrical contractor and do not directly perform electrical work.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              We do not guarantee the availability of any specific service provider. Any work performed is done by independent providers, and homeowners should verify the qualifications, licensing, and insurance of any provider they engage with. This website focuses exclusively on residential electrical services.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
