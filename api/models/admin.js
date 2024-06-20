import { db } from "../utils/database.js";

//function to create an admin
export const createAdmin = async (data) => {
  const result = await db.collection("admins").insertOne(data);
  return result.ops[0]._id;
};

//function to fetch the details of admin
export const findAdminById = async (id) => {
  return await db.collection("admins").findOne({ id });
};
