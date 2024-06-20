import {db} from "../utils/database.js";

//function to create an user
export const createUser = async (data) => {
  const result = await db.collection("users").insertOne(data);
  return result.ops[0]._id;
};

//function to fetch the details of user
export const findUserByEmail = async (email) => {
  return await db.collection("users").findOne({email});
};
