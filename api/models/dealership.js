import { db } from "../utils/database.js";

//function to create a dealership
export const createDealership = async (data) => {
  const result = await db.collection("dealerships").insertOne(data);
  return result.ops[0]._id;
};

//function to fetch the details of dealership
export const findDealershipByEmail = async (email) => {
  return await db.collection("dealerships").findOne({ email });
};
