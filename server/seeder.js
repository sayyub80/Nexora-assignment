import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Product from './models/Product.js';
// We don't need to seed CartItem, as the cart should start empty

dotenv.config();
connectDB();

// --- MOCK DATA ---
// Feel free to change this to match your "vibe"
// ... imports

// --- MOCK DATA ---
const products = [
  {
    name: 'Urban Streetwear Hoodie',
    price: 79.99,
    imageUrl:'https://images.unsplash.com/photo-1732475530155-90158f3b5f79?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',
  },
  {
    name: 'Sunset Vibe T-Shirt',
    price: 29.99,
    imageUrl: 'https://images.unsplash.com/photo-1759572095384-1a7e646d0d4f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=627',
  },
  {
    name: 'Minimalist White Sneakers',
    price: 120.00,
    imageUrl: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764',
  },
  {
    name: 'Retro-Futurism Sunglasses',
    price: 45.50,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1673757119677-6445b73a405e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
  },
  {
    name: 'Cozy Knit Beanie',
    price: 22.00,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1695604460925-4fc8f2722362?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
  },
  {
    name: 'Techwear Cargo Pants',
    price: 89.99,
    imageUrl: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1861',
  },
  {
    name: 'Diwali Glow Kurta',
    price: 55.00,
    imageUrl: 'https://images.unsplash.com/photo-1667665970121-c3504c519cda?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=765',
  },
];

// --- END MOCK DATA ---

// Function to import the data
const importData = async () => {
  try {
    // 1. Clear existing products
    await Product.deleteMany();

    // 2. Insert the mock products
    await Product.insertMany(products);

    console.log('Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with a failure code
  }
};

// Function to destroy the data
const destroyData = async () => {
  try {
    // Clear all products
    await Product.deleteMany();

    console.log('Data Destroyed Successfully!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Check for command line arguments
// 'node seeder.js -d' will run destroyData
// 'node seeder.js' will run importData
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}