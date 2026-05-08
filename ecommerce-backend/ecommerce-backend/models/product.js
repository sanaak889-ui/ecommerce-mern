import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    brand: String,
    description: String,
    price: Number,
    oldPrice: Number,
    
    // Total stock can be optional, actual stock is per size
    countInStock: { type: Number, default: 0 },

    // Per-size stock
    sizesStock: [
  {
    size: { type: String, required: true },
    qty: { type: Number, required: true, default: 0 },
  },
],

    // Toggles
    isFeatured: { type: Boolean, default: false },
    isPopular: { type: Boolean, default: false },
    isLatest: { type: Boolean, default: false },
    tags: { type: [String], default: [] },

    category: { type: String, default: "General" },
    subcategory: String,
    subSubcategory: String,

    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },

    images: { type: [String], default: [] },
    shippingEstimate: String,
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);