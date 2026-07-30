import React from "react";
import heroBanner from "../assets/images/hero-banner.jpg";

function Hero() {
  return (
    <section className="hero">
      <img
        src={heroBanner}
        alt="Thulasi Bangarpet Chats"
        className="hero-image"
      />

      <div className="hero-content">
        <h1>Thulasi Bangarpet Chats</h1>
        <p>Fresh Chats Delivered Fast</p>
        <button className="order-btn">Order Now</button>
      </div>
    </section>
  );
}

export default Hero;
