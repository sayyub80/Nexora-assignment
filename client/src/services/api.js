import axios from 'axios';


const API = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Product API calls
export const getProducts = () => API.get('/products');

// Cart API calls
export const getCart = () => API.get('/cart');
export const addToCart = (productId, quantity) => API.post('/cart', { productId, quantity });
export const removeFromCart = (itemId) => API.delete(`/cart/${itemId}`);

// Checkout API call
export const checkout = (cartData) => API.post('/checkout', cartData);