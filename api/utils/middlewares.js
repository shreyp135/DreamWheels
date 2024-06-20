import jwt from "jsonwebtoken";
import { findUserByEmail } from "../models/user.js";
import dotenv from "dotenv";

dotenv.config();

export const userAuth = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await findUserByEmail(decoded.email);
    if (!user) 
        throw new Error();
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Please authenticate" });
  }
};
