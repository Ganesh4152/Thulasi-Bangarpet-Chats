import React from "react";
import { useCart } from "../context/CartContext";

import paniPuri from "../assets/images/pani-puri.jpg";
import masalaPuri from "../assets/images/masala-puri.jpg";
import bhelPuri from "../assets/images/bhel-puri.jpg";
import sevPuri from "../assets/images/sev-puri.jpg";
import dahiPuri from "../assets/images/dahi-puri.jpg";
import nippat from "../assets/images/nippat.jpg";
import floatingPuri from "../assets/images/floating-puri.jpg";

const items = [
  {
    id: 1,
    name: "Pani Puri",
    price: 50,
    image: paniPuri,
  },
  {
    id: 2,
    name: "Masala Puri",
    price: 60,
    image: masalaPuri,
  },
  {
    id: 3,
    name: "Bhel Puri",
    price: 65,
    image: bhelPuri,
  },
  {
    id: 4,
    name: "Sev Puri",
    price: 65,
    image: sevPuri,
  },
  {
    id: 5,
    name: "Dahi Puri",
    price: 70,
    image: dahiPuri,
  },
  {
    id: 6,
    name: "Nippat Masala",
    price: 80,
    image: nippat,
  },
  {
    id: 7,
    name: "Floating Puri",
    price: 90,
    image: floatingPuri,
  },
];

function PopularItems({ searchTerm = "" }) {
  const { addToCart } = useCart();

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="popular-items">
      <h2>🔥 Popular Items</h2>

      {filteredItems.length === 0 ? (
        <h3 style={{ textAlign: "center", color: "red" }}>
          No food item found.
        </h3>
      ) : (
        <div className="item-grid">
          {filteredItems.map((item) => (
            <div className="food-card" key={item.id}>
              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <p>₹ {item.price}</p>

              <button onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PopularItems;
