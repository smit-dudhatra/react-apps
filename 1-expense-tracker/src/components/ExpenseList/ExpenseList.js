import { useState } from "react";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import "./ExpenseList.css";
import { ExpenseContainer } from "../ExpenseChart/ExpenseContainer";

export const ExpenseList = (props) => {
  const list = props.expenses;
  const [selectedYear, setSelectedYear] = useState("");

  const filterdExpenses = list.filter((item) => {
    return item.date.getFullYear() == selectedYear || !selectedYear;
  });

  const editHandler = (id) => {
    props.onItemEditClick(id);
  };

  const deleteHandler = (id) => {
    props.onItemDeleteClick(id);
  };

  return (
    <div>
      <select
        name="selectedYear"
        value={selectedYear}
        onChange={(event) => {
          setSelectedYear(event.target.value);
        }}
      >
        <option value="">All</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
      <ExpenseContainer
        expenses={filterdExpenses}
        yearToFilter={selectedYear}
      />
      <ul className="expenses-list">
        {filterdExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            amount={item.amount}
            id={item.id}
            onExpenseItemEditClick={(id) => editHandler(id)}
            onExpenseItemDeleteClick={(id) => deleteHandler(id)}
          />
        ))}
      </ul>
    </div>
  );
};
