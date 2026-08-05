import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";
import OrderService from "../services/OrderService";

function Checkout() {

  const navigate = useNavigate();

  const { cartItems, clearCart } = useCart();

  const user = JSON.parse(localStorage.getItem("user"));

  const [address, setAddress] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("COD");

  const [loading, setLoading] = useState(false);

  const getTotal = () => {

    return cartItems.reduce(

      (total, item) => total + (item.price * item.quantity),

      0

    );

  };

  const placeOrder = async () => {

    if (!cartItems || cartItems.length === 0) {

      alert("Your cart is empty.");

      return;

    }

    if (!address.trim()) {

      alert("Please enter delivery address.");

      return;

    }

    if (!user) {

      alert("Please login first.");

      navigate("/login");

      return;

    }

    try {

      setLoading(true);

      /*
       * Build readable item names
       */

      const itemNames = cartItems
        .map(item => `${item.name} x ${item.quantity}`)
        .join(", ");

      const order = {

        user: {
          id: user.id
        },

        deliveryAddress: address,

        paymentMethod: paymentMethod,

        items: itemNames,

        status: "PLACED",

        totalAmount: getTotal(),

        orderItems: cartItems.map(item => ({

          menuItem: {

            id: item.id

          },

          quantity: item.quantity,

          price: item.price

        }))

      };

      console.log(order);

      await OrderService.placeOrder(order);

      alert("Order placed successfully!");

      clearCart();

      navigate("/orders");

    }

    catch (error) {

      console.log(error);

      alert("Unable to place order.");

    }

    finally {

      setLoading(false);

    }

  };

  return (

    <div className="container mt-4">

      <div className="row justify-content-center">

        <div className="col-md-8">

          <div className="card shadow">

            <div className="card-body">

              <h2>Checkout</h2>

              <hr />

              <h4>Customer Details</h4>

              <p>

                <b>Name :</b> {user?.name}

              </p>

              <p>

                <b>Email :</b> {user?.email}

              </p>

              <hr />

              <h4>Delivery Address</h4>

              <textarea

                className="form-control mb-3"

                rows="4"

                placeholder="Enter delivery address"

                value={address}

                onChange={(e) => setAddress(e.target.value)}

              />

              <hr />

              <h4>Payment Method</h4>

              <div className="form-check">

                <input

                  className="form-check-input"

                  type="radio"

                  id="cod"

                  name="paymentMethod"

                  value="COD"

                  checked={paymentMethod === "COD"}

                  onChange={(e) => setPaymentMethod(e.target.value)}

                />

                <label className="form-check-label" htmlFor="cod">

                  Cash on Delivery

                </label>

              </div>

              <div className="form-check mb-4">

                <input

                  className="form-check-input"

                  type="radio"

                  id="online"

                  name="paymentMethod"

                  value="ONLINE"

                  checked={paymentMethod === "ONLINE"}

                  onChange={(e) => setPaymentMethod(e.target.value)}

                />

                <label className="form-check-label" htmlFor="online">

                  Online Payment

                </label>

              </div>

              <hr />

              <h4>Order Summary</h4>

              <table className="table">

                <thead>

                  <tr>

                    <th>Food</th>

                    <th>Qty</th>

                    <th>Price</th>

                    <th>Total</th>

                  </tr>

                </thead>

                <tbody>

                  {

                    cartItems.map(item => (

                      <tr key={item.id}>

                        <td>{item.name}</td>

                        <td>{item.quantity}</td>

                        <td>₹ {item.price}</td>

                        <td>₹ {item.price * item.quantity}</td>

                      </tr>

                    ))

                  }

                </tbody>

              </table>

              <h3 className="text-end">

                Total : ₹ {getTotal()}

              </h3>

              <button

                className="btn btn-success w-100"

                disabled={loading}

                onClick={placeOrder}

              >

                {

                  loading

                    ? "Placing Order..."

                    : "Place Order"

                }

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Checkout;
