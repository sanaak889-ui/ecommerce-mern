import express from "express";
import Order from "../models/order.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

//
// CREATE ORDER
//
router.post("/", protect, async (req, res) => {
  try {
    const { orderItems, shippingAddress, paymentMethod, totalPrice } =
      req.body;

    if (!orderItems || orderItems.length === 0) {
      return res.status(400).json({ message: "No order items" });
    }

    const order = await Order.create({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      totalPrice,
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//
// GET USER ORDERS
//
router.get("/my", protect, async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort({
    createdAt: -1,
  });
  res.json(orders);
});

//
// ADMIN GET ALL ORDERS
//
router.get("/admin", protect, adminOnly, async (req, res) => {
  const orders = await Order.find()
    .populate("user", "name email")
    .sort({ createdAt: -1 });

  res.json(orders);
});

//
// MARK AS PAID
//
router.put("/:id/pay", protect, async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) return res.status(404).json({ message: "Order not found" });

  order.isPaid = true;
  order.paidAt = Date.now();

  const updated = await order.save();
  res.json(updated);
});

//
// MARK AS DELIVERED (ADMIN)
//
router.put("/admin/:id/deliver", protect, adminOnly, async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) return res.status(404).json({ message: "Order not found" });

  order.isDelivered = true;
  order.deliveredAt = Date.now();

  const updated = await order.save();
  res.json(updated);
});

//
// DELETE ORDER (ADMIN)
//
router.delete("/admin/:id", protect, adminOnly, async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (!order) return res.status(404).json({ message: "Order not found" });

  await order.deleteOne();

  res.json({ message: "Order deleted successfully" });
});

export default router;