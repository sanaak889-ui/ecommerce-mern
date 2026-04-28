import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

const AdminCreate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("adminToken");
    if (!token) {
      toast.error("You must be logged in as admin to create a new admin");
      setLoading(false);
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/admin/create-admin",
        { name, email, password },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("New admin created successfully!");
      setName("");
      setEmail("");
      setPassword("");
      setLoading(false);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Error creating admin");
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded bg-white p-8 shadow">
        <h2 className="mb-6 text-center text-2xl font-bold text-[#ff5252]">
          Create New Admin
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#ff5252]"
              required
            />
          </div>
          <div>
            <label className="mb-1 block font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#ff5252]"
              required
            />
          </div>
          <div>
            <label className="mb-1 block font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#ff5252]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-[#ff5252] py-2 text-white transition duration-200 hover:bg-red-600"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Admin"}
          </button>
        </form>

        {/* Go to Admin Login Button */}
        <div className="mt-4 text-center">
          <button
            onClick={() => (window.location.href = "/admin/login")}
            className="text-[#ff5252] font-semibold hover:underline"
          >
            Back to Admin Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminCreate;
