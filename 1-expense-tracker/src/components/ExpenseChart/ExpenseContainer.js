import ChartBar from "./ChartBar/ChartBar";
import "./ExpenseContainer.css";

export const ExpenseContainer = (props) => {
  const expenses = props.expenses;
  //   return <h1>{props.yearToFilter}</h1>;

  const filteredYear = props.yearToFilter;
  const expensesByMonth = [
    { label: "Jan", cost: 0 },
    { label: "Feb", cost: 0 },
    { label: "Mar", cost: 0 },
    { label: "Apr", cost: 0 },
    { label: "May", cost: 0 },
    { label: "Jun", cost: 0 },
    { label: "July", cost: 0 },
    { label: "Aug", cost: 0 },
    { label: "Sep", cost: 0 },
    { label: "Oct", cost: 0 },
    { label: "Nov", cost: 0 },
    { label: "Dec", cost: 0 },
  ];

  const expensesByYear = [
    //  { label: "Jan", cost: 0 },
    //  { label: "Feb", cost: 0 },
    //  { label: "Mar", cost: 0 },
    //  { label: "Apr", cost: 0 },
    //  { label: "May", cost: 0 },
    //  { label: "Jun", cost: 0 },
    //  { label: "July", cost: 0 },
    //  { label: "Aug", cost: 0 },
    //  { label: "Sep", cost: 0 },
    //  { label: "Oct", cost: 0 },
    //  { label: "Nov", cost: 0 },
    //  { label: "Dec", cost: 0 },
  ];

  if (filteredYear) {
    var totalValue = 0;

    expenses.forEach((exp) => {
      expensesByMonth[exp.date.getMonth()].cost += parseFloat(exp.amount);
      totalValue += parseFloat(exp.amount);
    });

    return (
      <div className="chart">
        {expensesByMonth.map((item) => (
          <ChartBar key={item.label} data={item} maxValue={totalValue} />
        ))}
      </div>
    );
  } else {
    var totalValue = 0;

    expenses.forEach((exp) => {
      if (exp.date.getFullYear() in expensesByYear) {
        expensesByYear[exp.date.getFullYear()].cost += parseFloat(exp.amount);
      } else {
        expensesByYear[exp.date.getFullYear()] = {
          label: exp.date.getFullYear(),
          cost: parseFloat(exp.amount),
        };
      }
      totalValue += parseFloat(exp.amount);
    });

    return (
      <div className="chart">
        {expensesByYear.map((item) => (
          <ChartBar key={item.label} data={item} maxValue={totalValue} />
        ))}
      </div>
    );
  }
};
