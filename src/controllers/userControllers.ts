import { userModel } from "../models/userModels";
import { Request, Response } from "express";
import bcrypt from "bcrypt";


// create user
const createUser = async (req: Request, res: Response): Promise<void> => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  console.log(salt);
  console.log(hashedPassword);
  
  const { username, email } = req.body

  console.log(username, email)

  try {
    const existingUser = await userModel.findOne({ username });
    if (existingUser) {
      res.status(201).json({ message: "user exist", user: req.user});
      return;
    }
      // add if dont exist "e!exist"
    const newUser = new userModel({ username, email, password: hashedPassword });
    await newUser.save();
    res.json(newUser);
  } catch (error) { 
    console.error(error);
    res.status(500).json('something went wrong when creating the user')
  }
};

//Get all users
const getUsers = async (req: Request, res: Response): Promise<void> => {
  const { getUsers } = req.body;
  try {
    const limit = parseInt(req.query.limit as string) || 0; 
    const users = await userModel.find(getUsers).limit(limit);
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

  try {
      const user = await userModel.findById(req.params.id);
      if(!user) {
        res.status(404).json({message:"Could not find user!"})
        return;
      }

      if(req.body.username) user.username = req.body.username;
      if (req.body.email) user.email = req.body.email;
      if (req.body.password) {
        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(req.body.password, salt);
      }

      await user.save()
      res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Could not fetch user! " });
  } 
};
 
// Removes a user 
const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const  userid  = req.params.id;
 
  // add error code
  const deleteUser = await userModel.findByIdAndDelete(userid);
  console.log(deleteUser);
  res.json(deleteUser);
};

export { deleteUser, createUser, getUsers, getUserById, updateUser };
