import { useState } from "react";
import { ExpenseItem } from "../ExpenseItem/ExpenseItem"
import './ExpenseList.css';

export const ExpenseList = (props) => {
    const list = props.expenses
    const [selectedYear , setSelectedYear] = useState(2023);

    return (
        <div>
            <select name="selectedYear" value={selectedYear} onChange={(event) => {setSelectedYear(event.target.value)}}>
                <option value="">All</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
            <ul className="expenses-list">
                {list.map(item => 
                    <ExpenseItem 
                    key={item.id}
                    date={item.date}
                    title={item.title}
                    amount={item.amount}
                    id={item.id}
                    />
                )}
            </ul>
        </div>
    )

    
}