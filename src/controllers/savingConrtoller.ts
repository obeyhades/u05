import mongoose from "mongoose";
import { Request, Response } from "express";
import { savingModels } from "../models/savingModels";

//create saving
const createSaving = async (req: Request, res: Response): Promise<void> => {
  const { userId, goalName, targetAmount, currentSavings } = req.body;

  try {
    const newGoal = new savingModels({
      userId,
      goalName,
      targetAmount,
      currentSavings,
    });
    await newGoal.save();

    res.status(201).json({ message: "Saving goal added", goal: newGoal });
    return;
  } catch (error) {
    console.error(error);
  }
};

//get user saving
const getUserSaving = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;
  console.log(userId);

  try {
    const goal = await savingModels.find({ userId: userId });
    res.json(goal);
  } catch (error) {
    res.status(500).json({ message: "error, could not find your dreams :)" });
  }
};

//update saving
const updateSavingGoal = async (req: Request, res: Response): Promise<void> => {
  const { goalId } = req.params;

  try {
    const updatedGoal = await savingModels.findByIdAndUpdate(goalId, req.body, {
      new: true,
    });

    if (!updatedGoal) {
      res.status(404).json({ message: "saving goal not found" });
      return;
    }

    res.json(updatedGoal);
  } catch (error) {
    res.status(500).json({ message: "could not update saving goal" });
  }
};

//remove saving
const deleteSavingGoal = async (req: Request, res: Response): Promise<void> => {
  const { goalId } = req.params;
  try {
    const deletedGoal = await savingModels.findByIdAndDelete(goalId);

    if (!deletedGoal) {
      res.status(404).json({ message: "Saving goal not found" });
      return;
    }

    res.json({ message: "saving goal got deleted", goal: deletedGoal });
  } catch (error) {
    res.status(500).json({ message: "could not delete saving goal" });
  }
};

export { createSaving, getUserSaving, updateSavingGoal, deleteSavingGoal };
