import dbm from "../utils/databaseConfig.js";

//function to create a deal
export const createDeal = async (data) => {
  const result = await dbm.collection("deals").insertOne(data);
  return result.ops[0]._id;
};

//function to fetch the details of the deal
export const getDealsByDealership = async (id) => {
  return await dbm.collection("deals").find({ id }).toArray();
};
