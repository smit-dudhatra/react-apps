import { useState } from "react";
import { ExpenseList } from "./components/ExpenseList/ExpenseList";
import { NewExpense } from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: Math.random(),
    title: "Exp 1",
    amount: 100,
    date: new Date(2020, 7, 14),
  },
  {
    id: Math.random(),
    title: "Exp 2",
    amount: 200,
    date: new Date(2021, 7, 14),
  },
  {
    id: Math.random(),
    title: "Exp 3",
    amount: 300,
    date: new Date(2022, 7, 14),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const saveExpense = (data) => {
    setExpenses((prevValue) => [...prevValue, { ...data, id: Math.random() }]);
  };

  const [editId, setEditId] = useState(0);

  const editClick = (id) => {
    console.log("app js edit id");
    // setEditId((oldEditId) => console.log(id, oldEditId));
    setEditId((oldEditId) => Math.random());
    // setEditId(id);
  };
  console.log(editId);
  const deleteClick = (id) => {
    console.log("app js delete id");
    setEditId(id);

    const expensesAfterDeletion = expenses.filter((expense) => {
      return expense.id != id;
    });

    setExpenses((prevValue) => [...expensesAfterDeletion]);
  };

  return (
    <div>
      <NewExpense onSaveExpense={(data) => saveExpense(data)} editId={editId} />
      <ExpenseList
        expenses={expenses}
        onItemEditClick={(id) => editClick(id)}
        onItemDeleteClick={(id) => deleteClick(id)}
      />
    </div>
  );
}

export default App;
