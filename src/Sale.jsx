import React, { useState } from "react";
import ProductsSlider from "./components/ProductsSlider";
import { products } from "./components/ProductData";

const Sale = () => {
  const [category, setCategory] = useState("All");

  const saleProducts = products.filter(p => p.discount > 0);

  const filtered =
    category === "All"
      ? saleProducts
      : saleProducts.filter(p => p.category === category);

  return (
    <div className="container mx-auto py-8">

      {/* Heading with bouncing fire icon */}
      <h2 className="mb-6 flex items-center gap-2 text-3xl font-bold">
        <span className="animate-bounce">🔥</span> Sale Products
      </h2>

      {/* Category Buttons */}
      <div className="mb-6 flex gap-3">
        {["All", "Fashion", "Furniture", "Perfumes"].map(c => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-4 py-2 rounded font-medium transition-all duration-300 
              ${
                category === c
                  ? "bg-red-500 text-white shadow-lg animate-pulse"
                  : "bg-gray-200 text-black hover:bg-red-500 hover:text-white hover:shadow-md hover:scale-105"
              }`}
          >
            {c} Sale
          </button>
        ))}
      </div>

      {/* Product Slider */}
      <ProductsSlider items={4} products={filtered} />
    </div>
  );
};

export default Sale;
