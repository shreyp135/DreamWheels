import dbm from "../utils/databaseConfig.js";

//function to create an admin
export const createAdmin = async (data) => {
  const result = await dbm.collection("admins").insertOne(data);
  return result.ops[0]._id;
};

//function to fetch the details of admin
export const findAdminById = async (id) => {
  return await dbm.collection("admins").findOne({ id });
};
