import './App.scss';
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
      <Navbar></Navbar>
      {location.pathname === '/' ? (
        <Home></Home>
      ) : location.pathname === '/products' ? (
        <Products></Products>
      ) : (
        <Cart></Cart>
      )}
    </>
  );
}

export default App;
