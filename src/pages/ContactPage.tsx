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
              Call now to schedule a service with our expert residential electricians in the Miami Gardens area. We are here to handle all your home electrical needs safely and efficiently.
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
                RSY Electric is your trusted residential electrical service provider. Our team of licensed and experienced electricians is ready to tackle any electrical project in your home. Call us today to schedule your service.
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
                    <p className="text-sm text-neutral-500 mt-1">Call to schedule your electrical service</p>
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
                    <p className="text-neutral-600">Call us to dispatch an electrician to your home</p>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916963.3572104236!2d-81.5228590896281!3d26.13519083080388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9af1301d879b9%3A0xf6ce9a14ab4ea16a!2sRSY%20Electric%2C%20Inc!5e0!3m2!1sen!2sin!4v1789997591043!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
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
            <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              RSY Electric, Inc is committed to providing top-quality residential electrical services. Our electricians are fully licensed, insured, and trained to handle everything from minor repairs to major installations with the highest safety standards.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              We guarantee professional service and stand behind the work we perform. Your home's safety and your satisfaction are our top priorities. This website focuses exclusively on residential electrical services.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
