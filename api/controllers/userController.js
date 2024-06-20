import { findUserByEmail } from "../models/user.js";
import { asyncHandler } from "../utils/errorHandlers.js";

export const getUserVehicles = asyncHandler(async (req, res) => {
  const user = await findUserByEmail(req.user.email);
  res.json(user.vehicle_info);
});
