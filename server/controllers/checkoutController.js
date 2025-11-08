import CartItem from '../models/CartItem.js';

// POST /api/checkout
export const checkout = async (req, res) => {
  try {
    const { cartItems, total } = req.body; 


    // 1. Clear the cart
    await CartItem.deleteMany({}); 

    // 2. Send back a mock receipt
    const receipt = {
      message: 'Checkout successful! (Mock)',
      orderId: `MOCK-${Date.now()}`,
      total,
      itemsPurchased: cartItems.length,
      timestamp: new Date().toISOString(),
    };

    res.status(200).json(receipt);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};