import express from "express";
import Logo from "../models/logoModel.js";
import upload from "../middleware/upload.js";
import cloudinary from "../config/cloudinary.js";

const router = express.Router();


// GET LOGO (single)
router.get("/", async (req, res) => {
  try {
    const logo = await Logo.findOne();
    res.json(logo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// CREATE LOGO
router.post("/", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No image uploaded" });

    const result = await cloudinary.uploader.upload_stream(
      { folder: "logo" },
      async (error, result) => {
        if (error) return res.status(500).json({ message: error.message });

        const logo = await Logo.create({
          image: result.secure_url,
        });

        return res.json(logo);
      }
    );

    result.end(req.file.buffer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// UPDATE LOGO
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No image uploaded" });

    const result = await cloudinary.uploader.upload_stream(
      { folder: "logo" },
      async (error, result) => {
        if (error) return res.status(500).json({ message: error.message });

        const updated = await Logo.findByIdAndUpdate(
          req.params.id,
          { image: result.secure_url },
          { new: true }
        );

        return res.json(updated);
      }
    );

    result.end(req.file.buffer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE LOGO
router.delete("/:id", async (req, res) => {
  try {
    const logo = await Logo.findById(req.params.id);

    if (!logo) {
      return res.status(404).json({ message: "Logo not found" });
    }

    await Logo.findByIdAndDelete(req.params.id);

    res.json({ message: "Logo deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


export default router;