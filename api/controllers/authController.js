import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createUser, findUserByEmail } from "../models/user.js";
import { createDealership, findDealershipByEmail } from "../models/Dealership.js";
import { asyncHandler } from "../utils/errorHandlers.js";
import dotenv from "dotenv";

dotenv.config();

export const signupUser = asyncHandler(async (req, res) => {
  const { email, password, location, info } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);
  const user = await createUser({ email, password: hashedPassword, location, info });
  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
  res.status(201).json({ user, token });
});

export const signupDealership = asyncHandler(async (req, res) => {
  const { email, password, name, location, info } = req.body;
  const hashedPassword = await bcrypt.hash(password, 8);
  const dealership = await createDealership({ email, password: hashedPassword, name, location, info });
  const token = jwt.sign({ email: dealership.email }, process.env.JWT_SECRET);
  res.status(201).json({ dealership, token });
});

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error("Invalid credentials");
  }
  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
  res.json({ user, token });
});

export const loginDealership = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const dealership = await findDealershipByEmail(email);
  if (!dealership || !(await bcrypt.compare(password, dealership.password))) {
    throw new Error("Invalid credentials");
  }
  const token = jwt.sign({ email: dealership.email }, process.env.JWT_SECRET);
  res.json({ dealership, token });
});
