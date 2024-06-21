import jwt from "jsonwebtoken";
import { findUserByEmail } from "../models/user.js";
import dotenv from "dotenv";

dotenv.config();

export const userAuth = async (req, res, next) => {
  const token = req.header("Authorization");
  try {
    const ver = jwt.verify(token, process.env.JWT_SECRET);
    const user = await findUserByEmail(ver.email);
    if (!user) 
        throw new Error();
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorised" });
  }
};
