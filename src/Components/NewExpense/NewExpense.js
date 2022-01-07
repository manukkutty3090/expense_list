import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const submitExpenseHandler = (savedExpenseData) => {
    const expenseData = { id: Math.random().toString(), ...savedExpenseData };
    props.onNewExpenseData(expenseData);
  };
  const [state, setstate] = useState(false);
  const stateHandler = () => setstate(true);
  const closeForm = () => setstate(false);
  return (
    <div className="new-expense">
      {!state && (
        <button type="button" onClick={stateHandler}>
          Create New Expense!
        </button>
      )}
      {state && (
        <ExpenseForm
          onSubmitExpense={submitExpenseHandler}
          oncloseForm={closeForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
