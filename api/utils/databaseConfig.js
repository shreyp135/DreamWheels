import { MongoClient } from "mongodb";
import dotenv from "dotenv";

//env variables
dotenv.config();

// Connection URL
const url = process.env.ATLAS_URL;
const client = new MongoClient(url);

// Database Name
const dbName = "DreamWheels";
let db;

//connection to the database
export const connectMongo = async () =>{
   await client.connect({wtimeoutMS: 2500});
  console.log("Connected successfully to MongoDB server");
  db = client.db(dbName);
};

export default db;
