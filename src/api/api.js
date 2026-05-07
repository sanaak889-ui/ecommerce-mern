import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-mern-production-cf37.up.railway.app/api",
});

export default API;