import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaBoxOpen, FaShoppingCart, FaTruck, FaDollarSign } from "react-icons/fa";
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

const AdminDashboardStats = () => {
  const [stats, setStats] = useState({
    usersCount: 0,
    usersGrowth: 0,
    productsCount: 0,
    productsGrowth: 0,
    ordersCount: 0,
    ordersGrowth: 0,
    ordersDelivered: 0,
    ordersDeliveredGrowth: 0,
    ordersPaid: 0,
    ordersPaidGrowth: 0,
  });
  const [latestOrders, setLatestOrders] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        navigate("/admin/login");
        return;
      }

      try {
        // Fetch stats with growth
        const res = await axios.get("http://localhost:5000/api/admin/stats", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(res.data);

        // Fetch latest 5 orders
        const ordersRes = await axios.get("http://localhost:5000/api/admin/orders", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const lastFive = ordersRes.data
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 5);
        setLatestOrders(lastFive);

        setLoading(false);
      } catch (err) {
        console.error("Admin stats fetch error:", err.response);

        if (err.response?.status === 401) {
          localStorage.removeItem("adminToken");
          navigate("/admin/login");
        } else {
          setError(err.response?.data?.message || "Error fetching admin stats");
        }

        setLoading(false);
      }
    };

    fetchStats();
  }, [navigate]);

  if (loading)
    return (
      <p className="mt-10 text-center text-lg font-medium text-gray-500">
        Loading stats...
      </p>
    );
  if (error)
    return (
      <p className="mt-10 text-center text-lg font-medium text-red-500">{error}</p>
    );

  const statsData = [
    {
      label: "Total Users",
      value: stats.usersCount,
      growth: stats.usersGrowth,
      icon: <FaUsers size={30} />,
      color: "text-blue-500",
      link: "/admin/users",
    },
    {
      label: "Total Products",
      value: stats.productsCount,
      growth: stats.productsGrowth,
      icon: <FaBoxOpen size={30} />,
      color: "text-green-500",
      link: "/admin/products",
    },
    {
      label: "Total Orders",
      value: stats.ordersCount,
      growth: stats.ordersGrowth,
      icon: <FaShoppingCart size={30} />,
      color: "text-yellow-500",
      link: "/admin/orders",
    },
    {
      label: "Orders Delivered",
      value: stats.ordersDelivered,
      growth: stats.ordersDeliveredGrowth,
      icon: <FaTruck size={30} />,
      color: "text-purple-700",
      link: "/admin/orders",
    },
    {
      label: "Orders Paid",
      value: stats.ordersPaid,
      growth: stats.ordersPaidGrowth,
      icon: <FaDollarSign size={30} />,
      color: "text-red-500",
      link: "/admin/orders",
    },
  ];

  const chartData = [
    { name: "Users", value: stats.usersCount },
    { name: "Products", value: stats.productsCount },
    { name: "Orders", value: stats.ordersCount },
    { name: "Delivered", value: stats.ordersDelivered },
    { name: "Paid", value: stats.ordersPaid },
  ];

  const pieData = [
    { name: "Paid", value: stats.ordersPaid },
    { name: "Pending", value: stats.ordersCount - stats.ordersPaid },
  ];

  const filteredOrders = latestOrders.filter((order) => {
    if (filter === "All") return true;
    if (filter === "Paid") return order.isPaid;
    if (filter === "Pending") return !order.isPaid;
    if (filter === "Delivered") return order.isDelivered;
    return true;
  });

  return (
    <div className="space-y-6">
      <h2 className="text-center text-3xl font-bold text-[#ff5252]">
        Admin Dashboard Stats
      </h2>

      {/* Stats Cards */}
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className={`flex cursor-pointer flex-col items-center rounded-lg bg-white p-6 shadow transition transform hover:scale-105 hover:shadow-xl duration-300`}
            onClick={() => navigate(stat.link)}
          >
            <div className={`mb-3 ${stat.color}`}>{stat.icon}</div>
            <p className="font-medium text-gray-500">{stat.label}</p>
            <p className={`mt-2 text-2xl font-bold ${stat.color}`}>
              <CountUp end={stat.value} duration={1.5} separator="," />
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Growth:{" "}
              <span className={stat.growth >= 0 ? "text-green-500" : "text-red-500"}>
                {stat.growth >= 0 ? "+" : ""}
                {stat.growth}%
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="mt-10 rounded-lg bg-white p-6 shadow">
        <h3 className="mb-4 text-center text-xl font-bold text-[#ff5252]">
          Summary Chart
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#ff5252" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="mt-10 rounded-lg bg-white p-6 shadow">
        <h3 className="mb-4 text-center text-xl font-bold text-[#ff5252]">
          Orders Paid vs Pending
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#ff5252"
              label
            >
              <Cell key="paid" fill="#22c55e" />
              <Cell key="pending" fill="#f87171" />
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Filter Buttons */}
      <div className="mb-4 flex gap-2">
        {["All", "Paid", "Pending", "Delivered"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-3 py-1 rounded-full font-semibold text-sm ${
              filter === status
                ? "bg-[#ff5252] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Last 5 Orders Table */}
      <div className="mt-10 overflow-x-auto rounded-lg bg-white p-6 shadow">
        <h3 className="mb-4 text-center text-xl font-bold text-[#ff5252]">
          Latest 5 Orders
        </h3>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Order ID</th>
              <th className="border px-4 py-2">User</th>
              <th className="border px-4 py-2">Total Price</th>
              <th className="border px-4 py-2">Paid</th>
              <th className="border px-4 py-2">Delivered</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order._id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{order._id.slice(-6).toUpperCase()}</td>
                <td className="border px-4 py-2">{order.user?.name || "N/A"}</td>
                <td className="border px-4 py-2">${order.totalPrice?.toFixed(2)}</td>
                <td className="border px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-sm font-semibold ${
                      order.isPaid ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {order.isPaid ? "Yes" : "No"}
                  </span>
                </td>
                <td className="border px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-sm font-semibold ${
                      order.isDelivered ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {order.isDelivered ? "Yes" : "No"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboardStats;
