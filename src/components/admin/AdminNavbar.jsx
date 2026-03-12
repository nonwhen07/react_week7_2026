import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/services/authService';
import { clearToken } from '@/utils/auth';
import { logoutAction } from '@/features/auth/authSlice';
import { showSuccess, showError } from '@/utils/handleApiSuccess';

const AdminNavbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();

      // 清除 cookie
      // document.cookie = 'hexToken_week7=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      clearToken();
      dispatch(logoutAction());
      // alert('登出成功，即將跳轉到登入面');
      showSuccess('登出成功，即將跳轉到登入面');
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
      // alert('登出失敗');
      showError('登出失敗');
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
