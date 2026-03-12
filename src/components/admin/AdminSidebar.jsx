import { NavLink } from 'react-router-dom';
import {
  FaTachometerAlt,
  FaBoxOpen,
  FaShoppingCart,
  FaTicketAlt,
  FaNewspaper,
  FaHome,
} from 'react-icons/fa';

const routes = [
  {
    path: '/admin',
    name: 'Dashboard',
    icon: FaTachometerAlt,
    title: '後台首頁',
    end: true,
  },
  {
    path: '/admin/products',
    name: 'products',
    icon: FaBoxOpen,
    title: '產品列表',
  },
  {
    path: '/admin/orders',
    name: 'Orders',
    icon: FaShoppingCart,
    title: '優惠卷列表',
  },
  {
    path: '/admin/coupons',
    name: 'Coupons',
    icon: FaTicketAlt,
    title: '優惠卷列表',
  },
  {
    path: '/admin/news',
    name: 'News',
    icon: FaNewspaper,
    title: '最新消息',
  },
  { path: '/', name: 'BackHome', icon: FaHome, title: '回到前台首頁' },
];

const AdminSidebar = () => {
  return (
    <aside className="bg-dark text-white p-3" style={{ width: '240px', minHeight: '100vh' }}>
      <h4 className="mb-4">Admin</h4>
      <nav className="nav flex-column">
        <ul className="nav flex-column gap-2 fs-5">
          {/* end={route.path === '/admin'} ， React Router： end = exact match 
          意思變成： /admin ✔ /admin/productlist ✖ ，所以： 後台首頁 active 產品列表 inactive */}
          {routes.map((route) => {
            const Icon = route.icon;
            return (
              <li key={route.path} className="nav-item gap-1">
                <NavLink
                  to={route.path}
                  end={route.end}
                  title={route.title}
                  aria-label={route.title}
                  className={({ isActive }) => `nav-link ${isActive ? 'active text-warning' : ''}`}
                >
                  <Icon className="me-2" size={18} />
                  {route.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
