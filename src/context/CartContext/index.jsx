import React, { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";

// Create context
export const CartContext = createContext();
export const useCart = () => useContext(CartContext);

// Provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add to cart
  const addToCart = (product) => {
    const { _id, selectedSize, countInStock, sizesStock, qty = 1 } = product;

    // Determine stock
    const stock =
      sizesStock?.length > 0
        ? sizesStock.find((s) => s.size === selectedSize)?.qty || 0
        : countInStock || 0;

    if (stock <= 0) {
      toast.error("🚫 This product is Out of Stock");
      return;
    }

    // Check if product already exists in cart
    const found = cartItems.find(
      (p) => p._id === _id && p.selectedSize === selectedSize
    );

    if (found) {
      setCartItems((prev) =>
        prev.map((p) =>
          p._id === _id && p.selectedSize === selectedSize
            ? { ...p, qty: p.qty + 1 }
            : p
        )
      );
    } else {
      setCartItems((prev) => [
        ...prev,
        { ...product, qty: 1, image: product.images?.[0] || "" },
      ]);
    }

    toast.success(
      `🛒 Added ${selectedSize ? `(${selectedSize})` : ""} to Cart`
    );
  };

  const increaseQty = (_id, selectedSize) => {
    setCartItems((prev) =>
      prev.map((p) =>
        p._id === _id && p.selectedSize === selectedSize
          ? { ...p, qty: p.qty + 1 }
          : p
      )
    );
  };

  const decreaseQty = (_id, selectedSize) => {
    setCartItems((prev) =>
      prev.map((p) =>
        p._id === _id && p.selectedSize === selectedSize && p.qty > 1
          ? { ...p, qty: p.qty - 1 }
          : p
      )
    );
  };

  const removeFromCart = (_id, selectedSize) => {
    setCartItems((prev) =>
      prev.filter((p) => !(p._id === _id && p.selectedSize === selectedSize))
    );
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};