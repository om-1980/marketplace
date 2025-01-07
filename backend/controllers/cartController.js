const airtableBase = require('../utils/airtable');

// Fetch all cart items
exports.getCart = async (req, res) => {
  try {
    const cartItems = await airtableBase('Cart').select().all();
    const formattedItems = cartItems.map((item) => ({
      id: item.id,
      ...item.fields,
    }));
    res.json({ success: true, data: formattedItems });
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch cart' });
  }
};

// Add an item to the cart
exports.addToCart = async (req, res) => {
  const { ProductId, Name, Price, ImageURL, Quantity } = req.body;

  // Validate input data
  if (!ProductId || !Name || !Price || !ImageURL || !Quantity) {
    return res.status(400).json({
      success: false,
      message: 'All fields (Product Id, Name, Price, ImageURL, Quantity) are required.',
    });
  }

  try {
    // console.log('Data to be added:', { ProductId, Name, Price, ImageURL, Quantity });
    
    const createdRecord = await airtableBase('Cart').create({
      "Product ID": ProductId, 
      "Name": Name,
      "Price": parseFloat(Price),
      "ImageURL": ImageURL, 
      "Quantity": parseInt(Quantity, 10),
    });

    // console.log('Created Record:', createdRecord);

    res.status(201).json({ success: true, data: { id: createdRecord.id, ...createdRecord.fields } });
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ success: false, message: 'Failed to add to cart' });
  }
};




// Update a cart item
exports.updateCartItem = async (req, res) => {
  const { id } = req.params;
  const { Quantity } = req.body;

  try {
    const updatedRecord = await airtableBase('Cart').update(id, { Quantity });
    res.json({ success: true, data: updatedRecord.fields });
  } catch (error) {
    console.error('Error updating cart item:', error);
    res.status(500).json({ success: false, message: 'Failed to update cart item' });
  }
};

// Delete a cart item
exports.deleteCartItem = async (req, res) => {
  const { id } = req.params;

  try {
    await airtableBase('Cart').destroy(id);
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting cart item:', error);
    res.status(500).json({ success: false, message: 'Failed to delete cart item' });
  }
};

// Clear all items from the cart
exports.clearCart = async (req, res) => {
  try {
    const records = await airtableBase('Cart')
      .select()
      .all(); // Fetch all cart records

    // Delete each record
    for (const record of records) {
      await airtableBase('Cart').destroy(record.id);
    }

    res.status(200).json({ success: true, message: 'Cart cleared successfully!' });
  } catch (error) {
    console.error('Error clearing cart:', error);
    res.status(500).json({ success: false, message: 'Failed to clear cart.' });
  }
};