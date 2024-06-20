import { Router } from "express";
import { getDealershipCars } from "../controllers/dealershipController.js";
import { userAuth } from "../utils/middlewares.js";

const router = Router();

router.get("/cars", userAuth, getDealershipCars);

export default router;
