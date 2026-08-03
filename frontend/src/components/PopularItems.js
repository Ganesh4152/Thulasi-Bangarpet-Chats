import React, { useEffect, useState } from "react";
import api from "../services/api";
import { useCart } from "../context/CartContext";

function PopularItems({ searchTerm = "" }) {

  const { addToCart } = useCart();

  const [items, setItems] = useState([]);

  useEffect(() => {

    loadItems();

  }, []);

  const loadItems = async () => {

    try {

      const response = await api.get("/menu");

      setItems(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    <div className="popular-items">

      <h2>🔥 Popular Items</h2>

      {

        filteredItems.length === 0 ?

        <h3 style={{ textAlign: "center", color: "red" }}>
          No food item found.
        </h3>

        :

        <div className="item-grid">

          {

            filteredItems.map(item => (

              <div className="food-card" key={item.id}>

                <img
                  src={`http://13.207.126.116:8081${item.image}`}
                  alt={item.name}
                />

                <h3>{item.name}</h3>

                <p>₹ {item.price}</p>

                <button
                  onClick={() => addToCart(item)}
                >
                  Add To Cart
                </button>

              </div>

            ))

          }

        </div>

      }

    </div>

  );

}

export default PopularItems;
