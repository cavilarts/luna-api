import { Router } from "express";
import {
  importProducts,
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductTags,
} from "../Controllers/ProductsController.js";
import { protect } from "../middleware/Auth.js";

const router = Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.get("/all/tags", getProductTags);
router.post("/import", protect, importProducts);
router.post("/", protect, createProduct);
router.put("/:id", protect, updateProduct);
router.delete("/:id", protect, deleteProduct);

export default router;
