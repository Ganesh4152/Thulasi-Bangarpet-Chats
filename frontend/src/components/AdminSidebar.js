import React from "react";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div
      style={{
        width: "230px",
        background: "#212529",
        color: "white",
        minHeight: "100vh",
        paddingTop: "20px",
      }}
    >
      <h3 style={{ textAlign: "center" }}>Admin Panel</h3>

      <ul style={{ listStyle: "none", padding: "20px" }}>
        <li style={{ marginBottom: "20px" }}>
          <Link
            to="/admin"
            style={{ color: "white", textDecoration: "none" }}
          >
            📊 Dashboard
          </Link>
        </li>

        <li style={{ marginBottom: "20px" }}>
          <Link
            to="/categories"
            style={{ color: "white", textDecoration: "none" }}
          >
            📂 Categories
          </Link>
        </li>

        <li style={{ marginBottom: "20px" }}>
          <Link
            to="/add-food"
            style={{ color: "white", textDecoration: "none" }}
          >
            🍔 Add Food
          </Link>
        </li>

        <li style={{ marginBottom: "20px" }}>
          <Link
            to="/orders"
            style={{ color: "white", textDecoration: "none" }}
          >
            📦 Orders
          </Link>
        </li>

        <li>
          <Link
            to="/"
            style={{ color: "white", textDecoration: "none" }}
          >
            🏠 Website
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
