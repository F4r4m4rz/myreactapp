"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const expence_1 = __importDefault(require("./expence"));
class expenseReporitory {
    constructor() {
        this.expenses = [
            new expence_1.default("exp1", 1000, "desc1"),
            new expence_1.default("exp2", 2000, "desc2"),
            new expence_1.default("exp3", 3000, "desc3"),
        ];
    }
    add(expense) {
        this.expenses = this.expenses.concat(expense);
    }
}
exports.default = expenseReporitory;
