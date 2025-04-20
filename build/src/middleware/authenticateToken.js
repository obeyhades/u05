"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers.authorization;
    const accessToken = authHeader === null || authHeader === void 0 ? void 0 : authHeader.split(" ")[1];
    console.log(accessToken);
    if (accessToken == null) {
        res.sendStatus(401);
        return;
    }
    if (!accessToken) {
        res.status(401).json({ message: "Access token not found" });
        return;
    }
    try {
        const verifiedToken = jsonwebtoken_1.default.verify(accessToken, process.env.ACCESS_TOKEN_SECRET || "");
        req.userId = verifiedToken.user._id;
        next();
    }
    catch (error) {
        res.status(403).json({ message: "Invalid token" });
        return;
    }
});
exports.authenticateToken = authenticateToken;
exports.default = exports.authenticateToken;
