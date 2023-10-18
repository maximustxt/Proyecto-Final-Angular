import mongoose from "mongoose"; // importamos mongoose para crear la conexion a la DB.
require("dotenv").config(); // para usar debemos installar npm i dotenv.

const { KEY_MONGO } = process.env;

//- Configuracion Para conectar la base de datos:
export const connectDB = async () => {
  try {
    await mongoose.connect(`${KEY_MONGO}`);
    console.log("Conexión a la base de datos establecida");
  } catch (error: any) {
    console.error("Error al conectar a la base de datos:", error.message);
  }
};
