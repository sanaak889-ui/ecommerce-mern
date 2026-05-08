import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const categories = [
  "Fashion",
  "Electronics",
  "Bags",
  "Footwear",
  "Groceries",
  "Beauty",
  "Accessories",
  "Jewellery",
  "Furniture",
  "Perfumes",
];

export const SideBar = ({
      selectedCategories,
      setSelectedCategories,
      selectedRating,
      setSelectedRating,
      priceRange,
      setPriceRange
    }) => {
  const [openCategory, setOpenCategory] = useState(true);
     const minPrice = priceRange[0];
     const maxPrice = priceRange[1];
  const toggleCategory = () => setOpenCategory(!openCategory);

  const handleCategoryChange = (cat) => {
    // ✅ Auto-open category if sidebar is collapsed
    if (!openCategory) setOpenCategory(true);

    if (selectedCategories.includes(cat)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  return (
    <div className="sidebarWrapper w-full bg-white p-3 lg:w-[20%] lg:p-0">
      <aside className="sticky top-[130px] py-3 pr-0 lg:py-5 lg:pr-5">

        {/* CATEGORY */}
        <div className="rounded bg-gray-50 p-3">
          <h3 onClick={toggleCategory} className="flex cursor-pointer font-semibold">
            Shop by Category
            <FaAngleUp className={`ml-auto ${openCategory ? "" : "rotate-180"}`} />
          </h3>

          {openCategory && (
            <div className="mt-2 max-h-[200px] space-y-2 overflow-auto">
              {categories.map((cat) => (
                <label key={cat} className="flex gap-2 text-[14px]">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat)}
                    onChange={() => handleCategoryChange(cat)}
                    className="accent-[#ff5252]"
                  />
                  {cat}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* PRICE */}
       {/* PRICE FILTER */}
<div className="box mt-4">
  <h3 className="mb-3 font-semibold text-[16px]">Filter By Price</h3>

  <div className="price-slider relative w-full">
    {/* background bar */}
    <div className="-translate-y-1/2 absolute top-1/2 h-[3px] w-full rounded bg-gray-300"></div>

    {/* active range bar */}
    <div
      className="-translate-y-1/2 absolute top-1/2 h-[3px] bg-[#ff5252]"
      style={{
        left: `${(minPrice / 60000) * 100}%`,
        width: `${((maxPrice - minPrice) / 60000) * 100}%`,
      }}
    ></div>

    {/* MIN RANGE */}
   <input
      type="range"
      min="100"
      max="60000"
      value={minPrice}
      onChange={(e) =>
        setPriceRange([Math.min(Number(e.target.value), maxPrice - 100), maxPrice])
      }
      className="range-thumb"
    />

    <input
      type="range"
      min="100"
      max="60000"
      value={maxPrice}
      onChange={(e) =>
        setPriceRange([minPrice, Math.max(Number(e.target.value), minPrice + 100)])
      }
      className="range-thumb"
    />

  </div>

  <div className="flex justify-between pt-2 text-[13px]">
    <span>From: <strong>Rs {minPrice}</strong></span>
    <span>To: <strong>Rs {maxPrice}</strong></span>
  </div>
</div>


        {/* RATING */}
        {/* RATING FILTER */}
           <div className="mt-4">
              <h3 className="font-semibold">Filter By Rating</h3>

              {[5, 4, 3, 2, 1].map((star) => (
                <label key={star} className="flex cursor-pointer items-center gap-2 text-[14px]">
                  <input
                    type="checkbox"
                    className="accent-[#ff5252]"
                    checked={selectedRating === star} // ✅ controlled checkbox
                    onChange={() =>
                      setSelectedRating(selectedRating === star ? null : star) // toggle selection
                    }
                  />
                  {"⭐".repeat(star)}
                </label>
              ))}
</div>


      </aside>
    </div>
  );
};
