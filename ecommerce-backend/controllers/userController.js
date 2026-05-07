import asyncHandler from "express-async-handler";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

/* ===================== GENERATE TOKEN ===================== */
const generateToken = (id, isAdmin) => {
  return jwt.sign(
    { id, isAdmin },
    process.env.JWT_SECRET || "secretkey",
    { expiresIn: "30d" }
  );
};

/* ===================== REGISTER USER ===================== */
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password, // ⚠️ hashed in model pre-save hook
  });

  res.status(201).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    token: generateToken(user._id, user.isAdmin),
  });
});

/* ===================== LOGIN USER ===================== */
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please enter email and password");
  }

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id, user.isAdmin),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

/* ===================== GET ALL USERS (ADMIN) ===================== */
export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");

  res.json(users);
});