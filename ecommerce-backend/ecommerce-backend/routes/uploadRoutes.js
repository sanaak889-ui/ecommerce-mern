import express from "express";
import upload from "../middleware/upload.js";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();

// ✅ MULTIPLE IMAGE UPLOAD
router.post("/", upload.array("image", 10), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: "No files uploaded" });
    }

    const uploadPromises = req.files.map((file) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "ecomm-products" },
          (error, result) => {
            if (error) return reject(error);
            resolve(result.secure_url);
          }
        );
        stream.end(file.buffer);
      });
    });

    const urls = await Promise.all(uploadPromises);

    // 🔥 IMPORTANT RESPONSE
    res.json({ urls });

  } catch (err) {
    console.log("UPLOAD ERROR:", err);
    res.status(500).json({ message: err.message });
  }
});

export default router;