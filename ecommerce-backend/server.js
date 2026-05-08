import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

// Routes
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

/* ================= MIDDLEWARE ================= */

// JSON parser
app.use(express.json());

// ✅ FIXED CORS (IMPORTANT FOR VERCEL)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://ecommerce-mern-noa3.vercel.app",
      "https://ecommerce-mern-noa3-ifb2d84ow-sana-akrams-projects.vercel.app"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

/* ================= STATIC FILES ================= */
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

/* ================= ROUTES ================= */
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
  .catch((err) => console.log("MongoDB error:", err));

/* ================= HEALTH CHECK ================= */
app.get("/", (req, res) => {
  res.send("API is running...");
});

/* ================= SERVER ================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});