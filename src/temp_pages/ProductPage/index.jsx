import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaRegHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import Rating from "@mui/material/Rating";

import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import { CompareContext } from "../../context/CompareContext";

import { toast } from "react-hot-toast";
import { useSound } from "../../context/SoundContext";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);
  const { addToWishlist, wishlistItems } = useContext(WishlistContext);
  const { addToCompare, compareItems } = useContext(CompareContext);

  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");
  const [zoom, setZoom] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const { playClick } = useSound();

  // --- PROCESS SIZES ---
  const processSizes = (sizesStock) => {
    if (!sizesStock) return [];
    if (Array.isArray(sizesStock)) return sizesStock;
    if (typeof sizesStock === "object") {
      return Object.entries(sizesStock).map(([size, qty]) => ({
        size,
        qty,
      }));
    }
    return [];
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://localhost:5000/api/products/${id}`);
      const data = await res.json();
      setProduct(data);

      setActiveImage(data.images?.[0]);

      const sizes = processSizes(data.sizesStock);
      const firstAvailable = sizes.find((s) => s.qty > 0);
      if (firstAvailable) setSelectedSize(firstAvailable.size);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div className="py-20 text-center">Loading...</div>;

  const sizes = processSizes(product.sizesStock);

  // ✅ FIXED STOCK LOGIC
  const totalStock = sizes.reduce((acc, s) => acc + (s.qty || 0), 0);
  const hasSizes = sizes.length > 0;

  const inStock = hasSizes
    ? totalStock > 0
    : product?.countInStock > 0;

  // Discount
  const discountPercent =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
      : 0;

  // --- CART ---
  const handleCart = () => {
    if (hasSizes && !selectedSize) {
      return toast.error("❌ Please select a size");
    }

    if (hasSizes) {
      const selectedQty =
        sizes.find((s) => s.size === selectedSize)?.qty || 0;

      if (selectedQty <= 0) {
        return toast.error("❌ Selected size is out of stock");
      }
    }

    if (!inStock) {
      return toast.error("❌ Out of stock");
    }

    playClick();
    addToCart({ ...product, selectedSize: hasSizes ? selectedSize : null });

    toast.success(
      hasSizes
        ? `🛒 Added ${selectedSize} to Cart`
        : "🛒 Added to Cart"
    );
  };

  // --- WISHLIST ---
  const handleWishlist = () => {
    if (!inStock) return toast.error("❌ Out of Stock");

    if (wishlistItems.find((p) => p._id === product._id))
      return toast("✨ Already in Wishlist");

    playClick();
    addToWishlist(product);
    toast.success("💖 Added to Wishlist");
  };

  // --- COMPARE ---
  const handleCompare = () => {
    if (!inStock) return toast.error("❌ Out of Stock");

    if (compareItems.find((p) => p._id === product._id))
      return toast("✨ Already in Compare");

    playClick();
    addToCompare(product);
    toast.success("⚡ Added to Compare");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold hover:bg-black hover:text-white"
      >
        <FaArrowLeft /> Back to Shop
      </button>

      <div className="grid gap-10 md:grid-cols-2">
        {/* LEFT */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {product.images?.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(img)}
                className={`h-20 w-20 rounded border cursor-pointer overflow-hidden ${
                  activeImage === img ? "border-red-500" : "border-gray-200"
                }`}
              >
                <img
                  src={img}
                  alt=""
                  className={`h-full w-full object-cover ${
                    !inStock ? "grayscale blur-sm" : ""
                  }`}
                />
              </div>
            ))}
          </div>

          <div
            className="relative flex-1 overflow-hidden rounded-lg border"
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
          >
            <img
              src={activeImage}
              alt={product.name}
              className={`h-[450px] w-full object-cover transition-transform ${
                zoom ? "scale-125" : "scale-100"
              } ${!inStock ? "grayscale blur-sm" : ""}`}
            />

            {discountPercent > 0 && (
              <span className="absolute left-4 top-4 rounded bg-red-500 px-3 py-1 text-sm font-bold text-white">
                {discountPercent}% OFF
              </span>
            )}

            {!inStock && (
              <span className="absolute right-4 top-4 rounded bg-black/70 px-3 py-1 text-sm font-bold text-white">
                OUT OF STOCK
              </span>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-2">
            <Rating value={product.rating || 0} readOnly />
            <span className="text-sm text-gray-600">
              ({product.reviews || 0} reviews)
            </span>
          </div>

          <p className="text-gray-600">{product.description}</p>

          <div className="flex items-center gap-4">
            {product.oldPrice && (
              <span className="text-gray-400 line-through">
                ${product.oldPrice}
              </span>
            )}
            <span className="text-3xl font-bold text-red-500">
              ${product.price}
            </span>
          </div>

          {/* SIZE */}
          {sizes.length > 0 && (
            <div className="mt-3">
              <p className="mb-2 text-sm font-semibold">Select Size</p>
              <div className="flex gap-3">
                {sizes.map(({ size, qty }) => (
                  <button
                    key={size}
                    disabled={qty <= 0}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border font-semibold transition
                      ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : "bg-white hover:bg-gray-100"
                      }
                      ${qty <= 0 && "opacity-40 cursor-not-allowed"}
                    `}
                  >
                    {size} ({qty})
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ACTIONS */}
          <div className="mt-4 flex gap-3">
            <button
              onClick={handleCart}
              disabled={!inStock}
              className={`rounded px-6 py-3 font-bold text-white ${
                inStock
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              {inStock ? "Add to Cart" : "Out of Stock"}
            </button>

            <button
              onClick={handleWishlist}
              className={`rounded border px-4 py-3 ${
                !inStock
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-red-500 hover:text-white"
              }`}
            >
              <FaRegHeart />
            </button>

            <button
              onClick={handleCompare}
              className={`rounded border px-4 py-3 ${
                !inStock
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-red-500 hover:text-white"
              }`}
            >
              <IoMdGitCompare />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;