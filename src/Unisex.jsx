import React from "react";
import ProductsSlider from "./components/ProductsSlider";
import { products } from "./components/ProductData";

const Unisex = () => {
 const unisexProducts = products.filter(
  p => p.subcategory === "Men" || p.subcategory === "Women"
);

  return (
    <div className="container mx-auto py-8">
      <h2 className="mb-6 text-2xl font-bold">Unisex Products</h2>
      <ProductsSlider items={4} products={unisexProducts} />
    </div>
  );
};

export default Unisex;
