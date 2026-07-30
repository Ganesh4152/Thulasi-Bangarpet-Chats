import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>🍽️ Thulasi Bangarpet Chats</h2>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/orders">Orders</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/cart">Cart 🛒</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
