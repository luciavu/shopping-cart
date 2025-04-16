import './Products.scss';
import { useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { useProducts } from '../../context/ProductsContext';

const Products = () => {
  const [active, setActive] = useState('all');
  const [products, loading, error] = useProducts(); // grouped products, loading, error
  const filteredProducts =
    active === 'all' ? Object.values(products || {}).flat() : products?.[active] || [];

  return (
    <>
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
                className={`women's clothing ${active === `women's clothing` ? 'active' : ''}`}
                onClick={() => {
                  setActive(`women's clothing`);
                }}
              >
                Women's Clothing
              </div>
              <div
                className={`men's clothing ${active === `men's clothing` ? 'active' : ''}`}
                onClick={() => {
                  setActive(`men's clothing`);
                }}
              >
                Men's Clothing
              </div>
              <div
                className={`electronics ${active === 'electronics' ? 'active' : ''}`}
                onClick={() => {
                  setActive('electronics');
                }}
              >
                Electronics
              </div>
              <div
                className={`jewelery ${active === 'jewelery' ? 'active' : ''}`}
                onClick={() => {
                  setActive('jewelery');
                }}
              >
                Jewellery
              </div>
            </div>
            <h5>
              {loading
                ? 'Loading...'
                : `${
                    active === 'all'
                      ? Object.values(products).flat().length
                      : products?.[active]?.length || 0
                  } items found.`}
            </h5>
          </div>
          <div className="products">
            {error ? (
              <p>An error has occurred</p>
            ) : loading ? (
              <p>Loading products...</p>
            ) : (
              filteredProducts.map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.title}
                    price={product.price}
                    image={product.image}
                  ></ProductCard>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
