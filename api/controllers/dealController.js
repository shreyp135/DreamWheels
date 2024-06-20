import { createDeal, getDealsByDealership } from "../models/Deal.js";
import { asyncHandler } from "../utils/errorHandling.js";

export const getDealsInDealership = asyncHandler(async (req, res) => {
  const { dealershipId } = req.params;
  const deals = await getDealsByDealership(dealershipId);
  res.json(deals);
});

export const newDeal = asyncHandler(async (req, res) => {
  const deal = await createDeal(req.body);
  res.status(201).json(deal);
});
