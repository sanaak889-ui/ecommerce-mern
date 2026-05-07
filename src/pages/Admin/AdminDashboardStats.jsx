import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaTruck,
  FaDollarSign,
} from "react-icons/fa";
import CountUp from "react-countup";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#22c55e", "#f87171"];

const AdminDashboardStats = () => {
  const [stats, setStats] = useState({});
  const [latestOrders, setLatestOrders] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        if (!token) {
          navigate("/admin/login");
          return;
        }

        const statsRes = await api.get("/admin/stats");
        const ordersRes = await api.get("/admin/orders");

        const orders = Array.isArray(ordersRes.data) ? ordersRes.data : [];

        setStats(statsRes.data || {});
        setLatestOrders(
          orders
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, 5)
        );
      } catch (err) {
        console.error(err);
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [navigate]);

  if (loading)
    return (
      <p className="mt-10 text-center text-gray-500">Loading dashboard...</p>
    );

  if (error)
    return (
      <p className="mt-10 text-center font-semibold text-red-500">{error}</p>
    );

  const safe = {
    users: stats.usersCount || 0,
    products: stats.productsCount || 0,
    orders: stats.ordersCount || 0,
    delivered: stats.ordersDelivered || 0,
    paid: stats.ordersPaid || 0,
  };

  const statsData = [
    { label: "Users", value: safe.users, icon: <FaUsers />, color: "text-blue-500", link: "/admin/users" },
    { label: "Products", value: safe.products, icon: <FaBoxOpen />, color: "text-green-500", link: "/admin/products" },
    { label: "Orders", value: safe.orders, icon: <FaShoppingCart />, color: "text-yellow-500", link: "/admin/orders" },
    { label: "Delivered", value: safe.delivered, icon: <FaTruck />, color: "text-purple-600", link: "/admin/orders" },
    { label: "Paid", value: safe.paid, icon: <FaDollarSign />, color: "text-red-500", link: "/admin/orders" },
  ];

  const chartData = [
    { name: "Users", value: safe.users },
    { name: "Products", value: safe.products },
    { name: "Orders", value: safe.orders },
    { name: "Delivered", value: safe.delivered },
    { name: "Paid", value: safe.paid },
  ];

  const pieData = [
    { name: "Paid", value: safe.paid },
    { name: "Pending", value: Math.max(safe.orders - safe.paid, 0) },
  ];

  const filteredOrders = latestOrders.filter((o) => {
    if (filter === "All") return true;
    if (filter === "Paid") return o.isPaid;
    if (filter === "Pending") return !o.isPaid;
    if (filter === "Delivered") return o.isDelivered;
    return true;
  });

  return (
    <div className="min-h-screen space-y-8 bg-gray-50 p-6">

      {/* TITLE */}
      <h1 className="text-center text-3xl font-bold text-[#ff5252]">
        Admin Dashboard
      </h1>

      {/* STATS CARDS */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {statsData.map((s, i) => (
          <div
            key={i}
            onClick={() => navigate(s.link)}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <div className={`${s.color} text-2xl`}>{s.icon}</div>
            <p className="mt-2 text-gray-500">{s.label}</p>
            <p className={`text-2xl font-bold ${s.color}`}>
              <CountUp end={s.value} />
            </p>
          </div>
        ))}
      </div>

      {/* BAR CHART */}
      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-bold text-gray-700">
          Overview Chart
        </h2>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={chartData}>
            <defs>
              <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff5252" stopOpacity={0.9} />
                <stop offset="95%" stopColor="#ffb3b3" stopOpacity={0.5} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="url(#colorBar)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* PIE CHART */}
      <div className="rounded-xl bg-white p-6 shadow">
        <h2 className="mb-4 text-lg font-bold text-gray-700">
          Payment Status
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={110}
              label
            >
              {pieData.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* FILTER */}
      <div className="flex flex-wrap gap-2">
        {["All", "Paid", "Pending", "Delivered"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1 rounded-full text-sm font-semibold ${
              filter === f
                ? "bg-[#ff5252] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto rounded-xl bg-white shadow">
  <table className="w-full min-w-[420px] text-xs md:min-w-[700px] md:text-sm">

    <thead className="bg-gray-100">
      <tr>
        <th className="p-2 md:p-3">Order ID</th>
        <th>User</th>
        <th>Total</th>
        <th>Paid</th>
        <th>Delivered</th>
      </tr>
    </thead>

    <tbody>
      {filteredOrders.length === 0 ? (
        <tr>
          <td colSpan="5" className="p-4 text-center text-gray-500">
            No orders found
          </td>
        </tr>
      ) : (
        filteredOrders.map((o) => (
          <tr key={o._id} className="border-t text-center">
            <td className="p-2">{o._id?.slice(-6)}</td>
            <td className="p-2">{o.user?.name || "N/A"}</td>
            <td className="p-2">${o.totalPrice}</td>
            <td className="p-2">{o.isPaid ? "Yes" : "No"}</td>
            <td className="p-2">{o.isDelivered ? "Yes" : "No"}</td>
          </tr>
        ))
      )}
    </tbody>

  </table>
</div>

    </div>
  );
};

export default AdminDashboardStats;