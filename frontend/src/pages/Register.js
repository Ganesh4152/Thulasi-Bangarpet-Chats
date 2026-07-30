import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    alert("Registration feature will be connected with Spring Boot soon.");
  };

  return (
    <div
      style={{
        maxWidth: "500px",
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
        Customer Registration
      </h2>

      <form onSubmit={handleRegister}>

        <label>Full Name</label>

        <input
          type="text"
          placeholder="Enter Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "18px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxSizing: "border-box"
          }}
        />

        <label>Mobile Number</label>

        <input
          type="tel"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "18px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxSizing: "border-box"
          }}
        />

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
            marginTop: "8px",
            marginBottom: "18px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxSizing: "border-box"
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
            marginTop: "8px",
            marginBottom: "18px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxSizing: "border-box"
          }}
        />

        <label>Confirm Password</label>

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            marginBottom: "25px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxSizing: "border-box"
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            background: "#d32f2f",
            color: "#ffffff",
            border: "none",
            borderRadius: "5px",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          Register
        </button>

      </form>

      <p
        style={{
          textAlign: "center",
          marginTop: "25px"
        }}
      >
        Already have an account?{" "}
        <Link
          to="/login"
          style={{
            color: "#d32f2f",
            fontWeight: "bold",
            textDecoration: "none"
          }}
        >
          Login Here
        </Link>
      </p>
    </div>
  );
}

export default Register;
