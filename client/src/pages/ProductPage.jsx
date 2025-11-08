import React, { useState, useEffect } from 'react';
import * as api from '../services/api';
import ProductItem from '../components/ProductItem';
import Hero from '../components/Hero'; 
import TrustBadges from '../components/TrustBadges'; 


const ProductSkeleton = () => (
  <div className="animate-pulse">
    <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-200"></div>
    <div className="mt-4 h-4 rounded bg-gray-200"></div>
    <div className="mt-2 h-6 w-1/3 rounded bg-gray-200"></div>
  </div>
);

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.getProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message || 'Failed to load products.');
      } finally {
        // Add a small delay for a smoother feel
        setTimeout(() => setLoading(false), 500);
      }
    };
    fetchProducts();
  }, []);

  // Helper function to render the main content
  const renderContent = () => {
    if (loading) {
      return (
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {[...Array(6)].map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center">
          <p className="text-lg text-red-500">{error}</p>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {products.map((product) => (
          <ProductItem
            key={product._id}
            product={product}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-16">
      <Hero />
      <TrustBadges />
      <div id="products"> 
        <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">
          Exclusive Products
        </h1>
        {renderContent()}
      </div>
    </div>
  );
};

export default ProductPage;