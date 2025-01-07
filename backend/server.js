const express = require('express');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes); 
app.use('/api/cart', cartRoutes); 
app.use('/api/orders', orderRoutes);

// Health check route
app.get('/', (req, res) => res.send('API is running!'));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
