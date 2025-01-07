const airtableBase = require('../utils/airtable');

// Fetch all products
exports.getProducts = async (req, res) => {
  try {
    const products = await airtableBase('Products').select().all();
    const formattedProducts = products.map((item) => ({
      id: item.id,
      ...item.fields,
    }));
    res.json({ success: true, data: formattedProducts });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch products' });
  }
};
