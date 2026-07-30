import axios from "axios";

const api = axios.create({
    baseURL: "http://52.66.240.77:8081/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
