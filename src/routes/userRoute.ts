import express, {Request, Response } from "express";
import { userModel } from "../models/userModels"
import { createUser, deleteUser, getUsers, getUserById,updateUser, } from "../controllers/userControllers";
import { logIn } from "../controllers/login"

const router = express.Router()

router.get("/")
router.post("/", createUser)
router.get("/", getUsers)
router.delete("/", deleteUser)
router.get('/:id', getUserById)
router.put("/:id", updateUser)


router.post("/login", logIn)


export { router as userRouter }