import { createContext, useContext } from 'react';

// 1. Create the context
export const CartContext = createContext(null);

// 2. Create the custom hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};