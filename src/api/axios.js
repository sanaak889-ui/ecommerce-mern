import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // make sure this matches your backend port
});

api.interceptors.request.use((config) => {
  const userInfo = localStorage.getItem("userInfo");
  if (userInfo) {
    const token = JSON.parse(userInfo).token;
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;