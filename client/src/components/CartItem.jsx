import React from "react";
import { useCart } from "../context/CartContext";
import { TrashIcon } from "@heroicons/react/24/outline";

const CartItem = ({ item }) => {
  const { removeItemFromCart } = useCart();

  if (!item.productId) {
    return (
      <li className="flex p-4">
        <p className="text-red-500">This item is no longer available.</p>
        <button
          onClick={() => removeItemFromCart(item._id)}
          className="ml-4 font-medium text-red-600 hover:text-red-500"
        >
          Remove
        </button>
      </li>
    );
  }

  const { name, price, imageUrl } = item.productId;
  const itemTotal = price * item.quantity;

  return (
    <li className="flex p-4 sm:p-6">
      <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md sm:h-24 sm:w-24">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="flex flex-col flex-1">
          <div className="sm:grid sm:grid-cols-2 sm:gap-x-6">
            <div>
              <h3 className="text-base font-medium text-gray-900">{name}</h3>
              <p className="mt-1 text-sm text-gray-500">Qty {item.quantity}</p>
            </div>

            <div className="mt-4 sm:mt-0 sm:text-right">
              <p className="text-base font-medium text-gray-900">
                ${itemTotal.toFixed(2)}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                (${price.toFixed(2)} each)
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={() => removeItemFromCart(item._id)}
              className="-m-2 inline-flex p-2 text-gray-400 hover:text-red-500"
            >
              <span className="sr-only">Remove</span>
              <TrashIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
export default CartItem;
