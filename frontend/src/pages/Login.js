import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    alert("Login feature will be connected with Spring Boot soon.");
  };

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "50px auto",
        padding: "30px",
        background: "#ffffff",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#d32f2f",
          marginBottom: "25px"
        }}
      >
        Customer Login
      </h2>

      <form onSubmit={handleLogin}>
        <label>Email Address</label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box"
          }}
        />

        <label>Password</label>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "20px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
            boxSizing: "border-box"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            background: "#d32f2f",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          Login
        </button>
      </form>

      <p
        style={{
          textAlign: "center",
          marginTop: "25px",
          fontSize: "16px"
        }}
      >
        New Customer?{" "}
        <Link
          to="/register"
          style={{
            color: "#d32f2f",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          Register Here
        </Link>
      </p>
    </div>
  );
}

export default Login;
