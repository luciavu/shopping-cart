import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';
import App from './App';

const renderWithRoute = (route) => {
  render(
    <MemoryRouter initialEntries={[route]}>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </MemoryRouter>
  );
};

describe('App component', () => {
  it('renders Home at root path', () => {
    renderWithRoute('/');
    expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument();
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  it('renders Products at /products', () => {
    renderWithRoute('/products');
    expect(screen.getByRole('heading', { name: /Products/i, level: 2 })).toBeInTheDocument();
  });

  it('renders Cart at /cart', () => {
    renderWithRoute('/cart');
    expect(screen.getByRole('heading', /Your cart/i)).toBeInTheDocument();
  });
});
