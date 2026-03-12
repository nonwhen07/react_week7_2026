import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom';
// import BackHeader from '@/components/admin/BackHeader';
// import PageLoader from '@/components/PageLoader';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminNavbar from '@/components/admin/AdminNavbar';
import GoTop from '@/components/GoTop';

import { checkAuth } from '@/services/authService';
import { showError } from '@/utils/handleApiSuccess';
import { loginSuccess, logoutAction } from '@/features/auth/authSlice';

export default function AdminLayout() {
  // 初始化 dispatch
  const dispatch = useDispatch();
  // 初始化 navigate
  const navigate = useNavigate();
  useEffect(() => {
    // const [isScreenLoading, setIsScreenLoading] = useState(false);
    const initAuth = async () => {
      // setIsScreenLoading(true);
      try {
        await checkAuth();
        // setIsAuth(true);
        dispatch(loginSuccess());
      } catch {
        // setIsAuth(false);
        // alert('請先登入，將導向登入頁面');
        dispatch(logoutAction());
        showError('請先登入，將導向登入頁面');
        navigate('/login'); // **確認沒有登入就跳轉到 LoginPage**
      }
      // finally {
      //   setIsScreenLoading(false);
      // }
    };

    initAuth();
  }, []);

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
