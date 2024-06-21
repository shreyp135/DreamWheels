//This file can be used to initialise the database with sample data from faker.js 
//Just install npm packages and run node init.js from the project root directory

import faker from "faker";
import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

//env 
dotenv.config();

//database connection
const url = process.env.ATLAS_URL;
const client = new MongoClient(url);

const initData = async () => {
  try {
    await client.connect();
    const db = client.db("DreamWheels");


    //sample users
    const users = [];
    for (let i = 0; i < 5; i++) {
      const password = await bcrypt.hash(faker.internet.password(), 1003);
      users.push({
        user_email: faker.internet.email(),
        user_info: {
          name: faker.name.findName(),
          phone: faker.phone.phoneNumber(),
        },
        password,
        vehicle_info: [],
      });
    }
    await db.collection("users").insertMany(users);

    //sample dealerships
    const dealerships = [];
    for (let i = 0; i < 5; i++) {
      const password = await bcrypt.hash(faker.internet.password(), 1003);
      dealerships.push({
        dealership_email: faker.internet.email(),
        dealership_name: faker.company.companyName(),
        password,
        phone: faker.phone.phoneNumber(),
        cars: [],
        deals: [],
        sold_vehicles: [],
      });
    }
    await db.collection("dealerships").insertMany(dealerships);

    //sample cars
    const cars = [];
    for (let i = 0; i < 5; i++) {
      cars.push({
        type: faker.vehicle.type(),
        name: faker.vehicle.model(),
        model: faker.vehicle.model(),
        car_info: {
          color: faker.vehicle.color(),
          mileage: faker.vehicle.fuel(),
        },
      });
    }
    await db.collection("cars").insertMany(cars);

    //sample deals
    const deals = [];
    for (let i = 0; i < 5; i++) {
      deals.push({
        car_id: cars[i].car_id,
        deal_info: {
          price: faker.commerce.price(),
          date: faker.date.recent(),
        },
      });
    }
    await db.collection("deals").insertMany(deals);

    //sample sold vehicles
    const soldVehicles = [];
    for (let i = 0; i < 5; i++) {
      soldVehicles.push({
        car_id: cars[i].car_id,
        vehicle_info: {
          owner: faker.name.findName(),
          sale_date: faker.date.past(),
        },
      });
    }
    await db.collection("sold_vehicles").insertMany(soldVehicles);

    // Update users and dealerships with vehicle and deal info
    const updatedUsers = users.map((user, index) => {
      user.vehicle_info.push(soldVehicles[index].vehicle_id);
      return user;
    });

    const updatedDealerships = dealerships.map((dealership, index) => {
      dealership.cars.push(cars[index].car_id);
      dealership.deals.push(deals[index].deal_id);
      dealership.sold_vehicles.push(soldVehicles[index].vehicle_id);
      return dealership;
    });

    for (const user of updatedUsers) {
      await db.collection("users").updateOne({ user_email: user.user_email }, { $set: user });
    }

    for (const dealership of updatedDealerships) {
      await db.collection("dealerships").updateOne({ dealership_email: dealership.dealership_email }, { $set: dealership });
    }

    console.log("database initialised successfully");
}catch(err)
{
    console.log(err);
}
};

initData();
