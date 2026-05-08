import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.js"; // your model
import products from "./data/products.js"; // your updated products array

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const importData = async () => {
  try {
    // ✅ Delete old products
    await Product.deleteMany();

    // ✅ Insert updated products
    await Product.insertMany(products);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

connectDB().then(importData);
