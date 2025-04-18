"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.savingGoalRoutes = void 0;
const express_1 = __importDefault(require("express"));
const savingConrtoller_1 = require("../controllers/savingConrtoller");
const router = express_1.default.Router();
exports.savingGoalRoutes = router;
router.post("/", savingConrtoller_1.createSaving);
router.get("/:userId", savingConrtoller_1.getUserSaving);
router.put("/:goalId", savingConrtoller_1.updateSavingGoal);
router.delete("/:goalId", savingConrtoller_1.deleteSavingGoal);
