import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '@/services/authService';
import { clearToken } from '@/utils/auth';
import { showSuccess, showError } from '@/utils/handleApiSuccess';
import { logoutAction } from '@/features/auth/authSlice';

const routes = [
  { path: '/admin', name: '後台首頁' },
  { path: '/admin/productlist', name: '產品列表' },
  // { path: '/admin/orderlist', name: '訂單列表' },
  // { path: '/admin/couponlist', name: '優惠卷列表' },
  // { path: '/admin/newslist', name: '最新消息' },
  { path: '/', name: '回到前台' },
];

const BackHeader = () => {
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
    <>
      <header className="ui-layout">
        {isAuth ? <span>已登入</span> : <span>未登入</span>}
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
          <div className="container d-flex justify-content-between align-items-center">
            <ul className="navbar-nav flex-row gap-5 fs-5">
              {routes.map((route) => (
                <li key={route.path} className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to={route.path}>
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="d-flex align-items-center">
              <button onClick={handleLogout} type="button" className="btn btn-secondary">
                登出
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default BackHeader;
