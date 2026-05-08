import express from "express";
import {
  getHomeContent,
  updateHomeContent,
} from "../controllers/homeContentController.js";

const router = express.Router();

router.get("/", getHomeContent);
router.put("/", updateHomeContent);

export default router;