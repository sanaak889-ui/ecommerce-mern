import React, { createContext, useContext, useEffect, useState } from "react";

export const CompareContext = createContext();
export const useCompare = () => useContext(CompareContext);

export const CompareProvider = ({ children }) => {
  const [compareItems, setCompareItems] = useState(() => {
    const stored = localStorage.getItem("compareItems");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("compareItems", JSON.stringify(compareItems));
  }, [compareItems]);

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

  const addToCompare = (product) => {
    const item = normalizeProduct(product);

    setCompareItems((prev) => {
      if (prev.find((p) => p._id === item._id)) return prev;
      return [...prev, item];
    });
  };

  const removeFromCompare = (id) => {
    setCompareItems((prev) => prev.filter((p) => p._id !== id));
  };

  const clearCompare = () => setCompareItems([]);

  return (
    <CompareContext.Provider
      value={{ compareItems, addToCompare, removeFromCompare, clearCompare }}
    >
      {children}
    </CompareContext.Provider>
  );
};