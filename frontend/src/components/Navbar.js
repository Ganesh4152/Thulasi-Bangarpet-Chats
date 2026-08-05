import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const location = useLocation();

  const [user, setUser] = useState(null);

useEffect(() => {


  const loadUser = () => {

    const loggedUser =
      JSON.parse(localStorage.getItem("user"));

    setUser(loggedUser);

  };


  loadUser();


  window.addEventListener(
    "login",
    loadUser
  );


  window.addEventListener(
    "storage",
    loadUser
  );


  return ()=>{

    window.removeEventListener(
      "login",
      loadUser
    );


    window.removeEventListener(
      "storage",
      loadUser
    );

  };


},[location]);


  const logout = () => {

    localStorage.removeItem("user");

    setUser(null);

    window.location.href = "/login";

  };

  return (

    <nav className="navbar">

      <div className="logo">

        <h2>🍽️ Thulasi Bangarpet Chats</h2>

      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/menu">Menu</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}

        {user && user.role === "CUSTOMER" && (
          <>
            <li>
              <Link to="/cart">Cart 🛒</Link>
            </li>

            <li>
              <Link to="/orders">Orders</Link>
            </li>
          </>
        )}

        {user && user.role === "ADMIN" && (
          <>
            <li>
              <Link to="/admin">
                Admin Dashboard
              </Link>
            </li>

            <li>
              <Link to="/admin/orders">
                Admin Orders
              </Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li>

              👋 {user.name}

            </li>

            <li>

              <button

                onClick={logout}

                style={{
                  background: "transparent",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}

              >

                Logout

              </button>

            </li>
          </>
        )}

      </ul>

    </nav>

  );

}

export default Navbar;
