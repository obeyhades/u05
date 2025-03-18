import express, {Request, Response } from "express";
import { createSaving, getUserSaving,updateSavingGoal,deleteSavingGoal } from "../controllers/savingConrtoller";

const router = express.Router()

router.post("/", createSaving)
router.get("/:userId", getUserSaving) 
router.put("/:goalId", updateSavingGoal)
router.delete("/:goalId", deleteSavingGoal)


export { router as savingGoalRoutes }