/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import Product from './Product';
import AppContext from '../context/AppContext';
import '../styles/Products.css';

function ProductsDetails({products}) {

  
  const {
    addCart,
  } = useContext(AppContext);
  
  const handleAddToCart = (product) => {
    addCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product, index) => (
          <Product
            key={index}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsDetails;
