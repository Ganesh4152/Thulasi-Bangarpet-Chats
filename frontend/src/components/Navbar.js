import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  useEffect(() => {

    const handleStorage = () => {
      setUser(JSON.parse(localStorage.getItem("user")));
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };

  }, []);

  const logout = () => {

    localStorage.removeItem("user");

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

        {/* Admin Menu */}
        <li>
          <Link to="/admin">👨‍🍳 Admin</Link>
        </li>

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
