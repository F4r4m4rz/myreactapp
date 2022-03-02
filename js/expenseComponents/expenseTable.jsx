"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./expenseComponent.css");
const expenseComponent_1 = __importDefault(require("./expenseComponent"));
function ExpenseTable(props) {
    return (<table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {props.expenses.map((exp, index) => <expenseComponent_1.default key={index} title={exp.title} amount={exp.amount} description={exp.description}/>)}
            </tbody>
        </table>);
}
exports.default = ExpenseTable;
