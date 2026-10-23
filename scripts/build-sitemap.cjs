const fs = require('fs');
const path = require('path');

const servicesCode = fs.readFileSync(path.join(__dirname, '../src/data/services.ts'), 'utf8');
const serviceSlugs = [...servicesCode.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);

const locationsCode = fs.readFileSync(path.join(__dirname, '../src/data/locations.ts'), 'utf8');
const locSlugs = [...locationsCode.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);

const blogCode = fs.readFileSync(path.join(__dirname, '../src/data/blog.ts'), 'utf8');
const blogSlugs = [...blogCode.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);

const today = new Date().toISOString().split('T')[0];
const baseUrl = 'https://rsyelectric.com';

const urls = [
  { loc: `${baseUrl}/`, priority: '1.0', changefreq: 'weekly' },
  { loc: `${baseUrl}/contact`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${baseUrl}/service-areas`, priority: '0.8', changefreq: 'monthly' },
  { loc: `${baseUrl}/blog`, priority: '0.8', changefreq: 'weekly' },
];

// 13 Services
for (const s of serviceSlugs) {
  urls.push({ loc: `${baseUrl}/${s}`, priority: '0.9', changefreq: 'monthly' });
}

// 22 Location pages (11 cities × 2 variants)
for (const l of locSlugs) {
  urls.push({ loc: `${baseUrl}/electrician-${l}`, priority: '0.8', changefreq: 'monthly' });
  urls.push({ loc: `${baseUrl}/electrical-services-${l}`, priority: '0.7', changefreq: 'monthly' });
}

// 5 Blog posts
for (const b of blogSlugs) {
  urls.push({ loc: `${baseUrl}/blog/${b}`, priority: '0.7', changefreq: 'monthly' });
}

console.log(`Generated ${urls.length} URLs in total.`);

const lines = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
];

for (const u of urls) {
  lines.push('  <url>');
  lines.push(`    <loc>${u.loc}</loc>`);
  lines.push(`    <lastmod>${today}</lastmod>`);
  lines.push(`    <changefreq>${u.changefreq}</changefreq>`);
  lines.push(`    <priority>${u.priority}</priority>`);
  lines.push('  </url>');
}

lines.push('</urlset>\n');

const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, lines.join('\n'), 'utf8');
console.log(`Wrote sitemap to ${sitemapPath}`);
