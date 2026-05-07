import React, { useState, useEffect } from "react";
import { SideBar } from "../../components/SideBar";
import { useParams } from "react-router-dom";
import ProductItem from "../../components/ProductItem";
import Button from "@mui/material/Button";
import { HiOutlineViewList } from "react-icons/hi";
import { BsGridFill } from "react-icons/bs";

const ProductListing = () => {
  const { category, subcategory, subSubcategory } = useParams();

  // 🔹 STATES
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([100, 60000]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(
    category ? [category] : []
  );
  const [viewType, setViewType] = useState("grid");

  // 🔹 FETCH PRODUCTS FROM BACKEND
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Product fetch error:", err);
      }
    };
    fetchProducts();
  }, []);

  // 🔹 AUTO SELECT CATEGORY FROM URL
  useEffect(() => {
    if (category) setSelectedCategories([category]);
  }, [category]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedRating]);

  // 🔹 FILTER LOGIC
  const filteredProducts = products.filter((p) => {
    const urlCategoryMatch =
      !category || p.category?.toLowerCase() === category.toLowerCase();

    const sidebarCategoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.some(
        (cat) => p.category?.toLowerCase() === cat.toLowerCase()
      );

    const subcategoryMatch =
      !subcategory ||
      p.subcategory?.toLowerCase() === subcategory.toLowerCase();

    const subSubcategoryMatch =
      !subSubcategory ||
      p.subSubcategory?.toLowerCase() === subSubcategory.toLowerCase();

    const ratingMatch = !selectedRating || p.rating >= selectedRating;

    const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];

    return (
      urlCategoryMatch &&
      sidebarCategoryMatch &&
      subcategoryMatch &&
      subSubcategoryMatch &&
      ratingMatch &&
      priceMatch
    );
  });

  return (
    <section className="py-8">
      <div className="container mx-auto flex flex-col gap-6 px-3 md:flex-row md:px-6">

        {/* SIDEBAR */}
        <SideBar
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        {/* RIGHT SIDE */}
        <div className="w-full flex-1">

          {/* GRID / LIST BAR */}
         <div className="z-[99] sticky top-[80px] mb-4 flex flex-col gap-2 rounded-md bg-white p-3 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <Button
                onClick={() => setViewType("list")}
                className={`!w-[32px] !h-[32px] sm:!w-[35px] sm:!h-[35px] !rounded-full ${
                  viewType === "list"
                    ? "!bg-[#ff5252] !text-white"
                    : "!text-gray-600"
                }`}
              >
                <HiOutlineViewList className="text-[18px]" />
              </Button>

              <Button
                onClick={() => setViewType("grid")}
                className={`!w-[32px] !h-[32px] sm:!w-[35px] sm:!h-[35px] !rounded-full ${
                  viewType === "grid"
                    ? "!bg-[#ff5252] !text-white"
                    : "!text-gray-600"
                }`}
              >
                <BsGridFill className="text-[16px]" />
              </Button>

              <span className="font-[500] text-[12px] text-gray-600 sm:text-[14px]">
                There are {filteredProducts.length} products
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="font-[500] text-[14px] text-gray-600">
                Sort By
              </span>
              <Button className="!border-2 !border-black !bg-white !text-black !text-[12px]">
                Name, A to Z
              </Button>
            </div>
          </div>

          {/* PRODUCTS */}
          <div
              className={
                viewType === "grid"
                  ? "grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
                  : "flex flex-col gap-4"
              }
            >
            {filteredProducts.map((item, index) => {
              // ✅ Determine if product is in stock
              const sizesStock = item.sizesStock || [];
              const inStock =
                item.countInStock > 0 ||
                (Array.isArray(sizesStock) &&
                  sizesStock.some((s) => s.qty > 0)) ||
                (typeof sizesStock === "object" &&
                  Object.values(sizesStock).some((qty) => qty > 0));

              return (
                <ProductItem
                  key={item._id || index}
                  product={{
                    ...item,
                    images:
                      item.images && item.images.length > 0
                        ? item.images
                        : [item.img1, item.img2].filter(Boolean),
                    inStock,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;