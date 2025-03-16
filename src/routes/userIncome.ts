import express, {Request, Response } from "express";
import { createIncome, getUserIncome, updateIncome} from "../controllers/incomeController";


const router = express.Router()


router.post("/", createIncome)
router.get("/:userId", getUserIncome)
router.put("/:incomeId", updateIncome)




export { router as userIncome }