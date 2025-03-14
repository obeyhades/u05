import mongoose from "mongoose";
import { userModel } from "../models/userModels";
import { Request, Response } from "express";

// create user
const createUser = async (req: Request, res: Response): Promise<void> => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ username });
    if (existingUser) {
      res.status(201).json({ message: "user exist" });
      return;
    }

    const newUser = new userModel({ username, email, password });
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
    res.status(500).json({ message: "Could not fetch user! " });
  }
};

//Update user
const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
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
