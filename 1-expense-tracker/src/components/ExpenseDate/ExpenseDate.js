import './ExpenseDate.css';

export const ExpenseDate = (props) => {
    const day = props.date.getDate();
    const month = props.date.toLocaleDateString('en-us', {  month:"short"});
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <span className="expense-date__day">{day}</span>
            <span className="expense-date__year">{year}</span>
            <span className="expense-date__month">{month}</span>
        </div>
    )
}