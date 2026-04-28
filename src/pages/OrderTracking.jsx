import React, { useState } from "react";

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);

  const handleTrackOrder = (e) => {
    e.preventDefault();
    // Mock order statuses
    if (orderId === "12345") {
      setOrderStatus({ message: "Your order is being processed.", color: "bg-[#ff5252]" });
    } else if (orderId === "67890") {
      setOrderStatus({ message: "Your order has been shipped.", color: "bg-[#ff5252]" });
    } else if (orderId === "11111") {
      setOrderStatus({ message: "Your order has been delivered.", color: "bg-[#ff5252]" });
    } else {
      setOrderStatus({ message: "Order not found. Please check your Order ID.", color: "bg-[#ff5252]" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold text-gray-800">Order Tracking</h1>

      <form
        onSubmit={handleTrackOrder}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg transition hover:shadow-xl"
      >
        <label className="mb-3 block font-medium text-gray-700">Enter your Order ID</label>
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="e.g., 12345"
          className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5252] transition"
        />
        <button
          type="submit"
          className="w-full rounded-lg bg-[#ff5252] p-3 font-medium text-white transition-colors hover:bg-[#e04848]"
        >
          Track Order
        </button>
      </form>

      {orderStatus && (
        <div
          className={`${orderStatus.color} mt-6 p-5 rounded-xl shadow-md w-full max-w-md text-center font-medium text-white`}
        >
          {orderStatus.message}
        </div>
      )}
    </div>
  );
};

export default OrderTracking;