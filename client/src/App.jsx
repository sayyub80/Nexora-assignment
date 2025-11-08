import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage'; 

function App() {
  return (
    <div className="min-h-screen bg-gray-50"> 
      <Header />
      <main className="container mx-auto max-w-7xl p-6">
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} /> 
        </Routes>
      </main>
    </div>
  );
}

export default App;