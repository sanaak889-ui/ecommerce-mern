import React, { createContext, useContext, useEffect, useState } from "react";

export const WishlistContext = createContext();
export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const stored = localStorage.getItem("wishlistItems");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const normalizeProduct = (product) => ({
    ...product,
    _id: product._id || product.id,
    images:
      product.images && product.images.length > 0
        ? product.images
        : product.img1
        ? [product.img1]
        : [],
  });

  const addToWishlist = (product) => {
    const item = normalizeProduct(product);

    setWishlistItems((prev) => {
      if (prev.find((p) => p._id === item._id)) return prev;
      return [...prev, item];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((p) => p._id !== id));
  };

  const clearWishlist = () => setWishlistItems([]);

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};