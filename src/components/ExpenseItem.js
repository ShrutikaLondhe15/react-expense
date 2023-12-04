import './ExpenseItem.css'

function ExpenseItem(props){
    // const expenseDate= new Date(2023, 2, 28);
    // const expenseTitle= "Car Insurance";
    // const expensePrice=294.4;
    // const LocationOfExpenditure="Mumbai"


    return (<div className="expense-item">
        <div>{props.date.toISOString()}</div> 
        <div className="expense-item__description">
            <h2>{props.title}</h2>
        </div>
        <div className='expense-item__location'>{props.location}</div>
        <div className="expense-item__price">{props.amount}</div>
    </div>);
}
export default ExpenseItem;