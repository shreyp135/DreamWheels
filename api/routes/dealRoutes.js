import { Router } from "express";
import { getDealsInDealership, newDeal } from "../controllers/dealController.js";
import { userAuth } from "../utils/middlewares.js";

const router = Router();

router.get("/dealership/:dealershipId", getDealsInDealership);
router.post("/", userAuth, newDeal);

export default router;
