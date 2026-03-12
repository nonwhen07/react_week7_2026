import { NavLink } from 'react-router-dom';

const routes = [
  { path: '/admin', name: '後台首頁' },
  { path: '/admin/productlist', name: '產品列表' },
  // { path: '/admin/orderlist', name: '訂單列表' },
  // { path: '/admin/couponlist', name: '優惠卷列表' },
  // { path: '/admin/newslist', name: '最新消息' },
  { path: '/', name: '回到前台' },
];

const AdminSidebar = () => {
  return (
    <aside className="bg-dark text-white p-3" style={{ width: '240px', minHeight: '100vh' }}>
      <h4 className="mb-4">Admin</h4>
      <nav className="nav flex-column">
        <ul className="nav flex-column gap-2 fs-5">
          {routes.map((route) => (
            <li key={route.path} className="nav-item">
              <NavLink
                to={route.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active text-warning' : ''}`}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
