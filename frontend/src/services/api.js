import axios from "axios";

const api = axios.create({
  baseURL: "http://3.110.121.36:8081/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
