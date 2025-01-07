import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import '../styles/orders.css'; // Ensure this file styles the Orders component effectively

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await api.get('/api/orders');
        if (response.data && response.data.data) {
          setOrders(response.data.data); // Assuming Airtable's structure with `data` array
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error('Failed to fetch orders:', error);
      }
    }
    fetchOrders();
  }, []);

  return (
    <div className="orders-container">
      <h1 className="orders-title">Your Orders</h1>
      {orders.length > 0 ? (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order.id} className="order-item">
              <h3>Order ID: {order.id}</h3>
              <p><strong>Product ID:</strong> {order.id}</p>
              <p><strong>Buyer Name:</strong> {order.BuyerName}</p>
              <p><strong>Buyer Email:</strong> {order.BuyerEmail}</p>
              <p><strong>Quantity:</strong> {order.Quantity}</p>
              <p><strong>Order Status:</strong> {order.OrderStatus}</p>
              <p><strong>Owner:</strong> {order.Owner}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-orders">No orders placed yet.</p>
      )}
    </div>
  );
}

export default Orders;
