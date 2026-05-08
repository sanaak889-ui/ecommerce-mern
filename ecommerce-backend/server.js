import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import homeContentRoutes from "./routes/homeContentRoute.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import logoRoutes from "./routes/logoRoutes.js";
import slideshowRoutes from "./routes/slideshowRoutes.js";

dotenv.config();

const app = express();

/* =========================
   🔥 1. CORS FIRST (VERY IMPORTANT)
========================= */
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

/* =========================
   🔥 2. HANDLE PRE-FLIGHT
========================= */
app.options("*", cors());

/* ================= MIDDLEWARE ================= */
app.use(express.json());

/* ================= STATIC ================= */
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

/* ================= ROUTES ================= */
/* IMPORTANT: routes AFTER CORS */
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/home-content", homeContentRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/admin/logo", logoRoutes);
app.use("/api/slideshow", slideshowRoutes);

/* ================= DATABASE ================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

/* ================= HEALTH CHECK ================= */
app.get("/", (req, res) => {
  res.send("API is running...");
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("🚀 Server running on port", PORT);
});