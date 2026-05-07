import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/auth",
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