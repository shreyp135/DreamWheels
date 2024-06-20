import { Router } from "express";
import { getCars, getCarsInDealership, newCar } from "../controllers/carController.js";
import { userAuth } from "../utils/middlewares.js";

const router = Router();

router.get("/", getCars);
router.get("/dealership/:dealershipId", getCarsInDealership);
router.post("/", userAuth, newCar);

export default router;
