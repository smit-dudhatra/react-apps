import { useState } from "react"
import { ExpenseForm } from "./ExpenseForm/ExpenseForm"

export const NewExpense = (props) => {

    const [showForm,setShowForm] = useState(false);
    
    const saveFormData = (formData) => {
        // console.log(formData)
        setShowForm(false)
        props.onSaveExpense(formData)
    }
    
    const button = <button onClick={() => {setShowForm(!showForm)}}>Add New Expense</button>
    const form = <ExpenseForm onCancelClick={(data , event) => {setShowForm(false)}} onSaveClick={(data) => saveFormData(data)}/>

    return (
        <div>
            {showForm ? form : button}
        </div>
        
    )

}