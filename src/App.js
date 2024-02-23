// App.js
import React, { useState } from 'react';
import ExpenseDetails from './components/ExpenseDetails';
import './components/ExpenseItem.css'
import NewExpense from './components/NewExpense/NewExpense';


  const dummyexpenses = [
    {
      id: 'e1',
      date: new Date(2023, 9, 13),
      title: "Food",
      amount: 50,
      locationOfExpenditure: "Hotel",
    },
    {
      id: 'e2',
      date: new Date(2023, 9, 13),
      title: "Petrol",
      amount: 100,
      locationOfExpenditure: "Petrol Pump",
    },
    {
      id: 'e3',
      date: new Date(2023, 9, 13),
      title: "Movies",
      amount: 200,
      locationOfExpenditure: "Inox",
    }
  ];


  const App = () => {
  
  const [expenses,setExpenses] =useState(dummyexpenses);

  const addExpenseHandler = (expense) =>{
    setExpenses(prevExpense => {
      return [expense, ...prevExpense]
    })
}

  return (
    <div>
      <div className="expense-item">
        <div className="expense-item__description">
          <h1>Expense Item!</h1>
        </div>  
      </div>
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
      </div>
      <div>
        <ExpenseDetails expenses={expenses} />
      </div>
    
    </div>
  );
}

export default App;
