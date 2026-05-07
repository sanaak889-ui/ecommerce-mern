import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const Cart = () => {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
    clearCart,
  } = useCart();

  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");

  // =========================
  // SAFE SUBTOTAL (FIXED)
  // =========================
  const subtotal = cartItems.reduce((total, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.qty) || 1;
    return total + price * qty;
  }, 0);

  // =========================
  // STOCK HELPER
  // =========================
  const getItemStock = (item) => {
    if (item.sizesStock && item.selectedSize) {
      if (Array.isArray(item.sizesStock)) {
        const sizeObj = item.sizesStock.find(
          (s) => s.size === item.selectedSize
        );
        return sizeObj?.qty || 0;
      } else {
        return item.sizesStock[item.selectedSize] || 0;
      }
    }
    return item.countInStock || 0;
  };

  // =========================
  // PLACE ORDER
  // =========================
  const placeOrder = async () => {
    if (!address) return toast.error("Please enter address");
    if (cartItems.length === 0) return toast.error("Cart is empty");

    try {
      // FIXED TOKEN (admin + user safe)
      const token =
        localStorage.getItem("adminToken") ||
        localStorage.getItem("token");

      if (!token) {
        toast.error("Please login first");
        return;
      }

      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          orderItems: cartItems.map((item) => ({
            product: item._id,
            name: item.name || item.title,
            qty: item.qty || 1,
            price: Number(item.price) || 0,
          })),
          shippingAddress: {
            address: address,
          },
          paymentMethod,
          totalPrice: subtotal,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Order failed");
      }

      toast.success("Order placed successfully!");

      clearCart();
      setAddress("");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">

        {/* LEFT SIDE */}
        <div className="rounded bg-white p-6 shadow-lg lg:col-span-2">
          <h2 className="mb-4 border-b pb-2 text-2xl font-bold">
            Shopping Cart
          </h2>

          {cartItems.length === 0 && (
            <p className="py-10 text-center text-lg text-gray-600">
              Your cart is empty
            </p>
          )}

          {cartItems.map((item) => {
            const stockQty = getItemStock(item);

            return (
              <div
                key={item._id + (item.selectedSize || "")}
                className="flex flex-col gap-4 border-b py-4 lg:flex-row lg:items-center"
              >
                {/* IMAGE */}
                <div className="flex gap-2">
                  {item.images?.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="h-24 w-24 rounded border object-contain"
                      alt=""
                    />
                  ))}
                </div>

                {/* DETAILS */}
                <div className="flex flex-1 flex-col lg:ml-4">
                  <h3 className="font-semibold">
                    {item.name || item.title}
                  </h3>

                  <p className="text-xl font-bold text-[#ff5252]">
                    ${item.price}
                  </p>

                  {/* QTY CONTROLS */}
                  <div className="mt-2 flex items-center gap-3">
                    <button
                      onClick={() =>
                        decreaseQty(item._id, item.selectedSize)
                      }
                      className="border px-3"
                    >
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button
                      onClick={() =>
                        increaseQty(item._id, item.selectedSize)
                      }
                      className="border px-3"
                    >
                      +
                    </button>

                    <button
                      onClick={() =>
                        removeFromCart(item._id, item.selectedSize)
                      }
                      className="text-red-600"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* CLEAR CART */}
          {cartItems.length > 0 && (
            <button
              onClick={clearCart}
              className="mt-4 rounded bg-red-600 px-4 py-2 text-white"
            >
              Clear Cart
            </button>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="h-fit rounded bg-white p-6 shadow-lg">
          <h3 className="font-bold">Order Summary</h3>

          <p className="mt-2 text-xl font-bold">
            Subtotal: ${subtotal.toFixed(2)}
          </p>

          {/* ADDRESS */}
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter delivery address"
            className="mt-3 w-full border p-2"
          />

          {/* PAYMENT */}
          <div className="mt-3">
            <label>
              <input
                type="radio"
                checked={paymentMethod === "COD"}
                onChange={() => setPaymentMethod("COD")}
              />{" "}
              Cash on Delivery
            </label>

            <br />

            <label>
              <input
                type="radio"
                checked={paymentMethod === "CARD"}
                onChange={() => setPaymentMethod("CARD")}
              />{" "}
              Card
            </label>
          </div>

          {/* PLACE ORDER */}
          <button
            onClick={placeOrder}
            className="mt-4 w-full bg-[#ff5252] p-3 font-bold text-white"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;