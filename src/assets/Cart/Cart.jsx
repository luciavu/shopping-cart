import './Cart.scss';
import { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import ProductSummary from '../ProductSummary/ProductSummary';

const Cart = () => {
  const {
    cart,
    getCartQuantity,
    getCartProductDetails,
    getCartSubTotal,
    getGST,
    getCartTotal,
    clearCart,
  } = useCart();
  const shipping = 10;
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [total, setTotal] = useState(0);

  const placeOrder = () => {
    setOrderPlaced(true);
    setTotal(getCartTotal(shipping));
    clearCart();
  };

  return (
    <>
      <div className="cart-wrapper">
        {orderPlaced ? (
          <>
            <h2>Order placed! (${total.toFixed(2)})</h2>
            <div>Just kidding. Thank you for checking out my project.</div>
          </>
        ) : (
          <>
            <h2>Your Cart ({getCartQuantity()})</h2>
            {getCartQuantity() === 0 ? (
              <div>Your cart is empty!</div>
            ) : (
              <div className="cart">
                <div className="product-summary-wrapper">
                  <h4>Items</h4>
                  {Object.entries(cart).map(([itemId, quantity]) => {
                    const product = getCartProductDetails(itemId);
                    return (
                      <ProductSummary
                        key={itemId}
                        itemId={itemId}
                        title={product.title}
                        quantity={quantity}
                        price={product.price}
                        image={product.image}
                      ></ProductSummary>
                    );
                  })}
                </div>
                <div className="checkout">
                  <h4>Checkout</h4>
                  <div className="subtotal">
                    <div className="label">Subtotal:</div>
                    <div className="value">{getCartSubTotal().toFixed(2)}</div>
                  </div>
                  <div className="shipping">
                    <div className="label">Shipping:</div>
                    <div className="value">{shipping.toFixed(2)}</div>
                  </div>
                  <div className="taxes">
                    <div className="label">GST (10%):</div>
                    <div className="value">{getGST().toFixed(2)}</div>
                  </div>
                  <div className="order-total">
                    <div className="label">Order Total:</div>
                    <div className="value">${getCartTotal(shipping).toFixed(2)}</div>
                  </div>
                  <hr />
                  <button id="payment-button" onClick={placeOrder}>
                    Place Order
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
