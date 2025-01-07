const express = require('express');
const { placeOrder, getOrders } = require('../controllers/orderController');

const router = express.Router();

// Route to get all orders
router.get('/', getOrders);

// Route to place an order
router.post('/', placeOrder);

module.exports = router;
