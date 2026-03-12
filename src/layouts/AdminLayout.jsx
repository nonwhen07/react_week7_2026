import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
// import BackHeader from '@/components/admin/BackHeader';
// import PageLoader from '@/components/PageLoader';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminNavbar from '@/components/admin/AdminNavbar';
import GoTop from '@/components/GoTop';
import { getToken } from '@/utils/auth';

import { checkAuth } from '@/services/authService';
import { showError } from '@/utils/handleApiSuccess';
import { loginSuccess, logoutAction } from '@/features/auth/authSlice';

export default function AdminLayout() {
  // 初始化 dispatch
  const dispatch = useDispatch();
  // 初始化 navigate
  const navigate = useNavigate();

  // 先檢查 token，如果沒有請他重新登入取得 token， 下一步才是 await checkAuth();
  useEffect(() => {
    const initAuth = async () => {
      const token = getToken();

      if (!token) {
        dispatch(logoutAction());
        navigate('/login');
        return;
      }

      try {
        await checkAuth();
        dispatch(
          loginSuccess({
            token,
          }),
        );
      } catch {
        dispatch(logoutAction());
        showError('請先登入，將導向登入頁面');
        navigate('/login');
      }
    };

    initAuth();
  }, [dispatch, navigate]);

  return (
    <>
      <div className="d-flex">
        {/* Main Area */}
        {/* Sidebar */}
        <AdminSidebar />
        <div className="flex-grow-1">
          {/* <BackHeader /> */}
          {/* Top Navbar */}
          <AdminNavbar />
          {/* Page Content */}
          <main className="ui-layout container p-4 bg-light min-vh-100">
            <Outlet />
          </main>
        </div>
      </div>
      <GoTop />
    </>
  );
}
