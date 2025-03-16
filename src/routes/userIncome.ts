import express, {Request, Response } from "express";
import { createIncome, getUserIncome, updateIncome, deleteIncome} from "../controllers/incomeController";


const router = express.Router()


router.post("/", createIncome)
router.get("/:userId", getUserIncome)
router.put("/:incomeId", updateIncome)
router.delete("/:incomeId", deleteIncome)




export { router as userIncome }