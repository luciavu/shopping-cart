import './ProductSummary.scss';
import { useCart } from '../../context/CartContext';
import PropTypes from 'prop-types';

const ProductSummary = ({ itemId, title, quantity, price, image }) => {
  const { addToCart, removeFromCart } = useCart();

  return (
    <>
      <hr />
      <div className="product-summary">
        <img src={image} alt={title} />
        <div className="details">
          <div className="name">{title}</div>
          <div className="item-price-quantity">
            <div className="price">${Math.round(price * quantity * 100) / 100}</div>
            <div className="quantity-adjustor">
              <div className="quantity">Quantity: {quantity}</div>
              <button id="decrease-cart" onClick={() => removeFromCart(itemId)}>
                -
              </button>
              <button id="increase-cart" onClick={() => addToCart(itemId)}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductSummary.propTypes = {
  itemId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductSummary;
