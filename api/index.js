import dotenv from "dotenv";
import express from "express";
import { connectMongo } from "./utils/databaseConfig.js";
import { errorHandler } from "./utils/errorHandlers.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import dealershipRoutes from "./routes/dealershipRoutes.js";
import carRoutes from "./routes/carRoutes.js";
import dealRoutes from "./routes/dealRoutes.js";


//env variables
dotenv.config();

//express app config
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/dealership", dealershipRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/deals", dealRoutes);


//error handling
app.use(errorHandler);


//starting the server & database connection
const port = process.env.PORT;
try {
    connectMongo()
    app.listen(port, () => {
      console.log(`server has started on port ${port} `);
    });

} catch(err){
    console.log(err);
}