import express from "express";
import {
  addProduct,
  getProducts,
  getProductById,
  deleteProduct
} from "../controllers/productController.js";

const router = express.Router();

// ➤ Add Product
router.post("/add", addProduct);

// ➤ Get All Products
router.get("/", getProducts);

// ➤ Get Single Product
router.get("/:id", getProductById);

// ➤ Delete Product
router.delete("/:id", deleteProduct);

export default router;