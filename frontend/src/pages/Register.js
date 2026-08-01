import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await axios.post("http://13.207.126.116:8081/api/users/register", {
        name: name,
        phone: mobile,
        email: email,
        password: password,
      });

      alert("Registration Successful!");

      navigate("/login");

    } catch (error) {

      if (error.response) {
        alert(error.response.data.message || "Registration Failed");
      } else {
        alert("Cannot connect to Spring Boot Server.");
      }

    }
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Full Name"
          required
          style={{
            width: "100%",
            padding: "12px",
            margin: "10px 0 20px"
          }}
        />

        <label>Mobile Number</label>

        <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Enter Mobile Number"
          required
          style={{
            width: "100%",
            padding: "12px",
            margin: "10px 0 20px"
          }}
        />

        <label>Email</label>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          required
          style={{
            width: "100%",
            padding: "12px",
            margin: "10px 0 20px"
          }}
        />

        <label>Confirm Password</label>

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
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
            padding: "14px",
            background: "#d32f2f",
            color: "white",
            border: "none",
            fontSize: "18px",
            cursor: "pointer"
          }}
        >
          Register
        </button>

      </form>

      <p style={{ textAlign: "center", marginTop: "20px" }}>
        Already have an account?{" "}
        <Link to="/login">Login Here</Link>
      </p>
    </div>
  );
}

export default Register;
