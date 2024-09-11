import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h5>{product.name}</h5>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;