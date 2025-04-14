import { useState } from 'react';
const ProductCard = () => {
  const [quantity, setQuantity] = useState(0);

  const increase = () => setQuantity((quantity) => quantity + 1);
  const decrease = () => {
    setQuantity((quantity) => {
      const newQuantity = quantity - 1;
      return newQuantity < 0 ? 0 : newQuantity;
    });
  };

  return (
    <>
      <div className="card">
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        <div className="name">Product name</div>
        <div className="price">$60</div>
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
