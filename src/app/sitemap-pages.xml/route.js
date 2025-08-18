export default async function sitemapPages() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const fs = await import('fs');
  const path = await import('path');

  const appDir = path.join(process.cwd(), 'src', 'app');
  const routesSet = new Set();

  const IGNORES = new Set(['api', '_components', 'sitemap-pages.xml', 'sitemap-pages.xml.js', 'sitemap.xml', 'sitemap.xml.js']);

  function walk(dir, routePrefix = '') {
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch (e) {
      return;
    }

    // If this folder contains a page.js, register the route
    const hasPage = entries.some(e => e.isFile() && (e.name === 'page.js' || e.name === 'page.jsx' || e.name === 'page.tsx' || e.name === 'page.ts'));
    if (hasPage) {
      const route = routePrefix === '' ? '/' : routePrefix;
      routesSet.add(route);
    }

    for (const e of entries) {
      if (!e.isDirectory()) continue;
      if (IGNORES.has(e.name) || e.name.startsWith('.')) continue;
      const subRoute = routePrefix === '' ? `/${e.name}` : `${routePrefix}/${e.name}`;
      walk(path.join(dir, e.name), subRoute);
    }
  }

  walk(appDir, '');

  const routes = Array.from(routesSet).sort();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(r => `  <url>\n    <loc>${baseUrl}${r}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`).join('\n')}\n</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}
