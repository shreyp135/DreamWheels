import { db } from "../utils/database.js";

//function to create a car
export const createCar = async (data) => {
  const result = await db.collection("cars").insertOne(data);
  return result.ops[0]._id;
};

//function to fetch all cars
export const getAllCars = async () => {
  return await db.collection("cars").find({}).toArray();
};

//function to fetch all cars in a dealership
export const getCarsByDealership = async (id) => {
  return await db.collection("cars").find({ id }).toArray();
};
