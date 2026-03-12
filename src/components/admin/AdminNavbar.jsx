import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/services/authService';
import { clearToken } from '@/utils/auth';
import { logoutAction } from '@/features/auth/authSlice';

// import { toast } from '@/utils/toast';

import { useToast } from '@/hooks/useToast';

const AdminNavbar = () => {
  // 初始化 dispatch
  const dispatch = useDispatch();
  // 初始化 navigate
  const navigate = useNavigate();

  const isAuth = useSelector((state) => state.auth.isAuth);
  const { success, showError } = useToast();

  const handleLogout = async () => {
    try {
      await logout();
      clearToken();
      dispatch(logoutAction());
      // toast.success(dispatch, '登出成功，即將跳轉到登入面');
      success('登出成功，即將跳轉到登入面。');
      navigate('/login');
    } catch (err) {
      console.error('Logout failed:', err);
      showError('登出失敗，請重新嘗試。');
      // toast.error(dispatch, '登出失敗，請重新嘗試。');
    }
  };
  return (
    <header className="navbar navbar-light bg-white border-bottom px-4">
      {isAuth ? <span>已登入</span> : <span>未登入</span>}
      <span className="navbar-brand mb-0 h5">Admin Dashboard</span>

      <button onClick={handleLogout} type="button" className="btn btn-secondary">
        登出
      </button>
    </header>
  );
};

export default AdminNavbar;
