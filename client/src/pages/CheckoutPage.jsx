import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import * as api from '../services/api';
import ReceiptModal from '../components/ReceiptModal';
import { Link, Navigate } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartItems, total, clearCart, loading } = useCart();
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [receipt, setReceipt] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsCheckingOut(true);
    try {
      const { data } = await api.checkout({
        cartItems,
        total,
        customer: formData,
      });
      setReceipt(data); 
      clearCart(); 
    } catch (error) {
      console.error('Checkout failed:', error);
      alert('Checkout failed. Please try again.');
    } finally {
      setIsCheckingOut(false);
      setFormData({ name: '', email: '' });
    }
  };

  // If cart is empty (e.g., after checkout), redirect to homepage
  // Also protects if user tries to access /checkout with an empty cart
  if (cartItems.length === 0 && !loading && !receipt) {
    return <Navigate to="/" replace />;
  }

  // Show modal once checkout is complete
  if (receipt) {
    return (
      <ReceiptModal
        receipt={receipt}
        onClose={() => setReceipt(null)} 
      />
    );
  }

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">
        Checkout
      </h1>
      <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
        {/* Checkout Form (Left Column) */}
        <section className="rounded-lg bg-white p-6 shadow-sm lg:col-span-7">
          <h2 className="text-xl font-medium text-gray-900">
            Shipping Information
          </h2>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              {/* You could add more fields here: Address, Phone, etc. */}
            </div>

            <div className="mt-8 border-t border-gray-200 pt-6">
              <button
                type="submit"
                disabled={isCheckingOut}
                className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                {isCheckingOut ? 'Processing...' : 'Place Order (Mock)'}
              </button>
            </div>
            <div className="mt-4 text-center">
              <Link
                to="/cart"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                &larr; Back to Cart
              </Link>
            </div>
          </form>
        </section>

        {/* Order Summary (Right Column) */}
        <section
          aria-labelledby="summary-heading"
          className="sticky top-24 mt-16 rounded-lg bg-white p-6 shadow-sm lg:col-span-5 lg:mt-0"
        >
          <h2 id="summary-heading" className="text-xl font-medium text-gray-900">
            Order summary
          </h2>
          {/* Item List */}
          <ul className="mt-6 divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item._id} className="flex py-4">
                <img
                  src={item.productId.imageUrl}
                  alt={item.productId.name}
                  className="h-16 w-16 shrink-0 rounded-md object-cover"
                />
                <div className="ml-4 flex flex-1 justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      {item.productId.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Qty {item.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    ${(item.productId.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Price Breakdown */}
          <dl className="mt-6 space-y-4 border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between">
              <dt className="text-sm text-gray-500">Subtotal</dt>
              <dd className="text-sm font-medium text-gray-900">
                ${total.toFixed(2)}
              </dd>
            </div>
            {/* Add discount, shipping, etc. if you want */}
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt className="text-base font-medium text-gray-900">
                Order total
              </dt>
              <dd className="text-base font-medium text-gray-900">
                ${total.toFixed(2)}
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
};

export default CheckoutPage;