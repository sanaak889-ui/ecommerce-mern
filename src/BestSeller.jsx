import React from "react";
import ProductsSlider from "./components/ProductsSlider";
import { products } from "./components/ProductData";

const BestSeller = () => {
  // Filter products for best-sellers (discount >= 20%)
  const bestSellers = products.filter(p => p.discount >= 20);

  return (
    <div className="container mx-auto py-8">
      
      {/* Heading with bouncing fire icon */}
      <h2 className="mb-6 flex items-center gap-2 text-3xl font-extrabold tracking-wide text-[#ff5252]">
        <span className="animate-bounce">🔥</span> Best Seller
      </h2>

      {/* Product Slider */}
      <ProductsSlider items={4} products={bestSellers} />
    </div>
  );
};

export default BestSeller;
