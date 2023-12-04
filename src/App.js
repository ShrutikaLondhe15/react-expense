import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Toilet Paper",
      amount: 10.76,
      location:"Mumbai",
      date: new Date(2023, 3, 23)
    },
    {
      title: "Car Insurance",
      amount: 294.76,
      location:"Delhi",
      date: new Date(2023, 3, 24)
    },
    {
      title: "new desktop",
      amount: 500,
      location: "Hyd",
      date: new Date(2023, 3, 22)
    },
    {
      title: "new books",
      amount: 294.76,
      location: "Solapur",
      date: new Date(2023, 3, 24)
    }
  ];

  return (
    
    <div>
      <h2>Lets get started!</h2>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index} 
          title={expense.title}
          amount={expense.amount}
          location={expense.location}
          date={expense.date}
        />
      ))}

   { /* 
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        location={expenses[0].location}
        date={expenses[0].date}
      ></ExpenseItem>
        <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        location={expenses[1].location}
        date={expenses[1].date}
      ></ExpenseItem>
        <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        location={expenses[2].location}
        date={expenses[2].date}
      ></ExpenseItem>
        <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        location={expenses[3].location}
        date={expenses[3].date}
      ></ExpenseItem> */}
    </div>
  );
}

export default App;
