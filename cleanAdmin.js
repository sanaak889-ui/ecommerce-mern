import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/user.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

// 🔥 delete ALL users with this email (important)
const result = await User.deleteMany({
  email: "sana.ak889@gmail.com",
});

console.log("🗑 Deleted:", result.deletedCount);

process.exit();