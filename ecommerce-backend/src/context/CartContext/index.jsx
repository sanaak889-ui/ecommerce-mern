import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

// 1. Create context
const CartContext = createContext();

// 2. Provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // SAVE TO LOCAL STORAGE (fix refresh issue)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ADD TO CART (basic safe version)
  const addToCart = (item) => {
    setCartItems((prev) => {
      const exists = prev.find(
        (x) =>
          x._id === item._id &&
          x.selectedSize === item.selectedSize
      );

      if (exists) {
        return prev.map((x) =>
          x._id === item._id && x.selectedSize === item.selectedSize
            ? { ...x, qty: x.qty + 1 }
            : x
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });

    toast.success("Added to cart");
  };

  // INCREASE QTY
  const increaseQty = (id, size) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id && item.selectedSize === size
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  // DECREASE QTY
  const decreaseQty = (id, size) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item._id === id && item.selectedSize === size
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // REMOVE ITEM
  const removeFromCart = (id, size) => {
    setCartItems((prev) =>
      prev.filter(
        (item) =>
          !(item._id === id && item.selectedSize === size)
      )
    );
  };

  // CLEAR CART
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
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

// 3. Hook (IMPORTANT)
export const useCart = () => useContext(CartContext);

// ❌ DO NOT export default anything else