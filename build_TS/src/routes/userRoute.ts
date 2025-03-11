import express, {Request, Response } from "express";
import { userModel } from "../models/userModels"
import { createUser, deleteUser } from "../controllers/userControllers";

const router = express.Router()

router.post("/", createUser)
router.delete("/", deleteUser)

export { router as userRouter }