import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from "./Card";


const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  const [amount, setAmount] =useState(props.amount)

//  console.log("ExpenseItem evaluated by React")

 const addprice = () =>{
  setAmount(amount+100)
  console.log(amount)
 }

  const deleteButton = () =>{
   setTitle('updated');
    console.log(title)
  }
    return (       
      <Card className="expense-item"> 
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <h2>{props.locationOfExpenditure}</h2>
        <div className='expense-item__price'>${props.amount}</div>
        {/* <button className="expense-item__delete" onClick={clickhandler} >Change Title</button> */}
        <button className="expense-item__add" onClick={addprice}>Update Expense</button>
        {/* <button className='expense-item__delete' onClick={deleteButton}>DELETE</button> */}
        </div>
      </Card>    
  );
}

export default ExpenseItem;
