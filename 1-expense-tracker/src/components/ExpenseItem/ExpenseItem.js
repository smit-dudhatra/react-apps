import { ExpenseDate } from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

export const ExpenseItem = (props) => {
  const deleteHandler = (id) => {
    console.log("delete");
    console.log(id);
    props.onExpenseItemDeleteClick(id);
  };

  const editHandler = (id) => {
    console.log("edit");
    console.log(id);
    props.onExpenseItemEditClick(id);
  };

  return (
    <li className="expense-item expense-item__description">
      <ExpenseDate date={props.date} />
      {/* <div>{props.date}</div> */}
      <h2>{props.title}</h2>
      <div className="expense-item__price">$ {props.amount}</div>
      <div
        className="expense-item__price"
        onClick={() => deleteHandler(props.id)}
      >
        Delete
      </div>
      <div
        className="expense-item__price"
        onClick={() => editHandler(props.id)}
      >
        Edit
      </div>
    </li>
  );
};
