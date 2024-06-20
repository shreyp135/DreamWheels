import dbm from "../utils/databaseConfig.js";

//function to create a car
export const createCar = async (data) => {
  const result = await dbm.collection("cars").insertOne(data);
  return result.ops[0]._id;
};

//function to fetch all cars
export const getAllCars = async () => {
  return await dbm.collection("cars").find({}).toArray();
};

//function to fetch all cars in a dealership
export const getCarsByDealership = async (id) => {
  return await dbm.collection("cars").find({ id }).toArray();
};
