import './ProductCard.scss';
import { useState } from 'react';
import { useCart } from '../../../contexts/CartContext';

const ProductCard = ({ id, name, price, image }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart, removeFromCart } = useCart();

  const increase = () => {
    setQuantity((quantity) => quantity + 1);
    addToCart(id);
  };
  const decrease = () => {
    setQuantity((quantity) => {
      const newQuantity = quantity - 1;
      return newQuantity < 0 ? 0 : newQuantity;
    });
    removeFromCart(id);
  };

  return (
    <>
      <div className="card">
        <img src={image} alt={name} />
        <div className="name">{name}</div>
        <div className="price">${price.toFixed(2)}</div>
        {quantity > 0 ? (
          <div className="order-quantity">
            <button id="decrease-quantity" onClick={decrease}>
              -
            </button>
            <input type="number" name="quantity" id="quantity" min={0} readOnly value={quantity} />
            <button id="increase-quantity" onClick={increase}>
              +
            </button>
          </div>
        ) : (
          <button id="add-product" onClick={increase}>
            Add to cart
          </button>
        )}
      </div>
    </>
  );
};

export default ProductCard;
