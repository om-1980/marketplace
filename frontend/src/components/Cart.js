import React, { useState, useEffect } from "react";
import api from "../utils/api";
import "../styles/cart.css";

function Cart() {
  const [cart, setCart] = useState([]);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchCart() {
      try {
        const response = await api.get("/api/cart");
        if (response.data && response.data.data) {
          setCart(response.data.data);
        } else {
          console.error("Unexpected response format:", response.data);
        }
      } catch (error) {
        console.error("Failed to fetch cart:", error);
      }
    }
    fetchCart();
  }, []);

  const updateCart = async (id, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      await api.put(`/api/cart/${id}`, { Quantity: newQuantity });
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, Quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error("Failed to update cart item:", error);
    }
  };

  const removeCartItem = async (id) => {
    try {
      await api.delete(`/api/cart/${id}`);
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Failed to remove cart item:", error);
    }
  };

  const handlePlaceOrder = async () => {
    setErrorMessage(""); // Reset error message
  
    if (!buyerName || !buyerEmail) {
      setErrorMessage("Please provide your name and email.");
      return;
    }
  
    try {
      // Map cart items to order objects
      const orders = cart.map((item) => ({
        productId: item.id,
        buyerName,
        buyerEmail,
        quantity: item.Quantity,
        owner: buyerName,
      }));
  
      // Send POST request to place orders
      const response = await api.post("/api/orders", { orders });
  
      if (response.data && response.data.success) {
        alert("Order placed successfully!");
        await api.delete("/api/cart");
        setCart([]); // Clear cart
        setShowOrderModal(false); // Close modal
      } else {
        throw new Error(response.data.message || "Unknown error");
      }
    } catch (error) {
      console.error("Failed to place order:", error);
      setErrorMessage("Failed to place order. Please try again.");
    }
  };
  

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Shopping Cart</h1>
      {cart.length > 0 ? (
        <div className="cart-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.ImageURL}
                alt={item.Name}
                className="cart-item-image"
                onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
              />
              <div className="cart-item-details">
                <h3>{item.Name}</h3>
                <p>Price: ₹{item.Price}</p>
                <div className="cart-item-actions">
                  <button
                    className="quantity-btn"
                    onClick={() => updateCart(item.id, item.Quantity - 1)}
                    disabled={item.Quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity">{item.Quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => updateCart(item.id, item.Quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeCartItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-cart">Your cart is empty.</p>
      )}

      {cart.length > 0 && (
        <button className="place-order-btn" onClick={() => setShowOrderModal(true)}>
          Place Order
        </button>
      )}

      {showOrderModal && (
        <div className="order-modal">
          <div className="modal-content">
            <h2>Place Your Order</h2>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <label>
              Name:
              <input
                type="text"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={buyerEmail}
                onChange={(e) => setBuyerEmail(e.target.value)}
              />
            </label>
            <div className="modal-actions">
              <button className="submit-btn" onClick={handlePlaceOrder}>
                Submit
              </button>
              <button className="cancel-btn" onClick={() => setShowOrderModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
