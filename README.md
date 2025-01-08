# Simplified Marketplace Application  

This project is a marketplace application built using the **ERN stack** (Express.js, React, Node.js). The application allows users to browse products, list items for sale, and place orders.  

You can access the live project here: [Simplified Marketplace](https://marketplace-delta-azure.vercel.app/)

---

## Table of Contents  
- [Screenshots](#screenshots)
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Project Setup](#project-setup)  
- [API Endpoints](#api-endpoints)  
- [Future Enhancements](#future-enhancements) 

---

## Screenshots  

### Homepage
![Homepage](![image](https://github.com/user-attachments/assets/47558bfa-535c-4f1e-ba13-4b5b77452f8b)
)

### Product Listing
![Product Listing](![image](https://github.com/user-attachments/assets/371712f5-cb61-4d27-8113-06f59d0b2a35)
)

### Order Placement
![Order Placement](![image](https://github.com/user-attachments/assets/ce4b93ae-364e-425a-b061-ffb310d576bf)
)

---

## Features  

### Core Features  
1. **Product Listings**  
   - Browse and search for products.  
   - Add, edit, or delete product listings (CRUD).  

2. **Order Placement**  
   - Place orders for available products.  
   - View a list of placed or received orders.  

### Additional Features  
- Responsive design for both mobile and desktop.  
- User-friendly UI with visual feedback for all interactions.  
- Backend API integration for seamless data flow.  

---

## Technologies Used  

### Frontend  
- React.js  
- Axios (or Fetch API) for API calls  
- CSS for responsive design  

### Backend  
- Node.js with Express.js  
- REST APIs for products and orders  

### Database  
- Airtable  

---

## Project Setup  

### Prerequisites  
- Node.js installed on your machine  
- Airtable account with API Key  

### Steps to Run  

1. **Clone the Repository**  
   ```bash  
   git clone https://github.com/om-1980/marketplace
   cd marketplace
   ```

2. **Install Dependencies**
   - Navigate to the backend folder and install dependencies:
   ```bash
   cd backend  
   npm install express body-parser cors axios airtable
   ```

   - Navigate to the frontend folder and install dependencies:
   ```bash
   cd frontend
   npm install react react-dom react-router-dom axios
   ```

3. **Set Up Environment Variables**
   Create a .env file in the backend folder with the following content:
   ```bash
   PORT=5000  
   AIRTABLE_API_KEY=your_airtable_api_key  
   AIRTABLE_BASE_ID=your_airtable_base_id
   ```

4. **Start the Backend Server**
   ```bash
   cd backend  
   node .\server.js
   ```

5. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm start
   ```

6. **Access the Application**  
   Open your browser and navigate to `http://localhost:3000`.  

---

## API Endpoints  

### Products API  
- `GET /api/products` - Fetch all products  
- `POST /api/products` - Add a new product  
- `PUT /api/products/:id` - Edit an existing product  
- `DELETE /api/products/:id` - Delete a product  

### Orders API  
- `POST /api/orders` - Place a new order  
- `GET /api/orders` - Retrieve a list of orders  

---

## Future Enhancements  
- **Authentication**: Add user login and registration for managing personal data.  
- **Payment Integration**: Add payment gateway integration like Stripe or PayPal.  
- **Notifications**: Notify users when an order is placed or updated.  
- **Admin Panel**: Allow admins to manage all product listings and orders.  

---


   
   
