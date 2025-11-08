import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const { cartItems } = useCart();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-md">
      <nav className="container mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-indigo-600" 
          >
            Vibe
          </Link>
          <div className="flex items-center space-x-6">
            <Link
              to="/"
              className="hidden text-sm font-medium text-gray-600 transition-colors hover:text-indigo-600 sm:block"
            >
              Products
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-600 transition-colors hover:text-indigo-600"
            >
              <ShoppingBagIcon className="h-6 w-6" />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-3 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;