"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class expenseReporitory {
    constructor() {
        this.expenses = [];
    }
    add(expense) {
        this.expenses.push(expense);
    }
}
exports.default = expenseReporitory;
