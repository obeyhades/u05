"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const db_1 = __importDefault(require("./db"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoute_1 = require("./src/routes/userRoute");
const userIncome_1 = require("./src/routes/userIncome");
const userExpense_1 = require("./src/routes/userExpense");
const cors_1 = __importDefault(require("cors"));
const userSaving_1 = require("./src/routes/userSaving");
dotenv_1.default.config();
(0, db_1.default)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8080;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: [process.env.CLIENT_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use("/user", userRoute_1.userRouter);
app.use("/income", userIncome_1.userIncome);
app.use("/expense", userExpense_1.expenseRoutes);
app.use("/savingGoals", userSaving_1.savingGoalRoutes);
mongoose_1.default.connect("mongodb+srv://ObeyHades:Hejsan145@u05.vlb7i.mongodb.net/");
app.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}`);
});
