import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
