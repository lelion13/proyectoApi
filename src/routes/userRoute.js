import express from "express";
import {create, get} from "../controllers/userController.js";

//creamos un enrutador

const userRoute = express.Router();

//endpoints
//post
userRoute.post("/create", create);

//get
userRoute.get("/getAll", get);

export default userRoute;