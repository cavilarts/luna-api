import { Router } from "express";
import {
  importCategories,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../Controllers/CategoryController.js";
import { protect } from "../middleware/Auth.js";

const router = Router();

router.get("/", getCategories);
router.post("/import", protect, importCategories);
router.post("/", protect, createCategory);
router.put("/:id", protect, updateCategory);
router.delete("/:id", protect, deleteCategory);

export default router;
