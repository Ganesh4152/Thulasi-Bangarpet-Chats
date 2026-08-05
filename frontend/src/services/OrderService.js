import axios from "axios";

const API = "http://13.207.126.116:8081/api/orders";

const OrderService = {

    /*
     * Place Order
     */

    placeOrder: async (order) => {

        const token = localStorage.getItem("token");

        const response = await axios.post(

            API,

            order,

            {
                headers: {

                    Authorization: `Bearer ${token}`,

                    "Content-Type": "application/json"

                }

            }

        );

        return response.data;

    },

    /*
     * Customer Orders
     */

    getOrders: async (userId) => {

        const token = localStorage.getItem("token");

        const response = await axios.get(

            `${API}/user/${userId}`,

            {

                headers: {

                    Authorization: `Bearer ${token}`

                }

            }

        );

        return response.data;

    },

    /*
     * Cancel Order
     */

    deleteOrder: async (orderId) => {

        const token = localStorage.getItem("token");

        const response = await axios.delete(

            `${API}/${orderId}`,

            {

                headers: {

                    Authorization: `Bearer ${token}`

                }

            }

        );

        return response.data;

    }

};

export default OrderService;
