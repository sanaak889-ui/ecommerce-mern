import express from "express";
import Product from "../models/product.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

/* =====================================================
   HELPER
===================================================== */
const calculateTotalStock = (sizesStock = []) => {
  return sizesStock.reduce((sum, item) => {
    return sum + Number(item.qty || 0);
  }, 0);
};

/* =====================================================
   PUBLIC ROUTES
===================================================== */

router.get("/", async (req, res) => {
  try {
    const { category, subcategory, subSubcategory, latest } = req.query;

    let query = {};

    if (latest === "true") query.isLatest = true;
    if (category) query.category = category;
    if (subcategory) query.subcategory = subcategory;
    if (subSubcategory) query.subSubcategory = subSubcategory;

    const products = await Product.find(query);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* =====================================================
   ADMIN QUICK TOGGLES
===================================================== */

router.patch("/:id", protect, adminOnly, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (req.body.isFeatured !== undefined)
      product.isFeatured = req.body.isFeatured;

    if (req.body.isPopular !== undefined)
      product.isPopular = req.body.isPopular;

    if (req.body.isLatest !== undefined)
      product.isLatest = req.body.isLatest;

    // 🔥 STOCK FIX (IMPORTANT)
    if (req.body.sizesStock !== undefined) {
      product.sizesStock = req.body.sizesStock;
      product.countInStock = calculateTotalStock(req.body.sizesStock);
    }

    const updatedProduct = await product.save();
    res.json(updatedProduct);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* =====================================================
   CREATE PRODUCT
===================================================== */

router.post("/admin", protect, adminOnly, async (req, res) => {
  try {
    const {
      name,
      brand,
      description,
      price,
      oldPrice,
      images,
      category,
      subcategory,
      subSubcategory,
      isFeatured,
      isPopular,
      isLatest,
      sizesStock,
    } = req.body;

    const product = new Product({
      name,
      brand,
      description,
      price,
      oldPrice,
      images,
      category,
      subcategory,
      subSubcategory,
      isFeatured,
      isPopular,
      isLatest,

      sizesStock: sizesStock || [],
      countInStock: calculateTotalStock(sizesStock || []),
    });

    const created = await product.save();
    res.status(201).json(created);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* =====================================================
   UPDATE PRODUCT (FULL FIX)
===================================================== */

router.put("/admin/:id", protect, adminOnly, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const {
      name,
      brand,
      description,
      price,
      oldPrice,
      images,
      category,
      subcategory,
      subSubcategory,
      isFeatured,
      isPopular,
      isLatest,
      sizesStock,
    } = req.body;

    if (name !== undefined) product.name = name;
    if (brand !== undefined) product.brand = brand;
    if (description !== undefined) product.description = description;
    if (price !== undefined) product.price = price;
    if (oldPrice !== undefined) product.oldPrice = oldPrice;
    if (images !== undefined) product.images = images;
    if (category !== undefined) product.category = category;
    if (subcategory !== undefined) product.subcategory = subcategory;
    if (subSubcategory !== undefined) product.subSubcategory = subSubcategory;
    if (isFeatured !== undefined) product.isFeatured = isFeatured;
    if (isPopular !== undefined) product.isPopular = isPopular;
    if (isLatest !== undefined) product.isLatest = isLatest;

    // 🔥 FIX STOCK SYNC
    if (sizesStock !== undefined) {
      product.sizesStock = sizesStock;
      product.countInStock = calculateTotalStock(sizesStock);
    }

    const updated = await product.save();
    res.json(updated);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* =====================================================
   DELETE
===================================================== */

router.delete("/admin/:id", protect, adminOnly, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.deleteOne();
    res.json({ message: "Product deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;