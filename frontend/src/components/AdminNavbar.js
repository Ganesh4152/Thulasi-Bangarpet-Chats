import React from "react";

function AdminNavbar() {
  return (
    <div
      style={{
        height: "70px",
        background: "#d32f2f",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 25px",
        fontSize: "22px",
        fontWeight: "bold",
      }}
    >
      <div>🍽️ Thulasi Admin Dashboard</div>

      <div>Welcome, Admin</div>
    </div>
  );
}

export default AdminNavbar;
