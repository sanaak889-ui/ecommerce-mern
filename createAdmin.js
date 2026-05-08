import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js"; // make sure path is correct

dotenv.config();

const createAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    // Check if admin already exists
    const adminExists = await User.findOne({ email: "sana.ak889@gmail.com" });
    if (adminExists) {
      console.log("Admin user already exists");
      process.exit();
    }

    // Create admin user (plain password, pre-save hook will hash it)
    const adminUser = await User.create({
      name: "Sana Admin",
      email: "sana.ak889@gmail.com",  // your admin email
      password: "Titanic3#",            // plain password
      isAdmin: true,
    });

    console.log("Admin user created:", adminUser);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

createAdmin();
