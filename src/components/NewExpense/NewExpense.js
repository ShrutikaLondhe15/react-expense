import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "../Expenses/ExpenseForm";

const NewExpense = (props) =>{

    const [isEditing, setIsEditing] = useState(false);

    const SaveExpenseHandler = (enteredExpenseData) =>{
        const expensedata={
        ...enteredExpenseData,
        id: Math.random().toString()
        }
         //console.log(expensedata)

        props.onAddExpense(expensedata);
        setIsEditing(false);
    }
    const startEditingHandler = () => {
        setIsEditing(true);
      };

      const stopEditingHandler = () => {
        setIsEditing(false);
      };



      return (    <div className='new-expense'>
    {!isEditing && (
      <button onClick={startEditingHandler}>Add New Expense</button>
    )}
    {isEditing && (
      <ExpenseForm
        onSaveExpenseData={SaveExpenseHandler}
        onCancel={stopEditingHandler}
      />
    )}
  </div>)
}

export default NewExpense;