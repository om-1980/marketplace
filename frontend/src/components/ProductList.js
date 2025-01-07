import React, { useState, useEffect } from 'react';
import api from '../utils/api'; // Ensure `api` is correctly configured with baseURL
import '../styles/components.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/api/products');
        console.log('Fetched products:', response.data);
        
        // Check for "success" and "data" in the response
        if (response.data && response.data.success && Array.isArray(response.data.data)) {
          setProducts(response.data.data); // Use the "data" field
        } else {
          throw new Error('Unexpected response format');
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err.message || 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);
  

  const handleAddToCart = async (product) => {
    try {
      const cartItem = {
        ProductId: product.ProductID || product.id, // Use the exact field name expected by the backend
        Name: product.Name,
        Price: product.Price,
        ImageURL: product.ImageURL,
        Quantity: 1, // Match exact casing and key names
      };
  
      if (!cartItem.ProductId) {
        throw new Error('Product ID is missing.');
      }
  
      console.log('Adding to cart:', cartItem); // Debugging
      const response = await api.post('/api/cart', cartItem);
  
      console.log('Added to cart successfully:', response.data);
      alert(`${product.Name} has been added to the cart.`);
    } catch (err) {
      console.error('Error adding to cart:', err.response?.data || err.message);
      alert('Failed to add to cart. Please try again.');
    }
  };
  

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.ProductID || product.id} className="product-card">
          <img
            src={product.ImageURL}
            alt={product.Name}
            className="product-image"
            onError={(e) => (e.target.src = 'https://via.placeholder.com/150')}
          />
          <h3>{product.Name}</h3>
          <p>{product.Description}</p>
          <p>Price: ₹{product.Price}</p>
          <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
