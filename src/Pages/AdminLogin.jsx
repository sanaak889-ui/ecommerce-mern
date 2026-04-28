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
    // If admin already logged in, redirect
    const token = localStorage.getItem("adminToken");
    if (token) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      });

      // Save token in localStorage
      localStorage.setItem("adminToken", data.token);
      toast.success("Login successful!");
      setLoading(false);

      // Redirect to dashboard
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Login failed");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded bg-white p-8 shadow">
        <h2 className="mb-6 text-center text-2xl font-bold text-[#ff5252]">Admin Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="mb-1 block font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-[#ff5252] py-2 text-white hover:bg-red-600"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        <div className="mt-3 text-center">
  <p className="text-sm text-gray-500">
    Don't have an admin account?{" "}
    <span
      onClick={() => window.location.href = "/admin/create-admin"}
      className="text-[#ff5252] hover:underline cursor-pointer"
    >
      Create one
    </span>
  </p>
</div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
