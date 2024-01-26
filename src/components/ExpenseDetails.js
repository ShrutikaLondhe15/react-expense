import React, {useState} from "react";
import "./ExpenseDetails.css";
import Card from './Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./Expenses/ExpenseFilter";


  
const ExpenseDetails = (props) =>{
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  
  return (   
    <Card className="expenses">
     <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {props.expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          locationOfExpenditure={expense.locationOfExpenditure}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default ExpenseDetails;
