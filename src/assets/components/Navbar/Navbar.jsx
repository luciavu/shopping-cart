import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const location = useLocation();
  const getTheme = () => {
    return location.pathname === '/' ? '-dark-theme' : '-light-theme';
  };

  return (
    <>
      <div className={`nav nav${getTheme()}`}>
        <Link to="/">
          <button id="home" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </button>
        </Link>
        <Link to="/products">
          <button id="products" className={location.pathname === '/products' ? 'active' : ''}>
            Products
          </button>
        </Link>
        <Link to="/cart">
          <button id="cart" className={location.pathname === '/cart' ? 'active' : ''}>
            Cart
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
