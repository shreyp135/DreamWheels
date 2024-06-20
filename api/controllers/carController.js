import { createCar, getAllCars, getCarsByDealership } from "../models/Car.js";
import { asyncHandler } from "../utils/errorHandling.js";

export const getCars = asyncHandler(async (req, res) => {
  const cars = await getAllCars();
  res.json(cars);
});

export const getCarsInDealership = asyncHandler(async (req, res) => {
  const { dealershipId } = req.params;
  const cars = await getCarsByDealership(dealershipId);
  res.json(cars);
});

export const newCar = asyncHandler(async (req, res) => {
  const car = await createCar(req.body);
  res.status(201).json(car);
});
