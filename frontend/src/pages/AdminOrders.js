import React, { useEffect, useState } from "react";
import api from "../services/api";

function AdminOrders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {

    try {

      const response = await api.get("/orders");

      setOrders(response.data);

    } catch (error) {

      console.log(error);

    }

  };

  const updateStatus = async (order, status) => {

    try {

      await api.put(`/orders/${order.id}`, {
        ...order,
        status: status
      });

      loadOrders();

    } catch (error) {

      console.log(error);

      alert("Unable to update order.");

    }

  };

  return (

    <div className="container mt-4">

      <h2 className="mb-4">
        Restaurant Orders
      </h2>

      <table className="table table-bordered">

        <thead className="table-dark">

          <tr>

            <th>ID</th>

            <th>Items</th>

            <th>Total</th>

            <th>Status</th>

            <th>Update</th>

          </tr>

        </thead>

        <tbody>

          {

            orders.map(order => (

              <tr key={order.id}>

                <td>{order.id}</td>

                <td>{order.items}</td>

                <td>₹ {order.totalAmount.toFixed(2)}</td>

                <td>

                  <span className="badge bg-primary">

                    {order.status}

                  </span>

                </td>

                <td>

                  <select

                    className="form-select"

                    value={order.status}

                    onChange={(e) =>
                      updateStatus(order, e.target.value)
                    }

                  >

                    <option>PLACED</option>

                    <option>PREPARING</option>

                    <option>OUT FOR DELIVERY</option>

                    <option>DELIVERED</option>

                  </select>

                </td>

              </tr>

            ))

          }

        </tbody>

      </table>

    </div>

  );

}

export default AdminOrders;
