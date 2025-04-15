import express, { Request, Response } from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  getUserById,
  updateUser,
} from "../controllers/userControllers";
import  logIn  from "../controllers/login";
import authenticateToken from "../middleware/authenticateToken";

const router = express.Router();


router.post("/", createUser);
router.post("/", getUsers);
router.get("/:id",authenticateToken, getUserById);
router.put("/:id",authenticateToken, updateUser);
router.delete("/:id",authenticateToken, deleteUser);

router.post("/login", logIn);

 
export { router as userRouter }; 
