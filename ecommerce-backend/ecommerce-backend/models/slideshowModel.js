import mongoose from "mongoose";

const slideshowSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Slideshow", slideshowSchema);

