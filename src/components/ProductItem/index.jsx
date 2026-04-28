import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../ProductItem/style.css";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";
import { MdZoomOutMap } from "react-icons/md";
import QuickViewModal from "./QuickViewModal";
import { useWishlist } from "../../context/WishlistContext";
import { CompareContext } from "../../context/CompareContext";
import { CartContext } from "../../context/CartContext";
import { toast } from "react-hot-toast";

// ✅ FIXED STOCK FUNCTION (ONLY LOGIC UPDATED)
const getStockInfo = (product) => {
  const sizesStock = product?.sizesStock;

  let sizes = [];

  if (Array.isArray(sizesStock)) {
    sizes = sizesStock;
  } else if (typeof sizesStock === "object" && sizesStock !== null) {
    sizes = Object.entries(sizesStock).map(([size, qty]) => ({
      size,
      qty,
    }));
  }

  const totalSizeStock = sizes.reduce((acc, s) => acc + (s.qty || 0), 0);

  const hasSizes = sizes.length > 0;

  const inStock = hasSizes
    ? totalSizeStock > 0
    : product?.countInStock > 0;

  return { sizes, inStock, hasSizes };
};

const ProductItem = ({
  product,
  img1,
  img2,
  price,
  oldPrice,
  discount,
  title,
  brand,
  rating,
  onAddToCart,
}) => {
  const [openQuickView, setOpenQuickView] = useState(false);
  const [wishlistAnim, setWishlistAnim] = useState(false);
  const [compareAnim, setCompareAnim] = useState(false);
  const [cartAnim, setCartAnim] = useState(false);
  const clickSound = new Audio("/sounds/click.mp3");

  const { addToCart } = useContext(CartContext);
  const { addToWishlist, wishlistItems } = useWishlist();
  const { addToCompare, compareItems } = useContext(CompareContext);

  // ✅ KEEP YOUR OBJECT SAME (ONLY FIX sizesStock)
  const fullProduct = {
    _id: product?._id,
    id: product?._id,
    title: product?.name || title,
    images: product?.images?.length
      ? product.images
      : [product?.img1, product?.img2, product?.img3].filter(Boolean),
    price: product?.price || price,
    oldPrice: product?.oldPrice || oldPrice,
    discount: product?.discount || discount,
    brand: product?.brand || brand,
    rating: product?.rating || 0,
    countInStock: product?.countInStock || 0,
    sizesStock: product?.sizesStock ?? null, // ✅ FIXED
  };

  // ✅ IMPORTANT FIX
  const { sizes, inStock, hasSizes } = getStockInfo(fullProduct);

  const computedDiscount =
    fullProduct.oldPrice && fullProduct.oldPrice > fullProduct.price
      ? Math.round(
          ((fullProduct.oldPrice - fullProduct.price) / fullProduct.oldPrice) *
            100
        )
      : fullProduct.discount || 0;

  // WISHLIST
  const handleWishlist = () => {
    if (!inStock) {
      toast.error("❌ Cannot add — Out of Stock", { duration: 2500 });
      return;
    }

    const exists = wishlistItems.find((p) => p._id === fullProduct._id);
    if (exists) {
      toast("✨ Already in Wishlist", { duration: 2000 });
      return;
    }

    setWishlistAnim(true);
    clickSound.play();
    setTimeout(() => setWishlistAnim(false), 300);

    addToWishlist(fullProduct);
    toast.success("💖 Added to Wishlist", { duration: 2000 });
  };

  // COMPARE
  const handleCompare = () => {
    if (!inStock) {
      toast.error("❌ Cannot add — Out of Stock", { duration: 2500 });
      return;
    }

    const exists = compareItems.find((p) => p._id === fullProduct._id);
    if (exists) {
      toast("✨ Already in Compare", { duration: 2000 });
      return;
    }

    setCompareAnim(true);
    clickSound.play();
    setTimeout(() => setCompareAnim(false), 300);

    addToCompare(fullProduct);
    toast.success("⚡ Added to Compare", { duration: 2000 });
  };

  // ADD TO CART FROM QUICKVIEW
  const handleAddToCartWithSize = (productWithSize) => {
    if (!productWithSize?.selectedSize) {
      toast.error("❌ Please select size", { duration: 2500 });
      return;
    }

    const productForCart = {
      ...productWithSize,
      id: productWithSize._id,
      image: productWithSize.images?.[0] || "",
      qty: 1,
    };

    addToCart(productForCart);

    toast.success(`🛒 Added (${productWithSize.selectedSize}) to Cart`, {
      duration: 2000,
    });
  };

  // ADD TO CART BUTTON
  const handleCart = () => {
    if (!inStock) {
      toast.error("❌ Cannot add — Out of Stock", { duration: 2500 });
      return;
    }

    // ✅ FIXED CONDITION
    if (hasSizes) {
      setOpenQuickView(true);
      toast.error("❌ Please select size", { duration: 2500 });
      return;
    }

    const productForCart = {
      ...fullProduct,
      _id: fullProduct._id,
      selectedSize: null,
      image: fullProduct.images?.[0] || "",
      qty: 1,
    };

    addToCart(productForCart);

    toast.success("🛒 Added to Cart", { duration: 2000 });
  };

  return (
    <div className="productItem relative w-full max-w-[250px] overflow-hidden rounded-md border-2 border-[rgba(0,0,0,0.1)] shadow-lg">
      {/* IMAGE */}
      <div className="imgWrapper group relative h-[220px] w-full overflow-hidden rounded-t-md">
        {!inStock && (
          <div className="absolute right-2 top-2 z-50 animate-pulse rounded bg-gradient-to-r from-red-600 to-red-800 px-3 py-1 text-xs font-bold text-white shadow-lg">
            OUT OF STOCK
          </div>
        )}

        <Link to={`/product/${fullProduct._id}`}>
          <div className="h-[220px] overflow-hidden">
            <img
              id={`product-${product._id}`}
              src={fullProduct.images[0]}
              className={`h-full w-full object-cover ${
                !inStock ? "grayscale blur-sm" : ""
              }`}
            />
            {fullProduct.images[1] && (
              <img
                src={fullProduct.images[1]}
                className="absolute left-0 top-0 h-full w-full object-cover opacity-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
            )}
          </div>
        </Link>

        {/* SALE BADGE */}
        {computedDiscount > 0 && (
          <div className="absolute left-2 top-2 flex flex-col gap-1">
            <span className="w-fit self-start rounded bg-black px-1 py-[2px] text-white text-[10px]">
              SALE
            </span>
            <span className="rounded bg-[#ff5252] px-2 py-1 font-semibold text-white text-[12px]">
              {computedDiscount}% OFF
            </span>
          </div>
        )}

        {/* ACTION BUTTONS (UNCHANGED) */}
        <div className="actions top-[-200px] absolute right-[5px] z-50 flex w-[50px] flex-col items-center gap-4 opacity-0 transition-all duration-300 group-hover:top-[15px] group-hover:opacity-100">
          <Button onClick={() => setOpenQuickView(true)} className="group !h-[35px] !w-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#ff5252] hover:text-white">
            <MdZoomOutMap className="!text-black text-[18px] group-hover:text-white" />
          </Button>

          <Button onClick={handleCompare} className="group !h-[35px] !w-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#ff5252] hover:text-white">
            <IoMdGitCompare className="!text-black text-[18px] group-hover:text-white" />
          </Button>

          <Button onClick={handleWishlist} className="group !h-[35px] !w-[35px] !min-w-[35px] !rounded-full !bg-white text-black hover:!bg-[#ff5252] hover:text-white">
            <FaRegHeart className="!text-black text-[18px] group-hover:text-white" />
          </Button>
        </div>
      </div>

      {/* INFO (UNCHANGED) */}
      <div className="info p-3 py-5">
        <h6 className="text-[13px]">
          <Link to={`/product/${fullProduct._id}`} className="link transition-all">
            {fullProduct.brand}
          </Link>
        </h6>

        <h3 className="title font-[500] mb-1 mt-1 text-[13px] text-[rgba(0,0,0,0.9)]">
          <Link to={`/product/${fullProduct._id}`} className="link transition-all">
            {fullProduct.title}
          </Link>
        </h3>

        <Rating name="product-rating" value={fullProduct.rating || 0} size="small" readOnly />

        <div className="h-4">
          {!inStock && (
            <p className="truncate text-center text-xs font-medium text-red-600">
              Currently unavailable
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-4">
            {fullProduct.oldPrice && fullProduct.oldPrice > 0 && (
              <span className="oldPrice font-[500] text-gray-500 text-[15px] line-through">
                ${fullProduct.oldPrice}
              </span>
            )}
            <span className="price font-[600] text-[15px] text-[#ff5252]">
              ${fullProduct.price}
            </span>
          </div>

          <Button
            onClick={handleCart}
            disabled={!inStock}
            className={`!w-full !py-2 !font-bold !rounded ${
              inStock
                ? "!bg-[#ff5252] hover:!bg-[#e63b3b] !text-white"
                : "!bg-gray-400 !text-white !cursor-not-allowed"
            }`}
          >
            {inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </div>
      </div>

      {openQuickView && (
        <QuickViewModal
          product={fullProduct}
          onClose={() => setOpenQuickView(false)}
          onAddToCart={handleAddToCartWithSize}
        />
      )}
    </div>
  );
};

export default ProductItem;