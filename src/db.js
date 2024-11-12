import mongoose from "mongoose";
import {MONGODB_URI} from "./config.js"

//crear la conexion con la base de datos
export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log ("Conectado a la base de datos");
    } catch (error) {
        console.log("Erro al conectar la base de datos", error);
        process.exit(1);
        
    }
};