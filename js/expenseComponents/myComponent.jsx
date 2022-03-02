"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const expence_1 = __importDefault(require("./logic/expence"));
const expenseRepository_1 = __importDefault(require("./logic/expenseRepository"));
const expenseTable_1 = __importDefault(require("./expenseTable"));
const modal_1 = __importDefault(require("./modal"));
const newExpenseForm_1 = __importDefault(require("./newExpenseForm"));
const repos = new expenseRepository_1.default();
function MyComponent() {
    const [expences, setRepos] = (0, react_1.useState)(repos.expenses);
    const [show, setShow] = (0, react_1.useState)(false);
    const [formState, setFormState] = (0, react_1.useState)({ title: '', amount: 0, desc: '' });
    const [modalId, setModelaId] = (0, react_1.useState)(0);
    const onClick = () => {
        setFormState({ title: '', amount: 0, desc: '' });
        setShow(true);
    };
    const onCloseClick = () => {
        setFormState({ title: '', amount: 0, desc: '' });
        setShow(false);
    };
    const onSubmitClicked = (event) => {
        event.preventDefault();
        let newExpense = new expence_1.default(formState.title, formState.amount, formState.desc);
        repos.add(newExpense);
        setRepos(repos.expenses);
        setShow(false);
        setModelaId(modalId + 1);
    };
    return (<div style={{ width: '33%', margin: 'auto' }}>
            <h1>My expenses</h1>
            <button onClick={onClick}>Add expense</button>
            <modal_1.default key={modalId} title='New expense' show={show} onCloseClick={onCloseClick} component={<newExpenseForm_1.default key="1" state={formState} onAction={onSubmitClicked}/>}/>
            <expenseTable_1.default expenses={expences}/>
        </div>);
}
exports.default = MyComponent;
