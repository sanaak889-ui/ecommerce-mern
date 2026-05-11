import axios from "axios";

const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/auth`,
});

// REGISTER
export const registerUser = async (userData) => {
  const res = await API.post("/register", userData);
  return res.data;
};

// LOGIN
export const loginUser = async (userData) => {
  const res = await API.post("/login", userData);
  return res.data;
};