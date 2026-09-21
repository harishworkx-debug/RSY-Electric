import { Helmet } from 'react-helmet-async';
import { BUSINESS } from '@/data/business';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  schema?: object;
}

export default function SEO({ title, description, canonical, schema }: SEOProps) {
  const baseUrl = 'https://rsyelectric.com';
  const fullCanonical = `${baseUrl}${canonical}`;
  const faqSchema = schema ? JSON.stringify(schema) : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {faqSchema && <script type="application/ld+json">{faqSchema}</script>}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: BUSINESS.name,
          telephone: BUSINESS.phone,
          areaServed: BUSINESS.serviceArea,
          address: {
            '@type': 'PostalAddress',
            addressLocality: BUSINESS.mainLocation,
            addressRegion: 'FL',
            addressCountry: 'US',
          },
          url: fullCanonical,
        })}
      </script>
    </Helmet>
  );
}
