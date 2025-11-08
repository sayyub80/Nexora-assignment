import React, { useState, useEffect } from 'react';
import * as api from '../services/api';
import { CartContext } from './CartContext'; 


const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch the initial cart state from the server
  const fetchCart = async () => {
    try {
      setLoading(true);
      const { data } = await api.getCart();
      setCartItems(data.cartItems || []);
      setTotal(parseFloat(data.total) || 0);
    } catch (error) {
      console.error('Failed to fetch cart:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  // Function to add an item
  const addItemToCart = async (productId, quantity) => {
    try {
      await api.addToCart(productId, quantity);
      await fetchCart(); // Refresh cart from server
    } catch (error) {
      console.error('Failed to add item:', error);
    }
  };

  // Function to remove an item
  const removeItemFromCart = async (itemId) => {
    try {
      await api.removeFromCart(itemId);
      await fetchCart(); // Refresh cart from server
    } catch (error) {
      console.error('Failed to remove item:', error);
    }
  };

  // Function to clear cart (used after checkout)
  const clearCart = () => {
    setCartItems([]);
    setTotal(0);
  };

  const value = {
    cartItems,
    total,
    loading,
    fetchCart,
    addItemToCart,
    removeItemFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;