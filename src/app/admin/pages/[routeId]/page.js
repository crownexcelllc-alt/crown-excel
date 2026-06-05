import React from 'react';
import ContentEditorClient from './ContentEditorClient';
import { getApiBase } from '@/lib/api-helper';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateMetadata() {
  return { title: 'Edit Page Content - Admin' };
}

export default async function PageEditPage({ params }) {
  const { routeId } = await params;
  const apiBase = getApiBase();

  let contentData = null;
  let routeData = null;
  let templates = [];
  let isNew = true;

  try {
    // Fetch route info
    const routesRes = await fetch(`${apiBase}/api/cms/routes?websiteId=default`, { cache: 'no-store' });
    if (routesRes.ok) {
      const routesJson = await routesRes.json();
      routeData = routesJson.routes?.find(r => r._id === routeId) || null;
    }

    // Fetch content data
    const contentRes = await fetch(`${apiBase}/api/cms/content?routeId=${routeId}&websiteId=default`, { cache: 'no-store' });
    if (contentRes.ok) {
      const contentJson = await contentRes.json();
      contentData = contentJson.content || null;
      templates = contentJson.templates || [];
      isNew = contentJson.isNew || false;
    }
  } catch (err) {
    console.error('Failed to fetch content data', err);
  }

  return (
    <div>
      <h1 className='text-[30px] font-bold'>EDIT PAGE CONTENT</h1>
      <p className="text-sm text-gray-600 mb-1">
        {routeData ? (
          <>Managing content for: <code className="font-mono bg-gray-100 px-2 py-0.5 rounded text-[#084032]">{routeData.path}</code></>
        ) : (
          'Loading page information...'
        )}
      </p>
      <div className="mt-5">
        <ContentEditorClient
          initialContent={contentData}
          routeId={routeId}
          routePath={routeData?.path || ''}
          apiBase={apiBase}
          templates={templates}
          isNew={isNew}
        />
      </div>
    </div>
  );
}
