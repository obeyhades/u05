import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    description: { type: String },
  },
  { timestamps: true }
);

export const expenseModel = mongoose.model("Expense", expenseSchema);
