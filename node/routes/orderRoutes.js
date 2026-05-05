import express from "express";
import {
  placeOrder,
  getOrders,
  updateOrderStatus
} from "../controllers/orderController.js";

const router = express.Router();


router.post("/place", placeOrder);


router.get("/:userId", getOrders);


router.put("/:id", updateOrderStatus);

export default router;