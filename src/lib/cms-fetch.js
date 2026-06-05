/**
 * CMS Frontend Integration Helper
 * 
 * Use this in your page server components to fetch CMS content and SEO data.
 * CMS data is an overlay — if it exists, it overrides defaults. If not, originals render.
 * 
 * Usage:
 *   import { getCmsData, getCmsSeo, getCmsContent } from '@/lib/cms-fetch';
 *   
 *   export default async function Page() {
 *     const cms = await getCmsData('/products/laptops');
 *     return <h1>{cms.content?.hero?.heading || "Default Heading"}</h1>;
 *   }
 *   
 *   export async function generateMetadata() {
 *     const seo = await getCmsSeo('/products/laptops');
 *     return {
 *       title: seo.metaTitle || 'Default Title',
 *       description: seo.metaDescription || 'Default description',
 *     };
 *   }
 */

import { getDb } from '@/lib/mongodb';

/**
 * Fetch CMS SEO data for a given path
 * @param {string} path - Route path (e.g., '/products/laptops')
 * @param {string} websiteId - Website ID (default: 'default')
 * @returns {Object|null} SEO data or null
 */
export async function getCmsSeo(path, websiteId = 'default') {
  try {
    const db = await getDb();
    const seo = await db.collection('cms_seo').findOne({
      path,
      websiteId,
    });
    return seo || null;
  } catch (err) {
    console.error(`getCmsSeo error for ${path}:`, err);
    return null;
  }
}

/**
 * Fetch CMS page content for a given path
 * @param {string} path - Route path
 * @param {string} websiteId - Website ID
 * @returns {Object|null} Content data with sections or null
 */
export async function getCmsContent(path, websiteId = 'default') {
  try {
    const db = await getDb();
    const content = await db.collection('cms_page_content').findOne({
      path,
      websiteId,
      status: 'published', // Only fetch published content
    });

    if (!content) return null;

    // Convert sections array to a keyed object for easy access
    const sections = {};
    for (const section of content.sections || []) {
      const key = section.sectionId?.split('_')[0] || section.sectionName?.toLowerCase().replace(/\s+/g, '_') || `section_${section.order}`;
      const fields = {};
      for (const [fieldKey, field] of Object.entries(section.fields || {})) {
        fields[fieldKey] = field.value || field;
      }
      sections[key] = {
        name: section.sectionName,
        fields,
        raw: section.fields,
      };
    }

    return {
      sections,
      status: content.status,
      version: content.version,
      updatedAt: content.updatedAt,
    };
  } catch (err) {
    console.error(`getCmsContent error for ${path}:`, err);
    return null;
  }
}

/**
 * Fetch both CMS content and SEO data in one call
 * @param {string} path - Route path
 * @param {string} websiteId - Website ID
 * @returns {Object} { content, seo }
 */
export async function getCmsData(path, websiteId = 'default') {
  const [content, seo] = await Promise.all([
    getCmsContent(path, websiteId),
    getCmsSeo(path, websiteId),
  ]);

  return { content, seo };
}

/**
 * Generate Next.js metadata from CMS SEO data
 * Merges CMS data with defaults, CMS values override defaults
 * 
 * @param {string} path - Route path
 * @param {Object} defaults - Default metadata
 * @param {string} websiteId - Website ID
 * @returns {Object} Next.js metadata object
 */
export async function generateCmsMetadata(path, defaults = {}, websiteId = 'default') {
  const seo = await getCmsSeo(path, websiteId);

  if (!seo) return defaults;

  const metadata = {
    title: seo.metaTitle || defaults.title,
    description: seo.metaDescription || defaults.description,
  };

  // Keywords
  if (seo.metaKeywords?.length) {
    metadata.keywords = seo.metaKeywords;
  }

  // Canonical
  if (seo.canonicalUrl) {
    metadata.alternates = { canonical: seo.canonicalUrl };
  }

  // Robots
  if (seo.robots) {
    metadata.robots = {
      index: seo.robots.index !== false,
      follow: seo.robots.follow !== false,
      noarchive: seo.robots.noArchive || false,
      nosnippet: seo.robots.noSnippet || false,
    };
  }

  // Open Graph
  if (seo.openGraph) {
    metadata.openGraph = {
      title: seo.openGraph.title || seo.metaTitle || defaults.title,
      description: seo.openGraph.description || seo.metaDescription || defaults.description,
      type: seo.openGraph.type || 'website',
      locale: seo.openGraph.locale || 'en_AE',
    };
    if (seo.openGraph.image) {
      metadata.openGraph.images = [{ url: seo.openGraph.image }];
    }
  }

  // Twitter
  if (seo.twitterCard) {
    metadata.twitter = {
      card: seo.twitterCard.cardType || 'summary_large_image',
      title: seo.twitterCard.title || seo.metaTitle || defaults.title,
      description: seo.twitterCard.description || seo.metaDescription || defaults.description,
    };
    if (seo.twitterCard.image) {
      metadata.twitter.images = [seo.twitterCard.image];
    }
  }

  return metadata;
}
