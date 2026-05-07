import mongoose from "mongoose";

const homeContentSchema = new mongoose.Schema(
  {
    homeSlider: { type: [String], default: [] },
    categorySlider: { type: [String], default: [] },
    adsBanner: { type: [String], default: [] },
    promoSlider: { type: [String], default: [] },

    megaSale: {
      title: String,
      discount: String,
      image: String,
    },

    flashSale: {
      endTime: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model("HomeContent", homeContentSchema);