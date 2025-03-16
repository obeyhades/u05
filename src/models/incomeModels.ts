import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
    amount: {type: Number, require: true},
    category: {type: String, require: true},

}, { timestamps: true });

export const incomeModels = mongoose.model("income", incomeSchema);  