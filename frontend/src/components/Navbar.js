import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {

  const location = useLocation();

  const [user, setUser] = useState(null);

  useEffect(() => {

    const loggedUser = JSON.parse(localStorage.getItem("user"));

    setUser(loggedUser);

  }, [location]);

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
          <Link to="/orders">Orders</Link>
        </li>

        <li>
          <Link to="/cart">Cart 🛒</Link>
        </li>

        {user && user.role === "ADMIN" && (

          <li>
            <Link to="/admin">👨‍🍳 Admin</Link>
          </li>

        )}

        {user ? (

          <>

            <li>

              👋 {user.name}

            </li>

            <li>

              <button
                onClick={logout}
                style={{
                  background: "transparent",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "18px"
                }}
              >

                Logout

              </button>

            </li>

          </>

        ) : (

          <>

            <li>
              <Link to="/login">Login</Link>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>

          </>

        )}

      </ul>

    </nav>

  );

}

export default Navbar;
