import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api/auth' });

// Register User
export const registerUser = async (userData) => {
  const res = await API.post('/register', userData);
  return res.data;
};

// Login User
export const loginUser = async (credentials) => {
  const res = await API.post('/login', credentials);
  return res.data;
};
