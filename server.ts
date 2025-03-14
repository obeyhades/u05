import express, {Express, Request, Response } from "express";
import mongoose from "mongoose";
import connectDB from "./db";
import dotenv from "dotenv";
import { userRouter } from "./src/routes/userRoute";
import cors from "cors";



dotenv.config();
connectDB();

const app: Express = express();
const PORT: string| number = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded ({extended: true}));
app.use(cors({

    origin: "http://localhost:8080",
    methods: ["GET", "POST", "PUT", "DELETE"],

}
));

app.get("/", (req: Request, res: Response)=>{
    res.send("Test");
})

app.use("/user", userRouter)


mongoose.connect("mongodb+srv://ObeyHades:Hejsan145@u05.vlb7i.mongodb.net/")

app.listen(PORT,()=>{
    console.log(`Application is running on http://localhost:${PORT}`);
})