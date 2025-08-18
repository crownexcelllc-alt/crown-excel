export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '';

  const staticRoutes = [
    '',
    '/about-us',
    '/contact-us',
    '/products',
    '/company/about-us',
    '/company/career',
    '/our-management',
  ];

  const routes = staticRoutes.map(route => ({ url: `${baseUrl}${route}`, changefreq: 'monthly', priority: 0.7 }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(r => `  <url>\n    <loc>${r.url}</loc>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`).join('\n')}\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
