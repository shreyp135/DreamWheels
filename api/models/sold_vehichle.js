import { db } from "../utils/database.js";

export const createSoldVehicle = async (vehicleData) => {
  const result = await db.collection("sold_vehicles").insertOne(vehicleData);
  return result.ops[0]._id;
};
