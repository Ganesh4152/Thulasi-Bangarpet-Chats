import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {

  const {

    cartItems,

    increaseQty,

    decreaseQty,

    removeItem

  } = useCart();

  const subtotal = cartItems.reduce(

    (sum, item) => sum + item.price * item.quantity,

    0

  );

  const gst = subtotal * 0.05;

  const delivery = subtotal > 0 ? 40 : 0;

  const total = subtotal + gst + delivery;

  return (

    <div className="container mt-4">

      <h2>Shopping Cart</h2>

      {

        cartItems.length === 0

        ?

        <h4>Your Cart is Empty</h4>

        :

        <>

          {

            cartItems.map(item => (

              <div

                className="card mb-3"

                key={item.id}

              >

                <div className="row g-0">

                  <div className="col-md-3">

                    <img

                      src={`http://13.207.126.116:8081${item.image}`}

                      alt={item.name}

                      className="img-fluid rounded-start"

                    />

                  </div>

                  <div className="col-md-9">

                    <div className="card-body">

                      <h5>{item.name}</h5>

                      <p>₹ {item.price}</p>

                      <button

                        className="btn btn-warning"

                        onClick={() => decreaseQty(item.id)}

                      >

                        -

                      </button>

                      <span className="mx-3">

                        {item.quantity}

                      </span>

                      <button

                        className="btn btn-warning"

                        onClick={() => increaseQty(item.id)}

                      >

                        +

                      </button>

                      <button

                        className="btn btn-danger float-end"

                        onClick={() => removeItem(item.id)}

                      >

                        Remove

                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))

          }

          <hr />

          <h4>Subtotal : ₹ {subtotal.toFixed(2)}</h4>

          <h4>GST (5%) : ₹ {gst.toFixed(2)}</h4>

          <h4>Delivery : ₹ {delivery.toFixed(2)}</h4>

          <h3>Total : ₹ {total.toFixed(2)}</h3>
<Link
  to="/checkout"
  className="btn btn-primary btn-lg mt-3"
>
  Proceed to Checkout
</Link>

        </>

      }

    </div>

  );

}

export default Cart;
