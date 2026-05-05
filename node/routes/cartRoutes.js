import express from "express";
import {
  addToCart,
  getCart,
  removeFromCart
} from "../controllers/cartController.js";

const router = express.Router();

// ➤ Add to Cart
router.post("/add", addToCart);

// ➤ Get User Cart
router.get("/:userId", getCart);

// ➤ Remove Item
router.delete("/:id", removeFromCart);

export default router;