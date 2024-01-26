import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) =>{

    const SaveExpenseHandler = (enteredExpenseData) =>{
        const expensedata={
        ...enteredExpenseData,
        id: Math.random().toString()
        }
        // console.log(expensedata)

        props.onAddExpense(expensedata);
    }



    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={SaveExpenseHandler} />
        </div>
    ) 
}

export default NewExpense;