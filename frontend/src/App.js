import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminOrders from "./pages/AdminOrders";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Logout from "./components/Logout";
import FoodDetails from "./pages/FoodDetails";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import CustomerProtectedRoute from "./components/CustomerProtectedRoute";
import "./styles/Home.css";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/menu" element={<Menu />} />

        <Route path="/food/:id" element={<FoodDetails />} />


<Route
  path="/cart"
  element={
    <CustomerProtectedRoute>
      <Cart />
    </CustomerProtectedRoute>
  }
/>


<Route
  path="/checkout"
  element={
    <CustomerProtectedRoute>
      <Checkout />
    </CustomerProtectedRoute>
  }
/>


<Route
  path="/orders"
  element={
    <CustomerProtectedRoute>
      <Orders />
    </CustomerProtectedRoute>
  }
/>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

<Route
  path="/admin/orders"
  element={
    <AdminProtectedRoute>
      <AdminOrders />
    </AdminProtectedRoute>
  }
/>


<Route
  path="/admin"
  element={
    <AdminProtectedRoute>
      <Admin />
    </AdminProtectedRoute>
  }
/>
        <Route path="/contact" element={<Contact />} />

        <Route path="/logout" element={<Logout />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
