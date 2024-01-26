import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';
import Card from "./Card";


const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)

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
        <button className='expense-item__delete' onClick={deleteButton}>Delete</button>
        </div>
      </Card>    
  );
}

export default ExpenseItem;
