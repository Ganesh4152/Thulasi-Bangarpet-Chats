import React, { useEffect, useState } from "react";
import api from "../services/api";
import FoodCard from "../components/FoodCard";

function Menu() {

  const [keyword, setKeyword] = useState("");
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {

    const loadMenu = async () => {

      try {

        let response;

        if (keyword.trim() === "") {

          response = await api.get("/menu");

        } else {

          response = await api.get(
            `/menu/search?keyword=${keyword}`
          );

        }

        setMenuItems(response.data);

      } catch (err) {

        console.log(err);

      }

    };

    loadMenu();

  }, [keyword]);

  return (

    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Our Menu
      </h2>

      <input
        className="form-control mb-4"
        placeholder="Search food..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <div className="row">

        {menuItems.map(item => (

          <FoodCard
            key={item.id}
            item={item}
          />

        ))}

      </div>

    </div>

  );

}

export default Menu;
