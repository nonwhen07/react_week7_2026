import { Outlet } from 'react-router-dom';

import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminNavbar from '@/components/admin/AdminNavbar';
import GoTop from '@/components/GoTop';

import useAuthInit from '@/hooks/useAuthInit';

export default function AdminLayout() {
  // 初始化登入狀態
  useAuthInit();

  return (
    <>
      <div className="d-flex">
        <AdminSidebar />

        <div className="flex-grow-1">
          <AdminNavbar />

          <main className="ui-layout container p-4 bg-light min-vh-100">
            <Outlet />
          </main>
        </div>
      </div>

      <GoTop />
    </>
  );
}
