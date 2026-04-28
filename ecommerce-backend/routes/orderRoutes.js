import express from "express";
import Order from "../models/order.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

/* =====================================================
   ORDER ROUTES (ADMIN)
===================================================== */

// GET ALL ORDERS
// GET /api/admin/orders
router.get("/orders", protect, adminOnly, async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "id name email");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// MARK ORDER AS DELIVERED
// PUT /api/admin/orders/:id/deliver
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
// PUT /api/admin/orders/:id/pay
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

export default router;
