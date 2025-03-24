import mongoose from "mongoose";
import { userModel } from "../models/userModels";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import authenticateToken from "../middleware/authenticateToken";



// create user
const createUser = async (req: Request, res: Response): Promise<void> => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  console.log(salt);
  console.log(hashedPassword);
  
  const { username, email } = req.body

  try {
    const existingUser = await userModel.findOne({ username });
    if (existingUser) {
      res.status(201).json({ message: "user exist", user: req.user});
      return;
    }

    const newUser = new userModel({ username, email, password: hashedPassword });
    await newUser.save();
    res.json(newUser);
  } catch (error) {
    console.error(error);
  }
};

//Get all users
const getUsers = async (req: Request, res: Response): Promise<void> => {
  const { getUsers } = req.body;
  try {
    const users = await userModel.find(getUsers);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "error, could not find users!" });
  }
};

//Get a spec user
const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) res.status(404).json({ message: "User not found! " });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Could not fetch user!" });
  }
};

//Update user
const updateUser = async (req: Request, res: Response): Promise<void> => {
  console.log("datafromthemiddware", req.user)
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) res.status(404).json({ message: "Could not edit user!" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Could not fetch user! " });
  }
};

// Removes a user 
const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const { userid } = req.body;
  console.log(userid);

  const deleteUser = await userModel.findByIdAndDelete(userid);
  console.log(deleteUser);
  res.json(deleteUser);
};

export { deleteUser, createUser, getUsers, getUserById, updateUser };
