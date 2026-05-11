import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    const user = JSON.parse(localStorage.getItem("adminUser"));

    if (token && user?.isAdmin) {
      navigate("/admin", { replace: true });
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return toast.error("Please fill all fields");
    }

    setLoading(true);

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        { email, password }
      );

      // ❗ CHECK ADMIN FIRST (but safely)
      if (!data?.isAdmin) {
        toast.error("Not an admin user");
        setLoading(false);
        return;
      }

      localStorage.setItem("adminToken", data.token);
      localStorage.setItem("adminUser", JSON.stringify(data));

      toast.success("Login successful!");

      navigate("/admin", { replace: true });

    } catch (err) {
      console.log("LOGIN ERROR:", err.response?.data);
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">

        <h2 className="mb-6 text-center text-2xl font-bold text-red-500">
          Admin Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            className="w-full rounded border p-2"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="w-full rounded border p-2"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            disabled={loading}
            className="w-full rounded bg-red-500 py-2 text-white disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default AdminLogin;