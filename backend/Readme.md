# Marketplace Backend - API (Node.js/Express)

This is the backend API for the Marketplace application built using **Node.js** and **Express.js**. It handles the CRUD operations for products and order placement, integrated with a database using **Airtable** for storing product and order information.

## Features

- **Products API**: Allows users to create, update, view, and delete products.
- **Orders API**: Allows users to place and view orders.

## Setup Instructions

### 1. **Install Dependencies**
```bash
cd marketplace-backend
npm install express body-parser cors axios airtable
```

### 2. **Set Up Airtable**
- Sign up for an Airtable account (if you don't already have one).
- Create a base with two tables: Products and Orders.
  - Products Table: **name**, **description**, **price**, **image_url**.
  - Orders Table: **product_id**, **buyer_name**, **order_status**.
- Obtain your Airtable API key and base ID from the Airtable dashboard.
- Create a **.env** file in the backend directory and add the following configuration:
```bash
AIRTABLE_API_KEY=your_airtable_api_key
AIRTABLE_BASE_ID=your_airtable_base_id
PORT=5000
```

### 3. **Start the Backend Server**
To start the backend server:
```bash
node index.js
```
The backend server will now run on port 5000.

### 4. **API Endpoints**
Products API:
- **GET /api/products**: Fetch all products.
- **POST /api/products**: Add a new product.
- **PUT /api/products/:id**: Update an existing product.
- **DELETE /api/products/:id**: Delete a product.
Orders API:
- **GET /api/orders**: Fetch all orders.
- **POST /api/orders**: Place a new order.

### 5. **Testing API**
Can test the API endpoints using a tool like Postman or directly from the frontend once it's set up.

### 6. **Deploy the Backend**
You can deploy this backend on any platform like Heroku, DigitalOcean, or your preferred cloud service.