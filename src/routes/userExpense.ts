import express, {Request, Response } from "express";
import { createExpense, getUserExpenses, updateExpense, deleteExpense  } from "../controllers/expenseContoller";


const router = express.Router()

router.post("/", createExpense)
router.get("/:userId", getUserExpenses)
router.put("/:expenseId", updateExpense)
router.delete("/:expenseId", deleteExpense)


export { router as expenseRoutes };

 
 