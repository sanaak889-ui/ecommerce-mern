import express from "express";
import jwt from "jsonwebtoken";
import Product from "../models/product.js";
import Order from "../models/order.js";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

import { protect, adminOnly } from "../middleware/authMiddleware.js";
import { createAdmin } from "../controllers/adminController.js";

const router = express.Router();

// ================= Admin Login =================
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await User.findOne({ email });

    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch || !admin.isAdmin) {
      return res.status(401).json({ message: "Not authorized as admin" });
    }

    // generate token
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // send admin data + token
    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      isAdmin: admin.isAdmin,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET all users (admin only)
router.get("/users", protect, adminOnly, async (req, res) => {
  try {
    const users = await User.find({}); // get all users
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ================= ADMIN REGISTER ================= */
router.post("/create-admin", protect, adminOnly, createAdmin);

/* ================= PRODUCT ROUTES ================= */

// CREATE PRODUCT
router.post("/products", protect, adminOnly, async (req, res) => {
  try {
    const { name, description, price, countInStock, image } = req.body;

    const product = new Product({
      name,
      description,
      price,
      countInStock,
      image,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE PRODUCT
router.put("/products/:id", protect, adminOnly, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const { name, description, price, countInStock, image } = req.body;

    if (name !== undefined) product.name = name;
    if (description !== undefined) product.description = description;
    if (price !== undefined) product.price = price;
    if (countInStock !== undefined) product.countInStock = countInStock;
    if (image !== undefined) product.image = image;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE PRODUCT
router.delete("/products/:id", protect, adminOnly, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.deleteOne();
    res.json({ message: "Product removed successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ================= ORDER ROUTES ================= */

// GET ALL ORDERS
router.get("/orders", protect, adminOnly, async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "id name email");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// MARK ORDER AS DELIVERED
router.put("/orders/:id/deliver", protect, adminOnly, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// MARK ORDER AS PAID
router.put("/orders/:id/pay", protect, adminOnly, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.isPaid = true;
    order.paidAt = Date.now();

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

/* ================= ADMIN STATS ================= */
/* ================= ADMIN STATS WITH GROWTH ================= */
router.get("/stats", protect, adminOnly, async (req, res) => {
  try {
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    // Total counts
    const usersCount = await User.countDocuments();
    const productsCount = await Product.countDocuments();
    const ordersCount = await Order.countDocuments();
    const ordersDelivered = await Order.countDocuments({ isDelivered: true });
    const ordersPaid = await Order.countDocuments({ isPaid: true });

    // Yesterday counts for growth
    const usersYesterday = await User.countDocuments({ createdAt: { $lt: yesterday } });
    const productsYesterday = await Product.countDocuments({ createdAt: { $lt: yesterday } });
    const ordersYesterday = await Order.countDocuments({ createdAt: { $lt: yesterday } });
    const deliveredYesterday = await Order.countDocuments({
      isDelivered: true,
      createdAt: { $lt: yesterday },
    });
    const paidYesterday = await Order.countDocuments({
      isPaid: true,
      createdAt: { $lt: yesterday },
    });

    // Helper to compute growth %
    const computeGrowth = (current, previous) => {
      if (previous === 0) return current === 0 ? 0 : 100;
      return Math.round(((current - previous) / previous) * 100);
    };

    res.json({
      usersCount,
      usersGrowth: computeGrowth(usersCount, usersYesterday),
      productsCount,
      productsGrowth: computeGrowth(productsCount, productsYesterday),
      ordersCount,
      ordersGrowth: computeGrowth(ordersCount, ordersYesterday),
      ordersDelivered,
      ordersDeliveredGrowth: computeGrowth(ordersDelivered, deliveredYesterday),
      ordersPaid,
      ordersPaidGrowth: computeGrowth(ordersPaid, paidYesterday),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


export default router;
