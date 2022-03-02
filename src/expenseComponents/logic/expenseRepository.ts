import expense from './expence'

class expenseReporitory {

    expenses : expense[] = [
        new expense("exp1", 1000, "desc1"),
        new expense("exp2", 2000, "desc2"),
        new expense("exp3", 3000, "desc3"),
    ];
    
    add(expense: expense){
        this.expenses = this.expenses.concat(expense);
    }

}

export default expenseReporitory