# Vibe Commerce - Mock E-Com Cart Assignment

This is a full-stack e-commerce shopping cart application built as a screening assignment for Vibe Commerce.

It features a modern, responsive frontend (built with React + Vite) and a robust backend API (built with Node.js, Express, and MongoDB). The app allows users to browse products, add/remove items from a persistent cart, and complete a mock checkout process.

## 📹 Live Demo Video

Here is a 2-minute video demonstrating the complete user flow, from adding products to viewing the final receipt.

https://www.loom.com/share/2e1bed75c09c46e3808b26e8717baf58

---

## 📸 Screenshots

sreenshot is in /client/public/images folder 

---

## 🚀 Tech Stack

* **Frontend:**
    * React (with Vite)
    * Tailwind CSS
    * React Router
    * Axios
    * Heroicons
* **Backend:**
    * Node.js
    * Express
    * MongoDB (with Mongoose)
    * CORS
    * Dotenv

---

## ✨ Features

* ✅ **Homepage:** Displays a hero banner, trust icons, and a grid of "Exclusive Products."
* ✅ **Product Grid:** Fetches products from the backend API with a skeleton loading state.
* ✅ **Add to Cart:** Users can add items to their cart from the product page.
* ✅ **Cart Page:** A dedicated summary page showing all items, quantities, and totals.
* ✅ **Remove from Cart:** Users can delete items from their cart.
* ✅ **Persistent Cart:** Cart state is saved in the MongoDB database, so it persists on refresh.
* ✅ **Multi-Step Checkout:** A separate, clean checkout page (`/checkout`) for user details.
* ✅ **Mock Checkout:** Simulates a checkout and displays a receipt modal with order details.
* ✅ **Responsive Design:** Fully responsive UI for both mobile and desktop.

---

## ⚙️ Getting Started (Setup & Installation)

To run this project locally, you will need two terminals.

### Prerequisites

* Node.js (v18+ recommended)
* MongoDB (a free MongoDB Atlas cluster is the easiest way to get a connection string)

### 1. Clone the Repository

```bash
git clone [https://github.com/sayyub80/Nexora-assignment.git]
cd Nexora



### 2. Backend Setup

Navigate to the backend folder:
Bash: cd server

Install dependencies:
Bash: npm install

Create a .env file in the /backend directory and add your MongoDB connection string:

MONGODB_URI=your_mongodb_connection_string_here
PORT=3000
Seed the database with mock products (this only needs to be run once):

Bash: npm run seeder

Start the backend server:
Bash: npm run dev
The server will be running on http://localhost:3000

3. Frontend Setup (Terminal 2)
Navigate to the frontend folder:
Bash: cd client

Install dependencies:
Bash: npm install

Start the frontend development server:
Bash: npm run dev

The app will open and run on http://localhost:5173