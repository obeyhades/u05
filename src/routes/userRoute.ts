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
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

router.post("/login", logIn);

  
export { router as userRouter }; 
 