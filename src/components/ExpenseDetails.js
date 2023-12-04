import "./ExpenseItem.css";

function ExpenseDetails(props) {
  return (
    <div>
      <div className="expense-item__description">
        <h3>{props.title}</h3>
        <h3>{props.location}</h3>
      <div className="expense-item__price">{props.amount}</div>
    </div>
    </div>
  );
}

export default ExpenseDetails;
