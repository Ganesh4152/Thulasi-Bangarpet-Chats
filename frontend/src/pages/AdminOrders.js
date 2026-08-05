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

      alert("Unable to load orders.");

    }

  };

  const updateStatus = async (order, status) => {

    try {

      await api.put(

        `/orders/${order.id}`,

        {

          ...order,

          status: status

        }

      );

      alert("Order Status Updated Successfully");

      loadOrders();

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

      loadOrders();

    } catch (error) {

      console.log(error);

      alert("Unable to delete order.");

    }

  };

  return (

    <div className="container mt-4">

      <h2 className="mb-4">

        Restaurant Orders

      </h2>

      {

        orders.length === 0 ?

          <h4>No Orders Found</h4>

          :

          <table className="table table-bordered table-striped">

            <thead className="table-dark">

              <tr>

                <th>Order ID</th>

                <th>Customer</th>

                <th>Email</th>

                <th>Items</th>

                <th>Total</th>

                <th>Status</th>

                <th>Update</th>

                <th>Delete</th>

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

                      {order.user?.name || "-"}

                    </td>

                    <td>

                      {order.user?.email || "-"}

                    </td>

                    <td>

                      {order.items}

                    </td>

                    <td>

                      ₹ {order.totalAmount.toFixed(2)}

                    </td>

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

                          updateStatus(

                            order,

                            e.target.value

                          )

                        }

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

                      <button

                        className="btn btn-danger btn-sm"

                        onClick={() =>

                          deleteOrder(order.id)

                        }

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

export default AdminOrders;
