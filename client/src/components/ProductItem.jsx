import React from "react";
import { useCart } from "../context/CartContext";
import { PlusIcon } from "@heroicons/react/24/solid";

const ProductItem = ({ product }) => {
  const { addItemToCart } = useCart();

  const handleAddToCart = () => {
    addItemToCart(product._id, 1);
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 ease-in-out hover:shadow-xl">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h3 className="text-base font-medium text-gray-900">
            {product.name}
          </h3>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </p>
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add
            <PlusIcon className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
