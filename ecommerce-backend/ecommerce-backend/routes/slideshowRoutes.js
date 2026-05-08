import express from "express";
import Slideshow from "../models/slideshowModel.js";

const router = express.Router();

/* ================= GET ================= */

router.get("/", async (req, res) => {
  try {
    const slides = await Slideshow.find().sort({ createdAt: -1 });

    res.json(slides);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

/* ================= CREATE ================= */

router.post("/", async (req, res) => {
  try {
    const { images } = req.body;

    const createdSlides = await Promise.all(
      images.map((img) =>
        Slideshow.create({
          image: img,
        })
      )
    );

    res.status(201).json(createdSlides);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

/* ================= DELETE ================= */

router.delete("/:id", async (req, res) => {
  try {
    await Slideshow.findByIdAndDelete(req.params.id);

    res.json({
      message: "Slide deleted",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

export default router;

