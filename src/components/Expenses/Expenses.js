import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState("2020");
  const expenses = props.items;

  function selectDateHandler(selectedDate) {
    setYear(selectedDate);
  }

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === year
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter current={year} onSelectedDate={selectDateHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </li>
  );
}

export default Expenses;
