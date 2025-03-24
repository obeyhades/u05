import mongoose from "mongoose";
import { Request, Response } from "express";
import { expenseModel } from "../models/expenseModels";

//crate expense
const createExpense = async (req: Request, res: Response): Promise<void> => {
  const { userId, amount, category, description } = req.body;

  try {
    const newExpense = new expenseModel({
      userId,
      amount,
      category,
      description,
    });
    await newExpense.save();

    res.status(201).json({ message: "Expense added", expense: newExpense });
    return;
  } catch (error) {
    console.error(error);
  }
};

//get expense

const getUserExpenses = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params;
  try {
    const expenses = await expenseModel.find({ userId: userId });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: "error, could not find expenses!" });
  }
};

//update expense
const updateExpense = async (req: Request, res: Response): Promise<void> => {
  const { expenseId } = req.params;

  try {
    const updateExpense = await expenseModel.findByIdAndUpdate(
      expenseId,
      req.body,
      { new: true }
    );

    if (!updateExpense) {
      res.status(404).json({ message: "Expense not found" });
    }

    res.json(updateExpense);
  } catch (error) {
    res.status(500).json({ message: "Could not update expense" });
  }
};

//delete expense
const deleteExpense = async (req: Request, res: Response): Promise<void> => {
  const { expenseId } = req.params;

  try {
    const deleteExpense = await expenseModel.findByIdAndDelete(expenseId);

    if (!deleteExpense) {
      res.status(404).json({ message: "Expsense not found" });
      return;
    }

    res.json({ message: "Expense deleted", expense: deleteExpense });
  } catch (error) {
    res.status(500).json({ message: "Could not delete expense" });
  }
};

export { createExpense, getUserExpenses, updateExpense, deleteExpense };
