import { useState, useEffect } from "react";
import { ExpenseForm } from "./ExpenseForm/ExpenseForm";

export const NewExpense = (props) => {
  console.log("nexw exxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  //   const [editId, setEditId] = useState(props.editId ? props.editId : 0);
  const [showForm, setShowForm] = useState(false);
  const [elementEditId, setElementEditId] = useState(props.editId);

  const saveFormData = (formData) => {
    // console.log(formData)
    setShowForm(false);
    props.onSaveExpense(formData);
  };

  console.log("new expense Edit");
  //   console.log(props.editId);
  console.log(elementEditId);
  console.log(props.editId);
  //   console.log(props.editId ? "yes" : " no");
  //   console.log(showForm);

  useEffect(() => {
    setShowForm((oldValue) => (props.editId > 0 ? true : false));
  }, []);
  console.log(showForm);

  const button = (
    <button
      onClick={() => {
        setShowForm(!showForm);
      }}
    >
      Add New Expense
    </button>
  );

  const form = (
    <ExpenseForm
      onCancelClick={(data, event) => {
        setShowForm(false);
      }}
      onSaveClick={(data) => saveFormData(data)}
    />
  );

  return <div>{showForm ? form : button}</div>;
};
