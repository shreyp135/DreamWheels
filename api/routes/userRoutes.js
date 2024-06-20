import { Router } from "express";
import { getUserVehicles } from "../controllers/userController.js";
import { userAuth } from "../utils/middlewares.js";

const router = Router();

router.get("/vehicles", userAuth, getUserVehicles);

export default router;
