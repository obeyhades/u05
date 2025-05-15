import express, { Express, Request, Response } from "express";
import mongoose from "mongoose";
import connectDB from "./db";
import dotenv from "dotenv";
import { userRouter } from "./src/routes/userRoute";
import { userIncome } from "./src/routes/userIncome";
import { expenseRoutes } from "./src/routes/userExpense";
import cors from "cors";
import { savingGoalRoutes } from "./src/routes/userSaving";

dotenv.config();
connectDB();

const app: Express = express();
const PORT: string | number = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    // origin: [process.env.CLIENT_URL! || "http://localhost:4200"],
    origin: "http://localhost:4200",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use("/user", userRouter);
app.use("/income", userIncome);
app.use("/expense", expenseRoutes); 
app.use("/savingGoals", savingGoalRoutes);

mongoose.connect("mongodb+srv://ObeyHades:Hejsan145@u05.vlb7i.mongodb.net/");

app.listen(PORT, () => {
  console.log(`Application is running on http://localhost:${PORT}`);
});
  