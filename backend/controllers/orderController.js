const airtableBase = require('../utils/airtable');

// Fetch all orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await airtableBase('Orders').select().all();

    const formattedOrders = orders.map((item) => ({
      id: item.id, // Airtable record ID
      ...item.fields, // Order fields
    }));

    res.status(200).json({ success: true, data: formattedOrders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch orders. Please try again later.',
    });
  }
};

// Place a new order
exports.placeOrder = async (req, res) => {
  const { orders } = req.body;

  // Validate request body
  if (!Array.isArray(orders) || orders.length === 0) {
    return res.status(400).json({
      success: false,
      message: "Invalid request. The 'orders' array is required.",
    });
  }

  try {
    const createdOrders = await Promise.all(
      orders.map(async (order) => {
        const { productId, buyerName, buyerEmail, quantity, owner } = order;

        // Validate individual order fields
        if (!productId || !buyerName || !buyerEmail || !quantity || !owner) {
          throw new Error(`Missing required fields for order: ${JSON.stringify(order)}`);
        }

        // Create order in Airtable
        const createdOrder = await airtableBase('Orders').create({
          "Product ID": productId,
          "BuyerName": buyerName,
          "BuyerEmail": buyerEmail,
          Quantity: parseInt(quantity, 10),
          "OrderStatus": 'Pending',
          "Owner": owner,
        });

        return {
          id: createdOrder.id,
          ...createdOrder.fields,
        };
      })
    );

    res.status(201).json({
      success: true,
      message: 'Orders placed successfully!',
      data: createdOrders,
    });
  } catch (error) {
    console.error('Error placing orders:', error);

    if (error.message.startsWith('Missing required fields')) {
      return res.status(400).json({ success: false, message: error.message });
    }

    res.status(500).json({
      success: false,
      message: 'Failed to place orders. Please try again later.',
    });
  }
};
