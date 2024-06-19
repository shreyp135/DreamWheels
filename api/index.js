import dotenv from "dotenv";
import express from "express";
import { connectMongo } from "./utils/databaseConfig.js";

//env variables
dotenv.config();

//express app config
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//starting the server & database connection
const port = process.env.PORT;
try{
connectMongo()
app.listen(port, () => {
  console.log(`server has started on port ${port} `);
});

} catch(err){
  console.log(err);
}