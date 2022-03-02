import './styles/expenseComponent.css'
import ExpenceComponent from './expenseComponent';
import expence from './logic/expence';

interface contract{
    expenses: expence[];
}

function ExpenseTable(props: contract){
    return(
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Amount</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {props.expenses.map((exp, index) =><ExpenceComponent key={index} title={exp.title} amount={exp.amount} description={exp.description} />)}
            </tbody>
        </table>
    );
}

export default ExpenseTable;