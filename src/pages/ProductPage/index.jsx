import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaRegHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import Rating from "@mui/material/Rating";

import { useCart } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import { CompareContext } from "../../context/CompareContext";

import { toast } from "react-hot-toast";
import { useSound } from "../../context/SoundContext";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();
  const { addToWishlist, wishlistItems } = useContext(WishlistContext);
  const { addToCompare, compareItems } = useContext(CompareContext);

  const [product, setProduct] = useState(undefined);
  const [activeImage, setActiveImage] = useState("");
  const [zoom, setZoom] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const { playClick } = useSound();

  // ---------- SIZE HANDLER ----------
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

  // ---------- FETCH PRODUCT ----------
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/products/${id}`);

        const data = await res.json();

        // SAFE CHECK
        if (!res.ok || !data || data.message) {
          console.log("Product not found");
          setProduct(null);
          return;
        }

        setProduct(data);

        if (data.images?.length > 0) {
          setActiveImage(data.images[0]);
        }

        const sizes = processSizes(data.sizesStock);

        const firstAvailable = sizes.find((s) => s.qty > 0);

        if (firstAvailable) {
          setSelectedSize(firstAvailable.size);
        }
      } catch (err) {
        console.error("Product fetch error:", err);
        setProduct(null);
      }
    };

    fetchProduct();
  }, [id]);

  // ---------- LOADING ----------
  if (product === undefined) {
    return <div className="py-20 text-center">Loading...</div>;
  }

  if (product === null) {
    return <div className="py-20 text-center">Product not found</div>;
  }

  // ---------- SAFE IMAGES ----------
  const images = Array.isArray(product.images) ? product.images : [];

  const sizes = processSizes(product.sizesStock);

  const totalStock = sizes.reduce((acc, s) => acc + (s.qty || 0), 0);

  const hasSizes = sizes.length > 0;

  const inStock = hasSizes
    ? totalStock > 0
    : (product.countInStock || 0) > 0;

  const discountPercent =
    product.oldPrice && product.oldPrice > product.price
      ? Math.round(
          ((product.oldPrice - product.price) / product.oldPrice) * 100
        )
      : 0;

  // ---------- CART ----------
  const handleCart = () => {
    if (hasSizes && !selectedSize) {
      return toast.error("❌ Please select a size");
    }

    if (!inStock) {
      return toast.error("❌ Out of stock");
    }

    playClick();

    addToCart({
      ...product,
      selectedSize: hasSizes ? selectedSize : null,
    });

    toast.success("🛒 Added to Cart");
  };

  // ---------- WISHLIST ----------
  const handleWishlist = () => {
    if (!inStock) return toast.error("❌ Out of Stock");

    if (wishlistItems.find((p) => p._id === product._id)) {
      return toast("Already in Wishlist");
    }

    playClick();
    addToWishlist(product);
    toast.success("💖 Added to Wishlist");
  };

  // ---------- COMPARE ----------
  const handleCompare = () => {
    if (!inStock) return toast.error("❌ Out of Stock");

    if (compareItems.find((p) => p._id === product._id)) {
      return toast("Already in Compare");
    }

    playClick();
    addToCompare(product);
    toast.success("⚡ Added to Compare");
  };

  return (
    <div className="container mx-auto px-4 py-8">

      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 flex items-center gap-2 rounded border px-4 py-2"
      >
        <FaArrowLeft /> Back
      </button>

      <div className="grid gap-10 md:grid-cols-2">

        {/* LEFT */}
        <div className="flex gap-4">

          <div className="flex flex-col gap-3">
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => setActiveImage(img)}
                className="h-20 w-20 cursor-pointer overflow-hidden rounded border"
              >
                <img
                  src={img}
                  className="h-full w-full object-cover"
                  alt=""
                />
              </div>
            ))}
          </div>

          <div
            className="relative flex-1 overflow-hidden rounded border"
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
          >
            <img
              src={activeImage}
              className={`h-[450px] w-full object-cover transition ${
                zoom ? "scale-125" : "scale-100"
              }`}
              alt=""
            />

            {discountPercent > 0 && (
              <span className="absolute left-3 top-3 bg-red-500 px-2 py-1 text-white">
                {discountPercent}% OFF
              </span>
            )}

            {!inStock && (
              <span className="absolute right-3 top-3 bg-black px-2 py-1 text-white">
                OUT OF STOCK
              </span>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>

          <Rating value={product.rating || 0} readOnly />

          <p className="mt-2 text-gray-600">{product.description}</p>

          <div className="mt-3 flex gap-3">
            <span className="text-xl font-bold text-red-500">
              ${product.price}
            </span>

            {product.oldPrice && (
              <span className="text-gray-400 line-through">
                ${product.oldPrice}
              </span>
            )}
          </div>

          {/* SIZE */}
          {sizes.length > 0 && (
            <div className="mt-4">
              <p className="mb-2 font-semibold">Select Size</p>

              <div className="flex gap-2">
                {sizes.map((s) => (
                  <button
                    key={s.size}
                    disabled={s.qty <= 0}
                    onClick={() => setSelectedSize(s.size)}
                    className={`rounded border px-3 py-1 ${
                      selectedSize === s.size
                        ? "bg-black text-white"
                        : ""
                    }`}
                  >
                    {s.size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ACTIONS */}
          <div className="mt-5 flex gap-3">

            <button
              onClick={handleCart}
              disabled={!inStock}
              className="rounded bg-red-500 px-4 py-2 text-white"
            >
              Add to Cart
            </button>

            <button onClick={handleWishlist}>
              <FaRegHeart />
            </button>

            <button onClick={handleCompare}>
              <IoMdGitCompare />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;