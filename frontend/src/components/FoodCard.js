import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function FoodCard({ item }) {

  const { addToCart } = useCart();

  return (

    <div className="col-md-4 mb-4">

      <div className="card shadow h-100">

        <img

          src={`http://13.207.126.116:8081${item.image}`}

          alt={item.name}

          className="card-img-top"

          style={{
            height: "220px",
            objectFit: "cover"
          }}

        />

        <div className="card-body">

          <h5>{item.name}</h5>

          <p>{item.description}</p>

          <h4>₹ {item.price}</h4>

          <p>⭐ {item.rating}</p>

          <Link

            to={`/food/${item.id}`}

            className="btn btn-primary w-100 mb-2"

          >

            View Details

          </Link>

          <button

            className="btn btn-success w-100"

            onClick={() => addToCart(item)}

          >

            Add To Cart

          </button>

        </div>

      </div>

    </div>

  );

}

export default FoodCard;
