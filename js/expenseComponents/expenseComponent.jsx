"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./styles/expenseComponent.css");
function ExpenceComponent(props) {
    return (<tr>
            <td>
                {props.title}
            </td>
            <td>
                {props.amount}
            </td>
            <td>
                {props.description}
            </td>
        </tr>);
}
exports.default = ExpenceComponent;
