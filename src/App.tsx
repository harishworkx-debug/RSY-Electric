import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import ServicePage from '@/pages/ServicePage';
import LocationPage from '@/pages/LocationPage';
import ContactPage from '@/pages/ContactPage';
import ServiceAreasPage from '@/pages/ServiceAreasPage';
import { services } from '@/data/services';
import { mainLocation, nearbyLocations } from '@/data/locations';

const allLocations = [mainLocation, ...nearbyLocations];

function NotFoundPage() {
  return (
    <div className="container-page py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg text-neutral-600 mb-8">The page you are looking for does not exist.</p>
      <a href="/" className="btn-primary">Return Home</a>
    </div>
  );
}

function App() {
  const serviceSlugs = services.map((s) => s.slug);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/service-areas" element={<ServiceAreasPage />} />
              {serviceSlugs.map((slug) => (
                <Route key={slug} path={`/${slug}`} element={<ServicePage slug={slug} />} />
              ))}
              {allLocations.map((loc) => (
                <Route
                  key={`elec-${loc.slug}`}
                  path={`/electrician-${loc.slug}`}
                  element={<LocationPage location={loc} variant="electrician" />}
                />
              ))}
              {allLocations.map((loc) => (
                <Route
                  key={`svc-${loc.slug}`}
                  path={`/electrical-services-${loc.slug}`}
                  element={<LocationPage location={loc} variant="electrical-services" />}
                />
              ))}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <StickyCallButton />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
