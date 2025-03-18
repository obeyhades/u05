import mongoose from "mongoose";

const savingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
    goalName: { type:String, require: true},
    targetAmount: { type: Number, default: 0},
    currentSavings: { type: Number, default: 0},

}, { timestamps: true });

export const savingModels = mongoose.model("savingGoal", savingSchema);