import CartItem from '../models/CartItem.js';
import Product from '../models/Product.js';

// GET /api/cart
export const getCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.find({}).populate('productId');

    // Calculate total
    const total = cartItems.reduce((acc, item) => {
      if (item.productId) {
        return acc + item.productId.price * item.quantity;
      }
      return acc;
    }, 0);

    res.json({ cartItems, total: total.toFixed(2) });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// POST /api/cart
export const addCartItem = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    // Check if item is already in cart
    let existingItem = await CartItem.findOne({ productId });

    if (existingItem) {
      // Update quantity
      existingItem.quantity += quantity;
      await existingItem.save();
      res.status(200).json(existingItem);
    } else {
      // Create new cart item
      const newItem = new CartItem({
        productId,
        quantity,
      });
      await newItem.save();
      res.status(201).json(newItem);
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// DELETE /api/cart/:id
export const removeCartItem = async (req, res) => {
  try {
    const cartItem = await CartItem.findById(req.params.id);

    if (cartItem) {
      await cartItem.deleteOne(); 
      res.json({ message: 'Item removed' });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};