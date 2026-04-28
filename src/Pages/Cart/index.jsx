import React from "react";
import { useCart } from "../../context/CartContext";
import { FaTrashAlt } from "react-icons/fa";

const Cart = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart, clearCart } =
    useCart();

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * Number(item.qty),
    0
  );

  // Helper to get stock for each cart item
  const getItemStock = (item) => {
    // If sizesStock exists and a size is selected
    if (item.sizesStock && item.selectedSize) {
      if (Array.isArray(item.sizesStock)) {
        // Array format
        const sizeObj = item.sizesStock.find(
          (s) => s.size === item.selectedSize
        );
        return sizeObj?.qty || 0;
      } else if (typeof item.sizesStock === "object") {
        // Object format
        return item.sizesStock[item.selectedSize] || 0;
      }
    }
    // Fallback to general countInStock
    return item.countInStock || 0;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-3">
        {/* LEFT: CART ITEMS */}
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
            const inStock = stockQty > 0;

            return (
              <div
                key={item._id + (item.selectedSize || "")}
                className="flex flex-col gap-4 border-b py-4 lg:flex-row lg:items-center"
              >
                {/* IMAGE */}
                <div className="flex gap-2">
                  {item.images?.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={item.title}
                      className="h-24 w-24 rounded border object-contain transition-transform hover:scale-110"
                    />
                  ))}
                </div>

                {/* PRODUCT INFO */}
                <div className="flex flex-1 flex-col justify-between lg:ml-4">
                  <div>
                    <h3 className="line-clamp-2 text-lg font-semibold">
                      {item.title}
                    </h3>
                    {item.selectedSize && (
                      <p className="text-sm text-gray-500">
                        Size: {item.selectedSize}
                      </p>
                    )}
                    <p
                      className={`mt-1 text-sm font-medium ${
                        inStock ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {inStock ? "In Stock" : "Out of Stock"}
                    </p>
                    <p className="mt-1 text-xl font-bold text-[#ff5252]">
                      ${item.price}
                    </p>
                  </div>

                  {/* QUANTITY & REMOVE */}
                  <div className="mt-2 flex items-center gap-3">
                    <button
                      onClick={() =>
                        decreaseQty(item._id, item.selectedSize)
                      }
                      disabled={!inStock}
                      className="px-3 py-1 rounded border hover:bg-gray-200 transition disabled:opacity-50"
                    >
                      −
                    </button>
                    <span className="rounded border px-3 py-1">{item.qty}</span>
                    <button
                      onClick={() =>
                        increaseQty(item._id, item.selectedSize, stockQty)
                      }
                      disabled={!inStock || item.qty >= stockQty}
                      className="px-3 py-1 rounded border hover:bg-gray-200 transition disabled:opacity-50"
                    >
                      +
                    </button>

                    <button
                      onClick={() => removeFromCart(item._id, item.selectedSize)}
                      className="ml-4 flex items-center gap-1 text-red-600 hover:text-red-800 transition"
                    >
                      <FaTrashAlt /> Remove
                    </button>
                  </div>
                  {stockQty < item.qty && inStock && (
                    <p className="mt-1 text-sm text-red-600">
                      Only {stockQty} left in stock
                    </p>
                  )}
                </div>
              </div>
            );
          })}

          {/* CLEAR CART BUTTON */}
          {cartItems.length > 0 && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={clearCart}
                className="rounded bg-red-600 px-6 py-2 font-bold text-white transition hover:bg-red-700"
              >
                Clear Cart
              </button>
            </div>
          )}
        </div>

        {/* RIGHT: ORDER SUMMARY */}
        <div className="h-fit rounded bg-white p-6 shadow-lg">
          <h3 className="text-lg font-bold">Order Summary</h3>

          <p className="mt-2 text-xl font-bold text-gray-800">
            Subtotal: ${subtotal.toFixed(2)}
          </p>

          <textarea
            placeholder="Enter delivery address"
            className="mt-3 w-full rounded border p-2 focus:outline-[#ff5252]"
          />

          <div className="mt-3">
            <p className="font-semibold">Payment Method</p>
            <label className="mt-1 block">
              <input type="radio" name="pay" /> Cash on Delivery
            </label>
            <label className="mt-1 block">
              <input type="radio" name="pay" /> Pay with Card
            </label>
          </div>

          <button className="mt-4 w-full rounded bg-[#ff5252] p-3 font-bold text-white transition hover:bg-red-600">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;