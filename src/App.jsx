import './App.scss';
import { FaGithub } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.body.style.backgroundImage = `url('/images/homepage.jpg')`;
      document.body.style.backgroundColor = 'black';
    } else {
      document.body.style.backgroundImage = 'none';
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
            aria-label="github"
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
