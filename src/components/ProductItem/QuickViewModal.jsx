import React, { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";
import { FaRegHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { WishlistContext } from "../../context/WishlistContext";
import { CompareContext } from "../../context/CompareContext";
import { toast } from "react-hot-toast";
import ImageMagnifier from "./ImageMagnifier";

const QuickViewModal = ({ product, onClose, onAddToCart }) => {
  const { addToWishlist } = useContext(WishlistContext);
  const { addToCompare } = useContext(CompareContext);

  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [sizes, setSizes] = useState([]);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [totalStock, setTotalStock] = useState(0);
  const [hasSizes, setHasSizes] = useState(false);

  // --- PROCESS SIZES ---
  const processSizes = (sizesStock) => {
    if (!sizesStock) return [];
    if (Array.isArray(sizesStock)) return sizesStock;
    if (typeof sizesStock === "object")
      return Object.entries(sizesStock).map(([size, qty]) => ({ size, qty }));
    return [];
  };

  useEffect(() => {
    if (!product) return;

    setSelectedImage(product.images?.[0] || "");

    const processedSizes = processSizes(product.sizesStock);
    setSizes(processedSizes);

    const filteredAvailableSizes = processedSizes.filter((s) => s.qty > 0);
    setAvailableSizes(filteredAvailableSizes);

    setHasSizes(filteredAvailableSizes.length > 0);

    // Set first available size if exists
    setSelectedSize(filteredAvailableSizes[0]?.size || null);

    // Set total stock
    const stock = filteredAvailableSizes.length
      ? filteredAvailableSizes.reduce((acc, s) => acc + (s.qty || 0), 0)
      : product.countInStock || 1; // fallback for size-less products
    setTotalStock(stock);
  }, [product]);

  const inStock = totalStock > 0;

  // --- FLY TO CART ---
  const flyToCart = () => {
    const img = document.querySelector("#quickview-main-img img");
    const cart = document.querySelector("#cart-icon");
    if (!img || !cart) return;

    const imgRect = img.getBoundingClientRect();
    const cartRect = cart.getBoundingClientRect();
    const flyingImg = img.cloneNode(true);

    flyingImg.style.position = "fixed";
    flyingImg.style.left = imgRect.left + "px";
    flyingImg.style.top = imgRect.top + "px";
    flyingImg.style.width = imgRect.width + "px";
    flyingImg.style.height = imgRect.height + "px";
    flyingImg.style.transition = "all 0.8s ease-in-out";
    flyingImg.style.zIndex = "9999";

    document.body.appendChild(flyingImg);

    setTimeout(() => {
      flyingImg.style.left = cartRect.left + "px";
      flyingImg.style.top = cartRect.top + "px";
      flyingImg.style.width = "40px";
      flyingImg.style.height = "40px";
      flyingImg.style.opacity = "0.5";
    }, 10);

    setTimeout(() => flyingImg.remove(), 800);
  };

  // --- ADD TO CART ---
  const handleAddToCart = () => {
    // Only require size if product has sizes
    if (hasSizes && !selectedSize) {
      return toast.error("❌ Please select a size");
    }

    const selectedQty = hasSizes
      ? sizes.find((s) => s.size === selectedSize)?.qty || 0
      : product.countInStock || 1;

    if (!selectedQty || selectedQty <= 0) {
      return toast.error("❌ Product is out of stock");
    }

    const productForCart = {
      ...product,
      id: product._id,
      selectedSize: hasSizes ? selectedSize : null,
      image: product.images?.[0],
      quantity: 1,
    };

    onAddToCart(productForCart);

    toast.success(
      `🛒 ${productForCart.name || productForCart.title} added to cart${
        hasSizes ? ` (${selectedSize})` : ""
      }`
    );

    flyToCart();
  };

  // --- RATING ---
  const renderRating = () => {
    const rating = product.rating || 0;
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={i < rating ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
    );
  };

  if (!product) return null;

  return ReactDOM.createPortal(
    <div className="z-[9999] fixed inset-0 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-6xl rounded-xl bg-white shadow-2xl md:flex">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-gray-200 p-2"
        >
          <MdClose size={22} />
        </button>

        {/* LEFT: IMAGES */}
        <div className="flex w-full gap-4 p-4 md:w-1/2">
          <div className="flex gap-2 md:flex-col">
            {product.images?.map((img, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(img)}
                className={`h-20 w-20 cursor-pointer overflow-hidden rounded border ${
                  selectedImage === img ? "border-red-600" : "border-gray-300"
                }`}
              >
                <img
                  src={img}
                  className={`h-full w-full object-cover ${
                    !inStock ? "grayscale blur-sm" : ""
                  }`}
                />
              </div>
            ))}
          </div>

          <div
            id="quickview-main-img"
            className="flex flex-1 items-center justify-center rounded border"
          >
            {selectedImage && (
              <ImageMagnifier
                src={selectedImage}
                className={`${!inStock ? "grayscale blur-sm" : ""}`}
              />
            )}
            {!inStock && (
              <span className="absolute right-2 top-2 rounded bg-black/70 px-3 py-1 text-xs font-bold text-white">
                OUT OF STOCK
              </span>
            )}
          </div>
        </div>

        {/* RIGHT: PRODUCT INFO */}
        <div className="flex flex-1 flex-col gap-4 p-6">
          <h2 className="text-2xl font-bold">{product.name || product.title}</h2>

          {renderRating()}

          <div className="text-xl font-bold">${product.price}</div>

          {/* SIZE SELECTION */}
          {hasSizes && (
            <div>
              <p className="mb-2 font-semibold">Select Size</p>
              <div className="flex flex-wrap gap-2">
                {availableSizes.map((s) => (
                  <button
                    key={s.size}
                    disabled={s.qty <= 0 || !inStock}
                    onClick={() => setSelectedSize(s.size)}
                    className={`rounded border px-4 py-1 text-sm
                      ${
                        selectedSize === s.size
                          ? "bg-red-600 text-white border-red-600"
                          : "bg-white"
                      }
                      ${s.qty <= 0 ? "opacity-40 cursor-not-allowed" : ""}
                    `}
                  >
                    {s.size} ({s.qty})
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ACTION BUTTONS */}
          <div className="mt-4 flex gap-3">
            <button
              onClick={handleAddToCart}
              disabled={!inStock}
              className={`flex items-center gap-2 rounded px-6 py-2 font-bold text-white ${
                inStock ? "bg-red-600 hover:bg-red-700" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              <FaShoppingCart /> {inStock ? "Add to Cart" : "Out of Stock"}
            </button>

            <button
              onClick={() => {
                if (!inStock) return toast.error("❌ Out of Stock");
                addToWishlist(product);
                toast.success("Added to wishlist");
              }}
              className={`rounded border p-3 ${
                !inStock ? "cursor-not-allowed opacity-50" : "hover:bg-red-600 hover:text-white"
              }`}
            >
              <FaRegHeart />
            </button>

            <button
              onClick={() => {
                if (!inStock) return toast.error("❌ Out of Stock");
                addToCompare(product);
                toast.success("Added to compare");
              }}
              className={`rounded border p-3 ${
                !inStock ? "cursor-not-allowed opacity-50" : "hover:bg-red-600 hover:text-white"
              }`}
            >
              <IoMdGitCompare />
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default QuickViewModal;