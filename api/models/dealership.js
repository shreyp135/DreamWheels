import dbm from "../utils/databaseConfig.js";

//function to create a dealership
export const createDealership = async (data) => {
  const result = await dbm.collection("dealerships").insertOne(data);
  return result.ops[0]._id;
};

//function to fetch the details of dealership
export const findDealershipByEmail = async (email) => {
  return await dbm.collection("dealerships").findOne({ email });
};
