const ProductCards = () => {
  return (
    <>
      <div className="card">
        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        <div className="name">Product name</div>
        <div className="price">$60</div>
        <button id="add-product">Add to cart</button>
      </div>
    </>
  );
};

export default ProductCards;
