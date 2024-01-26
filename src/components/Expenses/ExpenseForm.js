import React, { useState } from "react";
import "../Expenses/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setdate] = useState("");
  const [enteredloc, setLoc] = useState("");

  // const [userInput, setUserInput] = useState({
  //     enteredTitle:'',
  //     enteredAmount: '',
  //     enteredDate: ''
  // })

  const onclickHandler1 = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value
    // })
  };
  const onclickHandler2 = (event) => {
    setAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value
    // })
    // setUserInput((prevState)={
    //     return {...prevState, enteredTitle :event.target.value};
    // })
  };
  const onclickHandler3 = (event) => {
    setLoc(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredloc:event.target.value
    // })
  };

  const onclickHandler4 = (event) => {
    setdate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      loc: enteredloc,
      date: new Date(enteredDate),
    };
    
    props.onSaveExpenseData(expenseData);
    
    setEnteredTitle("");
    setAmount("");
    setdate("");
    setLoc("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Expense Item</label>
            <input
              onChange={onclickHandler1}
              type="text"
              value={enteredTitle}
            />
          </div>
          <div className="new-expense__control">
            <label>Expenditure Location</label>
            <input onChange={onclickHandler3} type="text" value={enteredloc} />
          </div>
          <div className="new-expense__control">
            <label>Expense Amount</label>
            <input
              onChange={onclickHandler2}
              type="text"
              value={enteredAmount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2023-09-09"
              max="2024-12-31"
              onChange={onclickHandler4}
              value={enteredDate}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
