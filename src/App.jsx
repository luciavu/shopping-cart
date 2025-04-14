import './App.scss';
import { FaGithub } from 'react-icons/fa';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './assets/components/NavBar';
import Products from './assets/components/Products';
import Cart from './assets/components/Cart';
import Home from './assets/components/Home';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.body.style.backgroundColor = 'black';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  }, [location.pathname]);

  return (
    <>
      <div className="page-wrapper">
        <div className="github">
          <a
            href="https://github.com/luciavu/shopping-cart"
            target="_blank"
            className={location.pathname === '/' ? 'dark-theme' : 'light-theme'}
          >
            <FaGithub />
          </a>
        </div>
        <Navbar></Navbar>
        {location.pathname === '/' ? (
          <Home></Home>
        ) : location.pathname === '/products' ? (
          <Products></Products>
        ) : (
          <Cart></Cart>
        )}
      </div>
    </>
  );
}

export default App;
