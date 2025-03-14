import express, {Request, Response } from "express";
import { createIncome } from "../controllers/incomeController";


const router = express.Router()


router.post("/", createIncome);


export { router as userIncome }