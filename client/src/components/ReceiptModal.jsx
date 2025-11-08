import React from 'react';

const ReceiptModal = ({ receipt, onClose }) => {
  if (!receipt) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="relative w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-green-600">
            Checkout Successful!
          </h3>
          <p className="mt-4 text-gray-600">{receipt.message}</p>
          <div className="mt-6 space-y-2 text-left text-sm text-gray-700">
            <p>
              <strong>Order ID:</strong> {receipt.orderId}
            </p>
            <p>
              <strong>Total Paid:</strong> ${parseFloat(receipt.total).toFixed(2)}
            </p>
            <p>
              <strong>Items:</strong> {receipt.itemsPurchased}
            </p>
            <p>
              <strong>Date:</strong> {new Date(receipt.timestamp).toLocaleString()}
            </p>
          </div>
          <button
            onClick={onClose}
            className="mt-8 w-full rounded-md bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default ReceiptModal;