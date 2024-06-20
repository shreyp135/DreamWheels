import { Router } from "express";
import { signupUser, signupDealership, loginUser, loginDealership } from "../controllers/authController.js";

const router = Router();

router.post("/signup/user",signupUser);
router.post("/signup/dealership", signupDealership);
router.post("/login/user", loginUser);
router.post("/login/dealership", loginDealership);

export default router;
