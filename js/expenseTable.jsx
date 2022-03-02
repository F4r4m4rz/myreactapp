"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const expence_1 = __importDefault(require("./expence"));
const expenseComponent_1 = __importDefault(require("./expenseComponent"));
const expences = [
    new expence_1.default("exp1", 1000, "desc1"),
    new expence_1.default("exp2", 2000, "desc2"),
    new expence_1.default("exp3", 3000, "desc3"),
];
function ExpenseTable() {
    return (<table>
            {expences.map(exp => <expenseComponent_1.default prop={exp}/>)}
        </table>);
}
exports.default = ExpenseTable;
