import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://3.110.121.36:8081/api/users/login",
        {
          email,
          password,
        }
      );

      alert("Login Successful!");

      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );

window.location.href = "/";
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || "Invalid Email or Password");
      } else {
        alert("Cannot connect to Spring Boot Server.");
      }
    }
  };

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "50px auto",
        padding: "30px",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,.2)"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#d32f2f"
        }}
      >
        Customer Login
      </h2>

      <form onSubmit={handleLogin}>

        <label>Email Address</label>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            margin: "10px 0 20px"
          }}
        />

        <label>Password</label>

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            margin: "10px 0 20px"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "#d32f2f",
            color: "white",
            border: "none",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          Login
        </button>

      </form>

      <p style={{ textAlign: "center", marginTop: "20px" }}>
        New Customer?{" "}
        <Link to="/register">
          Register Here
        </Link>
      </p>
    </div>
  );
}

export default Login;
