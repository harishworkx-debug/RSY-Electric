import { Link } from 'react-router-dom';
import {
  Phone, Zap, Wrench, Plug, ToggleRight, Lightbulb, Cable, Fan,
  BatteryCharging, Search, Shield, PlugZap, Home, MapPin, Clock,
  ShieldCheck, CheckCircle2, ArrowRight, Star,
} from 'lucide-react';
import SEO from '@/components/SEO';
import CTASection from '@/components/CTASection';
import FAQSection, { buildFAQSchema } from '@/components/FAQSection';
import { BUSINESS, images } from '@/data/business';
import { services } from '@/data/services';
import { mainLocation, nearbyLocations } from '@/data/locations';
import { homeFaqs } from '@/data/faqs';

const iconMap: Record<string, any> = {
  Home, Wrench, Plug, ToggleRight, Lightbulb, Cable, Fan,
  BatteryCharging, Search, Shield, PlugZap, Zap,
};

export default function HomePage() {
  const faqSchema = buildFAQSchema(homeFaqs);

  return (
    <>
      <SEO
        title="Residential Electrician Miami Gardens, FL | RSY Electric"
        description="Expert residential electrical services in Miami Gardens, FL. Electrical repair, panel upgrades, EV chargers, lighting, and more. Call 305-206-1431."
        canonical="/"
        schema={faqSchema}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-neutral-900">
        <div className="absolute inset-0">
          <img
            src={images.heroElectrician}
            alt="Residential electrician examining a home electrical panel in Miami Gardens, Florida"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-neutral-900/60" />
        </div>
        <div className="relative container-page py-20 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent-500/20 px-4 py-1.5 text-sm font-medium text-accent-300 mb-6 animate-fade-in">
              <MapPin className="h-4 w-4" />
              Serving {BUSINESS.mainLocationFull}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up">
              Residential Electrician in Miami Gardens, FL
            </h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed">
              Expert residential electrical services for safe, reliable home electrical work. From outlet repair to panel upgrades, our licensed electricians are here to help.
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
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-neutral-400">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent-400" />
                Residential Only
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent-400" />
                Expert Local Electricians
              </span>
              <span className="flex items-center gap-2">
                <Home className="h-4 w-4 text-accent-400" />
                Home Electrical Experts
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-neutral-200">
        <div className="container-page py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Home, label: 'Residential Only', desc: 'No commercial or industrial' },
              { icon: MapPin, label: 'Miami Gardens', desc: 'Main service location' },
              { icon: Phone, label: 'Call Now', desc: 'Fast & reliable service' },
              { icon: ShieldCheck, label: 'Safe & Reliable', desc: 'Code-compliant work' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50 text-primary-600 flex-shrink-0">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{item.label}</p>
                  <p className="text-xs text-neutral-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Trusted Residential Electrical Experts in Miami Gardens
              </h2>
              <p className="text-lg text-neutral-600 mb-4 leading-relaxed">
                RSY Electric provides homeowners in Miami Gardens, Florida with expert residential electrical services. Whether you need a simple outlet repair or a full electrical panel upgrade, our team of licensed professionals can handle the job safely and efficiently.
              </p>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                We focus exclusively on residential electrical work — no commercial, industrial, or business services. Just honest, high-quality home electrical services for Miami Gardens homeowners and surrounding communities.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Electrical repair and troubleshooting',
                  'Panel upgrades and breaker replacement',
                  'Lighting installation and ceiling fans',
                  'EV charger installation',
                  'Whole-home surge protection',
                  'Electrical safety inspections',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary-600 flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary">
                <Phone className="h-5 w-5" />
                Call {BUSINESS.phone}
              </a>
            </div>
            <div className="relative">
              <img
                src={images.panelWork}
                alt="Electrician working on a residential circuit breaker panel in Miami Gardens"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-5 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-500 text-neutral-900">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900">Residential Focus</p>
                    <p className="text-sm text-neutral-500">Home electrical experts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Residential Electrical Services in Miami Gardens
            </h2>
            <p className="text-lg text-neutral-600">
              From minor repairs to major upgrades, our expert electricians handle every home electrical need.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Zap;
              return (
                <Link
                  key={service.slug}
                  to={`/${service.slug}`}
                  className="card group p-6 hover:-translate-y-1 transition-transform"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 text-primary-600 mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-700 transition-colors">
                    {service.shortTitle}
                  </h3>
                  <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 group-hover:text-primary-700">
                    Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why choose us / Lead-gen positioning */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={images.multimeterPanel}
                alt="Electrician testing residential electrical connections in a Miami Gardens home"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Service Process
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                At RSY Electric, we make it easy to get your home electrical problems solved quickly and safely. Here is how it works:
              </p>
              <div className="space-y-5">
                {[
                  { step: '1', title: 'Call Us', desc: 'Call 305-206-1431 and tell us about your residential electrical need.' },
                  { step: '2', title: 'Schedule Service', desc: 'We schedule a convenient time for our expert electrician to visit your home.' },
                  { step: '3', title: 'Get It Done', desc: 'Our electrician assesses the issue and performs the work safely and up to code.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-600 text-white font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">{item.title}</h3>
                      <p className="text-neutral-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-primary mt-8">
                <Phone className="h-5 w-5" />
                Schedule Service Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service area preview */}
      <section className="section-padding bg-neutral-50">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Service Areas in Miami-Dade County
            </h2>
            <p className="text-lg text-neutral-600">
              We provide expert residential electrical services to homeowners throughout Miami Gardens and surrounding communities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link
              to={`/electrician-${mainLocation.slug}`}
              className="card p-5 text-center hover:bg-primary-50"
            >
              <MapPin className="h-6 w-6 text-primary-600 mx-auto mb-2" />
              <p className="font-semibold text-neutral-900">{mainLocation.name}</p>
              <p className="text-xs text-primary-600 mt-1">Main Service Area</p>
            </Link>
            {nearbyLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/electrician-${loc.slug}`}
                className="card p-5 text-center hover:bg-primary-50"
              >
                <MapPin className="h-6 w-6 text-primary-600 mx-auto mb-2" />
                <p className="font-semibold text-neutral-900">{loc.name}</p>
                <p className="text-xs text-neutral-500 mt-1">Service Area</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/service-areas" className="btn-outline">
              View All Service Areas <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Storm/hurricane preparedness */}
      <section className="section-padding bg-white">
        <div className="container-page">
          <div className="rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 p-8 md:p-12 text-white overflow-hidden relative">
            <div className="relative z-10 max-w-2xl">
              <Shield className="h-10 w-10 text-accent-400 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Hurricane Season Electrical Preparedness
              </h2>
              <p className="text-lg text-primary-100 mb-6 leading-relaxed">
                South Florida's hurricane season brings power outages, lightning, and storm damage. A residential electrician can help you prepare with whole-home surge protection, generator transfer switch installation, and an electrical safety inspection. Don't wait for the next storm to find out your electrical system is not ready.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${BUSINESS.phoneRaw}`} className="btn-accent">
                  <Phone className="h-5 w-5" />
                  Call {BUSINESS.phone}
                </a>
                <Link to="/surge-protection-miami-gardens-fl" className="btn-outline border-white text-white hover:bg-white/10">
                  Learn About Surge Protection
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />

      <FAQSection faqs={homeFaqs} />
    </>
  );
}
