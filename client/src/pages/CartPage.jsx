import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

const CartPage = () => {
  const { cartItems, total, loading } = useCart();

  if (loading) {
    return <p className="text-center text-lg">Loading cart...</p>;
  }

  // Empty Cart View
  if (cartItems.length === 0 && !loading) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg bg-white p-12 text-center shadow-sm">
        <ShoppingBagIcon className="h-16 w-16 text-gray-400" />
        <h2 className="mt-6 text-2xl font-bold">Your cart is empty</h2>
        <p className="mt-2 text-gray-600">
          Looks like you haven't added anything yet.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-lg bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  // Cart View with Items
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">
        My Cart
      </h1>
      <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12">
        <section aria-labelledby="cart-heading" className="lg:col-span-8">
          <h2 id="cart-heading" className="sr-only">
            Items in your shopping cart
          </h2>
          <ul
            role="list"
            className="divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white shadow-sm"
          >
            {cartItems.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </ul>
        </section>

        {/* Order Summary (Right Column) */}
        <section
          aria-labelledby="summary-heading"
          className="sticky top-24 mt-16 rounded-lg bg-white p-6 shadow-sm lg:col-span-4 lg:mt-0"
        >
          {/* Promo Code */}
          <div>
            <label
              htmlFor="promo-code"
              className="block text-sm font-medium text-gray-700"
            >
              Enter Promo Code
            </label>
            <div className="mt-1 flex space-x-2">
              <input
                type="text"
                id="promo-code"
                name="promo-code"
                className="block w-full rounded-md border border-gray-300 p-2 text-sm shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Promo Code"
              />
              <button
                type="button"
                className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
              >
                Submit
              </button>
            </div>
          </div>

          {/* Price Breakdown */}
          <dl className="mt-8 space-y-4 border-t border-gray-200 pt-8">
            <div className="flex items-center justify-between">
              <dt className="text-sm text-gray-500">Subtotal</dt>
              <dd className="text-sm font-medium text-gray-900">
                ${total.toFixed(2)}
              </dd>
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
              <dt className="text-base font-medium text-gray-900">
                Estimated Total
              </dt>
              <dd className="text-base font-medium text-gray-900">
                ${total.toFixed(2)}
              </dd>
            </div>
          </dl>

          {/* "Proceed to Checkout" Button */}
          <div className="mt-8">
            <Link
              to="/checkout"
              className="flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg"
            >
              Proceed to Checkout
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartPage;