const express = require('express');
const {
  getCart,
  addToCart,
  updateCartItem,
  deleteCartItem,
  clearCart,
} = require('../controllers/cartController');
const router = express.Router();

// Middleware to handle errors (optional but recommended)
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Routes with asyncHandler to manage errors
router.get('/', asyncHandler(getCart)); 
router.post('/', asyncHandler(addToCart));
router.put('/:id', asyncHandler(updateCartItem)); 
router.delete('/:id', asyncHandler(deleteCartItem)); 
router.delete('/', asyncHandler(clearCart));

module.exports = router;
