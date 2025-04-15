import './App.scss';
import { FaGithub } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './assets/components/Navbar/Navbar';
import Products from './assets/components/Products/Products';
import Cart from './assets/Cart/Cart';
import Home from './assets/components/Home/Home';

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
