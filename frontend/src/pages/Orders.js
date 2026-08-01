import React, { useEffect, useState } from "react";
import api from "../services/api";

function Orders() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {

    try {

      const response = await api.get("/orders");

      setOrders(response.data);

    } catch (error) {

      console.log(error);

      alert("Unable to load orders.");

    }

  };

  const updateStatus = async (id, status) => {

    try {

      const order = orders.find(o => o.id === id);

      const updatedOrder = {

        ...order,

        status: status

      };

      await api.put(`/orders/${id}`, updatedOrder);

      alert("Order Status Updated Successfully");

      fetchOrders();

    } catch (error) {

      console.log(error);

      alert("Unable to update order.");

    }

  };

  const deleteOrder = async (id) => {

    if (!window.confirm("Delete this order?")) {
      return;
    }

    try {

      await api.delete(`/orders/${id}`);

      alert("Order Deleted Successfully");

      fetchOrders();

    } catch (error) {

      console.log(error);

      alert("Unable to delete order.");

    }

  };

  return (

    <div className="container mt-4">

      <h2 className="mb-4">My Orders</h2>

      {

        orders.length === 0 ?

        <h4>No Orders Found</h4>

        :

        <table className="table table-bordered table-striped">

          <thead className="table-dark">

            <tr>

              <th>Order ID</th>

              <th>Items</th>

              <th>Status</th>

              <th>Total Amount</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {

              orders.map(order => (

                <tr key={order.id}>

                  <td>{order.id}</td>

                  <td>
                    {order.items ? order.items : "-"}
                  </td>

                  <td>

                    <select
                      className="form-select"
                      value={order.status}
                      onChange={(e) => {

                        const value = e.target.value;

                        setOrders(

                          orders.map(o =>

                            o.id === order.id

                              ? { ...o, status: value }

                              : o

                          )

                        );

                      }}
                    >

                      <option value="PLACED">
                        PLACED
                      </option>

                      <option value="PREPARING">
                        PREPARING
                      </option>

                      <option value="OUT FOR DELIVERY">
                        OUT FOR DELIVERY
                      </option>

                      <option value="DELIVERED">
                        DELIVERED
                      </option>

                    </select>

                  </td>

                  <td>
                    ₹ {order.totalAmount.toFixed(2)}
                  </td>

                  <td>

                    <button
                      className="btn btn-primary btn-sm me-2"
                      onClick={() => updateStatus(order.id, order.status)}
                    >
                      Update
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteOrder(order.id)}
                    >
                      Delete
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
