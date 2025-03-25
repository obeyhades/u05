import mongoose from "mongoose";
import { userModel } from "../models/userModels";
import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { log } from "node:console";

const logIn = async (req: Request, res: Response): Promise<void> => {
  const { username } = req.body;
 console.log(username);
 console.log(req.body.password);
 
 
  try {
    const user = await userModel.findOne({ username });
    if (!user) {
      res.status(401).json({ message: "Invalid credentials" }) 
      return;
    }
    if (!(await bcrypt.compare(req.body.password, user.password))) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET!);
    res.json({
      message: "Login successful",
      user_id: user?._id,
      user_name: user?.username,
      accessToken: accessToken,
    });
  } catch (error) {
    res.status(500).json({ message: "Error, could not log in" });
  }
};

export default logIn;
