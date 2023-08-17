import express from "express";
import multer from "multer";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { UserController } from "./controllers/index.js";

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log("DB Ok");
    })
    .catch((err) => console.log("DB error", err));

const app = express();


app.use(express.json());
app.use(cors());

app.post('/auth/reqister', UserController.register)


app.listen(process.env.PORT || 4444, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("Server Ok");
});