import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "./models/user.js";

dotenv.config();

const run = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  const email = "sana.ak889@gmail.com";

  // delete old
  await User.deleteOne({ email });
  console.log("Old admin deleted");

  // create new password hash
  const password = "admin123";
  const hashedPassword = await bcrypt.hash(password, 10);

  console.log("NEW HASH:", hashedPassword);

  await User.create({
    name: "Admin",
    email,
    password: hashedPassword,
    isAdmin: true,
  });

  console.log("Admin created with password:", password);

  process.exit();
};

run();