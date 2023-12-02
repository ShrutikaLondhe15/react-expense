import './ExpenseItem.css'

function ExpenseItem() {
    return (<div className="expense-item">
        <div>March 28th 2021</div> 
        <div className="expense-item__description">
            <h2>car insurance</h2>
            <h2>Car ShowRoom</h2>
        </div>
        <div className="expense-item__price">$120.70</div>
    </div>);
}
export default ExpenseItem;