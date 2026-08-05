import axios from "axios";

const API = "http://13.207.126.116:8081/api/orders";


const OrderService = {


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


    getOrders: async () => {


        const token = localStorage.getItem("token");


        const response = await axios.get(

            API,

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
