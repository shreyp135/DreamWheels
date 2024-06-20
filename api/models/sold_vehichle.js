import dbm from "../utils/databaseConfig.js";

export const createSoldVehicle = async (vehicleData) => {
  const result = await dbm.collection("sold_vehicles").insertOne(vehicleData);
  return result.ops[0]._id;
};
