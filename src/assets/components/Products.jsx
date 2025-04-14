import { useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const [active, setActive] = useState('all');

  return (
    <>
      <div className="item-counter">Items in cart: {0}</div>
      <div className="product-wrapper">
        <h2>Products</h2>
        <h3>Explore our extensive range of high-quality products.</h3>

        <div className="flex">
          <div className="filter">
            <h4>SHOP BY CATEGORY</h4>
            <div className="category">
              <div
                className={`all ${active === 'all' ? 'active' : ''}`}
                onClick={() => {
                  setActive('all');
                }}
              >
                All
              </div>
              <div
                className={`clothes ${active === 'clothes' ? 'active' : ''}`}
                onClick={() => {
                  setActive('clothes');
                }}
              >
                Clothes
              </div>
              <div
                className={`bags ${active === 'bags' ? 'active' : ''}`}
                onClick={() => {
                  setActive('bags');
                }}
              >
                Bags
              </div>
              <div
                className={`jewellery ${active === 'jewellery' ? 'active' : ''}`}
                onClick={() => {
                  setActive('jewellery');
                }}
              >
                Jewellery
              </div>{' '}
            </div>

            <h5>{300} items found.</h5>
          </div>
          <div className="products">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>

            <ProductCard></ProductCard>
            <ProductCard></ProductCard>

            <ProductCard></ProductCard>
            <ProductCard></ProductCard>

            <ProductCard></ProductCard>
            <ProductCard></ProductCard>

            <ProductCard></ProductCard>
            <ProductCard></ProductCard>

            <ProductCard></ProductCard>
            <ProductCard></ProductCard>

            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
