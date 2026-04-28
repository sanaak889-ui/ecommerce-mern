import React, { useState } from 'react';
import { loginUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(form);
      localStorage.setItem('token', data.token); // save JWT token
      localStorage.setItem('user', JSON.stringify(data.user));
      alert(data.message);
      // Redirect based on user type
      if (data.user.isAdmin) navigate('/admin'); 
      else navigate('/'); // Customer goes to homepage
    } catch (error) {
      alert(error.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4 rounded bg-white p-6 shadow-md">
        <h2 className="text-2xl font-bold">Login</h2>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full rounded border p-2"/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="w-full rounded border p-2"/>
        <button type="submit" className="w-full rounded bg-red-500 p-2 text-white hover:bg-red-600">Login</button>
      </form>
    </div>
  );
};

export default Login;
