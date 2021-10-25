import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

//это не врапер компонента
const NewExpense = (props) => {
  //lifting up method

  const saveExpenseDataHundler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddEXpnese(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseDate={saveExpenseDataHundler} />
    </div>
  );
};

export default NewExpense;
