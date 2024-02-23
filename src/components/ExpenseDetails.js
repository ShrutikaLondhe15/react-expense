import React, { useState } from "react";
import "./ExpenseDetails.css";
import Card from "./Card";
//import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./Expenses/ExpenseFilter";
import ExpensesList from './Expenses/ExpenseList';
import ExpenseChart from './Expenses/ExpensesChart';
const ExpenseDetails = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {/* {props.expenses.map((expense) => (
      //   <ExpenseItem
      //     key={expense.id}
      //     title={expense.title}
      //     amount={expense.amount}
      //     locationOfExpenditure={expense.locationOfExpenditure}
      //     date={expense.date}
      //   />
      // ))} */}
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default ExpenseDetails;
