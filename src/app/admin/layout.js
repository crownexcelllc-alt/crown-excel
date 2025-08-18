// import AdminLayout from '../Components/Admin/AdminLayout';
import AdminLayout from '@/Components/Admin/AdminLayout';
import './admin.css';

export const metadata = {
  title: 'Crown Excel Admin Panel',
  description: 'Admin panel for Crown Excel website management',
};

export default function Layout({ children }) {
  return <AdminLayout>{children}</AdminLayout>;
}
