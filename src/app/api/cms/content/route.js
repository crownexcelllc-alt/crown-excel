import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getDb } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { parsePageContent, updatePageFiles, cleanText } from '@/lib/cms-parser';
import path from 'path';
import fs from 'fs';
import { logActivity } from '@/lib/activity-logger';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_ADMIN_ORIGIN || '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS_HEADERS });
}

function jsonResponse(data, status = 200) {
  return NextResponse.json(data, { status, headers: CORS_HEADERS });
}

function getUserFromRequest(request) {
  const token = request.cookies.get("jwt")?.value;
  if (!token) return null;
  if (token === "demo-jwt-token") {
    return { role: "super_admin", roles: ["super_admin"] };
  }
  try {
    const decoded = JSON.parse(Buffer.from(token, 'base64').toString('utf-8'));
    return {
      ...decoded,
      roles: Array.isArray(decoded.roles) ? decoded.roles : (decoded.role ? [decoded.role] : [])
    };
  } catch (e) {
    return null;
  }
}

function canModifyContent(user) {
  if (!user) return false;
  const userRoles = Array.isArray(user.roles) && user.roles.length > 0
    ? user.roles
    : (user.role ? [user.role] : []);
  return userRoles.some(r => ['super_admin', 'admin', 'editor', 'client'].includes(r));
}

// Default section templates
const SECTION_TEMPLATES = {
  hero: {
    sectionName: 'Hero Section',
    fields: {
      heading: { type: 'text', value: '', tag: 'h1', label: 'Main Heading' },
      subheading: { type: 'text', value: '', tag: 'h2', label: 'Sub Heading' },
      paragraph: { type: 'richtext', value: '', label: 'Description' },
      buttonText: { type: 'text', value: '', label: 'Button Text' },
      buttonLink: { type: 'url', value: '', label: 'Button Link' },
      image: { type: 'image', value: '', alt: '', title: '', label: 'Hero Image' },
    },
  },
  about: {
    sectionName: 'About Section',
    fields: {
      heading: { type: 'text', value: '', tag: 'h2', label: 'Section Heading' },
      paragraph: { type: 'richtext', value: '', label: 'About Text' },
      image: { type: 'image', value: '', alt: '', title: '', label: 'About Image' },
    },
  },
  services: {
    sectionName: 'Services Section',
    fields: {
      heading: { type: 'text', value: '', tag: 'h2', label: 'Section Heading' },
      subheading: { type: 'text', value: '', tag: 'h3', label: 'Sub Heading' },
      paragraph: { type: 'richtext', value: '', label: 'Description' },
    },
  },
  faq: {
    sectionName: 'FAQ Section',
    fields: {
      heading: { type: 'text', value: '', tag: 'h2', label: 'Section Heading' },
      items: { type: 'json', value: '[]', label: 'FAQ Items (JSON array)' },
    },
  },
  contact: {
    sectionName: 'Contact Section',
    fields: {
      heading: { type: 'text', value: '', tag: 'h2', label: 'Section Heading' },
      paragraph: { type: 'richtext', value: '', label: 'Description' },
      email: { type: 'text', value: '', label: 'Email' },
      phone: { type: 'text', value: '', label: 'Phone' },
      address: { type: 'richtext', value: '', label: 'Address' },
    },
  },
  custom: {
    sectionName: 'Custom Section',
    fields: {
      heading: { type: 'text', value: '', tag: 'h2', label: 'Heading' },
      paragraph: { type: 'richtext', value: '', label: 'Content' },
      image: { type: 'image', value: '', alt: '', title: '', label: 'Image' },
      buttonText: { type: 'text', value: '', label: 'Button Text' },
      buttonLink: { type: 'url', value: '', label: 'Button Link' },
    },
  },
};

// GET /api/cms/content → Get content for a page
export async function GET(request) {
  try {
    const url = new URL(request.url);
    const routeId = url.searchParams.get('routeId');
    const pathParam = url.searchParams.get('path');
    const websiteId = url.searchParams.get('websiteId') || 'default';
    const listAll = url.searchParams.get('all') === 'true';

    const db = await getDb();
    const collection = db.collection('cms_page_content');

    if (listAll) {
      const contents = await collection
        .find({ websiteId })
        .sort({ path: 1 })
        .toArray();

      // Also get routes
      const routes = await db.collection('cms_routes')
        .find({ websiteId, status: 'active' })
        .sort({ path: 1 })
        .toArray();

      const merged = routes.map(route => {
        const content = contents.find(c => c.routeId === route._id.toString());
        return {
          _id: route._id.toString(),
          path: route.path,
          type: route.type,
          hasContent: !!content,
          sectionsCount: content?.sections?.length || 0,
          status: content?.status || 'none',
          updatedAt: content?.updatedAt || null,
        };
      });

      return jsonResponse({ total: merged.length, pages: merged });
    }

    // Get single page content
    let filter = { websiteId };
    if (routeId) {
      const ids = [routeId];
      if (ObjectId.isValid(routeId)) {
        ids.push(new ObjectId(routeId));
      }
      filter.routeId = { $in: ids };
    } else if (pathParam) {
      filter.path = pathParam;
    } else {
      return jsonResponse({ error: 'routeId or path required' }, 400);
    }

    const content = await collection.findOne(filter);

    // Look up the route from the database to get its filePath
    let route = null;
    if (routeId && ObjectId.isValid(routeId)) {
      route = await db.collection('cms_routes').findOne({ _id: new ObjectId(routeId) });
    } else if (filter.path) {
      route = await db.collection('cms_routes').findOne({ path: filter.path, websiteId });
    }

    let parsedSections = [];
    if (route && route.filePath) {
      try {
        const absoluteFilePath = path.join(process.cwd(), route.filePath);
        parsedSections = parsePageContent(absoluteFilePath);
      } catch (parseErr) {
        console.error('Failed to parse page content dynamically:', parseErr);
      }
    }

    // Merge strategy: live client-side page JSX structure is the ground truth for section presence & order
    let mergedSections = [];
    if (parsedSections.length > 0) {
      const existingSections = (content && Array.isArray(content.sections)) ? content.sections : [];

      mergedSections = parsedSections.map((parsedSec, idx) => {
        const sec = { ...parsedSec, order: idx + 1 };
        const dbSec = existingSections.find(
          s => s.sectionId === parsedSec.sectionId || 
               s.sectionName?.toLowerCase() === parsedSec.sectionName?.toLowerCase() ||
               (parsedSec.sectionId === 'smartsolutions' && (s.sectionId === 'hero' || s.sectionName?.toLowerCase().includes('hero'))) ||
               ((parsedSec.sectionId === 'directormessage' || parsedSec.sectionId === 'main') && (s.sectionId === 'directormessage' || s.sectionId === 'main'))
        );

        if (dbSec && dbSec.fields) {
          if (dbSec.sectionName && !dbSec.sectionName.startsWith('Untitled')) {
            sec.sectionName = dbSec.sectionName;
          }

          const mergedFields = {};
          for (const [key, parsedField] of Object.entries(parsedSec.fields || {})) {
            let dbField = dbSec.fields[key];

            // Image matching fallback: if key not directly in dbSec.fields, find matching image field
            if (!dbField && parsedField.type === 'image') {
              const dbImgKey = Object.keys(dbSec.fields).find(k => 
                (k === 'image_banner' || k === 'image_smartsolutionsbanner' || k === 'image' || k.startsWith('image')) &&
                dbSec.fields[k]?.value
              );
              if (dbImgKey) {
                dbField = dbSec.fields[dbImgKey];
              }
            }

            if (dbField && dbField.value !== undefined && dbField.value !== null) {
              mergedFields[key] = {
                ...parsedField,
                value: dbField.value,
                originalValue: parsedField.originalValue,
                alt: dbField.alt || parsedField.alt || '',
                title: dbField.title || parsedField.title || '',
              };
            } else {
              mergedFields[key] = { ...parsedField };
            }
          }

          // Preserve any extra fields from dbSec (excluding unwanted artificial fields)
          for (const [dbKey, dbField] of Object.entries(dbSec.fields || {})) {
            if (['subheading', 'buttonText', 'buttonLink', 'button2Text', 'button2Link'].includes(dbKey)) {
              continue;
            }
            if (!mergedFields[dbKey] && dbField && dbField.value !== undefined) {
              mergedFields[dbKey] = { ...dbField };
            }
          }

          sec.fields = mergedFields;
        }

        // Special handling for Homepage Hero section (smartsolutions / hero)
        if (sec.sectionId === 'smartsolutions' || sec.sectionId === 'hero') {
          sec.sectionName = 'Hero Section (Smart Solutions)';

          // Deduplicate image keys in hero section so admin sees only one Hero Banner Image input
          if (sec.fields.image_smartsolutionsbanner && sec.fields.image_banner) {
            sec.fields.image_banner.value = sec.fields.image_smartsolutionsbanner.value || sec.fields.image_banner.value;
            sec.fields.image_banner.alt = sec.fields.image_smartsolutionsbanner.alt || sec.fields.image_banner.alt || '';
            delete sec.fields.image_smartsolutionsbanner;
          }

          // Find the image field and label it clearly
          const imgKey = Object.keys(sec.fields).find(k => k.startsWith('image'));
          if (imgKey) {
            sec.fields[imgKey].label = 'Hero Banner Image';
          }
        }

        // Special handling for Homepage Product Catalog (allproducts)
        if (sec.sectionId === 'allproducts') {
          sec.sectionName = 'Our Product Catalog (AllProducts)';

          const cleanedFields = {};
          const headingVal = dbSec?.fields?.heading?.value || dbSec?.fields?.heading_2?.value || sec.fields?.heading?.value || 'Our Product Catalog';
          cleanedFields.heading = {
            type: 'text',
            value: headingVal === 'All Products' ? 'Our Product Catalog' : headingVal,
            originalValue: 'Our Product Catalog',
            tag: 'h2',
            label: 'Catalog Section Heading'
          };

          // Ensure selected_products field is preserved and structured for the UI
          const dbSelection = dbSec?.fields?.selected_products?.value || dbSec?.fields?.selected_products;
          cleanedFields.selected_products = {
            type: 'product_catalog_selection',
            value: (dbSelection && typeof dbSelection === 'object') ? dbSelection : {},
            label: 'Homepage Featured Products'
          };

          sec.fields = cleanedFields;
        }

        // Professional Section Names & Comprehensive Fields for Laptops Page (/products/laptops)
        const getFld = (key, defaultVal, label, type = 'text') => {
          const dbVal = dbSec?.fields?.[key]?.value;
          const secVal = sec.fields?.[key]?.value;
          const val = (dbVal !== undefined && dbVal !== null && dbVal !== '')
            ? dbVal
            : ((secVal !== undefined && secVal !== null && secVal !== '') ? secVal : defaultVal);
          return {
            type,
            value: val,
            originalValue: defaultVal,
            label,
          };
        };

        if (sec.sectionId === 'laptopherosection') {
          sec.sectionName = 'Hero Section (Wholesale Laptops)';
          sec.fields = {
            heading: getFld('heading', 'Direct Wholesale & Bulk Laptops & Workstations', 'Hero Main Heading'),
            subheading: getFld('subheading', 'Looking for a reliable wholesale supplier of Laptops & Workstations', 'Hero Tagline / Subheading'),
            paragraph: getFld('paragraph', 'Crown Excel is among the leading wholesale suppliers of laptops in Dubai, UAE, providing 100% genuine products and the best after-sales support. We cover almost all major laptop brands, including Lenovo, HP, Dell, ASUS, Acer, and Apple, with competitive bulk pricing and extensive ready stock available in our Dubai warehouse.', 'Hero Description', 'richtext'),
            button_primary_text: getFld('button_primary_text', 'Request Wholesale Quote', 'Primary Button Label'),
            button_secondary_text: getFld('button_secondary_text', 'WhatsApp Instant Inquiries', 'Secondary Button (WhatsApp) Label')
          };
        } else if (sec.sectionId === 'laptopexperiencesection') {
          sec.sectionName = 'Experience & Market Expertise';
          const expImageFields = {};
          for (const [k, v] of Object.entries(sec.fields || {})) {
            if (k.startsWith('image')) expImageFields[k] = v;
          }
          for (const [k, v] of Object.entries(dbSec?.fields || {})) {
            if (k.startsWith('image')) expImageFields[k] = { ...expImageFields[k], ...v };
          }
          sec.fields = {
            badge: getFld('badge', 'PROVEN TRACK RECORD IN WHOLESALE & ENTERPRISE COMPUTING', 'Section Top Badge'),
            heading: getFld('heading', 'Crown Excel’s Experience & Market Expertise in Laptops', 'Section Main Heading'),
            paragraph: getFld('paragraph', 'Over the past decade and a half, Crown Excel has solidified its reputation as Dubai’s premier laptop wholesale distributor. We bridge global PC manufacturers with regional resellers, corporations, educational institutions, and international export channels.', 'Experience Overview Description', 'richtext'),
            metric_1_val: getFld('metric_1_val', '15+', 'Metric 1 Number'),
            metric_1_label: getFld('metric_1_label', 'Years of Laptop Expertise', 'Metric 1 Label'),
            metric_1_desc: getFld('metric_1_desc', 'Pioneering IT hardware distribution across UAE & GCC since 2010.', 'Metric 1 Description'),
            metric_2_val: getFld('metric_2_val', '200M+', 'Metric 2 Number'),
            metric_2_label: getFld('metric_2_label', 'Orders Delivered', 'Metric 2 Label'),
            metric_2_desc: getFld('metric_2_desc', 'Trusted by corporations, government entities, and retail chains.', 'Metric 2 Description'),
            metric_3_val: getFld('metric_3_val', '1,200+', 'Metric 3 Number'),
            metric_3_label: getFld('metric_3_label', 'Active B2B & Reseller Clients', 'Metric 3 Label'),
            metric_3_desc: getFld('metric_3_desc', 'Consistent recurring partnerships backed by wholesale pricing.', 'Metric 3 Description'),
            metric_4_val: getFld('metric_4_val', '100%', 'Metric 4 Number'),
            metric_4_label: getFld('metric_4_label', 'Genuine Factory Stock', 'Metric 4 Label'),
            metric_4_desc: getFld('metric_4_desc', 'Authentic manufacturer warranties with verified serial tracking.', 'Metric 4 Description'),
            capability_1_title: getFld('capability_1_title', 'Global Sourcing & Priority Stock Allocations', 'Capability 1 Title'),
            capability_1_desc: getFld('capability_1_desc', 'Direct procurement lines with authorized international tier-1 distributors guarantee uninterrupted supply of high-demand gaming rigs, commercial notebooks, and mobile workstations.', 'Capability 1 Description', 'richtext'),
            capability_2_title: getFld('capability_2_title', 'Technical Consultation & Fleet Sizing', 'Capability 2 Title'),
            capability_2_desc: getFld('capability_2_desc', 'Our certified B2B laptop specialists guide enterprise procurement teams, ensuring optimal CPU, GPU, RAM, and thermal configurations tailored to corporate workloads and budget parameters.', 'Capability 2 Description', 'richtext'),
            capability_3_title: getFld('capability_3_title', 'Reseller Profitability & Protected Margins', 'Capability 3 Title'),
            capability_3_desc: getFld('capability_3_desc', 'We empower regional computer shops and e-commerce merchants with flexible MOQs, competitive tier discounts, and price drop buffers to sustain healthy retail margins.', 'Capability 3 Description', 'richtext'),
            capability_4_title: getFld('capability_4_title', 'Enterprise Security & Custom Deployment', 'Capability 4 Title'),
            capability_4_desc: getFld('capability_4_desc', 'From TPM 2.0 provisioning and Windows 11 Pro staging to BIOS lockups and bulk asset barcode labeling, we streamline seamless turnkey rollout for corporate IT teams.', 'Capability 4 Description', 'richtext'),
            brands_badge: getFld('brands_badge', 'AUTHORIZED HARDWARE SUPPLY', 'Brands Ribbon Badge'),
            heading_2: getFld('heading_2', 'Leading Laptop Brands Available in Volume', 'Brands Ribbon Heading'),
            paragraph_2: getFld('paragraph_2', 'Authentic original stock with manufacturer global warranties and full compliance certificates.', 'Brands Ribbon Description', 'richtext'),
            ...expImageFields
          };
        } else if (sec.sectionId === 'laptopcategoriessection') {
          sec.sectionName = 'Core Laptop Categories';
          sec.fields = {
            badge: getFld('badge', 'CORE COMPUTING CATEGORIES', 'Section Badge'),
            heading: getFld('heading', 'Comprehensive Laptop Categories for Resellers & Enterprises', 'Categories Section Heading'),
            paragraph: getFld('paragraph', 'Discover our core laptop categories structured for wholesale and enterprise requirements, from high-performance gaming to mission-critical mobile workstations.', 'Categories Description', 'richtext'),
            cat_1_title: getFld('cat_1_title', 'Gaming Laptops', 'Category 1 Title'),
            cat_1_tagline: getFld('cat_1_tagline', 'High Performance & Graphics', 'Category 1 Tagline'),
            cat_1_desc: getFld('cat_1_desc', 'Engineered for competitive gaming, 3D graphics rendering, and heavy multitasking with high-refresh displays and advanced cooling.', 'Category 1 Description', 'richtext'),
            cat_2_title: getFld('cat_2_title', 'Personal Laptops', 'Category 2 Title'),
            cat_2_tagline: getFld('cat_2_tagline', 'Portability & Everyday Tasks', 'Category 2 Tagline'),
            cat_2_desc: getFld('cat_2_desc', 'Sleek, lightweight notebooks crafted for everyday productivity, study, remote work, and all-day mobile battery endurance.', 'Category 2 Description', 'richtext'),
            cat_3_title: getFld('cat_3_title', 'Business Laptops', 'Category 3 Title'),
            cat_3_tagline: getFld('cat_3_tagline', 'Enterprise Security & Reliability', 'Category 3 Tagline'),
            cat_3_desc: getFld('cat_3_desc', 'Commercial workhorses built with hardware-level security, durable mil-spec construction, and business-grade operating systems.', 'Category 3 Description', 'richtext'),
            cat_4_title: getFld('cat_4_title', 'Workstations', 'Category 4 Title'),
            cat_4_tagline: getFld('cat_4_tagline', 'Heavy Computing & ISV Power', 'Category 4 Tagline'),
            cat_4_desc: getFld('cat_4_desc', 'Certified mobile workstations designed for architectural CAD, engineering simulations, data science, and demanding creative workflows.', 'Category 4 Description', 'richtext')
          };
        } else if (sec.sectionId === 'laptopproductsgridsection') {
          sec.sectionName = 'Available Laptop Models (Product Grid)';
          const gridImageFields = {};
          for (const [k, v] of Object.entries(sec.fields || {})) {
            if (k.startsWith('image')) gridImageFields[k] = v;
          }
          for (const [k, v] of Object.entries(dbSec?.fields || {})) {
            if (k.startsWith('image')) gridImageFields[k] = { ...gridImageFields[k], ...v };
          }
          sec.fields = {
            badge: getFld('badge', 'READY WAREHOUSE STOCK IN DUBAI', 'Section Badge'),
            heading: getFld('heading', 'Factory-Sealed Laptop Inventory Available for Dispatch', 'Products Grid Heading'),
            paragraph: getFld('paragraph', 'Browse our current catalog of factory-sealed laptops available for immediate bulk dispatch across Dubai, the UAE, and GCC export hubs. Filter by series or search by SKU barcode.', 'Products Grid Description', 'richtext'),
            search_placeholder: getFld('search_placeholder', 'Search by model, SKU or CPU...', 'Search Input Placeholder'),
            moq_note: getFld('moq_note', 'MOQ: 5-10 units for wholesale pricing', 'MOQ Notice'),
            inquire_button_text: getFld('inquire_button_text', 'Inquire Now', 'Card Inquire Button Label'),
            empty_message: getFld('empty_message', 'No laptop models match your current filter or search query.', 'Empty Search Result Message'),
            reset_button_text: getFld('reset_button_text', 'Reset Filters', 'Reset Filters Button Label'),
            ...gridImageFields
          };
        } else if (sec.sectionId === 'laptopsolutionssection') {
          sec.sectionName = 'Wholesale, Retail & B2B Solutions';
          sec.fields = {
            badge: getFld('badge', 'TAILORED PURCHASING & COMMERCIAL SOLUTIONS', 'Section Badge'),
            heading: getFld('heading', 'Procurement Solutions for Every Commercial Scale', 'Solutions Section Heading'),
            paragraph: getFld('paragraph', 'Crown Excel structures tailored commercial terms, volume discount matrices, and operational workflows matching the exact purchasing requirements of your business tier.', 'Solutions Description', 'richtext'),
            segment_1_title: getFld('segment_1_title', 'Wholesale & Volume Traders', 'Segment 1 Title'),
            segment_1_badge: getFld('segment_1_badge', 'High Volume / Export', 'Segment 1 Badge'),
            segment_1_summary: getFld('segment_1_summary', 'Engineered for large-scale IT importers, cross-border traders, and GCC regional distributors requiring continuous pallet and container volumes.', 'Segment 1 Summary', 'richtext'),
            segment_1_feat_1: getFld('segment_1_feat_1', 'Aggressive tiered discounts on 20, 50, 100+ unit consignments', 'Segment 1 Feature 1'),
            segment_1_feat_2: getFld('segment_1_feat_2', 'Direct factory allocations from Lenovo, HP, Dell, ASUS & Acer', 'Segment 1 Feature 2'),
            segment_1_feat_3: getFld('segment_1_feat_3', 'Customs-ready export packing & airway/sea cargo manifests', 'Segment 1 Feature 3'),
            segment_1_feat_4: getFld('segment_1_feat_4', 'Bonded warehouse transit across JAFZA, DAFZA & Dubai Cargo Village', 'Segment 1 Feature 4'),
            segment_1_feat_5: getFld('segment_1_feat_5', 'Multi-currency invoicing with verified certificate of origin (COO)', 'Segment 1 Feature 5'),
            segment_1_audience: getFld('segment_1_audience', 'Regional distributors, national wholesalers, export-import companies in GCC, Africa & CIS.', 'Segment 1 Target Audience'),
            segment_2_title: getFld('segment_2_title', 'Retailers & Computer Resellers', 'Segment 2 Title'),
            segment_2_badge: getFld('segment_2_badge', 'High Margins / Fast Turnaround', 'Segment 2 Badge'),
            segment_2_summary: getFld('segment_2_summary', 'Designed to help brick-and-mortar computer shops, showroom owners, and e-commerce merchants maintain healthy profitability and fast stock turnover.', 'Segment 2 Summary', 'richtext'),
            segment_2_feat_1: getFld('segment_2_feat_1', 'Flexible Low MOQs (from 5–10 units per order)', 'Segment 2 Feature 1'),
            segment_2_feat_2: getFld('segment_2_feat_2', 'Immediate same-day pickup from Dubai central showroom/warehouse', 'Segment 2 Feature 2'),
            segment_2_feat_3: getFld('segment_2_feat_3', 'High-demand consumer & gaming laptops that sell fast', 'Segment 2 Feature 3'),
            segment_2_feat_4: getFld('segment_2_feat_4', 'Price drop buffer protections on recurring wholesale accounts', 'Segment 2 Feature 4'),
            segment_2_feat_5: getFld('segment_2_feat_5', 'Official brand promotional materials and digital collateral', 'Segment 2 Feature 5'),
            segment_2_audience: getFld('segment_2_audience', 'Computer retail shops, electronics showroom chains, online market merchants, IT boutique vendors.', 'Segment 2 Target Audience'),
            segment_3_title: getFld('segment_3_title', 'B2B Clients & Enterprise Procurement', 'Segment 3 Title'),
            segment_3_badge: getFld('segment_3_badge', 'Turnkey IT Fleet Deployment', 'Segment 3 Badge'),
            segment_3_summary: getFld('segment_3_summary', 'Comprehensive computing solutions for corporate offices, financial institutions, educational academies, and healthcare networks.', 'Segment 3 Summary', 'richtext'),
            segment_3_feat_1: getFld('segment_3_feat_1', 'Standardized multi-tier laptop fleets (Executive, Staff & Technical)', 'Segment 3 Feature 1'),
            segment_3_feat_2: getFld('segment_3_feat_2', 'Custom OS staging, BIOS configurations, and corporate asset tagging', 'Segment 3 Feature 2'),
            segment_3_feat_3: getFld('segment_3_feat_3', 'Flexible credit terms (PDC, LC, 30-day corporate facility upon approval)', 'Segment 3 Feature 3'),
            segment_3_feat_4: getFld('segment_3_feat_4', 'Consolidated multi-branch delivery across all 7 UAE Emirates', 'Segment 3 Feature 4'),
            segment_3_feat_5: getFld('segment_3_feat_5', 'Post-procurement warranty facilitation and optional AMC maintenance', 'Segment 3 Feature 5'),
            segment_3_audience: getFld('segment_3_audience', 'Enterprises, banks, universities, hospitals, call centers, and expanding UAE startups.', 'Segment 3 Target Audience'),
            cta_badge: getFld('cta_badge', 'FLEXIBLE PROCUREMENT ENGAGEMENTS', 'Corporate Plan CTA Badge'),
            heading_2: getFld('heading_2', 'Need a Custom Corporate IT Procurement Plan?', 'Corporate Plan CTA Heading'),
            paragraph_2: getFld('paragraph_2', 'Connect with our commercial sales desk to set up a credit application, review specialized batch quotations, or organize a customized pilot deployment for your company.', 'Corporate Plan CTA Description', 'richtext'),
            cta_button_text: getFld('cta_button_text', 'Consult with B2B Sales', 'Corporate Plan CTA Button Label')
          };
        } else if (sec.sectionId === 'laptopoperationssection') {
          sec.sectionName = 'Laptop Handling & Logistical Operations';
          sec.fields = {
            badge: getFld('badge', 'RELIABLE END-TO-END SUPPLY CHAIN EXECUTION', 'Section Badge'),
            heading: getFld('heading', 'Laptop Handling, Delivery & Support Expertise', 'Operations Section Heading'),
            paragraph: getFld('paragraph', 'Wholesale IT procurement demands precision, integrity, and swift logistical delivery. Here is how Crown Excel safeguards your orders from dock intake to customer handoff.', 'Operations Description', 'richtext'),
            pillar_1_badge: getFld('pillar_1_badge', 'Step 1: Verification', 'Pillar 1 Badge'),
            pillar_1_title: getFld('pillar_1_title', 'Laptop Handling & Quality Checks', 'Pillar 1 Title'),
            pillar_1_subtitle: getFld('pillar_1_subtitle', 'Zero Compromise on Factory Authenticity', 'Pillar 1 Subtitle'),
            pillar_1_pt_1_heading: getFld('pillar_1_pt_1_heading', 'Tamper-Evident Factory Seal Audit', 'Pillar 1 Point 1 Heading'),
            pillar_1_pt_1_detail: getFld('pillar_1_pt_1_detail', 'Every laptop master carton and individual packaging box is audited upon intake to guarantee untouched, 100% factory-sealed integrity.', 'Pillar 1 Point 1 Detail', 'richtext'),
            pillar_1_pt_2_heading: getFld('pillar_1_pt_2_heading', 'Serial Number & Barcode Serialization', 'Pillar 1 Point 2 Heading'),
            pillar_1_pt_2_detail: getFld('pillar_1_pt_2_detail', 'Every unit is scanned into our enterprise ERP with manufacturer serial tracking, preventing grey-market cross-contamination.', 'Pillar 1 Point 2 Detail', 'richtext'),
            pillar_1_pt_3_heading: getFld('pillar_1_pt_3_heading', 'ESD-Safe Climate-Controlled Storage', 'Pillar 1 Point 3 Heading'),
            pillar_1_pt_3_detail: getFld('pillar_1_pt_3_detail', 'Warehoused in humidity-regulated, anti-static facility in Dubai, protecting sensitive high-refresh screens and microprocessors.', 'Pillar 1 Point 3 Detail', 'richtext'),

            pillar_2_badge: getFld('pillar_2_badge', 'Step 2: Fulfillment', 'Pillar 2 Badge'),
            pillar_2_title: getFld('pillar_2_title', 'Order Processing & Express Delivery', 'Pillar 2 Title'),
            pillar_2_subtitle: getFld('pillar_2_subtitle', 'Fast Turnaround Across UAE & Regional Hubs', 'Pillar 2 Subtitle'),
            pillar_2_pt_1_heading: getFld('pillar_2_pt_1_heading', 'Same-Day Dispatch in Central UAE', 'Pillar 2 Point 1 Heading'),
            pillar_2_pt_1_detail: getFld('pillar_2_pt_1_detail', 'Orders confirmed before 1:00 PM are dispatched same-day via Crown Excel’s dedicated delivery fleet across Dubai, Sharjah & Ajman.', 'Pillar 2 Point 1 Detail', 'richtext'),
            pillar_2_pt_2_heading: getFld('pillar_2_pt_2_heading', 'Next-Day Delivery Across All Emirates', 'Pillar 2 Point 2 Heading'),
            pillar_2_pt_2_detail: getFld('pillar_2_pt_2_detail', 'Overnight ground fulfillment servicing Abu Dhabi, Al Ain, Ras Al Khaimah, Fujairah, and Umm Al Quwain.', 'Pillar 2 Point 2 Detail', 'richtext'),
            pillar_2_pt_3_heading: getFld('pillar_2_pt_3_heading', 'Cross-Border GCC & Cargo Logistical Links', 'Pillar 2 Point 3 Heading'),
            pillar_2_pt_3_detail: getFld('pillar_2_pt_3_detail', 'Daily road and air cargo shipments to Saudi Arabia, Oman, Qatar, Bahrain, Kuwait, Africa, and Central Asia with full customs clearance support.', 'Pillar 2 Point 3 Detail', 'richtext'),

            pillar_3_badge: getFld('pillar_3_badge', 'Step 3: Post-Sales', 'Pillar 3 Badge'),
            pillar_3_title: getFld('pillar_3_title', 'Customer Support & Warranty Assistance', 'Pillar 3 Title'),
            pillar_3_subtitle: getFld('pillar_3_subtitle', 'Dedicated Partnership Beyond the Sale', 'Pillar 3 Subtitle'),
            pillar_3_pt_1_heading: getFld('pillar_3_pt_1_heading', 'Direct Manufacturer Warranty Liaison', 'Pillar 3 Point 1 Heading'),
            pillar_3_pt_1_detail: getFld('pillar_3_pt_1_detail', 'We coordinate authorized brand warranty assistance for Lenovo, HP, Dell, ASUS, and Acer, eliminating administrative friction for clients.', 'Pillar 3 Point 1 Detail', 'richtext'),
            pillar_3_pt_2_heading: getFld('pillar_3_pt_2_heading', 'Dead-On-Arrival (DOA) Rapid Protocol', 'Pillar 3 Point 2 Heading'),
            pillar_3_pt_2_detail: getFld('pillar_3_pt_2_detail', 'Expedited replacement procedures for any verified defective hardware on initial unboxing to protect business continuity.', 'Pillar 3 Point 2 Detail', 'richtext'),
            pillar_3_pt_3_heading: getFld('pillar_3_pt_3_heading', 'Dedicated B2B Account Representatives', 'Pillar 3 Point 3 Heading'),
            pillar_3_pt_3_detail: getFld('pillar_3_pt_3_detail', 'Direct phone, email, and WhatsApp line with a named logistics executive for stock reservations, invoices, and tracking updates.', 'Pillar 3 Point 3 Detail', 'richtext')
          };
        } else if (sec.sectionId === 'laptopinquirysection') {
          sec.sectionName = 'Inquiry Banner & FAQs';
          sec.fields = {
            badge: getFld('badge', 'START YOUR WHOLESALE PARTNERSHIP TODAY', 'Inquiry Banner Badge'),
            heading: getFld('heading', 'Ready to Order or Request Wholesale Laptop Pricing?', 'Inquiry Banner Heading'),
            paragraph: getFld('paragraph', 'Contact our sales desk now to check real-time stock availability, request official quotation manifests, or discuss customized fleet configurations. We respond within 2 business hours.', 'Inquiry Banner Description', 'richtext'),
            button_submit_text: getFld('button_submit_text', 'Submit Inquiry Form', 'Inquiry Form Button Label'),
            button_whatsapp_text: getFld('button_whatsapp_text', 'Chat on WhatsApp', 'WhatsApp Button Label'),
            perk_1: getFld('perk_1', 'Quotes in 2 Hours', 'Response Perk 1'),
            perk_2: getFld('perk_2', 'Full VAT Invoices', 'Response Perk 2'),
            perk_3: getFld('perk_3', 'Bonded Export Ready', 'Response Perk 3'),
            faq_badge: getFld('faq_badge', 'GOT QUESTIONS?', 'FAQ Section Badge'),
            heading_2: getFld('heading_2', 'Frequently Asked Questions', 'FAQ Section Heading'),
            faq_1_q: getFld('faq_1_q', 'What is the Minimum Order Quantity (MOQ) for wholesale laptop pricing?', 'FAQ 1 Question'),
            faq_1_a: getFld('faq_1_a', 'Our standard wholesale pricing tier starts at 5 to 10 units for mixed commercial models. For volume pallet or container consignments (50 to 500+ units), we provide customized volume tier discounts tailored to your procurement schedule.', 'FAQ 1 Answer', 'richtext'),
            faq_2_q: getFld('faq_2_q', 'Are all laptops factory-sealed with authentic manufacturer warranties?', 'FAQ 2 Question'),
            faq_2_a: getFld('faq_2_a', 'Yes. 100% of our laptop inventory is brand-new, factory-sealed in original manufacturer packaging with valid brand warranty. We do not sell grey-market or unverified stock. Serial numbers are logged upon dock intake.', 'FAQ 2 Answer', 'richtext'),
            faq_3_q: getFld('faq_3_q', 'How fast can Crown Excel deliver laptops across Dubai and the UAE?', 'FAQ 3 Question'),
            faq_3_a: getFld('faq_3_a', 'Orders confirmed before 1:00 PM are dispatched same-day within Dubai, Sharjah, and Ajman. Deliveries to Abu Dhabi, Al Ain, Ras Al Khaimah, and Fujairah are completed next business day via our insured logistics fleet.', 'FAQ 3 Answer', 'richtext'),
            faq_4_q: getFld('faq_4_q', 'Do you support international export to Saudi Arabia and other GCC countries?', 'FAQ 4 Question'),
            faq_4_a: getFld('faq_4_a', 'Yes. We provide comprehensive export services including daily road and air cargo dispatch to Saudi Arabia (Riyadh, Jeddah, Dammam), Oman, Qatar, Bahrain, Kuwait, and African markets with complete customs documentation, COO, and export packing.', 'FAQ 4 Answer', 'richtext'),
            faq_5_q: getFld('faq_5_q', 'What payment terms are available for corporate and reseller accounts?', 'FAQ 5 Question'),
            faq_5_a: getFld('faq_5_a', 'We accept wire transfers (AED/USD), corporate cheques (PDC), company credit cards, and cash on delivery for established clients. Formal corporate credit facilities (30-day billing) are available for verified businesses subject to credit assessment.', 'FAQ 5 Answer', 'richtext')
          };
        } else if (sec.sectionId === 'directormessage' || sec.sectionId === 'main') {
          sec.sectionName = "Director's Message";
          sec.fields = {
            heading: getFld('heading', "Director's Message", "Main Page Heading (h1)", 'text'),
            image_director: {
              type: 'image',
              value: dbSec?.fields?.image_director?.value || dbSec?.fields?.image?.value || "@/Components/Images/director.png",
              originalValue: "@/Components/Images/director.png",
              varName: 'director',
              isImport: true,
              label: "Director's Photo"
            },
            paragraph: getFld('paragraph', "Together, let’s embrace technology and build a better tomorrow.", "Subheading / Quote", 'richtext'),
            paragraph_2: getFld('paragraph_2', "At Crown Excel General Trading LLC, our journey has always been guided by innovation, integrity, and an unwavering commitment to excellence. From our humble beginnings in 2009, in one of the world’s most vibrant and adaptable modern hubs, we embarked on our mission. Today, after two decades, we have grown into a trusted name in the market, it was never been easy or not by chance, but through a clear vision and relentless dedication to delivering value to our customers and partners and I believe if we do our best, we will surely get success by the grace of Allah.", "Story & Mission (Paragraph 1)", 'richtext'),
            paragraph_3: getFld('paragraph_3', "I still remember the early days when we started with just a few products and limited experience. By the grace of the Almighty, today we proudly offer a wide range of products and services to meet the diverse needs of our customers and clients. Our mission goes far beyond products; we strive to build lasting relationships, provide tailored IT and business solutions, and contribute to the sustainable growth of the communities we serve. In today’s fast-paced and ever-changing world, adaptability is our strength, and customer satisfaction is our ultimate reward.", "Company Growth & Purpose (Paragraph 2)", 'richtext'),
            paragraph_4: getFld('paragraph_4', "I believe in empowering our team, fostering a culture of trust, and embracing emerging technologies to stay ahead. As we look to the future, we will continue to expand our horizons, explore new markets, and enhance our services to meet the evolving needs of our clients.", "Team & Future Vision (Paragraph 3)", 'richtext'),
            paragraph_5: getFld('paragraph_5', "Together, with the dedication of our people and the trust of our partners, we will not just keep pace with change — we will lead it.", "Closing Statement (Paragraph 4)", 'richtext'),
            paragraph_6: getFld('paragraph_6', "Muhammad Qais", "Managing Director Name", 'text'),
            paragraph_7: getFld('paragraph_7', "Managing Director & CEO", "Executive Designation", 'text'),
            paragraph_8: getFld('paragraph_8', "Crown Excel General Trading LLC", "Company Name", 'text'),
          };
        }

        return sec;
      });

      // Preserve any custom sections manually added by the user in the CMS that contain actual content
      const customDbSections = existingSections.filter(
        s => !s.filePath && 
             !parsedSections.some(p => p.sectionId === s.sectionId || p.sectionName?.toLowerCase() === s.sectionName?.toLowerCase()) &&
             Object.values(s.fields || {}).some(f => f.value && f.value.toString().trim() !== '')
      );
      for (const customSec of customDbSections) {
        mergedSections.push({ ...customSec, order: mergedSections.length + 1 });
      }
    } else if (content && Array.isArray(content.sections)) {
      mergedSections = content.sections;
    }

    const responseContent = {
      sections: mergedSections,
      status: content?.status || 'draft',
      version: content?.version || 1,
    };
    if (content && content._id) {
      responseContent._id = content._id.toString();
    }

    return jsonResponse({
      content: responseContent,
      isNew: !content,
      templates: Object.entries(SECTION_TEMPLATES).map(([id, tmpl]) => ({
        id,
        name: tmpl.sectionName,
        fieldCount: Object.keys(tmpl.fields).length,
      })),
    });
  } catch (err) {
    console.error('GET /api/cms/content error:', err);
    try {
      fs.writeFileSync(path.join(process.cwd(), 'debug-api.log'), `ERROR: ${err.message}\nSTACK: ${err.stack}`, 'utf-8');
    } catch (logErr) {}
    return jsonResponse({ error: 'Failed to fetch content' }, 500);
  }
}

// POST /api/cms/content → Save page content
export async function POST(request) {
  try {
    const user = getUserFromRequest(request);
    if (!canModifyContent(user)) {
      return jsonResponse({ error: 'Access denied. Content Editor permission required.' }, 403);
    }
    const body = await request.json();
    const { routeId, path, websiteId = 'default', sections, status = 'draft' } = body;

    if (!routeId && !path) {
      return jsonResponse({ error: 'routeId or path required' }, 400);
    }

    const db = await getDb();
    const collection = db.collection('cms_page_content');
    const now = new Date().toISOString();

    const filter = { websiteId };
    if (routeId) {
      const ids = [routeId];
      if (ObjectId.isValid(routeId)) {
        ids.push(new ObjectId(routeId));
      }
      filter.routeId = { $in: ids };
    } else {
      filter.path = path;
    }

    const existing = await collection.findOne(filter);
    const version = existing ? (existing.version || 1) + 1 : 1;

    let finalPath = path;
    if (!finalPath && routeId) {
      try {
        const routeDoc = await db.collection('cms_routes').findOne({
          _id: ObjectId.isValid(routeId) ? new ObjectId(routeId) : routeId
        });
        if (routeDoc?.path) {
          finalPath = routeDoc.path;
        }
      } catch (rErr) {
        console.error('Failed to resolve route path:', rErr);
      }
    }

    const isDynamicPage = 
      finalPath === '/' || path === '/' || routeId === '6a2016a8a0608271b7524e94' ||
      finalPath === '/products/laptops' || path === '/products/laptops' || routeId === '6a2016aca0608271b7524ead';

    // Update JSX files on disk with the new values (never for dynamic pages like homepage and laptops, which are rendered from DB)
    if (Array.isArray(sections) && !isDynamicPage) {
      try {
        updatePageFiles(sections);
        
        // Update originalValue to match the newly written value in files
        for (const section of sections) {
          for (const field of Object.values(section.fields || {})) {
            field.originalValue = field.value;
          }
        }
      } catch (fileErr) {
        console.error('Failed to update page component files:', fileErr);
      }
    }

    const contentData = {
      routeId: routeId || null,
      path: finalPath || null,
      websiteId,
      sections: Array.isArray(sections) ? sections : [],
      status,
      version,
      publishedAt: status === 'published' ? now : (existing?.publishedAt || null),
      updatedAt: now,
      createdAt: existing?.createdAt || now,
    };

    await collection.replaceOne(
      filter,
      contentData,
      { upsert: true }
    );

    await logActivity(request, 'update_content', finalPath || `Route ID: ${routeId}`, { status, version });

    // Trigger on-demand cache revalidation
    if (finalPath) {
      try {
        revalidatePath(finalPath);
        if (finalPath !== '/') {
          revalidatePath('/');
        }
      } catch (revalErr) {
        console.error('revalidatePath error in POST /api/cms/content:', revalErr);
      }
    }

    return jsonResponse({ ok: true, version });
  } catch (err) {
    console.error('POST /api/cms/content error:', err);
    return jsonResponse({ error: 'Failed to save content' }, 500);
  }
}

// PUT /api/cms/content → Add a section template to a page
export async function PUT(request) {
  try {
    const user = getUserFromRequest(request);
    if (!canModifyContent(user)) {
      return jsonResponse({ error: 'Access denied. Content Editor permission required.' }, 403);
    }
    const body = await request.json();
    const { routeId, path, websiteId = 'default', templateId, customName } = body;

    if (!templateId || !SECTION_TEMPLATES[templateId]) {
      return jsonResponse({ error: 'Invalid template ID' }, 400);
    }

    const template = SECTION_TEMPLATES[templateId];
    const newSection = {
      sectionId: `${templateId}_${Date.now()}`,
      sectionName: customName || template.sectionName,
      order: 0,
      fields: { ...template.fields },
    };

    const db = await getDb();
    const collection = db.collection('cms_page_content');

    const filter = { websiteId };
    if (routeId) {
      const ids = [routeId];
      if (ObjectId.isValid(routeId)) {
        ids.push(new ObjectId(routeId));
      }
      filter.routeId = { $in: ids };
    } else if (path) {
      filter.path = path;
    }

    const existing = await collection.findOne(filter);

    if (existing) {
      newSection.order = (existing.sections?.length || 0) + 1;
      await collection.updateOne(
        filter,
        {
          $push: { sections: newSection },
          $set: { updatedAt: new Date().toISOString() },
        }
      );
    } else {
      newSection.order = 1;
      await collection.insertOne({
        routeId: routeId || null,
        path: path || null,
        websiteId,
        sections: [newSection],
        status: 'draft',
        version: 1,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }

    await logActivity(request, 'update_content', path || `Route ID: ${routeId}`, { action: 'add_section', sectionName: newSection.sectionName });

    return jsonResponse({ ok: true, section: newSection });
  } catch (err) {
    console.error('PUT /api/cms/content error:', err);
    return jsonResponse({ error: 'Failed to add section' }, 500);
  }
}
