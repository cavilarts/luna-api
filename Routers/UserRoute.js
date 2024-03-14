import { Router } from "express";
import * as UserController from "../Controllers/UserController.js";
import { protect } from "../middleware/Auth.js";

const router = Router();

router.post("/import/all", UserController.importUsers);
router.post("/login", UserController.login);
router.post("/register", UserController.register);
router.put("/update", protect, UserController.updateUser);
router.put("/update/password", protect, UserController.changePassword);
router.delete("/", protect, UserController.deleteUser);

export default router;
