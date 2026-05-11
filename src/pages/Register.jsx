import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("REGISTER BUTTON CLICKED");

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,
        form
      );

      console.log("REGISTER SUCCESS:", res.data);

      alert("Registration successful");

    } catch (error) {
      console.log("REGISTER ERROR:", error);

      alert(
        error.response?.data?.message ||
        "Registration failed"
      );
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 rounded bg-white p-6 shadow"
      >
        <h2 className="text-2xl font-bold">
          Register
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full border p-2"
        />

        <button
          type="submit"
          className="w-full bg-red-500 p-2 text-white"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;