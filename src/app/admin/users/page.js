import React from 'react';
import UsersClient from './UsersClient';
import { getApiBase } from '@/lib/api-helper';

export const metadata = { title: 'Users - Admin' };
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function UsersPage() {
  const apiBase = getApiBase();
  let users = [];
  let websites = [];

  try {
    const [usersRes, websitesRes] = await Promise.all([
      fetch(`${apiBase}/api/cms/users`, { cache: 'no-store' }),
      fetch(`${apiBase}/api/cms/websites`, { cache: 'no-store' }),
    ]);
    if (usersRes.ok) {
      const data = await usersRes.json();
      users = data.users || [];
    }
    if (websitesRes.ok) {
      const data = await websitesRes.json();
      websites = data.websites || [];
    }
  } catch (err) {
    console.error('Failed to fetch data', err);
  }

  return (
    <div>
      <h1 className='text-[30px] font-bold'>USER MANAGEMENT</h1>
      <p className="text-sm text-gray-600">
        Manage user accounts, roles, and website access.
      </p>
      <div className="mt-5">
        <UsersClient initialUsers={users} websites={websites} apiBase={apiBase} />
      </div>
    </div>
  );
}
