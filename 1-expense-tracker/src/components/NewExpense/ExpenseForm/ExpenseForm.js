import { useState } from "react";

export const ExpenseForm  = (props) => {

    const [name , setName] = useState('');
    const [date , setDate] = useState('');
    const [amount , setAmount] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();

        props.onSaveClick({'title': name , 'date' : new Date(date),'amount' : amount})
    }

    const onCancelClick = (event) => {
        props.onCancelClick('heee' , event.target);
    }


    return (
        
        <form onSubmit={submitHandler}>
            <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)}></input>
            <br />
            <input type="date" name="date" value={date} onChange={(event) => setDate(event.target.value)}></input>
            <br />
            <input type="number" name="amount" value={amount} onChange={(event) => {setAmount(event.target.value)}}></input>
            <br />

            <button type="submit">Save</button>
            <button onClick={(event) => onCancelClick(event)}>Cancel</button>
        </form>
        
    )
    
}