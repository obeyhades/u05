"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.savingModels = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const savingSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
        require: true,
    },
    goalName: { type: String, required: true },
    targetAmount: { type: Number, default: 0 },
    currentSavings: { type: Number, default: 0 },
}, { timestamps: true });
exports.savingModels = mongoose_1.default.model("savingGoal", savingSchema);
