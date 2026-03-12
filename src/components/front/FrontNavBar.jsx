import { NavLink } from 'react-router-dom';
import useCart from '@/hooks/useCart';
import { useSelector } from 'react-redux';

const routes = [
  { path: '/', name: '首頁' },
  { path: '/products', name: '產品列表' },
  { path: '/cart', name: '購物車' },
  //   { path: '/about', name: 'About' },
  //   { path: '/favorite', name: 'Favorite' },
  //   { path: '/orders', name: 'Orders' },
];

const FrontNavBar = () => {
  useCart();

  const carts = useSelector((state) => state.cart.carts);

  return (
    <>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container">
          <ul className="navbar-nav flex-row gap-5 fs-5">
            {routes.map((route) => (
              <li key={route.path} className="nav-item">
                <NavLink className="nav-link" aria-current="page" to={route.path}>
                  {/* {route.name} */}
                  {route.name === 'Cart' ? (
                    <div className="position-relative">
                      <i className="fas fa-shopping-cart"></i>
                      <span
                        className={`position-absolute badge rounded-circle ${
                          carts?.length ? 'text-bg-danger' : ''
                        }`}
                        style={{ bottom: '12px', left: '12px' }}
                      >
                        {carts?.length}
                      </span>
                    </div>
                  ) : (
                    route.name
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default FrontNavBar;
