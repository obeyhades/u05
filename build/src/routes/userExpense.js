"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.expenseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const expenseContoller_1 = require("../controllers/expenseContoller");
const router = express_1.default.Router();
exports.expenseRoutes = router;
router.post("/", expenseContoller_1.createExpense);
router.get("/:userId", expenseContoller_1.getUserExpenses);
router.put("/:expenseId", expenseContoller_1.updateExpense);
router.delete("/:expenseId", expenseContoller_1.deleteExpense);
