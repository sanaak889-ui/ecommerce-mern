import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../Search/style.css';
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";
import { products } from "../../components/ProductData"; // your products array

const Search = () => {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  // Filter products based on query
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (product) => {
    // Navigate to ProductListing page filtered by category/subcategory/subSubcategory
    const url = `/productListing/${product.category}${product.subcategory ? `/${product.subcategory}` : ''}${product.subSubcategory ? `/${product.subSubcategory}` : ''}`;
    navigate(url);
    setQuery("");
    setShowDropdown(false);
  };

  return (
    <div className="searchBox relative h-[50px] w-[100%] rounded-[5px] bg-[#e5e5e5] p-2">
      <input
        type="text"
        placeholder="Search for products ..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowDropdown(true);
        }}
        onBlur={() => setTimeout(() => setShowDropdown(false), 200)} // small delay for click
        className="h-[35px] w-full bg-inherit p-2 text-[15px] focus:outline-none"
      />

      <Button className="!absolute right-[5px] top-[8px] z-50 h-[37px] !w-[37px] !min-w-[37px] !rounded-full !text-black">
        <IoSearch className="text-[#4e4e4e] text-[20px]" />
      </Button>

      {/* Dropdown */}
      {showDropdown && query && (
  <ul className="z-[9999] absolute left-0 top-full max-h-60 w-full overflow-y-auto rounded-md bg-white shadow-lg">
    {filteredProducts.length > 0 ? (
      filteredProducts.map((p) => (
        <li
          key={p.id}
          className="cursor-pointer border-b px-4 py-2 transition-all hover:bg-[#ff5252] hover:text-white"
          onClick={() => handleSelect(p)}
        >
          {p.title}
        </li>
      ))
    ) : (
      <li className="px-4 py-2 text-gray-500">No products found</li>
    )}
  </ul>
)}
    </div>
  );
};

export default Search;
