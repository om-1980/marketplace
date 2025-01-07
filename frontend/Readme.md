# Marketplace Backend - API (Node.js/Express)

This is the frontend application for the Marketplace, built using **React**.js. It provides a user interface to interact with the backend, allowing users to view product listings, place orders, and manage their product listings.

## Features

- **Homepage**: Displays a list of available products.
- **Product Management**: Allows users to add, edit, or delete products.
- **Order Placement**: Users can place orders and view order confirmations.

## Setup Instructions

### 1. **Install Dependencies**
```bash
cd frontend
npm install react react-dom react-router-dom axios
```

### 2. **Start the Frontend Server**
```bash
npm start
```

### 3. **Frontend-Backend Integration**
The frontend uses Axios to make HTTP requests to the backend API to manage product and order data. You can interact with the following API endpoints:

- **GET /api/products**: Fetch all products.
- **POST /api/products**: Add a new product.
- **PUT /api/products/:id**: Update a product.
- **DELETE /api/products/:id**: Delete a product.
- **POST /api/orders**: Place a new order.

### 4. **User Interface**
- The homepage displays a list of products.
- A form is available to add or edit product details.
- Users can place orders, and after placing an order, a confirmation message is shown.

### 5. **Responsive Design**
The frontend is designed to be responsive and works seamlessly on both mobile and desktop devices.

### 6. **Testing the Application**
Once the backend server is running, the frontend will automatically connect to the backend at **http://localhost:5000**. You can interact with the product listings and place orders.
