import express, {Request, Response } from "express";
import { userModel } from "../models/userModels"
import { createUser, deleteUser, getUsers, getUserById,updateUser } from "../controllers/userControllers";


const router = express.Router()

router.post("/", createUser)
router.get("/", getUsers)
router.get("/")
router.delete("/", deleteUser)

router.get('/:id', getUserById)
router.put("/:id", updateUser)



export { router as userRouter }