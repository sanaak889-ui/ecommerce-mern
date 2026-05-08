import { useEffect, useState } from "react";
import api from "../../api/axios";

const OrderListing = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

 const fetchOrders = async () => {
  try {
    const { data } = await api.get("/api/admin/orders");
    setOrders(data);
  } catch (error) {
    alert("Failed to load orders");
  } finally {
    setLoading(false); // ✅ THIS WAS MISSING
  }
};

const markPaidHandler = async (id) => {
  try {
    if (window.confirm("Mark this order as PAID?")) {
      await api.put(`/admin/orders/${id}/pay`);
      await fetchOrders(); // 👈 FORCE REFRESH
    }
  } catch (error) {
    alert("Failed to mark as paid");
  }
};

  const markDeliveredHandler = async (id) => {
    if (window.confirm("Mark this order as DELIVERED?")) {
      await api.put(`/admin/orders/${id}/deliver`);
      fetchOrders();
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;

  return (
    <div>
      <h2>Orders</h2>

      <table border="1" width="100%" cellPadding="10">
        <thead>
          <tr>
            <th>User</th>
            <th>Total</th>
            <th>Paid</th>
            <th>Delivered</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.user?.email}</td>
              <td>${order.totalPrice}</td>
              <td>{order.isPaid ? "YES" : "NO"}</td>
              <td>{order.isDelivered ? "YES" : "NO"}</td>
              <td>
                {!order.isPaid && (
                  <button onClick={() => markPaidHandler(order._id)}>
                    Mark Paid
                  </button>
                )}

                {!order.isDelivered && (
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => markDeliveredHandler(order._id)}
                  >
                    Mark Delivered
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default OrderListing;