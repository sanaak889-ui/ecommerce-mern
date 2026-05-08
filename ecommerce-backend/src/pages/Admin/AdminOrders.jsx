import React, { useEffect, useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const fetchOrders = async () => {
    try {
      const res = await api.get("/admin/orders");
      setOrders(res.data);
    } catch (err) {
      toast.error("Failed to fetch orders");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // ✅ MARK AS DELIVERED
  const markDelivered = async (id) => {
  try {
    await api.put(`/admin/orders/${id}/deliver`);
      toast.success("Marked as Delivered");
      fetchOrders();
    } catch {
      toast.error("Failed");
    }
  };

  // ✅ MARK AS PAID
  const markPaid = async (id) => {
    try {
      await api.put(`/admin/orders/${id}/pay`);
      toast.success("Marked as Paid");
      fetchOrders();
    } catch {
      toast.error("Failed");
    }
  };

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold text-[#ff5252]">
        Orders
      </h1>

      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <div className="overflow-x-auto rounded bg-white shadow">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">ID</th>
                <th>User</th>
                <th>Total</th>
                <th>Paid</th>
                <th>Delivered</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="border-t text-center">
                  <td>{order._id.slice(-6)}</td>
                  <td>{order.user?.name}</td>
                  <td>${order.totalPrice}</td>

                  <td>
                    {order.isPaid ? "✅" : "❌"}
                  </td>

                  <td>
                    {order.isDelivered ? "✅" : "❌"}
                  </td>

                  <td className="space-x-2">
                    {!order.isPaid && (
                      <button
                        onClick={() => markPaid(order._id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded"
                      >
                        Pay
                      </button>
                    )}

                    {!order.isDelivered && (
                      <button
                        onClick={() => markDelivered(order._id)}
                        className="bg-green-500 text-white px-3 py-1 rounded"
                      >
                        Deliver
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;