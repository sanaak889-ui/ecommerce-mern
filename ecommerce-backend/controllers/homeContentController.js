import HomeContent from "../models/homeContent.js";

// GET HOME CONTENT
export const getHomeContent = async (req, res) => {
  try {
    const data = await HomeContent.findOne();

    res.status(200).json(
      data || {
        homeSlider: [],
        categorySlider: [],
        adsBanner: [],
        promoSlider: [],
        megaSale: {},
        flashSale: {},
      }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE HOME CONTENT (ADMIN)
export const updateHomeContent = async (req, res) => {
  try {
    let data = await HomeContent.findOne();

    if (!data) {
      data = new HomeContent(req.body);
    } else {
      // safer update
      data.set(req.body);
    }

    const updated = await data.save();

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};