import React, { useEffect, useState, useCallback } from "react";
import OrderService from "../services/OrderService";

function Orders() {

  const [orders, setOrders] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const loadOrders = useCallback(async () => {

    if (!user) {
      return;
    }

    try {

      const data = await OrderService.getOrders(user.id);

      setOrders(data);

    } catch (error) {

      console.log(error);

      alert("Unable to load your orders.");

    }

  }, [user]);

  useEffect(() => {

    loadOrders();

  }, [loadOrders]);

  const cancelOrder = async (orderId) => {

    const confirmDelete = window.confirm(
      "Do you want to cancel this order?"
    );

    if (!confirmDelete) {

      return;

    }

    try {

      await OrderService.deleteOrder(orderId);

      alert("Order cancelled successfully.");

      loadOrders();

    }

    catch (error) {

      console.log(error);

      alert("Unable to cancel order.");

    }

  };

  return (

    <div className="container mt-4">

      <h2 className="mb-4">

        My Orders

      </h2>

      {

        orders.length === 0 ?

          <h4>No Orders Found</h4>

          :

          <table className="table table-bordered table-striped">

            <thead className="table-dark">

              <tr>

                <th>Order ID</th>

                <th>Items</th>

                <th>Payment</th>

                <th>Status</th>

                <th>Total Amount</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>

              {

                orders.map(order => (

                  <tr key={order.id}>

                    <td>

                      {order.id}

                    </td>

                    <td>

                      {order.items}

                    </td>

                    <td>

                      <span
                        className={
                          order.paymentMethod === "ONLINE"
                            ? "badge bg-success"
                            : "badge bg-secondary"
                        }
                      >

                        {order.paymentMethod || "COD"}

                      </span>

                    </td>

                    <td>

                      <span className="badge bg-primary">

                        {order.status}

                      </span>

                    </td>

                    <td>

                      ₹ {order.totalAmount.toFixed(2)}

                    </td>

                    <td>

                      <button

                        className="btn btn-danger btn-sm"

                        onClick={() => cancelOrder(order.id)}

                      >

                        Cancel Order

                      </button>

                    </td>

                  </tr>

                ))

              }

            </tbody>

          </table>

      }

    </div>

  );

}

export default Orders;
