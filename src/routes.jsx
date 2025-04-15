import App from './App';
import Home from './assets/components/Home/Home';
import Products from './assets/components/Products/Products';
import Cart from './assets/Cart/Cart';
import ErrorPage from './ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: 'home', element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'cart', element: <Cart /> },
    ], // Home renders on '/'
  },
];

export default routes;
