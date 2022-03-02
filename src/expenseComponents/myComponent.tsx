import { useState } from "react";
import expence from "./logic/expence";
import expenseReporitory from "./logic/expenseRepository";
import ExpenseTable from "./expenseTable";
import Modal from "./modal";
import NewExpenseFrom from "./newExpenseForm";

const repos = new expenseReporitory();

function MyComponent(){
    const [expences, setRepos] = useState(repos.expenses);
    const [show, setShow] = useState(false);
    const [formState, setFormState] = useState({title: '', amount: 0, desc: ''});
    const [modalId, setModelaId] = useState(0);
    
    const onClick = ()=>{
        setFormState({title: '', amount: 0, desc: ''});
        setShow(true);
    }

    const onCloseClick = ()=>{
        setFormState({title: '', amount: 0, desc: ''});
        setShow(false);
    }

    const onSubmitClicked = (event: any) => {
        event.preventDefault();
        let newExpense = new expence(formState.title, formState.amount, formState.desc);
        repos.add(newExpense);
        setRepos(repos.expenses);
        setShow(false);
        setModelaId(modalId + 1);
    }

    return(
        <div style={{width: '33%', margin: 'auto'}}>
            <h1>My expenses</h1>
            <button onClick={onClick}>Add expense</button>
            <Modal key={modalId} title='New expense' show={show} onCloseClick={onCloseClick} component={<NewExpenseFrom key="1" state={formState} onAction={onSubmitClicked} />}/>
            <ExpenseTable expenses={expences} />
        </div>
    )
}

export default MyComponent;