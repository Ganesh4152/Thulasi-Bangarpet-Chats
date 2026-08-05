import React from "react";
import { useCart } from "../context/CartContext";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

function Checkout() {

  const { cartItems, clearCart } = useCart();

  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const gst = subtotal * 0.05;

  const delivery = subtotal > 0 ? 40 : 0;

  const total = subtotal + gst + delivery;

  const placeOrder = async () => {

    try {

      const itemNames = cartItems
        .map(item => `${item.name} x ${item.quantity}`)
        .join(", ");

      const order = {

        items: itemNames,

        totalAmount: total,

        status: "PLACED"

      };

      const response = await api.post(
        "/orders",
        order
      );

      alert(
        "Order Placed Successfully!\nOrder ID : " +
        response.data.id
      );

      clearCart();

      navigate("/orders");

    } catch (error) {

      console.log(error);

      alert("Unable to place order.");

    }

  };

  return (

    <div className="container mt-4">

      <h2>Checkout</h2>

      <table className="table table-bordered">

        <thead>

          <tr>

            <th>Food</th>

            <th>Qty</th>

            <th>Price</th>

          </tr>

        </thead>

        <tbody>

          {

            cartItems.map(item => (

              <tr key={item.id}>

                <td>{item.name}</td>

                <td>{item.quantity}</td>

                <td>₹ {(item.price * item.quantity).toFixed(2)}</td>

              </tr>

            ))

          }

        </tbody>

      </table>

      <hr />

      <h4>Subtotal : ₹ {subtotal.toFixed(2)}</h4>

      <h4>GST (5%) : ₹ {gst.toFixed(2)}</h4>

      <h4>Delivery : ₹ {delivery.toFixed(2)}</h4>

      <h3>Total : ₹ {total.toFixed(2)}</h3>

      <button
        className="btn btn-success btn-lg mt-3"
        onClick={placeOrder}
      >
        Place Order
      </button>

    </div>

  );

}

export default Checkout;
