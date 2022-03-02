"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ExpenceComponent(props) {
    return (<div>
            <ul>
                <li>
                    <div>
                        Title
                    </div>
                    <div>
                        {props.expense.title}
                    </div>
                </li>
                <li>
                    <div>
                        Amount
                    </div>
                    <div>
                        {props.expense.amount}
                    </div>
                </li>
                <li>
                    <div>
                        Desc
                    </div>
                    <div>
                        {props.expense.description}
                    </div>
                </li>
            </ul>
        </div>);
}
exports.default = ExpenceComponent;
