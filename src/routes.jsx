import App from './App';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import ErrorPage from './ErrorPage';
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';

const routes = [
  {
    path: '/',
    element: (
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: 'home', element: <Home /> },
      { path: 'products', element: <Products /> },
      { path: 'cart', element: <Cart /> },
    ], // Home renders on '/'
  },
];

export default routes;
