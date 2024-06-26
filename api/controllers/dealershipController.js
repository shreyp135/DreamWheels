import { findDealershipByEmail } from "../models/Dealership.js";
import { asyncHandler } from "../utils/errorHandlers.js";

export const getDealershipCars = asyncHandler(async (req, res) => {
  const dealership = await findDealershipByEmail(req.user.email);
  res.json(dealership.cars);
});
