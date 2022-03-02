import './styles/expenseComponent.css'
import expence from './logic/expence';

function ExpenceComponent(props: expence){
    return(
        <tr>
            <td>
                {props.title}
            </td>
            <td>
                {props.amount}
            </td>
            <td>
                {props.description}
            </td>
        </tr>
    );
}

export default ExpenceComponent