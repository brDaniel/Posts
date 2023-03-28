import mongoose from "mongoose";
import { MONGOOD_URI } from "./config.js";

export async function connectDB() {
  try {
    const db = await mongoose.connect(MONGOOD_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("BASE DE DATOS CONECTADA");
  } catch (error) {
    console.error(error);
  }
}
