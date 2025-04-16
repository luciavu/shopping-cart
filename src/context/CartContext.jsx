import { createContext, useContext, useState } from 'react';
import { useProducts } from './ProductsContext';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({}); // product id, quantity
  const [products, loading] = useProducts();

  const addToCart = (id) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[id] > 1) {
        newCart[id] -= 1;
      } else {
        delete newCart[id];
      }
      return newCart;
    });
  };

  const getCartQuantity = () => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  };

  const getCartProductDetails = (id) => {
    const productsById = !loading && products ? Object.values(products).flat() : [];
    return productsById.find((p) => p.id === Number(id));
  };

  const getGST = () => {
    return 0.1 * getCartSubTotal();
  };

  const getCartSubTotal = () => {
    return Object.entries(cart).reduce((sum, [itemId, quantity]) => {
      const product = getCartProductDetails(itemId);
      return product ? sum + product.price * quantity : sum;
    }, 0);
  };

  const getCartTotal = (shipping) => {
    const fees = getCartSubTotal() * 0.1;
    return getCartSubTotal() + Number(shipping) + fees;
  };

  const clearCart = () => {
    setCart({});
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        getCartQuantity,
        getCartProductDetails,
        getCartSubTotal,
        getGST,
        getCartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
