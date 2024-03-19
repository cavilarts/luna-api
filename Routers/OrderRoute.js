import { Router } from "express";
import {
  createOrder,
  getUserOrders,
  getOrderById,
  deleteOrder,
  deleteAllOrders,
} from "../Controllers/OrderController.js";
import { protect } from "../middleware/Auth.js";

const router = Router();

router.post("/", protect, createOrder);
router.get("/", protect, getUserOrders);
router.get("/:id", protect, getOrderById);
router.delete("/:id", protect, deleteOrder);
router.delete("/", protect, deleteAllOrders);

export default router;
