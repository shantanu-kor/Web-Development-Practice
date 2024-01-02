import React, { useState } from "react";

import ExpenseContext from "./expenseContext";

const ExpenseProvider = (props) => {
  const [expenseList, setExpenseList] = useState([]);

  const addExpenseHandler = (expense) => {
    const newExpense = {...expense, key: Math.random().toString() };
    setExpenseList((prevState) => [newExpense, ...prevState]);
  };

  const expenseProvider = {
    expenseList: expenseList,
    addExpense: addExpenseHandler,
  };

  return (
    <ExpenseContext.Provider value={expenseProvider}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
