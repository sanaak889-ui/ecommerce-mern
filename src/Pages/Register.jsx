import React, { useState } from 'react';
import { registerUser } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser(form);
      alert(data.message);
      navigate('/login'); // Redirect to login after successful register
    } catch (error) {
      alert(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4 rounded bg-white p-6 shadow-md">
        <h2 className="text-2xl font-bold">Register</h2>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required className="w-full rounded border p-2"/>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="w-full rounded border p-2"/>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="w-full rounded border p-2"/>
        <button type="submit" className="w-full rounded bg-red-500 p-2 text-white hover:bg-red-600">Register</button>
      </form>
    </div>
  );
};

export default Register;
